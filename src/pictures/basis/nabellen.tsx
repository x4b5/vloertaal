import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "nabellen": to call back (to ask how it is going). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.nabellen': placeholder('📞', 'basis'),
} as Record<string, () => JSX.Element>;
