/* MFFL 3D namewall — the private tracker's method, ported:
     - mild, offset-free extruded Delirium text (depth .075fs, bevel .06/.028fs,
       bevelSegments 14, curveSegments 14), tiled as NAME + NBSP with 10%
       letter + word tracking, rows at the tracker's fontSize/pitch formulas,
       odd rows offset half a tile.
     - geometry re-sorted into THREE material groups (lid / wall / bevel) with
       flat lid normals and smooth area-weighted wall+bevel normals; the deep
       cushion bevel is created in the bevel shader (profile normal remap
       pow(t, .72), round angle up to 1.42 x inset .66, groove AO .24, crest
       sheen + silhouette sheen .12 in the theme spec color), not in geometry.
     - theme derived from accent AND fill: face = accent +8% white; extrusion
       ramp face x [0.22, 0.29, 0.36, 0.43, 0.50] (wall = ramp[2], in-scene
       color block = ramp[4]); bevel = face x 1.05; spec = accent +85% white;
       surface = fill x 0.65 with gradient/vignette/grain surface shader.
     - lighting: overhead key (intensity 4.0, spec-colored, PCF shadows,
       bias -0.00012, normalBias 2.0) + two fills (0.35, #bdd2e6) + hemisphere
       0.55 (sky spec, ground surfaceDark). Perspective camera (84 deg) solved
       to frame w x h; ACES tone mapping, exposure 1.08; composer with a
       Bokeh DOF pass (aperture 0.0007, maxblur 0.02, focus 12px in front of
       the lid front), MSAA 4x desktop / 0 mobile, DPR cap 1.5 mobile.
       Static renders — a frame is drawn only on change or during a
       lead-change transition.
   Falls back to the flat CSS color block when WebGL is unavailable. */
