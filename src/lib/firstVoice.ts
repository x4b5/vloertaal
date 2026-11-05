import type { Bilingual } from '../i18n';
import { dateLocale } from '../content/updateDate';
import { bytesOf } from './toetsVoice';

/**
 * "Toen en nu": hear yourself grow (the owner's request, 5 November 2026). The first time the
 * learner records a sentence in "Zeg het" (src/components/Speaking.tsx), that first recording is
 * kept **only on this phone**, in IndexedDB, with its day. When the same sentence is said again at
 * least THEN_NOW_DAYS later, "Luister naar jezelf" becomes "Toen en nu": the first try, then this
 * one. Never sent anywhere, never scored. Wiped with "Voortgang wissen" (forgetFirstVoices).
 *
 * One recording per sentence (the key is the item's id), never replaced: it is the *first* time.
 * At most FIRST_VOICE_MAX sentences (a few MB at most). When full, the oldest recording whose
 * "Toen en nu" was already played makes room (it has done its job); when none was played yet,
 * nothing new is kept. Simple, and a recording is never dropped before the learner heard it.
 *
 * Without IndexedDB (an old phone, a private window, blocked storage) nothing is kept and nothing
 * fails: every call resolves, and the exercise is as before. Stored as bytes plus their type, not as
 * a Blob (older Safari could not keep a Blob in IndexedDB), as in src/lib/toetsVoice.ts.
 *
 * The storage sits behind a small interface (VoiceShelf), so the rules can be tested with a plain
 * Map (tests/firstVoice.test.ts): there is no fake IndexedDB in this project.
 */

/** At most this many sentences keep a first recording. */
export const FIRST_VOICE_MAX = 40;
/** "Toen en nu" from this many days after the first recording (calendar days on this phone). */
export const THEN_NOW_DAYS = 7;

/** When the first recording was made (ms), and whether its "Toen en nu" was played. */
export interface VoiceMeta { at: number; played?: boolean }
export interface KeptVoice { type: string; bytes: ArrayBuffer }

/** Where the recordings live. Every call resolves (null / false when it fails), never throws. */
export interface VoiceShelf {
  /** Every sentence with a first recording, or null (no storage). */
  list(): Promise<Record<string, VoiceMeta> | null>;
  read(id: string): Promise<KeptVoice | null>;
  /** Adds a first recording (false when one is there already), dropping `drop` in the same go. */
  add(id: string, voice: KeptVoice, meta: VoiceMeta, drop?: string): Promise<boolean>;
  mark(id: string, meta: VoiceMeta): Promise<boolean>;
  clear(): Promise<boolean>;
}

const DB = 'vloertaal-stem';
const VOICES = 'opname';
const METAS = 'wanneer';

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
      req.onupgradeneeded = () => {
        const db = req.result;
        if (!db.objectStoreNames.contains(VOICES)) db.createObjectStore(VOICES);
        if (!db.objectStoreNames.contains(METAS)) db.createObjectStore(METAS);
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => resolve(null);
      req.onblocked = () => resolve(null);
    } catch {
      resolve(null);
    }
  });
}

/** One transaction over both stores; `work` sets the result. Null when anything fails (all undone). */
async function inTx<T>(mode: IDBTransactionMode, work: (voices: IDBObjectStore, metas: IDBObjectStore, done: (v: T) => void) => void): Promise<T | null> {
  const db = await open();
  if (!db) return null;
  return new Promise((resolve) => {
    let value: T | null = null;
    try {
      const tx = db.transaction([VOICES, METAS], mode);
      tx.oncomplete = () => { db.close(); resolve(value); };
      tx.onerror = tx.onabort = () => { db.close(); resolve(null); };
      work(tx.objectStore(VOICES), tx.objectStore(METAS), (v) => { value = v; });
    } catch {
      db.close();
      resolve(null);
    }
  });
}

