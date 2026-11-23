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
  // Every sector unit at four lessons (17 new lessons, 14 November 2026):
  'Negentig centimeter. Ik schrijf het op.',
  'In de container bij de ingang.',
  'Ja. De band stond een half uur stil.',
  'Hij is verward. Dat is anders dan gisteren.',
  'Niet alleen. Ik pak de tillift.',
  'Ja, ik breng ze meteen.',
  'Ja, chef. Ik kom eraan.',
  'Nee, daar werkt nog iemand.',
  'Nee, de rode is alleen voor de wc.',
  'Ik kijk even voor u in het magazijn.',
  'Ik begrijp het. Ik haal even mijn collega.',
  'Alleen de rode. De groene zijn nog niet rijp.',
  'We stoppen en gaan naar binnen.',
  'Nee. Ik meet het nog een keer.',
  'Nee, wacht. Het moet eerst afkoelen.',
  'De motor maakt een raar geluid.',
  'Nog niet. Het is een elektrische auto.',
  'Ik kijk even voor u in het magazijn.',
  'Ik begrijp het. Ik haal even mijn collega.',
  // Replies with "app": said "epp" from take 9 (src/lib/sayAs.ts APP_TAKE, 10 November 2026); the
  // older clips do not play until they are recorded again.
  'Oké, ik app in de pauze.',
  'Ja, ik reageer meteen in de app.',
  // New lesson "Moet het of mag het?" (l.mustmay, 8 November 2026):
  'Nee, dat is niet nodig. Het is vrijwillig.',
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
  // New unit "Slimme apps en AI" (u.ai, 19 October 2026):
  'Ja, met hulp van AI.',
  'Liever niet, er staan namen van klanten in.',
  'Ik bel je eerst op je oude nummer.',
  'Kan ik er met een mens over praten?',
  // New sector unit "In de kas" (u.kas, 30 October 2026):
  'Vier. Nog twee te gaan.',
  'Nee, nog niet. Die is net bespoten.',
  // New unit "Getallen en gegevens" (u.data) and the lessons l.permit, l.kids, l.body and
  // l.jobends (30 October 2026):
  'Haddad. Zal ik het spellen?',
  'Het is maandag drie juni.',
  'Nee, dan heb ik taalles. Woensdag kan ik wel.',
  'De kinderopvang belde. Mijn zoon heeft koorts.',
  'In mijn rug. Ik heb een zware doos getild.',
  'Wat is de opzegtermijn van mijn huurcontract?',
  // Entree in the Taal track (30 October 2026): the replies of the 17 new lessons.
  'Bijna. Wat betekent dit woord op de werkbon?',
  'Bijna. Kamer vier zat op slot.',
  'Bij het zagen kunnen er stukjes in mijn oog komen.',
  'Is de stroom eraf? Anders wacht ik op de elektricien.',
  'Ja. Waar liggen de winterbanden?',
  'Eerst vraag ik het aan de chef. De klant moet akkoord zijn.',
  'Maandag. Eerst tekenen we de POK.',
  'Oké. Kunt u laten zien hoe het sneller kan?',
  'Ja. Ik heb mijn stempas en mijn ID.',
  'Ja, hier is het. Wat is er aan de hand?',
  'Nee, mijn wachtwoord werkt niet.',
  'Ja. Ik bel de ICT-afdeling.',
  'Ik kan goed voor mensen zorgen. Thuis zorg ik voor mijn moeder.',
  'Ik wil de bbl doen. Dan werk ik en leer ik.',
  'Nog niet. Ik lees hem eerst na.',
  'Nee, dank je. Achteraf betalen is ook een schuld.',
  'Nee, dank je. Ik werk niet onder invloed.',
  // New lessons "Brandalarm en ontruimen" (l.alarm) and "Getallen" (l.counting), 4 November 2026:
  'Nee, mijn collega is er nog niet.',
  'Zeventig. Zeven, nul.',
  // New lesson "Kort en duidelijk" (l.clear), 4 November 2026:
  'Ja. Ik heb nog één vraag.',
  // New sector unit "Vervoer en bezorging" (u.delivery) and "Voedselverwerking" (l.food), 5 November 2026:
  'Ja. Wilt u hier even tekenen?',
  'Nee, dan heb ik geen tijd voor mijn pauze.',
  'Hierna komt een product zonder noten.',
  // New lessons "Je goed voelen op het werk" (l.feelwell) and "Een nieuwe collega helpen" (l.newcolleague), 5 November 2026:
  'Niet zo goed. Ik lig vaak wakker.',
  'Mooi. Laat eens zien.',
  // New lesson "Weer aan het werk na ziekte" (l.backtowork), 5 November 2026:
  'Ja, het gaat beter. Ik doe het rustig aan.',
  // New unit "Goed communiceren" (u.communicate), 5 November 2026:
  'De scanner doet het niet. Ik heb een nieuwe nodig.',
  'Echt? Of was dat een grapje?',
  'Sorry, het is erg druk. Wat moet eerst?',
  'Goedemorgen. U belde mij? Sorry, ik heb het gemist.',
  'Ja hoor. Wat is er?',
  // New unit "Feedback en overleg" (u.feedback), 5 November 2026:
  'Ja, graag. Ik wil het goed doen.',
  'Netjes! Alleen de dozen staan scheef.',
  'Ja. Wanneer komt het nieuwe rooster?',
  // Logistiek at four lessons per unit (l.picking, l.loading, l.vancheck, l.delay, 14 November 2026):
  'Gang drie, vak twaalf.',
  'Nee, er moet nog folie om.',
  'Nee, de spiegel is kapot.',
  'Bij de omleiding. Ik ben tien minuten later.',
  // "Hulp vragen" at four lessons (l.howto, l.mayask, l.whereis, 14 November 2026):
  'Nee, dat weet ik nog niet.',
  'Ja. Heb je even tijd?',
  'Nee. Kun je het aanwijzen?',
  // "Instructies", a new basis unit (u.do: l.putdown, l.onoff, l.fillempty, l.order, 14 November 2026):
  'Ja. Waar moet ik het zetten?',
  'Nee. Ik doe hem nu dicht.',
  'Ja. Ik maak hem leeg.',
  'Ja. Eerst dit, en dan?',
  // "Tegels, stuc en verf", a new sector unit of Bouw (u.afbouw, 20 November 2026):
  'Bij de emmer, naast de deur.',
  'In het midden, op de hartlijn.',
  'Nee, wacht nog een dag.',
  // l.paint, l.prep, "Metselen, hout en vastmaken" and three lessons of Rekenen (20 November 2026):
  'De brede voor de muur, het penseel voor de hoekjes.',
  'Nee, eerst schuren en het gat dichtmaken.',
  'Nog één pallet. Genoeg voor vandaag.',
  'Kijk op de lagenmaatlat.',
  'De kapzaag, voor dit kleine stuk.',
  'Ja, de winkelhaak past precies.',
  'Aan de lader, hij is bijna vol.',
  'Met twee pluggen en twee schroeven.',
  'Nee, een rechthoek. Hij is langer dan breed.',
  'Vijfenveertig. De helft van een rechte hoek.',
  'Vier bij vijf meter, dus twintig vierkante meter.',
  // "Machines en gereedschap" (u.machines, 21 November 2026):
  'De sensor ziet de doos niet goed.',
  'Elk uur één. Schrijf het op de lijst.',
  'Twaalf. Dat staat op de lijst.',
  'Elke maandag, voor de eerste dienst.',
  // "Elektra, leidingen en metaal" (u.install, 21 November 2026):
  'Bruin bij bruin, blauw bij blauw.',
  'Nee, dat doet de elektricien.',
  'Een beetje. Ik draai hem nog wat vaster.',
  'Er zit nog een braam aan.',
  // "Assemblage en montage" (u.montage, 21 November 2026):
  'Stap vier. Kijk op de werkinstructie.',
  'Tot de momentsleutel klikt.',
  'Nee, nooit onder een hangende last.',
  'Nee, er zit een barst in.',
  // "Kweken, sorteren en de kas" and "Banden, olie en remmen" (22 November 2026):
  'Een halve centimeter. Niet dieper.',
  'Nee, nog te groen. Laat hem hangen.',
  'Het scherm is dicht, en de ramen ook.',
  'Nee, dat is een sluipwesp. Die helpt ons.',
  'Ja, het profiel is bijna weg.',
  'Vier liter. Kijk daarna op de peilstok.',
  'Ja, hij is te dun.',
  'Kijk op de werkorder.',
  // The new sectors Groen and Facilitair (23 November 2026):
  'Ja, maar haal eerst de stenen weg.',
  'Alleen de dode takken.',
  'Tot het touw. Niet lager.',
  'Nog niet. Eerst krijg je een cursus.',
  'Nee, dat is een plant. Laat hem staan.',
  'Achter in het perk, bij de muur.',
  'Nee, wacht. Er komt een vrachtwagen.',
  'Dat weet ik niet. Vraag het aan de gemeente.',
  'Een moment. Ik bel hem even.',
  'In de garderobe, naast de lift.',
  'Voor Financiën, op de tweede verdieping.',
  'Om tien uur. Zorg dat alles klaarstaat.',
  'De verwarming is kapot. De monteur komt morgen.',
  'Ja, de batterij is bijna leeg.',
  'Naar kamer twaalf. Kijk op de plattegrond.',
  'Nee, iedereen is weg. Ik sluit af.',
  // Beveiliging, Voedingsindustrie, Afval en recycling and Kinderopvang (23 November 2026):
  'Ja. Er stond een raam open bij de achterdeur.',
  'Sorry, zonder pas mag u niet naar binnen.',
  'Een man bij het hek. Ik stuur een collega.',
  'Wat er gebeurde, waar en hoe laat.',
  'Nee, ik mis nog twee mensen van de lijst.',
  'Bij de ingang, naast de lift.',
  'Nee. Dat doet de politie.',
  'U hebt hier een huisverbod.',
  'Nee, alle sieraden gaan af.',
  'Nee, daar zitten noten in.',
  'De deur staat open. Doe hem snel dicht.',
  'Laat het aan de ploegleider zien.',
  'Vijfhonderd gram. Kijk op de weegschaal.',
  'Over tien dagen. Kijk op de lijst.',
  'Nog niet. Ik moet nog naspoelen.',
  'Zo weten we dat het eten veilig is.',
  'Nee, je stapt in de cabine.',
  'Ja, ik sta links. Kijk in je spiegel.',
  'Bij het restafval. Er zit vet op.',
  'Was de wond goed. En zeg het tegen mij.',
  'In de container voor grofvuil, achteraan.',
  'Ik weet het niet. Zet hem apart.',
  'Nee. Eerst gaat de stroom eraf.',
  'Alleen als de chauffeur je ziet.',
  'Om tien uur. Het staat in de app.',
  'Nee, hij heeft een allergie. Kijk op de lijst.',
  'Ja, sinds één uur. Ik kijk zo weer even.',
  'Ja, aan tafel. Daarna ruim je hem op.',
  'Zijn oma. Ze staat op de lijst.',
  'Ja, ze heeft een bult. Ik bel haar moeder.',
  'Hij is erg warm. Ik ga hem temperaturen.',
  'Ja, maar zeg het eerst tegen een collega.',
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
