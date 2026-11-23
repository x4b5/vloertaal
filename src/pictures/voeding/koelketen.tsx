import type { JSX } from 'react';
import { CurveArrow, Ground, Move, PAL, Shade, Shine } from '../kit';

/** A snowflake centred on (x, y), radius r: three crossing bars with a small V at each end. */
const flake = (x: number, y: number, r: number, color: string, w = 3) => {
  const d = [0, 60, 120].map((a) => {
    const t = (a * Math.PI) / 180;
    const c = Math.cos(t) * r;
    const s = Math.sin(t) * r;
    return `M${(x - c).toFixed(1)} ${(y - s).toFixed(1)}L${(x + c).toFixed(1)} ${(y + s).toFixed(1)}`;
  });
  return (
    <g>
      <path d={d.join('')} stroke={color} strokeWidth={w} strokeLinecap="round" />
      <circle cx={x} cy={y} r={w * 0.9} fill={color} />
    </g>
  );
};

export default {
  // "de koelketen": the cold chain (food stays cold all the way) — a white refrigerated lorry with a blue
  // snowflake on its box, a sky-blue arrow over to a tall cold cabinet with a glass door, its snowflake on
  // top: the crate of food goes from cold to cold.
  // On the intro card the crate goes from the lorry into the cabinet. Once and slowly (it arrives once).
  'w.koelketen': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={104} rx={50} ry={4} />
      {/* The lorry: cab on the left, white cooled box behind it */}
      <rect x="12" y="84" width="46" height="6" rx="2" fill={PAL.slateDark} />
      <Shade color={PAL.blueShade} opacity={1} at={[30, 74, 6, 20]}>
        <path d="M11 88V70Q11 62 18 62H28V88Z" fill={PAL.blue} />
      </Shade>
      <path d="M14 72Q14 66 19 66H25V74H14Z" fill={PAL.ice} />
      <Shade color={PAL.paperShade} opacity={1} at={[62, 66, 10, 30]}>
        <rect x="27" y="42" width="33" height="44" rx="3" fill={PAL.paper} />
      </Shade>
      {flake(42, 63, 10, PAL.sky)}
      <circle cx="21" cy="93" r="7" fill={PAL.slateDark} />
      <circle cx="21" cy="93" r="2.6" fill={PAL.steel} />
      <circle cx="49" cy="93" r="7" fill={PAL.slateDark} />
      <circle cx="49" cy="93" r="2.6" fill={PAL.steel} />
      {/* The cold cabinet: white body, dark glass door with shelves */}
      <Shade color={PAL.paperShade} opacity={1} at={[112, 66, 10, 46]}>
        <rect x="72" y="24" width="38" height="80" rx="4" fill={PAL.paper} />
      </Shade>
      <rect x="72" y="24" width="38" height="9" rx="4" fill={PAL.sky} />
      <rect x="77" y="38" width="26" height="61" rx="2.5" fill={PAL.slate} />
      <path d="M78 60H102M78 80H102" stroke={PAL.steel} strokeWidth="2.4" strokeLinecap="round" />
      <rect x="79" y="49" width="9" height="10" rx="1.5" fill={PAL.green} />
      <rect x="90" y="69" width="10" height="10" rx="1.5" fill={PAL.red} />
      <rect x="79" y="89" width="9" height="9" rx="1.5" fill={PAL.yellow} />
      {/* The crate going in, onto the middle shelf */}
      <Move kind="from" dx={-46} dy={8} once>
        <rect x="79" y="66" width="10" height="13" rx="1.6" fill={PAL.blue} />
        <rect x="80.5" y="68" width="7" height="2.4" rx="1" fill={PAL.blueShade} />
      </Move>
      <Shine d="M80 42V54" width={2.4} opacity={0.5} />
      {flake(91, 15, 6, PAL.sky, 2.6)}
      {/* From cold to cold */}
      <CurveArrow from={[38, 34]} to={[68, 28]} bend={10} color={PAL.sky} width={6} head={10} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
