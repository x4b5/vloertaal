import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de aanmaning": the final reminder (pay before a date, or extra costs may come). PLACEHOLDER (26 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.aanmaning': placeholder('📮', 'top8'),
} as Record<string, () => JSX.Element>;
