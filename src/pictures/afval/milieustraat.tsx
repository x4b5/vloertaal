import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de milieustraat": the recycling yard (where people bring big or special waste). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.milieustraat': placeholder('♻️', 'afval'),
} as Record<string, () => JSX.Element>;
