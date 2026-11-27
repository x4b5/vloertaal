import type { JSX } from 'react';
import { CastHead } from '../../components/Characters';
import { PAL, Shade, Shine } from '../kit';

/** A small sample pot on the bench at x: a clear jar with coloured contents and a cap. */
const pot = (x: number, fill: string, shade: string) => (
  <g>
    <rect x={x - 6} y="62" width="12" height="16" rx="2.4" fill={PAL.white} opacity=".9" />
    <rect x={x - 5} y="67" width="10" height="10" rx="2" fill={fill} />
    <rect x={x + 1} y="67" width="4" height="10" rx="1.6" fill={shade} />
    <rect x={x - 6.5} y="59" width="13" height="5" rx="1.6" fill={PAL.slate} />
  </g>
);

export default {
  // "het laboratorium": the laboratory (the lab: here they test the product) — a white lab bench with a
  // microscope on the left and three small sample pots with red, yellow and blue contents; behind the
  // bench Jada in a white lab coat, looking at the samples.
  'w.laboratorium': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* Jada in her lab coat, behind the bench */}
      <Shade color={PAL.paperShade} opacity={1} at={[112, 66, 10, 24]}>
        <path d="M70 80V60Q70 46 88 46Q106 46 106 60V80Z" fill={PAL.white} />
      </Shade>
      <path d="M82 47L88 58L94 47Z" fill={PAL.sky} />
      <path d="M82 47L88 58L84 62L78 50ZM94 47L88 58L92 62L98 50Z" fill={PAL.paperShade} />
      <path d="M88 60V80" stroke={PAL.mist} strokeWidth="1.8" />
      <g transform="translate(88 48) scale(0.36) translate(-60 -96)">
        <CastHead who="jada" expr="thinking" gaze={[-1, 0.4]} bold />
      </g>
      {/* The bench: top, front with doors */}
      <path d="M6 82L12 76H114L108 82Z" fill={PAL.paperShade} />
      <rect x="6" y="82" width="102" height="24" rx="2" fill={PAL.mist} />
      <path d="M40 84V104M74 84V104" stroke={PAL.steel} strokeWidth="1.6" />
      <path d="M32 92H36M66 92H70M100 92H104" stroke={PAL.steel} strokeWidth="2.4" />
      {/* The microscope */}
      <rect x="14" y="72" width="26" height="6" rx="2" fill={PAL.slate} />
      <path d="M34 72V52Q34 44 28 40" fill="none" stroke={PAL.slate} strokeWidth="6" />
      <rect x="18" y="60" width="16" height="4" rx="1.6" fill={PAL.slateDark} />
      <g transform="rotate(-28 24 36)">
        <rect x="19" y="22" width="10" height="26" rx="3" fill={PAL.paper} />
        <rect x="25" y="22" width="4" height="26" rx="2" fill={PAL.paperShade} />
        <rect x="18" y="18" width="12" height="6" rx="2" fill={PAL.slate} />
        <rect x="21" y="48" width="6" height="6" rx="1.6" fill={PAL.slateDark} />
      </g>
      {/* Three sample pots */}
      {pot(52, PAL.red, PAL.redShade)}
      {pot(68, PAL.yellow, PAL.yellowShade)}
      {pot(84, PAL.sky, PAL.skyShade)}
      <Shine d="M12 85H40" width={2.4} opacity={0.6} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
