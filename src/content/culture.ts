import type { CultureTip } from './tipTypes';
import { dataUnit, toolsUnit } from './work';
import { baseTips } from './cultureTipsBase';
import { workTips } from './workTips';
import { allRegionTips } from './regio';
import { beTaalTips, beTipFor, taalBeActive } from './taalBe';

/**
 * "Zo werkt het hier": Dutch workplace customs, norms and values, one per lesson.
 * Written descriptively ("here it is common to ..."), never as "your way is wrong".
 * Every id is also a translation key in the help-language files.
 */
export type { CultureTip, SituationAsk } from './tipTypes';
export { tipGender } from './tipTypes';
// The culture units, for the files that read units and tips together (tests, the review script).
// The app itself takes them from ./cultureUnits, so the tips stay out of its first screen.
export { communicateUnit, feedbackUnit, teamworkUnit } from './cultureUnits';

/** The "Smart tools" unit sits right after "Asking for help" (l.understand), so its tips do too. */
const isToolsTip = (t: CultureTip) => toolsUnit.lessons.some((l) => l.id === t.lessonId);
const afterHelp = baseTips.findIndex((t) => t.lessonId === 'l.understand') + 1;
/** "Numbers and details" sits right before "Time and schedule" (l.shift), so its tips do too. */
const isDataTip = (t: CultureTip) => dataUnit.lessons.some((l) => l.id === t.lessonId);
const beforeTime = baseTips.findIndex((t) => t.lessonId === 'l.shift');

/**
 * The lesson's short tip (`lead`): the sentences that the situation after it, or the phrase, needs
 * (G4 b3: e.g. "Call 112", "Do not sign", the wet-floor sign, "write down the hours"). Indices of
 * the English sentences, including the closing advice line (src/content/workTips.ts).
 */
