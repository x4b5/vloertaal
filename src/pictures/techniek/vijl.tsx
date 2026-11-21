import type { JSX } from 'react';

/** Placeholder: the drawing of "vijl" follows. */
export default {
  'w.vijl': () => (
    <g>
      <rect x="20" y="20" width="80" height="80" rx="12" fill="#cfd8de" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
