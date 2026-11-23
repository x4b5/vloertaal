import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de huisregels": the house rules (the rules of the house where you live). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.huisregels': placeholder('📃', 'uitzend'),
} as Record<string, () => JSX.Element>;
