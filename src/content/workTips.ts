import { ABUSE_LINE, ADVICE_LINE, HOUSE_LINE } from './adviceLine';
import type { CultureTip, SituationAsk } from './culture';
import { sayingsTips } from './sayings';
import { dataUnit, doUnit, toolsUnit, workUnits } from './work';

/**
 * The "Zo werkt het hier" tips of the units in ./work.ts: one tip per lesson, with its long texts
 * (body, situation, options, why). They stood in work.ts next to their units until 14 November
 * 2026; they have a file of their own so the app can load them apart from the lessons (the long
 * texts are only needed when a tip or its situation opens, see scripts/bundle-size.mjs).
 *
 * Only stable, general facts. No amounts that change every year: we say where to check instead.
 * Every tip ends with the same "ask for advice" line (house rules: "ask your supervisor").
 * Every id is also a translation key in src/i18n/work/<lang>.ts.
 */

type Pair = [nl: string, en: string];

/** Closing line of most tips: this is general information, not advice for one person (src/content/adviceLine.ts). */
export { ADVICE_LINE };

export { ABUSE_LINE, HOUSE_LINE };

const tip = (t: CultureTip, end = ADVICE_LINE): CultureTip => ({ ...t, body: end ? `${t.body} ${end}` : t.body });

/** Closing line: ADVICE_LINE for rights and rules set by law, ABUSE_LINE where the employer may be the problem, HOUSE_LINE for company rules, '' for social norms. */
/** Dutch said aloud in a situation (a speaker plays it in the character's voice). */
const SAID: Record<string, string> = { interview: 'Heb je nog vragen?', hours: 'Morgen begin je om half negen.', counting: 'Ga naar gang zevenenveertig.' };

/** The heading of a situation that does not ask "What do you do?" (see SituationAsk). */
const ASK: Record<string, SituationAsk> = { texting: 'which', diploma: 'which', hours: 'which', counting: 'which', measures: 'whatsay', dates: 'which', body: 'whatsay', mychoice: 'whatsay', email: 'which', council: 'which' };

const tipFor = (
  slug: string,
  emoji: string,
  title: string,
  body: string,
  [nl, en]: Pair,
  situation: string,
  options: [best: string, worse: string, worse2: string],
  why: string,
  end: string,
): CultureTip =>
  tip(
    {
      id: `c.${slug}`,
      lessonId: `l.${slug}`,
      emoji,
      title,
      body,
      phrase: { id: `c.${slug}.p`, nl, en },
      situation: { id: `c.${slug}.s`, en: situation, ...(SAID[slug] ? { nl: SAID[slug] } : {}), ...(ASK[slug] ? { ask: ASK[slug] } : {}) },
      options: options.map((o, i) => ({ id: `c.${slug}.o${i + 1}`, en: o, best: i === 0 })),
      why: { id: `c.${slug}.w`, en: why },
    },
    end,
  );

const NONE = '';

/** One "Zo werkt het hier" tip per lesson above. */
const coreTips: CultureTip[] = [
  tip({
    id: 'c.findwork',
    lessonId: 'l.findwork',
    emoji: '📄',
    title: 'Get your contract on paper',
    body: 'Always ask for a written contract and a copy for yourself. Read it before you sign, or ask someone you trust to help you. A temp agency (uitzendbureau) may not ask you for money to find you a job.',
    phrase: { id: 'c.findwork.p', nl: 'Mag ik het contract eerst lezen?', en: 'May I read the contract first?' },
    situation: { id: 'c.findwork.s', en: 'A new employer says: "Sign here now. You can read it later." What do you do?' },
    options: [
      { id: 'c.findwork.o1', en: 'Ask for time to read it, or for a copy.', best: true },
      { id: 'c.findwork.o2', en: 'Sign quickly, so you do not lose the job.', best: false },
      { id: 'c.findwork.o3', en: 'Sign, and ask for a copy afterwards.', best: false },
    ],
    why: { id: 'c.findwork.w', en: 'Your contract says what you earn and what your rights are. A good employer gives you time to read it. You may ask about everything you do not understand.' },
  }),
  // ⚖️ check (31 October 2026): the Wet meer zekerheid flexwerkers (Stb. 2026, 205) changes on-call
  // and agency work: equal terms for agency workers from 1 January 2027, the bandbreedtecontract in
  // place of the oproepovereenkomst and a shorter agency phase A from 1 January 2028 (secondary sources;
  // check the Staatsblad). The text below is right until then; rewrite it before those dates.
  // ⚖️ check: proeftijd ⚖️ (BW 7:652); oproeptermijn 4 dagen, cao at least 1 dag, 3 uur loon ⚖️ (BW 7:628a).
  // More in docs/juridische-check.md.
  tip({
    id: 'c.contract',
    lessonId: 'l.contract',
    emoji: '🧪',
    title: 'Trial period and on-call work',
    body: 'A trial period (proeftijd) must be in writing. It is not allowed in a contract of 6 months or shorter. In a longer contract of less than 2 years, it is at most 1 month. In a contract of 2 years or longer, or a permanent one, it is at most 2 months. On-call worker (oproepkracht)? Your employer must usually call you at least 4 days before. If it is later, you do not have to come. A cao can make these 4 days shorter, but not shorter than 1 day. If they cancel your work later than that, you still get paid. If they call you for less than 3 hours of work, you usually get paid for 3 hours.',
    phrase: { id: 'c.contract.p', nl: 'Staat de proeftijd in mijn contract?', en: 'Is the trial period in my contract?' },
    situation: { id: 'c.contract.s', en: 'Your contract is for 3 months. It says: "Proeftijd: 1 maand". What do you do?', nl: 'Proeftijd: 1 maand' },
    options: [
      { id: 'c.contract.o1', en: 'Ask about it: this trial period does not count.', best: true },
      { id: 'c.contract.o2', en: 'Nothing. Every contract has a trial period.', best: false },
      { id: 'c.contract.o3', en: 'Sign and never ask, because the boss knows best.', best: false },
    ],
    why: { id: 'c.contract.w', en: 'A trial period in a contract of 6 months or shorter does not count. Asking calmly is normal. If the answer is not clear, get advice from the union or the Juridisch Loket.' },
  }),
  // ⚖️ check (31 October 2026): the Wet meer zekerheid flexwerkers (Stb. 2026, 205) changes on-call
  // and agency work: equal terms for agency workers from 1 January 2027, the bandbreedtecontract in
  // place of the oproepovereenkomst and a shorter agency phase A from 1 January 2028 (secondary sources;
  // check the Staatsblad). The text below is right until then; rewrite it before those dates.
  // ⚖️ check: the same pay as the company's workers ⚖️ (Waadi art. 8, uitzend-cao). More in docs/juridische-check.md.
  tip({
    id: 'c.agency',
    lessonId: 'l.agency',
    emoji: '🏢',
    title: 'Your agency is your employer',
    body: 'If you work through a temp agency (uitzendbureau), the agency is your employer, not the company where you work. Your contract and your pay come from the agency, and there is a cao for temp workers (uitzend-cao). You have a right to the same pay as workers of the company who do the same work. You also get holiday pay (vakantiegeld) and you build up days off. Keep your own list of the hours you worked, and check them on your payslip.',
    phrase: { id: 'c.agency.p', nl: 'Op mijn loonstrook staan te weinig uren.', en: 'My payslip shows too few hours.' },
    situation: { id: 'c.agency.s', en: 'Your payslip shows 32 hours, but you worked 38. What do you do?' },
    options: [
      { id: 'c.agency.o1', en: 'Show your own list of hours to the agency and ask to fix it.', best: true },
      { id: 'c.agency.o2', en: 'Say nothing, because it is only 6 hours.', best: false },
      { id: 'c.agency.o3', en: 'Ask the boss at the company where you work to pay the 6 hours.', best: false },
    ],
    why: { id: 'c.agency.w', en: 'The agency pays you, so the agency must correct the mistake. Your own list of dates and hours helps. Asking about it is your right.' },
  }),
  tip({
    id: 'c.bsn',
    lessonId: 'l.bsn',
    emoji: '🔢',
    title: 'Your BSN: keep it safe',
    body: 'You get a BSN (burgerservicenummer) when you register at the municipality (gemeente). Here only for a short time? Then you register at an RNI desk. You need your BSN to work, for tax, for health insurance and for a bank account. Your employer needs your ID and your BSN. Do not give your BSN or a copy of your ID to just anyone. First ask why they need it. Moving? Register your new address at the gemeente within 5 days. DigiD is your login for government websites: never give it to someone else. Do you live or work here? Then you usually must have Dutch health insurance (zorgverzekering). Arrange it quickly.',
    phrase: { id: 'c.bsn.p', nl: 'Waarom heeft u mijn BSN nodig?', en: 'Why do you need my BSN?' },
    situation: { id: 'c.bsn.s', en: 'A stranger offers you a job on WhatsApp. He wants your passport photo and DigiD login. What do you do?' },
    options: [
      { id: 'c.bsn.o1', en: 'Never give your DigiD login. Check who he is.', best: true },
      { id: 'c.bsn.o2', en: 'Send everything quickly to get the job.', best: false },
      { id: 'c.bsn.o3', en: 'Send only the passport photo.', best: false },
    ],
    why: { id: 'c.bsn.w', en: 'With your DigiD or a copy of your ID, other people can use your name, for example for loans or benefits. A real employer needs your ID and BSN, but never your DigiD login.' },
  }),
  tip({
    id: 'c.housing',
    lessonId: 'l.housing',
    emoji: '🔑',
    title: 'Housing from your employer',
    body: 'Does your employer or agency arrange your housing? Then the rental contract must be separate from your work contract. Ask for a written rental contract and proof of what you pay. Rent may only be taken off your wage if you agreed in writing, and within legal limits: check it on your payslip. A deposit (borg) is at most 2 months of basic rent. You get it back when you leave, minus real damage. Register at your address with the gemeente. Unsafe housing, threats or unfair costs? Report it to the gemeente (meldpunt), and get free advice from the Juridisch Loket or a housing advice service. For a problem with the rent price or service costs, there is the Huurcommissie. Your job ends? Ask for advice before you leave your home.',
    phrase: { id: 'c.housing.p', nl: 'Mag ik een bewijs dat ik betaald heb?', en: 'May I have proof that I paid?' },
    situation: { id: 'c.housing.s', en: 'Your job ends. The agency says: "You must leave the house tomorrow." What do you do?' },
    options: [
      { id: 'c.housing.o1', en: 'Ask the Juridisch Loket for advice first.', best: true },
      { id: 'c.housing.o2', en: 'Leave right away and forget about your deposit.', best: false },
      { id: 'c.housing.o3', en: 'Stay, and stop answering the agency.', best: false },
    ],
    why: { id: 'c.housing.w', en: 'Your rental contract has its own rules, separate from your job. Free advice helps you know your rights, for example about when you must leave and about your deposit.' },
  }, ABUSE_LINE),
  tip({
    id: 'c.payslip',
    lessonId: 'l.payslip',
    emoji: '🧾',
    title: 'Check your payslip',
    body: 'Bruto is your pay before tax. Netto is what you get in your bank account: bruto minus tax and premiums (loonheffing). Your employer must give you a payslip (loonstrook). Check the hours and the pay on every payslip, and write down the hours you work. Do you have two jobs? Use the tax credit (loonheffingskorting) at only one employer.',
    phrase: { id: 'c.payslip.p', nl: 'Ik heb meer uren gewerkt. Kun je het controleren?', en: 'I worked more hours. Can you check it?' },
    situation: { id: 'c.payslip.s', en: 'Your payslip shows fewer hours than you worked. What do you do?' },
    options: [
      { id: 'c.payslip.o1', en: 'Show your notes and ask your supervisor to check it.', best: true },
      { id: 'c.payslip.o2', en: 'Say nothing, because you do not want problems.', best: false },
      { id: 'c.payslip.o3', en: 'Wait one month: it will be right on the next payslip.', best: false },
    ],
    why: { id: 'c.payslip.w', en: 'Mistakes on a payslip happen. Asking about it is normal and it is your right. Your own notes of dates and hours help a lot.' },
  }),
  tip({
    id: 'c.extra',
    lessonId: 'l.extra',
    emoji: '🏖️',
    title: 'Holiday pay and minimum wage',
    body: 'You get holiday pay (vakantiegeld): at least 8% of your gross wage. Most employers pay it once a year, in May or June. Your pay may never be lower than the legal minimum wage (minimumloon); for workers under 21 it is lower. The amount changes every year: check it on rijksoverheid.nl. A cao often gives extra pay for overtime or night work.',
    phrase: { id: 'c.extra.p', nl: 'Wanneer krijg ik mijn vakantiegeld?', en: 'When do I get my holiday pay?' },
    situation: { id: 'c.extra.s', en: 'A colleague says: "In May you get extra money from the boss." What is it?', ask: 'which' },
    options: [
      { id: 'c.extra.o1', en: 'Holiday pay: at least 8% of your gross wage.', best: true },
      { id: 'c.extra.o2', en: 'A present, only for the best workers.', best: false },
      { id: 'c.extra.o3', en: 'A 13th month: one extra month of pay, for everyone.', best: false },
    ],
    why: { id: 'c.extra.w', en: 'Holiday pay is your right, not a gift. You build it up with every hour you work. If you leave your job earlier, you get it with your last pay.' },
  }),
  tip({
    id: 'c.phone',
    lessonId: 'l.phone',
    emoji: '📵',
    title: 'Your phone at work',
    body: 'Many workplaces do not allow phones during work, especially near machines and forklifts, or in food production. It can be unsafe or not hygienic. Use your phone in your break. Waiting for an urgent call from your family? Tell your supervisor first. Do not take photos or videos at work without permission: think of the privacy of colleagues and company secrets.',
    phrase: { id: 'c.phone.p', nl: 'Mijn kind is ziek. Mag mijn telefoon aanblijven?', en: 'My child is sick. May my phone stay on?' },
    situation: { id: 'c.phone.s', en: 'Your mother is in hospital and may call today. Phones are not allowed on the work floor. What do you do?' },
    options: [
      { id: 'c.phone.o1', en: 'Tell your supervisor and ask how you can be reached.', best: true },
      { id: 'c.phone.o2', en: 'Keep your phone in your pocket and answer quietly at the machine.', best: false },
      { id: 'c.phone.o3', en: 'Stay home without telling anyone why.', best: false },
    ],
    why: { id: 'c.phone.w', en: 'Supervisors usually understand a family emergency. When they know, they can find a safe solution, for example a set time to check your phone.' },
  }, HOUSE_LINE),
  tip({
    id: 'c.smoking',
    lessonId: 'l.smoking',
    emoji: '🚭',
    title: 'Smoking only outside',
    body: 'In the Netherlands, smoking inside a workplace is forbidden by law. This is also true for e-cigarettes (vapes). Since 2022, smoking rooms inside companies are not allowed anymore. Smoke only outside, at the place your employer allows, and usually only in your break. Extra smoke breaks are not a right: agree on them with your supervisor. Never smoke near things that burn easily, like fuel or boxes in a warehouse.',
    phrase: { id: 'c.smoking.p', nl: 'Mag ik in mijn pauze buiten roken?', en: 'May I smoke outside in my break?' },
    situation: { id: 'c.smoking.s', en: 'It is cold and raining. A colleague says: "Just smoke in the storage room, nobody sees it." What do you do?' },
    options: [
      { id: 'c.smoking.o1', en: 'Say no, and smoke outside in your break.', best: true },
      { id: 'c.smoking.o2', en: 'Smoke quickly in the storage room, just this once.', best: false },
      { id: 'c.smoking.o3', en: 'Use your vape inside instead, because that is allowed.', best: false },
    ],
    why: { id: 'c.smoking.w', en: 'Smoking inside is against the law and can start a fire. A vape inside is not allowed either. Following the rule keeps everyone safe.' },
  }, HOUSE_LINE),
  // ⚖️ check: breaks 30 min after 5.5 h, 45 min after 10 h, at most 12 h a shift and 60 h a week ⚖️
  // (Arbeidstijdenwet art. 5:4 and 5:7). Under 18 ⚖️: at most 9 h a shift and 45 h a week, a break of
  // 30 min after 4.5 h (Arbeidstijdenwet, rules for jeugdigen; rijksoverheid.nl "Hoeveel uur mag ik
  // werken als ik 16 of 17 ben?"). Werkregels says the same (r.l.tijd: "Ben je jonger dan 18? Dan
  // minder."). Many Entree students are 16 or 17. No numbers in the text for under 18.
  tip({
    id: 'c.health',
    lessonId: 'l.health',
    emoji: '⏸️',
    title: 'Breaks and working hours',
    body: 'The law protects your health. Do you work more than 5.5 hours? Then you get at least 30 minutes of break (it may be 2 times 15 minutes). More than 10 hours? Then at least 45 minutes. A cao can have slightly different break rules. You may work at most 12 hours in one shift and 60 hours in one week. Under 18? Then your maximum hours are lower. Your employer must give you protective equipment, like safety shoes or gloves, for free. Unsafe work or too little pay? You can report it to the Nederlandse Arbeidsinspectie, also without giving your name.',
    phrase: { id: 'c.health.p', nl: 'Ik heb nog geen pauze gehad.', en: 'I have not had a break yet.' },
    situation: { id: 'c.health.s', en: 'You have worked 6 hours without a break. Your supervisor asks you to keep going. What do you do?' },
    options: [
      { id: 'c.health.o1', en: 'Say that you need your break now.', best: true },
      { id: 'c.health.o2', en: 'Keep going, and take a longer break later.', best: false },
      { id: 'c.health.o3', en: 'Leave work and go home without a word.', best: false },
    ],
    why: { id: 'c.health.w', en: 'When you work more than 5.5 hours, a break is the law, not a favour. Rest also helps you work safely.' },
  }),
  tip({
    id: 'c.rights',
    lessonId: 'l.rights',
    emoji: '✊',
    title: 'Discrimination and dismissal',
    body: 'Discrimination at work is forbidden, for example because of your origin, religion or gender. Your employer cannot simply fire you: normally they need permission from UWV or a judge, or your agreement. (In a trial period or at the end of a temporary contract, other rules apply.) Do not sign a paper about your dismissal that you do not understand. Did you sign an agreement to end your job (vaststellingsovereenkomst)? Then you can usually still cancel it in writing within 14 days. Get help first. Go to the union (for example FNV), a discrimination help desk or the Juridisch Loket. The Juridisch Loket gives free legal advice.',
    phrase: { id: 'c.rights.p', nl: 'Ik wil eerst advies vragen.', en: 'I want to ask for advice first.' },
    situation: { id: 'c.rights.s', en: 'Your boss gives you a paper: "Sign today, then you leave by agreement." You do not understand it well. What do you do?' },
    options: [
      { id: 'c.rights.o1', en: 'Do not sign yet. Get advice first.', best: true },
      { id: 'c.rights.o2', en: 'Sign it, because the boss says it is fine.', best: false },
      { id: 'c.rights.o3', en: 'Put the paper away and never talk about it.', best: false },
    ],
    why: { id: 'c.rights.w', en: 'Is something wrong in it? Then you can lose rights, for example to unemployment benefit (WW). Asking for time to get advice is normal and allowed.' },
  }, ABUSE_LINE),
  tip({
    id: 'c.mustmay',
    lessonId: 'l.mustmay',
    emoji: '⚖️',
    title: 'Moet, hoeft niet, mag niet',
    body: 'In Dutch, the opposite of "moeten" is "niet hoeven". "Je moet tekenen" means: you have no choice. "Je hoeft niet te tekenen" means: you may choose. "Je mag niet tekenen" means: it is forbidden. Careful: in English, "must not" means "mag niet". In many languages, "not must" means "hoeft niet". Not sure? Ask it.',
    phrase: { id: 'c.mustmay.p', nl: 'Moet het, of heb ik een keuze?', en: 'Do I have to, or do I have a choice?' },
    situation: { id: 'c.mustmay.s', en: 'Your team leader says: "Je hoeft zaterdag niet te komen." What does he mean?', nl: 'Je hoeft zaterdag niet te komen.', ask: 'which' },
    options: [
      { id: 'c.mustmay.o1', en: 'You do not have to come on Saturday. You may choose.', best: true },
      { id: 'c.mustmay.o2', en: 'You are not allowed to come on Saturday.', best: false },
      { id: 'c.mustmay.o3', en: 'You must come on Saturday.', best: false },
    ],
    why: { id: 'c.mustmay.w', en: '"Niet hoeven" means it is not compulsory: you may choose. "Niet mogen" would mean it is forbidden.' },
  }, ''),
  tip({
    id: 'c.leave',
    lessonId: 'l.leave',
    emoji: '🏝️',
    title: 'Holidays and emergency leave',
    body: 'By law you get paid days off: at least 4 times the days you work per week. Full-time, 5 days a week? Then at least 20 days a year. A cao can give more. Ask for leave in time, and in writing. A sudden emergency, like an accident or illness in your family? Then you can get short leave with pay (calamiteitenverlof). Tell your employer right away.',
    phrase: { id: 'c.leave.p', nl: 'Ik wil graag verlof aanvragen voor juli.', en: 'I would like to ask for leave for July.' },
    situation: { id: 'c.leave.s', en: 'You want to visit your family abroad for three weeks in summer. What do you do?' },
    options: [
      { id: 'c.leave.o1', en: 'Ask your employer for leave early, in writing.', best: true },
      { id: 'c.leave.o2', en: 'Just go, and tell your boss when you are back.', best: false },
      { id: 'c.leave.o3', en: 'Ask a colleague to tell the boss the day before.', best: false },
    ],
    why: { id: 'c.leave.w', en: 'Your employer must usually say yes. They may only say no for a very good reason, and then in writing within 2 weeks. Asking early gives the best chance of a yes.' },
  }),
  // ⚖️ check (31 October 2026): the Wet meer zekerheid flexwerkers (Stb. 2026, 205) changes on-call
  // and agency work: equal terms for agency workers from 1 January 2027, the bandbreedtecontract in
  // place of the oproepovereenkomst and a shorter agency phase A from 1 January 2028 (secondary sources;
  // check the Staatsblad). The text below is right until then; rewrite it before those dates.
  // ⚖️ check: 70%, up to 2 years, first year at least the minimum wage, at most 2 wachtdagen ⚖️ (BW 7:629);
  // uitzendbeding ⚖️ (BW 7:691 lid 2). More in docs/juridische-check.md.
  tip({
    id: 'c.illness',
    lessonId: 'l.illness',
    emoji: '👩‍⚕️',
    title: 'Your rights when you are sick',
    body: 'When you are sick, your employer must pay at least 70% of your wage, for up to 2 years. A cao often gives more. There can be up to 2 waiting days (wachtdagen) without pay, but only if your contract or cao says so. Your boss may not ask what illness you have. You talk about your health and your work with the company doctor (bedrijfsarts). Call your employer when you are better (betermelden). In the first year you get at least the minimum wage. A temporary contract stops on its end date, also when you are sick. Working through an agency? If your contract has an agency clause (uitzendbeding), it can end when you get sick. Then ask UWV about the Ziektewet, or ask a union.',
    phrase: { id: 'c.illness.p', nl: 'Ik ben weer beter. Ik kom morgen werken.', en: 'I am better again. I will come to work tomorrow.' },
    situation: { id: 'c.illness.s', en: 'You are sick for a week. Your employer sends you to the company doctor. What do you do?' },
    options: [
      { id: 'c.illness.o1', en: 'Go, and talk about your health and work.', best: true },
      { id: 'c.illness.o2', en: 'Do not go: you have your own doctor.', best: false },
      { id: 'c.illness.o3', en: 'Go back to work while still sick.', best: false },
    ],
    why: { id: 'c.illness.w', en: 'The company doctor helps you get back to work in a healthy way. The doctor does not tell your boss your medical details, only what work you can do.' },
  }),
];

const applyTips = [
  tipFor(
    'cv',
    '🗂️',
    'A short CV',
    'A CV here is short: 1 or 2 pages. Write your contact details, work experience, education, languages and skills. A photo is not needed. You do not have to write your religion, age or marital status. Be honest about what you can do. Ask someone to check your Dutch.',
    ['Wil je mijn cv lezen? Klopt mijn Nederlands?', 'Will you read my CV? Is my Dutch correct?'],
    'You worked 3 years in a factory in your home country, but you have no diploma. What do you put on your CV?',
    [
      'Write the work and what you did there, honestly.',
      'Write nothing, because you have no diploma.',
      'Write that you have a diploma, so you look better.',
    ],
    'Work experience counts, also from abroad. Being honest is important: employers may check it.',
    NONE,
  ),
  tipFor(
    'interview',
    '🪑',
    'The job interview',
    'Come on time: 5 to 10 minutes early. Greet politely and look at the person. Tell briefly what you can do. Asking questions yourself is normal and positive, for example about the hours, the work or training. At the end you may ask when you will hear something. It is fine to say that you are still learning Dutch. An employer may not ask about your religion, a pregnancy or your health. You do not have to answer: you may politely say that you prefer not to answer.',
    ['Mag ik ook iets vragen? Hoeveel uur per week is het werk?', 'May I ask something too? How many hours per week is the work?'],
    'At the end of the interview, the employer asks: "Heb je nog vragen?" What do you do?',
    [
      'Ask a question about the hours or training.',
      'Say no, because asking questions is not polite.',
      'Talk more about yourself, to show you are a good worker.',
    ],
    'Questions show that you are interested in the job. Employers here often expect them.',
    NONE,
  ),
];

const houseTips = [
  tipFor(
    'clock',
    '⏲️',
    'Clock in yourself',
    'Clock in and out yourself, at the moment you really start and stop working. Never clock in or out for a colleague, and never let someone else use your card. This counts as fraud and can lead to dismissal. Will you be late? Call before your shift starts. Check that your clocked hours match your payslip.',
    ['Ik ben vergeten uit te klokken. Kun je het aanpassen?', 'I forgot to clock out. Can you correct it?'],
    'A colleague gives you his card: "Clock me in, I will be 20 minutes late." What do you do?',
    [
      'Say no, and tell him to call the supervisor.',
      'Do it just once, because he is your friend.',
      'Clock him in and tell the supervisor later.',
    ],
    'Clocking in for someone else counts as fraud, for both of you. Saying no protects your colleague and your own job.',
    HOUSE_LINE,
  ),
  tipFor(
    'hygiene',
    '🧼',
    'Clear head, clean hands',
    'Alcohol and drugs at work, or coming to work after using them, are forbidden in almost all companies. It is very unsafe near machines and forklifts, and it can lead to dismissal. Does a medicine make you sleepy or dizzy? Tell your supervisor, so you can do safe work. You do not have to say which medicine. In food production the hygiene rules are strict: wash your hands, wear clean work clothes, a hairnet if needed, and no jewellery. Vomiting or diarrhoea? Report it before you start. Keep your workplace tidy.',
    ['Ik neem een medicijn. Ik word er slaperig van.', 'I take a medicine. It makes me sleepy.'],
    'Your doctor gives you a medicine that makes you sleepy. Tomorrow you must drive a forklift. What do you do?',
    [
      'Tell your supervisor before you start.',
      'Say nothing and drive very slowly.',
      'Stop taking the medicine without asking your doctor.',
    ],
    'Your supervisor does not need to know which medicine, only that you cannot drive or work with machines now. That keeps you and your colleagues safe.',
    HOUSE_LINE,
  ),
];

const socialTips = [
  tipFor(
    'smalltalk',
    '☕',
    'Small talk in the break',
    'Short chats in the break are normal. They help you feel part of the team. You are welcome at the coffee or lunch table. Easy topics are the weekend, the weather, sports and holidays. Questions about salary, religion or someone’s private life are often too personal at first. On their birthday, people often bring a treat for the team (trakteren), like cake. Is it a colleague’s birthday? Say "Gefeliciteerd!".',
    ['Gefeliciteerd met je verjaardag!', 'Happy birthday!'],
    'In the break, your colleagues sit together at a table. You do not know them well yet. What do you do?',
    [
      'Ask "Mag ik bij jullie zitten?" and join with a short chat.',
      'Eat alone outside every day, so you do not disturb them.',
      'Ask each colleague how much they earn.',
    ],
    'Joining the table is welcome and helps you get to know the team. A simple question like "Hoe was je weekend?" is a good start.',
    NONE,
  ),
  tipFor(
    'mistakes',
    '🙈',
    'Mistakes are normal',
    'Everybody makes mistakes at work. Say it quickly, so it can be fixed: "Sorry, ik heb een fout gemaakt." Hiding a mistake is seen as much worse than the mistake itself. Feedback is about the work, not about you as a person. Did you get a compliment? Just say thank you. Not clear what to do better? Ask: "Kun je het uitleggen?"',
    ['Sorry, ik heb een fout gemaakt. Hoe kan ik het oplossen?', 'Sorry, I made a mistake. How can I fix it?'],
    'You put 20 boxes on the wrong pallet. Nobody has seen it yet. What do you do?',
    [
      'Tell your supervisor and help fix it.',
      'Say nothing and hope nobody notices.',
      'Say that a colleague did it.',
    ],
    'A mistake that is told early is easy to fix. Being honest builds trust, and that counts more than never making a mistake.',
    NONE,
  ),
  tipFor(
    'respect',
    '🫂',
    'Respect for everyone',
    'At work, everyone is equal and everyone is treated with respect, whatever their gender, origin, religion or sexual orientation. You decide about physical contact. A handshake is common. But you may also greet in another polite way, like a nod and a smile. Then explain it briefly. Jokes about someone’s origin or religion, threats, bullying (pesten) and unwanted sexual behaviour are not accepted. You can report it to your supervisor, or to a confidential adviser (vertrouwenspersoon) if your company has one.',
    ['Ik geef liever geen hand, maar ik groet je graag.', 'I prefer not to shake hands, but I am happy to greet you.'],
    'A colleague often makes jokes about your religion. You asked him to stop, but he goes on. What do you do?',
    [
      'Tell your supervisor or the vertrouwenspersoon.',
      'Laugh along with him, so there is no trouble.',
      'Make jokes about his background back.',
    ],
    'Such jokes are not accepted at work. Reporting it is normal: the company must keep the workplace safe for everyone.',
    NONE,
  ),
  tipFor(
    'gossip',
    '🤫',
    'Gossip and social media',
    'Talking behind a colleague’s back (roddelen) harms the trust in a team. Do you have a problem with someone? Talk to that person, or to your supervisor. Online, the same rules apply as at work. Do not post anything about colleagues, clients or the company without permission. That includes photos, videos and messages. Your boss can see what you post, and it can stay online for years. Many teams have a group chat (groepsapp) for work: keep it about work, and do not share screenshots of it with others. Sharing private things of a colleague or mocking someone online is bullying too.',
    ['Dat wil ik niet online hebben.', 'I do not want that online.'],
    'A colleague films you when you slip on the wet floor. He wants to put the video on TikTok. What do you do?',
    [
      'Say "Nee, dat wil ik niet" and ask him to delete it.',
      'Laugh and let him post it, so you are not difficult.',
      'Ask him to post it without your name.',
    ],
    'Usually, nobody may put a video of you online without your permission. Saying no is normal, and your employer must act when colleagues mock each other online. If he posts it anyway, tell your supervisor.',
    NONE,
  ),
  tipFor(
    'boundaries',
    '🛑',
    'Crossing the line',
    'Grensoverschrijdend gedrag is behaviour that crosses someone’s boundary. For example: unwanted touching, sexual remarks or jokes, staring, unwanted pictures, threats or shouting. It does not matter if the other person "meant it as a joke": what counts is how it feels to you. If you can, say clearly that you want it to stop. Write down what happened, when, and who saw it. Tell your supervisor, the confidential adviser (vertrouwenspersoon, if there is one) or HR. Your employer must protect you, and you may not be punished for reporting it. Did you see it happen to a colleague? Ask if they are okay, and offer to be a witness.',
    ['Ik wil dat je stopt.', 'I want you to stop.'],
    'Your team leader often puts his hand on your back and says you look "pretty". It makes you feel uncomfortable. He decides your shifts. What do you do?',
    [
      'Write it down and tell the vertrouwenspersoon.',
      'Say nothing, because he decides your shifts.',
      'Quit your job without telling anyone why.',
    ],
    'This is unwanted behaviour, and it is not your fault. A confidential adviser listens in confidence and helps you choose the next step. You are protected when you report it. You can also talk to HR.',
    NONE,
  ),
];

