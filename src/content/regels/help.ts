/**
 * "Wie bel je?" on the Hulp tab of the work-rules track (RulesHelp in src/components/Screens.tsx):
 * where to call or go, in plain Dutch. Each row is one tap: a phone number or a site (`href`), or,
 * when there is no one number for everyone (the huisartsenpost, your own vertrouwenspersoon), one
 * speaker that reads the row.
 *
 * The numbers are the ones the lessons use (src/content/regels/units, src/content/work.ts) and
 * docs/werkregels-bronnen.md. A number or site that is in none of them is marked `// ⚖️ check`:
 * the expert checks it with the ⚖️ facts before the track goes live (docs/livegang.md).
 */
export interface HelpRow {
  id: string;
  /** Who it is, as people say it. */
  name: string;
  /** One plain line: when you call or go there. */
  when: string;
  /** The number or site as text ("0800-8020"), or where to find it. */
  show: string;
  /** One tap: `tel:` or `https:`. Without it, the row has one speaker instead. */
  href?: string;
  /** The picture beside the name (decoration). */
  emoji: string;
}

/**
 * The rows in alphabetical order (as a learner reads the names, without "de" or "het": "De gemeente"
 * under G), with 112 always on top: in an emergency it must be the first thing you see.
 */
const sortName = (r: HelpRow) => r.name.replace(/^(de|het)\s+/i, '');
function alphabetical(rows: HelpRow[]): HelpRow[] {
  const sos = rows.filter((r) => r.id === 'h.112');
  const rest = rows.filter((r) => r.id !== 'h.112').sort((a, b) => sortName(a).localeCompare(sortName(b), 'nl', { sensitivity: 'base' }));
  return [...sos, ...rest];
}

export const HELP_ROWS: HelpRow[] = alphabetical([
  {
    // No one-tap call: a tap by accident, or "to try", would dial the emergency number (feedback from an NT2 teacher, 29 okt 2026).
    // ⚖️ check: misuse of 112 is punishable (art. 142 Sr)
    id: 'h.112', emoji: '🚨', name: '112',
    when: 'Bij nood: levensgevaar, brand of een misdrijf dat nu gebeurt. Bel alleen bij echte nood. Voor niks bellen is strafbaar.',
    show: '112',
  },
  {
    // There is no one national number: each region has its own post.
    id: 'h.huisartsenpost', emoji: '🏥', name: 'Huisartsenpost',
    when: 'Je huisarts is dicht en het kan niet wachten tot morgen.',
    show: 'Het nummer staat op de site van je huisarts.',
  },
  {
    id: 'h.politie', emoji: '👮', name: 'Politie, geen spoed',
    when: 'Je wilt iets melden of aangifte doen, maar het is geen nood.',
    show: '0900-8844', href: 'tel:09008844', // ⚖️ check: not yet in our content or sources
  },
  {
    id: 'h.vertrouwenspersoon', emoji: '🛡️', name: 'Vertrouwenspersoon',
    when: 'Op je werk, als die er is. Voor pesten, intimidatie of discriminatie.',
    show: 'Vraag HR of je leidinggevende wie het is.',
  },
  {
    // The lessons send you here (rechten.1, stage.3, meedoen.2): a site, no one number for everyone.
    id: 'h.discriminatie', emoji: '📣', name: 'Discriminatie melden',
    when: 'Iemand discrimineert je, op je werk of ergens anders. Melden helpt, ook voor anderen.',
    show: 'discriminatie.nl', href: 'https://www.discriminatie.nl', // ⚖️ check: the www. address still works
  },
  {
    id: 'h.juridischloket', emoji: '⚖️', name: 'Juridisch Loket',
    when: 'Gratis advies over je contract, je loon of ontslag.',
    show: '0800-8020 (gratis)', href: 'tel:08008020',
  },
  {
    id: 'h.arbeidsinspectie', emoji: '🔍', name: 'Nederlandse Arbeidsinspectie',
    when: 'Onveilig werk, te weinig loon of uitbuiting melden. Dat kan ook anoniem.',
    show: '0800-5151', href: 'tel:08005151',
  },
  {
    id: 'h.fairwork', emoji: '🤝', name: 'FairWork',
    when: 'Iemand buit je uit op je werk, of je denkt dat het zo is.',
    show: 'fairwork.nu', href: 'https://www.fairwork.nu', // ⚖️ check: still the right place (werkregels-bronnen.md, 5.28)
  },
  {
    id: 'h.vakbond', emoji: '✊', name: 'Vakbond (FNV of CNV)',
    when: 'Hulp en advies over je werk. Leden krijgen ook hulp van een jurist.',
    show: 'fnv.nl · cnv.nl',
  },
  {
    id: 'h.meldmisdaad', emoji: '📞', name: 'Meld Misdaad Anoniem',
    when: 'Je weet iets van een misdrijf, maar je wilt je naam niet geven.',
    show: '0800-7000', href: 'tel:08007000',
  },
  {
    id: 'h.uwv', emoji: '📄', name: 'UWV',
    when: 'Je hebt geen werk meer. Of je bent ziek en hebt geen werkgever.',
    show: 'uwv.nl', href: 'https://www.uwv.nl',
  },
  {
    id: 'h.gemeente', emoji: '🏛️', name: 'De gemeente',
    when: 'Je hebt schulden of je komt niet rond. Hulp bij schulden is gratis.',
    show: 'Bel je gemeente of kijk op de site.',
  },
  {
    id: 'h.geldfit', emoji: '💶', name: 'Geldfit',
    when: 'Vragen over geld of schulden. Gratis en anoniem.',
    show: '0800-8115', href: 'tel:08008115',
  },
]);

