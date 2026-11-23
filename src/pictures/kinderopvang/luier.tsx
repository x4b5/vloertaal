import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de luier": the nappy, the diaper. PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.luier': placeholder('🧷', 'kinderopvang'),
} as Record<string, () => JSX.Element>;
