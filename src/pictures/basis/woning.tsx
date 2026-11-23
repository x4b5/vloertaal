import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de woning": the home (a house or a flat). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.woning': placeholder('🏠', 'basis'),
} as Record<string, () => JSX.Element>;
