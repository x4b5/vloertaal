import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de snelheid": the speed (how fast a line or a machine runs). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.snelheid': placeholder('🏎️', 'proces'),
} as Record<string, () => JSX.Element>;
