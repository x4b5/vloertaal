import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "het aanspreekpunt": the contact person (the person you go to with questions). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.aanspreekpunt': placeholder('☝️', 'uitzend'),
} as Record<string, () => JSX.Element>;
