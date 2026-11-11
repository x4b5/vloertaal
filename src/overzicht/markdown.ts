import { LEARNER_KINDS, LEARNER_ROWS } from './learners';
import { MOMENTS, PLACES, momentsAt, type Place } from './moments';
import type { Learner } from '../lib/learner';
import { GROUPS, SCREENS, START_STEPS, TABS } from './screens';
import { IN_BACKUP, KIND_NL, STORED_KEYS, STORE_NL, type Kind } from './storageKeys';
import { ADDRESSES, SWITCHES } from './switches';

/**
 * docs/overzicht.md: the map of the app in plain Dutch, for the owner (who does not read code).
 * Written by `npm run overzicht` from the four lists in this folder; tests/overzicht.test.ts
 * fails while the file is behind.
 */
const cell = (s: string) => s.replace(/\|/g, '\\|');
const row = (...cells: string[]) => `| ${cells.map(cell).join(' | ')} |`;
const table = (head: string[], rows: string[][]) => [row(...head), row(...head.map(() => '---')), ...rows.map((r) => row(...r))].join('\n');

const KINDS: Kind[] = ['voortgang', 'keuze', 'gezien', 'techniek', 'telling', 'tester'];
const PLACE_ORDER: Place[] = ['openen', 'thuis-kaart', 'thuis-regel', 'uitslag', 'na-uitslag', 'in-de-les'];

export function overzichtMarkdown(): string {
  const out: string[] = [];
  const screens = Object.values(SCREENS);
  const loose = STORED_KEYS.filter((k) => k.key !== IN_BACKUP);

  out.push(
    '# Overzicht van de app',
    '',
    '> Dit document maakt de app zelf: `npm run overzicht`. Verander het niet met de hand.',
    '> De bron staat in `src/overzicht/`. Komt er een scherm, een schakelaar of een opslagsleutel bij',
    '> zonder regel hier, dan falen de tests.',
    '',
    'Vijf lijsten, in gewone taal:',
    '',
    `1. [Wat staat aan en uit](#1-wat-staat-aan-en-uit): ${SWITCHES.length} schakelaars`,
    `2. [Wie krijgt wat](#2-wie-krijgt-wat): ${LEARNER_KINDS.length} soorten leerlingen`,
    `3. [Wat de app uit zichzelf laat zien](#3-wat-de-app-uit-zichzelf-laat-zien): ${MOMENTS.length} momenten`,
    `4. [Alle schermen](#4-alle-schermen): ${screens.length} schermen`,
    `5. [Wat de telefoon onthoudt](#5-wat-de-telefoon-onthoudt): ${STORED_KEYS.length} plekken`,
    '',
  );

  out.push('## 1. Wat staat aan en uit', '');
  out.push(table(
    ['Schakelaar', 'Nu', 'Wat dat betekent', 'Proberen op één telefoon', 'Waar'],
    SWITCHES.map((s) => [s.naam, s.on ? '**aan**' : '**uit**', s.on ? s.aan : s.uit, s.proef ?? 'kan niet', `\`${s.file}\``]),
  ));
  out.push('', 'Omzetten: verander `true` of `false` in het bestand uit de laatste kolom, en zet een regel in het logboek (`src/content/updates.ts`).', '');
  out.push('### Wat een adres kan doen', '');
  out.push(table(['Adres op vloertaal.nl', 'Wat het doet'], ADDRESSES.map((a) => [`\`${a.adres}\``, a.wat])));
  out.push('');

  out.push('## 2. Wie krijgt wat', '');
  out.push(
    'De hulptaal bepaalt de cursus. Deze tabel is het antwoord van de app zelf: één functie (`learnerOf` in `src/lib/learner.ts`) zegt per leerling wat die krijgt.',
    '',
  );
  const keys = Object.keys(LEARNER_ROWS) as (keyof Learner)[];
  const answer = <K extends keyof Learner>(k: K, me: Learner) => LEARNER_ROWS[k].antwoord(me[k]);
  out.push(table(['', ...LEARNER_KINDS.map((k) => `**${k.naam}**`)], [
    ['Kiest bij de start', ...LEARNER_KINDS.map((k) => k.kiest)],
    ...keys.map((k) => [LEARNER_ROWS[k].vraag, ...LEARNER_KINDS.map((kind) => answer(k, kind.me))]),
  ]));
  out.push(
    '',
    'Wat een leerling krijgt, vragen de schermen aan deze functie. Een test houdt tegen dat een bestand het rechtstreeks uit het spoor afleidt. Wat wel overal mag: de cursus als lijst opvragen ("geef de onderwerpen van Taal").',
    '',
  );

  out.push('## 3. Wat de app uit zichzelf laat zien', '');
  out.push('Alles wat de leerling niet zelf opzoekt: een kaart, een vraag, een aanbod. Per plek staat wat voorgaat.', '');
  for (const plek of PLACE_ORDER) {
    const here = momentsAt(plek);
    out.push(`### ${PLACES[plek].titel}`, '', PLACES[plek].regel, '');
    out.push(table(['', 'Wat de leerling leest', 'Wanneer', 'Hoe vaak', 'In de code'], here.map((m, i) => [String(i + 1), `**${m.naam}**`, m.wanneer, m.onthoudt, `\`${m.code}\``])));
    out.push('');
  }
  out.push(
    'Wat voorgaat staat op twee plekken in de code, en de app leest ze zelf: `src/lib/momentOrder.ts` (de kaarten op Route, en de vragen en rijen op de uitslag) en `src/lib/afterLesson.ts` (na de uitslag). Deze lijst volgt die volgorde vanzelf.',
    '',
    'Niet in deze lijst, want altijd aanwezig: de zin van Bram, de herhaling van vandaag, en in Werkregels de regel "Over deze regels".',
    '',
  );

  out.push('## 4. Alle schermen', '');
  out.push('### De vier tabbladen onderaan', '', ...Object.values(TABS).map((t) => `- ${t}`), '');
  out.push('### De start, één vraag per pagina', '', ...Object.values(START_STEPS).map((t, i) => `${i + 1}. ${t}`), '');
  for (const groep of GROUPS) {
    const here = screens.filter((s) => s.groep === groep);
    out.push(`### ${groep[0].toUpperCase()}${groep.slice(1)}`, '');
    out.push(table(['Scherm', 'Wat er staat', 'Hoe je er komt'], here.map((s) => [`**${s.naam}**`, s.wat, s.via])));
    out.push('');
  }

  out.push('## 5. Wat de telefoon onthoudt', '');
  out.push(
    'Alles blijft op de telefoon. Er gaat niets naar een server.',
    '',
    `**In de reservekopie zit alleen de voortgang** (\`${IN_BACKUP}\`). De andere ${loose.length} plekken gaan niet mee naar een nieuwe telefoon.`,
    '',
  );
  for (const kind of KINDS) {
    const here = STORED_KEYS.filter((k) => k.kind === kind);
    if (!here.length) continue;
    out.push(`### ${KIND_NL[kind]} (${here.length})`, '');
    out.push(table(['Wat de telefoon onthoudt', 'Hoe lang', 'Sleutel', 'Waar'], here.map((k) => [k.wat, STORE_NL[k.store], `\`${k.key}\``, `\`${k.file}\``])));
    out.push('');
  }

  return `${out.join('\n').trimEnd()}\n`;
}
