import { useId, type JSX, type ReactNode } from 'react';
import { CastHead, type CharacterId } from '../components/Characters';
import type { Emotion, Expr } from '../components/Faces';
import { Arrow, Box, Bubble, Bust, CurveArrow, ExclaimMark, Ground, Hand, Motion, PAL, SKIN, Shade, Shine, Sparkle } from './kit';

/**
 * Word pictures, group 24 (keyed by id): words that had only their emoji, from nine lessons.
 * The words of one lesson are shown side by side in a choice, so each has its own main shape:
 *  - your details (l.details): the first name (one person with a name sticker), the last name
 *    (a family under one shared name card), to spell (letter tiles in a bubble), the phone number
 *    (a phone with its keypad), the form (a sheet with empty fields and a pen);
 *  - papers and your job (l.permit): the papers (an open folder full of documents), the employee
 *    (Bram with his work pass on a lanyard), the language class (a board with a picture and its word);
 *  - children (l.kids): pregnant (Amina, a hand on her round belly), the daycare (a teddy bear and
 *    toy blocks), to pick up (a parent and a child walking home hand in hand), a sick child (a child
 *    in bed and a thermometer);
 *  - the e-mail (a laptop with an envelope on the screen);
 *  - the body (l.body): the arm (a bent arm), the hand (an open hand), the eye (one big eye);
 *  - fit for work (l.healthy): to sleep (Henk asleep on his pillow, the moon), the breakfast
 *    (bread with cheese and milk, the sun), to move (Jada walking), tired (Bram with an empty battery);
 *  - to save money (a jar of coins); when your job ends: the key (a house key), to move house
 *    (a box going from one house to the next), the van (a small van);
 *  - the greenhouse (l.harvest, l.greensafe): the crop (young plants in the soil), the row (a row of
 *    plants going back), to harvest (Amina picks a tomato), to sort (red and green tomatoes into two
 *    crates), the crate (one crate), the crop sprays (a can with a warning diamond), sprayed (a plant
 *    with drops and a warning sign), the picking trolley (a trolley on the pipe rails), to bend down
 *    (Amina bending over to a low plant).
 * Children have no cast member, so a child is a small figure in the cast's style (ChildHead).
 * See docs/tekenstijl.md and ./kit.tsx.
 */

const TINT = '#e3f5ff';
const TROUSERS = PAL.blueShade;

