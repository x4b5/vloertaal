import type { JSX } from 'react';
import { Arrow, Calendar, CurveArrow, ExclaimMark, Ground, PAL, Shade, Shine } from './kit';

/**
 * Memory pictures (Word.picture 'hook'), group 34. See docs/tekenstijl.md ("Geheugenplaatjes").
 *
 * Words that are hard because they are abstract, but that have one plain, familiar scene to hang
 * the word on (the owner's question, 2 November 2026: where does a picture still help?). The
 * help-language gloss says what the word means; the picture is only a hook to remember it by. So
 * these pictures are shown on the word's intro card only, never in a "Which picture is it?" choice
 * or a match (src/lib/wordPicture.ts hasPicture / introPicture). Each one passes three questions:
 * one scene (no strip, no symbol you must learn first, such as § or a mayor's chain), from the
 * learner's own working life, and nothing in it that points to a wrong meaning.
 */

const r1 = (n: number) => Math.round(n * 10) / 10;

function EuroSign({ cx, cy, s, color, width }: { cx: number; cy: number; s: number; color: string; width?: number }) {
  const w = width ?? Math.max(2.4, s * 0.32);
  const ox = cx + s * 0.2;
  const a = (55 * Math.PI) / 180;
  const sx = r1(ox + Math.cos(a) * s);
  const sy = Math.sin(a) * s;
  return (
    <path
      d={`M${sx} ${r1(cy - sy)}A${s} ${s} 0 1 0 ${sx} ${r1(cy + sy)}M${r1(ox - s * 1.35)} ${r1(cy - s * 0.24)}H${r1(ox + s * 0.15)}M${r1(ox - s * 1.35)} ${r1(cy + s * 0.24)}H${r1(ox + s * 0.05)}`}
      fill="none"
      stroke={color}
      strokeWidth={w}
      strokeLinecap="round"
    />
  );
}

