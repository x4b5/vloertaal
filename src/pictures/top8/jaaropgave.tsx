import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de jaaropgave": the annual statement (a paper from your employer with your pay of the whole year). PLACEHOLDER (26 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.jaaropgave': placeholder('📄', 'top8'),
} as Record<string, () => JSX.Element>;
