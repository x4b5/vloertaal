import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "alleen werken": to work alone (nobody else is in the building). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.alleenwerken': placeholder('🧍', 'schoonmaak2'),
} as Record<string, () => JSX.Element>;
