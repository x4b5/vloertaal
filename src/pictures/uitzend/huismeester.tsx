import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de huismeester": the housing manager (the person who looks after the house). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.huismeester': placeholder('🧑‍🔧', 'uitzend'),
} as Record<string, () => JSX.Element>;
