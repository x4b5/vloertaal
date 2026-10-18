import { readFileSync } from 'node:fs';
import { beforeAll, describe, expect, it } from 'vitest';
import { allLessons } from '../src/content/curriculum';
import { allRegionUnits } from '../src/content/regio';
// The region's own file (in the app loaded only for a learner of the region): its units, tips and map.
import './regionLoaded';
import { tipForLesson } from '../src/content/culture';
import { clipUrl, setRecordedIndex } from '../src/lib/audio';
import { learnerCharacter, learnerVoice, voiceFor } from '../src/lib/voices';
import { colleaguesOf, tipCast } from '../src/components/Characters';

const elevenIndex = JSON.parse(readFileSync('public/audio-el/voices.json', 'utf8'));
const gender = Object.fromEntries((elevenIndex.voices as { key: string; gender: string }[]).map((v) => [v.key, v.gender]));
// With the chats of the regions' units (src/content/regio).
const chats = [...allLessons, ...allRegionUnits('taal').flatMap((u) => u.lessons)].flatMap((l) => l.dialogues ?? []);
/** Chat replies of the new units u.shop and u.numbers, and of the region unit "Jouw regio:
 *  Zuid-Limburg": recorded on the next 'Record ElevenLabs voices' run (the phone voice says them meanwhile). */
const PENDING_RECORDING = new Set<string>([
  // Add a new reply here until the next 'Record ElevenLabs voices' run.
  'Ik ben het niet met je eens.',
  'Morgen om zeven uur.',
  // New lesson "Een ongeluk melden" (l.accident, 17 October 2026):
  'Hij is gevallen. Hij bloedt.',
  // New lesson "Werken via een uitzendbureau" (l.agency, 17 October 2026):
  'Ja, gisteren in de app.',
  // New lesson "Opdrachten van je leidinggevende" (l.task, 17 October 2026):
  'Bijna. Nog vijf minuten.',
  // New lessons "De eerste dag: je weg vinden" (l.arrive) and "Dit heb ik nog niet geleerd" (l.notyet), 18 October 2026:
  'Ik ben nieuw. Ik begin vandaag.',
  'Kun je het eerst voordoen?',
]);

describe('"you" in the chats follow the gender question', () => {
  beforeAll(() => setRecordedIndex(elevenIndex, null));

  it('is a man (Bram, a male voice) for "man", Amina (a female voice) otherwise', () => {
    expect(learnerCharacter('m')).toBe('bram');
    for (const g of ['f', 'x', undefined, null] as const) expect(learnerCharacter(g)).toBe('amina');
    expect(learnerVoice('m')).toBe('piper:thijmen');
    expect(learnerVoice('f')).toBe('piper:ariel');
    expect(learnerVoice('x')).toBe('piper:ariel');
    expect(learnerVoice(undefined)).toBe(voiceFor('amina'));
  });

  it('plays every chat reply in a voice of the learner\'s gender (a missing clip falls back to the same gender)', () => {
    expect(chats.length).toBeGreaterThan(20);
    for (const [g, want] of [['m', 'male'], ['f', 'female'], ['x', 'female']] as const) {
      for (const d of chats) {
        if (PENDING_RECORDING.has(d.reply.nl)) continue;
        const url = clipUrl(d.reply.nl, learnerVoice(g));
        expect(url, `${g} ${d.reply.id}`).toBeDefined();
        expect(gender[url!.split('/')[2]], `${g} ${d.reply.id} ${url}`).toBe(want);
      }
    }
    // Thijmen lacks the harvest lines: another male voice says them.
    expect(clipUrl('Tot morgen!', learnerVoice('m'))).toContain('/thijmen/');
  });

  it('never makes the learner the colleague they talk to', () => {
    expect(colleaguesOf(undefined)).toEqual(['bram', 'henk', 'jada']);
    expect(colleaguesOf('f')).toEqual(['bram', 'henk', 'jada']);
    expect(colleaguesOf('m')).not.toContain('bram');
    for (const l of allLessons) {
      const tip = tipForLesson(l.id);
      if (!tip) continue;
      expect(tipCast(tip, 'm'), tip.id).not.toBe('bram');
      expect(tipCast(tip, 'f'), tip.id).not.toBe('amina');
      expect(tipCast(tip, undefined), tip.id).toBe(tipCast(tip, 'x'));
    }
  });
});
