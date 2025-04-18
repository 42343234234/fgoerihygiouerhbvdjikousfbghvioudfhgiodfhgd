const cacheName = "pobywatel-v1";
const filesToCache = [
  "/",
  "/index.html",
  "/card.html",
  "/assets/index.css",
  "/assets/card.css",
  "/assets/index.js",
  "/assets/card.js",
  "/assets/main.js",
  "/assets/manifest.json",
  "https://i.imgur.com/n4zJhma.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll(filesToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
