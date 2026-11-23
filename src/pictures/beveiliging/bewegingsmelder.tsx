import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de bewegingsmelder": the motion sensor (it sees when something moves). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.bewegingsmelder': placeholder('📡', 'beveiliging'),
} as Record<string, () => JSX.Element>;
