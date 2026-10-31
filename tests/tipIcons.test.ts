import { describe, expect, it } from 'vitest';
import { taalTips } from '../src/content/culture';
import { helpRowsFor } from '../src/content/regels/help';
import { emojiIconId, tipIcons } from '../src/content/tipIcons';

describe('drawings in the Hulp tab of the language course', () => {
  it('every drawing in the table exists', async () => {
    const { loadPictures, iconPictures } = await import('../src/pictures');
    await loadPictures();
    const { pictures } = await import('../src/pictures');
    for (const [emoji, id] of Object.entries(tipIcons)) expect(Boolean(pictures[id] ?? iconPictures[id]), `${emoji}: ${id}`).toBe(true);
  });

  it('gives most tips and the help rows a drawing; the rest keep their emoji', () => {
    const tips = taalTips();
    const drawn = tips.filter((t) => emojiIconId(t.emoji)).length;
    expect(drawn / tips.length).toBeGreaterThan(0.5);
    for (const country of ['nl', 'be'] as const) {
      const rows = helpRowsFor(country);
      expect(rows.filter((r) => emojiIconId(r.emoji)).length, country).toBeGreaterThan(rows.length / 2);
    }
    expect(emojiIconId('🫠')).toBe('');
  });
});
