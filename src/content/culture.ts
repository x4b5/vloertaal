import type { ChatLine, Dialogue, Lesson, Unit } from './types';
import { ADVICE_LINE, dataUnit, toolsUnit, workTips } from './work';
import { allRegionTips } from './regio';
import { beTaalTips, beTipFor, taalBeActive } from './taalBe';

/**
 * "Zo werkt het hier": Dutch workplace customs, norms and values, one per lesson.
 * Written descriptively ("here it is common to ..."), never as "your way is wrong".
 * Every id is also a translation key in the help-language files.
 */
/**
 * The heading over a situation, matching the question it ends with: "Wat doe je?" (the default),
 * "Wat zeg je?" (the answer is something you say) or "Wat klopt?" (the answer is a fact: a time,
 * what a word means). Keys of the ui texts: whatDoYouDo, whatDoYouSay, whatIsRight.
 */
export type SituationAsk = 'whatdo' | 'whatsay' | 'which';

export interface CultureTip {
  id: string;
  /** Lesson this tip belongs to. */
  lessonId: string;
  emoji: string;
  title: string;
  /** Two or three short, plain-English sentences (A2 level). */
  body: string;
  /** The one Dutch sentence to use in this situation. */
  phrase: ChatLine;
  /** "What do you do?" — a short workplace situation. `nl`: the Dutch quoted in it, which a
   *  speaker beside the text plays in the character's voice. */
  situation: { id: string; en: string; nl?: string; ask?: SituationAsk };
  /** Who the character in the situation is, when the text does not say it with she/he. */
  speaker?: 'f' | 'm';
  options: { id: string; en: string; best: boolean }[];
  /** Shown after answering: why the best option works here. */
  why: { id: string; en: string };
  /**
   * The sentences of the body shown in a lesson (indices of the English sentences, see
   * `sentences` in components/Exercises.tsx), when the first three would cut the one the
   * situation or the "Zeg het zo" phrase depends on. Default: the first three. The whole text
   * stays on the "Zo werkt het hier" page.
   */
  lead?: readonly number[];
}

const tip = (t: CultureTip) => t;

