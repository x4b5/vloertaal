import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de bodycam": the body camera (a small camera on your uniform). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.bodycam': placeholder('📷', 'beveiliging'),
} as Record<string, () => JSX.Element>;
