import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "wennen": to settle in (to get used to a new place). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.wennen': placeholder('🌱', 'kinderopvang'),
} as Record<string, () => JSX.Element>;
