import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de pijlwagen": the arrow trailer (a trailer with a big arrow that warns drivers). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.pijlwagen': placeholder('➡️', 'groen'),
} as Record<string, () => JSX.Element>;
