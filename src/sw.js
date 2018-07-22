var cacheName = 'hello-world'
var filesToCache = [
  '/',
  '/index.html',
]

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(filesToCache)
    })
  )
})

self.addEventListener('activate', e => {
  e.waitUntil(
    self.clients.claim()
  )
})

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request, {
      ignoreSearch: true,
    }).then(response => {
      return response || fetch(e.request)
    })
  )
})