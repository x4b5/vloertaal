import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "prikken": to prick (a sharp point goes into your skin). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.prikken': placeholder('📌', 'afval'),
} as Record<string, () => JSX.Element>;
