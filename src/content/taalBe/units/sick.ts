import { beTip } from '../helpers';
import type { BeTaal } from '../types';

/**
 * The Belgian version of "Ziekte" (u.sick), a B unit (docs/taal-belgie.md). Only what differs in
 * Flanders:
 *  - l.illness (in "Verlof en ziekte", u.leave, until 5 November 2026; the lines and the tip came
 *    from ./leave.ts unchanged, with the same ids, so their translations stay in
 *    src/i18n/be/units/leave.ts): de bedrijfsarts → de arbeidsarts (the same drawing), de wachtdag
 *    → het gewaarborgd loon (there is no waiting day), doorbetalen → het ziektebriefje,
 *    betermelden → terugkomen ("betermelden" is Dutch usage: in Flanders you say that you can work
 *    again, that you come back; the same drawing; "Wat kun je nu?" says it too, `kun` below), a
 *    sentence and the chat with the arbeidsarts and the ziektebriefje, and the tip (the note within
 *    2 working days, the gewaarborgd loon, then the ziekenfonds);
 *  - l.backtowork (new, 5 November 2026): the sentence with de bedrijfsarts → de arbeidsarts, and
 *    the tip (no Wet verbetering poortwachter: the re-integratietraject with the arbeidsarts, and
 *    part-time work with a benefit only after asking the ziekenfonds).
 * The other words, sentences and chats are the same in both countries and keep their ids.
 * Translations: src/i18n/be/units/leave.ts (l.illness); the new lines of l.backtowork are not
 * translated yet (a new file src/i18n/be/units/sick.ts, like leave.ts).
 *
 * The facts come from the Belgian Werkregels unit (src/content/regels/be/units/ziek.ts), so both
 * tracks say the same. No expert has checked the ⚖️ notes below yet (the track shows its beta line).
 */

// ⚖️ check: There is no waiting day (carensdag) in Belgium since 1 January 2014; the first 30
// days you get the gewaarborgd loon from your employer ⚖️ (Wet eenheidsstatuut 26 december 2013;
// Arbeidsovereenkomstenwet art. 52 and 70; regels/be/units/ziek.ts).
// ⚖️ check: The occupational doctor of your work is the arbeidsarts (preventieadviseur-arbeidsarts)
// ⚖️ (Welzijnswet 4 augustus 1996; codex boek I titel 4; werk.belgie.be; ziek.ts).
// ⚖️ check: The doctor's note (ziektebriefje, medisch getuigschrift) for your employer says no
// illness ⚖️ (Arbeidsovereenkomstenwet art. 31; beroepsgeheim art. 458 Strafwetboek; ziek.ts).
const lines: BeTaal['lines'] = {
  'w.bedrijfsarts': { nl: 'de arbeidsarts', en: 'the occupational doctor (the doctor of your work)', picture: 'same' },
  // No picture: the Dutch "wachtdag" has a memory picture (a struck-out coin, no pay), which would
  // say the opposite of the guaranteed wage.
  'w.wachtdag': { nl: 'het gewaarborgd loon', en: 'the guaranteed wage (your employer pays the first days you are sick)', emoji: '💶', picture: false },
  'w.doorbetalen': { nl: 'het ziektebriefje', en: 'the sick note (from your doctor)', emoji: '📝' },
  'w.betermelden': { nl: 'terugkomen', en: 'to come back (to work, after an illness)', picture: 'same' },
  's.illness.2': { nl: 'Ik heb een afspraak met de arbeidsarts.', en: 'I have an appointment with the occupational doctor.' },
  'c.illness.a': { nl: 'Dat zeg ik liever niet. Ik heb een ziektebriefje.', en: 'I would rather not say. I have a sick note.' },
  // l.backtowork: the occupational doctor (5 November 2026).
  's.backtowork.3': { nl: 'De arbeidsarts zegt: rustig opbouwen.', en: 'The occupational doctor says: build up slowly.' },
};

/** = BE_ADVICE_LINE (src/lib/tipText.ts), written out: that module imports this one. */
const ADVICE = 'General information. For your situation: ask your employer, the union or the justitiehuis (free legal advice).';

const tips = [
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
  // "Weer aan het werk na ziekte" (l.backtowork, 5 November 2026): coming back well, no guilt.
  // ⚖️ check: Better sooner than the note says? Tell your employer before you come back; with a
  // benefit, also tell the ziekenfonds ⚖️ (riziv.fgov.be; cm.be; regels/be/units/ziek.ts).
  // ⚖️ check: The arbeidsarts looks at what work you can do, and tells your boss no illness ⚖️
  // (codex boek I titel 4; ziek.ts).
  // ⚖️ check: Sick for a longer time: a re-integratietraject, a plan for the return that the worker,
  // the employer and the arbeidsarts make together; since 1 January 2026 the employer can ask for it
  // from the first day ⚖️ (codex boek I titel 4, hoofdstuk VI, "RIT 3.0", KB 17 december 2025;
  // hetacv.be "re-integratie na langdurige ziekte"; ziek.ts). The tip says "can": no date, no week.
  // ⚖️ check: Part-time or adapted work with a benefit only with the permission of the adviserend
  // arts of the ziekenfonds (toegelaten werk, GVU-wet art. 100 §2; riziv.fgov.be; ziek.ts).
  beTip({
    slug: 'backtowork',
    lessonId: 'l.backtowork',
    emoji: '🤗',
    title: 'Coming back step by step',
    body:
      'Are you better? Tell your employer before you come back, also when it is sooner than your sick note says. After a longer illness, you often start step by step: first fewer hours, or lighter work. The occupational doctor (arbeidsarts) looks at what work you can do. ' +
      'Sick for a longer time? Then you, your employer and the arbeidsarts can make a plan together for your return (re-integratietraject). Do you get a benefit from your ziekenfonds? Then ask your ziekenfonds first, before you work part-time. ' +
      'Say clearly what you can do, and what not yet. You do not have to tell colleagues what illness you had. ' +
      ADVICE,
    phrase: ['Dit kan ik al. Dat kan ik nog niet.', 'I can already do this. I cannot do that yet.'],
    situation: 'You were sick for three weeks. On your first day back, your supervisor asks you to lift heavy boxes. The occupational doctor said: only light work for now. What do you do?',
    options: [
      'Say calmly that you can do light work now, and what you cannot do yet.',
      'Lift the boxes anyway: you do not want to be difficult.',
      'Go home without a word.',
    ],
    why: 'Your supervisor wants you back, and healthy. When you say clearly what you can do, they can plan the work. Doing too much too soon can make you sick again.',
  }),
];

/**
 * "Wat kun je nu?" in Belgium: "beter melden" is Dutch usage; in Flanders you say that you can work
 * again (same translation: "report back when I am better"). Until 5 November 2026 this was
 * kjn.u.leave.2 (src/content/kunJeNu.ts).
 */
const kun: BeTaal['kun'] = {
  'kjn.u.sick.1': 'Ik kan me ziek melden en zeggen dat ik weer kan werken.',
};

export const be: BeTaal = { nl: 'u.sick', lines, tips, kun };
