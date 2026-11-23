import type { JSX } from 'react';
import { Arrow, Ground, Move, PAL, SKIN } from '../kit';

/**
 * A worker from the side, walking to the right, feet on y 0 at x 0 (mirror the group to walk left).
 * `body`/`shade` is the jacket, `skin` the face and hand, `hair` the hair; `bag` adds a bag in the hand.
 */
const walker = (body: string, shade: string, skin: [string, string], hair: string, bag = false) => (
  <g>
    <path d="M-2 -22L-8 -11L-13 0" fill="none" stroke={PAL.navyShade} strokeWidth="7.5" />
    <ellipse cx="-12" cy="0.5" rx="5.6" ry="3" fill={PAL.slateDark} />
    <path d="M-2 -22L5 -11L8 0" fill="none" stroke={PAL.navy} strokeWidth="7.5" />
    <ellipse cx="10" cy="0.5" rx="5.6" ry="3" fill={PAL.slateDark} />
    <path d="M0 -42L-2 -22" stroke={body} strokeWidth="14" />
    <path d="M1 -40L7 -26" stroke={shade} strokeWidth="6" />
    {bag && (
      <g>
        <path d="M5 -23Q7 -30 12 -23" fill="none" stroke={PAL.brown} strokeWidth="2" />
        <rect x="2" y="-24" width="14" height="11" rx="2.5" fill={PAL.cardDark} />
      </g>
    )}
    <circle cx="8" cy="-25" r="3.4" fill={skin[0]} />
    <circle cx="1.5" cy="-53" r="7.5" fill={skin[0]} />
    <circle cx="4" cy="-51.5" r="4.4" fill={skin[1]} opacity=".4" />
    <path d="M-6.5 -52Q-7 -62 1.5 -62Q8 -62 9 -57Q2 -58 -1 -51Z" fill={hair} />
  </g>
);

export default {
  // "de ploegwissel": the shift change — on the left the night shift walks out, to the left, under a dark
  // sky with the moon, bags in their hands; on the right the next team, in orange, walks in to the right,
  // towards the gate of the plant, under the sun. On the intro card the two teams pass each other (once).
  'w.ploegwissel': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={60} cy={99} rx={54} ry={3.5} />
      {/* The dark sky with the moon (left) and the sun (right) */}
      <circle cx="28" cy="25" r="15" fill={PAL.navy} />
      <path d="M31 15A11 11 0 1 0 38 31A9 9 0 1 1 31 15Z" fill={PAL.yellow} />
      <circle cx="78" cy="22" r="9" fill={PAL.yellow} />
      <path d="M78 7V10M78 34V37M63 22H66M90 22H93M67.4 11.4L69.5 13.5M86.5 30.5L88.6 32.6M67.4 32.6L69.5 30.5M86.5 13.5L88.6 11.4" stroke={PAL.yellow} strokeWidth="3" />
      {/* The gate of the plant */}
      <rect x="98" y="34" width="8" height="66" rx="2" fill={PAL.slate} />
      <path d="M98 42H92M98 58H92M98 74H92M98 90H92" stroke={PAL.steel} strokeWidth="3" />
      <rect x="102" y="34" width="4" height="66" fill={PAL.slateDark} />
      {/* The night shift goes home, to the left */}
      <Move kind="slow" dx={26} once>
        <g transform="translate(36 98) scale(-1 1)">{walker(PAL.navy, PAL.navyShade, SKIN.henk, PAL.steel, true)}</g>
        <g transform="translate(20 98) scale(-1 1)">{walker(PAL.navy, PAL.navyShade, SKIN.jada, PAL.brown, true)}</g>
        <Arrow from={[40, 108]} to={[12, 108]} color={PAL.navy} width={4} head={7} />
      </Move>
      {/* The next team comes in, to the right */}
      <Move kind="slow" dx={-26}>
        <g transform="translate(66 98)">{walker(PAL.orange, PAL.orangeShade, SKIN.amina, PAL.purple)}</g>
        <g transform="translate(82 98)">{walker(PAL.orange, PAL.orangeShade, SKIN.bram, PAL.brown)}</g>
        <Arrow from={[60, 108]} to={[88, 108]} color={PAL.orange} width={4} head={7} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
