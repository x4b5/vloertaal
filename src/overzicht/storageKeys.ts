/**
 * The register of everything the app keeps on the phone (docs/overzicht.md, "Wat de telefoon
 * onthoudt"). Only described here for now: the code still reads and writes each key itself.
 * tests/overzicht.test.ts fails when a key in the code is missing here, or the other way round.
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

export interface StoredKey {
  key: string;
  store: Store;
  kind: Kind;
  /** What the phone remembers here, in plain Dutch. */
  wat: string;
  /** The file that owns the key. */
  file: string;
}

export const STORED_KEYS: StoredKey[] = [
  { key: 'vloertaal:v1', store: 'telefoon', kind: 'voortgang', file: 'src/lib/progress.ts', wat: 'Alles van de leerling in één bestand: hulptaal, sector, land, lessen die af zijn, woorden om te herhalen, dagen op rij, certificaten, de toets, en de meeste instellingen (kleur, lettergrootte, stem, tempo, rustig scherm).' },

  { key: 'vloertaal:cert-name', store: 'telefoon', kind: 'keuze', file: 'src/lib/certificate.ts', wat: 'De naam op het certificaat.' },
  { key: 'vloertaal:speaking', store: 'telefoon', kind: 'keuze', file: 'src/lib/speaking.ts', wat: 'Spreken oefenen aan of uit.' },
  { key: 'vloertaal:listen', store: 'telefoon', kind: 'keuze', file: 'src/lib/listen.ts', wat: '"Laat de telefoon luisteren (proef)" aan of uit.' },
  { key: 'vloertaal:learn-writing', store: 'telefoon', kind: 'keuze', file: 'src/lib/writing.ts', wat: '"Ik wil ook leren schrijven" aan of uit.' },
  { key: 'vloertaal:writing-input', store: 'telefoon', kind: 'keuze', file: 'src/lib/writing.ts', wat: 'Schrijven met lettertegels of met het toetsenbord.' },
  { key: 'vloertaal:show-english', store: 'telefoon', kind: 'keuze', file: 'src/lib/english.ts', wat: 'Ook Engels laten zien naast de hulptaal.' },
  { key: 'vloertaal:topicsOrder', store: 'telefoon', kind: 'keuze', file: 'src/lib/topicsOrder.ts', wat: 'Alle onderwerpen: op thema of op volgorde.' },
  { key: 'vloertaal:aboutNl', store: 'telefoon', kind: 'keuze', file: 'src/lib/aboutDutch.ts', wat: 'De pagina Over in eenvoudig Nederlands lezen.' },
  { key: 'vloertaal:samen-help', store: 'telefoon', kind: 'keuze', file: 'src/components/Samen.tsx', wat: 'Oefen samen: de vertaling onder elke zin aan of uit.' },
  { key: 'vloertaal:reminder-time', store: 'telefoon', kind: 'keuze', file: 'src/lib/reminder.ts', wat: 'Het tijdstip van de herinnering in de agenda.' },
  { key: 'vloertaal:offline-auto', store: 'telefoon', kind: 'keuze', file: 'src/lib/offline.ts', wat: '"Lessen op deze telefoon" aan of uit.' },
  { key: 'vloertaal:count-off', store: 'telefoon', kind: 'keuze', file: 'src/lib/count.ts', wat: 'De anonieme telling uitgezet.' },
  { key: 'vloertaal.access', store: 'telefoon', kind: 'keuze', file: 'src/lib/access.ts', wat: 'Het niveau van de ingevulde code (volledig, proef of sneak preview).' },

  { key: 'vloertaal:greeted', store: 'telefoon', kind: 'gezien', file: 'src/lib/greeting.ts', wat: 'De dag waarop Bram voor het laatst groette.' },
  { key: 'vloertaal:gevoel', store: 'telefoon', kind: 'gezien', file: 'src/lib/feel.ts', wat: 'Bij welke lessen "Wat vind je van Vloertaal?" al is gevraagd.' },
  { key: 'vloertaal.keepOffered', store: 'telefoon', kind: 'gezien', file: 'src/lib/keepOffered.ts', wat: 'Het aanbod van de herinnering en het beginscherm is getoond.' },
  { key: 'vloertaal:backup-nudge', store: 'telefoon', kind: 'gezien', file: 'src/lib/backupNudge.ts', wat: 'Wanneer "Bewaar je voortgang" is getoond, en of het is weggetikt.' },
  { key: 'vloertaal:work-try', store: 'telefoon', kind: 'gezien', file: 'src/lib/workTry.ts', wat: 'De dag waarop "Probeer het vandaag op je werk" voor het laatst stond.' },
  { key: 'vloertaal:work-try-ask', store: 'telefoon', kind: 'gezien', file: 'src/lib/workTry.ts', wat: 'De zin waar "Gelukt?" nog naar vraagt, en van welke dag.' },
  { key: 'vloertaal:first-times', store: 'telefoon', kind: 'gezien', file: 'src/lib/firstTimes.ts', wat: 'Hoe vaak elke tip al is getoond (een tip staat er alleen de eerste paar keer).' },
  { key: 'vloertaal:shown-how', store: 'telefoon', kind: 'gezien', file: 'src/components/ShowHow.tsx', wat: 'Bij welke oefeningen het handje al heeft voorgedaan hoe het moet.' },
  { key: 'vloertaal:go-known', store: 'telefoon', kind: 'gezien', file: 'src/lib/goKnown.ts', wat: 'De knop "Verder" is al een keer gebruikt (daarna staat er alleen een pijl).' },
  { key: 'vloertaal:no-voice-noted', store: 'telefoon', kind: 'gezien', file: 'src/components/RulesHelp.tsx', wat: 'De regel "deze telefoon heeft geen Nederlandse stem" is getoond.' },
  { key: 'vloertaal:report-hint', store: 'telefoon', kind: 'gezien', file: 'src/lib/report.ts', wat: 'De uitleg bij de knop Melden is getoond.' },
  { key: 'vloertaal:persist-asked', store: 'telefoon', kind: 'gezien', file: 'src/lib/install.ts', wat: 'Wanneer de browser voor het laatst is gevraagd de voortgang te bewaren.' },

  { key: 'vloertaal:resume', store: 'telefoon', kind: 'techniek', file: 'src/lib/resume.ts', wat: 'Een les die halverwege is gestopt, om verder te gaan (hooguit twee dagen).' },
  { key: 'vloertaal.linkedUnit', store: 'telefoon', kind: 'techniek', file: 'src/lib/unitLink.ts', wat: 'Het onderwerp uit een link van de begeleider, tot het lespad het heeft getoond.' },
  { key: 'vloertaal:offline', store: 'telefoon', kind: 'techniek', file: 'src/lib/offline.ts', wat: 'De lijst van onderwerpen die op de telefoon staan.' },
  { key: 'vloertaal:persist', store: 'telefoon', kind: 'techniek', file: 'src/lib/install.ts', wat: 'Het antwoord van de browser op de vraag om de voortgang te bewaren.' },
  { key: 'vloertaal:reminder-uid', store: 'telefoon', kind: 'techniek', file: 'src/lib/reminder.ts', wat: 'Het nummer van de afspraak in de agenda.' },
  { key: 'vloertaal:reminder-seq', store: 'telefoon', kind: 'techniek', file: 'src/lib/reminder.ts', wat: 'De versie van de afspraak in de agenda.' },
  { key: 'vloertaal:update-for', store: 'tabblad', kind: 'techniek', file: 'src/lib/appUpdate.ts', wat: 'Voor welke nieuwe versie de app al opnieuw is geladen.' },
  { key: 'vloertaal:update-reload', store: 'tabblad', kind: 'techniek', file: 'src/lib/appUpdate.ts', wat: 'Wanneer de app voor het laatst opnieuw is geladen na een fout bij het laden.' },
  { key: 'vloertaal-offline-v1', store: 'cache', kind: 'techniek', file: 'src/lib/offline.ts', wat: 'De lessen en opnames die op de telefoon staan.' },
  { key: 'vloertaal-toets', store: 'databank', kind: 'techniek', file: 'src/lib/toetsVoice.ts', wat: 'De zin die de leerling insprak bij de toets, toen en nu.' },
  { key: 'vloertaal-stem', store: 'databank', kind: 'techniek', file: 'src/lib/firstVoice.ts', wat: 'De eerste opname van een zin, voor "Toen en nu".' },

  { key: 'vloertaal:count-dagen', store: 'telefoon', kind: 'telling', file: 'src/lib/count.ts', wat: 'Welke oefendagen (1, 2, 7, 14, 28) al zijn geteld.' },
  { key: 'vloertaal:count-eerste', store: 'telefoon', kind: 'telling', file: 'src/lib/count.ts', wat: 'Of "voor het eerst geopend" en "start af" al zijn geteld.' },

  { key: 'vloertaal:tester', store: 'telefoon', kind: 'tester', file: 'src/lib/report.ts', wat: 'De knop Melden aan (met ?test).' },
  { key: 'vloertaal:nieuw', store: 'telefoon', kind: 'tester', file: 'src/lib/oneApp.ts', wat: '"Eén app" aan op deze telefoon (met ?nieuw=1).' },
  { key: 'vloertaal:admin', store: 'telefoon', kind: 'tester', file: 'src/lib/adminLock.ts', wat: 'De beheerpagina is geopend met het wachtwoord.' },
  { key: 'vloertaal:be', store: 'tabblad', kind: 'tester', file: 'src/content/regels/be/live.ts', wat: 'België aan tijdens het ontwikkelen (met ?be=1).' },
  { key: 'vloertaal:rules', store: 'tabblad', kind: 'tester', file: 'src/lib/track.ts', wat: 'Werkregels aan tijdens het ontwikkelen (met ?rules=1).' },
  { key: 'vloertaal-demo:on', store: 'telefoon', kind: 'tester', file: 'src/lib/demo.ts', wat: 'De demo voor begeleiders staat aan.' },
  { key: 'vloertaal-demo:own', store: 'telefoon', kind: 'tester', file: 'src/lib/demo.ts', wat: 'De eigen voortgang van de begeleider, weggezet tijdens de demo.' },
  { key: 'vloertaal-demo:stopped', store: 'tabblad', kind: 'tester', file: 'src/lib/demo.ts', wat: 'De demo is net gestopt.' },
];

/** The one key that travels in the backup file (backupFile in src/lib/progress.ts). */
export const IN_BACKUP = 'vloertaal:v1';
