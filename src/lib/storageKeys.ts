/**
 * Every name under which the app keeps something on the phone: one list, read by the code
 * (docs/overzicht.md, "Wat de telefoon onthoudt"). Until 12 November 2026 each file wrote its own
 * key as a string; now a file takes its name from here. Only the names moved: how a file reads
 * and writes its key is still its own.
 *
 * A NEW KEY: add it here, and its line in src/overzicht/storageKeys.ts (the app does not compile
 * without). Never change a name that is out on phones: what is kept under it would be lost.
 *
 * This file imports nothing, so any file can take a name from it.
 */

/** localStorage and sessionStorage. */
export const KEYS = {
  /** The progress: everything of the learner in one value (src/lib/progress.ts). */
  progress: 'vloertaal:v1',

  // The learner's choices.
  certName: 'vloertaal:cert-name',
  speaking: 'vloertaal:speaking',
  listen: 'vloertaal:listen',
  learnWriting: 'vloertaal:learn-writing',
  writingInput: 'vloertaal:writing-input',
  showEnglish: 'vloertaal:show-english',
  topicsOrder: 'vloertaal:topicsOrder',
  aboutNl: 'vloertaal:aboutNl',
  samenHelp: 'vloertaal:samen-help',
  reminderTime: 'vloertaal:reminder-time',
  offlineAuto: 'vloertaal:offline-auto',
  countOff: 'vloertaal:count-off',
  access: 'vloertaal.access',

  // Seen or asked already.
  greeted: 'vloertaal:greeted',
  feel: 'vloertaal:gevoel',
  keepOffered: 'vloertaal.keepOffered',
  backupNudge: 'vloertaal:backup-nudge',
  workTry: 'vloertaal:work-try',
  workTryAsk: 'vloertaal:work-try-ask',
  firstTimes: 'vloertaal:first-times',
  shownHow: 'vloertaal:shown-how',
  goKnown: 'vloertaal:go-known',
  noVoiceNoted: 'vloertaal:no-voice-noted',
  reportHint: 'vloertaal:report-hint',
  persistAsked: 'vloertaal:persist-asked',

  // How the app works on this phone.
  resume: 'vloertaal:resume',
  linkedUnit: 'vloertaal.linkedUnit',
  offline: 'vloertaal:offline',
  persist: 'vloertaal:persist',
  reminderUid: 'vloertaal:reminder-uid',
  reminderSeq: 'vloertaal:reminder-seq',
  updateFor: 'vloertaal:update-for',
  updateReload: 'vloertaal:update-reload',

  // The anonymous count.
  countDays: 'vloertaal:count-dagen',
  countFirst: 'vloertaal:count-eerste',

  // Testers, coaches and development.
  tester: 'vloertaal:tester',
  oneApp: 'vloertaal:nieuw',
  admin: 'vloertaal:admin',
  be: 'vloertaal:be',
  rules: 'vloertaal:rules',
  demoOn: 'vloertaal-demo:on',
  demoOwn: 'vloertaal-demo:own',
  demoStopped: 'vloertaal-demo:stopped',
} as const;

/** IndexedDB databases (recordings) and the cache of saved lessons. */
export const STORES = {
  offlineCache: 'vloertaal-offline-v1',
  toetsDb: 'vloertaal-toets',
  firstVoiceDb: 'vloertaal-stem',
} as const;

export type KeyName = keyof typeof KEYS;
export type StoreName = keyof typeof STORES;

/**
 * Keys of the phone, not of its learner: a coach's demo never puts them away or wipes them
 * (src/lib/demo.ts): the access level, the saved lessons, the reminder in the calendar, the
 * counting switch, the tester and admin marks, the app's own updates.
 */
export const DEVICE_KEYS: ReadonlySet<string> = new Set([
  KEYS.access,
  KEYS.offline,
  KEYS.offlineAuto,
  KEYS.persist,
  KEYS.persistAsked,
  KEYS.countOff,
  KEYS.tester,
  KEYS.admin,
  KEYS.reminderUid,
  KEYS.reminderTime,
  KEYS.reminderSeq,
  KEYS.updateFor,
  KEYS.updateReload,
]);
