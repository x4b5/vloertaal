import { beTip } from '../helpers';
import type { BeTaal } from '../types';

/**
 * The Belgian version of "Verlof en ziekte" (u.leave), a B unit (docs/taal-belgie.md). Only what
 * differs in Flanders:
 *  - l.leave: het calamiteitenverlof → het verlof om dwingende redenen (often unpaid), and the tip
 *    (20 days off after a full year, klein verlet);
 *  - l.illness: de bedrijfsarts → de arbeidsarts (the same drawing), de wachtdag → het gewaarborgd
 *    loon (there is no waiting day), doorbetalen → het ziektebriefje, betermelden → terugkomen
 *    ("betermelden" is Dutch usage: in Flanders you say that you can work again, that you come
 *    back; the same drawing; "Wat kun je nu?" says it too, `kun` below), a sentence and the chat with
 *    the arbeidsarts and the ziektebriefje, and the tip (the note within 2 working days, the
 *    gewaarborgd loon, then the ziekenfonds);
 *  - l.kids: the sentence with het calamiteitenverlof, het zorgverlof → het geboorteverlof, and
 *    the tip (verlof om dwingende redenen, ouderschapsverlof with the RVA, geboorteverlof).
 * The other words, sentences and chats are the same in both countries and keep their ids.
 * Translations: src/i18n/be/units/leave.ts.
 *
 * The facts come from the Belgian Werkregels units (src/content/regels/be/units/ziek.ts and
 * tijd.ts), so both tracks say the same. Their sources were looked up on 30 October 2026 through
 * search results. No expert has checked the ⚖️ notes below yet (the track shows its beta line).
 */

// ⚖️ check: Verlof om dwingende redenen: for an urgent event, like an accident or the illness of
// your child; at most 10 days a year, in principle unpaid ⚖️ (cao nr. 45; KB 1993; aclvb.be
// "verlof om dwingende redenen"; regels/be/units/tijd.ts).
// ⚖️ check: There is no waiting day (carensdag) in Belgium since 1 January 2014; the first 30
// days you get the gewaarborgd loon from your employer ⚖️ (Wet eenheidsstatuut 26 december 2013;
// Arbeidsovereenkomstenwet art. 52 and 70; regels/be/units/ziek.ts).
// ⚖️ check: The occupational doctor of your work is the arbeidsarts (preventieadviseur-arbeidsarts)
// ⚖️ (Welzijnswet 4 augustus 1996; codex boek I titel 4; werk.belgie.be; ziek.ts).
// ⚖️ check: The doctor's note (ziektebriefje, medisch getuigschrift) for your employer says no
// illness ⚖️ (Arbeidsovereenkomstenwet art. 31; beroepsgeheim art. 458 Strafwetboek; ziek.ts).
// ⚖️ check: Geboorteverlof: leave for the other parent after a birth ⚖️ (Arbeidsovereenkomstenwet
// art. 30 §2; riziv.fgov.be "geboorteverlof voor werknemers"; tijd.ts).
const lines: BeTaal['lines'] = {
  'w.calamiteitenverlof': { nl: 'het verlof om dwingende redenen', en: 'the leave for urgent reasons (often unpaid)' },
  'w.bedrijfsarts': { nl: 'de arbeidsarts', en: 'the occupational doctor (the doctor of your work)', picture: 'same' },
  'w.wachtdag': { nl: 'het gewaarborgd loon', en: 'the guaranteed wage (your employer pays the first days you are sick)', emoji: '💶' },
  'w.doorbetalen': { nl: 'het ziektebriefje', en: 'the sick note (from your doctor)', emoji: '📝' },
  'w.betermelden': { nl: 'terugkomen', en: 'to come back (to work, after an illness)', picture: 'same' },
  's.illness.2': { nl: 'Ik heb een afspraak met de arbeidsarts.', en: 'I have an appointment with the occupational doctor.' },
  'c.illness.a': { nl: 'Dat zeg ik liever niet. Ik heb een ziektebriefje.', en: 'I would rather not say. I have a sick note.' },
  's.kids.2': { nl: 'Mag ik verlof om dwingende redenen opnemen?', en: 'May I take leave for urgent reasons?' },
  'w.zorgverlof': { nl: 'het geboorteverlof', en: 'the birth leave (for the other parent, when a baby is born)', emoji: '👶' },
};

/** = BE_ADVICE_LINE (src/lib/tipText.ts), written out: that module imports this one. */
const ADVICE = 'General information. For your situation: ask your employer, the union or the justitiehuis (free legal advice).';

