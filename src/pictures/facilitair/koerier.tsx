import type { JSX } from 'react';
import { Box, Hand, PAL, SKIN } from '../kit';
import { Bust } from '../bust';

export default {
  // "de koerier": the courier — Amina brings a parcel: she holds a taped box with a shipping label in
  // both hands in front of her.
  'w.koerier': () => (
    <g strokeLinejoin="round">
      <Bust who="amina" x={58} y={116} scale={0.76} expr="pleased" bold />
      {/* The box in her hands */}
      <Box x={30} y={86} w={46} h={26} depth={14} label />
      <Hand pose="fist" x={28} y={108} rotate={8} scale={0.55} skin={SKIN.amina} sleeve={[PAL.purple, PAL.purpleShade]} />
      <Hand pose="fist" x={88} y={104} rotate={-8} scale={0.55} skin={SKIN.amina} sleeve={[PAL.purple, PAL.purpleShade]} mirror />
    </g>
  ),
} as Record<string, () => JSX.Element>;
