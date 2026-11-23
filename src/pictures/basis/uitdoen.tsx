import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "uitdoen": to switch off (the light, a machine). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.uitdoen': placeholder('💡', 'basis'),
} as Record<string, () => JSX.Element>;
