import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "het detectiepoortje": the security gate (it beeps at the door). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.detectiepoortje': placeholder('🚥', 'beveiliging'),
} as Record<string, () => JSX.Element>;
