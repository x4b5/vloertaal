import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de kalk": the limescale (white stuff from water on taps and tiles). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.kalk': placeholder('⚪', 'schoonmaak2'),
} as Record<string, () => JSX.Element>;
