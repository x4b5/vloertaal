import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { aboutSections, siteSections } from '../src/content/about';
import { taalTips } from '../src/content/culture';
import { allCountriesTaalUnits, units } from '../src/content/curriculum';
import { proSections } from '../src/content/pro';
import { rulesUnits, sectorRulesUnits } from '../src/content/regels';
import { askWhoCard } from '../src/content/regels/askWho';
import { beRulesUnits, beSectorRulesUnits } from '../src/content/regels/be';
import { helpRowsFor } from '../src/content/regels/help';
import { pictureIdOf } from '../src/content/taalBe/ids';
import { THEMES } from '../src/content/themes';
import { emojiIconId } from '../src/content/tipIcons';
import { unitIcon } from '../src/content/unitIcons';
import { uiEn } from '../src/i18n/types';
import { uiNl } from '../src/i18n/nl';

/**
 * "Alleen SVG" (the owner's rule, 31 October 2026): the app shows no emoji, only its own
 * drawings. WordPicture draws an emoji's drawing (src/content/tipIcons.ts emojiIconId) and never
 * the emoji; this test makes sure every emoji of the app's own content has one.
 */
const EMOJI = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B50}]/u;

async function drawings() {
  const words = (await import('../src/pictures/words')).default as Record<string, unknown>;
  const { iconPictures } = await import('../src/pictures');
  return (id: string) => Boolean(id && (words[id] ?? iconPictures[id]));
}

describe('only SVG, no emoji', () => {
  it('every word with a picture has a drawing', async () => {
    const has = await drawings();
    const missing = [...units, ...allCountriesTaalUnits()].flatMap((u) => u.lessons.flatMap((l) => l.words))
      .filter((w) => w.picture !== false && !has(pictureIdOf(w.id)) && !has(w.id)).map((w) => w.id);
    expect([...new Set(missing)]).toEqual([]);
  });

  it('every topic of both tracks has a drawing', async () => {
    const has = await drawings();
    const all = [...units, ...allCountriesTaalUnits(), ...rulesUnits, ...sectorRulesUnits, ...beRulesUnits, ...beSectorRulesUnits];
    expect(all.filter((u) => !has(unitIcon(u.id))).map((u) => u.id)).toEqual([]);
  });

  it('every emoji in the content has a drawing', async () => {
    const has = await drawings();
    const emoji = new Map<string, string>();
    const add = (e: string | undefined, where: string) => { if (e) emoji.set(e, where); };
    for (const t of taalTips()) add(t.emoji, t.id);
    for (const t of THEMES) add(t.emoji, t.id);
    for (const s of [...aboutSections, ...siteSections]) add(s.emoji, s.id);
    for (const s of proSections) add(s.emoji, s.id);
    for (const u of [...rulesUnits, ...sectorRulesUnits, ...beRulesUnits, ...beSectorRulesUnits])
      for (const l of u.lessons) {
        add(l.icon, l.id);
        for (const s of l.steps) {
          if (s.kind === 'rule') add(s.emoji, s.id);
          if (s.kind === 'whoask') for (const o of s.options) add(askWhoCard(o.who, s.id).emoji, s.id);
        }
      }
    for (const c of ['nl', 'be'] as const) for (const r of helpRowsFor(c)) add(r.emoji, r.id);
    // The emoji written in the components themselves (cards, links, the region's map).
    for (const e of ['💬', '💡', '📘', '📝', '📍', '🗺️', '🗓️', '🧾', '📦', '🏷️', '📋']) add(e, 'component');
    const missing = [...emoji].filter(([e]) => !has(emojiIconId(e))).map(([e, w]) => `${e} (${w})`);
    expect(missing).toEqual([]);
  });

  it('no emoji in the interface texts, except the speaker, which is drawn as an icon', () => {
    for (const [k, v] of Object.entries({ ...uiEn, ...uiNl })) {
      const text = typeof v === 'string' ? v : JSON.stringify(v);
      expect(text.replace(/🔊/gu, ''), k).not.toMatch(EMOJI);
    }
    expect(readFileSync('src/components/Bi.tsx', 'utf8')).toContain("includes('🔊')");
  });
});
