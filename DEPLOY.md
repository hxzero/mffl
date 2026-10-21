# Deploying the MFFL site

How the site moves from development to live. When the user says **"deploy"**,
follow this file exactly.

## The repos

- **hxzero/mffl-dev** (private) — development. All work lands here first.
  Prototypes live here and are never published directly.
- **hxzero/mffl** (public) — live. GitHub Pages serves this repo at
  https://mffl.richzarick.com (and hxzero.github.io/mffl/ redirects there).

Rule: `mffl` receives changes only through a deploy from `mffl-dev`.
No direct edits to `mffl`. Any emergency hotfix made in `mffl` must be copied
back into `mffl-dev` in the same session, or the next deploy will diverge.

## What "deploy" means

Promote the current state of `mffl-dev`'s `main` to `mffl`'s `main`, verify
it live, and report. Nothing else is part of a deploy: no DNS changes, no
Pages settings changes, no repo settings, no data changes. Scores and rosters
come from Firebase via the poller, which is not in either repo and is never
part of a deploy.

## Before deploying

1. `mffl-dev` `main` is the exact state to ship — no half-finished work.
2. Bump the build version in both places, to the same new value:
   the `?v=YYYYMMDD<letter>` cache-bust in `index.html` and the cache name
   in `sw.js`.
3. Only the static site tree ships: `index.html`, `css/`, `js/`, `assets/`,
   `manifest.webmanifest`, `sw.js`, `README.md`, this file. Never commit
   secrets, credentials, the poller, or any local tooling files.

## The sync rules

- **Text files** (HTML, CSS, JS, manifest, `sw.js`, Markdown): the agent
  pushes them from `mffl-dev`'s state to `mffl` through the GitHub connector
  (UTF-8 snapshot push; sync history is recorded in
  `~/workspace/mffl.muse-github-snapshot-sync.json` on the agent's machine).
- **Binary files** (everything under `assets/` — PNGs, the font): the agent
  cannot push these; the connector accepts text only. The user commits asset
  changes to `mffl-dev`, and at deploy time commits the same assets to `mffl`
  (GitHub web upload or a local git push). A deploy is not complete until
  the assets match too — the agent's report must name any assets still owed.
- **CNAME**: lives only in `mffl` (contents: `mffl.richzarick.com`). Never
  copy it to `mffl-dev`; never delete it from `mffl`. It is excluded from
  every sync, in both directions.
- **Junk files** (`.DS_Store`, editor/OS files): never committed; delete on
  sight.
- **Divergence**: if `mffl` has commits that are not in `mffl-dev`
  (a Pages-settings commit, a user hotfix), reconcile them — never
  force-push over them silently. Name any divergence in the deploy report.

## The pre-deploy sweep (blocking)

Before anything is pushed, the agent runs the sweep
(`tools/deploy-sweep.mjs` — agent-side tooling, never committed) against the
exact tree being shipped, staged from `mffl-dev`. It checks: every JS file
parses; CSS braces are balanced (one stray brace silently discards every
rule after it — the bug class that broke the display font in v34); every
local path referenced by the HTML/CSS/JS exists, with dynamically built
paths pattern-checked; the `index.html` `?v=` version and the `sw.js` cache
version match; and no credential patterns appear anywhere in the tree.

Any finding stops the deploy. The agent reports each finding with its fix
guidance and pushes nothing until the sweep passes clean — or the user
explicitly overrides a named finding, which is then named again in the
deploy report.

Deep code audits are not part of a deploy. They happen on request
("audit the site") or before major changes: the sweep is the fast
mechanical gate, the audit is the slow human-grade review.

## Deploy steps (agent)

1. Diff `mffl-dev` `main` against `mffl` `main`: list changed files and the
   build version being shipped.
2. Run the pre-deploy sweep on the staged tree. If it blocks, stop and
   report the findings — do not push.
3. Push the changed text files to `mffl` `main` as one commit:
   `Deploy <version> (from mffl-dev)`.
4. Read the pushed files back from GitHub to confirm they landed.
5. Verify live: https://mffl.richzarick.com returns 200 and serves the new
   `?v=` version; spot-check the changed CSS/JS and one image.
6. Report to the user: version, the deploy commit SHA on `mffl`, files
   changed, live-check result, and any binary assets still needing their
   push to `mffl`.

## Deploy steps (user, local alternative)

Clone both repos (or one clone with two remotes), merge `mffl-dev`'s `main`
into `mffl`'s `main`, push. Same end state: afterwards the two trees match
except `CNAME`, which exists only in `mffl`.

## Rollback

Revert the deploy commit on `mffl`, or re-run this procedure from the
previous good state of `mffl-dev`. Never rewrite published history on
`mffl` without telling the user first.
