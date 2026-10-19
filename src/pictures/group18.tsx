import type { JSX } from 'react';
import { Arrow, Bust, CurveArrow, Ground, Hand, PAL, SKIN, Shade, Shine, Sparkle, Tick } from './kit';

/**
 * Word pictures, group 18 (keyed by id): the first day (l.arrive: entrance, reception, canteen,
 * changing room, buddy, to find), instructions (l.task: the task, to finish, fast) and the temp
 * worker (l.agency). The words of one lesson are shown side by side in a choice, so each picture
 * has its own main shape and colour. See docs/tekenstijl.md and ./kit.tsx.
 */

/** A small factory: a body with a saw-tooth roof and a chimney, bottom-left (x, y), `w` wide. */
function Factory({ x, y, w, color, shade }: { x: number; y: number; w: number; color: string; shade: string }) {
  const h = w * 0.62;
  const t = w / 3;
  const roof = `M${x} ${y - h}L${x + t} ${y - h - 8}V${y - h}L${x + 2 * t} ${y - h - 8}V${y - h}L${x + w} ${y - h - 8}V${y}H${x}Z`;
  return (
    <g strokeLinejoin="round">
      <rect x={x + w - 9} y={y - h - 18} width="6" height="14" rx="1.5" fill={PAL.slate} />
      <Shade color={shade} opacity={1} at={[x + w + 4, y - h / 2, w * 0.28, h * 1.4]}>
        <path d={roof} fill={color} stroke={color} strokeWidth="1.5" />
      </Shade>
      <rect x={x + w * 0.38} y={y - h * 0.5} width={w * 0.24} height={h * 0.5} rx="1.5" fill={PAL.slateDark} />
    </g>
  );
}

