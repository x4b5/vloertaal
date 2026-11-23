import type { JSX } from 'react';
import { CastHead } from '../../components/Characters';
import { PAL } from '../kit';

export default {
  // "het gezicht": the face — Jada's face, big and straight on, framed by the four blue corner marks of a camera
  // (a face in a photo).
  'w.gezicht': () => (
    <g>
      <g transform="translate(60 98) scale(1.05) translate(-60 -92)">
        <CastHead who="jada" expr="pleased" />
      </g>
      <path d="M12 30V12H30M90 12H108V30M108 90V108H90M30 108H12V90" stroke={PAL.sky} strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
