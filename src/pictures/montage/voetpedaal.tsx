import type { JSX } from 'react';

/** Placeholder: the drawing of "voetpedaal" follows. */
export default {
  'w.voetpedaal': () => (
    <g>
      <rect x="20" y="20" width="80" height="80" rx="12" fill="#cfd8de" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
