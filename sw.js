/* Kasa Jurnali moved to https://kasajurnali.github.io/ — this removes the app copy kept for the old address. */
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil((async () => {
  for (const k of await caches.keys()) await caches.delete(k);
  await self.registration.unregister();
  for (const c of await self.clients.matchAll({ type: "window" })) c.navigate("https://kasajurnali.github.io/");
})()));
