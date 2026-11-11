import { describe, expect, it } from 'vitest';
import { learnerOf } from '../src/lib/learner';
import { trackOf } from '../src/lib/track';

/**
 * The learner's passport (src/lib/learner.ts): what a learner gets, in one place. These tests hold
 * the rule as it was on 12 November 2026, when the screens began to ask the passport.
 */
describe('a learner of the language course', () => {
  const me = learnerOf({ helpLang: 'pl' }, false);

  it('learns Dutch, with a help language', () => {
    expect(me).toEqual({ track: 'taal', learnsDutch: true, learnsRules: false, readsDutch: false, rulesBeside: false, review: 'words', help: 'phrases' });
  });

  it('English only (no help language) is the language course too', () => {
    expect(learnerOf({ helpLang: null }, false)).toEqual(me);
    expect(learnerOf({}, false)).toEqual(me);
  });
});

describe('a learner who speaks Dutch already', () => {
  const me = learnerOf({ helpLang: 'nl' }, false);

  it('learns the work rules, in Dutch, with "Wie bel je?" on the Hulp tab', () => {
    expect(me).toEqual({ track: 'regels', learnsDutch: false, learnsRules: true, readsDutch: true, rulesBeside: false, review: 'rules', help: 'whoToCall' });
  });

  it('"Eén app" changes nothing for them', () => {
    expect(learnerOf({ helpLang: 'nl' }, true)).toEqual(me);
  });
});

describe('"Eén app"', () => {
  it('adds the work rules to the language course: beside the topics, and in the review', () => {
    expect(learnerOf({ helpLang: 'pl' }, true)).toEqual({ track: 'taal', learnsDutch: true, learnsRules: false, readsDutch: false, rulesBeside: true, review: 'both', help: 'phrases' });
  });
});

describe('the passport and the track', () => {
  it('never disagree: the course is the one the help language gives', () => {
    for (const helpLang of ['nl', 'pl', 'ar', 'ti', null] as const) {
      for (const oneApp of [false, true]) {
        const me = learnerOf({ helpLang }, oneApp);
        expect(me.track).toBe(trackOf({ helpLang }));
        expect(me.learnsDutch).toBe(!me.learnsRules);
      }
    }
  });
});
