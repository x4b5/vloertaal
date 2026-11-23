import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de vingerstrip": the finger guard (on a door, so fingers do not get stuck). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.vingerstrip': placeholder('🖐️', 'kinderopvang'),
} as Record<string, () => JSX.Element>;