/**
 * "Wie bel je?" for a learner who works in Belgium (Settings: "In welk land werk je?", Vlaanderen).
 * These rows say where to ask in Flanders instead of the Dutch places, and match the places the
 * Belgian lessons (src/content/regels/be/units) send you to. First version (30 okt 2026): every
 * name, number and site has a ⚖️ check, see docs/belgie-vlaanderen-plan.md. Inhoudsronde 2 (31 okt
 * 2026): Unia and 1712 added, because the lessons send learners there (rechten.1 and rechten.2) and
 * the tab did not have them.
 */
export const HELP_ROWS_BE: HelpRow[] = alphabetical([
  // ⚖️ check: the row says misuse of 112 is punishable; the note above (art. 142 Sr) is Dutch law. The Belgian article is not checked yet (probably the wet elektronische communicatie of 13 juni 2005; 112.be)
  HELP_ROWS[0],
  {
    // ⚖️ check: 1733 is the number for the huisarts van wacht in Belgium (evenings, nights, weekends)
    id: 'h.be.wacht', emoji: '🏥', name: 'Huisarts van wacht',
    when: 'Je bent ziek, het kan niet wachten en je eigen huisarts is dicht.',
    show: '1733', href: 'tel:1733',
  },
  {
    // ⚖️ check: the three big unions of Belgium and their sites. Inhoudsronde 2: hetacv.be instead of
    // acv-csc.be, the address the lessons cite (be/units/*: "hetacv.be"); acv-csc.be is the bilingual one.
    id: 'h.be.vakbond', emoji: '✊', name: 'Vakbond (ACV, ABVV of ACLVB)',
    when: 'Hulp bij je loon, je contract of als je werk stopt. Leden krijgen ook hulp.',
    show: 'hetacv.be · abvv.be · aclvb.be',
  },
  {
    // ⚖️ check: Toezicht op de Sociale Wetten (FOD WASO) takes complaints about pay and contracts
    id: 'h.be.tsw', emoji: '🔍', name: 'Toezicht op de Sociale Wetten',
    when: 'Je krijgt te weinig loon, of je werkt zonder contract.',
    show: 'werk.belgie.be', href: 'https://werk.belgie.be',
  },
  {
    // ⚖️ check: juridische eerstelijnsbijstand: a free first advice from a lawyer, for everyone, at a
    // justitiehuis or another place of the Commissie voor Juridische Bijstand (decreet 26 april 2019;
    // vlaanderen.be "Juridische eerstelijnsbijstand" and "Justitiehuizen", search results of 31
    // October 2026: vlaanderen.be could not be opened from this session). Also the Taal track's Hulp tab.
    id: 'h.be.justitiehuis', emoji: '⚖️', name: 'Justitiehuis',
    when: 'Gratis eerste advies van een advocaat over je contract of loon.',
    show: 'vlaanderen.be/justitiehuizen', href: 'https://www.vlaanderen.be/justitiehuizen',
  },
  {
    // ⚖️ check: Payoke (Antwerpen), PAG-ASA (Brussel) and Sürya (Luik) are the three recognised
    // centres for victims of human trafficking, also economic exploitation (KB 18 april 2013; Myria;
    // their sites from a search result of 31 October 2026, not opened). Also the Taal track's Hulp tab.
    id: 'h.be.payoke', emoji: '🤝', name: 'Payoke, PAG-ASA of Sürya',
    when: 'Iemand buit je uit op je werk, of je denkt dat het zo is.',
    show: 'payoke.be · pag-asa.be', href: 'https://www.payoke.be',
  },
  {
    // ⚖️ check: Unia takes reports of discrimination for free, online or on 0800 12 800 (vlaanderen.be
    // "Unia" and "discriminatie melden"; search results of 31 okt 2026; the opening hours differ per
    // source, so they are not in the row). Be/units/rechten.ts sends you here (r.be.l.rechten.1).
    id: 'h.be.unia', emoji: '📣', name: 'Unia',
    when: 'Iemand discrimineert je, op je werk of ergens anders. Melden is gratis.',
    show: '0800 12 800 (gratis)', href: 'tel:080012800',
  },
  {
    // ⚖️ check: 1712 is the free, anonymous helpline of Flanders for violence, abuse and child abuse
    // (vlaanderen.be "Hulplijn geweld, misbruik en kindermishandeling 1712"; 1712.be; search results of
    // 31 okt 2026). Be/units/rechten.ts sends you here (r.be.l.rechten.2).
    id: 'h.be.1712', emoji: '💬', name: '1712',
    when: 'Geweld, misbruik of seksueel geweld, ook op je werk. Gratis en anoniem.',
    show: '1712', href: 'tel:1712',
  },
  {
    // ⚖️ check: VDAB, the public employment service of Flanders
    id: 'h.be.vdab', emoji: '📄', name: 'VDAB',
    when: 'Je zoekt werk of een opleiding. Of je wilt Nederlands leren.',
    show: 'vdab.be', href: 'https://www.vdab.be',
  },
  {
    // ⚖️ check: Agentschap Integratie en Inburgering (Vlaanderen)
    id: 'h.be.inburgering', emoji: '🏛️', name: 'Agentschap Integratie en Inburgering',
    when: 'Vragen over inburgering, je papieren of Nederlandse les.',
    show: 'integratie-inburgering.be', href: 'https://www.integratie-inburgering.be',
  },
]);

/** The rows of "Wie bel je?" for the country the learner works in. */
export const helpRowsFor = (country?: 'nl' | 'be'): HelpRow[] => (country === 'be' ? HELP_ROWS_BE : HELP_ROWS);

/** The text the speaker of a row reads (a row without a link). */
export const helpRowText = (row: HelpRow): string => `${row.name}. ${row.when} ${row.show}`;
