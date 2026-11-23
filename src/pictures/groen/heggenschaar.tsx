import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de heggenschaar": the hedge trimmer (a machine that cuts a hedge). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.heggenschaar': placeholder('⚡', 'groen'),
} as Record<string, () => JSX.Element>;
