import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de zwaailamp": the flashing light (an orange light on top of a machine). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.zwaailamp': placeholder('🟠', 'afval'),
} as Record<string, () => JSX.Element>;
