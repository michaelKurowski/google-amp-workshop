importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

workbox.precaching.precacheAndRoute([], {
ignoreURLParametersMatching: [/.*/]
});

workbox.routing.registerRoute(
    new RegExp('/$'),
    new workbox.strategies.NetworkFirst({
      cacheName: "api-cache",
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 2,
        })
      ]
    })
  );

  workbox.routing.registerRoute(
    new RegExp('(https\:\/\/cdn.ampproject.org)(.*)\.(js|html|jpg|svg)'),
    new workbox.strategies.NetworkFirst({
      cacheName: 'amp cdn'
    })
  );

  workbox.routing.registerRoute(
    new RegExp('(https\:\/\/www.youtube.com)(.*)\.(js|html|jpg|svg)'),
    new workbox.strategies.NetworkFirst({
      cacheName: 'youtube'
    })
  );

  workbox.routing.registerRoute(
    new RegExp('(https\:\/\/www.google.com)(.*)\.(js|html|jpg|svg)'),
    new workbox.strategies.NetworkFirst({
      cacheName: 'google'
    })
  );
  //'(.*\.(js|html|jpg|svg))|\/'