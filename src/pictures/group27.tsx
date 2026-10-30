import type { JSX, ReactNode } from 'react';
import { Arrow, CurveArrow, PAL, Shade, Shine } from './kit';

/**
 * Word pictures, group 27 (keyed by id): the time words, in one picture language, the week
 * strip. A calendar sheet (red top, two rings) with one row of 7 days, Monday first. Under each
 * day a mark: a dot for a working day, a dash for the weekend. The weekend days (Saturday and
 * Sunday) always have their own warm tint, so you see where the week starts and ends.
 *  - de week: all 7 days filled in; het weekend: the last two.
 *  - maandag, zaterdag: only that one day filled in (and a little bigger).
 *  - elke dag: a tick in every day.
 *  - tot en met: one bar from Monday up to and including Thursday, with an arrow.
 *  - volgende week / vorige week: two week rows; the sun marks today in this week, an arrow goes
 *    down to the next week or up to the last week, which is filled in.
 *  - overmorgen: three days: the sun on today, a jump over tomorrow, the third day filled in.
 *  - de maand: a month sheet, 5 rows of 7 days, all filled in.
 * Each has its own look ("kalender/maandag", Word.look), so two of them can stand side by side
 * in a picture choice, but never next to another calendar page (the date, the roster, today):
 * src/lib/wordPicture.ts looksAlike. See docs/tekenstijl.md and ./kit.tsx.
 */

/** Left edge, width and step of the 7 day cells (x 14–106). */
const X0 = 14;
const CW = 11.6;
const STEP = 13.4;
const cellX = (i: number) => X0 + i * STEP;
const midX = (i: number) => cellX(i) + CW / 2;
const weekend = (i: number) => i >= 5;

/** Day cell colours: empty and filled, working day (cool) and weekend (warm). */
const EMPTY = PAL.mist;
const EMPTY_WE = '#ffd9b5';
const FILL = PAL.sky;
const FILL_SHADE = PAL.skyShade;
const FILL_WE = PAL.orange;
const FILL_WE_SHADE = PAL.orangeShade;

/** The calendar sheet: white paper with a depth edge, a red top band and two rings. */
function Sheet({ y, h }: { y: number; h: number }) {
  return (
    <g>
      <rect x="8" y={y + 4} width="104" height={h} rx="9" fill={PAL.paperShade} />
      <rect x="8" y={y} width="104" height={h} rx="9" fill={PAL.white} />
      <path d={`M8 ${y + 9}A9 9 0 0 1 17 ${y}H103A9 9 0 0 1 112 ${y + 9}V${y + 12}H8Z`} fill={PAL.red} />
      <path d={`M80 ${y}H103A9 9 0 0 1 112 ${y + 9}V${y + 12}H80Z`} fill={PAL.redShade} opacity=".6" />
      <rect x="29" y={y - 6} width="6" height="13" rx="3" fill={PAL.slate} />
      <rect x="85" y={y - 6} width="6" height="13" rx="3" fill={PAL.slate} />
    </g>
  );
}

/** The mark under a day: a dot for a working day, a dash for the weekend. */
function DayMark({ i, y }: { i: number; y: number }) {
  return weekend(i) ? (
    <rect x={midX(i) - 4.5} y={y - 1.7} width="9" height="3.4" rx="1.7" fill={FILL_WE_SHADE} />
  ) : (
    <circle cx={midX(i)} cy={y} r="2.2" fill={PAL.line} />
  );
}

/** One day cell, empty or filled in (a filled one gets a shade strip at the bottom). */
function Day({ i, y, h, filled, big = false }: { i: number; y: number; h: number; filled: boolean; big?: boolean }) {
  const g = big ? 2.4 : 0;
  const x = cellX(i) - g;
  const w = CW + g * 2;
  const top = y - g * 2;
  const hh = h + g * 2.6;
  if (!filled) return <rect x={x} y={top} width={w} height={hh} rx="2.5" fill={weekend(i) ? EMPTY_WE : EMPTY} />;
  return (
    <g>
      <rect x={x} y={top} width={w} height={hh} rx="2.5" fill={weekend(i) ? FILL_WE_SHADE : FILL_SHADE} />
      <rect x={x} y={top} width={w} height={hh - 3} rx="2.5" fill={weekend(i) ? FILL_WE : FILL} />
    </g>
  );
}

