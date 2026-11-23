import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "trakteren": to treat (bring something nice to eat for everyone). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.trakteren': placeholder('🍰', 'basis'),
} as Record<string, () => JSX.Element>;
