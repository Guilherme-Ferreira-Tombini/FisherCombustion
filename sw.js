let cacheName = "fisher-combustion";
let filesToCache = ["/", "/index.html", "/css/style.css", "/js/main.js", "/img/header.png", "/img/main.png",
 "/img/imagem1.png", "/img/imagem2.png", "/img/seta_abaixo.png", "/img/pwa-icon-256.png", 
 "/img/pwa-icon-512.png", "/img/pwa-iicon-256.png", "/img/pwa-iicon-512.png", "/favicon.ico"];

self.addEventListener("install", (e) =>{
    e.waitUntil(
        caches.open(cacheName).then(function (cache){
            return cache.addAll(filesToCache);
        })
    )
});

self.addEventListener("fetch", (e) =>{
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    )
});