import type { Dialogue, Lesson, Sentence, Unit, Word } from './types';

/**
 * "Mixed review": the last lesson of every unit. It practises words, sentences and chats the
 * learner met before, from this unit and from two related units, so things come back in a new
 * mix (repetition helps you remember). It reuses existing items only: their translations and
 * recordings are already there. The title is one shared translation (ui.mixLesson).
 */

/** Two related units per unit; the overlap is on purpose. */
export const relatedUnits: Record<string, [string, string]> = {
  'u.firstday': ['u.help', 'u.teamwork'],
  'u.help': ['u.firstday', 'u.tools'],
  'u.tools': ['u.help', 'u.contact'],
  'u.safety': ['u.build', 'u.factory'],
  'u.warehouse': ['u.safety', 'u.time'],
  'u.time': ['u.leave', 'u.contact'],
  'u.teamwork': ['u.social', 'u.firstday'],
  'u.apply': ['u.contract', 'u.grow'],
  'u.contract': ['u.apply', 'u.pay'],
  'u.papers': ['u.money', 'u.contract'],
  'u.pay': ['u.contract', 'u.money'],
  'u.house': ['u.safety', 'u.social'],
  'u.social': ['u.teamwork', 'u.house'],
  'u.rights': ['u.contract', 'u.exploit'],
  'u.leave': ['u.time', 'u.health'],
  'u.exploit': ['u.rights', 'u.pay'],
  'u.contact': ['u.time', 'u.leave'],
  'u.grow': ['u.apply', 'u.lost'],
  'u.health': ['u.leave', 'u.papers'],
  'u.money': ['u.pay', 'u.papers'],
  'u.travel': ['u.time', 'u.papers'],
  'u.lost': ['u.apply', 'u.rights'],
  'u.build': ['u.safety', 'u.warehouse'],
  'u.factory': ['u.safety', 'u.warehouse'],
  'u.care': ['u.help', 'u.health'],
  'u.horeca': ['u.clean', 'u.safety'],
  'u.clean': ['u.safety', 'u.house'],
};

/**
 * Hand-picked words from the related units, where the automatic pick (one per related unit)
 * would land on an odd word for the topic.
 */
const relatedWords: Record<string, string[]> = {
  'u.safety': ['w.steiger', 'w.machine'],
  'u.warehouse': ['w.helm', 'w.pauze'],
  'u.papers': ['w.brief', 'w.contract'],
  'u.pay': ['w.contract', 'w.brief'],
  'u.social': ['w.samen', 'w.roken'],
  'u.health': ['w.ziekmelden', 'w.identiteitsbewijs'],
  'u.money': ['w.loonstrook', 'w.identiteitsbewijs'],
  'u.travel': ['w.telaat', 'w.adres'],
  'u.care': ['w.helpen', 'w.huisarts'],
  'u.build': ['w.helm', 'w.heftruck'],
  'u.factory': ['w.handschoenen', 'w.doos'],
  'u.horeca': ['w.dweil', 'w.handschoenen'],
  'u.clean': ['w.handschoenen', 'w.kluisje'],
};

export const MIX_TITLE = 'Mixed review';
export const mixLessonId = (unitId: string) => `l.${unitId.slice(2)}.mix`;
export const isMixLesson = (lesson: Pick<Lesson, 'id'>) => lesson.id.endsWith('.mix');

/** Words with a picture first (more exercise kinds), then the rest; in course order. */
const byPicture = (words: Word[]) => [...words.filter((w) => w.picture !== false), ...words.filter((w) => w.picture === false)];

/** Takes `n` words round-robin over the lessons (one per lesson in turn), skipping repeats. */
function pickWords(lessons: Lesson[], n: number, taken: Set<string>, takenNl: Set<string>): Word[] {
  const queues = lessons.map((l) => byPicture(l.words));
  const out: Word[] = [];
  for (let round = 0; out.length < n && queues.some((q) => q.length); round++) {
    for (const q of queues) {
      if (out.length >= n) break;
      while (q.length) {
        const w = q.shift()!;
        if (taken.has(w.id) || takenNl.has(w.nl) || takenNl.has(w.en)) continue;
        taken.add(w.id);
        takenNl.add(w.nl);
        takenNl.add(w.en);
        out.push(w);
        break;
      }
    }
  }
  return out;
}

/**
 * Builds the mixed-review lesson for one unit. `met` says whether the learner finished a lesson:
 * items of a related unit only come in from its lessons the learner has finished, so the review
 * never brings something the learner has not been taught yet. With no related lesson met (and
 * by default) the review uses this unit's own items only. Deterministic for the same `met`.
 */
