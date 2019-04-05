self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open('video-store').then(function(cache) {
        return cache.addAll([
          'library-bootstrap-pwa/',
          'library-bootstrap-pwa/index.html',
          'library-bootstrap-pwa/environment.html',
          'library-bootstrap-pwa/request.html',
          'library-bootstrap-pwa/index.js',
          'library-bootstrap-pwa/styles/styles.css'
        ]);
      })
    );
   });
   
   self.addEventListener('fetch', function(e) {
     console.log(e.request.url);
     e.respondWith(
       caches.match(e.request).then(function(response) {
         return response || fetch(e.request);
       })
     );
   });
   