const laterTips = [
  tipFor(
    'warning',
    '⛓️',
    'Signs of exploitation',
    'Watch out for these signs. Your employer keeps your passport or ID. That is not allowed: you keep your own ID. An employer may only make a copy. You get much less pay than agreed, or no payslip. You must pay off a big debt to the employer or agency. You must work extremely long hours, without a choice. Someone threatens you, or uses your housing to put pressure on you. This is not normal and not allowed.',
    ['Ik wil mijn paspoort terug.', 'I want my passport back.'],
    'On your first day, the agency says: "We keep your passport, for safety." What do you do?',
    [
      'Keep it yourself. They may make a copy.',
      'Give it, because the agency knows the rules.',
      'Give it, but take a photo of it first.',
    ],
    'Your passport is yours. Keeping it is a way to control workers. An employer only needs a copy for the files.',
    ABUSE_LINE,
  ),
  tipFor(
    'gethelp',
    '🆘',
    'Where to get help',
    'Do you see signs of exploitation, for you or for someone else? Get help. You can report it to the Nederlandse Arbeidsinspectie, also anonymously, or to the police. Meld Misdaad Anoniem: 0800-7000. Free legal advice: the Juridisch Loket. In danger? Call 112. Everyone who works in the Netherlands can get help, also migrants.',
    ['Ik heb hulp nodig. Ik word uitgebuit.', 'I need help. I am being exploited.'],
    'A friend works 14 hours a day for almost no pay. He fears his boss. What can you do?',
    [
      'Help him contact the Arbeidsinspectie or Juridisch Loket.',
      'Tell him this is normal for new workers.',
      'Tell him to wait until his contract ends, then leave.',
    ],
    'Help is there for everyone who works in the Netherlands. A report can also be made without names.',
    ABUSE_LINE,
  ),
  tipFor(
    'callin',
    '☎️',
    'Calling your supervisor',
    'When you call your supervisor, say your name, the reason, and when you expect to come back. Sick? You only have to say that you are sick, not what illness you have. Call: do not only send a text, unless your company says a text is fine. No answer? Leave a voice message and try again.',
    ['Hallo, met Ali. Ik kan vandaag niet komen.', 'Hello, this is Ali. I cannot come today.'],
    'Your child is sick and you cannot come to work. Your company wants you to call. What do you do?',
    [
      'Call your supervisor before your shift.',
      'Send a short text at the start of your shift.',
      'Ask your neighbour to call for you.',
    ],
    'A call is clear and quick, and your supervisor can ask questions. Saying when you expect to be back helps them plan. Also say your name and the reason.',
    HOUSE_LINE,
  ),
  tipFor(
    'texting',
    '💬',
    'Messages to work: short and polite',
    'Keep messages to work short and polite. Say who you are and what is happening, and end with a greeting. For example: "Hoi Mark, ik ben 10 minuten te laat. Sorry! Groet, Ali". Check your roster (rooster) in the app often. Reply to shift requests in time. To swap a shift, your supervisor or the planner must agree first, so ask: "Mag ik mijn dienst ruilen?"',
    ['Hoi Mark, ik ben 10 minuten te laat. Sorry! Groet, Ali', 'Hi Mark, I am 10 minutes late. Sorry! Regards, Ali'],
    'You will be 10 minutes late. Which message to your supervisor is best?',
    [
      '"Hoi Mark, ik ben 10 minuten te laat. Sorry! Groet, Ali"',
      '"Sorry, ik ben er zo!" (without your name, without the time).',
      'A voice message of three minutes about the traffic.',
    ],
    'A good message says who you are and what is happening, in a few words. Then your supervisor knows it right away.',
    HOUSE_LINE,
  ),
  tipFor(
    'certs',
    '🏅',
    'Certificates help you',
    'In construction, industry and temp work you often need a VCA certificate (safety). To drive a forklift you usually need a forklift certificate (heftruckcertificaat). Ask your employer if they pay for the course and the exam.',
    ['Kan ik hier een VCA-cursus doen?', 'Can I do a VCA course here?'],
    'A job asks for a VCA certificate. You do not have it yet. What do you do?',
    [
      'Ask the employer or agency to help you get it.',
      'Do not apply, because you will never get the job.',
      'Say you have it, and hope nobody checks.',
    ],
    'Many employers and agencies help with VCA. Asking shows that you want to learn.',
    NONE,
  ),
  tipFor(
    'diploma',
    '📜',
    'Your diploma counts',
    'Do you have a diploma from another country? You can have it assessed at IDW (Internationale Diplomawaardering). Then employers can see what it is worth here. Is a training required for your job? Then your employer must pay for it, and it counts as working time. Ask your supervisor about courses.',
    ['Zijn er cursussen voor mij?', 'Are there courses for me?'],
    'Your employer says you must do a required safety training on Saturday, without pay. What is true?',
    [
      'The employer pays it, and it is working time.',
      'Training is always in your own free time.',
      'You must pay for the training yourself.',
    ],
    'If a training is required for your work, the employer pays and it counts as working time. If it is not clear, ask for advice.',
    ADVICE_LINE,
  ),
  tipFor(
    'doctor',
    '🧑‍⚕️',
    'Doctor or 112?',
    'Register with a family doctor (huisarts) near your home. Do you need urgent care in the evening, at night or in the weekend? Call the huisartsenpost. Call 112 only in an emergency: danger to life, fire, or a crime happening now. You get medicines at the pharmacy (apotheek).',
    ['Ik wil me inschrijven bij de huisarts.', 'I want to register with the GP.'],
    'It is Saturday night. Your child has a high fever, but is awake and breathing normally. What do you do?',
    ['Call the huisartsenpost.', 'Call 112.', 'Wait until Monday and do nothing.'],
    'The huisartsenpost helps with urgent care outside office hours. 112 is for emergencies: danger to life, fire, or a crime happening now.',
    NONE,
  ),
  tipFor(
    'insurance',
    '☂️',
    'Health insurance',
    'When you live or work in the Netherlands, basic health insurance is usually required. You pay a premium every month. Every year there is an own risk (eigen risico): the first costs you pay yourself. The amount changes: check it with your insurer. Visits to the family doctor (huisarts) do not count for the own risk. With a low income you may get healthcare allowance (zorgtoeslag).',
    ['Ik heb een zorgverzekering nodig. Kunt u mij helpen?', 'I need health insurance. Can you help me?'],
    'You started working here two weeks ago and you have no health insurance yet. What do you do?',
    [
      'Arrange health insurance quickly.',
      'Wait: your insurance from home is enough.',
      'Use the insurance card of a friend.',
    ],
    'Without insurance, a doctor or hospital can cost a lot, and you can get a fine. Arranging it quickly protects you. Your employer or agency can help you.',
    ADVICE_LINE,
  ),
  tipFor(
    'body',
    '🤕',
    'Say what happened and where it hurts',
    'At the doctor, say what happened and where it hurts. For example: "Ik ben gevallen. Mijn arm doet pijn." Also say how long you have had the pain. You do not have to guess what you have: the doctor checks that. Did it happen at work? Tell your supervisor the same day.',
    ['Ik ben gevallen. Mijn arm doet pijn.', 'I fell. My arm hurts.'],
    'You lifted a heavy box at work. Now your back hurts a lot. You are at the family doctor (huisarts). What do you say?',
    [
      'Where it hurts, and what happened: you lifted a heavy box.',
      'Only that you feel bad, nothing more.',
      'The name of an illness you found on the internet.',
    ],
    'When you say where it hurts and what happened, the doctor understands you faster. The doctor checks what it is. Did it happen at work? Tell your supervisor too.',
    NONE,
  ),
  tipFor(
    'letters',
    '📨',
    'Do not ignore letters',
    'Do not ignore letters from the Belastingdienst, the gemeente or UWV. Ask someone you trust to help you read them. The tax return (aangifte) for last year must usually be done before 1 May. You can ask for more time. Allowances (toeslagen) like zorgtoeslag and huurtoeslag depend on your income. If you get too much, you must pay it back, so keep your income details up to date.',
    ['Ik heb een brief gekregen. Kun je me helpen?', 'I got a letter. Can you help me?'],
    'You get a letter from the Belastingdienst. You do not understand it. What do you do?',
    [
      'Ask someone you trust to help you read it.',
      'Put it in a drawer and wait.',
      'Throw it away, because it is probably advertising.',
    ],
    'Official letters often have a deadline. If you react in time, problems are usually easier to solve.',
    ADVICE_LINE,
  ),
  tipFor(
    'scams',
    '🦹',
    'Watch out for scams',
    'Your bank never asks for your codes or PIN by phone, SMS or email. Do not click on links in messages you did not expect. Someone pressures you to pay fast? Stop and check first. Call your bank on the official number, for example the number on your bank card or its website.',
    ['Ik bel zelf de bank terug.', 'I will call the bank back myself.'],
    'You get an SMS: "Your bank account will be blocked. Click this link now." What do you do?',
    [
      'Do not click. Call your bank on the official number.',
      'Click quickly, so your account is not blocked.',
      'Reply to the SMS and ask if it is real.',
    ],
    'Scammers use pressure and fake links. Your bank never asks for your codes through a link or a message.',
    NONE,
  ),
  tipFor(
    'bike',
    '🚲',
    'Cycling to work',
    'Turn your lights on when it is dark. Ride on the bike path and follow the traffic lights and signs. Always lock your bike. Holding your phone in your hand while cycling is forbidden.',
    ['Waar kan ik mijn fiets neerzetten?', 'Where can I park my bike?'],
    'It is dark and you cycle to your night shift. Your phone rings. What do you do?',
    [
      'Stop at a safe place before you answer.',
      'Answer with the phone in your hand while cycling.',
      'Ride on, and look at your phone quickly.',
    ],
    'A phone in your hand while cycling is forbidden and dangerous. Stopping first takes only a moment.',
    NONE,
  ),
  tipFor(
    'transit',
    '🎫',
    'Bus, train and travel costs',
    'In most buses and trains you can pay with your bank card (OVpay). Check in AND check out with the same card, or you pay too much. A travel allowance (reiskostenvergoeding) is not a legal right: it depends on your employer or cao. Ask about it.',
    ['Krijg ik een vergoeding voor mijn reiskosten?', 'Do I get money for my travel costs?'],
    'You travel to work by bus every day. A colleague gets travel money, you do not. What do you do?',
    [
      'Ask your supervisor about the company or cao rules.',
      'Say nothing, because it is probably not for you.',
      'Tell your supervisor: the law says you must get it too.',
    ],
    'Travel allowance depends on the employer or the cao. Asking about it is normal and helps you know your rights.',
    ADVICE_LINE,
  ),
  tipFor(
    'ww',
    '🛟',
    'Unemployment benefit (WW)',
    'Lost your job? Apply for WW at UWV as soon as possible, within a week after your first day without work. You usually need to have worked at least 26 of the last 36 weeks. If you quit your job yourself, you usually do not get WW. Register as a job seeker on werk.nl.',
    ['Ik wil WW aanvragen. Wat moet ik doen?', 'I want to apply for unemployment benefit. What must I do?'],
    'You are angry about your work and want to quit today. What is wise?',
    [
      'Get advice first, before you quit.',
      'Quit today: you will get WW anyway.',
      'Stop coming to work without saying anything.',
    ],
    'Quitting can cost you your benefit. Talking first with your supervisor, the union or the Juridisch Loket can help you find a better way.',
    ADVICE_LINE,
  ),
  // ⚖️ check: Days off you did not use and your holiday pay are usually paid out with it ⚖️ (BW 7:641 lid 1 uitbetaling niet-genoten vakantiedagen bij einde dienstverband; WML art. 15-17 vakantiebijslag).
  // ⚖️ check: Housing, health insurance or a van through the agency can stop at the same time ⚖️ (collectieve zorgverzekering via werkgever/bureau eindigt; huurovereenkomst is los van de arbeidsovereenkomst, ABU/NBBU-cao, SNF).
  // ⚖️ check: Living or working in the Netherlands, you usually must have health insurance ⚖️ (Zorgverzekeringswet art. 2).
  // ⚖️ check: Moving, or leaving the Netherlands? Tell the gemeente ⚖️ (Wet BRP art. 2.39 en 2.43: verhuizing en vertrek uit Nederland melden).
  tipFor(
    'jobends',
    '🧳',
    'Your job ends: what else stops?',
    'When your job ends, check your final pay (eindafrekening). Days off you did not use and your holiday pay are usually paid out with it. Housing, health insurance or a van through the agency can stop at the same time. Arrange your own health insurance in time. Your rental contract has its own rules: ask for advice before you leave the house. Moving, or leaving the Netherlands? Tell the gemeente.',
    ['Wanneer krijg ik mijn eindafrekening?', 'When do I get my final pay?'],
    'Your job ends on Friday. Your health insurance goes through the agency. What do you do?',
    [
      'Ask when it stops and arrange your own in time.',
      'Nothing: the insurance goes on by itself.',
      'Wait until you get sick, and arrange it then.',
    ],
    'Insurance through the agency often stops when your job stops. When you live or work in the Netherlands, you usually must have health insurance. Arranging it in time keeps you covered.',
    ADVICE_LINE,
  ),
  tipFor(
    'newjob',
    '🔭',
    'Looking for new work',
    'Before you leave, ask for a reference (referentie). Keep your payslips and your contract. Update your CV. Look for work at temp agencies (uitzendbureaus) and on werk.nl. Never pay money to get a job.',
    ['Mag ik u als referentie opgeven?', 'May I give your name as a reference?'],
    'Someone offers you a job, but first you must pay 300 euros "for the job". What do you do?',
    [
      'Do not pay. Look for a real agency.',
      'Pay, because a good job is worth it.',
      'Pay half now and the rest later.',
    ],
    'Asking money for a job is a warning sign. A temp agency may not charge you for finding work. You can also look for work on werk.nl.',
    ABUSE_LINE,
  ),
];

const sectorTips = [
  tipFor(
    'tools',
    '🧰',
    'The toolbox meeting',
    'On many building sites there is a short safety meeting at regular times: the toolbox meeting. You hear about risks and new rules. Go to it, listen, and ask questions if you do not understand. Check your tools before you use them. Is a tool broken? Tell your supervisor.',
    ['Deze boor is kapot. Is er een andere?', 'This drill is broken. Is there another one?'],
    'There is a toolbox meeting, but your Dutch is not good yet. What do you do?',
    [
      'Go, and ask a colleague afterwards what you missed.',
      'Skip it, because you will not understand it anyway.',
      'Sign the attendance list without going.',
    ],
    'Safety information is for everyone. A translation app can help you follow the meeting, if phones are allowed there. Asking a colleague afterwards is normal and checks that you understood it right.',
    NONE,
  ),
  tipFor(
    'site',
    '🦺',
    'Stop and check: LMRA',
    'Before you start a job, stop for a moment and check: what can go wrong here? This is the LMRA (last-minute risk analysis). Always wear your helmet, and fall protection when you work high. Never stand under a hanging load. Is the work really dangerous? Then you may stop, and you must tell your supervisor right away.',
    ['Ik begin nog niet. Dit is niet veilig.', 'I am not starting yet. This is not safe.'],
    'You must work on a scaffold, but a railing is missing. A colleague says: "Just be careful." What do you do?',
    [
      'Do not start, and tell your supervisor.',
      'Start, but be very careful.',
      'Fix the railing yourself with some rope.',
    ],
    'A fall from height can cause very serious injuries. You may stop dangerous work, and reporting it protects the whole team.',
    ADVICE_LINE,
  ),
  tipFor(
    'line',
    '⚙️',
    'Hands away from running machines',
    'Never reach into a running machine, not even for a second. At a fault (storing): press the emergency stop (noodstop) and call your supervisor. Maintenance and repairs are done only when the machine is locked off (lock-out), and only by trained people.',
    ['Er is een storing. Ik heb op de noodstop gedrukt.', 'There is a fault. I pressed the emergency stop.'],
    'A product is stuck in the machine. The machine is still running. What do you do?',
    [
      'Press the emergency stop and call your supervisor.',
      'Quickly pull it out with your hand, before it breaks.',
      'Leave it and hope the machine fixes it.',
    ],
    'Running machines can cause serious accidents in a second. Stopping the machine is always allowed and always better.',
    HOUSE_LINE,
  ),
  tipFor(
    'quality',
    '⭐',
    'Quality: say what you see',
    'Do you see a problem with a product, like damage or a wrong label? Report it and put it aside. Do not let it pass just to keep the line going. Finding a problem early saves a lot of work and money. Your supervisor will be glad you said it.',
    ['Ik denk dat er iets mis is met deze producten.', 'I think something is wrong with these products.'],
    'You see that many products have a wrong date on the label. The line is very busy. What do you do?',
    [
      'Tell your supervisor or the quality person right away.',
      'Let them pass, because it is not your job.',
      'Throw them away quietly.',
    ],
    'A wrong label can mean that all products must come back from the shops. Saying it early is what a good team member does.',
    NONE,
  ),
  // "Voedselverwerking" (5 November 2026). The hygiene rules are the same for everyone and are
  // about the food, not about the person (no judgement).
  // ⚖️ check: Who works with food and is sick (for example diarrhoea or vomiting) or has a wound or
  // a skin infection, must report it to the company right away ⚖️ (Verordening (EG) 852/2004,
  // bijlage II, hoofdstuk VIII, punt 2: EU law, so the same in Belgium). The tip says "report it
  // before you start" and names no sanction; a special (blue) plaster or other work is common
  // practice (HACCP), not a legal rule: "can".
  tipFor(
    'food',
    '🧤',
    'Clean hands, safe food',
    'Working with food has strict hygiene rules: a hairnet, clean work clothes, washed hands and no jewellery. These rules are the same for everyone. They say nothing about you: they keep the food safe for the people who eat it. With a knife, always wear your cut-resistant glove. In a cold room or a freezer room, wear the warm clothes you get, and warm up in your break. Are you sick, or do you have a wound on your hand? Report it before you start. Then you can get a special plaster, or other work for a while.',
    ['Ik heb een wondje aan mijn hand. Mag ik een pleister?', 'I have a small cut on my hand. May I have a plaster?'],
    'You cut your finger a little at home. Today you work with meat. What do you do?',
    [
      'Tell your supervisor, and ask for a plaster.',
      'Say nothing: it is only a small cut.',
      'Wear a glove over it, so nobody sees it.',
    ],
    'A small wound can bring germs into the food. When you report it, you can get a special plaster or other work for a while. Reporting it is normal: nobody blames you for it.',
    HOUSE_LINE,
  ),
  tipFor(
    'client',
    '🧓',
    'Respect for the client',
    'Knock before you go into a client’s room. Say who you are, explain what you are going to do and ask permission. Say "u" to clients, unless they ask you to say "je". Let clients do what they can do themselves.',
    ['Mag ik binnenkomen? Ik kom u helpen met wassen.', 'May I come in? I am here to help you wash.'],
    'You must help a client to wash. The door of her room is closed. What do you do?',
    [
      'Knock, wait, and say who you are and why.',
      'Walk in quickly, because you are busy.',
      'Skip the washing, so you do not disturb her.',
    ],
    'The room is the client’s home. Knocking and explaining shows respect and makes the care calmer.',
    NONE,
  ),
  tipFor(
    'privacy',
    '🤐',
    'Privacy, hygiene and medicines',
    'What you see and hear about clients stays at work. Do not talk about clients outside work, and never post photos of them. Clean your hands before and after care. Do you notice a change in a client, like pain or a fall? Tell the nurse right away. Never give medicines unless you are trained and allowed to do it.',
    ['Meneer heeft meer pijn dan gisteren.', 'The man has more pain than yesterday.'],
    'A client asks you for her pills. You are not trained to give medicines. What do you do?',
    [
      'Say kindly that you will get the nurse.',
      'Give the pills, because she knows what she needs.',
      'Say no and walk away.',
    ],
    'Wrong medicine can be dangerous. Getting the right person quickly helps the client and keeps everyone safe.',
    HOUSE_LINE,
  ),
  tipFor(
    'kitchen',
    '🧊',
    'Food safety',
    'Wash your hands often, also after the toilet and after touching raw meat. Keep cold food cold and hot food hot. Put a label with the date on food you store. These rules are called HACCP. Allergies are serious: not sure what is in a dish? Always ask the chef.',
    ['Chef, zit er gluten in deze saus?', 'Chef, is there gluten in this sauce?'],
    'A guest asks if a dish has nuts in it. You are not sure. What do you do?',
    [
      'Say you will check, and ask the chef.',
      'Say "no", so the guest is happy.',
      'Tell the guest to pick out the nuts.',
    ],
    'For a guest with an allergy, a small mistake can be very dangerous. Checking with the chef is always right.',
    HOUSE_LINE,
  ),
  tipFor(
    'service',
    '🍽️',
    'Polite with guests',
    'Say "u" to guests, unless they ask you to say "je". Be friendly and calm, also when it is busy. Not sure about a question? Say that you will check. Tips (fooi): the rules differ per place. Ask how tips are shared where you work.',
    ['Een moment, ik kom zo bij u.', 'One moment, I will be with you soon.'],
    'It is very busy. A guest calls you, but you are carrying plates to another table. What do you do?',
    [
      'Look at the guest and say: "Een moment, ik kom zo bij u."',
      'Ignore the guest until you have time.',
      'Put the plates down on a free table and go to the guest first.',
    ],
    'A short sign shows the guest that you saw them. Then you can finish your task calmly.',
    NONE,
  ),
  tipFor(
    'cleaning',
    '🧴',
    'Read the label',
    'Every cleaning product has a label. Pictograms (small pictures in a red diamond) show the danger, for example for your skin, eyes or lungs. Read the label, or ask what the product is for and how to use it. Wear the gloves your employer gives you.',
    ['Waar is dit middel voor?', 'What is this product for?'],
    'You get a new cleaning product. You cannot read the label well. What do you do?',
    [
      'Ask how you can use it safely.',
      'Use a lot of it, then it works better.',
      'Just try it without gloves.',
    ],
    'The wrong product, or too much of it, can hurt your skin, eyes or lungs. Asking takes one minute.',
    HOUSE_LINE,
  ),
  tipFor(
    'cleansafe',
    '☣️',
    'Never mix products',
    'Never mix cleaning products, for example bleach and a toilet cleaner. This can make dangerous gases. Let fresh air in. Mopping a floor? Put down the wet-floor sign (Pas op, glad!), so nobody slips.',
    ['Ik zet het bordje neer. De vloer is nat.', 'I am putting the sign down. The floor is wet.'],
    'The toilet is very dirty. A colleague says: "Mix two products, then it works better." What do you do?',
    [
      'Do not mix them. Use one product.',
      'Mix them, but open a window.',
      'Mix them quickly and leave the room.',
    ],
    'Mixing products can make poisonous gas, even with a window open. One product, used well, is enough.',
    HOUSE_LINE,
  ),
];

const shopNumbersTips = [
  tipFor(
    'shelves',
    '📅',
    'Old to the front',
    'When you stock the shelves, look at the date on the products. Put the products with the soonest date at the front, and the new ones at the back. Customers take from the front, so the old products go first. Is a product past its date, or damaged? Take it off the shelf and ask what to do with it. Keep the aisles free of boxes and carts.',
    ['Wat doe ik met producten over de datum?', 'What do I do with products past their date?'],
    'You put new milk on the shelf. In front is milk with a sooner date. What do you do?',
    [
      'New milk at the back, old milk in front.',
      'New milk in front, because it is fresher.',
      'Throw the old milk away.',
    ],
    'Customers take from the front. When the old products go first, less food is thrown away.',
    HOUSE_LINE,
  ),
  tipFor(
    'checkout',
    '🪪',
    'ID for alcohol and tobacco',
    'You may not sell alcohol or tobacco to anyone under 18: this is the law. Not sure how old a customer is? Ask for their ID. Many shops ask for ID from everyone who looks younger than 25. No ID, or under 18? Then you do not sell it, and you stay polite.',
    ['Zonder ID mag ik dit niet verkopen.', 'Without ID I may not sell this.'],
    'A young man wants to buy beer. He looks about 17. He says he is 19, but he has no ID with him. What do you do?',
    [
      'Say you cannot sell it without ID.',
      'Sell it, because he says he is 19.',
      'Sell it, but only one can.',
    ],
    'Without ID you cannot know his age. Selling alcohol to someone under 18 is against the law, and the shop can get a fine.',
    HOUSE_LINE,
  ),
  // The lesson shows sentences 3 to 5 (TIP_LEADS in culture.ts): the order of "vijfentwintig",
  // 47 and 74, and dertien or dertig. The "Zo werkt het hier" page has 0 to 20 and the tens too.
  tipFor(
    'counting',
    '🔢',
    'Vijfentwintig: first the 5, then the 20',
    'In Dutch, 0 to 12 each have their own word: nul, een, twee, drie, vier, vijf, zes, zeven, acht, negen, tien, elf, twaalf. 13 to 19 end in -tien: dertien, veertien, vijftien, zestien, zeventien, achttien, negentien. The tens end in -tig: twintig, dertig, veertig, vijftig, zestig, zeventig, tachtig, negentig. From 21 to 99, you say the last digit first: 25 is vijfentwintig, "five and twenty". So 47 is zevenenveertig, and 74 is vierenzeventig. Dertien and dertig sound almost the same: listen to the end. Not sure? Say the digits back one by one.',
    ['Vier, zeven? Dus zevenenveertig?', 'Four, seven? So forty-seven?'],
    'Your supervisor says: "Ga naar gang zevenenveertig." Which aisle is it?',
    ['Aisle 47.', 'Aisle 74.', 'Aisle 40.'],
    '"Zevenenveertig" is "seven and forty": first the 7, then the 40. So it is aisle 47. Many newcomers hear 74, and go to the wrong aisle.',
    NONE,
  ),
  tipFor(
    'hours',
    '🕧',
    'Half acht is 7:30',
    'In Dutch, "half" counts to the next hour: half acht is 7:30, not 8:30. Kwart over acht is 8:15, and kwart voor acht is 7:45. Check your hours yourself: the end time minus the start time, minus the break. A break is often not paid. Write down your hours every day.',
    ['Half acht? Dus een half uur voor acht?', 'Half acht? So half an hour before eight?'],
    'Your supervisor says: "Morgen begin je om half negen." What time do you start tomorrow?',
    ['At 8:30.', 'At 9:30.', 'At 8:00.'],
    '"Half negen" means half an hour before nine: 8:30. Many newcomers think it is 9:30, and come an hour late.',
    NONE,
  ),
  tipFor(
    'measures',
    '🔢',
    'Count smart, measure, do not guess',
    'Many boxes to count? Count the boxes in one layer, and the number of layers. Then multiply: 8 boxes in a layer and 5 layers is 40 boxes. With cleaning products, measure the amount the label says. More is not better: it can hurt your skin and costs money. Not sure about a number? Count again, or ask.',
    ['Ik heb het twee keer geteld.', 'I counted it twice.'],
    'A pallet has 6 layers. Each layer has 8 boxes. Your supervisor asks how many boxes there are. What do you say?',
    ['48 boxes.', '14 boxes.', 'About 50, I think.'],
    '6 layers of 8 boxes is 6 times 8: 48. Counting one layer and multiplying is quick, and a real number is better than a guess.',
    HOUSE_LINE,
  ),
];

const aiTips = [
  tipFor(
    'aihelp',
    '🤖',
    'AI helps, a person checks',
    'AI apps and chatbots, like ChatGPT, can translate, explain a letter or help you write a message. That is useful. But AI sometimes makes mistakes, and still sounds very sure. Is it about your contract, your pay, medicine or safety? Then always check the answer with a person. For example your supervisor, HR or the Juridisch Loket.',
    ['Klopt dit? Kunt u even meekijken?', 'Is this right? Could you have a look with me?'],
    'You ask a chatbot about your contract. It says you get no holiday pay. What do you do?',
    [
      'Ask HR or the Juridisch Loket to check it.',
      'Believe it: the chatbot sounds very sure.',
      'Say nothing and forget about it.',
    ],
    'A chatbot can be wrong about rules and contracts. In the Netherlands almost every worker gets holiday pay. A person who knows the rules can check it.',
    NONE,
  ),
  tipFor(
    'aiprivate',
    '🔐',
    'Think before you type',
    'What you type into a chatbot can be saved and used by the company that makes it. So never type your BSN, a password or your bank details. Do not put in names or photos of customers, patients or colleagues, or papers from work. Many employers have rules about AI. Ask first if you may use it for your work.',
    ['Mag ik hier AI voor gebruiken?', 'May I use AI for this?'],
    'You want a chatbot to write a report about a customer. The report has the name and address of the customer. What do you do?',
    [
      'Ask first, and leave the name and address out.',
      'Put everything in the chatbot: it is faster.',
      'Send the report to a friend to check it.',
    ],
    'Names and addresses are personal data. They may not just go to another company. Your employer knows which apps are allowed.',
    HOUSE_LINE,
  ),
  tipFor(
    'aifake',
    '🎭',
    'Fake voices and videos',
    'With AI, criminals can copy a voice and make fake photos and videos. A call or message that sounds like your boss, your bank or someone in your family can be fake. Be careful when there is haste, money and a new number. Hang up, and call back yourself on the number you know. A real bank, employer or the police never asks for your codes.',
    ['Ik hang op en bel zelf terug.', 'I hang up and call back myself.'],
    'Your phone rings. A voice that sounds just like your boss says: "Pay this bill now, it is urgent." What do you do?',
    [
      'Hang up and call your boss back yourself.',
      'Pay quickly: it is your boss.',
      'Give your bank code, so your boss can pay it.',
    ],
    'A voice can be copied with AI. Haste and money together are a warning sign. Calling back on a number you know is a quick and safe check.',
    NONE,
  ),
  tipFor(
    'aiplan',
    '⚖️',
    'Who decided this?',
    'More and more companies let an app or a computer decide things. For example, it makes the roster or counts your speed with the scanner. You may ask which information about you is collected. Is there a big decision about you, like fewer hours, a warning or dismissal? Ask who decided it. Did a computer make that decision on its own? Then you may ask a person to check it again and explain it. Write down your own hours.',
    ['Kan een mens hier even naar kijken?', 'Can a person have a look at this?'],
    'The planning app gives you far fewer hours next month. Nobody tells you why. What do you do?',
    [
      'Ask a person to explain it.',
      'Accept it: the app is always right.',
      'Ask the chatbot in the app why.',
    ],
    'Apps make mistakes, and they do not know everything about you. You may ask for an explanation, and a person can look at it again.',
    ADVICE_LINE,
  ),
];

const kasTips = [
  // ⚖️ check: With piece rate you must still earn at least the minimum wage for every hour you
  // work ⚖️ (Wet minimumloon en minimumvakantiebijslag, art. 12 and the rules on piece rate;
  // amounts: rijksoverheid.nl, never in the text).
  tipFor(
    'harvest',
    '⏱️',
    'Tempo and piece rate',
    'In a greenhouse you often work at a set pace (tempo). Some employers pay per crate, per row or per kilo: piece rate (stukloon). Even with piece rate, you must earn at least the minimum wage for every hour you work. Check the amount on rijksoverheid.nl. Write down your hours and your crates every day, and compare them with your payslip. Working fast is good, but working safely comes first.',
    ['Hoeveel kratten heb ik vandaag gedaan?', 'How many crates did I do today?'],
    'You are paid per crate. This week you earn less than the minimum wage per hour. What do you do?',
    [
      'Show your own list of hours and crates.',
      'Say nothing and work faster.',
      'Accept it: that is normal with piece rate.',
    ],
    'With piece rate you must still get at least the minimum wage for every hour you worked. Your own list of hours and crates helps you show what you did. If it is not fixed, ask for help.',
    ABUSE_LINE,
  ),
  // ⚖️ check: After spraying, nobody may go into the greenhouse until the waiting time is over ⚖️
  // (re-entry period on the label, Wet gewasbeschermingsmiddelen en biociden; Arbobesluit,
  // hoofdstuk 4).
  // ⚖️ check: The employer must take measures against heat ⚖️ (Arbobesluit, art. 6.1).
  tipFor(
    'greensafe',
    '🌡️',
    'Heat and sprays',
    'In a greenhouse it can get very hot, also in spring. Drink water often, also before you feel thirsty, and take your breaks in a cool place. Do you feel dizzy or sick, or do you get a headache? Stop and tell someone. Plants are sometimes sprayed with chemicals (spuitmiddelen). A greenhouse that was just sprayed often has a sign at the door. Do not go in until your supervisor says it is safe again.',
    ['Mag ik al in deze kas werken?', 'May I already work in this greenhouse?'],
    'A greenhouse was sprayed this morning. There is a sign on the door. A colleague says: "Come on, it is only for a moment." What do you do?',
    [
      'Stay outside and ask when it is safe.',
      'Go in quickly and hold your breath.',
      'Go in, and wash your hands well afterwards.',
    ],
    'Crop sprays can hurt your skin, eyes and lungs, also when you smell nothing. After spraying there is a waiting time before people may go in again. Your supervisor knows when it is over.',
    ADVICE_LINE,
  ),
];

// "Instructions" (u.do, 14 November 2026). Social norms and how colleagues keep each other safe:
// no tip states a right or an amount (NONE).
const doTips = [
  tipFor(
    'putdown',
    '🤲',
    'Say that you have it',
    'Do you carry something together, or does a colleague hand you something heavy? Say "Ik heb hem" when you hold it well. Then your colleague knows that it is safe to let go. Do you want to let go yourself? Ask first: "Heb je hem?" And wait for the answer. This is normal on every work floor. It keeps things from falling on feet and hands.',
    ['Ik heb hem. Laat maar los.', 'I have it. You can let go.'],
    'A colleague hands you a heavy box. You do not hold it well yet. What do you do?',
    [
      'Say "wacht", and hold it better first.',
      'Say nothing: he will see it.',
      'Take it fast, so he does not wait.',
    ],
    'Your colleague lets go when he thinks that you have it. One word gives you the time to hold it well.',
    NONE,
  ),
  tipFor(
    'onoff',
    '🛑',
    'Stop means stop',
    'Does someone call "Stop!"? Stop at once, also when you do not know why. Ask afterwards. A short, loud word is not anger here: it is how colleagues keep each other safe. Do you see something dangerous yourself? Call "Stop!" too, also to someone who has worked here for years. Nobody finds that strange.',
    ['Stop! Wacht even.', 'Stop! Wait a moment.'],
    'You switch a machine on. A colleague calls "Stop!". You do not see a problem. What do you do?',
    [
      'Stop at once, and ask why afterwards.',
      'Go on: you do not see a problem.',
      'Ask first why you must stop.',
    ],
    'Your colleague may see something that you do not see. First stop, then talk: that keeps everyone safe.',
    NONE,
  ),
  tipFor(
    'fillempty',
    '✔️',
    'Done? Say it',
    'Are you done with a task? Say it: "Ik ben klaar." And ask what you can do next. Waiting quietly until someone sees you can look as if you do not want to work, also when that is not true. Colleagues who ask for the next task often get more interesting work after a while. Do you want to learn something new? Ask that too: "Mag ik dat ook leren?"',
    ['Ik ben klaar. Wat kan ik nog doen?', 'I am done. What else can I do?'],
    'You are done with your task. Your supervisor is busy with something else. What do you do?',
    [
      'Say that you are done, and ask what is next.',
      'Wait until your supervisor sees you.',
      'Take a break: your work is finished.',
    ],
    'A supervisor cannot see everything. When you say that you are done, the work goes on, and you show that you want to do more.',
    NONE,
  ),
  tipFor(
    'order',
    '📑',
    'Many tasks at once? Ask what comes first',
    'Sometimes you get three tasks in one sentence. That is hard to remember, also for people who speak Dutch well. Ask which one comes first: "Wat moet ik eerst doen?" You may also write the tasks down, or count them on your fingers and say them back. Did you forget one? Go back and ask. That is better than guessing.',
    ['Dat is veel. Wat moet ik eerst doen?', 'That is a lot. What must I do first?'],
    'Your supervisor gives you three tasks, very fast. You remember only the first one. What do you do?',
    [
      'Ask right away to hear the tasks once more.',
      'Do the first one, and hope you remember the rest.',
      'Do nothing: you do not know all three.',
    ],
    'Asking at once costs ten seconds. Later your supervisor may be gone, and then you wait or guess.',
    NONE,
  ),
];

const toolsTips = [
  tipFor(
    'translate',
    '🌐',
    'Translation apps: smart, but check',
    'A translation app, like Google Translate, helps a lot. You can type, speak, or use conversation mode to talk with a colleague. With the camera you can translate signs, notes and instructions. On many phones, WhatsApp can also translate messages. Use your phone only where it is safe and allowed. Never near machines or forklifts. Always ask first. Apps make mistakes. For important things, like your contract, a letter or a safety instruction, also ask a person to explain it. Do not take photos of confidential work papers without permission.',
    ['Mag ik mijn telefoon gebruiken om te vertalen?', 'May I use my phone to translate?'],
    'Your supervisor gives you safety instructions in Dutch. You understand only a few words. What do you do?',
    [
      'Ask for an explanation, and if an app is OK.',
      'Say "ja, ja" and start working.',
      'Send a photo of it to your friends to translate.',
    ],
    'A translation app helps you understand quickly, but it can make mistakes. For safety, an explanation from a person is the best check. Work papers can be confidential, so do not share them without permission.',
    NONE,
  ),
  tipFor(
    'understood',
    '💬',
    'Check that you understood',
    'Your phone can turn speech into text (live captions): Live Transcribe on Android, Live Captions on iPhone. Check which languages your phone supports. You can also ask someone to write it down, to show it, or to speak slowly. Ask if there is an instruction with pictures, or in your language. Then say back what you understood: "Dus ik moet eerst …?" This is normal here, and it prevents mistakes.',
    ['Dus ik moet eerst de dozen tellen?', 'So I must count the boxes first?'],
    'A colleague explains how a new machine works. She speaks fast and you miss some words. What do you do?',
    [
      'Ask her to show it or write it down, and say it back.',
      'Nod and say "ja, ja", so she does not lose time.',
      'Try the machine alone later and see what happens.',
    ],
    'Showing, writing and saying it back are quick checks. Your colleague can correct you before something goes wrong. Here, this is seen as careful, not as slow.',
    NONE,
  ),
  tipFor(
    'keeplearning',
    '📚',
    'Keep learning, a little every day',
    'A few minutes every day helps more than one long hour a week. Save new words from work in a notes app on your phone. Listen to easy Dutch, for example the NOS Jeugdjournaal (news for children) or a podcast in slow Dutch. Many public libraries have a Taalhuis: free help with Dutch, often with a taalcafé (a place to practise speaking) or a language buddy (taalmaatje). Colleagues often switch to English to help you. Ask them kindly to speak Dutch with you: most people like to help.',
    ['Praat maar Nederlands met mij, dan leer ik het sneller.', 'Just speak Dutch with me, then I learn it faster.'],
    'Your colleagues always switch to English when they talk to you. You want to learn Dutch. What do you do?',
    [
      'Thank them, and ask them to speak Dutch with you.',
      'Say nothing. Dutch will come by itself.',
      'Answer in English too, because that is more polite.',
    ],
    'Colleagues often switch to English to be kind. When you ask for Dutch, most of them are happy to help. Speaking a little every day at work is one of the fastest ways to learn.',
    NONE,
  ),
];

const dataTips = [
  tipFor(
    'details',
    '🔠',
    'Your details: give them right',
    'At the start of a job, you give your details. That is your name, address, phone number, date of birth and BSN. Spell your name slowly, letter by letter. Then check your name on your contract and your payslip. A mistake in your name or BSN can give problems with your pay or tax. New address or phone number? Tell your employer.',
    ['Ik spel het even: A, L, I.', 'Let me spell it: A, L, I.'],
    'On the phone, the agency writes down your last name. You hear that they write it wrong. What do you do?',
    [
      'Spell your name slowly and ask them to read it back.',
      'Say nothing: a small mistake in your name does not matter.',
      'Hang up, and hope they find the mistake later.',
    ],
    'Your name must be the same on your contract, your payslip and your ID. Then your pay and your tax go right. Spelling and reading back is a quick check.',
    NONE,
  ),
  tipFor(
    'dates',
    '📅',
    'Dates: the day comes first',
    'In Dutch, the day comes before the month: 3-6 is 3 June, not 6 March. "Tot en met" means that the last day counts too. Days and months start with a small letter: maandag, juni. Not sure about a date? Ask, and say it back.',
    ['Bedoel je drie juni?', 'Do you mean 3 June?'],
    'Your roster says: "Vrij: 3-6 tot en met 5-6". When are you free?',
    ['On 3, 4 and 5 June.', 'On 3 and 4 June only.', 'From 6 March to 6 May.'],
    'The day comes first, then the month: 3-6 is 3 June. "Tot en met" means that 5 June counts too, so you are free for three days.',
    NONE,
  ),
];

