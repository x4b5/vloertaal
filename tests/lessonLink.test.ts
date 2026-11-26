import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { isUnlocked } from '../src/lib/exercises';
import { lessonFromSearch, linkOpened, takeLinkedLesson, takeLinkedUnit } from '../src/lib/unitLink';

/**
 * A link to one lesson (?les=paint), for the word posters on a work-learning spot (26 November
 * 2026): the poster "Schilderen" opens the painting lesson, not the first lesson of its topic.
 */

function fakePhone(search: string) {
  const store = new Map<string, string>();
  const loc = { search, pathname: '/', hash: '' };
  vi.stubGlobal('localStorage', {
    getItem: (k: string) => store.get(k) ?? null,
    setItem: (k: string, v: string) => { store.set(k, String(v)); },
    removeItem: (k: string) => { store.delete(k); },
  });
  vi.stubGlobal('location', loc);
  vi.stubGlobal('history', {
    state: null,
    replaceState: (_s: unknown, _t: string, url: string) => {
      const q = url.indexOf('?');
      loc.search = q < 0 ? '' : url.slice(q).replace(/#.*$/, '');
    },
  });
  return loc;
}

describe('lesson links (?les=)', () => {
  afterEach(() => { vi.unstubAllGlobals(); });

  it('read a known lesson from the address', () => {
    expect(lessonFromSearch('?les=paint')).toBe('l.paint');
    expect(lessonFromSearch('?x=1&les=Brick ')).toBe('l.brick');
  });

  it('ignore an unknown or missing lesson', () => {
    expect(lessonFromSearch('')).toBeNull();
    expect(lessonFromSearch('?les=')).toBeNull();
    expect(lessonFromSearch('?les=nolesson')).toBeNull();
  });

  describe('on the phone', () => {
    let loc: { search: string };
    beforeEach(() => { loc = fakePhone('?les=paint'); });

    it('lead to the lesson\'s topic, and keep the lesson until it is opened', () => {
      expect(takeLinkedUnit()).toBe('u.afbouw');
      expect(loc.search).toBe('');
      // A reload during the first run (language, sector) still knows both.
      expect(takeLinkedUnit()).toBe('u.afbouw');
      expect(takeLinkedLesson()).toBe('l.paint');
    });

    it('open the linked lesson, while the topic\'s other lessons keep their order', () => {
      expect(isUnlocked('l.paint', {})).toBe(false);
      takeLinkedUnit();
      expect(linkOpened('l.paint')).toBe(true);
      expect(isUnlocked('l.paint', {})).toBe(true);
      expect(isUnlocked('l.prep', {})).toBe(false);
      expect(isUnlocked('l.prep', { 'l.paint': 1 })).toBe(true);
    });

    it('never open a lesson the access level keeps closed', () => {
      takeLinkedUnit();
      expect(isUnlocked('l.paint', {}, 'preview')).toBe(false);
    });
  });
});
