import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "het kwartsstof": the quartz dust (very fine dust from clay, sand or stone; it damages your lungs). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.kwartsstof': placeholder('🌫️', 'proces'),
} as Record<string, () => JSX.Element>;
