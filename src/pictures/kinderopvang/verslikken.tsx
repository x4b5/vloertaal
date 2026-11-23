import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "zich verslikken": to choke (food goes the wrong way). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.verslikken': placeholder('😣', 'kinderopvang'),
} as Record<string, () => JSX.Element>;
