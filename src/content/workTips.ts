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

const lessonOrder = [doUnit, toolsUnit, dataUnit, ...workUnits].flatMap((u) => u.lessons.map((l) => l.id));

/** One "Zo werkt het hier" tip per lesson of toolsUnit, dataUnit and workUnits, in course order. */
export const workTips: CultureTip[] = [...doTips, ...toolsTips, ...coreTips, ...applyTips, ...houseTips, ...socialTips, ...laterTips, ...sectorTips, ...shopNumbersTips, ...aiTips, ...kasTips, ...sayingsTips, ...dataTips, ...moreTips, ...entreeTips, ...deliveryTips, ...sectorFourTips].sort(
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
