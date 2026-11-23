import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "reanimeren": to do CPR (to press on the chest to save a life). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.reanimeren': placeholder('🫀', 'beveiliging'),
} as Record<string, () => JSX.Element>;