const tips = [
  // ⚖️ check: Your days off depend on your work in the year before (vakantiedienstjaar) ⚖️
  // (Gecoördineerde wetten jaarlijkse vakantie 28 juni 1971; hetacv.be "jaarlijks verlof en je
  // vakantiegeld"; regels/be/units/tijd.ts).
  // ⚖️ check: A full year full-time in a 5-day week gives 20 days off; the sector sometimes gives
  // more ⚖️ (partena-professional.be "vakantie en vakantiegeld"; securex.be; bijgewerkt oktober
  // 2026; tijd.ts).
  // ⚖️ check: New at work: sometimes Europese vakantie (aanvullende vakantie) in the first year ⚖️
  // (securex.be; student.be; conditions: nakijken; tijd.ts). The tip only says: ask.
  // ⚖️ check: The dates of the days off are agreed with the employer; often there is also a
  // collective closing, like the bouwverlof ⚖️ (KB 30 maart 1967, art. 64-68; securex.be; tijd.ts).
  // ⚖️ check: Verlof om dwingende redenen: at most 10 days a year, in principle unpaid ⚖️ (cao nr.
  // 45; aclvb.be; sectors can give more; tijd.ts).
  // ⚖️ check: Klein verlet: paid days off at events in your family, like a wedding or a funeral ⚖️
  // (KB 28 augustus 1963; werk.belgie.be "lijst klein verlet"; securex.be "wat is klein verlet"; tijd.ts).
  beTip({
    slug: 'leave',
    lessonId: 'l.leave',
    emoji: '🏝️',
    title: 'Holidays and leave for urgent reasons',
    body:
      'Your paid days off depend on how much you worked the year before. A full year full-time, 5 days a week? Then you get 20 days off. Your sector can give more. New at work? Ask what you can get in your first year. ' +
      'You agree on the dates with your employer: ask in time, and in writing. Some companies close for a few weeks, like the building holiday (bouwverlof). ' +
      'A sudden emergency, like an accident or illness in your family? Then you can take leave for urgent reasons (verlof om dwingende redenen): at most 10 days a year, usually without pay. A wedding or a funeral in your family? Then you get a few days off with pay (klein verlet). Tell your employer right away. ' +
      ADVICE,
    phrase: ['Ik wil graag verlof aanvragen voor juli.', 'I would like to ask for leave for July.'],
    situation: 'You want to visit your family abroad for three weeks in summer. What do you do?',
    options: [
      'Ask your employer for leave early, in writing.',
      'Just go, and tell your boss when you are back.',
      'Ask a colleague to tell the boss the day before.',
    ],
    why: 'You agree on the dates of your days off with your employer. Asking early gives the best chance of a yes. Going without a yes can cause big trouble at work.',
  }),
  // ⚖️ check: Tell your employer right away that you are sick; how, is in the work rules
  // (arbeidsreglement) ⚖️ (Arbeidsovereenkomstenwet 3 juli 1978, art. 31 §2; Wet 8 april 1965 op
  // de arbeidsreglementen; regels/be/units/ziek.ts).
  // ⚖️ check: A doctor's note is needed when the employer asks for it or the work rules say so;
  // it must reach the employer within 2 working days, unless the work rules or a sector agreement
  // say another term ⚖️ (Arbeidsovereenkomstenwet art. 31 §2; ziek.ts). The days without a note
  // (sinds 1 januari 2026: 2 keer per jaar 1 dag, not in small companies) changed recently: the
  // tip gives no number (securex.be; vrt.be 29 december 2025; ziek.ts, bijgewerkt oktober 2026).
  // ⚖️ check: The note says no illness; the worker does not have to give the diagnosis ⚖️ (art. 31;
  // beroepsgeheim art. 458 Strafwetboek; ziek.ts).
  // ⚖️ check: At least 1 month in service: the first 30 days the employer pays the gewaarborgd
  // loon (bediende: 100%; arbeider: the first week 100%, then partly, with a supplement of the
  // ziekenfonds) ⚖️ (Arbeidsovereenkomstenwet art. 52 and 70; cao nr. 12bis; abvvmetaal.be;
  // securex.be; bijgewerkt oktober 2026; ziek.ts). So the tip says "your wage, or most of it".
  // ⚖️ check: No waiting day (carensdag) since 1 January 2014 ⚖️ (Wet eenheidsstatuut; ziek.ts).
  // ⚖️ check: After the gewaarborgd loon the ziekenfonds pays a benefit; the form (getuigschrift)
  // goes to the adviserend arts of the ziekenfonds in time ⚖️ (inami.fgov.be "aangifte en
  // erkenning", werknemers; cm.be; the terms differ for arbeider and bediende: no number; ziek.ts).
  // ⚖️ check: The employer may send a controlearts; that doctor tells the employer no diagnosis ⚖️
  // (art. 31 §3; Wet 13 juni 1999 betreffende de controlegeneeskunde; ziek.ts).
  // ⚖️ check: The arbeidsarts has professional secrecy and only tells the employer what work you
  // can do; they help with coming back to work (re-integratie) ⚖️ (codex boek I titel 4; ziek.ts).
  beTip({
    slug: 'illness',
    lessonId: 'l.illness',
    emoji: '👩‍⚕️',
    title: 'Your rights when you are sick',
    body:
      'Sick? Tell your employer right away, as your work rules (arbeidsreglement) say. Often you need a sick note (ziektebriefje) from your doctor. It must reach your employer within 2 working days, unless your work rules say otherwise. The note does not say what illness you have, and your boss may not ask. ' +
      'Have you worked there at least 1 month? Then the first 30 days you get your wage, or most of it (gewaarborgd loon). There are no waiting days without pay. After that, your ziekenfonds pays you a benefit: send its form to the ziekenfonds doctor in time. ' +
      'Your employer may send a control doctor (controlearts) to check that you are sick. The occupational doctor (arbeidsarts) helps you come back to work, and only tells your boss what work you can do. ' +
      ADVICE,
    phrase: ['Ik ben ziek. Mijn ziektebriefje stuur ik vandaag.', 'I am sick. I am sending my sick note today.'],
    situation: 'You are sick at home. Your boss calls and asks: "What illness do you have?" What do you do?',
    options: [
      'Say that you are sick, and send your sick note in time.',
      'Tell everything, because your boss must know it.',
      'Hang up, and send nothing until you are better.',
    ],
    why: 'You do not have to say what illness you have. Your sick note only says how long you are sick. It must reach your employer within 2 working days, unless your work rules say otherwise.',
  }),
  // ⚖️ check: Child suddenly sick: verlof om dwingende redenen, at most 10 days a year, in principle
  // unpaid; sectors can give more ⚖️ (cao nr. 45; aclvb.be; gezinsbond.be; regels/be/units/tijd.ts).
  // ⚖️ check: Caring for longer: ouderschapsverlof (or another thematisch verlof), working less or
  // not, with an onderbrekingsuitkering of the RVA ⚖️ (rva.be; securex.be "tijd voor gezin en zorg";
  // hetacv.be "thematisch verlof"; tijd.ts).
  // ⚖️ check: The employer may not dismiss a pregnant worker for reasons of the pregnancy, from the
  // moment the employer knows ⚖️ (Arbeidswet 16 maart 1971, art. 40; tijd.ts).
  // ⚖️ check: Moederschapsrust: leave before and after the birth, with a benefit of the ziekenfonds
  // ⚖️ (Arbeidswet art. 39; riziv.fgov.be; tijd.ts).
  // ⚖️ check: Geboorteverlof for the other parent: 20 days since 1 January 2023, within 4 months
  // after the birth ⚖️ (riziv.fgov.be "geboorteverlof voor werknemers"; securex.be "hoe lang duurt
  // het geboorteverlof"; bijgewerkt oktober 2026; tijd.ts).
  beTip({
    slug: 'kids',
    lessonId: 'l.kids',
    emoji: '🧒',
    title: 'Your child is sick',
    body:
      'Is your child suddenly sick? Tell your employer right away. You can take leave for urgent reasons (verlof om dwingende redenen): at most 10 days a year, usually without pay. Your sector can give more. ' +
      'Does your child need care for longer? Then you can ask for parental leave (ouderschapsverlof): you work less or not at all, with a benefit from the RVA. ' +
      'Pregnant? Your employer may not fire you because of that. Before and after the birth you get leave (moederschapsrust), with money from your ziekenfonds. Is your partner having a baby? Then you get 20 days of birth leave (geboorteverlof). ' +
      ADVICE,
    phrase: ['Mijn kind is ziek. Kan ik vandaag eerder weg?', 'My child is sick. Can I leave early today?'],
    situation: 'The daycare (kinderopvang) calls you at work. Your child has a fever and must go home. What do you do?',
    options: [
      'Tell your supervisor, and ask for leave for urgent reasons.',
      'Leave without a word, and explain it tomorrow.',
      'Stay at work, and let your child wait until your shift ends.',
    ],
    why: 'A sick child is an emergency at home. When you tell your supervisor first, they can plan the work. This leave is for moments like this, but it is often unpaid.',
  }),
];

/**
 * "Wat kun je nu?" in Belgium: "beter melden" is Dutch usage; in Flanders you say that you can work
 * again (same id, same translation: "report back when I am better").
 */
const kun: BeTaal['kun'] = {
  'kjn.u.leave.2': 'Ik kan me ziek melden en zeggen dat ik weer kan werken.',
};

export const be: BeTaal = { nl: 'u.leave', lines, tips, kun };
