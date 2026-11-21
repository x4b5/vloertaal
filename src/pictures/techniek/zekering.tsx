import type { JSX } from 'react';

/** Placeholder: the drawing of "zekering" follows. */
export default {
  'w.zekering': () => (
    <g>
      <rect x="20" y="20" width="80" height="80" rx="12" fill="#cfd8de" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
