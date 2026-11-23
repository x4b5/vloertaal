import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de ouderapp": the parent app (for photos and messages to parents). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.ouderapp': placeholder('📱', 'kinderopvang'),
} as Record<string, () => JSX.Element>;
