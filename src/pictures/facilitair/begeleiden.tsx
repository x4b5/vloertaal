import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "begeleiden": to take someone somewhere (to walk with them). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.begeleiden': placeholder('🚶', 'facilitair'),
} as Record<string, () => JSX.Element>;
