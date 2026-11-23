import type { JSX } from 'react';
import { Hand, Motion, PAL, SKIN } from '../kit';
import { Bust } from '../bust';

export default {
  // "de agressie": the aggression (angry, violent behaviour) — Bram, furious, raises a fist high beside
  // his head, ready to hit; red jagged anger lines burst out around him.
  'w.agressie': () => (
    <g strokeLinejoin="round">
      <Bust who="bram" x={52} y={120} scale={0.74} emotion="angry" bold />
      {/* The raised fist */}
      <Hand pose="fist" x={92} y={70} rotate={8} scale={0.82} skin={SKIN.bram} sleeve={[PAL.blue, PAL.blueShade]} />
      <Motion x={94} y={36} dir={-70} spread={70} n={3} len={8} gap={8} color={PAL.red} width={3.4} />
      {/* Anger bursting out */}
      <path d="M12 30L20 36L14 42L24 46" fill="none" stroke={PAL.red} strokeWidth="4" strokeLinecap="round" />
      <path d="M22 14L28 22L22 26L30 32" fill="none" stroke={PAL.red} strokeWidth="4" strokeLinecap="round" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
