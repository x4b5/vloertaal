import { useEffect, useId, useLayoutEffect, useState } from 'react';
import { onSpeech } from '../lib/audio';
import { FACES, type Expr, type TalkFrame } from './Faces';

/**
 * The Vloertaal cast: four colleagues from the work floor, drawn as flat-vector busts in one
 * style (big head, bold shapes, eyes with highlights, a bit of shading on the right side).
 *
 *  - Bram: our mascot. Warehouse/construction worker, yellow hard hat, orange hi-vis vest.
 *  - Amina: greenhouse worker in a purple headscarf and a green fleece.
 *  - Henk: the older shift supervisor; bald, grey moustache, glasses, navy jacket.
 *  - Jada: order picker in blue dungarees over a yellow T-shirt, curly hair with safety glasses on top.
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
  /** Shoulder joints (viewer's left, viewer's right) and upper/lower arm lengths. */
  shoulders: [[number, number], [number, number]];
  arm: [number, number];
  /** Darker sleeve tone for the cuff and the far side of the arm. */
  cuff: string;
  /** Short sleeves: bare forearms. */
  bareForearm?: boolean;
}

/** Torso silhouettes: Bram broad and square, Amina narrow under her scarf, Henk wide with a
 *  belly, Jada slim with one hip pushed out. */
const TORSOS: Record<CharacterId, string> = {
  bram: 'M23 128C23 103 37 93 60 93C83 93 97 103 97 128Q97 134 91 134H29Q23 134 23 128Z',
  amina: 'M29 128C29 105 41 95 60 95C79 95 91 105 91 128Q91 134 85 134H35Q29 134 29 128Z',
  henk: 'M19 128C19 103 35 92 60 92C85 92 101 103 101 126Q102 134 95 134H25Q19 134 19 128Z',
  jada: 'M30 128C29 106 41 95 60 95C79 95 91 105 90 116Q89 124 91 129Q92 134 86 134H36Q30 134 30 128Z',
};

const LOOKS: Record<CharacterId, Look> = {
  bram: {
    shoulders: [[31, 103], [89, 103]],
    arm: [17, 15],
    cuff: '#126bb0',
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
        <path d={TORSOS.bram} fill="#ff7a00" />
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
    shoulders: [[34, 104], [86, 104]],
    arm: [17, 16],
    cuff: '#23722f',
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
        <path d={TORSOS.amina} fill="#3fa34d" />
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
    shoulders: [[27, 103], [93, 103]],
    arm: [17, 15],
    cuff: '#183660',
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
        <path d={TORSOS.henk} fill="#244a7d" />
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
    shoulders: [[34, 104], [86, 104]],
    arm: [16, 16],
    cuff: '#e0a800',
    bareForearm: true,
    skin: '#8d5536',
    shade: '#6e3f25',
    brow: '#1e1512',
    sleeve: '#ffc929',
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
        <path d={TORSOS.jada} fill="#ffc929" />
        <g clipPath={`url(#${clip})`}>
          {/* Blue dungarees over a light T-shirt */}
          <path d="M40 112Q40 108 44 108H76Q80 108 80 112V140H40Z" fill="#1cb0f6" />
          <rect x="20" y="124" width="80" height="20" fill="#1cb0f6" />
          <path d="M38 95L44 110M82 95L76 110" stroke="#1cb0f6" strokeWidth="6" strokeLinecap="round" />
          <circle cx="44" cy="111" r="2.6" fill="#ffc800" />
          <circle cx="76" cy="111" r="2.6" fill="#ffc800" />
          <rect x="52" y="113" width="16" height="9" rx="2" fill="#1899d6" />
          <path d="M53 97Q60 102 67 97" fill="none" stroke="#e0a800" strokeWidth="2.4" strokeLinecap="round" />
          <ellipse cx="104" cy="122" rx="26" ry="34" fill="#000" opacity=".1" />
        </g>
      </>
    ),
  },
};

