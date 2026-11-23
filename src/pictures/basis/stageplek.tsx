import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de stageplek": the placement (the company where you do your placement). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.stageplek': placeholder('🏢', 'basis'),
} as Record<string, () => JSX.Element>;
