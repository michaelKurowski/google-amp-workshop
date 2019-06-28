
console.log('Hello from service-worker.js');
importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}


workbox.routing.registerRoute(
    new RegExp('(.*\.(js|html|jpg|svg))|\/'),
    new workbox.strategies.NetworkFirst()
  );