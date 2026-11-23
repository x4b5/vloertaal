import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "afvinken": to tick off (put a tick behind a task). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.afvinken': placeholder('✔️', 'basis'),
} as Record<string, () => JSX.Element>;
