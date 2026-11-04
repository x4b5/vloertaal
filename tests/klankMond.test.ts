import { readFileSync } from 'node:fs';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { afterEach, describe, expect, it } from 'vitest';
import { endPose, KLANK_LESSONS, KLANKEN, klankenForLesson, klankHowId, partLetters, REST, wordSegments, type MouthPose } from '../src/content/klankMond';
import { soundLessons, soundsUnit } from '../src/content/sounds';
import { allLessons, units } from '../src/content/curriculum';
import { isMixLesson } from '../src/content/review';
import { TAAL_BE_INVENTORY } from '../src/content/taalBe/inventory';
import { CLIP_TAIL_S, holdMs, mouthGeometry, nominalWordMs, poseAtTime, spokenMs, STEPS, SLOW_FACTOR, WORD_STEPS, wordPoseAtTime } from '../src/components/Mouth';
import { KlankCard, klankText, MarkedWord, soundText } from '../src/components/KlankCard';
import { KlankOverview, KlankPage } from '../src/components/KlankScreens';
import { KlankStep } from '../src/components/KlankStep';
import { WordsHub } from '../src/components/Screens';
import { exerciseLines } from '../src/components/lessonLines';
import { getHelpLanguage, helpLanguageSources } from '../src/i18n/all';
import nlSounds from '../src/i18n/sounds/nl';
import { hasClip, setRecordedIndex, type ElevenIndex } from '../src/lib/audio';
import { buildLesson, isGraded, KLANK_STEPS_MAX, klankStepsFor, type Exercise } from '../src/lib/exercises';
import { DAILY_ID } from '../src/lib/spaced';

/**
 * "Hoe zeg je het?", a mouth per sound (src/content/klankMond.ts): every sound has a position, an
 * explanation in English, Dutch and every help language, and an example word with a picture and
 * a recording; the positions really differ the way the sounds do (also short against long); the
 * motion goes rest → sound → rest and ends where it started; the card has at most three things to
 * tap; the cards open the Klanken lessons for the sounds they practise, and are all under Hulp.
 */

const index = JSON.parse(readFileSync('public/audio-el/voices.json', 'utf8')) as ElevenIndex;
const said = (key: string) => new Set(Object.values(index.voices.find((v) => v.key === key)!.said).map((t) => t.trim().toLowerCase()));
const byId = Object.fromEntries(KLANKEN.map((k) => [k.id, k]));
const html = (el: Parameters<typeof renderToStaticMarkup>[0]) => renderToStaticMarkup(el);

afterEach(() => setRecordedIndex(null, null));

