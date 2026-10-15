import { describe, expect, it } from 'vitest';
import { units } from '../src/content/curriculum';
import { isMixLesson } from '../src/content/review';
import { helpLanguages } from '../src/i18n/all';
import { POCKET_SIZE, pocketPhrases, pocketPicks } from '../src/lib/pocket';
import { tipForLesson } from '../src/content/culture';
import { readFileSync } from 'node:fs';

const teaching = (u: (typeof units)[number]) => u.lessons.filter((l) => !isMixLesson(l));

describe('pocket card phrases', () => {
  it('gives every unit five different phrases of its own', () => {
    for (const unit of units) {
      const phrases = pocketPhrases(unit);
      expect(phrases, unit.id).toHaveLength(POCKET_SIZE);
      expect(new Set(phrases.map((p) => p.nl.toLowerCase())).size, unit.id).toBe(POCKET_SIZE);
      const own = new Set(teaching(unit).flatMap((l) => [...l.words, ...l.sentences, ...(l.dialogues ?? []).flatMap((d) => [d.prompt, d.reply]), ...(tipForLesson(l.id) ? [tipForLesson(l.id)!.phrase] : [])].map((x) => x.id)));
      for (const p of phrases) expect(own.has(p.id), `${unit.id}: ${p.id}`).toBe(true);
    }
  });

  it('prefers sentences, short ones, from every lesson in turn', () => {
    for (const unit of units) {
      if (pocketPicks[unit.id]) continue;
      const phrases = pocketPhrases(unit);
      const sentences = teaching(unit).flatMap((l) => l.sentences);
      // Whole lines: sentences, or a lesson's "Zeg het zo" line (c.*.p).
      if (sentences.length >= POCKET_SIZE) expect(phrases.every((p) => p.id.startsWith('s.') || /^c\..+\.p$/.test(p.id)), unit.id).toBe(true);
      for (const p of phrases) expect(p.nl.length, p.nl).toBeLessThanOrEqual(40);
      const lessonsCovered = new Set(phrases.map((p) => teaching(unit).find((l) => l.sentences.some((s) => s.id === p.id) || tipForLesson(l.id)?.phrase.id === p.id)?.id));
      expect(lessonsCovered.size, unit.id).toBeGreaterThanOrEqual(Math.min(2, teaching(unit).length));
    }
  });

  it('puts the hand-picked lines first, in their order', () => {
    for (const [unitId, ids] of Object.entries(pocketPicks)) {
      const unit = units.find((u) => u.id === unitId)!;
      expect(pocketPhrases(unit).map((p) => p.id).slice(0, ids.length)).toEqual(ids.slice(0, POCKET_SIZE));
    }
  });

  it('puts the lessons\' "Zeg het zo" lines first (G4 b3), and the rights units\' action lines', () => {
    for (const unit of units) {
      if (pocketPicks[unit.id]) continue;
      const tips = teaching(unit).flatMap((l) => tipForLesson(l.id)?.phrase ?? []).filter((t) => t.nl.length <= 40);
      expect(pocketPhrases(unit).slice(0, tips.length).map((p) => p.id), unit.id).toEqual(tips.map((t) => t.id));
    }
    const nl = (id: string) => pocketPhrases(units.find((u) => u.id === id)!).map((p) => p.nl);
    expect(nl('u.exploit')).toContain('Ik wil mijn paspoort terug.');
    expect(nl('u.rights')).toContain('Ik wil eerst advies vragen.');
    expect(nl('u.contract')).toContain('Mag ik het contract eerst lezen?');
    expect(nl('u.health')).toContain('Ik wil een afspraak bij de huisarts.');
  });

  it('has a recorded clip for every phrase on every card', () => {
    const voices = JSON.parse(readFileSync('public/audio-el/voices.json', 'utf8')).voices as { said: Record<string, string> }[];
    const said = new Set(voices.flatMap((v) => Object.values(v.said)));
    // Changed text, recorded on the next "Record ElevenLabs voices" run (the phone voice says it meanwhile).
    const pending = new Set(['Het heeft spoed.', 'Wilt u even tegen mijn telefoon praten?']);
    for (const unit of units) for (const p of pocketPhrases(unit)) if (!pending.has(p.nl)) expect(said.has(p.nl), `${unit.id} ${p.nl}`).toBe(true);
  });

  it('gives a picture where the sentence names a pictured word', () => {
    const safety = pocketPhrases(units.find((u) => u.id === 'u.safety')!);
    expect(safety.find((p) => p.id === 's.gear.1')?.picture?.id).toBe('w.helm');
    // Most phrases across the course come with a picture.
    const all = units.flatMap((u) => pocketPhrases(u));
    expect(all.filter((p) => p.picture).length / all.length).toBeGreaterThan(0.6);
  });

  it('has every phrase translated in every help language', () => {
    for (const unit of units)
      for (const p of pocketPhrases(unit))
        for (const lang of helpLanguages) expect(lang.gloss[p.id]?.trim(), `${lang.code} ${p.id}`).toBeTruthy();
  });
});