const baseTips: CultureTip[] = [
  tip({
    id: 'c.je',
    lessonId: 'l.hello',
    emoji: '👋',
    title: '"Je" or "u"?',
    body: 'At work most people say "je" to each other, often also to the boss. If you are not sure, start with "u" and listen to what others do. Saying "je" is not rude here.',
    phrase: { id: 'c.je.p', nl: 'Mag ik jij zeggen?', en: 'May I say "je" to you?' },
    situation: { id: 'c.je.s', en: 'Your new supervisor says: "Zeg maar je, hoor!" What does she mean?', nl: 'Zeg maar je, hoor!', ask: 'which' },
    options: [
      { id: 'c.je.o1', en: 'She wants you to say "je" to her.', best: true },
      { id: 'c.je.o2', en: 'She asks you to say something.', best: false },
      { id: 'c.je.o3', en: 'She wants you to speak more politely.', best: false },
    ],
    why: { id: 'c.je.w', en: '"Zeg maar je" is friendly: she wants less distance. It is normal to say "je" to a supervisor in many Dutch workplaces.' },
  }),
  tip({
    id: 'c.names',
    lessonId: 'l.people',
    emoji: '🤝',
    title: 'First names and a handshake',
    body: 'On your first day, give a short handshake, look at the person and say your first name. Colleagues and managers usually use first names.',
    phrase: { id: 'c.names.p', nl: 'Hoi, ik ben Ali. Ik ben nieuw hier.', en: 'Hi, I am Ali. I am new here.' },
    situation: { id: 'c.names.s', en: 'A colleague walks up to you: "Hoi, ik ben Mark." What do you do?', nl: 'Hoi, ik ben Mark.' },
    options: [
      { id: 'c.names.o1', en: 'Shake hands, say your name.', best: true },
      { id: 'c.names.o2', en: 'Nod and smile, and wait for questions.', best: false },
      { id: 'c.names.o3', en: 'Shake hands and call him "meneer" (sir).', best: false },
    ],
    why: { id: 'c.names.w', en: 'A short introduction with your first name is the normal start. It helps colleagues remember you and ask you along.' },
  }),
  tip({
    id: 'c.arrive',
    lessonId: 'l.arrive',
    emoji: '🧭',
    title: 'Your first day: where to go',
    body: 'On your first day, go to the reception or the main entrance first. Say your name, your agency if you have one, and who you must see. Many companies give you a buddy: you may ask them everything.',
    phrase: { id: 'c.arrive.p', nl: 'Goedemorgen, ik ben Ali. Ik begin vandaag. Bij wie moet ik zijn?', en: 'Good morning, I am Ali. I start today. Who should I go to?' },
    situation: { id: 'c.arrive.s', en: 'It is 6:45 on your first day. The gate is shut. There is an intercom. What do you do?' },
    options: [
      { id: 'c.arrive.o1', en: 'Ring, say your name and that you start today.', best: true },
      { id: 'c.arrive.o2', en: 'Wait at the gate until someone comes out.', best: false },
      { id: 'c.arrive.o3', en: 'Walk around the building to find another door.', best: false },
    ],
    why: { id: 'c.arrive.w', en: 'The intercom is there for visitors and new workers. When you say who you are, they can call the right person.' },
  }),
  tip({
    id: 'c.ask',
    lessonId: 'l.understand',
    emoji: '🙋',
    title: 'Asking questions is good',
    body: 'Asking a question shows you want to do the job well. Nodding when you do not understand can lead to mistakes or accidents. Asking again is completely normal.',
    phrase: { id: 'c.ask.p', nl: 'Sorry, dat begrijp ik niet. Wil je het nog een keer uitleggen?', en: 'Sorry, I do not understand. Will you explain it once more?' },
    situation: { id: 'c.ask.s', en: 'Your supervisor explains a task very fast. You did not understand it. What do you do?' },
    options: [
      { id: 'c.ask.o1', en: 'Ask for the explanation again.', best: true },
      { id: 'c.ask.o2', en: 'Nod and try to guess.', best: false },
      { id: 'c.ask.o3', en: 'Say sorry for your Dutch and start working.', best: false },
    ],
    why: { id: 'c.ask.w', en: 'Supervisors here expect questions. It is better to ask twice than to make a mistake.' },
  }),
  tip({
    id: 'c.gear',
    lessonId: 'l.gear',
    emoji: '⛑️',
    title: 'Safety rules are for everyone',
    body: 'Rules about helmets, shoes and gloves are not a suggestion: everyone follows them, also the boss. Your employer must give you the protective gear you need, for free. Gear that does not fit does not protect you well. So ask for your size: "Heb je dit ook in mijn maat?"',
    phrase: { id: 'c.gear.p', nl: 'Mijn handschoenen zijn kapot. Waar krijg ik nieuwe?', en: 'My gloves are broken. Where do I get new ones?' },
    situation: { id: 'c.gear.s', en: 'Your gloves are torn. What do you do?' },
    options: [
      { id: 'c.gear.o1', en: 'Ask your supervisor for new gloves.', best: true },
      { id: 'c.gear.o2', en: 'Keep working without gloves.', best: false },
      { id: 'c.gear.o3', en: 'Quietly buy new gloves with your own money.', best: false },
    ],
    why: { id: 'c.gear.w', en: 'Protective gear is the employer’s job. Asking for it is normal and shows you take safety seriously.' },
  }),
  tip({
    id: 'c.unsafe',
    lessonId: 'l.danger',
    emoji: '⚠️',
    title: 'Say it when it is unsafe',
    body: 'If something is dangerous, say it right away, also to your boss. You may stop work that is really unsafe. Report accidents and near-accidents, even small ones.',
    phrase: { id: 'c.unsafe.p', nl: 'Stop! Dit is niet veilig.', en: 'Stop! This is not safe.' },
    situation: { id: 'c.unsafe.s', en: 'A pallet is stacked too high and almost falls. Nobody was hurt. What do you do?' },
    options: [
      { id: 'c.unsafe.o1', en: 'Warn colleagues and tell your supervisor.', best: true },
      { id: 'c.unsafe.o2', en: 'Say nothing, because nothing happened.', best: false },
      { id: 'c.unsafe.o3', en: 'Fix the pallet yourself and tell nobody.', best: false },
    ],
    why: { id: 'c.unsafe.w', en: 'A near-accident is a warning. Reporting it helps prevent a real accident. Your employer may not punish you for reporting it.' },
  }),
  // "Het alarm gaat. Wat doe je?" (the owner's plan, phase 2, 4 November 2026). No closing line:
  // what to do at an alarm is the same everywhere; where the exits and the assembly point are, the
  // first sentence tells the learner to ask. The first three sentences (the lesson's short tip)
  // hold what the situation needs: stop at once, leave your things, the assembly point.
  tip({
    id: 'c.alarm',
    lessonId: 'l.alarm',
    emoji: '🚨',
    title: 'The alarm goes: stop and go outside',
    body: 'On your first day, ask where the emergency exits and the assembly point are. When the alarm goes, stop your work at once. Leave your things, and walk outside by the escape route. Take the stairs, never the lift. At the assembly point, they count who is outside, so stay there. Also go when you think it is only a practice.',
    phrase: { id: 'c.alarm.p', nl: 'Ik ben nieuw. Waar is de verzamelplaats?', en: 'I am new. Where is the assembly point?' },
    situation: { id: 'c.alarm.s', en: 'The fire alarm goes off. You are almost done with an order. What do you do?' },
    options: [
      { id: 'c.alarm.o1', en: 'Stop at once and walk to the assembly point.', best: true },
      { id: 'c.alarm.o2', en: 'Finish your order first, then go outside.', best: false },
      { id: 'c.alarm.o3', en: 'First get your coat and phone from your locker.', best: false },
    ],
    why: { id: 'c.alarm.w', en: 'Smoke spreads fast, so you go at once. Your things can wait. At the assembly point they count everyone: then nobody has to look for you inside.' },
  }),
  tip({
    id: 'c.accident',
    lessonId: 'l.accident',
    emoji: '🩹',
    title: 'Report every accident',
    body: `Tell your supervisor or the BHV’er (the company first-aider) about every accident, also a small one. Working through an agency? Tell the agency too. In an emergency, call 112 first. The company where the accident happened must report a serious accident to the Nederlandse Arbeidsinspectie (also if you work through an agency): when someone dies, is hurt for life or must stay in hospital. ${ADVICE_LINE}`,
    phrase: { id: 'c.accident.p', nl: 'Mijn collega is gewond. Waar is de BHV’er?', en: 'My colleague is hurt. Where is the first-aider?' },
    situation: { id: 'c.accident.s', en: 'You hurt your back while lifting. You are afraid to lose your job. What do you do?' },
    options: [
      { id: 'c.accident.o1', en: 'Report it to your supervisor the same day.', best: true },
      { id: 'c.accident.o2', en: 'Say nothing, so you do not lose your job.', best: false },
      { id: 'c.accident.o3', en: 'Wait and see if the pain goes away by itself.', best: false },
    ],
    why: { id: 'c.accident.w', en: 'Report it the same day, also if it seems small: the pain can get worse later. Your employer is not allowed to punish you for reporting it. Work through an agency? Tell the agency too.' },
  }),
  tip({
    id: 'c.notyet',
    lessonId: 'l.notyet',
    emoji: '✋',
    title: 'Not learned yet? Say so',
    body: 'The company where you work must explain how to do your work safely. Do not use a machine or forklift that nobody taught you. Saying "Dit heb ik nog niet geleerd" is normal here: it shows that you work safely.',
    phrase: { id: 'c.notyet.p', nl: 'Dit heb ik nog niet geleerd. Kun je het voordoen?', en: 'I have not learned this yet. Can you show me how?' },
    situation: {
      id: 'c.notyet.s',
      en: 'A busy morning. Your supervisor says: "Pak jij even de heftruck? Het is makkelijk." You have never driven a forklift. What do you do?',
      nl: 'Pak jij even de heftruck? Het is makkelijk.',
    },
    // The help languages say "he says" (a supervisor, masculine in most of them): a man speaks.
    speaker: 'm',
    options: [
      { id: 'c.notyet.o1', en: 'Say you never learned it. Ask for instruction.', best: true },
      { id: 'c.notyet.o2', en: 'Drive slowly and carefully, just this once.', best: false },
      { id: 'c.notyet.o3', en: 'Say "ja" and hope that it goes well.', best: false },
    ],
    why: { id: 'c.notyet.w', en: 'A forklift without instruction is dangerous, for you and for others. Asking for instruction or other work is normal, also when it is busy.' },
  }),
  tip({
    id: 'c.direct',
    lessonId: 'l.things',
    emoji: '💬',
    title: 'Direct is not rude',
    body: 'Dutch colleagues often say things very directly, like "Dat is fout" or "Doe het zo". They usually do not mean it rudely. You may also be direct, as long as you stay friendly.',
    phrase: { id: 'c.direct.p', nl: 'Oké, hoe moet het dan?', en: 'Okay, how should it be done then?' },
    situation: { id: 'c.direct.s', en: 'A colleague says: "Nee, dat is fout. Die doos moet daar." What do you do?', nl: 'Nee, dat is fout. Die doos moet daar.' },
    options: [
      { id: 'c.direct.o1', en: 'Move the box and ask how to do it.', best: true },
      { id: 'c.direct.o2', en: 'Say sorry many times: your colleague is angry.', best: false },
      { id: 'c.direct.o3', en: 'Say nothing and leave the box where it is.', best: false },
    ],
    why: { id: 'c.direct.w', en: 'Direct feedback is about the work, not about you. Asking "hoe moet het dan?" shows you want to learn.' },
  }),
  tip({
    id: 'c.limits',
    lessonId: 'l.directions',
    emoji: '🏋️',
    title: 'Say when it is too heavy',
    body: 'Nobody expects you to lift everything alone. Saying "dit is te zwaar" and asking for help or a tool is smart, not weak. It protects your back.',
    phrase: { id: 'c.limits.p', nl: 'Deze doos is te zwaar. Kun je even helpen?', en: 'This box is too heavy. Can you help for a moment?' },
    situation: { id: 'c.limits.s', en: 'You must lift a box that is much too heavy for you. What do you do?' },
    options: [
      { id: 'c.limits.o1', en: 'Ask a colleague to help or use a cart.', best: true },
      { id: 'c.limits.o2', en: 'Lift it anyway, so nobody thinks you are weak.', best: false },
      { id: 'c.limits.o3', en: 'Leave it there and say nothing.', best: false },
    ],
    why: { id: 'c.limits.w', en: 'Asking for help is normal teamwork. An injured back costs much more than a minute of help.' },
  }),
  tip({
    id: 'c.time',
    lessonId: 'l.shift',
    emoji: '⏰',
    title: 'On time means a bit early',
    body: 'Being on time is very important. Many people arrive five or ten minutes before the shift starts. If you will be late, send a message or call before your shift starts, not afterwards.',
    phrase: { id: 'c.time.p', nl: 'Sorry, de bus is te laat. Ik ben er om acht uur.', en: 'Sorry, the bus is late. I will be there at eight.' },
    situation: { id: 'c.time.s', en: 'Your bus is late and you will be 15 minutes late. What do you do?' },
    options: [
      { id: 'c.time.o1', en: 'Tell your supervisor right away.', best: true },
      { id: 'c.time.o2', en: 'Explain it when you arrive.', best: false },
      { id: 'c.time.o3', en: 'Do not go to work at all today.', best: false },
    ],
    why: { id: 'c.time.w', en: 'Telling it early lets the team plan. Being late without a message is seen as much worse than the delay itself.' },
  }),
  tip({
    id: 'c.sick',
    lessonId: 'l.sick',
    emoji: '📞',
    title: 'How to call in sick',
    body: `Call your supervisor yourself, before your shift starts, unless your company has another rule. Working through an agency? Tell the agency too. You do not have to say what illness you have. ${ADVICE_LINE}`,
    phrase: { id: 'c.sick.p', nl: 'Ik ben ziek. Ik kan vandaag niet komen werken.', en: 'I am sick. I cannot come to work today.' },
    situation: { id: 'c.sick.s', en: 'You wake up with a fever. Your shift starts at 7:00. What do you do?' },
    options: [
      { id: 'c.sick.o1', en: 'Call your supervisor before 7:00.', best: true },
      { id: 'c.sick.o2', en: 'Ask a colleague to tell the boss later.', best: false },
      { id: 'c.sick.o3', en: 'Stay home and call tomorrow.', best: false },
    ],
    why: { id: 'c.sick.w', en: 'Calling in sick yourself and on time is the rule in most Dutch workplaces. Your employer may ask how long it will take, but not what illness it is.' },
  }),
  tip({
    id: 'c.speakup',
    lessonId: 'l.speakup',
    emoji: '🗣️',
    title: 'Say what bothers you',
    body: 'Here it is normal and respected to say calmly when something bothers you. Talk to the person first, at a quiet moment. Use "ik" sentences: "Ik vind het niet fijn dat ...". If it does not help, talk to your supervisor.',
    phrase: { id: 'c.speakup.p', nl: 'Ik zit ergens mee. Kunnen we even praten?', en: 'Something is bothering me. Can we talk for a moment?' },
    situation: { id: 'c.speakup.s', en: 'A colleague always leaves the heavy work for you. It bothers you. What do you do?' },
    options: [
      { id: 'c.speakup.o1', en: 'Tell the colleague what bothers you.', best: true },
      { id: 'c.speakup.o2', en: 'Keep quiet and get more and more angry.', best: false },
      { id: 'c.speakup.o3', en: 'Complain about him to all other colleagues.', best: false },
    ],
    why: { id: 'c.speakup.w', en: 'Dutch colleagues usually prefer to hear it directly. Saying it early and calmly keeps the relationship good.' },
  }),
  tip({
    id: 'c.no',
    lessonId: 'l.agree',
    emoji: '🤞',
    title: '"Afspraak is afspraak"',
    body: 'When you say "ja", people count on it: an agreement is an agreement. So it is fine to say "nee" or "dat lukt niet" when you cannot do something. Say it in time and, if you can, offer another option.',
    phrase: { id: 'c.no.p', nl: 'Nee, dat lukt vandaag niet. Morgen kan ik wel.', en: 'No, that does not work today. Tomorrow I can.' },
    situation: { id: 'c.no.s', en: 'Your supervisor asks if you can work extra on Saturday. You cannot. What do you do?' },
    options: [
      { id: 'c.no.o1', en: 'Say no and offer another day.', best: true },
      { id: 'c.no.o2', en: 'Say yes and then do not come.', best: false },
      { id: 'c.no.o3', en: 'Say yes: you cannot say no to a boss.', best: false },
    ],
    why: { id: 'c.no.w', en: 'A clear "nee" is respected. Saying "ja" and not coming breaks trust much more.' },
  }),
  tip({
    id: 'c.task',
    lessonId: 'l.task',
    emoji: '✅',
    title: 'Say when it is done, ask when it is not clear',
    body: 'In the Netherlands a supervisor often gives a task in a few words. When it is done, you say so. Saying "ja" when you did not understand often leads to mistakes. Asking again, or asking to be shown, is normal here and not rude.',
    phrase: { id: 'c.task.p', nl: 'Klaar! Wat moet ik nu doen?', en: 'Done! What must I do now?' },
    situation: { id: 'c.task.s', en: 'Your supervisor explains a task very fast. You understood only half. What do you do?' },
    options: [
      { id: 'c.task.o1', en: 'Ask to see it one more time.', best: true },
      { id: 'c.task.o2', en: 'Start with the half you understood.', best: false },
      { id: 'c.task.o3', en: 'Wait until a colleague does it.', best: false },
    ],
    why: { id: 'c.task.w', en: 'Asking again is normal and takes a minute. Fixing a mistake takes much longer. Most supervisors would rather show it twice.' },
  }),
  // "Kort en duidelijk" (the owner's request, 4 November 2026). Not about one culture: "in many
  // languages", so nobody is singled out. The job interview gets one sentence, so the tip fits the
  // work floor and a talk with an employer or an agency alike.
  tip({
    id: 'c.clear',
    lessonId: 'l.clear',
    emoji: '🎯',
    title: 'Say the most important thing first',
    body: 'In many languages it is polite to tell the whole story first, and the point at the end. At work here it is the other way round. First say what is wrong or what you need. Then give the reason. Speak calmly, and stop after two or three sentences, so the other person can ask something. In a job interview too: first the answer, then an example. Speaking slowly is not rude here: it helps people understand you.',
    phrase: { id: 'c.clear.p', nl: 'Sorry, ik zeg het rustig nog een keer.', en: 'Sorry, I will say it again, calmly.' },
    situation: { id: 'c.clear.s', en: 'You come in 20 minutes late. Your supervisor asks: "Wat is er?" What do you do?', nl: 'Wat is er?' },
    options: [
      { id: 'c.clear.o1', en: 'First say that you are late and sorry. Then say why.', best: true },
      { id: 'c.clear.o2', en: 'Tell everything that happened this morning, from the start.', best: false },
      { id: 'c.clear.o3', en: 'Say nothing and quickly start working.', best: false },
    ],
    why: { id: 'c.clear.w', en: 'Your supervisor first wants to know what is going on. The reason comes after that. Short and calm is clear, and here it is also polite.' },
  }),
  // "Een nieuwe collega helpen" (the owner's request, 5 November 2026). The learner is now the one
  // who explains: the same order as "Kort en duidelijk", and the rule of "Voor begeleiders"
  // (src/content/pro.ts): not "Snap je het?" but "Laat eens zien". No closing line: a habit, no rule.
  tip({
    id: 'c.newcolleague',
    lessonId: 'l.newcolleague',
    emoji: '🧑‍🏫',
    title: 'Show it, step by step',
    body: 'What was hard for you in your first weeks is hard for a new colleague too. Explain the work in small steps: first this, then that. Do not speak faster or louder: show it, and let them do it after you. Do not ask "Snap je het?": many people say yes, also when they do not understand. Say "Laat eens zien" instead, and watch. Tell them where things are, like the toilet, the canteen and the gloves. Be patient (geduld): learning takes time, for everyone.',
    phrase: { id: 'c.newcolleague.p', nl: 'Goed zo! Nu de volgende stap.', en: 'Well done! Now the next step.' },
    situation: { id: 'c.newcolleague.s', en: 'You explain a task to a new colleague. He says: "Ja, ja, ik snap het." What do you do?', nl: 'Ja, ja, ik snap het.' },
    options: [
      { id: 'c.newcolleague.o1', en: 'Say "Laat eens zien," and watch him do it.', best: true },
      { id: 'c.newcolleague.o2', en: 'Say "Goed zo," and go back to your own work.', best: false },
      { id: 'c.newcolleague.o3', en: 'Explain it all again, faster and louder.', best: false },
    ],
    why: { id: 'c.newcolleague.w', en: 'Many people say "ja", also when they did not understand. When he shows it, you both see if it works. That is quicker than fixing a mistake later.' },
  }),
  // "Goed communiceren" (u.communicate, the owner’s request, 5 November 2026): five tips, one per
  // lesson. None names a country or a culture ("in many countries"). Only "Praat er op tijd over"
  // (c.talkintime) speaks of a right, so only it has the closing line. Landneutraal ("here", "at
  // work"), so the Belgian course keeps them (A).
  // "Uitleggen wat er is": the same three steps every time. Not the order of "Kort en duidelijk"
  // (c.clear: the point first, then the reason) again, and not the accident report (c.accident):
  // that tip is only pointed to.
  tip({
    id: 'c.explain',
    lessonId: 'l.explain',
    emoji: '🗣️',
    title: 'What, where, what you need',
    body: 'When something is wrong at work, say it in three steps. First what is wrong: "De band staat stil." Then where: "Bij lijn twee." Then what you need: "Kun je komen?" Now the other person knows what to do, without many questions. Do you not know the word for it? Point at it. Is it dangerous? Say that first: "Het is gevaarlijk." An accident? First get help (more in the lesson "Report an accident").',
    phrase: { id: 'c.explain.p', nl: 'Kun je even komen kijken?', en: 'Can you come and have a look?' },
    situation: { id: 'c.explain.s', en: 'The scanner at your place stops working. You call your team leader. What do you say?', ask: 'whatsay' },
    options: [
      { id: 'c.explain.o1', en: '"De scanner is kapot. Bij gang vier. Kun je komen?"', best: true },
      { id: 'c.explain.o2', en: '"Hallo, ik heb een probleem." Then you wait.', best: false },
      { id: 'c.explain.o3', en: '"Sorry, sorry! Het is niet mijn schuld!"', best: false },
    ],
    why: { id: 'c.explain.w', en: 'Now your team leader knows what is wrong, where it is, and what you need. Nobody has to ask three questions first.' },
  }),
  // "Goed luisteren": let someone finish, look at them, say back what you heard, ask what a word
  // means, and ask when you are not sure it was a joke. c.understood ("Dus ik moet eerst …?", with
  // live captions and asking to write it down) is not said again: here saying back comes after
  // letting the other person finish. Looking at someone: "in many countries" you do not look your
  // boss in the eyes out of respect, said without a judgement and without naming a country.
  tip({
    id: 'c.listen',
    lessonId: 'l.listen',
    emoji: '👂',
    title: 'Listen first, then check',
    body: 'Let the other person finish talking (uitpraten) before you answer. Look at the person who talks to you: here, that shows that you are listening. In many countries you do not look your boss in the eyes. That is a sign of respect. Here, looking at them now and then is polite. When the other person has finished, say back what you heard: "Dus eerst …, en dan …?" Not sure what a word means? Ask: "Wat bedoel je met …?" Some colleagues make jokes with a serious face. Not sure? Ask: "Was dat een grapje?"',
    phrase: { id: 'c.listen.p', nl: 'Wacht, ik wil het goed begrijpen.', en: 'Wait, I want to understand it well.' },
    situation: { id: 'c.listen.s', en: 'Your supervisor explains a new task. You want to say something, but she is still talking. What do you do?' },
    options: [
      { id: 'c.listen.o1', en: 'Let her finish. Then say back what you heard.', best: true },
      { id: 'c.listen.o2', en: 'Start talking at once, so you do not forget it.', best: false },
      { id: 'c.listen.o3', en: 'Nod at everything and ask nothing.', best: false },
    ],
    why: { id: 'c.listen.w', en: 'When she has finished, you know the whole task. Saying it back shows that you listened, and she can still correct you.' },
  }),
  // "Rustig blijven": someone is angry at you, you get angry yourself, it is very busy. No
  // judgement of anger. Shouting, threats and pushing: only pointed to the lessons that already
  // have it (c.respect "Respect for everyone", c.boundaries "Crossing the line", with the
  // vertrouwenspersoon), not said again here.
  tip({
    id: 'c.calm',
    lessonId: 'l.calm',
    emoji: '😮‍💨',
    title: 'Stay calm, also when it is hard',
    body: 'Everyone gets angry sometimes, also at work. Is someone angry at you? Listen first, and stay calm. You do not have to answer at once: "Mag ik even nadenken?" Are you getting angry yourself? Breathe slowly, and say: "Kunnen we straks praten?" Then talk when you are both calm. Very busy? Ask what must be done first. Shouting, threats or pushing are never okay at work. Say stop, and tell your supervisor (more in the lessons "Respect for everyone" and "Crossing the line").',
    phrase: { id: 'c.calm.p', nl: 'Ik denk dat het een misverstand is.', en: 'I think it is a misunderstanding.' },
    situation: { id: 'c.calm.s', en: 'A colleague is angry: the pallet is in the wrong place. You think it was not you. What do you do?' },
    options: [
      { id: 'c.calm.o1', en: 'Stay calm, listen, then say what you know.', best: true },
      { id: 'c.calm.o2', en: 'Get angry too, and say it louder.', best: false },
      { id: 'c.calm.o3', en: 'Walk away and do not talk to them anymore.', best: false },
    ],
    why: { id: 'c.calm.w', en: 'When you stay calm, the other person often calms down too. Then you can find out what happened, and solve it together.' },
  }),
  // "Praat er op tijd over" (the owner's request, 5 November 2026): what comes before the anger of
  // c.calm. A problem nobody talks about grows, until someone suddenly gets angry or suddenly
  // quits. Not "Say what bothers you" (c.speakup: how to say it) again: here when, and that
  // quitting yourself has consequences. ⚖️ check: quitting yourself can cost your benefit (NL: WW
  // bij verwijtbare werkloosheid, art. 24 WW; BE: werkloosheidsuitkering bij vrijwillig ontslag,
  // RVA), and there is often a notice period ⚖️ (said with "can"; docs/juridische-check.md). With
  // ADVICE_LINE, which the Belgian course swaps by itself.
  tip({
    id: 'c.talkintime',
    lessonId: 'l.talkintime',
    emoji: '⏰',
    title: 'Talk about it while it is small',
    body: `A small problem gets big when you do not talk about it. Then you suddenly get angry, or you suddenly stop. Talk in time: with your supervisor, a colleague or the vertrouwenspersoon (confidential adviser, if there is one). Ask for a moment: "Heb je even tijd?" Say briefly what the problem is and what you want. Are you thinking about quitting? Talk first. There is often a solution, like another shift or another task. If you quit yourself, you can lose your benefit (uitkering), and often there is a notice period (opzegtermijn). ${ADVICE_LINE}`,
    phrase: { id: 'c.talkintime.p', nl: 'Kunnen we samen een oplossing zoeken?', en: 'Can we look for a solution together?' },
    situation: { id: 'c.talkintime.s', en: 'For weeks your schedule has been a problem. Today you are angry and want to stop at once. What do you do?' },
    options: [
      { id: 'c.talkintime.o1', en: 'First ask your supervisor for a talk.', best: true },
      { id: 'c.talkintime.o2', en: 'Leave now and do not come back.', best: false },
      { id: 'c.talkintime.o3', en: 'Say nothing and just go on.', best: false },
    ],
    why: { id: 'c.talkintime.w', en: 'Talking in time keeps a problem small. Often there is a solution, and so you often keep your job and your income.' },
  }),
  // "Bereikbaar zijn" (the phone): pick up, call back the same day (in your break when the phone
  // stays in the locker, c.phone), the voicemail and some credit, say that the phone is hard, and a
  // new number. Money or codes: hang up, pointed to "Watch out for scams" (c.scams), not said
  // again. "the agency" in English only (no "uitzendbureau"), so it holds in Belgium too.
  tip({
    id: 'c.reachable',
    lessonId: 'l.reachable',
    emoji: '📞',
    title: 'Pick up, or call back the same day',
    body: 'Agencies and employers often call when there is work. Often the first person who picks up, or calls back, gets the job. Missed a call? Call back the same day. No phone at work? Call back in your break. Listen to your voicemail, and keep some credit (beltegoed) on your phone. Hard to understand on the phone? Say so, and ask: "Kunt u het ook appen?" Someone asks for money or codes? Hang up (more in the lesson "Watch out for scams"). A new number? Pass it on to your work, the agency and the municipality (gemeente).',
    phrase: { id: 'c.reachable.p', nl: 'Ik bel u in mijn pauze terug.', en: 'I will call you back in my break.' },
    situation: { id: 'c.reachable.s', en: 'In your break you see a missed call from the agency. What do you do?' },
    options: [
      { id: 'c.reachable.o1', en: 'Call back now, in your break.', best: true },
      { id: 'c.reachable.o2', en: 'Wait until they call you again.', best: false },
      { id: 'c.reachable.o3', en: 'Call back next week, when you are free.', best: false },
    ],
    why: { id: 'c.reachable.w', en: 'Agencies often call when there is work. When you call back the same day, you show that you want it, and maybe you get the job.' },
  }),
  // "Feedback en overleg" (u.feedback, the owner's request, 5 November 2026): communication more
  // firmly in the course. Three tips about habits, no rules, so no closing line; none names a
  // country ("at work here"). They follow "Direct is not rude" (c.direct: the direct way of
  // speaking) and "Mistakes are normal" (c.mistakes: saying your own mistake) without repeating
  // them: here what the word "feedback" means and how you take it (c.getfeedback), how you give it
  // yourself (c.givefeedback), and speaking up in a team meeting (c.meeting).
  tip({
    id: 'c.getfeedback',
    lessonId: 'l.getfeedback',
    emoji: '👂',
    title: 'Feedback is about your work',
    body: 'Feedback is what someone says about your work: what goes well, and what can be better. It is about your work, not about you. At work here, feedback is normal and meant to help. Not clear what to do differently? Ask for an example. Listen first, and do not defend yourself straight away. Then say thank you, and try it. You may also ask for feedback yourself: "Wat kan ik beter doen?"',
    phrase: { id: 'c.getfeedback.p', nl: 'Bedankt. Kun je een voorbeeld geven?', en: 'Thanks. Can you give an example?' },
    situation: { id: 'c.getfeedback.s', en: 'Your supervisor looks at your work and says: "Dit kan beter." You do not know what she means. What do you do?', nl: 'Dit kan beter.' },
    options: [
      { id: 'c.getfeedback.o1', en: 'Say thank you, and ask for an example.', best: true },
      { id: 'c.getfeedback.o2', en: 'Say that you really did your best.', best: false },
      { id: 'c.getfeedback.o3', en: 'Nod, and do it the same way again.', best: false },
    ],
    why: { id: 'c.getfeedback.w', en: 'Feedback is meant to help you. An example shows what she wants. And a "thank you" shows that you listen.' },
  }),
  tip({
    id: 'c.givefeedback',
    lessonId: 'l.givefeedback',
    emoji: '🌟',
    title: 'Giving feedback: first the good part',
    body: 'Do you want to say something about a colleague’s work? First say what goes well. Then say kindly and clearly what can be better, with one example. Say it at a good moment, to that person alone, not when everyone is there. Say what you see, not what you think of the person: "Ik zie dat ...". Stay friendly: you want to help, not to win.',
    phrase: { id: 'c.givefeedback.p', nl: 'Dat doe je goed. Kun je de dozen ook dichtplakken?', en: 'You do that well. Can you also tape the boxes shut?' },
    situation: { id: 'c.givefeedback.s', en: 'A new colleague forgets to tape the boxes. You are all in the canteen. What do you do?' },
    options: [
      { id: 'c.givefeedback.o1', en: 'Later, alone: first what goes well, then the boxes.', best: true },
      { id: 'c.givefeedback.o2', en: 'Tell him in front of everyone that it is wrong.', best: false },
      { id: 'c.givefeedback.o3', en: 'Say nothing, and tape his boxes yourself.', best: false },
    ],
    why: { id: 'c.givefeedback.w', en: 'Alone, he can listen without feeling ashamed. When you first say what goes well, he hears the rest better.' },
  }),
  tip({
    id: 'c.meeting',
    lessonId: 'l.meeting',
    emoji: '🗣️',
    title: 'Your voice counts in the meeting',
    body: 'Many teams have a short meeting about the work (het werkoverleg). Your opinion is welcome there, also when your Dutch is not perfect. A question is a good contribution too: maybe others want to know it as well. Wait for your turn, and let the other person finish. Then raise your hand, or say: "Mag ik iets zeggen?" Do you not dare to say it in the group? Tell your supervisor after the meeting.',
    phrase: { id: 'c.meeting.p', nl: 'Mag ik iets zeggen? Ik heb een idee.', en: 'May I say something? I have an idea.' },
    situation: { id: 'c.meeting.s', en: 'In the team meeting, your supervisor explains the new roster. You do not understand when your shift starts. What do you do?' },
    options: [
      { id: 'c.meeting.o1', en: 'When she stops talking, ask your question.', best: true },
      { id: 'c.meeting.o2', en: 'Say nothing, so you do not waste time.', best: false },
      { id: 'c.meeting.o3', en: 'Ask it at once, while she is still talking.', best: false },
    ],
    why: { id: 'c.meeting.w', en: 'A question is a good contribution: maybe others did not understand it either. When you wait for your turn, everyone can hear it.' },
  }),
];