describe('the sounds', () => {
  it('are the long vowels, the short ones beside them, the round sounds and the diphthongs, each once (no consonants)', () => {
    expect(KLANKEN.map((k) => k.id)).toEqual(['a', 'aa', 'e', 'ee', 'i', 'ie', 'o', 'oo', 'u', 'uu', 'oe', 'eu', 'ui', 'ij', 'ou']);
    expect(KLANKEN.filter((k) => k.short).map((k) => k.id)).toEqual(['a', 'e', 'i', 'o', 'u']);
    expect(byId.ij.also).toBe('ei');
    expect(byId.ou.also).toBe('au');
    // g, ch and r need a side view: not here.
    expect(KLANKEN.some((k) => /[gr]|ch/.test(k.letters))).toBe(false);
  });

  it('each has a position with every value between 0 and 1, and a moving sound also an end', () => {
    for (const k of KLANKEN) {
      for (const p of [k.start, endPose(k)]) {
        for (const [name, v] of Object.entries(p)) expect(v, `${k.id}.${name}`).toBeGreaterThanOrEqual(0);
        for (const [name, v] of Object.entries(p)) expect(v, `${k.id}.${name}`).toBeLessThanOrEqual(1);
      }
      expect(Boolean(k.end), k.id).toBe(Boolean(k.glide));
    }
    expect(KLANKEN.filter((k) => k.glide === 'full').map((k) => k.id)).toEqual(['ui', 'ij', 'ou']);
    expect(KLANKEN.filter((k) => k.glide === 'subtle').map((k) => k.id).sort()).toEqual(['ee', 'eu', 'oo']);
  });

  it('each has a short explanation in English, Dutch and every help language', () => {
    expect(helpLanguageSources).toHaveLength(13);
    for (const k of KLANKEN) {
      const texts: [string, unknown][] = [['en', k.how], ['nl', nlSounds.gloss[klankHowId(k.id)]], ...helpLanguageSources.map((l): [string, unknown] => [l.code, l.gloss[klankHowId(k.id)]])];
      for (const [lang, t] of texts) {
        // A plain text (no man and woman forms needed: ar and ti say it without "you").
        expect(typeof t, `${k.id} ${lang}`).toBe('string');
        expect((t as string).trim().length, `${k.id} ${lang}`).toBeGreaterThan(20);
        // Short: a few plain sentences (readers who read little).
        expect((t as string).length, `${k.id} ${lang}`).toBeLessThanOrEqual(130);
      }
    }
    expect(klankText(byId.uu, getHelpLanguage('pl')).help).toBe(getHelpLanguage('pl')!.gloss['k.uitleg.uu']);
    expect(klankText(byId.ij, getHelpLanguage('ar')).help).toBeTruthy();
    expect(klankText(byId.uu).en).toBe(byId.uu.how);
    // A short vowel says so.
    for (const k of KLANKEN.filter((x) => x.short)) expect(k.how, k.id).toMatch(/short/);
  });

  it('each has an example word with a drawing, the sound in it, and a recording in all four voices', async () => {
    const words = (await import('../src/pictures/words')).default as Record<string, unknown>;
    for (const k of KLANKEN) {
      expect(words[k.word.id], k.word.id).toBeTruthy();
      expect([k.letters, k.also].some((l) => l && k.word.nl.includes(l)), k.id).toBe(true);
      for (const v of index.voices) expect(said(v.key).has(k.word.nl), `${v.key}: ${k.word.nl}`).toBe(true);
    }
    // Short against long: the same word where the course has one (man – maan).
    expect([byId.a.word.nl, byId.aa.word.nl]).toEqual(['man', 'maan']);
  });

  it('plays the sound on its own where it is recorded (u, ui, ei), else the word that carries it (a short vowel always)', () => {
    setRecordedIndex(index, null);
    const voice = 'piper:thijmen';
    expect(soundText(byId.uu, voice).text).toBe('u');
    expect(soundText(byId.ui, voice).text).toBe('ui');
    expect(soundText(byId.ij, voice).text).toBe('ei');
    for (const k of KLANKEN) {
      const s = soundText(k, voice);
      if (k.short) expect(s.text, k.id).toBe(k.word.nl);
      else expect(s.text === k.sound ? hasClip(s.text, voice) : s.text === k.word.nl, k.id).toBe(true);
    }
    // The dev page's &tts=1: the phone's voice says the letters.
    expect(soundText(byId.eu, voice, true)).toEqual({ text: 'eu', voice: 'device' });
  });
});