const moreTips = [
  // ⚖️ check: Do you have to do the civic integration (inburgering)? ⚖️ (Wet inburgering 2021 art. 3: inburgeringsplicht; de gemeente maakt een persoonlijk plan, art. 14).
  // ⚖️ check: Not sure if you may work here? Check it before you start, for example at the IND, UWV or VluchtelingenWerk ⚖️ (Wet arbeid vreemdelingen art. 2: tewerkstellingsvergunning; EU-burgers vrij).
  tipFor(
    'permit',
    '🧭',
    'Work and integration',
    'Do you have to do the civic integration (inburgering)? Tell your employer, and tell the gemeente that you work. Ask early if your language classes can fit around your roster. Not sure if you may work here? Check it before you start, for example at the IND, UWV or VluchtelingenWerk. Do they ask you to register as self-employed (zzp’er) for this job? Ask for advice first.',
    ['Ik heb op dinsdag taalles. Kan mijn rooster daar rekening mee houden?', 'I have a language class on Tuesday. Can my roster take that into account?'],
    'Your language class is on Tuesday morning. Your new roster says you work then. What do you do?',
    [
      'Ask your supervisor to change the roster.',
      'Skip the class: work comes first.',
      'Stay home on Tuesdays and say nothing.',
    ],
    'Your integration is a duty too. Many employers help when they know it early. The gemeente can also help you fit your plan around your work.',
    ADVICE_LINE,
  ),
  // ⚖️ check: For the first hours or days you can take emergency leave (calamiteitenverlof), and your employer keeps paying you ⚖️ (Wazo art. 4:1 en 4:5: calamiteiten- en ander kort verzuimverlof, met behoud van loon).
  // ⚖️ check: Does your child need care for longer? Then you can ask for care leave (zorgverlof) ⚖️ (Wazo art. 5:1: kortdurend zorgverlof).
  // ⚖️ check: Pregnant? Your employer may not fire you because of that ⚖️ (BW 7:670 lid 2: opzegverbod tijdens zwangerschap; AWGB/WGB).
  // ⚖️ check: Ask in time about pregnancy leave and parental leave (ouderschapsverlof) ⚖️ (Wazo art. 3:1 zwangerschaps- en bevallingsverlof; art. 6:1 ouderschapsverlof).
  tipFor(
    'kids',
    '🧒',
    'Your child is sick',
    'Is your child suddenly sick? Tell your employer right away. For the first hours or days you can take emergency leave (calamiteitenverlof), and your employer keeps paying you. Does your child need care for longer? Then you can ask for care leave (zorgverlof). Pregnant? Your employer may not fire you because of that. Ask in time about pregnancy leave and parental leave (ouderschapsverlof).',
    ['Mijn kind is ziek. Kan ik vandaag eerder weg?', 'My child is sick. Can I leave early today?'],
    'The daycare (kinderopvang) calls you at work. Your child has a fever and must go home. What do you do?',
    [
      'Tell your supervisor, and ask for emergency leave.',
      'Leave without a word, and explain it tomorrow.',
      'Stay at work, and let your child wait until your shift ends.',
    ],
    'A sick child is an emergency at home. When you tell your supervisor first, they can plan the work. Emergency leave is for moments like this.',
    ADVICE_LINE,
  ),
  // "Weer aan het werk na ziekte" (l.backtowork, 5 November 2026). Coming back well, no guilt.
  // ⚖️ check: Sick for a longer time? Then you and your employer make a plan together for your
  // return ⚖️ (Wet verbetering poortwachter: BW 7:658a, the employer works on the return; BW 7:660a,
  // the worker helps; Regeling procesgang eerste en tweede ziektejaar: probleemanalyse by the
  // bedrijfsarts in week 6, plan van aanpak in week 8). The tip names the law in simple words only.
  // ⚖️ check: The company doctor gives advice about what work you can do ⚖️ (Arbowet art. 14: the
  // bedrijfsarts advises in the verzuimbegeleiding; medical secrecy, so no diagnosis to the employer).
  // Not a right: building up with fewer hours or lighter work is usual practice ("often"), and
  // betermelden goes as the company's absence rules (verzuimprotocol) say. More in docs/juridische-check.md.
  tipFor(
    'backtowork',
    '🤗',
    'Coming back step by step',
    'Are you better? Tell your employer that you can work again (betermelden). After a longer illness, you often start step by step: first fewer hours, or lighter work. The company doctor (bedrijfsarts) gives advice about what you can do. Sick for a longer time? Then you and your employer make a plan together for your return. That is the law (Wet verbetering poortwachter). Say clearly what you can do, and what not yet. You do not have to tell colleagues what illness you had.',
    ['Dit kan ik al. Dat kan ik nog niet.', 'I can already do this. I cannot do that yet.'],
    'You were sick for three weeks. On your first day back, your supervisor asks you to lift heavy boxes. The company doctor said: only light work for now. What do you do?',
    [
      'Say calmly that you can do light work now, and what you cannot do yet.',
      'Lift the boxes anyway: you do not want to be difficult.',
      'Go home without a word.',
    ],
    'Your supervisor wants you back, and healthy. When you say clearly what you can do, they can plan the work. Doing too much too soon can make you sick again.',
    ADVICE_LINE,
  ),
];

const entreeTips = [
  tipFor(
    'workorder',
    '📝',
    'Read first, then start',
    'Before you start, read the work order (werkbon) or the task in the app. Check the address, the task and the number of things. Something is not clear? Ask before you start, not halfway. Then put your tools and materials ready. That saves time, and you make fewer mistakes.',
    ['Er staan tien dozen op de werkbon. Klopt dat?', 'The work order says ten boxes. Is that right?'],
    'Your work order says: paint room 3. Your colleague says it is room 5. What do you do?',
    [
      'Ask your supervisor which room is right.',
      'Paint room 3, because the work order says so.',
      'Paint both rooms, then you are sure.',
    ],
    'When two things do not match, you check before you start. A short question costs less time than doing the work again.',
    HOUSE_LINE,
  ),
  tipFor(
    'handover',
    '✅',
    'Say what is done, and what is not',
    'Your work is not done when you stop. First tidy up your place and your tools. Then ask someone to check your work. Tell your supervisor what is done and what is not done. Did something go wrong, or is something broken? Say it now, not tomorrow. Signing off is part of your work.',
    ['Kamer vier is nog niet klaar. De deur zat op slot.', 'Room four is not done yet. The door was locked.'],
    'You cleaned five rooms. Room 4 was locked. Your shift ends. What do you do?',
    [
      'Tell your supervisor: room 4 is not done.',
      'Go home: room 4 was locked, not your fault.',
      'Write "all done" on the list.',
    ],
    'Your supervisor plans the work. When they know that room 4 is not done, they can send someone else. Then no customer finds a dirty room.',
    HOUSE_LINE,
  ),
  // ⚖️ check: When it is very loud, your employer must give you hearing protection ⚖️ (Arbobesluit,
  // hoofdstuk 6 afdeling 4 "Geluid", art. 6.8: gehoorbescherming vanaf 80 dB(A) beschikbaar, vanaf
  // 85 dB(A) dragen; no numbers in the text).
  // ⚖️ check: For welding or grinding near things that can burn there are extra rules ("heet werk")
  // ⚖️ (Arbowet art. 3 and 5: RI&E; in practice a heetwerkvergunning, Verbond van Verzekeraars
  // "Vereisten Heet Werk"; company rules differ).
  tipFor(
    'workshop',
    '🥽',
    'Eyes, ears and fire',
    'Grinding, sawing and drilling make sparks, small bits and a lot of noise. Wear safety glasses and hearing protection, also for a short job. When it is very loud, your employer must give you hearing protection. Sparks can start a fire. For welding, or grinding near things that can burn, there are extra rules (heet werk): ask before you start. After your work, clean up the bits of metal.',
    ['Ik ga slijpen. Waar is de gehoorbescherming?', 'I am going to grind. Where is the hearing protection?'],
    'You must grind one small piece of metal. It takes one minute. Your safety glasses are in the other room. What do you do?',
    [
      'Get your glasses first, also for one minute.',
      'Grind with your eyes half closed, it is quick.',
      'Hold your other hand in front of your eyes.',
    ],
    'A spark or a bit of metal in your eye can hurt your eye for good. That can happen in one second. Safety glasses help, also for a short job.',
    ADVICE_LINE,
  ),
  // ⚖️ check: Only people with the right training may work on electrical installations, and a
  // trained person makes it safe (spanningsloos) first ⚖️ (Arbobesluit art. 3.4 (the installation)
  // and art. 3.5 (work on or near it, as in r.l.techniek.2); NEN 3140 and
  // NEN-EN 50110: werken door een vakbekwaam of voldoende onderricht persoon, aangewezen door de
  // werkgever).
  tipFor(
    'power',
    '🔌',
    'Electricity: never just like that',
    'Never work on something that has power on it (onder spanning). First a trained colleague makes it safe: they switch off the power and check it. Only people with the right training may do this. Do you see a broken cable or plug? Do not use it, and tell your supervisor right away. Not sure if the power is off? Then it is on.',
    ['Ik zie een kapotte kabel. Wie kan ernaar kijken?', 'I see a broken cable. Who can look at it?'],
    'You must hang a lamp. A colleague says: "The power is off, I think." What do you do?',
    [
      'Ask a trained colleague to check that the power is off.',
      'Start, but wear thick gloves when you touch the wires.',
      'Switch the light on and off to check that the power is off.',
    ],
    '"I think" is not enough with electricity. A shock can kill you. A trained colleague checks that there is no power, and then you can start.',
    ADVICE_LINE,
  ),
  // ⚖️ check: Old oil, batteries and cleaning products are dangerous waste: collected apart, never
  // in the normal bin or the drain ⚖️ (Wet milieubeheer, hoofdstuk 10: gevaarlijke afvalstoffen;
  // Omgevingswet / Besluit activiteiten leefomgeving for garages; Regeling beheer batterijen en
  // accu's).
  // ⚖️ check: Never under a car that only stands on a jack ⚖️ (a work instruction, not a law:
  // Arbobesluit art. 7.2 on safe work equipment, the RI&E and the branch's work instructions).
  tipFor(
    'garage',
    '🛢️',
    'Safe under a car',
    'Never go under a car that only stands on a jack. The car must stand firmly on the lift or on stands. Spilled oil makes the floor slippery: clean it up right away. Old oil, batteries and cleaning products are dangerous waste. They go to a special place, never in the normal bin or down the drain.',
    ['Er ligt olie op de vloer. Ik ruim het op.', 'There is oil on the floor. I am cleaning it up.'],
    'You must look under a car on a jack only. A colleague says: "It is fine, be quick." What do you do?',
    [
      'Wait for the lift or for stands.',
      'Go under quickly, legs outside.',
      'Ask your colleague to hold the car.',
    ],
    'A jack can slip. A car is very heavy, and under it you cannot get away fast. Stands or a lift keep the car in its place.',
    HOUSE_LINE,
  ),
  // ⚖️ check: The customer must agree to extra work and its costs first ⚖️ (BW 7:755: meerwerk;
  // in garages also the BOVAG/Consumentenbond conditions: no extra work without the customer's OK).
  // ⚖️ check: A test drive only with permission and a valid driving licence ⚖️ (Wegenverkeerswet
  // 1994 art. 107: driving without a valid licence is not allowed).
  tipFor(
    'carjob',
    '🧾',
    'Extra work? Ask the customer first',
    'Do you find more problems than the work order says? Do not just fix them. The customer must agree to the extra work and the costs first. Your supervisor or the service desk calls the customer. A test drive is only with permission, and only with a valid driving licence. Write down what you did and which parts you used.',
    ['Ik zie nog een probleem. Wie belt de klant?', 'I see another problem. Who calls the customer?'],
    'You change a car\'s oil. The brakes are bad too. It must be ready in an hour. What do you do?',
    [
      'Tell your supervisor, so they call the customer.',
      'Fix the brakes too, for safety.',
      'Say nothing: they are not on the order.',
    ],
    'The customer pays, so the customer decides. Without their OK, the garage may not just do extra work. Bad brakes are dangerous, so telling someone matters.',
    ADVICE_LINE,
  ),
  // ⚖️ check: Before the placement starts, the student, the school and the company sign the POK
  // (praktijkovereenkomst) ⚖️ (WEB art. 7.2.8: praktijkovereenkomst between deelnemer, instelling
  // and leerbedrijf; the leerbedrijf is recognised by SBB, WEB art. 7.2.10).
  // ⚖️ check: Without a signed POK, the placement may not count for your diploma ⚖️ (WEB art. 7.2.8).
  // ⚖️ check: Sick: call the company and tell the school too ⚖️ (school rules: the OER and the
  // stagereglement, not a law; they differ per school).
  tipFor(
    'placement',
    '🎒',
    'Sign first, then start',
    'In Entree you learn a lot at a company: your work placement (stage, or bpv). Before you start, you, the school and the company sign an agreement: the POK. At the company, your workplace trainer (praktijkopleider) helps you. At school, your placement coach (stagebegeleider) helps you. Sick? Call the company before your start time, and tell the school too. Rules differ per school: ask your placement coach.',
    ['Ik begin pas als de POK getekend is.', 'I only start when the placement agreement is signed.'],
    'The company asks you to start tomorrow. The POK is not signed yet. What do you do?',
    [
      'Ask your placement coach to arrange the POK first.',
      'Start tomorrow, and sign the POK when you have time.',
      'Start, but do not tell the school about it yet.',
    ],
    'The POK says what you learn and who helps you. Without a signed POK, your placement may not count for your diploma. So you sign it before you start.',
    NONE,
  ),
  // ⚖️ check: Is something really wrong: first the workplace trainer, then the placement coach
  // ⚖️ (the school's complaints procedure (klachtenregeling) and the stagereglement: no article
  // of the WEB says this order, schools differ; SBB can take away a
  // leerbedrijf's recognition).
  tipFor(
    'review',
    '🗣️',
    'Ask for feedback, and for an example',
    'At your placement, people tell you what goes well and what can be better: feedback. That is normal, and it helps you learn. You do not understand it? Ask for an example. Ask for feedback yourself too, for example once a week. Is something really wrong at your placement? First talk to your workplace trainer. Does that not help? Then go to your placement coach at school.',
    ['Wat ging goed, en wat kan beter?', 'What went well, and what can be better?'],
    'Your workplace trainer says: "You must work more carefully." You do not know what they mean. What do you do?',
    [
      'Ask for an example of what you must do differently.',
      'Say yes, and hope that you find out yourself.',
      'Work much slower from now on, so that nothing goes wrong.',
    ],
    'With an example, you know what to change. Asking shows that you want to learn. Trainers like that.',
    NONE,
  ),
  tipFor(
    'mychoice',
    '🌟',
    'Your strong points count',
    'What are you good at? Think of work, school and home. Caring for family, a side job or volunteer work count too. What do you like, and what do you not like? Not sure what work fits you? Ask to join someone at work for a day (meeloopdag). Your coach at school can help you choose.',
    ['Ik kan goed met mensen omgaan. Ik help thuis veel.', 'I get on well with people. I help a lot at home.'],
    'At school they ask: "What are you good at?" You never had a paid job. What do you say?',
    [
      'What you do well at home, like caring for others.',
      'That you do not know yet, because you never had a job.',
      'That you can do every kind of work, all of it.',
    ],
    'Skills from home count too. Caring, planning and helping are skills that employers need. Say what you did, with an example.',
    NONE,
  ),
  // ⚖️ check: With an Entree diploma you may go on to level 2 of the mbo ⚖️ (vooropleidingseis:
  // WEB art. 8.1.1, the Entree diploma gives access to level 2; the toelatingsrecht itself is in the WEB as well,
  // r.l.loopbaan.2 names art. 8.1.7a, an expert should settle which article; Wet aanmelddatum en toelatingsrecht mbo, 2017; ask the
  // school about the conditions).
  // ⚖️ check: A diploma at mbo level 2 or higher is a startkwalificatie ⚖️ (Leerplichtwet 1969
  // art. 1: havo, vwo or mbo level 2).
  // ⚖️ check: In the bbl you work at a recognised company and go to school about one day a week;
  // you need a job or a work-and-learn place ⚖️ (WEB art. 7.2.2: bbl with a praktijkovereenkomst
  // and an arbeidsovereenkomst; "one day a week" is usual, not a rule).
  tipFor(
    'nextstep',
    '🎓',
    'After Entree: level 2 or work',
    'With an Entree diploma, you may go on to level 2 of the mbo. A diploma at level 2 or higher is a basic qualification (startkwalificatie). It helps you to find work and to keep it. In the bbl you work at a company and go to school about one day a week. For that you need a job or a work-and-learn place (leerwerkbaan). Go to an open day, and talk to your coach at school.',
    ['Kan ik na Entree naar niveau 2?', 'Can I go to level 2 after Entree?'],
    'You have your Entree diploma. A company offers you a job without training. You also want to keep learning. What do you do?',
    [
      'Ask the company if a bbl place is possible.',
      'Take the job, and stop learning for good.',
      'Stay at home until a school calls you.',
    ],
    'With the bbl, you work and learn at the same time. You earn money, and you get a level 2 diploma. Many companies like this.',
    NONE,
  ),
  tipFor(
    'email',
    '📧',
    'A short e-mail: who, what, when',
    'An e-mail to work is short and polite. Start with a greeting, like "Beste Karin,". Then say what you want, and when. End with a greeting and your full name. Write a short subject, like "Vrij op vrijdag". Read your e-mail again before you send it.',
    ['Beste Karin, mag ik vrijdag vrij? Groet, Ali Haddad', 'Dear Karin, may I have Friday off? Regards, Ali Haddad'],
    'You want a day off next Friday. Which e-mail to your supervisor is best?',
    [
      '"Beste Karin, mag ik vrijdag vrij? Groet, Ali Haddad"',
      '"Vrijdag ben ik er niet." (without a greeting or your name).',
      'A long e-mail about your week, with the question at the end.',
    ],
    'A good e-mail has a greeting, one clear question and your name. Then your supervisor can answer quickly.',
    NONE,
  ),
  // ⚖️ check: Bought something online? You can usually change your mind within 14 days ⚖️ (BW
  // 6:230o: herroepingsrecht bij koop op afstand, with exceptions, for example food or made to order).
  // ⚖️ check: Keep the receipt for the guarantee ⚖️ (BW 7:17: a product must work as you may expect;
  // BW 7:18 lid 2: in the first year the shop must prove that it was not broken).
  // ⚖️ check: Buy now, pay later is also a debt ⚖️ (achteraf betalen: a form of credit; new EU rules,
  // Richtlijn (EU) 2023/2225 consumentenkrediet, from November 2026).
  tipFor(
    'budget',
    '🐷',
    'Fixed costs first',
    'When you get your pay, first pay the fixed costs: rent, insurance and your phone. Try to save a small amount every month, also 10 euros. Buy now, pay later is also a debt. Did you buy something online? Then you can usually change your mind within 14 days. Keep the receipt: you need it for the guarantee.',
    ['Ik betaal liever nu. Dan heb ik geen schuld.', 'I prefer to pay now. Then I have no debt.'],
    'You get your pay today. You want new shoes, and your rent must still be paid. What do you do?',
    [
      'Pay the rent first, then see what is left.',
      'Buy the shoes, and pay the rent later.',
      'Buy the shoes with buy now, pay later.',
    ],
    'Rent, insurance and your phone come back every month. When you pay those first, you know what money is left. Then you do not get debts.',
    NONE,
  ),
  // ⚖️ check: Working under the influence of alcohol or drugs is dangerous, and most employers
  // forbid it ⚖️ (Arbowet art. 3 and 11: the employer's policy and the worker's duty to work safely;
  // for drivers Wegenverkeerswet art. 8; company rules differ).
  // ⚖️ check: The huisarts keeps it secret ⚖️ (medisch beroepsgeheim, BW 7:457, WGBO).
  tipFor(
    'healthy',
    '😴',
    'Sleep, food and no drugs',
    'You work better and more safely when you sleep enough, also after a late shift. Eat breakfast, and drink water during the day. Move in your break, for example a short walk. Working under the influence of alcohol or drugs is dangerous, and most employers forbid it. Do you feel low for a long time, or can you not stop drinking or using? Talk to your huisarts. They can help, and they keep it secret.',
    ['Ik voel me al lang somber. Kan ik een afspraak maken?', 'I have felt low for a long time. Can I make an appointment?'],
    'You have a night shift tonight. A colleague offers you a pill to stay awake. What do you do?',
    [
      'Say no, and sleep a few hours before your shift.',
      'Take half a pill, that is not dangerous.',
      'Take it, but tell nobody at work about it.',
    ],
    'Pills from a colleague can be drugs. They can make you sick, or make you make mistakes at work. Sleep is the safe way to stay awake.',
    NONE,
  ),
  // "Je goed voelen op het werk" (5 November 2026). Warm and calm, no medical promises: who you can
  // talk to, not what they will fix. Not about one culture: missing your family is named as one of
  // the reasons, never as something of a country. No closing line: the tip is about feeling well
  // and asking for help (as c.healthy); its one right is said plainly.
  // ⚖️ check: You may also ask for a talk with the company doctor yourself ⚖️ (Arbowet art. 14: the
  // worker can consult the bedrijfsarts, the "open spreekuur" of the basiscontract
  // arbodienstverlening, since 1 July 2017 (which sub-clause: for the expert); as Werkregels
  // r.l.veilig.3: "Je mag ook zelf naar de bedrijfsarts").
  // ⚖️ check: Doctors do not tell your boss what you said ⚖️ (medisch beroepsgeheim, WGBO, BW 7:457;
  // for the bedrijfsarts also the Wet verbetering poortwachter: only what work you can do, as
  // c.illness.w).
  // ⚖️ check: 113: free, day and night, also a chat on 113.nl ⚖️ (as "Wie bel je?" h.113 in
  // src/content/regels/help.ts, with its sources).
  // ⚖️ check: The vertrouwenspersoon "if there is one": not required by law in the Netherlands ⚖️
  // (Arbowet art. 3 lid 2: beleid psychosociale arbeidsbelasting; a vertrouwenspersoon is usual,
  // not compulsory; as c.respect and c.boundaries).
  tipFor(
    'feelwell',
    '💬',
    'Too much? You do not have to do it alone',
    'Everyone feels tired, stressed or sad sometimes. Too much work (werkdruk), bad sleep from shift work or missing your family can make it heavy. You do not have to carry it alone, and saying "it is too much" is not weak. Talk to someone you trust. For example your supervisor, the company doctor (bedrijfsarts) or your huisarts. Or the confidential adviser (vertrouwenspersoon), if your company has one. You may also ask for a talk with the company doctor yourself. Doctors do not tell your boss what you said. Do you think about suicide, or do you worry about someone? Call 113 (free, day and night), or chat at 113.nl.',
    ['Het gaat niet zo goed. Kan ik even met je praten?', 'I am not doing so well. Can I talk to you for a moment?'],
    'For weeks, you sleep badly and the work is too much. You feel very tired. What do you do?',
    [
      'Tell your supervisor or the company doctor.',
      'Say nothing, and work harder and faster.',
      'Stay at home, and tell nobody why.',
    ],
    'Saying it early is not weak. Then you can look for a way out together, for example other shifts. You do not have to do it alone.',
    NONE,
  ),
  // ⚖️ check: With Dutch nationality you may vote in every election, from 18 ⚖️ (Grondwet art. 4;
  // Kieswet art. B 1).
  // ⚖️ check: For the gemeenteraad, people from another EU country who live here may vote too, and
  // people from outside the EU after 5 years of legal stay ⚖️ (Kieswet art. B 3; as in r.l.meedoen.1).
  // ⚖️ check: The gemeente sends the stempas by post; bring it with your ID ⚖️ (Kieswet art. J 7 and
  // J 25: stempas and identity document).
  tipFor(
    'council',
    '🗳️',
    'Who may vote?',
    'In the Netherlands you choose who decides, by voting. The gemeenteraad decides about your town. The Tweede Kamer makes the laws for the whole country. With Dutch nationality, you may vote in every election, from 18. More people may vote for the gemeenteraad. People from another EU country who live here may vote. People from outside the EU may vote after 5 years of legal stay. The gemeente sends you a voting pass (stempas). Bring it with your ID. Not sure if you may vote? Ask the gemeente.',
    ['Mag ik stemmen voor de gemeenteraad?', 'May I vote for the gemeenteraad?'],
    'You are from Morocco and have lived here legally for six years, without Dutch nationality. What is true?',
    [
      'You may vote for the gemeenteraad.',
      'You may vote for the Tweede Kamer too.',
      'Without a Dutch passport you may not vote.',
    ],
    'After 5 years of legal stay, you may vote for the gemeenteraad. For the Tweede Kamer, you need Dutch nationality.',
    NONE,
  ),
  // ⚖️ check: From 14, you must show your ID when the police ask for it ⚖️ (Wet op de
  // identificatieplicht; Wetboek van Strafrecht art. 447e).
  // ⚖️ check: You can object in writing, before the date in the letter (usually 6 weeks) ⚖️ (Awb
  // art. 6:7). Not for a traffic fine: that has its own route (WAHV, beroep bij de officier van
  // justitie), so the tip speaks of a letter from the gemeente or the UWV.
  // ⚖️ check: The police and the judge must treat everyone equally ⚖️ (Grondwet art. 1).
  // ⚖️ check: Arrested? You may ask for a lawyer ⚖️ (Wetboek van Strafvordering art. 28 and 28a-28e).
  // ⚖️ check: The Juridisch Loket gives free advice ⚖️ (juridischloket.nl).
  tipFor(
    'police',
    '👮',
    'Your ID and your rights',
    'From 14, you must show your ID when the police ask for it. So always carry it with you. Did you get a letter from the gemeente or the UWV, for example? Do you not agree with the decision in it? Then you can object (bezwaar maken) in writing. Do it before the date in the letter. The police and the judge must treat everyone equally. Arrested? You may ask for a lawyer. The Juridisch Loket gives free advice.',
    ['Ik ben het niet eens met dit besluit. Ik maak bezwaar.', 'I do not agree with this decision. I am objecting.'],
    'You get a letter from the gemeente. You do not agree with their decision. The letter says you have six weeks. What do you do?',
    [
      'Write a letter to object, before the date.',
      'Call them once, and wait until they call you back.',
      'Wait: after six weeks, it stops by itself.',
    ],
    'You object in writing, before the date in the letter. After that date, it is often too late. The Juridisch Loket can help you write it.',
    NONE,
  ),
  // ⚖️ check: Your DigiD is only for you: do not give it to anyone, also not to your employer ⚖️
  // (DigiD-gebruiksvoorwaarden, Logius; someone may help you with a DigiD machtiging instead).
  tipFor(
    'login',
    '🔐',
    'Your login is yours',
    'Your password and your DigiD are only for you. Do not give them to anyone, also not to your employer or a colleague. On a shared computer, always log out when you are done. Going away for a moment? Lock your screen. Forgot your password? Ask the IT department (ICT-afdeling) for a new one.',
    ['Ik ga even weg. Ik vergrendel mijn scherm.', 'I am going away for a moment. I am locking my screen.'],
    'Your supervisor asks for your DigiD and password, to arrange your papers quickly. What do you do?',
    [
      'Say no, and log in yourself while they help.',
      'Give it this one time, because it is your boss.',
      'Write it on a paper, so they can use it later.',
    ],
    'With your DigiD, someone can see and change your tax, benefits and health papers. It is only for you. You can log in yourself and let someone help you.',
    // Not HOUSE_LINE: in the situation the supervisor asks for the DigiD, and the DigiD is no
    // company rule. The rules for computers (logging out, the screen) are, and the IT department
    // knows them.
    'Computer rules differ per company: ask the IT department what the rules are where you work.',
  ),
  tipFor(
    'phish',
    '🎣',
    'In a hurry, with a button? Do not click',
    'A fake e-mail (phishing) often looks real. It wants you to act fast: "Your account will be closed today!" Check the sender. Do not click on a link or open an attachment you did not expect. Go to the real website or app yourself. Did you click anyway? Change your password right away, and call the IT department. That is not a shame: the sooner they know, the better.',
    ['Ik heb op een verdachte link geklikt.', 'I clicked on a suspicious link.'],
    'You clicked on a link in an e-mail and typed your password. Then you see that the e-mail was fake. What do you do?',
    [
      'Change your password, and call the IT department.',
      'Delete the e-mail, so that nobody else clicks on it.',
      'Wait a day to see if something goes wrong.',
    ],
    'With your password, someone else can get into the systems of your work. When you change it fast and tell the IT department, they can stop it in time.',
    HOUSE_LINE,
  ),
];

const deliveryTips = [
  // Company rules (where a parcel may go when nobody is home): HOUSE_LINE.
  tipFor(
    'parcel',
    '📦',
    'Not at home, or a broken parcel',
    'Is the customer not at home? Follow the rules of your company: try the neighbours, or take the parcel back. Do not just leave it at the door, unless the customer asked for that. Is a parcel broken or wet? Do not deliver it as if nothing is wrong. Take a photo as proof, and report it in the scanner or the app. Being honest about a problem is always better than hiding it.',
    ['Dit pakket is kapot. Hier is een foto.', 'This parcel is broken. Here is a photo.'],
    'The customer is not at home, and the neighbours are not either. What do you do?',
    [
      'Scan "not at home", and take it back.',
      'Scan it as delivered, and leave it at the door.',
      'Hide it behind the bin, so nobody sees it.',
    ],
    'A parcel scanned as delivered must really be with the customer. When you scan what really happened, the customer can get the parcel later, and nobody thinks you lost it.',
    HOUSE_LINE,
  ),
  // ⚖️ check: Holding a phone while you drive is forbidden ⚖️ (RVV 1990 art. 61a; in Belgium the
  // same: Wegverkeersreglement art. 8.4). A holder for the navigation is advice, no legal claim.
  // ⚖️ check: An employee has a right to breaks ⚖️ (Arbeidstijdenwet art. 5:4; for drivers also the
  // Arbeidstijdenbesluit vervoer; the EU driving times with a tachograph are for trucks and vans
  // above 3.5 t: no hours or numbers in the text).
  // ⚖️ check: Who decides how, when and where you work counts, not the word on the contract: then
  // you may be an employee after all (schijnzelfstandigheid; BW 7:610, Hoge Raad 24 maart 2023,
  // Deliveroo; the EU platform work directive 2024/2831, to be in national law by 2 December 2026,
  // is not named). Werkregels says the same (r.l.contract.4, "Stage, leerwerkbaan en zzp"); the
  // language course's l.permit asks "Ben ik werknemer of zzp’er?": the tip points there, it does
  // not repeat it. "zelfstandig" and "in loondienst", not "zzp’er": the same in Belgium.
  // The company may itself be the problem: ABUSE_LINE.
  tipFor(
    'road',
    '🚚',
    'Safe on the road, and fair work',
    'Never hold your phone while you drive: that is forbidden. Use a holder for the navigation. Take your breaks, also on a busy day. A heavy parcel? Use the hand truck, or lift it together. Ice or snow? Drive slowly: arriving late is better than an accident. Some companies say you work as self-employed (zelfstandig). But who decides your hours, your route and your clothes? If the company decides all that, you may be an employee after all (in loondienst). Then you often have more rights, like pay when you are sick. More about this in the lesson "Papers, integration and your job".',
    ['Ik neem nu pauze. Daarna rij ik verder.', 'I am taking my break now. Then I will drive on.'],
    'The company calls you self-employed. But it decides your hours, your route and your clothes. What do you do?',
    [
      'Ask for advice: maybe you are an employee.',
      'Nothing: the contract says self-employed, so it is.',
      'Work more hours, so you earn the same.',
    ],
    'What counts is how you really work, not only the word on the contract. If the company decides how, when and where you work, you are often an employee. Then you have more rights.',
    ABUSE_LINE,
  ),
  // The two lessons of 14 November 2026. Neither tip states a right or an amount, and neither says
  // who pays for damage: they are about reporting. How to report differs per company: HOUSE_LINE.
  tipFor(
    'vancheck',
    '📸',
    'Look before you drive',
    'Walk around the van before your first run. Do you see a dent, a scratch or a broken mirror? Take a photo, and report it before you drive away. Then everyone knows the damage was already there. Did something happen during your run? Report it the same day, also when it is small. Hiding damage gives bigger problems later.',
    ['Er zit schade aan de bestelbus. Hier is een foto.', 'There is damage on the van. Here is a photo.'],
    'In the morning you see a new dent in the van. You did not make it. What do you do?',
    [
      'Take a photo, and report it before you drive.',
      'Say nothing: it is not your dent.',
      'Wait and see if someone asks about it.',
    ],
    'When you report it before you drive, nobody can think you did it. A photo with the time is clear for everyone.',
    HOUSE_LINE,
  ),
  // "Not with the phone in your hand while you drive": the same rule as in c.road above (⚖️ checked
  // there: RVV 1990 art. 61a; Belgium: Wegverkeersreglement art. 8.4).
  tipFor(
    'delay',
    '📞',
    'Late? Say it in time',
    'A traffic jam or a closed road is not your fault. But tell the planner as soon as you know that you will be late. Then the planner can tell the customers, or change the route. Stop in a safe place first: do not call with the phone in your hand while you drive. And do not drive faster to win back the time.',
    ['Ik sta in de file. Ik ben een half uur later.', 'I am in a traffic jam. I will be half an hour later.'],
    'A road is closed. The diversion costs you thirty minutes. What do you do?',
    [
      'Tell the planner as soon as you can stop safely.',
      'Drive faster, so you win back the lost time.',
      'Say nothing: maybe nobody notices.',
    ],
    'When the planner knows it early, the customers hear it and nobody waits for nothing. Driving faster is dangerous, and it wins almost no time.',
    HOUSE_LINE,
  ),
];

// ---- Every sector unit at four lessons (the owner's request, 14 November 2026) ----
// One tip per new sector lesson (the lessons themselves stand in their own units above). None of
// them states a right or an amount: they are about how the work is done (NONE) or about rules that
// differ per company (HOUSE_LINE). The short situations are in tests/situationLength.test.ts.

