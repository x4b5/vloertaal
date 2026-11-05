import type { JSX } from 'react';
import { Bust } from './bust';
import { Box, CurveArrow, Ground, Hand, Motion, PAL, SKIN, Shade, Shine, Sparkle } from './kit';

/**
 * Word pictures, group 38 (keyed by word id). See docs/tekenstijl.md and ./kit.tsx.
 *
 * "Weer aan het werk na ziekte" (l.backtowork, unit "Ziekte", 5 November 2026): coming back
 * calmly after an illness. Light work and heavy work are a pair (a small box held up with ease,
 * a big box that weighs down), so a picture choice between them is decided at a glance. "Welkom
 * terug" is the supervisor waving, with an arrow that turns back (not the "hallo" of Bram).
 * "Opbouwen" and "halve dagen" are memory pictures ('hook', intro card only): stacks of boxes
 * that grow, and a week of days that are each half filled. "Herstellen" has no picture.
 */

/** A rounded day cell of the week: the left half filled (worked), the right half free. */
function HalfDay({ x, y, s = 22 }: { x: number; y: number; s?: number }) {
  return (
    <g>
      <rect x={x} y={y} width={s} height={s} rx="4" fill={PAL.mist} />
      <path d={`M${x + 4} ${y}H${x + s / 2}V${y + s}H${x + 4}A4 4 0 0 1 ${x} ${y + s - 4}V${y + 4}A4 4 0 0 1 ${x + 4} ${y}Z`} fill={PAL.orange} />
    </g>
  );
}

export default {
  // "licht werk": light work — Amina, at ease, holds a small box up on one hand; short lines
  // above it say that it goes up easily.
  'w.lichtwerk': () => (
    <g>
      <Bust who="amina" x={44} y={120} scale={0.68} expr="pleased" />
      <Hand pose="hold" x={90} y={86} rotate={4} scale={0.6} skin={SKIN.amina} sleeve={[PAL.green, PAL.greenShade]} />
      <Box x={76} y={52} w={26} h={20} depth={8} />
      <Motion x={92} y={36} dir={-90} spread={50} n={3} len={7} gap={6} color={PAL.sky} width={3.4} />
    </g>
  ),

  // "zwaar werk": heavy work — a big box on the floor that weighs down, with dust at its foot
  // and a thick arrow down; behind it Bram, who would rather not lift it.
  'w.zwaarwerk': () => (
    <g>
      <Ground cx={56} cy={106} rx={46} ry={4} />
      <Bust who="bram" x={50} y={72} scale={0.46} expr="disappointed" />
      <Box x={14} y={68} w={72} h={36} depth={12} label />
      <path d="M10 106L4 101M96 106L104 100M100 98L108 96" stroke={PAL.line} strokeWidth="3.2" strokeLinecap="round" />
      <path d="M104 18V58" stroke={PAL.redShade} strokeWidth="9" strokeLinecap="round" />
      <path d="M93 52L104 66L115 52Z" fill={PAL.redShade} strokeLinejoin="round" stroke={PAL.redShade} strokeWidth="3" />
    </g>
  ),

  // "welkom terug": welcome back — Henk, the supervisor, waves with a big smile; next to him an
  // arrow turns round and comes back.
  'w.welkomterug': () => (
    <g>
      <Bust who="henk" x={54} y={120} scale={0.7} expr="joy" squint />
      <Hand pose="open" x={100} y={80} rotate={14} scale={0.72} skin={SKIN.henk} sleeve={[PAL.navy, PAL.navyShade]} />
      <Motion x={104} y={33} dir={-40} spread={70} len={7} gap={7} color={PAL.sky} width={3.6} />
      <CurveArrow from={[14, 14]} to={[12, 50]} bend={30} color={PAL.green} width={6} head={11} />
      <Sparkle x={76} y={16} r={6} />
    </g>
  ),

  // "opbouwen": to build up step by step — three stacks of boxes, one, two and three high, and a
  // green arrow going up over them (a memory picture: "rustig opbouwen" at work).
  'w.opbouwen': () => (
    <g>
      <Ground cx={60} cy={106} rx={50} ry={4} />
      <Box x={12} y={84} w={24} h={20} depth={7} tape={false} />
      <Box x={44} y={84} w={24} h={20} depth={7} tape={false} />
      <Box x={44} y={63} w={24} h={20} depth={7} tape={false} />
      <Box x={76} y={84} w={24} h={20} depth={7} tape={false} />
      <Box x={76} y={63} w={24} h={20} depth={7} tape={false} />
      <Box x={76} y={42} w={24} h={20} depth={7} tape={false} />
      <CurveArrow from={[16, 70]} to={[78, 20]} bend={-16} color={PAL.green} width={6.5} head={12} />
    </g>
  ),

  // "halve dagen": half days — a wall calendar of one week: every day is only half filled in
  // (a memory picture: you work half of each day).
  'w.halvedagen': () => (
    <g>
      <rect x="12" y="26" width="96" height="76" rx="9" fill={PAL.paperShade} />
      <Shade color={PAL.paperShade} opacity={1} at={[116, 64, 14, 50]}>
        <rect x="12" y="22" width="96" height="76" rx="9" fill={PAL.white} />
      </Shade>
      <path d="M12 31A9 9 0 0 1 21 22H99A9 9 0 0 1 108 31V40H12Z" fill={PAL.red} />
      <path d="M80 22H99A9 9 0 0 1 108 31V40H80Z" fill={PAL.redShade} opacity=".6" />
      <rect x="34" y="14" width="6" height="16" rx="3" fill={PAL.slate} />
      <rect x="80" y="14" width="6" height="16" rx="3" fill={PAL.slate} />
      <HalfDay x={22} y={48} />
      <HalfDay x={49} y={48} />
      <HalfDay x={76} y={48} />
      <HalfDay x={35} y={74} />
      <HalfDay x={63} y={74} />
      <Shine d="M20 34Q20 28 26 28" width={3.5} opacity={0.6} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
