import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de weegbrug": the weighbridge (a scale for cars and lorries). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.weegbrug': placeholder('⚖️', 'afval'),
} as Record<string, () => JSX.Element>;
