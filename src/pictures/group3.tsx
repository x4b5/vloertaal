import type { JSX } from 'react';
import { Box, Bust, ExclaimMark, Ground, Hand, Motion, PAL, SKIN, Shade, Shine, Tick } from './kit';

/** Word pictures, group 3 (keyed by word id). See docs/tekenstijl.md and ./kit.tsx. */

/** A yellow hard hat seen from the front, about 96 wide at s = 1, brim centred on (x, y). */
function HardHat({ x = 60, y = 70, s = 1, strap = false }: { x?: number; y?: number; s?: number; strap?: boolean }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s}) translate(-60 -70)`}>
      {strap && (
        <path d="M30 72Q34 100 60 100Q86 100 90 72" fill="none" stroke={PAL.steel} strokeWidth="4.5" strokeLinecap="round" />
      )}
      <Shade color={PAL.yellowShade} opacity={0.75} at={[96, 46, 18, 40]}>
        <path d="M22 66C22 34 38 16 60 16C82 16 98 34 98 66Z" fill={PAL.yellow} />
      </Shade>
      <rect x="53" y="16" width="14" height="48" rx="7" fill={PAL.yellowLight} />
      <Shine d="M32 54Q34 36 48 26" color={PAL.yellowShine} width={5} opacity={1} />
      <rect x="12" y="60" width="96" height="13" rx="6.5" fill={PAL.yellowShade} />
      <rect x="12" y="60" width="96" height="4.5" rx="2.25" fill={PAL.yellowLight} opacity=".7" />
    </g>
  );
}

/** A work glove, wrist at (x, y), fingers up: orange knit with dark rubber-dipped fingertips. */
function Glove({ x, y, rotate = 0, scale = 1, mirror = false }: { x: number; y: number; rotate?: number; scale?: number; mirror?: boolean }) {
  const fingers: [number, number][] = [[-10.5, -50], [-3.5, -55], [3.5, -53], [10.5, -45]];
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${mirror ? -scale : scale} ${scale})`}>
      <Shade color={PAL.orangeShade} opacity={1} at={[22, -24, 10, 40]}>
        <g>
          {fingers.map(([fx, top]) => (
            <g key={fx}>
              <rect x={fx - 4.4} y={top} width="8.8" height={-20 - top} rx="4.4" fill={PAL.slate} />
              <rect x={fx - 4.4} y={top + 10} width="8.8" height={-20 - top - 10} rx="1.5" fill={PAL.orange} />
            </g>
          ))}
          <rect x="-15" y="-30" width="30" height="32" rx="10" fill={PAL.orange} />
          <g transform="rotate(-38 -13 -8)">
            <rect x="-17.5" y="-28" width="9.5" height="24" rx="4.75" fill={PAL.slate} />
            <rect x="-17.5" y="-19" width="9.5" height="15" rx="1.5" fill={PAL.orange} />
          </g>
        </g>
      </Shade>
      <path d="M-7 -29V-22M0 -30V-22M7 -29V-22" stroke={PAL.orangeShade} strokeWidth="1.6" strokeLinecap="round" />
      {/* Ribbed cuff */}
      <rect x="-16" y="-2" width="32" height="17" rx="5" fill={PAL.navy} />
      <path d="M-9 1V12M-3 1V12M3 1V12M9 1V12" stroke={PAL.navyShade} strokeWidth="2" strokeLinecap="round" />
      <Shine d="M-11 -42V-30" width={2.6} opacity={0.5} />
    </g>
  );
}

/** A safety boot seen from the side, toe to the right: leather upper, steel toe cap, thick sole. */
function Boot({ x = 0, y = 0, s = 1, dark = false }: { x?: number; y?: number; s?: number; dark?: boolean }) {
  const upper = dark ? PAL.brown : PAL.cardDark;
  const upperShade = dark ? '#4f2e18' : PAL.brown;
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      {/* Upper */}
      <path d="M22 30H52L56 58Q58 64 68 64L84 66Q98 68 98 84V92H18V36Q18 30 22 30Z" fill={upper} />
      <path d="M18 64H40V92H18Z" fill={upperShade} opacity=".45" />
      {/* Padded collar */}
      <rect x="18" y="26" width="38" height="10" rx="5" fill={upperShade} />
      {/* Laces */}
      <path d="M50 40L42 44M52 48L44 52M54 56L46 60" stroke={PAL.yellow} strokeWidth="3" strokeLinecap="round" />
      {/* Steel toe cap */}
      <path d="M76 65L84 66Q98 68 98 84V88H72Q70 74 76 65Z" fill={PAL.mist} />
      <path d="M90 70Q98 75 98 84V88H88Q92 78 90 70Z" fill={PAL.steel} />
      <Shine d="M77 72Q80 68 86 68" width={2.6} opacity={0.9} />
      {/* Sole with tread */}
      <rect x="14" y="88" width="88" height="12" rx="5" fill={PAL.slate} />
      <path d="M24 100V96M36 100V96M48 100V96M60 100V96M72 100V96M84 100V96" stroke={PAL.slateDark} strokeWidth="3" strokeLinecap="round" />
      <rect x="16" y="88" width="84" height="3" rx="1.5" fill={PAL.yellow} />
      <Shine d="M24 40V56" width={3} opacity={0.35} />
    </g>
  );
}

