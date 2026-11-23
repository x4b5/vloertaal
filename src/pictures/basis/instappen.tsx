import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "instappen": to get in (a car, a bus or a train). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.instappen': placeholder('⤴️', 'basis'),
} as Record<string, () => JSX.Element>;
