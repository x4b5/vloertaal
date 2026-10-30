import { THEME_UNITS, type ThemeId } from '../content/themes';

/**
 * "Tempo" in Settings (Lessen): how fast the Dutch is played. On the work floor nobody speaks at
 * 0.75×, so a learner who already understands a lot can choose the real pace.
 *  - 'calm' ("Rustig", the default): recordings at 0.75×, the phone's voice at 0.75 (as before).
 *  - 'normal' ("Normaal"): recordings at 1.0×, the phone's voice at about 0.95 (natural).
 * The turtle ("Langzaam") stays as slow as it was in both. Only the Taal track: the work-rules
 * track keeps its own pace (src/lib/audio.ts DEVICE_RATE_RULES) and has no tempo setting.
 * Stored in Progress.tempo; missing (older saves) = 'calm'.
 */
export type Tempo = 'calm' | 'normal';

export const TEMPOS: readonly Tempo[] = ['calm', 'normal'];

export const isTempo = (x: unknown): x is Tempo => x === 'calm' || x === 'normal';

/** The stored tempo, also for older saves (missing or unknown = calm). */
export function tempoOf(p: { tempo?: unknown }): Tempo {
  return isTempo(p.tempo) ? p.tempo : 'calm';
}

/**
 * The later themes of the Taal path: there the SECOND time the same line is played in a lesson
 * plays at the real pace (1.0×), also on "Rustig". The first time stays calm, so the learner
 * hears it clearly first and then as a colleague would say it.
 *
 * Why these four: the themes are shown in this order (src/content/themes.ts THEMES) and the
 * guided path follows it roughly. The first half (Starten, Veilig werken, Werk vinden, Je baan)
 * holds the first words and the basics; the second half (Samenwerken, Je rechten, Leven in
 * Nederland, Jouw sector) is reached when a learner already knows a lot of Dutch. That is the
 * last half of the eight themes.
 */
export const REAL_PACE_REPLAY_THEMES: readonly ThemeId[] = ['theme.together', 'theme.rights', 'theme.life', 'theme.sector'];

const replayUnits = new Set(REAL_PACE_REPLAY_THEMES.flatMap((t) => THEME_UNITS[t].taal));

/**
 * Does a replay in a lesson of this unit play at the real pace? Only a Taal unit in one of the
 * later themes; never a work-rules unit (its ids are not in the Taal lists), never a lesson
 * outside a unit (undefined: the daily review mixes units, it stays as it is). Pure: the lesson
 * player looks the unit up (src/content/courses.ts unitOfLesson), so audio.ts needs no content.
 */
export function realPaceReplay(unitId: string | undefined): boolean {
  return Boolean(unitId && replayUnits.has(unitId));
}

/** Playback rate of a recording ("normal" = not the turtle). */
export const RECORDED_RATE = { calm: 0.75, real: 1, slow: 0.5 } as const;
/** Rate of the phone's own voice. */
export const DEVICE_RATE = { calm: 0.75, real: 0.95, slow: 0.45 } as const;
/** The work-rules track: the phone's voice at an easy but normal pace; its tempo never changes. */
export const DEVICE_RATE_RULES = 0.9;

/** How a line is played: the turtle, calm or at the real pace. */
export type Pace = 'slow' | 'calm' | 'real';

/**
 * The pace of one play. `slow`: the turtle (always slow). Else the real pace when the learner
 * chose "Normaal", or when this line was already played once in a lesson of a later theme.
 * The work-rules track: always 'calm' (its own rate, see deviceRateFor).
 */
export function paceOf(opts: { slow: boolean; tempo: Tempo; rules: boolean; replay: boolean; heardBefore: boolean }): Pace {
  if (opts.slow) return 'slow';
  if (opts.rules) return 'calm';
  if (opts.tempo === 'normal') return 'real';
  return opts.replay && opts.heardBefore ? 'real' : 'calm';
}

/** The rate of a recording at a pace. */
export function recordedRateFor(pace: Pace): number {
  return RECORDED_RATE[pace];
}

/** The rate of the phone's voice at a pace (the work-rules track has its own normal pace). */
export function deviceRateFor(pace: Pace, rules: boolean): number {
  if (pace === 'slow') return DEVICE_RATE.slow;
  return rules ? DEVICE_RATE_RULES : DEVICE_RATE[pace];
}
