import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de scherf": the shard (a sharp piece of broken glass or tile). PLACEHOLDER (26 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.scherf': placeholder('🔺', 'top8'),
} as Record<string, () => JSX.Element>;
