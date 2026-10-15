/**
 * What changed in Vloertaal, newest first, in plain Dutch for coaches, teachers and partners.
 * Shown in two places from this one list: the date of the newest entry at the bottom of "Over"
 * ("Laatst bijgewerkt"), and the page vloertaal.nl/nieuw (made at build time, vite.config.ts).
 *
 * Adding an update: put a new entry at the top, with the date it goes live (YYYY-MM-DD) and a
 * few short lines. One line = one change a user or coach would notice.
 */
export interface Update {
  /** YYYY-MM-DD, the day it went live. */
  date: string;
  items: string[];
}

export const UPDATES: Update[] = [
  {
    date: '2026-10-16',
    items: [
      'De onderwerpen staan nu in 8 thema\'s, zoals "Starten", "Je baan" en "Je rechten". Zo zie je beter waar je bent.',
      'Nieuw onderwerp: In de winkel (vakken vullen, de kassa, wisselgeld, ID vragen).',
      'Nieuw onderwerp: Rekenen (uren en tijden, geld, kilo en meter).',
      'Lange woorden in een titel breken nu netjes af.',
    ],
  },
  {
    date: '2026-10-15',
    items: [
      'De pilot is gestart: Vloertaal staat online op vloertaal.nl.',
      'Bram stelt zich voor: "Hallo, ik ben Bram."',
      'Nieuw bij Over: onze missie, wie Bram is, je privacy, "Goed om te weten" en een contactadres (hoi@vloertaal.nl).',
      'Over Vloertaal kun je nu ook in het Nederlands lezen, met de knop NL.',
      'Uitleg over 112 verbeterd: ook bij brand of een misdrijf dat nu gebeurt.',
      'Tips over uitbuiting verwijzen naar de vakbond, het Juridisch Loket of FairWork.',
      'Betere Nederlandse zinnen: "Het heeft spoed." en "Wilt u even tegen mijn telefoon praten?"',
      'De stem zegt "app" nu goed (als "ep").',
      'De knop met de schildpad (langzaam voorlezen) is groter.',
      'Vlaggen bij de talen, alleen waar dat niet gevoelig is.',
      'Bram zwaait nu goed, met zijn handpalm naar voren.',
      'Alle vertalingen in 9 talen gecontroleerd met een blinde terugvertaling. Zo\'n 90 fouten in de betekenis en 560 kleinere punten zijn verbeterd.',
      'Nieuw logo: Bram met de V op zijn helm. Bram zegt rustig één zin op het beginscherm en na een les.',
      'Echte meervouden in het Pools, Oekraïens, Roemeens, Arabisch en Bulgaars.',
      'Latere lessen worden stap voor stap moeilijker. "Herhaal vandaag" wisselt meer af.',
    ],
  },
];

/** The date of the newest update. */
export const LAST_UPDATE = UPDATES[0].date;

/** "15 oktober 2026" in a language (Dutch by default). */
export function updateDate(day: string, locale = 'nl-NL'): string {
  const [y, m, d] = day.split('-').map(Number);
  try {
    return new Date(y, m - 1, d).toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });
  } catch {
    return new Date(y, m - 1, d).toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' });
  }
}
