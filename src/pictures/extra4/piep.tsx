import type { JSX } from 'react';
import { Ground, Move, PAL, Shine } from '../kit';

export default {
  // "de piep": the beep (the short sound; after it you speak your message) — a phone whose screen shows
  // one short tone (a flat line with one short block in it), and short sound waves coming out of its
  // top right corner. On the intro card the waves go out from the phone (three rounds: a sound).
  'w.piep': () => (
    <g strokeLinecap="round" strokeLinejoin="round">
      <Ground cx={46} cy={108} rx={26} ry={4} />
      {/* The phone */}
      <rect x="22.5" y="17" width="50" height="88" rx="8" fill={PAL.slateDark} />
      <rect x="20" y="14" width="50" height="88" rx="8" fill={PAL.slate} />
      <rect x="24" y="21" width="42" height="74" rx="4" fill="#e3f5ff" />
      <rect x="40" y="16.4" width="10" height="2.4" rx="1.2" fill={PAL.slateDark} />
      {/* One short tone: a flat line, one short block, a flat line */}
      <path d="M29 62H38V46H52V62H61" fill="none" stroke={PAL.orange} strokeWidth="4.4" />
      <Shine d="M24 30V44" width={2.6} opacity={0.5} />
      {/* The sound coming out */}
      <Move kind="fast" dx={-22} dy={22}>
        <g transform="translate(-3 6) rotate(-45 74 30)">
          <path d="M80 22A11 11 0 0 1 80 38M88 16A19 19 0 0 1 88 44M96 10A27 27 0 0 1 96 50" fill="none" stroke={PAL.orange} strokeWidth="5" />
        </g>
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