/** A flame (red outside, orange, yellow core), standing on (cx, base), `h` tall. */
function Flame({ cx = 60, base = 72, h = 64 }: { cx?: number; base?: number; h?: number }) {
  const k = h / 64;
  const outer = 'M0 -64C8 -48 26 -42 26 -20C32 -26 32 -34 30 -38C40 -28 44 -14 38 0H-38C-46 -14 -40 -28 -30 -36C-30 -28 -26 -22 -22 -20C-24 -38 -10 -48 0 -64Z';
  const mid = 'M2 -48C8 -36 22 -30 22 -14C26 -18 27 -22 26 -26C32 -18 32 -8 28 0H-28C-32 -10 -28 -20 -22 -26C-22 -20 -18 -14 -14 -12C-16 -28 -6 -36 2 -48Z';
  const core = 'M0 -30C6 -22 14 -16 14 -6C14 -2 13 0 12 0H-12C-14 -4 -14 -10 -10 -16C-8 -12 -6 -10 -4 -10C-6 -18 -2 -24 0 -30Z';
  return (
    <g transform={`translate(${cx} ${base}) scale(${k})`}>
      <Shade color={PAL.redShade} opacity={1} at={[34, -20, 14, 50]}>
        <path d={outer} fill={PAL.red} />
      </Shade>
      <path d={mid} fill={PAL.orange} />
      <path d={core} fill={PAL.yellow} />
    </g>
  );
}

/** A jagged crash star: `n` points between radius r (tips) and ri (dents), centred on (cx, cy). */
function burst(cx: number, cy: number, r: number, ri: number, n: number) {
  const pts: string[] = [];
  for (let i = 0; i < n * 2; i++) {
    const a = (Math.PI * i) / n - Math.PI / 2;
    const rr = i % 2 ? ri : r * (i % 4 ? 0.85 : 1);
    pts.push(`${(cx + rr * Math.cos(a)).toFixed(1)} ${(cy + rr * Math.sin(a)).toFixed(1)}`);
  }
  return `M${pts.join('L')}Z`;
}

