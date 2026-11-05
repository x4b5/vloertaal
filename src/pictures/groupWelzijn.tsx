import type { JSX } from 'react';
import { Clock, Ground, PAL, SKIN, Shade, Shine } from './kit';
import { Bust } from './bust';

/**
 * Word pictures of two new lessons (the owner's request, 5 November 2026), keyed by word id. See
 * docs/tekenstijl.md and ./kit.tsx. Named after the lessons, not numbered, so it never clashes with
 * a group of another lesson written at the same time.
 *  - "Je goed voelen op het werk" (l.feelwell): to lie awake (Amina in bed, her eyes open, a clock
 *    at three at night and the moon) and the family (two parents and a child under a heart). Its
 *    other four words (de werkdruk, de ploegendienst, het heimwee, alleen) have no picture.
 *    "wakker liggen" is not "slapen" (Henk asleep, eyes shut, group24): open eyes and a clock; the
 *    two are near-synonyms in src/content/synonyms.ts, so they never stand side by side in a
 *    choice. "de familie" is not "de achternaam" (the family under a name card, group24): a heart
 *    in place of the card, and again a near-synonym pair.
 *  - "Een nieuwe collega helpen" (l.newcolleague): the cupboard (a wooden cupboard with one door
 *    open and things on its shelves; not the blue lockers of "het kluisje"). Its other five words
 *    have no picture.
 */

/** Children have no cast member: a small head in the cast's flat style (as in group24). */
function ChildHead({ x, y, r = 11, skin = SKIN.bram, hair: hairColour = PAL.brown }: { x: number; y: number; r?: number; skin?: [string, string]; hair?: string }) {
  const k = r / 12;
  return (
    <g transform={`translate(${x} ${y}) scale(${k})`}>
      <circle cx="0" cy="-1.5" r="13.2" fill={hairColour} />
      <circle cx="-12" cy="2" r="3.2" fill={skin[0]} />
      <circle cx="12" cy="2" r="3.2" fill={skin[1]} />
      <Shade color={skin[1]} opacity={1} at={[13, 4, 6, 16]}>
        <ellipse cx="0" cy="2" rx="11.6" ry="11.2" fill={skin[0]} />
      </Shade>
      <path d="M-12.4 -1Q-12 -13 0 -13.6Q12 -13 12.4 -1Q8 -6.5 1 -7Q-4 -4 -12.4 -1Z" fill={hairColour} />
      <ellipse cx="-4.6" cy="2.4" rx="1.6" ry="2.1" fill={PAL.ink} />
      <ellipse cx="4.6" cy="2.4" rx="1.6" ry="2.1" fill={PAL.ink} />
      <path d="M-3.2 7.6Q0 10.4 3.2 7.6" fill="none" stroke={PAL.mouth} strokeWidth="1.6" strokeLinecap="round" />
    </g>
  );
}

export default {
  // "wakker liggen": to lie awake — Amina lies in bed with her eyes open and a worried face; a
  // clock says three o'clock, the moon is out.
  'w.wakkerliggen': () => (
    <g>
      <Ground cy={106} rx={50} ry={3.5} />
      <rect x="10" y="92" width="100" height="12" rx="4" fill={PAL.wood} />
      <rect x="14" y="74" width="44" height="22" rx="11" fill={PAL.paperShade} />
      <rect x="14" y="72" width="44" height="20" rx="10" fill={PAL.white} />
      <g transform="translate(20 66) rotate(-90)">
        <Bust who="amina" x={0} y={44} scale={0.56} emotion="worried" bold />
      </g>
      <path d="M50 62Q50 54 58 54H104Q110 54 110 60V94H50Z" fill={PAL.purpleLight} />
      <path d="M50 62Q50 54 58 54H64V94H50Z" fill={PAL.white} opacity=".35" />
      <path d="M88 54H104Q110 54 110 60V94H88Z" fill={PAL.purple} opacity=".35" />
      <Clock cx={84} cy={30} r={17} hour={3} minute={0} />
      <path d="M30 12A11 11 0 1 0 40 30A8.6 8.6 0 1 1 30 12Z" fill={PAL.yellow} />
    </g>
  ),

  // "de familie": the family — two parents and their child, close together under a red heart.
  'w.familie': () => (
    <g>
      <Bust who="jada" x={32} y={128} scale={0.62} expr="pleased" bold />
      <Bust who="henk" x={88} y={128} scale={0.62} expr="pleased" bold />
      <rect x="46" y="94" width="28" height="28" rx="9" fill={PAL.leaf} />
      <rect x="62" y="94" width="12" height="28" rx="6" fill={PAL.leafShade} />
      <ChildHead x={60} y={82} r={13} skin={SKIN.amina} hair="#2e201a" />
      <g transform="translate(60 26) scale(0.62) translate(-60 -28)">
        <Shade color={PAL.redShade} opacity={1} at={[78, 30, 8, 22]}>
          <path d="M60 46C54 40 40 33 40 22C40 15 45 11 50.5 11C55 11 58.4 14 60 17.4C61.6 14 65 11 69.5 11C75 11 80 15 80 22C80 33 66 40 60 46Z" fill={PAL.red} />
        </Shade>
        <Shine d="M46 19Q47.5 15 51.5 15" opacity={0.6} width={3} />
      </g>
    </g>
  ),

  // "de kast": the cupboard — a wooden cupboard on short feet, its right door open, gloves and
  // boxes on the shelves inside.
  'w.kast': () => (
    <g>
      <Ground cx={58} cy={106} rx={44} ry={4} />
      {/* Feet and the body, its right side in shade */}
      <rect x="22" y="98" width="8" height="7" rx="2" fill={PAL.cardDark} />
      <rect x="72" y="98" width="8" height="7" rx="2" fill={PAL.cardDark} />
      <rect x="16" y="14" width="68" height="88" rx="4" fill={PAL.cardDark} />
      {/* The closed left door with its handle */}
      <rect x="20" y="18" width="29" height="80" rx="3" fill={PAL.card} />
      <rect x="42" y="50" width="4" height="14" rx="2" fill={PAL.slate} />
      <Shine d="M25 24V52" opacity={0.5} />
      {/* Inside, behind the open door: two shelves */}
      <rect x="51" y="18" width="29" height="80" rx="2" fill={PAL.brown} />
      <rect x="51" y="44" width="29" height="4" fill={PAL.wood} />
      <rect x="51" y="70" width="29" height="4" fill={PAL.wood} />
      {/* On the shelves: a pair of blue gloves, a box, a yellow roll of tape */}
      <path d="M55 44V34Q55 30 58 30Q60 30 60 33V28Q60 26 62 26Q64 26 64 28V44Z" fill={PAL.blue} />
      <path d="M64 44V30Q64 28 66 28Q68 28 68 30V34Q68 31 70.5 31Q73 31 73 34V44Z" fill={PAL.blueLight} />
      <rect x="55" y="56" width="20" height="14" rx="2" fill={PAL.paperShade} />
      <rect x="55" y="56" width="14" height="14" rx="2" fill={PAL.paper} />
      <circle cx="65" cy="88" r="9" fill={PAL.yellowShade} />
      <circle cx="64" cy="88" r="9" fill={PAL.yellow} />
      <circle cx="64" cy="88" r="3.6" fill={PAL.brown} />
      {/* The open right door, seen at an angle */}
      <path d="M84 16L104 22V96L84 102Z" fill={PAL.card} />
      <path d="M100 21L104 22V96L100 97Z" fill={PAL.cardShade} />
      <rect x="88" y="52" width="4" height="13" rx="2" fill={PAL.slate} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
