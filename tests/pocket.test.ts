import { describe, expect, it } from 'vitest';
import { units } from '../src/content/curriculum';
import { allRegionUnits } from '../src/content/regio';
// The region's own file (in the app loaded only for a learner of the region): its units, tips and map.
import './regionLoaded';
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
    const pending = new Set<string>([
      // Add a new phrase here until the next 'Record ElevenLabs voices' run.
      'Kunt u langzamer praten?',
      'Ik ben het niet met je eens.',
      'Mag ik jij zeggen?',
      'Waar is dit middel voor?',
      // The shift chat about the shift, not coffee (critic, 16 October 2026):
      'Wanneer begint je dienst?',
      'Morgen om zeven uur.',
      // New lesson "Een ongeluk melden" (l.accident, 17 October 2026):
      'gewond',
      'bloeden',
      'de EHBO-doos',
      'de BHV’er',
      'het ziekenhuis',
      'gebeuren',
      'Mijn collega is gevallen.',
      'Ik heb me gesneden.',
      'Ik wil een ongeluk melden.',
      'Wat is er gebeurd?',
      'Hij is gevallen. Hij bloedt.',
      'Mijn collega is gewond. Waar is de BHV’er?',
      // New lesson "Werken via een uitzendbureau" (l.agency, 17 October 2026):
      'de uitzendkracht',
      'de intercedent',
      'het urenbriefje',
      'de opdracht',
      'verlengen',
      'uitbetalen',
      'Ik werk via een uitzendbureau.',
      'Wordt mijn opdracht verlengd?',
      'Wanneer stopt mijn opdracht?',
      'Heb je je uren doorgegeven?',
      'Ja, gisteren in de app.',
      'Op mijn loonstrook staan te weinig uren.',
      // New lesson "Opdrachten van je leidinggevende" (l.task, 17 October 2026):
      'de taak',
      'daarna',
      'afmaken',
      'snel',
      'bijna',
      'Wat moet ik eerst doen?',
      'Ik ben klaar met deze taak.',
      'Kunt u het nog een keer laten zien?',
      'Ben je klaar?',
      'Bijna. Nog vijf minuten.',
      'Klaar! Wat moet ik nu doen?',
      // New lesson "De eerste dag: je weg vinden" (l.arrive, 18 October 2026):
      'de ingang',
      'de receptie',
      'de kantine',
      'de kleedkamer',
      'de buddy',
      'vinden',
      'Bij wie moet ik me melden?',
      'Ik kan de kleedkamer niet vinden.',
      'Wie is mijn buddy vandaag?',
      'Goedemorgen, waar komt u voor?',
      'Ik ben nieuw. Ik begin vandaag.',
      'Goedemorgen, ik ben Ali. Ik begin vandaag. Bij wie moet ik zijn?',
      // New lesson "Dit heb ik nog niet geleerd" (l.notyet, 18 October 2026), and the Dutch its
      // situation quotes (a clip of its own, scripts/list-clips.ts):
      'nog niet',
      'mogen',
      'proberen',
      'voordoen',
      'gevaarlijk',
      'de uitleg',
      'Dit heb ik nog niet geleerd.',
      'Ik heb nog geen uitleg gehad.',
      'Mag ik dit al alleen doen?',
      'Probeer het maar, het is makkelijk.',
      'Kun je het eerst voordoen?',
      'Dit heb ik nog niet geleerd. Kun je het voordoen?',
      'Pak jij even de heftruck? Het is makkelijk.',
      // New unit "Slimme apps en AI" (u.ai, 19 October 2026):
      'de AI',
      'de chatbot',
      'het antwoord',
      'meekijken',
      'kloppen',
      'zeker',
      'persoonlijk',
      'de gegevens',
      'het wachtwoord',
      'typen',
      'opslaan',
      'inloggen',
      'echt',
      'de stem',
      'het filmpje',
      'ophangen',
      'het nummer',
      'de haast',
      'de planning',
      'de mens',
      'de computer',
      'het tempo',
      'automatisch',
      'het besluit',
      'Kun je deze brief uitleggen?',
      'Klopt dit antwoord?',
      'Kunt u even meekijken?',
      'Ik deel geen namen van klanten.',
      'Mag ik AI gebruiken voor mijn werk?',
      'Mijn wachtwoord is geheim.',
      'Is dit echt of nep?',
      'Ik hang op en bel zelf terug.',
      'Ik stuur geen geld.',
      'Wie heeft dit besluit genomen?',
      'Ik wil met een mens praten.',
      'Waarom heb ik minder uren in mijn rooster?',
      'Heb je dit zelf geschreven?',
      'Ja, met hulp van AI.',
      'Zet dit even in de chatbot.',
      'Liever niet, er staan namen van klanten in.',
      'Hoi, dit is mijn nieuwe nummer. Kun je snel geld sturen?',
      'Ik bel je eerst op je oude nummer.',
      'De app heeft je rooster gemaakt.',
      'Kan ik er met een mens over praten?',
      'Klopt dit? Kunt u even meekijken?',
      'Mag ik hier AI voor gebruiken?',
      'Kan een mens hier even naar kijken?',
    ]);
    for (const unit of [...units, ...allRegionUnits('taal')]) for (const p of pocketPhrases(unit)) if (!pending.has(p.nl)) expect(said.has(p.nl), `${unit.id} ${p.nl}`).toBe(true);
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
