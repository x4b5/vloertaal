import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "het koelvak": the fridge shelf (the cold shelf in a shop). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.koelvak': placeholder('🧊', 'winkel2'),
} as Record<string, () => JSX.Element>;
