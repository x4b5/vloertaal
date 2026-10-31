import { beTip } from '../helpers';
import type { BeTaal } from '../types';

/**
 * The Belgian version of "Regels en rechten" (u.rights), a B unit (docs/taal-belgie.md). Only what
 * differs in Flanders:
 *  - l.health: de Arbowet → de Welzijnswet, de Arbeidsinspectie → de inspectie (Toezicht op de
 *    Sociale Wetten for hours and pay, Toezicht op het Welzijn op het Werk for safety), and the tip
 *    (a break after 6 hours, not 5.5; 8 hours a day and 38 a week);
 *  - l.rights: het Juridisch Loket → het justitiehuis, and the tip (Unia and the Vlaams
 *    Mensenrechteninstituut, opzegtermijn and opzegvergoeding, the C4, the vakbond and the
 *    syndicale afgevaardigde).
 * The other words, the sentences and the chats are the same in both countries and keep their ids.
 * Translations: src/i18n/be/units/rights.ts.
 *
 * The facts come from the Belgian Werkregels units (src/content/regels/be/units/tijd.ts, veilig.ts,
 * rechten.ts, contract.ts), so both tracks say the same. Their sources were looked up on 30 October
 * 2026 through search results: werk.belgie.be could not be opened from that session (host not
 * reachable). No expert has checked the ⚖️ notes below yet (the track shows its beta line).
 */

// ⚖️ check: The law on well-being at work (Welzijnswet) protects the safety and health of workers
// ⚖️ (Wet van 4 augustus 1996 betreffende het welzijn van de werknemers bij de uitvoering van hun
// werk; codex over het welzijn op het werk; as in regels/be/units/veilig.ts).
// ⚖️ check: The inspection: Toezicht op de Sociale Wetten (pay, hours, contracts) and Toezicht op
// het Welzijn op het Werk (safety), both of FOD WASO ⚖️ (werk.belgie.be, not opened on 30 October
// 2026; regels/be/units/contract.ts and veilig.ts).
// ⚖️ check: Free first legal advice at the justitiehuis (juridische eerstelijnsbijstand) ⚖️
// (vlaanderen.be "Juridische eerstelijnsbijstand"; regels/be/units/rechten.ts).
const lines: BeTaal['lines'] = {
  'w.arbowet': { nl: 'de Welzijnswet', en: 'the law on safety and health at work' },
  'w.arbeidsinspectie': { nl: 'de inspectie', en: 'the labour inspection (it checks the rules at work)' },
  's.health.3': { nl: 'Ik meld het bij de inspectie.', en: 'I report it to the labour inspection.' },
  'w.juridischloket': { nl: 'het justitiehuis', en: 'the justitiehuis (free first legal advice)' },
};

/** = BE_ADVICE_LINE and BE_ABUSE_LINE (src/lib/tipText.ts), written out: that module imports this one. */
const ADVICE = 'General information. For your situation: ask your employer, the union or the justitiehuis (free legal advice).';
const ABUSE = 'General information. For your situation: ask the union, the justitiehuis (free legal advice) or Payoke.';

