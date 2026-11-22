import type { JSX } from 'react';
import { PAL, Shade, Shine } from '../kit';

const SCRATCH = 'M18 88L32 79L42 75L54 65L66 59L78 48L88 42';

export default {
  // "de kras": the scratch — a blue painted panel with one long bright scratch through the paint
  // (light metal showing), and an inspector's magnifier over it that shows the scratch bigger.
  'w.kras': () => {
    const groove = (w: number, k: number) => (
      <g>
        <path d={SCRATCH} fill="none" stroke={PAL.blueShade} strokeWidth={6 * k} strokeLinecap="round" transform="translate(0.8 1.6)" />
        <path d={SCRATCH} fill="none" stroke={PAL.mist} strokeWidth={w} strokeLinecap="round" />
        <path d={SCRATCH} fill="none" stroke={PAL.white} strokeWidth={1.8 * k} strokeLinecap="round" />
      </g>
    );
    return (
      <g strokeLinejoin="round">
        <path d="M10 104L94 104L104 96L20 96Z" fill="#000" opacity="0.14" />
        {/* The panel: its thin edge (right and bottom), then the painted face */}
        <path d="M12 100L94 100L101 94L101 24L94 30Z" fill={PAL.blueShade} />
        <Shade color={PAL.blueShade} opacity={0.5} at={[96, 70, 12, 46]}>
          <rect x="12" y="30" width="82" height="68" rx="2" fill={PAL.blue} />
        </Shade>
        <path d="M12 30L94 30L101 24L19 24Z" fill={PAL.blueLight} />
        <Shine d="M17 36V54" opacity={0.45} width={3} />
        {/* The scratch through the paint */}
        {groove(4.4, 1)}
        {/* The magnifier: lens over the scratch, handle to the bottom right */}
        <path d="M78 60L96 80" stroke={PAL.slateDark} strokeWidth="8" strokeLinecap="round" />
        <circle cx="66" cy="50" r="19" fill={PAL.slate} />
        <clipPath id="kras-lens">
          <circle cx="66" cy="50" r="15" />
        </clipPath>
        <g clipPath="url(#kras-lens)">
          <circle cx="66" cy="50" r="15" fill={PAL.blueLight} />
          <g transform="translate(66 50) scale(1.8) translate(-66 -52)">{groove(4.4, 1)}</g>
        </g>
        <path d="M55 44A12 12 0 0 1 62 38" fill="none" stroke={PAL.white} strokeWidth="2.6" strokeLinecap="round" opacity="0.7" />
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
