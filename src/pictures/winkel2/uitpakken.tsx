import { useId, type JSX } from 'react';
import { Arrow, Box, Hand, Move, PAL, SKIN, Shade, Shine } from '../kit';

export default {
  // "uitpakken": to unpack — an open cardboard box, a hand lifting a red tin up out of it (more tins
  // inside), a blue arrow pointing up. One hand taking out, an arrow up: the other way round from
  // "inpakken" (two hands lowering a product in). On the intro card the hand and the tin come up out of
  // the box: three rounds (tin after tin).
  'w.uitpakken': () => {
    const id = `up-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
    return (
      <g strokeLinejoin="round">
        <ellipse cx="56" cy="106" rx="40" ry="4.5" fill="#000" opacity=".14" />
        <Box x={18} y={66} w={60} h={38} depth={18} open tape={false} />
        {/* Tins still in the box: their lids just above the opening */}
        <ellipse cx="40" cy="58" rx="8" ry="3.4" fill={PAL.steel} />
        <ellipse cx="62" cy="56" rx="8" ry="3.4" fill={PAL.steel} />
        {/* Box front over them */}
        <rect x="18" y="66" width="60" height="38" rx="2" fill={PAL.card} />
        <polygon points="18,66 78,66 73,53 13,53" fill="#f0c48a" />
        <path d="M21 68.2H75" stroke="#f6d3a2" strokeWidth="2" strokeLinecap="round" />
        {/* The tin coming out, with the hand: clipped at the box's front flap */}
        <clipPath id={id}>
          <path d="M0 0H120V53H13L18 66H0Z" />
        </clipPath>
        <g clipPath={`url(#${id})`}>
          <Move kind="from" dy={28}>
            <Shade color={PAL.redShade} opacity={1} at={[60, 34, 6, 18]}>
              <rect x="36" y="18" width="22" height="30" rx="3" fill={PAL.red} />
            </Shade>
            <ellipse cx="47" cy="18" rx="11" ry="3.6" fill={PAL.mist} />
            <rect x="36" y="27" width="22" height="11" fill={PAL.white} />
            <path d="M40 32.5H54" stroke={PAL.line} strokeWidth="1.8" strokeLinecap="round" />
            <Shine d="M39 22V44" width={2.4} opacity={0.5} />
            <Hand pose="hold" x={47} y={2} rotate={180} scale={0.62} skin={SKIN.bram} sleeve={[PAL.blue, PAL.blueShade]} />
          </Move>
        </g>
        <Arrow from={[98, 58]} to={[98, 16]} color={PAL.sky} width={8} head={14} />
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
