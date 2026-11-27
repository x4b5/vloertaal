import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "het gaatje": the cavity (a small hole in a tooth). PLACEHOLDER (27 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.gaatje': placeholder('🕳️', 'extra4'),
} as Record<string, () => JSX.Element>;
