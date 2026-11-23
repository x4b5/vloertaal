import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "het brutoloon": the gross pay (your pay before tax and deductions). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.brutoloon': placeholder('💰', 'uitzend'),
} as Record<string, () => JSX.Element>;