/** A cast member's own head (no bust), its neck base at (x, y), `s` times the bust's size. */
function Head({ who, x, y, s = 0.5, rot = 0, expr = 'neutral', emotion }: {
  who: CharacterId; x: number; y: number; s?: number; rot?: number; expr?: Expr; emotion?: Emotion;
}) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${s}) translate(-60 -96)`}>
      <CastHead who={who} expr={expr} emotion={emotion} gaze={[0, 0]} />
    </g>
  );
}

/** A child's head in the cast's flat style, centred on (x, y), radius `r`. */
function ChildHead({ x, y, r = 12, skin = SKIN.bram, hair = '#6b3f22', sick = false }: {
  x: number; y: number; r?: number; skin?: [string, string]; hair?: string; sick?: boolean;
}) {
  const k = r / 12;
  return (
    <g transform={`translate(${x} ${y}) scale(${k})`}>
      <circle cx="0" cy="-1.5" r="13.2" fill={hair} />
      <circle cx="-12" cy="2" r="3.2" fill={skin[0]} />
      <circle cx="12" cy="2" r="3.2" fill={skin[1]} />
      <Shade color={skin[1]} opacity={1} at={[13, 4, 6, 16]}>
        <ellipse cx="0" cy="2" rx="11.6" ry="11.2" fill={skin[0]} />
      </Shade>
      {/* Fringe */}
      <path d="M-12.4 -1Q-12 -13 0 -13.6Q12 -13 12.4 -1Q8 -6.5 1 -7Q-4 -4 -12.4 -1Z" fill={hair} />
      {sick ? (
        <>
          <path d="M-7 3Q-4.6 4.6 -2.4 3M2.4 3Q4.6 4.6 7 3" fill="none" stroke={PAL.ink} strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="-7.4" cy="7.4" r="2.6" fill={PAL.blush} opacity=".55" />
          <circle cx="7.4" cy="7.4" r="2.6" fill={PAL.blush} opacity=".55" />
          <path d="M-2.6 10Q0 8.6 2.6 10" fill="none" stroke={PAL.mouth} strokeWidth="1.6" strokeLinecap="round" />
        </>
      ) : (
        <>
          <ellipse cx="-4.6" cy="2.4" rx="1.6" ry="2.1" fill={PAL.ink} />
          <ellipse cx="4.6" cy="2.4" rx="1.6" ry="2.1" fill={PAL.ink} />
          <path d="M-3.2 7.6Q0 10.4 3.2 7.6" fill="none" stroke={PAL.mouth} strokeWidth="1.6" strokeLinecap="round" />
        </>
      )}
    </g>
  );
}

/** A tomato centred on (x, y): red (or still green), a green star of a calyx and a highlight. */
function Tomato({ x, y, r = 8, ripe = true }: { x: number; y: number; r?: number; ripe?: boolean }) {
  const [c, sh] = ripe ? [PAL.red, PAL.redShade] : [PAL.leaf, PAL.leafShade];
  return (
    <g>
      <Shade color={sh} opacity={1} at={[x + r * 0.9, y + r * 0.4, r * 0.6, r * 1.2]}>
        <circle cx={x} cy={y} r={r} fill={c} />
      </Shade>
      <path d={`M${x - r * 0.45} ${y - r * 0.8}L${x} ${y - r * 0.55}L${x + r * 0.45} ${y - r * 0.8}`} fill="none" stroke={PAL.greenShade} strokeWidth={Math.max(1.6, r * 0.24)} strokeLinecap="round" strokeLinejoin="round" />
      <path d={`M${x - r * 0.55} ${y - r * 0.1}Q${x - r * 0.5} ${y - r * 0.5} ${x - r * 0.15} ${y - r * 0.55}`} fill="none" stroke={PAL.white} strokeWidth={Math.max(1.4, r * 0.2)} strokeLinecap="round" opacity=".55" />
    </g>
  );
}

/** A plastic harvest crate seen from the front and a little from above, front face (x, y) w x h. */
function Crate({ x, y, w, h, color = PAL.blue, shade = PAL.blueShade, children }: {
  x: number; y: number; w: number; h: number; color?: string; shade?: string; children?: ReactNode;
}) {
  const d = Math.round(h * 0.2);
  const slots = Math.max(2, Math.round(w / 16));
  return (
    <g>
      {/* The inside (back wall) and what lies in it */}
      <path d={`M${x} ${y}L${x + d} ${y - d}H${x + w + d}L${x + w} ${y}Z`} fill={shade} />
      {children}
      {/* Side and front */}
      <path d={`M${x + w} ${y}L${x + w + d} ${y - d}V${y + h - d}L${x + w} ${y + h}Z`} fill={shade} />
      <rect x={x} y={y} width={w} height={h} rx="3" fill={color} />
      {Array.from({ length: slots }, (_, i) => {
        const sw = (w - 12) / slots;
        return <rect key={i} x={x + 6 + i * sw + sw * 0.2} y={y + h * 0.42} width={sw * 0.6} height={h * 0.42} rx="2" fill={shade} />;
      })}
      <rect x={x + w / 2 - w * 0.16} y={y + h * 0.12} width={w * 0.32} height={Math.max(4, h * 0.16)} rx="2.5" fill={PAL.slateDark} />
    </g>
  );
}

/** A simple house: wall, roof and door; (x, y) is the bottom-left corner, `w` wide. */
function House({ x, y, w, wall = PAL.paper, roof = PAL.clay, roofShade = PAL.clayShade }: {
  x: number; y: number; w: number; wall?: string; roof?: string; roofShade?: string;
}) {
  const h = w * 0.78;
  return (
    <g>
      <rect x={x + 2} y={y - h} width={w - 4} height={h} fill={wall} />
      <rect x={x + w * 0.62} y={y - h} width={w * 0.38 - 2} height={h} fill={PAL.paperShade} />
      <path d={`M${x - 3} ${y - h + 2}L${x + w / 2} ${y - h - w * 0.5}L${x + w + 3} ${y - h + 2}Z`} fill={roof} stroke={roof} strokeWidth="3" strokeLinejoin="round" />
      <path d={`M${x + w / 2} ${y - h - w * 0.5}L${x + w + 3} ${y - h + 2}H${x + w / 2}Z`} fill={roofShade} />
      <rect x={x + w * 0.38} y={y - h * 0.55} width={w * 0.26} height={h * 0.55} rx="1.5" fill={PAL.wood} />
    </g>
  );
}

/** A leafy young plant growing from (x, y) at the soil, `h` tall. */
function Plant({ x, y, h, lean = 0 }: { x: number; y: number; h: number; lean?: number }) {
  const k = h / 60;
  return (
    <g transform={`translate(${x} ${y}) rotate(${lean}) scale(${k})`}>
      <path d="M0 0V-56" stroke={PAL.greenShade} strokeWidth="4" strokeLinecap="round" />
      <ellipse cx="-11" cy="-14" rx="13" ry="6.5" fill={PAL.green} transform="rotate(-24 -11 -14)" />
      <ellipse cx="11" cy="-24" rx="13" ry="6.5" fill={PAL.greenShade} transform="rotate(24 11 -24)" />
      <ellipse cx="-10" cy="-36" rx="12" ry="6" fill={PAL.leaf} transform="rotate(-30 -10 -36)" />
      <ellipse cx="9" cy="-46" rx="10" ry="5.4" fill={PAL.green} transform="rotate(30 9 -46)" />
      <ellipse cx="0" cy="-58" rx="5" ry="8" fill={PAL.leaf} />
    </g>
  );
}

/** A name card: a coloured header band over a white field with one bold line (the name). */
function NameCard({ x, y, w, h, band = PAL.red, rot = 0 }: { x: number; y: number; w: number; h: number; band?: string; rot?: number }) {
  const bh = h * 0.34;
  return (
    <g transform={`rotate(${rot} ${x + w / 2} ${y + h / 2})`}>
      <rect x={x} y={y + 3} width={w} height={h} rx="5" fill={PAL.paperShade} />
      <rect x={x} y={y} width={w} height={h} rx="5" fill={PAL.white} />
      <path d={`M${x} ${y + bh}V${y + 5}Q${x} ${y} ${x + 5} ${y}H${x + w - 5}Q${x + w} ${y} ${x + w} ${y + 5}V${y + bh}Z`} fill={band} />
      <path d={`M${x + w * 0.18} ${y + bh + (h - bh) * 0.52}H${x + w * 0.82}`} stroke={PAL.ink} strokeWidth="4.2" strokeLinecap="round" />
    </g>
  );
}

/** A drawn capital letter (stroke paths, no font) centred on (x, y), about 12 tall. */
function Letter({ ch, x, y, color = PAL.navy }: { ch: 'A' | 'B' | 'C'; x: number; y: number; color?: string }) {
  const d = {
    A: 'M-4.6 6L0 -6L4.6 6M-2.8 1.8H2.8',
    B: 'M-3.6 6V-6H1Q4.2 -6 4.2 -3Q4.2 0 1 0H-3.6M1 0Q4.8 0 4.8 3Q4.8 6 1 6H-3.6',
    C: 'M4.4 -3.8Q3 -6 0.4 -6Q-4.8 -6 -4.8 0Q-4.8 6 0.4 6Q3 6 4.4 3.8',
  }[ch];
  return <path d={d} transform={`translate(${x} ${y})`} fill="none" stroke={color} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />;
}

/** A pen lying at an angle, its tip at (x, y). */
function Pen({ x, y, rot = 35, color = PAL.blue, shade = PAL.blueShade }: { x: number; y: number; rot?: number; color?: string; shade?: string }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot})`}>
      <rect x="-4.5" y="-44" width="9" height="34" rx="2.5" fill={color} />
      <rect x="0.5" y="-44" width="4" height="34" rx="2" fill={shade} />
      <path d="M-4.5 -10L0 0L4.5 -10Z" fill={PAL.paperShade} stroke={PAL.paperShade} strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M-1.4 -3.2L0 0L1.4 -3.2Z" fill={PAL.ink} />
      <rect x="-4.5" y="-48" width="9" height="7" rx="2.5" fill={PAL.slate} />
    </g>
  );
}

/** A thermometer, bulb at (x, y), leaning `rot` degrees, the red column high (fever). */
function Thermometer({ x, y, rot = 18, len = 40 }: { x: number; y: number; rot?: number; len?: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot})`}>
      <rect x="-5.5" y={-len} width="11" height={len} rx="5.5" fill={PAL.paperShade} />
      <rect x="-5.5" y={-len} width="9" height={len} rx="4.5" fill={PAL.white} />
      <rect x="-2" y={-len * 0.82} width="4" height={len * 0.82} rx="2" fill={PAL.red} />
      <circle cx="0" cy="2" r="8" fill={PAL.red} />
      <circle cx="2.4" cy="4" r="4.6" fill={PAL.redShade} opacity=".6" />
      <path d={`M3 ${-len * 0.7}H6M3 ${-len * 0.5}H6M3 ${-len * 0.3}H6`} stroke={PAL.line} strokeWidth="1.4" strokeLinecap="round" />
    </g>
  );
}

/** A coin centred on (x, y): a gold disc with a darker rim. */
function Coin({ x, y, r = 8 }: { x: number; y: number; r?: number }) {
  return (
    <g>
      <circle cx={x} cy={y + r * 0.18} r={r} fill={PAL.yellowShade} />
      <circle cx={x} cy={y} r={r} fill={PAL.yellow} />
      <circle cx={x} cy={y} r={r * 0.62} fill="none" stroke={PAL.yellowShade} strokeWidth={Math.max(1.4, r * 0.16)} />
    </g>
  );
}

/** A coin lying flat in a stack, seen a little from above, centred on (x, y). */
function FlatCoin({ x, y, rx = 11 }: { x: number; y: number; rx?: number }) {
  return (
    <g>
      <ellipse cx={x} cy={y + 2.4} rx={rx} ry={rx * 0.36} fill={PAL.yellowShade} />
      <ellipse cx={x} cy={y} rx={rx} ry={rx * 0.36} fill={PAL.yellow} />
    </g>
  );
}

/** One eye, clipped so the iris stays inside the white. */
function Eye() {
  const id = `eye-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
  const shape = 'M14 64Q60 22 106 64Q60 100 14 64Z';
  return (
    <g>
      <defs>
        <clipPath id={id}><path d={shape} /></clipPath>
      </defs>
      <path d={shape} fill={PAL.white} />
      <g clipPath={`url(#${id})`}>
        <path d="M14 64Q60 100 106 64V100H14Z" fill={PAL.paperShade} opacity=".9" />
        <circle cx="60" cy="62" r="21" fill={PAL.green} />
        <circle cx="64" cy="66" r="17" fill={PAL.greenShade} opacity=".5" />
        <circle cx="60" cy="62" r="10" fill={PAL.ink} />
        <circle cx="53" cy="55" r="5" fill={PAL.white} />
        <path d="M14 64Q60 22 106 64V40H14Z" fill="#000" opacity=".1" />
      </g>
    </g>
  );
}

