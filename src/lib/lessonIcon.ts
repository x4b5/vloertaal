import type { Lesson } from '../content/types';
import { hasPicture } from './wordPicture';

/** What WordPicture draws beside a lesson: a drawing by word id, or else the emoji. */
export type LessonIcon = { id: string; emoji: string };

/**
 * The picture beside a lesson in the overview (src/components/Route.tsx). A language lesson shows
 * its first word that has a picture. A work-rules lesson has no words, so it shows the emoji of its
 * first rule card ("⛑️" for protective gear), or its own `icon` when that card says too little
 * about the whole lesson. Without this its row stood bare beside the others.
 */
export function lessonIcon(lesson: Pick<Lesson, 'words' | 'steps' | 'rule'>): LessonIcon | undefined {
  const word = lesson.words.find(hasPicture);
  if (word) return { id: word.id, emoji: word.emoji };
  if (lesson.rule?.icon) return { id: '', emoji: lesson.rule.icon };
  const rule = lesson.steps?.find((s) => s.kind === 'rule');
  return rule?.kind === 'rule' ? { id: '', emoji: rule.emoji } : undefined;
}
