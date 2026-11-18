const CACHE_NAME = "pc12-flightdeck-v3";
const APP_SHELL = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./manifest.webmanifest",
  "./pwa.js",
  "./icons/app-icon-192.png",
  "./icons/app-icon-512.png",
  "./icons/apple-touch-icon.png",
  "./questions/introduction.js",
  "./questions/general.js",
  "./questions/limitations.js",
  "./questions/emergency.js",
  "./questions/aircraft_systems.js",
  "./questions/handling_maintenance.js",
  "./questions/performance.js",
  "./questions/safety.js",
  "./questions/supplements.js",
  "./questions/weight_balance.js",
  "./questions/normal_operating_procedures.js",
  "./questions/reviewed_additions.js",
  "./questions/portuguese_translations.js",
  "./questions/checklist_study.js"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(names => Promise.all(names
        .filter(name => name.startsWith("pc12-flightdeck-") && name !== CACHE_NAME)
        .map(name => caches.delete(name))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== "GET" || url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then(response => {
          if (response.ok) {
            const page = new URL("./index.html", self.registration.scope);
            caches.open(CACHE_NAME).then(cache => cache.put(page, response.clone()));
          }
          return response;
        })
        .catch(async () => (await caches.match(new URL("./index.html", self.registration.scope))) || Response.error())
    );
    return;
  }

  event.respondWith((async () => {
    const saved = await caches.match(request);
    if (saved) return saved;
    try {
      const response = await fetch(request);
      if (response.ok) {
        const cache = await caches.open(CACHE_NAME);
        await cache.put(request, response.clone());
      }
      return response;
    } catch {
      return new Response("Offline and this file is not in the saved study material.", {
        status: 504,
        statusText: "Offline"
      });
    }
  })());
});
