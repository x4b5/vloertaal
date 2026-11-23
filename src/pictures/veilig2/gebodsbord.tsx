import type { JSX } from 'react';
import { PAL, Shine } from '../kit';

export default {
  // "het gebodsbord": the mandatory sign — a solid blue round sign as in ISO 7010 (M014, wear a safety
  // helmet): a white head seen from the side with a white hard hat on it. No text.
  'w.gebodsbord': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The depth edge and the blue disc, a darker step on its right */}
      <circle cx="60" cy="63" r="48" fill={PAL.blueShade} />
      <circle cx="60" cy="59" r="48" fill={PAL.blue} />
      <path d="M90 22A48 48 0 0 1 60 107A52 52 0 0 0 90 22Z" fill={PAL.blueShade} opacity=".6" />
      {/* The head and neck in profile, facing left */}
      <g fill={PAL.white}>
        <path d="M44 60Q44 50 52 48H72Q80 52 80 64Q80 76 74 82V94H54V86Q48 84 46 78L40 74L44 68Z" />
        {/* The hard hat: dome, ridge and brim */}
        <path d="M38 54Q38 26 62 26Q84 26 86 52Z" />
        <rect x="32" y="50" width="58" height="7" rx="3.5" />
      </g>
      <path d="M62 28V52" stroke={PAL.blue} strokeWidth="3" />
      <Shine d="M22 44Q30 22 52 14" width={4} opacity={0.5} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
