const staticWonderfulYogyakarta = "wonderful-yogyakarta";
const assets = [
  "/",
  "/index.html",
  "src/css/styles.css",
  "src/js/index.js",
  "src/assets/pwa/icon-192x192.png",
  "src/assets/pwa/icon-256x256.png",
  "src/assets/pwa/icon-384x384.png",
  "src/assets/pwa/icon-512x512.png",
  "src/assets/image/hero-homepage/image-1.png",
  "src/assets/image/hero-homepage/image-2.png",
  "src/assets/image/hero-homepage/image-3.png",
  "src/assets/image/hero-homepage/image-4.png",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticWonderfulYogyakarta).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});