describe('the positions differ as the sounds do', () => {
  const g = (p: MouthPose) => mouthGeometry(p);
  it('aa opens the jaw the most, oe and uu the least', () => {
    const open = KLANKEN.map((k) => [k.id, g(k.start).h] as const).sort((a, b) => b[1] - a[1]);
    expect(open[0][0]).toBe('aa');
    expect(g(byId.oe.start).h).toBeLessThan(g(byId.ee.start).h);
    expect(g(byId.uu.start).h).toBeLessThan(g(byId.eu.start).h);
    expect(g(REST).h).toBe(0);
  });

  it('ee is the widest and flat; oe, uu and the ends of ui and ou are narrow and round', () => {
    for (const k of KLANKEN.filter((x) => x.id !== 'ee')) expect(g(byId.ee.start).w, k.id).toBeGreaterThanOrEqual(g(k.start).w);
    expect(byId.ee.start.round).toBeLessThan(0.2);
    for (const p of [byId.oe.start, byId.uu.start, byId.ui.end!, byId.ou.end!]) {
      expect(p.round).toBeGreaterThanOrEqual(0.9);
      expect(g(p).w).toBeLessThan(g(REST).w * 0.6);
    }
  });

  it('ie is spread like ee but nearly closed, with the tongue high and forward', () => {
    const { ie, ee } = byId;
    expect(ie.start.open).toBeLessThan(ee.start.open);
    expect(ie.start.round).toBeLessThan(0.1);
    expect(ie.start.wide).toBeGreaterThan(0.9);
    expect(ie.start.tongue).toBeGreaterThan(ee.start.tongue);
  });

  it('oe and uu differ in the tongue: back (unseen) for oe, forward (seen) for uu; oo is round with the tongue back too', () => {
    expect(byId.oe.start.tongue).toBe(0);
    expect(byId.uu.start.tongue).toBeGreaterThan(0.5);
    expect(byId.oe.start.forward).toBeGreaterThan(byId.uu.start.forward);
    expect(byId.oo.start.round).toBeGreaterThan(0.8);
    expect(byId.oo.start.tongue).toBeLessThan(0.1);
    expect(byId.oo.start.open).toBeGreaterThan(byId.oe.start.open);
  });

  it('eu is rounded like uu but more open, with the tongue forward like ee', () => {
    expect(byId.eu.start.round).toBeGreaterThan(0.6);
    expect(byId.eu.start.open).toBeGreaterThan(byId.uu.start.open);
    expect(byId.eu.start.tongue).toBeGreaterThan(0.4);
  });

  it('a short vowel is the looser, more open one of its pair; a has the tongue further back than aa', () => {
    const { a, aa, e, ee, i, ie, o, oo, u, uu } = byId;
    expect(a.start.open).toBeLessThan(aa.start.open);
    expect(a.start.tongue).toBeLessThan(aa.start.tongue);
    expect(e.start.open).toBeGreaterThan(ee.start.open);
    expect(e.start.tense).toBeLessThan(ee.start.tense);
    expect(i.start.open).toBeGreaterThan(ie.start.open);
    expect(i.start.tense).toBeLessThan(ie.start.tense);
    expect(o.start.open).toBeGreaterThan(oo.start.open);
    expect(o.start.tongue).toBeLessThan(0.1);
    expect(u.start.round).toBeLessThan(uu.start.round);
    expect(u.start.tense).toBeLessThan(uu.start.tense);
    expect(u.start.tongue).toBeGreaterThan(0.5);
  });

  it('ui closes from half open to small with round lips all the way; ij closes with spread lips all the way; ou goes from open to round', () => {
    const along = (id: string, check: (p: MouthPose) => void) => {
      const { start, end } = byId[id];
      for (const t of [0, 0.25, 0.5, 0.75, 1]) {
        const p = Object.fromEntries(Object.keys(start).map((key) => [key, start[key as keyof MouthPose] + (end![key as keyof MouthPose] - start[key as keyof MouthPose]) * t])) as unknown as MouthPose;
        check(p);
      }
    };
    expect(byId.ui.end!.open).toBeLessThan(byId.ui.start.open);
    expect(byId.ui.end!.wide).toBeLessThan(byId.ui.start.wide);
    along('ui', (p) => expect(p.round).toBeGreaterThanOrEqual(0.6));
    expect(byId.ij.end!.open).toBeLessThan(byId.ij.start.open);
    along('ij', (p) => { expect(p.round).toBeLessThanOrEqual(0.1); expect(p.wide).toBeGreaterThanOrEqual(0.8); });
    expect(byId.ou.start.round).toBeLessThan(0.5);
    expect(byId.ou.start.open).toBeGreaterThan(byId.ou.end!.open + 0.3);
  });

  it('the Dutch glide of ee, eu and oo is subtle: the end is close to the start', () => {
    for (const id of ['ee', 'eu', 'oo']) {
      const k = byId[id];
      expect(k.glide).toBe('subtle');
      for (const key of Object.keys(k.start) as (keyof MouthPose)[]) expect(Math.abs(k.end![key] - k.start[key]), `${id}.${key}`).toBeLessThanOrEqual(0.16);
    }
  });
});

