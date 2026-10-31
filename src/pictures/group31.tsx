import type { JSX } from 'react';
import { Bubble, Bust, Dots, Ground, Hand, Motion, PAL, SKIN, Shade, Shine } from './kit';

/**
 * Word pictures, group 31 (keyed by id): drawings for emoji in the tips, the rules and the
 * screens that still had only an emoji (batch 2, src/content/emojiArt/batch2.ts). Each is one
 * object that carries the meaning on every place the emoji is used:
 *  - the compass (finding your way: the first day, work and integration, your career);
 *  - the sticking plaster (an accident, being sick);
 *  - the fishing hook caught in the button on a phone (phishing: do not click);
 *  - the padlock (privacy); banknotes flying out of a hand (you pay, money gone);
 *  - the pram (a baby, leave); the light bulb (switch it off); the umbrella over a red cross
 *    (health insurance); the suitcase (your job ends, you move on); the mask on a stick (fake
 *    voices and videos); the factory (your sector); the bar chart (the facts);
 *  - one speech bubble (say it like this); the service counter with a window (het loket); the
 *    barrier at the border (de grens).
 * See docs/tekenstijl.md and ./kit.tsx.
 */

/** A banknote, centred on (cx, cy), turned `rot` degrees. */
function Note({ cx, cy, rot = 0 }: { cx: number; cy: number; rot?: number }) {
  return (
    <g transform={`rotate(${rot} ${cx} ${cy})`}>
      <rect x={cx - 21} y={cy - 9} width="42" height="22" rx="3" fill={PAL.greenShade} />
      <rect x={cx - 21} y={cy - 12} width="42" height="22" rx="3" fill={PAL.green} />
      <rect x={cx - 16} y={cy - 8} width="32" height="14" rx="2" fill={PAL.greenShade} opacity=".55" />
      <circle cx={cx} cy={cy - 1} r="5" fill={PAL.lime} />
    </g>
  );
}

