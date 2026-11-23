import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "invallen": to fill in (work for someone who is away). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.invallen': placeholder('🔄', 'basis'),
} as Record<string, () => JSX.Element>;
