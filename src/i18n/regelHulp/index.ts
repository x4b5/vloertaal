import { useEffect, useState } from 'react';
import type { HelpLanguage, UiCode } from '../types';
import { oneAppOn } from '../../lib/oneApp';

/**
 * Fase 2 (docs/sporen.md): the key lines of the work rules in a help language, under the Dutch: a
 * rule card's title and a lesson's "Onthoud". Only with "Eén app" on (src/lib/oneApp.ts), and only
 * for the languages translated so far: Polish, Romanian and Bulgarian, the languages of most labour
 * migrants. Each file loads when it is first needed (a few kB), never for other learners.
 */
const loaders: Partial<Record<UiCode, () => Promise<{ default: Record<string, string> }>>> = {
  pl: () => import('./pl'),
  ro: () => import('./ro'),
  bg: () => import('./bg'),
};
const loaded = new Map<UiCode, Record<string, string>>();

/** The languages with these lines. */
export const RULE_HELP_LANGS = Object.keys(loaders) as UiCode[];

/** Loads a language's lines (once); nothing for a language without them. */
export function ensureRuleHelp(code: UiCode | null | undefined): Promise<void> {
  const load = code ? loaders[code] : undefined;
  if (!code || !load || loaded.has(code)) return Promise.resolve();
  return load().then((m) => { loaded.set(code, m.default); });
}

/** A Dutch line in the help language, when it is translated and loaded. */
export function ruleHelpText(code: UiCode | null | undefined, nl: string): string | undefined {
  return code ? loaded.get(code)?.[nl] : undefined;
}

/**
 * For a screen: a function from a Dutch line to its translation (undefined when there is none, the
 * switch is off, or the file is still on its way; the screen shows it once it is here).
 */
export function useRuleHelp(lang?: HelpLanguage): (nl: string) => string | undefined {
  const on = oneAppOn() && Boolean(lang && loaders[lang.code]);
  const [, setReady] = useState(0);
  useEffect(() => {
    if (!on || !lang || loaded.has(lang.code)) return;
    let live = true;
    ensureRuleHelp(lang.code).then(() => { if (live) setReady((n) => n + 1); }, () => {});
    return () => { live = false; };
  }, [on, lang]);
  return (nl) => (on ? ruleHelpText(lang?.code, nl) : undefined);
}
