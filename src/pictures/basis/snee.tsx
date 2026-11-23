import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de snee": the cut (a small wound from a knife or something sharp). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.snee': placeholder('✂️', 'basis'),
} as Record<string, () => JSX.Element>;
