import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "aan de lijn blijven": to stay on the line (you do not hang up). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.aandelijn': placeholder('☎️', 'basis'),
} as Record<string, () => JSX.Element>;
