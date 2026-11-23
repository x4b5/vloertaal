import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de mantelzorger": the family carer (a relative or friend who looks after the client). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.mantelzorger': placeholder('🫂', 'zorg2'),
} as Record<string, () => JSX.Element>;
