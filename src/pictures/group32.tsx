import type { JSX, ReactNode } from 'react';
import group25 from './group25';
import { Bubble, Bust, Calendar, Dots, ExclaimMark, Ground, Hand, Motion, PAL, SKIN, Shade, Shine, Sparkle } from './kit';

/**
 * Pictures, group 32 (keyed by id): drawings for emoji that the app still showed as emoji
 * (batch 3: the Hulp tips, the "Wie kan je helpen" cards, the about pages, the work-rules cards
 * and the social map), ids "e.*"; and six words of the Belgian track that had no drawing yet,
 * under their own word id ("be.w.*"). The emoji-to-drawing table is
 * src/content/emojiArt/batch3.ts. See docs/tekenstijl.md and ./kit.tsx.
 */

const r1 = (n: number) => Math.round(n * 10) / 10;

/** A red heart with its depth edge, centred on (cx, cy). */
function Heart({ cx, cy, r, color = PAL.red, shade = PAL.redShade }: { cx: number; cy: number; r: number; color?: string; shade?: string }) {
  const d = (dy: number) =>
    `M${cx} ${r1(cy + r * 0.95 + dy)}C${r1(cx - r * 1.7)} ${r1(cy - r * 0.05 + dy)} ${r1(cx - r * 0.95)} ${r1(cy - r * 1.35 + dy)} ${cx} ${r1(cy - r * 0.45 + dy)}` +
    `C${r1(cx + r * 0.95)} ${r1(cy - r * 1.35 + dy)} ${r1(cx + r * 1.7)} ${r1(cy - r * 0.05 + dy)} ${cx} ${r1(cy + r * 0.95 + dy)}Z`;
  return (
    <g>
      <path d={d(r * 0.16)} fill={shade} />
      <path d={d(0)} fill={color} />
    </g>
  );
}

/** A smartphone: dark body, its screen, the speaker slot. */
function Phone({ x, y, w, h, screen = PAL.sky, children }: { x: number; y: number; w: number; h: number; screen?: string; children?: ReactNode }) {
  return (
    <g>
      <rect x={x + 3} y={y + 3} width={w} height={h} rx="8" fill={PAL.slateDark} />
      <rect x={x} y={y} width={w} height={h} rx="8" fill={PAL.slate} />
      <rect x={x + 4} y={y + 8} width={w - 8} height={h - 16} rx="4" fill={screen} />
      <rect x={x + w / 2 - 6} y={y + 3} width="12" height="2.6" rx="1.3" fill={PAL.slateDark} />
      {children}
    </g>
  );
}

