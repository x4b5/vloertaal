import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de alarmknop": the alarm button (the client wears it, to call for help). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.alarmknop': placeholder('🆘', 'zorg2'),
} as Record<string, () => JSX.Element>;
