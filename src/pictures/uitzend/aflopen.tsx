import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "aflopen": to end, to run out (a contract). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.aflopen': placeholder('⌛', 'uitzend'),
} as Record<string, () => JSX.Element>;
