import { useEffect, useId, useState } from 'react';
import { onSpeech } from '../lib/audio';
import { FACES, type Expr, type TalkFrame } from './Faces';

/**
 * The Vloertaal cast: four colleagues from the work floor, drawn as flat-vector busts in one
 * style (big head, bold shapes, eyes with highlights, a bit of shading on the right side).
 *
 *  - Bram: our mascot. Warehouse/construction worker, yellow hard hat, orange hi-vis vest.
 *  - Amina: greenhouse worker in a purple headscarf and a green fleece.
 *  - Henk: the older shift supervisor; bald, grey moustache, glasses, navy jacket.
 *  - Jada: order picker in blue dungarees, curly hair with safety glasses on top.
 *
 * Every character has the same moods; CSS (styles.css, "Characters") animates them:
 * idle breathing + blinking, a moving mouth while talking, a jump when happy, a droop when sad.
 * With prefers-reduced-motion the pose is shown without motion.
 */
export type CharacterId = 'bram' | 'amina' | 'henk' | 'jada';
/**
 * Body + face state. `idle` is the character's own resting face; `thinking`, `pleased` and
 * `sad` (disappointed) change the face only; `happy` adds one hop, `cheer` keeps jumping with
 * both arms up. `talking` is idle with a moving mouth (or pass `talking` to any mood).
 */
export type Mood = 'idle' | 'talking' | 'thinking' | 'pleased' | 'happy' | 'sad' | 'cheer' | 'wave';

export const CAST: CharacterId[] = ['bram', 'amina', 'henk', 'jada'];


interface Look {
  skin: string;
  shade: string;
  brow: string;
  sleeve: string;
  /** Face silhouette (also used as clip for its shading). */
  face: (fill: string) => React.ReactNode;
  ears?: boolean;
  /** Behind the head (hair volume, headscarf), drawn over the torso. */
  back?: React.ReactNode;
  /** In front of the face (hat, fringe, glasses, moustache). */
  front?: React.ReactNode;
  /** Clothes on the torso; `clip` is the id of a clip path with the torso shape. */
  torso: (clip: string) => React.ReactNode;
  /** Extra detail clipped to the face (stubble). */
  faceExtra?: React.ReactNode;
  /** Blink rhythm, so a group of characters doesn't blink in sync. */
  blink: number;
}

const TORSO = 'M24 128C24 104 38 93 60 93C82 93 96 104 96 128Q96 134 90 134H30Q24 134 24 128Z';

