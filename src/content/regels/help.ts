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

export const HELP_ROWS: HelpRow[] = [
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
];

/** The text the speaker of a row reads (a row without a link). */
export const helpRowText = (row: HelpRow): string => `${row.name}. ${row.when} ${row.show}`;