/** A plain flat sheet with a depth edge; children draw on it. */
function Sheet({ x, y, w, h, rot = 0, fill = PAL.white, children }: { x: number; y: number; w: number; h: number; rot?: number; fill?: string; children?: ReactNode }) {
  return (
    <g transform={`rotate(${rot} ${x + w / 2} ${y + h / 2})`}>
      <rect x={x} y={y + 3} width={w} height={h} rx="3.5" fill={PAL.paperShade} />
      <rect x={x} y={y} width={w} height={h} rx="3.5" fill={fill} />
      {children}
    </g>
  );
}

export default {
  // "de voornaam": the first name — Jada, on her own, with a name sticker on her chest
  'w.voornaam': () => (
    <g>
      <Bust who="jada" x={50} y={122} scale={0.76} expr="pleased" bold />
      <NameCard x={60} y={78} w={46} h={30} band={PAL.red} rot={-8} />
    </g>
  ),

  // "de achternaam": the last name, the family name — a family of three under one shared name card
  'w.achternaam': () => (
    <g>
      <NameCard x={26} y={10} w={68} h={28} band={PAL.sky} />
      {/* A bracket from the card over all three of them */}
      <path d="M20 54V47H100V54M60 47V41" fill="none" stroke={PAL.line} strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
      <Bust who="amina" x={34} y={124} scale={0.5} expr="pleased" bold />
      <Bust who="bram" x={86} y={124} scale={0.5} expr="pleased" bold />
      <rect x="48" y="96" width="24" height="24" rx="8" fill={PAL.orange} />
      <rect x="62" y="96" width="10" height="24" rx="5" fill={PAL.orangeShade} />
      <ChildHead x={60} y={86} r={11} skin={SKIN.henk} hair="#6b3f22" />
    </g>
  ),

  // "spellen": to spell — Bram says the letters one by one: A, B, C in tiles in his bubble
  'w.spellen': () => (
    <g>
      <Bubble x={42} y={12} w={68} h={40} tail="left">
        {[56, 76, 96].map((cx, i) => (
          <g key={cx}>
            <rect x={cx - 8} y={25} width="16" height="17" rx="3" fill={PAL.yellowShade} />
            <rect x={cx - 8} y={23} width="16" height="17" rx="3" fill={PAL.yellowShine} />
            <Letter ch={(['A', 'B', 'C'] as const)[i]} x={cx} y={31.5} />
          </g>
        ))}
      </Bubble>
      <Bust who="bram" x={36} y={124} scale={0.6} talk bold />
    </g>
  ),

  // "het telefoonnummer": the phone number — a phone with its keypad, the number typed above it
  // and the green call button
  'w.telefoonnummer': () => (
    <g>
      <Ground cy={108} rx={26} ry={3.5} />
      <Shade color={PAL.slateDark} opacity={1} at={[88, 60, 10, 60]}>
        <rect x="33" y="8" width="54" height="100" rx="10" fill={PAL.slate} />
      </Shade>
      <rect x="38" y="16" width="44" height="84" rx="5" fill={PAL.paper} />
      {/* The typed number: a row of dark digits as bars */}
      {[44, 52, 60, 68].map((x) => <rect key={x} x={x} y={22} width="6" height="9" rx="2" fill={PAL.slate} />)}
      {/* Keypad */}
      {[44, 55, 66, 77].map((y) => [49, 60, 71].map((x) => <circle key={`${x}-${y}`} cx={x} cy={y} r="4.4" fill={PAL.mist} />))}
      <circle cx="60" cy="90" r="7" fill={PAL.ok} />
      <path d="M56.4 88.2Q57 93.6 63.6 92.6" fill="none" stroke={PAL.white} strokeWidth="2.6" strokeLinecap="round" />
      <Shine d="M37 22Q38 14 44 13" opacity={0.4} />
    </g>
  ),

  // "het formulier": the form — a sheet with empty fields to fill in, the first one filled, and a pen
  'w.formulier': () => (
    <g>
      <Sheet x={20} y={10} w={68} h={94}>
        <rect x="28" y="18" width="30" height="7" rx="2.5" fill={PAL.navy} />
        {[34, 54, 74].map((y, i) => (
          <g key={y}>
            <path d={`M28 ${y}H${i === 1 ? 44 : 50}`} stroke={PAL.line} strokeWidth="2.6" strokeLinecap="round" />
            <rect x="28" y={y + 4} width="52" height="11" rx="2.5" fill={TINT} />
            <rect x="28" y={y + 13} width="52" height="2" rx="1" fill={PAL.ice} />
          </g>
        ))}
        <path d="M32 43.5Q36 39 39 43.5T46 43.5T53 43.5" fill="none" stroke={PAL.blueShade} strokeWidth="2.2" strokeLinecap="round" />
      </Sheet>
      <Pen x={70} y={86} rot={34} />
    </g>
  ),

  // "de papieren": the papers — an open folder, full of documents (one with a passport photo)
  'w.papieren': () => (
    <g>
      <Ground cy={106} rx={44} ry={4} />
      {/* Back of the folder with its tab */}
      <path d="M12 102V34Q12 30 16 30H40L46 36H104Q108 36 108 40V102Z" fill={PAL.cardShade} />
      <Sheet x={22} y={22} w={52} h={62} rot={-7}>
        <path d="M30 36H66M30 46H62M30 56H66" stroke={PAL.line} strokeWidth="2.6" strokeLinecap="round" />
      </Sheet>
      <Sheet x={48} y={16} w={50} h={64} rot={6} fill={TINT}>
        <rect x="55" y="24" width="15" height="19" rx="2" fill={PAL.purple} />
        <circle cx="62.5" cy="31" r="4" fill={SKIN.amina[0]} />
        <path d="M76 28H90M76 36H88M56 52H90M56 60H84" stroke={PAL.line} strokeWidth="2.6" strokeLinecap="round" />
      </Sheet>
      {/* Front flap */}
      <Shade color={PAL.cardShade} opacity={1} at={[110, 80, 14, 40]}>
        <path d="M10 58Q10 54 14 54H106Q110 54 110 58L106 100Q105.6 104 102 104H18Q14.4 104 14 100Z" fill={PAL.card} />
      </Shade>
      <Shine d="M18 62H40" color={PAL.yellowShine} opacity={0.7} />
    </g>
  ),

  // "de werknemer": the employee — Bram at work, his work pass (photo and name) on a lanyard
  'w.werknemer': () => (
    <g>
      <Bust who="bram" x={56} y={124} scale={0.78} expr="pleased" bold />
      <path d="M48 93L58 104M70 93L62 104" stroke={PAL.sky} strokeWidth="3" strokeLinecap="round" />
      <rect x="45" y="104" width="30" height="22" rx="3.5" fill={PAL.paperShade} />
      <rect x="45" y="102" width="30" height="22" rx="3.5" fill={PAL.white} />
      <rect x="45" y="102" width="30" height="6" rx="3" fill={PAL.sky} />
      <rect x="49" y="110" width="9" height="10" rx="1.6" fill={PAL.blueLight} />
      <path d="M61 112H71M61 117H68" stroke={PAL.line} strokeWidth="2.2" strokeLinecap="round" />
    </g>
  ),

  // "de taalles": the language class — a board with a picture (an apple) and its word next to it,
  // Amina in class in front of it
  'w.taalles': () => (
    <g>
      <rect x="10" y="10" width="100" height="62" rx="5" fill={PAL.slate} />
      <rect x="15" y="15" width="90" height="52" rx="3" fill={PAL.white} />
      {/* The apple */}
      <path d="M38 30Q36 23 41 20" fill="none" stroke={PAL.brown} strokeWidth="2.6" strokeLinecap="round" />
      <ellipse cx="45" cy="23" rx="6" ry="3" fill={PAL.leaf} transform="rotate(-25 45 23)" />
      <Shade color={PAL.redShade} opacity={1} at={[48, 44, 8, 16]}>
        <circle cx="38" cy="42" r="13" fill={PAL.red} />
      </Shade>
      <Shine d="M30 38Q31 33 35 32" opacity={0.6} width={3} />
      {/* Its word: two thick lines */}
      <path d="M60 36H94M60 50H82" stroke={PAL.navy} strokeWidth="5" strokeLinecap="round" />
      <rect x="20" y="70" width="80" height="5" rx="2.5" fill={PAL.slateDark} />
      <Bust who="amina" x={60} y={128} scale={0.5} expr="pleased" bold />
    </g>
  ),

  // "zwanger": pregnant — Amina, a hand laid on her round belly
  'w.zwanger': () => (
    <g>
      <Ground cy={106} rx={28} ry={4} />
      {/* Legs and shoes */}
      <rect x="47" y="90" width="9" height="16" rx="3" fill={TROUSERS} />
      <rect x="60" y="90" width="9" height="16" rx="3" fill={TROUSERS} />
      <ellipse cx="50" cy="105" rx="7" ry="3.6" fill={PAL.slateDark} />
      <ellipse cx="66" cy="105" rx="7" ry="3.6" fill={PAL.slateDark} />
      {/* Long top over the round belly, the bump to the right */}
      <Shade color={PAL.greenShade} opacity={1} at={[100, 86, 9, 24]}>
        <path d="M46 50H68Q74 50 75 57Q96 64 96 82Q95 97 78 98H46Q41 98 41 92V58Q41 50 46 50Z" fill={PAL.green} />
      </Shade>
      <path d="M76 60Q92 66 92 82" fill="none" stroke={PAL.white} strokeWidth="3.4" strokeLinecap="round" opacity=".4" />
      <path d="M48 50L60 58L72 50" fill={PAL.purple} />
      {/* Her arms: one hand on top of the belly, one under it */}
      <path d="M46 58Q44 76 66 72" fill="none" stroke="#2f8f3e" strokeWidth="8" strokeLinecap="round" />
      <ellipse cx="73" cy="71" rx="8" ry="5.4" fill={SKIN.amina[0]} transform="rotate(-14 73 71)" />
      <path d="M72 69.4H79M72 73H78" stroke={SKIN.amina[1]} strokeWidth="1.3" strokeLinecap="round" />
      <path d="M44 66Q44 92 70 92" fill="none" stroke="#23722f" strokeWidth="8" strokeLinecap="round" />
      <ellipse cx="77" cy="91" rx="8" ry="5.4" fill={SKIN.amina[1]} transform="rotate(-8 77 91)" />
      <Head who="amina" x={59} y={52} s={0.48} expr="pleased" />
    </g>
  ),

  // "de kinderopvang": the childcare, the daycare — a teddy bear sitting by a stack of toy blocks
  'w.kinderopvang': () => {
    const block = (x: number, y: number, s: number, c: string, sh: string, light: string, mark: ReactNode) => (
      <g>
        <path d={`M${x} ${y}L${x + 6} ${y - 5}H${x + s + 6}L${x + s} ${y}Z`} fill={light} />
        <path d={`M${x + s} ${y}L${x + s + 6} ${y - 5}V${y + s - 5}L${x + s} ${y + s}Z`} fill={sh} />
        <rect x={x} y={y} width={s} height={s} rx="2" fill={c} />
        {mark}
      </g>
    );
    return (
      <g>
        <Ground cx={60} cy={106} rx={48} ry={4} />
        {/* Toy blocks */}
        {block(66, 86, 18, PAL.red, PAL.redShade, PAL.redLight, <circle cx="75" cy="95" r="4.4" fill={PAL.white} opacity=".8" />)}
        {block(86, 86, 18, PAL.yellow, PAL.yellowShade, PAL.yellowShine, <path d="M90 99L95 90L100 99Z" fill={PAL.white} opacity=".8" />)}
        {block(76, 68, 18, PAL.sky, PAL.skyShade, PAL.ice, <rect x="81" y="73" width="8" height="8" rx="1" fill={PAL.white} opacity=".8" />)}
        {/* Teddy bear */}
        <g>
          <ellipse cx="26" cy="100" rx="10" ry="7" fill={PAL.cardShade} />
          <ellipse cx="52" cy="100" rx="10" ry="7" fill={PAL.cardShade} />
          <Shade color={PAL.cardShade} opacity={1} at={[60, 84, 10, 24]}>
            <ellipse cx="39" cy="82" rx="19" ry="21" fill={PAL.card} />
          </Shade>
          <ellipse cx="39" cy="86" rx="10" ry="11" fill="#f0c48a" />
          <ellipse cx="20" cy="78" rx="6" ry="10" fill={PAL.card} transform="rotate(20 20 78)" />
          <ellipse cx="58" cy="78" rx="6" ry="10" fill={PAL.cardShade} transform="rotate(-20 58 78)" />
          <circle cx="24" cy="32" r="7.5" fill={PAL.card} />
          <circle cx="54" cy="32" r="7.5" fill={PAL.cardShade} />
          <circle cx="24" cy="32" r="3.6" fill="#f0c48a" />
          <circle cx="54" cy="32" r="3.6" fill="#f0c48a" />
          <Shade color={PAL.cardShade} opacity={1} at={[58, 50, 8, 22]}>
            <circle cx="39" cy="46" r="18" fill={PAL.card} />
          </Shade>
          <ellipse cx="39" cy="53" rx="8.4" ry="6.4" fill="#f0c48a" />
          <ellipse cx="39" cy="50" rx="3.4" ry="2.4" fill={PAL.ink} />
          <path d="M39 52V55.4M36 56Q39 58 42 56" fill="none" stroke={PAL.ink} strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="32.4" cy="43" r="2.4" fill={PAL.ink} />
          <circle cx="45.6" cy="43" r="2.4" fill={PAL.ink} />
          <Shine d="M26 40Q27 33 33 30" opacity={0.5} width={3} />
        </g>
      </g>
    );
  },

  // "ophalen": to pick up (go and get someone) — a parent and a child walk home hand in hand
  'w.ophalen': () => (
    <g>
      <Ground cx={56} cy={106} rx={48} ry={4} />
      <House x={88} y={104} w={22} />
      {/* The parent (Jada): legs mid-step, body, her hand down to the child's */}
      <path d="M38 78L32 103M46 78L52 103" stroke={TROUSERS} strokeWidth="8.5" strokeLinecap="round" />
      <ellipse cx="30" cy="104" rx="6" ry="3.2" fill={PAL.slateDark} />
      <ellipse cx="55" cy="104" rx="6" ry="3.2" fill={PAL.slateDark} />
      <path d="M32 48L30 66" stroke={SKIN.jada[1]} strokeWidth="7" strokeLinecap="round" />
      <Shade color={PAL.yellowShade} opacity={1} at={[58, 64, 7, 24]}>
        <rect x="30" y="44" width="26" height="38" rx="9" fill="#ffc929" />
      </Shade>
      <path d="M53 50Q62 62 64 74" fill="none" stroke={SKIN.jada[0]} strokeWidth="7" strokeLinecap="round" />
      <Head who="jada" x={43} y={46} s={0.44} expr="pleased" />
      {/* The child, a school bag on the back, its hand up in hers */}
      <path d="M70 92L68 103M77 92L79 103" stroke={PAL.steel} strokeWidth="6" strokeLinecap="round" />
      <ellipse cx="67" cy="104" rx="4.6" ry="2.6" fill={PAL.slateDark} />
      <ellipse cx="80" cy="104" rx="4.6" ry="2.6" fill={PAL.slateDark} />
      <rect x="78" y="72" width="10" height="16" rx="3" fill={PAL.red} />
      <rect x="65" y="70" width="17" height="24" rx="6" fill={PAL.sky} />
      <path d="M67 74L64 76" stroke={SKIN.amina[0]} strokeWidth="5.6" strokeLinecap="round" />
      <circle cx="64" cy="75" r="4.6" fill={SKIN.jada[0]} />
      <ChildHead x={73} y={60} r={10} skin={SKIN.amina} hair="#2e201a" />
      <Motion x={20} y={66} dir={180} spread={50} len={7} gap={2} />
    </g>
  ),

  // "een ziek kind": a sick child — a child in bed with red cheeks, a cool cloth, a thermometer
  'w.ziekkind': () => (
    <g>
      <Ground cy={108} rx={48} ry={3.5} />
      {/* Bed: headboard, frame and legs */}
      <rect x="12" y="52" width="10" height="56" rx="4" fill={PAL.cardDark} />
      <rect x="100" y="80" width="8" height="28" rx="3" fill={PAL.cardDark} />
      <rect x="16" y="86" width="90" height="12" rx="3" fill={PAL.wood} />
      {/* Pillow, the child, the blanket */}
      <rect x="22" y="64" width="36" height="20" rx="10" fill={PAL.paperShade} />
      <rect x="22" y="62" width="36" height="19" rx="9.5" fill={PAL.white} />
      <ChildHead x={42} y={64} r={13} skin={SKIN.bram} hair={PAL.brown} sick />
      <rect x="31" y="49" width="22" height="7" rx="3.5" fill={PAL.ice} transform="rotate(-4 42 52)" />
      <path d="M30 80Q30 74 36 74H98Q104 74 104 80V90Q104 94 100 94H34Q30 94 30 90Z" fill={PAL.purpleLight} />
      <path d="M30 80Q30 74 36 74H62V94H34Q30 94 30 90Z" fill={PAL.white} opacity=".35" />
      <path d="M84 74H98Q104 74 104 80V90Q104 94 100 94H84Z" fill={PAL.purple} opacity=".35" />
      <Thermometer x={86} y={52} rot={24} len={36} />
    </g>
  ),

  // "de mail": the e-mail — a laptop with a (new) envelope on its screen
  'w.mail': () => (
    <g>
      <Ground cy={100} rx={50} ry={4} />
      <rect x="18" y="14" width="84" height="62" rx="6" fill={PAL.slate} />
      <rect x="23" y="19" width="74" height="51" rx="3" fill={TINT} />
      {/* The envelope */}
      <rect x="36" y="31" width="48" height="32" rx="3" fill={PAL.paperShade} />
      <rect x="36" y="29" width="48" height="32" rx="3" fill={PAL.white} />
      <path d="M38 31L60 48L82 31" fill="none" stroke={PAL.line} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="84" cy="29" r="7" fill={PAL.red} />
      {/* Keyboard base */}
      <path d="M12 78H108L102 94Q101 96 98 96H22Q19 96 18 94Z" fill={PAL.mist} />
      <path d="M12 78H108L106.6 82H13.4Z" fill={PAL.steel} />
      <rect x="48" y="86" width="24" height="5" rx="2.5" fill={PAL.steel} />
    </g>
  ),

  // "de arm": the arm — a strong bent arm (shirt sleeve at the shoulder, fist up)
  'w.arm': () => {
    const [s, sh] = SKIN.amina;
    return (
      <g>
        {/* Upper arm out from the sleeve to the elbow, forearm up to the fist */}
        <path d="M30 80L80 86" stroke={s} strokeWidth="24" strokeLinecap="round" />
        <path d="M82 84L86 42" stroke={s} strokeWidth="21" strokeLinecap="round" />
        <ellipse cx="54" cy="72" rx="20" ry="13" fill={s} />
        <path d="M38 88Q60 96 80 92" fill="none" stroke={sh} strokeWidth="6" strokeLinecap="round" opacity=".8" />
        <path d="M90 50L92 76" stroke={sh} strokeWidth="6" strokeLinecap="round" opacity=".8" />
        <path d="M42 64Q52 58 64 61" fill="none" stroke={PAL.white} strokeWidth="3.4" strokeLinecap="round" opacity=".4" />
        {/* Fist */}
        <rect x="72" y="18" width="28" height="26" rx="8" fill={s} />
        <path d="M79 21V33M86 20V33M93 21V33" stroke={sh} strokeWidth="1.8" strokeLinecap="round" />
        <rect x="68" y="30" width="22" height="9" rx="4.5" fill={s} />
        <path d="M72 34.6H84" stroke={sh} strokeWidth="1.6" strokeLinecap="round" opacity=".7" />
        {/* Sleeve */}
        <path d="M8 62Q8 58 12 58H30Q34 58 35 62L38 98Q38 102 34 102H12Q8 102 8 98Z" fill={PAL.green} />
        <path d="M30 58L38 98H30Z" fill={PAL.greenShade} />
        <rect x="31" y="59" width="7" height="42" rx="3" fill={PAL.greenShade} transform="rotate(-6 34 80)" />
      </g>
    );
  },

  // "de hand": the hand — one big open hand
  'w.hand': () => (
    <g>
      <Hand pose="open" x={60} y={102} scale={1.72} skin={SKIN.henk} sleeve={['#2d5a92', PAL.navyShade]} />
    </g>
  ),

  // "het oog": the eye — one big eye with its brow
  'w.oog': () => (
    <g>
      <Shade color={SKIN.jada[1]} opacity={1} at={[112, 66, 26, 52]}>
        <ellipse cx="60" cy="62" rx="52" ry="42" fill={SKIN.jada[0]} />
      </Shade>
      <path d="M22 30Q58 8 98 28" fill="none" stroke="#1e1512" strokeWidth="7" strokeLinecap="round" />
      <Eye />
      <path d="M14 64Q60 22 106 64" fill="none" stroke={PAL.ink} strokeWidth="4" strokeLinecap="round" />
      <path d="M30 51L24 44M44 43L40 35M60 41V32M76 43L80 35M90 51L96 44" stroke={PAL.ink} strokeWidth="3" strokeLinecap="round" />
    </g>
  ),

  // "slapen": to sleep — Henk lies asleep, head on the pillow, the blanket up; the moon and a star
  'w.slapen': () => (
    <g>
      <Ground cy={106} rx={50} ry={3.5} />
      <rect x="10" y="92" width="100" height="12" rx="4" fill={PAL.wood} />
      <rect x="14" y="74" width="44" height="22" rx="11" fill={PAL.paperShade} />
      <rect x="14" y="72" width="44" height="20" rx="10" fill={PAL.white} />
      <g transform="translate(20 66) rotate(-90)">
        <Bust who="henk" x={0} y={44} scale={0.56} emotion="rest" />
      </g>
      <path d="M50 62Q50 54 58 54H104Q110 54 110 60V94H50Z" fill={PAL.blueLight} />
      <path d="M50 62Q50 54 58 54H64V94H50Z" fill={PAL.ice} />
      <path d="M88 54H104Q110 54 110 60V94H88Z" fill={PAL.blue} opacity=".35" />
      <path d="M92 14A14 14 0 1 0 104 36A11 11 0 1 1 92 14Z" fill={PAL.yellow} />
      <Sparkle x={74} y={22} r={6} color={PAL.yellowLight} />
    </g>
  ),

  // "het ontbijt": the breakfast — bread with cheese on a plate, a glass of milk, the morning sun
  'w.ontbijt': () => (
    <g>
      <Ground cy={100} rx={46} ry={4} />
      {/* Sun */}
      <circle cx="26" cy="26" r="11" fill={PAL.yellow} />
      <path d="M26 8V11M26 41V44M8 26H11M41 26H44M13.3 13.3L15.4 15.4M36.6 36.6L38.7 38.7M13.3 38.7L15.4 36.6M36.6 15.4L38.7 13.3" stroke={PAL.yellow} strokeWidth="3" strokeLinecap="round" />
      {/* Plate */}
      <ellipse cx="50" cy="92" rx="38" ry="11" fill={PAL.paperShade} />
      <ellipse cx="50" cy="90" rx="38" ry="10" fill={PAL.white} />
      <ellipse cx="50" cy="90" rx="26" ry="6.4" fill={PAL.paper} />
      {/* A slice of bread standing up, a slice of cheese on it */}
      <path d="M28 90V60Q22 54 26 48Q30 40 42 42Q50 36 58 42Q70 40 74 48Q78 54 72 60V90Z" fill={PAL.cardShade} />
      <path d="M32 88V60Q27 55 30 50Q33 45 42 47Q50 42 58 47Q67 45 70 50Q73 55 68 60V88Z" fill="#f0c48a" />
      <path d="M34 64H70L66 84H38Z" fill={PAL.yellow} />
      <circle cx="46" cy="72" r="3" fill={PAL.yellowShade} />
      <circle cx="58" cy="77" r="2.4" fill={PAL.yellowShade} />
      {/* Glass of milk */}
      <path d="M82 48H106L103 96Q103 98 100 98H88Q85 98 85 96Z" fill={PAL.ice} opacity=".5" />
      <path d="M83.4 58H104.6L103 96Q103 98 100 98H88Q85 98 85 96Z" fill={PAL.white} />
      <path d="M96 58H104.6L103 96Q103 98 100 98H96Z" fill={PAL.paperShade} />
      <Shine d="M88 64V86" opacity={0.9} color={PAL.ice} width={3} />
    </g>
  ),

  // "bewegen": to move, to be active — Jada walks with big steps, swinging her arms
  'w.bewegen': () => (
    <g>
      <Ground cy={106} rx={30} ry={4} />
      {/* Back arm and back leg */}
      <path d="M54 50L44 70" stroke={SKIN.jada[1]} strokeWidth="7" strokeLinecap="round" />
      <path d="M58 76L42 102" stroke={PAL.navy} strokeWidth="10" strokeLinecap="round" />
      <ellipse cx="40" cy="103" rx="7" ry="3.6" fill={PAL.white} />
      {/* Front leg */}
      <path d="M62 76L80 100" stroke={TROUSERS} strokeWidth="10" strokeLinecap="round" />
      <ellipse cx="84" cy="102" rx="7.4" ry="3.8" fill={PAL.white} />
      <path d="M78 104H91" stroke={PAL.mist} strokeWidth="2" strokeLinecap="round" />
      {/* Body */}
      <Shade color={PAL.skyShade} opacity={1} at={[74, 60, 7, 24]}>
        <rect x="48" y="44" width="25" height="36" rx="9" fill={PAL.sky} transform="rotate(8 60 62)" />
      </Shade>
      {/* Front arm swinging forward */}
      <path d="M68 50L80 64L90 56" fill="none" stroke={SKIN.jada[0]} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <Head who="jada" x={62} y={46} s={0.44} expr="joy" />
      <Motion x={30} y={62} dir={180} spread={50} len={9} gap={2} />
    </g>
  ),

  // "moe": tired — Bram, eyes half shut and his head a little down, and an empty battery
  'w.moe': () => (
    <g>
      <Bust who="bram" x={50} y={124} scale={0.74} emotion="sad" tilt={-10} bold />
      {/* Battery, nearly empty */}
      <rect x="92" y="14" width="10" height="6" rx="2" fill={PAL.slate} />
      <rect x="85" y="18" width="24" height="44" rx="5" fill={PAL.slate} />
      <rect x="89" y="22" width="16" height="36" rx="2.5" fill={PAL.paper} />
      <rect x="89" y="49" width="16" height="9" rx="2" fill={PAL.red} />
    </g>
  ),

  // "sparen": to save (money) — a coin dropping into a glass jar that is filling up with coins
  'w.sparen': () => (
    <g>
      <Ground cy={106} rx={34} ry={4} />
      {/* The coins inside, seen through the glass */}
      {[98, 92, 86, 80, 74].map((y, i) => <FlatCoin key={y} x={56 + (i % 2 ? 2 : -2)} y={y} rx={22} />)}
      <FlatCoin x={48} y={68} rx={12} />
      {/* The glass jar */}
      <path d="M30 44Q26 48 26 56V96Q26 104 34 104H82Q90 104 90 96V56Q90 48 86 44Z" fill={PAL.ice} opacity=".38" />
      <path d="M80 44Q90 48 90 56V96Q90 104 82 104H78V44Z" fill={PAL.sky} opacity=".2" />
      <Shine d="M32 60V92" opacity={0.85} width={4} />
      {/* The lid with a slot */}
      <rect x="28" y="34" width="60" height="12" rx="4" fill={PAL.slate} />
      <rect x="46" y="37" width="24" height="4.6" rx="2.3" fill={PAL.slateDark} />
      <Coin x={58} y={18} r={10} />
      <Arrow from={[84, 14]} to={[84, 30]} color={PAL.ok} width={5} head={8} />
    </g>
  ),

  // "de sleutel": the key — a big house key on a ring, with a little house tag
  'w.sleutel': () => (
    <g>
      <g transform="rotate(-38 60 60)">
        {/* Shaft and bit */}
        <rect x="50" y="54" width="56" height="12" rx="4" fill={PAL.yellowShade} />
        <rect x="50" y="54" width="56" height="8" rx="4" fill={PAL.yellow} />
        <path d="M82 64H106V76H100V72H95V78H89V72H82Z" fill={PAL.yellowShade} />
        {/* Bow */}
        <circle cx="36" cy="60" r="21" fill={PAL.yellowShade} />
        <circle cx="35" cy="58" r="20" fill={PAL.yellow} />
        <circle cx="31" cy="58" r="7" fill="none" stroke={PAL.yellowShade} strokeWidth="0" />
        <circle cx="29" cy="58" r="6.4" fill={PAL.white} />
        <circle cx="29" cy="58" r="6.4" fill={PAL.paperShade} opacity=".5" />
        <Shine d="M24 46Q30 41 38 42" color={PAL.yellowShine} opacity={0.9} />
      </g>
      {/* Ring and tag */}
      <circle cx="30" cy="80" r="11" fill="none" stroke={PAL.steel} strokeWidth="3.4" />
      <g transform="rotate(10 26 98)">
        <rect x="12" y="88" width="28" height="22" rx="5" fill={PAL.skyShade} />
        <rect x="12" y="86" width="28" height="22" rx="5" fill={PAL.sky} />
        <path d="M19 100L26 93L33 100V104H19Z" fill={PAL.white} />
      </g>
    </g>
  ),

  // "verhuizen": to move (to another home) — a moving box travels from the old house to the new one
  'w.verhuizen': () => (
    <g>
      <Ground cx={60} cy={106} rx={52} ry={4} />
      <House x={10} y={104} w={30} wall={PAL.mist} roof={PAL.steel} roofShade={PAL.slate} />
      <House x={80} y={104} w={30} />
      <CurveArrow from={[28, 44]} to={[94, 44]} bend={18} color={PAL.sky} width={7} head={12} />
      <Box x={44} y={76} w={26} h={24} depth={8} />
    </g>
  ),

  // "het busje": the van — a small van seen from the side
  'w.busje': () => (
    <g>
      <Ground cx={60} cy={104} rx={50} ry={4} />
      <Shade color={PAL.skyShade} opacity={1} at={[60, 106, 70, 20]}>
        <path d="M10 92V38Q10 30 18 30H76Q82 30 86 36L100 58Q110 60 110 70V92Z" fill={PAL.sky} />
      </Shade>
      {/* Windows */}
      <path d="M80 38H84L96 58H80Z" fill={TINT} stroke={TINT} strokeWidth="2" strokeLinejoin="round" />
      <rect x="54" y="38" width="20" height="18" rx="3" fill={TINT} />
      <rect x="18" y="38" width="30" height="18" rx="3" fill={TINT} />
      {/* Sliding door, handle and stripe */}
      <path d="M51 38V88" stroke={PAL.skyShade} strokeWidth="2" />
      <path d="M77 38V88" stroke={PAL.skyShade} strokeWidth="2" />
      <rect x="56" y="62" width="8" height="3" rx="1.5" fill={PAL.skyShade} />
      <rect x="10" y="68" width="100" height="6" fill={PAL.white} opacity=".85" />
      <rect x="100" y="76" width="10" height="6" rx="2" fill={PAL.yellow} />
      <Shine d="M15 36Q16 33 20 33" opacity={0.6} width={3} />
      {/* Wheels */}
      <circle cx="32" cy="92" r="11" fill={PAL.slateDark} />
      <circle cx="32" cy="92" r="4.6" fill={PAL.steel} />
      <circle cx="88" cy="92" r="11" fill={PAL.slateDark} />
      <circle cx="88" cy="92" r="4.6" fill={PAL.steel} />
    </g>
  ),

  // "het gewas": the crop (the plants that grow) — three young plants growing in the soil
  'w.gewas': () => (
    <g>
      <Plant x={32} y={90} h={50} lean={-8} />
      <Plant x={88} y={90} h={50} lean={8} />
      <Plant x={60} y={90} h={74} />
      <path d="M10 104Q10 90 24 88Q60 82 96 88Q110 90 110 104Z" fill={PAL.brown} />
      <path d="M78 87Q110 90 110 104H88Z" fill="#000" opacity=".15" />
      <path d="M22 96H32M48 99H58M70 95H82" stroke={PAL.cardDark} strokeWidth="2.4" strokeLinecap="round" />
    </g>
  ),

  // "de rij": the row (of plants) — one long row of plants going back, along its path
  'w.rij': () => (
    <g>
      {/* The path along the row */}
      <path d="M62 110L84 28H90L106 110Z" fill={PAL.mist} />
      {/* The row: a strip of soil, the plants getting smaller towards the back */}
      <path d="M12 110L72 28H82L58 110Z" fill={PAL.brown} />
      {[0.97, 0.9, 0.8, 0.64, 0.38, 0].map((t) => (
        <Plant key={t} x={36 + t * 40} y={104 - t * 72} h={46 * (1 - 0.78 * t)} />
      ))}
    </g>
  ),

  // "oogsten": to harvest — Amina picks a ripe tomato from the plant
  'w.oogsten': () => (
    <g>
      {/* The plant: a tall stem with leaves and tomatoes */}
      <path d="M92 8V110" stroke={PAL.greenShade} strokeWidth="4" strokeLinecap="round" />
      <ellipse cx="102" cy="24" rx="10" ry="5" fill={PAL.green} transform="rotate(30 102 24)" />
      <ellipse cx="82" cy="40" rx="10" ry="5" fill={PAL.green} transform="rotate(-30 82 40)" />
      <ellipse cx="102" cy="74" rx="10" ry="5" fill={PAL.greenShade} transform="rotate(30 102 74)" />
      <Tomato x={100} y={44} r={7} />
      <Tomato x={98} y={92} r={7} ripe={false} />
      <path d="M92 54L84 62" stroke={PAL.greenShade} strokeWidth="2.4" strokeLinecap="round" />
      <Bust who="amina" x={38} y={126} scale={0.64} expr="pleased" bold />
      {/* Her hand, holding the tomato she just picked */}
      <Hand pose="hold" x={74} y={98} rotate={14} scale={0.6} skin={SKIN.amina} sleeve={['#2f8f3e', '#23722f']} />
      <Tomato x={78} y={83} r={9} />
    </g>
  ),

  // "sorteren": to sort — Jada puts the red tomatoes in one crate and the green ones in the other
  'w.sorteren': () => (
    <g>
      <Bust who="jada" x={60} y={84} scale={0.5} expr="thinking" bold />
      <Crate x={10} y={80} w={40} h={24} color={PAL.blue} shade={PAL.blueShade}>
        <Tomato x={20} y={76} r={6} />
        <Tomato x={32} y={76} r={6} />
        <Tomato x={44} y={76} r={6} />
      </Crate>
      <Crate x={66} y={80} w={40} h={24} color={PAL.blue} shade={PAL.blueShade}>
        <Tomato x={76} y={76} r={6} ripe={false} />
        <Tomato x={88} y={76} r={6} ripe={false} />
        <Tomato x={100} y={76} r={6} ripe={false} />
      </Crate>
      <CurveArrow from={[44, 56]} to={[28, 66]} bend={8} color={PAL.sky} width={5} head={9} />
      <CurveArrow from={[76, 56]} to={[92, 66]} bend={-8} color={PAL.sky} width={5} head={9} />
      <Tomato x={20} y={48} r={7} />
      <Tomato x={100} y={48} r={7} ripe={false} />
    </g>
  ),

  // "de krat": the crate — one plastic harvest crate, a few tomatoes in it
  'w.krat': () => (
    <g>
      <Ground cy={106} rx={46} ry={4} />
      <Crate x={14} y={52} w={80} h={52} color={PAL.green} shade={PAL.greenShade}>
        <Tomato x={36} y={46} r={8} />
        <Tomato x={54} y={44} r={8} />
        <Tomato x={72} y={46} r={8} />
        <Tomato x={88} y={42} r={7} />
      </Crate>
      <Shine d="M18 60V94" opacity={0.5} />
    </g>
  ),

  // "de spuitmiddelen": the crop sprays — a can of chemicals with a warning diamond, a drop leaking
  'w.spuitmiddelen': () => (
    <g>
      <Ground cy={106} rx={34} ry={4} />
      {/* Handle and cap */}
      <path d="M34 40V26Q34 20 40 20H58" fill="none" stroke={PAL.paperShade} strokeWidth="8" strokeLinecap="round" />
      <rect x="64" y="14" width="18" height="16" rx="3" fill={PAL.orange} />
      <rect x="74" y="14" width="8" height="16" rx="3" fill={PAL.orangeShade} />
      <Shade color={PAL.paperShade} opacity={1} at={[92, 70, 14, 50]}>
        <path d="M28 40Q28 30 38 30H82Q90 30 90 40V98Q90 104 84 104H34Q28 104 28 98Z" fill={PAL.paper} />
      </Shade>
      <path d="M28 96H90V98Q90 104 84 104H34Q28 104 28 98Z" fill={PAL.mist} />
      {/* Warning diamond */}
      <rect x="40" y="52" width="38" height="38" rx="4" fill={PAL.red} transform="rotate(45 59 71)" />
      <rect x="45" y="57" width="28" height="28" rx="2" fill={PAL.white} transform="rotate(45 59 71)" />
      <ExclaimMark x={59} y={71} size={22} color={PAL.ink} />
      {/* A drop */}
      <path d="M102 62Q108 72 108 76A6 6 0 0 1 96 76Q96 72 102 62Z" fill={PAL.leaf} />
    </g>
  ),

  // "bespoten": sprayed (with crop sprays) — a plant wet with spray, a warning sign in front of it
  'w.bespoten': () => (
    <g>
      <Ground cx={60} cy={106} rx={48} ry={4} />
      {/* Spray mist round the plant */}
      <ellipse cx="72" cy="52" rx="36" ry="34" fill={PAL.ice} opacity=".28" />
      <Plant x={72} y={104} h={86} />
      {[[52, 30], [90, 26], [96, 54], [50, 60], [64, 40], [84, 74], [58, 82], [100, 84]].map(([x, y]) => (
        <path key={`${x}-${y}`} d={`M${x} ${y - 5}Q${x + 3.4} ${y} ${x + 3.4} ${y + 1.6}A3.4 3.4 0 0 1 ${x - 3.4} ${y + 1.6}Q${x - 3.4} ${y} ${x} ${y - 5}Z`} fill={PAL.sky} />
      ))}
      {/* Warning sign on a post */}
      <rect x="29" y="70" width="5" height="36" rx="2" fill={PAL.steel} />
      <path d="M31.5 46L52 82H11Z" fill={PAL.red} stroke={PAL.red} strokeWidth="5" strokeLinejoin="round" />
      <path d="M31.5 56L44 78H19Z" fill={PAL.white} stroke={PAL.white} strokeWidth="2" strokeLinejoin="round" />
      <ExclaimMark x={31.5} y={70} size={14} color={PAL.ink} />
    </g>
  ),

  // "de plukkar": the picking trolley — a trolley with crates, rolling on the heating pipes
  'w.plukkar': () => (
    <g>
      {/* The pipe rails */}
      <path d="M6 100H114" stroke={PAL.mist} strokeWidth="6" strokeLinecap="round" />
      <path d="M6 102H114" stroke={PAL.steel} strokeWidth="2" strokeLinecap="round" />
      {/* Handle */}
      <path d="M22 84V30H12" fill="none" stroke={PAL.slate} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Crates on the platform */}
      <Crate x={28} y={58} w={36} h={24} color={PAL.green} shade={PAL.greenShade}>
        <Tomato x={40} y={54} r={6} />
        <Tomato x={54} y={54} r={6} />
      </Crate>
      <Crate x={68} y={58} w={36} h={24} color={PAL.green} shade={PAL.greenShade} />
      <Crate x={68} y={34} w={36} h={24} color={PAL.green} shade={PAL.greenShade}>
        <Tomato x={82} y={30} r={6} />
        <Tomato x={96} y={30} r={6} />
      </Crate>
      {/* Platform and wheels */}
      <rect x="16" y="82" width="94" height="8" rx="3" fill={PAL.slate} />
      <rect x="16" y="86" width="94" height="4" rx="2" fill={PAL.slateDark} />
      {[30, 54, 78, 98].map((x) => <circle key={x} cx={x} cy={94} r="5.4" fill={PAL.slateDark} />)}
      {[30, 54, 78, 98].map((x) => <circle key={x} cx={x} cy={94} r="2" fill={PAL.steel} />)}
    </g>
  ),

  // "bukken": to bend down — Amina bends over at the waist to reach a low plant
  'w.bukken': () => (
    <g>
      <Ground cx={56} cy={106} rx={48} ry={4} />
      {/* Low plant */}
      <Plant x={22} y={104} h={26} />
      {/* Legs */}
      <path d="M78 64L80 102M70 66L68 102" stroke={TROUSERS} strokeWidth="10" strokeLinecap="round" />
      <ellipse cx="84" cy="103" rx="7" ry="3.4" fill={PAL.slateDark} />
      <ellipse cx="72" cy="103" rx="7" ry="3.4" fill={PAL.slateDark} />
      {/* Body bent forward */}
      <path d="M76 62L46 54" stroke={PAL.green} strokeWidth="22" strokeLinecap="round" />
      <path d="M78 70L50 64" stroke={PAL.greenShade} strokeWidth="8" strokeLinecap="round" opacity=".7" />
      {/* Arm reaching down to the plant */}
      <path d="M48 56L36 88" stroke="#2f8f3e" strokeWidth="8" strokeLinecap="round" />
      <circle cx="34" cy="92" r="5" fill={SKIN.amina[0]} />
      <Head who="amina" x={40} y={52} s={0.4} rot={-70} expr="neutral" />
      <Arrow from={[14, 28]} to={[14, 62]} color={PAL.sky} width={5} head={9} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
