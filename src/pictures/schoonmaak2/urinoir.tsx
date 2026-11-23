import type { JSX } from 'react';
import { PAL, Shade, Shine } from '../kit';

export default {
  // "het urinoir": the urinal — a tall white urinal on a blue-tiled wall: the rounded bowl open at the
  // front with its drain, and the chrome flush pipe on top.
  'w.urinoir': () => (
    <g strokeLinejoin="round">
      {/* The tiled wall */}
      <rect x="16" y="12" width="88" height="96" rx="4" fill={PAL.ice} opacity=".55" />
      <path d="M16 36H104M16 60H104M16 84H104M38 12V108M60 12V108M82 12V108" stroke={PAL.white} strokeWidth="2" />
      {/* The flush pipe */}
      <rect x="56" y="10" width="8" height="12" rx="2" fill={PAL.steel} />
      <rect x="49" y="12" width="22" height="7" rx="3.5" fill={PAL.steel} />
      <rect x="64" y="12" width="7" height="7" rx="3" fill={PAL.slate} />
      {/* The urinal */}
      <Shade color={PAL.paperShade} opacity={1} at={[86, 60, 12, 50]}>
        <path d="M34 28Q34 20 42 20H78Q86 20 86 28V70Q86 100 60 102Q34 100 34 70Z" fill={PAL.paper} />
      </Shade>
      {/* The open front: the bowl inside */}
      <path d="M43 44Q43 38 50 38H70Q77 38 77 44V68Q77 88 60 90Q43 88 43 68Z" fill={PAL.mist} />
      <path d="M70 38Q77 38 77 44V68Q77 88 60 90Q72 84 72 68V44Q72 38 70 38Z" fill={PAL.steel} opacity=".45" />
      <ellipse cx="60" cy="80" rx="6" ry="3" fill={PAL.slate} />
      <path d="M56 80H64" stroke={PAL.steel} strokeWidth="1.4" />
      <Shine d="M39 34V62" width={3.2} color={PAL.white} opacity={1} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
