import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de checklist": the checklist (a list of things to check). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.checklist': placeholder('📋', 'basis'),
} as Record<string, () => JSX.Element>;
