import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de slagboom": the barrier (a bar across the road that goes up). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.slagboom': placeholder('🚧', 'beveiliging'),
} as Record<string, () => JSX.Element>;
