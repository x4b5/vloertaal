import type { JSX } from 'react';
import { Move, PAL, Shade, Shine } from '../kit';

const STEEL_DARK = '#5d6a75';

export default {
  // "de goedkeursticker": the approval sticker — a big round green sticker with a white tick on the
  // front of a grey product housing, its bottom right edge still lifted off.
  'w.goedkeursticker': () => (
    <g strokeLinejoin="round">
      <path d="M10 104L88 104L106 90L28 90Z" fill="#000" opacity="0.14" />
      {/* The grey housing: side, top, front */}
      <path d="M86 102L86 34L106 18L106 86Z" fill={STEEL_DARK} />
      <path d="M12 34L86 34L106 18L32 18Z" fill={PAL.mist} />
      <rect x="12" y="34" width="74" height="68" fill={PAL.steel} />
      <path d="M16 38H44" stroke={PAL.mist} strokeWidth="2.4" strokeLinecap="round" opacity="0.8" />
      <path d="M18 94H34" stroke={PAL.slate} strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <Move kind="from" dx={-16} dy={-28}>
        {/* The sticker's shadow on the housing */}
        <circle cx="51" cy="70" r="24" fill="#000" opacity="0.12" />
        {/* The sticker: green disc with the corner on the bottom right lifted (white back showing) */}
        <Shade color={PAL.greenShade} opacity={1} at={[76, 70, 10, 26]}>
          <path d="M48 44A24 24 0 0 0 48 92L62 89L71 75A24 24 0 0 0 48 44Z" fill={PAL.green} />
        </Shade>
        <path d="M71 75L62 89L76 92Z" fill={PAL.paper} />
        <path d="M62 89L76 92" stroke={PAL.paperShade} strokeWidth="2" strokeLinecap="round" />
        <path d="M36 67L45 76L60 58" fill="none" stroke={PAL.white} strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round" />
        <Shine d="M30 60A20 20 0 0 1 41 48" opacity={0.5} width={3} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
