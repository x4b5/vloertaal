import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "het veiligheidsblad": the safety data sheet (it says the dangers of a product, and what to do). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.veiligheidsblad': placeholder('📄', 'schoonmaak2'),
} as Record<string, () => JSX.Element>;
