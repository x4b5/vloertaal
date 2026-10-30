import type { BeUnit } from '../types';

/**
 * Unit 5 (België) · Werktijden, pauze en vrij: de Belgische versie van
 * src/content/regels/units/tijd.ts (docs/werkregels-belgie.md). Zelfde lessen en stap-id's, met
 * "r.be." vooraan. Vlaamse woorden: uurrooster, arbeidsreglement, overloon, inhaalrust, klein verlet,
 * verlof om dwingende redenen, tijdskrediet, moederschapsrust, geboorteverlof, zwartwerk.
 *
 * `// ⚖️ check:` = een feit dat de deskundige nakijkt, met de bron. De marker wordt nooit getoond
 * of voorgelezen. Opgezocht op 30 okt 2026. werk.belgie.be was in deze sessie niet te openen
 * (WebFetch: host niet bereikbaar, 30 okt 2026): de feiten komen uit zoekresultaten van werk.belgie.be,
 * Securex, Partena, ACLVB, RIZIV en vlaanderen.be; de deskundige legt ze naast werk.belgie.be.
 * `// Redactie:` is voor de makers.
 */
export const be: BeUnit = {
  unit: {
    id: 'r.be.tijd',
    title: 'Werktijden, pauze en vrij',
    emoji: '⏰',
    color: '#c2412d',
    lessons: [
      {
        // Les 5.1 · Je uurrooster en je werktijden
        id: 'r.be.l.tijd.1',
        title: 'Je uurrooster en je werktijden',
        goal: 'Je kent de grenzen voor werktijden, ook voor jongeren. Je weet waar je uurrooster staat.',
        // ⚖️ check: normaal hooguit 8 uur per dag en gemiddeld 38 uur per week (Arbeidswet 16 maart 1971, art. 19 en 20; wet 10 augustus 2001: 38-urenweek; securex.be "maximumgrenzen"; bijgewerkt oktober 2026)
        remember: 'Meestal hooguit 8 uur per dag en 38 uur per week.',
        // Wie kan je helpen: een vakbond · de vakbondsafvaardiging · Toezicht op de Sociale Wetten.
        help: ['vakbond', 'tsw'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.tijd.1.sc1',
            picture: 'Mohammed in een magazijn voor een uurrooster aan de muur. Eén vakje is rood.',
            lines: [
              'Mohammed werkt in een magazijn.',
              'Zijn uurrooster hangt aan de muur en staat in een app.',
              'Op dinsdag moet hij ineens 13 uur werken.',
              'Hij weet niet of dat mag.',
            ],
          },
          // ⚖️ check: normaal hooguit 8 uur per dag en gemiddeld 38 uur per week (Arbeidswet 16 maart 1971, art. 19; securex.be "maximumgrenzen"; Securex noemt 40 uur als weekgrens, 38 uur als gemiddelde; bijgewerkt oktober 2026)
          // ⚖️ check: langere dagen (bijvoorbeeld 9, 10 of 11 uur) kunnen alleen met een uitzondering: een KB of afspraken van de sector (securex.be "maximumgrenzen"; werk.belgie.be detachering, arbeidstijd)
          // ⚖️ check: het uurrooster staat in het arbeidsreglement (Wet van 8 april 1965 tot instelling van de arbeidsreglementen, art. 6)
          {
            kind: 'rule',
            id: 'r.be.l.tijd.1.ru1',
            emoji: '🗓️',
            title: 'Meestal hooguit 8 uur per dag en 38 uur per week.',
            body: [
              'De wet zegt: meestal hooguit 8 uur per dag.',
              'En gemiddeld 38 uur per week.',
              'Soms mag het langer. Dat staat dan in de afspraken van je sector.',
              'Je uurrooster staat in het arbeidsreglement. Dat zijn de regels van je bedrijf.',
            ],
            rule: 'geschreven',
          },
          // ⚖️ check: normaal hooguit 8 uur per dag (Arbeidswet 16 maart 1971, art. 19); een dienst van 13 uur gaat ook boven de uitzonderingen van 11 of 12 uur (securex.be "maximumgrenzen"; werk.belgie.be: 12 uur bij continuarbeid)
          // ⚖️ check: na je werk heb je recht op 11 uur rust aan één stuk (Arbeidswet 16 maart 1971, art. 38ter; werk.belgie.be "rusttijden")
          {
            kind: 'truefalse',
            id: 'r.be.l.tijd.1.tf1',
            statement: 'Een dienst van 13 uur mag meestal niet.',
            answer: true,
            why: 'Normaal werk je hooguit 8 uur per dag. Soms mag het langer, met afspraken van je sector. Maar 13 uur is bijna altijd te lang. Na je werk heb je recht op 11 uur rust.',
          },
          // ⚖️ check: jongeren onder 18 mogen in principe niet werken tussen 20 uur en 6 uur (Arbeidswet 16 maart 1971, art. 34; werk.belgie.be "jeugdige werknemers")
          // ⚖️ check: voor jongeren vanaf 16 jaar zijn er uitzonderingen per sector, zoals de horeca, via een KB (securex.be "regels voor jeugdige werknemers"); tot middernacht valt daar niet onder (nakijken)
          {
            kind: 'truefalse',
            id: 'r.be.l.tijd.1.tf2',
            statement: 'Malik is 17. Hij mag in het restaurant werken tot middernacht.',
            answer: false,
            why: 'Ben je jonger dan 18? Dan werk je meestal niet tussen 20 uur en 6 uur. In de horeca mag het soms iets later. Maar tot middernacht mag niet.',
          },
          // ⚖️ check: deeltijds met een variabel uurrooster: je krijgt je uurrooster minstens 7 werkdagen vooraf; een sectorcao kan dat korter maken, maar niet korter dan 3 werkdagen (Arbeidsdeal 2022, wet 3 oktober 2022; securex.be "deeltijders moeten weldra hun uurrooster 7 werkdagen vooraf krijgen")
          {
            kind: 'whatdo',
            id: 'r.be.l.tijd.1.wd1',
            situation: 'Mohammed werkt deeltijds. Zijn uurrooster verandert steeds een dag vooraf. Wat kan Mohammed het beste doen?',
            options: [
              { id: 'a', text: 'Hij past zich aan. Zo gaat het nu eenmaal.', best: false, feedback: 'Ik snap het. Maar er zijn regels voor het uurrooster.' },
              { id: 'b', text: 'Hij vraagt wanneer het uurrooster vast hoort te staan.', best: true, feedback: 'Goed. Rustig vragen is de eerste stap.' },
              { id: 'c', text: 'Hij komt alleen nog op de dagen die hij zelf wil.', best: false, feedback: 'Dan breekt hij zelf afspraken. Praten werkt beter.' },
            ],
            why: 'Werk je deeltijds met een wisselend uurrooster? Dan krijg je het meestal 7 werkdagen vooraf. Je sector kan dat korter maken, tot 3 werkdagen. Dat staat in het arbeidsreglement.',
          },
          {
            kind: 'whoask',
            id: 'r.be.l.tijd.1.wa1',
            question: 'Je moet steeds veel te lange diensten doen. Wie controleert de werktijden?',
            options: [
              { id: 'a', who: 'rva', best: false, feedback: 'De RVA gaat over werkloosheid, niet over je uurrooster.' },
              { id: 'b', who: 'tsw', best: true, feedback: 'Goed. Die dienst controleert de werktijden in bedrijven.' },
              { id: 'c', who: 'politie', best: false, feedback: 'De politie is voor misdaad en gevaar.' },
            ],
            why: 'Toezicht op de Sociale Wetten controleert de werktijden in bedrijven. Een vakbond helpt je ook.',
          },
          { kind: 'model', id: 'r.be.l.tijd.1.mo1', context: 'Je uurrooster heeft een te lange dienst.', nl: '13 uur is te lang voor mij. Mag dat volgens de regels?' },
        ],
      },
      {
        // Les 5.2 · Pauze
        id: 'r.be.l.tijd.2',
        title: 'Pauze',
        goal: 'Je weet wanneer je recht hebt op pauze, en hoe lang.',
        // ⚖️ check: werk je meer dan 6 uur, dan krijg je een pauze (Arbeidswet 16 maart 1971, art. 38quater; werk.belgie.be "rusttijden")
        remember: 'Werk je meer dan 6 uur? Dan heb je recht op pauze.',
        // Wie kan je helpen: een vakbond · Toezicht op de Sociale Wetten.
        help: ['vakbond', 'tsw'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.tijd.2.sc1',
            picture: 'Nadia achter de kassa van een drukke supermarkt. Ze kijkt naar de klok.',
            lines: [
              'Nadia werkt van 9 tot 17 uur in de supermarkt.',
              'Het is druk.',
              'Haar leidinggevende zegt: "Pauze doen we vandaag maar niet."',
              'Nadia heeft honger en is moe.',
            ],
          },
          // ⚖️ check: werk je meer dan 6 uur, dan krijg je een pauze (Arbeidswet 16 maart 1971, art. 38quater; werk.belgie.be "rusttijden")
          // ⚖️ check: zegt de sector niets anders, dan is de pauze minstens een kwartier: 15 minuten (securex.be "moeten er pauzes toegekend worden")
          // ⚖️ check: jongeren onder 18: na 4,5 uur werk een half uur pauze; na 6 uur werk een uur (Arbeidswet art. 34bis; securex.be "regels voor jeugdige werknemers")
          {
            kind: 'rule',
            id: 'r.be.l.tijd.2.ru1',
            emoji: '☕',
            title: 'Werk je meer dan 6 uur? Dan heb je recht op pauze.',
            body: [
              'Werk je meer dan 6 uur? Dan krijg je pauze.',
              'Zegt je sector niets anders? Dan is dat minstens een kwartier.',
              'Ben je jonger dan 18? Dan krijg je al pauze na 4,5 uur.',
              'Pauze is je recht. Dat staat in de wet.',
            ],
            rule: 'geschreven',
          },
          // ⚖️ check: werk je meer dan 6 uur, dan krijg je pauze; zonder afspraak in de sector minstens 15 minuten (Arbeidswet art. 38quater; securex.be "moeten er pauzes toegekend worden")
          // ⚖️ check: jongeren onder 18: na 4,5 uur werk een half uur pauze (Arbeidswet art. 34bis; securex.be "regels voor jeugdige werknemers")
          {
            kind: 'truefalse',
            id: 'r.be.l.tijd.2.tf1',
            statement: 'Werk je meer dan 6 uur? Dan heb je recht op pauze.',
            answer: true,
            why: 'Werk je meer dan 6 uur? Dan krijg je pauze. Zegt je sector niets anders? Dan is het minstens 15 minuten. Ben je jonger dan 18? Dan krijg je al na 4,5 uur een half uur pauze.',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.tijd.2.wd1',
            situation: 'De leidinggevende wil vandaag geen pauze. Wat kan Nadia het beste doen?',
            options: [
              { id: 'a', text: 'Ze vraagt rustig wanneer ze vandaag wel pauze kan nemen.', best: true, feedback: 'Goed. Zo zoekt ze samen met haar leidinggevende een moment.' },
              { id: 'b', text: 'Ze slaat haar pauze over. Het is nu eenmaal druk.', best: false, feedback: 'Dat snap ik. Maar pauze is haar recht, ook als het druk is.' },
              { id: 'c', text: 'Ze neemt meteen pauze, ook al staat er een rij.', best: false, feedback: 'Ze heeft recht op pauze. Maar ze vraagt het beter eerst even.' },
            ],
            why: 'Pauze is je recht. Dat staat in de wet. Rust helpt je ook om veilig te werken. Zoek samen een moment, ook als het druk is.',
          },
          // ⚖️ check: de pauze is meestal geen arbeidstijd en dus niet betaald, tenzij de sector, het arbeidsreglement of je contract iets anders zegt (securex.be "moeten er pauzes toegekend worden"; Arbeidswet art. 19: arbeidsduur = tijd ter beschikking van de werkgever)
          {
            kind: 'truefalse',
            id: 'r.be.l.tijd.2.tf2',
            statement: 'Je baas betaalt je pauze altijd.',
            answer: false,
            why: 'Pauze is meestal niet betaald. Dat hangt af van je contract of je sector. In je pauze hoef je niet te werken. Je mag dan echt stoppen.',
          },
          {
            kind: 'whoask',
            id: 'r.be.l.tijd.2.wa1',
            question: 'Je krijgt bijna nooit pauze. Praten helpt niet. Wie helpt je met je rechten?',
            options: [
              { id: 'a', who: 'collega', best: false, feedback: 'Samen sta je sterker. Maar je collega kan het niet regelen.' },
              { id: 'b', who: 'huisarts', best: false, feedback: 'De huisarts gaat over je gezondheid, niet over je rechten.' },
              { id: 'c', who: 'vakbond', best: true, feedback: 'Goed. Een vakbond helpt je met je rechten op het werk.' },
            ],
            why: 'Een vakbond helpt bij je rechten. Melden kan ook bij Toezicht op de Sociale Wetten.',
          },
          { kind: 'model', id: 'r.be.l.tijd.2.mo1', context: 'Je hebt nog geen pauze gehad.', nl: 'Ik heb nog geen pauze gehad. Wanneer kan ik even weg?' },
        ],
      },
      {
        // Les 5.3 · Overuren en nee zeggen
        id: 'r.be.l.tijd.3',
        title: 'Overuren en nee zeggen',
        goal: 'Je weet wanneer overuren mogen en wat je ervoor krijgt. Je houdt je overuren bij.',
        remember: 'Overuren? Schrijf de uren op, met datum en tijd.',
        // Wie kan je helpen: een vakbond · de personeelsdienst · Toezicht op de Sociale Wetten.
        help: ['vakbond', 'hr'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.tijd.3.sc1',
            who: 'henk',
            picture: 'Malik bij een lopende band. Leidinggevende Henk tikt hem op de schouder. De klok zegt 17.00.',
            lines: [
              'Malik werkt in een fabriek.',
              'Het is 5 uur en zijn dienst is klaar.',
              'Zijn leidinggevende Henk vraagt: "Kun je 2 uur langer blijven?"',
              'Malik moet vanavond op zijn broertje passen.',
            ],
          },
          // ⚖️ check: overuren mogen alleen in de gevallen van de Arbeidswet (bijvoorbeeld buitengewone vermeerdering van werk, dringend werk, ongeval) of als vrijwillige overuren (Arbeidswet 16 maart 1971, art. 25-26bis; securex.be "wat zijn vrijwillige overuren")
          // ⚖️ check: overloon: minstens de helft extra (50%), op zon- en feestdagen 100% (Arbeidswet art. 29); voor sommige overuren krijg je inhaalrust (art. 26bis)
          // ⚖️ check: loon cash, zonder aangifte en zonder loonbrief, is zwartwerk: dan betaalt niemand RSZ en bouw je geen rechten op (socialsecurity.be; RSZ, Dimona-aangifte)
          {
            kind: 'rule',
            id: 'r.be.l.tijd.3.ru1',
            emoji: '🕔',
            title: 'Overuren? Schrijf de uren op, met datum en tijd.',
            body: [
              'Overuren mogen alleen in bepaalde gevallen. Bijvoorbeeld bij extra veel werk.',
              'Je krijgt dan meestal overloon: minstens de helft extra.',
              'Soms krijg je die uren later vrij. Dat heet inhaalrust.',
              'Schrijf je extra uren op. Kijk daarna je loonbrief na.',
              'Krijg je extra uren cash, zonder loonbrief? Dat is zwartwerk.',
            ],
            rule: 'geschreven',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.tijd.3.wd1',
            situation: 'Malik kan vandaag niet langer blijven. Wat kan Malik het beste doen?',
            options: [
              { id: 'a', text: 'Hij zegt ja, en hij gaat toch om 5 uur weg.', best: false, feedback: 'Dan rekent Henk op iemand die er niet is.' },
              { id: 'b', text: 'Hij zegt: "Vandaag niet. Morgen kan ik wel."', best: true, feedback: 'Goed. Duidelijk, en hij biedt iets anders aan.' },
              { id: 'c', text: 'Hij zegt "misschien", en hij belt zijn moeder.', best: false, feedback: 'Dan weet Henk niet of Malik blijft.' },
            ],
            why: 'Een duidelijk nee is beter dan een vaag ja. Ja zeggen en het niet doen, kost veel vertrouwen. Bied een andere keer aan als dat kan.',
          },
          // ⚖️ check: bij een ongeval of dringend werk (Arbeidswet art. 26) kan de werkgever overuren vragen; vrijwillige overuren doe je alleen als je zelf akkoord gaat (securex.be "wat zijn vrijwillige overuren"; werk.belgie.be "nieuwe regeling van vrijwillige overuren vanaf 1 april 2026")
          {
            kind: 'truefalse',
            id: 'r.be.l.tijd.3.tf1',
            statement: 'Je moet altijd overuren doen als je baas het vraagt.',
            answer: false,
            why: 'Dat hangt af van de reden. Bij een ongeval of dringend werk moet je soms wel. Vrijwillige overuren kies je zelf. Jouw situatie telt ook mee, zoals zorg voor een kind.',
          },
          // ⚖️ check: loon cash, zonder loonbrief, is zwartwerk: dan betaalt niemand RSZ, en bouw je geen rechten op voor werkloosheid en pensioen (socialsecurity.be; RSZ)
          {
            kind: 'whatdo',
            id: 'r.be.l.tijd.3.wd2',
            situation: 'Malik werkt deze week voor de derde keer over. Wat kan Malik het beste doen?',
            options: [
              { id: 'a', text: 'Hij vertrouwt erop dat Henk het zelf bijhoudt.', best: false, feedback: 'Henk vergeet misschien iets. Zijn eigen lijst is zekerder.' },
              { id: 'b', text: 'Hij vraagt Henk om de extra uren cash te betalen.', best: false, feedback: 'Cash en zonder loonbrief is zwartwerk. Dan mist hij rechten.' },
              { id: 'c', text: 'Hij schrijft de extra uren op, met datum en tijd.', best: true, feedback: 'Goed. Daarna kijkt hij zijn loonbrief na.' },
            ],
            why: 'Je eigen lijst helpt als er iets misgaat. Kijk daarna je loonbrief na. Krijg je loon cash, zonder loonbrief? Dan is het zwartwerk. Dan gaat er geen RSZ af. Je bouwt dan geen rechten op, zoals een pensioen.',
          },
          // Redactie: in plaats van het Nederlandse oproepcontract (4 dagen) gaat deze stap over de
          //   vrijwillige overuren, nieuw sinds 1 april 2026.
          // ⚖️ check: sinds 1 april 2026 één regeling voor vrijwillige overuren: 360 uur per kalenderjaar, in alle sectoren, zonder reden en zonder inhaalrust (werk.belgie.be nieuws "nieuwe regeling van vrijwillige overuren vanaf 1 april 2026"; securex.be; bijgewerkt oktober 2026)
          // ⚖️ check: 240 van die 360 uur zijn vrij van RSZ en bedrijfsvoorheffing ("netto"), zonder overloon; in de horeca 450 uur, waarvan 360 netto (securex.be "vrijwillige overuren regeling vanaf april 2026"; partena-professional.be; bijgewerkt oktober 2026). Daarom noemt de les het overloon hier niet.
          // ⚖️ check: de werknemer gaat zelf akkoord (schriftelijk); de werkgever mag niet verplichten (securex.be "wat zijn vrijwillige overuren"; nakijken of het schriftelijk akkoord in de nieuwe regeling blijft)
          {
            kind: 'whatdo',
            id: 'r.be.l.tijd.3.wd3',
            situation: 'Malik wil graag extra verdienen. Henk vraagt: "Wil je vrijwillige overuren doen?" Wat kan Malik het beste doen?',
            options: [
              { id: 'a', text: 'Hij zegt meteen ja. Anders is Henk misschien boos.', best: false, feedback: 'Dat snap ik. Maar hij mag het eerst rustig bekijken.' },
              { id: 'b', text: 'Hij vraagt eerst hoeveel uur het is, en wat hij krijgt.', best: true, feedback: 'Goed. Dan weet hij waar hij ja tegen zegt.' },
              { id: 'c', text: 'Hij zegt niets, en hij blijft gewoon wat langer.', best: false, feedback: 'Dan is er niets afgesproken. Dat geeft later gedoe.' },
            ],
            why: 'Vrijwillige overuren kies je zelf. Je baas mag je niet verplichten. Je mag hooguit 360 uur per jaar doen. Voor een deel betaal je geen RSZ en belasting. Vraag uitleg bij de personeelsdienst of een vakbond.',
          },
          {
            kind: 'whoask',
            id: 'r.be.l.tijd.3.wa1',
            question: 'Je weet niet wat je sector zegt over overuren. Wie kan het uitleggen?',
            options: [
              { id: 'a', who: 'vakbond', best: true, feedback: 'Goed. Een vakbond kent de afspraken van je sector.' },
              { id: 'b', who: 'collega', best: false, feedback: 'Een collega weet het misschien. Maar niet altijd precies.' },
              { id: 'c', who: 'arbeidsarts', best: false, feedback: 'De arbeidsarts gaat over je gezondheid, niet over overuren.' },
            ],
            why: 'Een vakbond kent de afspraken van je paritair comité. Je overuren kijk je na bij de personeelsdienst.',
          },
          { kind: 'model', id: 'r.be.l.tijd.3.mo1', context: 'Je kunt vandaag niet langer blijven.', nl: 'Vandaag lukt het niet. Morgen kan ik wel een uur langer.' },
        ],
      },
      {
        // Les 5.4 · Vrij vragen en verlof
        id: 'r.be.l.tijd.4',
        title: 'Vrij vragen en verlof',
        goal: 'Je weet hoeveel vakantie je hebt. Je vraagt vrij op tijd. Je weet wat je doet bij een noodgeval.',
        remember: 'Vraag vrij op tijd, en altijd op papier of in de app.',
        // Wie kan je helpen: je leidinggevende · de personeelsdienst · een vakbond.
        help: ['leidinggevende', 'hr', 'vakbond'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.tijd.4.sc1',
            picture: 'Esra achter een computer. Op het scherm een kalender en een vliegtuigje.',
            lines: [
              'Esra wil in de zomer 3 weken naar haar familie.',
              'Het is nu februari.',
              'Haar collega zegt: "Vraag het pas in juni. Dan weet je het zeker."',
              'Esra weet niet wat ze moet doen.',
            ],
          },
          // ⚖️ check: je vakantiedagen hangen af van je werk in het vorige jaar, het vakantiedienstjaar (Gecoördineerde wetten jaarlijkse vakantie 28 juni 1971; hetacv.be "jaarlijks verlof en je vakantiegeld")
          // ⚖️ check: een heel jaar voltijds in een vijfdagenweek geeft 20 vakantiedagen (partena-professional.be "vakantie en vakantiegeld"; bijgewerkt oktober 2026)
          // ⚖️ check: wie net begint, kan Europese vakantie (aanvullende vakantie) krijgen: dagen opbouwen en opnemen in hetzelfde jaar (student.be; securex.be overzichtstabel; voorwaarden nakijken, ook de jeugdvakantie)
          // ⚖️ check: de data van de vakantie spreek je af met de werkgever (collectief of individueel akkoord) (Gecoördineerde wetten jaarlijkse vakantie; KB 30 maart 1967, art. 64-68)
          {
            kind: 'rule',
            id: 'r.be.l.tijd.4.ru1',
            emoji: '🌴',
            title: 'Vraag vrij op tijd, en altijd op papier of in de app.',
            body: [
              'Je vakantiedagen hangen af van je werk in het vorige jaar.',
              'Begin je net met werken? Vraag naar Europese vakantie.',
              'Vraag vrij op tijd en op papier. Spreek de data af met je baas.',
              'Bij een noodgeval mag je meteen weg. Laat het wel meteen weten.',
            ],
            rule: 'geschreven',
          },
          // ⚖️ check: de vakantiedata spreek je af met de werkgever; vaak is er ook een collectieve sluiting, zoals het bouwverlof (KB 30 maart 1967, art. 64-68; securex.be)
          {
            kind: 'whatdo',
            id: 'r.be.l.tijd.4.wd1',
            situation: 'Wanneer vraagt Esra haar vakantie aan?',
            options: [
              { id: 'a', text: 'Ze wacht tot juni, zoals haar collega zegt.', best: false, feedback: 'Dan hebben anderen de weken misschien al.' },
              { id: 'b', text: 'Ze boekt de reis alvast, en ze meldt het later.', best: false, feedback: 'Riskant. De baas moet het eerst goedvinden.' },
              { id: 'c', text: 'Ze vraagt het nu al, per mail of in de app.', best: true, feedback: 'Goed. Vroeg en op papier geeft de beste kans.' },
            ],
            why: 'Vraag vrij op tijd en op papier. Je spreekt de data samen af met je baas. Veel bedrijven sluiten ook een paar weken, bijvoorbeeld in de bouw. Wie vroeg vraagt, heeft vaak meer kans.',
          },
          // ⚖️ check: een heel jaar voltijds in een vijfdagenweek (5 dagen per week) geeft 20 vakantiedagen (partena-professional.be; Gecoördineerde wetten jaarlijkse vakantie; bijgewerkt oktober 2026)
          // ⚖️ check: je sector geeft soms extra dagen (sectorcao, bijvoorbeeld anciënniteitsdagen) (securex.be)
          {
            kind: 'truefalse',
            id: 'r.be.l.tijd.4.tf1',
            statement: 'Werkte je vorig jaar voltijds, 5 dagen per week? Dan heb je meestal 20 vakantiedagen.',
            answer: true,
            why: 'Je vakantiedagen hangen af van je werk in het vorige jaar. Werkte je het hele jaar voltijds? Dan heb je 20 dagen. Je sector geeft soms meer. Werkte je vorig jaar nog niet? Vraag naar Europese vakantie.',
          },
          // ⚖️ check: verlof om dwingende redenen: hooguit 10 dagen per jaar, in principe onbetaald, bijvoorbeeld bij ziekte of een ongeval van je kind (cao nr. 45; KB 1993; aclvb.be "verlof om dwingende redenen"; sectoren kunnen meer geven)
          // ⚖️ check: klein verlet: betaald verlof bij gebeurtenissen in je familie, zoals een huwelijk of overlijden (KB 28 augustus 1963; werk.belgie.be "lijst klein verlet"; securex.be "wat is klein verlet")
          {
            kind: 'whatdo',
            id: 'r.be.l.tijd.4.wd2',
            situation: 'Piotr krijgt een telefoontje. Zijn zoon is gevallen op school en moet naar het ziekenhuis. Wat kan Piotr het beste doen?',
            options: [
              { id: 'a', text: 'Hij zegt het meteen tegen zijn leidinggevende, en gaat.', best: true, feedback: 'Goed. Zo weet het werk wat er aan de hand is.' },
              { id: 'b', text: 'Hij werkt eerst zijn dienst af, en gaat dan.', best: false, feedback: 'Dat hoeft niet. Bij een noodgeval mag je weg.' },
              { id: 'c', text: 'Hij gaat meteen weg, en hij belt morgen zijn baas.', best: false, feedback: 'Gaan is goed. Maar hij moet het meteen laten weten.' },
            ],
            why: 'Bij een noodgeval mag je meteen weg. Dat heet verlof om dwingende redenen. Je hebt er tot 10 dagen per jaar. Die dagen zijn meestal niet betaald. Bij een huwelijk of overlijden in je familie is er klein verlet. Dat is wel betaald.',
          },
          {
            kind: 'whoask',
            id: 'r.be.l.tijd.4.wa1',
            question: 'Je wilt in de zomer 3 weken vrij. Bij wie vraag je het aan?',
            options: [
              { id: 'a', who: 'collega', best: false, feedback: 'Je collega kan je vakantie niet goedkeuren.' },
              { id: 'b', who: 'vakbond', best: false, feedback: 'Een vakbond helpt bij problemen. Vrij vragen doe je op je werk.' },
              { id: 'c', who: 'leidinggevende', best: true, feedback: 'Goed. Je leidinggevende keurt je vakantie goed.' },
            ],
            why: 'Vrij vraag je aan je leidinggevende, per mail of in de app.',
          },
          { kind: 'model', id: 'r.be.l.tijd.4.mo1', context: 'Je vraagt vakantie aan.', nl: 'Ik wil graag vrij van 1 tot en met 21 juli. Kan dat?' },
        ],
      },
      {
        // Les 5.5 · Kinderen en zorg
        // Redactie: geen weken voor moederschapsrust en geen bedragen. Alleen het geboorteverlof (20
        //   dagen) staat erin; de rest verwijst naar het ziekenfonds, de RVA en de vakbond.
        id: 'r.be.l.tijd.5',
        title: 'Kinderen en zorg',
        goal: 'Je kent je verlof bij zwangerschap, een baby of een ziek kind.',
        remember: 'Zwanger, een baby of een ziek kind? Vraag op tijd welk verlof je hebt.',
        // Wie kan je helpen: je leidinggevende of de personeelsdienst · je ziekenfonds (geld tijdens
        //   moederschapsrust en geboorteverlof) · de RVA (ouderschapsverlof, tijdskrediet) · een vakbond ·
        //   het Groeipakket (groeipakket.be).
        help: ['leidinggevende', 'hr', 'ziekenfonds', 'rva', 'vakbond'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.tijd.5.sc1',
            picture: 'Esra in de kantine van een winkel. Ze houdt een echo-foto vast en kijkt naar haar telefoon.',
            lines: [
              'Esra werkt in een winkel.',
              'Ze is zwanger van haar eerste kind.',
              'Ze heeft het nog aan niemand op haar werk verteld.',
              'Ze is bang dat ze haar job kwijtraakt.',
            ],
          },
          // ⚖️ check: de werkgever mag een zwangere werkneemster niet ontslaan om redenen die met de zwangerschap te maken hebben, vanaf het moment dat hij het weet (Arbeidswet 16 maart 1971, art. 40)
          // ⚖️ check: moederschapsrust: verlof voor en na de bevalling, met een uitkering van het ziekenfonds (Arbeidswet art. 39; riziv.fgov.be)
          // ⚖️ check: de partner krijgt geboorteverlof (Arbeidsovereenkomstenwet 3 juli 1978, art. 30 §2; riziv.fgov.be "geboorteverlof voor werknemers")
          // ⚖️ check: ouderschapsverlof en tijdskrediet: minder of niet werken om voor je kind te zorgen, met een uitkering van de RVA (rva.be; securex.be "tijdskrediet"; hetacv.be "praktische info tijdskrediet en thematisch verlof")
          {
            kind: 'rule',
            id: 'r.be.l.tijd.5.ru1',
            emoji: '👶',
            title: 'Zwanger, een baby of een ziek kind? Vraag op tijd welk verlof je hebt.',
            body: [
              'Ben je zwanger? Je werkgever mag je daarom niet ontslaan.',
              'Je krijgt verlof voor en na de bevalling. Dat heet moederschapsrust.',
              'Je partner krijgt geboorteverlof.',
              'Wil je minder werken voor je kind? Vraag naar ouderschapsverlof of tijdskrediet.',
              'Hoeveel en hoe lang? Vraag het je ziekenfonds, de RVA of een vakbond.',
            ],
            rule: 'geschreven',
          },
          // ⚖️ check: ontslag om redenen van de zwangerschap mag niet, vanaf het moment dat de werkgever het weet (Arbeidswet 16 maart 1971, art. 40)
          // ⚖️ check: tijdens de moederschapsrust krijg je een uitkering van het ziekenfonds (riziv.fgov.be, moederschapsrust)
          {
            kind: 'truefalse',
            id: 'r.be.l.tijd.5.tf1',
            statement: 'Esra is zwanger. Haar baas mag haar daarom ontslaan.',
            answer: false,
            why: 'Je werkgever mag je niet ontslaan omdat je zwanger bent. Je vertelt het op je werk als je er klaar voor bent. Vanaf dan ben je extra beschermd. Tijdens je verlof krijg je geld van je ziekenfonds.',
          },
          // ⚖️ check: geboorteverlof: 20 dagen sinds 1 januari 2023, op te nemen binnen 4 maanden na de bevalling (riziv.fgov.be "geboorteverlof voor werknemers"; securex.be "hoe lang duurt het geboorteverlof"; bijgewerkt oktober 2026)
          // ⚖️ check: de werkgever betaalt de eerste 3 dagen, daarna betaalt het ziekenfonds een uitkering (riziv.fgov.be; metallos.be)
          // ⚖️ check: tijdens ouderschapsverlof krijg je een onderbrekingsuitkering van de RVA; je vraagt het elektronisch aan (rva.be; securex.be "hoe moet de werknemer zijn tijdskrediet aanvragen bij de rva")
          {
            kind: 'whoask',
            id: 'r.be.l.tijd.5.wa1',
            question: 'De vrouw van Mohammed krijgt een baby. Mohammed wil verlof. Bij wie vraagt hij het aan?',
            options: [
              { id: 'a', who: 'leidinggevende', best: true, feedback: 'Goed. Verlof vraag je aan op je werk.' },
              { id: 'b', who: 'ziekenfonds', best: false, feedback: 'Het ziekenfonds betaalt een deel. Maar het verlof vraag je op je werk.' },
              { id: 'c', who: 'gemeente', best: false, feedback: 'De gemeente gaat niet over verlof van je werk.' },
            ],
            why: 'Krijgt je partner een baby? Dan heb je recht op 20 dagen geboorteverlof. Vraag het op tijd aan bij je werkgever. Een deel van die dagen betaalt je ziekenfonds. Later kun je ook ouderschapsverlof vragen. Dan krijg je geld van de RVA.',
          },
          // ⚖️ check: verlof om dwingende redenen bij ziekte van je kind: hooguit 10 dagen per jaar, in principe onbetaald (cao nr. 45; aclvb.be; gezinsbond.be)
          // ⚖️ check: langer zorgen: ouderschapsverlof of tijdskrediet (thematisch verlof) (rva.be; securex.be "tijd voor gezin en zorg")
          {
            kind: 'whatdo',
            id: 'r.be.l.tijd.5.wd1',
            situation: 'De kinderopvang belt Mohammed. Zijn dochter heeft koorts en moet naar huis. Mohammed is op zijn werk. Wat kan Mohammed het beste doen?',
            options: [
              { id: 'a', text: 'Hij zegt het meteen tegen zijn leidinggevende, en hij haalt haar op.', best: true, feedback: 'Goed. Bij een noodgeval mag hij meteen weg.' },
              { id: 'b', text: 'Hij meldt zich zelf ziek. Dat is voor hem het makkelijkst.', best: false, feedback: 'Hij is zelf niet ziek. Voor zijn kind is er verlof.' },
              { id: 'c', text: 'Hij werkt eerst zijn dienst af. Dan haalt hij haar op.', best: false, feedback: 'Dat hoeft niet. Zijn dochter heeft hem nu nodig.' },
            ],
            why: 'Is je kind ineens ziek? Dan mag je meteen weg. Dat heet verlof om dwingende redenen. Die dagen zijn meestal niet betaald. Moet je langer voor je kind zorgen? Vraag naar ouderschapsverlof of tijdskrediet.',
          },
          // ⚖️ check: alle kinderen die in Vlaanderen wonen, hebben recht op het Groeipakket (vlaanderen.be "het Vlaams Groeipakket")
          // ⚖️ check: het basisbedrag komt vanzelf; het startbedrag vraag je aan; sommige toeslagen hangen af van je inkomen (sociale toeslag) (vlaanderen.be; parentia.be "groeipakket")
          // ⚖️ check: een uitbetaler betaalt het uit, bijvoorbeeld FONS of Parentia (vlaanderen.be, uitbetalers; parentia.be meldt dat Vlaanderen naar één uitbetaler gaat: nakijken)
          {
            kind: 'truefalse',
            id: 'r.be.l.tijd.5.tf2',
            statement: 'Woon je met je kind in Vlaanderen? Dan krijg je het Groeipakket.',
            answer: true,
            why: 'Het Groeipakket is geld voor je kind, van de Vlaamse overheid. Voor de geboorte vraag je het startbedrag aan. Daarna komt het basisbedrag vanzelf. Sommige toeslagen hangen af van je inkomen.',
          },
          { kind: 'model', id: 'r.be.l.tijd.5.mo1', context: 'De kinderopvang belt: je kind is ziek.', nl: 'Mijn kind is ziek. Ik moet het ophalen. Mag ik nu weg?' },
        ],
      },
    ],
  },
  zegHet: {
    'r.be.l.tijd.1.mo1': [
      { text: '13 uur is wel lang. Maar ik zeg er maar niets van.', feedback: 'Dan verandert er niets. Je mag vragen wat de regels zijn.' },
      { text: '13 uur? Dat doe ik echt niet. Zoek maar iemand anders!', feedback: 'Dat klinkt boos. Vraag liever rustig naar de regels.' },
    ],
    'r.be.l.tijd.2.mo1': [
      { text: 'Ik heb nog geen pauze gehad. Maar het is goed, ik werk door.', feedback: 'Je hebt recht op pauze. Vraag wanneer je kunt gaan.' },
      { text: 'Ik heb geen pauze gehad. Ik ga nu weg, ik zie jullie straks.', feedback: 'Dan weet niemand waar je bent. Vraag het eerst.' },
    ],
    'r.be.l.tijd.3.mo1': [
      { text: 'Eh, ja, oké. Ik blijf vandaag dan wel langer.', feedback: 'Je mag nee zeggen. Zeg dan wanneer het wel kan.' },
      { text: 'Nee. Ik werk nooit langer dan mijn uren. Klaar.', feedback: 'Dat klinkt hard. Je kunt ook zeggen wanneer het wel kan.' },
    ],
    'r.be.l.tijd.4.mo1': [
      { text: 'Ik wil in de zomer een tijdje vrij. Is dat goed?', feedback: 'Dan weet de baas niet welke dagen. Noem de data.' },
      { text: 'Ik ben van 1 tot en met 21 juli weg. Dat zeg ik nu.', feedback: 'Je vraagt vrij aan. De baas moet eerst ja zeggen.' },
    ],
    'r.be.l.tijd.5.mo1': [
      { text: 'Mijn kind is ziek. Ik ben nu weg, ik bel later wel.', feedback: 'Wacht even op antwoord. Dan weet je baas wat er gebeurt.' },
      { text: 'Er is iets thuis. Ik moet misschien even weg, denk ik.', feedback: 'Dan weet je baas niet wat er is. Zeg dat je kind ziek is.' },
    ],
  },
  advice: {
    'r.be.l.tijd.1.ru1': 'advice',
    'r.be.l.tijd.2.ru1': 'advice',
    'r.be.l.tijd.3.ru1': 'advice',
    'r.be.l.tijd.4.ru1': 'advice',
    'r.be.l.tijd.5.ru1': 'advice',
  },
  kun: [
    ['Ik kan nakijken of mijn uurrooster en mijn pauze kloppen.', '1F', 'lezen'],
    ['Ik kan rustig nee zeggen tegen overuren.', '1F', 'gesprekken'],
    ['Ik kan op tijd vrij vragen, op papier of in de app.', '1F', 'gesprekken'],
  ],
};