const line = (id: string, nl: string, en: string): ChatLine => ({ id, nl, en });
const chat = (prompt: ChatLine, reply: ChatLine): Dialogue => ({ prompt, reply });

/** New unit: working together and speaking up (still a language unit first). */
export const teamworkUnit: Unit = {
  id: 'u.teamwork',
  title: 'Working together',
  titleNl: 'Samenwerken',
  emoji: '🤝',
  color: '#1e2226',
  lessons: [
    {
      id: 'l.speakup',
      title: 'Something bothers me',
      words: [
        { id: 'w.probleem', nl: 'het probleem', en: 'the problem', emoji: '❓' },
        { id: 'w.praten', nl: 'praten', en: 'to talk', emoji: '🗣️' },
        { id: 'w.nietfijn', nl: 'niet fijn', en: 'not nice', emoji: '😕' },
        { id: 'w.eerlijk', nl: 'eerlijk', en: 'fair, honest', emoji: '⚖️', picture: false },
        { id: 'w.boos', nl: 'boos', en: 'angry', emoji: '😠' },
        { id: 'w.samen', nl: 'samen', en: 'together', emoji: '👥' },
      ],
      sentences: [
        { id: 's.speakup.1', nl: 'Ik zit ergens mee.', en: 'Something is bothering me.' },
        { id: 's.speakup.2', nl: 'Kunnen we even praten?', en: 'Can we talk for a moment?' },
        { id: 's.speakup.3', nl: 'Ik vind dat niet eerlijk.', en: 'I do not think that is fair.' },
      ],
      dialogues: [
        chat(line('d.speakup.q', 'Is er iets?', 'Is something wrong?'), line('d.speakup.a', 'Ja, ik zit ergens mee.', 'Yes, something is bothering me.')),
      ],
    },
    {
      id: 'l.agree',
      title: 'Agreements and saying no',
      words: [
        { id: 'w.afspraak', nl: 'de afspraak', en: 'the agreement', emoji: '🤝' },
        { id: 'w.lukken', nl: 'lukken', en: 'to work out, to manage', emoji: '👍', picture: false },
        { id: 'w.oneens', nl: 'het oneens zijn', en: 'to disagree', emoji: '🙅' },
        { id: 'w.zaterdag', nl: 'zaterdag', en: 'Saturday', emoji: '🗓️', look: 'kalender/zaterdag' },
        { id: 'w.overwerken', nl: 'overwerken', en: 'to work overtime', emoji: '🌙' },
        { id: 'w.misschien', nl: 'misschien', en: 'maybe', emoji: '🤔', picture: false },
      ],
      sentences: [
        { id: 's.agree.1', nl: 'Nee, dat lukt vandaag niet.', en: 'No, that does not work today.' },
        { id: 's.agree.2', nl: 'Ik ben het niet met je eens.', en: 'I do not agree with you.' },
        { id: 's.agree.3', nl: 'Afspraak is afspraak.', en: 'An agreement is an agreement.' },
      ],
      dialogues: [
        chat(
          line('d.agree.q', 'Kun je zaterdag overwerken?', 'Can you work overtime on Saturday?'),
          line('d.agree.a', 'Nee, dat lukt niet. Zondag wel.', 'No, that does not work. Sunday I can.'),
        ),
      ],
    },
    {
      // "klaar" (w.klaar, l.shift), "laten zien" (w.latenzien, l.understood) and "nog een keer"
      // (w.nogeenkeer, l.understand) are already words of other lessons: here they come in the
      // sentences, the chat and the tip. "bijna" has a moving picture on its intro card only
      // (`picture: 'motion'`, the owner's trial of 5 November 2026): a bar fills and stops just
      // before the end. Standing still, a nearly full bar would be read as "afmaken" (a full bar
      // with a tick) in the same lesson, so it is never in a picture choice. "eerst" and "daarna"
      // have one too (the second round, 5 November 2026): a list of two jobs, the hand at the top
      // one and its tick, or the hand going on to the bottom one and its tick. Still, the two
      // lists would only differ in a tick, so they are never in a picture choice either.
      id: 'l.task',
      title: 'Instructions from your supervisor',
      words: [
        { id: 'w.taak', nl: 'de taak', en: 'the task', emoji: '📌' },
        { id: 'w.eerst', nl: 'eerst', en: 'first', emoji: '1️⃣', picture: 'motion' },
        { id: 'w.daarna', nl: 'daarna', en: 'after that', emoji: '⏭️', picture: 'motion' },
        { id: 'w.afmaken', nl: 'afmaken', en: 'to finish', emoji: '✅' },
        { id: 'w.snel', nl: 'snel', en: 'fast', emoji: '🏃' },
        { id: 'w.bijna', nl: 'bijna', en: 'almost', emoji: '🤏', picture: 'motion' },
      ],
      sentences: [
        { id: 's.task.1', nl: 'Wat moet ik eerst doen?', en: 'What must I do first?' },
        { id: 's.task.2', nl: 'Ik ben klaar met deze taak.', en: 'I am done with this task.' },
        { id: 's.task.3', nl: 'Kunt u het nog een keer laten zien?', en: 'Can you show it one more time?' },
      ],
      dialogues: [
        chat(line('d.task.q', 'Ben je klaar?', 'Are you done?'), line('d.task.a', 'Bijna. Nog vijf minuten.', 'Almost. Five more minutes.')),
      ],
    },
    {
      // "Kort en duidelijk" (the owner's request, 4 November 2026: new colleagues and candidates
      // who say a lot, fast, so it only gets unclear; in many languages the polite order is the
      // whole story first and the point last). Here the Dutch order: the point first, then the
      // reason, then a question. At work and in a talk such as a job interview (the tip). "eerst"
      // and "snel" (l.task) and "kapot" are words of other lessons: here they come in the
      // sentences. All six words are abstract (no picture).
      id: 'l.clear',
      title: 'Short and clear',
      words: [
        { id: 'w.kort', nl: 'kort', en: 'short', emoji: '✂️', picture: false },
        { id: 'w.duidelijk', nl: 'duidelijk', en: 'clear', emoji: '🔍', picture: false },
        { id: 'w.belangrijkste', nl: 'het belangrijkste', en: 'the most important thing', emoji: '⭐', picture: false },
        { id: 'w.rustig', nl: 'rustig', en: 'calm, calmly', emoji: '😌', picture: false },
        { id: 'w.teveel', nl: 'te veel', en: 'too much', emoji: '➕', picture: false },
        { id: 'w.vraag', nl: 'de vraag', en: 'the question', emoji: '🙋', picture: false },
      ],
      sentences: [
        { id: 's.clear.1', nl: 'Ik zeg het kort: de machine is kapot.', en: 'I will keep it short: the machine is broken.' },
        { id: 's.clear.2', nl: 'Eerst het belangrijkste: ik ben ziek.', en: 'The most important thing first: I am ill.' },
        { id: 's.clear.3', nl: 'Sorry, ik praat te snel en te veel.', en: 'Sorry, I talk too fast and too much.' },
      ],
      dialogues: [
        chat(line('d.clear.q', 'Is het duidelijk?', 'Is it clear?'), line('d.clear.a', 'Ja. Ik heb nog één vraag.', 'Yes. I have one more question.')),
      ],
    },
    {
      // "Een nieuwe collega helpen" (the owner's request, 5 November 2026): welcome a new colleague,
      // show a task in steps ("eerst … dan …"), let them copy it, check that it works ("Laat eens
      // zien"), be patient and say where things are. Right after "Kort en duidelijk", whose order it
      // uses. "eerst" and "daarna" (l.task), "voordoen" (l.notyet), "laten zien" (l.understood),
      // "uitleggen" (l.mistakes), "de collega" and "nieuw" (l.people), "de buddy" (l.arrive) and
      // "de handschoenen" (l.gear) are already words of other lessons: here they come in the
      // sentences, the chat and the tip. Drawn: "de kast" (a cupboard, one door open); the other
      // five have no one plain scene ("nadoen" would look like "voordoen", which has no picture
      // either).
      id: 'l.newcolleague',
      title: 'Helping a new colleague',
      words: [
        { id: 'w.welkom', nl: 'welkom', en: 'welcome', emoji: '🙌', picture: false },
        { id: 'w.inwerken', nl: 'inwerken', en: 'to show a new colleague the work (in the first days)', emoji: '🧭', picture: false },
        { id: 'w.stap', nl: 'de stap', en: 'the step (one small part of a task)', emoji: '👣', picture: false },
        { id: 'w.nadoen', nl: 'nadoen', en: 'to copy (do what someone showed you)', emoji: '🪞', picture: false },
        { id: 'w.geduld', nl: 'het geduld', en: 'the patience', emoji: '⏳', picture: false },
        { id: 'w.kast', nl: 'de kast', en: 'the cupboard', emoji: '🗄️' },
      ],
      sentences: [
        { id: 's.newcolleague.1', nl: 'Welkom! Ik werk je vandaag in.', en: 'Welcome! Today I will show you the work.' },
        { id: 's.newcolleague.2', nl: 'Kijk eerst. Dan doe je het na.', en: 'Watch first. Then you copy it.' },
        { id: 's.newcolleague.3', nl: 'De handschoenen liggen in die kast.', en: 'The gloves are in that cupboard.' },
      ],
      dialogues: [
        chat(line('d.newcolleague.q', 'Ik snap het, denk ik.', 'I get it, I think.'), line('d.newcolleague.a', 'Mooi. Laat eens zien.', 'Good. Show me.')),
      ],
    },
  ] satisfies Lesson[],
};