/** A row of 7 days at y (cells h high), with the day marks under it. */
function Week({ y, h, filled = () => false, big, extra }: {
  y: number; h: number;
  filled?: (i: number) => boolean;
  /** One day drawn a little bigger (the day a picture is about). */
  big?: number;
  /** Something drawn in a day (a tick, the sun), centred on (cx, cy). */
  extra?: (i: number, cx: number, cy: number) => ReactNode;
}) {
  const days = [0, 1, 2, 3, 4, 5, 6];
  return (
    <g>
      {days.filter((i) => i !== big).map((i) => <Day key={i} i={i} y={y} h={h} filled={filled(i)} />)}
      {big !== undefined && <Day i={big} y={y} h={h} filled={filled(big)} big />}
      {days.map((i) => <DayMark key={i} i={i} y={y + h + (big === undefined ? 6 : 8.5)} />)}
      {extra && days.map((i) => <g key={i}>{extra(i, midX(i), y + h / 2)}</g>)}
    </g>
  );
}

/** A small sun (today): yellow disc with short rays. */
function Sun({ cx, cy, r = 5 }: { cx: number; cy: number; r?: number }) {
  const rays = Array.from({ length: 8 }, (_, k) => {
    const a = (k * Math.PI) / 4;
    const o = r * 1.4;
    const e = r * 1.85;
    return `M${(cx + Math.cos(a) * o).toFixed(1)} ${(cy + Math.sin(a) * o).toFixed(1)}L${(cx + Math.cos(a) * e).toFixed(1)} ${(cy + Math.sin(a) * e).toFixed(1)}`;
  });
  return (
    <g>
      <path d={rays.join('')} stroke={PAL.orange} strokeWidth={Math.max(1.8, r * 0.3)} strokeLinecap="round" />
      <Shade color={PAL.orange} opacity={0.45} at={[cx + r * 1.1, cy, r * 0.55, r * 1.3]}>
        <circle cx={cx} cy={cy} r={r} fill={PAL.yellow} />
      </Shade>
    </g>
  );
}

/** The single-row sheet (y 26–98) and its row of days. */
const ROW_Y = 46;
const ROW_H = 32;
function WeekSheet(props: Omit<Parameters<typeof Week>[0], 'y' | 'h'> & { children?: ReactNode }) {
  return (
    <g>
      <Sheet y={26} h={70} />
      <Week y={ROW_Y} h={ROW_H} {...props} />
      {props.children}
    </g>
  );
}

/** Two weeks: this week (the sun on Wednesday) and the other one (filled in), with an arrow. */
function TwoWeeks({ next }: { next: boolean }) {
  const top = 34;
  const bottom = 76;
  const h = 17;
  const today = 2;
  const sun = (i: number, cx: number, cy: number) => (i === today ? <Sun cx={cx} cy={cy} r={4.4} /> : null);
  const ax = midX(today);
  return (
    <g>
      <Sheet y={16} h={90} />
      <Week y={top} h={h} filled={next ? undefined : () => true} extra={next ? sun : undefined} />
      <Week y={bottom} h={h} filled={next ? () => true : undefined} extra={next ? undefined : sun} />
      {next
        ? <Arrow from={[ax, top + h + 9]} to={[ax, bottom - 2]} color={PAL.navy} width={5} head={8} />
        : <Arrow from={[ax, bottom - 4]} to={[ax, top + h + 9]} color={PAL.navy} width={5} head={8} />}
    </g>
  );
}

