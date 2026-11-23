import type { JSX } from 'react';
import { Bust } from '../bust';

export default {
  'w.kammen': () => (
    <g>
      <Bust who="henk" x={60} y={134} scale={1} />
      {[0,10,20,30,40,50,60,70,80,90,100,110,120].map((v) => <path key={v} d={`M${v} 0V120M0 ${v}H120`} stroke="red" strokeWidth=".3" />)}
    </g>
  ),
} as Record<string, () => JSX.Element>;
