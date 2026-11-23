import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "het looppad": the walkway (a path only for people). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.looppad': placeholder('🚶', 'afval'),
} as Record<string, () => JSX.Element>;