describe('the motion', () => {
  const total = (k: (typeof KLANKEN)[number], slow: boolean) => (Object.values(STEPS).reduce((a, b) => a + b, 0) - STEPS.hold + holdMs(k)) * (slow ? SLOW_FACTOR : 1);

  it('goes from the position to rest, to the sound, holds it, back to rest, and ends in its position', () => {
    for (const k of KLANKEN) {
      expect(poseAtTime(k, 0, false).pose).toEqual(k.start);
      expect(poseAtTime(k, STEPS.toRest + 10, false).pose).toEqual(REST);
      expect(poseAtTime(k, total(k, false) + 1, false)).toEqual({ pose: k.start, done: true });
      // In the pause after the sound: at rest again.
      expect(poseAtTime(k, STEPS.toRest + STEPS.rest + STEPS.onset + holdMs(k) + STEPS.release + 10, false).pose).toEqual(REST);
    }
  });

  it('holds a short vowel about half as long as a long one', () => {
    expect(holdMs(byId.a)).toBeLessThan(holdMs(byId.aa) * 0.6);
    const atLongHold = STEPS.toRest + STEPS.rest + STEPS.onset + holdMs(byId.aa) - 10;
    expect(poseAtTime(byId.aa, atLongHold, false).pose).toEqual(byId.aa.start);
    expect(poseAtTime(byId.a, atLongHold, false).pose.open).toBeLessThan(byId.a.start.open);
  });

  it('a diphthong moves from its start to its end during the hold', () => {
    for (const id of ['ui', 'ij', 'ou']) {
      const k = byId[id];
      const holdStart = STEPS.toRest + STEPS.rest + STEPS.onset;
      expect(poseAtTime(k, holdStart + 1, false).pose.open, id).toBeCloseTo(k.start.open, 2);
      expect(poseAtTime(k, holdStart + STEPS.hold - 1, false).pose.open, id).toBeCloseTo(k.end!.open, 2);
      const mid = poseAtTime(k, holdStart + STEPS.hold * 0.5, false).pose.open;
      expect(mid, id).toBeLessThan(k.start.open);
      expect(mid, id).toBeGreaterThan(k.end!.open);
    }
  });

  it('slow takes twice as long, and the hold waits for the end of the sound', () => {
    const k = byId.aa;
    expect(poseAtTime(k, total(k, false) + 1, true).done).toBe(false);
    expect(poseAtTime(k, total(k, true) + 1, true).done).toBe(true);
    // The sound still plays at 2 s: the mouth still holds aa.
    expect(poseAtTime(k, 2000, false, 2100).pose).toEqual(k.start);
  });
});

