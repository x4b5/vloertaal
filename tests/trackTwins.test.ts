import { beforeAll, describe, expect, it } from 'vitest';
import { courseUnits } from '../src/content/courses';
import { units } from '../src/content/curriculum';
import { TRACK_TWINS, trackTwin } from '../src/content/trackTwins';
import { registerPack } from '../src/i18n';
import nlPack from '../src/i18n/packs/nl';

// The real rules course (the pack registers it).
beforeAll(() => registerPack(nlPack));

describe('a coach link opens the same topic in either track (src/content/trackTwins.ts)', () => {
  it('names only topics that exist, each language topic once', () => {
    const taal = new Set(units.map((u) => u.id));
    const regels = new Set(courseUnits('regels').map((u) => u.id));
    for (const [t, r] of TRACK_TWINS) {
      expect(taal.has(t), t).toBe(true);
      expect(regels.has(r), r).toBe(true);
    }
    const taalIds = TRACK_TWINS.map(([t]) => t);
    expect(new Set(taalIds).size).toBe(taalIds.length);
  });

  it('gives most rules topics a language twin, and the main topics of a coach all have one', () => {
    for (const r of ['r.start', 'r.veilig', 'r.contract', 'r.loon', 'r.tijd', 'r.ziek', 'r.rechten', 'r.geld']) {
      expect(trackTwin(r, 'taal'), r).toBeDefined();
    }
    const withTwin = courseUnits('regels').filter((u) => trackTwin(u.id, 'taal'));
    expect(withTwin.length).toBeGreaterThanOrEqual(courseUnits('regels').length - 2);
  });

  it('maps both ways, and keeps a topic of the own track as it is', () => {
    expect(trackTwin('u.pay', 'regels')).toBe('r.loon');
    expect(trackTwin('r.loon', 'taal')).toBe('u.pay');
    expect(trackTwin('u.pay', 'taal')).toBe('u.pay');
    expect(trackTwin('r.loon', 'regels')).toBe('r.loon');
    // A rules topic with several language twins opens the first: Geld en post for "Uitkering, werk en geld".
    expect(trackTwin('r.geld', 'taal')).toBe('u.money');
    // Belgian ids count as their Dutch twins (the country is applied after, rulesTwinHere).
    expect(trackTwin('r.be.loon', 'taal')).toBe('u.pay');
    expect(trackTwin('be.u.pay', 'regels')).toBe('r.loon');
    // No fitting twin: nothing (the home stays as it was).
    expect(trackTwin('u.sounds', 'regels')).toBeUndefined();
  });
});
