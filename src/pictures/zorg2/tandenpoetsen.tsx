import type { JSX } from 'react';
import { Bust } from '../bust';

export default {
  'w.tandenpoetsen': () => (
    <g>
      <Bust who="henk" x={30} y={134} scale={0.5} />
      <Bust who="jada" x={90} y={134} scale={0.5} />
      <Bust who="bram" x={30} y={70} scale={0.5} />
      <Bust who="amina" x={90} y={70} scale={0.5} />
      {[0,20,40,60,80,100,120].map((v) => <path key={v} d={`M${v} 0V120M0 ${v}H120`} stroke="red" strokeWidth=".3" />)}
    </g>
  ),
} as Record<string, () => JSX.Element>;
