import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "navragen": to check, to ask about (to find out if something is right). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.navragen': placeholder('🔍', 'uitzend'),
} as Record<string, () => JSX.Element>;
