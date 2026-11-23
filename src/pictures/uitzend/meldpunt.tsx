import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "het meldpunt": the reporting point (a place where you can report a problem). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.meldpunt': placeholder('📣', 'uitzend'),
} as Record<string, () => JSX.Element>;
