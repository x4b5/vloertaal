import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "het gevarensymbool": the hazard symbol (a picture that warns for danger). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.gevarensymbool': placeholder('🔶', 'afval'),
} as Record<string, () => JSX.Element>;
