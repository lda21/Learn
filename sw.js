/*
 * Learning Hub offline service worker.
 *
 * Registered only when the reader turns on Offline mode from index.html.
 * The page owns the list of URLs (it is derived from the COURSES array), so
 * new courses are picked up automatically with no changes to this file.
 */

const CACHE_NAME = 'learning-hub-offline-v1';
const CONCURRENCY = 6;

self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names
      .filter(name => name.startsWith('learning-hub') && name !== CACHE_NAME)
      .map(name => caches.delete(name)));
    await self.clients.claim();
  })());
});

/* ---------- messages from the page ---------- */

self.addEventListener('message', event => {
  const data = event.data || {};
  const port = event.ports && event.ports[0];

  if (data.type === 'CACHE_ALL') {
    event.waitUntil(cacheAll(data.urls || [], port));
  } else if (data.type === 'STATUS') {
    event.waitUntil(status(port));
  }
});

function reply(port, message) {
  if (port) port.postMessage(message);
}

async function status(port) {
  // Deliberately does not open the cache: asking must never create one.
  if (!(await caches.has(CACHE_NAME))) return reply(port, {type: 'DONE', count: 0});
  const cache = await caches.open(CACHE_NAME);
  reply(port, {type: 'DONE', count: (await cache.keys()).length});
}

async function cacheAll(urls, port) {
  const queue = urls.slice();
  const total = queue.length;
  const failed = [];
  let done = 0;
  let bytes = 0;

  try {
    const cache = await caches.open(CACHE_NAME);

    const drain = async () => {
      while (queue.length) {
        const url = queue.shift();
        try {
          // 'reload' bypasses the HTTP cache so saving always stores the
          // current version of the page rather than a stale browser copy.
          const res = await fetch(url, {cache: 'reload'});
          if (!res.ok) throw new Error('HTTP ' + res.status);
          const copy = res.clone();
          await cache.put(url, res);
          bytes += (await copy.arrayBuffer()).byteLength;
        } catch (err) {
          // A dropped connection, a 404, or the storage quota running out:
          // record it and keep going, then report the tally at the end.
          failed.push(url);
        }
        done++;
        reply(port, {type: 'PROGRESS', done, total, bytes});
      }
    };

    await Promise.all(Array.from({length: Math.min(CONCURRENCY, total)}, drain));
    reply(port, {type: 'DONE', total, bytes, failed});
  } catch (err) {
    // Storage unavailable altogether (private mode, blocked cookies).
    reply(port, {type: 'DONE', error: err.message || 'storage unavailable', total, bytes, failed});
  }
}

/* ---------- serving ----------
 *
 * The cache is a deliberate snapshot: nothing below ever writes to it, only
 * the reader pressing the toggle or Update does. So an online visit behaves
 * exactly as it would with no worker installed — always the current pages,
 * never a stale one — and the snapshot is there for when the network is not.
 */

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(serve(event.request));
});

async function serve(req) {
  // No connection: answer from the snapshot without waiting on a doomed fetch.
  if (!self.navigator.onLine) {
    const saved = await match(req);
    if (saved) return saved;
  }

  try {
    return await fetch(req);
  } catch (err) {
    // Either the connection dropped mid-session or navigator.onLine lied.
    const saved = await match(req);
    if (saved) return saved;
    // Nothing saved for this URL: send page loads to the catalog rather than
    // the browser's error page.
    if (req.mode === 'navigate') {
      const home = await match('index.html');
      if (home) return home;
    }
    throw err;
  }
}

function match(req) {
  return caches.match(req, {cacheName: CACHE_NAME, ignoreSearch: true, ignoreVary: true});
}
