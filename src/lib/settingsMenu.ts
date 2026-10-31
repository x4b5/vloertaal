/**
 * Settings as a small menu (at most three choices on a page): three rows ("Language & me",
 * "Lessons", "This phone"), each opening a list with one row per setting, and each setting on a
 * page of its own with at most three options. Pure, so the shape is tested (tests/settingsMenu.test.ts).
 */
export type SettingsList = 'me' | 'lessons' | 'phone';

export type SettingsPage =
  | SettingsList
  | 'route' | 'language' | 'gender' | 'sector' | 'sector-build' | 'sector-make' | 'sector-care' | 'sector-shop' | 'region' | 'country' | 'english' | 'certificates'
  | 'sound' | 'voice' | 'tempo' | 'speaking' | 'writing' | 'text' | 'theme'
  | 'offline' | 'reminder' | 'reminder-time' | 'install' | 'backup' | 'counting' | 'reset' | 'unlock'
  /** "Wat ken je al?": a screen of its own (App, src/components/Toets.tsx ToetsPage), from Lessen. */
  | 'toets'
  /** "Laat zien hoe het gaat": the coach card, a screen of its own (App, src/components/Certificate.tsx
   *  CoachCardScreen), from Taal en ik, under "Mijn certificaten". */
  | 'kaart'
  /** "Laat de telefoon luisteren (proef)", under "Spreken oefenen": only on a phone that can
   *  recognise Dutch on the device (src/lib/listen.ts). */
  | 'listen'
  /** "Sneller leren" (src/lib/pace.ts): on or off, from Lessen, right under Tempo. */
  | 'faster';

/** The page each page is opened from (null: the Settings menu itself). */
export const SETTINGS_PARENT: Record<SettingsPage, SettingsPage | null> = {
  me: null,
  lessons: null,
  phone: null,
  route: 'me',
  language: 'me',
  gender: 'me',
  sector: 'me',
  'sector-build': 'sector',
  'sector-make': 'sector',
  'sector-care': 'sector',
  'sector-shop': 'sector',
  region: 'me',
  country: 'me',
  english: 'me',
  certificates: 'me',
  sound: 'lessons',
  voice: 'lessons',
  tempo: 'lessons',
  speaking: 'lessons',
  writing: 'lessons',
  text: 'lessons',
  theme: 'lessons',
  offline: 'phone',
  reminder: 'phone',
  // With a reminder in the calendar, its page offers another time (this page) or Stop.
  'reminder-time': 'reminder',
  install: 'phone',
  backup: 'phone',
  counting: 'phone',
  reset: 'phone',
  unlock: 'phone',
  toets: 'lessons',
  kaart: 'me',
  listen: 'lessons',
  faster: 'lessons',
};

/** How many steps below the Settings menu a page is (0 = the menu). */
export function settingsDepth(page?: SettingsPage | null): number {
  let n = 0;
  for (let p = page ?? null; p; p = SETTINGS_PARENT[p]) n++;
  return n;
}

/** Pages that are lists (one kind of row, one tap per row): they keep a Back button. */
export const SETTINGS_LIST_PAGES: SettingsPage[] = ['me', 'lessons', 'phone', 'language', 'sector', 'certificates'];

export interface SettingsContext {
  /** A help language is chosen (else "Show English too" has nothing to do). */
  helpLang: boolean;
  /** The help language changes for a woman or a man. */
  gender: boolean;
  /** The preview: "Unlock the full version" is offered. */
  preview: boolean;
  /** The phone can add Vloertaal to its home screen now. */
  install: boolean;
  /** The phone can keep lessons (Cache Storage). */
  offline: boolean;
  /** The work-rules track (screens in Dutch only): no "Show English too", and no speaking or
   *  writing practice (its lessons have neither). Missing = the Dutch course. */
  rules?: boolean;
  /** Recorded (Vloertaal) voices are here. In the work-rules track the voice row is only there
   *  with them: the phone's own voice needs no choice. Missing = there are. */
  recorded?: boolean;
  /** The two learning routes are offered (src/lib/track.ts rulesTrackOn): "Wat wil je leren?" first.
   *  Missing = not offered. */
  routes?: boolean;
  /** "Waar woon je?" is offered (src/content/regio regionsOn). Missing = not offered. */
  region?: boolean;
  /** This phone can recognise Dutch on the device, or download it (src/lib/listen.ts
   *  localStatus): "Laat de telefoon luisteren (proef)" is offered. Missing = not offered. */
  listen?: boolean;
}

/** The rows of a list, in order. */
export function settingsRows(list: SettingsList, ctx: SettingsContext): SettingsPage[] {
  const rows: (SettingsPage | false)[] =
    list === 'me' ? [ctx.routes === true && 'route', (!ctx.rules || ctx.routes !== true) && 'language', !ctx.rules && ctx.gender && 'gender', 'sector', ctx.region === true && 'region', 'country', !ctx.rules && ctx.helpLang && 'english', 'certificates', 'kaart']
    : list === 'lessons' ? ['sound', (!ctx.rules || ctx.recorded !== false) && 'voice', !ctx.rules && 'tempo', !ctx.rules && 'faster', !ctx.rules && 'speaking', !ctx.rules && ctx.listen === true && 'listen', !ctx.rules && 'writing', 'text', 'theme', !ctx.rules && 'toets']
    : [ctx.preview && 'unlock', ctx.offline && 'offline', 'reminder', ctx.install && 'install', 'backup', 'counting', 'reset'];
  return rows.filter((r): r is SettingsPage => Boolean(r));
}

/* ---- Voice: Automatic, a woman's voice or a man's voice ---- */

export type VoiceChoice = 'auto' | 'f' | 'm';

interface VoiceInfo { key: string; gender?: string }

/** The recorded voice used for "Woman" and for "Man": the first of each. */
export function voiceRefs(recorded: VoiceInfo[]): Partial<Record<'f' | 'm', string>> {
  const f = recorded.find((v) => v.gender === 'female');
  const m = recorded.find((v) => v.gender === 'male');
  return { ...(f ? { f: `piper:${f.key}` } : {}), ...(m ? { m: `piper:${m.key}` } : {}) };
}

/** Which of the three a stored voice is (any recorded voice of that gender counts); null = a phone voice. */
export function voiceChoiceOf(ref: string | null, recorded: VoiceInfo[]): VoiceChoice | null {
  if (!ref) return 'auto';
  if (!ref.startsWith('piper:')) return null;
  const g = recorded.find((v) => v.key === ref.slice(6))?.gender;
  return g === 'female' ? 'f' : g === 'male' ? 'm' : null;
}
