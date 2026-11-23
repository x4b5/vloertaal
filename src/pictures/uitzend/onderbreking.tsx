import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de onderbreking": the break (a time without work between two contracts). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.onderbreking': placeholder('⏸️', 'uitzend'),
} as Record<string, () => JSX.Element>;
