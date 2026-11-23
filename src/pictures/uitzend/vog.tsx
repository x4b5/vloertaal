import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de VOG": the certificate of conduct. PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.vog': placeholder('📜', 'uitzend'),
} as Record<string, () => JSX.Element>;
