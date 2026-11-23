import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "het restafval": the general waste (what cannot be sorted). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.restafval': placeholder('🚮', 'afval'),
} as Record<string, () => JSX.Element>;
