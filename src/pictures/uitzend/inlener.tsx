import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de inlener": the hirer (the company where the agency sends you to work). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.inlener': placeholder('🏭', 'uitzend'),
} as Record<string, () => JSX.Element>;
