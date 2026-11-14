import { useId, type JSX } from 'react';
import { Ground, Motion, PAL, Shade, Shine, Tick } from './kit';

/**
 * Word pictures, group 47 (keyed by word id). See docs/tekenstijl.md and ./kit.tsx.
 *
 * The sector lessons of 14 November 2026: Tuinbouw (u.kas: l.plantcare, l.outdoors).
 *  - "Caring for the plant" (l.plantcare): the leaf (one big bright-green leaf, slanted, with its
 *    midrib), the stem (one thick dark-green upright stem with nodes on a growing block; its
 *    leaves are small and pale), the flower (a yellow star with an orange heart), to cut (red
 *    scissors, open, round a leaf stalk; the leaf drops off), the tomato (one big red ball with a
 *    green crown) and ripe (two tomatoes: the big red one has a tick, the small one is still
 *    green). Leaf, stem and flower differ in shape and colour; the tomato is one ball, "ripe" is
 *    a pair with a blue badge.
 *  - "Working outside" (l.outdoors): the field (a framed view: green crop rows over brown soil
 *    running to a horizon under a blue sky), the rain (a light grey cloud, many blue drops), the
 *    sun (one big yellow disc with rays, nothing else: "de hitte" has a thermometer, "het weer" a
 *    cloud), the boots (a pair of tall green rubber boots; the safety shoes are low and brown),
 *    the rain suit (a yellow hooded jacket over yellow trousers, drops around it) and the
 *    thunderstorm (a dark cloud with a big yellow bolt, no drops).
 */

/** A tomato: a slightly flat ball with a green crown and a short stalk. */
function Tomato({ x, y, r, ripe = true }: { x: number; y: number; r: number; ripe?: boolean }) {
  const [base, shade] = ripe ? [PAL.red, PAL.redShade] : [PAL.leaf, PAL.leafShade];
  const top = y - r * 0.9;
  return (
    <g>
      <Shade color={shade} opacity={1} at={[x + r * 1.05, y + r * 0.1, r * 0.62, r * 1.3]}>
        <ellipse cx={x} cy={y} rx={r} ry={r * 0.92} fill={base} />
      </Shade>
      <Shine d={`M${x - r * 0.7} ${y - r * 0.18}Q${x - r * 0.62} ${y - r * 0.56} ${x - r * 0.3} ${y - r * 0.68}`} width={Math.max(2.4, r * 0.11)} opacity={0.6} />
      <path d={`M${x} ${top + r * 0.1}V${top - r * 0.3}`} stroke={PAL.greenShade} strokeWidth={Math.max(2.6, r * 0.14)} strokeLinecap="round" />
      <g transform={`translate(${x} ${top + r * 0.14}) scale(1 .6)`} fill={ripe ? PAL.green : PAL.greenShade}>
        {[36, 108, 180, 252, 324].map((a) => (
          <ellipse key={a} cx="0" cy={-r * 0.3} rx={r * 0.13} ry={r * 0.36} transform={`rotate(${a})`} />
        ))}
      </g>
    </g>
  );
}

/** A cloud with a depth edge underneath; about 89 wide and 48 tall, top-left near (16, 23). */
function Cloud({ fill, shade, depth, shine }: { fill: string; shade: string; depth: string; shine: string }) {
  const d = 'M38 84Q24 84 24 72Q24 60 38 60Q40 44 58 44Q74 44 78 56Q96 54 98 70Q98 84 84 84Z';
  return (
    <g transform="translate(-13 -32) scale(1.2)">
      <path d={d} fill={depth} transform="translate(0 3)" />
      <Shade color={shade} opacity={1} at={[104, 76, 20, 30]}>
        <path d={d} fill={fill} />
      </Shade>
      <Shine d="M32 68Q34 63 40 62" width={3} opacity={0.7} color={shine} />
    </g>
  );
}

