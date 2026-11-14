import type { JSX, ReactNode } from 'react';
import { Bust } from './bust';
import { Clock, Hand, PAL, SKIN, Shade, Shine, Sparkle } from './kit';

/**
 * Word pictures, group 42 (keyed by word id). See docs/tekenstijl.md and ./kit.tsx.
 *
 * The sector lessons of 14 November 2026: Productie (u.factory: l.shifts).
 *
 * "Handing over your shift" (l.shifts): the three shifts are one family, a round piece of sky with
 * a clock in front of it, and differ in the colour of the sky, in what stands in it and in the
 * hands of the clock:
 *  - the early shift: a light-blue morning sky, half a sun with rays coming up over green ground,
 *    the clock at six (the hands make one upright line);
 *  - the late shift: an orange evening sky, a round sun without rays sinking behind dark purple
 *    ground, the clock at three (the hands make a corner);
 *  - the night shift: a navy night sky, a crescent moon and stars, no ground, the clock at eleven.
 *  - the team leader: Amina in front in a yellow hi-vis vest with a clipboard, her team (Bram and
 *    Jada, small) behind her. Unlike "de leidinggevende" (Henk alone, white helmet, radio), "de
 *    baas" (Henk in a tie above two workers, pointing) and "de collega" (two people side by side,
 *    the same size).
 * "de overdracht" and "aflossen" have no picture.
 */

const SKY_CX = 52;
const SKY_CY = 52;
const SKY_R = 42;

/** The ground of a sky badge: the part of the round below the horizon at `y`. */
function horizon(y: number): string {
  const dx = Math.sqrt(SKY_R * SKY_R - (y - SKY_CY) * (y - SKY_CY));
  return `M${(SKY_CX - dx).toFixed(1)} ${y}A${SKY_R} ${SKY_R} 0 0 0 ${(SKY_CX + dx).toFixed(1)} ${y}Z`;
}

/** A round piece of sky with a depth edge; `children` stand in it, the shift's clock in front. */
function ShiftSky({ sky, edge, hour, children }: { sky: string; edge: string; hour: number; children: ReactNode }) {
  return (
    <g>
      <circle cx={SKY_CX} cy={SKY_CY + 3.5} r={SKY_R} fill={edge} />
      <circle cx={SKY_CX} cy={SKY_CY} r={SKY_R} fill={sky} />
      {children}
      {/* A ring in the card's grey keeps the clock apart from the sky */}
      <circle cx="84" cy="83" r="26.5" fill={PAL.slateDark} opacity=".28" />
      <Clock cx={84} cy={82} r={24} hour={hour} minute={0} rim={PAL.steel} rimShade={PAL.slate} />
    </g>
  );
}

