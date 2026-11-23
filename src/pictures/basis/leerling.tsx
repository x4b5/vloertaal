import type { JSX } from 'react';
import { PAL, SKIN, Shade, Shine } from '../kit';

/** A child's head in the cast's flat style (as in group24), centred on (x, y), radius `r`. */
function ChildHead({ x, y, r = 12, skin = SKIN.bram, hair = PAL.brown }: { x: number; y: number; r?: number; skin?: [string, string]; hair?: string }) {
  const k = r / 12;
  return (
    <g transform={`translate(${x} ${y}) scale(${k})`}>
      <circle cx="0" cy="-1.5" r="13.2" fill={hair} />
      <circle cx="-12" cy="2" r="3.2" fill={skin[0]} />
      <circle cx="12" cy="2" r="3.2" fill={skin[1]} />
      <Shade color={skin[1]} opacity={1} at={[13, 4, 6, 16]}>
        <ellipse cx="0" cy="2" rx="11.6" ry="11.2" fill={skin[0]} />
      </Shade>
      <path d="M-12.4 -1Q-12 -13 0 -13.6Q12 -13 12.4 -1Q8 -6.5 1 -7Q-4 -4 -12.4 -1Z" fill={hair} />
      <ellipse cx="-4.6" cy="2.4" rx="1.6" ry="2.1" fill={PAL.ink} />
      <ellipse cx="4.6" cy="2.4" rx="1.6" ry="2.1" fill={PAL.ink} />
      <path d="M-3.6 7Q0 11 3.6 7" fill={PAL.mouth} stroke={PAL.mouth} strokeWidth="1.4" strokeLinecap="round" />
    </g>
  );
}

export default {
  // "de leerling": the student (at school) — a school child with the straps of a backpack, at a
  // school desk, writing in an exercise book with a big yellow pencil.
  'w.leerling': () => {
    const [s] = SKIN.amina;
    return (
      <g strokeLinejoin="round" strokeLinecap="round">
        {/* The body: a sky-blue sweater with backpack straps */}
        <Shade color={PAL.skyShade} opacity={1} at={[92, 80, 10, 30]}>
          <path d="M26 92Q28 62 60 60Q92 62 94 92Z" fill={PAL.sky} />
        </Shade>
        <path d="M42 64L40 92M78 64L80 92" stroke={PAL.purple} strokeWidth="6" />
        <ChildHead x={60} y={40} r={21} skin={SKIN.amina} hair={PAL.ink} />
        {/* The desk */}
        <rect x="8" y="88" width="104" height="18" rx="3" fill={PAL.card} />
        <rect x="8" y="100" width="104" height="6" rx="2" fill={PAL.cardShade} />
        {/* The exercise book */}
        <path d="M30 80H88L92 96H26Z" fill={PAL.paperShade} transform="translate(0 2)" />
        <path d="M30 80H88L92 96H26Z" fill={PAL.white} />
        <path d="M59 80L59 96" stroke={PAL.mist} strokeWidth="1.6" />
        <path d="M33 85H54M32 90H52M65 85H84" stroke={PAL.line} strokeWidth="1.6" />
        {/* The hand with the pencil */}
        <path d="M86 70L71 88" stroke={PAL.yellow} strokeWidth="5" />
        <path d="M71 88L68 93L74 90Z" fill={PAL.ink} />
        <path d="M86 70L89 66" stroke={PAL.redLight} strokeWidth="5" />
        <ellipse cx="78" cy="84" rx="6.5" ry="5" fill={s} />
        <Shine d="M32 66Q38 62 46 61" width={2.6} opacity={0.4} />
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
