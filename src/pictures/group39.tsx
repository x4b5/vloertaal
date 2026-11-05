import type { JSX, ReactNode } from 'react';
import { Bust } from './bust';
import { Arrow, Box, Bubble, CurveArrow, Dots, Ground, Hand, Motion, PAL, SKIN, Shade, Shine, Sparkle } from './kit';

/**
 * Word pictures, group 39 (keyed by word id). See docs/tekenstijl.md and ./kit.tsx.
 *
 * "Goed communiceren" (u.communicate, 5 November 2026). The drawn words of each lesson stand side
 * by side in a choice, so each has its own main shape:
 *  - "Uitleggen wat er is": stilstaan (a belt with two boxes and a big pause sign), het lampje (a
 *    red warning light that is on), komen (Jada beckons, an arrow comes to her);
 *  - "Goed luisteren": aankijken (two eyes that look straight at you, under the bubble of the one
 *    who talks; not "kijken", whose eyes look to the side);
 *  - "Rustig blijven": nadenken (Jada thinking, a thought cloud), ademhalen (Bram, eyes closed, a
 *    slow breath going out);
 *  - "Praat er op tijd over": het gesprek (a table with two mugs and two bubbles; not "praten",
 *    w.praten, two people talking, nor the job interview, w.sollicitatiegesprek);
 *  - "Bereikbaar zijn": opnemen (a finger on the green button, the twin of "ophangen"), de gemiste
 *    oproep (a red handset on the screen and the bent arrow of a missed call), de voicemail (its
 *    tape sign on the screen), het beltegoed (coins going into a phone), het bereik (four bars).
 * They stay apart from the drawn phones of "Bellen en appen" (w.bellen, w.terugbellen,
 * w.inspreken, w.bericht) and of "Slimme apps" (w.ophangen, w.nummer).
 */

const SCREEN = '#e3f5ff';

/** A smartphone seen from the front; the screen is x+4..x+w-4, y+7..y+h-7. */
function Phone({ x, y, w = 44, h = 80, screen = SCREEN, children }: {
  x: number; y: number; w?: number; h?: number; screen?: string; children?: ReactNode;
}) {
  return (
    <g>
      <rect x={x + 2.5} y={y + 3} width={w} height={h} rx="8" fill={PAL.slateDark} />
      <rect x={x} y={y} width={w} height={h} rx="8" fill={PAL.slate} />
      <rect x={x + 4} y={y + 7} width={w - 8} height={h - 14} rx="4" fill={screen} />
      <rect x={x + w / 2 - 5} y={y + 2.4} width="10" height="2.4" rx="1.2" fill={PAL.slateDark} />
      {children}
    </g>
  );
}

