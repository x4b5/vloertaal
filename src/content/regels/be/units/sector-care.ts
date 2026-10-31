import type { BeUnit } from '../types';

/**
 * Sector zorg (België) · Werken in de zorg: de Belgische versie van careUnit in
 * src/content/regels/units/sector.ts (les Z.1, Z.2). Zelfde lessen, met "r.be." vooraan
 * (docs/werkregels-belgie.md). Vlaamse woorden: woonzorgcentrum, bewoner, zorgkundige, arbeidsarts.
 *
 * `// ⚖️ check:` = een feit dat de deskundige nakijkt, met de bron. Opgezocht op 30 okt 2026. De
 * hygiëneregels komen uit de aanbevelingen van de Hoge Gezondheidsraad over handhygiëne; die site
 * is niet geopend (30 okt 2026). Elke zorginstelling heeft ook eigen richtlijnen.
 */
export const be: BeUnit = {
  unit: {
    id: 'r.be.care',
    title: 'Werken in de zorg',
    emoji: '🩺',
    color: '#3a9d8f',
    lessons: [
      {
        // Les Z.1 · Hygiëne: schone handen, geen juwelen
        id: 'r.be.l.care.1',
        title: 'Hygiëne: schone handen, geen sieraden',
        goal: 'Je kent de hygiëneregels in de zorg. Je weet waarom ze er zijn.',
        remember: 'Schone handen voor en na elke bewoner. Geen sieraden aan handen en polsen.',
        // Wie kan je helpen: je leidinggevende of hoofdverpleegkundige · de referentieverpleegkundige
        //   voor ziekenhuishygiëne · de arbeidsarts.
        help: ['leidinggevende', 'arbeidsarts'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.care.1.sc1',
            picture: 'Dewi bij een lavabo in een woonzorgcentrum. Op de rand liggen haar ring en haar uurwerk.',
            lines: [
              'Dewi begint in een woonzorgcentrum.',
              'Ze draagt graag een ring en een uurwerk.',
              'Haar collega Esra zegt: "Die moeten af. En je nagels zijn te lang."',
              'Dewi schrikt een beetje.',
            ],
          },
          // ⚖️ check: handhygiëne voor en na elk contact met een bewoner of patiënt; geen juwelen aan handen en polsen; korte nagels zonder nagellak (Hoge Gezondheidsraad, aanbevelingen handhygiëne; FOD Volksgezondheid, campagne handhygiëne; niet geopend, nakijken)
          // ⚖️ check: wie besmettelijk kan zijn (braken, diarree), verwittigt het werk vóór de dienst (richtlijnen van de instelling; nakijken)
          {
            kind: 'rule',
            id: 'r.be.l.care.1.ru1',
            emoji: '🧼',
            title: 'Schone handen voor en na elke bewoner. Geen sieraden aan handen en polsen.',
            body: [
              'Maak je handen schoon voor en na elke bewoner.',
              'Geen sieraden aan je handen en polsen.',
              'Je nagels zijn kort en zonder nagellak.',
              'Kun je besmettelijk zijn? Bel vóór je dienst.',
            ],
            rule: 'geschreven',
          },
          // ⚖️ check: geen ring of uurwerk in de zorg; korte nagels zonder nagellak; lang haar vast (Hoge Gezondheidsraad, handhygiëne; nakijken)
          {
            kind: 'truefalse',
            id: 'r.be.l.care.1.tf1',
            statement: 'In de zorg draag je geen ring en geen uurwerk.',
            answer: true,
            why: 'Onder een ring of uurwerk blijven bacteriën zitten. Zo kunnen bewoners ziek worden. Daarom draag je geen sieraden aan je handen en polsen. Je nagels zijn kort en zonder nagellak. Lang haar draag je vast.',
          },
          // ⚖️ check: handen ontsmetten ook na het uittrekken van handschoenen (Hoge Gezondheidsraad, handhygiëne)
          {
            kind: 'whatdo',
            id: 'r.be.l.care.1.wd1',
            situation: 'Dewi heeft net een bewoner geholpen. Ze moet meteen naar de volgende. Wat kan Dewi het beste doen?',
            options: [
              { id: 'a', text: 'Ze loopt door. Haar handen lijken schoon.', best: false, feedback: 'Dat is logisch. Maar bacteriën zie je niet.' },
              { id: 'b', text: 'Ze trekt alleen een paar nieuwe handschoenen aan.', best: false, feedback: 'Handschoenen helpen. Maar ook haar handen moeten schoon zijn.' },
              { id: 'c', text: 'Ze maakt eerst haar handen schoon.', best: true, feedback: 'Goed. Zo neemt ze geen bacteriën mee.' },
            ],
            why: 'Maak je handen schoon voor en na elke bewoner. Met water en zeep, of met handalcohol. Doe dat ook als je handschoenen uittrekt. Zo bescherm je je bewoners en jezelf.',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.care.1.wd2',
            situation: 'Dewi heeft vannacht overgegeven. Nu voelt ze zich weer goed. Wat kan Dewi het beste doen?',
            options: [
              { id: 'a', text: 'Ze gaat werken. Ze voelt zich nu toch goed.', best: false, feedback: 'Dat snap ik. Maar ze kan bewoners nog besmetten.' },
              { id: 'b', text: 'Ze belt af, en zegt: het kan besmettelijk zijn.', best: true, feedback: 'Goed. Ze hoeft niet te zeggen wat ze heeft. Dit wel.' },
              { id: 'c', text: 'Ze gaat werken, en draagt de hele dag een mondmasker.', best: false, feedback: 'Goed bedoeld. Maar dat helpt niet genoeg.' },
            ],
            why: 'Overgeven of diarree kan besmettelijk zijn. Bewoners worden sneller en erger ziek dan gezonde mensen. Bel dus vóór je dienst. Volg de richtlijnen van je werk. Daar staat in wat je moet doen.',
          },
          {
            kind: 'whoask',
            id: 'r.be.l.care.1.wa1',
            question: 'Je hebt een vraag over de hygiëneregels op je afdeling. Wie vraag je het eerst?',
            options: [
              { id: 'a', who: 'rva', best: false, feedback: 'De RVA gaat over werkloosheid, niet over hygiëne.' },
              { id: 'b', who: 'justitiehuis', best: false, feedback: 'Het justitiehuis helpt bij rechten, niet bij hygiëne.' },
              { id: 'c', who: 'leidinggevende', best: true, feedback: 'Goed. Je leidinggevende kent de regels van je afdeling.' },
            ],
            why: 'Je leidinggevende kent de richtlijnen. Vaak is er ook een collega die op hygiëne let.',
          },
          { kind: 'model', id: 'r.be.l.care.1.mo1', context: 'Je doet je sieraden af voor je dienst.', nl: 'Mijn ring en uurwerk gaan af. Waar kan ik ze veilig leggen?' },
        ],
      },
      {
        // Les Z.2 · Privacy en medicijnen
        id: 'r.be.l.care.2',
        title: 'Privacy en medicijnen',
        goal: 'Je deelt niets over bewoners. Je geeft alleen medicijnen als je het geleerd hebt. Je meldt fouten.',
        remember: 'Wat je over bewoners weet, blijft op je werk.',
        // Wie kan je helpen: je leidinggevende of de verpleegkundige · een ervaren collega · de
        //   vertrouwenspersoon.
        help: ['leidinggevende', 'collega', 'vertrouwenspersoon'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.care.2.sc1',
            picture: 'Fatima in de leefruimte van een woonzorgcentrum. Op tafel een pillendoos en een gsm.',
            lines: [
              'Fatima werkt in een woonzorgcentrum.',
              'Ze heeft een gezellige middag met meneer Peeters.',
              'Ze wil een foto maken voor de groepschat.',
              'Daarna moet ze zijn medicijnen geven.',
              'Dat heeft ze nog nooit gedaan.',
            ],
          },
          // ⚖️ check: wat je over bewoners weet, valt onder het beroepsgeheim of de discretieplicht (Strafwetboek art. 458; Wet patiëntenrechten 22 augustus 2002; AVG/GDPR)
          // ⚖️ check: medicijnen geven mag alleen wie dat mag en geleerd heeft; een zorgkundige mag dat alleen onder voorwaarden, na delegatie door een verpleegkundige (KB zorgkundigen 12 januari 2006, gewijzigd 2019; welke handeling precies: nakijken)
          // ⚖️ check: een fout met medicijnen meld je altijd (incidentmelding, richtlijnen van de instelling; Vlaams kwaliteitsdecreet; nakijken)
          {
            kind: 'rule',
            id: 'r.be.l.care.2.ru1',
            emoji: '💊',
            title: 'Wat je over bewoners weet, blijft op je werk.',
            body: [
              'Wat je over bewoners weet, is privé.',
              "Je deelt geen foto's of verhalen over bewoners.",
              'Geef alleen medicijnen als je het geleerd hebt.',
              'Een fout met medicijnen meld je altijd.',
            ],
            rule: 'geschreven',
          },
          // ⚖️ check: ook foto's van bewoners zijn persoonsgegevens; delen mag alleen met toestemming (AVG/GDPR; Wet patiëntenrechten)
          {
            kind: 'truefalse',
            id: 'r.be.l.care.2.tf1',
            statement: 'Een leuke foto van een bewoner mag gewoon in de groepschat.',
            answer: false,
            why: "Wat je over bewoners weet, is privé. Dat geldt ook voor foto's. Je deelt niets zonder toestemming. Ook niet thuis of online. Volg de regels van je werk.",
          },
          // ⚖️ check: alleen medicijnen geven als je het geleerd hebt en het mag van je werk (KB zorgkundigen; nakijken)
          {
            kind: 'whatdo',
            id: 'r.be.l.care.2.wd1',
            situation: 'Fatima moet medicijnen geven. Ze heeft dat nog nooit geleerd. Wat kan Fatima het beste doen?',
            options: [
              { id: 'a', text: 'Ze vraagt eerst uitleg aan een ervaren collega.', best: true, feedback: 'Goed. Je geeft alleen medicijnen als je het geleerd hebt.' },
              { id: 'b', text: 'Ze geeft ze toch. Het staat allemaal op de lijst.', best: false, feedback: 'Dat is logisch. Maar zonder uitleg kan ze een fout maken.' },
              { id: 'c', text: 'Ze legt de pillen op tafel. Meneer neemt ze zelf wel.', best: false, feedback: 'Dan weet niemand of hij ze echt neemt.' },
            ],
            why: 'Geef alleen medicijnen als je het geleerd hebt. En als het mag van je werk. Check altijd de lijst. Juiste persoon, juist medicijn, juiste tijd? Weet je het niet zeker? Vraag het eerst.',
          },
          // ⚖️ check: een fout met medicijnen meld je altijd, als incident (richtlijnen van de instelling)
          {
            kind: 'whatdo',
            id: 'r.be.l.care.2.wd2',
            situation: 'Fatima geeft een pil een uur te laat. Niemand heeft het gezien. Wat kan Fatima het beste doen?',
            options: [
              { id: 'a', text: 'Ze zegt niets. Het was maar een uurtje.', best: false, feedback: 'Ik snap het. Maar soms is een uur belangrijk.' },
              { id: 'b', text: 'Ze geeft morgen een extra pil, om het goed te maken.', best: false, feedback: 'Niet doen. Dat kan gevaarlijk zijn.' },
              { id: 'c', text: 'Ze meldt het, zoals de richtlijn zegt.', best: true, feedback: 'Goed. Dan kan iemand checken of het goed gaat.' },
            ],
            why: 'Een fout met medicijnen meld je altijd. Dat heet een incident melden. Het gaat niet om straf. Het gaat erom dat de bewoner veilig is. En dat het team ervan leert.',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.care.2.wd3',
            situation: 'Een ervaren collega legt Fatima uit wat ze moet doen. Wat zegt Fatima terug?',
            quote: 'Meneer Peeters krijgt om 12 uur 1 pil, met een glas water.',
            options: [
              { id: 'a', text: 'Prima. Ik kijk straks wel even op de lijst.', best: false, feedback: 'De lijst is goed. Maar nu weet de collega niet of ze het snapt.', say: true },
              { id: 'b', text: 'Ja hoor, dat lukt me wel. Geen probleem.', best: false, feedback: 'Fijn. Maar zo hoort de collega niet wat ze begrepen heeft.', say: true },
              { id: 'c', text: 'Dus om 12 uur 1 pil, met water. Klopt dat?', best: true, feedback: 'Goed. Zo hoort de collega meteen of het klopt.', say: true },
            ],
            why: 'Zeg terug wat je gaat doen. Bij medicijnen is dat extra belangrijk. Zo hoort je collega meteen of je iets mist. Check daarna ook de lijst.',
          },
          {
            kind: 'whoask',
            id: 'r.be.l.care.2.wa1',
            question: 'Je weet niet hoe je een medicijn moet geven. Wie vraag je het?',
            options: [
              { id: 'a', who: 'huisarts', best: false, feedback: 'De huisarts werkt niet op je afdeling. Vraag het op je werk.' },
              { id: 'b', who: 'leidinggevende', best: true, feedback: 'Goed. Je leidinggevende regelt uitleg of hulp.' },
              { id: 'c', who: 'rva', best: false, feedback: 'De RVA gaat over werkloosheid, niet over medicijnen.' },
            ],
            why: 'Vraag het op je werk. Vraag je leidinggevende, de verpleegkundige of een ervaren collega.',
          },
          { kind: 'model', id: 'r.be.l.care.2.mo1', context: 'Je moet iets doen wat je nog niet geleerd hebt.', nl: 'Ik heb dit nog niet geleerd. Wil je het mij uitleggen?' },
        ],
      },
    ],
  },
  zegHet: {
    'r.be.l.care.1.mo1': [
      { text: 'Mijn ring blijft aan. Hij is heel belangrijk voor mij.', feedback: 'Dat snap ik. Maar in de zorg gaan sieraden af.' },
      { text: 'Ik doe ze straks af. Eerst help ik deze bewoner.', feedback: 'Te laat. Sieraden gaan af vóór je begint.' },
    ],
    'r.be.l.care.2.mo1': [
      { text: 'Ik doe het wel. Ik zie wel hoe het gaat.', feedback: 'Zonder uitleg kun je een fout maken. Vraag het eerst.' },
      { text: 'Dat is mijn werk niet. Doe jij het maar.', feedback: 'Dat klinkt onvriendelijk. Vraag om uitleg.' },
    ],
  },
  advice: {
    'r.be.l.care.1.ru1': 'advice',
    'r.be.l.care.2.ru1': 'advice',
  },
};
