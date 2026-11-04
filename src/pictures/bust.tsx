import { useId } from 'react';
import { CastHead, type CharacterId } from '../components/Characters';
import type { Emotion, Expr } from '../components/Faces';
import { BUST_TORSO, BustArmsArt, r1, type BustArms } from './kit';

// Out of the kit (./kit.tsx) since 4 November 2026: the cast's head is app code, and the kit stays
// free of it, so the kit can sit in the file that does not change with each deploy (vite.config.ts).

/**
 * A cast member as a head-and-shoulders bust, exactly the cast's own head. (x, y) is the middle
 * of the bottom edge; at scale 1 the bust is 84 wide and 130 tall, so use scale 0.4-0.75.
 * For pictures about feelings: `emotion` gives a clear (still calm, adult) face, `tilt` tilts
 * the head (degrees, + is clockwise) and `arms` adds body language (see BustArms).
 */
export function Bust({ who, x = 60, y = 110, scale = 0.7, expr = 'neutral', emotion, squint = false, flip = false, talk = false, tilt = 0, arms, bold = false }: {
  who: CharacterId; x?: number; y?: number; scale?: number; expr?: Expr; squint?: boolean;
  /** A clear feeling instead of the calm `expr`. */
  emotion?: Emotion;
  /** Mouth a little open, mid-word. */
  talk?: boolean;
  /** Face the other way (mirror). */
  flip?: boolean;
  /** Head tilt around the neck, in degrees. */
  tilt?: number;
  /** Body language: arms and hands in front of the bust. */
  arms?: BustArms;
  /** Features a little larger and bolder, for small pictures. */
  bold?: boolean;
}) {
  const id = `bt-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
  return (
    <g transform={`translate(${r1(x)} ${r1(y)}) scale(${flip ? -scale : scale} ${scale}) translate(-60 -134)`}>
      {BUST_TORSO[who](id)}
      <g transform={tilt ? `rotate(${tilt} 60 96)` : undefined}>
        <CastHead who={who} expr={expr} emotion={emotion} squint={squint} talk={talk} bold={bold} gaze={[0, 0]} />
      </g>
      {arms && <BustArmsArt who={who} arms={arms} />}
    </g>
  );
}
