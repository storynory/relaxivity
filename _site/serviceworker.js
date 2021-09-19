var CACHE_VERSION = 3;
var CURRENT_CACHES = {
    prefetch: 'static' + CACHE_VERSION
};

self.addEventListener('install', function (event) {
    var urlsToPrefetch = [
        './static/pre_fetched.txt',
        './static/pre_fetched.html'
    ];

    event.waitUntil(
        caches.open(CURRENT_CACHES.prefetch).then(function (cache) {
            return cache.addAll(urlsToPrefetch).then(function () {
                console.log('All resources have been fetched and cached.');
                // skipWaiting() allows this service worker to become active
                // immediately, bypassing the waiting state, even if there's a previous
                // version of the service worker already installed.
                self.skipWaiting();
            });
        }).catch(function (error) {
            // This catch() will handle any exceptions from the caches.open()/cache.addAll() steps.
            console.error('Pre-fetching failed:', error);
        })
    );
});

self.addEventListener('activate', function (event) {
    // clients.claim() tells the active service worker to take immediate
    // control of all of the clients under its scope.
    self.clients.claim();

    // Delete all caches that aren't named in CURRENT_CACHES.
    // While there is only one cache in this example, the same logic will handle the case where
    // there are multiple versioned caches.
    var expectedCacheNames = Object.keys(CURRENT_CACHES).map(function (key) {
        return CURRENT_CACHES[key];
    });

    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.map(function (cacheName) {
                    if (expectedCacheNames.indexOf(cacheName) === -1) {
                        // If this cache name isn't present in the array of "expected" cache names,
                        // then delete it.
                        console.log('Deleting out of date cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});