import type { JSX } from 'react';
import { Arrow, Bubble, Bust, Dots, Ground, Hand, Motion, PAL, QuestionMark, SKIN, Shade, Shine, Sparkle, Tick } from './kit';

/**
 * Word pictures, group 23 (keyed by id): "Slimme apps en AI" (u.ai). The words of one lesson are
 * shown side by side in a choice, so each picture has its own main shape and colour:
 *  - AI as a help: the AI (a friendly robot head), the chatbot (a phone with a robot in the chat),
 *    the answer (a bubble with a tick under a bubble with a question mark), to look along (two
 *    people bent over one paper);
 *  - what you don't share: the password (a field of dots with a padlock), to log in (a laptop with
 *    an avatar and an arrow going in at a door), to type (two hands on a keyboard), to save (a
 *    document dropping into a tray);
 *  - fake or real: the voice (a person with sound waves), the video (a phone on its side with a
 *    play button), to hang up (the red button pressed), the number (a keypad and a contact card);
 *  - the app plans your work: the planning (a cork board with notes), the person (a cast member
 *    with a heart), the computer (a monitor and keyboard), the pace (a speed dial over a scanner).
 * They stay apart from the drawn phones (w.app, w.bellen, w.bericht, w.telefoon, w.terugbellen),
 * the roster grid (w.rooster) and the scanner (w.scanner). See docs/tekenstijl.md and ./kit.tsx.
 */

/** A friendly robot head: rounded sky-blue head, dark visor with two glowing eyes and a smile. */
function RobotHead({ cx, cy, s = 1 }: { cx: number; cy: number; s?: number }) {
  return (
    <g transform={`translate(${cx} ${cy}) scale(${s})`}>
      {/* Antenna */}
      <path d="M0 -30V-40" stroke={PAL.slate} strokeWidth="3.4" strokeLinecap="round" />
      <circle cx="0" cy="-43" r="5.4" fill={PAL.yellow} />
      {/* Ears */}
      <rect x="-37" y="-10" width="9" height="20" rx="4" fill={PAL.blueShade} />
      <rect x="28" y="-10" width="9" height="20" rx="4" fill={PAL.blueShade} />
      <Shade color={PAL.skyShade} opacity={1} at={[40, 0, 14, 40]}>
        <rect x="-31" y="-30" width="62" height="56" rx="18" fill={PAL.sky} />
      </Shade>
      {/* Visor */}
      <rect x="-23" y="-19" width="46" height="31" rx="12" fill={PAL.slateDark} />
      <circle cx="-10" cy="-6" r="5.2" fill={PAL.ice} />
      <circle cx="10" cy="-6" r="5.2" fill={PAL.ice} />
      <path d="M-8 4Q0 9.5 8 4" fill="none" stroke={PAL.ice} strokeWidth="2.8" strokeLinecap="round" />
      <Shine d="M-24 -18Q-22 -26 -12 -27" opacity={0.55} />
    </g>
  );
}

/** A plain sheet of paper with grey text lines, top-left (x, y). */
function Paper({ x, y, w, h, lines = 4 }: { x: number; y: number; w: number; h: number; lines?: number }) {
  return (
    <g>
      <rect x={x} y={y + 3} width={w} height={h} rx="3" fill={PAL.paperShade} />
      <rect x={x} y={y} width={w} height={h} rx="3" fill={PAL.white} />
      {Array.from({ length: lines }, (_, i) => (
        <path key={i} d={`M${x + 6} ${y + 9 + i * 8}H${x + w - (i % 2 ? 14 : 7)}`} stroke={PAL.line} strokeWidth="2.6" strokeLinecap="round" />
      ))}
    </g>
  );
}