/**
 * "Goed communiceren" (the owner's request, 5 November 2026: explaining what is going on, staying
 * calm, listening well, saying when you do not understand; and, asked the same day, talking about
 * a problem in time). In the theme Samenwerken, right after
 * "Samenwerken" (u.teamwork), in the path too. "Bereikbaar zijn" (the phone) is here, the owner's
 * choice: "Bellen en appen met je werk" (u.contact: calling in, "terugbellen", "bereikbaar",
 * "inspreken", messages) is related, and its words come back in the sentences and the tip.
 */
export const communicateUnit: Unit = {
  id: 'u.communicate',
  title: 'Communicating well',
  titleNl: 'Goed communiceren',
  emoji: '💬',
  color: '#245a5e',
  lessons: [
    {
      // "Uitleggen wat er is": the same three steps every time, what is wrong, where, and what you
      // need ("De band staat stil. Bij lijn twee. Kun je komen?"). Goes on from "Kort en duidelijk"
      // (l.clear: the point first) and does not repeat "Een ongeluk melden" (l.accident). "De band
      // staat stil." is also a line of "The line and machines" (l.line, u.factory), here with where
      // and what you need. "kapot" (l.handover), "gevaarlijk" (l.danger), "de machine" and "de
      // scanner" are words of other lessons: here they come in the sentences, the chat and the tip.
      // Drawn (group39): "stilstaan" (a belt with its boxes and a pause sign), "het lampje" (a red
      // warning light that is on) and "komen" (a hand that says "come here" and an arrow to it).
      id: 'l.explain',
      title: 'Saying what is wrong',
      words: [
        { id: 'w.ietsmis', nl: 'er is iets mis', en: 'something is wrong', emoji: '❗', picture: false },
        { id: 'w.stilstaan', nl: 'stilstaan', en: 'to stand still, to have stopped (a machine, a belt)', emoji: '⏸️' },
        { id: 'w.lampje', nl: 'het lampje', en: 'the (warning) light', emoji: '🚨' },
        { id: 'w.komen', nl: 'komen', en: 'to come', emoji: '🫴' },
        { id: 'w.nodighebben', nl: 'nodig hebben', en: 'to need', emoji: '🤲', picture: false },
        { id: 'w.meteen', nl: 'meteen', en: 'right away, at once', emoji: '⚡', picture: false },
      ],
      sentences: [
        { id: 's.explain.1', nl: 'De band staat stil. Bij lijn twee. Kun je komen?', en: 'The belt has stopped. At line two. Can you come?' },
        { id: 's.explain.2', nl: 'Er brandt een rood lampje op de machine.', en: 'A red light is on, on the machine.' },
        { id: 's.explain.3', nl: 'Het is gevaarlijk. Kun je meteen komen?', en: 'It is dangerous. Can you come right away?' },
      ],
      dialogues: [
        chat(line('d.explain.q', 'Wat is er mis?', 'What is wrong?'), line('d.explain.a', 'De scanner doet het niet. Ik heb een nieuwe nodig.', 'The scanner is not working. I need a new one.')),
      ],
    },
    {
      // "Goed luisteren": let someone finish (uitpraten), do not interrupt, look at them, say back
      // what you heard ("Dus eerst …, en dan …?"), ask on ("Wat bedoel je met …?") and ask when
      // you are not sure it was a joke. "luisteren" (l.keeplearning), "herhalen" (l.understood)
      // and "het grapje" (l.boundaries) are words of other lessons: here they come in the
      // sentences, the chat and the tip. Drawn: "aankijken" (eyes that look straight at you, and
      // the bubble of the one who talks). The other five have no one plain scene.
      id: 'l.listen',
      title: 'Listening well',
      words: [
        { id: 'w.uitpraten', nl: 'uitpraten', en: 'to finish talking (let someone finish)', emoji: '🤐', picture: false },
        { id: 'w.onderbreken', nl: 'onderbreken', en: 'to interrupt', emoji: '✋', picture: false },
        { id: 'w.aankijken', nl: 'aankijken', en: 'to look at (someone)', emoji: '👀' },
        { id: 'w.bedoelen', nl: 'bedoelen', en: 'to mean', emoji: '💭', picture: false },
        { id: 'w.dus', nl: 'dus', en: 'so (to check what you heard)', emoji: '🔁', picture: false },
        { id: 'w.doorvragen', nl: 'doorvragen', en: 'to ask more (until it is clear)', emoji: '❓', picture: false },
      ],
      sentences: [
        { id: 's.listen.1', nl: 'Dus eerst de dozen tellen, en dan inpakken?', en: 'So first count the boxes, and then pack?' },
        { id: 's.listen.2', nl: 'Wat bedoel je met dat woord?', en: 'What do you mean by that word?' },
        { id: 's.listen.3', nl: 'Sorry, praat maar uit.', en: 'Sorry, please finish what you were saying.' },
      ],
      dialogues: [
        chat(line('d.listen.q', 'Morgen begin je al om vier uur.', 'Tomorrow you start at four already.'), line('d.listen.a', 'Echt? Of was dat een grapje?', 'Really? Or was that a joke?')),
      ],
    },
    {
      // "Rustig blijven": someone is angry at you, you get angry yourself, it is very busy. "boos"
      // (l.speakup), "rustig" (l.clear) and "praten" (l.speakup) are words of other lessons: here
      // they come in the sentences, the chat and the tip. Drawn: "nadenken" (Jada thinking, a
      // thought bubble) and "ademhalen" (Bram, eyes closed, a slow breath going out). The other
      // four have no one plain scene (a busy day, later, a misunderstanding, to solve).
      id: 'l.calm',
      title: 'Staying calm',
      words: [
        { id: 'w.nadenken', nl: 'nadenken', en: 'to think (about something)', emoji: '🤔' },
        { id: 'w.ademhalen', nl: 'ademhalen', en: 'to breathe', emoji: '🌬️' },
        { id: 'w.oplossen', nl: 'oplossen', en: 'to solve, to sort out', emoji: '🧩', picture: false },
        { id: 'w.druk', nl: 'druk', en: 'busy (a lot to do)', emoji: '🐝', picture: false },
        { id: 'w.straks', nl: 'straks', en: 'later (today), in a moment', emoji: '⏳', picture: false },
        { id: 'w.misverstand', nl: 'het misverstand', en: 'the misunderstanding', emoji: '🔀', picture: false },
      ],
      sentences: [
        { id: 's.calm.1', nl: 'Ik wil het rustig oplossen.', en: 'I want to sort it out calmly.' },
        { id: 's.calm.2', nl: 'Mag ik even nadenken?', en: 'May I think about it for a moment?' },
        { id: 's.calm.3', nl: 'Kunnen we straks praten?', en: 'Can we talk later?' },
      ],
      dialogues: [
        chat(line('d.calm.q', 'Waarom is dit nog niet klaar?', 'Why is this not done yet?'), line('d.calm.a', 'Sorry, het is erg druk. Wat moet eerst?', 'Sorry, it is very busy. What must come first?')),
      ],
    },
    {
      // "Praat er op tijd over" (the owner's request, 5 November 2026): a problem you carry around
      // for a long time and do not talk about, until you suddenly decide (stop, stay away) or get
      // openly angry. After "Rustig blijven" (l.calm: anger at the moment itself); this lesson is
      // about what comes before. "Ik zit ergens mee." is a line of l.speakup (how to say what
      // bothers you); here it comes with asking for a moment. "het besluit" (l.aiplan), "opzeggen"
      // (l.jobends), "het probleem" (l.speakup) and "praten" are words of other lessons: here they
      // come in the sentences, the chat and the tip. "de zorg" is not a word here (also "the
      // care", of the sector Zorg): "je zorgen maken" is. Drawn: "het gesprek" (a table with two
      // mugs and two bubbles: sitting down to talk; not "praten", two people talking). The other
      // five have no one plain scene.
      id: 'l.talkintime',
      title: 'Talk about it in time',
      words: [
        { id: 'w.gesprek', nl: 'het gesprek', en: 'the talk, the conversation', emoji: '☕' },
        { id: 'w.bespreken', nl: 'bespreken', en: 'to talk about, to discuss', emoji: '🗨️', picture: false },
        { id: 'w.zorgenmaken', nl: 'je zorgen maken', en: 'to worry', emoji: '😟', picture: false },
        { id: 'w.oplossing', nl: 'de oplossing', en: 'the solution', emoji: '💡', picture: false },
        { id: 'w.ineens', nl: 'ineens', en: 'suddenly, all at once', emoji: '💥', picture: false },
        { id: 'w.wegblijven', nl: 'wegblijven', en: 'to stay away (not come to work)', emoji: '🚪', picture: false },
      ],
      sentences: [
        { id: 's.talkintime.1', nl: 'Ik zit ergens mee. Heb je even tijd?', en: 'Something is bothering me. Do you have a moment?' },
        { id: 's.talkintime.2', nl: 'Ik wil iets met je bespreken.', en: 'I want to discuss something with you.' },
        { id: 's.talkintime.3', nl: 'Ik denk erover om te stoppen. Kunnen we eerst praten?', en: 'I am thinking about quitting. Can we talk first?' },
      ],
      dialogues: [
        chat(line('d.talkintime.q', 'Heb je even tijd? Ik zit ergens mee.', 'Do you have a moment? Something is bothering me.'), line('d.talkintime.a', 'Ja hoor. Wat is er?', 'Sure. What is it?')),
      ],
    },
    {
      // "Bereikbaar zijn" (the phone): pick up, the missed call, the voicemail, call back, the
      // number, the credit, and sentences that make the phone less scary ("Kunt u langzaam
      // praten?", "Kunt u het ook appen?"). "terugbellen", "bereikbaar" and "inspreken"
      // (l.callin), "het nummer" (l.aifake), "appen" (l.phone) and "langzaam" (l.understand) are
      // words of other lessons: here they come in the sentences, the chat and the tip. Drawn: to
      // pick up (a finger on the green button, the twin of "ophangen"), the missed call (a red
      // handset on the screen with a bent arrow), the voicemail (its tape sign on the screen), the
      // credit (coins beside a phone) and the signal (bars). "onbekend" has no picture.
      id: 'l.reachable',
      title: 'Being reachable',
      words: [
        { id: 'w.opnemen', nl: 'opnemen', en: 'to answer (the phone), to pick up', emoji: '📲' },
        { id: 'w.gemisteoproep', nl: 'de gemiste oproep', en: 'the missed call', emoji: '☎️' },
        { id: 'w.voicemail', nl: 'de voicemail', en: 'the voicemail', emoji: '📼' },
        { id: 'w.beltegoed', nl: 'het beltegoed', en: 'the phone credit (prepaid)', emoji: '💳' },
        { id: 'w.bereik', nl: 'het bereik', en: 'the signal (on your phone)', emoji: '📶' },
        { id: 'w.onbekend', nl: 'onbekend', en: 'unknown (an unknown number)', emoji: '❔', picture: false },
      ],
      sentences: [
        { id: 's.reachable.1', nl: 'Mijn Nederlands is nog niet goed. Kunt u langzaam praten?', en: 'My Dutch is not good yet. Can you speak slowly?' },
        { id: 's.reachable.2', nl: 'Kunt u het ook appen?', en: 'Can you also send it as a message?' },
        { id: 's.reachable.3', nl: 'Ik heb een nieuw nummer.', en: 'I have a new number.' },
      ],
      dialogues: [
        chat(
          line('d.reachable.q', 'Goedemorgen, met de planning.', 'Good morning, this is the planning office.'),
          line('d.reachable.a', 'Goedemorgen. U belde mij? Sorry, ik heb het gemist.', 'Good morning. You called me? Sorry, I missed it.'),
        ),
      ],
    },
  ] satisfies Lesson[],
};

