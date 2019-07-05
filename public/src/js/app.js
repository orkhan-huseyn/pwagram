if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(function(registration) {
      console.log('Service worker registration successful with scope %s', registration.scope);
    }, function(err) {
      console.log('Service worker registration failed: ', err);
    });
} else {
  console.warn('Service workers are not supported by your browser.');
}
