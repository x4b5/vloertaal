import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de toegangspas": the access card (a card that opens the door). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.toegangspas': placeholder('💳', 'beveiliging'),
} as Record<string, () => JSX.Element>;