export default {
  // "de vroege dienst": the early shift — a light-blue morning sky, half a sun with rays coming up
  // over the ground; the clock stands at six.
  'w.vroegedienst': () => {
    const cx = 44;
    const cy = 64;
    const r = 19;
    const rays = [-165, -127.5, -90, -52.5, -15].map((deg) => {
      const a = (deg * Math.PI) / 180;
      return `M${(cx + Math.cos(a) * r * 1.3).toFixed(1)} ${(cy + Math.sin(a) * r * 1.3).toFixed(1)}L${(cx + Math.cos(a) * r * 1.8).toFixed(1)} ${(cy + Math.sin(a) * r * 1.8).toFixed(1)}`;
    });
    return (
      <ShiftSky sky={PAL.ice} edge={PAL.sky} hour={6}>
        <path d={rays.join('')} stroke={PAL.orange} strokeWidth="5.5" strokeLinecap="round" />
        <Shade color={PAL.orange} opacity={0.5} at={[cx + r * 1.1, cy, r * 0.55, r * 1.3]}>
          <path d={`M${cx - r} ${cy}A${r} ${r} 0 0 1 ${cx + r} ${cy}Z`} fill={PAL.yellow} />
        </Shade>
        <Shine d={`M${cx - r * 0.62} ${cy - r * 0.2}A${r * 0.66} ${r * 0.66} 0 0 1 ${cx - r * 0.1} ${cy - r * 0.62}`} color={PAL.yellowShine} width={3.6} opacity={0.9} />
        <path d={horizon(cy)} fill={PAL.green} />
      </ShiftSky>
    );
  },

  // "de late dienst": the late shift — an orange evening sky, a round sun without rays going down
  // behind dark ground; the clock stands at three.
  'w.latedienst': () => (
    <ShiftSky sky={PAL.orangeLight} edge={PAL.orangeShade} hour={3}>
      <circle cx="42" cy="59" r="25" fill={PAL.yellowLight} opacity=".45" />
      <circle cx="42" cy="59" r="18" fill={PAL.yellow} />
      <Shine d="M29.5 56A13 13 0 0 1 39 46.5" color={PAL.yellowShine} width={3.6} opacity={0.9} />
      <path d={horizon(66)} fill={PAL.purpleShade} />
    </ShiftSky>
  ),

  // "de nachtdienst": the night shift — a navy night sky with a crescent moon and stars; the clock
  // stands at eleven.
  'w.nachtdienst': () => {
    const x = 42;
    const y = 48;
    const r = 21;
    const moon =
      `M${x + r * 0.15} ${y - r}A${r} ${r} 0 1 0 ${x + r * 0.95} ${y + r * 0.35}` +
      `A${r * 0.82} ${r * 0.82} 0 0 1 ${x + r * 0.15} ${y - r}Z`;
    return (
      <ShiftSky sky={PAL.navy} edge={PAL.navyShade} hour={11}>
        <Shade color={PAL.yellowShade} opacity={0.9} at={[x + r * 0.5, y + r * 1.1, r * 0.9, r * 0.5]}>
          <path d={moon} fill={PAL.yellow} />
        </Shade>
        <Shine d={`M${x - r * 0.72} ${y + r * 0.1}A${r * 0.74} ${r * 0.74} 0 0 1 ${x - r * 0.3} ${y - r * 0.6}`} color={PAL.yellowShine} width={3.6} opacity={0.9} />
        <Sparkle x={74} y={30} r={7.5} color={PAL.yellowLight} />
        <Sparkle x={60} y={46} r={4.5} color={PAL.white} />
        <Sparkle x={30} y={82} r={5} color={PAL.white} />
      </ShiftSky>
    );
  },

  // "de teamleider": the team leader — Amina in front in a yellow hi-vis vest, a clipboard in her
  // hand; her team (Bram and Jada, small) stands behind her.
  'w.teamleider': () => (
    <g>
      <Bust who="bram" x={27} y={72} scale={0.46} expr="pleased" />
      <Bust who="jada" x={93} y={72} scale={0.46} expr="pleased" flip />
      <Bust who="amina" x={54} y={122} scale={0.8} expr="pleased" />
      {/* Hi-vis vest over her fleece, in the bust's own box */}
      <g transform="translate(54 122) scale(0.8) translate(-60 -134)">
        <path d="M25 134L26.5 112Q29 101 40 97L53 134ZM95 134L93.5 112Q91 101 80 97L67 134Z" fill={PAL.yellow} />
        <path d="M84 100Q91 103 93.5 112L95 134H86Z" fill={PAL.yellowShade} />
        <path d="M27 121H49M71 121H93" stroke={PAL.paper} strokeWidth="6" />
      </g>
      {/* Clipboard */}
      <rect x="77" y="73" width="30" height="38" rx="3" fill={PAL.cardDark} />
      <rect x="80" y="77" width="24" height="31" rx="1.6" fill={PAL.white} />
      <rect x="85.5" y="70" width="13" height="7.5" rx="2.4" fill={PAL.steel} />
      <path d="M85 86H99M85 93H99M85 100H94" stroke={PAL.line} strokeWidth="2.4" strokeLinecap="round" />
      <Hand pose="hold" x={93} y={128} rotate={-4} scale={0.52} skin={SKIN.amina} sleeve={[PAL.green, PAL.greenShade]} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
