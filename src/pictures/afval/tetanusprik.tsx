import type { JSX } from 'react';
import { Move, PAL } from '../kit';
import { Bust } from '../bust';

export default {
  // "de tetanusprik": the tetanus jab — Jada, calm, gets a jab in her upper arm: a clean syringe with blue
  // liquid comes in from the right, its needle at her shoulder (a jab from a nurse, not an accident; not the
  // loose syringe of "de naald" or the needle in the glove of "prikken").
  // On the intro card the syringe comes to her arm, once.
  'w.tetanusprik': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Bust who="jada" x={46} y={114} scale={0.8} expr="neutral" />
      {/* The syringe, its needle at her shoulder */}
      <Move kind="from" dx={24} dy={-8} once>
        <g transform="translate(-6 2) rotate(-24 74 90)">
          <path d="M74 90H90" stroke={PAL.steel} strokeWidth="2.4" />
          <rect x="88" y="86" width="6" height="8" rx="1.6" fill={PAL.slate} />
          <rect x="92" y="82" width="26" height="16" rx="3" fill={PAL.ice} />
          <rect x="94" y="85" width="15" height="10" rx="2" fill={PAL.sky} />
          <path d="M99 82V87M105 82V87M111 82V87" stroke={PAL.slate} strokeWidth="1.4" />
          <rect x="116" y="78" width="5" height="24" rx="2" fill={PAL.mist} />
        </g>
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
