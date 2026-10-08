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

/** Builds the mixed-review lesson for one unit from the units as they are before review lessons. */
export function mixLesson(unit: Unit, all: Unit[]): Lesson {
  const byId = new Map(all.map((u) => [u.id, u]));
  const related = (relatedUnits[unit.id] ?? []).map((id) => byId.get(id)).filter((u): u is Unit => Boolean(u));
  const own = unit.lessons;
  const taken = new Set<string>();
  const takenText = new Set<string>();
  // 4 words of this unit and 1 of each related unit (or the hand-picked ones): 6 words.
  const ownWords = pickWords(own, 4, taken, takenText);
  const picked = relatedWords[unit.id];
  const words = [
    ...ownWords,
    ...(picked
      ? picked.map((id) => {
          const w = all.flatMap((u) => u.lessons.flatMap((l) => l.words)).find((x) => x.id === id);
          if (!w) throw new Error(`Mixed review of ${unit.id}: no word ${id}`);
          return w;
        })
      : related.flatMap((u) => pickWords([...u.lessons].reverse(), 1, taken, takenText))),
  ];
  const first = own[0];
  const last = own[own.length - 1];
  // Sentences: the last one of the first lesson and of the last lesson, plus one of a related unit.
  const sentences: Sentence[] = [];
  const addSentence = (s?: Sentence) => {
    if (s && !sentences.some((x) => x.id === s.id || x.nl === s.nl)) sentences.push(s);
  };
  addSentence(first.sentences[first.sentences.length - 1]);
  addSentence(last.sentences[last.sentences.length - 1]);
  if (related[0]) addSentence(related[0].lessons[related[0].lessons.length - 1].sentences[0]);
  // Chats: one of this unit's last lesson and one of the second related unit.
  const dialogues: Dialogue[] = [];
  const addDialogue = (d?: Dialogue) => {
    if (d && !dialogues.some((x) => x.reply.nl === d.reply.nl)) dialogues.push(d);
  };
  addDialogue(last.dialogues?.[0]);
  const other = related[1] ?? related[0];
  if (other) addDialogue(other.lessons[0].dialogues?.[0]);
  return { id: mixLessonId(unit.id), title: MIX_TITLE, words, sentences, dialogues };
}

/** Adds the mixed-review lesson to the end of every unit (in place, so unit objects keep their identity). */
export function addMixLessons(units: Unit[]): void {
  const mixes = units.map((u) => mixLesson(u, units));
  units.forEach((u, i) => u.lessons.push(mixes[i]));
}
