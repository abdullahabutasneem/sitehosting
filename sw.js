addEventListener("activate", event => {
  event.waitUntil(new Promise(resolve => { /* never */ }));
  registration.active.postMessage("");
  registration.update();
});
