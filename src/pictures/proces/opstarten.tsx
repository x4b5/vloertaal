import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "opstarten": to start up (a machine or a line, step by step). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.opstarten': placeholder('▶️', 'proces'),
} as Record<string, () => JSX.Element>;