/* ------------------------------------------------------------------------------------------
 * The rig. Every arm is three joints (shoulder, elbow, wrist), each a group whose `rotate` is
 * set from a pose; CSS transitions those rotations, so a change of mood moves the arm there
 * like a puppet instead of swapping drawings. Each joint also has an empty animation layer
 * (.ch-arm / .ch-fore / .ch-hand) that the CSS reactions (fist pump, toast, shrug...) move.
 * Angles are absolute screen angles in degrees: 0 points right, 90 down, -90 up.
 * ---------------------------------------------------------------------------------------- */

export type HandKind = 'fist' | 'open' | 'point' | 'thumb' | 'grip';
type Prop = 'mug' | 'clipboard' | 'pot' | 'scanner';

interface ArmPose {
  /** Upper arm, forearm and hand directions. */
  a: number;
  e: number;
  w: number;
  hand: HandKind;
  prop?: Prop;
  /** Mirror the hand (thumb on the other side). */
  m?: boolean;
  /** CSS reaction on this arm (ch-act-<name>). */
  act?: string;
  /** This arm gestures on the beat while talking. */
  beat?: boolean;
  /** Draw this arm behind the torso. */
  back?: boolean;
}

interface Pose {
  /** Whole-body lean around the feet (weight shift) and head tilt around the neck. */
  lean: number;
  tilt: number;
  /** Head turn: the face slides this far sideways (towards the bubble is +). */
  turn: number;
  l: ArmPose;
  r: ArmPose;
}

