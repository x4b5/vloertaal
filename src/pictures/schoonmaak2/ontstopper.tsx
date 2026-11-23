import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de ontstopper": the plunger (a tool for a blocked toilet or drain). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.ontstopper': placeholder('🪠', 'schoonmaak2'),
} as Record<string, () => JSX.Element>;
