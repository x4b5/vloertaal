import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "het vierogenprincipe": the four-eyes rule (another adult can always see or hear you). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.vierogenprincipe': placeholder('👁️', 'kinderopvang'),
} as Record<string, () => JSX.Element>;
