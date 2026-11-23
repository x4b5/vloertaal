import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de inbraak": the break-in (someone gets in to steal). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.inbraak': placeholder('🥷', 'beveiliging'),
} as Record<string, () => JSX.Element>;
