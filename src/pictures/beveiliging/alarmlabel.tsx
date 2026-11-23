import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "het alarmlabel": the security tag (it makes the gate beep). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.alarmlabel': placeholder('🏷️', 'beveiliging'),
} as Record<string, () => JSX.Element>;
