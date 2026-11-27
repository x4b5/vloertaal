import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "invullen": to fill in (a form). PLACEHOLDER (27 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.invullen': placeholder('🖊️', 'extra4'),
} as Record<string, () => JSX.Element>;
