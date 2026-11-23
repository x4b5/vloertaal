import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "uitstappen": to get out (of a car, a bus or a train). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.uitstappen': placeholder('⤵️', 'basis'),
} as Record<string, () => JSX.Element>;