/** A rain drop, its point up, centred on (x, y). */
function Drop({ x, y, s = 1, slant = 18 }: { x: number; y: number; s?: number; slant?: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${slant}) scale(${s})`}>
      <path d="M0 -9Q6 -1 6 3A6 6 0 0 1 -6 3Q-6 -1 0 -9Z" fill={PAL.sky} />
      <path d="M0 -9Q6 -1 6 3A6 6 0 0 1 0 9Z" fill={PAL.skyShade} opacity=".55" />
    </g>
  );
}

/** A tall rubber boot seen from the side, toe to the left; 56 wide and 82 tall at scale 1. */
function Boot({ x, y, s = 1, back = false }: { x: number; y: number; s?: number; back?: boolean }) {
  const base = back ? PAL.greenShade : PAL.green;
  const shade = back ? '#23622c' : PAL.greenShade;
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <rect x="0" y="72" width="57" height="10" rx="4" fill={PAL.slateDark} />
      <Shade color={shade} opacity={1} at={[60, 40, 16, 60]}>
        <path d="M29 2H56V70Q56 77 49 77H10Q0 77 0 68Q0 59 12 56Q27 53 29 42Z" fill={base} />
      </Shade>
      <rect x="27" y="0" width="31" height="9" rx="3.5" fill={back ? PAL.green : '#62bd6f'} />
      {!back && <Shine d="M35 18V40" width={3.4} opacity={0.4} />}
      <path d="M6 66H50" stroke={shade} strokeWidth="2.4" strokeLinecap="round" />
    </g>
  );
}

/** The field: a framed view with rounded corners (the clip needs its own id). */
function Field() {
  const id = `fld-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
  return (
    <g>
      <defs>
        <clipPath id={id}><rect x="10" y="14" width="100" height="92" rx="12" /></clipPath>
      </defs>
      <g clipPath={`url(#${id})`}>
        <rect x="10" y="14" width="100" height="34" fill={PAL.ice} />
        {/* Trees far away on the horizon */}
        <circle cx="26" cy="41" r="7" fill={PAL.greenShade} />
        <circle cx="37" cy="43" r="5" fill={PAL.greenShade} />
        <circle cx="96" cy="43" r="5" fill={PAL.greenShade} />
        <rect x="10" y="46" width="100" height="60" fill={PAL.cardDark} />
        {/* Crop rows running to one point on the horizon */}
        {[-12, 24, 60, 96, 132].map((c) => (
          <polygon key={c} points={`60 44 ${c - 10} 106 ${c + 10} 106`} fill={PAL.leaf} />
        ))}
        {[-12, 24, 60, 96, 132].map((c) => (
          <polygon key={c} points={`60 44 ${c + 3} 106 ${c + 10} 106`} fill={PAL.leafShade} />
        ))}
        <rect x="10" y="44" width="100" height="4" fill={PAL.greenShade} />
      </g>
    </g>
  );
}

