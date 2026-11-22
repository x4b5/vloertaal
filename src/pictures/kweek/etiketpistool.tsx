import { useId, type JSX } from 'react';
import { Ground, Move, PAL, Shade, Shine } from '../kit';

export default {
  // "het etiketpistool": the label gun — a blue hand-held labeller with a dark pistol grip and a
  // grey squeeze lever, a big roll of white labels on its back, and one white label sticking out
  // at its nose on the left.
  'w.etiketpistool': () => {
    const id = `ep-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
    return (
    <g strokeLinejoin="round" transform="translate(4 0)">
      <Ground cx={62} cy={104} rx={34} ry={4} />
      {/* The squeeze lever under the body */}
      <path d="M40 60Q46 86 54 98" fill="none" stroke={PAL.steel} strokeWidth="8" strokeLinecap="round" />
      {/* The pistol grip */}
      <Shade color={PAL.slateDark} opacity={1} at={[82, 90, 8, 20]}>
        <path d="M60 56H82L80 96Q79 102 72 102H66Q60 102 61 96Z" fill={PAL.slate} />
      </Shade>
      <path d="M66 70H76M66 79H76M66 88H76" stroke={PAL.slateDark} strokeWidth="1.8" strokeLinecap="round" />
      {/* The label roll on the back: the paper's edge, the face, the hub */}
      <circle cx="78" cy="34" r="22" fill={PAL.paperShade} />
      <circle cx="75" cy="32" r="21" fill={PAL.paper} />
      <circle cx="75" cy="32" r="13" fill={PAL.white} />
      <path d="M68 25A10 10 0 0 1 75 22" fill="none" stroke={PAL.paperShade} strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="75" cy="32" r="7" fill={PAL.slate} />
      <circle cx="75" cy="32" r="2.6" fill={PAL.steel} />
      {/* The label strip running from the roll along the top to the nose */}
      <path d="M56 40Q40 42 26 46" fill="none" stroke={PAL.paperShade} strokeWidth="5" strokeLinecap="round" />
      {/* The body */}
      <Shade color={PAL.blueShade} opacity={1} at={[96, 62, 20, 16]}>
        <path d="M24 50Q24 44 30 44H88Q96 44 96 52V58Q96 64 88 64H34L24 60Z" fill={PAL.blue} />
      </Shade>
      <rect x="18" y="45" width="10" height="17" rx="3" fill={PAL.slate} />
      <Shine d="M34 48.4H62" width={3} opacity={0.6} />
      {/* The label coming out at the nose (Move: it slides out of the nose; clipped at the nose's
          edge, so it never shows over the nose) */}
      <clipPath id={id}>
        <rect x="-10" y="30" width="30" height="40" />
      </clipPath>
      <g clipPath={`url(#${id})`}>
      <Move kind="from" dx={13}>
      <path d="M6 48L18 46V58L6 60Z" fill={PAL.paperShade} transform="translate(1 3)" />
      <path d="M6 48L18 46V58L6 60Z" fill={PAL.white} />
      <path d="M9 52L15 51M9 55.5L14 54.6" stroke={PAL.line} strokeWidth="1.4" strokeLinecap="round" />
      </Move>
      </g>
    </g>
    );
  },
} as Record<string, () => JSX.Element>;
