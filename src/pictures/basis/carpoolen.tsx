import type { JSX } from 'react';
import { Move, PAL, SKIN, Shade, Shine } from '../kit';

/** A head seen through a car window: a face and its hair (or scarf, or hard hat). */
const head = (x: number, y: number, skin: string, hair: string, scarf = false) =>
  scarf ? (
    <g>
      <circle cx={x} cy={y} r="7.4" fill={hair} />
      <ellipse cx={x + 1} cy={y + 1.2} rx="4.4" ry="5" fill={skin} />
    </g>
  ) : (
    <g>
      <circle cx={x} cy={y} r="6.2" fill={skin} />
      <path d={`M${x - 6.6} ${y - 0.6}Q${x - 6.6} ${y - 7.6} ${x} ${y - 7.6}Q${x + 6.6} ${y - 7.6} ${x + 6.6} ${y - 0.6}Q${x + 1} ${y - 4} ${x - 6.6} ${y - 0.6}Z`} fill={hair} />
    </g>
  );

export default {
  // "carpoolen": to carpool (drive to work together in one car) — one small blue car, full: four
  // colleagues in its windows (two in front, two in the back), on the road. On the intro card the car
  // drives in from the left and stops (once, slowly: a vehicle comes in).
  'w.carpoolen': () => (
    <g strokeLinejoin="round">
      {/* The road */}
      <rect x="6" y="96" width="108" height="12" rx="4" fill={PAL.slate} />
      <path d="M14 102H28M42 102H56M70 102H84M98 102H108" stroke={PAL.paperShade} strokeWidth="2.4" strokeLinecap="round" />
      <Move kind="slow" dx={-44} once>
        {/* The body */}
        <Shade color={PAL.blueShade} opacity={1} at={[112, 72, 20, 40]}>
          <path d="M10 86V60Q10 50 18 45L28 37Q32 34 38 34H70Q76 34 80 38L94 54L104 57Q110 59 110 66V86Q110 90 106 90H14Q10 90 10 86Z" fill={PAL.blue} />
        </Shade>
        {/* The windows and the four colleagues */}
        <path d="M18 56V50Q18 46 21 44L30 39H51V56Z" fill={PAL.ice} />
        <path d="M55 39H70Q73 39 75 41L88 56H55Z" fill={PAL.ice} />
        {head(30, 49, SKIN.amina[0], PAL.purple, true)}
        {head(43, 49, SKIN.henk[0], PAL.steel)}
        {head(63, 49, SKIN.jada[0], PAL.brown)}
        {head(77, 50, SKIN.bram[0], PAL.yellow)}
        <rect x="10" y="56" width="98" height="3" fill={PAL.blueShade} opacity=".5" />
        <path d="M53 58V84" stroke={PAL.blueShade} strokeWidth="1.8" strokeLinecap="round" />
        <rect x="58" y="62" width="8" height="3" rx="1.5" fill={PAL.blueShade} />
        <rect x="102" y="61" width="8" height="6" rx="2.5" fill={PAL.yellowLight} />
        <rect x="10" y="60" width="5" height="9" rx="2" fill={PAL.red} />
        <Shine d="M22 44L30 37.5" width={3} opacity={0.7} />
        {/* The wheels */}
        <circle cx="30" cy="90" r="11" fill={PAL.slateDark} />
        <circle cx="30" cy="90" r="4.6" fill={PAL.steel} />
        <circle cx="88" cy="90" r="11" fill={PAL.slateDark} />
        <circle cx="88" cy="90" r="4.6" fill={PAL.steel} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
