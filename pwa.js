(() => {
  const status = document.getElementById("offlineStatus");
  if (!status) return;

  const showStatus = () => {
    if (!navigator.onLine) {
      status.textContent = "Offline mode: saved study material is available.";
    } else {
      status.textContent = "Offline study files are saved on this device.";
    }
  };

  window.addEventListener("online", showStatus);
  window.addEventListener("offline", showStatus);

  if (!("serviceWorker" in navigator) || !window.isSecureContext) {
    status.textContent = "Offline mode needs this app to be hosted on a secure (HTTPS) address.";
    return;
  }

  status.textContent = "Saving study material for offline use…";
  navigator.serviceWorker.register("./service-worker.js", { scope: "./" })
    .then(() => navigator.serviceWorker.ready)
    .then(showStatus)
    .catch(() => {
      status.textContent = "Could not save offline files. Open this app online using its HTTPS address.";
    });
})();