const LOOKS: Record<CharacterId, Look> = {
  bram: {
    skin: '#f7c49b',
    shade: '#e2a376',
    brow: '#6b3f22',
    sleeve: '#1a86d8',
    // Broad, square jaw
    face: (fill) => <path d="M33 50C33 33 44 27 60 27C76 27 87 33 87 50V69C87 84 77 91 60 91C43 91 33 84 33 69Z" fill={fill} />,
    ears: true,
    blink: 4.2,
    faceExtra: <path d="M30 70Q36 92 60 92Q84 92 90 70Q80 86 60 86Q40 86 30 70Z" fill="#b07a55" opacity=".28" />,
    torso: (clip) => (
      <>
        <path d={TORSO} fill="#ff7a00" />
        <g clipPath={`url(#${clip})`}>
          {/* Blue work shirt in the V of the vest, with a collar */}
          <path d="M48 90H72L60 114Z" fill="#1a86d8" />
          <path d="M49 92L60 102L55 106ZM71 92L60 102L65 106Z" fill="#5fb8f5" />
          {/* Reflective stripes */}
          <rect x="20" y="117" width="80" height="6" fill="#eef5f7" />
          <rect x="20" y="123" width="80" height="1.6" fill="#b9c7cc" />
          <path d="M41 97V117M79 97V117" stroke="#eef5f7" strokeWidth="5" />
          <path d="M60 114V140" stroke="#d96500" strokeWidth="2" />
          {/* Chest pocket with a pen */}
          <rect x="67" y="104" width="10" height="2.5" rx="1.2" fill="#2b2b2b" />
          <rect x="66" y="105" width="14" height="10" rx="2" fill="#e86e00" />
          <ellipse cx="104" cy="122" rx="26" ry="34" fill="#000" opacity=".1" />
        </g>
      </>
    ),
    front: (
      <>
        {/* Sideburns */}
        <rect x="33" y="48" width="5" height="14" rx="2.5" fill="#6b3f22" />
        <rect x="82" y="48" width="5" height="14" rx="2.5" fill="#6b3f22" />
        {/* Hard hat (sits high, so the brows show) */}
        <g transform="translate(0 -4)">
        <path d="M30 50C30 26 43 13 60 13C77 13 90 26 90 50Z" fill="#ffc800" />
        <path d="M75 17C85 24 90 36 90 50H80C80 36 79 26 75 17Z" fill="#e5a400" opacity=".55" />
        <rect x="55" y="13" width="10" height="35" rx="5" fill="#ffd94d" />
        <path d="M37 40Q39 27 49 20" fill="none" stroke="#fff3b0" strokeWidth="3.5" strokeLinecap="round" />
        <rect x="23" y="45" width="74" height="9" rx="4.5" fill="#e5a400" />
        <rect x="23" y="45" width="74" height="3" rx="1.5" fill="#ffd94d" opacity=".6" />
        </g>
      </>
    ),
  },
  amina: {
    skin: '#b97a52',
    shade: '#9c6141',
    brow: '#2b1d14',
    sleeve: '#2f8f3e',
    // Soft egg-shaped face framed by the scarf
    face: (fill) => <path d="M60 38C73 38 82 47 82 61C82 77 72 88 60 88C48 88 38 77 38 61C38 47 47 38 60 38Z" fill={fill} />,
    blink: 5.1,
    back: (
      <>
        {/* Headscarf: wraps the head and drapes over the shoulders */}
        <path d="M27 62C27 30 41 15 60 15C79 15 93 30 93 62C93 80 90 96 84 104H36C30 96 27 80 27 62Z" fill="#8e44c9" />
        <path d="M80 22C89 32 93 46 93 62C93 80 90 96 84 104H76C82 92 84 76 84 60C84 44 83 32 80 22Z" fill="#6f2fa6" />
        <path d="M36 104C40 98 48 95 60 95C72 95 80 98 84 104C78 109 70 111 60 111C50 111 42 109 36 104Z" fill="#8e44c9" />
        <path d="M44 100Q60 106 76 100" fill="none" stroke="#6f2fa6" strokeWidth="2" strokeLinecap="round" />
      </>
    ),
    front: (
      <>
        {/* Inner cap edge around the face */}
        <path d="M37 52C39 40 48 34 60 34C72 34 81 40 83 52" fill="none" stroke="#b07ae6" strokeWidth="3.4" strokeLinecap="round" />
        <path d="M35 30Q46 21 58 20" fill="none" stroke="#b07ae6" strokeWidth="3" strokeLinecap="round" opacity=".7" />
      </>
    ),
    torso: (clip) => (
      <>
        <path d={TORSO} fill="#3fa34d" />
        <g clipPath={`url(#${clip})`}>
          {/* Fleece zip and a name badge with a little seedling */}
          <path d="M60 108V140" stroke="#2f7d3a" strokeWidth="2.4" />
          <rect x="65" y="114" width="16" height="10" rx="2.5" fill="#fff" />
          <path d="M69 121H77M69 118H74" stroke="#9aa5ab" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M45 124V116M45 118C41 118 40 115 40 113C43 113 45 115 45 118ZM45 117C45 114 47 112 50 112C50 115 48 117 45 117Z" fill="#c6f06b" stroke="#c6f06b" strokeWidth="1" />
          <ellipse cx="104" cy="122" rx="26" ry="34" fill="#000" opacity=".1" />
        </g>
      </>
    ),
  },
  henk: {
    skin: '#f0b791',
    shade: '#d9946c',
    brow: '#9aa1a8',
    sleeve: '#244a7d',
    // Long face, high forehead, heavy jowls
    face: (fill) => <path d="M36 44C36 29 46 22 60 22C74 22 84 29 84 44V72C84 84 76 91 60 91C44 91 36 84 36 72Z" fill={fill} />,
    ears: true,
    blink: 4.7,
    front: (
      <>
        {/* Grey hair round the sides, shiny bald top, forehead lines */}
        <path d="M33 42C28 49 29 61 35 66L39 63L38 45Z" fill="#c4cad0" />
        <path d="M87 42C92 49 91 61 85 66L81 63L82 45Z" fill="#c4cad0" />
        <ellipse cx="49" cy="33" rx="7" ry="3.2" fill="#fff" opacity=".35" transform="rotate(-18 49 33)" />
        <path d="M50 42Q60 39 70 42M53 46Q60 44 67 46" fill="none" stroke="#d9946c" strokeWidth="1.5" strokeLinecap="round" />
        {/* Glasses */}
        <g fill="#fff" fillOpacity=".12" stroke="#2f3b46" strokeWidth="2.4">
          <rect x="40.5" y="53.5" width="19" height="17" rx="7" />
          <rect x="60.5" y="53.5" width="19" height="17" rx="7" />
        </g>
        <path d="M58.5 60Q60 58 61.5 60M40.5 59L34 57M79.5 59L86 57" fill="none" stroke="#2f3b46" strokeWidth="2.2" strokeLinecap="round" />
        {/* Moustache */}
        <path d="M46 76C48 70 55 69 60 72C65 69 72 70 74 76C70 78 65 77 60 75C55 77 50 78 46 76Z" fill="#b8bec5" />
      </>
    ),
    torso: (clip) => (
      <>
        <path d={TORSO} fill="#244a7d" />
        <g clipPath={`url(#${clip})`}>
          {/* White shirt collar and tie-less V, hi-vis stripes on the jacket */}
          <path d="M49 90H71L60 108Z" fill="#f4f7f9" />
          <path d="M48 92L57 104L52 107ZM72 92L63 104L68 107Z" fill="#dfe6ec" />
          <rect x="20" y="118" width="80" height="6" fill="#ffd400" />
          <path d="M60 108V140" stroke="#1a3860" strokeWidth="2" />
          {/* Pen in the pocket */}
          <rect x="70" y="101" width="2.6" height="8" rx="1.2" fill="#ff4b4b" />
          <rect x="66" y="106" width="12" height="9" rx="2" fill="#1d3f6e" />
          <ellipse cx="104" cy="122" rx="26" ry="34" fill="#000" opacity=".12" />
        </g>
      </>
    ),
  },
  jada: {
    skin: '#8d5536',
    shade: '#6e3f25',
    brow: '#1e1512',
    sleeve: '#e3e9ee',
    // Round cheeks, small pointed chin
    face: (fill) => <path d="M60 31C77 31 87 43 87 59C87 74 74 88 60 89C46 88 33 74 33 59C33 43 43 31 60 31Z" fill={fill} />,
    ears: true,
    blink: 3.8,
    back: (
      <g fill="#2e201a">
        {/* Curly hair, big and round */}
        <circle cx="60" cy="28" r="19" />
        <circle cx="42" cy="34" r="13" />
        <circle cx="78" cy="34" r="13" />
        <circle cx="36" cy="48" r="9" />
        <circle cx="84" cy="48" r="9" />
        <circle cx="50" cy="15" r="9" />
        <circle cx="70" cy="15" r="9" />
        <g fill="none" stroke="#4a362c" strokeWidth="2" strokeLinecap="round">
          <path d="M44 22a5 5 0 0 1 6-4M64 12a5 5 0 0 1 6 0M76 26a5 5 0 0 1 5 4M33 42a4 4 0 0 1 4-4" />
        </g>
      </g>
    ),
    front: (
      <>
        <path d="M34 52C35 38 46 31 60 31C74 31 85 38 86 52C80 45 71 42 60 43C49 42 40 45 34 52Z" fill="#2e201a" />
        {/* Safety glasses pushed up on the hair */}
        <g>
          <rect x="42" y="27" width="16" height="9" rx="4.5" fill="#8fdcff" stroke="#1d6fa8" strokeWidth="2" />
          <rect x="62" y="27" width="16" height="9" rx="4.5" fill="#8fdcff" stroke="#1d6fa8" strokeWidth="2" />
          <path d="M58 31H62" stroke="#1d6fa8" strokeWidth="2" />
          <path d="M45 30L49 30" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
        </g>
        {/* Gold hoops */}
        <circle cx="34" cy="72" r="3.2" fill="none" stroke="#ffc800" strokeWidth="2" />
        <circle cx="86" cy="72" r="3.2" fill="none" stroke="#ffc800" strokeWidth="2" />
      </>
    ),
    torso: (clip) => (
      <>
        <path d={TORSO} fill="#e3e9ee" />
        <g clipPath={`url(#${clip})`}>
          {/* Blue dungarees over a light T-shirt */}
          <path d="M40 112Q40 108 44 108H76Q80 108 80 112V140H40Z" fill="#1cb0f6" />
          <rect x="20" y="124" width="80" height="20" fill="#1cb0f6" />
          <path d="M38 95L44 110M82 95L76 110" stroke="#1cb0f6" strokeWidth="6" strokeLinecap="round" />
          <circle cx="44" cy="111" r="2.6" fill="#ffc800" />
          <circle cx="76" cy="111" r="2.6" fill="#ffc800" />
          <rect x="52" y="113" width="16" height="9" rx="2" fill="#1899d6" />
          <path d="M53 97Q60 102 67 97" fill="none" stroke="#c4ced6" strokeWidth="2.4" strokeLinecap="round" />
          <ellipse cx="104" cy="122" rx="26" ry="34" fill="#000" opacity=".1" />
        </g>
      </>
    ),
  },
};

