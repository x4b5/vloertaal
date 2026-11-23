import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "het glijlaken": the slide sheet (a smooth sheet to move a client in bed). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.glijlaken': placeholder('🛷', 'zorg2'),
} as Record<string, () => JSX.Element>;
