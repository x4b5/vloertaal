import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "doseren": to measure out (to use the right amount of a product). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.doseren': placeholder('⚖️', 'schoonmaak2'),
} as Record<string, () => JSX.Element>;