/** Arms: sleeve from the shoulder, hand at the end. Coordinates are in the 120×140 box. */
function Arm({ d, hand, sleeve, skin, className }: { d: string; hand: [number, number]; sleeve: string; skin: string; className?: string }) {
  return (
    <g className={className}>
      <path d={d} fill="none" stroke={sleeve} strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={hand[0]} cy={hand[1]} r="6.4" fill={skin} />
    </g>
  );
}

function Arms({ mood, look }: { mood: Mood; look: Look }) {
  const s = { sleeve: look.sleeve, skin: look.skin };
  const leftDown = <Arm {...s} className="ch-arm ch-arm-l" d="M31 104Q25 115 27 125" hand={[27, 127]} />;
  const rightDown = <Arm {...s} className="ch-arm ch-arm-r" d="M89 104Q95 115 93 125" hand={[93, 127]} />;
  const sad = mood === 'sad';
  switch (mood) {
    case 'talking':
      // Explaining: the hand on the bubble side comes up, palm open.
      return (
        <>
          {leftDown}
          <Arm {...s} className="ch-arm ch-arm-r ch-arm-gesture" d="M90 104L102 117L106 102" hand={[106, 99]} />
        </>
      );
    case 'happy':
    case 'wave':
      return (
        <>
          {leftDown}
          <Arm {...s} className="ch-arm ch-arm-r ch-arm-wave" d="M90 102Q104 96 105 78" hand={[105, 73]} />
        </>
      );
    case 'thinking':
      // Hand on the chin
      return (
        <>
          {leftDown}
          <Arm {...s} className="ch-arm ch-arm-r" d="M89 104Q92 96 72 94" hand={[68, 92]} />
        </>
      );
    case 'cheer':
      return (
        <>
          <Arm {...s} className="ch-arm ch-arm-l ch-arm-up" d="M30 102Q16 96 15 78" hand={[15, 73]} />
          <Arm {...s} className="ch-arm ch-arm-r ch-arm-up" d="M90 102Q104 96 105 78" hand={[105, 73]} />
        </>
      );
    default:
      return sad ? (
        <>
          <Arm {...s} className="ch-arm ch-arm-l" d="M33 105Q29 116 32 126" hand={[32, 127]} />
          <Arm {...s} className="ch-arm ch-arm-r" d="M87 105Q91 116 88 126" hand={[88, 127]} />
        </>
      ) : (
        <>
          {leftDown}
          {rightDown}
        </>
      );
  }
}