describe('the card', () => {
  it('has the letters, the mouth, the explanation, the word with picture and speaker, and "Langzaam": at most 3 taps', () => {
    const pl = getHelpLanguage('pl');
    for (const k of KLANKEN) {
      for (const compact of [false, true]) {
        const out = html(createElement(KlankCard, { klank: k, lang: pl, compact }));
        expect(out).toContain(`>${k.letters}`);
        expect(out).toContain('class="mouth');
        expect(out).toContain(pl!.gloss[klankHowId(k.id)]!.replace(/"/g, '&quot;'));
        // The sound (letters + mouth), the word's speaker and "Langzaam".
        expect(out.match(/<button/g) ?? [], k.id).toHaveLength(3);
        expect(out).toContain('klank-play');
        expect(out).toContain('klank-slow');
        // A diphthong shows where it starts and ends, also without motion.
        expect(out.includes('klank-steps'), k.id).toBe(k.glide === 'full');
      }
    }
    // ij with its other spelling, the word marked where it has the sound.
    const ij = html(createElement(KlankCard, { klank: byId.ij, lang: pl }));
    expect(ij).toContain('klank-also');
    expect(ij).toContain('p<b class="klank-mark">ij</b>n');
  });
});

describe('in the Klanken lessons', () => {
  const steps = (xs: Exercise[]) => xs.filter((e): e is Extract<Exercise, { kind: 'klank' }> => e.kind === 'klank');

  it('a lesson starts with the cards of the sounds it practises, at most two', () => {
    const shortlong = buildLesson(soundLessons[0], { review: false, seed: 1 });
    expect(shortlong.slice(0, 2)).toEqual([{ kind: 'klank', klank: 'a' }, { kind: 'klank', klank: 'aa' }]);
    expect(shortlong[2].kind).toBe('intro');
    const round = buildLesson(soundLessons[1], { review: false, seed: 1 });
    expect(steps(round).map((e) => e.klank)).toEqual(['uu', 'oe']);
    expect(round.slice(0, 2).every((e) => e.kind === 'klank')).toBe(true);
    // p or b, g, k or h: consonants, no card.
    expect(steps(buildLesson(soundLessons[2], { review: false, seed: 1 }))).toHaveLength(0);
    for (const ids of Object.values(KLANK_LESSONS)) expect(ids.length).toBeLessThanOrEqual(KLANK_STEPS_MAX);
  });

  it('only for sounds the lesson is about: each card\'s letters are in its words, and only in the Klanken unit', () => {
    for (const [lessonId, ids] of Object.entries(KLANK_LESSONS)) {
      const lesson = soundLessons.find((l) => l.id === lessonId);
      expect(lesson, lessonId).toBeDefined();
      for (const id of ids) expect(lesson!.words.some((w) => w.nl.includes(byId[id].letters)), `${lessonId} ${id}`).toBe(true);
    }
    for (const l of allLessons) {
      const n = steps(buildLesson(l, { review: false, seed: 3 })).length;
      if (!soundsUnit.lessons.some((x) => x.id === l.id)) expect(n, l.id).toBe(0);
    }
  });

  it('not in a lesson played again, a mixed review, today\'s review or a rules lesson; never graded', () => {
    expect(steps(buildLesson(soundLessons[0], { review: true, seed: 1 }))).toHaveLength(0);
    const mix = units.find((u) => u.id === 'u.sounds')!.lessons.find((l) => isMixLesson(l))!;
    expect(klankStepsFor(mix, false)).toEqual([]);
    expect(klankStepsFor({ ...soundLessons[0], id: DAILY_ID }, false)).toEqual([]);
    expect(klankStepsFor({ ...soundLessons[0], repeat: true } as never, false)).toEqual([]);
    for (const e of klankStepsFor(soundLessons[0], false)) expect(isGraded(e)).toBe(false);
  });

  it('leaves the rest of the lesson as it was, also with speaking and "Wat zeg je?"', () => {
    for (const l of soundLessons) {
      for (const opts of [{ review: false, seed: 4 }, { review: false, seed: 4, speak: true, recorded: () => true }, { review: false, seed: 4, quiet: true }]) {
        const list = buildLesson(l, opts);
        const n = klankenForLesson(l.id).length;
        expect(steps(list)).toHaveLength(n);
        // The 19 exercises of a Klanken lesson (20 with "Wat zeg je?") after its cards: never past 21.
        expect(list.length - n).toBeLessThanOrEqual(21);
      }
    }
  });

  it('the step shows "Hoe zeg je het?" and the card, and fetches its sound and word ahead', () => {
    const pl = getHelpLanguage('pl');
    const out = html(createElement(KlankStep, { ex: { kind: 'klank', klank: 'aa' }, lang: pl, onAnswer: () => {} }));
    expect(out).toContain('class="prompt"');
    expect(out).toContain(pl!.ui.klankTitle);
    expect(out).toContain('klank-compact');
    expect(exerciseLines({ kind: 'klank', klank: 'a' }).map((l) => l.text)).toEqual(['man']);
    setRecordedIndex(index, null);
    expect(exerciseLines({ kind: 'klank', klank: 'uu' }).map((l) => l.text)).toEqual(['u', 'muur']);
  });

  it('in Belgium the same: the Klanken unit has no Belgian version (the vowels are the same)', () => {
    expect(TAAL_BE_INVENTORY['u.sounds'].kind).toBe('A');
  });
});

describe('Hulp › Hoe zeg je het?', () => {
  it('is a row under Hulp, after "Zo werkt het hier"', () => {
    const pl = getHelpLanguage('pl');
    const out = html(createElement(WordsHub, { lang: pl, onTips: () => {}, onKlanken: () => {}, onColleague: () => {} }));
    expect(out).toContain('hub-klank');
    expect(out.indexOf('hub-tips')).toBeLessThan(out.indexOf('hub-klank'));
    expect(out).toContain('Hoe zeg je het?');
    expect(out).toContain(pl!.ui.klankTitle);
    // Without the link (as before), no row.
    expect(html(createElement(WordsHub, { lang: pl, onTips: () => {} }))).not.toContain('hub-klank');
  });

  it('lists every sound, one button per row; one card per page', () => {
    const ar = getHelpLanguage('ar');
    const out = html(createElement(KlankOverview, { lang: ar, onBack: () => {}, onOpen: () => {} }));
    expect(out.match(/class="klank-row"/g)).toHaveLength(KLANKEN.length);
    // The rows, and the back arrow (chrome): a list.
    expect(out.match(/<button/g)).toHaveLength(KLANKEN.length + 1);
    expect(out).toContain('dir="rtl"');
    expect(out).toContain(ar!.ui.klankHint);
    const page = html(createElement(KlankPage, { id: 'ou', lang: ar, onBack: () => {} }));
    expect(page).toContain('klank-card');
    expect(page).toContain('klank-also');
    // An unknown id (an old link): the first card, not an empty page.
    expect(html(createElement(KlankPage, { id: 'xx', onBack: () => {} }))).toContain('klank-card');
  });
});

describe('the whole word (the mouth says m – uu – r, not only the uu)', () => {
  it('every example word is its sounds one by one, spelled as the word, with the card\'s own sound in it', () => {
    for (const k of KLANKEN) {
      expect(k.word.parts.map(partLetters).join(''), k.id).toBe(k.word.nl);
      expect(k.word.parts, k.id).toContain(k.id);
      expect(wordSegments(k)).toHaveLength(k.word.parts.length);
    }
  });

  it('the lips close for m, b and p, the teeth show for f and s, the tongue for t, n and l', () => {
    const at = (id: string, part: string) => wordSegments(byId[id]).find((s) => s.part === part)!.start;
    expect(at('uu', 'm').open).toBe(0);
    expect(at('ij', 'p').open).toBe(0);
    expect(at('u', 'b').open).toBe(0);
    expect(at('ie', 'f').teeth).toBe(1);
    expect(at('ie', 'f').lowTeeth).toBe(0);
    expect(at('o', 's').lowTeeth).toBe(1);
    for (const [id, c] of [['ie', 't'], ['aa', 'n'], ['e', 'l']] as const) expect(at(id, c).tongue, c).toBeGreaterThan(0.8);
  });

  it('a sound made inside the mouth (k, r, h) looks much like the vowel next to it', () => {
    const keuken = wordSegments(byId.eu);
    const k1 = keuken[0].start;
    const eu = byId.eu.start;
    // The k before eu takes on the round lips of eu.
    expect(k1.round).toBeGreaterThan(0.35);
    expect(Math.abs(k1.round - eu.round)).toBeLessThan(0.5);
    const r = wordSegments(byId.oe).find((s) => s.part === 'r')!.start;
    expect(r.round).toBeGreaterThan(0.5);
  });

  it('in time: each sound in turn over the spoken length, then rest, and back to the card\'s sound', () => {
    const k = byId.uu;
    const segs = wordSegments(k);
    const speech = 600;
    const total = segs.reduce((n, s) => n + s.weight, 0);
    const mid = (i: number) => segs.slice(0, i).reduce((n, s) => n + s.weight, 0) / total * speech + (segs[i].weight / total) * speech * 0.8;
    expect(wordPoseAtTime(segs, k.start, -10, speech, false).pose).toEqual(k.start);
    const m = wordPoseAtTime(segs, k.start, mid(0), speech, false);
    expect(m.part).toBe(0);
    expect(m.pose.open).toBe(0);
    const uu = wordPoseAtTime(segs, k.start, mid(1), speech, false);
    expect(uu.part).toBe(1);
    expect(uu.pose).toEqual(k.start);
    expect(wordPoseAtTime(segs, k.start, mid(2), speech, false).part).toBe(2);
    const after = wordPoseAtTime(segs, k.start, speech + WORD_STEPS.release + 10, speech, false);
    expect(after.part).toBe(-1);
    expect(after.pose).toEqual(REST);
    const end = wordPoseAtTime(segs, k.start, speech + WORD_STEPS.release + WORD_STEPS.pause + WORD_STEPS.back + 1, speech, false);
    expect(end.done).toBe(true);
    expect(end.pose).toEqual(k.start);
  });

  it('the long vowel takes the longest share; a short vowel less than a long one', () => {
    for (const k of KLANKEN) {
      const segs = wordSegments(k);
      const own = segs.find((s) => s.part === k.id)!;
      expect(Math.max(...segs.map((s) => s.weight)), k.id).toBe(own.weight);
    }
    const shareOf = (id: string) => {
      const segs = wordSegments(byId[id]);
      return segs.find((s) => s.part === id)!.weight;
    };
    expect(shareOf('a')).toBeLessThan(shareOf('aa'));
  });

  it('the spoken length is the recording without its silent end, at the rate it plays', () => {
    expect(spokenMs(0.7834, 0.75)).toBeCloseTo(((0.7834 - CLIP_TAIL_S) / 0.75) * 1000, 3);
    expect(spokenMs(0.2, 1)).toBe(250);
    expect(nominalWordMs(wordSegments(byId.uu), true)).toBe(nominalWordMs(wordSegments(byId.uu), false) * SLOW_FACTOR);
  });

  it('while the word is said, its letters light up in turn (m, then uu, then r)', () => {
    const k = byId.uu;
    expect(html(createElement(MarkedWord, { word: 'muur', klank: k, now: 0 }))).toContain('<span class="klank-now">m</span>');
    expect(html(createElement(MarkedWord, { word: 'muur', klank: k, now: 1 }))).toContain('<b class="klank-mark klank-now">uu</b>');
    expect(html(createElement(MarkedWord, { word: 'muur', klank: k }))).toContain('m<b class="klank-mark">uu</b>r');
  });
});