/** A simple bus seen from the side, in white, for on a ticket or a pass (about 30 x 18). */
function BusMark({ x, y, k = 1, color = PAL.white, window = PAL.orangeShade }: { x: number; y: number; k?: number; color?: string; window?: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${k})`}>
      <rect x="0" y="0" width="30" height="16" rx="4" fill={color} />
      <rect x="3" y="3" width="7" height="6" rx="1.5" fill={window} />
      <rect x="12" y="3" width="7" height="6" rx="1.5" fill={window} />
      <rect x="21" y="3" width="6" height="9" rx="1.5" fill={window} />
      <circle cx="7" cy="17" r="3.4" fill={window} />
      <circle cx="23" cy="17" r="3.4" fill={window} />
    </g>
  );
}

/** "het ticket" / the 🎫 of bus, train and travel costs: an orange ticket with a torn-off stub. */
function Ticket() {
  // The ticket, tilted: the main part (left) and the stub (right), with half-round notches
  // at the perforation.
  const body = (dy: number) =>
    `M18 ${34 + dy}H76A6 6 0 0 0 88 ${34 + dy}H100Q104 ${34 + dy} 104 ${38 + dy}V${82 + dy}Q104 ${86 + dy} 100 ${86 + dy}H88A6 6 0 0 0 76 ${86 + dy}H18Q14 ${86 + dy} 14 ${82 + dy}V${38 + dy}Q14 ${34 + dy} 18 ${34 + dy}Z`;
  return (
    <g transform="rotate(-10 60 60)">
      <Ground cx={60} cy={100} rx={40} ry={4} />
      <path d={body(5)} fill={PAL.orangeShade} />
      <Shade color={PAL.orangeShade} opacity={1} at={[112, 60, 24, 40]}>
        <path d={body(0)} fill={PAL.orange} />
      </Shade>
      <path d="M82 42V80" stroke={PAL.white} strokeWidth="2.6" strokeLinecap="round" strokeDasharray="1 6" />
      <BusMark x={26} y={44} k={1.3} />
      <path d="M26 76H62" stroke={PAL.white} strokeWidth="3.4" strokeLinecap="round" opacity=".75" />
      <rect x="90" y="48" width="7" height="24" rx="3.5" fill={PAL.white} opacity=".75" />
      <Shine d="M20 44V58" width={3} opacity={0.5} />
    </g>
  );
}

export default {
  // ✊ "de vakbond" (the union, your rights): raised fists — one big fist up front, two more
  // behind it: you stand up for your rights together.
  'e.vakbond': () => (
    <g>
      <Hand pose="fist" x={30} y={92} rotate={-12} scale={1.05} skin={SKIN.bram} sleeve={[PAL.blue, PAL.blueShade]} />
      <Hand pose="fist" x={90} y={92} rotate={12} scale={1.05} skin={SKIN.amina} sleeve={[PAL.green, PAL.greenShade]} mirror />
      <Hand pose="fist" x={60} y={84} scale={1.55} skin={SKIN.jada} sleeve={[PAL.red, PAL.redShade]} />
      <Motion x={60} y={34} dir={-90} spread={70} n={3} len={8} gap={4} color={PAL.yellowShade} width={3.6} />
    </g>
  ),

  // 📣 "melden" (report it, make it heard): a red megaphone, sound waves coming out.
  'e.megafoon': () => (
    <g transform="rotate(-12 60 60)">
      {/* The handle under the horn */}
      <rect x="40" y="62" width="11" height="30" rx="4" fill={PAL.slateDark} transform="rotate(10 45 62)" />
      {/* The back and the horn */}
      <rect x="12" y="47" width="18" height="26" rx="5" fill={PAL.slate} />
      <Shade color={PAL.redShade} opacity={1} at={[60, 90, 50, 18]}>
        <path d="M26 50L80 28V92L26 70Z" fill={PAL.red} strokeLinejoin="round" stroke={PAL.red} strokeWidth="4" />
      </Shade>
      <ellipse cx="80" cy="60" rx="9" ry="33" fill={PAL.redShade} />
      <ellipse cx="81" cy="60" rx="5.5" ry="26" fill={PAL.slateDark} />
      <rect x="44" y="45" width="6" height="30" rx="3" fill={PAL.white} opacity=".85" />
      <Shine d="M34 50L64 38" width={3} opacity={0.55} />
      {/* The sound */}
      <path d="M96 46Q102 60 96 74" fill="none" stroke={PAL.sky} strokeWidth="5" strokeLinecap="round" />
      <path d="M105 38Q114 60 105 82" fill="none" stroke={PAL.sky} strokeWidth="5" strokeLinecap="round" />
    </g>
  ),

  // 🎯 "het doel" (our mission, what it is for): a target with a dart in the bullseye.
  'e.doelwit': () => (
    <g>
      <circle cx="54" cy="66" r="42" fill={PAL.redShade} />
      <Shade color={PAL.redShade} opacity={1} at={[100, 62, 18, 46]}>
        <circle cx="54" cy="62" r="42" fill={PAL.red} />
      </Shade>
      <circle cx="54" cy="62" r="31" fill={PAL.paper} />
      <circle cx="54" cy="62" r="20" fill={PAL.red} />
      <circle cx="54" cy="62" r="9" fill={PAL.paper} />
      <Shine d="M20 48A36 36 0 0 1 36 28" width={4} opacity={0.5} />
      {/* The dart: the shaft from the middle up to the right, the flights at its end */}
      <path d="M55 61L92 24" stroke={PAL.slate} strokeWidth="5" strokeLinecap="round" />
      <path d="M90 26L96 12L100 20Z" fill={PAL.yellow} />
      <path d="M90 26L108 20L100 28Z" fill={PAL.yellowShade} />
      <circle cx="54" cy="62" r="4.6" fill={PAL.slateDark} />
    </g>
  ),

  // 🙂 "je of u zeggen" (how you talk to people at work): Jada talks to Henk, the boss, in a
  // friendly way; both smile.
  'e.aanspreken': () => (
    <g>
      <Bust who="jada" x={34} y={124} scale={0.68} expr="pleased" talk />
      <Bust who="henk" x={88} y={124} scale={0.68} expr="pleased" flip />
      <Bubble x={10} y={8} w={50} h={26} tail="left">
        <Dots cx={35} cy={21} gap={11} r={3.8} />
      </Bubble>
    </g>
  ),

  // 🔁 "doorgeven" (pass on a change: new work? tell them at once): a form, and the round
  // "update" arrows on it.
  'e.wijziging': () => (
    <g>
      <Ground cx={58} cy={104} rx={40} ry={4} />
      <rect x="24" y="16" width="60" height="82" rx="6" fill={PAL.paperShade} />
      <rect x="20" y="12" width="60" height="82" rx="6" fill={PAL.white} />
      <path d="M20 18A6 6 0 0 1 26 12H74A6 6 0 0 1 80 18V26H20Z" fill={PAL.blue} />
      <path d="M30 38H70M30 50H62M30 62H54M30 74H48" stroke={PAL.line} strokeWidth="3.4" strokeLinecap="round" />
      {/* The update badge */}
      <circle cx="80" cy="80" r="24" fill={PAL.skyShade} />
      <circle cx="80" cy="77" r="24" fill={PAL.sky} />
      <path d="M67 74A13.5 13.5 0 0 1 91 69" fill="none" stroke={PAL.white} strokeWidth="5" strokeLinecap="round" />
      <path d="M95.5 62L94 75L83 70Z" fill={PAL.white} stroke={PAL.white} strokeWidth="2" strokeLinejoin="round" />
      <path d="M93 80A13.5 13.5 0 0 1 69 85" fill="none" stroke={PAL.white} strokeWidth="5" strokeLinecap="round" />
      <path d="M64.5 92L66 79L77 84Z" fill={PAL.white} stroke={PAL.white} strokeWidth="2" strokeLinejoin="round" />
    </g>
  ),

  // 🥜 "de allergie" (the peanut, ask in the kitchen): a peanut in its shell, and a red warning.
  'e.pinda': () => (
    <g>
      <Ground cx={56} cy={104} rx={34} ry={4.5} />
      <g transform="rotate(-38 56 64)">
        <Shade color={PAL.cardShade} opacity={1} at={[84, 64, 16, 50]}>
          <g fill={PAL.card}>
            <ellipse cx="56" cy="40" rx="21" ry="24" />
            <ellipse cx="56" cy="88" rx="22" ry="25" />
            <rect x="40" y="52" width="32" height="24" />
          </g>
        </Shade>
        {/* The waist and the shell's net */}
        <path d="M36 64Q56 70 76 64" fill="none" stroke={PAL.cardShade} strokeWidth="4" strokeLinecap="round" />
        <path d="M44 30V50M56 24V52M68 30V50M44 80V100M56 76V106M68 80V100" stroke={PAL.cardDark} strokeWidth="1.8" strokeLinecap="round" opacity=".7" />
        <path d="M40 40H72M38 90H74" stroke={PAL.cardDark} strokeWidth="1.8" strokeLinecap="round" opacity=".7" />
        <Shine d="M40 30Q42 22 50 19" width={3.4} opacity={0.5} />
      </g>
      {/* Careful: allergy */}
      <circle cx="94" cy="30" r="15" fill={PAL.redShade} />
      <circle cx="94" cy="28" r="15" fill={PAL.red} />
      <ExclaimMark x={94} y={28} size={19} color={PAL.white} />
    </g>
  ),

  // 📵 "je telefoon op het werk" (no phone at work): a phone with the round "not allowed" sign over it.
  'e.geentelefoon': () => (
    <g>
      <Phone x={40} y={20} w={40} h={78} />
      <circle cx="60" cy="59" r="42" fill="none" stroke={PAL.redShade} strokeWidth="9" transform="translate(0 2.5)" />
      <circle cx="60" cy="59" r="42" fill="none" stroke={PAL.red} strokeWidth="9" />
      <path d="M31 30L89 88" stroke={PAL.red} strokeWidth="9" strokeLinecap="round" />
    </g>
  ),

  // 🫂 "respect voor iedereen": Amina and Bram lean in to each other, a heart above them.
  'e.respect': () => (
    <g>
      <Bust who="amina" x={36} y={124} scale={0.66} expr="pleased" tilt={8} />
      <Bust who="bram" x={86} y={124} scale={0.66} expr="pleased" tilt={-8} flip />
      <Heart cx={60} cy={22} r={12} />
    </g>
  ),

  // 🎫 "het kaartje" (bus, train and travel costs): a ticket.
  'e.kaartje': Ticket,

  // 💼 "werk vinden" (the theme): a work briefcase.
  'e.aktetas': () => (
    <g>
      <Ground cx={60} cy={102} rx={46} ry={5} />
      {/* The handle */}
      <path d="M44 38V30Q44 22 52 22H68Q76 22 76 30V38" fill="none" stroke={PAL.brown} strokeWidth="7" strokeLinecap="round" />
      <rect x="14" y="40" width="92" height="60" rx="9" fill={PAL.cardDark} transform="translate(0 2)" />
      <Shade color={PAL.cardDark} opacity={1} at={[112, 70, 18, 40]}>
        <rect x="14" y="38" width="92" height="60" rx="9" fill={PAL.wood} />
      </Shade>
      {/* The flap edge and the clasp */}
      <path d="M14 60H106" stroke={PAL.cardDark} strokeWidth="3.4" />
      <rect x="51" y="54" width="18" height="14" rx="3" fill={PAL.yellow} />
      <rect x="57" y="58" width="6" height="6" rx="1.5" fill={PAL.yellowShade} />
      <Shine d="M22 48H40" width={3.4} opacity={0.45} />
    </g>
  ),

  // 👷 "Wie is Bram?": Bram himself, in his hard hat and hi-vis, glad to meet you.
  'e.bram': () => (
    <g>
      <Bust who="bram" x={60} y={122} scale={0.86} expr="joy" />
      <Sparkle x={100} y={26} r={8} />
      <Sparkle x={20} y={40} r={5.5} />
    </g>
  ),

  // 👥 "met een groep" (use it with a group): three of the cast side by side.
  'e.groep': () => (
    <g>
      <Bust who="amina" x={28} y={114} scale={0.56} expr="pleased" />
      <Bust who="jada" x={92} y={114} scale={0.56} expr="pleased" flip />
      <Bust who="henk" x={60} y={124} scale={0.64} expr="pleased" />
    </g>
  ),

  // 📘 "alle werkregels" (the rules book): a closed blue book with a bookmark and a label.
  'e.regelboek': () => (
    <g>
      <Ground cx={60} cy={104} rx={38} ry={4.5} />
      {/* The pages, seen from the side and below */}
      <rect x="30" y="18" width="66" height="84" rx="6" fill={PAL.paperShade} />
      <path d="M90 24V96" stroke={PAL.mist} strokeWidth="2" />
      <Shade color={PAL.blueShade} opacity={1} at={[96, 60, 12, 50]}>
        <rect x="24" y="14" width="64" height="84" rx="6" fill={PAL.blue} />
      </Shade>
      <rect x="24" y="14" width="10" height="84" rx="4" fill={PAL.blueShade} />
      {/* The label on the cover */}
      <rect x="42" y="32" width="36" height="24" rx="4" fill={PAL.white} />
      <path d="M48 40H72M48 48H64" stroke={PAL.line} strokeWidth="3" strokeLinecap="round" />
      {/* The bookmark */}
      <path d="M70 92V110L75 105L80 110V92Z" fill={PAL.red} />
      <Shine d="M40 22H60" width={3} opacity={0.5} />
    </g>
  ),

  // 📍 "de regio" (where this map is about): a red map pin on a folded map.
  'e.locatie': () => (
    <g>
      {/* The map, three panels, lying flat */}
      <path d="M12 72L42 66L42 102L12 108Z" fill={PAL.lime} />
      <path d="M42 66L78 72L78 108L42 102Z" fill={PAL.leaf} />
      <path d="M78 72L108 66L108 102L78 108Z" fill={PAL.lime} />
      <path d="M12 98Q40 82 60 92T108 80" fill="none" stroke={PAL.sky} strokeWidth="5" strokeLinecap="round" />
      <path d="M50 74L54 82M86 92L96 88" stroke={PAL.white} strokeWidth="3" strokeLinecap="round" opacity=".8" />
      {/* The pin's shadow, then the pin */}
      <ellipse cx="60" cy="88" rx="10" ry="3.4" fill="#000" opacity=".18" />
      <Shade color={PAL.redShade} opacity={1} at={[82, 44, 14, 40]}>
        <path d="M60 88C52 72 34 60 34 40A26 26 0 0 1 86 40C86 60 68 72 60 88Z" fill={PAL.red} />
      </Shade>
      <circle cx="60" cy="40" r="10" fill={PAL.white} />
      <Shine d="M42 34Q44 24 52 20" width={3.6} opacity={0.55} />
    </g>
  ),

  // 🏞️ "de regio" (Zuid-Limburg, its hills): a landscape tile — hills, a river, the sun.
  'e.heuvels': () => (
    <g>
      <rect x="12" y="20" width="96" height="84" rx="12" fill={PAL.greenShade} transform="translate(0 4)" />
      <svg x="12" y="20" width="96" height="84" viewBox="12 20 96 84" overflow="hidden">
        <rect x="12" y="20" width="96" height="84" rx="12" fill={PAL.ice} />
        <circle cx="86" cy="40" r="10" fill={PAL.yellow} />
        <path d="M0 74Q30 44 62 70Q86 52 120 64V110H0Z" fill={PAL.leaf} />
        <path d="M0 86Q40 66 74 84Q96 72 120 80V110H0Z" fill={PAL.green} />
        <path d="M58 104Q50 94 66 88Q80 82 70 76" fill="none" stroke={PAL.sky} strokeWidth="7" strokeLinecap="round" />
        <circle cx="34" cy="64" r="6" fill={PAL.greenShade} />
        <rect x="32.8" y="66" width="2.4" height="7" fill={PAL.brown} />
      </svg>
    </g>
  ),

  /* ---------------------------------------------------------------------------------------
   * Belgian words without a drawing (be.u.society, be.l.transit). "de wijkagent" and "de
   * identiteitskaart" keep their Dutch twin's drawing (src/content/taalBe/ids.ts).
   * ------------------------------------------------------------------------------------- */

  // "stemmen": the same drawing as the Dutch "stemmen" (the ballot paper into the box). Under its
  // own id, because pictureIdOf keeps be.w.stemmen as it is (tests/taalBe.test.ts).
  'be.w.stemmen': group25['w.stemmen'],

  // "het ticket" (Belgian line of "inchecken"): a bus ticket.
  'be.w.inchecken': Ticket,

  // "het abonnement" (Belgian line of "uitchecken"): a green season pass with the bus on it,
  // and the month it is good for.
  'be.w.uitchecken': () => (
    <g>
      <rect x="10" y="26" width="82" height="54" rx="8" fill={PAL.greenShade} transform="translate(0 4)" />
      <Shade color={PAL.greenShade} opacity={1} at={[96, 50, 14, 34]}>
        <rect x="10" y="26" width="82" height="54" rx="8" fill={PAL.green} />
      </Shade>
      <rect x="18" y="34" width="24" height="16" rx="3" fill={PAL.lime} opacity=".85" />
      <BusMark x={50} y={34} k={1.1} window={PAL.greenShade} />
      <path d="M18 62H50M18 70H40" stroke={PAL.white} strokeWidth="3.2" strokeLinecap="round" opacity=".7" />
      <Shine d="M16 40V30" width={2.6} opacity={0.5} />
      <Calendar x={62} y={54} w={46} h={50} mark={6} />
    </g>
  ),

  // "het gemeentehuis": the town hall — a Flemish town hall with stepped gables and its bell
  // tower with a clock (no flag).
  'be.w.gemeentehuis': () => (
    <g>
      <Ground cx={60} cy={106} rx={50} ry={4} />
      {/* The bell tower */}
      <path d="M60 8L70 28H50Z" fill={PAL.slate} stroke={PAL.slate} strokeWidth="3" strokeLinejoin="round" />
      <rect x="50" y="27" width="20" height="30" fill={PAL.card} />
      <rect x="64" y="27" width="6" height="30" fill={PAL.cardShade} />
      <circle cx="60" cy="40" r="6.4" fill={PAL.white} />
      <path d="M60 40V36M60 40H63" stroke={PAL.ink} strokeWidth="1.6" strokeLinecap="round" />
      {/* Two stepped gables and the hall between them */}
      <Shade color={PAL.clayShade} opacity={1} at={[116, 80, 14, 40]}>
        <g fill={PAL.clay}>
          <path d="M12 104V56H16V50H21V44H29V50H34V56H38V104Z" />
          <path d="M82 104V56H86V50H91V44H99V50H104V56H108V104Z" />
          <rect x="36" y="56" width="48" height="48" />
        </g>
      </Shade>
      <rect x="36" y="54" width="48" height="5" fill={PAL.clayShade} />
      {[18, 88].map((x) => (
        <g key={x}>
          <rect x={x} y="62" width="14" height="12" rx="5" fill={PAL.sky} />
          <rect x={x} y="82" width="14" height="12" rx="5" fill={PAL.sky} />
        </g>
      ))}
      <rect x="42" y="64" width="9" height="12" rx="4.5" fill={PAL.sky} />
      <rect x="69" y="64" width="9" height="12" rx="4.5" fill={PAL.sky} />
      <path d="M52 104V88A8 8 0 0 1 68 88V104Z" fill={PAL.brown} />
      <rect x="10" y="102" width="100" height="5" rx="2" fill={PAL.mist} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