/** Which face a mood shows. */
function exprFor(mood: Mood): Expr {
  switch (mood) {
    case 'thinking':
      return 'thinking';
    case 'pleased':
    case 'happy':
    case 'wave':
      return 'pleased';
    case 'sad':
      return 'disappointed';
    case 'cheer':
      return 'joy';
    default:
      return 'neutral';
  }
}

/** Mouth shapes while talking, one every ~105 ms: never the same twice in a row. */
const TALK_SEQUENCE: TalkFrame[] = [1, 2, 3, 1, 2, 0, 3, 2, 1, 0, 2, 3];
const TALK_STEP_MS = 105;

function useTalkFrame(on: boolean): TalkFrame | null {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (!on) return;
    setI(0);
    if (prefersReducedMotion()) return; // a still, open mouth
    const t = window.setInterval(() => setI((n) => (n + 1) % TALK_SEQUENCE.length), TALK_STEP_MS);
    return () => window.clearInterval(t);
  }, [on]);
  return on ? TALK_SEQUENCE[i] : null;
}

export function Character({ who, mood = 'idle', talking: talkingProp, size = 120, flip = false, crop, className }: {
  who: CharacterId;
  mood?: Mood;
  /** Mouth moves (on top of any mood); mood 'talking' means the same. */
  talking?: boolean;
  /** Height in px (the width follows the drawing). */
  size?: number;
  /** Face left instead of right (for a character on the right side of a chat). */
  flip?: boolean;
  /** 'head': just the head, for small places like the top bar. */
  crop?: 'head';
  className?: string;
}) {
  const look = LOOKS[who];
  const face = FACES[who];
  const talking = !!talkingProp || mood === 'talking';
  const frame = useTalkFrame(talking);
  const expr = exprFor(mood);
  const id = useId().replace(/[^a-zA-Z0-9_-]/g, '');
  const faceClip = `chf-${id}`;
  const torsoClip = `cht-${id}`;
  const viewBox = crop === 'head' ? '20 8 80 84' : '0 0 120 140';
  const ratio = crop === 'head' ? 1 : 120 / 140;
  const blush = face.blush?.(expr) ?? 0.35;
  const figure = (
    <>
      {crop !== 'head' && <ellipse className="ch-shadow" cx="60" cy="135" rx="33" ry="4.5" fill="#000" opacity=".18" />}
      <g className="ch-fig">
        <g className="ch-pulse">
          {crop !== 'head' && (
            <>
              {look.torso(torsoClip)}
              <Arms mood={mood} look={look} />
            </>
          )}
          <g className="ch-head">
            {look.back}
            <rect x="52" y="78" width="16" height="18" rx="6" fill={look.shade} />
            {look.ears && (
              <>
                <circle cx="33.5" cy="64" r="6.5" fill={look.skin} />
                <circle cx="86.5" cy="64" r="6.5" fill={look.skin} />
                <circle cx="33.5" cy="64" r="3" fill={look.shade} />
                <circle cx="86.5" cy="64" r="3" fill={look.shade} />
              </>
            )}
            {look.face(look.skin)}
            <g clipPath={`url(#${faceClip})`}>
              <ellipse cx="100" cy="58" rx="27" ry="48" fill={look.shade} opacity=".5" />
              {look.faceExtra}
            </g>
            <ellipse cx="42" cy="74" rx="4.8" ry="3.2" fill="#ff7b7b" opacity={blush} />
            <ellipse cx="78" cy="74" rx="4.8" ry="3.2" fill="#ff7b7b" opacity={blush} />
            <g className="ch-eyes" style={{ '--blink': `${look.blink}s` } as React.CSSProperties}>
              {face.eyes(talking && expr === 'thinking' ? 'neutral' : expr, look.skin)}
            </g>
            <g className="ch-brows">{face.brows(expr, look.brow)}</g>
            {face.nose(look.shade)}
            <g className="ch-mouth">{frame !== null ? face.talk(frame) : face.mouth(expr)}</g>
            {look.front}
            {mood === 'sad' && (
              <path className="ch-sweat" d="M92 40Q96 47 96 50A4 4 0 0 1 88 50Q88 47 92 40Z" fill="#8fdcff" />
            )}
          </g>
        </g>
      </g>
    </>
  );
  return (
    <svg
      className={`ch ch-${who} ch-${mood} ch-x-${expr} ${talking ? 'ch-talking' : ''} ${crop === 'head' ? 'ch-headonly' : ''} ${className ?? ''}`}
      viewBox={viewBox}
      width={Math.round(size * ratio)}
      height={size}
      aria-hidden
      focusable="false"
    >
      <defs>
        <clipPath id={faceClip}>{look.face('#000')}</clipPath>
        <clipPath id={torsoClip}><path d={TORSO} /></clipPath>
      </defs>
      {flip ? <g transform="translate(120 0) scale(-1 1)">{figure}</g> : figure}
    </svg>
  );
}