export default {
  // "de helm": the helmet — a yellow hard hat with its chin strap
  'w.helm': () => (
    <g>
      <Ground cx={60} cy={102} rx={40} ry={5} />
      <HardHat x={60} y={76} s={1} strap />
    </g>
  ),

  // "de handschoenen": the gloves — a pair of orange work gloves with dipped fingertips
  'w.handschoenen': () => (
    <g>
      <Glove x={40} y={96} rotate={-14} scale={1.12} />
      <Glove x={80} y={96} rotate={14} scale={1.12} mirror />
    </g>
  ),

  // "de veiligheidsschoenen": the safety shoes — a pair of boots with steel toe caps
  'w.veiligheidsschoenen': () => (
    <g>
      <Ground cx={60} cy={106} rx={48} ry={4.5} />
      <Boot x={22} y={-6} s={0.84} dark />
      <Boot x={-4} y={6} s={0.96} />
    </g>
  ),

  // "het hesje": the safety vest — an orange hi-vis vest with reflective stripes
  'w.hesje': () => (
    <g>
      {/* Back collar seen through the V */}
      <path d="M48 14H72L60 34Z" fill={PAL.orangeShade} />
      <Shade color={PAL.orangeShade} opacity={1} at={[106, 64, 22, 60]}>
        <path d="M37 12H49L60 56L71 12H83Q85 30 98 36V100Q98 106 92 106H28Q22 106 22 100V36Q35 30 37 12Z" fill={PAL.orange} />
      </Shade>
      {/* Zip */}
      <path d="M60 58V104" stroke={PAL.orangeShade} strokeWidth="2.4" strokeLinecap="round" />
      {/* Reflective stripes: braces and two bands */}
      <path d="M36 16L33 66M84 16L87 66" stroke={PAL.paper} strokeWidth="7" strokeLinecap="round" />
      <rect x="22" y="66" width="76" height="9" fill={PAL.paper} />
      <rect x="22" y="72" width="76" height="3" fill={PAL.paperShade} />
      <rect x="22" y="84" width="76" height="9" fill={PAL.paper} />
      <rect x="22" y="90" width="76" height="3" fill={PAL.paperShade} />
      <path d="M59 66V93" stroke={PAL.orangeShade} strokeWidth="2.4" />
      <Shine d="M27 42Q30 36 34 34" color={PAL.yellowShine} width={3.5} opacity={0.8} />
    </g>
  ),

  // "de veiligheidsbril": safety glasses — a wraparound clear visor on a yellow frame with side shields
  'w.bril': () => (
    <g>
      {/* Arms going back */}
      <path d="M16 46L10 38M104 46L110 38" stroke={PAL.slate} strokeWidth="6" strokeLinecap="round" />
      {/* Lens */}
      <path d="M12 50Q12 42 22 42H98Q108 42 108 50V60Q108 82 88 82Q74 82 68 70Q64 62 60 62Q56 62 52 70Q46 82 32 82Q12 82 12 60Z" fill={PAL.ice} opacity=".75" />
      <path d="M86 42H98Q108 42 108 50V60Q108 82 88 82Q96 70 86 42Z" fill={PAL.sky} opacity=".35" />
      {/* Side shields */}
      <path d="M12 50Q8 56 10 68Q12 76 18 78" fill="none" stroke={PAL.ice} strokeWidth="5" strokeLinecap="round" opacity=".9" />
      <path d="M108 50Q112 56 110 68Q108 76 102 78" fill="none" stroke={PAL.ice} strokeWidth="5" strokeLinecap="round" opacity=".9" />
      {/* Frame (top bar) and nose bridge */}
      <rect x="10" y="36" width="100" height="12" rx="6" fill={PAL.yellow} />
      <rect x="78" y="36" width="32" height="12" rx="6" fill={PAL.yellowShade} />
      <rect x="10" y="36" width="100" height="4" rx="2" fill={PAL.yellowLight} />
      {/* Glare */}
      <path d="M24 72L38 52M32 74L42 60M76 72L90 52" stroke={PAL.white} strokeWidth="3.4" strokeLinecap="round" opacity=".8" />
    </g>
  ),

  // "dragen": to wear — Amina wears her work gear: hard hat on her headscarf and a hi-vis vest, with a green tick
  'w.dragen': () => (
    <g>
      <Bust who="amina" x={56} y={116} scale={0.72} expr="joy" />
      {/* Hi-vis vest over the fleece (drawn in the bust's own coordinates) */}
      <g transform="translate(56 116) scale(0.72) translate(-60 -134)">
        <path d="M24 134C24 114 30 104 40 100L50 112L54 134Z" fill={PAL.orange} />
        <path d="M96 134C96 114 90 104 80 100L70 112L66 134Z" fill={PAL.orange} />
        <path d="M96 134C96 116 92 108 86 103C88 114 88 124 86 134Z" fill={PAL.orangeShade} />
        <path d="M24 122H53M67 122H96" stroke={PAL.paper} strokeWidth="7" />
        <path d="M24 125H53M67 125H96" stroke={PAL.paperShade} strokeWidth="2" />
      </g>
      <HardHat x={56} y={45} s={0.42} />
      <Tick x={96} y={84} r={14} />
    </g>
  ),

  // "pas op": watch out — a yellow warning triangle with an exclamation mark
  'w.pasop': () => (
    <g>
      <path d="M60 18L104 96H16Z" fill={PAL.yellowShade} stroke={PAL.yellowShade} strokeWidth="14" strokeLinejoin="round" transform="translate(0 4)" />
      <Shade color={PAL.yellowShade} opacity={0.8} at={[108, 70, 26, 60]}>
        <path d="M60 18L104 96H16Z" fill={PAL.yellow} stroke={PAL.yellow} strokeWidth="14" strokeLinejoin="round" />
      </Shade>
      <path d="M60 31L94 92H26Z" fill="none" stroke={PAL.ink} strokeWidth="4" strokeLinejoin="round" />
      <ExclaimMark x={60} y={73} size={30} color={PAL.ink} />
    </g>
  ),

  // "stop": a red octagon with a raised flat hand (the stop gesture)
  'w.stop': () => (
    <g>
      <path d="M43 12H77L106 41V75L77 104H43L14 75V41Z" fill={PAL.redShade} stroke={PAL.redShade} strokeWidth="6" strokeLinejoin="round" transform="translate(0 4)" />
      <Shade color={PAL.redShade} opacity={1} at={[112, 60, 22, 60]}>
        <path d="M43 12H77L106 41V75L77 104H43L14 75V41Z" fill={PAL.red} stroke={PAL.red} strokeWidth="6" strokeLinejoin="round" />
      </Shade>
      <path d="M45 18H75L100 43V73L75 98H45L20 73V43Z" fill="none" stroke={PAL.white} strokeWidth="3.4" strokeLinejoin="round" opacity=".9" />
      <Hand pose="open" x={60} y={90} scale={1.12} skin={[PAL.white, PAL.paperShade]} />
    </g>
  ),

  // "help": Jada calls for help — both arms up, waving her hands, mouth open in a shout
  'w.help': () => (
    <g>
      <Bust who="jada" x={60} y={124} scale={0.62} expr="thinking" />
      {/* Mouth a little open: calling out */}
      <g transform="translate(60 124) scale(0.62) translate(-60 -134)">
        <ellipse cx="60" cy="76.6" rx="3.4" ry="2.4" fill="#4a2420" />
      </g>
      {/* Arms raised high in a V */}
      <path d="M38 104Q26 86 24 58M82 104Q94 86 96 58" fill="none" stroke="#ffc929" strokeWidth="9" strokeLinecap="round" />
      <path d="M88 100Q95 86 96 62" fill="none" stroke="#e0a800" strokeWidth="3.5" strokeLinecap="round" opacity=".6" />
      <Hand pose="open" x={24} y={58} rotate={-16} scale={0.74} skin={SKIN.jada} />
      <Hand pose="open" x={96} y={58} rotate={16} scale={0.74} skin={SKIN.jada} mirror />
      {/* Waving / shouting lines */}
      <Motion x={14} y={26} dir={-150} spread={70} n={3} len={7} gap={5} color={PAL.red} width={3.4} />
      <Motion x={106} y={26} dir={-30} spread={70} n={3} len={7} gap={5} color={PAL.red} width={3.4} />
      <ExclaimMark x={60} y={22} size={26} color={PAL.red} />
    </g>
  ),

  // "de brand": the fire — big flames coming out of a cardboard box
  'w.brand': () => (
    <g>
      <Ground cx={58} cy={104} rx={40} ry={5} />
      <Flame cx={58} base={74} h={64} />
      <Box x={24} y={68} w={56} h={34} depth={14} tape={false} />
    </g>
  ),

  // "de nooduitgang": the emergency exit — a green sign: a figure runs to a door, arrow pointing out
  'w.nooduitgang': () => (
    <g>
      <rect x="10" y="24" width="100" height="76" rx="10" fill={PAL.greenShade} transform="translate(0 4)" />
      <Shade color={PAL.greenShade} opacity={0.8} at={[118, 60, 18, 50]}>
        <rect x="10" y="24" width="100" height="76" rx="10" fill={PAL.green} />
      </Shade>
      {/* Door frame with the dark doorway */}
      <rect x="74" y="34" width="28" height="56" rx="3" fill={PAL.white} />
      <rect x="80" y="40" width="16" height="50" rx="1.5" fill={PAL.greenShade} />
      {/* Running figure */}
      <g stroke={PAL.white} strokeWidth="6.4" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M56 50L48 68" />
        <path d="M54 54L62 60L70 54M54 54L44 52L38 58" />
        <path d="M48 68L58 74L58 86M48 68L40 78L30 78" />
      </g>
      <circle cx="61" cy="42" r="6" fill={PAL.white} />
      {/* Arrow */}
      <path d="M18 90H40" stroke={PAL.white} strokeWidth="5" strokeLinecap="round" />
      <path d="M38 84L46 90L38 96Z" fill={PAL.white} stroke={PAL.white} strokeWidth="3" strokeLinejoin="round" />
      <Shine d="M18 40Q18 32 26 32" width={3.5} opacity={0.5} />
    </g>
  ),

  // "het ongeluk": the accident — a box falls on Bram's head: a red crash burst, he reels sideways in pain
  'w.ongeluk': () => (
    <g>
      {/* Bram knocked sideways */}
      <g transform="rotate(-20 46 124)">
        <Bust who="bram" x={48} y={128} scale={0.68} expr="disappointed" squint />
      </g>
      {/* Crash burst where the box hits his helmet */}
      <path d={burst(56, 46, 20, 10.5, 9)} fill={PAL.red} />
      <path d={burst(56, 46, 10.5, 5, 9)} fill={PAL.yellow} />
      {/* The falling box, tilted, coming down from above */}
      <g transform="rotate(28 76 34)">
        <Box x={64} y={18} w={26} h={22} depth={8} />
      </g>
      <path d="M82 13V6M94 17V10" stroke={PAL.line} strokeWidth="3.2" strokeLinecap="round" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