/** The pose sheet: every character's own signature stance and its own reactions. */
const POSES: Record<CharacterId, Partial<Record<Mood, Pose>> & { idle: Pose }> = {
  // Bram: eager, weight on the back foot, fist on his hip, points at what he's saying.
  bram: {
    idle: {
      lean: 2.5, tilt: 6, turn: 1.6,
      l: { a: 150, e: 22, w: 34, hand: 'fist', m: true },
      r: { a: 32, e: -22, w: -18, hand: 'point', beat: true },
    },
    // Right: one big fist pump, hip hand stays.
    happy: {
      lean: -1.5, tilt: -5, turn: 0.6,
      l: { a: 150, e: 22, w: 34, hand: 'fist', m: true },
      r: { a: -48, e: -96, w: -96, hand: 'fist', act: 'pump' },
    },
    // Wrong: scratches the side of his head, sheepish.
    sad: {
      lean: -2, tilt: -7, turn: -1,
      l: { a: 150, e: 26, w: 38, hand: 'fist', m: true },
      r: { a: -38, e: -118, w: -150, hand: 'open', act: 'scratch' },
    },
    pleased: {
      lean: 2, tilt: 5, turn: 1.4,
      l: { a: 150, e: 22, w: 34, hand: 'fist', m: true },
      r: { a: 62, e: -58, w: 0, hand: 'thumb', act: 'thumb' },
    },
    wave: {
      lean: 1.5, tilt: 6, turn: 1.4,
      l: { a: 150, e: 22, w: 34, hand: 'fist', m: true },
      r: { a: -24, e: -78, w: -84, hand: 'open', act: 'wave' },
    },
    thinking: {
      lean: 0, tilt: -6, turn: -1.6,
      l: { a: 150, e: 22, w: 34, hand: 'fist', m: true },
      r: { a: 150, e: -110, w: -100, hand: 'fist' },
    },
    cheer: {
      lean: 0, tilt: 0, turn: 0,
      l: { a: -132, e: -98, w: -96, hand: 'fist', m: true, act: 'pump' },
      r: { a: -48, e: -82, w: -84, hand: 'fist', act: 'pump' },
    },
  },
  // Amina: shy, head tilted away, cradles her seedling pot with both hands.
  amina: {
    idle: {
      lean: -2, tilt: -10, turn: 1.2,
      l: { a: 104, e: -12, w: -14, hand: 'grip', prop: 'pot', m: true },
      r: { a: 76, e: -168, w: -168, hand: 'grip', beat: true },
    },
    // Right: a little wave of delight, pot tucked in the other hand.
    happy: {
      lean: 1, tilt: 8, turn: 0.8,
      l: { a: 104, e: -12, w: -14, hand: 'grip', prop: 'pot', m: true },
      r: { a: -40, e: -96, w: -100, hand: 'open', act: 'wiggle' },
    },
    // Wrong: hand to her mouth.
    sad: {
      lean: -3, tilt: -12, turn: -1.6,
      l: { a: 104, e: -12, w: -14, hand: 'grip', prop: 'pot', m: true },
      r: { a: 150, e: -108, w: -110, hand: 'open', m: true },
    },
    pleased: {
      lean: -1, tilt: 6, turn: 1,
      l: { a: 104, e: -12, w: -14, hand: 'grip', prop: 'pot', m: true },
      r: { a: 76, e: -168, w: -168, hand: 'grip' },
    },
    thinking: {
      lean: -2, tilt: -12, turn: 2,
      l: { a: 104, e: -12, w: -14, hand: 'grip', prop: 'pot', m: true },
      r: { a: 150, e: -108, w: -100, hand: 'fist', m: true },
    },
    cheer: {
      lean: 0, tilt: 6, turn: 0,
      l: { a: -130, e: -96, w: -100, hand: 'open', m: true, act: 'pump' },
      r: { a: -50, e: -84, w: -80, hand: 'open', act: 'pump' },
    },
  },
  // Henk: leans back, clipboard under one arm, his coffee mug in the other hand.
  henk: {
    idle: {
      lean: -2.5, tilt: -4, turn: 1.2,
      l: { a: 112, e: -8, w: -8, hand: 'grip', prop: 'clipboard', m: true },
      r: { a: 72, e: -84, w: -84, hand: 'grip', prop: 'mug', beat: true },
    },
    // Right: raises his mug to you with a wink.
    happy: {
      lean: 1, tilt: 4, turn: 1.4,
      l: { a: 112, e: -8, w: -8, hand: 'grip', prop: 'clipboard', m: true },
      r: { a: -18, e: -84, w: -84, hand: 'grip', prop: 'mug', act: 'toast' },
    },
    pleased: {
      lean: -1, tilt: 3, turn: 1.4,
      l: { a: 112, e: -8, w: -8, hand: 'grip', prop: 'clipboard', m: true },
      r: { a: 40, e: -84, w: -84, hand: 'grip', prop: 'mug', act: 'toast' },
    },
    // Wrong: the mug sinks, the head shakes slowly.
    sad: {
      lean: -3.5, tilt: -6, turn: -1,
      l: { a: 112, e: -8, w: -8, hand: 'grip', prop: 'clipboard', m: true },
      r: { a: 84, e: 6, w: 6, hand: 'grip', prop: 'mug' },
    },
    thinking: {
      lean: -2.5, tilt: -8, turn: -2,
      l: { a: 112, e: -8, w: -8, hand: 'grip', prop: 'clipboard', m: true },
      r: { a: 72, e: -84, w: -84, hand: 'grip', prop: 'mug' },
    },
    cheer: {
      lean: 0, tilt: 3, turn: 0,
      l: { a: 112, e: -8, w: -8, hand: 'grip', prop: 'clipboard', m: true },
      r: { a: -18, e: -84, w: -84, hand: 'grip', prop: 'mug', act: 'toast' },
    },
  },
  // Jada: hip out, hand on that hip, scanner propped up, side-eye and a smirk.
  jada: {
    idle: {
      lean: 4, tilt: -8, turn: 2.2,
      l: { a: 100, e: -78, w: -78, hand: 'grip', prop: 'scanner', m: true, beat: true },
      r: { a: 28, e: 154, w: 146, hand: 'fist' },
    },
    // Right: a finger-gun at you, with a wink.
    happy: {
      lean: 5, tilt: -4, turn: 2.4,
      l: { a: 100, e: -78, w: -78, hand: 'grip', prop: 'scanner', m: true },
      r: { a: 18, e: -12, w: -10, hand: 'point', act: 'pew' },
    },
    pleased: {
      lean: 4, tilt: -5, turn: 2.4,
      l: { a: 100, e: -78, w: -78, hand: 'grip', prop: 'scanner', m: true },
      r: { a: 18, e: -12, w: -10, hand: 'point', act: 'pew' },
    },
    // Wrong: a shrug, palms up.
    sad: {
      lean: 2, tilt: 7, turn: -1.6,
      l: { a: 104, e: -148, w: -160, hand: 'open', act: 'shrug' },
      r: { a: 76, e: -32, w: -20, hand: 'open', m: true, act: 'shrug' },
    },
    thinking: {
      lean: 4, tilt: -10, turn: -2,
      l: { a: 100, e: -78, w: -78, hand: 'grip', prop: 'scanner', m: true },
      r: { a: 28, e: 154, w: 146, hand: 'fist' },
    },
    cheer: {
      lean: 3, tilt: -4, turn: 0,
      l: { a: -126, e: -98, w: -98, hand: 'grip', prop: 'scanner', m: true, act: 'pump' },
      r: { a: 18, e: -12, w: -10, hand: 'point', act: 'pew' },
    },
  },
};

