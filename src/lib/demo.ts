/**
 * "Laat de app zien aan een kandidaat": the demonstration mode for coaches (a job coach's
 * feedback, November 2026). A coach shows Vloertaal on their own phone to one candidate after
 * another, each in their own language. Like a car in a showroom: everyone may try everything, and
 * after each visitor it is ready again; the coach's own progress stays out of it.
 *
 *  - Only with the full version on this phone (the coaches' code): the coaches' page is open to
 *    anyone, and the demo opens every lesson.
 *  - Starting it puts away what this phone keeps for its learner (the coach's own progress, help
 *    language, settings), in one saved copy, and the app starts at the language choice.
 *  - In the demo every lesson is open (src/components/Route.tsx) and nothing is counted
 *    (src/lib/count.ts: a coach showing the same lesson ten times is not ten learners).
 *  - "Volgende kandidaat": what the candidate did goes, the app starts at the language choice
 *    again. Nothing to confirm: there is nothing to lose.
 *  - "Demo stoppen": the candidate's things go, the coach's own come back as they were.
 *
 * What belongs to the phone, not to the learner, stays through all of it: the access level, the
 * saved lessons, the reminder in the calendar, the counting switch, the tester and admin marks.
 */

const ON = 'vloertaal-demo:on';
const OWN = 'vloertaal-demo:own';
/** Set by "Stoppen" in this tab only (sessionStorage: the demo leaves nothing on the phone): the
 *  coaches page asks once about a colleague. Not a learner key, so never wiped. */
const STOPPED = 'vloertaal-demo:stopped';

/** Keys of the phone, not of its learner: never put away, never wiped. */
const DEVICE_KEYS = new Set([
  'vloertaal.access',
  'vloertaal:offline',
  'vloertaal:offline-auto',
  'vloertaal:persist',
  'vloertaal:persist-asked',
  'vloertaal:count-off',
  'vloertaal:tester',
  'vloertaal:admin',
  'vloertaal:reminder-uid',
  'vloertaal:reminder-time',
  'vloertaal:reminder-seq',
  'vloertaal:update-for',
  'vloertaal:update-reload',
]);

/** A key of the learner on this phone (their progress, language, settings): what a demo puts away. */
export function learnerKey(key: string): boolean {
  return /^vloertaal[:.]/.test(key) && !DEVICE_KEYS.has(key);
}

function local(): Storage | null {
  try {
    return typeof localStorage === 'undefined' ? null : localStorage;
  } catch {
    return null;
  }
}

function session(): Storage | null {
  try {
    return typeof sessionStorage === 'undefined' ? null : sessionStorage;
  } catch {
    return null;
  }
}

function keysOf(store: Storage): string[] {
  const out: string[] = [];
  for (let i = 0; i < store.length; i++) {
    const k = store.key(i);
    if (k !== null) out.push(k);
  }
  return out;
}

/** Wipes the learner's keys (both storages): the app starts as on a new phone. */
function wipeLearner(): void {
  for (const store of [local(), session()]) {
    if (!store) continue;
    for (const k of keysOf(store)) if (learnerKey(k)) store.removeItem(k);
  }
}

/** Is the demonstration mode on, on this phone? */
export function demoOn(): boolean {
  try {
    return local()?.getItem(ON) === '1';
  } catch {
    return false;
  }
}

/**
 * Starts the demo: the learner's keys put away in one copy, then wiped. False when the phone
 * cannot store (nothing changed then: the coach's progress must never be lost).
 */
export function startDemo(): boolean {
  const store = local();
  if (!store || demoOn()) return Boolean(store);
  try {
    const own: Record<string, string> = {};
    for (const k of keysOf(store)) if (learnerKey(k)) own[k] = store.getItem(k) ?? '';
    store.setItem(OWN, JSON.stringify(own));
    store.setItem(ON, '1');
  } catch {
    try { store.removeItem(OWN); } catch { /* nothing was put away */ }
    return false;
  }
  wipeLearner();
  return true;
}

/** "Volgende kandidaat": what the candidate did goes; the demo goes on. */
export function nextCandidate(): void {
  if (demoOn()) wipeLearner();
}

/** "Demo stoppen": the candidate's things go, the coach's own come back. */
export function stopDemo(): void {
  const store = local();
  if (!store || !demoOn()) return;
  wipeLearner();
  try {
    const own = JSON.parse(store.getItem(OWN) ?? '{}') as Record<string, string>;
    for (const [k, v] of Object.entries(own)) if (learnerKey(k)) store.setItem(k, v);
  } catch {
    // A broken copy: the app starts as new rather than not at all.
  }
  store.removeItem(OWN);
  store.removeItem(ON);
  try { session()?.setItem(STOPPED, '1'); } catch { /* then the page just does not ask */ }
}

/**
 * Did a demo just stop? Then the coaches page, where "Stoppen" leads, asks above "Stuur door aan
 * een collega" whether the coach knows a colleague who could use it (the owner's request,
 * 9 November 2026: more exposure, through the coaches first). Right after the demo the coach has
 * just seen it work.
 */
export function demoJustStopped(): boolean {
  try {
    return session()?.getItem(STOPPED) === '1';
  } catch {
    return false;
  }
}

/** The question was shown: next time the page is as always. */
export function forgetDemoStopped(): void {
  try { session()?.removeItem(STOPPED); } catch { /* nothing to forget */ }
}

/** Back to the start of the app (no screen restored), after one of the above; `hash` opens a page
 *  (#begeleiders after "Stoppen"). */
export function restartApp(hash = ''): void {
  try { history.replaceState(null, '', location.pathname + hash); } catch { /* keep the address */ }
  location.reload();
}
