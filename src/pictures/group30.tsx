import { useId, type JSX } from 'react';
import { Bubble, Clock, Ground, Motion, PAL, Shade, Shine, Sparkle } from './kit';

/**
 * Emoji pictures, group 30 (keyed by id "e.*"): drawings for emoji in the app that had no
 * picture yet (tips, work rules, the About and coaches pages, Hulp and the regional social map).
 * The table emoji -> picture is src/content/emojiArt/batch1.ts. One subject each, large:
 *  - the test tube (a trial, a test version), the broom (tidy up), a speech bubble locked with a
 *    padlock (private: you need not say it), four number tiles (a number such as the BSN; count),
 *    the globe (for people from everywhere), the calculator (work it out), a newspaper under a
 *    magnifying glass (check before you share), a milk carton on a shop shelf, the no-smoking sign,
 *    a heavy chain (exploitation), a big star (quality), a clock at half past seven, one house
 *    (living in the Netherlands), the blue emergency light (112), a row of houses (the
 *    municipalities, housing), a shield with a house on it (safe at home) and a letterbox full of
 *    mail.
 * See docs/tekenstijl.md and ./kit.tsx.
 */

/** A light glass tint that still shows on a white card. */
const GLASS = '#e3f5ff';

/** A gabled house front: walls, roof, door and window; (x, y) is the bottom left, w wide. */
function House({ x, y, w, h, wall, wallShade, roof = PAL.slate, door = PAL.blue }: {
  x: number; y: number; w: number; h: number; wall: string; wallShade: string; roof?: string; door?: string;
}) {
  const top = y - h;
  const peak = top - w * 0.42;
  const dw = w * 0.26;
  return (
    <g strokeLinejoin="round">
      <Shade color={wallShade} opacity={1} at={[x + w * 1.05, y - h / 2, w * 0.28, h]}>
        <rect x={x} y={top} width={w} height={h} fill={wall} />
      </Shade>
      <path d={`M${x - 4} ${top + 2}L${x + w / 2} ${peak}L${x + w + 4} ${top + 2}Z`} fill={roof} stroke={roof} strokeWidth="3" />
      <path d={`M${x + w / 2} ${peak}L${x + w + 4} ${top + 2}H${x + w / 2}Z`} fill="#000" opacity=".16" />
      <rect x={x + w * 0.16} y={y - h * 0.5} width={dw} height={h * 0.5} rx="2" fill={door} />
      <rect x={x + w * 0.54} y={y - h * 0.72} width={w * 0.3} height={w * 0.3} rx="2" fill={PAL.white} />
      <rect x={x + w * 0.54 + 1.6} y={y - h * 0.72 + 1.6} width={w * 0.3 - 3.2} height={w * 0.3 - 3.2} rx="1.4" fill={PAL.ice} />
      <path d={`M${x + w * 0.69} ${y - h * 0.72}V${y - h * 0.72 + w * 0.3}`} stroke={PAL.white} strokeWidth="2" />
    </g>
  );
}

