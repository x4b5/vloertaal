import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de airco": the air conditioning. PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.airco': placeholder('❄️', 'facilitair'),
} as Record<string, () => JSX.Element>;