export default {
  // "het kompas": the compass — a round compass, the red needle points the way
  'e.kompas': () => (
    <g>
      <circle cx="60" cy="16" r="6" fill="none" stroke={PAL.navy} strokeWidth="4" />
      <circle cx="60" cy="66" r="42" fill={PAL.navyShade} />
      <Shade color={PAL.navyShade} opacity={1} at={[100, 70, 16, 50]}>
        <circle cx="60" cy="62" r="42" fill={PAL.navy} />
      </Shade>
      <circle cx="60" cy="62" r="33" fill={PAL.paper} />
      <path d="M60 33V40M60 84V91M31 62H38M82 62H89" stroke={PAL.line} strokeWidth="3" strokeLinecap="round" />
      <g transform="rotate(35 60 62)">
        <polygon points="60 34 68 62 52 62" fill={PAL.red} stroke={PAL.red} strokeWidth="2" strokeLinejoin="round" />
        <polygon points="60 90 68 62 52 62" fill={PAL.steel} stroke={PAL.steel} strokeWidth="2" strokeLinejoin="round" />
      </g>
      <circle cx="60" cy="62" r="5" fill={PAL.ink} />
      <Shine d="M26 50Q30 34 44 26" opacity={0.45} width={4} />
    </g>
  ),

  // "de pleister": the sticking plaster — a plaster on the slant, a white pad in the middle
  'e.pleister': () => (
    <g>
      <g transform="rotate(-35 60 60)">
        <rect x="12" y="46" width="96" height="34" rx="17" fill={PAL.cardShade} />
        <Shade color={PAL.cardShade} opacity={0.9} at={[60, 76, 60, 8]}>
          <rect x="12" y="42" width="96" height="34" rx="17" fill="#f0c48a" />
        </Shade>
        <rect x="44" y="46" width="32" height="26" rx="4" fill={PAL.paperShade} />
        <rect x="44" y="46" width="32" height="22" rx="4" fill={PAL.paper} />
        <g fill={PAL.cardShade}>
          <circle cx="24" cy="54" r="2" /><circle cx="32" cy="54" r="2" /><circle cx="24" cy="64" r="2" /><circle cx="32" cy="64" r="2" />
          <circle cx="88" cy="54" r="2" /><circle cx="96" cy="54" r="2" /><circle cx="88" cy="64" r="2" /><circle cx="96" cy="64" r="2" />
        </g>
        <Shine d="M22 47H40" opacity={0.6} width={3} />
      </g>
    </g>
  ),

  // "de hengel": phishing — a fishing hook comes down and catches the button on a phone
  'e.hengel': () => (
    <g>
      <Shade color={PAL.slateDark} opacity={1} at={[76, 60, 8, 60]}>
        <rect x="18" y="12" width="58" height="98" rx="10" fill={PAL.slate} />
      </Shade>
      <rect x="23" y="20" width="48" height="82" rx="5" fill={PAL.paper} />
      <rect x="28" y="28" width="38" height="24" rx="5" fill={PAL.mist} />
      <path d="M33 36H60M33 44H52" stroke={PAL.line} strokeWidth="2.4" strokeLinecap="round" />
      <rect x="28" y="66" width="38" height="17" rx="8.5" fill={PAL.orange} />
      <path d="M96 10V60" stroke={PAL.line} strokeWidth="2" strokeLinecap="round" />
      <path d="M96 58V78Q96 92 82 92Q68 92 66 78" fill="none" stroke={PAL.steel} strokeWidth="5" strokeLinecap="round" />
      <path d="M66 78L60 82M66 78L71 83" stroke={PAL.steel} strokeWidth="4" strokeLinecap="round" />
      <rect x="92" y="54" width="8" height="8" rx="2" fill={PAL.red} />
      <Shine d="M24 30Q24 20 32 16" opacity={0.35} width={3} />
    </g>
  ),

  // "het hangslot": the padlock — closed, a keyhole in front (privacy: it stays shut)
  'e.hangslot': () => (
    <g>
      <path d="M40 58V40Q40 18 60 18Q80 18 80 40V58" fill="none" stroke={PAL.steel} strokeWidth="10" strokeLinecap="round" />
      <path d="M40 40Q40 24 52 20" fill="none" stroke={PAL.mist} strokeWidth="3" strokeLinecap="round" />
      <rect x="26" y="56" width="68" height="52" rx="9" fill={PAL.yellowShade} />
      <Shade color={PAL.yellowShade} opacity={1} at={[96, 80, 14, 40]}>
        <rect x="26" y="52" width="68" height="52" rx="9" fill={PAL.yellow} />
      </Shade>
      <circle cx="60" cy="73" r="7" fill={PAL.ink} />
      <rect x="56.5" y="75" width="7" height="16" rx="2.5" fill={PAL.ink} />
      <Shine d="M33 62H48" color={PAL.yellowShine} opacity={0.8} width={4} />
    </g>
  ),

  // "geld kwijt": money that goes — two banknotes fly up out of an open hand
  'e.geldweg': () => (
    <g>
      <Hand pose="open" x={38} y={112} rotate={18} scale={0.85} skin={SKIN.amina} sleeve={[PAL.purple, PAL.purpleShade]} />
      <Note cx={62} cy={58} rot={14} />
      <Note cx={84} cy={30} rot={-18} />
      <Motion x={60} y={60} dir={140} spread={40} n={2} len={8} gap={26} color={PAL.line} width={3} />
    </g>
  ),

  // "de kinderwagen": the pram — a purple pram with its hood up, two wheels and a handle
  'e.kinderwagen': () => (
    <g>
      <Ground cy={106} rx={42} />
      <path d="M46 84L38 96M74 84L84 96" stroke={PAL.slate} strokeWidth="4" strokeLinecap="round" />
      <path d="M92 58L102 34H108" fill="none" stroke={PAL.slate} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <Shade color={PAL.purpleShade} opacity={1} at={[98, 76, 18, 20]}>
        <path d="M18 56H96Q96 88 66 88H50Q18 88 18 56Z" fill={PAL.purple} />
      </Shade>
      <path d="M18 58Q18 22 56 20V58Z" fill={PAL.purpleShade} />
      <path d="M26 54Q26 30 50 26" fill="none" stroke={PAL.purpleLight} strokeWidth="3" strokeLinecap="round" opacity=".8" />
      <circle cx="38" cy="96" r="10" fill={PAL.slate} />
      <circle cx="84" cy="96" r="10" fill={PAL.slate} />
      <circle cx="38" cy="96" r="4" fill={PAL.mist} />
      <circle cx="84" cy="96" r="4" fill={PAL.mist} />
      <Shine d="M30 66Q34 74 44 78" opacity={0.4} width={3} />
    </g>
  ),

  // "de lamp": the light bulb — a yellow bulb that is on, light rays round it
  'e.lamp': () => (
    <g>
      <Motion x={60} y={50} dir={-90} spread={180} n={5} len={7} gap={35} color={PAL.yellowShade} width={4} />
      <Shade color={PAL.yellowShade} opacity={1} at={[104, 54, 30, 50]}>
        <path d="M60 22A28 28 0 0 1 78 71.4Q74 78 74 86H46Q46 78 42 71.4A28 28 0 0 1 60 22Z" fill={PAL.yellow} />
      </Shade>
      <path d="M54 82V64Q54 56 60 56Q66 56 66 64V82" fill="none" stroke={PAL.orangeShade} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="45" y="85" width="30" height="8" rx="2.5" fill={PAL.steel} />
      <rect x="47" y="92" width="26" height="7" rx="2.5" fill={PAL.mist} />
      <rect x="53" y="98" width="14" height="8" rx="3.5" fill={PAL.slate} />
      <Shine d="M42 46Q44 34 54 29" color={PAL.yellowShine} opacity={0.85} width={4} />
    </g>
  ),

  // "de zorgverzekering": health insurance — an umbrella held over a red cross: you are covered
  'e.zorgverzekering': () => (
    <g>
      <rect x="57.5" y="10" width="5" height="10" rx="2.5" fill={PAL.slate} />
      <path d="M60 54V96Q60 104 52 104Q46 104 46 98" fill="none" stroke={PAL.slate} strokeWidth="4.5" strokeLinecap="round" />
      <Shade color={PAL.blueShade} opacity={1} at={[100, 40, 16, 30]}>
        <path d="M12 54Q12 18 60 18Q108 18 108 54Q96 46 84 54Q72 46 60 54Q48 46 36 54Q24 46 12 54Z" fill={PAL.blue} />
      </Shade>
      <path d="M60 20Q48 32 36 52M60 20Q72 32 84 52" fill="none" stroke={PAL.blueShade} strokeWidth="1.8" strokeLinecap="round" />
      <Shine d="M20 44Q24 30 40 24" opacity={0.5} width={4} />
      <rect x="42" y="66" width="36" height="32" rx="7" fill={PAL.paperShade} />
      <rect x="42" y="63" width="36" height="31" rx="7" fill={PAL.paper} />
      <path d="M60 70V87M51.5 78.5H68.5" stroke={PAL.red} strokeWidth="7" strokeLinecap="round" />
    </g>
  ),

  // "de koffer": the suitcase — a suitcase on wheels, with a handle and two straps
  'e.koffer': () => (
    <g>
      <Ground cy={106} rx={38} />
      <path d="M46 40V28Q46 22 52 22H68Q74 22 74 28V40" fill="none" stroke={PAL.slate} strokeWidth="6" strokeLinecap="round" />
      <circle cx="40" cy="102" r="5" fill={PAL.slate} />
      <circle cx="80" cy="102" r="5" fill={PAL.slate} />
      <Shade color={PAL.clayShade} opacity={1} at={[98, 70, 14, 40]}>
        <rect x="22" y="38" width="76" height="62" rx="9" fill={PAL.clay} />
      </Shade>
      <rect x="36" y="38" width="7" height="62" fill={PAL.cardDark} />
      <rect x="77" y="38" width="7" height="62" fill={PAL.cardDark} />
      <Shine d="M28 48V64" opacity={0.5} width={4} />
    </g>
  ),

  // "het masker": the mask — a blank mask on a stick, held up by a hand: a fake face
  'e.masker': () => (
    <g>
      <rect x="57.5" y="70" width="5" height="40" rx="2" fill={PAL.wood} />
      <path d="M26 18Q60 8 94 18Q96 58 60 84Q24 58 26 18Z" fill={PAL.mist} transform="translate(0 4)" />
      <Shade color={PAL.paperShade} opacity={1} at={[94, 46, 16, 40]}>
        <path d="M26 18Q60 8 94 18Q96 58 60 84Q24 58 26 18Z" fill={PAL.paper} />
      </Shade>
      <ellipse cx="44" cy="38" rx="8" ry="4.5" fill={PAL.slateDark} />
      <ellipse cx="76" cy="38" rx="8" ry="4.5" fill={PAL.slateDark} />
      <path d="M50 62Q60 66 70 62" fill="none" stroke={PAL.line} strokeWidth="3" strokeLinecap="round" />
      <Shine d="M32 24Q32 40 36 50" opacity={0.7} width={3.5} color={PAL.white} />
      <Hand pose="hold" x={58} y={124} scale={0.62} skin={SKIN.jada} sleeve={[PAL.green, PAL.greenShade]} />
    </g>
  ),

  // "de fabriek": the factory — a long hall with a saw-tooth roof, windows and a smoking chimney
  'e.fabriek': () => (
    <g>
      <Ground cy={106} rx={50} />
      <rect x="80" y="26" width="13" height="40" rx="2" fill={PAL.steel} />
      <circle cx="90" cy="18" r="6" fill={PAL.mist} />
      <circle cx="101" cy="14" r="4.5" fill={PAL.mist} />
      <path d="M12 62V40L40 56V40L68 56V40L96 56V62Z" fill={PAL.slate} stroke={PAL.slate} strokeWidth="2" strokeLinejoin="round" />
      <Shade color={PAL.clayShade} opacity={1} at={[110, 84, 14, 30]}>
        <rect x="12" y="58" width="96" height="46" rx="2" fill={PAL.clay} />
      </Shade>
      <g fill={PAL.ice}>
        <rect x="20" y="68" width="14" height="12" rx="2" />
        <rect x="42" y="68" width="14" height="12" rx="2" />
        <rect x="86" y="68" width="14" height="12" rx="2" />
      </g>
      <rect x="64" y="76" width="16" height="28" rx="2" fill={PAL.slate} />
      <Shine d="M18 62H34" opacity={0.5} width={3} />
    </g>
  ),

  // "de staafgrafiek": the bar chart — four bars that go up, on two axes (the facts in numbers)
  'e.staafgrafiek': () => (
    <g>
      {([[22, 72, PAL.blue, PAL.blueShade], [44, 58, PAL.green, PAL.greenShade], [66, 42, PAL.yellow, PAL.yellowShade], [88, 22, PAL.orange, PAL.orangeShade]] as const).map(([x, top, c, s]) => (
        <g key={x}>
          <rect x={x} y={top} width="16" height={100 - top} rx="2.5" fill={c} />
          <rect x={x + 10} y={top} width="6" height={100 - top} rx="2.5" fill={s} />
        </g>
      ))}
      <path d="M14 14V102H108" fill="none" stroke={PAL.steel} strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  ),

  // "de tekstballon": one speech bubble with talking dots (say it like this)
  'e.tekstballon': () => (
    <g>
      <Bubble x={14} y={22} w={92} h={60} tail="left" fill={PAL.sky} depth={PAL.skyShade}>
        <Dots cx={60} cy={52} r={6.5} gap={20} color={PAL.white} />
      </Bubble>
      <Shine d="M24 40Q26 30 36 28" opacity={0.5} width={4} />
    </g>
  ),

  // "het loket": the service counter — Amina behind a glass window, a counter shelf in front
  'e.loket': () => (
    <g>
      <rect x="10" y="14" width="100" height="92" rx="5" fill={PAL.mist} />
      <rect x="22" y="24" width="76" height="56" rx="3" fill={PAL.ice} />
      <Bust who="amina" x={60} y={82} scale={0.43} expr="pleased" />
      <path d="M30 30L42 30L30 46Z" fill={PAL.white} opacity=".45" />
      <rect x="22" y="24" width="76" height="56" rx="3" fill="none" stroke={PAL.steel} strokeWidth="4" />
      <rect x="44" y="75" width="32" height="5" rx="2" fill={PAL.slateDark} />
      <rect x="16" y="84" width="88" height="6" rx="2" fill={PAL.cardDark} />
      <rect x="16" y="80" width="88" height="7" rx="2" fill={PAL.wood} />
    </g>
  ),

  // "de grens": the border — the barrier across the road, red and white, down: stop here
  'e.grens': () => (
    <g>
      <Ground cy={106} rx={48} />
      <rect x="98" y="56" width="6" height="48" rx="2" fill={PAL.steel} />
      <rect x="16" y="40" width="18" height="64" rx="3" fill={PAL.navy} />
      <rect x="28" y="40" width="6" height="64" rx="2" fill={PAL.navyShade} />
      <rect x="20" y="50" width="88" height="14" rx="7" fill={PAL.paperShade} />
      <rect x="20" y="46" width="88" height="14" rx="7" fill={PAL.red} />
      <g fill={PAL.paper}>
        <rect x="44" y="46" width="12" height="14" />
        <rect x="68" y="46" width="12" height="14" />
        <rect x="92" y="46" width="10" height="14" />
      </g>
      <circle cx="25" cy="53" r="5" fill={PAL.slateDark} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
