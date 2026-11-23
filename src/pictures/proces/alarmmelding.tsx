import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de alarmmelding": the alarm message (a warning on the screen that something is wrong). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.alarmmelding': placeholder('🚨', 'proces'),
} as Record<string, () => JSX.Element>;
