/* MFFL service worker — app-shell cache only.
   Score data always comes from Firebase over the network (cross-origin
   requests are never intercepted). Navigations are network-first so a
   fresh deploy shows up immediately; static shell files are cache-first
   and refreshed in the background. Bump CACHE on each build. */
var CACHE = 'mffl-shell-v64';
var SHELL = [
  './',
  'css/styles.css?v=20261024d',
  'js/app.js?v=20261024d',
  'js/bg3d.js?v=20261024d',
  'js/pool.js?v=20261024d',
  'js/history.js?v=20261024d',
  'js/pool-extended.js?v=20261024d',
  'manifest.webmanifest',
  'assets/img/icon-192.png',
  'assets/img/icon-512.png',
  'assets/img/icon-maskable-512.png',
  'assets/img/apple-touch-icon.png'
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE).then(function (cache) { return cache.addAll(SHELL); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) {
        return k === CACHE ? null : caches.delete(k);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (event) {
  var url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return; /* Firebase / unpkg: passthrough */
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).then(function (res) {
        var copy = res.clone();
        caches.open(CACHE).then(function (cache) { cache.put('./', copy); });
        return res;
      }).catch(function () { return caches.match('./'); })
    );
    return;
  }
  event.respondWith(
    caches.match(event.request, { ignoreSearch: false }).then(function (hit) {
      var network = fetch(event.request).then(function (res) {
        if (res && res.ok) {
          var copy = res.clone();
          caches.open(CACHE).then(function (cache) { cache.put(event.request, copy); });
        }
        return res;
      }).catch(function () { return hit; });
      return hit || network;
    })
  );
});
