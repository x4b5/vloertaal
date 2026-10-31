import { beTip } from '../helpers';
import type { BeTaal } from '../types';

/**
 * The Belgian version of "Werk en contract" (u.contract), a B unit (docs/taal-belgie.md): the Dutch
 * lessons with the lines that are said or done otherwise in Flanders, and a Belgian tip per lesson.
 *  - l.findwork: het uitzendbureau → het interimkantoor; "tijdelijk of vast" → bepaalde of
 *    onbepaalde tijd; tip: a contract on paper, the Dimona, an interim office is free.
 *  - l.contract (C in the inventory, written as B lines): no proeftijd (eenheidsstatuut), the
 *    opzegtermijn and opzegvergoeding, deeltijds with a variabel uurrooster instead of de
 *    oproepkracht, het paritair comité instead of de cao, and the C4.
 *  - l.agency: de interimkracht, de consulent, the dagcontract; tip: the interim office is your
 *    employer (Uitzendarbeidswet), same pay, a contract within 2 working days.
 *  - l.permit: de zelfstandige; tip: inburgering in Flanders, the Dimona, schijnzelfstandigheid.
 * The facts are the ones of the Belgian Werkregels unit contract (src/content/regels/be/units/
 * contract.ts), so both tracks say the same. Translations: src/i18n/be/units/contract.ts.
 *
 * Sources: werk.belgie.be could not be opened from the Werkregels session (30 October 2026); the
 * facts there come from search results, cited per note. No expert has checked the ⚖️ notes below
 * yet (the track shows its beta line until one has).
 */

// The Belgian closing line (src/lib/tipText.ts BE_ADVICE_LINE), written out here: importing it
// from tipText would make an import cycle (tipText → taalBe → this file).
const BE_ADVICE = 'General information. For your situation: ask your employer, the union or the justitiehuis (free legal advice).';

// ⚖️ check: In Flanders a temp agency is an interimkantoor; the temp worker an interimkracht; the
// contact person at the office a consulent ⚖️ (federgon.be; Werkregels contract.ts, les 3).
// ⚖️ check: A contract for a fixed time (bepaalde tijd) must be in writing at the latest when the
// work starts; else it counts as open-ended (onbepaalde tijd) ⚖️ (Arbeidsovereenkomstenwet 3 juli
// 1978, art. 9; Werkregels contract.ts r.be.l.contract.1).
// ⚖️ check: Part-time (deeltijds) work with a variabel uurrooster takes the place of the Dutch
// oproepkracht; the sector's rules come from the paritair comité, not a "cao" by that name ⚖️
// (werk.belgie.be "paritaire comités"; programmawet 22 december 1989, art. 159).
// ⚖️ check: The old proeftijd no longer exists; the employer gives an opzegtermijn or pays an
// opzegvergoeding ⚖️ (Wet eenheidsstatuut 26 december 2013; Arbeidsovereenkomstenwet art. 37 and 39).
// ⚖️ check: At the end of the contract the employer gives a C4 (werkloosheidsbewijs) ⚖️ (rva.be;
// KB 25 november 1991, art. 137).
// ⚖️ check: A dagcontract is an interim contract for one day ⚖️ (Uitzendarbeidswet art. 8bis; federgon.be).
// ⚖️ check: A zelfstandige works for himself or herself, not under an employer's authority ⚖️
// (Arbeidsrelatiewet 27 december 2006; vlaio.be "je statuut als zelfstandige").
const lines: BeTaal['lines'] = {
  // l.findwork
  'w.uitzendbureau': { nl: 'het interimkantoor', en: 'the temp agency (interim office)', picture: 'same' },
  's.findwork.2': { nl: 'Is het contract voor bepaalde of onbepaalde tijd?', en: 'Is the contract for a fixed time or open-ended?' },
  // l.contract
  'w.oproepkracht': { nl: 'deeltijds', en: 'part-time', emoji: '⏱️', picture: false },
  'w.proeftijd': { nl: 'de opzegvergoeding', en: 'the notice pay (your wage for the notice time)', emoji: '💶' },
  'w.cao': { nl: 'het paritair comité', en: 'the joint committee (it makes the rules of your sector)' },
  's.contract.2': { nl: 'Mijn contract stopt. Wanneer krijg ik mijn C4?', en: 'My contract is ending. When do I get my C4?' },
  's.contract.3': { nl: 'Onder welk paritair comité val ik?', en: 'Which joint committee am I under?' },
  // l.agency
  'w.uitzendkracht': { nl: 'de interimkracht', en: 'the temp worker (interim worker)', picture: 'same' },
  'w.intercedent': { nl: 'de consulent', en: 'the agency contact person (at the interim office)', picture: 'same' },
  's.agency.1': { nl: 'Ik werk via een interimkantoor.', en: 'I work through a temp agency (interim office).' },
  's.agency.2': { nl: 'Krijg ik morgen weer een dagcontract?', en: 'Do I get a day contract (a contract for one day) again tomorrow?' },
  // l.permit
  'w.zzper': { nl: 'de zelfstandige', en: 'the self-employed worker (you work for yourself)' },
  's.permit.2': { nl: 'Ben ik werknemer of zelfstandige?', en: 'Am I an employee or self-employed?' },
  's.permit.3': { nl: 'Ik werk deeltijds.', en: 'I work part-time.' },
};

