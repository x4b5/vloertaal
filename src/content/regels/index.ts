import type { RuleUnit } from './types';

/**
 * The work-rules course, in course order (r.start first: its first lesson is the trial lesson and
 * it is the preview unit). Placeholder until the units in ./units are written: the content agent
 * replaces this file with the real list. src/content/regels/course.ts turns these into the app's
 * Unit/Lesson shape; src/i18n/packs/nl.ts registers them (src/content/courses.ts).
 */
export const rulesUnits: RuleUnit[] = [];