export const TIP_LEADS: Readonly<Record<string, readonly number[]>> = {
  'c.accident': [0, 1, 2, 3], // tell your supervisor; through an agency: tell the agency too; 112 first
  'c.translate': [0, 4, 5, 6, 8], // ask first; ask a person to explain important papers
  'c.understood': [0, 2, 4], // say back: "Dus ik moet eerst …?"
  'c.keeplearning': [0, 4, 5], // colleagues switch to English; ask them to speak Dutch
  'c.cv': [1, 4, 5], // be honest; ask someone to check your Dutch
  'c.interview': [0, 2, 3], // asking questions yourself is normal
  'c.bsn': [0, 5, 6, 9], // ask why they need it; never give your DigiD
  'c.housing': [2, 10, 11, 13], // proof of payment; job ends: advice first (Juridisch Loket)
  'c.jobends': [0, 2, 3, 4], // final pay; agency insurance stops, arrange your own; the rental contract has its own rules (the chat asks about its notice period)
  'c.agency': [0, 2, 4], // the agency is your employer; the same pay as the company's workers; keep your own list of hours
  'c.payslip': [0, 1, 3], // check the hours, write down the hours you work
  'c.phone': [0, 3, 4], // urgent call: tell your supervisor first
  'c.smoking': [0, 2, 3], // only outside, in your break
  'c.hygiene': [0, 2, 3], // a medicine that makes you sleepy: tell your supervisor
  'c.smalltalk': [0, 2, 6, 7], // welcome at the table; "Gefeliciteerd!"
  'c.respect': [1, 2, 3, 4, 5, 6], // another polite greeting; report jokes and bullying
  'c.gossip': [0, 3, 4, 5, 6], // nothing online without permission
  'c.boundaries': [0, 1, 3, 4, 5], // say stop; write it down; tell the vertrouwenspersoon
  'c.rights': [1, 3, 6, 7, 8], // do not sign; get help first
  'c.leave': [0, 1, 2, 4], // ask for leave in time, in writing
  'c.illness': [0, 3, 4, 5], // the company doctor; call when you are better
  'c.gethelp': [2, 3, 4, 5, 6], // Arbeidsinspectie, 0800-7000, Juridisch Loket, 112
  'c.texting': [0, 1, 2, 5], // the example message (one sentence: quotes are never split); a swap needs the supervisor's yes first
  'c.diploma': [3, 4, 5], // required training is paid working time; ask about courses
  'c.doctor': [0, 1, 2, 3], // huisartsenpost; 112 only in an emergency (danger to life, fire, a crime now)
  'c.scams': [0, 1, 4], // do not click; call your bank yourself
  'c.bike': [0, 1, 2, 3], // no phone in your hand while cycling
  'c.transit': [0, 2, 3], // travel allowance: ask about it
  'c.ww': [0, 1, 3], // quitting yourself: usually no WW
  'c.newjob': [0, 1, 4], // never pay to get a job
  'c.tools': [0, 2, 4, 5], // go to the toolbox meeting; a broken tool: tell
  'c.site': [0, 4, 5], // really dangerous: you may stop
  'c.privacy': [0, 3, 4, 5], // tell the nurse; never give medicines untrained
  'c.kitchen': [0, 4, 5], // allergies: always ask the chef
  'c.service': [0, 1, 2, 3], // not sure? say that you will check
  'c.cleansafe': [0, 1, 3, 4], // the wet-floor sign
  'c.counting': [3, 4, 5], // the last digit first (vijfentwintig); 47 and 74; dertien or dertig
  'c.aihelp': [0, 2, 3, 4, 5], // AI makes mistakes; check important things (your contract) with a person
  'c.aiprivate': [0, 2, 4], // no names of customers; ask first if you may use AI
  'c.aifake': [0, 1, 3], // a voice can be fake; hang up and call back yourself
  'c.aiplan': [0, 1, 3, 4, 5, 6], // a big decision: ask who decided it, and ask a person to look again
  'c.harvest': [1, 2, 4], // piece rate: still the minimum wage per hour; write down hours and crates
  'c.greensafe': [0, 4, 5, 6], // a sprayed greenhouse: the sign at the door, wait for your supervisor
  'c.workorder': [0, 2, 3], // something not clear? ask before you start
  'c.handover': [0, 3, 4, 5], // tell what is done and what is not; say it now
  'c.review': [0, 2, 3], // not clear? ask for an example
  'c.nextstep': [0, 1, 3, 4], // level 2; the bbl: work and school, you need a job or a place
  'c.email': [0, 1, 2, 3], // a greeting, what and when, your name
  'c.healthy': [0, 3, 5], // under the influence: dangerous and forbidden; talk to your huisarts
  'c.council': [0, 3, 4, 5, 6], // who may vote for the gemeenteraad: EU, and outside the EU after 5 years
  'c.police': [0, 2, 3, 4, 5], // a decision you do not agree with: object in writing, before the date
  'c.phish': [0, 5, 6, 7], // clicked anyway: change your password and call the IT department
  'c.clear': [0, 1, 2, 3, 4], // the story first is polite elsewhere; here the point first, then the reason; stop after a few sentences
  'c.food': [0, 1, 2, 5, 6], // the hygiene rules are for everyone and for the food; a wound or sick: report it
  'c.parcel': [0, 1, 3, 5], // not at home: the company's rules; broken: a photo as proof, report it
  'c.road': [0, 2, 7, 8, 9], // no phone in your hand; breaks; who decides your hours and route: maybe an employee
  'c.newcolleague': [0, 2, 3, 4], // what was hard for you is hard for them; show it, let them copy it; not "Snap je het?" but "Laat eens zien"
  'c.feelwell': [2, 3, 4, 5, 8, 9], // not alone, not weak; who to talk to; thoughts of suicide: 113
  'c.backtowork': [0, 1, 2, 3, 7], // betermelden; step by step, fewer hours or lighter work; the company doctor; say what you can and cannot do yet
  // "Goed communiceren" (u.communicate, 5 November 2026).
  'c.explain': [0, 1, 2, 3], // the three steps: what is wrong, where, what you need
  'c.listen': [0, 1, 2, 3, 4, 5], // let them finish; look at them (in many countries not, out of respect); then say back what you heard
  'c.calm': [0, 1, 2, 3], // everyone gets angry; someone angry at you: listen first, stay calm; you need not answer at once
  'c.talkintime': [0, 1, 5, 6, 7], // a small problem gets big; then suddenly angry or quitting; thinking of quitting: talk first, there is often a solution
  'c.reachable': [1, 2, 3, 4, 5], // the first who picks up or calls back gets the job; missed call: the same day; no phone at work: in your break
  'c.getfeedback': [0, 1, 2, 3, 4], // what feedback is; about your work, not you; normal and meant to help; not clear? ask for an example
  'c.givefeedback': [0, 1, 2, 3], // first what goes well; then kindly what can be better; a good moment, alone
  'c.meeting': [0, 1, 2, 3, 4], // the werkoverleg; your opinion is welcome; a question is a contribution; wait for your turn, then speak
  // The first three sentences, with one of them split in two or three (short sentences, 8 November 2026).
  'c.warning': [0, 1, 2, 3, 4],
  'c.gear': [0, 1, 2, 3],
  'c.task': [0, 1, 2, 3],
  'c.details': [0, 1, 2, 3],
};

/**
 * The Dutch key terms of a tip, in bold on its page (at most two): the words the learner will
 * hear at work ("bedrijfsarts", "uitzendbureau"), which stay Dutch in every help language, so
 * the bold needs no translation work (the owner, 8 November 2026). Not brand names, people's
 * names or whole sentences. Each term is in the English text of the page (tests/tipTerms.test.ts).
 */
