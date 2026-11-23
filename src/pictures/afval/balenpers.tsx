import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de balenpers": the baler (a machine that presses waste into blocks). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.balenpers': placeholder('🗜️', 'afval'),
} as Record<string, () => JSX.Element>;