function poseFor(who: CharacterId, mood: Mood): Pose {
  const sheet = POSES[who];
  return sheet[mood] ?? (mood === 'wave' ? sheet.happy : undefined) ?? sheet.idle;
}

const rot = (deg: number, x: number, y: number): React.CSSProperties => ({ rotate: `${deg}deg`, transformOrigin: `${x}px ${y}px` });
const at = (x: number, y: number): React.CSSProperties => ({ transformOrigin: `${x}px ${y}px` });

/** A limb segment along +x from (x, y): a capsule that tapers from r0 to r1. */
function limb(x: number, y: number, len: number, r0: number, r1: number, fill: string) {
  const x1 = x + len;
  return (
    <path
      d={`M${x} ${y - r0}L${x1} ${y - r1}A${r1} ${r1} 0 0 1 ${x1} ${y + r1}L${x} ${y + r0}A${r0} ${r0} 0 0 1 ${x} ${y - r0}Z`}
      fill={fill}
    />
  );
}

/** Hands, drawn with the wrist at (0, 0) and the hand pointing along +x, thumb towards +y. */
export function Hand({ kind, skin, shade }: { kind: HandKind; skin: string; shade: string }) {
  const thumb = <ellipse cx="6" cy="4.6" rx="3.6" ry="2.4" fill={skin} stroke={shade} strokeWidth=".9" transform="rotate(-18 6 4.6)" />;
  switch (kind) {
    case 'open':
      return (
        <g>
          <path d="M0 -4.2C3 -6.6 12.5 -7.6 16.2 -5.2C18.2 -3.6 18.4 2 16.2 3.6C12.6 5.8 4.6 5.4 0 4.2Z" fill={skin} />
          <path d="M11.4 -2.4H16.4M11.4 0.8H16.6" stroke={shade} strokeWidth="1.1" strokeLinecap="round" />
          <ellipse cx="5.6" cy="6" rx="5" ry="2.5" fill={skin} transform="rotate(30 5.6 6)" />
        </g>
      );
    case 'point':
      return (
        <g>
          <rect x="7" y="-5.4" width="13.6" height="4.6" rx="2.3" fill={skin} />
          <circle cx="6.6" cy=".4" r="5.8" fill={skin} />
          <path d="M9.8 1.4Q11.4 2.4 10.8 4.2" fill="none" stroke={shade} strokeWidth="1" strokeLinecap="round" />
          {thumb}
        </g>
      );
    case 'thumb':
      return (
        <g>
          <rect x="3.2" y="-15" width="4.8" height="12" rx="2.4" fill={skin} />
          <rect x="1.6" y="-5.6" width="12" height="11.6" rx="5" fill={skin} />
          <path d="M8.6 -1.4H13.4M8.6 2H13.2" stroke={shade} strokeWidth="1" strokeLinecap="round" />
        </g>
      );
    case 'grip':
      return (
        <g>
          <rect x="1" y="-5.6" width="11.6" height="11.2" rx="5" fill={skin} />
          <path d="M8.4 -2.6V3M11 -2V2.4" stroke={shade} strokeWidth="1" strokeLinecap="round" />
          {thumb}
        </g>
      );
    default:
      return (
        <g>
          <circle cx="6.4" cy="0" r="6" fill={skin} />
          <path d="M9.6 -3Q11.8 0 9.6 3" fill="none" stroke={shade} strokeWidth="1" strokeLinecap="round" />
          {thumb}
        </g>
      );
  }
}

