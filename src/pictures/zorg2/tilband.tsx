import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de tilband": the sling (it goes under the client, for the hoist). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.tilband': placeholder('🎗️', 'zorg2'),
} as Record<string, () => JSX.Element>;