const sectorFourTips = [
  // Bouw.
  tipFor(
    'measure',
    '📏',
    'Measure twice, saw once',
    'On a building site, measures are often in millimetres. So "nine hundred" can mean 90 centimetres. Not sure? Ask: "Is that millimetres or centimetres?" Say the number back, and write it down. Measure twice before you saw or drill: a plank that is too short stays too short. Did you make a mistake? Say it right away. Then the team can still fix it, and it costs less.',
    ['Is dat in millimeters of in centimeters?', 'Is that in millimetres or in centimetres?'],
    'Your colleague calls a measure. You did not hear it well. What do you do?',
    [
      'Say the number back, and ask if it is right.',
      'Saw the plank at what you think you heard.',
      'Wait until he comes to look himself.',
    ],
    'A wrong measure costs material and time. Saying the number back takes two seconds, and everyone on a building site does it.',
    NONE,
  ),
  tipFor(
    'siteday',
    '🧹',
    'A tidy site is a safe site',
    'On a building site, tidying up is part of the job, for everyone. Loose planks, cables and waste make people trip and fall. So clear your own place during the day, not only at the end. Waste is sorted: wood, stone and metal often go in different skips. Not sure which one? Ask. Do you see a nail sticking out, or a hole without a cover? Fix it if you can do that safely, or tell the site manager (de uitvoerder).',
    ['Ik ruim dit even op. Dan struikelt er niemand.', 'I will clear this up. Then nobody trips.'],
    'Planks with nails lie on the path. They are not yours. What do you do?',
    [
      'Move them aside, or tell the site manager.',
      'Step over them: they are not your planks.',
      'Wait: someone else will clear them.',
    ],
    'Everyone uses the same paths. Who sees a danger, does something about it: that is normal on a building site.',
    HOUSE_LINE,
  ),
  // Productie.
  tipFor(
    'shifts',
    '🤝',
    'Tell the next shift',
    'A factory often runs day and night, in shifts. At the end of your shift, a colleague takes over your place. Do not just leave: wait until your colleague is there. Tell in a few words what happened: a fault, a product that was wrong, something that is not finished. Many companies also have a list or a screen for this. A problem you do not pass on comes back in the next shift, and then nobody knows why.',
    ['De machine had een storing. Nu werkt hij weer.', 'The machine had a fault. Now it works again.'],
    'Your shift is over. Your colleague is five minutes late. What do you do?',
    [
      'Wait, and tell the team leader.',
      'Go home: your shift is over.',
      'Stop the machine and leave.',
    ],
    'A running machine may not stand alone. When you wait and report it, the work goes on safely, and the team leader can solve it.',
    HOUSE_LINE,
  ),
  // Zorg. What a helper may do differs per home and per training: the tips say "tell the nurse" and
  // "work the way you were shown", and name no task or rule by law.
  tipFor(
    'signals',
    '🤒',
    'You see the client every day',
    'You are often the one who sees a client the most. So you notice it first when something is different: eating less, more pain, confused, short of breath. You do not have to know what it is. Say what you see, and say when you saw it. Tell the nurse the same day, and write it down if that is your task. Does it look serious? Do not wait: call the nurse right away. Better one time too many than one time too few.',
    ['Mevrouw eet niet en is duizelig. Dat is anders dan normaal.', 'The lady is not eating and is dizzy. That is different from normal.'],
    'A client is quiet today and does not want to eat. Normally she talks a lot. What do you do?',
    [
      'Tell the nurse what you see, today.',
      'Wait a few days: maybe it passes.',
      'Give her a pill from the cupboard.',
    ],
    'A small change can be the first sign of an illness. You do not decide what it is: the nurse does. But she can only act if you tell her.',
    NONE,
  ),
  tipFor(
    'transfer',
    '🛏️',
    'Tell first, then help',
    'Before you touch a client, say what you are going to do: "Ik help u nu met opstaan." Then the client is not startled, and can help along. Let the client do what they can still do: that keeps them strong. Do not lift a person on your own. Use the aids that are there, like the hoist, and work the way you were shown. Not shown yet? Ask first. Your back must last a whole working life.',
    ['Ik help u nu met opstaan. Bent u er klaar voor?', 'I will help you get up now. Are you ready?'],
    'A client wants to get out of bed. You have not learned to use the hoist yet. What do you do?',
    [
      'Ask a colleague who knows the hoist.',
      'Lift her yourself: she is not heavy.',
      'Try the hoist: it cannot be hard.',
    ],
    'Lifting a person the wrong way can hurt the client and your back. Asking a colleague takes a few minutes. A fall can take months.',
    HOUSE_LINE,
  ),
  // Horeca.
  tipFor(
    'dishes',
    '🥛',
    'Broken glass: say it right away',
    'In a kitchen, glass breaks. That is normal, and nobody is angry about it. But say it right away, loud and clear: "Glas!" Do not pick up the pieces with your bare hands: use a brush. Did glass fall near food, or in the ice? Then that food or that ice must be thrown away, all of it. A small piece of glass in a meal is very dangerous for a guest. Glass goes in its own bin, not in a bag that someone lifts.',
    ['Pas op, glas! Ik ruim het meteen op.', 'Careful, glass! I will clear it up right away.'],
    'A glass breaks above the ice for the drinks. It is very busy. What do you do?',
    [
      'Say it, and throw away all the ice.',
      'Take out the pieces you can see.',
      'Say nothing: it is too busy now.',
    ],
    'You cannot see small pieces of glass in ice. New ice costs little. A guest with glass in a drink can get badly hurt.',
    HOUSE_LINE,
  ),
  tipFor(
    'rush',
    '♨️',
    'Short words when it is busy',
    'When it is busy, people in a kitchen talk in short words: "Heet!", "Achter!", "Tafel zes!" That is not rude. It is fast and safe: everyone knows where the hot pans and the knives are. Call "Heet!" or "Achter!" yourself when you pass behind someone. Did you hear an order? Say it back: "Ja, chef." Then the chef knows you heard it. Was someone short with you in the rush? Often that is over after the service. Does it stay unpleasant? Then talk about it at a quiet moment.',
    ['Achter! Ik heb een hete pan.', 'Behind! I have a hot pan.'],
    'It is very busy. The chef calls: "Tafel zes, nu!" He does not say please. What do you do?',
    [
      'Say "Ja, chef", and do it.',
      'Stop, and say that he is rude.',
      'Do it, but say nothing back.',
    ],
    'In the rush, short is normal and not meant personally. Saying it back shows that you heard it. That keeps the kitchen fast and safe.',
    NONE,
  ),
  // Schoonmaak.
  tipFor(
    'rounds',
    '🏢',
    'Cleaning where people work',
    'Often you clean while other people are still at work. Greet them, and ask: "Mag ik hier even schoonmaken?" Most people say yes. Is someone in a meeting or on the phone? Then come back later. Do not move papers on a desk, and do not read them: clean around them. You have a set time for your round. Is the time too short to do it well? Do not skip rooms in silence. Tell your supervisor what you could not do, and why.',
    ['Goedemiddag. Mag ik hier even schoonmaken?', 'Good afternoon. May I clean here for a moment?'],
    'Your round takes longer today: one room was very dirty. Two offices are not done. What do you do?',
    [
      'Tell your supervisor which two, and why.',
      'Go home, and hope nobody sees it.',
      'Do them very fast, without the floors.',
    ],
    'A customer who finds a dirty office complains. A supervisor who knows about it can explain it, or give you more time. Telling it is not failing.',
    NONE,
  ),
  // The colours differ per company (often red for the toilet and blue for desks): "often", and ask.
  tipFor(
    'colours',
    '🟥',
    'Every colour has its place',
    'Many cleaning companies work with colours. Each colour of cloth, sponge and bucket is for one place. Often red is for the toilet, and blue is for desks and tables. This way, dirt from the toilet does not get onto a desk or into a kitchen. The colours can be different at each company, so ask on your first day. Is a cloth dirty, or did it fall on the floor? Take a clean one. Used cloths go in the laundry bag, not back on the cart.',
    ['Welke kleur is hier voor de wc?', 'Which colour is for the toilet here?'],
    'Your blue cloths are finished. You must still clean three desks. You only have red cloths. What do you do?',
    [
      'Get new blue cloths first.',
      'Use a red cloth: clean is clean.',
      'Use one blue cloth again for all three.',
    ],
    'A colour system only works when everyone always follows it. Then nobody has to wonder where a cloth has been.',
    HOUSE_LINE,
  ),
  // Winkel.
  tipFor(
    'shophelp',
    '🛍️',
    '"I do not know" is not the end',
    'A customer asks something and you do not know the answer. That is fine: nobody knows everything. But do not say only "nee" or "weet ik niet", and do not walk away. Say: "Ik vraag het even voor u", and get a colleague. Is a product sold out? Say when it comes in again, or show something like it. Look at the customer and greet them, also when you are busy stocking shelves. Did you not understand the question? Ask the customer to say it again, slowly.',
    ['Dat weet ik niet. Ik vraag het even voor u.', 'I do not know that. I will ask for you.'],
    'A customer asks for a product. You do not know the word. What do you do?',
    [
      'Say: "Ik vraag het even voor u."',
      'Say "nee", and go on working.',
      'Point somewhere, so she walks away.',
    ],
    'A customer does not mind that you are new or still learning Dutch. A customer does mind getting no help. Getting a colleague is good service.',
    NONE,
  ),
  // What a shop worker may do with a thief differs per company (and holding someone is a matter
  // for the law): the tip says "do not hold, tell the manager or the guard", and names no right.
  tipFor(
    'shoptrouble',
    '🛡️',
    'An angry customer or a thief: you come first',
    'Sometimes a customer gets angry, or you see someone stealing. Your safety comes first, always. With an angry customer: stay calm, do not shout back, and get the store manager. You do not have to solve it alone. Do you see a thief? Do not run after them, do not hold them, and do not block the door. Look well at what you see, and tell the manager or the security guard right away. Things can be replaced. You cannot. Were you scared afterwards? Talk about it with your supervisor.',
    ['Ik zie iemand die iets in zijn tas stopt.', 'I see someone putting something in his bag.'],
    'A man puts a bottle under his coat and walks to the exit. What do you do?',
    [
      'Tell the manager or the guard.',
      'Run after him and hold his arm.',
      'Stand in front of the door.',
    ],
    'A thief who is stopped can get violent. The manager and the guard know what to do. No product is worth getting hurt for.',
    HOUSE_LINE,
  ),
  // Tuinbouw. Plant hygiene (hands, clothes, a foot bath, no own tomatoes or peppers) is a company
  // rule against plant viruses, not a law for the worker: HOUSE_LINE.
  tipFor(
    'plantcare',
    '🧼',
    'Clean hands, healthy plants',
    'Plants can get sick too. A virus goes from plant to plant on hands, gloves, knives and clothes. In a greenhouse, one sick plant can mean that thousands of plants must go. That is why there are strict rules at the door: wash your hands, wear the work clothes of the company, and walk through the foot bath. Many greenhouses do not allow your own tomatoes, peppers or cucumbers in your lunch. Do you see a plant that looks strange? Do not touch it. Tell your supervisor which row it is.',
    ['In rij twaalf staat een zieke plant.', 'There is a sick plant in row twelve.'],
    'You see a plant with strange yellow spots. What do you do?',
    [
      'Leave it, and tell your supervisor.',
      'Pull it out and take it with you.',
      'Cut off the leaves with spots.',
    ],
    'When you touch a sick plant, the virus goes with you to the next plants. Your supervisor knows how to take it away safely.',
    HOUSE_LINE,
  ),
  tipFor(
    'outdoors',
    '⛈️',
    'Sun, rain and thunder',
    'Outside, you work in all kinds of weather. In the sun: cover your head and your skin, use sunscreen, and drink water often. In the rain: wear your rain suit and boots, and put on dry clothes in your break. Wet and cold make you sick and slow. Is there thunder? Then stop and go inside, or into a car or a van. Not under a tree, and not in an open field. Do you need rain clothes or boots for the work? Ask your employer about them before you buy them yourself.',
    ['Het gaat onweren. Zullen we naar binnen gaan?', 'There is going to be thunder. Shall we go inside?'],
    'You are on the field. You hear thunder nearby. Your row is almost finished. What do you do?',
    [
      'Stop, and go inside or into the van.',
      'Finish the row quickly first.',
      'Wait under the big tree.',
    ],
    'Lightning hits the highest point, and on a flat field that is you. The row can wait a quarter of an hour.',
    NONE,
  ),
  // Techniek.
  tipFor(
    'drawing',
    '📐',
    'The drawing decides',
    'In a workshop you make what the drawing says, not what looks about right. The measures are in millimetres, and one millimetre can be too much. Does a part not fit? Do not use force, and do not make the hole bigger "just a little". Measure again, and look at the drawing. Can you not read the drawing, or is a measure missing? Ask before you start. A question costs a minute. A wrong part costs material and hours.',
    ['Ik kan deze maat niet lezen. Kun je even kijken?', 'I cannot read this measure. Can you have a look?'],
    'A part does not fit: it is one millimetre too big. With a hammer it would go in. What do you do?',
    [
      'Measure again, and ask what to do.',
      'Hit it in with the hammer.',
      'Grind a bit off, and say nothing.',
    ],
    'A part that goes in with force can break later, at the customer. When you report it, the cause can be found.',
    NONE,
  ),
  // Cooling a burn with water for at least ten minutes is the common first-aid advice (Het Oranje
  // Kruis, the Brandwondenstichting): advice, no legal claim. Who may weld, and where, differs per
  // company: HOUSE_LINE.
  tipFor(
    'weld',
    '🔥',
    'Hot metal looks cold',
    'Welding gives very bright light. Do not look into it without a welding helmet, also not from a distance: your eyes can burn, and you feel it only hours later. Is a colleague welding near you? Look away, or stand behind the screen. Metal that was just welded or ground looks normal, but it is very hot. Do not pick it up with bare hands. Welding smoke is bad for your lungs: switch on the extraction. A burn? Cool it with water right away, for at least ten minutes, and report it.',
    ['Is dit al afgekoeld?', 'Has this cooled down yet?'],
    'A colleague is welding next to you. You have no welding helmet on. What do you do?',
    [
      'Look away, and stand behind the screen.',
      'Watch for a moment: you can learn from it.',
      'Close your eyes halfway.',
    ],
    'The light of welding burns your eyes, also from the side and from a distance. You feel the pain only later, often at night.',
    HOUSE_LINE,
  ),
  // Garage.
  tipFor(
    'carparts',
    '💺',
    'The car belongs to the customer',
    'A car in the garage is not yours: it is the customer’s. Put a cover on the seat and on the steering wheel before you get in, and work with clean hands inside. Leave the seat, the mirrors and the radio the way they were. Did you have to move the seat? Put it back. Do not touch personal things in the car. Did you make a scratch or a stain? Tell your supervisor right away. A customer who finds it at home does not come back.',
    ['Ik heb een kras gemaakt. Het spijt me.', 'I made a scratch. I am sorry.'],
    'You make a small scratch on a customer’s car door. Nobody saw it. What do you do?',
    [
      'Tell your supervisor right away.',
      'Say nothing: it is very small.',
      'Rub it away with a cloth, and hope.',
    ],
    'Everyone makes a mistake sometimes. A garage can repair a scratch, or tell the customer honestly. A hidden scratch costs the garage its good name.',
    NONE,
  ),
  // ⚖️ check: Work on the high-voltage system of an electric or hybrid car is only for people with
  // the right training (NEN 9140; the employer appoints them). The tip says "only a mechanic with
  // special training" and names no norm. Exhaust gas indoors (carbon monoxide): extraction or open
  // doors is common practice, no legal claim in the text.
  tipFor(
    'carsafe',
    '🟧',
    'Orange cables and running engines',
    'An electric or hybrid car has a battery with very high power. The cables for it are orange. Do not touch or loosen them: a mechanic with special training must make the car safe first. Is there a sign or a cone at the car? Then stay away. An engine that runs inside makes a gas that you cannot smell or see, and it can kill. So: put the exhaust hose on, or open the doors. Do you smell petrol? No sparks and no smoking. Tell your supervisor right away.',
    ['Is deze auto al veilig gemaakt?', 'Has this car been made safe yet?'],
    'You must change a wheel on an electric car. Under the car you see a loose orange cable. What do you do?',
    [
      'Touch nothing, and get the trained mechanic.',
      'Push the cable back with your hand.',
      'Push it back with a dry cloth.',
    ],
    'The battery of an electric car has enough power to kill, also when the car is off. Only someone with the training may touch these parts.',
    HOUSE_LINE,
  ),
];

// ---- Tiles, plaster and paint (u.afbouw, the owner's request, 20 November 2026) ----
// One tip per lesson, in the order of the unit's lessons in ./work.ts (afbouwLessons): the tips of
// the next lessons are added at the end. None of them states a right, a law or an amount: they are
// about how the work is done (NONE), or about rules that differ per company or site (HOUSE_LINE).
// The short situations are in tests/situationLength.test.ts.

const afbouwTips = [
  // Where the dirty water may go differs per site: HOUSE_LINE.
  tipFor(
    'tiletools',
    '🪮',
    'Clean your tools before the glue is hard',
    'Tile glue and plaster get hard fast, also on your tools. So clean the notched trowel, the trowel and the mixer in a bucket of water right away, also before your break. Hard glue does not come off, and a notched trowel with hard glue makes bad ridges. Do not pour the dirty water into a sink or a drain: it gets blocked. Ask where the water may go. The mixer: hold it with two hands, and start it slowly.',
    ['Ik maak de lijmkam even schoon.', 'I am just cleaning the notched trowel.'],
    'It is time for your break. Your notched trowel is full of wet glue. What do you do?',
    [
      'Clean it in water, then take your break.',
      'Leave it: you clean it after work.',
      'Put it in the bucket of glue.',
    ],
    'Tile glue gets hard in your break too. A clean notched trowel makes good ridges, and the tiles stick well. Hard glue on it is a lot of work, or a new tool.',
    HOUSE_LINE,
  ),
  tipFor(
    'tiling',
    '➕',
    'Start at the centre line, with a little glue',
    'A tiler does not start in a corner. You draw the centre line first, with a pencil and the spirit level, and you start there. Then the cut tiles at both ends are the same size. Spread only as much glue as you can cover with tiles in a short time. Glue that stands too long gets a dry skin, and then the tiles do not stick well. Put a spacer at every crossing, so all the joints are the same. Check often with the spirit level: a crooked tile is easy to fix now, and hard to fix tomorrow.',
    ['Ik smeer niet te veel lijm tegelijk.', 'I do not spread too much glue at once.'],
    'After a long phone call, the glue on the wall has a dry skin. What do you do?',
    [
      'Scrape it off, and spread fresh glue.',
      'Press the tiles into it anyway.',
      'Make it wet with a sponge, and go on.',
    ],
    'Glue with a dry skin does not hold a tile well. Later the tile can come loose, and then the work must be done again.',
    NONE,
  ),
  tipFor(
    'plaster',
    '🔳',
    'Plaster needs time to dry',
    'Fresh plaster stays wet for a long time. A wet wall is darker than a dry one. The painter can only start when the wall is dry everywhere, and that can take days or weeks. Do not dry it faster with a heater: then the plaster can crack. Does someone want to paint too early? Say that the wall is not dry yet. And before you start, cover the floor, the windows and the sockets: plaster is hard to get off.',
    ['De muur is nog nat. Je kunt nog niet verven.', 'The wall is still wet. You cannot paint yet.'],
    'The painter wants to start tomorrow. The new plaster still has dark spots. What do you do?',
    [
      'Tell the painter: the wall is not dry yet.',
      'Put a heater in front of it tonight.',
      'Say nothing: the painter will see it.',
    ],
    'Dark spots mean that the plaster is still wet. Paint on a wet wall can come loose, and a heater can make cracks. Waiting costs less than doing it again.',
    NONE,
  ),
];

// ---- Painting, bricks, wood, fixing and shapes (the owner's request, 20 November 2026) ----
// One tip per new lesson: l.paint and l.prep (u.afbouw), the six lessons of u.ruwbouw and l.shapes,
// l.angles and l.size (u.numbers). The list is sorted into course order below. None of them states
// a right, a law or an amount: they are about how the work is done (NONE), or about rules that
// differ per company (HOUSE_LINE). The short situations are in tests/situationLength.test.ts.

const bouwMoreTips = [
  tipFor(
    'paint',
    '🖌️',
    'Stir well, and paint from the top down',
    'Paint that stood still for a while is thick at the bottom of the tin. So stir it well first, with a stirring stick, until the colour is the same everywhere. Do not paint from the big tin: put a little paint in the paint kettle, and close the tin again. Then the paint stays good. Paint from the top down, so drips land on wet paint and you can still brush them away. Use the wide brush for the wall and the small brush for the corners. At the end, clean the brushes right away.',
    ['Ik roer de verf eerst goed om.', 'I stir the paint well first.'],
    'You open an old tin of paint. On top it is thin, at the bottom thick. What do you do?',
    [
      'Stir it well first, with the stick.',
      'Paint with the thin paint on top.',
      'Add water until it is thin everywhere.',
    ],
    'Part of the colour sits at the bottom of the tin. Without stirring, the wall gets spots and stripes.',
    NONE,
  ),
  // Which dust mask, and where the dust goes, differ per company: HOUSE_LINE.
  tipFor(
    'prep',
    '🧻',
    'Good paint work starts before the paint',
    'Paint does not stick well on dirt, dust or loose old paint. So first scrape the loose paint off with the paint scraper. Fill holes with filler and the putty knife, and let the filler dry. Then sand it smooth. After sanding, sweep the dust away with the small brush, also from the edges. Last, mask off what must stay clean, like windows and sockets. Sanding makes fine dust: wear a dust mask, and ask which one.',
    ['Eerst schuren, dan verven.', 'First sand, then paint.'],
    'You sanded the door. There is still dust on it. Your colleague wants to paint now. What do you do?',
    [
      'Sweep the dust off first, with the brush.',
      'Let them paint: the paint covers the dust.',
      'Wipe the dust off with your hand.',
    ],
    'Paint on dust does not stick well. Later it comes off in flakes, and then all the work must be done again.',
    HOUSE_LINE,
  ),
  tipFor(
    'brick',
    '🧱',
    'Keep the wall clean while you work',
    'Mortar is wet when you lay the bricks, and it gets hard in a few hours. So work clean. Scrape the mortar that comes out of the joint off with the trowel right away. Smooth the joints with the jointer when the mortar is a little stiff, not when it is still wet. Then brush the wall with the hand brush. Hard mortar on the front of a brick is very hard to get off. At the end of the day, cover the top of the wall, so rain does not wash the mortar out.',
    ['Ik maak de voegen glad.', 'I smooth the joints.'],
    'At the end of the day there is mortar on the front of the bricks. What do you do?',
    [
      'Brush it off now, before it is hard.',
      'Leave it: you clean it next week.',
      'Wash the wall with a lot of water.',
    ],
    'Fresh mortar comes off easily with a brush. Hard mortar stays on the brick, and then the wall does not look good.',
    NONE,
  ),
  tipFor(
    'wall',
    '🧵',
    'The line keeps the wall straight',
    'A bricklayer does not build by eye. First the corner profiles stand straight at both ends of the wall. Between them you pull the brick line tight, at the height of the next row. Lay every brick along the line, but do not push the line away. The gauge rod shows how high each row must be. Check often with the spirit level. A crooked brick is easy to fix while the mortar is wet, and very hard to fix tomorrow.',
    ['Is het metseltouw strak?', 'Is the brick line tight?'],
    'The brick line is loose and hangs a little in the middle. What do you do?',
    [
      'Pull it tight first, then go on.',
      'Lay the bricks under it anyway.',
      'Lay the bricks by eye.',
    ],
    'A loose line hangs in the middle, so the row hangs too. A tight line gives a straight row.',
    NONE,
  ),
  tipFor(
    // Not "Measure twice, saw once": that is the title of c.measure (l.measure), and a tip's
    // title gives its page address on the site (src/lib/tipPages.ts tipSlug).
    'wood',
    '🪚',
    'Too short cannot be fixed',
    'Wood that is sawn too short cannot be made long again. So measure twice, and draw the line before you saw. Saw next to the line, on the side of the piece you do not need. Hold the wood still: on a workbench or with a clamp, not on your knee. Let the saw do the work, with long, calm strokes. Push a chisel away from your body and your other hand. And keep the chisel and the plane sharp: a blunt tool slips more easily.',
    ['Ik meet het nog een keer.', 'I measure it one more time.'],
    'You must saw a plank to size. You measured it once, quickly. What do you do?',
    [
      'Measure again, then draw the line.',
      'Saw it now: it is probably right.',
      'Saw it by eye, without a line.',
    ],
    'Too long you can saw again, too short you cannot fix. Measuring again takes a minute; a new plank takes much more.',
    NONE,
  ),
  tipFor(
    'square',
    '✏️',
    'Mark from one straight edge',
    'Before you saw or drill, you mark out where. Use a sharp pencil: a thick line is not exact. Choose one straight edge of the wood, and measure everything from that edge. Hold the thick part of the try square tight against it, and draw the line along the steel. Draw a small cross on the piece you will not use. Then you saw next to the line, on the side of the cross.',
    ['Ik teken het eerst af.', 'I mark it out first.'],
    'Your pencil is blunt and makes a thick line. You want to mark a plank. What do you do?',
    [
      'Sharpen the pencil first, then draw.',
      'Draw the line anyway, it is fine.',
      'Mark it with your fingernail.',
    ],
    'A thick line is a few millimetres wide. Then you do not know where to saw, and the piece is not exact.',
    NONE,
  ),
  tipFor(
    'screw',
    '🪛',
    'Look before you drill',
    'Before you drill in a wall, think about what is behind it. Pipes and cables often run straight up, down or across from a socket or a switch. Ask where they are, or check with a detector. Choose a drill the same size as the wall plug, and drill the hole a little deeper than the plug. Use the right bit for the screw: a wrong bit slips and ruins the head of the screw. Wear safety glasses when you drill.',
    ['Mag ik hier boren?', 'May I drill here?'],
    'You must drill a hole right above a socket. What do you do?',
    [
      'Ask first where the cable runs.',
      'Drill: there is never a cable.',
      'Drill slowly, then it is safe.',
    ],
    'A cable often runs straight up from a socket. Drilling into it is dangerous, and the repair is a lot of work.',
    NONE,
  ),
  tipFor(
    'fix',
    '🔩',
    'Tight, but not too tight',
    'A screw or a bolt must be tight, but not too tight. Turn too hard, and the thread breaks or the wood splits. Turn until it does not move any more, then stop. On a cordless drill, first turn the ring with the numbers to a low number. A shelf on the wall needs plugs that fit the wall: stone needs other plugs than a thin board wall. Glue needs time: press the parts together, hold them with a clamp, and wait until the glue is dry.',
    ['Zit de plank goed vast?', 'Is the shelf fixed well?'],
    'You glued two pieces of wood. Your colleague wants to use it right away. What do you do?',
    [
      'Say: the glue must dry first.',
      'Let them use it: glue is fast.',
      'Hold it in your hands for a minute.',
    ],
    'Wet glue does not hold yet. Use it too early, and the parts come loose again. Then you must start again.',
    NONE,
  ),
  tipFor(
    'shapes',
    '⬜',
    'Check a rectangle with two lines across',
    'A room, a floor or a frame is often a rectangle. But are the corners really square? There is an easy check. Measure from one corner to the corner across. Then measure between the other two corners. Are the two lengths the same? Then the corners are right. Not the same? Then the shape leans a little, and tiles or a floor will not fit well. Tell your supervisor before you start.',
    ['Deze twee maten zijn niet gelijk.', 'These two measurements are not the same.'],
    'You measure a floor from corner to corner, both ways. One is longer. What do you do?',
    [
      'Tell your supervisor before you start.',
      'Start in a corner, it will be fine.',
      'Measure only one side again.',
    ],
    'Two different lengths mean the corners are not square. Then tiles or planks do not fit. It is better to know that before you start.',
    NONE,
  ),
  tipFor(
    'angles',
    '🔺',
    'Check a big corner with 3, 4 and 5',
    'On a building site you often check a right angle: a wall on a floor, a corner of a room. A small corner you check with a try square or a set square. For a big corner there is an old trick. Measure 3 metres along one side and 4 metres along the other side, and make a mark at both. Is it exactly 5 metres from mark to mark? Then the angle is 90 degrees. Smaller works too: 30, 40 and 50 centimetres.',
    ['Deze hoek is niet recht.', 'This angle is not square.'],
    'You must check a big corner of a new wall. Your square is much too small. What do you do?',
    [
      'Measure 3, 4 and 5 metres.',
      'Look at it from far away.',
      'Use the small square anyway.',
    ],
    'With 3, 4 and 5 you can check a big corner exactly, with only a tape measure. By eye, a corner can look right and still be wrong.',
    NONE,
  ),
  tipFor(
    'size',
    '🏁',
    'Work out what you need, then add a little',
    'How many tiles, how much paint, how much sand? You work it out with the area or the volume. Area: the length times the width, in square metres. Volume: the length times the width times the height, in cubic metres. Measure everything in the same unit: all in metres, or all in centimetres. Write the measurements down, do not keep them in your head. Then add a little extra, for the cut pieces and for mistakes. Not sure? Ask a colleague to check your sum.',
    ['Ik schrijf de maten op.', 'I write down the measurements.'],
    'You measured the floor. You must order the tiles today. What do you do?',
    [
      'Work out the area, and add a little.',
      'Order the area, not one tile more.',
      'Guess: you have seen the floor.',
    ],
    'You always cut some tiles, and some break. With a little extra, you do not have to stop halfway and order again.',
    NONE,
  ),
];

// ---- Machines and tools (u.machines, the owner's request, 21 November 2026) ----
// One tip per lesson of the second own unit of Productie (./work.ts machinesUnit). None of them
// states a right, a law or an amount: they are about how the work is done (NONE), or about rules
// that differ per company (HOUSE_LINE: how a machine is locked, which list, which bin). The short
// situations are in tests/situationLength.test.ts.

const machinesTips = [
  // How a machine is made safe before you reach in (lockout) differs per company: HOUSE_LINE.
  tipFor(
    'atmachine',
    '🚧',
    'The guard stays on',
    'The moving parts of a machine can pull in a hand, a sleeve or hair in less than a second. The guard is there for that. Never take it away, and never reach behind it while the machine runs. Does a guard or a sensor not work? Then the machine is not safe: stop it and tell your team leader. Is something stuck? First stop the machine, and make sure nobody can start it while you work. How that is done differs per company: ask for the explanation before you start.',
    ['De afscherming is kapot.', 'The machine guard is broken.'],
    'A box is stuck in the machine, right behind the guard. The machine runs. What do you do?',
    [
      'Stop the machine first, then get help.',
      'Reach in quickly and pull the box out.',
      'Open the guard while it runs.',
    ],
    'A running machine can pull your hand in before you can react. Stopping it takes a moment; a hurt hand takes months.',
    HOUSE_LINE,
  ),
  // Which list and how often you check differ per company: HOUSE_LINE.
  tipFor(
    'inspect',
    '🔬',
    'Write down what you check',
    'In a factory you check the products during the work: you weigh them, you measure them, or you look at them closely. Write every check on the list right away, with the time. Not later, from memory. Is one product not right? Put it in the reject bin and look carefully at the next ones. Are more products wrong? Then something is wrong with the machine. Tell your team leader right away. A problem that is found early saves a lot of products.',
    ['Er zijn meer producten fout.', 'More products are wrong.'],
    'The scales show that three products in a row are too light. What do you do?',
    [
      'Tell your team leader right away.',
      'Put them back on the line.',
      'Say nothing: it happens.',
    ],
    'Three wrong products in a row point to a problem in the machine. The sooner you tell, the fewer products go to waste.',
    HOUSE_LINE,
  ),
  // Where the old blades go differs per company: HOUSE_LINE.
  tipFor(
    'packing',
    '🎁',
    'Cut away from your body',
    'Packing is fast work, and a snap-off knife is very sharp. Always cut away from your body and away from your other hand. Push the blade back in after every cut, also when you put the knife down for a moment. Snap off a blunt piece carefully, and throw it in the box for old blades, not in the normal bin. The sealing machine and the heat gun for shrink wrap get very hot: do not touch the hot parts. And check every box: the right product, the right number, and the label straight.',
    ['Ik schuif het mes eerst terug.', 'I push the knife back in first.'],
    'You put the snap-off knife on the table for a moment. The blade is still out. What do you do?',
    [
      'Push the blade back in first.',
      'Leave it: you need it again soon.',
      'Put it in your pocket like this.',
    ],
    'An open blade on a table or in a pocket can cut you or a colleague. Pushing it back takes one second.',
    HOUSE_LINE,
  ),
  // Who may do which maintenance, and where oily rags go, differ per company: HOUSE_LINE.
  tipFor(
    'upkeep',
    '💧',
    'A clean machine shows its problems',
    'Small maintenance is often part of the work: wiping, oiling and greasing. Only do it when the machine is off, and when you have learned how. A clean machine is easy to check: you see a leak or a loose part right away. Oil on the floor is slippery. Put a drip tray under a leak, wipe the floor, and tell your team leader. Throw oily rags in the special bin. Never point an air blow gun at a person, and never clean your clothes or skin with it.',
    ['De machine lekt olie.', 'The machine is leaking oil.'],
    'You see a small pool of oil under the machine. What do you do?',
    [
      'Put a drip tray under it, and report it.',
      'Leave it: it is only a little.',
      'Put some paper on it, and go on.',
    ],
    'A leak gets bigger, and oil on the floor makes people slip. Found early, it is a small repair.',
    HOUSE_LINE,
  ),
];

// ---- Electrics, pipes and metal (u.install, the owner's request, 21 November 2026) ----
// One tip per lesson of the second own unit of Techniek (./work.ts installUnit). None of them
// states a right, a law or an amount: they are about how the work is done (NONE), or about rules
// that differ per company (HOUSE_LINE: who may work on power, and how it is locked). The short
// situations are in tests/situationLength.test.ts.

const installTips = [
  tipFor(
    'wiring',
    '🟤',
    'Colours tell what a wire does',
    'In a building the wires have fixed colours. Brown (sometimes black or grey) brings the power. Blue goes back. Green and yellow is the earth: it protects people, and it is never used for anything else. Connect the same colour to the same colour. Strip only as much as fits in the connector: no bare copper may stick out. Push the wire in, then pull it softly to check that it is fixed. Not sure which wire is which? Stop and ask.',
    ['Welke kleur is de aarde?', 'Which colour is the earth?'],
    'You connect a lamp. A piece of copper sticks out of the connector. What do you do?',
    [
      'Cut it shorter, and connect again.',
      'Leave it: the lamp works.',
      'Put a piece of tape around it.',
    ],
    'Bare copper outside the connector can touch something. That can give a shock or a short circuit, also months later.',
    NONE,
  ),
  // Who may work on power, and how a circuit is locked, differ per company: HOUSE_LINE.
  tipFor(
    'testing',
    '🔒',
    'Off, locked, measured',
    'Before you work on electrics, take three steps. Switch it off: the right circuit breaker in the fuse box, not only the switch on the wall. Lock it: put your own padlock on it and keep the key with you, so nobody can switch it on again. Measure: check with a voltage tester or a multimeter that there is really no power. Only then you start. Does a breaker trip again and again? Do not keep switching it on: tell your supervisor. Only do electrical work when you have been told that you may.',
    ['Er staat geen stroom meer op.', 'There is no power on it any more.'],
    'You switched off the breaker. A colleague says: "Start now, it is off." What do you do?',
    [
      'Lock it, and measure first.',
      'Start: your colleague knows it.',
      'Touch the wire quickly to check.',
    ],
    'Sometimes the wrong breaker is off, or someone switches it on again. A lock and a measurement show that it is really safe.',
    HOUSE_LINE,
  ),
  tipFor(
    'pipes',
    '🚰',
    'Water off first, and a bucket ready',
    'Before you open a water pipe, close the stopcock. Then open a tap lower down, so the pipe gets empty. Put a bucket and a cloth under the place where you work. Cut a copper pipe with a pipe cutter, not with a saw: the end stays round and clean. Tighten a fitting firmly, but not too hard. When you are finished, open the water slowly and look for drops. A small leak that you leave becomes water damage.',
    ['Is het water dicht?', 'Is the water off?'],
    'You made a new fitting. You open the water. One small drop falls every minute. What do you do?',
    [
      'Close the water, and tighten or redo it.',
      'Leave it: it is only one drop.',
      'Put a bucket under it and go home.',
    ],
    'One drop a minute is many litres a week. The water can damage the floor or the ceiling below.',
    NONE,
  ),
  tipFor(
    'metalwork',
    '🗜️',
    'Clamp it, never hold it',
    'At the pillar drill, never hold a small part in your hand. The drill can grab it and turn it round very fast. Clamp it in the vice. Tie long hair back, and wear no gloves at a turning drill: it can pull a glove in. Wear safety glasses. After sawing or drilling, metal has a burr: a sharp edge. File it off before you take the part in your hand or pass it on. Sweep metal chips away with a brush, not with your hand.',
    ['Ik zet het eerst vast.', 'I clamp it first.'],
    'You must drill a hole in a small piece of metal. The vice is on another bench. What do you do?',
    [
      'Get the vice, and clamp the piece.',
      'Hold it tight with your hand.',
      'Put on gloves and hold it.',
    ],
    'A drill can grab a small part and spin it round. Then it hits your hand. In the vice it stays still.',
    NONE,
  ),
];

// ---- Assembly (u.montage, the owner's request, 21 November 2026) ----
// One tip per lesson of the third own unit of Productie (./work.ts montageUnit). None of them
// states a right, a law or an amount: they are about how the work is done (NONE), or about rules
// that differ per company (HOUSE_LINE: who may use a hoist, what the final check holds). The short
// situations are in tests/situationLength.test.ts.

