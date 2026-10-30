import { useId, type JSX } from 'react';
import { Arrow, Bust, CurveArrow, Ground, Hand, Motion, PAL, SKIN, Shade, Shine, Sparkle } from './kit';

/**
 * Word pictures, group 25 (keyed by id): the Entree topics at the end of the Taal track that
 * still had only an emoji. The words of one lesson are shown side by side in a choice, so each
 * picture in a lesson has its own main shape and colour:
 *  - l.greensafe: to drink (Amina drinks from a water bottle), the heat (a sun over a red
 *    thermometer);
 *  - l.workorder / l.handover: the work order (a clipboard with a task list), to read (Jada reads
 *    an open book), the signature (a blue signature on the line), to tidy up (a hand puts a
 *    wrench away in a crate);
 *  - l.workshop / l.power: the tools (a red toolbox full of tools), to saw (a saw cutting a
 *    plank), the spark (sparks flying off a metal bar), hearing protection (orange ear muffs),
 *    the noise (a speaker with big red waves), the plug (a plug on its cable), the electrician
 *    (Jada with a lightning badge);
 *  - l.garage / l.carjob: the tyre, the oil (an oil can with a drop), the car battery (a battery
 *    with + and -), the mechanic (Amina with a big wrench and a tyre badge, not like the
 *    electrician), the test drive (a car driving, with a key), the driving licence (a card with a
 *    photo and a car), to repair (a hand turns a nut with a wrench);
 *  - l.placement / l.review: the placement (a school bag with a hard hat on it), the school (a
 *    school building with a clock), the learning goal (a target with an arrow in it), the
 *    portfolio (a folder with work and a certificate);
 *  - l.council / l.police: to vote (a hand puts a ballot in the box), the police officer (Henk in
 *    a police cap with a badge; neutral, no weapon);
 *  - l.login / l.phish: the screen (a flat screen with windows), to lock (a finger taps the
 *    padlock on a phone), the sender (Bram sends off an envelope), to click (a finger clicks a
 *    mouse), the attachment (a paper clip on a document), the IT department (Amina behind a
 *    laptop with a gear).
 * See docs/tekenstijl.md and ./kit.tsx.
 */

/** A plain sheet of paper with grey text lines, top-left (x, y). */
function Paper({ x, y, w, h, lines = 4 }: { x: number; y: number; w: number; h: number; lines?: number }) {
  return (
    <g>
      <rect x={x} y={y + 3} width={w} height={h} rx="3" fill={PAL.paperShade} />
      <rect x={x} y={y} width={w} height={h} rx="3" fill={PAL.white} />
      {Array.from({ length: lines }, (_, i) => (
        <path key={i} d={`M${x + 7} ${y + 10 + i * 8.5}H${x + w - (i % 2 ? 15 : 8)}`} stroke={PAL.line} strokeWidth="2.6" strokeLinecap="round" />
      ))}
    </g>
  );
}

/** A padlock, bottom-middle of the body at (x, y), body `w` wide. */
function Padlock({ x, y, w = 26 }: { x: number; y: number; w?: number }) {
  const h = w * 0.82;
  return (
    <g>
      <path d={`M${x - w * 0.3} ${y - h}V${y - h - w * 0.28}A${w * 0.3} ${w * 0.3} 0 0 1 ${x + w * 0.3} ${y - h - w * 0.28}V${y - h}`} fill="none" stroke={PAL.steel} strokeWidth={w * 0.16} />
      <Shade color={PAL.yellowShade} opacity={1} at={[x + w * 0.6, y - h / 2, w * 0.3, h]}>
        <rect x={x - w / 2} y={y - h} width={w} height={h} rx={w * 0.16} fill={PAL.yellow} />
      </Shade>
      <circle cx={x} cy={y - h * 0.58} r={w * 0.1} fill={PAL.slateDark} />
      <rect x={x - w * 0.045} y={y - h * 0.58} width={w * 0.09} height={h * 0.3} rx={w * 0.04} fill={PAL.slateDark} />
    </g>
  );
}

/** An open-end spanner lying along the x axis, centred on (0, 0), `len` long, then moved and turned. */
function Wrench({ x, y, rotate = 0, len = 70, color = PAL.mist, shade = PAL.steel }: { x: number; y: number; rotate?: number; len?: number; color?: string; shade?: string }) {
  const id = `wr-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
  const half = len / 2;
  const r = len * 0.15;
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate})`}>
      <mask id={id}>
        <rect x={-half - r * 2} y={-r * 2} width={len + r * 4} height={r * 4} fill="#fff" />
        {/* The jaw opening at the right end */}
        <rect x={half - r * 0.2} y={-r * 0.42} width={r * 2} height={r * 0.84} fill="#000" />
      </mask>
      <g mask={`url(#${id})`}>
        <rect x={-half + r * 0.4} y={-r * 0.42} width={len - r * 0.8} height={r * 0.84} rx={r * 0.4} fill={color} />
        <circle cx={half - r * 0.5} cy={0} r={r} fill={color} />
        <circle cx={-half + r * 0.4} cy={0} r={r * 0.78} fill={color} />
        <path d={`M${-half + r * 1.4} ${r * 0.42}H${half - r * 1.4}`} stroke={shade} strokeWidth={r * 0.36} strokeLinecap="round" />
      </g>
      <circle cx={-half + r * 0.4} cy={0} r={r * 0.3} fill={shade} />
    </g>
  );
}

/** A gear: a disc with eight teeth and a hole, centred on (x, y), radius `r`. */
function Gear({ x, y, r, color, hole }: { x: number; y: number; r: number; color: string; hole: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      {Array.from({ length: 8 }, (_, i) => (
        <rect key={i} x={-r * 0.22} y={-r * 1.18} width={r * 0.44} height={r * 0.6} rx={r * 0.1} fill={color} transform={`rotate(${i * 45})`} />
      ))}
      <circle r={r * 0.86} fill={color} />
      <circle r={r * 0.36} fill={hole} />
    </g>
  );
}