function prefersReducedMotion(): boolean {
  return typeof window !== 'undefined' && !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
}

/**
 * True while a character should move its mouth: for ~1.5 s when the exercise appears
 * (`intro`), and while one of its `lines` is being spoken aloud.
 * Never true with reduced motion, so the static pose stays calm.
 */
export function useTalking(lines: string[], intro = true): boolean {
  const key = lines.join('\n');
  const [talking, setTalking] = useState(() => intro && !prefersReducedMotion());
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const mine = new Set(key.split('\n'));
    const introEnd = intro ? Date.now() + 1500 : 0;
    let until = introEnd;
    let timer: number | undefined;
    const update = () => {
      window.clearTimeout(timer);
      const left = until - Date.now();
      setTalking(left > 0);
      if (left > 0) timer = window.setTimeout(update, left);
    };
    update();
    const off = onSpeech((text, on, slow) => {
      if (!mine.has(text)) return;
      const now = Date.now();
      if (on) {
        // Roughly how long the line takes; the end event cuts it short when it arrives.
        const estimate = (500 + text.length * 70) * (slow ? 1.6 : 1);
        until = Math.max(until, now + Math.min(estimate, 8000));
      } else {
        // The line ended (or failed to play): stop soon, but always finish the intro line.
        until = Math.max(introEnd, Math.min(until, now + 150));
      }
      update();
    });
    return () => {
      off();
      window.clearTimeout(timer);
    };
  }, [key, intro]);
  return talking;
}

/** A stable pick from the cast for a piece of content, so lessons show different colleagues. */
export function castFor(seed: string, from: CharacterId[] = CAST): CharacterId {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return from[h % from.length];
}