export const TIP_TERMS: Readonly<Record<string, readonly string[]>> = {
  'c.je': ['je', 'u'],
  'c.arrive': ['buddy'],
  'c.accident': ['BHV’er'],
  'c.counting': ['vijfentwintig'],
  'c.details': ['BSN'],
  'c.no': ['dat lukt niet'],
  'c.listen': ['uitpraten'],
  'c.meeting': ['werkoverleg'],
  'c.findwork': ['uitzendbureau'],
  'c.contract': ['proeftijd'],
  'c.agency': ['uitzendbureau'],
  'c.permit': ['inburgering'],
  'c.bsn': ['BSN', 'DigiD'],
  'c.housing': ['Juridisch Loket'],
  'c.payslip': ['bruto', 'netto'],
  'c.extra': ['vakantiegeld', 'minimumloon'],
  'c.respect': ['pesten', 'vertrouwenspersoon'],
  'c.gossip': ['roddelen'],
  'c.boundaries': ['grensoverschrijdend gedrag', 'vertrouwenspersoon'],
  'c.rights': ['UWV', 'Juridisch Loket'],
  'c.kids': ['calamiteitenverlof'],
  'c.illness': ['bedrijfsarts', 'betermelden'],
  'c.backtowork': ['betermelden', 'bedrijfsarts'],
  'c.gethelp': ['Juridisch Loket'],
  'c.certs': ['VCA', 'heftruckcertificaat'],
  'c.nextstep': ['mbo', 'startkwalificatie'],
  'c.doctor': ['huisarts', 'huisartsenpost'],
  'c.insurance': ['eigen risico'],
  'c.healthy': ['huisarts'],
  'c.feelwell': ['vertrouwenspersoon', 'bedrijfsarts'],
  'c.letters': ['Belastingdienst', 'gemeente'],
  'c.transit': ['reiskostenvergoeding'],
  'c.ww': ['WW', 'UWV'],
  'c.jobends': ['eindafrekening'],
  'c.newjob': ['referentie'],
  'c.tools': ['toolbox'],
  'c.line': ['storing', 'noodstop'],
  'c.client': ['u', 'je'],
  'c.service': ['u', 'je'],
  'c.hours': ['half acht'],
  'c.harvest': ['stukloon'],
  'c.greensafe': ['spuitmiddelen'],
  'c.workorder': ['werkbon'],
  'c.power': ['onder spanning'],
  'c.placement': ['stage', 'praktijkopleider'],
  'c.council': ['gemeenteraad'],
  'c.police': ['bezwaar maken'],
  'c.login': ['DigiD'],
  'c.road': ['zelfstandig', 'in loondienst'],
};

/** All tips in course order: the ones above (with the Smart tools tips after "Asking for help" and the Numbers and details tips before "Time and schedule"), then those of the work-and-rights units (src/content/work.ts). */
export const cultureTips: CultureTip[] = [
  ...baseTips.slice(0, afterHelp),
  ...workTips.filter(isToolsTip),
  ...baseTips.slice(afterHelp, beforeTime),
  ...workTips.filter(isDataTip),
  ...baseTips.slice(beforeTime),
  ...workTips.filter((t) => !isToolsTip(t) && !isDataTip(t)),
].map((t) => ({
  ...t,
  ...(TIP_LEADS[t.id] ? { lead: TIP_LEADS[t.id] } : {}),
  ...(TIP_TERMS[t.id] ? { terms: TIP_TERMS[t.id] } : {}),
}));

export function tipForLesson(lessonId: string): CultureTip | undefined {
  // In Belgium (the Belgian course on): the Belgian tip of the lesson first (src/content/taalBe);
  // a Belgian lesson ("be.l.council") has only a Belgian tip, in either country.
  const be = beTipFor(lessonId);
  if (be && (taalBeActive() || lessonId.startsWith('be.'))) return be;
  // A region's lessons have their own tips (src/content/regio), kept apart from the course's.
  return cultureTips.find((t) => t.lessonId === lessonId) ?? allRegionTips().find((t) => t.lessonId === lessonId);
}

/**
 * The tips of the learner's country, in course order (the "Zo werkt het hier" page): in Belgium a
 * Belgian tip takes the place of its Dutch one (a C unit's tips, of its Dutch lessons'), the rest
 * stays. In the Netherlands, or with the Belgian course off: cultureTips.
 */
export function taalTips(): CultureTip[] {
  if (!taalBeActive()) return cultureTips;
  return cultureTips.flatMap((t) => {
    const twin = beTaalTips.find((b) => b.id === `be.${t.id}`);
    return twin ? [twin] : [t];
  });
}

/** Every id in this file that needs a help-language translation (work tips: see workIds in work.ts). */
export const cultureIds: string[] = baseTips.flatMap((t) => [
  t.id,
  `${t.id}.b`,
  t.phrase.id,
  t.situation.id,
  ...t.options.map((o) => o.id),
  t.why.id,
]);

/** This file's address: the app loads it apart from the start (src/lib/tips.ts) and keeps it for offline use. */
export const url: string = import.meta.url;
