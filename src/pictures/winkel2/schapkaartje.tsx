import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "het schapkaartje": the shelf label (the price card on the shelf). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.schapkaartje': placeholder('💲', 'winkel2'),
} as Record<string, () => JSX.Element>;
