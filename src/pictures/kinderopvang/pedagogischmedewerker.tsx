import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de pedagogisch medewerker": the childcare worker. PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.pedagogischmedewerker': placeholder('🧑‍🏫', 'kinderopvang'),
} as Record<string, () => JSX.Element>;