/** The shelf on this phone: IndexedDB (database "vloertaal-stem"). */
export const phoneShelf: VoiceShelf = {
  list: () => inTx<Record<string, VoiceMeta>>('readonly', (_v, metas, done) => {
    const out: Record<string, VoiceMeta> = {};
    done(out);
    const req = metas.openCursor();
    req.onsuccess = () => {
      const c = req.result;
      if (!c) return;
      out[String(c.key)] = c.value as VoiceMeta;
      c.continue();
    };
  }),
  read: (id) => inTx<KeptVoice>('readonly', (voices, _m, done) => {
    const req = voices.get(id);
    req.onsuccess = () => { if (req.result) done(req.result as KeptVoice); };
  }),
  add: async (id, voice, meta, drop) => Boolean(await inTx<boolean>('readwrite', (voices, metas, done) => {
    if (drop) { voices.delete(drop); metas.delete(drop); }
    // `add` (not put): a first recording that is already there is never replaced; the failed add
    // aborts the whole transaction, so the drop is undone too.
    metas.add(meta, id);
    voices.put(voice, id);
    done(true);
  })),
  mark: async (id, meta) => Boolean(await inTx<boolean>('readwrite', (_v, metas, done) => { metas.put(meta, id); done(true); })),
  clear: async () => Boolean(await inTx<boolean>('readwrite', (voices, metas, done) => { voices.clear(); metas.clear(); done(true); })),
};

/** Whole calendar days from `at` to `now`, on this phone's clock (a summer-time change is no day). */
export function daysSince(at: number, now: Date): number {
  const day = (d: Date) => Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 86_400_000;
  return Math.round(day(now) - day(new Date(at)));
}

/**
 * Keeps this recording when it is the first one of this sentence (true when it was kept). A second
 * recording, a full shelf where nothing was played yet, or no storage: nothing is kept.
 */
export async function keepFirstVoice(id: string, blob: Blob, now = new Date(), shelf: VoiceShelf = phoneShelf): Promise<boolean> {
  try {
    if (!blob.size) return false;
    const all = await shelf.list();
    if (!all || all[id]) return false;
    const ids = Object.keys(all);
    let drop: string | undefined;
    if (ids.length >= FIRST_VOICE_MAX) {
      // Full: the oldest one whose "Toen en nu" was played makes room; none played, nothing kept.
      drop = ids.filter((k) => all[k].played).sort((a, b) => all[a].at - all[b].at)[0];
      if (!drop) return false;
    }
    const voice: KeptVoice = { type: blob.type || 'audio/webm', bytes: await bytesOf(blob) };
    return await shelf.add(id, voice, { at: now.getTime() }, drop);
  } catch {
    return false;
  }
}

/** The first recording of this sentence and its time, once it is THEN_NOW_DAYS old; else null. */
export async function thenVoice(id: string, now = new Date(), shelf: VoiceShelf = phoneShelf): Promise<{ blob: Blob; at: number } | null> {
  try {
    const meta = (await shelf.list())?.[id];
    if (!meta || daysSince(meta.at, now) < THEN_NOW_DAYS) return null;
    const kept = await shelf.read(id);
    return kept && kept.bytes ? { blob: new Blob([kept.bytes], { type: kept.type }), at: meta.at } : null;
  } catch {
    return null;
  }
}

/** "Toen en nu" of this sentence was played: from now on it may make room when the shelf is full. */
export async function markThenPlayed(id: string, shelf: VoiceShelf = phoneShelf): Promise<void> {
  try {
    const meta = (await shelf.list())?.[id];
    if (meta && !meta.played) await shelf.mark(id, { ...meta, played: true });
  } catch {
    // Nothing kept: it simply cannot make room later.
  }
}

/** Deletes every first recording ("Voortgang wissen"). */
export async function forgetFirstVoices(shelf: VoiceShelf = phoneShelf): Promise<void> {
  try {
    await shelf.clear();
  } catch {
    // No storage: nothing to wipe.
  }
}

/** "12 oktober" in a locale; with the year when it is not this year's. */
export function firstDay(at: number, locale: string, now = new Date()): string {
  const d = new Date(at);
  const opts: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', ...(d.getFullYear() === now.getFullYear() ? {} : { year: 'numeric' }) };
  try {
    return d.toLocaleDateString(locale, opts);
  } catch {
    return d.toLocaleDateString('nl-NL', opts);
  }
}

/** "Je eerste keer: 12 oktober", each line with the date in its own language (as "Last updated"). */
export function firstDayText(text: Bilingual, at: number, now = new Date()): Bilingual {
  return {
    ...text,
    en: text.en.replace('{date}', firstDay(at, 'en-GB', now)),
    help: text.help?.replace('{date}', firstDay(at, dateLocale(text.lang?.code ?? 'nl'), now)),
  };
}