export function mixLesson(unit: Unit, all: Unit[], met: (lessonId: string) => boolean = () => false): Lesson {
  const teaching = (u: Unit) => u.lessons.filter((l) => !isMixLesson(l));
  const metLessons = (u: Unit) => teaching(u).filter((l) => met(l.id));
  const byId = new Map(all.map((u) => [u.id, u]));
  const related = (relatedUnits[unit.id] ?? [])
    .map((id) => byId.get(id))
    .filter((u): u is Unit => Boolean(u) && metLessons(u as Unit).length > 0);
  const own = teaching(unit);
  const taken = new Set<string>();
  const takenText = new Set<string>();
  // 4 words of this unit and 1 of each related unit (or the hand-picked ones): 6 words. Words of
  // related units the learner has not met are left out, and this unit's own words fill up.
  const ownWords = pickWords(own, 4, taken, takenText);
  const picked = relatedWords[unit.id];
  const metWord = (id: string) => all.some((u) => u.id !== unit.id && metLessons(u).some((l) => l.words.some((w) => w.id === id)));
  const relWords = picked
    ? picked.map((id) => {
        const w = all.flatMap((u) => teaching(u).flatMap((l) => l.words)).find((x) => x.id === id);
        if (!w) throw new Error(`Mixed review of ${unit.id}: no word ${id}`);
        return w;
      }).filter((w) => metWord(w.id) && !taken.has(w.id))
    : related.flatMap((u) => pickWords([...metLessons(u)].reverse(), 1, taken, takenText));
  const words = [...ownWords, ...relWords];
  if (words.length < 6) words.push(...pickWords(own, 6 - words.length, taken, takenText));
  const first = own[0];
  const last = own[own.length - 1];
  // Sentences: the last one of the first lesson and of the last lesson, plus one of a related
  // unit (of its last lesson the learner finished), or else one more of this unit.
  const sentences: Sentence[] = [];
  const addSentence = (s?: Sentence) => {
    if (s && !sentences.some((x) => x.id === s.id || x.nl === s.nl)) sentences.push(s);
  };
  addSentence(first.sentences[first.sentences.length - 1]);
  addSentence(last.sentences[last.sentences.length - 1]);
  const relMet = related[0] ? metLessons(related[0]) : [];
  if (relMet.length) addSentence(relMet[relMet.length - 1].sentences[0]);
  // Too few (a short unit, no related lesson met): more of this unit's own, from the end.
  for (const s of own.flatMap((l) => l.sentences).reverse()) if (sentences.length < 3) addSentence(s);
  // Chats: one of this unit's last lesson and one of the second related unit (its first lesson
  // the learner finished that has a chat), or else one more of this unit.
  const dialogues: Dialogue[] = [];
  const addDialogue = (d?: Dialogue) => {
    if (d && !dialogues.some((x) => x.reply.nl === d.reply.nl)) dialogues.push(d);
  };
  addDialogue(last.dialogues?.[0]);
  const other = related[1] ?? related[0];
  const otherChat = other ? metLessons(other).find((l) => l.dialogues?.length) : undefined;
  if (otherChat) addDialogue(otherChat.dialogues![0]);
  else for (const l of own) if (dialogues.length < 2) for (const d of l.dialogues ?? []) if (dialogues.length < 2) addDialogue(d);
  return { id: mixLessonId(unit.id), title: MIX_TITLE, words, sentences, dialogues };
}

const played = new Map<string, Lesson>();

/**
 * The mixed review as the learner plays it, from the lessons they finished (`completed`).
 * Cached per unit and per set of related lessons met, so the same object comes back while
 * nothing changes (the player builds its exercises from it).
 */
export function mixLessonFor(unit: Unit, all: Unit[], completed: Record<string, unknown>): Lesson {
  const metIds = all
    .filter((u) => u.id !== unit.id)
    .flatMap((u) => u.lessons.filter((l) => !isMixLesson(l) && completed[l.id]).map((l) => l.id));
  const key = `${unit.id}|${metIds.join(',')}`;
  let lesson = played.get(key);
  if (!lesson) {
    const done = new Set(metIds);
    lesson = mixLesson(unit, all, (id) => done.has(id));
    played.set(key, lesson);
  }
  return lesson;
}

/** Adds the mixed-review lesson to the end of every unit (in place, so unit objects keep their identity). */
export function addMixLessons(units: Unit[]): void {
  const mixes = units.map((u) => mixLesson(u, units));
  units.forEach((u, i) => u.lessons.push(mixes[i]));
}