/**
 * "Feedback en overleg" (the owner's request, 5 November 2026: communication more firmly in the
 * course, and getting feedback and the word "feedback" itself were missing). In the theme
 * "Samenwerken", right after "Samenwerken" (u.teamwork) in the course; "Goed communiceren"
 * (u.communicate, built at the same time) goes in between when the two are merged: teamwork,
 * communicate, feedback. Three lessons: getting feedback, giving it, speaking up in a team meeting.
 *
 * "de feedback" itself is a word of "Feedback and mistakes" (w.feedback, l.mistakes, Omgang met
 * collega's): its card says what it means, and here the word comes back in the chat of the first
 * lesson, in the tip that explains it (c.getfeedback) and in the mixed review (src/content/review.ts).
 */
export const feedbackUnit: Unit = {
  id: 'u.feedback',
  title: 'Feedback and team meetings',
  titleNl: 'Feedback en overleg',
  emoji: '💬',
  color: '#5a4a8a',
  lessons: [
    {
      // Getting feedback: listen, ask for an example, say thank you, try it. "het voorbeeld" (l.review,
      // u.stage) and "beter" (l.sick) are words of other lessons: here they come in the sentences.
      // "Wat kan ik beter doen?" is also a sentence of "Feedback on your placement" (s.review.1, the
      // same recording); here at the work floor, with "je" ("Kun je een voorbeeld geven?") where the
      // placement lesson says "u". "nadenken" is a word of "Rustig blijven" (l.calm), so "positief" here. All six are abstract.
      id: 'l.getfeedback',
      title: 'Getting feedback',
      words: [
        { id: 'w.tip', nl: 'de tip', en: 'the tip (a short piece of advice)', emoji: '💡', picture: false },
        { id: 'w.verbeterpunt', nl: 'het verbeterpunt', en: 'the point to improve (what can be better)', emoji: '🎯', picture: false },
        { id: 'w.goedbedoeld', nl: 'goed bedoeld', en: 'well meant (to help you)', emoji: '💛', picture: false },
        { id: 'w.kritiek', nl: 'de kritiek', en: 'the criticism (what someone thinks is not good)', emoji: '🗯️', picture: false },
        { id: 'w.normaal', nl: 'normaal', en: 'normal', emoji: '🆗', picture: false },
        { id: 'w.positief', nl: 'positief', en: 'positive (about what goes well)', emoji: '👍', picture: false },
      ],
      sentences: [
        { id: 's.getfeedback.1', nl: 'Bedankt, dat is goed om te weten.', en: 'Thanks, that is good to know.' },
        { id: 's.getfeedback.2', nl: 'Kun je een voorbeeld geven?', en: 'Can you give an example?' },
        { id: 's.getfeedback.3', nl: 'Wat kan ik beter doen?', en: 'What can I do better?' },
      ],
      dialogues: [
        chat(line('d.getfeedback.q', 'Mag ik je wat feedback geven?', 'May I give you some feedback?'), line('d.getfeedback.a', 'Ja, graag. Ik wil het goed doen.', 'Yes, please. I want to do it well.')),
      ],
    },
    {
      // Giving feedback: first what goes well, then concrete and kind, at a good moment, alone, with
      // an "ik zie dat"-sentence. "de doos" (l.things) and "goed" are words of other lessons: here they
      // come in the sentences. "netjes" and "scheef" are a pair of drawings (a straight stack, a
      // leaning one), "dichtplakken" a box with the tape going over it; the other three are abstract.
      id: 'l.givefeedback',
      title: 'Giving feedback',
      words: [
        { id: 'w.dichtplakken', nl: 'dichtplakken', en: 'to tape shut', emoji: '📦' },
        { id: 'w.netjes', nl: 'netjes', en: 'neat, tidy', emoji: '✨' },
        { id: 'w.scheef', nl: 'scheef', en: 'crooked, not straight', emoji: '📐' },
        { id: 'w.vriendelijk', nl: 'vriendelijk', en: 'friendly, kind', emoji: '🙂', picture: false },
        { id: 'w.concreet', nl: 'concreet', en: 'concrete, specific (with a clear example)', emoji: '🔎', picture: false },
        { id: 'w.ondervierogen', nl: 'onder vier ogen', en: 'in private (just the two of you)', emoji: '👥', picture: false },
      ],
      sentences: [
        { id: 's.givefeedback.1', nl: 'Dat doe je goed.', en: 'You do that well.' },
        { id: 's.givefeedback.2', nl: 'Kun je de dozen ook dichtplakken?', en: 'Can you also tape the boxes shut?' },
        { id: 's.givefeedback.3', nl: 'Ik zie dat de dozen scheef staan.', en: 'I see that the boxes are not straight.' },
      ],
      dialogues: [
        chat(line('d.givefeedback.q', 'Hoe vind je mijn werk?', 'What do you think of my work?'), line('d.givefeedback.a', 'Netjes! Alleen de dozen staan scheef.', 'Neat! Only the boxes are not straight.')),
      ],
    },
    {
      // Speaking up in the team meeting (het werkoverleg; on a building site the toolbox meeting,
      // c.tools): wait for your turn, ask something, give an idea. "de vraag" (l.clear), "zeggen" and
      // "het rooster" (l.clock) are words of other lessons: here they come in the sentences and the
      // chat. Drawn: the meeting (two at a table), the idea (a lamp that lights up) and raising your
      // hand; "de beurt", "de mening" and "de agenda" are abstract ("onderbreken" is a word of l.listen).
      id: 'l.meeting',
      title: 'Speaking up in a team meeting',
      words: [
        { id: 'w.werkoverleg', nl: 'het werkoverleg', en: 'the team meeting (about the work)', emoji: '🪑' },
        { id: 'w.beurt', nl: 'de beurt', en: 'the turn (your moment to speak)', emoji: '🔁', picture: false },
        { id: 'w.idee', nl: 'het idee', en: 'the idea', emoji: '💡' },
        { id: 'w.mening', nl: 'de mening', en: 'the opinion (what you think about it)', emoji: '💭', picture: false },
        { id: 'w.handopsteken', nl: 'je hand opsteken', en: 'to raise your hand', emoji: '✋' },
        { id: 'w.agenda', nl: 'de agenda', en: 'the agenda (the list of points for the meeting)', emoji: '📋', picture: false },
      ],
      sentences: [
        { id: 's.meeting.1', nl: 'Mag ik iets zeggen?', en: 'May I say something?' },
        { id: 's.meeting.2', nl: 'Ik heb een vraag over het rooster.', en: 'I have a question about the roster.' },
        { id: 's.meeting.3', nl: 'Ik heb een idee.', en: 'I have an idea.' },
      ],
      dialogues: [
        chat(line('d.meeting.q', 'Heeft iemand nog een vraag?', 'Does anyone have a question?'), line('d.meeting.a', 'Ja. Wanneer komt het nieuwe rooster?', 'Yes. When does the new roster come?')),
      ],
    },
  ] satisfies Lesson[],
};

