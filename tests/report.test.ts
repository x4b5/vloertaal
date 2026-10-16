import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { beforeEach, describe, expect, it } from 'vitest';
import { LessonPlayer } from '../src/components/LessonPlayer';
import { units } from '../src/content/curriculum';
import { buildLesson, type Exercise } from '../src/lib/exercises';
import { deviceLabel, exerciseRef, readTesterParam, reportMail, testerMode } from '../src/lib/report';

const store = new Map<string, string>();
beforeEach(() => {
  store.clear();
  (globalThis as { localStorage?: unknown }).localStorage = {
    getItem: (k: string) => store.get(k) ?? null,
    setItem: (k: string, v: string) => void store.set(k, v),
    removeItem: (k: string) => void store.delete(k),
  };
});

const lesson = units[0].lessons[0];
const word = lesson.words[0];

describe('Iets melden (testers)', () => {
  it('is on for the sneak preview and for a phone that opened ?test, never for others', () => {
    expect(testerMode('full')).toBe(false);
    expect(testerMode('preview')).toBe(false);
    expect(testerMode(null)).toBe(false);
    expect(testerMode('sample')).toBe(true);
    readTesterParam('?unit=pay');
    expect(testerMode('full')).toBe(false);
    readTesterParam('?test');
    expect(testerMode('full')).toBe(true);
    readTesterParam('?test=0');
    expect(testerMode('full')).toBe(false);
    readTesterParam('?test=1');
    expect(testerMode('preview')).toBe(true);
  });

  it('names the step by id, with the Dutch', () => {
    expect(exerciseRef({ kind: 'meaning', word, options: [word] })).toBe(`meaning ${word.id} (${word.nl})`);
    const sentence = lesson.sentences[0];
    expect(exerciseRef({ kind: 'build', sentence, tiles: [] })).toBe(`build ${sentence.id} (${sentence.nl})`);
    // Every step of a real lesson has a reference with an id in it.
    for (const ex of buildLesson(lesson, { review: false, seed: 1 }) as Exercise[]) expect(exerciseRef(ex)).toMatch(/^\w+ \S+\.\S+/);
  });

  it('the mail: to hoi@vloertaal.nl, the place filled in, room on top for the tester', () => {
    const href = reportMail({
      lessonId: lesson.id, title: lesson.title, step: 3, steps: 12,
      exercise: { kind: 'listen', word, options: [word] }, lang: 'pl', device: 'Android 14 · Chrome/128', build: 'abc1234',
    });
    expect(href.startsWith('mailto:hoi@vloertaal.nl?subject=')).toBe(true);
    const q = new URLSearchParams(href.slice(href.indexOf('?') + 1));
    expect(q.get('subject')).toBe(`Melding: ${lesson.title} (stap 4)`);
    const body = q.get('body')!;
    expect(body.startsWith('Wat zag je?')).toBe(true);
    for (const line of [`Les: ${lesson.id}`, 'Stap: 4 van 12', `Oefening: listen ${word.id}`, 'Hulptaal: pl', 'Telefoon: Android 14', 'Versie: abc1234']) {
      expect(body).toContain(line);
    }
  });

  it('the phone in a few words', () => {
    expect(deviceLabel('Mozilla/5.0 (Linux; Android 14; SM-A146B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Mobile Safari/537.36')).toBe('Android 14 · Chrome/128');
    expect(deviceLabel('Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1')).toBe('iOS 17.5 · Safari');
    expect(deviceLabel('Mozilla/5.0 (Linux; Android 13; SAMSUNG SM-A536B) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/25.0 Chrome/121.0.0.0 Mobile Safari/537.36')).toBe('Android 13 · SamsungBrowser/25.0');
    expect(deviceLabel('')).toBe('onbekend · onbekend');
  });

  it('the lesson shows the flag only in tester mode', () => {
    const render = (report: boolean) => renderToStaticMarkup(createElement(LessonPlayer, { lesson, review: false, onQuit: () => {}, onFinish: () => {}, report }));
    expect(render(false)).not.toContain('lesson-report');
    const html = render(true);
    expect(html).toContain('class="icon-btn lesson-report"');
    expect(html).toContain('href="mailto:hoi@vloertaal.nl?subject=');
  });
});
