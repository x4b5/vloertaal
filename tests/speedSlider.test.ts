import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { SpeedSlider } from '../src/components/SpeedSlider';
import { BuildExercise } from '../src/components/Exercises';
import { ModelLine } from '../src/components/RuleSteps';
import { rulesUnits } from '../src/content/regels';
import { allLessons } from '../src/content/curriculum';
import { tokenize } from '../src/lib/answers';
import { TipCard } from '../src/components/Exercises';
import { cultureTips } from '../src/content/culture';
import { getHelpLanguage } from '../src/i18n/all';
import { setSpeakSpeed } from '../src/lib/speakSpeed';
import { loadPictures } from '../src/pictures';

/*
 * The speed slider (src/components/SpeedSlider.tsx), the one of "Hoe zeg je het?" made reusable
 * (the owner's request, 17 November 2026): a learner who says a line along with the word light
 * can slow the voice down. It is on the tip's "Zeg het zo" page, beside the phrase.
 */

beforeEach(() => setSpeakSpeed(1));

describe('SpeedSlider', () => {
  it('is a slider from a quarter to as it is, at the chosen speed, with its value written', () => {
    const html = renderToStaticMarkup(createElement(SpeedSlider, {}));
    expect(html).toContain('type="range"');
    expect(html).toContain('min="0.25"');
    expect(html).toContain('max="1"');
    expect(html).toContain('step="0.05"');
    expect(html).toContain('value="1"');
    expect(html).toContain('1×');
    setSpeakSpeed(0.5);
    const slow = renderToStaticMarkup(createElement(SpeedSlider, {}));
    expect(slow).toContain('value="0.5"');
    expect(slow).toContain('½×');
  });

  it('tells a screen reader the speed as it is written on screen ("½×"), not the raw 0.5', () => {
    expect(renderToStaticMarkup(createElement(SpeedSlider, {}))).toContain('aria-valuetext="1×"');
    setSpeakSpeed(0.5);
    expect(renderToStaticMarkup(createElement(SpeedSlider, {}))).toContain('aria-valuetext="½×"');
  });

  it('has a name for a screen reader, in the help language', () => {
    const pl = getHelpLanguage('pl')!;
    const html = renderToStaticMarkup(createElement(SpeedSlider, { lang: pl }));
    expect(html).toContain('class="sr-only"');
    expect(html).toContain(pl.ui.klankSpeed as string);
  });
});

describe('the slider on the tip\'s "Zeg het zo" page', () => {
  beforeAll(async () => { await loadPictures(); });
  const tip = cultureTips.find((t) => t.id === 'c.gear')!;
  const pl = getHelpLanguage('pl');
  const tipCard = (part: 'read' | 'say') =>
    renderToStaticMarkup(createElement(TipCard as never, { ex: { kind: 'tip', tip, part }, lang: pl, onAnswer: () => {} } as never));

  it('is there, between the phrase and "Zeg het hardop"', () => {
    const out = tipCard('say');
    const phrase = out.indexOf('tip-bubble');
    const slider = out.indexOf('klank-speed');
    const aloud = out.indexOf('say-aloud');
    expect(phrase).toBeGreaterThan(0);
    expect(slider).toBeGreaterThan(phrase);
    expect(aloud).toBeGreaterThan(slider);
  });

  it('is not on the tip\'s first page (its explanation)', () => {
    expect(tipCard('read')).not.toContain('klank-speed');
  });
});

describe('the slider under "Zo zeg je het" (Werkregels)', () => {
  const step = rulesUnits.flatMap((u) => u.lessons).flatMap((l) => l.steps).find((s) => s.kind === 'model')!;
  const out = renderToStaticMarkup(createElement(ModelLine as never, { ex: { kind: 'model', step }, onAnswer: () => {} } as never));

  it('is there, between the sentence and "Zeg het hardop"', () => {
    const bubble = out.indexOf('tip-bubble');
    const slider = out.indexOf('klank-speed');
    const aloud = out.indexOf('say-aloud');
    expect(bubble).toBeGreaterThan(0);
    expect(slider).toBeGreaterThan(bubble);
    expect(aloud).toBeGreaterThan(slider);
  });

  it('sets the speed of the sentence, the one it says by itself and the one of its speaker', () => {
    const src = readFileSync('src/components/RuleSteps.tsx', 'utf8');
    expect(src).toContain('autoSpeakLong(step.nl, { voice, speed: getSpeakSpeed() })');
    expect(src).toContain('<Say text={step.nl} lang={lang} voice={voice} speed={speed} />');
  });
});

describe('the slider under the built sentence ("Make this sentence in Dutch")', () => {
  const sentence = allLessons.flatMap((l) => l.sentences)[0];
  const render = (locked: boolean, extra: Record<string, unknown> = {}) => renderToStaticMarkup(createElement(BuildExercise as never, {
    ex: { kind: 'build', sentence, tiles: tokenize(sentence.nl), ...extra }, locked, onAnswer: () => {},
  } as never));

  it('is there once the sentence is done, under the answer line (where the tiles were)', () => {
    const out = render(true);
    expect(out.indexOf('klank-speed')).toBeGreaterThan(out.indexOf('class="answer-line'));
  });

  it('is not there while the sentence is being built (the tiles below would jump)', () => {
    expect(render(false)).not.toContain('klank-speed');
  });

  it('is there for a sentence built by ear too (hearing it slower is the help there)', () => {
    expect(render(true, { audio: true })).toContain('klank-speed');
  });

  it('gives the speaker and the answer that is said by itself the chosen speed', () => {
    const exercises = readFileSync('src/components/Exercises.tsx', 'utf8');
    expect(exercises).toContain('voice={voiceFor(who)} speed={speed} />');
    const player = readFileSync('src/components/LessonPlayer.tsx', 'utf8');
    // Only where the slider is on screen: "Zet het vooraan" (front) has none, so its answer plays as it is.
    expect(player).toContain("autoSpeak(sol.text, false, 'nl', voiceFor(who), ex.kind === 'build' && !ex.front ? getSpeakSpeed() : 1)");
  });
});
