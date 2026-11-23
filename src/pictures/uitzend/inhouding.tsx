import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de inhouding": the deduction (money taken off your pay). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.inhouding': placeholder('➖', 'uitzend'),
} as Record<string, () => JSX.Element>;
