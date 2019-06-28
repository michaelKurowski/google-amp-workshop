importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

workbox.precaching.precacheAndRoute([
  {
    "url": "assets/hamburger.svg",
    "revision": "20d397409fb2b09c6f2d7e428f65858a"
  },
  {
    "url": "assets/iss.svg",
    "revision": "783e1b6e75d8a91031d877073e649ba9"
  },
  {
    "url": "assets/profile.svg",
    "revision": "96d00ac62cf284a74c0ceb2f4d83deff"
  },
  {
    "url": "index.ejs",
    "revision": "07341f9df3792b07f315e2742ded78fe"
  }
], {
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