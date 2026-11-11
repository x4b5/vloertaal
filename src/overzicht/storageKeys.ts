import { KEYS, STORES, type KeyName, type StoreName } from '../lib/storageKeys';

/**
 * What the phone remembers under each name of src/lib/storageKeys.ts, in plain Dutch
 * (docs/overzicht.md, "Wat de telefoon onthoudt"). The two records are keyed by the names of that
 * list, so a new key without a line here does not compile (`npm run typecheck`).
 *
 * Not part of the app's files: nothing in the app imports this folder.
 */

/** Where it is kept. */
export type Store =
  /** localStorage: stays until the browser's data is cleared. */
  | 'telefoon'
  /** sessionStorage: gone when the tab closes. */
  | 'tabblad'
  /** IndexedDB (recordings). */
  | 'databank'
  /** Cache storage (saved lessons). */
  | 'cache';

export type Kind = 'voortgang' | 'keuze' | 'gezien' | 'techniek' | 'telling' | 'tester';

export const KIND_NL: Record<Kind, string> = {
  voortgang: 'De voortgang',
  keuze: 'Keuzes van de leerling',
  gezien: 'Al gezien of al gevraagd',
  techniek: 'Techniek',
  telling: 'Anonieme telling',
  tester: 'Voor testers en begeleiders',
};

export const STORE_NL: Record<Store, string> = {
  telefoon: 'blijft staan',
  tabblad: 'tot het tabblad sluit',
  databank: 'blijft staan (opnames)',
  cache: 'blijft staan (bestanden)',
};

interface Line {
  store: Store;
  kind: Kind;
  /** What the phone remembers here, in plain Dutch. */
  wat: string;
  /** The file that owns the key. */
  file: string;
}

export interface StoredKey extends Line {
  /** The name on the phone. */
  key: string;
  /** Its name in the code: KEYS.x or STORES.x. */
  ref: string;
}

