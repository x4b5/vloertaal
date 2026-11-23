import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de ploegwissel": the shift change (one team goes home, the next team starts). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.ploegwissel': placeholder('🔀', 'proces'),
} as Record<string, () => JSX.Element>;