/** A padlock, bottom-middle of the body at (x, y), body `w` wide. */
function Padlock({ x, y, w = 26 }: { x: number; y: number; w?: number }) {
  const h = w * 0.82;
  return (
    <g>
      <path d={`M${x - w * 0.3} ${y - h}V${y - h - w * 0.28}A${w * 0.3} ${w * 0.3} 0 0 1 ${x + w * 0.3} ${y - h - w * 0.28}V${y - h}`} fill="none" stroke={PAL.steel} strokeWidth={w * 0.16} />
      <Shade color={PAL.yellowShade} opacity={1} at={[x + w * 0.6, y - h / 2, w * 0.3, h]}>
        <rect x={x - w / 2} y={y - h} width={w} height={h} rx={w * 0.16} fill={PAL.yellow} />
      </Shade>
      <circle cx={x} cy={y - h * 0.58} r={w * 0.1} fill={PAL.slateDark} />
      <rect x={x - w * 0.045} y={y - h * 0.58} width={w * 0.09} height={h * 0.3} rx={w * 0.04} fill={PAL.slateDark} />
    </g>
  );
}

/** A phone handset (the classic receiver) lying down, ear and mouth pieces below the handle,
 *  centred on (0, 0), about 50 wide (`k` scales it). */
function Handset({ x, y, k = 1, color = PAL.white }: { x: number; y: number; k?: number; color?: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${k})`} fill={color}>
      <path d="M-17 2Q0 -16 17 2" fill="none" stroke={color} strokeWidth="9" strokeLinecap="round" />
      <rect x="-27" y="-1" width="17" height="11" rx="4.5" transform="rotate(22 -18 4)" />
      <rect x="10" y="-1" width="17" height="11" rx="4.5" transform="rotate(-22 18 4)" />
    </g>
  );
}

export default {
  // "de AI": a friendly robot head with a sparkle (smart, not scary)
  'w.ai': () => (
    <g>
      <Ground cy={104} rx={30} />
      {/* Neck */}
      <rect x="49" y="86" width="22" height="12" rx="3" fill={PAL.slate} />
      <rect x="40" y="95" width="40" height="9" rx="4" fill={PAL.slateDark} />
      <RobotHead cx={60} cy={60} s={1.12} />
      <Sparkle x={98} y={26} r={9} />
      <Sparkle x={18} y={36} r={5.5} color={PAL.yellowLight} />
    </g>
  ),

  // "de chatbot": a phone with a chat: a robot face in the question bubble, our blue reply
  'w.chatbot': () => (
    <g>
      <Ground cy={108} rx={26} ry={3.5} />
      <Shade color={PAL.slateDark} opacity={1} at={[90, 60, 10, 60]}>
        <rect x="31" y="8" width="58" height="100" rx="10" fill={PAL.slate} />
      </Shade>
      <rect x="36" y="16" width="48" height="84" rx="5" fill={PAL.paper} />
      {/* The bot's bubble, its robot face at the left */}
      <rect x="39" y="22" width="34" height="30" rx="8" fill={PAL.paperShade} />
      <g transform="translate(51 39) scale(0.36)">
        <rect x="-31" y="-30" width="62" height="56" rx="18" fill={PAL.sky} />
        <rect x="-23" y="-19" width="46" height="31" rx="12" fill={PAL.slateDark} />
        <circle cx="-10" cy="-6" r="6" fill={PAL.ice} />
        <circle cx="10" cy="-6" r="6" fill={PAL.ice} />
        <path d="M0 -30V-42" stroke={PAL.slate} strokeWidth="5" strokeLinecap="round" />
        <circle cx="0" cy="-44" r="6" fill={PAL.yellow} />
      </g>
      <path d="M62 33H69M62 41H67" stroke={PAL.line} strokeWidth="2.4" strokeLinecap="round" />
      {/* Our reply, blue, on the right */}
      <rect x="47" y="60" width="34" height="22" rx="8" fill={PAL.blue} />
      <Dots cx={64} cy={71} gap={8} r={3} color={PAL.white} />
      <rect x="39" y="88" width="24" height="7" rx="3.5" fill={PAL.paperShade} />
      <Shine d="M35 20Q36 13 42 12" opacity={0.4} />
    </g>
  ),

  // "het antwoord": a small question bubble, and a big bubble with a tick that answers it
  'w.antwoord': () => (
    <g>
      <Bubble x={10} y={10} w={46} h={34} tail="left" fill="#e3f5ff" depth={PAL.ice}>
        <QuestionMark x={33} y={27} size={26} color={PAL.sky} />
      </Bubble>
      <Bubble x={36} y={50} w={74} h={46} tail="right" fill={PAL.yellowShine} depth={PAL.yellowShade}>
        <Tick x={73} y={72} r={16} />
      </Bubble>
    </g>
  ),

  // "meekijken": two people bent together over one paper
  'w.meekijken': () => (
    <g>
      <Bust who="amina" x={36} y={112} scale={0.52} tilt={12} expr="thinking" />
      <Bust who="henk" x={84} y={112} scale={0.52} tilt={-12} expr="neutral" />
      {/* The paper they both look at, held up in front of them */}
      <g transform="rotate(-5 60 92)">
        <Paper x={36} y={74} w={48} h={34} lines={3} />
      </g>
    </g>
  ),

  // "het wachtwoord": a password field with hidden dots, and a padlock
  'w.wachtwoord': () => (
    <g>
      <rect x="12" y="58" width="96" height="34" rx="10" fill={PAL.mist} />
      <rect x="12" y="54" width="96" height="34" rx="10" fill={PAL.white} />
      <rect x="15" y="57" width="90" height="28" rx="8" fill="#e3f5ff" />
      {[0, 1, 2, 3, 4].map((i) => <circle key={i} cx={32 + i * 13} cy={71} r={4.6} fill={PAL.slateDark} />)}
      <rect x="96" y="62" width="3.4" height="18" rx="1.7" fill={PAL.sky} />
      <Padlock x={60} y={46} w={30} />
      <Shine d="M17 60Q18 56 23 56" opacity={0.5} width={3} />
    </g>
  ),

  // "inloggen": a laptop showing your account (an avatar) and a green arrow going in at a door
  'w.inloggen': () => (
    <g>
      <Ground cy={106} rx={50} ry={4} />
      {/* Laptop: screen, then the base */}
      <Shade color={PAL.slateDark} opacity={1} at={[110, 50, 10, 40]}>
        <rect x="16" y="14" width="88" height="66" rx="7" fill={PAL.slate} />
      </Shade>
      <rect x="22" y="20" width="76" height="54" rx="3" fill={PAL.paper} />
      <path d="M8 84H112L106 100H14Z" fill={PAL.mist} />
      <path d="M8 84H112V86H8Z" fill={PAL.steel} />
      <rect x="48" y="90" width="24" height="5" rx="2.5" fill={PAL.steel} />
      {/* The account: an avatar circle */}
      <circle cx="40" cy="47" r="13" fill={PAL.purpleLight} />
      <circle cx="40" cy="43" r="5" fill={PAL.white} />
      <path d="M31 55Q40 46 49 55" fill={PAL.white} />
      {/* The door, open, with the arrow going in */}
      <rect x="70" y="28" width="22" height="38" rx="2" fill={PAL.slateDark} />
      <path d="M70 28L80 32V70L70 66Z" fill={PAL.wood} />
      <circle cx="77.5" cy="50" r="1.6" fill={PAL.yellow} />
      <Arrow from={[52, 47]} to={[88, 47]} color={PAL.green} width={7} head={11} />
      <Shine d="M20 20Q20 16 24 16" opacity={0.4} />
    </g>
  ),

  // "typen": two hands with fingers on a keyboard, tapping
  'w.typen': () => (
    <g>
      {/* Keyboard, seen from the front and a little from above */}
      <path d="M12 46H108L114 78H6Z" fill={PAL.slate} />
      <path d="M6 78H114V84Q114 86 112 86H8Q6 86 6 84Z" fill={PAL.slateDark} />
      {Array.from({ length: 3 }, (_, r) =>
        Array.from({ length: 8 }, (_, c) => (
          <rect key={`${r}-${c}`} x={15 + c * 11.6 - r * 1.6} y={50 + r * 9} width="9" height="6.4" rx="1.6" fill={PAL.paperShade} />
        )),
      )}
      <rect x="34" y="73" width="52" height="4" rx="1.6" fill={PAL.paperShade} />
      {/* Hands from below, a finger down on a key */}
      <Hand pose="point" x={40} y={100} scale={0.74} rotate={4} skin={SKIN.jada} sleeve={[PAL.yellow, PAL.yellowShade]} />
      <Hand pose="point" x={80} y={100} scale={0.74} rotate={-4} skin={SKIN.jada} sleeve={[PAL.yellow, PAL.yellowShade]} mirror />
      <Motion x={34} y={58} dir={-90} spread={80} len={6} gap={7} color={PAL.sky} width={2.8} />
      <Motion x={86} y={58} dir={-90} spread={80} len={6} gap={7} color={PAL.sky} width={2.8} />
    </g>
  ),

  // "opslaan": a document dropping into a blue tray (saved)
  'w.opslaan': () => (
    <g>
      <Ground cy={106} rx={40} />
      {/* The tray: back wall, the paper going in, then the front */}
      <path d="M18 70H102L96 104H24Z" fill={PAL.blueShade} />
      <g transform="rotate(-4 60 40)">
        <Paper x={38} y={20} w={40} h={52} lines={5} />
      </g>
      <Shade color={PAL.blueShade} opacity={1} at={[104, 92, 14, 30]}>
        <path d="M14 78H106L98 104H22Z" fill={PAL.blue} />
      </Shade>
      <rect x="44" y="86" width="32" height="7" rx="3.5" fill={PAL.blueShade} />
      <Arrow from={[98, 12]} to={[98, 52]} color={PAL.green} width={7} head={12} />
      <Shine d="M20 82H44" opacity={0.45} width={3} />
    </g>
  ),

  // "de stem": a person speaking, with big sound waves
  'w.stem': () => (
    <g>
      <Bust who="jada" x={40} y={114} scale={0.66} talk />
      <g fill="none" stroke={PAL.sky} strokeLinecap="round">
        <path d="M78 44Q86 56 78 68" strokeWidth="5" />
        <path d="M88 36Q100 56 88 76" strokeWidth="5" opacity=".75" />
        <path d="M98 28Q114 56 98 84" strokeWidth="5" opacity=".5" />
      </g>
    </g>
  ),

  // "het filmpje": a phone on its side showing a video with a big play button
  'w.filmpje': () => (
    <g>
      <Ground cy={96} rx={46} ry={4} />
      <Shade color={PAL.slateDark} opacity={1} at={[110, 60, 10, 40]}>
        <rect x="8" y="30" width="104" height="62" rx="11" fill={PAL.slate} />
      </Shade>
      <rect x="17" y="36" width="86" height="50" rx="5" fill={PAL.navy} />
      {/* A simple video scene: hills under a sun */}
      <path d="M17 76Q40 58 60 70T103 66V86H17Z" fill={PAL.green} opacity=".55" />
      <circle cx="86" cy="48" r="6" fill={PAL.yellow} opacity=".75" />
      <circle cx="60" cy="58" r="15" fill={PAL.white} opacity=".95" />
      <path d="M55 50L69 58L55 66Z" fill={PAL.red} stroke={PAL.red} strokeWidth="2" strokeLinejoin="round" />
      {/* The progress bar */}
      <rect x="22" y="80" width="76" height="3.4" rx="1.7" fill={PAL.white} opacity=".4" />
      <rect x="22" y="80" width="30" height="3.4" rx="1.7" fill={PAL.red} />
      <Shine d="M13 40Q13 34 19 33" opacity={0.4} />
    </g>
  ),

  // "ophangen": a finger presses the red hang-up button
  'w.ophangen': () => (
    <g>
      <circle cx="54" cy="52" r="38" fill={PAL.redShade} />
      <circle cx="54" cy="48" r="38" fill={PAL.red} />
      <Handset x={54} y={50} k={1.15} />
      <Shine d="M24 36Q30 20 46 15" opacity={0.45} />
      <Hand pose="point" x={96} y={116} rotate={-28} scale={0.8} skin={SKIN.bram} sleeve={[PAL.orange, PAL.orangeShade]} />
    </g>
  ),

  // "het nummer": a phone keypad and a contact card with a number (blocks, no digits)
  'w.nummer': () => (
    <g>
      {/* Keypad, behind */}
      <rect x="10" y="14" width="56" height="78" rx="10" fill={PAL.slateDark} />
      <rect x="10" y="10" width="56" height="78" rx="10" fill={PAL.slate} />
      {Array.from({ length: 4 }, (_, r) =>
        Array.from({ length: 3 }, (_, c) => <circle key={`${r}-${c}`} cx={22 + c * 16} cy={24 + r * 17} r={6.4} fill={PAL.mist} />),
      )}
      {/* Contact card, in front */}
      <rect x="44" y="58" width="68" height="46" rx="8" fill={PAL.paperShade} />
      <rect x="44" y="54" width="68" height="46" rx="8" fill={PAL.white} />
      <circle cx="60" cy="72" r="9" fill={PAL.purpleLight} />
      <circle cx="60" cy="69" r="3.6" fill={PAL.white} />
      <path d="M53.6 78Q60 72 66.4 78" fill={PAL.white} />
      {/* The number: a row of dark blocks */}
      {[0, 1, 2, 3, 4].map((i) => <rect key={i} x={74 + i * 6.6} y={68} width="5" height="8" rx="1.4" fill={PAL.slateDark} />)}
      <rect x="52" y="86" width="52" height="8" rx="4" fill={PAL.ok} />
      <Handset x={78} y={90} k={0.28} />
    </g>
  ),

  // "de planning": a cork board with coloured notes in day columns
  'w.planning': () => (
    <g>
      <Ground cy={108} rx={46} ry={3.5} />
      <rect x="8" y="16" width="104" height="88" rx="6" fill={PAL.wood} />
      <rect x="14" y="22" width="92" height="76" rx="3" fill={PAL.card} />
      {/* Notes: three columns, pinned */}
      {[
        [20, 28, PAL.yellow], [20, 52, PAL.orangeLight], [20, 76, PAL.yellow],
        [50, 28, PAL.blueLight], [50, 52, PAL.yellow], [80, 28, PAL.lime], [80, 64, PAL.blueLight],
      ].map(([x, y, c], i) => (
        <g key={i}>
          <rect x={(x as number) + 1.5} y={(y as number) + 2} width="22" height="18" rx="2" fill="#000" opacity=".14" />
          <rect x={x as number} y={y as number} width="22" height="18" rx="2" fill={c as string} />
          <path d={`M${(x as number) + 4} ${(y as number) + 10}H${(x as number) + 17}`} stroke="#000" strokeOpacity=".22" strokeWidth="2" strokeLinecap="round" />
          <circle cx={(x as number) + 11} cy={(y as number) + 3} r="2.6" fill={PAL.red} />
        </g>
      ))}
    </g>
  ),

  // "de mens": one person, warm and friendly (next to the robot of de AI)
  'w.mens': () => (
    <g>
      <Bust who="bram" x={60} y={114} scale={0.78} expr="pleased" />
      <path d="M96 28C96 22 103 20 106 25C109 20 116 22 116 28C116 35 106 40 106 40C106 40 96 35 96 28Z" fill={PAL.red} transform="translate(-4 2)" />
    </g>
  ),

  // "de computer": a desktop monitor on its stand, and a keyboard
  'w.computer': () => (
    <g>
      <Ground cy={106} rx={46} ry={4} />
      <path d="M52 76H68L72 92H48Z" fill={PAL.steel} />
      <rect x="40" y="90" width="40" height="6" rx="3" fill={PAL.slate} />
      <Shade color={PAL.slateDark} opacity={1} at={[112, 46, 10, 40]}>
        <rect x="10" y="12" width="100" height="66" rx="7" fill={PAL.slate} />
      </Shade>
      <rect x="16" y="18" width="88" height="52" rx="3" fill={PAL.sky} />
      {/* Two windows on the screen */}
      <rect x="22" y="24" width="40" height="28" rx="2" fill={PAL.white} />
      <rect x="22" y="24" width="40" height="6" rx="2" fill={PAL.ice} />
      <rect x="58" y="36" width="40" height="28" rx="2" fill={PAL.paper} />
      <rect x="58" y="36" width="40" height="6" rx="2" fill={PAL.yellowLight} />
      <path d="M64 50H90M64 56H82" stroke={PAL.line} strokeWidth="2.4" strokeLinecap="round" />
      <path d="M14 98H106L110 108H10Z" fill={PAL.mist} />
      <path d="M22 102H98" stroke={PAL.steel} strokeWidth="2" strokeDasharray="4 3" />
      <Shine d="M14 18Q14 14 18 14" opacity={0.4} />
    </g>
  ),

  // "het tempo": a speed dial (green to red, the needle high) over a hand scanner
  'w.tempo': () => (
    <g>
      {/* The dial: a half circle in three colours */}
      <path d="M14 64A46 46 0 0 1 37 24L48 43A24 24 0 0 0 36 64Z" fill={PAL.leaf} />
      <path d="M37 24A46 46 0 0 1 83 24L72 43A24 24 0 0 0 48 43Z" fill={PAL.yellow} />
      <path d="M83 24A46 46 0 0 1 106 64H84A24 24 0 0 0 72 43Z" fill={PAL.red} />
      <path d="M60 64L92 34" stroke={PAL.slateDark} strokeWidth="6" strokeLinecap="round" />
      <circle cx="60" cy="64" r="10" fill={PAL.paperShade} />
      <circle cx="60" cy="64" r="6.5" fill={PAL.slateDark} />
      {/* The scanner below */}
      <rect x="38" y="78" width="44" height="26" rx="8" fill={PAL.yellowShade} />
      <rect x="38" y="76" width="44" height="26" rx="8" fill={PAL.yellow} />
      <rect x="45" y="81" width="30" height="13" rx="3" fill={PAL.slateDark} />
      <rect x="49" y="85" width="22" height="5" rx="1.5" fill={PAL.ice} />
      <path d="M44 104H76" stroke={PAL.red} strokeWidth="3" strokeLinecap="round" />
    </g>
  ),

  // "de kas": the greenhouse (In de kas, u.kas; also the Tuinbouw sector card) — a glass house
  // with two roof ridges, tomato plants growing inside behind the panes
  'w.kas': () => (
    <g>
      <Ground cx={60} cy={106} rx={50} ry={5} />
      {/* Plants behind the glass: green stems and leaves, red tomatoes */}
      {[30, 60, 90].map((x) => (
        <g key={x}>
          <path d={`M${x} 104V56`} stroke={PAL.greenShade} strokeWidth="3" strokeLinecap="round" />
          <ellipse cx={x - 7} cy={66} rx={8} ry={4.5} fill={PAL.green} transform={`rotate(-25 ${x - 7} 66)`} />
          <ellipse cx={x + 7} cy={78} rx={8} ry={4.5} fill={PAL.green} transform={`rotate(25 ${x + 7} 78)`} />
          <ellipse cx={x - 7} cy={90} rx={8} ry={4.5} fill={PAL.leafShade} transform={`rotate(-25 ${x - 7} 90)`} />
          <circle cx={x + 5} cy={62} r={4.5} fill={PAL.red} />
          <circle cx={x - 5} cy={80} r={4.5} fill={PAL.red} />
          <circle cx={x + 6} cy={94} r={4.5} fill={PAL.redShade} />
        </g>
      ))}
      {/* The glass: walls and a double roof, see-through */}
      <path d="M12 104V50L36 28L60 50L84 28L108 50V104Z" fill={PAL.ice} opacity=".38" />
      <path d="M84 28L108 50V104H84Z" fill={PAL.sky} opacity=".14" />
      {/* The frame */}
      <path d="M12 104V50L36 28L60 50L84 28L108 50V104" fill="none" stroke={PAL.steel} strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M12 50H108M36 28V104M60 50V104M84 28V104M12 76H108" stroke={PAL.steel} strokeWidth="2.2" />
      <path d="M8 104H112" stroke={PAL.slate} strokeWidth="4" strokeLinecap="round" />
      <Shine d="M18 70L30 58M42 70L54 58" width={3} opacity={0.8} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
