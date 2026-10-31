import { beTip } from '../helpers';
import type { BeTaal } from '../types';

/**
 * The Belgian version of "Werk kwijt" (u.lost), a B unit (docs/taal-belgie.md). Only what differs
 * in Flanders:
 *  - l.ww: de WW → de C4, het UWV → de RVA, the sentence with WW and UWV → the VDAB, the chat's
 *    reply (the C4 and the vakbond), and the tip (the C4, the VDAB, the vakbond or the HVW, the RVA
 *    decides, a benefit limited in time);
 *  - l.jobends: the sentences with het Juridisch Loket (→ het justitiehuis) and de zorgverzekering
 *    (→ het ziekenfonds), and the tip (vertrekvakantiegeld or the vakantiekas, the C4, the
 *    ziekenfonds, the gemeente);
 *  - l.newjob: loonstroken → loonbrieven, and the tip (the VDAB, interimkantoren).
 * The other words, sentences and chats are the same in both countries and keep their ids.
 * Translations: src/i18n/be/units/lost.ts.
 *
 * The facts come from the Belgian Werkregels units (src/content/regels/be/units/geld.ts, rechten.ts
 * and contract.ts), so both tracks say the same. Their sources were looked up on 30 October 2026
 * through search results (rva.be and hvw.fgov.be not opened). Where the sources do not agree, or a
 * rule changed in 2026, the tips name no number: how long the benefit lasts, and the days to
 * register at the VDAB. No expert has checked the ⚖️ notes below yet (the track shows its beta line).
 */

// ⚖️ check: The employer gives the C4 (werkloosheidsbewijs) when the job ends, also when a
// temporary contract just ends ⚖️ (KB 25 november 1991, art. 137; securex.be "het
// werkloosheidsbewijs C4"; regels/be/units/geld.ts).
// ⚖️ check: The RVA (Rijksdienst voor Arbeidsvoorziening) decides about the benefit ⚖️ (rva.be; KB
// 25 november 1991; geld.ts).
// ⚖️ check: Register as a job seeker at the VDAB ⚖️ (vdab.be "stappenplan na ontslag"; geld.ts).
// ⚖️ check: You apply for the benefit through a union (ABVV, ACV, ACLVB) or the HVW ⚖️
// (vlaanderen.be "werkloosheidsuitkering"; hvw.fgov.be; geld.ts).
// ⚖️ check: Free first legal advice at the justitiehuis ⚖️ (vlaanderen.be/justitiehuizen; geld.ts).
// ⚖️ check: In Belgium you are insured for your care through your ziekenfonds; with an
// unemployment benefit you usually stay insured ⚖️ (wet 14 juli 1994; riziv.fgov.be;
// inami.fgov.be "beperking van werkloosheid in de tijd: impact op het recht op terugbetaalde zorg";
// geld.ts).
const lines: BeTaal['lines'] = {
  'w.ww': { nl: 'de C4', en: 'the C4 (the paper from your employer when your job ends)', emoji: '📄' },
  'w.uwv': { nl: 'de RVA', en: 'RVA (the national office that decides about unemployment benefit)' },
  's.ww.1': { nl: 'Ik schrijf me in bij de VDAB.', en: 'I register at the VDAB.' },
  'c.ww.a': { nl: 'Ik vraag mijn C4 en ik ga naar de vakbond.', en: 'I ask for my C4 and I go to the union.' },
  's.jobends.2': { nl: 'Ik vraag advies in het justitiehuis.', en: 'I ask for advice at the justitiehuis.' },
  's.jobends.3': { nl: 'Ik vraag mijn ziekenfonds of mijn verzekering doorloopt.', en: 'I ask my ziekenfonds if my insurance goes on.' },
  's.newjob.2': { nl: 'Ik bewaar mijn loonbrieven.', en: 'I keep my payslips.' },
};

/** = BE_ADVICE_LINE and BE_ABUSE_LINE (src/lib/tipText.ts), written out: that module imports this one. */
const ADVICE = 'General information. For your situation: ask your employer, the union or the justitiehuis (free legal advice).';
const ABUSE = 'General information. For your situation: ask the union, the justitiehuis (free legal advice) or Payoke.';

