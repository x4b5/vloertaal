import type { JSX } from 'react';
import { Hand, Move, PAL, SKIN, Shine } from '../kit';

export default {
  // "de alarmcode": the alarm code — a dark alarm keypad on the wall: a small screen with four dots (the
  // code being typed), twelve light keys, a red light; a finger presses a key.
  // Three rounds: the finger goes from key to key, typing the code.
  'w.alarmcode': () => (
    <g strokeLinejoin="round">
      {/* The keypad case */}
      <rect x="22" y="10" width="64" height="94" rx="8" fill={PAL.slateDark} transform="translate(5 -3)" />
      <rect x="22" y="10" width="64" height="94" rx="8" fill={PAL.slate} />
      {/* The screen with the dots */}
      <rect x="30" y="18" width="48" height="16" rx="3" fill={PAL.ice} />
      {[40, 50, 60, 70].map((x) => (
        <circle key={x} cx={x - 2} cy="26" r="3.2" fill={PAL.slateDark} />
      ))}
      <circle cx="78" cy="42" r="2.6" fill={PAL.red} />
      {/* The keys */}
      {[0, 1, 2, 3].map((r) =>
        [0, 1, 2].map((c) => (
          <rect key={`${r}-${c}`} x={32 + c * 15} y={46 + r * 14} width="12" height="10" rx="2.5" fill={r === 3 && c !== 1 ? PAL.steel : PAL.mist} />
        )),
      )}
      <Shine d="M26 22V56" width={2.6} opacity={0.4} />
      {/* The finger: on the intro card it taps along the keys */}
      <Move kind="steps" dx={-30} dy={-28}>
        <Hand pose="point" x={70} y={118} rotate={-10} scale={0.72} skin={SKIN.amina} sleeve={['#2f8f3e', '#23722f']} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
