import { dataUnit, doUnit, toolsUnit, workUnits } from './work';
import type { Unit } from './types';

/** The keys a lesson of work.ts may have: the skeleton keeps the first three, the texts the rest. */
const SKELETON_KEYS = ['id', 'title', 'titleId'] as const;
const TEXT_KEYS = ['words', 'sentences', 'dialogues'];

function unitLiteral(u: Unit): string {
  const lessons = u.lessons.map((l) => {
    const extra = Object.keys(l).filter((k) => !(SKELETON_KEYS as readonly string[]).includes(k) && !TEXT_KEYS.includes(k));
    if (extra.length) throw new Error(`${l.id}: ${extra.join(', ')} is not in the skeleton (src/content/workSkeletonSource.ts)`);
    const fields = SKELETON_KEYS.filter((k) => l[k] !== undefined).map((k) => `${k}: ${JSON.stringify(l[k])}`);
    return `      { ${fields.join(', ')} },`;
  });
  return [
    `  { id: ${JSON.stringify(u.id)}, title: ${JSON.stringify(u.title)}, titleNl: ${JSON.stringify(u.titleNl)}, emoji: ${JSON.stringify(u.emoji)}, color: ${JSON.stringify(u.color)}, lessons: [`,
    ...lessons,
    '  ] },',
  ].join('\n');
}

/** The source of src/content/workSkeleton.ts (scripts/work-skeleton.ts writes it; a test compares it). */
export function skeletonSource(): string {
  const all = [doUnit, toolsUnit, dataUnit, ...workUnits];
  return [
    '// Made by `npm run skeleton` from src/content/work.ts: do not edit (src/content/lessonTexts.ts).',
    '',
    '/** A unit of work.ts with its lessons\' names and ids, without their texts. */',
    'export interface SkeletonUnit {',
    '  id: string;',
    '  title: string;',
    '  titleNl: string;',
    '  emoji: string;',
    '  color: string;',
    '  lessons: { id: string; title: string; titleId?: string }[];',
    '}',
    '',
    '/** doUnit, toolsUnit and dataUnit (the first three), then workUnits, in course order. */',
    'export const workSkeleton: SkeletonUnit[] = [',
    ...all.map(unitLiteral),
    '];',
    '',
  ].join('\n');
}
