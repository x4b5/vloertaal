import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "het notitieboekje": the notebook. PLACEHOLDER (26 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.notitieboekje': placeholder('📒', 'top8'),
} as Record<string, () => JSX.Element>;
