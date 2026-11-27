import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de vulling": the filling (the dentist closes the hole in a tooth). PLACEHOLDER (27 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.vulling': placeholder('🩹', 'extra4'),
} as Record<string, () => JSX.Element>;
