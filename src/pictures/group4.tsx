import type { JSX } from 'react';
import { Arrow, Box, Ground, Hand, Motion, PAL, SKIN, Shade, Shine } from './kit';

/** Word pictures, group 4 (keyed by word id). See docs/tekenstijl.md and ./kit.tsx. */

/** A flat cardboard box seen from the front (for on a shelf): front, shade side, tape. */
function FlatBox({ x, y, w, h }: { x: number; y: number; w: number; h: number }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="2" fill={PAL.card} />
      <rect x={x + w * 0.72} y={y} width={w * 0.28} height={h} rx="2" fill={PAL.cardShade} />
      <rect x={x + w / 2 - 3} y={y} width="6" height={h * 0.4} fill="#f6dcae" />
      <path d={`M${x + 2.5} ${y + 2}H${x + w * 0.68}`} stroke="#f6d3a2" strokeWidth="2" strokeLinecap="round" />
    </g>
  );
}

/**
 * A warehouse shelving rack seen from the front: blue uprights, orange beams at three levels.
 * `boxes` lists which levels (0 = top, 2 = bottom) carry boxes.
 */
function Rack({ x0 = 16, x1 = 104, boxes = [0, 1, 2], full = true }: { x0?: number; x1?: number; boxes?: number[]; full?: boolean }) {
  const beams = [38, 70, 102];
  const inner = x1 - x0 - 16;
  return (
    <g>
      <Ground cx={(x0 + x1) / 2} cy={105} rx={(x1 - x0) / 2 + 6} ry={4} />
      {/* Boxes sit on the beams */}
      {beams.map((by, level) =>
        boxes.includes(level) ? (
          full ? (
            <g key={level}>
              <FlatBox x={x0 + 11} y={by - 22} w={inner * 0.5 - 4} h={22} />
              <FlatBox x={x0 + 11 + inner * 0.5 + 1} y={by - (level === 1 ? 16 : 20)} w={inner * 0.5 - 6} h={level === 1 ? 16 : 20} />
            </g>
          ) : (
            <FlatBox key={level} x={(x0 + x1) / 2 - 17} y={by - 24} w={34} h={24} />
          )
        ) : null,
      )}
      {/* Uprights */}
      {[x0, x1 - 8].map((ux) => (
        <g key={ux}>
          <rect x={ux} y="12" width="8" height="94" rx="2.5" fill={PAL.blue} />
          <rect x={ux + 5} y="12" width="3" height="94" rx="1.5" fill={PAL.blueShade} />
          <path d={`M${ux + 3} 18V100`} stroke={PAL.blueShade} strokeWidth="1.6" strokeLinecap="round" strokeDasharray="2 5" />
        </g>
      ))}
      {/* Beams */}
      {beams.map((by) => (
        <g key={by}>
          <rect x={x0 + 4} y={by} width={x1 - x0 - 8} height="7" rx="2" fill={PAL.orange} />
          <rect x={x0 + 4} y={by + 4.5} width={x1 - x0 - 8} height="2.5" rx="1.2" fill={PAL.orangeShade} />
        </g>
      ))}
    </g>
  );
}

/** A thick bent "turn" arrow: up from the floor, then off to the left (mirror it for right). */
function TurnArrow({ mirror = false }: { mirror?: boolean }) {
  const d = 'M74 100V66Q74 48 56 48H38';
  const head = 'M14 48L40 26V70Z';
  const draw = (color: string, dy: number) => (
    <g transform={`translate(0 ${dy})`}>
      <path d={d} fill="none" stroke={color} strokeWidth="17" strokeLinecap="round" strokeLinejoin="round" />
      <path d={head} fill={color} stroke={color} strokeWidth="5" strokeLinejoin="round" />
    </g>
  );
  return (
    <g transform={mirror ? 'translate(120 0) scale(-1 1)' : undefined}>
      <Ground cx={74} cy={106} rx={20} ry={4} />
      {draw(PAL.skyShade, 4)}
      {draw(PAL.sky, 0)}
      <Shine d="M70 92V68Q70 54 58 52" width={3.5} opacity={0.45} />
    </g>
  );
}

