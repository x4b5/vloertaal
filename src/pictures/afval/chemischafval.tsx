import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "het chemisch afval": the chemical waste (dangerous waste, like paint and oil). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.chemischafval': placeholder('☣️', 'afval'),
} as Record<string, () => JSX.Element>;
