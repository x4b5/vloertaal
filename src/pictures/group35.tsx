import type { JSX } from 'react';
import { Arrow, Ground, Motion, Move, PAL, SKIN, Shade, Shine } from './kit';

/**
 * Word pictures, group 35 (keyed by word id). See docs/tekenstijl.md and ./kit.tsx.
 *
 * Two new lessons (the owner's plan, phase 2, 4 November 2026):
 *  - "Getallen" (l.counting): each number as a yellow label with its digits, as on a rack, a box
 *    or a location in a warehouse. A number cannot be shown without its digits, so these are
 *    drawn on purpose (as 🔢 e.cijfers in group30 is): at work the learner sees "47" and hears
 *    "zevenenveertig". The six labels look the same apart from the digits, so a picture choice
 *    (13 or 30?) is decided by the number alone.
 *  - "Brandalarm en ontruimen" (l.alarm): the alarm bell, the escape route, the stairs, the
 *    assembly point and the fire extinguisher ("ontruimen" has no still picture: since 5 November
 *    2026 a moving one on its intro card only, `picture: 'motion'`).
 */

/** A small walking person in work clothes, feet at (x, y), about 40 tall. */
function Walker({ x, y, skin, coat, coatShade }: { x: number; y: number; skin: [string, string]; coat: string; coatShade: string }) {
  return (
    <g>
      <path d={`M${x - 2} ${y - 12}L${x - 7} ${y - 1}M${x + 2} ${y - 12}L${x + 7} ${y - 1}`} stroke={PAL.navy} strokeWidth="5.4" strokeLinecap="round" />
      <path d={`M${x - 4} ${y - 30}L${x - 9} ${y - 18}`} stroke={coatShade} strokeWidth="4.6" strokeLinecap="round" />
      <Shade color={coatShade} opacity={1} at={[x + 8, y - 20, 4, 12]}>
        <rect x={x - 7} y={y - 32} width="14" height="22" rx="6" fill={coat} />
      </Shade>
      <path d={`M${x + 4} ${y - 30}L${x + 10} ${y - 19}`} stroke={coat} strokeWidth="4.6" strokeLinecap="round" />
      <circle cx={x} cy={y - 39} r="6.5" fill={skin[0]} />
      <circle cx={x + 2.4} cy={y - 38} r="4" fill={skin[1]} opacity=".45" />
    </g>
  );
}

/** The strokes of a digit, centred on (0, 0): about 18 wide and 26 tall (as in e.cijfers). */
const DIGIT: Readonly<Record<string, string>> = {
  '0': 'M0 -13Q9 -13 9 0Q9 13 0 13Q-9 13 -9 0Q-9 -13 0 -13Z',
  '1': 'M-5 -8L2 -13V13',
  '3': 'M-8 -13H7L-1 -2Q9 -2 9 5Q9 13 0 13Q-6 13 -9 9',
  '4': 'M4 13V-13L-9 5H10',
  '7': 'M-9 -13H9L-2 13',
};

