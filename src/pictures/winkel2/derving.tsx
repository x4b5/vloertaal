import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de derving": the shrink (what the shop loses: broken, old or stolen products). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.derving': placeholder('📉', 'winkel2'),
} as Record<string, () => JSX.Element>;
