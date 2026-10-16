import { lessonSayings, sayingLessons, sayingsTips } from '../src/content/sayings';
import { soundLessons } from '../src/content/sounds';

/**
 * For tests: every Dutch text of "Uitdrukkingen en gezegden" (src/content/sayings.ts): the unit's
 * sayings, sentences and chats, its tips' phrases and quotes, and the sayings in later lessons.
 * Recorded on the next 'Record ElevenLabs voices' run (the phone voice says them meanwhile).
 */
export const SAYINGS_PENDING: string[] = [
  ...sayingLessons.flatMap((l) => [
    ...l.words.map((w) => w.nl),
    ...l.sentences.map((s) => s.nl),
    ...(l.dialogues ?? []).flatMap((d) => [d.prompt.nl, d.reply.nl]),
  ]),
  ...sayingsTips.flatMap((t) => [t.phrase.nl, ...(t.situation.nl ? [t.situation.nl] : [])]),
  ...lessonSayings.map((s) => s.nl),
];

/** Every Dutch text of "Klanken" (src/content/sounds.ts): recorded on the next 'Record ElevenLabs voices' run. */
export const SOUNDS_PENDING: string[] = soundLessons.flatMap((l) => [
  ...l.words.map((w) => w.nl),
  ...l.sentences.map((s) => s.nl),
  ...(l.dialogues ?? []).flatMap((d) => [d.prompt.nl, d.reply.nl]),
]);
