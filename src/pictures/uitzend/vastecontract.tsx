import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "het vaste contract": the permanent contract (a contract without an end date). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.vastecontract': placeholder('🖊️', 'uitzend'),
} as Record<string, () => JSX.Element>;
