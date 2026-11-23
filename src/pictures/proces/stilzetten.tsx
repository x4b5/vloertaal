import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "stilzetten": to shut down (to stop a machine the right way). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.stilzetten': placeholder('⏹️', 'proces'),
} as Record<string, () => JSX.Element>;
