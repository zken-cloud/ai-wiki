/* AI Wiki service worker.
 *
 * Strategy, chosen for a site whose content changes once a day:
 *   - navigations  : network-first, fall back to cache (then to the shell)
 *                    -> you always get today's brief when online, and
 *                       yesterday's when you are on a train with no signal.
 *   - static assets: cache-first (hashed filenames, safe to keep)
 *   - data/*.json  : network-first, cached for offline reads
 *
 * Bump CACHE_VERSION to force every client to re-fetch the shell.
 */

const CACHE_VERSION = "v3";
const SHELL_CACHE = `aiwiki-shell-${CACHE_VERSION}`;
const RUNTIME_CACHE = `aiwiki-runtime-${CACHE_VERSION}`;
const BASE = new URL(self.registration.scope).pathname; // "/ai-wiki/"

const SHELL = [
  BASE,
  `${BASE}models/`,
  `${BASE}manifest.webmanifest`,
  `${BASE}assets/icon-192.png`,
  `${BASE}assets/icon-512.png`,
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(SHELL_CACHE)
      // Individually, so one 404 cannot fail the whole install.
      .then((cache) =>
        Promise.allSettled(SHELL.map((url) => cache.add(url)))
      )
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((k) => k.startsWith("aiwiki-") && !k.endsWith(CACHE_VERSION))
            .map((k) => caches.delete(k))
        )
      )
      .then(() => self.clients.claim())
  );
});

function isStaticAsset(url) {
  return /\.(css|js|woff2?|ttf|png|svg|jpg|jpeg|webp|ico)$/i.test(url.pathname);
}

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // never touch third-party
  if (!url.pathname.startsWith(BASE)) return;

  // HTML navigations: fresh if possible, cached if not.
  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(RUNTIME_CACHE).then((c) => c.put(req, copy));
          return res;
        })
        .catch(() =>
          caches
            .match(req)
            .then((hit) => hit || caches.match(BASE))
        )
    );
    return;
  }

  // Static assets: cache-first.
  if (isStaticAsset(url)) {
    event.respondWith(
      caches.match(req).then(
        (hit) =>
          hit ||
          fetch(req).then((res) => {
            const copy = res.clone();
            caches.open(RUNTIME_CACHE).then((c) => c.put(req, copy));
            return res;
          })
      )
    );
    return;
  }

  // Search index and JSON data: prefer network, keep a copy for offline.
  if (url.pathname.endsWith(".json")) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(RUNTIME_CACHE).then((c) => c.put(req, copy));
          return res;
        })
        .catch(() => caches.match(req))
    );
  }
});