/** Props, drawn upright around the hand's centre. */
function PropArt({ prop }: { prop: Prop }) {
  switch (prop) {
    case 'mug':
      // Henk's coffee: a big white mug with a red band and steam, his fingers round it.
      return (
        <g transform="translate(-3 -2)">
          <path d="M-2 -9H15L14 8Q13.6 10.4 11 10.4H2Q-0.6 10.4 -1 8Z" fill="#f4f7f9" />
          <path d="M10.6 -9H15L14 8Q13.6 10.4 11 10.4H9.6Q11.6 2 10.6 -9Z" fill="#cfd8de" />
          <path d="M15 -5Q20.4 -5 20.4 0Q20.4 5 14.4 5" fill="none" stroke="#dfe6ec" strokeWidth="2.6" />
          <rect x="-1.6" y="-3.6" width="16.2" height="3.4" fill="#ff4b4b" />
          <ellipse cx="6.5" cy="-9" rx="8.5" ry="2.2" fill="#6b3f22" />
          <ellipse cx="6.5" cy="-9" rx="8.5" ry="2.2" fill="none" stroke="#f4f7f9" strokeWidth="1.2" />
          <path d="M3.6 -13.4Q2 -16.6 4 -19.4M9.4 -13.8Q7.8 -17.2 9.8 -20" fill="none" stroke="#c9d3da" strokeWidth="1.5" strokeLinecap="round" opacity=".8" />
        </g>
      );
    case 'clipboard':
      return (
        <g transform="rotate(-7) translate(-3 -16)">
          <rect x="0" y="0" width="19" height="25" rx="2.4" fill="#b47a45" />
          <rect x="2.4" y="3.4" width="14.2" height="19" rx="1" fill="#fff" />
          <path d="M5 9H14M5 12.6H14M5 16.2H11" stroke="#9aa5ab" strokeWidth="1.3" strokeLinecap="round" />
          <rect x="5.6" y="-1.6" width="7.8" height="4.4" rx="1.4" fill="#8a96a0" />
        </g>
      );
    case 'pot':
      // A terracotta pot with a seedling (greenhouse).
      return (
        <g transform="translate(6 -8) scale(1.3)">
          <path d="M0 -4C-3 -9 -7 -10 -9 -9C-8 -5 -4 -4 0 -4ZM0 -6C2 -12 7 -13 9 -12C9 -7 4 -5 0 -5Z" fill="#7ac70c" />
          <path d="M0 -4V3" stroke="#58a700" strokeWidth="1.8" />
          <path d="M-9 1H9L7 14Q6.6 15.6 5 15.6H-5Q-6.6 15.6 -7 14Z" fill="#e0703f" />
          <path d="M4 1H9L7 14Q6.6 15.6 5 15.6H3.6Q5 8 4 1Z" fill="#c0552a" />
          <rect x="-10.4" y="-0.6" width="20.8" height="4.6" rx="1.6" fill="#ef8a57" />
        </g>
      );
    default:
      // Handheld barcode scanner: dark grey with an orange grip and a red window.
      return (
        <g transform="translate(-1 -5)">
          <path d="M-4 -12Q-4 -15 -1 -15H6Q9 -15 9 -12V-4Q9 -2 7 -1L4 1V8H-1V-1Q-4 -2 -4 -5Z" fill="#3c4a56" />
          <path d="M5 -15H6Q9 -15 9 -12V-4Q9 -2 7 -1L4 1V8H2.6V0L6 -2.6Z" fill="#26313a" />
          <path d="M-1 0H4V8H-1Z" fill="#ff8a1f" />
          <rect x="-2" y="-13" width="9" height="3.6" rx="1.2" fill="#ff4b4b" />
          <rect x="-0.6" y="-12.2" width="3" height="1.2" rx=".6" fill="#ffb3b3" />
        </g>
      );
  }
}

