import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { rulesUnits, sectorRulesUnits } from '../src/content/regels';
import { beRulesUnits, beSectorRulesUnits } from '../src/content/regels/be';
import { ASK_WHO, ASK_WHO_BE } from '../src/content/regels/askWho';
import { helpRowsFor } from '../src/content/regels/help';
import { ruleIconId, ruleIcons, rulePicture } from '../src/content/regels/ruleIcons';
import { zlRegelsUnit } from '../src/content/regio/zuid-limburg-regels';
import { iconPictures, loadPictures, WordPicture } from '../src/pictures';

/** Every emoji the work-rules track shows in a lesson, on a card or in "Wie bel je?". */
function trackEmoji(): Set<string> {
  const out = new Set<string>();
  for (const u of [...rulesUnits, ...sectorRulesUnits, ...beRulesUnits, ...beSectorRulesUnits, zlRegelsUnit]) {
    for (const l of u.lessons) {
      if (l.icon) out.add(l.icon);
      for (const s of l.steps) if (s.kind === 'rule') out.add(s.emoji);
    }
  }
  for (const c of [...Object.values(ASK_WHO), ...Object.values(ASK_WHO_BE)]) if (c) out.add(c.emoji);
  for (const r of [...helpRowsFor('nl'), ...helpRowsFor('be')]) out.add(r.emoji);
  return out;
}

describe('the work-rules drawings (src/content/regels/ruleIcons.ts)', () => {
  it('names only drawings that exist', async () => {
    await loadPictures();
    const { pictures } = await import('../src/pictures');
    for (const [emoji, id] of Object.entries(ruleIcons)) {
      expect(Boolean(pictures[id] ?? iconPictures[id]), `${emoji} → ${id}`).toBe(true);
    }
  });

  it('keys an emoji without its variation selector, and finds it with or without', () => {
    for (const emoji of Object.keys(ruleIcons)) expect(emoji, emoji).not.toMatch(/️/);
    expect(ruleIconId('⚖️')).toBe('i.rights');
    expect(ruleIconId('⚖')).toBe('i.rights');
    expect(ruleIconId('⛑️')).toBe('w.helm');
  });

  it('holds only emoji the track uses', () => {
    const used = new Set([...trackEmoji()].map((e) => e.replace(/️/g, '')));
    for (const emoji of Object.keys(ruleIcons)) expect(used.has(emoji), emoji).toBe(true);
  });

  it('draws most of the emoji of the track', () => {
    const all = [...trackEmoji()];
    expect(all.filter((e) => ruleIconId(e)).length / all.length).toBeGreaterThan(0.6);
  });

  it('never shows an emoji: one outside this table gets its drawing from the app-wide one, else an empty square', async () => {
    await loadPictures();
    expect(rulePicture('🧭')).toEqual({ id: '', emoji: '🧭' });
    // 🧭 is drawn by src/content/emojiArt (the compass), since "alleen SVG" (31 October 2026).
    const art = renderToStaticMarkup(createElement(WordPicture, { ...rulePicture('🧭'), size: 34 }));
    expect(art).toContain('<svg');
    const none = renderToStaticMarkup(createElement(WordPicture, { id: '', emoji: '🫠', size: 34 }));
    expect(none).not.toContain('<svg');
    expect(none.replace(/data-emoji="[^"]*"/, '')).not.toContain('🫠');
    const drawn = renderToStaticMarkup(createElement(WordPicture, { ...rulePicture('🧤'), size: 34 }));
    expect(drawn).toContain('<svg');
  });
});
