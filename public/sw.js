const CACHE='keresztbe-v5';
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(['./','./manifest.webmanifest','./favicon.svg','./icon.svg','./src/main.js?v=5','./src/puzzles.js?v=5','./src/game-logic.js?v=5','./src/style.css?v=5'])));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim();});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||new URL(e.request.url).origin!==self.location.origin)return;e.respondWith(fetch(e.request).then(r=>{if(r.ok){const copy=r.clone();caches.open(CACHE).then(cache=>cache.put(e.request,copy));}return r;}).catch(()=>caches.match(e.request)));});
