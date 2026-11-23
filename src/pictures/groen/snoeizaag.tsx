import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de snoeizaag": the pruning saw. PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.snoeizaag': placeholder('🪚', 'groen'),
} as Record<string, () => JSX.Element>;