const KEY_LINES: Record<KeyName, Line> = {
  progress: { store: 'telefoon', kind: 'voortgang', file: 'src/lib/progress.ts', wat: 'Alles van de leerling in één bestand: hulptaal, sector, land, lessen die af zijn, woorden om te herhalen, dagen op rij, certificaten, de toets, en de meeste instellingen (kleur, lettergrootte, stem, tempo, rustig scherm).' },
  certName: { store: 'telefoon', kind: 'keuze', file: 'src/lib/certificate.ts', wat: 'De naam op het certificaat.' },
  speaking: { store: 'telefoon', kind: 'keuze', file: 'src/lib/speaking.ts', wat: 'Spreken oefenen aan of uit.' },
  listen: { store: 'telefoon', kind: 'keuze', file: 'src/lib/listen.ts', wat: '"Laat de telefoon luisteren (proef)" aan of uit.' },
  learnWriting: { store: 'telefoon', kind: 'keuze', file: 'src/lib/writing.ts', wat: '"Ik wil ook leren schrijven" aan of uit.' },
  writingInput: { store: 'telefoon', kind: 'keuze', file: 'src/lib/writing.ts', wat: 'Schrijven met lettertegels of met het toetsenbord.' },
  showEnglish: { store: 'telefoon', kind: 'keuze', file: 'src/lib/english.ts', wat: 'Ook Engels laten zien naast de hulptaal.' },
  topicsOrder: { store: 'telefoon', kind: 'keuze', file: 'src/lib/topicsOrder.ts', wat: 'Alle onderwerpen: op thema of op volgorde.' },
  aboutNl: { store: 'telefoon', kind: 'keuze', file: 'src/lib/aboutDutch.ts', wat: 'De pagina Over in eenvoudig Nederlands lezen.' },
  samenHelp: { store: 'telefoon', kind: 'keuze', file: 'src/components/Samen.tsx', wat: 'Oefen samen: de vertaling onder elke zin aan of uit.' },
  reminderTime: { store: 'telefoon', kind: 'keuze', file: 'src/lib/reminder.ts', wat: 'Het tijdstip van de herinnering in de agenda.' },
  offlineAuto: { store: 'telefoon', kind: 'keuze', file: 'src/lib/offline.ts', wat: '"Lessen op deze telefoon" aan of uit.' },
  countOff: { store: 'telefoon', kind: 'keuze', file: 'src/lib/count.ts', wat: 'De anonieme telling uitgezet.' },
  access: { store: 'telefoon', kind: 'keuze', file: 'src/lib/access.ts', wat: 'Het niveau van de ingevulde code (volledig, proef of sneak preview).' },
  greeted: { store: 'telefoon', kind: 'gezien', file: 'src/lib/greeting.ts', wat: 'De dag waarop Bram voor het laatst groette.' },
  feel: { store: 'telefoon', kind: 'gezien', file: 'src/lib/feel.ts', wat: 'Bij welke lessen "Wat vind je van Vloertaal?" al is gevraagd.' },
  keepOffered: { store: 'telefoon', kind: 'gezien', file: 'src/lib/keepOffered.ts', wat: 'Het aanbod van de herinnering en het beginscherm is getoond.' },
  backupNudge: { store: 'telefoon', kind: 'gezien', file: 'src/lib/backupNudge.ts', wat: 'Wanneer "Bewaar je voortgang" is getoond, en of het is weggetikt.' },
  workTry: { store: 'telefoon', kind: 'gezien', file: 'src/lib/workTry.ts', wat: 'De dag waarop "Probeer het vandaag op je werk" voor het laatst stond.' },
  workTryAsk: { store: 'telefoon', kind: 'gezien', file: 'src/lib/workTry.ts', wat: 'De zin waar "Gelukt?" nog naar vraagt, en van welke dag.' },
  firstTimes: { store: 'telefoon', kind: 'gezien', file: 'src/lib/firstTimes.ts', wat: 'Hoe vaak elke tip al is getoond (een tip staat er alleen de eerste paar keer).' },
  shownHow: { store: 'telefoon', kind: 'gezien', file: 'src/components/ShowHow.tsx', wat: 'Bij welke oefeningen het handje al heeft voorgedaan hoe het moet.' },
  goKnown: { store: 'telefoon', kind: 'gezien', file: 'src/lib/goKnown.ts', wat: 'De knop "Verder" is al een keer gebruikt (daarna staat er alleen een pijl).' },
  noVoiceNoted: { store: 'telefoon', kind: 'gezien', file: 'src/components/RulesHelp.tsx', wat: 'De regel "deze telefoon heeft geen Nederlandse stem" is getoond.' },
  reportHint: { store: 'telefoon', kind: 'gezien', file: 'src/lib/report.ts', wat: 'De uitleg bij de knop Melden is getoond.' },
  persistAsked: { store: 'telefoon', kind: 'gezien', file: 'src/lib/install.ts', wat: 'Wanneer de browser voor het laatst is gevraagd de voortgang te bewaren.' },
  resume: { store: 'telefoon', kind: 'techniek', file: 'src/lib/resume.ts', wat: 'Een les die halverwege is gestopt, om verder te gaan (hooguit twee dagen).' },
  linkedUnit: { store: 'telefoon', kind: 'techniek', file: 'src/lib/unitLink.ts', wat: 'Het onderwerp uit een link van de begeleider, tot het lespad het heeft getoond.' },
  offline: { store: 'telefoon', kind: 'techniek', file: 'src/lib/offline.ts', wat: 'De lijst van onderwerpen die op de telefoon staan.' },
  persist: { store: 'telefoon', kind: 'techniek', file: 'src/lib/install.ts', wat: 'Het antwoord van de browser op de vraag om de voortgang te bewaren.' },
  reminderUid: { store: 'telefoon', kind: 'techniek', file: 'src/lib/reminder.ts', wat: 'Het nummer van de afspraak in de agenda.' },
  reminderSeq: { store: 'telefoon', kind: 'techniek', file: 'src/lib/reminder.ts', wat: 'De versie van de afspraak in de agenda.' },
  updateFor: { store: 'tabblad', kind: 'techniek', file: 'src/lib/appUpdate.ts', wat: 'Voor welke nieuwe versie de app al opnieuw is geladen.' },
  updateReload: { store: 'tabblad', kind: 'techniek', file: 'src/lib/appUpdate.ts', wat: 'Wanneer de app voor het laatst opnieuw is geladen na een fout bij het laden.' },
  countDays: { store: 'telefoon', kind: 'telling', file: 'src/lib/count.ts', wat: 'Welke oefendagen (1, 2, 7, 14, 28) al zijn geteld.' },
  countFirst: { store: 'telefoon', kind: 'telling', file: 'src/lib/count.ts', wat: 'Of "voor het eerst geopend" en "start af" al zijn geteld.' },
  tester: { store: 'telefoon', kind: 'tester', file: 'src/lib/report.ts', wat: 'De knop Melden aan (met ?test).' },
  oneApp: { store: 'telefoon', kind: 'tester', file: 'src/lib/oneApp.ts', wat: '"Eén app" aan op deze telefoon (met ?nieuw=1).' },
  admin: { store: 'telefoon', kind: 'tester', file: 'src/lib/adminLock.ts', wat: 'De beheerpagina is geopend met het wachtwoord.' },
  be: { store: 'tabblad', kind: 'tester', file: 'src/content/regels/be/live.ts', wat: 'België aan tijdens het ontwikkelen (met ?be=1).' },
  rules: { store: 'tabblad', kind: 'tester', file: 'src/lib/track.ts', wat: 'Werkregels aan tijdens het ontwikkelen (met ?rules=1).' },
  demoOn: { store: 'telefoon', kind: 'tester', file: 'src/lib/demo.ts', wat: 'De demo voor begeleiders staat aan.' },
  demoOwn: { store: 'telefoon', kind: 'tester', file: 'src/lib/demo.ts', wat: 'De eigen voortgang van de begeleider, weggezet tijdens de demo.' },
  demoStopped: { store: 'tabblad', kind: 'tester', file: 'src/lib/demo.ts', wat: 'De demo is net gestopt.' },
};

const STORE_LINES: Record<StoreName, Line> = {
  offlineCache: { store: 'cache', kind: 'techniek', file: 'src/lib/offline.ts', wat: 'De lessen en opnames die op de telefoon staan.' },
  toetsDb: { store: 'databank', kind: 'techniek', file: 'src/lib/toetsVoice.ts', wat: 'De zin die de leerling insprak bij de toets, toen en nu.' },
  firstVoiceDb: { store: 'databank', kind: 'techniek', file: 'src/lib/firstVoice.ts', wat: 'De eerste opname van een zin, voor "Toen en nu".' },
};

/** Every line, the keys first (in the order written above), then the databases and the cache. */
export const STORED_KEYS: StoredKey[] = [
  ...(Object.keys(KEY_LINES) as KeyName[]).map((name) => ({ key: KEYS[name], ref: `KEYS.${name}`, ...KEY_LINES[name] })),
  ...(Object.keys(STORE_LINES) as StoreName[]).map((name) => ({ key: STORES[name], ref: `STORES.${name}`, ...STORE_LINES[name] })),
];

/** The one key that travels in the backup file (backupFile in src/lib/progress.ts). */
export const IN_BACKUP: string = KEYS.progress;
