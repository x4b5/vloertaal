import type { JSX } from 'react';
import { Move, PAL, Shade, Shine } from '../kit';

export default {
  // "de zwaailamp": the flashing light — a big orange rotating beacon up close on the yellow roof of
  // a machine: a dark base, a ribbed orange dome lit from inside, and orange beams of light to the
  // sides.
  // On the intro card the beams appear: the light goes on (once, one fade, never a flash).
  'w.zwaailamp': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The roof of the machine */}
      <path d="M8 96Q8 90 14 90H106Q112 90 112 96V108H8Z" fill={PAL.yellow} />
      <path d="M8 100H112V108H8Z" fill={PAL.yellowShade} />
      {/* The base */}
      <rect x="34" y="76" width="52" height="16" rx="4" fill={PAL.slate} />
      <rect x="72" y="76" width="14" height="16" rx="4" fill={PAL.slateDark} />
      {/* The dome */}
      <Shade color={PAL.orangeShade} opacity={1} at={[86, 54, 12, 30]}>
        <path d="M38 78V50Q38 28 60 28Q82 28 82 50V78Z" fill={PAL.orange} />
      </Shade>
      <path d="M50 34V78M60 30V78M70 34V78" stroke={PAL.orangeShade} strokeWidth="2" opacity=".6" />
      <ellipse cx="57" cy="56" rx="9" ry="14" fill={PAL.yellow} opacity=".85" />
      <rect x="58" y="22" width="4" height="8" rx="2" fill={PAL.slate} />
      <Shine d="M43 64V50Q43 38 52 34" width={3.6} opacity={0.65} />
      {/* The beams */}
      <Move kind="show" once>
        <g stroke={PAL.orangeLight} strokeWidth="6">
          <path d="M28 52H12M30 34L18 22M90 34L102 22M92 52H108" />
        </g>
        <path d="M60 16V8" stroke={PAL.orangeLight} strokeWidth="6" />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