export default {
  // 🧪 "de test": a trial, a test version — a test tube with green liquid and bubbles
  'e.reageerbuis': () => (
    <g>
      <g transform="rotate(16 60 60)">
        <Shade color={PAL.ice} opacity={1} at={[78, 60, 9, 60]}>
          <path d="M45 20V84A15 15 0 0 0 75 84V20Z" fill={GLASS} />
        </Shade>
        <Shade color={PAL.leafShade} opacity={1} at={[76, 74, 9, 30]}>
          <path d="M49 52V84A11 11 0 0 0 71 84V52Z" fill={PAL.leaf} />
        </Shade>
        <ellipse cx="60" cy="52" rx="11" ry="3" fill={PAL.lime} />
        <circle cx="56" cy="76" r="3.6" fill={PAL.white} opacity=".75" />
        <circle cx="64" cy="66" r="2.6" fill={PAL.white} opacity=".75" />
        <circle cx="58" cy="88" r="2.2" fill={PAL.white} opacity=".75" />
        <rect x="40" y="13" width="40" height="10" rx="4" fill={PAL.steel} />
        <rect x="68" y="13" width="12" height="10" rx="4" fill={PAL.slate} opacity=".5" />
        <Shine d="M51 30V46" width={4} opacity={0.9} />
      </g>
      <circle cx="78" cy="30" r="4" fill={PAL.lime} />
      <circle cx="88" cy="18" r="3" fill={PAL.lime} />
      <Sparkle x={26} y={34} r={7} />
    </g>
  ),

  // 🧹 "de bezem": the broom — a straw broom sweeping, a puff of dust flying off
  'e.bezem': () => (
    <g>
      <Ground cy={106} rx={38} />
      <circle cx="22" cy="96" r="7" fill={PAL.mist} />
      <circle cx="31" cy="90" r="4.6" fill={PAL.mist} />
      <circle cx="16" cy="86" r="3.6" fill={PAL.mist} />
      <g transform="rotate(-28 62 102)">
        <rect x="58" y="14" width="8" height="62" rx="4" fill={PAL.wood} />
        <rect x="62" y="14" width="4" height="62" rx="2" fill={PAL.cardDark} />
        <rect x="51" y="70" width="22" height="9" rx="3" fill={PAL.red} />
        <rect x="65" y="70" width="8" height="9" rx="3" fill={PAL.redShade} />
        <Shade color={PAL.yellowShade} opacity={1} at={[84, 92, 12, 20]}>
          <path d="M51 79H73L84 104H40Z" fill={PAL.yellow} strokeLinejoin="round" stroke={PAL.yellow} strokeWidth="3" />
        </Shade>
        <path d="M56 84L51 102M62 84V102M68 84L73 102" stroke={PAL.yellowShade} strokeWidth="1.8" strokeLinecap="round" />
        <Shine d="M60 20V40" width={3} opacity={0.4} />
      </g>
      <Motion x={30} y={78} dir={-160} spread={50} len={8} gap={4} />
    </g>
  ),

  // 🤐 "geheim, privé": you need not tell it — a speech bubble locked with a padlock
  'e.geheim': () => (
    <g>
      <Bubble x={12} y={14} w={96} h={70} tail="left" />
      <path d="M48 52V44A12 12 0 0 1 72 44V52" fill="none" stroke={PAL.slate} strokeWidth="7" strokeLinecap="round" />
      <Shade color={PAL.yellowShade} opacity={1} at={[84, 64, 10, 20]}>
        <rect x="38" y="48" width="44" height="30" rx="6" fill={PAL.yellow} />
      </Shade>
      <circle cx="60" cy="60" r="4.4" fill={PAL.ink} />
      <rect x="58" y="61" width="4" height="9" rx="2" fill={PAL.ink} />
      <Shine d="M43 54V64" color={PAL.yellowShine} width={3} opacity={0.9} />
    </g>
  ),

  // 🔢 "het nummer, de cijfers": a number (such as the BSN), counting — four tiles 1 2 3 4
  'e.cijfers': () => {
    const tile = (x: number, y: number, fill: string, shade: string, digit: string) => (
      <g>
        <rect x={x} y={y + 4} width="42" height="40" rx="8" fill={shade} />
        <rect x={x} y={y} width="42" height="40" rx="8" fill={fill} />
        <path d={digit} transform={`translate(${x + 21} ${y + 20})`} fill="none" stroke={PAL.white} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    );
    return (
      <g>
        {tile(14, 12, PAL.blue, PAL.blueShade, 'M-5 -8L2 -13V13')}
        {tile(64, 12, PAL.orange, PAL.orangeShade, 'M-8 -6Q-8 -13 0 -13Q8 -13 8 -6Q8 0 -8 13H9')}
        {tile(14, 62, PAL.green, PAL.greenShade, 'M-8 -13H7L-1 -2Q9 -2 9 5Q9 13 0 13Q-6 13 -9 9')}
        {tile(64, 62, PAL.purple, PAL.purpleShade, 'M4 13V-13L-9 5H10')}
      </g>
    );
  },

  // 🌍 "de wereld": for people from all over the world — the globe, land and sea
  'e.wereldbol': () => {
    const id = `wb-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
    return (
      <g>
        <defs>
          <clipPath id={id}><circle cx="60" cy="60" r="46" /></clipPath>
        </defs>
        <circle cx="60" cy="60" r="46" fill={PAL.sky} />
        <g clipPath={`url(#${id})`} fill={PAL.leaf}>
          {/* Europe, Africa, the Americas on the left edge, Asia on the right */}
          <path d="M50 28Q58 20 70 24Q76 32 70 40Q60 44 52 40Q46 34 50 28Z" />
          <path d="M54 50Q64 44 76 50Q82 60 78 70Q72 84 66 96Q58 90 58 80Q50 72 50 62Q50 54 54 50Z" />
          <path d="M6 30Q20 22 30 30Q34 42 28 50Q24 58 30 68Q36 82 28 98Q16 88 14 74Q6 56 6 30Z" />
          <path d="M80 26Q98 22 112 38Q114 52 104 56Q94 52 86 46Q76 36 80 26Z" />
          <path d="M92 74Q102 70 108 78Q104 88 96 86Q90 82 92 74Z" />
          <ellipse cx="104" cy="60" rx="24" ry="52" fill={PAL.skyShade} opacity=".45" />
        </g>
        <Shine d="M24 46A38 38 0 0 1 44 20" width={4} opacity={0.55} />
      </g>
    );
  },

  // 🧮 "rekenen": to work it out — a calculator with its screen and keys
  'e.rekenmachine': () => {
    const keys = [0, 1, 2, 3].flatMap((r) => [0, 1, 2].map((c) => [c, r] as const));
    return (
      <g>
        <Ground cy={108} rx={34} ry={4} />
        <rect x="28" y="16" width="64" height="90" rx="10" fill={PAL.navyShade} />
        <rect x="28" y="12" width="64" height="90" rx="10" fill={PAL.navy} />
        <rect x="36" y="20" width="48" height="20" rx="4" fill={PAL.lime} />
        <rect x="58" y="27" width="20" height="6" rx="2" fill={PAL.leafShade} />
        {keys.map(([c, r]) => (
          <rect key={`${c}${r}`} x={37 + c * 16} y={48 + r * 13} width="12" height="9" rx="2.4" fill={c === 2 ? PAL.orange : PAL.mist} />
        ))}
        <Shine d="M33 24V44" width={3} opacity={0.35} />
      </g>
    );
  },

  // 📰 "nepnieuws checken": check before you share — a newspaper under a magnifying glass
  'e.nepnieuws': () => (
    <g>
      <rect x="12" y="20" width="80" height="84" rx="5" fill={PAL.paperShade} />
      <rect x="12" y="16" width="80" height="84" rx="5" fill={PAL.white} />
      <rect x="20" y="24" width="64" height="10" rx="3" fill={PAL.slate} />
      <rect x="20" y="40" width="28" height="22" rx="2" fill={PAL.ice} />
      <path d="M54 42H84M54 50H84M54 58H78M20 70H62M20 78H56M20 86H60" stroke={PAL.line} strokeWidth="3" strokeLinecap="round" />
      {/* The magnifying glass */}
      <path d="M90 90L106 106" stroke={PAL.slate} strokeWidth="10" strokeLinecap="round" />
      <circle cx="76" cy="76" r="20" fill={GLASS} opacity=".75" />
      <circle cx="76" cy="76" r="20" fill="none" stroke={PAL.orange} strokeWidth="7" />
      <path d="M90.1 90.1A20 20 0 0 1 62 90" fill="none" stroke={PAL.orangeShade} strokeWidth="7" />
      <Shine d="M65 70A12 12 0 0 1 72 64" width={3.4} opacity={0.9} />
    </g>
  ),

  // 🥛 "de melk": milk, a product on the shop shelf — a milk carton on the shelf edge
  'e.melk': () => (
    <g strokeLinejoin="round">
      <rect x="10" y="96" width="100" height="12" rx="3" fill={PAL.steel} />
      <rect x="10" y="96" width="100" height="5" rx="2" fill={PAL.mist} />
      <rect x="80" y="100" width="18" height="7" rx="1.6" fill={PAL.yellow} />
      {/* Side face, gable and top fin */}
      <polygon points="70,40 88,32 88,90 70,96" fill={PAL.paperShade} stroke={PAL.paperShade} strokeWidth="2" />
      <polygon points="70,40 88,32 79,20" fill={PAL.mist} stroke={PAL.mist} strokeWidth="2" />
      <polygon points="40,20 79,20 79,12 40,12" fill={PAL.paperShade} stroke={PAL.paperShade} strokeWidth="2" />
      <polygon points="32,40 70,40 79,20 41,20" fill={PAL.paper} stroke={PAL.paper} strokeWidth="2" />
      {/* Front face with the blue band and a white drop */}
      <rect x="32" y="40" width="38" height="56" rx="2" fill={PAL.white} />
      <rect x="32" y="54" width="38" height="24" fill={PAL.sky} />
      <polygon points="70,54 88,47 88,71 70,78" fill={PAL.skyShade} />
      <path d="M51 58Q58 66 58 70A7 7 0 0 1 44 70Q44 66 51 58Z" fill={PAL.white} />
      <Shine d="M37 46V52" width={3} color={PAL.line} opacity={0.35} />
    </g>
  ),

  // 🚭 "niet roken": no smoking — a lit cigarette under the red "forbidden" ring
  'e.rookverbod': () => (
    <g>
      <path d="M30 48Q24 40 30 34Q36 28 30 20" fill="none" stroke={PAL.mist} strokeWidth="4.5" strokeLinecap="round" />
      <rect x="26" y="54" width="52" height="13" rx="2.5" fill={PAL.white} />
      <rect x="26" y="62" width="52" height="5" rx="2" fill={PAL.paperShade} />
      <rect x="76" y="54" width="20" height="13" rx="2.5" fill={PAL.orange} />
      <rect x="76" y="62" width="20" height="5" rx="2" fill={PAL.orangeShade} />
      <rect x="20" y="54" width="8" height="13" rx="2.5" fill={PAL.steel} />
      <rect x="17" y="56" width="5" height="9" rx="2.2" fill={PAL.red} />
      <circle cx="60" cy="60" r="44" fill="none" stroke={PAL.red} strokeWidth="10" />
      <path d="M29 29L91 91" stroke={PAL.red} strokeWidth="10" strokeLinecap="round" />
      <path d="M91 91A44 44 0 0 1 29 91" fill="none" stroke={PAL.redShade} strokeWidth="10" opacity=".55" />
    </g>
  ),

  // ⛓ "uitbuiting": exploitation — a heavy chain of three links
  'e.ketting': () => (
    <g fill="none" strokeLinecap="round" transform="rotate(45 60 60)">
      {/* Three links along one line: a ring seen flat, one seen from the side, a ring */}
      <ellipse cx="24" cy="60" rx="20" ry="13" stroke={PAL.steel} strokeWidth="9" />
      <ellipse cx="96" cy="60" rx="20" ry="13" stroke={PAL.steel} strokeWidth="9" />
      <rect x="34" y="55" width="52" height="10" rx="5" fill={PAL.slate} stroke="none" />
      <path d="M42 60H78" stroke={PAL.slateDark} strokeWidth="3" />
      {/* Where the flat rings pass over the middle link again */}
      <path d="M44 56V64M76 56V64" stroke={PAL.steel} strokeWidth="9" />
      <path d="M8 56A20 13 0 0 1 22 47M80 56A20 13 0 0 1 94 47" stroke={PAL.white} strokeWidth="2.6" opacity=".6" />
    </g>
  ),

  // ⭐ "de kwaliteit": quality, good work — a big yellow star
  'e.ster': () => {
    const pts = Array.from({ length: 10 }, (_, i) => {
      const a = (i * Math.PI) / 5 - Math.PI / 2;
      const r = i % 2 === 0 ? 46 : 20;
      return `${(60 + Math.cos(a) * r).toFixed(1)},${(64 + Math.sin(a) * r).toFixed(1)}`;
    }).join(' ');
    return (
      <g>
        <Shade color={PAL.yellowShade} opacity={1} at={[100, 70, 26, 50]}>
          <polygon points={pts} fill={PAL.yellow} stroke={PAL.yellow} strokeWidth="7" strokeLinejoin="round" />
        </Shade>
        <Shine d="M38 52L50 51" color={PAL.yellowShine} width={4} opacity={1} />
        <Sparkle x={100} y={20} r={8} />
        <Sparkle x={18} y={22} r={5} color={PAL.yellowLight} />
      </g>
    );
  },

  // 🕧 "half acht": half past seven (7:30) — a clock, the short hand between 7 and 8
  'e.halfacht': () => (
    <g>
      <Clock cx={60} cy={60} r={46} hour={7} minute={30} />
    </g>
  ),

  // 🏠 "het huis": a home, living in the Netherlands — a brick house with a pointed roof
  'e.huis': () => (
    <g>
      <Ground cy={106} rx={44} />
      <rect x="72" y="20" width="10" height="22" rx="2" fill={PAL.clayShade} />
      <House x={24} y={104} w={72} h={50} wall={PAL.clay} wallShade={PAL.clayShade} />
      <Shine d="M30 60V70" color={PAL.clayLight} width={3} opacity={0.9} />
    </g>
  ),

  // 🚨 "het zwaailicht": the emergency light (112) — a flashing blue light
  'e.zwaailicht': () => (
    <g>
      <Ground cy={104} rx={36} />
      <Motion x={60} y={44} dir={-90} spread={70} n={3} len={12} gap={34} color={PAL.blue} width={5} />
      <Motion x={60} y={60} dir={180} spread={40} n={2} len={10} gap={36} color={PAL.blue} width={5} />
      <Motion x={60} y={60} dir={0} spread={40} n={2} len={10} gap={36} color={PAL.blue} width={5} />
      <Shade color={PAL.blueShade} opacity={1} at={[84, 64, 12, 40]}>
        <path d="M34 84V58A26 26 0 0 1 86 58V84Z" fill={PAL.sky} />
      </Shade>
      <rect x="52" y="44" width="16" height="36" rx="5" fill={PAL.ice} opacity=".7" />
      <Shine d="M40 70V58A20 20 0 0 1 48 42" width={4} opacity={0.6} />
      <rect x="26" y="82" width="68" height="18" rx="4" fill={PAL.slate} />
      <rect x="74" y="82" width="20" height="18" rx="4" fill={PAL.slateDark} />
    </g>
  ),

  // 🏘 "de huizen, de wijk": the municipalities, housing — a row of three houses
  'e.huizen': () => (
    <g>
      <Ground cy={106} rx={48} />
      <House x={12} y={104} w={30} h={34} wall={PAL.card} wallShade={PAL.cardShade} roof={PAL.slate} />
      <House x={78} y={104} w={30} h={30} wall={PAL.blueLight} wallShade={PAL.blue} roof={PAL.slate} door={PAL.navy} />
      <House x={40} y={104} w={40} h={46} wall={PAL.clay} wallShade={PAL.clayShade} roof={PAL.redShade} />
    </g>
  ),

  // 🛡 "veilig thuis": safe at home — a blue shield with a white house on it
  'e.schild': () => (
    <g>
      <path d="M60 16L100 28V58Q100 90 60 108Q20 90 20 58V28Z" fill={PAL.blueShade} />
      <Shade color={PAL.blueShade} opacity={1} at={[102, 60, 42, 60]}>
        <path d="M60 12L100 24V54Q100 86 60 104Q20 86 20 54V24Z" fill={PAL.blue} />
      </Shade>
      <path d="M38 56L60 36L82 56V80H38Z" fill={PAL.white} strokeLinejoin="round" stroke={PAL.white} strokeWidth="4" />
      <rect x="54" y="62" width="12" height="18" rx="2" fill={PAL.blue} />
      <Shine d="M28 30V52" width={4} opacity={0.5} />
    </g>
  ),

  // 📬 "de post, de brievenbus": your mail — a green letterbox on a post, letters sticking out
  'e.brievenbus': () => (
    <g>
      <Ground cy={106} rx={30} />
      <rect x="54" y="84" width="12" height="22" rx="2" fill={PAL.slate} />
      {/* Letters in the slot */}
      <g transform="rotate(-12 46 28)">
        <rect x="28" y="14" width="36" height="28" rx="3" fill={PAL.mist} />
        <rect x="28" y="12" width="36" height="28" rx="3" fill={PAL.paper} />
        <path d="M30 14L46 27L62 14" fill="none" stroke={PAL.steel} strokeWidth="2.4" strokeLinejoin="round" />
      </g>
      <g transform="rotate(12 74 28)">
        <rect x="56" y="16" width="34" height="26" rx="3" fill={PAL.orangeShade} />
        <rect x="56" y="14" width="34" height="26" rx="3" fill={PAL.orangeLight} />
        <path d="M58 16L73 28L88 16" fill="none" stroke={PAL.orangeShade} strokeWidth="2.4" strokeLinejoin="round" />
      </g>
      <Shade color={PAL.greenShade} opacity={1} at={[100, 66, 14, 30]}>
        <rect x="22" y="38" width="76" height="48" rx="9" fill={PAL.green} />
      </Shade>
      <rect x="32" y="40" width="56" height="6" rx="3" fill={PAL.greenShade} />
      <rect x="48" y="58" width="24" height="7" rx="3.5" fill={PAL.greenShade} />
      <Shine d="M28 52V70" color={PAL.lime} width={3.4} opacity={0.7} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