/** A small car seen from the side, the middle of its underside at (x, y), facing right. */
function Car({ x, y, k = 1, body = PAL.blue, shade = PAL.blueShade }: { x: number; y: number; k?: number; body?: string; shade?: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${k})`}>
      <Shade color={shade} opacity={1} at={[52, 0, 18, 40]}>
        <path d="M-44 -4V-14Q-44 -21 -37 -22L-26 -24L-15 -38Q-12 -41 -7 -41H14Q19 -41 22 -37L32 -24L39 -22Q46 -20 46 -13V-4Q46 0 42 0H-40Q-44 0 -44 -4Z" fill={body} />
      </Shade>
      {/* Windows */}
      <path d="M-20 -25L-11 -36H0V-25Z" fill={PAL.ice} />
      <path d="M5 -25V-36H14L24 -25Z" fill={PAL.ice} />
      {/* Lights */}
      <rect x="40" y="-18" width="6" height="5" rx="2" fill={PAL.yellowLight} />
      <rect x="-44" y="-18" width="4" height="5" rx="1.6" fill={PAL.red} />
      {/* Wheels */}
      {[-25, 26].map((wx) => (
        <g key={wx}>
          <circle cx={wx} cy="0" r="10.5" fill={PAL.slateDark} />
          <circle cx={wx} cy="0" r="4.6" fill={PAL.mist} />
        </g>
      ))}
      <Shine d="M-38 -16Q-36 -20 -30 -20" opacity={0.5} width={3} />
    </g>
  );
}

/** A lightning bolt, centred on (x, y), `s` tall. */
function Bolt({ x, y, s = 30, color = PAL.yellow }: { x: number; y: number; s?: number; color?: string }) {
  const k = s / 30;
  return (
    <path
      d="M3 -15L-8 2H0L-4 15L9 -3H1Z"
      transform={`translate(${x} ${y}) scale(${k})`}
      fill={color}
      stroke={color}
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  );
}

/** A round badge with a depth edge, centred on (x, y), with `children` on it. */
function Badge({ x, y, r = 17, fill, depth, children }: { x: number; y: number; r?: number; fill: string; depth: string; children?: JSX.Element }) {
  return (
    <g>
      <circle cx={x} cy={y + 3} r={r} fill={depth} />
      <circle cx={x} cy={y} r={r} fill={fill} />
      {children}
    </g>
  );
}

/** A tyre seen from the side, centred on (x, y), outer radius `r`. */
function Tyre({ x, y, r }: { x: number; y: number; r: number }) {
  const n = 14;
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle r={r} fill={PAL.slateDark} />
      {Array.from({ length: n }, (_, i) => (
        <rect key={i} x={-r * 0.07} y={-r} width={r * 0.14} height={r * 0.2} rx={r * 0.04} fill={PAL.slate} transform={`rotate(${(i * 360) / n})`} />
      ))}
      <circle r={r * 0.72} fill={PAL.slate} />
      <circle r={r * 0.52} fill={PAL.mist} />
      <circle r={r * 0.52} fill={PAL.steel} opacity=".35" transform={`translate(${r * 0.12} ${r * 0.1})`} />
      {Array.from({ length: 5 }, (_, i) => {
        const a = ((i * 72 - 90) * Math.PI) / 180;
        return <circle key={i} cx={Math.cos(a) * r * 0.3} cy={Math.sin(a) * r * 0.3} r={r * 0.06} fill={PAL.slate} />;
      })}
      <circle r={r * 0.12} fill={PAL.steel} />
    </g>
  );
}

/** An envelope (closed), top-left (x, y). */
function Envelope({ x, y, w, h }: { x: number; y: number; w: number; h: number }) {
  return (
    <g strokeLinejoin="round">
      <rect x={x} y={y + 3} width={w} height={h} rx="4" fill={PAL.paperShade} />
      <rect x={x} y={y} width={w} height={h} rx="4" fill={PAL.white} />
      <path d={`M${x + 2} ${y + 3}L${x + w / 2} ${y + h * 0.58}L${x + w - 2} ${y + 3}`} fill="none" stroke={PAL.mist} strokeWidth="3" strokeLinecap="round" />
    </g>
  );
}

export default {
  /* ---------------------------------------------------------------------------------------
   * l.greensafe: safe in the greenhouse
   * ------------------------------------------------------------------------------------- */

  // "drinken": to drink — Amina drinks from a water bottle (in the heat, drink enough)
  'w.drinken': () => (
    <g>
      <Bust who="amina" x={46} y={120} scale={0.84} />
      {/* Her forearm comes up from below */}
      <path d="M108 130L84 58" stroke="#2f8f3e" strokeWidth="13" strokeLinecap="round" />
      {/* The bottle, its cap at her lips, tipped up */}
      <g transform="translate(56 73) rotate(-34)">
        <rect x="-2" y="-5" width="8" height="10" rx="2" fill={PAL.blue} />
        <rect x="5" y="-6.5" width="8" height="13" rx="2" fill={PAL.ice} />
        <rect x="11" y="-10" width="40" height="20" rx="6" fill={PAL.ice} />
        <rect x="11" y="-10" width="22" height="20" rx="6" fill={PAL.sky} opacity=".6" />
        <rect x="11" y="2" width="40" height="8" rx="4" fill={PAL.sky} opacity=".35" />
        <path d="M16 -6H44" stroke={PAL.white} strokeWidth="2.4" strokeLinecap="round" opacity=".8" />
        {/* Her hand round the bottle */}
        <rect x="26" y="-14" width="16" height="28" rx="7" fill={SKIN.amina[0]} />
        <path d="M30 -12V12M35 -12V12" stroke={SKIN.amina[1]} strokeWidth="1.6" strokeLinecap="round" />
      </g>
    </g>
  ),

  // "de hitte": the heat — a hot sun over a thermometer that is red to the top
  'w.hitte': () => (
    <g>
      {/* The sun */}
      <g stroke={PAL.orange} strokeWidth="6" strokeLinecap="round">
        {Array.from({ length: 8 }, (_, i) => {
          const a = (i * 45 * Math.PI) / 180;
          return <path key={i} d={`M${44 + Math.cos(a) * 28} ${44 + Math.sin(a) * 28}L${44 + Math.cos(a) * 37} ${44 + Math.sin(a) * 37}`} />;
        })}
      </g>
      <Shade color={PAL.orange} opacity={0.8} at={[64, 54, 14, 26]}>
        <circle cx="44" cy="44" r="21" fill={PAL.yellow} />
      </Shade>
      <Shine d="M32 38Q34 30 41 28" color={PAL.yellowShine} opacity={0.8} />
      {/* The thermometer */}
      <rect x="78" y="20" width="20" height="70" rx="10" fill={PAL.paperShade} />
      <rect x="78" y="18" width="20" height="70" rx="10" fill={PAL.white} />
      <circle cx="88" cy="92" r="15" fill={PAL.paperShade} />
      <circle cx="88" cy="90" r="15" fill={PAL.white} />
      <rect x="84" y="24" width="8" height="64" rx="4" fill={PAL.red} />
      <circle cx="88" cy="90" r="10" fill={PAL.red} />
      <path d="M78 40H84M78 52H84M78 64H84" stroke={PAL.line} strokeWidth="2" strokeLinecap="round" />
      {/* Heat waves */}
      <g fill="none" stroke={PAL.orange} strokeWidth="4" strokeLinecap="round" opacity=".8">
        <path d="M18 92Q23 86 28 92T38 92T48 92" />
        <path d="M24 104Q29 98 34 104T44 104T54 104" />
      </g>
    </g>
  ),

  /* ---------------------------------------------------------------------------------------
   * l.workorder / l.handover: the work order, finishing the job
   * ------------------------------------------------------------------------------------- */

  // "de werkbon": the work order — a clipboard with the task (a wrench) and a list, two done
  'w.werkbon': () => (
    <g>
      <Shade color={PAL.cardDark} opacity={0.6} at={[104, 60, 14, 60]}>
        <rect x="24" y="14" width="72" height="96" rx="7" fill={PAL.card} />
      </Shade>
      <rect x="31" y="25" width="58" height="78" rx="3" fill={PAL.white} />
      {/* The task at the top */}
      <rect x="36" y="31" width="48" height="16" rx="3" fill="#e3f5ff" />
      <Wrench x={60} y={39} rotate={-12} len={34} color={PAL.blue} shade={PAL.blueShade} />
      {/* The list: two ticked, one still open */}
      {[56, 70, 84].map((ly, i) => (
        <g key={ly}>
          <rect x="37" y={ly} width="10" height="10" rx="2.4" fill={i < 2 ? PAL.leaf : PAL.paperShade} />
          {i < 2 && <path d={`M39.5 ${ly + 5}L41.6 ${ly + 7.4}L45 ${ly + 2.8}`} fill="none" stroke={PAL.white} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />}
          <path d={`M53 ${ly + 5}H${i === 1 ? 74 : 81}`} stroke={PAL.line} strokeWidth="2.8" strokeLinecap="round" />
        </g>
      ))}
      {/* The clip */}
      <rect x="44" y="8" width="32" height="16" rx="5" fill={PAL.steel} />
      <rect x="50" y="12" width="20" height="6" rx="3" fill={PAL.slate} />
    </g>
  ),

  // "lezen": to read — Jada reads an open book
  'w.lezen': () => (
    <g>
      <Bust who="jada" x={60} y={118} scale={0.8} expr="thinking" />
      {/* The open book in front of her */}
      <path d="M20 84Q40 76 60 84Q80 76 100 84V112H20Z" fill={PAL.blueShade} />
      <path d="M24 82Q42 74 59 82V108Q42 100 24 106Z" fill={PAL.white} />
      <path d="M61 82Q78 74 96 82V106Q78 100 61 108Z" fill={PAL.paperShade} />
      <path d="M31 87Q41 83 52 87M31 94Q41 90 52 94M68 87Q78 83 89 87M68 94Q78 90 89 94" fill="none" stroke={PAL.line} strokeWidth="2.2" strokeLinecap="round" />
    </g>
  ),

  // "de handtekening": the signature — a blue signature on the line of a form, the pen beside it
  'w.handtekening': () => (
    <g>
      <rect x="10" y="30" width="100" height="64" rx="5" fill={PAL.paperShade} />
      <rect x="10" y="26" width="100" height="64" rx="5" fill={PAL.white} />
      <path d="M20 38H62M20 46H50" stroke={PAL.line} strokeWidth="2.6" strokeLinecap="round" />
      {/* The line to sign on, with a small cross */}
      <path d="M20 78H96" stroke={PAL.line} strokeWidth="2.4" strokeLinecap="round" />
      <path d="M20 66L26 72M26 66L20 72" stroke={PAL.line} strokeWidth="2.2" strokeLinecap="round" />
      <path
        d="M30 72Q34 50 40 58Q44 66 38 74Q46 56 52 62Q54 70 58 64Q62 56 66 66Q70 74 74 62Q76 56 80 64"
        fill="none"
        stroke={PAL.blue}
        strokeWidth="3.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* The pen, its tip at the end of the signature */}
      <g transform="rotate(38 82 64)">
        <path d="M80 64L84 64L83 56H81Z" fill={PAL.slate} />
        <rect x="78.5" y="20" width="9" height="38" rx="3" fill={PAL.slateDark} />
        <rect x="78.5" y="20" width="9" height="8" rx="2" fill={PAL.yellow} />
      </g>
    </g>
  ),

  // "opruimen": to tidy up, to put away — a hand puts the wrench away in a crate, all neat
  'w.opruimen': () => (
    <g>
      <Ground cy={106} rx={42} />
      {/* Crate: back, what is already in it, the wrench going in, then the front */}
      <path d="M20 58H100L96 66H24Z" fill={PAL.blueShade} />
      <rect x="32" y="48" width="9" height="18" rx="3" fill={PAL.yellow} />
      <rect x="45" y="44" width="10" height="22" rx="3" fill={PAL.red} />
      <Wrench x={66} y={42} rotate={-90} len={44} />
      <Hand pose="hold" x={80} y={28} rotate={-90} scale={0.66} skin={SKIN.henk} sleeve={['#2d5a92', PAL.navyShade]} />
      <Shade color={PAL.blueShade} opacity={1} at={[106, 86, 16, 30]}>
        <path d="M18 62H102L98 104H22Z" fill={PAL.blue} />
      </Shade>
      <rect x="44" y="74" width="32" height="8" rx="4" fill={PAL.blueShade} />
      <Shine d="M24 68H46" opacity={0.45} width={3} />
      <Sparkle x={100} y={40} r={8} />
      <Sparkle x={16} y={42} r={5} color={PAL.yellowLight} />
    </g>
  ),

  /* ---------------------------------------------------------------------------------------
   * l.workshop / l.power: tools, sparks and noise; power off first
   * ------------------------------------------------------------------------------------- */

  // "het gereedschap": the tools — a red toolbox with a screwdriver, a hammer and a wrench in it
  'w.gereedschap': () => (
    <g>
      <Ground cy={106} rx={46} />
      {/* Tools sticking out of the box */}
      <g transform="rotate(-14 38 50)">
        <rect x="35" y="16" width="5" height="26" rx="2" fill={PAL.steel} />
        <rect x="31" y="34" width="13" height="26" rx="4" fill={PAL.yellow} />
      </g>
      <g transform="rotate(10 64 46)">
        <rect x="60" y="24" width="7" height="40" rx="3" fill={PAL.wood} />
        <rect x="50" y="16" width="28" height="11" rx="3" fill={PAL.slate} />
      </g>
      <Wrench x={86} y={42} rotate={-70} len={40} />
      {/* The box */}
      <path d="M44 62V54Q44 50 48 50H72Q76 50 76 54V62" fill="none" stroke={PAL.slate} strokeWidth="5" />
      <Shade color={PAL.redShade} opacity={1} at={[112, 84, 18, 30]}>
        <rect x="14" y="60" width="92" height="44" rx="6" fill={PAL.red} />
      </Shade>
      <rect x="14" y="70" width="92" height="5" fill={PAL.redShade} />
      <rect x="52" y="66" width="16" height="12" rx="2.4" fill={PAL.mist} />
      <Shine d="M20 84V96" opacity={0.45} />
    </g>
  ),

  // "zagen": to saw — a hand saws a wooden plank; sawdust falls from the cut
  'w.zagen': () => (
    <g>
      <Ground cy={106} rx={48} />
      {/* The plank */}
      <rect x="8" y="80" width="104" height="18" rx="3" fill={PAL.cardShade} />
      <rect x="8" y="78" width="104" height="14" rx="3" fill={PAL.card} />
      <path d="M14 84H40M74 86H104" stroke={PAL.cardShade} strokeWidth="1.6" strokeLinecap="round" />
      {/* The saw: the blade in the cut, the handle up right */}
      <g transform="rotate(-24 58 76)">
        <path d="M20 70L90 62V84L20 80Z" fill={PAL.mist} strokeLinejoin="round" stroke={PAL.mist} strokeWidth="2" />
        <path d="M22 80L90 84" stroke={PAL.steel} strokeWidth="2.4" />
        <path d="M24 72L86 65" stroke={PAL.white} strokeWidth="2" strokeLinecap="round" opacity=".7" />
        <path d="M86 56H104Q110 56 110 64V82Q110 90 102 90H88Z" fill={PAL.wood} />
        <rect x="93" y="64" width="9" height="16" rx="4" fill={PAL.cardDark} />
      </g>
      {/* Sawdust */}
      <g fill={PAL.cardShade}>
        <circle cx="40" cy="102" r="2.4" />
        <circle cx="47" cy="106" r="2" />
        <circle cx="34" cy="107" r="1.8" />
      </g>
      {/* Back and forth */}
      <g transform="rotate(-24 60 30)">
        <Arrow from={[52, 30]} to={[82, 30]} color={PAL.sky} width={5} head={9} />
        <Arrow from={[52, 30]} to={[24, 30]} color={PAL.sky} width={5} head={9} />
      </g>
    </g>
  ),

  // "de vonk": the spark — sparks fly off the end of a metal bar
  'w.vonk': () => (
    <g>
      <rect x="4" y="84" width="54" height="13" rx="4" fill={PAL.slate} transform="rotate(-32 30 90)" />
      <rect x="4" y="84" width="54" height="5" rx="2.5" fill={PAL.steel} transform="rotate(-32 30 90)" />
      {/* The flying sparks */}
      <g stroke={PAL.orange} strokeWidth="4" strokeLinecap="round">
        <path d="M58 60L80 34" />
        <path d="M60 62L98 48" />
        <path d="M60 66L100 74" />
      </g>
      <g stroke={PAL.yellow} strokeWidth="3.4" strokeLinecap="round">
        <path d="M56 58L64 22" />
        <path d="M62 64L92 92" />
      </g>
      <circle cx="82" cy="31" r="3.4" fill={PAL.orange} />
      <circle cx="101" cy="47" r="3" fill={PAL.orange} />
      <circle cx="103" cy="75" r="3" fill={PAL.orange} />
      <Sparkle x={58} y={62} r={22} />
      <Sparkle x={58} y={62} r={10} color={PAL.yellowShine} />
      <Sparkle x={66} y={18} r={6} color={PAL.yellowLight} />
      <Sparkle x={95} y={95} r={6} color={PAL.yellowLight} />
    </g>
  ),

  // "de gehoorbescherming": hearing protection — big orange ear muffs on their head band
  'w.gehoorbescherming': () => (
    <g>
      <path d="M30 66Q28 16 60 16Q92 16 90 66" fill="none" stroke={PAL.slate} strokeWidth="10" strokeLinecap="round" />
      <path d="M36 40Q42 24 58 22" fill="none" stroke={PAL.steel} strokeWidth="3" strokeLinecap="round" />
      {[[30, false], [90, true]].map(([cx, right]) => (
        <g key={String(cx)}>
          <rect x={(cx as number) - 7} y="52" width="14" height="22" rx="4" fill={PAL.slateDark} />
          <Shade color={PAL.orangeShade} opacity={1} at={[(cx as number) + 18, 78, 10, 30]}>
            <rect x={(cx as number) - 16} y="50" width="32" height="50" rx="14" fill={PAL.orange} />
          </Shade>
          <rect x={right ? (cx as number) - 20 : (cx as number) + 12} y="56" width="8" height="38" rx="4" fill={PAL.slateDark} />
          {!right && <Shine d={`M${(cx as number) - 10} 66Q${(cx as number) - 9} 58 ${(cx as number) - 3} 56`} opacity={0.6} />}
        </g>
      ))}
    </g>
  ),

  // "het lawaai": the noise — a loudspeaker blasting big red sound waves
  'w.lawaai': () => (
    <g>
      <Shade color={PAL.slateDark} opacity={1} at={[60, 60, 6, 40]}>
        <path d="M12 46Q12 42 16 42H32L56 20V100L32 78H16Q12 78 12 74Z" fill={PAL.slate} />
      </Shade>
      <rect x="16" y="48" width="12" height="24" rx="3" fill={PAL.slateDark} />
      <g fill="none" stroke={PAL.red} strokeLinecap="round">
        <path d="M68 44Q76 60 68 76" strokeWidth="7" />
        <path d="M80 34Q94 60 80 86" strokeWidth="7" />
        <path d="M92 24Q112 60 92 96" strokeWidth="7" />
      </g>
      <Motion x={60} y={18} dir={-60} spread={30} n={2} len={6} gap={4} color={PAL.red} width={3} />
    </g>
  ),

  // "de stekker": the plug — a grey plug with two pins, on its black cable
  'w.stekker': () => (
    <g>
      <path d="M60 86Q60 104 42 104Q22 104 22 90" fill="none" stroke={PAL.slate} strokeWidth="7" strokeLinecap="round" />
      {/* Pins */}
      <rect x="45" y="14" width="8" height="28" rx="4" fill={PAL.steel} />
      <rect x="67" y="14" width="8" height="28" rx="4" fill={PAL.steel} />
      <path d="M48 18V36M70 18V36" stroke={PAL.white} strokeWidth="2" strokeLinecap="round" opacity=".6" />
      {/* Body: the round front plate, then the grip */}
      <ellipse cx="60" cy="42" rx="32" ry="9" fill={PAL.paperShade} />
      <Shade color={PAL.steel} opacity={0.8} at={[96, 60, 16, 30]}>
        <path d="M28 42H92V58Q92 64 86 66L72 72V86H48V72L34 66Q28 64 28 58Z" fill={PAL.mist} />
      </Shade>
      <ellipse cx="60" cy="41" rx="30" ry="7" fill={PAL.white} />
      <path d="M50 74H70M50 80H70" stroke={PAL.steel} strokeWidth="2" strokeLinecap="round" />
      <Shine d="M33 50Q34 58 40 62" opacity={0.7} />
    </g>
  ),

  // "de elektricien": the electrician — Jada, with a lightning bolt badge and a tester screwdriver
  'w.elektricien': () => (
    <g>
      <Bust who="jada" x={48} y={116} scale={0.74} expr="pleased" />
      <Badge x={92} y={30} r={17} fill={PAL.navy} depth={PAL.navyShade}>
        <Bolt x={92} y={30} s={24} />
      </Badge>
      {/* Tester screwdriver */}
      <g transform="rotate(28 96 82)">
        <rect x="93.5" y="52" width="5" height="22" rx="2" fill={PAL.steel} />
        <rect x="90" y="70" width="12" height="34" rx="4" fill={PAL.red} />
        <rect x="93" y="76" width="6" height="12" rx="2" fill={PAL.redLight} />
      </g>
    </g>
  ),

  /* ---------------------------------------------------------------------------------------
   * l.garage / l.carjob: tyres, oil and the lift; the customer decides
   * ------------------------------------------------------------------------------------- */

  // "de band": the tyre — a car tyre on its rim, with tread around the edge
  'w.band': () => (
    <g>
      <Ground cy={104} rx={30} />
      <Tyre x={60} y={58} r={44} />
      <Shine d="M28 40Q34 26 46 20" opacity={0.35} width={4} />
    </g>
  ),

  // "de olie": the oil — a red oil can with a long spout; a golden drop of oil comes out
  'w.olie': () => (
    <g>
      <Ground cy={104} rx={34} />
      {/* Spout and handle */}
      <path d="M64 50L100 24" stroke={PAL.steel} strokeWidth="6" strokeLinecap="round" />
      <path d="M22 66Q10 66 12 80Q14 92 24 90" fill="none" stroke={PAL.slate} strokeWidth="6" strokeLinecap="round" />
      {/* Cone and body */}
      <path d="M38 62L52 44H64L76 62Z" fill={PAL.mist} strokeLinejoin="round" stroke={PAL.mist} strokeWidth="2" />
      <Shade color={PAL.redShade} opacity={1} at={[90, 84, 16, 30]}>
        <rect x="22" y="60" width="70" height="44" rx="10" fill={PAL.red} />
      </Shade>
      <rect x="34" y="72" width="44" height="18" rx="3" fill={PAL.yellow} />
      <path d="M44 81H68" stroke={PAL.yellowShade} strokeWidth="3" strokeLinecap="round" />
      <Shine d="M28 72Q28 66 33 64" opacity={0.6} />
      {/* The drop */}
      <path d="M102 34Q109 46 109 51A7 7 0 0 1 95 51Q95 46 102 34Z" fill={PAL.yellowShade} />
      <path d="M99 49Q99 46 101 44" stroke={PAL.yellowShine} strokeWidth="2" strokeLinecap="round" fill="none" />
    </g>
  ),

  // "de accu": the car battery — a dark battery block with a red + pole and a black - pole
  'w.accu': () => (
    <g>
      <Ground cy={104} rx={46} />
      {/* Poles */}
      <rect x="26" y="26" width="16" height="14" rx="3" fill={PAL.red} />
      <rect x="78" y="26" width="16" height="14" rx="3" fill={PAL.slateDark} />
      {/* Lid and body */}
      <rect x="14" y="36" width="92" height="14" rx="4" fill={PAL.slateDark} />
      <Shade color={PAL.slateDark} opacity={1} at={[112, 76, 14, 30]}>
        <rect x="16" y="46" width="88" height="58" rx="5" fill={PAL.slate} />
      </Shade>
      {/* Plus and minus on the front */}
      <path d="M34 62V78M26 70H42" stroke={PAL.red} strokeWidth="5" strokeLinecap="round" />
      <path d="M78 70H94" stroke={PAL.white} strokeWidth="5" strokeLinecap="round" />
      <rect x="22" y="88" width="76" height="8" rx="3" fill={PAL.yellow} />
      <Bolt x={60} y={70} s={22} />
      <Shine d="M20 56V70" opacity={0.4} />
    </g>
  ),

  // "de monteur": the mechanic — Amina with a big wrench and a tyre badge (the electrician is
  // Jada with a lightning badge)
  'w.monteur': () => (
    <g>
      <Bust who="amina" x={50} y={116} scale={0.74} expr="pleased" />
      <Badge x={93} y={30} r={17} fill={PAL.mist} depth={PAL.steel}>
        <Tyre x={93} y={30} r={12} />
      </Badge>
      <Wrench x={92} y={78} rotate={-62} len={62} color={PAL.steel} shade={PAL.slate} />
    </g>
  ),

  // "de proefrit": the test drive — a car driving off along the road, with its key
  'w.proefrit': () => (
    <g>
      <rect x="8" y="94" width="104" height="8" rx="4" fill={PAL.mist} />
      <path d="M20 98H34M52 98H66M84 98H98" stroke={PAL.white} strokeWidth="2.4" strokeLinecap="round" />
      <Car x={64} y={88} k={0.98} body={PAL.green} shade={PAL.greenShade} />
      <g stroke={PAL.line} strokeWidth="3.6" strokeLinecap="round" opacity=".8">
        <path d="M10 62H18M6 72H16M12 82H18" />
      </g>
      {/* The key */}
      <g transform="rotate(-20 32 30)">
        <circle cx="22" cy="30" r="10" fill={PAL.yellow} />
        <circle cx="20" cy="30" r="3.4" fill={PAL.yellowShade} />
        <rect x="30" y="27" width="22" height="6" rx="2" fill={PAL.steel} />
        <rect x="44" y="31" width="4" height="6" rx="1" fill={PAL.steel} />
        <rect x="38" y="31" width="4" height="5" rx="1" fill={PAL.steel} />
      </g>
    </g>
  ),

  // "het rijbewijs": the driving licence — a pinkish card with a photo and a car on it
  'w.rijbewijs': () => (
    <g>
      <rect x="10" y="30" width="100" height="64" rx="8" fill={PAL.purpleLight} />
      <rect x="10" y="26" width="100" height="64" rx="8" fill="#eedcf7" />
      <rect x="10" y="26" width="100" height="12" rx="6" fill={PAL.purpleLight} opacity=".6" />
      {/* The photo */}
      <rect x="18" y="44" width="30" height="38" rx="3" fill="#e3f5ff" />
      <circle cx="33" cy="58" r="7.5" fill={SKIN.amina[0]} />
      <path d="M20 82Q20 68 33 68Q46 68 46 82Z" fill={PAL.green} />
      <path d="M25 56Q25 48 33 48Q41 48 41 56L41 62Q36 52 25 60Z" fill={PAL.purple} />
      {/* A small car, and the details as lines */}
      <g transform="translate(78 58) scale(0.38)">
        <path d="M-44 -4V-14Q-44 -21 -37 -22L-26 -24L-15 -38Q-12 -41 -7 -41H14Q19 -41 22 -37L32 -24L39 -22Q46 -20 46 -13V-4Q46 0 42 0H-40Q-44 0 -44 -4Z" fill={PAL.purple} />
        <circle cx="-25" cy="0" r="10" fill={PAL.purpleShade} />
        <circle cx="26" cy="0" r="10" fill={PAL.purpleShade} />
      </g>
      <path d="M56 68H100M56 76H90M56 84H96" stroke={PAL.line} strokeWidth="2.6" strokeLinecap="round" />
    </g>
  ),

  // "repareren": to repair, to fix — a hand turns a big nut tight with a wrench
  'w.repareren': () => (
    <g>
      {/* The part with its nut */}
      <rect x="10" y="22" width="56" height="50" rx="8" fill={PAL.mist} />
      <rect x="10" y="66" width="56" height="8" rx="4" fill={PAL.steel} />
      <polygon points="38,32 50,39 50,53 38,60 26,53 26,39" fill={PAL.steel} stroke={PAL.steel} strokeWidth="2" strokeLinejoin="round" />
      <circle cx="38" cy="46" r="5" fill={PAL.slate} />
      {/* The wrench on the nut, handle down to the right, held by the hand */}
      <Wrench x={59} y={65} rotate={-135} len={64} color={PAL.blue} shade={PAL.blueShade} />
      <Hand pose="fist" x={88} y={92} rotate={-45} scale={0.7} skin={SKIN.jada} sleeve={[PAL.orange, PAL.orangeShade]} />
      <CurveArrow from={[72, 12]} to={[106, 48]} bend={12} color={PAL.sky} width={6} head={10} />
    </g>
  ),

  /* ---------------------------------------------------------------------------------------
   * l.placement / l.review: the placement, feedback
   * ------------------------------------------------------------------------------------- */

  // "de stage": the work placement — a school bag with a hard hat on it (learning at work)
  'w.stage': () => (
    <g>
      <Ground cy={106} rx={34} />
      {/* The bag */}
      <path d="M44 46V40Q44 32 52 32H68Q76 32 76 40V46" fill="none" stroke={PAL.purpleShade} strokeWidth="5" />
      <Shade color={PAL.purpleShade} opacity={1} at={[100, 80, 16, 40]}>
        <rect x="26" y="44" width="68" height="62" rx="14" fill={PAL.purple} />
      </Shade>
      <rect x="36" y="74" width="48" height="26" rx="7" fill={PAL.purpleShade} />
      <rect x="36" y="74" width="48" height="7" rx="3.5" fill={PAL.purpleLight} />
      <Shine d="M31 60Q32 52 38 50" opacity={0.5} />
      {/* The hard hat on top */}
      <path d="M36 46Q36 18 60 18Q84 18 84 46Z" fill={PAL.yellow} />
      <path d="M68 20Q84 26 84 46H70Z" fill={PAL.yellowShade} />
      <rect x="30" y="42" width="60" height="7" rx="3.5" fill={PAL.yellowShade} />
      <rect x="56" y="18" width="8" height="26" rx="3" fill={PAL.yellowLight} />
      <Shine d="M42 38Q43 28 50 24" color={PAL.yellowShine} opacity={0.8} />
    </g>
  ),

  // "de school": the school — a brick school building with a clock in the gable
  'w.school': () => (
    <g>
      <Ground cy={106} rx={50} />
      {/* Roof and gable */}
      <path d="M8 52L60 14L112 52Z" fill={PAL.redShade} strokeLinejoin="round" stroke={PAL.redShade} strokeWidth="4" />
      <Shade color={PAL.clayShade} opacity={1} at={[112, 76, 16, 50]}>
        <path d="M16 50L60 20L104 50V104H16Z" fill={PAL.clay} />
      </Shade>
      {/* Clock */}
      <circle cx="60" cy="40" r="9" fill={PAL.white} />
      <path d="M60 34V40L64 42" stroke={PAL.ink} strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Windows and door */}
      {[22, 40, 70, 88].map((wx) => (
        <rect key={wx} x={wx} y="60" width="11" height="14" rx="2" fill={PAL.ice} />
      ))}
      {[22, 88].map((wx) => (
        <rect key={wx} x={wx} y="82" width="11" height="14" rx="2" fill={PAL.ice} />
      ))}
      <path d="M50 104V86Q50 78 60 78Q70 78 70 86V104Z" fill={PAL.brown} />
    </g>
  ),

  // "het leerdoel": the learning goal — a target with an arrow in the middle
  'w.leerdoel': () => (
    <g>
      <Ground cy={108} rx={26} ry={3.5} />
      <path d="M50 92L42 108M70 92L78 108" stroke={PAL.wood} strokeWidth="5" strokeLinecap="round" />
      <circle cx="56" cy="62" r="40" fill={PAL.redShade} />
      <circle cx="56" cy="60" r="40" fill={PAL.red} />
      <circle cx="56" cy="60" r="29" fill={PAL.paper} />
      <circle cx="56" cy="60" r="19" fill={PAL.red} />
      <circle cx="56" cy="60" r="9" fill={PAL.paper} />
      {/* The arrow, in the bull's eye */}
      <path d="M57 59L98 18" stroke={PAL.slate} strokeWidth="4.6" strokeLinecap="round" />
      <path d="M92 14L102 4L104 16L114 18L104 28Z" fill={PAL.sky} strokeLinejoin="round" stroke={PAL.sky} strokeWidth="2" />
      <Shine d="M26 44Q32 30 44 24" opacity={0.5} />
    </g>
  ),

  // "het portfolio": the portfolio — a blue folder with your work in it: papers, a photo and a
  // certificate with a ribbon
  'w.portfolio': () => (
    <g>
      {/* Back of the folder with its tab */}
      <path d="M12 30Q12 26 16 26H44L50 34H104Q108 34 108 38V100H12Z" fill={PAL.blueShade} />
      {/* What is inside */}
      <g transform="rotate(-8 40 40)">
        <Paper x={22} y={22} w={40} h={50} lines={4} />
      </g>
      <g transform="rotate(6 76 40)">
        <rect x="58" y="24" width="40" height="48" rx="3" fill={PAL.paperShade} />
        <rect x="58" y="22" width="40" height="48" rx="3" fill={PAL.white} />
        <circle cx="78" cy="42" r="9" fill={PAL.yellow} />
        <path d="M73 49L70 62L78 57L86 62L83 49" fill={PAL.red} />
        <path d="M66 30H90" stroke={PAL.line} strokeWidth="2.4" strokeLinecap="round" />
      </g>
      {/* Front of the folder */}
      <Shade color={PAL.blueShade} opacity={1} at={[114, 84, 14, 30]}>
        <path d="M8 58Q8 54 12 54H108Q112 54 112 58L108 100Q108 104 104 104H16Q12 104 12 100Z" fill={PAL.blue} />
      </Shade>
      <rect x="44" y="70" width="32" height="10" rx="3" fill={PAL.white} opacity=".9" />
      <Shine d="M16 64V84" opacity={0.45} />
    </g>
  ),

  /* ---------------------------------------------------------------------------------------
   * l.council / l.police: voting; the police
   * ------------------------------------------------------------------------------------- */

  // "stemmen": to vote — a hand puts the folded ballot paper in the ballot box
  'w.stemmen': () => (
    <g>
      <Ground cy={106} rx={42} />
      {/* The ballot paper, half in the slot */}
      <rect x="48" y="28" width="26" height="40" rx="2" fill={PAL.paperShade} />
      <rect x="46" y="26" width="26" height="40" rx="2" fill={PAL.white} />
      <rect x="51" y="44" width="8" height="8" rx="1" fill={PAL.red} />
      <path d="M62 48H68M51 36H67" stroke={PAL.line} strokeWidth="2" strokeLinecap="round" />
      <Hand pose="hold" x={73} y={32} rotate={-90} scale={0.66} skin={SKIN.amina} sleeve={[PAL.purple, PAL.purpleShade]} />
      {/* The box: lid with its slot, then the front */}
      <path d="M22 62H98L104 70H16Z" fill={PAL.mist} />
      <rect x="40" y="63" width="40" height="4" rx="2" fill={PAL.slateDark} />
      <Shade color={PAL.steel} opacity={1} at={[112, 88, 14, 30]}>
        <rect x="16" y="68" width="88" height="38" rx="4" fill={PAL.paperShade} />
      </Shade>
      <rect x="16" y="68" width="88" height="6" fill={PAL.mist} />
      <rect x="48" y="80" width="24" height="16" rx="3" fill={PAL.orange} />
    </g>
  ),

  // "de agent": the police officer — Henk in a dark-blue police cap and uniform, with a badge
  // (neutral, friendly, no weapon)
  'w.agent': () => (
    <g>
      <Bust who="henk" x={60} y={118} scale={0.76} />
      {/* The cap */}
      <g>
        <path d="M34 32Q34 14 60 13Q86 14 86 32Z" fill={PAL.navy} />
        <rect x="34" y="30" width="52" height="9" fill={PAL.white} />
        <rect x="34" y="31.5" width="52" height="6" fill={PAL.blue} />
        <path d="M34 38H86Q84 46 60 46Q36 46 34 38Z" fill={PAL.slateDark} />
        <circle cx="60" cy="25" r="5" fill={PAL.yellow} />
      </g>
      {/* Badge on the chest and the shoulder patch */}
      <path d="M78 96L84 93L90 96V103Q90 107 84 110Q78 107 78 103Z" fill={PAL.yellow} />
      <rect x="31" y="92" width="10" height="5" rx="2" fill={PAL.blue} />
    </g>
  ),

  /* ---------------------------------------------------------------------------------------
   * l.login / l.phish: logging in; fake e-mails
   * ------------------------------------------------------------------------------------- */

  // "het scherm": the screen — a flat screen on its stand, showing two windows
  'w.scherm': () => (
    <g>
      <Ground cy={104} rx={30} ry={4} />
      <path d="M52 82H68L72 98H48Z" fill={PAL.steel} />
      <rect x="36" y="96" width="48" height="7" rx="3.5" fill={PAL.slate} />
      <Shade color={PAL.slateDark} opacity={1} at={[116, 50, 10, 40]}>
        <rect x="8" y="14" width="104" height="72" rx="7" fill={PAL.slate} />
      </Shade>
      <rect x="14" y="20" width="92" height="58" rx="3" fill={PAL.sky} />
      <rect x="20" y="26" width="46" height="34" rx="3" fill={PAL.white} />
      <rect x="20" y="26" width="46" height="7" rx="3" fill={PAL.ice} />
      <path d="M26 41H58M26 49H50" stroke={PAL.line} strokeWidth="2.4" strokeLinecap="round" />
      <rect x="62" y="44" width="38" height="28" rx="3" fill={PAL.paper} />
      <rect x="62" y="44" width="38" height="6" rx="3" fill={PAL.yellowLight} />
      <Shine d="M18 70L32 56" opacity={0.35} width={4} />
    </g>
  ),

  // "vergrendelen": to lock (a screen or a phone) — a finger taps the padlock: the phone locks
  'w.vergrendelen': () => (
    <g>
      <Shade color={PAL.slateDark} opacity={1} at={[84, 60, 8, 60]}>
        <rect x="26" y="8" width="56" height="102" rx="10" fill={PAL.slate} />
      </Shade>
      <rect x="31" y="16" width="46" height="86" rx="5" fill={PAL.navy} />
      <Padlock x={54} y={66} w={28} />
      <Motion x={54} y={50} dir={-90} spread={100} n={3} len={6} gap={20} color={PAL.ice} width={2.6} />
      <Hand pose="point" x={82} y={90} rotate={-28} scale={0.74} skin={SKIN.bram} sleeve={[PAL.blue, PAL.blueShade]} />
    </g>
  ),

  // "de afzender": the sender — Bram sends an envelope off (the e-mail comes from him)
  'w.afzender': () => (
    <g>
      <Bust who="bram" x={34} y={118} scale={0.6} expr="pleased" />
      <CurveArrow from={[56, 64]} to={[70, 40]} bend={-6} color={PAL.sky} width={5} head={9} />
      <g transform="rotate(-12 86 32)">
        <Envelope x={64} y={14} w={44} h={32} />
      </g>
      <Motion x={70} y={52} dir={150} spread={40} n={2} len={7} gap={2} color={PAL.line} width={2.8} />
    </g>
  ),

  // "klikken": to click — a finger clicks the left button of a mouse
  'w.klikken': () => (
    <g>
      <Ground cx={50} cy={96} rx={28} ry={4} />
      <Shade color={PAL.steel} opacity={0.9} at={[80, 60, 14, 40]}>
        <rect x="22" y="22" width="56" height="72" rx="26" fill={PAL.mist} />
      </Shade>
      <path d="M50 22V50M22 50H78" stroke={PAL.steel} strokeWidth="2" />
      <path d="M48 22H46Q22 22 22 46V48H48Z" fill={PAL.sky} />
      <rect x="47" y="30" width="6" height="12" rx="3" fill={PAL.slate} />
      <Hand pose="point" x={70} y={58} rotate={-50} scale={0.72} skin={SKIN.henk} sleeve={['#2d5a92', PAL.navyShade]} />
      <Motion x={34} y={30} dir={-135} spread={80} n={3} len={7} gap={12} color={PAL.sky} width={3} />
    </g>
  ),

  // "de bijlage": the attachment — a paper clip holding on to a document
  'w.bijlage': () => (
    <g>
      <g transform="rotate(4 60 60)">
        <Paper x={28} y={18} w={62} h={86} lines={7} />
      </g>
      <path
        d="M42 64V20A9 9 0 0 1 60 20V70A13 13 0 0 1 34 70V30"
        fill="none"
        stroke={PAL.steel}
        strokeWidth="5.4"
        strokeLinecap="round"
        transform="rotate(-16 46 40)"
      />
    </g>
  ),

  // "de ICT-afdeling": the IT department — Amina with a headset, behind a laptop with a gear
  'w.ictafdeling': () => (
    <g>
      <Ground cy={108} rx={46} ry={4} />
      <Bust who="amina" x={60} y={96} scale={0.62} expr="pleased" />
      {/* Headset */}
      <path d="M38 44Q38 22 60 22Q82 22 82 44" fill="none" stroke={PAL.slateDark} strokeWidth="4" />
      <rect x="33" y="40" width="9" height="15" rx="4" fill={PAL.slateDark} />
      <rect x="78" y="40" width="9" height="15" rx="4" fill={PAL.slateDark} />
      <path d="M37 54Q38 64 48 66" fill="none" stroke={PAL.slateDark} strokeWidth="2.4" strokeLinecap="round" />
      {/* The laptop, seen from the back */}
      <Shade color={PAL.slateDark} opacity={1} at={[104, 88, 10, 30]}>
        <path d="M22 70Q22 66 26 66H94Q98 66 98 70L100 104H20Z" fill={PAL.slate} />
      </Shade>
      <rect x="14" y="102" width="92" height="6" rx="3" fill={PAL.steel} />
      <Gear x={60} y={85} r={11} color={PAL.ice} hole={PAL.slate} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
