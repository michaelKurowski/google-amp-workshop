importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

workbox.precaching.precacheAndRoute([], {
ignoreURLParametersMatching: [/.*/]
});

workbox.routing.registerRoute(
    new RegExp('(.*\.(js|html|jpg|svg))|\/'),
    new workbox.strategies.NetworkFirst()
  );