(function () {
  var mount = document.getElementById('bg3d');
  var tint = document.getElementById('bg-tint');
  var fallback = document.getElementById('bg-fallback');
  var FONT_URL = 'assets/fonts/delirium.ttf'; /* user's Delirium display face, local */
  var TEXT_Z_GAP = 0.4;
  var BEVEL_INSET = 0.66;      /* tracker debug default */
  var DOF_APERTURE = 0.0007;   /* tracker debug default 42% */
  var RAMP = [0.78, 0.71, 0.64, 0.57, 0.50]; /* mix-toward-black fractions */

  /* ---------- color helpers ---------- */
  function hexToRgb(hex) {
    var n = parseInt(String(hex).replace('#', ''), 16);
    return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
  }
  function mixTo(rgb, target, f) {
    return {
      r: Math.round(rgb.r + (target.r - rgb.r) * f),
      g: Math.round(rgb.g + (target.g - rgb.g) * f),
      b: Math.round(rgb.b + (target.b - rgb.b) * f)
    };
  }
  function mixRgb(a, b, f) { return mixTo(a, b, f); }
  function shade(rgb, m) {
    return { r: Math.min(255, Math.round(rgb.r * m)), g: Math.min(255, Math.round(rgb.g * m)), b: Math.min(255, Math.round(rgb.b * m)) };
  }
  function css(rgb) { return 'rgb(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ')'; }
  function hexNum(rgb) { return (rgb.r << 16) | (rgb.g << 8) | rgb.b; }
  var WHITE = { r: 255, g: 255, b: 255 }, BLACK = { r: 0, g: 0, b: 0 };

  function themeFrom(accentCss, fillCss) {
    var accent = hexToRgb(accentCss || '#888888');
    var fill = hexToRgb(fillCss || '#444444');
    var face = mixTo(accent, WHITE, 0.08);
    var ramp = RAMP.map(function (f) { return mixTo(face, BLACK, f); });
    var surface = shade(fill, 0.65);
    return {
      face: face,
      wall: ramp[2],                 /* face x 0.36 */
      block: ramp[4],                /* face x 0.50 */
      bevel: shade(face, 1.05),
      spec: mixTo(accent, WHITE, 0.85),
      surface: surface,
      surfaceLight: mixTo(surface, WHITE, 0.14),
      surfaceDark: mixTo(surface, BLACK, 0.30),
      shadow: shade(surface, 0.45)
    };
  }

  var api = {
    ready: false,
    setLeader: function (name, accentCss, fillCss) {
      var theme = themeFrom(accentCss, fillCss);
      tint.style.backgroundColor = css(theme.block);
      fallback.style.backgroundColor = css(theme.block);
      if (api._apply) api._apply(name, theme);
      else api._pending = { name: name, theme: theme };
    },
    prewarm: function (names) {
      if (api._prewarm) { api._prewarm(names); return; }
      if (!api._prewarmPending) api._prewarmPending = [];
      (names || []).forEach(function (n) {
        if (n && api._prewarmPending.indexOf(n) === -1) api._prewarmPending.push(n);
      });
    }
  };
  window.mfflBg = api;

  function fail() { mount.classList.add('failed'); }

  async function boot() {
    try {
      var three = await import('three');
      var TT = await import('three/addons/loaders/TTFLoader.js');
      var FL = await import('three/addons/loaders/FontLoader.js');
      var BU = await import('three/addons/utils/BufferGeometryUtils.js');
      var EC = await import('three/addons/postprocessing/EffectComposer.js');
      var RP = await import('three/addons/postprocessing/RenderPass.js');
      var BP = await import('three/addons/postprocessing/BokehPass.js');
      var OP = await import('three/addons/postprocessing/OutputPass.js');

      var viewW = window.innerWidth, viewH = window.innerHeight;
      var coarse = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
      var mobile = coarse || viewW < 820;
      var profile = {
        samples: mobile ? 0 : 4,
        dpr: mobile ? Math.min(window.devicePixelRatio || 1, 1.5) : Math.min(window.devicePixelRatio || 1, 2),
        shadow: mobile ? (viewW < 560 ? 0 : 1024) : 2048
      };

      var renderer;
      try {
        renderer = new three.WebGLRenderer({ antialias: true, alpha: false });
      } catch (e) { fail(); return; }
      if (!renderer.getContext()) { fail(); return; }
      renderer.setPixelRatio(profile.dpr);
      renderer.setSize(viewW, viewH);
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = three.PCFShadowMap;
      renderer.toneMapping = three.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.08;
      mount.appendChild(renderer.domElement);
      var canvas = renderer.domElement;
      canvas.style.opacity = '0';

      var scene = new three.Scene();
      var camera = null;
      function frameCamera() {
        var dist = (viewH / 2) / Math.tan(three.MathUtils.degToRad(42));
        camera = new three.PerspectiveCamera(84, viewW / viewH, 0.1, 6000);
        camera.position.set(0, 0, dist);
        camera.lookAt(0, 0, 0);
        return dist;
      }
      var camDist = frameCamera();

      /* ---------- materials ---------- */
      var faceMat = new three.MeshStandardMaterial({ color: 0xffffff, metalness: 0.5, roughness: 0.42, transparent: true });
      faceMat.onBeforeCompile = function (shader) {
        shader.vertexShader = shader.vertexShader
          .replace('#include <common>', '#include <common>\nvarying vec3 vLocalPos;')
          .replace('#include <begin_vertex>', '#include <begin_vertex>\nvLocalPos = position;');
        shader.fragmentShader = shader.fragmentShader
          .replace('#include <common>', '#include <common>\nvarying vec3 vLocalPos;\nuniform float uCushionReach;')
          .replace('#include <map_fragment>', [
            '#include <map_fragment>',
            /* brushed-metal streaks: fine horizontal banding modulating albedo */
            'float streakF = fract(sin(dot(vec2(floor(vLocalPos.y * 5.0), floor(vLocalPos.x * 0.35)), vec2(12.9898, 78.233))) * 43758.5453);',
            'float streakBand = sin(vLocalPos.y * 2.2 + sin(vLocalPos.x * 0.30) * 3.0) * 0.5 + 0.5;',
            'diffuseColor.rgb *= 0.96 + 0.05 * streakBand + 0.04 * (streakF - 0.5);',
            /* inner-cushion zone (edge-distance field) — hook present, reach 0 = off, as shipped */
            'diffuseColor.rgb *= 1.0 + uCushionReach * 0.0;'
          ].join('\n'))
          .replace('#include <roughnessmap_fragment>', '#include <roughnessmap_fragment>\nroughnessFactor = clamp(roughnessFactor + (streakF - 0.5) * 0.10, 0.05, 1.0);');
        shader.uniforms.uCushionReach = { value: 0.0 };
      };
      faceMat.customProgramCacheKey = function () { return 'mffl-face'; };

      var wallMat = new three.MeshStandardMaterial({ color: 0xffffff, metalness: 0.45, roughness: 0.58, transparent: true });

      var bevelMat = new three.MeshPhysicalMaterial({
        color: 0xffffff, metalness: 0.5, roughness: 0.38,
        clearcoat: 0.5, clearcoatRoughness: 0.35, transparent: true
      });
      bevelMat.onBeforeCompile = function (shader) {
        shader.uniforms.uSpecColor = bevelMat.userData.uSpecColor;
        shader.uniforms.uKeyDirV = bevelMat.userData.uKeyDirV;
        shader.uniforms.uBevelInset = { value: BEVEL_INSET };
        shader.vertexShader = ('attribute float aBevelT;\nvarying float vBevelT;\n' + shader.vertexShader)
          .replace('#include <begin_vertex>', '#include <begin_vertex>\nvBevelT = aBevelT;');
        shader.fragmentShader = ('varying float vBevelT;\nuniform vec3 uSpecColor;\nuniform vec3 uKeyDirV;\nuniform float uBevelInset;\n' + shader.fragmentShader)
          .replace('#include <map_fragment>', [
            '#include <map_fragment>',
            /* recessed groove shadow near the wall shoulder (t -> 0) */
            'diffuseColor.rgb *= 1.0 - 0.24 * pow(1.0 - clamp(vBevelT, 0.0, 1.0), 2.0);'
          ].join('\n'))
          .replace('#include <normal_fragment_begin>', [
            '#include <normal_fragment_begin>',
            /* cushion profile: rotate the bevel normal toward the face normal
               by up to 1.42 rad x inset, following pow(t, 0.72) + smoothstep */
            '{',
            '  float btT = clamp(vBevelT, 0.0, 1.0);',
            '  float prof = smoothstep(0.0, 1.0, pow(btT, 0.72));',
            '  float ang = 1.42 * uBevelInset * prof;',
            '  vec3 faceNV = vec3(0.0, 0.0, 1.0);',
            '  float curA = acos(clamp(dot(normal, faceNV), -1.0, 1.0));',
            '  float dA = min(ang, curA);',
            '  if (dA > 0.0001) {',
            '    vec3 ax = cross(faceNV, normal);',
            '    float axL = length(ax);',
            '    if (axL > 0.0001) {',
            '      ax /= axL;',
            '      normal = normalize(normal * cos(dA) + cross(ax, normal) * sin(dA) + ax * dot(ax, normal) * (1.0 - cos(dA)));',
            '    }',
            '  }',
            '}'
          ].join('\n'))
          .replace('#include <lights_fragment_end>', [
            '#include <lights_fragment_end>',
            /* crest sheen near the lid edge + grazing silhouette sheen, spec color */
            '{',
            '  vec3 viewDirB = normalize(vViewPosition);',
            '  float btT2 = clamp(vBevelT, 0.0, 1.0);',
            '  float crest = smoothstep(0.55, 1.0, btT2) * pow(max(dot(reflect(-uKeyDirV, normal), viewDirB), 0.0), 24.0);',
            '  float silh = pow(1.0 - abs(dot(normal, viewDirB)), 3.0);',
            '  reflectedLight.directSpecular += uSpecColor * (crest * 0.6 + silh * 0.12);',
            '}'
          ].join('\n'));
      };
      bevelMat.customProgramCacheKey = function () { return 'mffl-bevel'; };
      bevelMat.userData.uSpecColor = { value: new three.Color(0xffffff) };
      bevelMat.userData.uKeyDirV = { value: new three.Vector3(0, 1, 0.12).normalize() };

      var surfaceMat = new three.MeshStandardMaterial({ color: 0xffffff, metalness: 0.0, roughness: 1.0 });
      surfaceMat.onBeforeCompile = function (shader) {
        shader.uniforms.uSurfLight = surfaceMat.userData.uSurfLight;
        shader.uniforms.uSurfDark = surfaceMat.userData.uSurfDark;
        shader.uniforms.uSurfSize = surfaceMat.userData.uSurfSize;
        shader.vertexShader = shader.vertexShader
          .replace('#include <common>', '#include <common>\nvarying vec3 vLocalPosS;')
          .replace('#include <begin_vertex>', '#include <begin_vertex>\nvLocalPosS = position;');
        shader.fragmentShader = ('varying vec3 vLocalPosS;\nuniform vec3 uSurfLight;\nuniform vec3 uSurfDark;\nuniform vec2 uSurfSize;\n' + shader.fragmentShader)
          .replace('#include <map_fragment>', [
            '#include <map_fragment>',
            '{',
            '  vec2 suv = vLocalPosS.xy / uSurfSize;',
            '  float diag = clamp(suv.x + suv.y + 0.5, 0.0, 1.0);',
            '  vec3 sbase = mix(uSurfDark, uSurfLight, diag);',
            '  float vig = smoothstep(1.05, 0.30, length(suv * vec2(1.0, 1.25)) * 1.35);',
            '  float grain = fract(sin(dot(floor(vLocalPosS.xy * 2.0), vec2(12.9898, 78.233))) * 43758.5453);',
            '  diffuseColor.rgb = sbase * (0.80 + 0.20 * vig) + (grain - 0.5) * 0.03;',
            '}'
          ].join('\n'));
      };
      surfaceMat.customProgramCacheKey = function () { return 'mffl-surface'; };
      surfaceMat.userData.uSurfLight = { value: new three.Color(0x222222) };
      surfaceMat.userData.uSurfDark = { value: new three.Color(0x111111) };
      surfaceMat.userData.uSurfSize = { value: new three.Vector2(viewW, viewH) };

      var blockMat = new three.MeshStandardMaterial({ color: 0x333333, metalness: 0.0, roughness: 0.95 });
      var blockTwinMat = new three.MeshStandardMaterial({ color: 0x333333, metalness: 0.0, roughness: 0.95, transparent: true, opacity: 0, depthWrite: false });

      /* ---------- lights ---------- */
      var key = new three.DirectionalLight(0xffffff, 4.0);
      key.castShadow = profile.shadow > 0;
      key.shadow.bias = -0.00012;
      key.shadow.normalBias = 2.0;
      if (profile.shadow > 0) key.shadow.mapSize.set(profile.shadow, profile.shadow);
      scene.add(key); scene.add(key.target);
      var fillL = new three.DirectionalLight(0xbdd2e6, 0.35);
      var fillR = new three.DirectionalLight(0xbdd2e6, 0.35);
      scene.add(fillL); scene.add(fillR);
      var hemi = new three.HemisphereLight(0xffffff, 0x111111, 0.55);
      scene.add(hemi);

      function layoutLights() {
        key.position.set(0, 2 * viewH, 0.25 * viewH);
        key.target.position.set(0, 0, 0);
        var diag = Math.sqrt(viewW * viewW + viewH * viewH) / 2 * 1.4;
        var sc = key.shadow.camera;
        sc.left = -diag; sc.right = diag; sc.top = diag; sc.bottom = -diag;
        sc.near = 1; sc.far = viewH * 5 + 600;
        sc.updateProjectionMatrix();
        fillL.position.set(-1.6 * viewW, 0, 1000);
        fillR.position.set(1.6 * viewW, 0, 1000);
        bevelMat.userData.uKeyDirV.value.set(0, 2 * viewH, 0.25 * viewH).normalize();
      }

      /* ---------- backdrop planes ---------- */
      var surfacePlane = new three.Mesh(new three.PlaneGeometry(1, 1), surfaceMat);
      surfacePlane.position.z = -25;
      surfacePlane.receiveShadow = true;
      scene.add(surfacePlane);
      var blockPlane = new three.Mesh(new three.PlaneGeometry(1, 1), blockMat);
      blockPlane.position.z = 0;
      blockPlane.receiveShadow = true;
      scene.add(blockPlane);
      var blockTwin = new three.Mesh(new three.PlaneGeometry(1, 1), blockTwinMat);
      blockTwin.position.z = 0.2;
      blockTwin.receiveShadow = true;
      scene.add(blockTwin);

      function layoutPlanes() {
        surfacePlane.scale.set(viewW * 1.45, viewH * 1.45, 1);
        blockPlane.scale.set(viewW * 1.12, viewH * 1.12, 1);
        blockTwin.scale.set(viewW * 1.12, viewH * 1.12, 1);
        surfaceMat.userData.uSurfSize.value.set(viewW, viewH);
      }

      /* ---------- composer (DOF) ---------- */
      var rt = new three.WebGLRenderTarget(viewW, viewH, { type: three.HalfFloatType, samples: profile.samples });
      var composer = new EC.EffectComposer(renderer, rt);
      composer.setPixelRatio(profile.dpr);
      composer.addPass(new RP.RenderPass(scene, camera));
      var bokeh = new BP.BokehPass(scene, camera, { focus: camDist - 40, aperture: DOF_APERTURE, maxblur: 0.02 });
      composer.addPass(bokeh);
      composer.addPass(new OP.OutputPass());

      function render() { composer.render(); }

      /* ---------- font + tile building ---------- */
      var loader = new TT.TTFLoader();
      var fontData = await new Promise(function (res, rej) {
        loader.load(FONT_URL, res, undefined, rej);
      });
      var font = new FL.Font(fontData); /* TTFLoader returns raw typeface data */
      /* TTFLoader scales outlines/advances to 100000/72 units per em but
         reports resolution: 1000; correct it to the loader's true units per
         em so the fontSize / row-pitch formulas produce the designed
         spacing (the tracker's embedded typeface JSON uses 2048/em). */
      fontData.resolution = 100000 / 72;

      function glyphAdvance(ch, scale) {
        var g = font.data.glyphs[ch] || font.data.glyphs['?'] || font.data.glyphs[' '];
        return g && typeof g.ha === 'number' ? g.ha * scale : 0;
      }
      function glyphMinX(ch, scale) {
        var g = font.data.glyphs[ch] || font.data.glyphs['?'] || font.data.glyphs[' '];
        return g && typeof g.x_min === 'number' ? g.x_min * scale : 0;
      }
      function glyphMaxX(ch, scale) {
        var g = font.data.glyphs[ch] || font.data.glyphs['?'] || font.data.glyphs[' '];
        return g && typeof g.x_max === 'number' ? g.x_max * scale : 0;
      }

      /* Re-sort one glyph's extruded geometry into lid / wall / bevel parts.
         ExtrudeGeometry emits group 0 = lids, group 1 = side strip; inside
         the strip, bevel triangles are exactly those whose z-range sits in
         a bevel band ([-bt, 0] back, [depth, depth+bt] front) while wall
         triangles span the full straight section [0, depth]. Normals:
         flat on lids, smooth area-weighted across wall + bevel (welded by
         position). Also bakes aBevelT: the profile parameter across the
         bevel band (0 at the wall shoulder, 1 at the lid edge). */
      function splitGlyph(geo, depth, bt) {
        var pos = geo.getAttribute('position');
        var lidEnd = (geo.groups && geo.groups.length) ? geo.groups[0].start + geo.groups[0].count : 0;
        var parts = { lid: [], wall: [], bevel: [] };
        var triCount = pos.count / 3;
        for (var t = 0; t < triCount; t++) {
          var i0 = t * 3;
          var kind;
          if (i0 < lidEnd) kind = 'lid';
          else {
            var z0 = pos.getZ(i0), z1 = pos.getZ(i0 + 1), z2 = pos.getZ(i0 + 2);
            var zmin = Math.min(z0, z1, z2), zmax = Math.max(z0, z1, z2);
            kind = (zmax <= 0.001 || zmin >= depth - 0.001) ? 'bevel' : 'wall';
          }
          parts[kind].push(t);
        }
        function buildPart(kind, tris, smoothWith) {
          var n = tris.length * 3;
          var p = new Float32Array(n * 3);
          var tt = new Float32Array(n);
          for (var k = 0; k < tris.length; k++) {
            for (var v = 0; v < 3; v++) {
              var src = tris[k] * 3 + v, dst = k * 3 + v;
              p[dst * 3] = pos.getX(src); p[dst * 3 + 1] = pos.getY(src); p[dst * 3 + 2] = pos.getZ(src);
              if (kind === 'bevel') {
                var z = pos.getZ(src);
                tt[dst] = z <= 0 ? Math.min(1, -z / bt) : Math.min(1, Math.max(0, (z - depth) / bt));
              }
            }
          }
          var g = new three.BufferGeometry();
          g.setAttribute('position', new three.BufferAttribute(p, 3));
          g.setAttribute('aBevelT', new three.BufferAttribute(tt, 1));
          return g;
        }
        var out = {
          lid: buildPart('lid', parts.lid),
          wall: buildPart('wall', parts.wall),
          bevel: buildPart('bevel', parts.bevel)
        };
        /* normals */
        function flatNormals(g) {
          var p = g.getAttribute('position'), n = p.count;
          var norm = new Float32Array(n * 3);
          for (var t = 0; t < n; t += 3) {
            var ax = p.getX(t), ay = p.getY(t), az = p.getZ(t);
            var bx = p.getX(t + 1), by = p.getY(t + 1), bz = p.getZ(t + 1);
            var cx = p.getX(t + 2), cy = p.getY(t + 2), cz = p.getZ(t + 2);
            var ux = bx - ax, uy = by - ay, uz = bz - az;
            var vx = cx - ax, vy = cy - ay, vz = cz - az;
            var nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
            var l = Math.sqrt(nx * nx + ny * ny + nz * nz) || 1;
            for (var v = 0; v < 3; v++) { norm[(t + v) * 3] = nx / l; norm[(t + v) * 3 + 1] = ny / l; norm[(t + v) * 3 + 2] = nz / l; }
          }
          g.setAttribute('normal', new three.BufferAttribute(norm, 3));
        }
        flatNormals(out.lid);
        /* smooth, area-weighted, welded across wall + bevel */
        var acc = new Map();
        function accum(g) {
          var p = g.getAttribute('position');
          for (var t = 0; t < p.count; t += 3) {
            var ax = p.getX(t), ay = p.getY(t), az = p.getZ(t);
            var bx = p.getX(t + 1), by = p.getY(t + 1), bz = p.getZ(t + 1);
            var cx = p.getX(t + 2), cy = p.getY(t + 2), cz = p.getZ(t + 2);
            var nx = (by - ay) * (cz - az) - (bz - az) * (cy - ay);
            var ny = (bz - az) * (cx - ax) - (bx - ax) * (cz - az);
            var nz = (bx - ax) * (cy - ay) - (by - ay) * (cx - ax);
            var verts = [[ax, ay, az], [bx, by, bz], [cx, cy, cz]];
            for (var v = 0; v < 3; v++) {
              var key = verts[v][0].toFixed(2) + ',' + verts[v][1].toFixed(2) + ',' + verts[v][2].toFixed(2);
              var e = acc.get(key);
              if (!e) { e = [0, 0, 0]; acc.set(key, e); }
              e[0] += nx; e[1] += ny; e[2] += nz;
            }
          }
        }
        accum(out.wall); accum(out.bevel);
        function applySmooth(g) {
          var p = g.getAttribute('position'), n = p.count;
          var norm = new Float32Array(n * 3);
          for (var i = 0; i < n; i++) {
            var key = p.getX(i).toFixed(2) + ',' + p.getY(i).toFixed(2) + ',' + p.getZ(i).toFixed(2);
            var e = acc.get(key) || [0, 0, 1];
            var l = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]) || 1;
            norm[i * 3] = e[0] / l; norm[i * 3 + 1] = e[1] / l; norm[i * 3 + 2] = e[2] / l;
          }
          g.setAttribute('normal', new three.BufferAttribute(norm, 3));
        }
        applySmooth(out.wall); applySmooth(out.bevel);
        return out;
      }

      /* Build one word tile: per-glyph extruded shapes with 10% tracking.
         Returns { geo, advance } where advance is set by measurement so
         the seam between repetitions matches the letter spacing inside
         the name: targetGap is the average internal ink-to-ink gap
         (origin_{i+1} - (origin_i + maxX_i), maxX from the glyph's
         x_max in the same font metrics as `ha`), and advance is the
         tile's total ink extent (first ink edge to last ink edge) plus
         targetGap — so the boundary ink gap (advance + minX_first -
         (origin_last + maxX_last)) equals targetGap exactly. Bevel
         expands every glyph symmetrically, so outline gaps rank and
         size identically to rendered gaps. */
      function buildTile(name, fontSize) {
        var scale = fontSize / font.data.resolution;
        var tracking = 0.10 * fontSize;
        var depth = 0.075 * fontSize;
        var bt = 0.06 * fontSize;
        var extrude = {
          depth: depth, bevelEnabled: true,
          bevelThickness: bt, bevelSize: 0.028 * fontSize, bevelOffset: 0,
          bevelSegments: 14, curveSegments: 14, steps: 1
        };
        var text = name.toUpperCase();
        var lids = [], walls = [], bevels = [];
        var cursor = 0;
        var origins = [], maxXs = [], minXFirst = null;
        for (var i = 0; i < text.length; i++) {
          var ch = text.charAt(i);
          var shapes = font.generateShapes(ch, fontSize);
          if (shapes && shapes.length) {
            var g = new three.ExtrudeGeometry(shapes, extrude);
            var parts = splitGlyph(g, depth, bt);
            ['lid', 'wall', 'bevel'].forEach(function (kind) {
              parts[kind].translate(cursor, 0, 0);
            });
            lids.push(parts.lid); walls.push(parts.wall); bevels.push(parts.bevel);
            g.dispose();
            origins.push(cursor);
            maxXs.push(glyphMaxX(ch, scale));
            if (minXFirst === null) minXFirst = glyphMinX(ch, scale);
          }
          cursor += glyphAdvance(ch, scale) + tracking;
        }
        if (!lids.length) return null;
        var advance = cursor;
        if (origins.length >= 2 && minXFirst !== null) {
          var gapSum = 0;
          for (var gi = 0; gi < origins.length - 1; gi++) {
            gapSum += origins[gi + 1] - (origins[gi] + maxXs[gi]);
          }
          var targetGap = gapSum / (origins.length - 1);
          var inkExtent = (origins[origins.length - 1] + maxXs[maxXs.length - 1]) - minXFirst;
          var boundaryGapFactor = 1.15;
          if (targetGap > 0) advance = inkExtent + targetGap * boundaryGapFactor;
        }
        var lidMerged = BU.mergeGeometries(lids, false);
        var wallMerged = BU.mergeGeometries(walls, false);
        var bevelMerged = BU.mergeGeometries(bevels, false);
        if (!lidMerged || !wallMerged || !bevelMerged) return null;
        var tile = BU.mergeGeometries([lidMerged, wallMerged, bevelMerged], true);
        lids.forEach(function (g) { g.dispose(); });
        walls.forEach(function (g) { g.dispose(); });
        bevels.forEach(function (g) { g.dispose(); });
        if (!tile) return null;
        tile.computeBoundingBox();
        var bb = tile.boundingBox;
        var cy = (bb.max.y + bb.min.y) / 2;
        tile.translate(0, -cy, TEXT_Z_GAP + bt);
        tile.computeBoundingBox();
        return { geo: tile, advance: advance, lidFront: tile.boundingBox.max.z };
      }

      function layoutWall(name) {
        var w = viewW, h = viewH;
        var fontSize = Math.min(220, Math.max(88, h / 5.6)) * 0.94 + 10;
        var rowHeight = Math.min(200, Math.max(70, h / 6.8)) * 1.1;
        var rowCount = Math.ceil(h / rowHeight) + 2;

        var built = buildTile(name, fontSize);
        if (!built) return null;
        var advance = built.advance;

        var maxTravel = Math.min(advance * 0.20, viewW * 0.12);
        var counts = [];
        for (var row = 0; row < rowCount; row++) {
          var shift = row % 2 === 0 ? 0 : advance / 2;
          var coverReps = Math.ceil((w + shift) / advance);
          var reps = Math.ceil(((w + shift) + 2 * maxTravel) / advance);
          if (reps < coverReps) reps = coverReps;
          var totalSlack = reps * advance - (w + shift);
          counts.push({ shift: shift, reps: reps, totalSlack: totalSlack });
        }
        /* Row-parity meshes: two InstancedMeshes sharing ONE geometry.
           Even rows in one mesh, odd rows in the other, so the slide is
           a pair of position.x writes instead of rewriting every
           instance matrix per frame. Matrices are computed ONCE here. */
        var evenInstances = [];
        var oddInstances = [];
        var instances = [];
        for (var r2 = 0; r2 < rowCount; r2++) {
          var y = h / 2 - r2 * rowHeight;
          for (var k = 0; k < counts[r2].reps; k++) {
            var x = -w / 2 - counts[r2].shift - counts[r2].totalSlack / 2 + k * advance;
            var inst = { x: x, y: y, row: r2 };
            instances.push(inst);
            if (r2 % 2 === 0) evenInstances.push(inst);
            else oddInstances.push(inst);
          }
        }
        var group = new three.Group();
        var m4 = new three.Matrix4();
        function buildParityMesh(list) {
          var im = new three.InstancedMesh(built.geo, [faceMat, wallMat, bevelMat], list.length);
          im.castShadow = true;
          im.frustumCulled = false; /* instances span the screen */
          for (var i = 0; i < list.length; i++) {
            m4.makeTranslation(list[i].x, list[i].y, 0);
            im.setMatrixAt(i, m4);
          }
          if (im.instanceMatrix) im.instanceMatrix.needsUpdate = true;
          return im;
        }
        var evenMesh = buildParityMesh(evenInstances);
        var oddMesh = buildParityMesh(oddInstances);
        group.add(evenMesh);
        group.add(oddMesh);
        return { mesh: group, geo: built.geo, evenMesh: evenMesh, oddMesh: oddMesh, name: name, lidFront: built.lidFront, advance: advance, instances: instances };
      }

      /* Wall cache: walls are built once per name (per viewport size)
         and reused — a swap does zero geometry work when cached. */
      var wallCache = {};
      function getWall(name) {
        if (wallCache[name]) return wallCache[name];
        var builtWall = layoutWall(name);
        if (builtWall) wallCache[name] = builtWall;
        return builtWall;
      }

      function setRowSlide(wallObj, dist) {
        /* O(1): even rows +dist, odd rows -dist via mesh positions.
           No instance-matrix writes after build. */
        if (!wallObj || !wallObj.evenMesh || !wallObj.oddMesh) return;
        wallObj.evenMesh.position.x = dist;
        wallObj.oddMesh.position.x = -dist;
      }
      function slideDist(wallObj) { return Math.min(wallObj.advance * 0.20, viewW * 0.12); }
      function easeInSlide(p) { return Math.pow(p, 1.5); }
      function easeOutSlide(p) { return 1 - Math.pow(1 - p, 1.5); }

      /* ---------- theme application + transitions ---------- */
      var wall = null;
      var wallAnim = null;
      var currentTheme = null;
      var rafId = null;

      /* Idle prewarm: build each named wall into the cache, ONE per
         idle tick, skipping cached names and the displayed wall. */
      var prewarmQueue = [];
      var prewarmScheduled = false;
      function schedulePrewarmTick() {
        if (prewarmScheduled) return;
        if (!prewarmQueue.length) return;
        prewarmScheduled = true;
        var tick = function () {
          prewarmScheduled = false;
          while (prewarmQueue.length) {
            var n = prewarmQueue.shift();
            if (wallCache[n]) continue;
            if (wall && wall.name === n) continue;
            getWall(n);
            break;
          }
          if (prewarmQueue.length) schedulePrewarmTick();
        };
        if (typeof requestIdleCallback === 'function') requestIdleCallback(tick, { timeout: 1000 });
        else setTimeout(tick, 250);
      }
      function queuePrewarm(names) {
        if (!names) return;
        names.forEach(function (n) {
          if (!n) return;
          if (wallCache[n]) return;
          if (wall && wall.name === n) return;
          if (prewarmQueue.indexOf(n) === -1) prewarmQueue.push(n);
        });
        schedulePrewarmTick();
      }
      api._prewarm = queuePrewarm;

      function setWallOpacity(o) {
        faceMat.opacity = o; wallMat.opacity = o; bevelMat.opacity = o;
      }
      function animate(dur, step, done) {
        if (rafId) cancelAnimationFrame(rafId);
        var t0 = performance.now();
        function frame(now) {
          var p = Math.min(1, (now - t0) / dur);
          step(p);
          render();
          if (p < 1) rafId = requestAnimationFrame(frame);
          else { rafId = null; if (done) done(); }
        }
        rafId = requestAnimationFrame(frame);
      }

      function applyTheme(theme) {
        currentTheme = theme;
        faceMat.color.setHex(hexNum(theme.face));
        wallMat.color.setHex(hexNum(theme.wall));
        bevelMat.color.setHex(hexNum(theme.bevel));
        bevelMat.userData.uSpecColor.value.setHex(hexNum(theme.spec));
        key.color.setHex(hexNum(theme.spec));
        hemi.color.setHex(hexNum(theme.spec));
        hemi.groundColor.setHex(hexNum(theme.surfaceDark));
        blockMat.color.setHex(hexNum(theme.block));
        surfaceMat.userData.uSurfLight.value.setHex(hexNum(theme.surfaceLight));
        surfaceMat.userData.uSurfDark.value.setHex(hexNum(theme.surfaceDark));
        if (wall) bokeh.uniforms['focus'].value = camDist - (wall.lidFront + 12);
      }

      api._apply = function (name, theme) {
        if (!wall) {
          var first = getWall(name);
          if (!first) return;
          wall = first;
          scene.add(first.mesh);
          applyTheme(theme);
          setWallOpacity(0);
          render();
          canvas.style.opacity = '1';
          wallAnim = { name: name };
          animate(450, function (p) { setWallOpacity(p); }, function () { wallAnim = null; });
          return;
        }
        if (wallAnim) {
          if (wallAnim.name === name) return; /* already heading there */
          /* a newer leader mid-transition: cancel the running chain and
             jump-cut to the newest wall at opacity 0, then run only the
             entry phase — a stale chain never gets to swap late or
             restart the fade over the new text */
          if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
          var stale = wall;
          scene.remove(stale.mesh);
          wall = null;
          wallAnim = null;
          var jump = getWall(name);
          if (!jump) return;
          wall = jump;
          scene.add(jump.mesh);
          applyTheme(theme);
          blockTwinMat.color.setHex(hexNum(theme.block));
          blockTwinMat.opacity = 0;
          setWallOpacity(0);
          var jDist = slideDist(jump);
          setRowSlide(jump, -jDist);
          wallAnim = { name: name };
          animate(600, function (p) {
            var q = Math.min(1, p / 0.7);
            setRowSlide(jump, -jDist * (1 - easeOutSlide(p)));
            setWallOpacity(q);
          }, function () { wallAnim = null; });
          return;
        }
        if (wall.name === name) { applyTheme(theme); render(); return; }
        /* lead change: text fades out -> swaps -> fades in; the color block
           cross-fades in-scene through its twin plane */
        wallAnim = { name: name };
        var old = wall;
        blockTwinMat.color.setHex(hexNum(theme.block));
        var outDist = slideDist(old);
        animate(600, function (p) {
          var q = Math.min(1, p / 0.7);
          setRowSlide(old, outDist * easeInSlide(p));
          setWallOpacity(1 - q);
          blockTwinMat.opacity = q;
        }, function () {
          scene.remove(old.mesh);
          var next = getWall(name);
          if (!next) { wallAnim = null; return; }
          wall = next;
          scene.add(next.mesh);
          applyTheme(theme);
          blockTwinMat.opacity = 0;
          setWallOpacity(0);
          var inDist = slideDist(next);
          setRowSlide(next, -inDist);
          animate(600, function (p) {
            var q = Math.min(1, p / 0.7);
            setRowSlide(next, -inDist * (1 - easeOutSlide(p)));
            setWallOpacity(q);
          }, function () { wallAnim = null; });
        });
      };

      /* ---------- resize (tracker guard: mobile URL-bar show/hide must not
         rebuild the wall; only width changes or real height growth) ---------- */
      var resizeTimer = null;
      window.addEventListener('resize', function () {
        var w = window.innerWidth, h = window.innerHeight;
        var widthChanged = w !== viewW;
        var grew = h > viewH + 40;
        if (!widthChanged && !grew) return;
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
          viewW = window.innerWidth;
          if (widthChanged || window.innerHeight > viewH) viewH = window.innerHeight;
          renderer.setSize(viewW, viewH);
          composer.setSize(viewW, viewH);
          camera.aspect = viewW / viewH;
          camera.position.set(0, 0, (viewH / 2) / Math.tan(three.MathUtils.degToRad(42)));
          camDist = camera.position.z;
          camera.updateProjectionMatrix();
          layoutLights();
          layoutPlanes();
          /* layout depends on viewport: dispose every cached wall */
          var curName = wall ? wall.name : null;
          if (wall) scene.remove(wall.mesh);
          Object.keys(wallCache).forEach(function (k) {
            var cw = wallCache[k];
            if (cw && cw.geo) cw.geo.dispose();
          });
          wallCache = {};
          prewarmQueue = [];
          wall = null;
          if (curName) {
            var next = getWall(curName);
            if (next) {
              wall = next;
              scene.add(next.mesh);
              if (currentTheme) applyTheme(currentTheme);
            }
          }
          render();
        }, 180);
      });

      layoutLights();
      layoutPlanes();
      api.ready = true;
      if (api._pending) { api._apply(api._pending.name, api._pending.theme); api._pending = null; }
      else render();
      if (api._prewarmPending && api._prewarmPending.length) {
        var pendingPrewarm = api._prewarmPending.slice();
        api._prewarmPending = null;
        queuePrewarm(pendingPrewarm);
      }
    } catch (e) {
      fail();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
