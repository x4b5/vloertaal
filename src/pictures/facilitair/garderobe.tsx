import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de garderobe": the cloakroom (where you hang your coat). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.garderobe': placeholder('🧣', 'facilitair'),
} as Record<string, () => JSX.Element>;
