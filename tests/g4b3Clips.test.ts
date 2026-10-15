import { execSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { allDialogues, allLessons, allWords } from '../src/content/curriculum';
import { cultureTips } from '../src/content/culture';
import { allRegionTips, allRegionUnits } from '../src/content/regio';
import { BRAM_HELLO, BRAM_VOICE } from '../src/lib/voices';

/** Lines whose recording is still to be made (the owner re-records them); the device voice says them meanwhile. */
const PENDING_RECORDING = new Set([
  'Zeg het liever direct tegen mij.',
  // Was "Het is spoed." (spoken style); the standard form is "Het heeft spoed.". Re-recorded on the next run.
  'Het heeft spoed.',
  // Was "Kunt u in mijn telefoon spreken?" (unnatural Dutch).
  'Wilt u even tegen mijn telefoon praten?',
  // x.bram, Bram introducing himself on the first tap (only Thijmen records it, see
  // scripts/list-clips.ts). Until the next "Record ElevenLabs voices" run, sayFirstWord keeps
  // playing the recorded "hallo" instead (src/lib/audio.ts).
  BRAM_HELLO,
  // The units "In de winkel" (u.shop) and "Rekenen: tijd, geld, maten" (u.numbers): recorded on
  // the next 'Record ElevenLabs voices' run.
  'Zet de nieuwe producten achteraan.', 'Dit product is over de datum.', 'Is er nog voorraad?',
  'Waar vind ik de rijst?', 'In gang vier. Ik loop even met u mee.',
  'Wilt u pinnen of contant betalen?', 'Hier is uw wisselgeld.', 'Mag ik even uw ID zien?',
  'Kan ik hier pinnen?', 'Ja hoor, dat kan.',
  'Ik begin om half acht.', 'Ik werk vandaag acht uur.', 'De pauze duurt een half uur.',
  'Hoe laat ben je klaar?', 'Om kwart over vier.',
  'Het kost zes euro vijftig.', 'Deze doos weegt tien kilo.', 'Ik heb veertig dozen geteld.',
  'Hoe lang is die plank?', 'Precies twee meter.',
  'het schap', 'vakken vullen', 'de voorraad', 'de houdbaarheidsdatum', 'het prijskaartje', 'achteraan',
  'de klant', 'de kassa', 'het wisselgeld', 'het bonnetje', 'pinnen', 'contant',
  'het uur', 'de minuut', 'het kwartier', 'een half uur', 'duren', 'optellen',
  'de euro', 'de cent', 'de kilo', 'de liter', 'de meter', 'tellen',
  'Wat doe ik met producten over de datum?', 'Zonder ID mag ik dit niet verkopen.',
  'Half acht? Dus een half uur voor acht?', 'Ik heb het twee keer geteld.',
  // The region unit "Jouw regio: Zuid-Limburg" (src/content/regio, docs/regio-zuid-limburg.md):
  // recorded on the next 'Record ElevenLabs voices' run. ("de grens" and "langzaam" are recorded
  // already.) Listen to "Heerlen" once more after that run: it is said HEER-len.
  'het gemeentehuis', 'het loket', 'de verhuizing', 'de woningcorporatie', 'de wachtlijst', 'de buurt',
  'het buitenland', 'het carnaval', 'het dialect', 'verstaan',
  'Ik wil me inschrijven bij de gemeente.', 'Ik heb om tien uur een afspraak.', 'Ik sta op de wachtlijst voor een huis.',
  'Ik woon in Nederland en werk in Duitsland.', 'Kunt u Nederlands praten? Ik versta geen dialect.', 'Mag ik met carnaval vrij?',
  'Waar woon je?', 'In Heerlen. Ik ben net verhuisd.', 'Sorry, ik praat te snel.', 'Ja, wat langzamer graag.',
  'Kan ik een afspraak maken?', 'Wil je het in het Nederlands zeggen?',
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
      ...allRegionTips.map((t) => t.phrase.nl),
      BRAM_HELLO,
    ]);
    const missing = [...texts].filter((t) => !said.has(t.trim()) && !said.has(plain(t)));
    expect(missing.filter((t) => !PENDING_RECORDING.has(t))).toEqual([]);
  });

  it('Bram’s own line is a clip that only his voice records (x.bram, Thijmen)', { timeout: 60_000 }, () => {
    // public/audio/ is not in git (CI and a fresh checkout have no clips.json): make it first.
    if (!existsSync('public/audio/clips.json')) execSync('npx tsx scripts/list-clips.ts', { stdio: 'ignore' });
    const clips = JSON.parse(readFileSync('public/audio/clips.json', 'utf8')) as { id: string; text: string; voices?: string[] }[];
    expect(clips.find((c) => c.id === 'x.bram')).toEqual({ id: 'x.bram', text: BRAM_HELLO, voices: [BRAM_VOICE] });
    // Every other clip is recorded in every voice, as before.
    expect(clips.filter((c) => c.voices).map((c) => c.id)).toEqual(['x.bram']);
  });
});
