import { readFileSync } from 'node:fs';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { beforeAll, describe, expect, it } from 'vitest';
import { PauseSheet } from '../src/components/LessonPlayer';
import { getHelpLanguage, registerPack, ui } from '../src/i18n/all';
import nlPack from '../src/i18n/packs/nl';
import type { HelpLanguage } from '../src/i18n/types';

/*
 * The pause sheet behind the ✕: [Keep going] [Without sound] [Stop]. "Without sound" is one
 * on/off button with one meaning: the same label and crossed-out speaker in both states, pressed
 * (with a check) while the sound is off. It used to become "Sound on" with a speaker while
 * pressed: a screen reader said "Sound on, pressed" with the sound off (4 November 2026).
 */

beforeAll(() => registerPack(nlPack));

const draw = (soundOff: boolean, lang?: HelpLanguage) =>
  renderToStaticMarkup(createElement(PauseSheet, { lang, kept: true, soundOff, onKeep: () => {}, onSound: () => {}, onStop: () => {} }));
const soundButton = (html: string) => /<button[^>]*sheet-sound[^>]*>[\s\S]*?<\/button>/.exec(html)?.[0] ?? '';
const icon = (button: string) => /<span class="sheet-second-icon"[^>]*>([\s\S]*?)<\/span>/.exec(button)?.[1] ?? '';

describe('the pause sheet', () => {
  for (const code of ['pl', 'ar', 'nl', undefined] as const) {
    const lang = code ? getHelpLanguage(code) : undefined;
    it(`has three buttons and one "Without sound" toggle, in ${code ?? 'English only'}`, () => {
      const on = draw(false, lang);
      const off = draw(true, lang);
      for (const html of [on, off]) expect(html.match(/<button\b/g)).toHaveLength(3);
      const [bOn, bOff] = [soundButton(on), soundButton(off)];
      // The state is in aria-pressed, not in the label.
      expect(bOn).toContain('aria-pressed="false"');
      expect(bOff).toContain('aria-pressed="true"');
      for (const b of [bOn, bOff]) {
        expect(b).toContain(ui('withoutSound', lang).en);
        if (lang) expect(b).toContain(lang.ui.withoutSound);
        expect(b).not.toContain(ui('soundOn', lang).en);
        if (lang) expect(b).not.toContain(lang.ui.soundOn);
      }
      // The same crossed-out speaker in both states.
      expect(icon(bOn)).toBeTruthy();
      expect(icon(bOff)).toBe(icon(bOn));
      // Pressed is visible too: the picked look and a check; not pressed: neither.
      expect(bOff).toMatch(/class="[^"]*\bpicked\b/);
      expect(bOff).toContain('sheet-sound-check');
      expect(bOn).not.toMatch(/class="[^"]*\bpicked\b/);
      expect(bOn).not.toContain('sheet-sound-check');
    });
  }

  it('styles the pressed toggle like a picked card', () => {
    const css = readFileSync(new URL('../src/styles.css', import.meta.url), 'utf8');
    expect(css).toMatch(/\.sheet-sound\.picked[^{]*\{[^}]*border-color: var\(--edge-strong\)/);
    expect(css).toMatch(/\.sheet-sound-check\s*\{/);
  });
});
