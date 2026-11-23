import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "het lotnummer": the batch number (one number for one batch of products). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.lotnummer': placeholder('#️⃣', 'voeding'),
} as Record<string, () => JSX.Element>;