const montageTips = [
  tipFor(
    'assembly',
    '🗒️',
    'Follow the steps, in the same order',
    'At an assembly line every step has its place and its order. The work instruction shows them, often with pictures. Do the steps in the same order every time, also when you think you know a faster way. Another order can make a product that looks good but does not work. Is a bin almost empty? Say it in time, so the line does not stop. Do you see a step that could be better? Tell your team leader: then it can change for everyone.',
    ['Ik heb nieuwe onderdelen nodig.', 'I need new parts.'],
    'You found a faster way to do step three. The work instruction says something else. What do you do?',
    [
      'Ask your team leader first.',
      'Do it your way from now on.',
      'Teach your colleagues your way.',
    ],
    'The order is often there for a reason you cannot see. If your way is better, it can change for everyone.',
    NONE,
  ),
  tipFor(
    'fastening',
    '🔧',
    'The click is enough',
    'A torque wrench clicks when a bolt is tight enough. Stop at the click: do not turn further. Too tight can break the bolt or the part, and too loose can come off. The power screwdriver works the same way: it stops by itself. Put every washer in its place: a missing washer is hard to see later. Count your bolts. Is one left over, or do you need one more? Then something is wrong: tell your team leader.',
    ['Er is een bout over.', 'There is a bolt left over.'],
    'Your torque wrench clicked. The bolt still feels a little loose to you. What do you do?',
    [
      'Stop, and ask your team leader.',
      'Turn it a bit more by hand.',
      'Use a longer wrench.',
    ],
    'The click is set to the right force. If it feels wrong, the wrench may need a check. Turning further can break the bolt.',
    NONE,
  ),
  // Who may use a hoist, and after which training, differs per company: HOUSE_LINE.
  tipFor(
    'handling',
    '🪝',
    'Let the hoist do the heavy work',
    'Heavy parts are lifted with a hoist or a lifting aid, not with your back. Check the hook before you lift: the latch must close. Lift slowly, and keep your hands and feet away from the load. Never stand or walk under a hanging load. Use the turntable to turn a part: then you do not have to twist your back. Push a trolley or a roll cage: you see where you go, and your back has less work. Only use a hoist when you have learned how.',
    ['Ik gebruik de takel.', 'I use the hoist.'],
    'A part is very heavy. The hoist is busy for ten more minutes. What do you do?',
    [
      'Wait for the hoist.',
      'Lift it alone, quickly.',
      'Drag it over the floor.',
    ],
    'A heavy part can hurt your back in one second. Ten minutes of waiting is better than months of pain.',
    HOUSE_LINE,
  ),
  // What the final check holds, and who may approve, differ per company: HOUSE_LINE.
  tipFor(
    'finalcheck',
    '☑️',
    'Only good products get the sticker',
    'The final check is the last chance to find a mistake before the customer finds it. Check every point on the list, also when it is busy. A small scratch or crack is easy to miss: look in good light, and from more than one side. Only put the OK sticker or the stamp on it when every point is good. Not sure? Put the product aside and ask. A mistake that is found here costs little, and a mistake at the customer costs a lot.',
    ['Dit product gaat apart.', 'This product goes aside.'],
    'The line is busy. You see a small scratch on a product, under the label. What do you do?',
    [
      'Put it aside, and tell your team leader.',
      'Put the sticker on: it is small.',
      'Move the label over the scratch.',
    ],
    'A small scratch can be a sign of a problem in the line. Hiding it only moves the problem to the customer.',
    HOUSE_LINE,
  ),
];

// ---- Growing, sorting and the greenhouse (u.kweek) and Tyres, oil and brakes (u.carservice) ----
// The owner's request, 22 November 2026: one tip per lesson of the second own units of Tuinbouw
// and Garage (./work.ts kweekUnit, carserviceUnit). None of them states a right, a law or an
// amount: they are about how the work is done (NONE), or about rules that differ per company
// (HOUSE_LINE). The short situations are in tests/situationLength.test.ts.

const kweekServiceTips = [
  tipFor(
    'sowing',
    '🌱',
    'Small plants need a gentle hand',
    'Young plants are weak. Hold a cutting or a seedling by a leaf, not by the stem: a leaf grows again, a broken stem does not. Press the soil softly, not hard. Give water slowly, with a fine spray, so the seeds do not wash away. Work with clean hands and clean trays: young plants get sick easily. Write the date and the kind of plant on every tray, so everyone knows what is in it.',
    ['Ik houd hem vast bij het blad.', 'I hold it by the leaf.'],
    'You must move a small seedling to a pot. What do you do?',
    [
      'Hold it gently by a leaf.',
      'Pull it up by the stem.',
      'Squeeze it out with the soil.',
    ],
    'A leaf can grow again. A broken stem cannot, and then the plant dies.',
    NONE,
  ),
  tipFor(
    'sorting',
    '🍅',
    'Every fruit counts',
    'Fruit and vegetables bruise easily. Put them down, do not drop or throw them. You do not see a bruise today, but tomorrow the fruit is soft and brown. Look at the colour chart to know which colour goes where. Put a damaged or rotten fruit aside: one bad fruit in a punnet can spoil the others. Keep the punnets and crates clean, and never put them on the floor.',
    ['Deze is beschadigd.', 'This one is damaged.'],
    'You are packing punnets. One tomato has a soft brown spot. What do you do?',
    [
      'Put it aside.',
      'Hide it at the bottom.',
      'Pack it anyway.',
    ],
    'A rotten tomato makes the others rot faster. The customer finds it, and the whole punnet comes back.',
    NONE,
  ),
  // Who may use the pipe-rail trolley, and who changes the climate, differ per company: HOUSE_LINE.
  tipFor(
    'greenhouse',
    '💨',
    'Leave the climate to the computer',
    'In a greenhouse a computer sets the climate: the vents, the screen, the heating and the water. Do not open a vent or change a setting yourself. Do you see something strange, like a dripper that leaks or a vent that does not close? Tell your supervisor. The pipe-rail trolley rides on the heating pipes: only use it when you have learned how. Keep your feet on the platform, and never touch the pipes: they can be hot.',
    ['Deze druppelaar lekt.', 'This dripper is leaking.'],
    'A dripper is loose. Water runs onto the floor. What do you do?',
    [
      'Put it back, and tell your supervisor.',
      'Leave it: it is only water.',
      'Turn off the water for the whole row.',
    ],
    'A loose dripper wastes water, the plant gets too little, and a wet floor is slippery.',
    HOUSE_LINE,
  ),
  // How a company works against pests and diseases differs: HOUSE_LINE.
  tipFor(
    'pests',
    '🐞',
    'Do not carry diseases from row to row',
    'A disease or a pest spreads fast in a greenhouse. You can carry it on your hands, your clothes and your tools. So walk over the disinfection mat at every door, and wash your hands when you go to another part of the greenhouse. Start your work in the healthy rows, and end in the sick rows. Do you see insects, spots or mould on a plant? Do not touch it, but tell your supervisor where it is. Some insects in the greenhouse are helpers: leave them alone.',
    ['Hier zit schimmel.', 'There is mould here.'],
    'You see grey mould on a few plants in your row. What do you do?',
    [
      'Tell your supervisor where it is.',
      'Pick off the bad leaves and go on.',
      'Say nothing: it is only a few plants.',
    ],
    'Mould spreads fast. Your supervisor knows what to do, and where to start.',
    HOUSE_LINE,
  ),
  // How a wheel is fitted and checked differs per garage: HOUSE_LINE.
  tipFor(
    'tyres',
    '🛞',
    'Turn in by hand, tighten with the torque wrench',
    'An impact wrench is fast and very strong. Use it to take wheel bolts off, but not to tighten them hard. First turn the bolts in by hand. Then tighten them crosswise with a torque wrench, to the force for that car. A wheel that is not tight can come off while driving. Check the tread and the pressure of every tyre that you take in your hands.',
    ['Ik draai ze eerst met de hand in.', 'I turn them in by hand first.'],
    'You put a wheel back. A colleague says: "Use the impact wrench, it is faster." What do you do?',
    [
      'Turn them in by hand, then use the torque wrench.',
      'Tighten them hard with the impact wrench.',
      'Turn them in by hand, and leave it.',
    ],
    'An impact wrench can make a bolt too tight or not tight enough. Only the torque wrench gives the right force.',
    HOUSE_LINE,
  ),
  // Where old oil, filters and cloths go differs per garage: HOUSE_LINE.
  tipFor(
    'oilchange',
    '🫗',
    'Old oil goes in the drum, not in the drain',
    'Old oil is bad for water and soil. A little oil can make a lot of water dirty. So catch all the old oil in the drain pan, and pour it into the drum for old oil. Never pour it into a drain or a sink. Old filters and oily cloths go into their own bin. Hot oil can burn your skin: let the engine cool down a little first, and wear gloves. Clean up spilled oil right away: oil on the floor is slippery.',
    ['Waar gaat de oude olie heen?', 'Where does the old oil go?'],
    'The drain pan is full of old oil. The drum is at the other end of the workshop. What do you do?',
    [
      'Carry it to the drum, carefully.',
      'Pour it into the drain outside.',
      'Leave it under the car for later.',
    ],
    'Old oil in a drain makes the water dirty. A full pan under a car gets kicked over.',
    HOUSE_LINE,
  ),
  tipFor(
    'brakes',
    '🔴',
    'Brakes: check twice',
    'Brakes keep people alive. So work calmly, and check your work twice. After new pads or discs, press the brake pedal a few times before the car moves: the first press often goes too deep. Brake fluid is bad for your skin and for paint: wear gloves, and wipe up drops right away. Do not blow brake dust away with compressed air: clean it with brake cleaner and a cloth. Before the car leaves, check every light, also the brake lights.',
    ['Ik trap het rempedaal een paar keer in.', 'I press the brake pedal a few times.'],
    'You fitted new brake pads. The car must go outside. What do you do?',
    [
      'Press the brake pedal a few times.',
      'Drive it out right away.',
      'Push it out without checking.',
    ],
    'After new pads the pedal can go too deep the first time. Then the car does not stop.',
    NONE,
  ),
  // What a mechanic may do without asking differs per garage: HOUSE_LINE.
  tipFor(
    'diagnosis',
    '🏷️',
    'Treat the car as if it is your own',
    'A customer gives you their car and their key. Treat both with care. Put a seat cover on the seat and a mat on the floor before you get in. Do only what is on the job card. Do you find something else that is wrong? Write it down and tell your supervisor: the customer decides. Keep the key in its place, with its label. Do not use the radio, the phone or the things in the car.',
    ['Dit staat niet op de werkorder.', 'This is not on the job card.'],
    'You change the oil. A tyre is almost bald. It is not on the job card. What do you do?',
    [
      'Write it down, and tell your supervisor.',
      'Change the tyre right away.',
      'Say nothing: it is not your job.',
    ],
    'The customer decides what is done and paid. But they must know that the tyre is dangerous.',
    HOUSE_LINE,
  ),
];

// ---- Groen (u.mowing, u.planting) and Facilitair (u.frontdesk, u.maintenance) ----
// The owner's request, 23 November 2026: one tip per lesson of the own units of the new sectors
// Groen and Facilitair (./work.ts mowingUnit, plantingUnit, frontdeskUnit, maintenanceUnit). None
// of them states a right or an amount: they are about how the work is done safely (NONE), or about
// rules that differ per company (HOUSE_LINE). Safety facts are kept general (no numbers, no law).

const groenFacilitairTips = [
  // How far others must stay from a brush cutter differs per company: HOUSE_LINE.
  tipFor(
    'mowing',
    '🪨',
    'Stones fly far',
    'A mower or a brush cutter can throw a stone very far and very hard. So walk over the grass first, and take away stones, glass and branches. Wear your face shield or safety glasses, ear protection and safety shoes. Keep other people far away. Does someone come close? Stop the machine. Never put your hand under a mower while the engine runs: turn it off, and wait until the blade stands still.',
    ['Wilt u even afstand houden?', 'Would you keep your distance, please?'],
    'You are using the brush cutter. A man with a dog walks towards you. What do you do?',
    [
      'Stop the machine until he has passed.',
      'Go on: he can see you.',
      'Turn away from him, and go on.',
    ],
    'A stone from a brush cutter can hurt someone badly, also from far away.',
    HOUSE_LINE,
  ),
  tipFor(
    'pruning',
    '✂️',
    'A clean cut heals best',
    'Prune with sharp, clean shears. A clean cut heals fast; a torn branch gets sick. Cut just above a bud or a side branch, and do not leave a long piece. Take off the dead and broken branches first. Keep your other hand away from the blades. Wear gloves: some plants have thorns, or make your skin red. Clean the shears after work.',
    ['Waar moet ik knippen?', 'Where must I cut?'],
    'Your pruning shears are blunt. They tear the branches. What do you do?',
    [
      'Ask for sharp shears.',
      'Pull harder on the branch.',
      'Go on: it is only a bush.',
    ],
    'Blunt shears tear the branch. The plant gets sick, and you work harder.',
    NONE,
  ),
  tipFor(
    'hedge',
    '🪺',
    'Look for nests first',
    'In spring and summer, birds make nests in hedges and bushes. Nests that birds use are protected. So look into the hedge before you cut. Do you see a nest with eggs or young birds? Do not cut there, and tell your supervisor. Hold the hedge trimmer with both hands. Stand firmly on the ground or on a good ladder, never on a chair or a bucket. Keep the cable behind you.',
    ['Hier zit een nest.', 'There is a nest here.'],
    'You are trimming a hedge in May. You see a nest with young birds. What do you do?',
    [
      'Stop there, and tell your supervisor.',
      'Cut around it carefully.',
      'Take the nest out, and go on.',
    ],
    'Nests that birds use are protected. Your supervisor decides what happens with this part of the hedge.',
    NONE,
  ),
  // Which course a company asks for before the chainsaw differs: HOUSE_LINE.
  tipFor(
    'chainsaw',
    '🪵',
    'A chainsaw only with training',
    'A chainsaw is one of the most dangerous tools in green work. Only work with it when you have had a course, and your supervisor says you may. Always wear chainsaw trousers, a helmet with a face shield and ear protection, gloves and safety boots. Never work alone with a chainsaw. Hold it with both hands, and never saw above your shoulders. With a leaf blower: never blow towards people, cars or open windows.',
    ['Ik heb hier nog geen cursus voor gehad.', 'I have not had a course for this yet.'],
    'A colleague says: "Take the chainsaw, it is easy." You never had a course. What do you do?',
    [
      'Say that you had no course yet.',
      'Try it carefully, just once.',
      'Take it, and watch a video first.',
    ],
    'A chainsaw can cut your leg in a second. Without training you do not know how it can kick back.',
    HOUSE_LINE,
  ),
  // Whether sprays and the weed burner are used differs per company: HOUSE_LINE.
  tipFor(
    'weeding',
    '🌼',
    'Weeds: the root must go',
    'A weed grows back when the root stays in the ground. So pull it out with the root, or hoe just under the soil. Work when the soil is a little wet: then the root comes out easily. Do not use sprays against weeds, unless you have learned how and your supervisor says so. A weed burner is very hot: keep it away from dry grass, leaves, hedges, cars and bins. Never put it down while it burns.',
    ['Is dit onkruid of een plant?', 'Is this a weed or a plant?'],
    'You are using the weed burner. Next to the path is a dry hedge. What do you do?',
    [
      'Pull the weeds there by hand.',
      'Burn quickly, and walk on.',
      'Burn, and look back once.',
    ],
    'A dry hedge catches fire fast. A fire near houses or cars is very dangerous.',
    HOUSE_LINE,
  ),
  // What to do when a cable is found differs per company: HOUSE_LINE.
  tipFor(
    'planting',
    '🌳',
    'Under the ground: cables and pipes',
    'Under the grass and the pavement there are often cables and pipes: for power, gas, water and internet. So dig carefully. Do you see a coloured tape or a plastic plate in the ground, or do you hit something hard? Stop digging, and tell your supervisor. Never dig on with force. Lift a heavy tree or a big root ball together, with your knees bent. Give a new plant water on the same day.',
    ['Ik raak iets hards.', 'I am hitting something hard.'],
    'You are digging a planting hole. Your shovel hits a red plastic tape. What do you do?',
    [
      'Stop digging, and tell your supervisor.',
      'Dig on carefully, next to the tape.',
      'Pull the tape out, and go on.',
    ],
    'A tape in the ground warns that a cable or a pipe is under it. A gas pipe or a power cable is very dangerous.',
    HOUSE_LINE,
  ),
  // How the work by the road is set up differs per company and per road: HOUSE_LINE.
  tipFor(
    'roadside',
    '🦺',
    'By the road: be seen, stay behind the cones',
    'Work by the road is dangerous: drivers look at their phone, or drive too fast. So always wear your high-visibility vest, also for a short job. Put the cones and the signs out before you start, and take them in last. Park the van as a shield between you and the traffic. Stay behind the cones. Never step back without looking, and work with your face to the traffic when you can.',
    ['Ik zet eerst de pionnen neer.', 'First I put out the cones.'],
    'You must cut one small bush by the road. It takes five minutes. What do you do?',
    [
      'Put on the vest, and put out the cones.',
      'Do it fast, without the cones.',
      'Ask a colleague to watch the cars.',
    ],
    'An accident takes only one second. Five minutes without cones is five minutes without protection.',
    HOUSE_LINE,
  ),
  // Where needles go, and who you call, differs per company: HOUSE_LINE.
  tipFor(
    'litter',
    '💉',
    'Never touch a needle',
    'In parks and bushes you sometimes find a needle from a syringe. Never pick it up with your hand, also not with gloves on. Use the litter picker, and put the needle in a hard box or bottle with a lid, never in a rubbish bag. Tell your supervisor. Did a needle prick you? Wash the wound with a lot of water, and call a doctor right away.',
    ['Hier ligt een naald.', 'There is a needle here.'],
    'You see a needle in the grass, next to a bench. What do you do?',
    [
      'Pick it up with the litter picker.',
      'Pick it up with your gloves on.',
      'Put it in the rubbish bag.',
    ],
    'A needle can carry a disease. Gloves do not stop a needle, and a hard box keeps others safe.',
    HOUSE_LINE,
  ),
  tipFor(
    'reception',
    '🛎️',
    'You are the first face',
    'At the front desk you are the first person a visitor meets. Look up, smile and say hello, also when you are busy on the phone. Speak to visitors with "u". Answer the phone with the name of the company and your own name. Do you not know the answer? Say so, and find someone who knows. Never give names, phone numbers or rooms of staff to people you do not know.',
    ['Goedemorgen, waarmee kan ik u helpen?', 'Good morning, how can I help you?'],
    'You are on the phone. A visitor comes to the desk and waits. What do you do?',
    [
      'Look up, and show you will come soon.',
      'Finish your call, without looking up.',
      'Put the phone down at once.',
    ],
    'A visitor who is seen waits calmly. A visitor who is not seen feels unwelcome.',
    NONE,
  ),
  // How visitors sign in differs per building: HOUSE_LINE.
  tipFor(
    'visitors',
    '📛',
    'Every visitor signs in',
    'Every visitor writes their name on the list, or signs in on the screen, and gets a visitor pass. Then you know who is in the building. This is important when there is a fire: everyone must get out, and someone checks the list. At the end of the visit, the visitor gives the pass back. Do not let people in behind you that you do not know: ask kindly who they are here for.',
    ['Voor wie komt u?', 'Who are you here for?'],
    'A man walks in behind a colleague. He has no pass. What do you do?',
    [
      'Ask him kindly who he is here for.',
      'Let him go: he came in with staff.',
      'Call the police at once.',
    ],
    'In an emergency, you must know who is inside. And not everyone who walks in has a reason to be there.',
    HOUSE_LINE,
  ),
  // How parcels are signed for differs per company: HOUSE_LINE.
  tipFor(
    'mailroom',
    '📫',
    'Post is private',
    'Post and parcels are private. Never open a letter or a parcel for someone else. Check the name and the department on each item, and put it in the right pigeonhole. When a courier brings a parcel, look at it before you sign: is it damaged? Write that down. Is a parcel strange: it smells, it leaks, or it has no sender? Do not open it, and tell your supervisor.',
    ['De doos is nat en kapot.', 'The box is wet and broken.'],
    'A courier brings a parcel. One corner is wet and torn. What do you do?',
    [
      'Write the damage down before you sign.',
      'Sign, and tell nobody.',
      'Open it, to see if all is there.',
    ],
    'After you sign, it looks as if the parcel was fine. Then nobody pays for the damage.',
    HOUSE_LINE,
  ),
  tipFor(
    'meetingroom',
    '🫖',
    'Ready before the first guest',
    'A meeting room must be ready before the first person comes in. Check the chairs, the table, the projector and the cables. Put coffee, tea and water out, with cups and milk. Carry hot drinks carefully, and never over people. After the meeting, clean the table and take everything back. What you hear in a meeting room, you keep to yourself.',
    ['De zaal is klaar.', 'The room is ready.'],
    'The meeting starts in five minutes. The projector does not work. What do you do?',
    [
      'Tell the organiser right away.',
      'Wait: maybe nobody needs it.',
      'Leave a note on the table.',
    ],
    'Five minutes is still time to fix it or find another room. Later, everyone waits.',
    NONE,
  ),
  // How a fault is reported (a system, a phone number) differs per company: HOUSE_LINE.
  tipFor(
    'faults',
    '📢',
    'Report it, do not fix it alone',
    'Do you see something broken, like a leak, a lamp that is out or a door that does not close? Report it, also when it is small: in the system or to your supervisor. Say where it is, what you see and since when. Do not repair electricity, gas or heating yourself. Do you smell gas? Do not use a switch or a phone near it, open the windows, get people out, and call for help outside.',
    ['Ik wil een storing melden.', 'I want to report a fault.'],
    'Water drips from the ceiling in the corridor. What do you do?',
    [
      'Report it, and put a bucket under it.',
      'Wait: maybe it stops by itself.',
      'Open the ceiling to look.',
    ],
    'A small leak can become big damage. A bucket keeps the floor dry, so nobody slips.',
    HOUSE_LINE,
  ),
  // Which repairs you may do yourself differs per company: HOUSE_LINE.
  tipFor(
    'repairs',
    '🪜',
    'A stepladder, never a chair',
    'For a lamp or a high shelf, use a stepladder, never a chair, a table or a box. Put it on a flat floor, open it fully, and do not stand on the top step. Switch off the light before you change a lamp, and let an old lamp cool down. Only do the repairs you have learned. Put your tools back in the toolbox when you are done, so nobody trips over them.',
    ['Ik pak even de trap.', 'I will get the stepladder.'],
    'A lamp in the office is broken. The stepladder is on another floor. What do you do?',
    [
      'Get the stepladder.',
      'Stand on a desk chair.',
      'Stand on the desk.',
    ],
    'A chair can roll or tip over. A fall from a chair can hurt you badly.',
    HOUSE_LINE,
  ),
  tipFor(
    'moving',
    '🏋️',
    'Moving: lift smart, label everything',
    'Moving is heavy work. Do not fill a box too full: books and files are heavy. Lift with your knees bent and your back straight, close to your body. Use the hand truck for more boxes, and lift a desk together. Write the new room number on every box, chair and computer. Unplug the cables first. Never put boxes in a corridor or in front of an emergency exit.',
    ['Wil je even helpen tillen?', 'Can you help me lift this?'],
    'You must move a heavy desk. Your colleague is on a break. What do you do?',
    [
      'Wait for help, and lift it together.',
      'Drag it on your own.',
      'Lift it alone, very carefully.',
    ],
    'A heavy desk can hurt your back when you lift it alone. Together it is easy and safe.',
    NONE,
  ),
  // What to do when the alarm goes off differs per building: HOUSE_LINE.
  tipFor(
    'closing',
    '🗝️',
    'The alarm code is secret',
    'At the end of the day you walk the last round. Check that nobody is left inside, that the windows are closed and the lights are out. The emergency exits stay free. Keep the keys with you, never in a drawer. The alarm code is secret: never give it to anyone, also not on the phone. Does the alarm go off? Follow the steps of your company.',
    ['De alarmcode geef ik niet door.', 'I do not pass on the alarm code.'],
    'Someone calls: "I am from the alarm company. What is your code?" What do you do?',
    [
      'Say no, and tell your supervisor.',
      'Give the code: he sounds kind.',
      'Give only half of the code.',
    ],
    'A real alarm company does not ask for your code on the phone. A thief might.',
    HOUSE_LINE,
  ),
];

// ---- Beveiliging (u.guarding, u.incidents), Voedingsindustrie (u.foodhygiene, u.foodline), Afval en
// recycling (u.collection, u.recycling) and Kinderopvang (u.toddlers, u.daycare) ----
// The owner's request, 23 November 2026: one tip per lesson of the own units of the four new
// sectors (./work.ts guardingUnit … daycareUnit). None of them states a right, a law or an
// amount: they are about doing the work safely (NONE), or about rules that differ per company
// (HOUSE_LINE). Safety facts are kept general (no numbers, no names of laws), and none names a
// Dutch body, so they hold in Belgium too (src/content/taalBe/inventory.ts).

