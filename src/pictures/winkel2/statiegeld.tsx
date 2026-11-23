import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "het statiegeld": the deposit (money back for an empty bottle or can). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.statiegeld': placeholder('🍾', 'winkel2'),
} as Record<string, () => JSX.Element>;
