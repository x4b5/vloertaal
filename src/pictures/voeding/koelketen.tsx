import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de koelketen": the cold chain (food stays cold all the way). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.koelketen': placeholder('⛓️', 'voeding'),
} as Record<string, () => JSX.Element>;