const vierSectorenTips = [
  // What a guard checks on a round differs per site: HOUSE_LINE.
  tipFor(
    'patrol',
    '🔦',
    'Look and report, do not play the hero',
    'On your round you look: are doors and windows closed, is the fence whole, is there anyone who should not be there? Write down what you see, with the time. Do you see something strange, like a broken window or a person at night? Do not go in alone. Call the control room or the police on the radio or the phone, and wait at a safe place. Your own safety comes first.',
    ['Ik zie iemand bij het hek.', 'I see someone by the fence.'],
    'At night you see a door that is broken open. You hear noise inside. What do you do?',
    [
      'Stay outside, and call for help.',
      'Go in quickly, and look.',
      'Shout inside that you are coming.',
    ],
    'A thief inside can be dangerous. The police know what to do; your job is to see and report.',
    HOUSE_LINE,
  ),
  // Who may go in, and how, differs per building: HOUSE_LINE.
  tipFor(
    'access',
    '💳',
    'No pass, no entry',
    'At the gate or the desk you check who comes in. Everyone needs a pass, or must be on the list. Be friendly, also when someone is angry or in a hurry. Do not make exceptions because someone says he is the boss: check it. Never lend your own pass to anyone, and never let someone walk in behind you. A pass that is lost must be reported at once.',
    ['Mag ik uw pas zien?', 'May I see your card?'],
    'A man in a suit says: "I am the new director. I have no pass yet." What do you do?',
    [
      'Check it, before you let him in.',
      'Let him in: he looks important.',
      'Give him your own pass.',
    ],
    'Anyone can say he is the director. A quick check keeps the building safe, and a real director will understand.',
    HOUSE_LINE,
  ),
  // Who may watch the cameras, and how long footage is kept, is set by the company and the law: HOUSE_LINE.
  tipFor(
    'cameras',
    '📹',
    'Camera footage is private',
    'Cameras film people: staff, visitors and people walking by. What you see on the screens is private. Only watch for your work, and never film the screen with your phone. Never send footage to friends or put it online. Is there an incident? Write down the camera and the time, and tell your supervisor. Only your company decides who gets the footage, for example the police.',
    ['Dat mag ik niet laten zien.', 'I am not allowed to show that.'],
    'A colleague asks you to send him a funny clip from the cameras. What do you do?',
    [
      'Say no: the footage is private.',
      'Send it, only to him.',
      'Film the screen with your phone.',
    ],
    'The people on the footage did not agree to be shared. Sending it can cost you your job.',
    HOUSE_LINE,
  ),
  tipFor(
    'report',
    '📻',
    'Write it down at once',
    'Write a report straight after an incident, while you still remember it well. Write what you saw and heard yourself: what happened, where, at what time, and who was there. Write facts, not what you think. On the radio, speak short and clear, and wait until the other person has finished. Say who you are and where you are. A good report helps the police, your company and you.',
    ['Ik schrijf het meteen op.', 'I will write it down right away.'],
    'After a busy night you are very tired. There was one small incident. What do you do?',
    [
      'Write the report before you go home.',
      'Write it tomorrow, after a good sleep.',
      'Skip it: it was only small.',
    ],
    'Tomorrow you forget details. A report without a time or a place helps nobody.',
    NONE,
  ),
  // What a guard does when the alarm goes differs per building (the evacuation plan): HOUSE_LINE.
  tipFor(
    'evacuation',
    '🚒',
    'Fire: alarm first, then out',
    'Do you see fire or smoke? Press the fire alarm button, or call 112. Then help people out by the escape routes, never by the lift. Close doors behind you, but do not lock them. Fight a fire only when it is small and you have learned how. Go to the assembly point, and count who is there. Meet the fire brigade at the entrance, and tell them what you know.',
    ['Iedereen naar buiten, naar de verzamelplaats.', 'Everyone outside, to the assembly point.'],
    'The fire alarm goes. A man wants to take the lift. What do you do?',
    [
      'Send him to the stairs.',
      'Let him: the lift is faster.',
      'Go with him in the lift.',
    ],
    'In a fire, the lift can stop or fill with smoke. The stairs are the safe way out.',
    HOUSE_LINE,
  ),
  tipFor(
    'firstaid',
    '🫀',
    'Call 112, start CPR, get the AED',
    'Someone falls down and does not react? Call 112 at once, or let someone else call. Check if the person breathes normally. If not: start CPR, and let someone get the AED. The AED speaks and tells you what to do; you cannot do it wrong. Keep going until the ambulance takes over. Do you have a first aid course? Tell your colleagues, so they know who to call.',
    ['Bel 112 en haal de AED.', 'Call 112 and get the AED.'],
    'A man falls in the hall. He does not move and does not breathe. What do you do?',
    [
      'Call 112, and start CPR.',
      'Wait to see if he wakes up.',
      'Lift him, and put him on a chair.',
    ],
    'When the heart stops, every minute counts. CPR and an AED can save a life before the ambulance comes.',
    NONE,
  ),
  // Whether a guard may hold a thief, and how, differs per shop and per security company:
  // HOUSE_LINE. The tip names no law; "never search" and "little force" hold everywhere.
  tipFor(
    'shoplifting',
    '🚥',
    'Shop theft: watch, report, no rough force',
    'Did you see someone steal? Stay calm, and call the police at once. Some shops let a guard hold a thief until the police come; others say: only watch, report and remember what the person looks like. Never hit or kick, and never hold someone by the neck. Never search a person, their pockets or their bag: that is for the police. Write down what you saw, and keep the camera footage.',
    ['Wilt u even met mij meekomen?', 'Would you come with me, please?'],
    'You saw a woman put a bottle in her bag. She walks out. What do you do?',
    [
      'Stop her calmly, and call the police.',
      'Search her bag at the door, quickly.',
      'Push her hard to the ground.',
    ],
    'Searching a person is for the police, and rough force can hurt someone and get you into trouble.',
    HOUSE_LINE,
  ),
  // How a company handles aggression differs: HOUSE_LINE.
  tipFor(
    'aggression',
    '😡',
    'Stay calm, keep your distance',
    'An angry person calms down faster when you stay calm. Speak slowly and quietly, and call the person "u". Keep an arm’s length or more between you, and keep a way out behind you. Do not touch the person and do not shout back. Does it get dangerous? Step back, and call a colleague or the police. Write it down afterwards. After a bad incident, talk about it with someone.',
    ['Rustig. Ik wil u helpen.', 'Calm down. I want to help you.'],
    'A man shouts at you and comes very close. What do you do?',
    [
      'Step back, and speak calmly.',
      'Shout back, louder than him.',
      'Push him away from you.',
    ],
    'Calm words and space take the heat out. Shouting or pushing makes it worse.',
    HOUSE_LINE,
  ),
  // The hygiene rules differ per factory: HOUSE_LINE.
  tipFor(
    'hygienelock',
    '🧔',
    'Clean in, every time',
    'In a food factory, you are the biggest danger for the food: germs come from your hands, hair and clothes. So go through the hygiene lock every time you go in, also after a break or the toilet. Hair net on, beard net if you have a beard, clean work clothes, all jewellery off. Wash your hands with soap, dry them and disinfect them. Are you ill, with diarrhoea or vomiting? Tell your supervisor before you start.',
    ['Ik heb diarree. Mag ik vandaag werken?', 'I have diarrhoea. May I work today?'],
    'You come back from the toilet. Your colleague says: "Skip the lock, we are busy." What do you do?',
    [
      'Go through the lock anyway.',
      'Skip it, just this once.',
      'Only put on new gloves.',
    ],
    'Germs from the toilet can make many customers ill. A few minutes in the lock prevent that.',
    HOUSE_LINE,
  ),
  // How allergens are kept apart differs per factory: HOUSE_LINE.
  tipFor(
    'allergens',
    '🌰',
    'A trace is enough',
    'For some people, a tiny bit of nuts, peanut, milk, egg, gluten or sesame can be life-threatening. That is why the label must say exactly what is in a product. Keep allergens apart: their own tubs, tools and colours. After a product with an allergen, the line is cleaned before the next product. Never swap an ingredient, also not when it looks the same. Do you doubt? Ask.',
    ['Zitten hier noten in?', 'Are there nuts in this?'],
    'The almonds are finished. A colleague says: "Use hazelnuts, nobody will notice." What do you do?',
    [
      'Say no, and tell your supervisor.',
      'Use them: nuts are nuts.',
      'Use them, and change nothing on the label.',
    ],
    'The label must say what is inside. A wrong nut can make someone with an allergy very ill.',
    HOUSE_LINE,
  ),
  // How long you may stay in the freezer, and the breaks, differ per company: HOUSE_LINE.
  tipFor(
    'coldroom',
    '🧥',
    'Cold work: dress warm, keep it cold',
    'Food must stay cold all the way: from the lorry to the cold room to the shop. So put cold products away at once, and keep the doors of the cold room and the freezer closed. Check the temperature and write it down. In the freezer, wear your thermal clothes, gloves and a hat, and take a warm break in time. Make sure you can always open the door from the inside.',
    ['Het is hier te warm. De koeling doet het niet.', 'It is too warm here. The cooling does not work.'],
    'The thermometer of the cold room shows a much higher number than normal. What do you do?',
    [
      'Tell your supervisor at once.',
      'Wait: it will cool down again.',
      'Write the normal number on the list.',
    ],
    'Too warm means germs grow. Your supervisor decides if the food is still safe.',
    HOUSE_LINE,
  ),
  // What happens with the line and the products differs per factory: HOUSE_LINE.
  tipFor(
    'foreignbody',
    '🧲',
    'Something in the food? Stop and report',
    'Glass, metal, plastic, a plaster or a hair must never end up in food. Does the metal detector beep, or do you find something strange? Put the product aside, and tell the shift leader. Did glass break? Stop the line near it: the shift leader decides what must be thrown away. Use only blue plasters, so they are easy to see. Never take glass, pens or loose things onto the work floor.',
    ['Ik heb iets gevonden in het product.', 'I found something in the product.'],
    'A glass lamp breaks above the line. The products roll on. What do you do?',
    [
      'Stop the line, and call the shift leader.',
      'Pick out the glass you can see.',
      'Go on: the detector finds glass.',
    ],
    'A metal detector does not find glass. Small pieces you cannot see can hurt a customer badly.',
    HOUSE_LINE,
  ),
  tipFor(
    'cutting',
    '🍖',
    'Sharp knife, safe hand',
    'A sharp knife is safer than a blunt one: you need less force, so it slips less. Always wear your cut-resistant glove on the other hand. Cut away from your body. Put a knife down flat on the board, never in a sink or under meat. Do not try to catch a falling knife: step back. Carry a knife with the point down, close to your leg. Even a small cut must be covered and reported.',
    ['Mijn mes is bot.', 'My knife is blunt.'],
    'Your knife slips out of your hand and falls. What do you do?',
    [
      'Step back, and let it fall.',
      'Catch it quickly.',
      'Stop it with your foot.',
    ],
    'A falling knife cuts deep when you grab it. On the floor it can do no harm.',
    NONE,
  ),
  // How labels are checked differs per factory: HOUSE_LINE.
  tipFor(
    'labels',
    '🖨',
    'A wrong label is dangerous',
    'The label tells the customer what is inside, how much it weighs and until when it is good. A wrong date or a wrong label can make people ill, for example when an allergen is missing. So check the first labels of every new run: the product, the date and the batch number. Is something wrong? Stop, and tell your supervisor. Products with a wrong label are put aside, never sold.',
    ['Het etiket klopt niet.', 'The label is not right.'],
    'You see that the date on the labels is one week too late. What do you do?',
    [
      'Stop packing, and tell your supervisor.',
      'Go on: one week does not matter.',
      'Change the date with a pen.',
    ],
    'A wrong date can let people eat food that is no longer safe. Better to stop now than to call it back later.',
    HOUSE_LINE,
  ),
  // How a machine is made safe before cleaning differs per machine: HOUSE_LINE.
  tipFor(
    'linecleaning',
    '💦',
    'Power off before you clean',
    'Never clean a machine that is running. Turn it off, and make sure nobody can start it again: follow the steps of your company. Wear the right gloves, glasses and boots: cleaning products can burn your skin and eyes. Never mix products. First take away the leftovers, then foam, scrub and rinse. Do not spray water on electric boxes or plugs.',
    ['Is de machine uit?', 'Is the machine off?'],
    'Some meat is stuck in the belt. The machine is still running. What do you do?',
    [
      'Turn it off first, then take it out.',
      'Pull it out quickly with your hand.',
      'Push it out with a knife.',
    ],
    'A running belt can pull in your hand in a second. Turning it off takes only a moment.',
    HOUSE_LINE,
  ),
  // The plan and its lists differ per factory: HOUSE_LINE.
  tipFor(
    'haccp',
    '📉',
    'HACCP: check, write, report',
    'Every food company works with a food safety plan (HACCP). It says at which steps you must check something, like the temperature of the cold room or the core temperature of cooked meat. You check, you write it down, and you sign. Write what you really measured, also when it is wrong. A wrong number is not your fault, but hiding it is dangerous.',
    ['De temperatuur is te hoog.', 'The temperature is too high.'],
    'You forgot to measure at ten. Your colleague says: "Just write down a good number." What do you do?',
    [
      'Measure now, and write the real time.',
      'Write a good number for ten o’clock.',
      'Leave the line empty.',
    ],
    'The list must show what really happened. A made-up number hides a problem that can make people ill.',
    HOUSE_LINE,
  ),
  // Whether riding on the back step is allowed, and how, differs per company: HOUSE_LINE.
  tipFor(
    'binlorry',
    '🦺',
    'Be seen, and ride inside',
    'Wear your high-visibility clothes on every round. Get in and out on the side of the pavement, never on the side of the traffic. Ride in the cab, not on the back of the lorry: only when your company clearly allows it, and never when it reverses or goes fast. Keep away from the bin lift while it moves. Is a bin too heavy, or does something stick out of it? Leave it, and report it.',
    ['Deze kliko is te zwaar.', 'This wheelie bin is too heavy.'],
    'The next street is very close. The driver says: "Stand on the back step." What do you do?',
    [
      'Get in the cab anyway.',
      'Stand on the step: it is close.',
      'Walk behind the lorry.',
    ],
    'Falling off a moving lorry is one of the biggest dangers of this work. In the cab you are safe.',
    HOUSE_LINE,
  ),
  // Whether a banksman guides every reversing manoeuvre differs per company: HOUSE_LINE.
  tipFor(
    'reversing',
    '🔙',
    'Never behind a reversing lorry',
    'Many accidents with waste lorries happen when they drive backwards. The driver cannot see right behind the lorry: the blind spot. So never stand or walk behind a lorry that may reverse. Guide the driver from the side, where you can see each other in the mirror. Lost eye contact? The driver stops. Agree on clear signs before you start.',
    ['Stop! Ik zie je niet meer.', 'Stop! I cannot see you any more.'],
    'The lorry reverses. You walk behind it to get a bag. What do you do?',
    [
      'Wait until the lorry stands still.',
      'Walk fast: it is only a second.',
      'Wave to the driver, and go.',
    ],
    'A driver cannot see you behind the lorry. One second is enough for an accident.',
    HOUSE_LINE,
  ),
  // Which waste goes where differs per town: HOUSE_LINE.
  tipFor(
    'wastesorting',
    '🥫',
    'Good sorting saves work',
    'Sorted waste can be used again: paper becomes paper, glass becomes glass. But one wrong thing can spoil a whole load. So look in the bin before you empty it. Does something not belong there, like a bag of general waste in the paper? Leave it, or follow the rules of your company. Which waste goes where differs per town: learn the rules of your area.',
    ['Dit hoort hier niet in.', 'This does not belong in here.'],
    'A paper bin is full of black rubbish bags. What do you do?',
    [
      'Leave it, and report it.',
      'Empty it into the paper.',
      'Take the bags out by hand.',
    ],
    'Rubbish in the paper spoils the whole load. Bags can also hold sharp or dirty things.',
    HOUSE_LINE,
  ),
  tipFor(
    'wastesafety',
    '🩸',
    'Never squeeze a bag',
    'A rubbish bag can hold glass, knives or needles. So never press a bag against your body, never squeeze it, and never carry it on your leg: hold it at the top, away from you. Wear your gloves. Lift with your knees bent and your back straight, and push a bin, do not carry it. Did something prick or cut you? Wash the wound well with water, and tell your supervisor the same day.',
    ['Ik heb me geprikt.', 'I pricked myself.'],
    'A bag tears. You see a needle in it. What do you do?',
    [
      'Do not touch it, and report it.',
      'Pick it up with your gloves on.',
      'Push it back in the bag.',
    ],
    'Gloves do not stop a needle. A needle can carry a disease.',
    NONE,
  ),
  // The rules of the yard (who may help, what is accepted) differ per town: HOUSE_LINE.
  tipFor(
    'yard',
    '🛋',
    'Help, but keep the yard safe',
    'At the recycling yard you tell visitors where their waste goes, and you check that it is sorted well. Be friendly: many people come only a few times a year and do not know the rules. Keep children and visitors away from machines and from the edge of high containers. Lift heavy things together, or let the visitor carry their own. Does someone bring something you do not know? Ask before it goes in.',
    ['Dit gaat in container vier.', 'This goes in container four.'],
    'A man wants to throw a full bag in the wood container. What do you do?',
    [
      'Ask what is in the bag.',
      'Let him: it is his waste.',
      'Throw it in for him.',
    ],
    'One wrong thing can spoil a full container. A friendly question keeps the waste clean.',
    HOUSE_LINE,
  ),
  // What is accepted, and how, differs per yard: HOUSE_LINE.
  tipFor(
    'hazardous',
    '☠',
    'Unknown? Do not open, do not smell',
    'Chemical waste, like paint, oil, cleaning products, batteries and spray cans, can burn, poison or explode. Look for the hazard symbols. Wear gloves and safety glasses. Never open a bottle to smell what is inside, and never mix products. Keep a leaking bottle upright, and put it in a tray. Asbestos may only come in when it is packed well: never break it, and do not take it out of the packing.',
    ['Wat zit hierin?', 'What is in here?'],
    'A woman brings a bottle without a label. It smells strong. What do you do?',
    [
      'Put it apart, and tell your supervisor.',
      'Open it, and smell what it is.',
      'Pour it into the paint drum.',
    ],
    'Unknown products can react with others. Your supervisor knows where it can go safely.',
    HOUSE_LINE,
  ),
  // Who may use the baler, and how it is made safe, differs per company: HOUSE_LINE.
  tipFor(
    'baler',
    '⬇',
    'Never reach into the baler',
    'A baler presses with a huge force. Only use it when you have learned how. Never put a hand, an arm or a foot into the loading opening, also not when the machine looks still. Does it jam? Press the emergency stop, switch it off and make sure nobody can switch it on: follow the steps of your company. Only then look. Never climb into a baler or a container.',
    ['De pers zit vast.', 'The press is stuck.'],
    'A piece of cardboard is stuck in the opening. The machine stands still. What do you do?',
    [
      'Switch it off fully, then take it out.',
      'Pull it out quickly with your hand.',
      'Push it in with your foot.',
    ],
    'A machine that stands still can start again. Without the power off, your hand is in danger.',
    HOUSE_LINE,
  ),
  // The traffic rules of the yard differ per yard: HOUSE_LINE.
  tipFor(
    'shovel',
    '🟠',
    'Stay out of the loader’s way',
    'A wheel loader is big, and its driver sees little around it, especially behind it. So stay on the walkways, and wear your high-visibility clothes. Never walk behind a moving machine. Want to pass? Wait until the driver has seen you and gives a sign. The flashing light means: this machine is working. Keep visitors far away from it.',
    ['Heb je me gezien?', 'Did you see me?'],
    'You must walk past a working wheel loader. The driver looks the other way. What do you do?',
    [
      'Wait until he sees you.',
      'Walk past quickly.',
      'Walk behind the machine.',
    ],
    'A driver who has not seen you cannot stop for you.',
    HOUSE_LINE,
  ),
  // How nappies are changed (gloves, the list) differs per day care: HOUSE_LINE.
  tipFor(
    'nappies',
    '🧷',
    'One hand on the child',
    'Get everything ready before you put a child on the changing table: a clean nappy, wipes and clothes. Then keep one hand on the child at all times. Never walk away, also not for a second. Wash your hands after every change, and clean the table. Write down when you changed the nappy, so the parents know. Do you see a rash or a wound? Write it down, and tell a colleague.',
    ['Ik verschoon hem even.', 'I am just changing him.'],
    'You are changing a baby. You forgot the wipes; they are across the room. What do you do?',
    [
      'Take the baby with you.',
      'Get them quickly: it is close.',
      'Leave the baby, and call out.',
    ],
    'A baby can roll off a changing table in one second. Never leave a child alone up there.',
    HOUSE_LINE,
  ),
  // What children may eat is agreed with the parents: HOUSE_LINE.
  tipFor(
    'mealtime',
    '🍼',
    'Check the list before you give food',
    'Before you give a child food or drink, check the list: some children have an allergy, others may not eat certain food for their health or their faith. Wash your hands and the children’s hands before eating. Let children sit down while they eat and drink, never walk or run. Cut food small for small children, like grapes in pieces. Never give a child something from home of another child.',
    ['Mag hij dit eten?', 'May he eat this?'],
    'A child cries for a biscuit. You do not know this child well. What do you do?',
    [
      'Check the list first.',
      'Give it: it is only a biscuit.',
      'Give half a biscuit.',
    ],
    'A biscuit can hold nuts, milk or egg. For a child with an allergy, that can be very dangerous.',
    HOUSE_LINE,
  ),
  // How often sleeping children are checked differs per day care: HOUSE_LINE.
  tipFor(
    'naptime',
    '💤',
    'Babies sleep on their back',
    'A baby sleeps safest on its back, in a sleeping bag, in its own cot. No pillow, no loose blanket and no big toys in the cot. Keep the room cool and fresh. Check sleeping children often: look and listen, also when the baby monitor is on. Does a parent ask you to let their baby sleep in another way? Tell your supervisor first.',
    ['Ik ga even kijken in de slaapkamer.', 'I will go and look in the bedroom.'],
    'A baby has fallen asleep on its tummy in the cot. What do you do?',
    [
      'Gently turn it onto its back.',
      'Let it sleep: it is asleep now.',
      'Put a pillow next to it.',
    ],
    'On its back, a baby can breathe freely. A pillow can cover its face.',
    HOUSE_LINE,
  ),
  // The rules for outside play differ per day care: HOUSE_LINE.
  tipFor(
    'playtime',
    '🛝',
    'Play safe: look, count, check',
    'Children learn by playing, so let them try things. But always keep them in sight, also outside. Count the children when you go out and when you come back in. Check the playground first: is the gate closed, is there glass or rubbish? Toys with small parts are not for children under three: they can choke on them. Clean toys that go in the mouth often.',
    ['Is iedereen er?', 'Is everyone here?'],
    'You come back in from the playground. You count one child too few. What do you do?',
    [
      'Tell a colleague, and search at once.',
      'Wait: the child will come in by itself.',
      'Count again tomorrow.',
    ],
    'A child alone outside can get hurt or walk away. Every minute counts.',
    HOUSE_LINE,
  ),
  // Who may pick up a child, and how parents let you know, is set per day care: HOUSE_LINE.
  tipFor(
    'pickup',
    '👪',
    'Only to people on the list',
    'Give a child only to a parent, or to someone the parents have told you about. Do you not know the person? Ask who they are, look at their ID, and check with the parents or your supervisor. At pick-up, tell the parent how the day went: eating, sleeping, playing, and anything special. Write important things in the notebook or the app. Speak about other children only with their own parents.',
    ['Wie bent u? Ik bel even de ouders.', 'Who are you? I will call the parents.'],
    'A man you do not know comes to pick up Sem. He is not on the list. What do you do?',
    [
      'Call the parents before Sem goes.',
      'Let Sem go: he knows the name.',
      'Ask Sem if he knows him.',
    ],
    'You are responsible for the child until a person the parents chose takes over.',
    HOUSE_LINE,
  ),
  // The safety checks and the house rules differ per day care: HOUSE_LINE.
  tipFor(
    'childsafety',
    '🖐',
    'Look around with a child’s eyes',
    'Small children put everything in their mouth and climb on everything. So keep the stair gate closed, put cleaning products and medicines out of reach, and keep hot drinks away from children. Check the room every day. Does a child get hurt? Give first aid, comfort the child, tell the parents, and write it down. Is it serious? Call 112.',
    ['Het traphekje staat open.', 'The stair gate is open.'],
    'You put your hot coffee on a low table. A toddler walks to it. What do you do?',
    [
      'Put the coffee up high at once.',
      'Tell the toddler not to touch it.',
      'Drink it quickly.',
    ],
    'Hot coffee can burn a small child badly. Out of reach is the only safe place.',
    HOUSE_LINE,
  ),
  // When a sick child must go home, and who may give medicine, is set per day care: HOUSE_LINE.
  tipFor(
    'sickchild',
    '🤮',
    'A sick child: tell, do not guess',
    'Watch how the children are. Is a child hot, very tired, vomiting, or does it have a rash? Take its temperature, tell your colleague, and call the parents. Give a medicine only with written permission of the parents, and write down what you gave and when. Know which children have an allergy, and where their medicine is. A child with a strong allergic reaction: give the adrenaline pen if you have learned it, and call 112.',
    ['Uw kind is ziek. Kunt u hem komen halen?', 'Your child is ill. Can you come and pick him up?'],
    'A mother says: "Give him a fever drink at two." There is no form. What do you do?',
    [
      'Ask her to sign the form first.',
      'Give it: the mother asked.',
      'Give half, to be safe.',
    ],
    'Without written permission you may not give medicine. The form protects the child and you.',
    HOUSE_LINE,
  ),
  // The four-eyes rule and the reporting of worries are set per day care: HOUSE_LINE.
  tipFor(
    'grouprules',
    '👁',
    'Never alone out of sight',
    'In child care, another adult must always be able to see or hear you when you are with the children. That protects the children and you. Every child has a mentor: one worker who follows that child closely and talks with the parents. Are you worried about a child at home, for example bruises or fear? Do not ask the child too much: tell your supervisor, who knows the steps.',
    ['Ik maak me zorgen over dit kind.', 'I am worried about this child.'],
    'You see bruises on a child again. The child is quiet. What do you do?',
    [
      'Tell your supervisor the same day.',
      'Ask the child many questions.',
      'Call the parents and ask why.',
    ],
    'Your supervisor knows the steps for worries about a child. Many questions can scare the child.',
    HOUSE_LINE,
  ),
];

/**
 * The tips of the five units of 23 November 2026 (src/content/work.ts): the second own units of
 * Schoonmaak, Horeca, Zorg and Winkel (how the work is done: house rules, no right or amount), and
 * the basis unit "Werken via een uitzendbureau" (u.uitzend), whose tips state rights: every claim
 * has its ⚖️ note right above the tip, and the same claims with their sources stand in
 * docs/juridische-check.md ("Werken via een uitzendbureau").
 */
const vijfUnitsTips = [
  // Schoonmaak. Working from clean to dirty, and the colours, differ per company: HOUSE_LINE.
  tipFor(
    'sanitary',
    '🚽',
    'From clean to dirty',
    'In a washroom you work from clean to dirty: first the mirrors and the washbasins, then the toilets, and the floor last. That way you do not bring dirt from the toilet to the washbasin. Use the cloths with the colour for the toilet, and wear gloves. Clean the toilet brush too, and let it dry. Is a toilet blocked or broken? Put a sign on the door, and report it. Wash your hands when you are done, also when you wore gloves.',
    ['Dit toilet is verstopt. Ik zet er een bordje op.', 'This toilet is blocked. I am putting a sign on it.'],
    'You cleaned a toilet. The washbasin is next. You still hold the same cloth. What do you do?',
    [
      'Take a cloth with the colour for the washbasin.',
      'Use the same cloth: it still looks clean.',
      'Rinse the cloth in the toilet first.',
    ],
    'Germs from the toilet are on the cloth, also when you cannot see them. A new cloth keeps them away from hands and faces.',
    HOUSE_LINE,
  ),
  tipFor(
    'hotelroom',
    '🛌',
    'Knock, say who you are, and wait',
    'Before you go into a hotel room, knock and say who you are, for example "Housekeeping!". Wait a moment, and knock again. Is there a "Niet storen" sign on the door? Then do not go in, and write it on your room list. Is the guest in the room? Ask if you may clean now, or come back later. The guest’s things stay where they are. Did a guest forget something? Bring it to the reception. Never keep anything for yourself, not even something small.',
    ['Goedemorgen. Mag ik de kamer nu schoonmaken?', 'Good morning. May I clean the room now?'],
    'In an empty room you find a phone under the bed. The guest has left. What do you do?',
    [
      'Bring it to the reception.',
      'Keep it: the guest is gone.',
      'Leave it under the bed.',
    ],
    'Lost things still belong to the guest. The reception can give them back. Keeping them is stealing, and can cost you your job.',
    HOUSE_LINE,
  ),
  // How much product, and how a machine is used, is on the label and in the company's instructions: HOUSE_LINE.
  tipFor(
    'dosing',
    '🥄',
    'The right dose, not more',
    'More product does not clean better. Too much leaves a sticky layer, so a floor gets dirty faster and can get slippery. It is also worse for your skin and your lungs. Use the measuring cup or the dosing pump, and follow the label. First the water, then the product: so it does not splash. Before you use the scrubber-dryer, check that it is charged, with clean water in the tank. At the end, empty and rinse the tank with the dirty water.',
    ['Hoeveel moet ik erin doen?', 'How much must I put in?'],
    'The floor stays sticky. A colleague says: "Use double the product." What do you do?',
    [
      'Use the dose on the label, and ask.',
      'Use double: then it gets clean.',
      'Pour the product right on the floor.',
    ],
    'A sticky floor often means too much product, not too little. The right dose cleans best and is the safest.',
    HOUSE_LINE,
  ),
  // Working alone (alleenwerken): what to do and who to call differs per company and per building: HOUSE_LINE.
  tipFor(
    'officenight',
    '🌃',
    'Alone in the building',
    'Early in the morning or late at night you often clean an office alone. Know what to do if something happens: who do you call, and where is the first aid kit? Keep your phone with you. Agree with your supervisor or a colleague that you send a message when you start and when you are done. Do not let in anyone you do not know. Do not touch papers, screens or keyboards more than you need for cleaning, and never read what is on them.',
    ['Ik ben klaar en ik ga nu naar huis.', 'I am done and I am going home now.'],
    'At night a man knocks on the glass door. He says he works here and forgot his key. What do you do?',
    [
      'Do not open. Call your supervisor.',
      'Let him in: he looks friendly.',
      'Give him your own key.',
    ],
    'Anyone can say he works there. Your supervisor can check it. Your safety and the building come first.',
    HOUSE_LINE,
  ),
  // Horeca. Knife rules (walk with the point down, never in the sink) are kitchen practice: HOUSE_LINE.
  tipFor(
    'knives',
    '🔪',
    'A knife is a tool, not a toy',
    'Keep your knife sharp: a blunt knife slips more easily. Cut on a board that does not move: put a wet cloth under it. Bend your fingers in, like a claw. Walk with the point down, close to your leg, and say "Mes!" when you pass someone. Never put a knife in a sink full of water: someone can grab it without seeing it. Is a knife falling? Step back, do not catch it.',
    ['Mes! Ik loop achter je langs.', 'Knife! I am walking behind you.'],
    'You are cutting. Your knife slips off the board and falls. What do you do?',
    [
      'Step back, and let it fall.',
      'Catch it quickly with your hand.',
      'Stop it with your foot.',
    ],
    'A falling knife can cut deep into your hand or your foot. A knife on the floor only needs a wash.',
    HOUSE_LINE,
  ),
  // ⚖️ check: A restaurant must be able to tell guests which allergens are in a dish ⚖️ (Verordening
  // (EU) nr. 1169/2011, art. 9 lid 1 onder c and art. 44: allergen information also for food that is
  // not pre-packed, as in a restaurant; in the Netherlands the Warenwetbesluit informatie
  // levensmiddelen; NVWA "Allergeneninformatie bij niet-voorverpakte levensmiddelen"). The same EU rule
  // holds in Belgium (FAVV). The rest of the tip is kitchen practice: HOUSE_LINE.
  tipFor(
    'rawcooked',
    '🍗',
    'Raw and ready never touch',
    'Raw meat, fish and eggs can carry germs. Keep them away from food that is ready to eat. Use a separate board and knife, or the colour code of your kitchen, and wash your hands after you touch raw food. Raw meat goes at the bottom of the fridge, so nothing drips on other food. Cover food and put a date on it. With allergies, a trace can be enough: use clean tools. A restaurant must be able to tell guests which allergens are in a dish: check the allergen list.',
    ['Welke plank is voor rauw vlees?', 'Which board is for raw meat?'],
    'You cut raw chicken. Next you must cut tomatoes for a salad. What do you do?',
    [
      'Take a clean board and a clean knife.',
      'Wipe the board with a cloth, and go on.',
      'Cut the tomatoes on the same board.',
    ],
    'Germs from raw chicken get on the tomatoes, and a salad is not cooked again. A clean board stops that.',
    HOUSE_LINE,
  ),
  tipFor(
    'pass',
    '🔔',
    'The pass: plates do not wait',
    'At the pass the kitchen puts the plates for the waiter. Hot food must go to the guest quickly, so a plate does not wait long on the pass. Check the ticket: the right table, the right dishes, a clean edge on the plate? Then take it. In the dish room: pre-rinse, put everything in the racks, and let the machine do the rest. Do not open the machine while it runs: the steam is very hot. Wear gloves when you fill the machine’s products.',
    ['Welke tafel is dit?', 'Which table is this?'],
    'There are two plates on the pass. You do not know which table they are for. What do you do?',
    [
      'Look at the ticket, or ask the chef.',
      'Take them to a table that is waiting.',
      'Wait until someone else takes them.',
    ],
    'A plate at the wrong table means two waiting guests and cold food. One short question is faster.',
    HOUSE_LINE,
  ),
  // How the till, cash and tips are handled differs per company: HOUSE_LINE.
  tipFor(
    'bill',
    '💶',
    'Money at the table: count it twice',
    'When a guest pays, say the amount clearly and let the guest see the card machine. With cash, count the money when you get it, and again when you give the change. The money goes into the till or your waiter’s wallet, never into your own pocket. Tips (fooi) go where your company says, for example in the tip jar. Did a guest leave without paying? Do not run after them: tell your manager.',
    ['Dat is dan vijfenveertig euro, alstublieft.', 'That is forty-five euros, please.'],
    'A guest gives you money and says: "It is right." You did not count it. What do you do?',
    [
      'Count it while the guest is there.',
      'Put it away, and count it later.',
      'Trust the guest: say thank you.',
    ],
    'If you count later and money is missing, nobody can check what happened. Counting at the table protects the guest and you.',
    HOUSE_LINE,
  ),
  // Zorg. Dignity in personal care is a norm of the work, not a rule of one company: no closing line.
  tipFor(
    'washing',
    '🪥',
    'Ask first, cover, and let them choose',
    'Washing someone is very personal. Say what you are going to do, and ask first. Cover the parts of the body you are not washing with a towel. Close the door or the curtain. Let the client choose: the shower or a wash at the washbasin, and which clothes to wear. Let the client do what they can still do, also when it is slower. Does a client say no? Do not force it. Try again later, offer something else, and tell the nurse.',
    ['Wat wilt u vandaag aantrekken?', 'What would you like to wear today?'],
    'A client says she does not want to be washed today. What do you do?',
    [
      'Accept it, and tell the nurse.',
      'Wash her anyway: it is on the list.',
      'Skip it, and say nothing.',
    ],
    'A client may say no. Forcing care hurts trust. The nurse can look at why, and at what can be done.',
    NONE,
  ),
  // How and where a helper writes in the care file differs per home: HOUSE_LINE.
  tipFor(
    'observing',
    '📓',
    'Write what you see, not what you think',
    'What you write in the care file, the next colleague reads. Write facts: what you saw, heard or measured, and when. Not "Mevrouw is lastig", but "Mevrouw wilde niet eten en duwde het bord weg." Write it the same day, in short sentences. Not sure how to write it in Dutch? Tell the nurse, and write it together. Look at the skin when you wash someone: a red spot that does not go away can be the start of a pressure sore.',
    ['Ik schrijf op wat ik gezien heb.', 'I am writing down what I saw.'],
    'A client was angry during the wash. You must write it in the file. What do you do?',
    [
      'Write what she said and did, and when.',
      'Write: "Difficult lady, as always."',
      'Write nothing: it is normal.',
    ],
    'Facts help the next colleague and the nurse to act. An opinion does not say what happened.',
    HOUSE_LINE,
  ),
  // What to do when a client does not open the door differs per home care organisation: HOUSE_LINE.
  tipFor(
    'homecare',
    '🗝️',
    'A guest in someone’s home',
    'In home care you work in the client’s own home. You are a guest there: ring the bell and say who you are, also when you have a key. The code of the key safe is secret. Never write it where others can see it, and always close the key safe again. Follow the care plan: what you do is in there. Is something different, or does the client not open the door? Do not just leave. Call your team or the district nurse.',
    ['Goedemorgen, ik ben van de thuiszorg.', 'Good morning, I am from home care.'],
    'You ring the bell. The client does not open. Her car is there. What do you do?',
    [
      'Call your team, and wait.',
      'Go on to the next client.',
      'Ring once more, then leave.',
    ],
    'The client may have fallen, or be ill. Your team knows what to do, and who has a key.',
    HOUSE_LINE,
  ),
  // Which aid a client needs is in the care plan; the checks follow the instructions of the home: HOUSE_LINE.
  tipFor(
    'liftaids',
    '🛷',
    'Let the aid do the lifting',
    'Before you use a hoist, check it: is the battery charged, is the sling the right size and not torn? Put the brakes on the bed and the wheelchair. Bring the bed to the height of your hips, so you do not bend. Tell the client every step. The care plan says which aid a client needs. Is an aid broken or missing? Do not work around it: report it, and ask a colleague to help. Not shown how an aid works? Ask before you start.',
    ['De tilband is kapot. Ik pak een andere.', 'The sling is broken. I will get another one.'],
    'You want to use the hoist. The sling has a small tear. What do you do?',
    [
      'Take another sling, and report the tear.',
      'Use it: the tear is very small.',
      'Tie a knot in the sling.',
    ],
    'A small tear can get bigger under the weight of a person. A fall from a hoist can badly hurt the client.',
    HOUSE_LINE,
  ),
  // Winkel. Return rules are the shop's own (a faulty product is another matter, for the manager):
  // the tip names no right, HOUSE_LINE.
  tipFor(
    'returns',
    '🔄',
    'Returns: follow the shop’s rules',
    'Every shop has its own rules for returns: how many days, with or without a receipt, money back or a credit note. Learn them, and follow them for every customer. Not sure? Ask a colleague or the manager, and do not decide alone. At the end of your shift, count your till drawer, with a colleague if your shop does it that way. Never take money from the till for yourself, not even to borrow it for a moment.',
    ['Ik vraag het even aan de bedrijfsleider.', 'I will just ask the store manager.'],
    'A customer wants money back for shoes. She has no receipt. You do not know the rule. What do you do?',
    [
      'Ask the manager what to do.',
      'Give the money back: she is nice.',
      'Say no, and send her away.',
    ],
    'The manager knows the rules and can decide. Then the customer gets a fair answer, and you are not to blame.',
    HOUSE_LINE,
  ),
  tipFor(
    'facing',
    '❄️',
    'Cold first, and the shelf looks full',
    'Cold and frozen products go into the fridge or the freezer first, before anything else. They may not stand warm for long. Then the rest. Facing means: pull the products to the front, with the label to the customer. Then the shelf looks full and tidy. Check the shelf label: is the price right for this product? When you open boxes, cut away from your body, and not too deep: you can damage the product.',
    ['Eerst de koude producten, dan de rest.', 'The cold products first, then the rest.'],
    'A pallet with milk and a pallet with crisps arrive. You are alone. What do you do?',
    [
      'Put the milk in the fridge first.',
      'Start with the crisps: they are lighter.',
      'Leave both until a colleague comes.',
    ],
    'Milk that stands warm too long can make customers ill, and must be thrown away. Crisps can wait.',
    HOUSE_LINE,
  ),
  // Staff purchases and bag checks are shop rules: HOUSE_LINE. The tip names no law.
  tipFor(
    'shrink',
    '👜',
    'Your own shopping: pay like a customer',
    'A shop loses a lot through broken products, old products and theft. Help to keep it low. A broken or damaged product? Do not put it back: write it off the way your shop does it. Your own shopping: pay at the till like every customer, and keep the receipt. In many shops you may not ring up your own shopping: a colleague does it. Never eat or take a product without paying, not even a small one. Some shops check bags: that is a shop rule, not a sign of distrust in you.',
    ['Ik betaal eerst, en ik bewaar de bon.', 'I pay first, and I keep the receipt.'],
    'At the end of your shift you are hungry. A sandwich is past its date today. What do you do?',
    [
      'Ask the manager what the rule is.',
      'Eat it: it is thrown away anyway.',
      'Take it home in your bag.',
    ],
    'In many shops, taking a product without paying is stealing, also when it is old. Asking first keeps you safe.',
    HOUSE_LINE,
  ),
  // What to do at closing time and in a robbery is in the shop's own rules (the advice "give, do not
  // fight, call 112 afterwards" holds everywhere): HOUSE_LINE.
  tipFor(
    'shopclose',
    '🏦',
    'A robbery: give it, and stay safe',
    'At closing time there is a lot of money in the till, so shops have rules: count it with two people, take the money to the safe, and lock the back door first. A robbery (overval)? Your life is worth more than the money. Stay calm, do what they say, and do not fight or run after them. Remember what you can: clothes, height, voice. When they are gone: lock the door, call 112, and touch nothing. Afterwards, talk about it with your manager or someone you trust.',
    ['We gaan dicht. Ik doe de deur op slot.', 'We are closing. I am locking the door.'],
    'A man with a knife wants the money from your till. What do you do?',
    [
      'Stay calm, and give him the money.',
      'Fight him: the money is not his.',
      'Run to the back, and lock yourself in.',
    ],
    'Fighting or running makes a robber nervous and more dangerous. Money can be replaced. You cannot.',
    HOUSE_LINE,
  ),
  // Werken via een uitzendbureau (u.uitzend). Rights: ADVICE_LINE where the law gives the rule,
  // ABUSE_LINE where the agency itself may be the problem (deductions, housing). More in
  // docs/juridische-check.md ("Werken via een uitzendbureau").
  // ⚖️ check (23 November 2026): the Wet meer zekerheid flexwerkers (Stb. 2026, 205) changes agency
  // work: equal terms for agency workers (WAADI) from 1 January 2027, a shorter phase A from 1 January
  // 2028 (secondary sources; check the Staatsblad). The tips of this unit name no date and no number of
  // weeks; rewrite 'c.phases' and 'c.deductions' before those dates (src/content/updates.ts UPCOMING_LAW).
  // ⚖️ check: The agency is your employer, not the hirer ⚖️ (BW 7:690: de uitzendovereenkomst; the same as c.agency).
  // ⚖️ check: The hirer must keep your work safe, just like for its own workers ⚖️ (Arbowet art. 1 lid 1
  // onder 2: who has the work done under his authority counts as the employer for the Arbowet; BW 7:658
  // lid 4: the hirer is liable for an accident at work; Waadi art. 11: the hirer tells the agency the
  // qualifications and the risks of the work).
  // ⚖️ check: Report sick the way your agency says: often to the agency and to the hirer ⚖️ (no law:
  // the agency's own rules and the uitzend-cao; "often" because it differs per agency).
  tipFor(
    'hirer',
    '🏭',
    'Two companies: who does what?',
    'You work through an agency (uitzendbureau), but you do the work at another company: the hirer (inlener). The agency is your employer: your contract, your pay, your payslip and your days off come from the agency. The hirer tells you what to do on the work floor, and must keep your work safe, just like for its own workers. Report sick the way your agency says: often to the agency and to the hirer. Keep the name and phone number of your contact person at the agency in your phone.',
    ['Wie is mijn contactpersoon bij het uitzendbureau?', 'Who is my contact person at the agency?'],
    'At the hirer you must work with a machine. Nobody showed you how. What do you do?',
    [
      'Ask the hirer to show you first.',
      'Try it: the agency is responsible.',
      'Go home, and say nothing.',
    ],
    'The hirer must show you how to work safely, the same as its own workers. Asking for it is your right.',
    ADVICE_LINE,
  ),
  // ⚖️ check: Most agency workers work under a cao for agency workers (uitzend-cao) ⚖️ (Cao voor
  // Uitzendkrachten (ABU/NBBU); "most" because some agencies have their own cao, see the question at
  // c.agency in docs/juridische-check.md).
  // ⚖️ check: The cao has phases A, B and C ⚖️ (Cao voor Uitzendkrachten, the phase system ("fasensysteem")).
  // ⚖️ check: In phase A, your work can usually stop when the hirer no longer needs you (uitzendbeding)
  // ⚖️ (BW 7:691 lid 2: the uitzendbeding, by law for the first 26 weeks, longer by cao; "usually"
  // because a contract without the uitzendbeding is possible).
  // ⚖️ check: In phase B, you get contracts for a fixed time; in phase C, a permanent contract with the
  // agency ⚖️ (Cao voor Uitzendkrachten, fase B and fase C; BW 7:691 lid 1 and 7:668a for the chain).
  // ⚖️ check: How long each phase lasts is in your cao ⚖️ (Cao voor Uitzendkrachten; the number of
  // weeks is left out on purpose: it changes with the Wet meer zekerheid flexwerkers, 2028).
  tipFor(
    'phases',
    '🅰️',
    'Phases A, B and C',
    'Most agency workers work under a cao for agency workers (uitzend-cao). It has phases. In phase A, your work can usually stop when the hirer no longer needs you (uitzendbeding). In phase B, you get contracts for a fixed time. In phase C, you get a permanent contract with the agency. How long each phase lasts is in your cao. Ask the agency which phase you are in, and keep all your contracts.',
    ['Hoe lang duurt fase A voor mij?', 'How long does phase A last for me?'],
    'You worked a long time for the same agency. You still get short contracts. What do you do?',
    [
      'Ask the agency which phase you are in.',
      'Nothing: agency work is always short.',
      'Stop, and look for another agency.',
    ],
    'After enough time, the cao gives you more security. The agency can tell you where you are, and the union can check it with you.',
    ADVICE_LINE,
  ),
  // ⚖️ check: You have a right to at least the same pay as workers of the hirer who do the same work
  // ⚖️ (Waadi art. 8 lid 1: at least the wage and allowances of workers in the same or a similar job at
  // the hirer; the uitzend-cao: inlenersbeloning; the same sentence as c.agency. From 1 January 2027
  // more equal terms, Wet meer zekerheid flexwerkers).
  // ⚖️ check: Money taken off your pay must be on your payslip ⚖️ (BW 7:626 lid 2: the payslip shows
  // the amounts that are taken off).
  // ⚖️ check: Tax and premiums come off by law ⚖️ (WML art. 13 lid 1: the deductions the law itself
  // requires, such as wage tax, premiums and a pension premium, may come off the minimum wage too).
  // ⚖️ check: Apart from those, from the minimum wage, the agency may only take off rent for your housing and the premium
  // for health insurance, and only if you agreed to it in writing ⚖️ (WML art. 13 and the decree on
  // deductions from the minimum wage, since 1 January 2017 (Wet aanpak schijnconstructies): rent at most
  // 25% of the minimum wage and only for housing that meets the quality rules, health insurance at most
  // the premium itself; the percentage is left out of the tip on purpose. Planned: no rent off the
  // minimum wage from 1 July 2028: then rewrite 'c.deductions', src/content/updates.ts UPCOMING_LAW).
  // ⚖️ check: Other costs, like transport, work clothes, fines or a fee for finding you a job, may not
  // come off the minimum wage ⚖️ (the same: only those two may come off; a fee for the job is never
  // allowed, Waadi art. 9 lid 1; protective clothing is free, Arbobesluit art. 8.1 and Arbowet art. 8).
  tipFor(
    'deductions',
    '➖',
    'What may come off your pay?',
    'You have a right to at least the same pay as workers of the hirer who do the same work. Money that is taken off your pay (inhouding) must be on your payslip. Tax and premiums come off by law. Apart from those, the agency may only take off two costs from the minimum wage: rent for your housing and the premium for health insurance, and only if you agreed to it in writing. Other costs, like transport, work clothes, fines or a fee for finding you a job, may not come off the minimum wage. Do not understand a deduction? Ask the agency to explain it in writing.',
    ['Waarvoor is deze inhouding?', 'What is this deduction for?'],
    'The agency takes money off your pay for the bus to work. You earn the minimum wage. What do you do?',
    [
      'Ask about it: this is not allowed.',
      'Nothing: you take the bus every day.',
      'Stop taking the bus, and walk.',
    ],
    'From the minimum wage, only rent and health insurance may come off, and only with your written yes. The union or the Juridisch Loket can help you.',
    ABUSE_LINE,
  ),
  // ⚖️ check: Housing through the agency: a rental contract of your own, in writing, apart from your
  // work contract ⚖️ (Wet goed verhuurderschap, in force 1 July 2023: the extra rules for renting to
  // labour migrants, rental contract in writing and separate from the employment contract (check the
  // article); the uitzend-cao and the SNF norm say the same; the same as c.housing).
  // ⚖️ check: It says what you pay, and how and when the rental ends ⚖️ (Wet goed verhuurderschap: written
  // information on the rent, the service costs and the rules; BW 7:271 for the notice of a rental).
  // ⚖️ check: Your work stops? Your home does not always stop on the same day ⚖️ (the rental contract is
  // separate from the work contract, see above; "not always" because short stays (logies) can end
  // sooner; the same advice as c.housing: ask before you leave).
  // ⚖️ check: The union, the Juridisch Loket (free legal advice), FairWork, or the Nederlandse
  // Arbeidsinspectie, where you can also report anonymously ⚖️ (juridischloket.nl, 0800-8020, free;
  // nlarbeidsinspectie.nl/melden: a report can be made anonymously; fairwork.nu; the same places as
  // c.gethelp and the closing line ABUSE_LINE).
  tipFor(
    'agencyhome',
    '🏘️',
    'Your home, and where to get help',
    'Does the agency arrange your housing? Then you get a rental contract of your own, in writing, apart from your work contract. Keep a copy. It says what you pay, and how and when the rental ends. Your work stops? Your home does not always stop on the same day: ask for advice before you leave. Unsafe or very full housing, threats, or pay that is too low? Get help: the union, the Juridisch Loket (free legal advice), FairWork, or the Nederlandse Arbeidsinspectie, where you can also report anonymously.',
    ['Mag ik een kopie van mijn huurcontract?', 'May I have a copy of my rental contract?'],
    'Your work stops. The housing manager says you must leave the house today. What do you do?',
    [
      'Ask the union or Juridisch Loket first.',
      'Leave today, and sleep at a friend’s.',
      'Pack your bag, and sleep outside.',
    ],
    'Your rental contract has its own rules, apart from your work. Advice helps you know when you really must leave.',
    ABUSE_LINE,
  ),
];

