import type { ToetsMoment } from './toets';

/**
 * The learner's own voice in "Wat ken je al?" (the speaking task at the end): kept **only on this
 * phone**, in IndexedDB, so the end can play "Jij toen" next to "Jij nu". Never sent anywhere,
 * never counted. One recording per moment; a new one replaces the old. Wiped with "Voortgang
 * wissen" (forgetVoices). Without IndexedDB (an old phone, a private window) nothing is kept and
 * the result simply has no "Jij toen".
 *
 * Stored as bytes plus their type (not as a Blob): older Safari could not keep a Blob in IndexedDB.
 */

const DB = 'vloertaal-toets';
const STORE = 'stem';

function idb(): IDBFactory | null {
  try {
    return typeof indexedDB === 'undefined' ? null : indexedDB;
  } catch {
    return null;
  }
}

function open(): Promise<IDBDatabase | null> {
  const factory = idb();
  if (!factory) return Promise.resolve(null);
  return new Promise((resolve) => {
    try {
      const req = factory.open(DB, 1);
      req.onupgradeneeded = () => { if (!req.result.objectStoreNames.contains(STORE)) req.result.createObjectStore(STORE); };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => resolve(null);
      req.onblocked = () => resolve(null);
    } catch {
      resolve(null);
    }
  });
}

/** One request in its own transaction; null when anything fails. */
async function run<T>(mode: IDBTransactionMode, make: (s: IDBObjectStore) => IDBRequest): Promise<T | null> {
  const db = await open();
  if (!db) return null;
  return new Promise((resolve) => {
    try {
      const tx = db.transaction(STORE, mode);
      const req = make(tx.objectStore(STORE));
      let value: T | null = null;
      req.onsuccess = () => { value = (req.result as T) ?? null; };
      tx.oncomplete = () => { db.close(); resolve(mode === 'readonly' ? value : (true as unknown as T)); };
      tx.onerror = tx.onabort = () => { db.close(); resolve(null); };
    } catch {
      db.close();
      resolve(null);
    }
  });
}

/** A Blob's bytes, also on phones without Blob.arrayBuffer (FileReader). */
function bytesOf(blob: Blob): Promise<ArrayBuffer> {
  if (typeof blob.arrayBuffer === 'function') return blob.arrayBuffer();
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(r.result as ArrayBuffer);
    r.onerror = () => reject(r.error);
    r.readAsArrayBuffer(blob);
  });
}

interface Kept { type: string; bytes: ArrayBuffer }

/** Keeps the recording of this moment (true when it was kept). */
export async function keepVoice(moment: ToetsMoment, blob: Blob): Promise<boolean> {
  try {
    const kept: Kept = { type: blob.type || 'audio/webm', bytes: await bytesOf(blob) };
    return Boolean(await run<boolean>('readwrite', (s) => s.put(kept, moment)));
  } catch {
    return false;
  }
}

/** The recording of this moment, or null (none, or no IndexedDB). */
export async function loadVoice(moment: ToetsMoment): Promise<Blob | null> {
  const kept = await run<Kept>('readonly', (s) => s.get(moment));
  return kept && kept.bytes ? new Blob([kept.bytes], { type: kept.type }) : null;
}

/** Deletes both recordings ("Voortgang wissen"). */
export async function forgetVoices(): Promise<void> {
  await run<boolean>('readwrite', (s) => s.clear());
}