/** One rigged arm. `side` is the viewer's side. */
function Arm({ pose, look, side }: { pose: ArmPose; look: Look; side: 'l' | 'r' }) {
  const [sx, sy] = look.shoulders[side === 'l' ? 0 : 1];
  const [U, F] = look.arm;
  const ex = sx + U;
  const wx = ex + F;
  const flip = side === 'l' ? !pose.m : !!pose.m;
  const fore = look.bareForearm ? look.skin : look.sleeve;
  return (
    <g className={`ch-arm ch-arm-${side} ${pose.act ? `ch-act-${pose.act}` : ''}`} style={at(sx, sy)}>
      <g className="ch-j" style={rot(pose.a, sx, sy)}>
        {limb(sx, sy, U + 1, 6.6, 5.8, look.sleeve)}
        <g className={`ch-fore ${pose.beat ? 'ch-beat' : ''}`} style={at(ex, sy)}>
          <g className="ch-j" style={rot(pose.e - pose.a, ex, sy)}>
            {look.bareForearm && limb(ex - 7, sy, 5, 6.6, 6.2, look.sleeve)}
            {limb(ex, sy, F - 2, look.bareForearm ? 4.6 : 5.8, look.bareForearm ? 3.6 : 5.2, fore)}
            {!look.bareForearm && limb(wx - 4.4, sy, 2.6, 5.6, 5.6, look.cuff)}
            {limb(wx - 2.4, sy, 3, 3.4, 3.2, look.skin)}
            <g className="ch-j" style={rot(pose.w - pose.e, wx, sy)}>
              <g className="ch-hand" style={at(wx, sy)}>
                <g transform={`translate(${wx} ${sy})`}>
                  {pose.prop && (
                    <g className="ch-j" style={rot(-pose.w, 7, 0)}>
                      <g transform="translate(7 0)">
                        <PropArt prop={pose.prop} />
                      </g>
                    </g>
                  )}
                  <g transform={flip ? 'scale(1 -1)' : undefined}>
                    <Hand kind={pose.hand} skin={look.skin} shade={look.shade} />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  );
}

