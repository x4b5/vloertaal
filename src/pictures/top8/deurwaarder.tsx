import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de deurwaarder": the bailiff (an official who collects a debt, often after a judge has decided). PLACEHOLDER (26 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.deurwaarder': placeholder('🧑‍💼', 'top8'),
} as Record<string, () => JSX.Element>;
