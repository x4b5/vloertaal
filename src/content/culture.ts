import type { ChatLine, Dialogue, Lesson, Unit } from './types';
import { toolsUnit, workTips } from './work';

/**
 * "Zo werkt het hier": Dutch workplace customs, norms and values, one per lesson.
 * Written descriptively ("here it is common to ..."), never as "your way is wrong".
 * Every id is also a translation key in the help-language files.
 */
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
  situation: { id: string; en: string; nl?: string };
  /** Who the character in the situation is, when the text does not say it with she/he. */
  speaker?: 'f' | 'm';
  options: { id: string; en: string; best: boolean }[];
  /** Shown after answering: why the best option works here. */
  why: { id: string; en: string };
}

const tip = (t: CultureTip) => t;

const baseTips: CultureTip[] = [
  tip({
    id: 'c.je',
    lessonId: 'l.hello',
    emoji: '👋',
    title: '"Je" or "u"?',
    body: 'At work most people say "je" to each other, often also to the boss. If you are not sure, start with "u" and listen to what others do. Saying "je" is not rude here.',
    phrase: { id: 'c.je.p', nl: 'Mag ik je zeggen?', en: 'May I say "je" to you?' },
    situation: { id: 'c.je.s', en: 'Your new supervisor says: "Zeg maar je, hoor!" What does she mean?', nl: 'Zeg maar je, hoor!' },
    options: [
      { id: 'c.je.o1', en: 'She wants you to say "je" to her.', best: true },
      { id: 'c.je.o2', en: 'She is angry with you.', best: false },
      { id: 'c.je.o3', en: 'You must speak more loudly.', best: false },
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
      { id: 'c.names.o1', en: 'Shake hands and say your first name.', best: true },
      { id: 'c.names.o2', en: 'Look down and say nothing.', best: false },
      { id: 'c.names.o3', en: 'Call him "Mister Mark".', best: false },
    ],
    why: { id: 'c.names.w', en: 'A short introduction with your first name is the normal start. It helps colleagues remember you and ask you along.' },
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
      { id: 'c.ask.o1', en: 'Say that you did not understand and ask again.', best: true },
      { id: 'c.ask.o2', en: 'Nod and try to guess.', best: false },
      { id: 'c.ask.o3', en: 'Wait and hope someone else does it.', best: false },
    ],
    why: { id: 'c.ask.w', en: 'Dutch supervisors expect questions. It is better to ask twice than to make a mistake.' },
  }),
  tip({
    id: 'c.gear',
    lessonId: 'l.gear',
    emoji: '⛑️',
    title: 'Safety rules are for everyone',
    body: 'Rules about helmets, shoes and gloves are not a suggestion: everyone follows them, also the boss. Your employer must give you the protective gear you need, for free.',
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
      { id: 'c.unsafe.o3', en: 'Fix it alone and tell nobody.', best: false },
    ],
    why: { id: 'c.unsafe.w', en: 'A near-accident is a warning. Reporting it helps prevent a real accident; you will not get in trouble for speaking up.' },
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
      { id: 'c.direct.o1', en: 'Ask how it should be done and move the box.', best: true },
      { id: 'c.direct.o2', en: 'Feel insulted and walk away.', best: false },
      { id: 'c.direct.o3', en: 'Start a fight about it.', best: false },
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
      { id: 'c.time.o1', en: 'Message or call your supervisor right away.', best: true },
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
    body: 'Call your supervisor yourself, before your shift starts, unless your company has another rule. Working through an agency? Tell the agency too. You do not have to say what illness you have.',
    phrase: { id: 'c.sick.p', nl: 'Ik ben ziek. Ik kan vandaag niet komen werken.', en: 'I am sick. I cannot come to work today.' },
    situation: { id: 'c.sick.s', en: 'You wake up with a fever. Your shift starts at 7:00. What do you do?' },
    options: [
      { id: 'c.sick.o1', en: 'Call your supervisor before 7:00 and say you are sick.', best: true },
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
      { id: 'c.speakup.o1', en: 'Calmly tell the colleague what bothers you.', best: true },
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
      { id: 'c.no.o1', en: 'Say no politely and offer another day.', best: true },
      { id: 'c.no.o2', en: 'Say yes and then do not come.', best: false },
      { id: 'c.no.o3', en: 'Say "maybe" and never answer.', best: false },
    ],
    why: { id: 'c.no.w', en: 'A clear "nee" is respected. Saying "ja" and not coming breaks trust much more.' },
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
        { id: 'w.zaterdag', nl: 'zaterdag', en: 'Saturday', emoji: '🗓️', picture: false },
        { id: 'w.overwerken', nl: 'overwerken', en: 'to work overtime', emoji: '🌙' },
        { id: 'w.misschien', nl: 'misschien', en: 'maybe', emoji: '🤔', picture: false },
      ],
      sentences: [
        { id: 's.agree.1', nl: 'Nee, dat lukt vandaag niet.', en: 'No, that does not work today.' },
        { id: 's.agree.2', nl: 'Ik ben het er niet mee eens.', en: 'I do not agree with it.' },
        { id: 's.agree.3', nl: 'Afspraak is afspraak.', en: 'An agreement is an agreement.' },
      ],
      dialogues: [
        chat(
          line('d.agree.q', 'Kun je zaterdag overwerken?', 'Can you work overtime on Saturday?'),
          line('d.agree.a', 'Nee, dat lukt niet. Zondag wel.', 'No, that does not work. Sunday I can.'),
        ),
      ],
    },
  ] satisfies Lesson[],
};

/** The "Smart tools" unit sits right after "Asking for help" (l.understand), so its tips do too. */
const isToolsTip = (t: CultureTip) => toolsUnit.lessons.some((l) => l.id === t.lessonId);
const afterHelp = baseTips.findIndex((t) => t.lessonId === 'l.understand') + 1;

/** All tips in course order: the ones above (with the Smart tools tips after "Asking for help"), then those of the work-and-rights units (src/content/work.ts). */
export const cultureTips: CultureTip[] = [
  ...baseTips.slice(0, afterHelp),
  ...workTips.filter(isToolsTip),
  ...baseTips.slice(afterHelp),
  ...workTips.filter((t) => !isToolsTip(t)),
];

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
  return cultureTips.find((t) => t.lessonId === lessonId);
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
