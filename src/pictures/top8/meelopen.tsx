import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "meelopen": to go along with a colleague (and watch how they work). PLACEHOLDER (26 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.meelopen': placeholder('👣', 'top8'),
} as Record<string, () => JSX.Element>;
