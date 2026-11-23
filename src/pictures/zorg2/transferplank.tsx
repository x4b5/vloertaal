import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de transferplank": the transfer board (a board to slide from the bed to a chair). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.transferplank': placeholder('🪵', 'zorg2'),
} as Record<string, () => JSX.Element>;
