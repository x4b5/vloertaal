import { useId, type JSX } from 'react';
import { PAL } from '../kit';
import { Bust } from '../bust';

/** One passport photo: a white border, a plain light background and Amina's head and shoulders, cut to the frame. */
function Photo({ x, y, rot }: { x: number; y: number; rot: number }) {
  const id = `pasfoto-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
  const W = 46;
  const H = 60;
  return (
    <g transform={`rotate(${rot} ${x + W / 2} ${y + H / 2})`}>
      <rect x={x + 2} y={y + 3} width={W} height={H} rx="3" fill={PAL.mist} />
      <rect x={x} y={y} width={W} height={H} rx="3" fill={PAL.white} />
      <clipPath id={id}>
        <rect x={x + 4} y={y + 4} width={W - 8} height={H - 8} rx="1.6" />
      </clipPath>
      <rect x={x + 4} y={y + 4} width={W - 8} height={H - 8} rx="1.6" fill="#e3f5ff" />
      <g clipPath={`url(#${id})`}>
        <Bust who="amina" x={x + W / 2} y={y + H + 8} scale={0.46} />
      </g>
    </g>
  );
}

export default {
  // "de pasfoto": the passport photo — two of the same small photos side by side (as they come from the photo
  // booth): a white border, a plain light background and Amina looking straight ahead, head and shoulders.
  'w.pasfoto': () => (
    <g>
      <Photo x={14} y={26} rot={-5} />
      <Photo x={60} y={32} rot={4} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