/** The "Smart tools" unit sits right after "Asking for help" (l.understand), so its tips do too. */
const isToolsTip = (t: CultureTip) => toolsUnit.lessons.some((l) => l.id === t.lessonId);
const afterHelp = baseTips.findIndex((t) => t.lessonId === 'l.understand') + 1;
/** "Numbers and details" sits right before "Time and schedule" (l.shift), so its tips do too. */
const isDataTip = (t: CultureTip) => dataUnit.lessons.some((l) => l.id === t.lessonId);
const beforeTime = baseTips.findIndex((t) => t.lessonId === 'l.shift');

/**
 * The lesson's short tip (`lead`): the sentences that the situation after it, or the phrase, needs
 * (G4 b3: e.g. "Call 112", "Do not sign", the wet-floor sign, "write down the hours"). Indices of
 * the English sentences, including the closing advice line (src/content/work.ts).
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

/** All tips in course order: the ones above (with the Smart tools tips after "Asking for help" and the Numbers and details tips before "Time and schedule"), then those of the work-and-rights units (src/content/work.ts). */
export const cultureTips: CultureTip[] = [
  ...baseTips.slice(0, afterHelp),
  ...workTips.filter(isToolsTip),
  ...baseTips.slice(afterHelp, beforeTime),
  ...workTips.filter(isDataTip),
  ...baseTips.slice(beforeTime),
  ...workTips.filter((t) => !isToolsTip(t) && !isDataTip(t)),
].map((t) => (TIP_LEADS[t.id] ? { ...t, lead: TIP_LEADS[t.id] } : t));

/**
 * Whether the person in a tip's situation is a woman ('f'), a man ('m') or not said (null),
 * read from the English text ("What does she mean?", "He asks for ..."), so the character
 * shown and the voice that speaks always match the text.
 */
export function tipGender(t: CultureTip): 'f' | 'm' | null {
  if (t.speaker) return t.speaker;
  const text = [t.situation.en, ...t.options.map((o) => o.en), t.why.en].join(' ');
  const she = /\b(she|her|hers|herself|woman|female)\b/i.exec(text);
  const he = /\b(he|him|his|himself|man|male)\b/i.exec(text);
  if (she && (!he || she.index < he.index)) return 'f';
  if (he) return 'm';
  return null;
}

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
