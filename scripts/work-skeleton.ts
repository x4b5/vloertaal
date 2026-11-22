/**
 * Writes src/content/workSkeleton.ts from src/content/work.ts: the units and lessons of the work,
 * sector and culture units with their names and ids only, for the start file. Their words,
 * sentences and chats load right after the start (src/content/lessonTexts.ts).
 *
 *   npm run skeleton
 *
 * tests/lessonTexts.test.ts fails when the skeleton is not the same as work.ts: run this after
 * adding or renaming a unit or a lesson in work.ts.
 */
import { writeFileSync } from 'node:fs';
import { skeletonSource } from '../src/content/workSkeletonSource';

writeFileSync(new URL('../src/content/workSkeleton.ts', import.meta.url), skeletonSource());
console.log('src/content/workSkeleton.ts bijgewerkt');
