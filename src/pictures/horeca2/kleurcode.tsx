import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de kleurcode": the colour code (one colour of board and knife for each kind of food). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.kleurcode': placeholder('🎨', 'horeca2'),
} as Record<string, () => JSX.Element>;
