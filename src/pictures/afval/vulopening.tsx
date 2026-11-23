import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de vulopening": the loading opening (where the waste goes in). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.vulopening': placeholder('⬛', 'afval'),
} as Record<string, () => JSX.Element>;