const tips = [
  // ⚖️ check: The employer gives the C4 at the latest on the last working day ⚖️ (securex.be "het
  // werkloosheidsbewijs C4"; KB 25 november 1991, art. 137; regels/be/units/geld.ts).
  // ⚖️ check: Register right away as a job seeker at the VDAB ⚖️ (vdab.be "stappenplan na
  // ontslag"). Within 8 days after the last working day: a search result only, nakijken (geld.ts):
  // so the tip says "right away", no number.
  // ⚖️ check: Apply through a union (ABVV, ACV, ACLVB) or, for who is not a member, the HVW
  // (Hulpkas voor Werkloosheidsuitkeringen); not at the RVA itself; the RVA decides ⚖️
  // (vlaanderen.be "werkloosheidsuitkering"; hvw.fgov.be; rva.be; geld.ts).
  // ⚖️ check: You must first have worked long enough (wachttijd); the union or the HVW tells how
  // long ⚖️ (vdab.be; hetacv.be "wanneer heb je recht op een werkloosheidsuitkering"; geld.ts).
  // ⚖️ check: Since 1 January 2026 the benefit is limited in time: mostly at most 2 years,
  // depending on your career, with exceptions; the Grondwettelijk Hof (10 September 2026) annulled
  // part of the transition rules ⚖️ (onem.be "hervorming van de werkloosheidsverzekering"; onem.be
  // nieuws 11-09-2026; VRT NWS 7 juni 2025 and 29 december 2025; bijgewerkt oktober 2026; geld.ts).
  // The sources are not settled: the tip names no number.
  // ⚖️ check: Quitting yourself without a good reason: usually no benefit for a while ⚖️
  // (Werkloosheidsbesluit 25 november 1991, art. 51-52; jubel.be; geld.ts).
  beTip({
    slug: 'ww',
    lessonId: 'l.ww',
    emoji: '🛟',
    title: 'Unemployment benefit',
    body:
      'Lost your job? Your employer gives you a C4, at the latest on your last working day. Register right away as a job seeker at the VDAB. ' +
      'Then apply for your benefit through a union (ABVV, ACV or ACLVB), or through the HVW if you are not a member. You do not apply at the RVA itself: the RVA decides. ' +
      'You must have worked long enough first. The benefit is limited in time: how long depends on how long you worked. Did you quit your job yourself, without a good reason? Then you usually get no benefit for a while. ' +
      ADVICE,
    phrase: ['Ik wil een uitkering aanvragen. Wat moet ik doen?', 'I want to apply for a benefit. What must I do?'],
    situation: 'You are angry about your work and want to quit today. What is wise?',
    options: [
      'Get advice first, before you quit.',
      'Quit today: you will get a benefit anyway.',
      'Stop coming to work without saying anything.',
    ],
    why: 'Quitting can cost you your benefit for a while. Talking first with your supervisor, the union or the justitiehuis can help you find a better way.',
  }),
  // ⚖️ check: Ask for the C4 when the job ends ⚖️ (KB 25 november 1991, art. 137; geld.ts).
  // ⚖️ check: A bediende gets vertrekvakantiegeld from the employer when the contract ends; an
  // arbeider gets the holiday pay the year after, from the vakantiekas or the RJV ⚖️
  // (socialsecurity.be, vakantiegeld DmfA; securex.be "wanneer is het vertrekvakantiegeld
  // verschuldigd"; geld.ts).
  // ⚖️ check: A rental contract is separate from the work contract; it says how long you may stay
  // ⚖️ (Vlaams Woninghuurdecreet 9 november 2018; for rooms that come with the job: nakijken;
  // geld.ts).
  // ⚖️ check: Care insurance through the ziekenfonds; with an unemployment benefit you usually stay
  // insured; going back to your own country: ask the ziekenfonds ⚖️ (wet 14 juli 1994; riziv.fgov.be;
  // Europese verordening 883/2004; geld.ts).
  // ⚖️ check: A move is reported at the gemeente within 8 working days ⚖️ (vlaanderen.be "aangifte
  // van adreswijziging"; geld.ts).
  beTip({
    slug: 'jobends',
    lessonId: 'l.jobends',
    emoji: '🧳',
    title: 'Your job ends: what else stops?',
    body:
      'When your job ends, check your final pay (eindafrekening), and ask for your C4. Are you a white-collar worker (bediende)? Then you get your holiday pay with your last pay. A blue-collar worker (arbeider)? Then you get it the year after, from the holiday fund (vakantiekas). ' +
      'Housing or a van through the interim office can stop at the same time. Your rental contract has its own rules: ask for advice before you leave the house. ' +
      'You are insured for care through your ziekenfonds. With unemployment benefit you usually stay insured. Moving? Tell the gemeente within 8 working days. Going back to your own country? Ask your ziekenfonds. ' +
      ADVICE,
    phrase: ['Wanneer krijg ik mijn eindafrekening?', 'When do I get my final pay?'],
    situation: 'Your job ends on Friday. The interim office also arranges your room. What do you do?',
    options: [
      'Ask what your rental contract says, and get advice.',
      'Leave the room on Friday, because the job stops.',
      'Stay, and do not talk about it with anyone.',
    ],
    why: 'Your rental contract is separate from your work contract. It says how long you may stay. The justitiehuis can give you a free first advice.',
  }),
  // ⚖️ check: Keep your loonbrieven, your contract and your C4: you need them for a benefit and for
  // your rights later ⚖️ (rva.be; KB 25 november 1991, art. 137; regels/be/units/geld.ts).
  // ⚖️ check: The VDAB (vdab.be) is the public employment service in Flanders ⚖️ (vdab.be).
  // ⚖️ check: An interimkantoor or another job agency may not ask the job seeker for money ⚖️
  // (Vlaams decreet private arbeidsbemiddeling 10 december 2010; federgon.be; rechten.ts). The
  // situation's 300 euros is an example, no rule.
  beTip({
    slug: 'newjob',
    lessonId: 'l.newjob',
    emoji: '🔭',
    title: 'Looking for new work',
    body: 'Before you leave, ask for a reference (referentie). Keep your payslips (loonbrieven), your contract and your C4. Update your CV. Look for work at the VDAB (vdab.be) and at interim offices (interimkantoren). Never pay money to get a job. ' + ABUSE,
    phrase: ['Mag ik u als referentie opgeven?', 'May I give your name as a reference?'],
    situation: 'Someone offers you a job, but first you must pay 300 euros "for the job". What do you do?',
    options: [
      'Do not pay. Look for a real interim office.',
      'Pay, because a good job is worth it.',
      'Pay half now and the rest later.',
    ],
    why: 'Asking money for a job is a warning sign. An interim office may not ask you money for finding work. You can also look for work at the VDAB.',
  }),
];

export const be: BeTaal = { nl: 'u.lost', lines, tips };
