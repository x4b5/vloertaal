import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "het functioneringsgesprek": the performance review (a talk with your supervisor about how your work goes and what you want to learn). PLACEHOLDER (27 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.functioneringsgesprek': placeholder('🗂️', 'extra4'),
} as Record<string, () => JSX.Element>;
