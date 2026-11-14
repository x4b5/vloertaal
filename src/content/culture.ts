import type { ChatLine, Dialogue, Lesson, Unit } from './types';
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
  /** The Dutch key terms shown in bold on the tip's page (TIP_TERMS). */
  terms?: readonly string[];
}

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
