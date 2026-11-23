import type { JSX } from 'react';
import { Calendar, PAL, Shade, Shine } from '../kit';

export default {
  // "de proefdag": the trial day (one day of work, to try) — a calendar page with one single day
  // ringed, and a yellow hard hat in front of it: one day at work, to try it out.
  'w.proefdag': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Calendar x={12} y={16} w={74} h={72} mark={5} header={PAL.sky} headerShade={PAL.skyShade} />
      {/* The hard hat */}
      <ellipse cx="84" cy="104" rx="26" ry="4" fill="#000" opacity=".14" />
      <Shade color={PAL.yellowShade} opacity={1} at={[104, 84, 10, 24]}>
        <path d="M62 98Q62 70 84 68Q106 70 106 98Z" fill={PAL.yellow} />
      </Shade>
      <path d="M80 69Q84 66 88 69V96H80Z" fill={PAL.yellowLight} />
      <rect x="56" y="95" width="56" height="7" rx="3.5" fill={PAL.yellowShade} />
      <Shine d="M68 88Q68 78 75 73" color={PAL.yellowShine} width={3} opacity={0.8} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
