import type { JSX } from 'react';
import { PAL, Shine } from '../kit';

export default {
  // "het explosiegevaar": the danger of explosion — the yellow warning triangle with a thick black edge for
  // explosive atmospheres, with the black letters "EX" (drawn as strokes: part of the official sign, the one
  // place letters are allowed); small grey dust and vapour clouds drift at its foot.
  'w.explosiegevaar': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* Dust and vapour clouds at the foot */}
      {[[0, 0], [86, 2]].map(([dx, dy]) => (
        <g key={dx} transform={`translate(${dx} ${dy})`}>
          <g fill={PAL.steel} transform="translate(2 2.5)">
            <circle cx="15" cy="96" r="7" /><circle cx="24" cy="90" r="8.5" /><circle cx="25" cy="100" r="6" />
          </g>
          <g fill={PAL.mist}>
            <circle cx="15" cy="96" r="7" /><circle cx="24" cy="90" r="8.5" /><circle cx="25" cy="100" r="6" />
          </g>
        </g>
      ))}
      <circle cx="60" cy="104" r="2.4" fill={PAL.line} />
      <circle cx="47" cy="106" r="2" fill={PAL.line} />
      <circle cx="73" cy="106" r="2" fill={PAL.line} />
      {/* The sign: depth edge, black edge, yellow face */}
      <path d="M60 16L102 88H18Z" fill={PAL.slateDark} stroke={PAL.slateDark} strokeWidth="12" transform="translate(0 3)" />
      <path d="M60 16L102 88H18Z" fill={PAL.ink} stroke={PAL.ink} strokeWidth="12" />
      <path d="M60 26L93 83H27Z" fill={PAL.yellow} stroke={PAL.yellow} strokeWidth="4" />
      <Shine d="M47 46L55 32" color={PAL.yellowShine} width={3} opacity={0.8} />
      {/* The letters E and X, drawn as strokes */}
      <path d="M57 55H45V77H57M45 66H55" fill="none" stroke={PAL.ink} strokeWidth="5.5" strokeLinecap="butt" strokeLinejoin="miter" />
      <path d="M63 55L76 77M76 55L63 77" stroke={PAL.ink} strokeWidth="5.5" strokeLinecap="butt" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