/**
 * The tips of the basis units at four lessons (23 November 2026, src/content/work.ts basisFour): one
 * per new lesson. Rights (Loon, Verlof, Ziekte, Uitbuiting, and the residence papers): ADVICE_LINE
 * where the law gives the rule, ABUSE_LINE where the employer or agency may be the problem; each
 * claim has a ⚖️ note and the tip a section in docs/juridische-check.md. No amounts. The other tips
 * are about how it goes at work (HOUSE_LINE) or social norms (NONE).
 */
const basisFourTips: CultureTip[] = [
  // Solliciteren. No right or amount: "never pay money to get a job" is advice (the rule for agencies,
  // Waadi art. 9, is in c.findwork).
  tipFor(
    'vacancy',
    '📰',
    'Call, or send a short message',
    'Read the ad well: the hours, the place, and what you must have, like a driving licence or a certificate. You do not need to have everything: if you have most of it, try anyway. Call or write a short message: say your name, which job, and why you want it. Never pay money to get a job, and never send your login codes for an ad.',
    ['Ik heb geen diploma, maar wel veel ervaring.', 'I have no diploma, but I do have a lot of experience.'],
    'An ad asks for 3 years of experience. You have 2 years. What do you do?',
    [
      'Apply anyway, and say what you can do.',
      'Do not apply: you have too little.',
      'Write 3 years: nobody checks it.',
    ],
    'An ad often asks for more than the job really needs. Being honest about what you can do works better than lying.',
    NONE,
  ),
  tipFor(
    'result',
    '🥳',
    'A no is not the end',
    'Heard nothing after a week? You may call back and ask politely. Got a no? Ask what you can do better next time: many employers tell you. Then try again: most people get a few no’s first. Got a yes? Ask when you start, and ask for your contract before you begin. Invited for a trial day? Ask before how long it is, and if it is paid.',
    ['Wat kan ik de volgende keer beter doen?', 'What can I do better next time?'],
    'After a job interview, you get a no by e-mail. What do you do?',
    [
      'Ask politely what you can do better.',
      'Write back that they made a mistake.',
      'Stop applying: it does not work.',
    ],
    'Feedback helps you in your next interview. A polite question also leaves a good picture of you.',
    NONE,
  ),
  // Wonen en papieren: residence papers (rights: ADVICE_LINE).
  // ⚖️ check: From the EU: you may live and work here with a valid passport or ID card, without a
  // permit ⚖️ (Vreemdelingenwet 2000 art. 8 onder e and Vreemdelingenbesluit 2000 art. 8.7 ff.: free
  // movement of EU citizens, Richtlijn 2004/38/EG; no work permit, Wav art. 3 lid 1 onder a; since 2014
  // no IND sticker or registration for EU citizens; ind.nl "EU-burger". The tip says "the EU": EEA and
  // Switzerland are left out on purpose. Registering at the gemeente is in c.bsn).
  // ⚖️ check: From outside the EU: you need a valid residence permit; on the card it says if you may
  // work ⚖️ (Vreemdelingenwet 2000 art. 8; Wav art. 2 and 3; the card says "arbeid vrij toegestaan,
  // TWV niet vereist" or "arbeid toegestaan ..." or "TWV vereist"; ind.nl "aantekening arbeidsmarkt").
  // ⚖️ check: Apply for a new permit at the IND in time, months before the date ⚖️ (ind.nl: apply
  // for an extension in time, the IND sends a letter about 3 months before the end date; no number in
  // the tip; an application in time keeps the right to work while it is decided, Vreemdelingenbesluit
  // art. 3.80 and Wav; "months before" is advice).
  tipFor(
    'residence',
    '📇',
    'Your papers: check the date',
    'From the EU? Then you may live and work here with a valid passport or ID card: you do not need a permit. From outside the EU? Then you need a valid residence permit. On the card it says if you may work. Check the expiry date of your papers. Apply for a new permit at the IND in time: months before the date, not in the last week. Keep a copy of every letter.',
    ['Mijn vergunning verloopt bijna. Wat moet ik doen?', 'My permit expires soon. What must I do?'],
    'Your residence permit expires in two months. You are very busy at work. What do you do?',
    [
      'Apply for a new one now.',
      'Wait until the last week.',
      'Do nothing: work comes first.',
    ],
    'Without a valid permit, you may not be allowed to work. A new permit takes time, so you start early.',
    ADVICE_LINE,
  ),
  // Moving house: what to do, the same in Belgium (no number of days: c.bsn has the Dutch term).
  tipFor(
    'newhome',
    '📪',
    'New address? Tell everyone',
    'Moving? Tell the gemeente your new address quickly: you must do that. Also tell your employer, your bank, your insurance and your doctor. Put your name on the letterbox, or letters do not reach you. On moving day, write down the meter readings and take photos of them. Then you only pay for what you used.',
    ['Ik ben verhuisd. Dit is mijn nieuwe adres.', 'I have moved. This is my new address.'],
    'You moved two weeks ago. Your letters still go to your old address. What do you do?',
    [
      'Give your new address to the gemeente now.',
      'Wait: the post will find you.',
      'Ask your old neighbour to keep your letters.',
    ],
    'Important letters, like fines or tax letters, have dates. When they go to the wrong address, you can miss them.',
    NONE,
  ),
  // Loon: the parts of the payslip (ADVICE_LINE).
  // ⚖️ check: The payslip shows the period, the gross pay, the hours and extra pay, what comes off
  // (tax and premiums) and the net pay ⚖️ (BW 7:626 lid 1 and 2: a written statement with the gross
  // amount, the parts of the pay, the amounts taken off, the net amount, the period, the minimum wage
  // that applies and the agreed hours; the staff number is not in the law, so "your name, your staff
  // number" is what payslips usually show).
  // ⚖️ check: In many jobs, you and your employer both pay for your pension; you see your part on the
  // payslip ⚖️ (no general duty for an employer to offer a pension; a mandatory sector pension fund,
  // Wet verplichte deelneming in een bedrijfstakpensioenfonds 2000, covers most workers; the share of
  // the worker differs per fund: "in many jobs"; Pensioenwet art. 38: a yearly pension statement (UPO)).
  // ⚖️ check: You usually keep your pension when you change jobs ⚖️ (Pensioenwet: built-up rights stay
  // with the fund (premievrije aanspraak) or go with you (waardeoverdracht, art. 70-71); very small
  // pensions can end (art. 66-67): "usually").
  tipFor(
    'payparts',
    '🧮',
    'Read every line',
    'Your payslip has many lines and short words. At the top: your name, your staff number and the period. Then your gross pay, your hours and any extra pay. Then what comes off: tax and premiums. In many jobs, you and your employer both pay for your pension: you see your part on your payslip. At the bottom: your net pay. Do not understand a line? Ask your employer to explain it. Keep all your payslips.',
    ['Wat betekent deze regel op mijn loonstrook?', 'What does this line on my payslip mean?'],
    'On your payslip, money goes to "pensioen". You do not know why. What do you do?',
    [
      'Ask your employer to explain it.',
      'Ask to stop it, to get more money now.',
      'Ignore it: you will not stay that long.',
    ],
    'Pension money is saved for you, for later. You usually keep it when you change jobs. Asking helps you know what is yours.',
    ADVICE_LINE,
  ),
  // Late, missing or cash pay (ABUSE_LINE: the employer may be the problem).
  // ⚖️ check: Your pay must come on the day in your contract or cao ⚖️ (BW 7:623: the pay is due at the
  // agreed times, at the end of the period it is for; BW 7:625: a legal increase (wettelijke verhoging)
  // when it is late; the tip names no increase and no number).
  // ⚖️ check: Pay in cash without a payslip is often off the books: your hours are not registered, and
  // later it is hard to prove your work or get a benefit ⚖️ (the employer must give a payslip, BW 7:626;
  // and report the pay to the Belastingdienst (loonaangifte, Wet op de loonbelasting 1964 art. 28), on
  // which UWV bases the insured pay for a WW or ZW benefit (polisadministratie); a worker off the books
  // keeps the rights of an employment contract (BW 7:610), but must prove the work: "hard to prove";
  // cash pay itself is not forbidden, so "often off the books").
  tipFor(
    'latepay',
    '💵',
    'Late or cash pay? Act in time',
    'Your pay must come on the day in your contract or cao. Is it late, or is money missing? Ask about it in writing, for example in an e-mail. Keep your bank statements and your own list of hours. Paid in cash, without a payslip? Then it is often off the books (zwart): your hours are not registered, and later it is hard to prove your work or to get a benefit. Ask for a payslip.',
    ['Mijn loon is nog niet binnen. Wanneer komt het?', 'My pay has not come in yet. When will it come?'],
    'Your boss says: "From now on I pay you in cash. No payslip, that is easier." What do you do?',
    [
      'Say no, and ask for a payslip.',
      'Say yes: cash is more money.',
      'Say yes, but only this month.',
    ],
    'Without a payslip, your work is not on paper. Then you can lose rights, for example to a benefit when you lose your job.',
    ABUSE_LINE,
  ),
  // Verlof: planning your holiday (ADVICE_LINE).
  // ⚖️ check: Your legal days off expire 6 months after the end of the year, unless you could not take
  // them ⚖️ (BW 7:640a: the statutory days (wettelijke vakantiedagen) lapse six months after the last
  // day of the calendar year in which they were built up, unless the worker could reasonably not take
  // them; since 1 January 2012).
  // ⚖️ check: Extra days from your cao or contract stay valid longer, usually 5 years ⚖️ (BW 7:642: the
  // extra days (bovenwettelijke dagen) lapse after five years; a cao may say otherwise: "usually").
  // ⚖️ check: Does your job end? Then you get money for the days you did not take ⚖️ (BW 7:641 lid 1:
  // the remaining days are paid out at the end of the employment; the eindafrekening, c.jobends).
  // ⚖️ check: The balance is often on the payslip or in the app (no law: practice).
  tipFor(
    'holiday',
    '☀️',
    'Your days off: use them in time',
    'Check how many days off you still have: often it is on your payslip or in the app. Plan your holiday early, and ask in writing. Your legal days off expire 6 months after the end of the year, unless you could not take them. Extra days from your cao or contract stay valid longer, usually 5 years. Does your job end? Then you get money for the days you did not take.',
    ['Ik wil mijn vakantiedagen dit jaar nog opnemen.', 'I want to take my days off this year.'],
    'It is November. You still have 12 days off from this year. Your supervisor says nothing about it. What do you do?',
    [
      'Ask when you can take them.',
      'Do nothing: they stay forever.',
      'Forget them: they are gone now.',
    ],
    'Days off are for rest, and they can expire. When you ask in time, you can still plan them.',
    ADVICE_LINE,
  ),
  // Special days off (ADVICE_LINE).
  // ⚖️ check: The partner gets 1 week of birth leave with pay, in the first 4 weeks after the birth ⚖️
  // (Wet arbeid en zorg art. 4:2: geboorteverlof of once the weekly working hours, with full pay, within
  // four weeks after the birth; the extra birth leave of up to five weeks with a UWV benefit, art. 4:2a,
  // is left out of the tip on purpose).
  // ⚖️ check: The cao often gives special leave (bijzonder verlof) for your wedding or a funeral in your
  // family ⚖️ (no general law: cao's and company rules; the short leave of Wet arbeid en zorg art. 4:1
  // (kort verzuimverlof) covers "very special personal circumstances", such as a death in the family:
  // the tip only says "often", and the why says to ask).
  // ⚖️ check: Public holidays: no law says you are free; your contract or cao says if you are free or get
  // extra pay ⚖️ (there is no legal right to a day off on a public holiday in the Netherlands; the
  // Algemene termijnenwet is about deadlines, not work; cao's often give it: rijksoverheid.nl
  // "feestdagen").
  tipFor(
    'special',
    '💒',
    'A wedding, a funeral, a baby',
    'Is your baby born, and are you the partner? Then you get 1 week of birth leave with pay, in the first 4 weeks. Your cao often gives special leave (bijzonder verlof) for your wedding, or for a funeral in your family. Public holidays, like Christmas: no law says you are free. Your contract or cao says if you are free, or if you get extra pay. Ask for your days off in time.',
    ['Mijn vrouw krijgt een baby. Hoe vraag ik geboorteverlof aan?', 'My wife is having a baby. How do I ask for birth leave?'],
    'Your father has died abroad. You want to go to the funeral. What do you do?',
    [
      'Tell your employer, and ask what leave you can get.',
      'Just go, and tell them when you are back.',
      'Do not go: you have no days off left.',
    ],
    'Your employer understands that this is very important. Many cao’s give special leave, and you can also use your days off.',
    ADVICE_LINE,
  ),
  // Ziekte: unwell at work or on holiday (ADVICE_LINE).
  // ⚖️ check: Sick at work: tell your supervisor before you go home; that is your sick report (no law:
  // the company's rules for reporting sick, the same as c.sick).
  // ⚖️ check: Sick during your holiday: report it the same way, also from abroad; then the sick days
  // usually do not count as days off ⚖️ (BW 7:637 lid 1: days of illness during a holiday do not count
  // as holiday, unless agreed in writing for the extra days only, lid 2: "usually"; the report follows
  // the company's rules (verzuimreglement)).
  // ⚖️ check: You may need a note from a doctor there ⚖️ (no general duty; the employer may ask for
  // proof of the illness abroad under the verzuimreglement: "may").
  tipFor(
    'unwell',
    '🤧',
    'Sick at work, or on holiday',
    'Do you feel sick at work? Tell your supervisor before you go home: that is your sick report. Do not just leave. Did you get sick during your holiday? Report it to your employer the same way as at home, also from abroad. Then the sick days usually do not count as days off. You may need a note from a doctor there.',
    ['Ik ben ziek geworden op vakantie.', 'I got sick on holiday.'],
    'You are on holiday in your home country. You get the flu and stay in bed for 5 days. What do you do?',
    [
      'Report it to your employer right away.',
      'Nothing: you are on holiday anyway.',
      'Tell your employer when you are back.',
    ],
    'When you report it in time, the sick days usually do not count as days off. Then you can still use those days later.',
    ADVICE_LINE,
  ),
  // Hurt by your work (ADVICE_LINE).
  // ⚖️ check: Ask for a copy of the accident report (no law gives the worker a copy; the Arbowet art. 9
  // lid 2 asks the employer to keep a list of accidents: the tip says "ask").
  // ⚖️ check: Hurt because the work was not safe? Then your employer usually must pay for your damage;
  // you do not have to prove that it was their fault: the employer must show they did enough for your
  // safety ⚖️ (BW 7:658 lid 1 and 2: the employer is liable for damage at work unless it shows it met its
  // duty of care, or that the damage came largely from the worker's own intent or deliberate
  // recklessness; the worker shows the damage came in the course of the work: "usually").
  // ⚖️ check: Ask for advice before you sign anything (advice; a statement of own fault can count later,
  // which is why the why sends the learner to the union or the Juridisch Loket).
  tipFor(
    'injury',
    '🚧',
    'Hurt at work: write it down',
    'Were you hurt at work? Write down what happened, when and where, and who saw it. Take photos, and keep all papers from the doctor. Ask for a copy of the accident report. Were you hurt because the work was not safe? Then your employer usually must pay for your damage. You do not have to prove that it was their fault: the employer must show they did enough for your safety. Ask for advice before you sign anything.',
    ['Mag ik een kopie van het rapport?', 'May I have a copy of the report?'],
    'You hurt your hand at a machine without a guard. Later, your boss asks you to sign a paper: "It was my own fault." What do you do?',
    [
      'Do not sign it. Ask for advice first.',
      'Sign it, so there are no problems.',
      'Sign it, but keep a photo of it.',
    ],
    'What you sign can count later, for example when you ask for compensation. First get advice from the union or the Juridisch Loket.',
    ADVICE_LINE,
  ),
  // Uitbuiting herkennen: a debt that keeps you stuck (ABUSE_LINE).
  // ⚖️ check: In the Netherlands, an agency may not ask you money for finding you a job ⚖️ (Waadi art. 9
  // lid 1: no fee from the worker for placing or for the work; the same as c.findwork).
  // ⚖️ check: A debt that keeps growing, and having to stay until it is paid, is a sign of exploitation
  // ⚖️ (debt bondage is an indicator of labour exploitation and human trafficking: Sr art. 273f;
  // nlarbeidsinspectie.nl "signalen van arbeidsuitbuiting"; CoMensha indicators).
  // ⚖️ check: A debt never means that you must keep working: you may stop ⚖️ (no forced work: Grondwet
  // art. 19 and EVRM art. 4; the worker may end the contract with the notice of BW 7:672; a real debt
  // stays a debt, to be paid apart from the work: the tip says "you may stop", not "you need not pay").
  tipFor(
    'debt',
    '🪙',
    'A debt that never ends',
    'In the Netherlands, an agency may not ask you money for finding you a job. Did you have to borrow money for the trip or for the job, and does the debt keep growing? Must you stay until it is paid? That is a sign of exploitation. A debt never means that you must keep working: you may stop. Keep every paper and message about the debt.',
    ['Hoeveel moet ik nog betalen? Ik wil het op papier.', 'How much do I still have to pay? I want it on paper.'],
    'The agency paid your bus ticket. Now it takes money off your pay every week, and the debt does not get smaller. What do you do?',
    [
      'Ask for a list on paper, and get help.',
      'Work more hours to pay it faster.',
      'Say nothing: the agency helped you.',
    ],
    'A debt that does not get smaller keeps you stuck. With the list, the union or FairWork can check if it is fair.',
    ABUSE_LINE,
  ),
  // The inspection and other help (ABUSE_LINE).
  // ⚖️ check: The Nederlandse Arbeidsinspectie checks if work is safe and fair: pay, hours, exploitation;
  // inspectors may come to your work and talk to workers ⚖️ (Arbowet, Arbeidstijdenwet, Wml, Waadi and
  // Wav: the inspection's supervision; Awb art. 5:15 and 5:16: entry and the right to ask information;
  // nlarbeidsinspectie.nl "wat doet de inspectie").
  // ⚖️ check: They do not tell your boss who reported something ⚖️ (nlarbeidsinspectie.nl/melden: a
  // report is treated confidentially and can be made anonymously; the same as c.gethelp).
  // ⚖️ check: Ask for an interpreter if you need one (advice: the inspection works with interpreters in
  // talks with workers, nlarbeidsinspectie.nl; "ask" keeps it a question).
  // ⚖️ check: FairWork helps victims of exploitation for free, also people without valid papers ⚖️
  // (fairwork.nu: free and confidential help for (undocumented) migrant workers; the same name as in
  // ABUSE_LINE).
  tipFor(
    'inspection',
    '🕵️',
    'The inspection is there for you',
    'The Nederlandse Arbeidsinspectie checks if work is safe and fair: pay, hours and exploitation. Inspectors may come to your work and talk to the workers. You may tell them the truth: they do not tell your boss who reported something. Need help in your own language? Ask for an interpreter. FairWork helps victims of exploitation for free, also people without valid papers.',
    ['Ik wil iets vertellen, maar zonder mijn baas erbij.', 'I want to tell something, but without my boss there.'],
    'An inspector asks about your hours. Your boss told you to say 8 hours. You work 12. What do you do?',
    [
      'Tell the inspector the truth.',
      'Say 8 hours, as your boss said.',
      'Say nothing, and walk away.',
    ],
    'The inspector can only help when they know the truth. What you say helps you, and your colleagues too.',
    ABUSE_LINE,
  ),
  // Naar je werk. No right or amount: the seat belt is the rule everywhere (in the Netherlands RVV 1990
  // art. 59, in Belgium the Wegcode art. 35); the costs of the work van are in c.deductions.
  tipFor(
    'carpool',
    '🪢',
    'In the car: belt on, and agree on the costs',
    'Everyone in the car wears a seat belt, also in the back. The driver needs a valid driving licence, and should not drink alcohol before driving. Too many people in the van, or does the driver drive dangerously? Say it, and do not get in. Carpool with colleagues? Agree first how you share the fuel costs. In the work van of the agency? Ask what it costs you, and get it on paper.',
    ['Er zijn te veel mensen in de bus. Ik stap niet in.', 'There are too many people in the van. I am not getting in.'],
    'The work van has 9 seats. This morning 11 people want to get in. What do you do?',
    [
      'Do not get in, and call your supervisor.',
      'Sit on the floor in the back.',
      'Squeeze in: it is only 20 minutes.',
    ],
    'Without a seat and a belt, a small accident can be very serious. Your employer or agency can find another way.',
    NONE,
  ),
  tipFor(
    'train',
    '🚉',
    'Train late? Send a message at once',
    'Check the journey planner before you leave: trains and buses can be late or cancelled. Is your train late? Send your supervisor a message right away, with the time you will arrive. On days with a storm or works on the line, take an earlier train. After a long delay, you can often get money back: look on the website of the train company.',
    ['Mijn trein heeft vertraging. Ik ben er om negen uur.', 'My train is delayed. I will be there at nine.'],
    'Your train is cancelled. The next one goes in 30 minutes. Your shift starts in 40 minutes. What do you do?',
    [
      'Send a message now that you will be late.',
      'Wait, and explain it when you get there.',
      'Go home: it is not your fault.',
    ],
    'Your supervisor can plan better when they know early. A delay is not your fault, but telling it is your job.',
    NONE,
  ),
  // Je werk afronden: how the work is done (HOUSE_LINE).
  tipFor(
    'checklist',
    '📋',
    'Check it yourself first',
    'Before you say "klaar", check your own work. Use the checklist if there is one, and tick off each step. Look at your work as if you are the customer. Is something not good? Do it again now: that is quicker than later. Not sure? Ask a colleague to look.',
    ['Ik ben klaar. Wil je het even nakijken?', 'I am done. Will you check it for a moment?'],
    'You are done. On the checklist, one step is not ticked off. You think you did it. What do you do?',
    [
      'Check that step again, then tick it off.',
      'Tick it off: you probably did it.',
      'Leave it open: nobody reads the list.',
    ],
    'A checklist only helps when it is true. One more look takes a minute. A mistake can take hours.',
    HOUSE_LINE,
  ),
  tipFor(
    'leavesite',
    '🧹',
    'Leave it as you want to find it',
    'At the end of your work, leave your place clean and safe. Put tools and materials back, and sweep the floor. Switch off the machines and lights you used. Are you the last one? Check the windows and doors, and lock up the way your company says.',
    ['Ik ben de laatste. Moet ik de deur op slot doen?', 'I am the last one. Must I lock the door?'],
    'You are the last one at work. You do not know how to set the alarm. What do you do?',
    [
      'Call your supervisor and ask.',
      'Leave without the alarm: it is late.',
      'Try buttons until it beeps.',
    ],
    'A building without the alarm is not safe. Your supervisor would rather get a call than find a problem tomorrow.',
    HOUSE_LINE,
  ),
  // Stage lopen: how a placement goes; no right or amount ("not always given" says only that there
  // is no allowance everywhere). The rules differ per school, as in c.placement.
  tipFor(
    'stagedays',
    '🏢',
    'A student, and a colleague',
    'At your placement you are there to learn, but you work like a colleague: on time, with the house rules, and you call when you are sick. You may ask a lot of questions: that is why you are there. Your work should help you learn, not only cleaning or carrying all day. Is that not so? Talk to your placement coach at school. A placement allowance is not always given: ask about it before you start. Rules differ per school: ask your placement coach.',
    ['Ik wil dit ook leren. Mag ik meekijken?', 'I want to learn this too. May I watch?'],
    'At your placement you only clean the canteen, every day, for three weeks. What do you do?',
    [
      'Talk about it with your placement coach.',
      'Do it and say nothing: you are a student.',
      'Stay home until they give you other work.',
    ],
    'A placement is for learning your profession. Your coach can talk with the company about better tasks.',
    NONE,
  ),
  tipFor(
    'stageend',
    '💐',
    'End well, and ask for a reference',
    'In the final talk you hear what went well and what can be better. Ask for examples, and write them down for your next job. Did it go well? Ask if you may give their name as a reference. On your last day, thank your colleagues: many people here bring something small to eat, like cake or sweets. Rules differ per school: ask your placement coach.',
    ['Mag ik u als referentie opgeven?', 'May I give your name as a reference?'],
    'It is the last day of your placement. What do you do?',
    [
      'Thank your colleagues, and say goodbye.',
      'Leave quietly, without saying anything.',
      'Ask the company for a present.',
    ],
    'A good goodbye leaves a good picture. Maybe you want to work there later, or you need them as a reference.',
    NONE,
  ),
  // Meedoen in Nederland: social norms (NONE).
  tipFor(
    'neighbours',
    '📚',
    'Say hello to your neighbours',
    'New in a street? Say hello to your neighbours and tell them your name. That makes problems easier to solve later. Work nights, or do you live with many people? Keep it quiet late in the evening and at night. Put your rubbish out on the right day. In the library and the community centre you can often practise Dutch, sometimes for free.',
    ['Hallo, ik ben Ali. Ik woon hiernaast.', 'Hello, I am Ali. I live next door.'],
    'You live with five colleagues. A neighbour says it is often noisy at night. What do you do?',
    [
      'Say sorry, and agree to keep it quiet.',
      'Say that you all work and need to relax.',
      'Say nothing, and close the door.',
    ],
    'A good talk early stops bigger problems. Neighbours who know you are often friendlier and more helpful.',
    NONE,
  ),
  tipFor(
    'join',
    '⚽',
    'Join in: you learn Dutch faster',
    'Outside work, you learn Dutch fastest by doing things with people: sports, a club, or volunteer work. Your child at school? Go to the parents’ evening, also if your Dutch is not perfect: the teacher wants to meet you. You may ask for slow Dutch, or use a translation app. Volunteer work also looks good on your CV.',
    ['Wilt u wat langzamer praten?', 'Would you speak a bit slower?'],
    'You are invited to the parents’ evening. Your Dutch is not good yet. What do you do?',
    [
      'Go, and use simple Dutch or an app.',
      'Do not go: the teacher will not understand you.',
      'Send a short message that you are busy.',
    ],
    'The teacher wants to talk about your child, not about your Dutch. Coming shows that you care.',
    NONE,
  ),
  // Online op je werk: company rules (HOUSE_LINE).
  tipFor(
    'workphotos',
    '📟',
    'Ask first, then post',
    'A photo at work can show more than you think: a customer, a client, a screen or a paper with names. Do not post photos of work online without permission from your employer, and never photos of people without their yes. Customer details stay at work: do not send them to your own phone or e-mail. Sent something by mistake? Tell your supervisor right away.',
    ['Ik vraag eerst toestemming.', 'I will ask for permission first.'],
    'A colleague puts a funny photo of a customer in the team app. What do you do?',
    [
      'Say that it is not okay, and do not share it.',
      'Share it: it is only in the team app.',
      'Like it, but do not share it.',
    ],
    'The customer did not say yes to this photo. Photos in an app can go anywhere, fast. Saying it kindly protects the customer and your colleague.',
    HOUSE_LINE,
  ),
  tipFor(
    'device',
    '💾',
    'Updates yes, strange sticks no',
    'Install the updates on your phone and computer: they close holes that hackers use. Found a USB stick? Do not put it in your computer: give it to the IT department. On a work phone or computer, only install apps that your work allows. On public wifi, do not log in to your bank or your work. Lock your phone with a code.',
    ['Ik heb een usb-stick gevonden. Wat moet ik ermee doen?', 'I found a USB stick. What should I do with it?'],
    'You find a USB stick in the car park. It says "Salaris". What do you do?',
    [
      'Give it to the IT department.',
      'Put it in your computer to see whose it is.',
      'Take it home and look at it there.',
    ],
    'A stick can have a virus on it, also when it looks interesting. The IT department can check it safely.',
    HOUSE_LINE,
  ),
];

/**
 * The tips of "Veiligheid op het werk" (u.safework) and of the VOG lesson of "Werken via een
 * uitzendbureau" (l.vog), 23 November 2026 (src/content/work.ts). The owner's rule: the app does not
 * promise that these lessons get you VCA or prepare you for the exam. c.safetysigns says what VCA is
 * and that these lessons teach some words you meet in safe work and in VCA. Rights (who pays, the
 * VOG): ADVICE_LINE, each claim with a ⚖️ note and the tip a section in docs/juridische-check.md. The
 * other three are how to work safely (HOUSE_LINE: the company's own rules and instructions count),
 * their facts with a ⚖️ note too. No amounts.
 */
