export function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("MyObjectDB", 1);

    request.onupgradeneeded = function (event) {
      const db = event.target.result;
      if (!db.objectStoreNames.contains("settings")) {
        db.createObjectStore("settings", { keyPath: "id" }); // use id to uniquely identify
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject("Failed to open DB");
  });
}

export function saveSettings(db, obj) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction("settings", "readwrite");
    const store = tx.objectStore("settings");
    const req = store.put({ id: "main", ...obj });

    req.onsuccess = () => resolve();
    req.onerror = () => reject("Save failed");
  });
}

export function loadSettings(db) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction("settings", "readonly");
    const store = tx.objectStore("settings");
    const req = store.get("main");

    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject("Load failed");
  });
}
