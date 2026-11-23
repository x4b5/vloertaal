import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de adrenalinepen": the adrenaline pen (a medicine pen for a strong allergy). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.adrenalinepen': placeholder('💉', 'kinderopvang'),
} as Record<string, () => JSX.Element>;
