import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "afwegen": to weigh out (to weigh exactly as much as the recipe says). PLACEHOLDER (26 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.afwegen': placeholder('⚖️', 'top8'),
} as Record<string, () => JSX.Element>;
