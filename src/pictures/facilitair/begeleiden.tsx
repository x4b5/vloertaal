import type { JSX } from 'react';
import { CastHead, type CharacterId } from '../../components/Characters';
import { Arrow, Ground, Move, PAL, SKIN, Shade } from '../kit';

/** A cast member's own head (no bust), its neck base at (x, y), `s` times the bust's size. */
function Head({ who, x, y, s = 0.5 }: { who: CharacterId; x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s}) translate(-60 -96)`}>
      <CastHead who={who} expr="pleased" gaze={[0, 0]} />
    </g>
  );
}

export default {
  // "begeleiden": to take someone somewhere — Bram (the host, in his blue work shirt) walks with the
  // visitor (Amina, with her orange visitor pass) at his side and shows her the way with his open hand;
  // a blue arrow on the floor points where they go.
  // On the intro card the two walk in together from the left. Once and slowly (they go there once).
  'w.begeleiden': () => (
    <g strokeLinejoin="round">
      <Ground cx={54} cy={105} rx={46} ry={4} />
      <Arrow from={[80, 100]} to={[112, 100]} color={PAL.sky} width={7} head={12} />
      <Move kind="from" dx={-30} once>
        {/* The visitor (Amina), a step behind */}
        <path d="M32 76L26 102M38 76L44 102" stroke={PAL.slate} strokeWidth="8" strokeLinecap="round" />
        <ellipse cx="25" cy="103" rx="5.6" ry="3" fill={PAL.slateDark} />
        <ellipse cx="47" cy="103" rx="5.6" ry="3" fill={PAL.slateDark} />
        <Shade color={PAL.purpleShade} opacity={1} at={[50, 62, 6, 24]}>
          <rect x="22" y="44" width="24" height="36" rx="9" fill={PAL.purple} />
        </Shade>
        <rect x="34" y="52" width="9" height="11" rx="2" fill={PAL.white} />
        <rect x="34" y="52" width="9" height="4" rx="2" fill={PAL.orange} />
        <path d="M24 50L22 70" stroke={SKIN.amina[1]} strokeWidth="6.5" strokeLinecap="round" />
        <Head who="amina" x={34} y={46} s={0.42} />
        {/* The host (Bram), his hand out in front to show the way */}
        <path d="M64 76L58 102M70 76L78 102" stroke={PAL.navy} strokeWidth="8.5" strokeLinecap="round" />
        <ellipse cx="57" cy="103" rx="6" ry="3.2" fill={PAL.slateDark} />
        <ellipse cx="81" cy="103" rx="6" ry="3.2" fill={PAL.slateDark} />
        <Shade color={PAL.blueShade} opacity={1} at={[82, 62, 7, 24]}>
          <rect x="54" y="42" width="26" height="38" rx="9" fill={PAL.blue} />
        </Shade>
        <path d="M74 50L88 62L100 60" fill="none" stroke={PAL.blue} strokeWidth="7.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M98 60L106 58" stroke={SKIN.bram[0]} strokeWidth="7" strokeLinecap="round" />
        <path d="M100 55L104 52" stroke={SKIN.bram[0]} strokeWidth="3.6" strokeLinecap="round" />
        <Head who="bram" x={67} y={44} s={0.44} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
