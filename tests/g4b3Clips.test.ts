import { execSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { allDialogues, allLessons, allWords } from '../src/content/curriculum';
import { cultureTips } from '../src/content/culture';
import { allRegionTips, allRegionUnits } from '../src/content/regio';
// The region's own file (in the app loaded only for a learner of the region): its units, tips and map.
import './regionLoaded';
import { BRAM_HELLO, BRAM_VOICE } from '../src/lib/voices';

/** Lines whose recording is still to be made (the owner re-records them); the device voice says them meanwhile. */
const PENDING_RECORDING = new Set<string>([
  // Add a changed or new line here until the next 'Record ElevenLabs voices' run.
  // More natural Dutch (critic, 16 October 2026):
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

describe('recorded clips (G4 b3)', () => {
  it('every sentence, chat line, word and "Zeg het zo" line has a recorded clip', () => {
    const voices = JSON.parse(readFileSync('public/audio-el/voices.json', 'utf8')).voices as { said: Record<string, string> }[];
    // As lib/audio.ts finds a clip: the exact text, or the same text without its end punctuation.
    const plain = (t: string) => t.trim().toLowerCase().replace(/[.!?…,]+$/, '');
    const said = new Set(voices.flatMap((v) => Object.values(v.said)).flatMap((t) => [t.trim(), plain(t)]));
    // With the regions' language units and tips (src/content/regio).
    const regionLessons = allRegionUnits('taal').flatMap((u) => u.lessons);
    const texts = new Set([
      ...allLessons.flatMap((l) => l.sentences.map((s) => s.nl)),
      ...allDialogues.flatMap((d) => [d.prompt.nl, d.reply.nl]),
      ...allWords.map((w) => w.nl),
      ...cultureTips.map((t) => t.phrase.nl),
      ...regionLessons.flatMap((l) => [...l.words.map((w) => w.nl), ...l.sentences.map((s) => s.nl), ...(l.dialogues ?? []).flatMap((d) => [d.prompt.nl, d.reply.nl])]),
      ...allRegionTips().map((t) => t.phrase.nl),
      BRAM_HELLO,
    ]);
    const missing = [...texts].filter((t) => !said.has(t.trim()) && !said.has(plain(t)));
    expect(missing.filter((t) => !PENDING_RECORDING.has(t))).toEqual([]);
  });

  it('Bram’s own line is a clip that only his voice records (x.bram, Thijmen)', { timeout: 60_000 }, () => {
    // public/audio/ is not in git: write clips.json afresh, so the script itself is tested too (a
    // copy left from an earlier run would hide a script that no longer runs).
    execSync('npx tsx scripts/list-clips.ts', { stdio: 'ignore' });
    const clips = JSON.parse(readFileSync('public/audio/clips.json', 'utf8')) as { id: string; text: string; voices?: string[] }[];
    // The regions' lines are in it, also while the regions are off (they are recorded before they go on).
    expect(clips.some((c) => c.id.startsWith('rg.'))).toBe(true);
    expect(clips.find((c) => c.id === 'x.bram')).toEqual({ id: 'x.bram', text: BRAM_HELLO, voices: [BRAM_VOICE] });
    // Every other clip is recorded in every voice, as before.
    expect(clips.filter((c) => c.voices).map((c) => c.id)).toEqual(['x.bram']);
  });
});
