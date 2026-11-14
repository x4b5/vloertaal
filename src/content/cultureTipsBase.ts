import { ADVICE_LINE } from './adviceLine';
import type { CultureTip } from './culture';

/**
 * The "Zo werkt het hier" tips of the first units (src/content/curriculum.ts) and of the culture
 * units (src/content/culture.ts), with their long texts. They stood in culture.ts until 14
 * November 2026; they have a file of their own so the app can load them apart from the lessons
 * (see src/content/workTips.ts and scripts/bundle-size.mjs).
 * Every id is also a translation key in src/i18n/culture/<lang>.ts.
 */

const tip = (t: CultureTip) => t;

export const baseTips: CultureTip[] = [
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
  // The two warehouse lessons of 14 November 2026 (l.picking, l.loading). No tip states a right or
  // an amount: both are about how the work is done.
  tip({
    id: 'c.picking',
    lessonId: 'l.picking',
    emoji: '📋',
    title: 'Missing item? Say it',
    body: 'Is the slot empty, or is the item not there? Do not take another item that looks the same: then the customer gets the wrong thing. Say it to your team leader, or report it in the scanner. Check the number on the sticker, not only the colour or the picture. Working exactly is more important than working fast.',
    phrase: { id: 'c.picking.p', nl: 'Dit artikel ontbreekt. Wat moet ik doen?', en: 'This item is missing. What must I do?' },
    situation: { id: 'c.picking.s', en: 'The slot is empty. In the slot next to it is an item that looks almost the same. What do you do?' },
    options: [
      { id: 'c.picking.o1', en: 'Report that the item is missing.', best: true },
      { id: 'c.picking.o2', en: 'Take the other item: it looks the same.', best: false },
      { id: 'c.picking.o3', en: 'Skip the item and say nothing.', best: false },
    ],
    why: { id: 'c.picking.w', en: 'A wrong item comes back, and that costs more time than asking. When you report it, someone can fill the slot or change the order.' },
  }),
  tip({
    id: 'c.loading',
    lessonId: 'l.loading',
    emoji: '🚛',
    title: 'Never behind a reversing truck',
    body: 'The driver cannot see everything behind the truck. Never walk behind a truck that drives backwards, and do not stand between the truck and the door. Wait until the truck stands still and the driver has seen you. Is a pallet missing or broken when you unload? Say it before the driver leaves.',
    phrase: { id: 'c.loading.p', nl: 'Wacht even. De vrachtwagen rijdt achteruit.', en: 'Wait a moment. The truck is driving backwards.' },
    situation: { id: 'c.loading.s', en: 'A truck drives backwards to the door. You want to cross behind it quickly. What do you do?' },
    options: [
      { id: 'c.loading.o1', en: 'Wait until the truck stands still.', best: true },
      { id: 'c.loading.o2', en: 'Run behind it: you are fast enough.', best: false },
      { id: 'c.loading.o3', en: 'Walk behind it and wave at the driver.', best: false },
    ],
    why: { id: 'c.loading.w', en: 'Behind a truck is a place the driver cannot see. Waiting costs one minute. An accident there is very serious.' },
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
