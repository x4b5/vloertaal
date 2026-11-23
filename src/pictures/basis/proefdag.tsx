import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de proefdag": the trial day (one day of work, to try). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.proefdag': placeholder('🧪', 'basis'),
} as Record<string, () => JSX.Element>;