export default {
  // "de doos": the box — a big taped cardboard box with a shipping label
  'w.doos': () => (
    <g>
      <Ground cx={62} cy={104} rx={44} ry={5} />
      <Box x={18} y={46} w={64} h={56} depth={20} label />
    </g>
  ),

  // "de pallet": the pallet — a wooden pallet seen from the front and a little from above
  'w.pallet': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={100} rx={50} ry={5} />
      {/* Right side face */}
      <path d="M94 60L110 46V76L94 90Z" fill={PAL.cardDark} stroke={PAL.cardDark} strokeWidth="2" />
      {/* Top deck boards (with gaps), receding to the back right */}
      <path d="M10 60L26 46H110L94 60Z" fill={PAL.cardDark} stroke={PAL.cardDark} strokeWidth="2" />
      {[0, 1, 2, 3, 4].map((i) => {
        const a = 10 + i * 17.6;
        const b = a + 12;
        return (
          <path key={i} d={`M${a} 60L${a + 16} 46H${b + 16}L${b} 60Z`} fill="#f0c48a" stroke="#f0c48a" strokeWidth="1.5" />
        );
      })}
      {/* Front: top board, three blocks with openings, bottom board */}
      <rect x="10" y="60" width="84" height="9" rx="2" fill={PAL.card} />
      <rect x="10" y="68" width="84" height="15" fill={PAL.brown} opacity=".85" />
      {[10, 46, 82].map((bx) => (
        <rect key={bx} x={bx} y="67" width="12" height="17" rx="1.5" fill={PAL.card} />
      ))}
      <rect x="10" y="82" width="84" height="9" rx="2" fill={PAL.card} />
      <path d="M14 62.5H90M14 84.5H90" stroke="#f6d3a2" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 75.5V77.5M54 75.5V77.5M90 75.5V77.5" stroke={PAL.cardShade} strokeWidth="2.4" strokeLinecap="round" />
    </g>
  ),

  // "de heftruck": the forklift — a yellow forklift carrying a box on its forks
  'w.heftruck': () => (
    <g>
      <Ground cx={60} cy={106} rx={50} ry={4.5} />
      {/* Overhead guard */}
      <path d="M52 66L56 24M94 58V24" stroke={PAL.slate} strokeWidth="5" strokeLinecap="round" />
      <rect x="50" y="19" width="50" height="7" rx="3" fill={PAL.slateDark} />
      {/* Seat and steering */}
      <path d="M74 64V48Q74 44 78 44H84Q88 44 88 48V58" fill={PAL.navy} />
      <path d="M62 66L60 52" stroke={PAL.slateDark} strokeWidth="4" strokeLinecap="round" />
      <rect x="52" y="48" width="14" height="5" rx="2.5" fill={PAL.slateDark} transform="rotate(-15 59 50)" />
      {/* Body and counterweight */}
      <Shade color={PAL.yellowShade} opacity={1} at={[112, 80, 16, 40]}>
        <path d="M42 70Q42 64 48 64H84V56Q84 52 90 52H100Q106 52 106 58V90Q106 96 100 96H48Q42 96 42 90Z" fill={PAL.yellow} />
      </Shade>
      <Shine d="M48 70H78" color={PAL.yellowShine} width={3.5} opacity={0.9} />
      {/* Mast and forks */}
      <rect x="32" y="16" width="9" height="84" rx="2.5" fill={PAL.slate} />
      <rect x="37" y="16" width="4" height="84" rx="2" fill={PAL.slateDark} />
      <rect x="26" y="66" width="10" height="34" rx="2" fill={PAL.slateDark} />
      <rect x="8" y="95" width="28" height="5" rx="2.5" fill={PAL.slateDark} />
      {/* The load */}
      <Box x={9} y={68} w={22} h={27} depth={0} tape={false} />
      <rect x="18" y="68" width="5" height="10" fill="#f6dcae" />
      {/* Wheels */}
      <circle cx="56" cy="94" r="12" fill={PAL.slateDark} />
      <circle cx="56" cy="94" r="5" fill={PAL.mist} />
      <circle cx="94" cy="96" r="10" fill={PAL.slateDark} />
      <circle cx="94" cy="96" r="4.2" fill={PAL.mist} />
    </g>
  ),

  // "de kar": the cart — a flat warehouse trolley with a handle, two boxes on it
  'w.kar': () => (
    <g>
      <Ground cx={58} cy={104} rx={46} ry={4.5} />
      {/* Handle */}
      <path d="M92 84V36Q92 28 100 28" fill="none" stroke={PAL.slate} strokeWidth="6" strokeLinecap="round" />
      <path d="M98 28H104" stroke={PAL.orange} strokeWidth="7" strokeLinecap="round" />
      {/* Boxes */}
      <Box x={18} y={48} w={36} h={32} depth={9} />
      <Box x={58} y={60} w={24} h={20} depth={7} tape={false} />
      {/* Platform */}
      <rect x="12" y="80" width="86" height="10" rx="3" fill={PAL.blue} />
      <rect x="12" y="86" width="86" height="4" rx="2" fill={PAL.blueShade} />
      <path d="M16 82.5H94" stroke={PAL.blueLight} strokeWidth="2" strokeLinecap="round" />
      {/* Caster wheels */}
      {[26, 84].map((wx) => (
        <g key={wx}>
          <rect x={wx - 3} y="89" width="6" height="6" fill={PAL.slate} />
          <circle cx={wx} cy="97" r="7" fill={PAL.slateDark} />
          <circle cx={wx} cy="97" r="2.6" fill={PAL.mist} />
        </g>
      ))}
    </g>
  ),

  // "de stelling": the shelving rack — blue uprights, orange beams, boxes on every level
  'w.stelling': () => (
    <g>
      <Rack />
    </g>
  ),

  // "de scanner": the scanner — a handheld terminal shining its red beam on a barcode label
  'w.scanner': () => (
    <g>
      {/* Barcode label */}
      <rect x="22" y="15" width="76" height="28" rx="4" fill={PAL.paperShade} />
      <rect x="22" y="11" width="76" height="28" rx="4" fill={PAL.white} />
      <path d="M31 17V33M36 17V33M43 17V33M47 17V33M54 17V33M61 17V33M65 17V33M72 17V33M78 17V33M83 17V33M89 17V33" stroke={PAL.ink} strokeWidth="3" />
      <path d="M33.5 17V33M51 17V33M68.5 17V33M86 17V33" stroke={PAL.ink} strokeWidth="1.6" />
      {/* Beam */}
      <path d="M53 58L67 58L94 42H26Z" fill={PAL.red} opacity=".28" />
      <path d="M24 25H96" stroke={PAL.red} strokeWidth="3" strokeLinecap="round" />
      {/* Handheld terminal */}
      <Shade color={PAL.yellowShade} opacity={1} at={[90, 86, 12, 40]}>
        <rect x="36" y="52" width="48" height="64" rx="12" fill={PAL.yellow} />
      </Shade>
      <Shade color={PAL.slateDark} opacity={1} at={[86, 86, 10, 34]}>
        <rect x="40" y="56" width="40" height="58" rx="9" fill={PAL.slate} />
      </Shade>
      <rect x="50" y="50" width="20" height="7" rx="3" fill={PAL.red} />
      <rect x="45" y="62" width="30" height="22" rx="3" fill={PAL.ice} />
      <path d="M50 70H66M50 76H62" stroke={PAL.sky} strokeWidth="2.4" strokeLinecap="round" />
      <rect x="54" y="90" width="12" height="7" rx="3.5" fill={PAL.yellow} />
      {[46, 70].map((kx) => (
        <rect key={kx} x={kx - 2} y="90" width="8" height="7" rx="3" fill={PAL.steel} />
      ))}
      {[46, 58, 70].map((kx) => (
        <rect key={kx} x={kx - 2} y="101" width="8" height="6" rx="3" fill={PAL.steel} />
      ))}
      <Shine d="M44 66V96" width={3} opacity={0.35} />
    </g>
  ),

  // "links": left — a big sky-blue arrow that turns to the left
  'w.links': () => (
    <g>
      <TurnArrow />
    </g>
  ),

  // "rechts": right — the same arrow, turning to the right
  'w.rechts': () => (
    <g>
      <TurnArrow mirror />
    </g>
  ),

  // "boven": at the top — a rack with one box on the top shelf, an arrow pointing up
  'w.boven': () => (
    <g>
      <Rack x0={12} x1={76} boxes={[0]} full={false} />
      <Arrow from={[96, 96]} to={[96, 16]} color={PAL.sky} width={10} head={15} />
    </g>
  ),

  // "beneden": at the bottom — a rack with one box on the bottom shelf, an arrow pointing down
  'w.beneden': () => (
    <g>
      <Rack x0={12} x1={76} boxes={[2]} full={false} />
      <Arrow from={[96, 16]} to={[96, 100]} color={PAL.sky} width={10} head={15} />
    </g>
  ),

  // "tillen": to lift — two hands lift a box off the floor, an arrow going up
  'w.tillen': () => (
    <g>
      <Ground cx={60} cy={107} rx={30} ry={4} />
      <Box x={34} y={58} w={44} h={34} depth={12} />
      <Motion x={60} y={86} dir={90} spread={50} len={6} gap={12} color={PAL.line} width={3} />
      <Hand pose="open" x={14} y={84} rotate={80} scale={0.62} skin={SKIN.jada} sleeve={[PAL.orange, PAL.orangeShade]} />
      <Hand pose="open" x={106} y={84} rotate={-80} scale={0.62} skin={SKIN.jada} sleeve={[PAL.orange, PAL.orangeShade]} mirror />
      <Arrow from={[62, 46]} to={[62, 10]} color={PAL.sky} width={9} head={14} />
    </g>
  ),

  // "pakken": to take — a hand grabs a box from the shelf (curved arrow from shelf to hand)
  'w.pakken': () => (
    <g>
      {/* Shelf corner with an empty spot */}
      <rect x="12" y="10" width="7" height="52" rx="2.5" fill={PAL.blue} />
      <rect x="12" y="34" width="44" height="7" rx="2" fill={PAL.orange} />
      <rect x="12" y="38.5" width="44" height="2.5" rx="1.2" fill={PAL.orangeShade} />
      <rect x="24" y="14" width="26" height="18" rx="3" fill="none" stroke={PAL.line} strokeWidth="2" strokeDasharray="4 4" />
      {/* The box, gripped from below by a hand (fingers over its front) */}
      <Box x={48} y={52} w={40} h={32} depth={11} />
      <Hand pose="hold" x={68} y={118} scale={1.15} skin={SKIN.henk} sleeve={[PAL.navy, PAL.navyShade]} />
      <Arrow from={[30, 50]} to={[44, 74]} color={PAL.sky} width={7} head={12} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
