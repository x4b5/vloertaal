import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de stilstand": the standstill (the line stops, and nothing is made). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.stilstand': placeholder('⏸️', 'proces'),
} as Record<string, () => JSX.Element>;