const safeworkTips: CultureTip[] = [
  // ⚖️ check: VCA is a safety certificate that many companies ask for ⚖️ (VCA: the checklist and
  // the exams of Stichting Samenwerken voor Veiligheid (SSVV), vca.nl / ssvv.nl; no law: companies
  // with a VCA certificate ask it of their workers, also of agency workers; in Belgium BeSaCC-VCA, besacc-vca.be).
  // ⚖️ check: B-VCA (VCA Basis) for workers, VOL-VCA for a supervisor (operationeel leidinggevende)
  // ⚖️ (SSVV, the diplomas "Basisveiligheid VCA" and "Veiligheid voor Operationeel Leidinggevenden";
  // the same names in Belgium).
  // ⚖️ check: A course, then an exam with multiple-choice questions at a recognised exam centre ⚖️
  // (SSVV: exams only at exam institutes recognised by the SSVV, multiple choice; the course itself
  // is not required by the SSVV: "you do a course" is the usual way, check).
  // ⚖️ check: The exam can be taken in several languages, for example English or Polish ⚖️ (ssvv.nl:
  // B-VCA in several languages besides Dutch; the list differs per exam centre and changes, so the
  // tip says "ask the exam centre"; check that English and Polish are on it in November 2026).
  // ⚖️ check: The diploma is valid for 10 years ⚖️ (SSVV: B-VCA and VOL-VCA diplomas, 10 years;
  // BeSaCC-VCA the same; check).
  // ⚖️ check: Often the employer or the agency pays ⚖️ (no law: practice; "often" on purpose).
  // ⚖️ check: An agency may not take just any cost off your pay ⚖️ (NL: WML art. 13, from the
  // minimum wage only rent and health insurance, see c.deductions; a cost you agreed to may come
  // off pay above the minimum wage, hence "just any"; training costs: the uitzend-cao and BW 7:611a
  // (no study-cost clause for training the law or the cao requires); Belgium: Loonbeschermingswet
  // art. 23 limits deductions too).
  tipFor(
    'safetysigns',
    '🪧',
    'What is VCA?',
    'VCA is a safety certificate. Many companies, also through an agency, ask for it, for example in construction and industry. Most workers do B-VCA (VCA Basis); a supervisor does VOL-VCA. You do a course, and an exam with multiple-choice questions at a recognised exam centre. You can often do the exam in several languages, for example English or Polish: ask the exam centre. The diploma is valid for 10 years. Often the employer or the agency pays: ask before you pay yourself. An agency may not take just any cost off your pay (see the topic about agency work). In these lessons you learn some words that you meet in safe work and in VCA. For VCA you do a course and an exam.',
    ['Wie betaalt de VCA-cursus?', 'Who pays for the VCA course?'],
    'An agency says: "You need VCA. You pay the course, or we take it off your pay." What do you do?',
    [
      'Ask who pays, and get it in writing.',
      'Pay right away, so you get the job.',
      'Say nothing, and sign.',
    ],
    'Often the employer or the agency pays for VCA. If you must pay something, you want to know it before, on paper.',
    ADVICE_LINE,
  ),
  // ⚖️ check: The red diamond with a picture is the hazard pictogram on the label ⚖️ (CLP-verordening
  // (EG) nr. 1272/2008, art. 17 and 19 and bijlage V: the GHS pictograms, a black symbol in a red
  // diamond; the same in the whole EU, Belgium too).
  // ⚖️ check: The label and the safety data sheet say how to work safely and what to do in an
  // accident ⚖️ (CLP art. 17 and 22: hazard and safety statements on the label; REACH (EG) nr.
  // 1907/2006 art. 31 and bijlage II: the veiligheidsinformatieblad; Arbobesluit art. 4.2 and 4.3:
  // the employer informs workers about dangerous substances).
  // Never in a drinks bottle, no eating, drinking or smoking, washing hands: Arbobesluit art. 4.4 and
  // 4.7 (hygiene measures) and the safety data sheet; how it goes in a company: HOUSE_LINE.
  tipFor(
    'substances',
    '😷',
    'Read the label, then work',
    'A dangerous product has a red diamond on the label, with a black picture in it: the hazard symbol. The picture shows the danger, for example fire, poison, or a product that burns your skin. The label and the safety data sheet (veiligheidsblad) say how to work with it safely, and what to do if something goes wrong. Wear what they say: gloves, safety glasses or a mask. Close the cap, and put the product away in its own place. Never pour it into a drinks bottle: someone can drink it. Do not eat, drink or smoke while you work with it, and wash your hands afterwards.',
    ['Waar is het veiligheidsblad van dit middel?', 'Where is the safety data sheet for this product?'],
    'A colleague pours a cleaning product into an empty water bottle, to take it with him. What do you do?',
    [
      'Say it is dangerous: someone can drink it.',
      'Nothing: it is his own bottle.',
      'Put a small sticker on the bottle.',
    ],
    'In a drinks bottle, a product looks like water or lemonade. Someone can drink it by mistake. A product stays in its own packaging, with the label.',
    HOUSE_LINE,
  ),
  // ⚖️ check: Fire needs fuel, air (oxygen) and heat ⚖️ (the fire triangle; brandweer.nl, "Hoe
  // ontstaat brand"; VCA exam subject "brand en explosie").
  // ⚖️ check: Never water on burning oil or fat, or on electrical things ⚖️ (brandweer.nl:
  // "vlam in de pan": never water, a lid or a fire blanket; electricity: no water).
  // ⚖️ check: The fire extinguisher says what it is for; foam and powder work on many fires, CO2 is
  // good for electrical fires ⚖️ (NEN-EN 3-7: the label with the fire classes A, B, C, F; NEN-EN 2;
  // brandweer.nl "Brandblusser"; powder ABC, foam A and B, CO2 B and electrical equipment).
  // ⚖️ check: Only a small fire yourself, and only when it is safe; else go out, close the door, raise
  // the alarm ⚖️ (brandweer.nl; the company's BHV plan, Arbowet art. 15; HOUSE_LINE).
  tipFor(
    'firefight',
    '🧣',
    'Small fire or big fire?',
    'Fire needs three things: fuel, air and heat. This is the fire triangle. Take one away, and the fire goes out. A fire blanket takes away the air. Water takes away the heat, but never use water on burning oil or fat, or on electrical things. Look at the fire extinguisher: it says what it is for. Foam and powder work on many fires; CO2 is good for electrical fires. Keep sparks and open fire away from products that burn easily. Only put out a small fire yourself, and only when it is safe. Is it bigger? Go out, close the door behind you, and raise the alarm.',
    ['Waar hangt de blusdeken?', 'Where is the fire blanket?'],
    'Oil in a pan catches fire in the canteen. The flames are still small. What do you do?',
    [
      'Put the fire blanket over the pan.',
      'Throw a glass of water on it.',
      'Carry the pan outside.',
    ],
    'Water on burning oil makes a big ball of fire. The blanket takes away the air, and the fire goes out. Turn off the heat if you can.',
    HOUSE_LINE,
  ),
  // ⚖️ check: For dangerous work the company often uses a permit to work (werkvergunning) that says
  // the work, the place, the dangers and the measures ⚖️ (no general law: the VCA checklist asks for a
  // werkvergunningensysteem; Arbobesluit art. 3.5g and the RI&E for dangerous work; "often" on purpose).
  // ⚖️ check: In a confined space there can be too little air or a dangerous gas: first a gas test,
  // and someone stays outside (the mangatwacht) ⚖️ (Arbobesluit art. 3.5g (besloten ruimten) and 4.1;
  // Arbocatalogi, nlarbeidsinspectie.nl "Besloten ruimten").
  // ⚖️ check: Do not go in to save someone without protection ⚖️ (nlarbeidsinspectie.nl: many deaths in
  // confined spaces are rescuers; advice).
  // ⚖️ check: With a crane one person gives the signs, and nobody stands under a hanging load ⚖️
  // (Arbobesluit art. 7.20 and 7.23d; the hand signals of bijlage XXI / EU-richtlijn 92/58/EEG,
  // bijlage IX; the same in Belgium).
  tipFor(
    'permitwork',
    '📋',
    'Dangerous work: first the permit',
    'For dangerous work, like welding near things that burn, or work in a tank or a pit, the company often uses a permit to work (werkvergunning). This is a safety paper, not your residence or work papers. It says what you do, where, which dangers there are, and what to do about them. Read it, and only start when it is signed. In a confined space there can be too little air or a dangerous gas: first a gas test, and a hole watch stays outside. Is someone in trouble inside? Raise the alarm: never go in without protection. With a crane, one person gives the signs: the banksman. Never stand under a hanging load.',
    ['Is de werkvergunning al getekend?', 'Is the permit to work signed yet?'],
    'Your colleague in a tank does not answer. You are the hole watch. What do you do?',
    [
      'Raise the alarm, and stay outside.',
      'Climb in quickly to help him.',
      'Wait a few minutes, then look.',
    ],
    'The gas that hurt your colleague can hurt you too. Many victims in tanks were helpers. After the alarm, help with protection comes.',
    HOUSE_LINE,
  ),
  // The VOG (u.uitzend, l.vog). Rights: ADVICE_LINE. More in docs/juridische-check.md ("c.vog").
  // ⚖️ check: For some jobs the employer or the agency asks for a VOG, a statement from the government
  // that your past is no problem for this job ⚖️ (Wet justitiële en strafvorderlijke gegevens art. 28
  // e.v.: the Verklaring Omtrent het Gedrag, given by the Minister of Justice and Security through
  // Justis; justis.nl; the check looks only at crimes that matter for the job (screeningsprofiel)).
  // ⚖️ check: In care, child care and security work you almost always need one ⚖️ (Wkkgz art. 4 lid 1
  // onder c (care); Wet kinderopvang art. 1.50 lid 2 (child care, with the personenregister); Wpbr
  // art. 7 (security: the beveiligerspas after a screening by the police, korpschef)).
  // ⚖️ check: Usually the employer starts the request online, you get an e-mail, and you finish it
  // with DigiD and pay ⚖️ (justis.nl "VOG online aanvragen": the organisation starts, the applicant
  // gets an e-mail with a link, logs in with DigiD and pays; without DigiD: on paper at the gemeente).
  // ⚖️ check: Often the employer pays it back; for volunteers who work with children or vulnerable
  // people it is often free ⚖️ (no law that the employer pays; some cao's say it, e.g. cao
  // Kinderopvang; the Gratis VOG regeling for volunteer organisations, justis.nl / rijksoverheid.nl;
  // no amount on purpose).
  // ⚖️ check: A record does not always mean no VOG: Justis looks at what matters for this job ⚖️
  // (Wjsg art. 35: the risk for society for the purpose of the request; the Beleidsregels VOG).
  // ⚖️ check: Doubt? Ask the Juridisch Loket ⚖️ (juridischloket.nl, free; the closing line too).
  tipFor(
    'vog',
    '📁',
    'The VOG: a check of your past',
    'For some jobs, the agency or the employer asks for a VOG (Verklaring Omtrent het Gedrag). It is a paper from the government: it says that your past is no problem for this job. In care, child care and security work you almost always need one. Usually the employer starts the request online. You get an e-mail from Justis, and you finish it with DigiD and pay. Ask first who pays: often the employer pays it back. For volunteers who work with children or vulnerable people it is often free. Do you have a record? That does not always mean no VOG: Justis looks at what matters for this job. Not sure? Ask the Juridisch Loket.',
    ['Moet ik de VOG zelf betalen?', 'Must I pay for the VOG myself?'],
    'Your new job in a care home asks for a VOG. Years ago, you had a problem with the police. What do you do?',
    [
      'Apply, and ask the Juridisch Loket if you are worried.',
      'Do not apply: you will never get it.',
      'Say you have no time, and look for other work.',
    ],
    'Justis only looks at what matters for the job. Many people with something in their past still get a VOG. Advice helps if you are not sure.',
    ADVICE_LINE,
  ),
];

/**
 * The tips of "Operator in de procesindustrie" (u.process, the fourth own unit of Productie,
 * 23 November 2026, src/content/work.ts processUnit). Three are about how the work is done safely
 * (HOUSE_LINE: the round, the lock and the zones are set per plant); c.shiftwork names the rules for
 * night work in the law and the cao only in general, and closes with ADVICE_LINE (its own section in
 * docs/juridische-check.md). Every safety fact has a ⚖️ note; the overview with sources is the section
 * "Operator in de procesindustrie" in docs/juridische-check.md. No amounts, limits or hours.
 */
const processTips: CultureTip[] = [
  // How often the round goes, and where the values are written, differ per plant: HOUSE_LINE.
  // ⚖️ check: Never switch off or ignore an alarm without knowing why it went ⚖️ (no law as such:
  // the company's work instructions and the RI&E, Arbowet art. 5; good practice in the process
  // industry (alarm management, EEMUA 191 / NEN-EN-IEC 62682); "never" is advice, not a law).
  tipFor(
    'plantround',
    '🎛️',
    'Walk your round, write it down',
    'A plant that runs day and night needs eyes and ears. On your round you look, listen and smell: a new noise, a leak or a strange smell can be the first sign of a problem. You read the meters: the temperature, the pressure, the speed and the level. Write every value down right away, with the time, on the list or in the system. Not later, from memory. Is a value too high or too low? Tell the control room or your shift leader at once. An alarm on the screen is never "just an alarm": do not switch it off before you know why it went.',
    ['De temperatuur is te hoog.', 'The temperature is too high.'],
    'On your round, the pressure is a bit too high. Your shift almost ends. What do you do?',
    [
      'Tell the control room right away.',
      'Write it down, and tell nobody.',
      'Leave it for the next shift.',
    ],
    'In a plant a small change can grow fast. When the control room knows it early, they can act before something goes wrong.',
    HOUSE_LINE,
  ),
  // How a machine is stopped and locked (lockout) differs per plant: HOUSE_LINE.
  // ⚖️ check: Never reach into a running machine; before work on it, it is stopped and secured so
  // nobody can start it ⚖️ (Arbobesluit art. 7.7 (bedieningssystemen: no unintended start), 7.10
  // and 7.13 (bewegende delen, onderhoud aan een stilstaand arbeidsmiddel); the same articles as
  // r.l.afval in src/content/regels/units/sector2.ts; check the article numbers).
  // ⚖️ check: Everyone who works on the machine puts their own lock on it ⚖️ (no law: the usual
  // lockout-tagout practice (LOTO), a company procedure from the RI&E; "everyone ... their own lock"
  // is the common rule, hence HOUSE_LINE).
  tipFor(
    'plantfault',
    '⏯️',
    'Stop, lock, then repair',
    'When there is a fault, the line stops, and everyone wants it to run again fast. But many accidents happen exactly then. Never reach into a running machine, also not "just for a moment". Call your shift leader or the maintenance department. Before anyone works on the machine, it is stopped and locked, so nobody can start it. Often everyone who works on it puts their own lock on it. Only start up again when every lock is off and your shift leader says it is safe. Start up step by step, the way you learned it.',
    ['Er zit nog een slot op.', 'There is still a lock on it.'],
    'A product is stuck in the machine. The machine still runs. A colleague says: "Pull it out quickly." What do you do?',
    [
      'Do not reach in: call the shift leader.',
      'Pull it out quickly with your hand.',
      'Push it out with a stick while it runs.',
    ],
    'A machine that still runs can move at any moment. A machine that is stopped and locked cannot hurt you.',
    HOUSE_LINE,
  ),
  // Night work: the law and the cao have rules, named in general only (no hours): ADVICE_LINE.
  // More in docs/juridische-check.md ("c.shiftwork").
  // ⚖️ check: Many plants run day and night, every day of the week, with three or five shift teams
  // ⚖️ (no law: the usual shift systems in the process industry (3-ploegendienst, 5-ploegendienst,
  // volcontinu); arboportaal.nl "Nachtwerk en ploegendienst"; "often" on purpose).
  // ⚖️ check: Sleep in a dark and quiet room after a night shift, eat at fixed times ⚖️ (advice:
  // arboportaal.nl "Nachtwerk en ploegendienst", Gezondheidsraad, advies "Werken in nachtdiensten"
  // (2017); no law).
  // ⚖️ check: For night shifts there are extra rules, in the law and often in the cao, for example
  // about rest after your nights ⚖️ (Arbeidstijdenwet art. 5:8: the nachtdienst, its length, the
  // number of night shifts and the rest after a night shift and after a series of night shifts;
  // art. 4:1 (the employer takes the worker's health into account, also in shifts); a cao can set
  // other limits within the law. Belgium: Arbeidswet of 16 March 1971 art. 35-38 and cao nr. 46
  // (night work): rules too, so "in the law" holds there as well).
  // ⚖️ check: Tired people make more mistakes ⚖️ (arboportaal.nl, "Vermoeidheid"; advice).
  tipFor(
    'shiftwork',
    '🌙',
    'Nights: sleep, eat, be on time',
    'Many plants run day and night, every day of the week. You work early, late and night shifts in turn, often in three or five shift teams. After a night shift, sleep in a dark and quiet room, and tell your family when you sleep. Eat at fixed times, and take your own food: at night the canteen is often closed. Be on time for the handover: your colleague is waiting, and the plant may not be left alone. For night shifts there are extra rules, in the law and often in the cao, for example about rest after your nights. Ask what the rules are where you work.',
    ['Wat zijn de regels voor nachtdiensten?', 'What are the rules for night shifts?'],
    'After four nights, your shift leader asks you to work one more night. You are very tired. What do you do?',
    [
      'Say you are very tired, and ask about the rules.',
      'Say yes, and drink a lot of coffee.',
      'Say yes, and sleep a bit in your break.',
    ],
    'Tired people make more mistakes, and in a plant a mistake can be dangerous. There are rules about rest after night shifts.',
    ADVICE_LINE,
  ),
  // Which zones, which clothes and which mask differ per plant: HOUSE_LINE.
  // ⚖️ check: Near a furnace or steam: drink water often, also before you feel thirsty; dizzy or
  // sick: stop, a cool place, tell someone ⚖️ (Arbobesluit art. 6.1 (the employer takes measures
  // against heat); arboportaal.nl "Hittestress" and "Werken bij hitte"; the same advice as c.greensafe).
  // ⚖️ check: Steam and hot metal burn, also when you do not see it ⚖️ (superheated steam is
  // invisible; a pipe can be hot without steam to see; Arbobesluit hoofdstuk 7 (arbeidsmiddelen:
  // hot parts are screened off or marked, the exact article to check) and the RI&E, Arbowet art. 5).
  // ⚖️ check: Dust from clay, sand or stone can hold quartz dust; you do not see it, and it damages
  // your lungs ⚖️ (respirabel kristallijn silica (kwartsstof) is a carcinogenic substance under the
  // Arbobesluit since 2020 (art. 4.11 (check) and the list of kankerverwekkende stoffen en processen,
  // werk met respirabel kristallijn silicastof; EU-richtlijn 2017/2398); it causes silicosis and
  // lung cancer; arboportaal.nl "Kwarts" and nlarbeidsinspectie.nl "Kwartsstof"; no limit value in the tip).
  // ⚖️ check: Use the extraction, wear your dust mask, never blow dust away with compressed air ⚖️
  // (Arbobesluit art. 4.2, 4.4 (the order of measures: at the source and extraction first, a mask
  // last) and 4.17 (carcinogens); nlarbeidsinspectie.nl: no dry sweeping or blowing off with
  // compressed air, but wet cleaning or an industrial vacuum; Arbocatalogi of the branches).
  // ⚖️ check: In some zones dust or vapour can explode; a yellow sign with EX shows it; no sparks or
  // fire there ⚖️ (Arbobesluit art. 3.5a-3.5f (explosieveiligheid: the explosion safety document
  // and the zones); EU-richtlijn 1999/92/EG (ATEX 137) art. 7 and bijlage III: the warning sign
  // "Ex", a yellow triangle with a black edge; the same in Belgium (codex boek III titel 4)).
  // ⚖️ check: Often no normal phone in such a zone ⚖️ (no law that names the phone: equipment in an
  // Ex zone must be suitable for it (ATEX 114, richtlijn 2014/34/EU; Arbobesluit art. 3.5e and
  // bijlage); a normal phone is not, so plants forbid it in the zone; "often", and "ask" on purpose).
  tipFor(
    'heatdust',
    '🥵',
    'Heat, dust and sparks',
    'Near a furnace, a kiln or steam it is very hot. Drink water often, also before you feel thirsty. Wear the heat-protective clothing, and do not touch pipes or parts without gloves: steam and hot metal burn, also when you do not see them. Do you feel dizzy or sick? Stop, go to a cool place and tell someone. Dust from clay, sand or stone can hold quartz dust (kwartsstof). You do not see it, but it damages your lungs. Use the extraction, wear your dust mask, and never blow dust away with compressed air. In some zones, dust or vapour can explode: a yellow sign with EX shows it. There: no sparks, no fire, and often no normal phone. Ask what is allowed in each zone.',
    ['Ik voel me niet goed. Ik ga naar een koele plek.', 'I do not feel well. I am going to a cool place.'],
    'There is fine clay dust on your machine. A colleague says: "Blow it off with the air gun." What do you do?',
    [
      'Clean it wet, or with the vacuum.',
      'Blow it off: it is faster.',
      'Leave it for the next shift.',
    ],
    'Blowing makes the dust fly up, into the air and into your lungs. A wet cloth or a vacuum keeps the dust down.',
    HOUSE_LINE,
  ),
];

/**
 * The tips of the eight new lessons of 26 November 2026 that are in ./work.ts (topEight): debts and
 * tax and allowances (Geld en post), discrimination and the union (Regels en rechten), and the kiln
 * and the mixing hall (Operator in de procesindustrie). The four rights tips close with ADVICE_LINE
 * (c.discrimination: ABUSE_LINE, the employer or a boss may be the problem) and each have a section
 * in docs/juridische-check.md; the two plant tips are about working safely (HOUSE_LINE), with their
 * facts in the section "Acht nieuwe lessen" there. No amounts. The four rights tips are about the
 * Netherlands (BE_LESSON_TODO in src/content/taalBe).
 */
const topEightTips: CultureTip[] = [
  // ⚖️ check: First a reminder (herinnering), then a final reminder (aanmaning) ⚖️ (no law that names
  // them: the usual steps; for a consumer the creditor must send one reminder with 14 days to pay
  // before collection costs may be charged: BW 6:96 lid 6, the "14-dagenbrief"; rijksoverheid.nl
  // "Wanneer mag een schuldeiser een incassobureau inschakelen?").
  // ⚖️ check: Ask for a payment plan (betalingsregeling) ⚖️ (no right to one: you can ask; many
  // creditors offer one; rijksoverheid.nl "schulden"; "ask" on purpose).
  // ⚖️ check: A deurwaarder collects debts, often after a judge has decided; he can take part of your
  // pay, but must always leave you enough to live on ⚖️ (Gerechtsdeurwaarderswet art. 2; executoriale
  // titel: a vonnis, or a dwangbevel of the Belastingdienst or the CJIB without a judge, hence
  // "often"; loonbeslag Rv art. 718 e.v.; beslagvrije voet Rv art. 475b-475e, Wet vereenvoudiging
  // beslagvrije voet, since 1 January 2021; rijksoverheid.nl "beslagvrije voet").
  // ⚖️ check: The gemeente gives free debt help ⚖️ (Wet gemeentelijke schuldhulpverlening art. 2: every
  // gemeente offers schuldhulpverlening to its residents; free of charge in practice;
  // rijksoverheid.nl "schuldhulpverlening"). Geldfit: a free test and help near you (geldfit.nl; the
  // same row as h.geldfit in src/content/regels/help.ts).
  tipFor(
    'debthelp',
    '📮',
    'Open every letter, and ask for help early',
    'Did you not pay a bill in time? Then you first get a reminder (herinnering), and later a final reminder (aanmaning). Before a company may charge you extra costs for this, it must give you 14 days to pay. So open every letter, also when you are afraid of it. Cannot pay all at once? Call or write, and ask for a payment plan (betalingsregeling). A deurwaarder (bailiff) is an official who collects debts, often after a judge has decided. He can, for example, take part of your pay, but he must always leave you enough to live on. Debts? Ask for help early, when they are still small. The gemeente gives free debt help (schuldhulp). On geldfit.nl you can do a free test and find help near you.',
    ['Ik kan niet alles in één keer betalen. Kan ik in delen betalen?', 'I cannot pay everything at once. Can I pay in parts?'],
    'You get a final reminder for your phone bill. You do not have the money this month. What do you do?',
    [
      'Call the company, and ask for a payment plan.',
      'Put the letter away, and wait.',
      'Borrow money quickly with buy now, pay later.',
    ],
    'When you say it in time, the company can often agree on small payments. A letter you put away does not go away: the costs only grow.',
    ADVICE_LINE,
  ),
  // ⚖️ check: The tax return (aangifte inkomstenbelasting) for last year: before 1 May; you can ask for
  // more time (uitstel) ⚖️ (AWR art. 8 en 9 (the term is set by the inspector; check); belastingdienst.nl "Aangifte doen": "voor 1 mei";
  // uitstel aanvragen, belastingdienst.nl; the same date as c.letters and c.letters.a).
  // ⚖️ check: A letter that asks you to do the tax return: then you must ⚖️ (AWR art. 8 lid 1: wie
  // wordt uitgenodigd, is verplicht aangifte te doen). Sometimes you get money back ⚖️ (teruggave:
  // belastingdienst.nl; also without an invitation you may file, for example for a refund).
  // ⚖️ check: The jaaropgave from your employer ⚖️ (the employer gives it every year: Wet op de loonbelasting
  // 1964 and the Uitvoeringsregeling loonbelasting 2011 (check the article); belastingdienst.nl "jaaropgaaf"; in the
  // vooraf ingevulde aangifte the data are often already there).
  // ⚖️ check: Toeslagen are an advance on what you will earn this year; pass on changes right away in
  // Mijn toeslagen; else you may have to pay back ⚖️ (Awir art. 16 (voorschot), art. 25 (wijzigingen
  // doorgeven, binnen 4 weken; no number in the tip), art. 26 (terugvordering); belastingdienst.nl
  // "Ik krijg een voorschotbeschikking", "Waarom moet ik toeslag terugbetalen?", "Wijzigingen
  // doorgeven" via Mijn toeslagen or the app Toeslagen; toeslagen still exist in 2026:
  // belastingdienst.nl "Wat verandert er in 2026 voor uw toeslagen?").
  // ⚖️ check: Must you pay back? You can ask for a payment plan ⚖️ (Awir art. 28 / Invorderingswet;
  // Handvest voor toeslagontvangers 2026: a standard payment plan, and a personal one when that
  // leaves too little to live on; belastingdienst.nl "Betalingsregeling toeslagen").
  // ⚖️ check: Free help: the BelastingTelefoon, a Belastingdienst office by appointment, the library
  // ⚖️ (belastingdienst.nl/hulp "Ik heb hulp nodig bij mijn belastingaangifte": free, by phone or at
  // a place near you, after an appointment through the BelastingTelefoon; rijksoverheid.nl "Kan ik
  // hulp krijgen om online mijn belastingen en toeslagen te regelen?": many libraries help, often at
  // a walk-in hour (Informatiepunt Digitale Overheid)).
  tipFor(
    'taxes',
    '📩',
    'Your tax return and your allowances',
    'The tax return (aangifte) for last year must be done before 1 May. Did you get a letter that asks you to do it? Then you must. Sometimes you get money back. You need the annual statement (jaaropgave) from your employer. No time? You can ask for more time (uitstel). Allowances (toeslagen), like zorgtoeslag and huurtoeslag, are an advance: they depend on what you will earn this year. Do you earn more, or does something else change? Pass it on right away in Mijn toeslagen. If you do not, you may have to pay a lot back later. Must you pay back? You can ask for a payment plan. Free help: the BelastingTelefoon, a Belastingdienst office (make an appointment first) or the library.',
    ['Mijn inkomen is veranderd. Hoe geef ik dat door?', 'My income has changed. How do I pass that on?'],
    'You get a new job and earn more each month. You get huurtoeslag. What do you do?',
    [
      'Pass on your new income in Mijn toeslagen.',
      'Wait until the Belastingdienst asks.',
      'Stop paying your rent.',
    ],
    'Your allowance is based on what you earn. When you pass on the change in time, you get the right amount, and you do not have to pay a lot back later.',
    ADVICE_LINE,
  ),
  // ⚖️ check: Discrimination: being treated differently or worse because of who you are: origin, skin
  // colour, religion, gender, age, a disability or who you love ⚖️ (Grondwet art. 1; Algemene wet
  // gelijke behandeling art. 1 en 5 (godsdienst, levensovertuiging, ras, geslacht, nationaliteit,
  // seksuele gerichtheid, ...); Wet gelijke behandeling op grond van leeftijd bij de arbeid; Wet
  // gelijke behandeling op grond van handicap of chronische ziekte; mensenrechten.nl).
  // ⚖️ check: Intimidation, for example unwanted touching, sexual remarks, threats or calling names; not
  // allowed at work ⚖️ (Arbowet art. 1 lid 3 onder e en art. 3 lid 2: psychosociale arbeidsbelasting,
  // ongewenste omgangsvormen (seksuele intimidatie, agressie en geweld, pesten, discriminatie); AWGB
  // art. 1a (seksuele intimidatie); nlarbeidsinspectie.nl "Ongewenst gedrag").
  // ⚖️ check: The vertrouwenspersoon, if your company has one ⚖️ (not compulsory in November 2026: the
  // initiatiefwet 35592 "verplichtstelling vertrouwenspersoon" passed the Tweede Kamer on 23 May 2023
  // and is still before the Eerste Kamer (eerstekamer.nl/wetsvoorstel/35592); the same "if your
  // company has one" as c.respect and c.boundaries).
  // ⚖️ check: The anti-discrimination service in your town helps for free (discriminatie.nl) ⚖️ (Wet
  // gemeentelijke antidiscriminatievoorzieningen art. 1 en 2: every gemeente gives access to one;
  // the same row as h.discriminatie in src/content/regels/help.ts).
  // ⚖️ check: The College voor de Rechten van de Mens can give a judgement, for free ⚖️ (Wet College
  // voor de rechten van de mens art. 10 en 13; mensenrechten.nl "Oordeel aanvragen": free, no lawyer
  // needed; the judgement is not binding, the tip says only "a judgement").
  // ⚖️ check: Violence or a threat: the police; in danger 112 ⚖️ (Sr art. 285 (bedreiging) and 300
  // (mishandeling); politie.nl "aangifte doen"; 112 for danger now).
  // ⚖️ check: You may say no, also to your boss ⚖️ (advice; no instruction to accept unwanted behaviour
  // can be lawful: BW 7:611 goed werkgeverschap, Arbowet art. 3 lid 2; "may say no" is about
  // unwanted behaviour, as the tip says).
  tipFor(
    'discrimination',
    '📣',
    'Treated unfairly? It is not your fault',
    'Discrimination is when you are treated differently or worse because of who you are: your origin, skin colour, religion, gender, age, a disability or who you love. Intimidation is, for example, unwanted touching, sexual remarks, threats or calling you names. Both are not allowed at work, and it is never your fault. You may say no, also to your boss. Write down what happened, when, and who saw it. Talk to your supervisor, or to the vertrouwenspersoon if your company has one. Outside your work, the anti-discrimination service in your town helps for free (discriminatie.nl). The College voor de Rechten van de Mens can give a judgement, also for free. Violence or a threat? Go to the police. In danger: call 112.',
    ['Ik wil iets melden. Kan ik in vertrouwen met u praten?', 'I want to report something. Can I talk to you in confidence?'],
    'A colleague often calls you names because of where you come from. Others laugh. What do you do?',
    [
      'Write it down, and tell someone you trust.',
      'Say nothing: it is part of the job.',
      'Quit, and tell nobody why.',
    ],
    'Calling names because of your origin is discrimination, and it is not allowed. When you write it down and talk about it, someone can help you make it stop.',
    ABUSE_LINE,
  ),
  // ⚖️ check: A union (for example FNV or CNV) makes the cao with employers ⚖️ (Wet op de cao art. 1;
  // fnv.nl, cnv.nl; the same names as h.vakbond).
  // ⚖️ check: Many cao's count for everyone in a sector, also when you are not a member ⚖️ (Wet AVV:
  // algemeen verbindend verklaring by the minister; and an employer bound by a cao usually applies
  // it to all workers (Wet op de cao art. 14); rijksoverheid.nl "cao"; "many" on purpose).
  // ⚖️ check: Members pay a fee (contributie) and get advice and help; often only with a problem that
  // starts after you join ⚖️ (no law: the statutes of the unions; fnv.nl "juridische hulp": help with
  // a problem that arose after the start of your membership; "often" on purpose).
  // ⚖️ check: Joining is your choice; your employer may not punish you for it ⚖️ (freedom of
  // association: Grondwet art. 8, EVRM art. 11, ESH art. 5, ILO-verdragen 87 en 98; opzegverbod
  // wegens lidmaatschap van een vakvereniging: BW 7:670 lid 5).
  // ⚖️ check: A company with 50 or more workers must have a works council (OR), chosen by the workers
  // ⚖️ (WOR art. 2 lid 1 (50 or more persons), art. 6 en 9 (elections)); it talks with the director
  // about, for example, working hours and safety ⚖️ (WOR art. 24, 27 lid 1 onder b (arbeids- en
  // rusttijden) en onder d (arbo)); a smaller company can have a personeelsvertegenwoordiging ⚖️
  // (WOR art. 35b en 35c: 10 to 50 workers, voluntary, or compulsory when most workers ask for it;
  // "can" on purpose).
  tipFor(
    'union',
    '🗳️',
    'Together you stand stronger',
    'A union (vakbond), for example FNV or CNV, stands up for workers. It makes agreements with employers about pay and work: the cao. Many cao’s count for everyone in a sector, also when you are not a member. Members pay a fee (contributie) every month, and get advice and help, for example with a problem about pay or dismissal. Join in time: often the union only helps with a problem that starts after you join. Joining is your own choice, and your employer may not punish you for it. A company with 50 or more workers must have a works council (ondernemingsraad, OR): colleagues chosen by the workers. The OR talks with the director about, for example, working hours and safety. A smaller company can have a staff council (personeelsvertegenwoordiging). Questions? Ask a colleague in the OR.',
    ['Ik heb een vraag over de nieuwe roosters. Kan de OR daar iets mee?', 'I have a question about the new rosters. Can the OR do something with it?'],
    'Your company plans many more evening shifts. Many colleagues are unhappy. What can you do?',
    [
      'Ask a colleague in the OR about it.',
      'Stop coming in the evening.',
      'Say nothing: nothing can change.',
    ],
    'The OR has a say in rules about working hours. It can talk about them with the director, for all the workers together.',
    ADVICE_LINE,
  ),
  // How the press, the kiln and the sorting are done differs per plant: HOUSE_LINE.
  // ⚖️ check: Products from the kiln must cool down; do not touch them hot, or wear heat-resistant gloves
  // ⚖️ (Arbobesluit hoofdstuk 7 (hot parts) and 8.1 (PBM); the RI&E, Arbowet art. 5).
  // ⚖️ check: Glass and broken tiles are sharp: cut-resistant gloves, arm guards and safety glasses ⚖️
  // (Arbobesluit art. 8.1 en 8.2: PBM where the risk cannot be removed otherwise, given by the
  // employer; the Arbocatalogus of the glass and ceramics branches; which PBM: per plant).
  // ⚖️ check: Never catch a falling plate: step back ⚖️ (no law: the usual safety instruction in glass
  // handling, in the arbocatalogus of the glass branch and the company's work instructions; check).
  // ⚖️ check: Shards with a brush and dustpan, in the right bin ⚖️ (advice: the RI&E and the company's
  // waste rules).
  // ⚖️ check: Glaze and dust can hold harmful substances: wash your hands before you eat ⚖️ (glazes can
  // hold lead or other metals and quartz; Arbobesluit art. 4.2 and the hygiene measures of the RI&E (no eating
  // where you work with dangerous substances; check the article); arboportaal.nl "Gevaarlijke stoffen"; the quartz dust itself is
  // in c.heatdust).
  // ⚖️ check: At the press, never reach in while it runs ⚖️ (Arbobesluit art. 7.7 en 7.10, as c.plantfault).
  tipFor(
    'kiln',
    '🦾',
    'Sharp, hot and heavy',
    'In a tile or glass plant, the products are pressed into a shape, get a glaze, and go slowly through a long kiln. After the kiln they must cool down: do not touch them while they are hot, or wear heat-resistant gloves. Glass and broken tiles are very sharp. Wear cut-resistant gloves, arm guards and safety glasses. Never catch a falling glass plate: step back. Pick up shards with a brush and dustpan, never with your hands, and put them in the right bin. Glaze and dust can hold harmful substances: wash your hands before you eat or drink. At the press, never reach in while it runs.',
    ['Pas op, scherven! Ik haal stoffer en blik.', 'Watch out, shards! I will get a brush and dustpan.'],
    'A glass plate slips out of the rack and starts to fall. What do you do?',
    [
      'Step back, and let it fall.',
      'Catch it with your hands.',
      'Stop it with your leg.',
    ],
    'A falling plate can cut very deep, also through gloves. A broken plate only costs money.',
    HOUSE_LINE,
  ),
  // The recipe, the batch numbers and the PBM differ per plant: HOUSE_LINE.
  // ⚖️ check: Weigh exactly, write down what you added with the batch number; not sure: ask ⚖️ (no law
  // as such: the quality system of the plant (GMP, ISO 9001) and, in food, traceability: Verordening
  // (EG) 178/2002 art. 18 and HACCP (Verordening (EG) 852/2004 art. 5); "ask, do not guess" is advice).
  // ⚖️ check: Read the label of a drum or a bag: what is in it, the batch number and the danger signs ⚖️
  // (CLP: Verordening (EG) 1272/2008 art. 17 en 18 (the label with the hazard pictograms); Arbobesluit
  // art. 4.2a; the same pictograms as c.substances).
  // ⚖️ check: Never put something in a drum or a bag that does not belong in it ⚖️ (advice: mixing
  // substances can react (c.cleansafe, c.substances); the RI&E).
  // ⚖️ check: Powder and vapour can be harmful: extraction, and the PBM that is needed ⚖️ (Arbobesluit
  // art. 4.2 en 4.4 (first at the source, a mask last) and 8.1; in food also hygiene: Verordening (EG)
  // 852/2004 bijlage II hoofdstuk VIII (personal hygiene, protective clothing)).
  tipFor(
    'mixlab',
    '🥼',
    'Follow the recipe exactly',
    'In a mixing hall you make a batch by a recipe: which raw materials, how much, and in which order. Weigh everything exactly, and write down what you added, with the batch number. Not sure? Ask, do not guess. Before you use a drum or a bag, read the label: what is in it, the batch number and the danger signs. Never put something in a drum or a bag that does not belong in it. For a sample, use a clean scoop and a clean pot, and put a label on it at once. Powder and vapour can be harmful: use the extraction, and wear what is needed, like a lab coat, goggles, gloves or a mask. In food you also wear a hairnet and wash your hands often.',
    ['Ik weet het niet zeker. Hoeveel moet erin?', 'I am not sure. How much must go in?'],
    'The recipe says 25 kilo. By mistake you put in 26 kilo, and it is already in the mixing tank. What do you do?',
    [
      'Tell your shift leader, and write it down.',
      'Say nothing: one kilo is not much.',
      'Take some out by hand.',
    ],
    'One wrong amount can spoil the whole batch. When the shift leader knows it in time, the lab can check it before the batch goes on.',
    HOUSE_LINE,
  ),
];

const lessonOrder = [doUnit, toolsUnit, dataUnit, ...workUnits].flatMap((u) => u.lessons.map((l) => l.id));

/** One "Zo werkt het hier" tip per lesson of toolsUnit, dataUnit and workUnits, in course order. */
export const workTips: CultureTip[] = [...doTips, ...toolsTips, ...coreTips, ...applyTips, ...houseTips, ...socialTips, ...laterTips, ...sectorTips, ...shopNumbersTips, ...aiTips, ...kasTips, ...sayingsTips, ...dataTips, ...moreTips, ...entreeTips, ...deliveryTips, ...sectorFourTips, ...afbouwTips, ...bouwMoreTips, ...machinesTips, ...installTips, ...montageTips, ...kweekServiceTips, ...groenFacilitairTips, ...vierSectorenTips, ...vijfUnitsTips, ...basisFourTips, ...safeworkTips, ...processTips, ...topEightTips].sort(
  (a, b) => lessonOrder.indexOf(a.lessonId) - lessonOrder.indexOf(b.lessonId),
);

/** Tip ids of this file that need a help-language translation (lesson items are counted with the course). */
export const workIds: string[] = workTips.flatMap((t) => [
  t.id,
  `${t.id}.b`,
  t.phrase.id,
  t.situation.id,
  ...t.options.map((o) => o.id),
  t.why.id,
]);
