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
      // New sector unit "In de kas" (u.kas, 30 October 2026):
      'Hoeveel kratten heb ik vandaag gedaan?',
      'Mag ik al in deze kas werken?',
      'In welke rij begin ik?',
      'Is deze kas bespoten?',
      'Ik ga even water drinken.',
      'Waar staat de plukkar?',
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
      'de bijzonderheid',
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
      'Eerst bel ik de klant. Hij moet akkoord zijn.',
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
      'Mag ik een advocaat?',
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
      'Ik ben goed met mijn handen.',
      'Ik werk graag met mensen.',
      'Mag ik een dag meelopen?',
      'Waar ben je goed in?',
      'Ik ben nauwkeurig. Thuis zorg ik voor mijn moeder.',
      'Ik ben goed met mensen. Ik help thuis veel.',
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
