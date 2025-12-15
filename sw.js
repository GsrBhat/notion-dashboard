const CACHE_NAME = "rahul-planner-v2";

self.addEventListener("install", (event) => {
  self.skipWaiting(); // Activate immediately
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key); // Delete old caches
          }
        })
      )
    )
  );
  self.clients.claim(); // Take control immediately
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
