// Service Worker — Codes Dommage SAGA/2
// Incrémente la version pour forcer la mise à jour du cache
var CACHE = "codes-dommage-v1";
var ASSETS = [
  "./",
  "./index.html",
  "./data.js",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", function(e){
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then(function(c){
      return c.addAll(ASSETS).catch(function(){ /* tolère un asset manquant */ });
    })
  );
});

self.addEventListener("activate", function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.filter(function(k){return k!==CACHE;}).map(function(k){return caches.delete(k);}));
    }).then(function(){ return self.clients.claim(); })
  );
});

// Stratégie : réseau d'abord pour le HTML (toujours à jour), cache d'abord pour le reste
self.addEventListener("fetch", function(e){
  if(e.request.method!=="GET") return;
  var url = e.request.url;
  if(url.indexOf("index.html")>=0 || e.request.mode==="navigate"){
    e.respondWith(
      fetch(e.request).then(function(resp){
        var copy=resp.clone();
        caches.open(CACHE).then(function(c){c.put(e.request,copy);});
        return resp;
      }).catch(function(){ return caches.match(e.request).then(function(r){return r||caches.match("./index.html");}); })
    );
    return;
  }
  e.respondWith(
    caches.match(e.request).then(function(cached){
      return cached || fetch(e.request).then(function(resp){
        var copy=resp.clone();
        caches.open(CACHE).then(function(c){c.put(e.request,copy);});
        return resp;
      });
    })
  );
});
