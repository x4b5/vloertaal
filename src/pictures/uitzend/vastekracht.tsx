import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de vaste kracht": the permanent worker (a worker employed by the hirer itself). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.vastekracht': placeholder('🧑‍🏭', 'uitzend'),
} as Record<string, () => JSX.Element>;