export default {
  // "het blad": the leaf — one big bright-green leaf, slanted, with a midrib, veins and a stalk
  'w.plantblad': () => (
    <g transform="translate(58 56) rotate(35)">
      <path d="M0 36V58" stroke={PAL.greenShade} strokeWidth="6" strokeLinecap="round" />
      <path d="M0 -48C24 -34 32 -4 23 18Q15 38 0 41Q-15 38 -23 18C-32 -4 -24 -34 0 -48Z" fill={PAL.leaf} />
      <path d="M0 -48C24 -34 32 -4 23 18Q15 38 0 41Z" fill={PAL.leafShade} />
      <path d="M0 -38V40M0 22L-15 9M0 22L15 9M0 3L-18 -11M0 3L18 -11M0 -16L-13 -27M0 -16L13 -27" fill="none" stroke={PAL.lime} strokeWidth="3" strokeLinecap="round" />
    </g>
  ),

  // "de stengel": the stem — one thick dark-green stem with nodes, upright on a growing block; the
  // leaves on its side shoots are small and pale
  'w.stengel': () => (
    <g>
      <Ground cy={106} rx={26} ry={4} />
      {/* Side shoots with pale leaves */}
      <path d="M60 80L36 66M61 54L86 40M61 30L42 18" stroke={PAL.lime} strokeWidth="3.4" strokeLinecap="round" />
      <ellipse cx="29" cy="62" rx="12" ry="6.5" fill={PAL.lime} transform="rotate(28 29 62)" />
      <ellipse cx="93" cy="36" rx="12" ry="6.5" fill={PAL.lime} transform="rotate(-28 93 36)" />
      <ellipse cx="36" cy="15" rx="10" ry="5.5" fill={PAL.lime} transform="rotate(28 36 15)" />
      {/* The stem */}
      <path d="M60 96Q57 56 62 12" fill="none" stroke={PAL.greenShade} strokeWidth="12" strokeLinecap="round" />
      <path d="M58 96Q55 56 60 13" fill="none" stroke={PAL.green} strokeWidth="6.5" strokeLinecap="round" />
      <ellipse cx="59.6" cy="80" rx="9" ry="4.2" fill={PAL.greenShade} />
      <ellipse cx="59.6" cy="54" rx="9" ry="4.2" fill={PAL.greenShade} />
      <ellipse cx="60.6" cy="30" rx="9" ry="4.2" fill={PAL.greenShade} />
      {/* Growing block */}
      <rect x="42" y="90" width="36" height="16" rx="3" fill={PAL.paper} />
      <rect x="42" y="100" width="36" height="6" rx="3" fill={PAL.mist} />
    </g>
  ),

  // "de bloem": the flower — a yellow star of five petals with an orange heart on a short stalk
  'w.bloem': () => (
    <g>
      <path d="M60 60Q57 86 60 108" fill="none" stroke={PAL.green} strokeWidth="6" strokeLinecap="round" />
      <ellipse cx="74" cy="88" rx="13" ry="6.5" fill={PAL.green} transform="rotate(-30 74 88)" />
      <Shade color={PAL.yellowShade} opacity={1} at={[100, 52, 18, 50]}>
        <g fill={PAL.yellow}>
          {[0, 72, 144, 216, 288].map((a) => (
            <ellipse key={a} cx="60" cy="27" rx="10" ry="17.5" transform={`rotate(${a} 60 46)`} />
          ))}
        </g>
      </Shade>
      <circle cx="60" cy="46" r="11" fill={PAL.orange} />
      <path d="M60 35A11 11 0 0 1 60 57A16 16 0 0 0 60 35Z" fill={PAL.orangeShade} />
      <Shine d="M56 24Q56 18 59 15" color={PAL.yellowShine} width={3} opacity={0.8} />
    </g>
  ),

  // "knippen": to cut with scissors — open red scissors round a leaf stalk; the cut leaf drops off
  'w.knippen': () => (
    <g>
      {/* The stalk from the plant, and the leaf that is cut off */}
      <path d="M86 10V54" stroke={PAL.green} strokeWidth="6" strokeLinecap="round" />
      <g transform="rotate(14 88 70)">
        <path d="M88 70V84" stroke={PAL.green} strokeWidth="6" strokeLinecap="round" />
        <ellipse cx="88" cy="96" rx="10" ry="14" fill={PAL.leaf} />
        <path d="M88 82A10 14 0 0 1 88 110Z" fill={PAL.leafShade} />
      </g>
      <Motion x={98} y={62} dir={0} spread={50} n={3} len={7} gap={4} />
      {/* Scissors: two halves crossing at the pivot */}
      <g transform="translate(52 62)">
        <g transform="rotate(14) scale(1 -1)">
          <path d="M-4 0L-24 12" stroke={PAL.redShade} strokeWidth="7.5" strokeLinecap="round" />
          <circle cx="-31" cy="16" r="10" fill="none" stroke={PAL.redShade} strokeWidth="7.5" />
          <path d="M-8 -6L40 -3L47 1L-8 7Z" fill={PAL.steel} strokeLinejoin="round" stroke={PAL.steel} strokeWidth="2" />
        </g>
        <g transform="rotate(-14)">
          <path d="M-4 0L-24 12" stroke={PAL.red} strokeWidth="7.5" strokeLinecap="round" />
          <circle cx="-31" cy="16" r="10" fill="none" stroke={PAL.red} strokeWidth="7.5" />
          <path d="M-8 -6L40 -3L47 1L-8 7Z" fill={PAL.mist} strokeLinejoin="round" stroke={PAL.mist} strokeWidth="2" />
          <path d="M0 -3L36 -1" stroke={PAL.white} strokeWidth="1.6" strokeLinecap="round" opacity=".8" />
        </g>
        <circle cx="0" cy="0" r="4" fill={PAL.slate} />
      </g>
    </g>
  ),

  // "de tomaat": the tomato — one big red tomato with its green crown
  'w.tomaat': () => (
    <g>
      <Ground cy={104} rx={30} ry={4.5} />
      <Tomato x={60} y={66} r={39} />
    </g>
  ),

  // "rijp": ripe — a big red tomato with a tick; the small one next to it is still green
  'w.rijp': () => (
    <g>
      <Ground cx={56} cy={104} rx={44} ry={4.5} />
      <Tomato x={94} y={88} r={14} ripe={false} />
      <Tomato x={44} y={72} r={31} />
      <Tick x={88} y={32} r={17} />
    </g>
  ),

  // "het land": the field — green crop rows over brown soil running to the horizon, sky above
  'w.land': () => (
    <g>
      <Field />
    </g>
  ),

  // "de regen": the rain — a light grey cloud with many blue drops falling from it
  'w.regen': () => (
    <g>
      <Drop x={30} y={82} />
      <Drop x={54} y={82} />
      <Drop x={78} y={82} />
      <Drop x={40} y={101} />
      <Drop x={64} y={101} />
      <Drop x={88} y={101} />
      <Cloud fill={PAL.mist} shade={PAL.line} depth={PAL.steel} shine={PAL.white} />
    </g>
  ),

  // "de zon": the sun — one big yellow sun with rays, nothing else
  'w.zon': () => (
    <g>
      <g stroke={PAL.orange} strokeWidth="8" strokeLinecap="round">
        {Array.from({ length: 8 }, (_, i) => {
          const a = (i * 45 * Math.PI) / 180;
          const p = (d: number) => `${Math.round(60 + Math.cos(a) * d)} ${Math.round(60 + Math.sin(a) * d)}`;
          return <path key={i} d={`M${p(36)}L${p(45)}`} />;
        })}
      </g>
      <Shade color={PAL.orange} opacity={0.75} at={[86, 72, 18, 34]}>
        <circle cx="60" cy="60" r="27" fill={PAL.yellow} />
      </Shade>
      <Shine d="M44 54Q46 44 56 41" color={PAL.yellowShine} width={4.5} opacity={0.85} />
    </g>
  ),

  // "de laarzen": the boots — a pair of tall green rubber boots
  'w.laarzen': () => (
    <g>
      <Ground cx={60} cy={105} rx={48} ry={4.5} />
      <Boot x={46} y={12} s={1.04} back />
      <Boot x={12} y={16} s={1.08} />
    </g>
  ),

  // "het regenpak": the rain suit — a yellow jacket with a hood over yellow trousers, drops around
  'w.regenpak': () => (
    <g>
      <Shade color={PAL.yellowShade} opacity={1} at={[98, 60, 28, 60]}>
        <g fill={PAL.yellow}>
          <path d="M45 30Q44 10 60 10Q76 10 75 30Z" />
          <path d="M42 27H78L104 60L93 69L81 54V64H39V54L27 69L16 60Z" strokeLinejoin="round" stroke={PAL.yellow} strokeWidth="3" />
          <path d="M40 69H80L84 108H66L60 80L54 108H36Z" strokeLinejoin="round" stroke={PAL.yellow} strokeWidth="2" />
        </g>
      </Shade>
      {/* Hood opening, zip, and the dark gap between jacket and trousers */}
      <ellipse cx="60" cy="22" rx="9" ry="8" fill={PAL.orangeShade} />
      <path d="M60 32V64" stroke={PAL.yellowShade} strokeWidth="2.6" strokeLinecap="round" />
      <path d="M46 44H54M66 44H74" stroke={PAL.yellowShade} strokeWidth="2.6" strokeLinecap="round" />
      <Drop x={20} y={24} s={0.8} />
      <Drop x={98} y={22} s={0.8} />
      <Drop x={104} y={88} s={0.8} />
      <Drop x={18} y={92} s={0.8} />
    </g>
  ),

  // "het onweer": the thunderstorm — a dark cloud with a big yellow lightning bolt
  'w.onweer': () => (
    <g>
      <Cloud fill="#5f6f7c" shade={PAL.slate} depth={PAL.slate} shine={PAL.mist} />
      <path d="M60 56L40 86H54L46 110L80 76H65L76 56Z" fill={PAL.yellowShade} transform="translate(2 1.5)" />
      <path d="M60 56L40 86H54L46 110L80 76H65L76 56Z" fill={PAL.yellow} strokeLinejoin="round" stroke={PAL.yellow} strokeWidth="1.5" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