/** A phone handset (as on the call buttons), centred on (x, y), turned `rotate` degrees. */
function Handset({ x, y, k = 1, rotate = 0, color = PAL.white }: { x: number; y: number; k?: number; rotate?: number; color?: string }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${k})`} fill={color}>
      <path d="M-17 2Q0 -16 17 2" fill="none" stroke={color} strokeWidth="9" strokeLinecap="round" />
      <rect x="-27" y="-1" width="17" height="11" rx="4.5" transform="rotate(22 -18 4)" />
      <rect x="10" y="-1" width="17" height="11" rx="4.5" transform="rotate(-22 18 4)" />
    </g>
  );
}

/** A coin lying flat, its top face centred on (cx, cy). */
function Coin({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g>
      <path d={`M${cx - 16} ${cy}V${cy + 6}A16 6 0 0 0 ${cx + 16} ${cy + 6}V${cy}Z`} fill={PAL.yellowShade} />
      <ellipse cx={cx} cy={cy} rx="16" ry="6" fill={PAL.yellow} />
      <ellipse cx={cx} cy={cy} rx="10" ry="3.4" fill="none" stroke={PAL.yellowShade} strokeWidth="1.8" />
    </g>
  );
}

export default {
  // "stilstaan": to stand still — the belt with two boxes on it, no motion lines, and above it a
  // big round pause sign (two bars): the line has stopped.
  'w.stilstaan': () => (
    <g>
      <Ground cx={60} cy={106} rx={50} ry={4} />
      <path d="M22 92V104M98 92V104" stroke={PAL.steel} strokeWidth="5" strokeLinecap="round" />
      <rect x="8" y="78" width="104" height="15" rx="7.5" fill={PAL.slateDark} />
      <rect x="12" y="78" width="96" height="5" rx="2.5" fill={PAL.slate} />
      {[16, 104].map((x) => (
        <g key={x}>
          <circle cx={x} cy="85.5" r="5.4" fill={PAL.mist} />
          <circle cx={x} cy="85.5" r="2" fill={PAL.steel} />
        </g>
      ))}
      <Box x={18} y={57} w={26} h={21} depth={8} />
      <Box x={70} y={57} w={26} h={21} depth={8} />
      <circle cx="60" cy="31" r="21" fill={PAL.skyShade} />
      <circle cx="60" cy="28" r="21" fill={PAL.sky} />
      <rect x="50" y="17" width="7" height="22" rx="2.5" fill={PAL.white} />
      <rect x="63" y="17" width="7" height="22" rx="2.5" fill={PAL.white} />
      <Shine d="M45 20Q48 12 56 10" width={3.2} opacity={0.5} />
    </g>
  ),

  // "het lampje": the (warning) light — a red signal light on its dark foot, lit: light rays
  // come off its dome.
  'w.lampje': () => (
    <g>
      <Ground cx={60} cy={104} rx={32} ry={4} />
      <rect x="32" y="84" width="56" height="18" rx="4" fill={PAL.slateDark} />
      <rect x="32" y="82" width="56" height="16" rx="4" fill={PAL.slate} />
      <Shade color={PAL.redShade} opacity={1} at={[86, 62, 12, 30]}>
        <path d="M40 82V60Q40 38 60 38Q80 38 80 60V82Z" fill={PAL.red} />
      </Shade>
      <ellipse cx="58" cy="60" rx="8" ry="14" fill={PAL.redLight} opacity=".85" />
      <path d="M38 82H82" stroke={PAL.slateDark} strokeWidth="3" strokeLinecap="round" />
      <Motion x={60} y={56} dir={-90} spread={150} n={5} len={9} gap={30} color={PAL.red} width={4.2} />
      <Shine d="M46 58Q46 48 52 44" width={3.4} opacity={0.7} />
    </g>
  ),

  // "komen": to come — Jada waves someone over with her open hand; a big arrow comes to her
  // from the other side.
  'w.komen': () => (
    <g>
      <Bust who="jada" x={80} y={120} scale={0.66} expr="pleased" />
      <Hand pose="open" x={44} y={80} rotate={-24} scale={0.62} skin={SKIN.jada} sleeve={[PAL.sky, PAL.skyShade]} mirror />
      <Motion x={36} y={42} dir={-150} spread={50} n={3} len={6} gap={6} color={PAL.sky} width={3.4} />
      <Arrow from={[8, 98]} to={[46, 98]} color={PAL.green} width={8} head={13} />
    </g>
  ),

  // "aankijken": to look at someone — two eyes that look straight at you (not to the side, as in
  // "kijken"), under the bubble of the one who talks.
  'w.aankijken': () => (
    <g>
      <Bubble x={34} y={8} w={52} h={26} tail="none">
        <Dots cx={60} cy={21} gap={11} r={3.6} color={PAL.sky} />
      </Bubble>
      {[36, 84].map((cx) => (
        <g key={cx}>
          <ellipse cx={cx} cy={78} rx="20" ry="25" fill={PAL.mist} />
          <Shade color={PAL.paperShade} opacity={1} at={[cx + 22, 78, 10, 28]}>
            <ellipse cx={cx} cy={75} rx="20" ry="25" fill={PAL.white} />
          </Shade>
          <circle cx={cx} cy={74} r="11" fill={PAL.brown} />
          <circle cx={cx} cy={74} r="6.4" fill={PAL.ink} />
          <circle cx={cx - 3.6} cy={70} r="2.8" fill={PAL.white} />
        </g>
      ))}
      <path d="M48 44L54 52M72 44L66 52" stroke={PAL.sky} strokeWidth="3.4" strokeLinecap="round" />
    </g>
  ),

  // "nadenken": to think about something — Jada thinks; a thought cloud
  // (three rising circles, then a cloud with dots) above her.
  'w.nadenken': () => (
    <g>
      <Bust who="jada" x={44} y={122} scale={0.7} expr="thinking" />
      <circle cx="74" cy="50" r="3.4" fill={PAL.ice} />
      <circle cx="81" cy="40" r="4.8" fill={PAL.ice} />
      <g fill="#e3f5ff">
        <circle cx="78" cy="22" r="11" />
        <circle cx="94" cy="18" r="13" />
        <circle cx="106" cy="26" r="9" />
        <rect x="74" y="20" width="36" height="14" rx="7" />
      </g>
      <Dots cx={92} cy={25} gap={8} r={2.8} color={PAL.sky} />
    </g>
  ),

  // "ademhalen": to breathe — Bram with his eyes calmly closed; a long, slow breath goes out
  // in a soft curve.
  'w.ademhalen': () => (
    <g>
      <Bust who="bram" x={44} y={122} scale={0.72} emotion="rest" />
      <path d="M72 70Q84 62 92 70T110 68" fill="none" stroke={PAL.ice} strokeWidth="5" strokeLinecap="round" />
      <path d="M74 80Q86 74 94 82T108 82" fill="none" stroke={PAL.sky} strokeWidth="4" strokeLinecap="round" opacity=".7" />
      <path d="M72 58Q82 52 90 58" fill="none" stroke={PAL.ice} strokeWidth="3.4" strokeLinecap="round" opacity=".8" />
    </g>
  ),

  // "het gesprek": the talk — a table with two mugs facing each other and a bubble above each:
  // sitting down to talk it over (not "praten", two people talking, nor the job interview).
  'w.gesprek': () => (
    <g>
      <Ground cx={60} cy={106} rx={44} ry={4} />
      <path d="M26 86V104M94 86V104" stroke={PAL.cardDark} strokeWidth="6" strokeLinecap="round" />
      <rect x="10" y="80" width="100" height="10" rx="4" fill={PAL.cardShade} />
      <rect x="10" y="77" width="100" height="8" rx="4" fill={PAL.card} />
      {[[24, PAL.blue, PAL.blueShade], [70, PAL.orange, PAL.orangeShade]].map(([x, c, sh]) => (
        <g key={x as number}>
          <path d={`M${(x as number) + 22} 62Q${(x as number) + 32} 62 ${(x as number) + 30} 70Q${(x as number) + 28} 76 ${(x as number) + 20} 74`} fill="none" stroke={sh as string} strokeWidth="4" strokeLinecap="round" />
          <Shade color={sh as string} opacity={1} at={[(x as number) + 26, 68, 6, 14]}>
            <path d={`M${x} 56H${(x as number) + 24}V72Q${(x as number) + 24} 77 ${(x as number) + 19} 77H${(x as number) + 5}Q${x} 77 ${x} 72Z`} fill={c as string} />
          </Shade>
          <ellipse cx={(x as number) + 12} cy={56} rx={12} ry={3} fill={PAL.brown} />
        </g>
      ))}
      <Bubble x={8} y={10} w={44} h={26} tail="left">
        <Dots cx={30} cy={23} gap={10} r={3.4} color={PAL.skyShade} />
      </Bubble>
      <Bubble x={68} y={18} w={44} h={26} tail="right" fill="#fff3d6" depth={PAL.yellowLight}>
        <Dots cx={90} cy={31} gap={10} r={3.4} color={PAL.yellowShade} />
      </Bubble>
    </g>
  ),

  // "opnemen": to pick up the phone — a finger presses the big green button with its handset
  // (the twin of "ophangen", whose button is red); the phone still rings.
  'w.opnemen': () => (
    <g>
      <circle cx="54" cy="52" r="36" fill={PAL.okShade} />
      <circle cx="54" cy="48" r="36" fill={PAL.ok} />
      <Handset x={54} y={50} k={1.05} rotate={-30} />
      <Shine d="M26 36Q32 22 46 17" opacity={0.45} />
      <Motion x={54} y={48} dir={-150} spread={40} n={3} len={7} gap={42} color={PAL.sky} width={3.6} />
      <Motion x={54} y={48} dir={-30} spread={40} n={3} len={7} gap={42} color={PAL.sky} width={3.6} />
      <Hand pose="point" x={96} y={116} rotate={-28} scale={0.8} skin={SKIN.amina} sleeve={[PAL.green, PAL.greenShade]} />
    </g>
  ),

  // "de gemiste oproep": the missed call — a phone whose screen shows a red handset and the
  // bent arrow of a call that came in and went away; a red dot at the top.
  'w.gemisteoproep': () => (
    <g>
      <Phone x={32} y={12} w={54} h={94}>
        <circle cx="59" cy="44" r="15" fill={PAL.redLight} />
        <Handset x={59} y={44} k={0.5} color={PAL.redShade} />
        <path d="M44 66L56 80L76 62" fill="none" stroke={PAL.red} strokeWidth="5.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M66 61H77V72" fill="none" stroke={PAL.red} strokeWidth="5.4" strokeLinecap="round" strokeLinejoin="round" />
      </Phone>
      <circle cx="86" cy="15" r="9" fill={PAL.white} />
      <circle cx="86" cy="15" r="7" fill={PAL.red} />
    </g>
  ),

  // "de voicemail": the voicemail — a phone whose screen shows the voicemail sign (two rings
  // joined at the bottom) and a play bar under it.
  'w.voicemail': () => (
    <g>
      <Phone x={32} y={12} w={54} h={94}>
        <circle cx="49" cy="50" r="8.4" fill="none" stroke={PAL.sky} strokeWidth="5" />
        <circle cx="69" cy="50" r="8.4" fill="none" stroke={PAL.sky} strokeWidth="5" />
        <path d="M49 58.4H69" stroke={PAL.sky} strokeWidth="5" strokeLinecap="round" />
        <path d="M54 76L62 81L54 86Z" fill={PAL.slate} stroke={PAL.slate} strokeWidth="2" strokeLinejoin="round" />
        <rect x="66" y="79.5" width="12" height="3" rx="1.5" fill={PAL.line} />
      </Phone>
      <circle cx="86" cy="15" r="9" fill={PAL.white} />
      <circle cx="86" cy="15" r="7" fill={PAL.red} />
    </g>
  ),

  // "het beltegoed": the phone credit — a stack of coins beside a phone, and a green arrow from
  // the coins into the phone.
  'w.beltegoed': () => (
    <g>
      <Ground cx={86} cy={104} rx={22} ry={4} />
      <Phone x={14} y={14} w={46} h={86}>
        <rect x="24" y="40" width="26" height="8" rx="4" fill={PAL.ok} />
        <rect x="24" y="54" width="18" height="6" rx="3" fill={PAL.mist} />
      </Phone>
      <Coin cx={88} cy={92} />
      <Coin cx={88} cy={82} />
      <Coin cx={88} cy={72} />
      <CurveArrow from={[90, 58]} to={[64, 34]} bend={12} color={PAL.green} width={6} head={11} />
      <Sparkle x={104} y={56} r={6} />
    </g>
  ),

  // "het bereik": the signal — four green bars, from low to high, as on a phone's screen.
  'w.bereik': () => (
    <g>
      <Ground cx={60} cy={104} rx={46} ry={4} />
      {[0, 1, 2, 3].map((i) => {
        const x = 18 + i * 22;
        const h = 22 + i * 22;
        return (
          <Shade key={i} color={PAL.okShade} opacity={1} at={[x + 18, 101 - h / 2, 6, h]}>
            <rect x={x} y={102 - h} width="17" height={h} rx="4" fill={PAL.ok} />
          </Shade>
        );
      })}
      <Shine d="M22 96V84" width={3} opacity={0.5} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