const tips = [
  // ⚖️ check: Do you work more than 6 hours? Then you get a break ⚖️ (Arbeidswet 16 maart 1971,
  // art. 38quater; werk.belgie.be "rusttijden"; regels/be/units/tijd.ts).
  // ⚖️ check: If the sector has no other rule, the break is at least 15 minutes ⚖️ (securex.be
  // "moeten er pauzes toegekend worden", search result of 30 October 2026; tijd.ts).
  // ⚖️ check: Normally at most 8 hours a day and 38 hours a week on average; the sector can have
  // other rules ⚖️ (Arbeidswet art. 19 and 20; wet 10 augustus 2001 (38-urenweek); securex.be
  // "maximumgrenzen"; bijgewerkt oktober 2026; tijd.ts).
  // ⚖️ check: The employer gives personal protective equipment for free ⚖️ (codex boek IX titel 2;
  // veilig.ts).
  // ⚖️ check: Unsafe work: report it to Toezicht op het Welzijn op het Werk ⚖️ (werk.belgie.be
  // "klacht indienen", not opened on 30 October 2026, nakijken; veilig.ts).
  // ⚖️ check: Too long hours or too little pay: Toezicht op de Sociale Wetten; your name stays
  // secret ⚖️ (werk.belgie.be, not opened on 30 October 2026, nakijken; contract.ts).
  beTip({
    slug: 'health',
    lessonId: 'l.health',
    emoji: '⏸️',
    title: 'Breaks and working hours',
    body:
      'The law protects your safety and health at work (Welzijnswet). Do you work more than 6 hours? Then you get a break. If your sector has no other rule, it is at least 15 minutes. ' +
      'Normally you work at most 8 hours a day, and 38 hours a week on average. Your sector can have other rules. Your employer must give you protective equipment, like safety shoes or gloves, for free. ' +
      'Unsafe work? Report it to Toezicht op het Welzijn op het Werk. Too long hours or too little pay? Report it to Toezicht op de Sociale Wetten. Your name stays secret. ' +
      ADVICE,
    phrase: ['Ik heb nog geen pauze gehad.', 'I have not had a break yet.'],
    situation: 'You have worked 7 hours without a break. Your supervisor asks you to keep going. What do you do?',
    options: [
      'Say that you need your break now.',
      'Keep going, and take a longer break later.',
      'Leave work and go home without a word.',
    ],
    why: 'When you work more than 6 hours, a break is the law, not a favour. Rest also helps you work safely.',
  }),
  // ⚖️ check: Discrimination at work is forbidden, for example because of origin, religion, gender,
  // age or a disability ⚖️ (Antidiscriminatiewet 10 mei 2007; Antiracismewet 30 juli 1981;
  // Genderwet 10 mei 2007; Vlaams decreet gelijke kansen 10 juli 2008; rechten.ts).
  // ⚖️ check: Report it for free to Unia; for Flemish matters, like the VDAB, to the Vlaams
  // Mensenrechteninstituut ⚖️ (vlaanderen.be "discriminatie melden"; unia.be; search results of 30
  // October 2026; which matters exactly: nakijken; rechten.ts).
  // ⚖️ check: The employer who ends the contract gives a notice period (opzegtermijn) or pays the
  // wage for that time (opzegvergoeding), in writing ⚖️ (Arbeidsovereenkomstenwet 3 juli 1978,
  // art. 37, 37/2 and 39; Wet eenheidsstatuut 26 december 2013; rechten.ts, contract.ts). How long:
  // it grows with the years in service, and the rules for the first months changed in 2026, and
  // the sources do not agree (contract.ts): so the tip gives no number.
  // ⚖️ check: The worker may often ask the concrete reasons of the dismissal by registered letter
  // ⚖️ (cao nr. 109, NAR 12 februari 2014; werk.belgie.be "ontslagmotivering"; exceptions, for
  // example the first months: nakijken; rechten.ts).
  // ⚖️ check: The employer gives a C4 (unemployment certificate), at the latest on the last working
  // day ⚖️ (KB 25 november 1991, art. 137; securex.be "het werkloosheidsbewijs C4"; rechten.ts).
  // ⚖️ check: Ending by mutual agreement (onderling akkoord): no notice period by law, and the RVA
  // can see it as unemployment by your own doing, and stop the benefit for a while ⚖️
  // (Werkloosheidsbesluit 25 november 1991, art. 51; jubel.be "na het ontslag: vangnet of
  // uitsluiting"; search results of 30 October 2026; rechten.ts).
  // ⚖️ check: Help: the union (ABVV, ACV, ACLVB), the union representative at work (syndicale
  // afgevaardigde, where there is a union delegation), the justitiehuis ⚖️ (abvv.be, hetacv.be,
  // aclvb.be; cao nr. 5 over de syndicale afvaardiging; help.ts h.be.vakbond).
  beTip({
    slug: 'rights',
    lessonId: 'l.rights',
    emoji: '✊',
    title: 'Discrimination and dismissal',
    body:
      'Discrimination at work is forbidden, for example because of your origin, religion, gender, age or a disability. You can report it for free to Unia. For Flemish services, like the VDAB, you go to the Vlaams Mensenrechteninstituut. ' +
      'Your employer may end your contract, but must give you a notice period (opzegtermijn), or pay your wage for that time (opzegvergoeding). Often you may ask the reasons in a registered letter. When your job ends, you get a C4: you need it for unemployment benefit. ' +
      'Do not sign a paper about your dismissal that you do not understand. Get help first from the union (ABVV, ACV or ACLVB), the union representative at work (syndicale afgevaardigde) or the justitiehuis. ' +
      ABUSE,
    phrase: ['Ik wil eerst advies vragen.', 'I want to ask for advice first.'],
    situation: 'Your boss gives you a paper: "Sign today, then you leave by agreement." You do not understand it well. What do you do?',
    options: [
      'Do not sign yet. Ask for time and get advice first.',
      'Sign it, because the boss says it is fine.',
      'Put the paper away and never talk about it.',
    ],
    why: 'If you sign, you can lose rights: for example your notice period, and your unemployment benefit for a while. Asking for time to get advice is normal and allowed.',
  }),
];

export const be: BeTaal = { nl: 'u.rights', lines, tips };