export default {
  // "de week": the week — the week strip, all 7 days filled in (Monday to Friday blue, the
  // weekend orange).
  'w.week': () => <WeekSheet filled={() => true} />,

  // "het weekend": the weekend — the week strip, only Saturday and Sunday filled in.
  'w.weekend': () => <WeekSheet filled={weekend} />,

  // "maandag": Monday — the week strip, only the first day filled in.
  'w.maandag': () => <WeekSheet filled={(i) => i === 0} big={0} />,

  // "zaterdag": Saturday — the week strip, only the sixth day (the first weekend day) filled in.
  'w.zaterdag': () => <WeekSheet filled={(i) => i === 5} big={5} />,

  // "elke dag": every day — the week strip with a tick in every day.
  'w.elkedag': () => (
    <WeekSheet
      extra={(i, cx, cy) => (
        <path
          d={`M${cx - 3.6} ${cy}L${cx - 0.8} ${cy + 3.4}L${cx + 3.8} ${cy - 3.6}`}
          fill="none"
          stroke={weekend(i) ? FILL_WE_SHADE : PAL.blue}
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    />
  ),

  // "tot en met": up to and including — one bar over Monday up to and including Thursday (the
  // last day counts too), with an arrow in it that stops at the end of Thursday.
  'w.totenmet': () => (
    <WeekSheet>
      <rect x={cellX(0) - 1} y={ROW_Y - 2} width={cellX(3) + CW + 2 - cellX(0)} height={ROW_H + 4} rx="4" fill={FILL_SHADE} />
      <rect x={cellX(0) - 1} y={ROW_Y - 2} width={cellX(3) + CW + 2 - cellX(0)} height={ROW_H + 1} rx="4" fill={FILL} />
      <Arrow from={[cellX(0) + 4, ROW_Y + ROW_H / 2]} to={[cellX(3) + CW - 1.5, ROW_Y + ROW_H / 2]} color={PAL.white} width={4} head={7} />
    </WeekSheet>
  ),

  // "volgende week": next week — this week (the sun on today) on top, an arrow down to the next
  // week, filled in.
  'w.volgendeweek': () => <TwoWeeks next />,

  // "vorige week": last week — this week (the sun on today) below, an arrow up to the week
  // before, filled in.
  'w.vorigeweek': () => <TwoWeeks next={false} />,

  // "overmorgen": the day after tomorrow — three days: the sun on today, an arrow jumps over
  // tomorrow to the third day, filled in.
  'w.overmorgen': () => {
    const tile = (x: number, fill: string, shade: string) => (
      <g>
        <rect x={x} y="58" width="28" height="40" rx="6" fill={shade} />
        <rect x={x} y="54" width="28" height="40" rx="6" fill={fill} />
      </g>
    );
    return (
      <g>
        {tile(10, PAL.white, PAL.paperShade)}
        {tile(46, PAL.white, PAL.paperShade)}
        <rect x="52" y="66" width="16" height="16" rx="3" fill={EMPTY} />
        {tile(82, FILL, FILL_SHADE)}
        <Shine d="M86 64Q86 59 91 58" opacity={0.55} width={3} />
        <Sun cx={24} cy={74} r={7.5} />
        <CurveArrow from={[26, 46]} to={[94, 44]} bend={26} color={PAL.navy} width={6} head={10} />
      </g>
    );
  },

  // "de maand": the month — a month sheet, 5 weeks of 7 days, all filled in (the weekend
  // columns orange), the marks under the columns.
  'w.maand': () => (
    <g>
      <Sheet y={16} h={90} />
      {[0, 1, 2, 3, 4].map((r) =>
        [0, 1, 2, 3, 4, 5, 6].map((i) => <Day key={`${r}-${i}`} i={i} y={34 + r * 12.4} h={10} filled />),
      )}
      {[0, 1, 2, 3, 4, 5, 6].map((i) => <DayMark key={i} i={i} y={100} />)}
    </g>
  ),
} as Record<string, () => JSX.Element>;