export default {
  // "de ingang": the entrance — a building with its doors open and a big arrow going in
  'w.ingang': () => (
    <g>
      <Ground cx={60} cy={105} rx={50} ry={4} />
      {/* The building, flat roof */}
      <Shade color={PAL.clayShade} opacity={1} at={[112, 70, 16, 50]}>
        <rect x="14" y="30" width="92" height="74" rx="3" fill={PAL.clay} />
      </Shade>
      <rect x="10" y="24" width="100" height="10" rx="3" fill={PAL.slate} />
      <rect x="20" y="42" width="14" height="14" rx="2" fill={PAL.ice} />
      <rect x="86" y="42" width="14" height="14" rx="2" fill={PAL.ice} />
      {/* The doorway: dark inside, glass doors slid open */}
      <rect x="38" y="52" width="44" height="52" rx="2" fill={PAL.slateDark} />
      <rect x="38" y="52" width="9" height="52" rx="1.5" fill={PAL.ice} />
      <rect x="73" y="52" width="9" height="52" rx="1.5" fill={PAL.ice} />
      {/* Awning over the door */}
      <rect x="32" y="44" width="56" height="9" rx="2.5" fill={PAL.yellow} />
      <rect x="74" y="44" width="14" height="9" rx="2.5" fill={PAL.yellowShade} />
      <Arrow from={[24, 96]} to={[62, 76]} color={PAL.sky} width={9} head={14} />
      <Shine d="M18 38V64" opacity={0.45} />
    </g>
  ),

  // "de receptie": the reception desk — a smiling receptionist behind a counter with a desk bell
  'w.receptie': () => (
    <g>
      <Bust who="amina" x={50} y={96} scale={0.66} expr="pleased" bold />
      {/* The counter: light top, wooden front */}
      <Ground cx={60} cy={106} rx={52} ry={4} />
      <Shade color={PAL.cardShade} opacity={1} at={[116, 92, 16, 26]}>
        <rect x="8" y="80" width="104" height="25" rx="3" fill={PAL.card} />
      </Shade>
      <rect x="6" y="74" width="108" height="9" rx="3" fill={PAL.paperShade} />
      <rect x="6" y="72" width="108" height="8" rx="3" fill={PAL.white} />
      <path d="M20 90H52M20 97H44" stroke={PAL.cardShade} strokeWidth="2" strokeLinecap="round" />
      {/* Desk bell */}
      <rect x="78" y="67" width="28" height="6" rx="3" fill={PAL.slate} />
      <path d="M80 67A12 12 0 0 1 104 67Z" fill={PAL.yellow} />
      <path d="M96 56.4A12 12 0 0 1 104 67H96Z" fill={PAL.yellowShade} />
      <rect x="90" y="50" width="4" height="6" rx="1.5" fill={PAL.slate} />
      <Shine d="M85 63Q86 59.5 89.5 58" color={PAL.yellowShine} width={2.6} opacity={0.8} />
    </g>
  ),

  // "de kantine": the canteen — a table with a tray: a sandwich, an apple and a carton of milk
  'w.kantine': () => (
    <g>
      <Ground cx={60} cy={106} rx={48} ry={4} />
      {/* Table legs and top */}
      <rect x="20" y="76" width="7" height="30" rx="2" fill={PAL.slate} />
      <rect x="93" y="76" width="7" height="30" rx="2" fill={PAL.slateDark} />
      <rect x="8" y="72" width="104" height="9" rx="3" fill={PAL.wood} />
      <rect x="8" y="70" width="104" height="6" rx="3" fill={PAL.card} />
      {/* The tray */}
      <rect x="16" y="64" width="88" height="8" rx="3" fill={PAL.skyShade} />
      <rect x="16" y="62" width="88" height="7" rx="3" fill={PAL.sky} />
      {/* Sandwich: two slices with lettuce and cheese, standing on its side */}
      <path d="M22 62L42 32L60 62Z" fill={PAL.card} stroke={PAL.card} strokeWidth="4" strokeLinejoin="round" />
      <path d="M27 59L42 37L55 59Z" fill="#f6dcae" />
      <path d="M42 32L60 62H54L42 40Z" fill={PAL.cardShade} opacity=".7" />
      <path d="M30 56L44 36" stroke={PAL.leaf} strokeWidth="4.5" strokeLinecap="round" />
      <path d="M34 59L47 40" stroke={PAL.red} strokeWidth="3.5" strokeLinecap="round" />
      {/* Apple */}
      <Shade color={PAL.redShade} opacity={1} at={[82, 54, 7, 12]}>
        <circle cx="72" cy="53" r="9.5" fill={PAL.red} />
      </Shade>
      <path d="M72 44Q73 40 76 38" fill="none" stroke={PAL.brown} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M74 41Q80 36 84 40Q79 44 74 41Z" fill={PAL.leaf} />
      <Shine d="M66 50Q67 47 69.5 46" width={2.4} opacity={0.7} />
      {/* Milk carton */}
      <path d="M86 40L90 33H100L104 40Z" fill={PAL.paperShade} />
      <Shade color={PAL.paperShade} opacity={1} at={[104, 50, 5, 20]}>
        <rect x="86" y="40" width="18" height="22" rx="1.5" fill={PAL.white} />
      </Shade>
      <rect x="86" y="46" width="18" height="7" fill={PAL.blueLight} />
    </g>
  ),

  // "de kleedkamer": the changing room — a coat and a hi-vis vest on hooks, a bench under them
  'w.kleedkamer': () => (
    <g>
      <Ground cx={60} cy={106} rx={50} ry={4} />
      {/* Hook rail */}
      <rect x="10" y="16" width="100" height="8" rx="3" fill={PAL.wood} />
      <rect x="10" y="21" width="100" height="3" rx="1.5" fill={PAL.cardDark} />
      <path d="M38 22V30M84 22V30" stroke={PAL.steel} strokeWidth="3.4" strokeLinecap="round" />
      {/* Green fleece jacket: body, sleeves, collar, zip */}
      <path d="M22 34Q24 29 32 28H44Q52 29 54 34L58 70H50L49 48V78H27V48L26 70H18Z" fill={PAL.green} stroke={PAL.green} strokeWidth="2" strokeLinejoin="round" />
      <path d="M49 48V78H44V30Q52 31 54 34L58 70H50Z" fill={PAL.greenShade} opacity=".6" />
      <path d="M32 28L38 36L44 28" fill="none" stroke={PAL.greenShade} strokeWidth="3" strokeLinejoin="round" />
      <path d="M38 36V76" stroke={PAL.lime} strokeWidth="2" />
      {/* Hi-vis vest */}
      <path d="M70 32H78L84 40L90 32H98L102 76H66Z" fill={PAL.orange} stroke={PAL.orange} strokeWidth="2" strokeLinejoin="round" />
      <path d="M92 32H98L102 76H94Z" fill={PAL.orangeShade} />
      <path d="M67.5 58H100.5M68.4 66H101.3" stroke="#eef5f7" strokeWidth="4" />
      {/* Bench */}
      <rect x="14" y="94" width="6" height="12" rx="2" fill={PAL.cardDark} />
      <rect x="100" y="94" width="6" height="12" rx="2" fill={PAL.cardDark} />
      <rect x="8" y="88" width="104" height="8" rx="3" fill={PAL.card} />
      <rect x="8" y="93" width="104" height="3" rx="1.5" fill={PAL.cardShade} />
    </g>
  ),

  // "de buddy": the colleague who shows you around — Bram points the way, the new colleague beside him
  'w.buddy': () => (
    <g>
      <CurveArrow from={[22, 30]} to={[98, 28]} bend={14} color={PAL.sky} width={7} head={12} />
      <Bust who="jada" x={36} y={116} scale={0.5} expr="pleased" />
      <Bust who="bram" x={80} y={116} scale={0.56} expr="pleased" bold flip />
      <Hand pose="point" x={100} y={86} rotate={28} scale={0.62} skin={SKIN.bram} sleeve={[PAL.blue, PAL.blueShade]} />
    </g>
  ),

  // "vinden": to find — a map with a dotted route that ends at a red pin, and a sparkle
  'w.vinden': () => (
    <g>
      {/* Folded map: three panels */}
      <g strokeLinejoin="round">
        <path d="M12 30L42 22V100L12 108Z" fill={PAL.paper} stroke={PAL.paper} strokeWidth="2" />
        <path d="M42 22L78 30V108L42 100Z" fill={PAL.paperShade} stroke={PAL.paperShade} strokeWidth="2" />
        <path d="M78 30L108 22V100L78 108Z" fill={PAL.paper} stroke={PAL.paper} strokeWidth="2" />
      </g>
      {/* Park and river */}
      <path d="M16 74Q28 66 38 74V96L16 101Z" fill={PAL.lime} />
      <path d="M50 26Q58 50 46 64Q36 76 44 100" fill="none" stroke={PAL.ice} strokeWidth="6" strokeLinecap="round" />
      {/* Route */}
      <path d="M22 92Q40 84 58 82Q76 80 80 58" fill="none" stroke={PAL.line} strokeWidth="4" strokeLinecap="round" strokeDasharray="1 8" />
      <circle cx="22" cy="92" r="4" fill={PAL.slate} />
      {/* Pin */}
      <path d="M82 58C76 50 70 44 70 36A12 12 0 0 1 94 36C94 44 88 50 82 58Z" fill={PAL.red} />
      <path d="M86 25.5A12 12 0 0 1 94 36C94 44 88 50 82 58V47Z" fill={PAL.redShade} opacity=".8" />
      <circle cx="82" cy="36" r="4.6" fill={PAL.white} />
      <Sparkle x={100} y={52} r={7} />
      <Sparkle x={66} y={22} r={5} />
    </g>
  ),

  // "de taak": the task — a yellow note pinned up: a box to move, and an empty box to tick
  'w.taak': () => (
    <g>
      <g transform="rotate(-4 60 60)">
        <rect x="18" y="20" width="84" height="84" rx="4" fill={PAL.yellowShade} transform="translate(2 4)" />
        <rect x="18" y="20" width="84" height="84" rx="4" fill={PAL.yellowLight} />
        <path d="M102 80V100Q102 104 98 104H82Z" fill={PAL.yellowShade} opacity=".5" />
        {/* What to do: this box, over there */}
        <rect x="30" y="44" width="24" height="20" rx="2" fill={PAL.card} />
        <rect x="30" y="44" width="24" height="5" rx="2" fill={PAL.cardShade} />
        <rect x="40" y="44" width="4" height="9" fill="#f6dcae" />
        <Arrow from={[60, 54]} to={[90, 54]} color={PAL.sky} width={6} head={10} />
        {/* The empty box to tick */}
        <rect x="30" y="76" width="16" height="16" rx="3" fill={PAL.white} />
        <rect x="30" y="76" width="16" height="16" rx="3" fill="none" stroke={PAL.line} strokeWidth="2.6" />
        <path d="M54 84H88" stroke={PAL.cardShade} strokeWidth="3.4" strokeLinecap="round" />
      </g>
      {/* Push pin */}
      <ellipse cx="60" cy="27" rx="4" ry="2" fill="#000" opacity=".15" />
      <circle cx="58" cy="20" r="8" fill={PAL.red} />
      <circle cx="61" cy="22" r="5" fill={PAL.redShade} opacity=".6" />
      <circle cx="55.5" cy="17.5" r="2.4" fill={PAL.white} opacity=".7" />
    </g>
  ),

  // "afmaken": to finish — a progress bar filled to the end, with a big tick
  'w.afmaken': () => (
    <g>
      <rect x="10" y="50" width="88" height="24" rx="12" fill={PAL.mist} transform="translate(0 3.5)" />
      <rect x="10" y="50" width="88" height="24" rx="12" fill={PAL.paperShade} />
      <rect x="14" y="54" width="80" height="16" rx="8" fill={PAL.orange} />
      <rect x="14" y="62" width="80" height="8" rx="4" fill={PAL.orangeShade} opacity=".7" />
      <path d="M20 58H50" stroke={PAL.orangeLight} strokeWidth="3" strokeLinecap="round" />
      <Tick x={92} y={62} r={20} />
      <Sparkle x={86} y={28} r={7} />
      <Sparkle x={104} y={38} r={4.5} />
    </g>
  ),

  // "snel": fast — a running shoe with speed lines behind it
  'w.snel': () => (
    <g>
      <Ground cx={66} cy={98} rx={36} ry={4} />
      <path d="M10 52H34M6 66H30M14 80H36" stroke={PAL.line} strokeWidth="5" strokeLinecap="round" />
      {/* Sole */}
      <path d="M38 82H102Q110 82 108 88Q106 94 98 94H44Q36 94 36 88Z" fill={PAL.paperShade} />
      <path d="M38 82H102Q110 82 108 86H37Z" fill={PAL.white} />
      {/* Upper */}
      <Shade color={PAL.skyShade} opacity={1} at={[110, 70, 16, 30]}>
        <path d="M38 82V52Q38 46 44 46H56Q62 46 64 52L70 62Q86 66 98 70Q106 74 104 82Z" fill={PAL.sky} />
      </Shade>
      <path d="M38 50H52Q56 50 56 46" fill="none" stroke={PAL.skyShade} strokeWidth="3" strokeLinecap="round" />
      <path d="M62 58L70 54M67 64L75 60M72 68L80 64" stroke={PAL.white} strokeWidth="3" strokeLinecap="round" />
      <path d="M86 74Q96 74 103 80" fill="none" stroke={PAL.ice} strokeWidth="3" strokeLinecap="round" />
      <path d="M42 58V76" stroke={PAL.yellow} strokeWidth="4" strokeLinecap="round" />
      <Shine d="M44 52Q46 50 50 50" width={3} opacity={0.7} />
    </g>
  ),

  // "de uitzendkracht": the temp worker — a worker under an arrow from one company to the next
  'w.uitzendkracht': () => (
    <g>
      <Factory x={8} y={46} w={30} color={PAL.blue} shade={PAL.blueShade} />
      <Factory x={82} y={46} w={30} color={PAL.green} shade={PAL.greenShade} />
      <CurveArrow from={[30, 22]} to={[90, 22]} bend={12} color={PAL.orange} width={6} head={11} />
      <Bust who="bram" x={60} y={116} scale={0.6} expr="pleased" bold />
    </g>
  ),
} as Record<string, () => JSX.Element>;