/** A gold euro coin seen from the front, centred on (cx, cy). */
function Coin({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  return (
    <g>
      <circle cx={cx} cy={cy + r * 0.14} r={r} fill={PAL.yellowShade} />
      <Shade color={PAL.yellowShade} opacity={0.8} at={[cx + r * 1.15, cy, r * 0.5, r * 1.3]}>
        <circle cx={cx} cy={cy} r={r} fill={PAL.yellow} />
      </Shade>
      <EuroSign cx={cx} cy={cy} s={r * 0.44} color={PAL.yellowShade} />
      <Shine d={`M${r1(cx - r * 0.62)} ${r1(cy - r * 0.18)}A${r * 0.66} ${r * 0.66} 0 0 1 ${r1(cx - r * 0.18)} ${r1(cy - r * 0.62)}`} color={PAL.yellowShine} width={Math.max(2.4, r * 0.14)} opacity={0.9} />
    </g>
  );
}

/** A stack of `n` coins seen from the side, bottom centred on (cx, base). `ghost`: faded (gone). */
function CoinStack({ cx, base, n = 4, rx = 13, ghost = false }: { cx: number; base: number; n?: number; rx?: number; ghost?: boolean }) {
  const ry = rx * 0.38;
  const h = 7;
  return (
    <g opacity={ghost ? 0.28 : 1}>
      {Array.from({ length: n }, (_, i) => {
        const y = base - ry - i * h;
        return (
          <g key={i}>
            <path d={`M${cx - rx} ${y - h}V${y}A${rx} ${ry} 0 0 0 ${cx + rx} ${y}V${y - h}Z`} fill={PAL.yellowShade} />
            <path d={`M${cx + rx * 0.45} ${y + ry * 0.9}A${rx} ${ry} 0 0 0 ${cx + rx} ${y}V${y - h}H${cx + rx * 0.45}Z`} fill="#c48f00" opacity=".6" />
            <ellipse cx={cx} cy={y - h} rx={rx} ry={ry} fill={PAL.yellow} />
            {/* The edge between two coins, so the stack reads as coins, not as a tube */}
            {i > 0 && <path d={`M${cx - rx} ${y - h + 0.2}A${rx} ${ry} 0 0 0 ${cx + rx} ${y - h + 0.2}`} fill="none" stroke="#b07f00" strokeWidth="1.6" />}
          </g>
        );
      })}
    </g>
  );
}

/** A small house, its base centred on (x, y): `s` = 1 is 42 wide. */
function House({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <Shade color={PAL.paperShade} opacity={1} at={[30, -18, 14, 30]}>
        <rect x="-21" y="-32" width="42" height="32" rx="2" fill={PAL.paper} />
      </Shade>
      <path d="M-27 -29L0 -54L27 -29Z" fill={PAL.clay} stroke={PAL.clay} strokeWidth="4" strokeLinejoin="round" />
      <path d="M0 -54L27 -29H0Z" fill={PAL.clayShade} stroke={PAL.clayShade} strokeWidth="4" strokeLinejoin="round" />
      <rect x="-6" y="-19" width="12" height="19" rx="2" fill={PAL.wood} />
      <rect x="-17" y="-24" width="9" height="9" rx="1.5" fill={PAL.sky} />
      <rect x="9" y="-24" width="9" height="9" rx="1.5" fill={PAL.sky} />
    </g>
  );
}

export default {
  // "de huur": the rent — a house, a calendar (every month) and a coin going to the house.
  'w.huur': () => (
    <g>
      <Ground cx={40} cy={105} rx={34} ry={4} />
      <House x={40} y={104} s={1.3} />
      <Calendar x={70} y={20} w={40} h={40} mark={2} />
      <Coin cx={96} cy={88} r={13} />
      <Arrow from={[82, 90]} to={[70, 90]} color={PAL.sky} width={6} head={10} />
    </g>
  ),

  // "de borg": the deposit — a coin goes to the house (top arrow) and comes back later (bottom arrow).
  'w.borg': () => (
    <g>
      <Ground cx={86} cy={105} rx={22} ry={3.5} />
      <House x={86} y={104} s={0.95} />
      <Coin cx={26} cy={70} r={16} />
      <CurveArrow from={[38, 46]} to={[66, 44]} bend={-14} color={PAL.sky} width={6} head={10} />
      <CurveArrow from={[66, 96]} to={[38, 94]} bend={-14} color={PAL.green} width={6} head={10} />
    </g>
  ),

  // "de boete": the fine — a ticket with a big red euro sign.
  'w.boete': () => (
    <g transform="rotate(-6 60 60)">
      <rect x="28" y="18" width="64" height="88" rx="5" fill={PAL.paperShade} />
      <rect x="28" y="14" width="64" height="88" rx="5" fill={PAL.white} />
      <path d="M28 19A5 5 0 0 1 33 14H87A5 5 0 0 1 92 19V30H28Z" fill={PAL.red} />
      <EuroSign cx={60} cy={62} s={17} color={PAL.red} width={7} />
      <path d="M40 88H80" stroke={PAL.mist} strokeWidth="4" strokeLinecap="round" />
    </g>
  ),

  // "het verlof": the leave — a calendar and a suitcase: days off work, approved.
  'w.verlof': () => (
    <g>
      <Ground cx={78} cy={106} rx={26} ry={4} />
      <Calendar x={12} y={16} w={62} h={64} mark={6} header={PAL.green} headerShade={PAL.greenShade} />
      <rect x="70" y="56" width="16" height="10" rx="4" fill="none" stroke={PAL.slate} strokeWidth="4" />
      <rect x="56" y="64" width="46" height="40" rx="6" fill={PAL.orangeShade} />
      <Shade color={PAL.orangeShade} opacity={1} at={[104, 84, 8, 24]}>
        <rect x="56" y="62" width="46" height="40" rx="6" fill={PAL.orange} />
      </Shade>
      <path d="M68 62V102M90 62V102" stroke={PAL.orangeShade} strokeWidth="3" />
    </g>
  ),

  // "de wachtdag": the waiting day (no pay) — a calendar day and a coin that is struck out.
  'w.wachtdag': () => (
    <g>
      <Calendar x={12} y={14} w={64} h={66} mark={5} header={PAL.sky} headerShade={PAL.skyShade} />
      <Coin cx={82} cy={82} r={17} />
      <circle cx="82" cy="82" r="23" fill="none" stroke={PAL.red} strokeWidth="6" />
      <path d="M66 66L98 98" stroke={PAL.red} strokeWidth="6" strokeLinecap="round" />
    </g>
  ),

  // "bruto": gross — the whole, tall stack of coins (before anything goes off).
  'w.bruto': () => (
    <g>
      <Ground cx={60} cy={106} rx={34} ry={4} />
      <CoinStack cx={60} base={106} n={11} rx={22} />
    </g>
  ),

  // "netto": net — the same stack, but the top part has gone (faded, an arrow takes it away).
  'w.netto': () => (
    <g>
      <Ground cx={52} cy={106} rx={34} ry={4} />
      <CoinStack cx={52} base={106} n={7} rx={22} />
      <g transform="translate(0 -49)">
        <CoinStack cx={52} base={106} n={4} rx={22} ghost />
      </g>
      <Arrow from={[82, 34]} to={[106, 18]} color={PAL.red} width={6} head={10} />
    </g>
  ),

  // "de feestdag": the public holiday — a calendar with one day marked, under a garland of flags.
  'w.feestdag': () => (
    <g>
      <Calendar x={22} y={34} w={76} h={72} mark={6} />
      <path d="M10 18Q60 38 110 18" fill="none" stroke={PAL.slate} strokeWidth="2.4" />
      {[[22, 22.5, PAL.yellow], [41, 28, PAL.sky], [60, 30, PAL.red], [79, 28, PAL.green], [98, 22.5, PAL.yellow]].map(([x, y, c]) => (
        <path key={x as number} d={`M${(x as number) - 7} ${y}L${(x as number) + 7} ${y}L${x} ${(y as number) + 14}Z`} fill={c as string} />
      ))}
    </g>
  ),

  // "de allergie": the allergy — a peanut with a red warning badge: some food can make you ill.
  'w.allergie': () => (
    <g>
      <Ground cx={52} cy={104} rx={30} ry={4} />
      <g transform="rotate(-28 52 72)">
        <Shade color={PAL.cardShade} opacity={1} at={[78, 72, 12, 30]}>
          <g fill={PAL.card}>
            <ellipse cx="52" cy="52" rx="19" ry="23" />
            <ellipse cx="52" cy="90" rx="19" ry="23" />
            <rect x="40" y="56" width="24" height="30" />
          </g>
        </Shade>
        <path d="M44 42Q52 46 60 42M44 98Q52 102 60 98M42 70Q52 74 62 70" fill="none" stroke={PAL.cardShade} strokeWidth="2" strokeLinecap="round" />
      </g>
      <circle cx="90" cy="34" r="20" fill={PAL.redShade} />
      <circle cx="90" cy="31" r="20" fill={PAL.red} />
      <ExclaimMark x={90} y={31} size={26} color={PAL.white} />
    </g>
  ),

  // "de belasting": the tax — part of your money goes to the state (a building with columns).
  'w.belasting': () => (
    <g>
      <Ground cx={60} cy={106} rx={50} ry={4} />
      <CoinStack cx={26} base={106} n={6} rx={16} />
      <CurveArrow from={[30, 50]} to={[62, 38]} bend={-10} color={PAL.sky} width={6} head={10} />
      <path d="M62 44L86 28L110 44Z" fill={PAL.mist} />
      <rect x="64" y="44" width="44" height="7" fill={PAL.paperShade} />
      {[68, 80, 92, 104].map((x) => (
        <rect key={x} x={x - 3} y="51" width="7" height="44" fill={PAL.paper} />
      ))}
      <rect x="60" y="95" width="52" height="10" rx="2" fill={PAL.mist} />
    </g>
  ),

  // "de zorgverzekering": the health insurance — the insurance card, with a green cross.
  'w.zorgverzekering': () => (
    <g transform="rotate(-8 60 60)">
      <rect x="14" y="34" width="92" height="58" rx="8" fill={PAL.paperShade} />
      <rect x="14" y="30" width="92" height="58" rx="8" fill={PAL.white} />
      <path d="M14 38A8 8 0 0 1 22 30H98A8 8 0 0 1 106 38V44H14Z" fill={PAL.sky} />
      <rect x="24" y="54" width="26" height="26" rx="5" fill={PAL.green} />
      <path d="M37 59V75M29 67H45" stroke={PAL.white} strokeWidth="6" strokeLinecap="round" />
      <path d="M60 60H94M60 72H84" stroke={PAL.mist} strokeWidth="5" strokeLinecap="round" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