/** Which face a mood shows. */
function exprFor(mood: Mood): Expr {
  switch (mood) {
    case 'thinking':
      return 'thinking';
    case 'pleased':
    case 'wave':
      return 'pleased';
    case 'sad':
      return 'disappointed';
    case 'happy':
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
  // The reaction (~800 ms) shows its face first; any talking waits until it has landed.
  const reacting = useOneShot(mood === 'happy', 800);
  const talking = (!!talkingProp || mood === 'talking') && !reacting;
  const frame = useTalkFrame(talking);
  const expr = exprFor(mood);
  const pose = crop === 'head' ? { ...POSES[who].idle, tilt: 0, lean: 0 } : poseFor(who, mood);
  const id = useId().replace(/[^a-zA-Z0-9_-]/g, '');
  const faceClip = `chf-${id}`;
  const torsoClip = `cht-${id}`;
  const viewBox = crop === 'head' ? '20 8 80 84' : '0 0 120 140';
  const ratio = crop === 'head' ? 1 : 120 / 140;
  const blush = face.blush?.(expr) ?? 0.35;
  const arms = [<Arm key="l" pose={pose.l} look={look} side="l" />, <Arm key="r" pose={pose.r} look={look} side="r" />];
  const figure = (
    <>
      {crop !== 'head' && <ellipse className="ch-shadow" cx="60" cy="135" rx="33" ry="4.5" fill="#000" opacity=".18" />}
      <g className="ch-fig">
        <g className="ch-j" style={rot(pose.lean, 60, 134)}>
          <g className="ch-pulse">
            {crop !== 'head' && (
              <>
                {arms.filter((_, i) => (i === 0 ? pose.l : pose.r).back)}
                {look.torso(torsoClip)}
              </>
            )}
            <g className="ch-j" style={rot(pose.tilt, 60, 94)}>
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
                  <ellipse cx={100 + pose.turn * 2} cy="58" rx="27" ry="48" fill={look.shade} opacity=".5" />
                  {look.faceExtra}
                </g>
                <g className="ch-j ch-turn" style={{ translate: `${pose.turn}px 0` }}>
                  <g className="ch-look">
                    <ellipse cx="42" cy="74" rx="4.8" ry="3.2" fill="#ff7b7b" opacity={blush} />
                    <ellipse cx="78" cy="74" rx="4.8" ry="3.2" fill="#ff7b7b" opacity={blush} />
                    <g className="ch-eyes" style={{ '--blink': `${look.blink}s` } as React.CSSProperties}>
                      {face.eyes(talking && expr === 'thinking' ? 'neutral' : expr, look.skin)}
                    </g>
                    <g className="ch-brows">{face.brows(expr, look.brow)}</g>
                    {face.nose(look.shade)}
                    <g className="ch-mouth">{frame !== null ? face.talk(frame) : face.mouth(expr)}</g>
                  </g>
                </g>
                {look.front}
                {mood === 'sad' && (
                  <path className="ch-sweat" d="M92 40Q96 47 96 50A4 4 0 0 1 88 50Q88 47 92 40Z" fill="#8fdcff" />
                )}
              </g>
            </g>
            {crop !== 'head' && arms.filter((_, i) => !(i === 0 ? pose.l : pose.r).back)}
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
        <clipPath id={torsoClip}><path d={TORSOS[who]} /></clipPath>
      </defs>
      {flip ? <g transform="translate(120 0) scale(-1 1)">{figure}</g> : figure}
    </svg>
  );
}

/**
 * Just the head of a cast member (hair, hat, face and features), in the 120 x 140 character
 * box with the neck base at (60, 92). The full-body action poses in Celebrate.tsx put it on
 * their own bodies, so the faces stay exactly those of the cast. `squint` squeezes the eyes
 * shut with joy (^ ^) instead of the expression's own eyes.
 */
export function CastHead({ who, expr = 'joy', squint = false, blink, bold = false, gaze = [0, -1] }: {
  who: CharacterId;
  expr?: Expr;
  squint?: boolean;
  /** Blink rhythm in seconds (defaults to the character's own). */
  blink?: number;
  /** Mascot mode for the celebrations: oversized eyes with big pupils, thick raised brows,
   *  and no fine detail (a plain dome hat without highlight bands). */
  bold?: boolean;
  /** Where the big pupils look (-1..1 each way), bold mode only. */
  gaze?: [number, number];
}) {
  const look = LOOKS[who];
  const face = FACES[who];
  const clip = `chh-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
  const blush = face.blush?.(expr) ?? 0.35;
  return (
    <g className="cast-head">
      <defs>
        <clipPath id={clip}>{look.face('#000')}</clipPath>
      </defs>
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
      <g clipPath={`url(#${clip})`}>
        <ellipse cx="100" cy="58" rx="27" ry="48" fill={look.shade} opacity=".5" />
        {look.faceExtra}
      </g>
      <ellipse cx="42" cy="74" rx="5.4" ry="3.6" fill="#ff7b7b" opacity={squint ? 0.6 : blush} />
      <ellipse cx="78" cy="74" rx="5.4" ry="3.6" fill="#ff7b7b" opacity={squint ? 0.6 : blush} />
      {bold ? (
        <BoldEyes blink={blink ?? look.blink} gaze={gaze} brow={look.brow} />
      ) : squint ? (
        <path
          d="M43 66Q50 56 57 65M63 65Q70 56 77 66"
          fill="none"
          stroke="#2f2a28"
          strokeWidth="3.8"
          strokeLinecap="round"
        />
      ) : (
        <g className="ch-eyes" style={{ '--blink': `${blink ?? look.blink}s` } as React.CSSProperties}>
          {face.eyes(expr, look.skin)}
        </g>
      )}
      {!bold && <g className="ch-brows">{face.brows(expr, look.brow)}</g>}
      {bold ? <ellipse cx="60" cy="73" rx="3.6" ry="2.7" fill={look.shade} /> : face.nose(look.shade)}
      <g className="ch-mouth">{bold ? <BoldMouth /> : face.mouth(expr)}</g>
      {bold && BOLD_FRONT[who] ? BOLD_FRONT[who] : look.front}
    </g>
  );
}

/** Bold-mode headwear: the same items as the cast's, as single flat shapes. */
const BOLD_FRONT: Partial<Record<CharacterId, React.ReactNode>> = {
  bram: (
    <g>
      <path d="M30 41C30 17 43 4 60 4C77 4 90 17 90 41Z" fill="#ffc800" />
      <path d="M77 9C86 17 90 28 90 41H79C79 29 79 18 77 9Z" fill="#e5a400" opacity=".6" />
      <rect x="21" y="34" width="78" height="10" rx="5" fill="#e5a400" />
    </g>
  ),
};

/** Oversized eyes: big whites, huge pupils with a catch-light, thick brows arched high. */
function BoldEyes({ blink, gaze, brow }: { blink: number; gaze: [number, number]; brow: string }) {
  const cy = 62;
  const [gx, gy] = gaze;
  const eye = (cx: number, tilt: number) => (
    <g>
      <ellipse cx={cx} cy={cy} rx="10" ry="11.5" fill="#fff" transform={`rotate(${tilt} ${cx} ${cy})`} />
      <circle cx={cx + gx * 3} cy={cy + gy * 3.4} r="6.6" fill="#2a1f1c" />
      <circle cx={cx + gx * 3 - 2.4} cy={cy + gy * 3.4 - 2.6} r="2.5" fill="#fff" />
      <circle cx={cx + gx * 3 + 2.4} cy={cy + gy * 3.4 + 2.4} r="1.1" fill="#fff" />
    </g>
  );
  return (
    <>
      <g className="ch-eyes" style={{ '--blink': `${blink}s` } as React.CSSProperties}>
        {eye(48.5, -8)}
        {eye(71.5, 8)}
      </g>
      <path
        className="ch-brows"
        d={`M38 ${cy - 12}Q46 ${cy - 21} 55 ${cy - 14}M65 ${cy - 15}Q74 ${cy - 23} 83 ${cy - 12}`}
        fill="none"
        stroke={brow}
        strokeWidth="5"
        strokeLinecap="round"
      />
    </>
  );
}

/** A wide-open cheering mouth with a tongue: one shape, readable at any size. */
function BoldMouth() {
  return (
    <g>
      <path d="M48 77Q60 80 73 75Q72 91 60.5 91Q49 91 48 77Z" fill="#7a2230" />
      <path d="M52.5 85.5Q60 80.5 68.5 85Q61 92 52.5 85.5Z" fill="#ff7b8a" />
    </g>
  );
}

/** True for `ms` after `on` turns true (never with reduced motion: there is no jump to wait for). */
function useOneShot(on: boolean, ms: number): boolean {
  const [active, setActive] = useState(false);
  useLayoutEffect(() => {
    if (!on || prefersReducedMotion()) return;
    setActive(true);
    const t = window.setTimeout(() => setActive(false), ms);
    return () => {
      window.clearTimeout(t);
      setActive(false);
    };
  }, [on, ms]);
  return on && active;
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