const tips = [
  // ⚖️ check: A contract for a fixed time (bepaalde tijd) must be in writing, at the latest when you
  // start ⚖️ (Arbeidsovereenkomstenwet art. 9; lexgo.be 5839).
  // ⚖️ check: A part-time contract must be in writing, at the latest when you start, with the hours
  // ⚖️ (Arbeidsovereenkomstenwet art. 11bis).
  // ⚖️ check: The employer makes a Dimona declaration to the social security before you start ⚖️
  // (socialsecurity.be "Dimona"; wet 30 april 1999; Werkregels contract.ts r.be.l.contract.1.wd3).
  // ⚖️ check: Signing up at an interim office is free; an office may not ask a job seeker for money
  // ⚖️ (Decreet private arbeidsbemiddeling 10 december 2010, art. 5, 9°; federgon.be).
  {
    ...beTip({
      slug: 'findwork',
      lessonId: 'l.findwork',
      emoji: '📄',
      title: 'Get your contract on paper',
      body: `Always ask for a written contract and a copy for yourself. A contract for a fixed time (bepaalde tijd) or a part-time contract must be on paper when you start. Read it before you sign, or ask someone you trust to help you. Before your first day, your employer reports you to the social security: the Dimona. An interim office (interimkantoor) may not ask you for money to find you a job. ${BE_ADVICE}`,
      phrase: ['Mag ik het contract eerst lezen?', 'May I read the contract first?'],
      situation: 'A new employer says: "Sign here now. You can read it later." What do you do?',
      options: [
        'Ask for time to read it, or for a copy.',
        'Sign quickly, so you do not lose the job.',
        'Sign, and ask for a copy afterwards.',
      ],
      why: 'Your contract says what you earn and what your rights are. A good employer gives you time to read it. You may ask about everything you do not understand.',
    }),
  },
  // ⚖️ check: The trial period (proefbeding) was abolished for contracts that start from 1 January
  // 2014 ⚖️ (Wet eenheidsstatuut 26 december 2013; werk.belgie.be "opzeggingstermijnen vanaf 1
  // januari 2014"). Sources disagree on a "kind of trial period" since 2026 (Securex: not formally;
  // Loyens & Loeff: a return): the tip says only that the notice period is short in the first months.
  // ⚖️ check: The employer who wants to stop gives a notice period (opzegtermijn), in writing, or
  // pays the wage for that time (opzegvergoeding) ⚖️ (Arbeidsovereenkomstenwet art. 37 and 39).
  // ⚖️ check: In the first months the notice period is short; for contracts from 1 August 2026, 1
  // week in the first 6 months (Securex, juni 2026; oeccbb.be; wet 18 mei 2026 or 3 juni 2026:
  // sources disagree, so no number in the tip) ⚖️ (Werkregels contract.ts r.be.l.contract.2.ru1).
  // ⚖️ check: Part-time with a variabel uurrooster: you get your schedule 7 working days in
  // advance; a sector agreement can make it shorter, but not shorter than 3 working days ⚖️
  // (programmawet 22 december 1989, art. 159; securex.be; werk.belgie.be "variabele werkroosters",
  // not opened on 30 October 2026).
  // ⚖️ check: The paritair comité makes the agreements of a sector (loon, uren, regels) ⚖️
  // (werk.belgie.be "paritaire comités").
  // ⚖️ check: At the end of the contract the employer gives a C4; you need it for an unemployment
  // benefit (RVA) ⚖️ (rva.be; KB 25 november 1991, art. 137).
  {
    ...beTip({
      slug: 'contract',
      lessonId: 'l.contract',
      emoji: '📆',
      title: 'No trial period, but a notice period',
      body: `The old trial period (proeftijd) no longer exists. From the start, you have a notice period (opzegtermijn). In the first months it is short. Does your employer want to stop? Then they give you notice in writing, or they pay your wage for that time (opzegvergoeding). Part-time with changing hours? You get your work schedule (uurrooster) in advance: usually 7 working days before. Your sector can make that shorter, but not shorter than 3. The rules of your sector come from its joint committee (paritair comité). Does your job end? Ask for your C4: you need it for an unemployment benefit. ${BE_ADVICE}`,
      phrase: ['Hoe lang is mijn opzegtermijn? En krijg ik mijn C4?', 'How long is my notice period? And do I get my C4?'],
      situation: 'After three weeks your boss says: "It does not work. Stop tomorrow. You are still in your trial period." What is true?',
      ask: 'which',
      options: [
        'There is no trial period: you get notice or your wage.',
        'In the first weeks, the boss may stop you at once.',
        'You get nothing, because you only worked three weeks.',
      ],
      why: 'The old trial period no longer exists. Also in the first months, you get a notice period, or your wage for that time. Ask for your C4 too. Not sure? Ask the union.',
    }),
  },
  // ⚖️ check: Through an interim office, the office is your employer; you have an interim contract
  // with it, not with the company where you work (the gebruiker) ⚖️ (Uitzendarbeidswet 24 juli 1987,
  // art. 7; federgon.be).
  // ⚖️ check: The interim contract must be in writing, within 2 working days after the start ⚖️
  // (Uitzendarbeidswet art. 8; Werkregels contract.ts: "nakijken").
  // ⚖️ check: An interim worker gets at least the same pay and benefits as a permanent worker of the
  // company in the same job ⚖️ (Uitzendarbeidswet art. 10).
  // ⚖️ check: Signing up at an interim office is free ⚖️ (Decreet private arbeidsbemiddeling 10
  // december 2010, art. 5, 9°).
  // ⚖️ check: Successive day contracts at the same company are only allowed when it can show a real
  // need for flexibility ⚖️ (Uitzendarbeidswet art. 8bis; federgon.be brochure "opeenvolgende
  // dagcontracten", 2023).
  // ⚖️ check: The numbers of the situation (32 and 38 hours, 6 hours) are an example, as in the
  // Dutch tip.
  {
    ...beTip({
      slug: 'agency',
      lessonId: 'l.agency',
      emoji: '🏢',
      title: 'Your interim office is your employer',
      body: `If you work through an interim office (interimkantoor), the office is your employer, not the company where you work. Your contract and your pay come from the office. Your contract must be on paper, at the latest 2 working days after you start. You have a right to at least the same pay as workers of the company who do the same work. Signing up is free: an interim office may never ask you for money. Many day contracts (dagcontracten) in a row are only allowed with a good reason. Keep your own list of the hours you worked, and check them on your payslip (loonbrief). ${BE_ADVICE}`,
      phrase: ['Op mijn loonbrief staan te weinig uren.', 'My payslip shows too few hours.'],
      situation: 'Your payslip (loonbrief) shows 32 hours, but you worked 38. What do you do?',
      options: [
        'Show your own list of hours to the office and ask to fix it.',
        'Say nothing, because it is only 6 hours.',
        'Ask the boss at the company where you work to pay the 6 hours.',
      ],
      why: 'The interim office pays you, so the office must correct the mistake. Your own list of dates and hours helps. Asking about it is your right.',
    }),
  },
  // ⚖️ check: In Flanders the inburgeringstraject is compulsory for many newcomers: Dutch, social
  // orientation, participation; the Agentschap Integratie en Inburgering runs it ⚖️ (decreet 7 juni
  // 2013 betreffende het Vlaamse integratie- en inburgeringsbeleid, gewijzigd 2021;
  // integratiebeleid.be; inburgering.be; Werkregels geld.ts r.be.l.geld.2.wd3).
  // ⚖️ check: Not a Belgian or EU citizen? You often need permission to work (a gecombineerde
  // vergunning or a residence card with access to work); ask before you start, for example at a
  // union or the Agentschap Integratie en Inburgering ⚖️ (vlaanderen.be "arbeidskaart en
  // gecombineerde vergunning", search result; Werkregels contract.ts r.be.l.contract.1.wd3).
  // ⚖️ check: The employer makes a Dimona declaration before you start ⚖️ (socialsecurity.be "Dimona").
  // ⚖️ check: A zelfstandige has no guaranteed wage when sick and no unemployment benefit ⚖️
  // (partena-professional.be "rechten en plichten als zelfstandige"; inasti.be; Werkregels
  // contract.ts r.be.l.contract.4).
  {
    ...beTip({
      slug: 'permit',
      lessonId: 'l.permit',
      emoji: '🧭',
      title: 'Work and integration',
      body: `Do you have to follow the civic integration (inburgering)? In Flanders, the Agentschap Integratie en Inburgering guides you. Tell your employer, and ask early if your Dutch classes can fit around your work schedule (uurrooster). Not sure if you may work here? Check it before you start, for example at a union. Your employer must report you before your first day (Dimona). Do they ask you to work as self-employed (zelfstandige) for this job? A self-employed worker gets no wage when sick, and no unemployment benefit. Ask for advice first. ${BE_ADVICE}`,
      phrase: ['Ik heb op dinsdag les Nederlands. Kan mijn uurrooster daar rekening mee houden?', 'I have a Dutch class on Tuesday. Can my work schedule take that into account?'],
      situation: 'You start a new job. Your Dutch class is on Tuesday mornings, but your work schedule has you working on Tuesdays. What do you do?',
      options: [
        'Tell your supervisor and ask to change the schedule.',
        'Skip the Dutch class, because work comes first.',
        'Stay home on Tuesdays without saying anything.',
      ],
      why: 'Your integration is a duty too. Many employers help when they know it early. Your guide at the Agentschap can also help you fit your classes around your work.',
    }),
  },
];

export const be: BeTaal = { nl: 'u.contract', lines, tips };
