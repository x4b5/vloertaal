import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de boompaal": the tree stake (a pole that holds a young tree). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.boompaal': placeholder('📍', 'groen'),
} as Record<string, () => JSX.Element>;
