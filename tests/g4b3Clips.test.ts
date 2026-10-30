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
  // New sector unit "In de kas" (u.kas, l.harvest and l.greensafe, 30 October 2026). "de kas",
  // "de krat", "drinken", "Ik werk in de kas." and "De krat is vol." have a clip already.
  'het gewas',
  'de rij',
  'oogsten',
  'sorteren',
  'de spuitmiddelen',
  'bespoten',
  'de plukkar',
  'bukken',
  'de hitte',
  'In welke rij begin ik?',
  'Is deze kas bespoten?',
  'Ik ga even water drinken.',
  'Waar staat de plukkar?',
  'Hoeveel rijen heb je gedaan?',
  'Vier. Nog twee te gaan.',
  'Mag ik in kas drie werken?',
  'Nee, nog niet. Die is net bespoten.',
  'Hoeveel kratten heb ik vandaag gedaan?',
  'Mag ik al in deze kas werken?',
  // New lesson "Je gegevens" (l.details, u.data, 30 October 2026), with its tip's phrase:
  'de voornaam',
  'de achternaam',
  'spellen',
  'het telefoonnummer',
  'de geboortedatum',
  'het formulier',
  'Kunt u dat spellen?',
  'Ik geef mijn nieuwe telefoonnummer door.',
  'Dit formulier is voor de Belastingdienst.',
  'Wat is je achternaam?',
  'Haddad. Zal ik het spellen?',
  'Ik spel het even: A, L, I.',
  // New lesson "Dagen en datums" (l.dates, u.data, 30 October 2026), with its tip's phrase:
  'maandag',
  'de week',
  'de maand',
  'volgende week',
  'vorige week',
  'tot en met',
  'Ik kan maandag tot en met donderdag.',
  'Volgende week werk ik vier dagen.',
  'Vorige week werkte ik veertig uur.',
  'Welke datum is het vandaag?',
  'Het is maandag drie juni.',
  'Bedoel je drie juni?',
  // New lesson "Papieren, inburgering en je werk" (l.permit, 30 October 2026), with its tip's phrase:
  'de papieren',
  'de werkvergunning',
  'de werknemer',
  'de zzp’er',
  'de inburgering',
  'de taalles',
  'Mag ik hier werken met mijn papieren?',
  'Ben ik werknemer of zzp’er?',
  'Ik werk als oproepkracht.',
  'Kun je dinsdag werken?',
  'Nee, dan heb ik taalles. Woensdag kan ik wel.',
  'Ik heb op dinsdag taalles. Kan mijn rooster daar rekening mee houden?',
  // New lesson "Kinderen en werk" (l.kids, 30 October 2026), with its tip's phrase:
  'zwanger',
  'de kinderopvang',
  'ophalen',
  'een ziek kind',
  'het ouderschapsverlof',
  'het zorgverlof',
  'Mijn kind is ziek. Ik moet het ophalen.',
  'Mag ik calamiteitenverlof opnemen?',
  'Betaalt mijn werkgever mijn loon door?',
  'Waarom moet je nu weg?',
  'De kinderopvang belde. Mijn zoon heeft koorts.',
  'Mijn kind is ziek. Kan ik vandaag eerder weg?',
  // New lesson "Lichaam en klachten" (l.body, 30 October 2026), with its tip's phrase:
  'het hoofd',
  'de rug',
  'de arm',
  'de hand',
  'de buik',
  'het oog',
  'Ik heb pijn in mijn hand.',
  'Ik voel me niet goed.',
  'Ik ben op mijn arm gevallen.',
  'Waar doet het pijn?',
  'In mijn rug. Ik heb een zware doos getild.',
  'Ik ben gevallen. Mijn arm doet pijn.',
  // New lesson "Je werk stopt" (l.jobends, 30 October 2026), with its tip's phrase:
  'de eindafrekening',
  'opzeggen',
  'uitschrijven',
  'de sleutel',
  'verhuizen',
  'het busje',
  'Krijg ik mijn vakantiegeld en mijn vrije dagen uitbetaald?',
  'Ik vraag advies bij het Juridisch Loket.',
  'Ik regel zelf een nieuwe zorgverzekering.',
  'Je werk stopt vrijdag. Dan moet je ook uit het huis.',
  'Wat is de opzegtermijn van mijn huurcontract?',
  'Wanneer krijg ik mijn eindafrekening?',
  // Entree in the Taal track (30 October 2026): the 17 new lessons, each with its tip's phrase.
  // l.workorder "De werkbon" (u.finish):
  'de werkbon',
  'lezen',
  'het aantal',
  'het materiaal',
  'klaarleggen',
  'de handtekening',
  'Ik lees eerst de werkbon.',
  'Klopt dit aantal?',
  'Ik leg het materiaal klaar.',
  'Weet je wat je moet doen?',
  'Bijna. Wat betekent dit woord op de werkbon?',
  'Er staan tien dozen op de werkbon. Klopt dat?',
  // l.handover "Klaar, of nog niet?" (u.finish):
  'opruimen',
  'nakijken',
  'afmelden',
  'kapot',
  'op slot',
  'Ik ruim mijn plek op.',
  'Kunt u mijn werk even nakijken?',
  'Ik meld me af bij de leidinggevende.',
  'Is alles klaar?',
  'Bijna. Kamer vier zat op slot.',
  'Kamer vier is nog niet klaar. De deur zat op slot.',
  // l.workshop "Gereedschap in de werkplaats" (u.tech):
  'het gereedschap',
  'zagen',
  'slijpen',
  'de vonk',
  'de gehoorbescherming',
  'het lawaai',
  'Waar ligt het gereedschap?',
  'Ik draag gehoorbescherming bij het slijpen.',
  'Pas op voor de vonken!',
  'Waarom draag je een bril?',
  'Bij het zagen kunnen er stukjes in mijn oog komen.',
  'Ik ga slijpen. Waar is de gehoorbescherming?',
  // l.power "Eerst de stroom eraf" (u.tech):
  'de stroom',
  'de kabel',
  'de stekker',
  'onder spanning',
  'spanningsloos',
  'de elektricien',
  'Staat hier nog stroom op?',
  'Deze kabel is kapot.',
  'Ik wacht tot het spanningsloos is.',
  'Kun je die lamp even vervangen?',
  'Is de stroom eraf? Anders wacht ik op de elektricien.',
  'Ik zie een kapotte kabel. Wie kan ernaar kijken?',
  // l.garage "In de garage" (u.garage):
  'de band',
  'de olie',
  'de accu',
  'de monteur',
  'de hefbrug',
  'lek',
  'De band is lek.',
  'Waar staat de nieuwe olie?',
  'De auto staat op de hefbrug.',
  'Kun je de banden van deze auto wisselen?',
  'Ja. Waar liggen de winterbanden?',
  'Er ligt olie op de vloer. Ik ruim het op.',
  // l.carjob "De klant beslist" (u.garage):
  'de proefrit',
  'het rijbewijs',
  'akkoord',
  'de kosten',
  'repareren',
  'het onderdeel',
  'Is de klant akkoord met de kosten?',
  'Dit onderdeel is kapot.',
  'Mag ik een proefrit maken?',
  'De remmen zijn ook slecht. Doe je die meteen?',
  'Eerst vraag ik het aan de chef. De klant moet akkoord zijn.',
  'Ik zie nog een probleem. Wie belt de klant?',
  // l.placement "Je stage" (u.stage):
  'de stage',
  'de praktijkopleider',
  'de stagebegeleider',
  'de POK',
  'de school',
  'het leerbedrijf',
  'Ik loop stage in een magazijn.',
  'Wie is mijn praktijkopleider?',
  'Ik heb de POK nog niet getekend.',
  'Wanneer begin je met je stage?',
  'Maandag. Eerst tekenen we de POK.',
  'Ik begin pas als de POK getekend is.',
  // l.review "Feedback op je stage" (u.stage):
  'de beoordeling',
  'het leerdoel',
  'het voorbeeld',
  'het portfolio',
  'het cijfer',
  'het verslag',
  'Wat kan ik beter doen?',
  'Kunt u een voorbeeld geven?',
  'Mijn beoordeling is volgende week.',
  'Je moet sneller werken.',
  'Oké. Kunt u laten zien hoe het sneller kan?',
  'Wat ging goed, en wat kan beter?',
  // l.council "De gemeente en stemmen" (u.society):
  'stemmen',
  'de verkiezing',
  'de gemeenteraad',
  'het parlement',
  'de stempas',
  'de burgemeester',
  'Mag ik stemmen?',
  'Mijn stempas kwam met de post.',
  'De gemeenteraad beslist over mijn buurt.',
  'Ga je woensdag stemmen?',
  'Ja. Ik heb mijn stempas en mijn ID.',
  'Mag ik stemmen voor de gemeenteraad?',
  // l.police "Politie en je rechten" (u.society):
  'de agent',
  'de boete',
  'het bezwaar',
  'de rechter',
  'de advocaat',
  'de wet',
  'Ik heb een boete gekregen.',
  'Ik wil bezwaar maken.',
  'Ik wil met een advocaat praten.',
  'Mag ik uw identiteitsbewijs zien?',
  'Ja, hier is het. Wat is er aan de hand?',
  'Ik ben het niet eens met dit besluit. Ik maak bezwaar.',
  // l.login "Inloggen" (u.online):
  'uitloggen',
  'het account',
  'het scherm',
  'vergrendelen',
  'de gebruikersnaam',
  'de inlogcode',
  'Ik ben mijn wachtwoord vergeten.',
  'Ik log altijd uit.',
  'Mijn DigiD geef ik aan niemand.',
  'Kun je inloggen?',
  'Nee, mijn wachtwoord werkt niet.',
  'Ik ga even weg. Ik vergrendel mijn scherm.',
  // l.phish "Nepmails" (u.online):
  'de afzender',
  'klikken',
  'de bijlage',
  'verdacht',
  'de ICT-afdeling',
  'wijzigen',
  'Deze mail is verdacht.',
  'Ik open de bijlage niet.',
  'Ik wijzig mijn wachtwoord meteen.',
  'Heb je op de link geklikt?',
  'Ja. Ik bel de ICT-afdeling.',
  'Ik heb op een verdachte link geklikt.',
  // l.mychoice "Waar ben ik goed in?" (u.grow):
  'goed in',
  'kiezen',
  'het beroep',
  'de bijbaan',
  'nauwkeurig',
  'de meeloopdag',
  'Ik kan goed met mijn handen werken.',
  'Ik werk graag met mensen.',
  'Mag ik een dag meelopen?',
  'Waar ben je goed in?',
  'Ik kan goed voor mensen zorgen. Thuis zorg ik voor mijn moeder.',
  'Ik kan goed met mensen omgaan. Ik help thuis veel.',
  // l.nextstep "Na Entree" (u.grow):
  'niveau 2',
  'de startkwalificatie',
  'de bbl',
  'doorstromen',
  'aanmelden',
  'de open dag',
  'Na Entree wil ik naar niveau 2.',
  'Ik wil werken en leren tegelijk.',
  'Wanneer is de open dag?',
  'Wat ga je doen na Entree?',
  'Ik wil de bbl doen. Dan werk ik en leer ik.',
  'Kan ik na Entree naar niveau 2?',
  // l.email "Een mail aan je werk" (u.contact):
  'de mail',
  'het onderwerp',
  'beste',
  'beleefd',
  'nalezen',
  'versturen',
  'Wat zet ik bij het onderwerp?',
  'Ik lees mijn mail nog een keer na.',
  'Ik verstuur de mail morgen.',
  'Heb je de mail over je vrije dag gestuurd?',
  'Nog niet. Ik lees hem eerst na.',
  'Beste Karin, mag ik vrijdag vrij? Groet, Ali Haddad',
  // l.budget "Je geld per maand" (u.money):
  'de vaste lasten',
  'sparen',
  'het abonnement',
  'achteraf betalen',
  'de bedenktijd',
  'de garantie',
  'Eerst betaal ik de vaste lasten.',
  'Ik spaar elke maand een beetje.',
  'Ik zeg dit abonnement op.',
  'Koop die telefoon nu en betaal later!',
  'Nee, dank je. Achteraf betalen is ook een schuld.',
  'Ik betaal liever nu. Dan heb ik geen schuld.',
  // l.healthy "Fit voor je werk" (u.health):
  'slapen',
  'het ontbijt',
  'bewegen',
  'moe',
  'de drugs',
  'somber',
  'Ik ben erg moe vandaag.',
  'Ik eet altijd eerst een ontbijt.',
  'In de pauze ga ik even wandelen.',
  'Wil je een pilletje? Dan blijf je wakker.',
  'Nee, dank je. Ik werk niet onder invloed.',
  'Ik voel me al lang somber. Kan ik een afspraak maken?',
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

  it('PENDING_RECORDING: names lines that are recorded now (a warning, not a failure)', () => {
    // After a 'Record ElevenLabs voices' run (docs/opnames.md) the recorded lines can leave the
    // list. A warning, so a new recording never blocks the publish that runs the tests.
    const voices = JSON.parse(readFileSync('public/audio-el/voices.json', 'utf8')).voices as { said: Record<string, string> }[];
    const plain = (t: string) => t.trim().toLowerCase().replace(/[.!?…,]+$/, '');
    const said = new Set(voices.flatMap((v) => Object.values(v.said)).flatMap((t) => [t.trim(), plain(t)]));
    const recorded = [...PENDING_RECORDING].filter((t) => said.has(t.trim()) || said.has(plain(t)));
    if (recorded.length) console.warn(`Recorded now, can leave PENDING_RECORDING (${recorded.length}):\n${recorded.join('\n')}`);
    expect(Array.isArray(recorded)).toBe(true);
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
