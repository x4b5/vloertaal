import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de advertentie": the ad (a text that offers a job or a thing). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.advertentie': placeholder('📰', 'basis'),
} as Record<string, () => JSX.Element>;
