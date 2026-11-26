import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de ondernemingsraad": the works council (the OR: colleagues chosen to talk with the director). PLACEHOLDER (26 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.ondernemingsraad': placeholder('🗣️', 'top8'),
} as Record<string, () => JSX.Element>;
