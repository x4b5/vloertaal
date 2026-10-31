import type { BeUnit } from '../types';

/**
 * Unit 9 (België) · Problemen en je rechten: de Belgische versie van src/content/regels/units/rechten.ts.
 * Zelfde lessen als de Nederlandse, met "r.be." vooraan (docs/werkregels-belgie.md). Vlaamse
 * plekken en woorden: Unia, het Vlaams Mensenrechteninstituut, de vertrouwenspersoon en de
 * preventieadviseur psychosociale aspecten, Payoke, PAG-ASA en Sürya, Toezicht op de Sociale
 * Wetten, opzegtermijn, opzegvergoeding, C4, het justitiehuis, de vakbond.
 *
 * `// ⚖️ check:` = een feit dat de deskundige nakijkt, met de bron. Opgezocht op 30 okt 2026, via
 * zoekresultaten: werk.belgie.be en securex.be waren in deze sessie niet te openen (netwerk
 * geblokkeerd, 30 okt 2026). `// Redactie:` is voor de makers.
 * Over "cao nr. 109": het woord "cao" weert de test (docs/werkregels-belgie.md). De les zegt het in
 * woorden; de naam staat alleen in de ⚖️-noot.
 */
export const be: BeUnit = {
  unit: {
    id: 'r.be.rechten',
    title: 'Problemen en je rechten',
    emoji: '🛡️',
    color: '#a33b5c',
    lessons: [
      {
        // Les 9.1 · Discriminatie
        id: 'r.be.l.rechten.1',
        title: 'Discriminatie',
        goal: 'Je herkent discriminatie bij solliciteren en op het werk. Je weet hoe je het meldt.',
        remember: 'Discriminatie is verboden. Schrijf het op en meld het.',
        // Wie kan je helpen: Unia (unia.be) · het Vlaams Mensenrechteninstituut (bij Vlaamse
        //   zaken, zoals de VDAB of een Vlaamse overheid) · het Instituut voor de gelijkheid van
        //   vrouwen en mannen (bij discriminatie om je geslacht) · een vakbond · het justitiehuis ·
        //   de politie, bij bedreiging.
        help: ['meldpunt', 'vakbond', 'justitiehuis', 'politie'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.rechten.1.sc1',
            picture: 'Mohammed en Sanne, ieder met een telefoon. Op beide schermen dezelfde vacature.',
            lines: [
              'Mohammed en Sanne solliciteren op dezelfde job.',
              "Hun cv's zijn bijna hetzelfde.",
              'Sanne mag op gesprek komen.',
              'Mohammed hoort: "De job is al weg."',
              'Een dag later staat de vacature er nog.',
            ],
          },
          // ⚖️ check: discriminatie bij werk is verboden, o.a. om afkomst, geloof, geslacht, leeftijd of handicap (Antidiscriminatiewet 10 mei 2007; Antiracismewet 30 juli 1981; Genderwet 10 mei 2007; Vlaams decreet gelijke kansen en gelijke behandeling 10 juli 2008)
          // ⚖️ check: melden kan gratis bij Unia (federale zaken) of het Vlaams Mensenrechteninstituut (Vlaamse bevoegdheden) (vlaanderen.be "discriminatie melden"; unia.be; zoekresultaten)
          // ⚖️ check: bij discriminatie om je geslacht: het Instituut voor de gelijkheid van vrouwen en mannen (igvm-iefh.belgium.be)
          {
            kind: 'rule',
            id: 'r.be.l.rechten.1.ru1',
            emoji: '🚫',
            title: 'Discriminatie is verboden. Schrijf het op en meld het.',
            body: [
              'Discriminatie bij werk is verboden.',
              'Bijvoorbeeld om je afkomst, geloof, geslacht, leeftijd of handicap.',
              'Schrijf op wat er gebeurde, met datum.',
              'Meld het bij Unia of het Vlaams Mensenrechteninstituut.',
            ],
            rule: 'geschreven',
          },
          // ⚖️ check: het verbod geldt bij werving, selectie, stages, loon en promotie (Antidiscriminatiewet art. 5; cao nr. 38 over werving en selectie)
          {
            kind: 'truefalse',
            id: 'r.be.l.rechten.1.tf1',
            statement: 'Een werkgever mag kiezen op afkomst of geloof.',
            answer: false,
            why: 'Discriminatie bij werk is verboden. Bijvoorbeeld om je afkomst, geloof, geslacht, leeftijd of handicap. Dat geldt bij solliciteren en bij stages. En ook bij loon en promotie.',
          },
          // ⚖️ check: Unia neemt meldingen gratis aan, online of via 0800 12 800 (vlaanderen.be/organisaties/unia; zoekresultaat; het nummer niet in de tekst, alleen hier)
          {
            kind: 'whatdo',
            id: 'r.be.l.rechten.1.wd1',
            situation: 'Mohammed denkt dat het om zijn naam gaat. Wat kan Mohammed het beste doen?',
            options: [
              { id: 'a', text: 'Hij laat het gaan. Bewijzen kan hij het toch niet.', best: false, feedback: 'Dat snap ik. Maar melden kan ook zonder hard bewijs.' },
              { id: 'b', text: 'Hij schrijft op wat er gebeurde, en hij meldt het.', best: true, feedback: 'Goed. Zo kan iemand hem helpen.' },
              { id: 'c', text: 'Hij zet de naam van het bedrijf boos online.', best: false, feedback: 'Dat kan hem zelf problemen geven.' },
            ],
            why: 'Schrijf op wat er gebeurde, met datum. Bewaar berichten en de vacature. Meld het bij Unia. Dat is gratis. Melden helpt, ook voor anderen.',
          },
          // ⚖️ check: een kledingregel moet een goede reden hebben, zoals veiligheid of hygiëne (Antidiscriminatiewet, rechtvaardiging)
          // ⚖️ check: een algemene regel van neutraliteit voor alle werknemers kan in België toegelaten zijn (HvJ EU, Achbita 14 maart 2017 en L.F./SCRL 13 oktober 2022; unia.be; nakijken)
          {
            kind: 'whatdo',
            id: 'r.be.l.rechten.1.wd2',
            situation: 'Esra draagt een hoofddoek. Haar teamleider zegt: "Hier geen hoofddoek." Het gaat niet om veiligheid of hygiëne. Wat kan Esra het beste doen?',
            options: [
              { id: 'a', text: 'Ze vraagt waarom, en ze vraagt advies.', best: true, feedback: 'Goed. Dan weet ze wat haar rechten zijn.' },
              { id: 'b', text: 'Ze doet hem af, en ze zegt er niets van.', best: false, feedback: 'Ik snap het. Maar het kan discriminatie zijn.' },
              { id: 'c', text: 'Ze neemt meteen ontslag bij dit bedrijf.', best: false, feedback: 'Dan verliest ze misschien rechten. Ze kan beter eerst advies vragen.' },
            ],
            why: 'Een regel over kleding moet een goede reden hebben. Bijvoorbeeld veiligheid of hygiëne. Soms heeft een bedrijf één regel voor iedereen: geen tekens van geloof. Ook dan mag je vragen waarom. Unia of een vakbond kan je gratis advies geven.',
          },
          // ⚖️ check: het Vlaams Mensenrechteninstituut behandelt discriminatie bij Vlaamse bevoegdheden, zoals de VDAB (vlaanderen.be "discriminatie melden"; nakijken welke zaken precies)
          {
            kind: 'whoask',
            id: 'r.be.l.rechten.1.wa1',
            question: 'Je denkt dat een bedrijf je niet nam om je naam. Waar meld je dat gratis?',
            options: [
              { id: 'a', who: 'rva', best: false, feedback: 'De RVA gaat over werkloosheid, niet over discriminatie.' },
              { id: 'b', who: 'meldpunt', best: true, feedback: 'Goed. Unia helpt gratis bij discriminatie.' },
              { id: 'c', who: 'arbeidsarts', best: false, feedback: 'De arbeidsarts gaat over je gezondheid op het werk.' },
            ],
            why: 'Unia helpt gratis. Gaat het om een Vlaamse dienst, zoals de VDAB? Dan helpt ook het Vlaams Mensenrechteninstituut.',
          },
          { kind: 'model', id: 'r.be.l.rechten.1.mo1', context: 'Je vindt dat ze je anders behandelen dan anderen.', nl: 'Ik heb het gevoel dat u mij anders behandelt. Kunnen we praten?' },
        ],
      },
      {
        // Les 9.2 · Grensoverschrijdend gedrag
        id: 'r.be.l.rechten.2',
        title: 'Grensoverschrijdend gedrag',
        goal: 'Je herkent gedrag dat over je grens gaat, en je zegt stop. Je weet wie jou kan helpen.',
        remember: 'Het gaat om hoe het voor jou voelt, niet om de grap.',
        // Wie kan je helpen: de vertrouwenspersoon · de preventieadviseur psychosociale aspecten ·
        //   je leidinggevende of de personeelsdienst · bij seksueel geweld: een Zorgcentrum na
        //   Seksueel Geweld, de hulplijn 1712 of de politie.
        // ⚖️ check: 1712 = de Vlaamse hulplijn voor geweld, misbruik en kindermishandeling (1712.be); Zorgcentra na Seksueel Geweld (zorgcentraseksueelgeweld.be) (niet geopend op 30 okt 2026, nakijken)
        help: ['vertrouwenspersoon', 'leidinggevende', 'hr', 'politie'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.rechten.2.sc1',
            picture: 'Dewi in een hotelgang. Een collega staat veel te dicht bij haar.',
            lines: [
              'Dewi werkt in een hotel.',
              'Een collega maakt steeds grapjes over haar lichaam.',
              'Soms legt hij zijn hand op haar rug.',
              'De anderen lachen erom.',
              'Dewi vindt het niet fijn.',
            ],
          },
          // ⚖️ check: de werkgever moet werknemers beschermen tegen geweld, pesterijen en ongewenst seksueel gedrag (Welzijnswet 4 augustus 1996, hoofdstuk Vbis; codex boek I titel 3)
          {
            kind: 'rule',
            id: 'r.be.l.rechten.2.ru1',
            emoji: '✋',
            title: 'Het gaat om hoe het voor jou voelt, niet om de grap.',
            body: [
              'Grensoverschrijdend gedrag is gedrag dat over jouw grens gaat.',
              'Het maakt niet uit hoe de ander het bedoelt.',
              'Zeg stop, als je dat kunt. Schrijf op wat er gebeurde.',
              'Je werkgever moet je beschermen.',
            ],
            rule: 'geschreven',
          },
          // ⚖️ check: ongewenst seksueel gedrag = verbaal, non-verbaal of lichamelijk gedrag van seksuele aard dat iemands waardigheid aantast; de bedoeling telt niet (Welzijnswet art. 32ter)
          {
            kind: 'truefalse',
            id: 'r.be.l.rechten.2.tf1',
            statement: 'Als hij het als grapje bedoelt, is het niet erg.',
            answer: false,
            why: 'Grensoverschrijdend gedrag is gedrag dat over jouw grens gaat. Bijvoorbeeld aanraken, seksuele grappen of staren. Het maakt niet uit hoe de ander het bedoelt. Het gaat om hoe het voor jou voelt.',
          },
          // ⚖️ check: de werknemer kan naar de vertrouwenspersoon of de preventieadviseur psychosociale aspecten; die hoort je binnen 10 kalenderdagen (codex boek I titel 3; werk.belgie.be "verzoek tot informele psychosociale interventie"; zoekresultaat)
          // ⚖️ check: elke werkgever moet een preventieadviseur psychosociale aspecten hebben (intern of via een externe dienst) (Welzijnswet art. 32sexies)
          {
            kind: 'whatdo',
            id: 'r.be.l.rechten.2.wd1',
            situation: 'Dewi wil dat het stopt. Wat kan Dewi het beste doen?',
            options: [
              { id: 'a', text: 'Ze lacht mee. Dan houdt het vanzelf wel op.', best: false, feedback: 'Dat is logisch. Maar vaak gaat het dan juist door.' },
              { id: 'b', text: 'Ze zegt duidelijk: "Stop. Ik wil dit niet."', best: true, feedback: 'Goed. Dan weet hij het, en anderen horen het ook.' },
              { id: 'c', text: 'Ze gaat hem uit de weg, en ze zegt niets.', best: false, feedback: 'Dat lost het niet op. Hulp vragen mag.' },
            ],
            why: 'Zeg duidelijk dat je het niet wilt, als je dat kunt. Schrijf op wat er gebeurde, wanneer, en wie het zag. Vertel het aan de vertrouwenspersoon. Of aan de preventieadviseur psychosociale aspecten. Dat is een deskundige voor pesten en geweld op het werk. Je werkgever moet je beschermen.',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.rechten.2.wd2',
            situation: 'Kevin ziet dat anderen een collega steeds uitlachen en pesten. Wat kan Kevin het beste doen?',
            options: [
              { id: 'a', text: 'Hij lacht mee. Anders is hij straks zelf de volgende.', best: false, feedback: 'Dat snap ik. Maar zo gaat het pesten door.' },
              { id: 'b', text: 'Hij doet alsof hij niets heeft gezien.', best: false, feedback: 'Dan voelt de collega zich alleen.' },
              { id: 'c', text: 'Hij vraagt de collega of het goed met hem gaat.', best: true, feedback: 'Goed. Dat helpt meer dan hij denkt.' },
            ],
            why: 'Pesten maakt mensen ziek. Vraag of het goed gaat. Bied aan om getuige te zijn. Samen sta je sterker.',
          },
          // ⚖️ check: vertrouwenspersoon en preventieadviseur psychosociale aspecten hebben beroepsgeheim (securex.be "beroepsgeheim vertrouwenspersoon"; zoekresultaat)
          // ⚖️ check: 1712 = Vlaamse hulplijn voor geweld en misbruik; Zorgcentrum na Seksueel Geweld (1712.be; zorgcentraseksueelgeweld.be; niet geopend, nakijken)
          {
            kind: 'whoask',
            id: 'r.be.l.rechten.2.wa1',
            question: 'Een collega gaat steeds over je grens. Met wie op je werk praat je in vertrouwen?',
            options: [
              { id: 'a', who: 'vertrouwenspersoon', best: true, feedback: 'Goed. Een vertrouwenspersoon luistert, en helpt je verder.' },
              { id: 'b', who: 'collega', best: false, feedback: 'Een collega kan steunen. Maar die kan het niet oplossen.' },
              { id: 'c', who: 'rva', best: false, feedback: 'De RVA gaat over werkloosheid, niet over gedrag op je werk.' },
            ],
            why: 'Praat met de vertrouwenspersoon of de preventieadviseur psychosociale aspecten. Wat je zegt, blijft geheim. Bij seksueel geweld: bel 1712. Of ga naar een Zorgcentrum na Seksueel Geweld.',
          },
          { kind: 'model', id: 'r.be.l.rechten.2.mo1', context: 'Iemand gaat over je grens.', nl: 'Stop. Ik wil dit niet.' },
        ],
      },
      {
        // Les 9.3 · Uitbuiting en oplichting
        id: 'r.be.l.rechten.3',
        title: 'Uitbuiting en oplichting',
        goal: 'Je herkent uitbuiting en een geldezel-trucje. Je weet waar je hulp krijgt.',
        remember: 'Je paspoort en je bankkaart geef je nooit af.',
        // Wie kan je helpen: Payoke (Antwerpen), PAG-ASA (Brussel) en Sürya (Luik): de erkende
        //   centra voor slachtoffers van mensenhandel · Toezicht op de Sociale Wetten en de sociale
        //   inspectie (ook via het Meldpunt voor een Eerlijke Concurrentie) · de politie · bij
        //   gevaar: 112 · een vakbond · het justitiehuis.
        // ⚖️ check: Payoke, PAG-ASA en Sürya zijn de drie erkende gespecialiseerde opvangcentra voor slachtoffers van mensenhandel (justice.belgium.be; myria.be "brochure mensenhandel"; zoekresultaat)
        // ⚖️ check: sociale fraude en uitbuiting melden kan bij het Meldpunt voor een Eerlijke Concurrentie van de SIOD (werk.belgie.be "meldingen van sociale fraude"; vlaanderen.be "zwartwerk en sociale fraude"; anoniem melden: bronnen zeggen het niet hetzelfde, nakijken)
        help: ['tsw', 'politie', 'vakbond', 'justitiehuis'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.rechten.3.sc1',
            picture: 'Piotr in een volle kamer met stapelbedden. Een man houdt een paspoort vast.',
            lines: [
              'Piotr werkt via een kantoor in een serre.',
              'Het kantoor regelt ook zijn kamer.',
              'De baas houdt zijn paspoort, "voor de veiligheid".',
              'Piotr werkt 70 uur per week.',
              'Zijn loon is veel lager dan beloofd.',
            ],
          },
          // ⚖️ check: een werkgever mag je identiteitsbewijs of paspoort niet afnemen; afpakken van papieren is een teken van mensenhandel (myria.be; signalenlijsten mensenhandel; Belgische wettekst nakijken)
          // ⚖️ check: economische uitbuiting is strafbaar als mensenhandel (Strafwetboek art. 433quinquies)
          // ⚖️ check: Payoke, PAG-ASA en Sürya helpen slachtoffers gratis (justice.belgium.be; zoekresultaat; "gratis" nakijken)
          {
            kind: 'rule',
            id: 'r.be.l.rechten.3.ru1',
            emoji: '🛂',
            title: 'Je paspoort en je bankkaart geef je nooit af.',
            body: [
              'Je identiteitskaart of paspoort houd je altijd zelf.',
              'Je paspoort afpakken is een teken van uitbuiting.',
              'Geef je bankkaart en codes nooit aan een ander.',
              'Bij uitbuiting helpen Payoke, PAG-ASA en Sürya je gratis.',
            ],
            rule: 'geschreven',
            key: true,
          },
          // ⚖️ check: de werkgever mag je papieren bekijken en een kopie houden, niet het origineel (bij buitenlandse werknemers: controle van de verblijfsvergunning; Wet 30 april 1999; nakijken)
          {
            kind: 'truefalse',
            id: 'r.be.l.rechten.3.tf1',
            statement: 'Een werkgever mag je paspoort voor je bewaren.',
            answer: false,
            why: 'Je papieren houd je altijd zelf. Een werkgever mag ze bekijken en een kopie maken. Je paspoort afpakken is een duidelijk teken van uitbuiting.',
          },
          // ⚖️ check: 112 = het noodnummer voor ziekenwagen, brandweer en politie (112.be)
          // ⚖️ check: een slachtoffer van mensenhandel kan hulp en bescherming krijgen, ook zonder geldige verblijfspapieren, via de erkende centra (omzendbrief slachtoffers mensenhandel 23 december 2016; help.unhcr.org/belgium "voor slachtoffers van mensenhandel"; nakijken)
          {
            kind: 'whatdo',
            id: 'r.be.l.rechten.3.wd1',
            situation: 'Piotr is bang dat hij zijn werk en zijn kamer kwijtraakt. Wat kan Piotr het beste doen?',
            options: [
              { id: 'a', text: 'Hij zoekt hulp, ook al is hij bang.', best: true, feedback: 'Goed. Er zijn mensen die hem kunnen helpen.' },
              { id: 'b', text: 'Hij wacht af en werkt nog harder.', best: false, feedback: 'Dat is logisch. Maar dit gaat meestal niet vanzelf over.' },
              { id: 'c', text: 'Hij vraagt de baas beleefd om iets meer loon.', best: false, feedback: 'Mag. Maar het paspoort en de uren blijven een probleem.' },
            ],
            why: 'Uitbuiting is niet normaal, en het mag niet. Iedereen die in België werkt, kan hulp krijgen. Ook als je papieren niet in orde zijn. Payoke, PAG-ASA en Sürya helpen slachtoffers. Ben je in gevaar? Bel 112.',
          },
          // ⚖️ check: een geldezel (money mule) stelt zijn rekening ter beschikking voor witwassen; dat is strafbaar (Strafwetboek art. 505; febelfin.be "geldezels")
          {
            kind: 'whatdo',
            id: 'r.be.l.rechten.3.wd2',
            situation: 'Jayden krijgt een bericht: "Mogen we je bankkaart een week lenen? Je krijgt 500 euro." Wat kan Jayden het beste doen?',
            options: [
              { id: 'a', text: 'Hij doet het één keer. Het is snel verdiend.', best: false, feedback: 'Niet doen. Dit is een bekend trucje van criminelen.' },
              { id: 'b', text: 'Hij zegt nee, en hij blokkeert het nummer.', best: true, feedback: 'Goed. Zo voorkomt hij grote problemen.' },
              { id: 'c', text: 'Hij geeft alleen zijn rekeningnummer, niet zijn kaart.', best: false, feedback: 'Ook dat kunnen criminelen misbruiken.' },
            ],
            why: 'Dit heet een geldezel zijn. Criminelen gebruiken jouw rekening voor hun geld. Dat is strafbaar, ook voor jou. Je kunt er grote schulden aan overhouden. Geef je kaart en codes nooit aan een ander.',
          },
          // ⚖️ check: een interimkantoor of een kantoor voor arbeidsbemiddeling mag de werkzoekende geen geld vragen (Vlaams decreet private arbeidsbemiddeling 10 december 2010; federgon.be)
          // ⚖️ check: klachten over private arbeidsbemiddeling gaan naar de Vlaamse Sociale Inspectie (departement WSE, vlaanderen.be; nakijken)
          {
            kind: 'whatdo',
            id: 'r.be.l.rechten.3.wd3',
            situation: 'Mohammed zoekt werk via een kantoor. Het kantoor zegt: "Een plek kost 200 euro." Wat kan Mohammed het beste doen?',
            options: [
              { id: 'a', text: 'Hij betaalt. Dan heeft hij tenminste snel werk.', best: false, feedback: 'Niet doen. Voor echt werk betaalt hij zelf niets.' },
              { id: 'b', text: 'Hij vraagt of het later van zijn loon af mag.', best: false, feedback: 'Dan betaalt hij nog steeds. Dat mag ook niet.' },
              { id: 'c', text: 'Hij betaalt niet, en hij meldt het kantoor.', best: true, feedback: 'Goed. Een kantoor mag hiervoor geen geld vragen.' },
            ],
            why: 'Voor echt werk hoef jij zelf niet te betalen. Een interimkantoor mag je geen geld vragen voor werk. Ook niet later, van je loon. Vraagt een kantoor het toch? Meld het bij de Vlaamse Sociale Inspectie. Of vraag hulp bij een vakbond.',
          },
          // ⚖️ check: Toezicht op de Sociale Wetten controleert ook economische uitbuiting en werkt samen met de politie (werk.belgie.be; SIOD)
          {
            kind: 'whoask',
            id: 'r.be.l.rechten.3.wa1',
            question: 'Piotr wil uitbuiting melden bij een inspectie. Waar kan dat?',
            options: [
              { id: 'a', who: 'interimkantoor', best: false, feedback: 'Het kantoor is hier misschien juist het probleem.' },
              { id: 'b', who: 'tsw', best: true, feedback: 'Goed. Die inspectie controleert ook uitbuiting op het werk.' },
              { id: 'c', who: 'hr', best: false, feedback: 'De personeelsdienst werkt voor het bedrijf. Zoek hulp van buiten.' },
            ],
            why: 'Melden kan bij Toezicht op de Sociale Wetten, of bij de politie. Hulp krijg je bij Payoke, PAG-ASA of Sürya. Ben je in gevaar? Bel 112.',
          },
          { kind: 'model', id: 'r.be.l.rechten.3.mo1', context: 'Je baas houdt je paspoort.', nl: 'Ik wil mijn paspoort terug. Het is van mij.' },
        ],
      },
      {
        // Les 9.4 · Ontslag en het einde van je job
        id: 'r.be.l.rechten.4',
        title: 'Ontslag en het einde van je baan',
        goal: 'Je tekent niets over ontslag zonder advies. Je kent je basisrechten bij ontslag.',
        remember: 'Teken nooit iets over ontslag zonder advies.',
        // Wie kan je helpen: een vakbond (ABVV, ACV, ACLVB; word lid vóór je een probleem hebt) ·
        //   het justitiehuis (gratis eerste juridisch advies) · de RVA (je werkloosheidsuitkering)
        //   · de Hulpkas (HVW), als je geen lid bent van een vakbond · de VDAB (inschrijven als
        //   werkzoekende).
        help: ['vakbond', 'justitiehuis', 'rva', 'hvw'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.rechten.4.sc1',
            picture: 'Sanne aan een tafel tegenover haar baas. Voor haar ligt een papier met een pen.',
            lines: [
              'Sanne werkt 2 jaar bij een webshop.',
              'Haar baas roept haar binnen.',
              'Hij zegt: "We moeten besparen. Teken dit maar, dan stoppen we samen."',
              'Het papier heet een einde in onderling akkoord.',
            ],
          },
          // ⚖️ check: een beëindiging in onderling akkoord kan de RVA zien als vrijwillige werkloosheid; dan kan de uitkering een tijd geschorst worden (Werkloosheidsbesluit 25 november 1991, art. 51; jubel.be "na het ontslag: vangnet of uitsluiting"; vdab.be "recht op werkloosheidsuitkering"; zoekresultaten)
          // ⚖️ check: bij ontslag door de werkgever: een opzegtermijn (je werkt nog door) of een opzegvergoeding (loon voor die tijd) (Arbeidsovereenkomstenwet 3 juli 1978, art. 37, 37/2 en 39; Wet eenheidsstatuut 26 december 2013)
          // ⚖️ check: de werkgever geeft een C4 (werkloosheidsbewijs), uiterlijk op de laatste werkdag, wat de reden van het einde ook is (securex.be "het werkloosheidsbewijs C4"; socialsecurity.be, aangifte sociaal risico scenario 1; zoekresultaten)
          {
            kind: 'rule',
            id: 'r.be.l.rechten.4.ru1',
            emoji: '🖊️',
            title: 'Teken nooit iets over ontslag zonder advies.',
            body: [
              'Teken je een akkoord om samen te stoppen? Dan verlies je misschien je uitkering.',
              'Om tijd vragen is normaal.',
              'Ontslaat je baas je? Dan krijg je een opzegtermijn of een opzegvergoeding.',
              'Je krijgt ook een C4: het papier voor je uitkering.',
            ],
            rule: 'geschreven',
            key: true,
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.rechten.4.wd1',
            situation: 'De baas legt een pen neer. Wat kan Sanne het beste doen?',
            options: [
              { id: 'a', text: 'Ze tekent meteen. Dan krijgt ze vast een goede referentie.', best: false, feedback: 'Dat snap ik. Maar ze weet nog niet wat ze opgeeft.' },
              { id: 'b', text: 'Ze vraagt tijd, en ze laat het papier eerst nakijken.', best: true, feedback: 'Goed. Daar heeft ze recht op.' },
              { id: 'c', text: 'Ze tekent, en ze schrijft erbij dat ze het niet zeker weet.', best: false, feedback: 'Dan heeft ze toch getekend. Dat erbij schrijven helpt niet.' },
            ],
            why: 'Een einde in onderling akkoord betekent: je stopt samen met je baas. De RVA kan dan zeggen: je koos zelf om te stoppen. Dan krijg je misschien een tijd geen uitkering. Vraag eerst advies. Om tijd vragen is normaal.',
          },
          // ⚖️ check: de opzegtermijn groeit met de anciënniteit (jaren in dienst); voor contracten vanaf 1 juni 2026 hoogstens 52 weken (Arbeidsovereenkomstenwet art. 37/2; werk.belgie.be "opzeggingstermijnen vanaf 01/01/2014"; securex.be; zoekresultaten; geen getal in de les, bijgewerkt oktober 2026)
          // ⚖️ check: wie de opzegtermijn niet moet uitwerken, krijgt een opzegvergoeding: het loon voor de duur van de opzegtermijn (art. 39)
          // ⚖️ check: ontslag om dringende reden kan zonder opzegtermijn en zonder vergoeding, binnen 3 werkdagen na het feit (art. 35)
          {
            kind: 'truefalse',
            id: 'r.be.l.rechten.4.tf1',
            statement: 'Je baas mag je zomaar ontslaan, zonder iets te betalen.',
            answer: false,
            why: 'Je baas mag je ontslaan. Maar dan werk je eerst nog een tijd door: de opzegtermijn. Of je baas betaalt je loon voor die tijd: de opzegvergoeding. Hoe langer je er werkt, hoe langer de termijn. Ontslag om een dringende reden is anders. Vraag dan meteen advies.',
          },
          // ⚖️ check: cao nr. 109 (NAR, 12 februari 2014): de werknemer mag met een aangetekende brief de concrete redenen van zijn ontslag vragen (werk.belgie.be "ontslagmotivering"; zoekresultaat)
          // ⚖️ check: de vraag binnen 2 maanden na het einde van het contract (bij een opzegtermijn: binnen 6 maanden na de opzegging, maar niet later dan 2 maanden na het einde); de werkgever antwoordt binnen 2 maanden (cao nr. 109 art. 4 en 5; zoekresultaten)
          // ⚖️ check: geeft de werkgever geen antwoord, dan betaalt hij een boete van 2 weken loon (cao nr. 109 art. 7)
          {
            kind: 'truefalse',
            id: 'r.be.l.rechten.4.tf2',
            statement: 'Ben je ontslagen? Dan mag je je baas vragen waarom.',
            answer: true,
            why: 'Vraag het met een aangetekende brief. Dat is een brief met bewijs van de post. Doe dat binnen 2 maanden na het einde van je werk. Je baas moet dan binnen 2 maanden antwoorden. Soms geeft je baas de reden al zelf. Een vakbond helpt je met de brief.',
          },
          // ⚖️ check: de C4 vermeldt de reden van het einde; met de C4 vraag je je uitkering aan bij je uitbetalingsinstelling (vakbond of HVW), die het dossier naar de RVA stuurt (rva.be; securex.be "ontslagmotivering versus ontslagreden op de C4"; zoekresultaten)
          // ⚖️ check: na ontslag schrijf je je in als werkzoekende bij de VDAB (vdab.be "wanneer heb ik recht op een werkloosheidsuitkering")
          {
            kind: 'truefalse',
            id: 'r.be.l.rechten.4.tf3',
            statement: 'Je baas moet je een C4 geven als je werk stopt.',
            answer: true,
            why: 'Een C4 is het papier voor je werkloosheidsuitkering. Je baas geeft het, ook als jij zelf stopt. Op de C4 staat waarom je werk stopt. Met de C4 ga je naar je vakbond of de Hulpkas (HVW). Schrijf je ook in bij de VDAB.',
          },
          // ⚖️ check: vakbonden (ABVV, ACV, ACLVB) helpen leden juridisch; voor een probleem van vóór je lidmaatschap is er soms een wachttijd (per vakbond anders: voorwaarden van ABVV, ACV, ACLVB nakijken)
          // ⚖️ check: een vakbond is ook uitbetalingsinstelling van de werkloosheidsuitkering (rva.be)
          {
            kind: 'truefalse',
            id: 'r.be.l.rechten.4.tf4',
            statement: 'Word lid van een vakbond vóór je een probleem hebt. Dat is slim.',
            answer: true,
            why: 'Een vakbond helpt leden met vragen en problemen over hun werk. Ben je net lid? Dan helpt de vakbond soms nog niet bij een oud probleem. Lid zijn kost geld per maand. Een vakbond betaalt ook werkloosheidsuitkeringen uit.',
          },
          // ⚖️ check: juridische eerstelijnsbijstand = gratis eerste juridisch advies, o.a. in het justitiehuis (justitie.belgium.be; askWho justitiehuis)
          {
            kind: 'whoask',
            id: 'r.be.l.rechten.4.wa1',
            question: 'Je baas wil dat je een papier over ontslag tekent. Waar krijg je gratis eerste advies?',
            options: [
              { id: 'a', who: 'hr', best: false, feedback: 'De personeelsdienst werkt voor je werkgever. Vraag advies van buiten.' },
              { id: 'b', who: 'rva', best: false, feedback: 'De RVA beslist later over je uitkering. Het papier laat je ergens anders nakijken.' },
              { id: 'c', who: 'justitiehuis', best: true, feedback: 'Goed. Het justitiehuis geeft gratis eerste advies.' },
            ],
            why: 'Laat een papier over ontslag nakijken door een vakbond. Of vraag gratis eerste advies in het justitiehuis.',
          },
          { kind: 'model', id: 'r.be.l.rechten.4.mo1', context: 'Je baas wil dat je meteen tekent voor ontslag.', nl: 'Ik teken nu niet. Ik wil het eerst laten nakijken.' },
        ],
      },
    ],
  },
  zegHet: {
    'r.be.l.rechten.1.mo1': [
      { text: 'U discrimineert mij! Ik zet dit morgen in de krant!', feedback: 'Dat klinkt als een aanval. Vraag eerst om een gesprek.' },
      { text: 'Misschien vergis ik me. Laat maar, het is niet belangrijk.', feedback: 'Je gevoel telt. Je mag erover praten.' },
    ],
    'r.be.l.rechten.2.mo1': [
      { text: 'Haha, doe normaal.', feedback: 'Met een lach denkt hij dat het oké is. Zeg duidelijk stop.' },
      { text: 'Eh, misschien liever niet?', feedback: 'Dat klinkt niet zeker. Zeg duidelijk wat je niet wilt.' },
    ],
    'r.be.l.rechten.3.mo1': [
      { text: 'Mag ik misschien even mijn paspoort zien?', feedback: 'Je vraagt alleen om te kijken. Het paspoort is van jou.' },
      { text: 'Houd mijn paspoort maar. Ik vertrouw u wel.', feedback: 'Je paspoort houd je altijd zelf.' },
    ],
    'r.be.l.rechten.4.mo1': [
      { text: 'Oké, ik teken. U zult het wel goed bedoelen.', feedback: 'Teken nooit zonder advies. Vraag eerst tijd.' },
      { text: 'Ik teken nooit iets! U kunt me niets maken!', feedback: 'Dat klinkt boos. Zeg rustig dat je advies wilt.' },
    ],
  },
  advice: {
    'r.be.l.rechten.1.ru1': 'abuse',
    'r.be.l.rechten.2.ru1': 'abuse',
    'r.be.l.rechten.3.ru1': 'abuse',
    'r.be.l.rechten.4.ru1': 'abuse',
  },
  kun: [
    ['Ik kan discriminatie herkennen en melden bij Unia.', '1F', 'lezen'],
    ['Ik kan stop zeggen als iemand over mijn grens gaat.', '1F', 'gesprekken'],
    ['Ik kan na mijn ontslag om een C4 vragen.', '1F', 'gesprekken'],
  ],
};
