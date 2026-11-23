import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "het intakegesprek": the intake interview (the first talk at the agency). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.intakegesprek': placeholder('🗣️', 'uitzend'),
} as Record<string, () => JSX.Element>;
