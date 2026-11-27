import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "voorbereiden": to prepare (to get ready for something). PLACEHOLDER (27 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.voorbereiden': placeholder('📝', 'extra4'),
} as Record<string, () => JSX.Element>;
