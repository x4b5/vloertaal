import { levenshtein } from './answers';
import { sayNumbers } from './sayNumbers';

/**
 * "Laat de telefoon luisteren (proef)": after "Say it", the phone tries to understand the Dutch
 * and says only whether it was understood ("Verstaan", "Bijna: [woord] nog eens", "Nog niet
 * verstaan"). Never "wrong", never a score; "Toch verder" is always there, and the existing
 * "record and compare" stays the default and the fallback.
 *
 * Privacy, the hard rule: no audio may leave the phone. The plain Web Speech API sends the audio
 * to a server (Chrome: Google), so it is used ONLY with `processLocally: true` and only when the
 * browser itself confirms, with `SpeechRecognition.available({ langs: ['nl-NL'], processLocally: true })`,
 * that Dutch is on the device ('available'). Anything else (no API, an older form of it, the
 * attribute not taking, 'downloadable', an error) and recognition is not started at all; there
 * is no fallback to the server recognition. tests/listen.test.ts holds this.
 *
 * Off by default (this device's switch below), the Dutch course only (not Werkregels), and only in
 * the lesson's speaking exercise.
 */

export const LISTEN_LANG = 'nl-NL';

/** What the browser says about Dutch on this device (the spec's AvailabilityStatus). */
export type LocalStatus = 'available' | 'downloadable' | 'downloading' | 'unavailable';
const STATUSES: readonly LocalStatus[] = ['available', 'downloadable', 'downloading', 'unavailable'];

interface Options { langs: string[]; processLocally: boolean }

/** The bits of SpeechRecognition used here (the DOM lib has no types for the on-device part). */
export interface RecognitionLike {
  lang: string;
  processLocally?: boolean;
  continuous: boolean;
  interimResults: boolean;
  maxAlternatives: number;
  onresult: ((e: { results: ArrayLike<ArrayLike<{ transcript: string }> & { isFinal?: boolean }> }) => void) | null;
  onerror: ((e: { error?: string }) => void) | null;
  onend: (() => void) | null;
  start(track?: MediaStreamTrack): void;
  stop(): void;
  abort(): void;
}
export interface RecognitionCtor {
  new (): RecognitionLike;
  prototype: object;
  available?: (o: Options) => Promise<unknown>;
  install?: (o: Options) => Promise<unknown>;
}

const OPTIONS = (): Options => ({ langs: [LISTEN_LANG], processLocally: true });

/**
 * The SpeechRecognition constructor, but only one that has the on-device part: the static
 * available() and install() and a processLocally attribute. Without them: null (no feature).
 */
export function localRecognition(): RecognitionCtor | null {
  if (typeof window === 'undefined') return null;
  const w = window as unknown as { SpeechRecognition?: unknown; webkitSpeechRecognition?: unknown };
  const C = (w.SpeechRecognition ?? w.webkitSpeechRecognition) as RecognitionCtor | undefined;
  if (typeof C !== 'function') return null;
  if (typeof C.available !== 'function' || typeof C.install !== 'function') return null;
  if (!C.prototype || !('processLocally' in C.prototype)) return null;
  // A browser driven by a test tool (Playwright's headless Chromium shell crashes on available():
  // it has no speech service) gets no feature, unless a stand-in is installed (src/dev/ShotHarness.tsx).
  if (typeof navigator !== 'undefined' && navigator.webdriver && /\[native code\]/.test(Function.prototype.toString.call(C))) return null;
  return C;
}

let statusCache: Promise<LocalStatus> | null = null;

/** Can this phone recognise Dutch on the device? Cached; `fresh` asks the browser again. */
export function localStatus(fresh = false): Promise<LocalStatus> {
  if (statusCache && !fresh) return statusCache;
  const C = localRecognition();
  statusCache = !C
    ? Promise.resolve<LocalStatus>('unavailable')
    : Promise.resolve()
      .then(() => C.available!(OPTIONS()))
      .then((s) => (STATUSES.includes(s as LocalStatus) ? (s as LocalStatus) : 'unavailable'), () => 'unavailable' as const);
  return statusCache;
}

/** Tests only: forget the cached status. */
export function resetListenForTest(): void {
  statusCache = null;
  memory = null;
}

/**
 * Download Dutch for on-device recognition. Only after the learner's own tap (Settings, with the
 * "use wifi" line). True when Dutch is then confirmed on the device.
 */
export async function installLocal(): Promise<boolean> {
  const C = localRecognition();
  if (!C) return false;
  try {
    await C.install!(OPTIONS());
  } catch {
    return false;
  }
  return (await localStatus(true)) === 'available';
}

/* ---- The switch (this device; off unless the learner turned it on) ---- */

const KEY = 'vloertaal:listen';
let memory: boolean | null = null;

export function listenOn(): boolean {
  try {
    return localStorage.getItem(KEY) === '1';
  } catch {
    return memory ?? false;
  }
}

