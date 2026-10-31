// The short lines of the first pages to record in every help language (src/lib/helpAudio.ts): the
// questions and their short hints, not every text. Used by scripts/list-help-clips.ts (which writes
// public/audio-help/clips.json) and by tests/helpAudio.test.ts.
import { getHelpLanguage } from '../src/i18n/all';
import { languageMeta } from '../src/i18n/meta';
import type { Gender, LangCode, UiKey } from '../src/i18n/types';

/** Which page a line is on (for the person who records it). */
export type HelpClipPage = 'route' | 'raad' | 'vrouw-man' | 'werk' | 'land';

/** The lines, in the order of the pages. `langAsk` is "Polski?": the language's own name as a question. */
export const HELP_CLIP_KEYS: readonly { key: UiKey | 'langAsk'; page: HelpClipPage }[] = [
  { key: 'routeTitle', page: 'route' },
  { key: 'routeLearn', page: 'route' },
  { key: 'routeRules', page: 'route' },
  { key: 'langAsk', page: 'raad' },
  { key: 'langGuessYes', page: 'raad' },
  { key: 'langGuessOther', page: 'raad' },
  { key: 'genderTitle', page: 'vrouw-man' },
  { key: 'genderHint', page: 'vrouw-man' },
  { key: 'chooseSector', page: 'werk' },
  { key: 'sectorHint', page: 'werk' },
  { key: 'countryTitle', page: 'land' },
  { key: 'countryHint', page: 'land' },
];

export interface HelpClip {
  /** The file name without .mp3: the key, plus ".f", ".m" or ".x" for a form that differs by gender. */
  id: string;
  text: string;
  page: HelpClipPage;
}

/** Before the gender is known (the default form), then each gender's own form where it differs. */
const GENDERS: (Gender | undefined)[] = [undefined, 'f', 'm', 'x'];

/** The lines of one help language: each distinct text once (a form the same for all genders: one file). */
export function helpClipsFor(code: LangCode): HelpClip[] {
  const meta = languageMeta.find((l) => l.code === code);
  if (!meta) throw new Error(`Unknown help language ${code}`);
  const out: HelpClip[] = [];
  const seen = new Set<string>();
  const add = (id: string, text: string | undefined, page: HelpClipPage) => {
    const t = text?.trim();
    if (!t || seen.has(t)) return;
    seen.add(t);
    out.push({ id, text: t, page });
  };
  for (const { key, page } of HELP_CLIP_KEYS) {
    if (key === 'langAsk') {
      // As the guess page writes it (src/components/Screens.tsx): an Arabic question mark in right to left.
      add('langAsk', `${meta.nativeName}${meta.dir === 'rtl' ? '؟' : '?'}`, page);
      continue;
    }
    for (const g of GENDERS) {
      const lang = getHelpLanguage(code, g);
      if (!lang) throw new Error(`The pack of ${code} is not loaded`);
      add(g ? `${key}.${g}` : key, lang.ui[key], page);
    }
  }
  return out;
}

/** Every help language's lines. */
export function helpClipList(): Record<LangCode, HelpClip[]> {
  return Object.fromEntries(languageMeta.map((l) => [l.code, helpClipsFor(l.code)])) as Record<LangCode, HelpClip[]>;
}
