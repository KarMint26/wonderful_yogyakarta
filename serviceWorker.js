const staticWonderfulYogyakarta = "wonderful-yogyakarta";
const assets = [
  "/",
  "/index.html",
  "src/pages/travel.html",
  "src/pages/culture.html",
  "src/pages/culinary.html",
  "src/css/styles.css",
  "src/js/index.js",
  "src/assets/icon/icon-short.png",
  "src/assets/icon/icon.png",
  "src/assets/pwa/icon-192x192.png",
  "src/assets/pwa/icon-256x256.png",
  "src/assets/pwa/icon-384x384.png",
  "src/assets/pwa/icon-512x512.png",
  "src/assets/sound/backsound.mp3",
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