export function setListenOn(on: boolean): void {
  memory = on;
  try {
    if (on) localStorage.setItem(KEY, '1');
    else localStorage.removeItem(KEY);
  } catch {
    // Private mode: for this visit only.
  }
}

/* ---- One listen ---- */

/** What the phone heard: its guesses (best first), or an error code of the API. */
export interface Heard { alternatives: string[]; error?: string }

export interface Listening {
  /** Settles when the recognition ends (after stop(), or by itself). */
  result: Promise<Heard>;
  stop(): void;
  abort(): void;
}

/**
 * Start one on-device recognition of Dutch, on the microphone track of the recording when the
 * browser takes one. Null, and nothing started, unless the browser confirms Dutch on the device
 * right now and the recogniser keeps processLocally = true.
 */
export async function startListening(track?: MediaStreamTrack): Promise<Listening | null> {
  const C = localRecognition();
  if (!C) return null;
  if ((await localStatus(true)) !== 'available') return null;
  let rec: RecognitionLike;
  try {
    rec = new C();
    rec.lang = LISTEN_LANG;
    rec.processLocally = true;
  } catch {
    return null;
  }
  // The attribute must have taken: otherwise this recogniser could use the server.
  if (rec.processLocally !== true) return null;
  rec.continuous = false;
  rec.interimResults = false;
  rec.maxAlternatives = 4;
  const alternatives: string[] = [];
  let error: string | undefined;
  let settle!: (h: Heard) => void;
  const result = new Promise<Heard>((r) => { settle = r; });
  rec.onresult = (e) => {
    for (let i = 0; i < e.results.length; i++) {
      const r = e.results[i];
      if (r.isFinal === false) continue;
      for (let k = 0; k < r.length; k++) if (r[k]?.transcript) alternatives.push(r[k].transcript);
    }
  };
  rec.onerror = (e) => { error = e?.error ?? 'error'; };
  rec.onend = () => settle(error ? { alternatives, error } : { alternatives });
  try {
    if (track) rec.start(track);
    else rec.start();
  } catch {
    // An older start() without the track: it opens the microphone itself (still on the device).
    if (!track) return null;
    try { rec.start(); } catch { return null; }
  }
  return {
    result,
    stop: () => { try { rec.stop(); } catch { settle({ alternatives, error }); } },
    abort: () => { try { rec.abort(); } catch { /* gone */ } settle({ alternatives, error: 'aborted' }); },
  };
}

/* ---- Was it understood? (pure) ---- */

export type Verdict =
  | { kind: 'ok' }
  | { kind: 'almost'; word: string }
  | { kind: 'notyet' };

const ARTICLES = new Set(['de', 'het', 'een']);
const SMALL_NUMBERS = ['nul', 'een', 'twee', 'drie', 'vier', 'vijf', 'zes', 'zeven', 'acht', 'negen', 'tien',
  'elf', 'twaalf', 'dertien', 'veertien', 'vijftien', 'zestien', 'zeventien', 'achttien', 'negentien', 'twintig'];
/** Spoken short forms a recogniser may write ('t, 'n, 'k ...): their full word. */
const SHORT: Record<string, string> = { "'t": 'het', "'n": 'een', "'k": 'ik', "'m": 'hem', "'r": 'er', "z'n": 'zijn', "m'n": 'mijn', "d'r": 'haar' };

