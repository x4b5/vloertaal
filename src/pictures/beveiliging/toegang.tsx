import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de toegang": the access (you may go in). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.toegang': placeholder('🔑', 'beveiliging'),
} as Record<string, () => JSX.Element>;
