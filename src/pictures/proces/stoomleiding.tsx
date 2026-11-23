import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de stoomleiding": the steam pipe (it is hot, also when you see no steam). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.stoomleiding': placeholder('〰️', 'proces'),
} as Record<string, () => JSX.Element>;