/** One word as compared: lowercase, no accents or punctuation; short forms and 0–20 as words. */
export function normWord(raw: string): string {
  const w = raw.toLowerCase().replace(/[’‘ʼ`]/g, "'").replace(/^[^\p{L}\p{N}']+|[^\p{L}\p{N}']+$/gu, '');
  if (SHORT[w]) return SHORT[w];
  if (/^\d+$/.test(w) && Number(w) <= 20) return SMALL_NUMBERS[Number(w)];
  return w.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^\p{L}\p{N}]/gu, '');
}

/** The words of a text, each as written (for showing) and normalised (for comparing). */
export function wordsOf(text: string): { shown: string; norm: string }[] {
  return sayNumbers(text)
    .replace(/[-/]/g, ' ')
    .split(/\s+/)
    .map((shown) => ({ shown: shown.replace(/^[^\p{L}\p{N}']+|[^\p{L}\p{N}']+$/gu, ''), norm: normWord(shown) }))
    .filter((w) => w.norm);
}

/**
 * What a word sounds like, for spellings that sound the same: ij/ei, ou/au, g/ch, a final d or dt
 * as t (word / wordt), c as k or s. Long and short vowels stay apart (man / maan is "almost").
 */
export function soundKey(w: string): string {
  return w
    .replace(/ij/g, 'ei')
    .replace(/ou/g, 'au')
    .replace(/ch/g, 'g')
    .replace(/ph/g, 'f')
    .replace(/c(?=[eiy])/g, 's')
    .replace(/c/g, 'k')
    .replace(/(dt|d)$/, 't');
}

type Mark = 'ok' | 'near' | 'miss';

const same = (a: string, b: string) => a === b || soundKey(a) === soundKey(b);
function near(a: string, b: string): boolean {
  const ka = soundKey(a);
  const kb = soundKey(b);
  const d = levenshtein(ka, kb);
  const len = Math.max(ka.length, kb.length);
  return (d === 1 && len >= 3) || (d === 2 && len >= 7);
}

/**
 * A word-by-word alignment of the target and what was heard (an edit distance over words): each
 * target word is 'ok', 'near' (sounds close: man / maan) or 'miss'. A word may be heard as two
 * (veiligheids schoenen) or two as one. A missing or swapped article (de / het / een) is 'ok':
 * this is about being understood, not grammar. Extra words heard cost little.
 */
export function align(target: string[], heard: string[]): Mark[] {
  const n = target.length;
  const m = heard.length;
  const INS = 0.5;
  const del = (i: number) => (ARTICLES.has(target[i]) ? 0.1 : 1);
  const cost: number[][] = Array.from({ length: n + 1 }, () => new Array<number>(m + 1).fill(Infinity));
  const step: [number, number, Mark | null][][] = Array.from({ length: n + 1 }, () => new Array(m + 1));
  cost[0][0] = 0;
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= m; j++) {
      const c = cost[i][j];
      if (c === Infinity) continue;
      const go = (di: number, dj: number, add: number, mark: Mark | null) => {
        if (c + add < cost[i + di][j + dj]) { cost[i + di][j + dj] = c + add; step[i + di][j + dj] = [di, dj, mark]; }
      };
      if (i < n) go(1, 0, del(i), ARTICLES.has(target[i]) ? 'ok' : 'miss');
      if (j < m) go(0, 1, INS, null);
      if (i < n && j < m) {
        const t = target[i];
        const h = heard[j];
        if (same(t, h)) go(1, 1, 0, 'ok');
        else if (ARTICLES.has(t) && ARTICLES.has(h)) go(1, 1, 0.1, 'ok');
        else if (near(t, h)) go(1, 1, 0.4, 'near');
        else go(1, 1, 1, 'miss');
        if (j + 1 < m && same(t, h + heard[j + 1])) go(1, 2, 0, 'ok');
        if (i + 1 < n && same(t + target[i + 1], h)) go(2, 1, 0, 'ok');
      }
    }
  }
  const marks = new Array<Mark>(n).fill('miss');
  for (let i = n, j = m; i > 0 || j > 0;) {
    const [di, dj, mark] = step[i][j];
    if (mark) for (let k = 1; k <= di; k++) marks[i - k] = mark;
    i -= di;
    j -= dj;
  }
  return marks;
}

const RANK = { ok: 2, almost: 1, notyet: 0 } as const;

/** The verdict for one guess of the phone. */
function judgeOne(target: { shown: string; norm: string }[], heardText: string): Verdict {
  const heard = wordsOf(heardText).map((w) => w.norm);
  if (!heard.length) return { kind: 'notyet' };
  const marks = align(target.map((w) => w.norm), heard);
  const content = target.map((w, i) => ({ ...w, mark: marks[i] })).filter((w) => !ARTICLES.has(w.norm));
  const words = content.length ? content : target.map((w, i) => ({ ...w, mark: marks[i] }));
  const bad = words.filter((w) => w.mark !== 'ok');
  const misses = bad.filter((w) => w.mark === 'miss').length;
  if (!bad.length) return { kind: 'ok' };
  const word = (bad.find((w) => w.mark === 'near') ?? bad[0]).shown;
  // One word not quite there (a single word: only when it was close), or two close ones in a
  // longer sentence: "almost", with that word. Else "not understood yet".
  if (bad.length === 1 && (misses === 0 || words.length >= 2)) return { kind: 'almost', word };
  if (bad.length === 2 && misses === 0 && words.length >= 4) return { kind: 'almost', word };
  return { kind: 'notyet' };
}

/**
 * Was the Dutch understood? The best over the phone's guesses: "ok" (understood), "almost" with
 * the word to say again, or "notyet". Never a score.
 */
export function judge(target: string, alternatives: readonly string[]): Verdict {
  const t = wordsOf(target);
  let best: Verdict = { kind: 'notyet' };
  for (const alt of alternatives) {
    const v = judgeOne(t, alt);
    if (RANK[v.kind] > RANK[best.kind]) best = v;
    if (best.kind === 'ok') break;
  }
  return best;
}

/**
 * The verdict for a finished listen, or null when there is none to give (the API stopped with an
 * error of its own: the exercise is then plain "record and compare"). Heard nothing at all
 * ('no-speech', or no guess): "not understood yet".
 */
export function verdictOf(target: string, heard: Heard): Verdict | null {
  if (heard.error && heard.error !== 'no-speech') return null;
  return judge(target, heard.alternatives);
}
