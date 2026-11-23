import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "afschrijven": to write off (to register a product as lost). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.afschrijven': placeholder('✍️', 'winkel2'),
} as Record<string, () => JSX.Element>;
