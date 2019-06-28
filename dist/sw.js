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
    "revision": "6470fdb25d640f8065fc7aea49abea15"
  }
], {
ignoreURLParametersMatching: [/.*/]
});

workbox.routing.registerRoute(
    new RegExp('(.*\.(js|html|jpg|svg))|\/'),
    new workbox.strategies.NetworkFirst()
  );