/** A yellow label with a number in big dark digits (two digits). */
function NumberLabel({ digits }: { digits: string }) {
  const gap = 34;
  const x0 = 60 - ((digits.length - 1) * gap) / 2;
  return (
    <g>
      <rect x="12" y="34" width="96" height="62" rx="10" fill={PAL.yellowShade} />
      <Shade color={PAL.yellowShade} opacity={0.75} at={[114, 62, 16, 40]}>
        <rect x="12" y="30" width="96" height="62" rx="10" fill={PAL.yellow} />
      </Shade>
      {[...digits].map((d, i) => (
        <path
          key={i}
          d={DIGIT[d]}
          transform={`translate(${x0 + i * gap} 61) scale(1.55)`}
          fill="none"
          stroke={PAL.ink}
          strokeWidth="5.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
      <Shine d="M20 46Q20 38 28 38" color={PAL.yellowShine} width={4} opacity={0.9} />
    </g>
  );
}

/** One person on a sign, seen from the front: a head and round shoulders, in white. */
function Figure({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} fill={PAL.white}>
      <circle cx="0" cy="-15" r="5.5" />
      <path d="M-8 12V-1Q-8 -7 0 -7Q8 -7 8 -1V12Z" />
    </g>
  );
}

export default {
  // "dertien" … "vierenzeventig": the numbers of l.counting, each on its own label.
  'w.dertien': () => <NumberLabel digits="13" />,
  'w.dertig': () => <NumberLabel digits="30" />,
  'w.zeventien': () => <NumberLabel digits="17" />,
  'w.zeventig': () => <NumberLabel digits="70" />,
  'w.zevenenveertig': () => <NumberLabel digits="47" />,
  'w.vierenzeventig': () => <NumberLabel digits="74" />,

  // "het alarm": the fire alarm — a red alarm bell on its bracket, ringing (curved lines on both
  // sides). Red and on a wall, so it is not the blue bike bell of "de bel".
  'w.alarm': () => (
    <g>
      <rect x="54" y="14" width="12" height="24" rx="3" fill={PAL.slate} />
      <rect x="44" y="12" width="32" height="8" rx="4" fill={PAL.steel} />
      <circle cx="60" cy="92" r="7" fill={PAL.slate} />
      <Shade color={PAL.redShade} opacity={1} at={[90, 62, 14, 34]}>
        <path d="M30 82Q30 34 60 34Q90 34 90 82Z" fill={PAL.red} />
      </Shade>
      <rect x="24" y="78" width="72" height="10" rx="5" fill={PAL.redShade} />
      <Shine d="M38 70Q38 50 52 42" width={4.5} opacity={0.65} />
      <path d="M22 48Q14 60 22 72M14 40Q4 60 14 80M98 48Q106 60 98 72M106 40Q116 60 106 80" fill="none" stroke={PAL.red} strokeWidth="4.2" strokeLinecap="round" />
    </g>
  ),

  // "de vluchtroute": the escape route — a green route on the floor with white arrows on it,
  // turning towards an open exit door. (The emergency exit itself is the green sign of group3.)
  'w.vluchtroute': () => (
    <g>
      <path d="M26 106V62Q26 42 46 42H84" fill="none" stroke={PAL.greenShade} strokeWidth="22" strokeLinecap="round" strokeLinejoin="round" transform="translate(2 3)" />
      <path d="M26 106V62Q26 42 46 42H84" fill="none" stroke={PAL.green} strokeWidth="22" strokeLinecap="round" strokeLinejoin="round" />
      <g fill="none" stroke={PAL.white} strokeWidth="4.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 96L26 89L33 96" />
        <path d="M19 76L26 69L33 76" />
        <path d="M52 35L59 42L52 49" />
        <path d="M70 35L77 42L70 49" />
      </g>
      <rect x="88" y="16" width="22" height="50" rx="3" fill={PAL.mist} />
      <rect x="93" y="22" width="12" height="44" rx="1.5" fill={PAL.greenShade} />
      <Ground cx={99} cy={67} rx={12} ry={2.5} />
    </g>
  ),

  // "de trap": the stairs — grey steps going up to the right, yellow edges, a handrail.
  'w.trap': () => (
    <g>
      <Ground cx={60} cy={106} rx={48} ry={4} />
      <path d="M22 67V92M92 15V36" stroke={PAL.steel} strokeWidth="3.6" strokeLinecap="round" />
      <path d="M18 70L96 12" stroke={PAL.steel} strokeWidth="5" strokeLinecap="round" />
      <Shade color={PAL.steel} opacity={0.5} at={[114, 72, 20, 60]}>
        <path d="M12 106V92H31V78H50V64H69V50H88V36H108V106Z" fill={PAL.mist} />
      </Shade>
      <path d="M12 92H31M31 78H50M50 64H69M69 50H88M88 36H108" stroke={PAL.yellow} strokeWidth="4.5" strokeLinecap="round" />
    </g>
  ),

  // "de verzamelplaats": the assembly point — the green sign on its post: people standing
  // together in the middle, white arrows from the corners pointing at them.
  'w.verzamelplaats': () => (
    <g>
      <Ground cx={60} cy={106} rx={20} ry={3.5} />
      <rect x="56" y="76" width="8" height="30" rx="2" fill={PAL.steel} />
      <rect x="16" y="18" width="88" height="62" rx="8" fill={PAL.greenShade} />
      <Shade color={PAL.greenShade} opacity={0.8} at={[110, 46, 16, 40]}>
        <rect x="16" y="14" width="88" height="62" rx="8" fill={PAL.green} />
      </Shade>
      <Figure x={46} y={54} s={0.9} />
      <Figure x={60} y={52} />
      <Figure x={74} y={54} s={0.9} />
      <Arrow from={[24, 21]} to={[33, 30]} color={PAL.white} width={3.6} head={6} />
      <Arrow from={[96, 21]} to={[87, 30]} color={PAL.white} width={3.6} head={6} />
      <Arrow from={[24, 69]} to={[33, 60]} color={PAL.white} width={3.6} head={6} />
      <Arrow from={[96, 69]} to={[87, 60]} color={PAL.white} width={3.6} head={6} />
    </g>
  ),

  // "ontruimen": to evacuate — two people have gone out of the building through the exit (the
  // green sign over the door) and stand at the flag of the assembly point. A moving picture
  // (`picture: 'motion'`, docs/tekenstijl.md "Beweging"): on the intro card they walk from the
  // doorway to the flag. Standing still it would look like "de nooduitgang" or "de
  // verzamelplaats" of the same lesson, so it is only on the intro card.
  'w.ontruimen': () => (
    <g>
      <Ground cx={64} cy={106} rx={54} ry={3.5} />
      {/* The building's wall, with the open exit door and the green sign over it */}
      <Shade color={PAL.steel} opacity={0.45} at={[46, 66, 8, 44]}>
        <rect x="8" y="24" width="36" height="82" rx="3" fill={PAL.mist} />
      </Shade>
      <rect x="14" y="58" width="22" height="48" rx="2" fill={PAL.slate} />
      <path d="M36 58L46 62V103L36 106Z" fill={PAL.paperShade} />
      <rect x="14" y="40" width="22" height="13" rx="3" fill={PAL.green} />
      <Arrow from={[19, 46.5]} to={[31, 46.5]} color={PAL.white} width={3} head={6} />
      {/* The flag of the assembly point */}
      <rect x="92" y="28" width="4" height="78" rx="2" fill={PAL.steel} />
      <path d="M96 30H110L104 38L110 46H96Z" fill={PAL.green} />
      <path d="M96 41H108L110 46H96Z" fill={PAL.greenShade} opacity=".7" />
      <Move kind="show">
        <Motion x={56} y={84} dir={180} spread={24} n={2} len={8} gap={4} color={PAL.line} width={3} />
      </Move>
      <Move kind="from" dx={-46}>
        <Walker x={68} y={104} skin={SKIN.amina} coat={PAL.purple} coatShade={PAL.purpleShade} />
        <Walker x={82} y={104} skin={SKIN.bram} coat={PAL.orange} coatShade={PAL.orangeShade} />
      </Move>
    </g>
  ),

  // "de brandblusser": the fire extinguisher — a red bottle with a label, the black hose at the
  // side, the valve and its handle on top.
  'w.brandblusser': () => (
    <g>
      <Ground cx={58} cy={106} rx={28} ry={4} />
      <path d="M54 27Q32 28 31 50V70" fill="none" stroke={PAL.ink} strokeWidth="6" strokeLinecap="round" />
      <rect x="26" y="68" width="10" height="16" rx="3" fill={PAL.slateDark} />
      <Shade color={PAL.redShade} opacity={1} at={[84, 70, 12, 46]}>
        <rect x="42" y="34" width="38" height="72" rx="15" fill={PAL.red} />
      </Shade>
      <rect x="49" y="58" width="24" height="26" rx="3" fill={PAL.paper} />
      <path d="M53 66H69M53 73H64" stroke={PAL.line} strokeWidth="2.6" strokeLinecap="round" />
      <rect x="53" y="22" width="16" height="14" rx="3" fill={PAL.slate} />
      <path d="M60 22L88 14" stroke={PAL.slate} strokeWidth="6" strokeLinecap="round" />
      <path d="M62 29L86 31" stroke={PAL.steel} strokeWidth="5" strokeLinecap="round" />
      <Shine d="M47 46V94" width={4} opacity={0.5} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
