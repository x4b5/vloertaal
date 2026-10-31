import type { BeUnit } from '../types';

/**
 * Unit 6 (België) · Ziek zijn: de Belgische versie van src/content/regels/units/ziek.ts.
 * Zelfde lessen als de Nederlandse, met "r.be." vooraan (docs/werkregels-belgie.md). Vlaamse
 * woorden: ziektebriefje (doktersattest), arbeidsreglement, gewaarborgd loon, ziekenfonds,
 * getuigschrift, adviserend arts, arbeidsarts, controlearts, re-integratietraject, interimkantoor.
 *
 * `// ⚖️ check:` = een feit dat de deskundige nakijkt, met de bron. De marker wordt nooit getoond
 * of voorgelezen. Opgezocht op 30 okt 2026, alleen via zoekresultaten: werk.belgie.be,
 * securex.be en inami.fgov.be waren in deze sessie niet te openen (netwerk geblokkeerd, 30 okt
 * 2026). De deskundige legt de feiten naast werk.belgie.be en riziv.fgov.be.
 * `// Redactie:` is voor de makers.
 */
export const be: BeUnit = {
  unit: {
    id: 'r.be.ziek',
    title: 'Ziek zijn',
    emoji: '🤒',
    color: '#8a5cb8',
    lessons: [
      {
        // Les 6.1 · Je ziekmelden
        id: 'r.be.l.ziek.1',
        title: 'Je ziekmelden',
        goal: 'Je meldt je zelf ziek, op tijd. Je weet wanneer je een ziektebriefje nodig hebt.',
        remember: 'Ziek? Bel zelf, vóór je dienst begint.',
        // Wie kan je helpen: je leidinggevende · het arbeidsreglement van je bedrijf · je
        //   interimkantoor · je huisarts (voor het ziektebriefje).
        help: ['leidinggevende', 'interimkantoor', 'huisarts'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.ziek.1.sc1',
            picture: 'Jayden in bed met een rode neus. De wekker zegt 7.15.',
            lines: [
              'Jayden wordt wakker met koorts.',
              'Zijn dienst in de keuken begint om 10 uur.',
              'Hij voelt zich echt slecht.',
              'Hij pakt zijn telefoon.',
            ],
          },
          // ⚖️ check: de werknemer verwittigt de werkgever onmiddellijk van zijn arbeidsongeschiktheid (Arbeidsovereenkomstenwet 3 juli 1978, art. 31 §2)
          // ⚖️ check: hoe je je ziek meldt, staat in het arbeidsreglement (Wet 8 april 1965 tot instelling van de arbeidsreglementen)
          // ⚖️ check: een ziektebriefje (medisch getuigschrift) is nodig als de werkgever het vraagt of als het arbeidsreglement of een cao het zegt; uitzondering: 1 dag zonder briefje, zie tf2 (art. 31 §2)
          // ⚖️ check: op het ziektebriefje voor de werkgever staat geen diagnose (beroepsgeheim van de arts; art. 31 §2 en §3)
          {
            kind: 'rule',
            id: 'r.be.l.ziek.1.ru1',
            emoji: '🤒',
            title: 'Ziek? Bel zelf, vóór je dienst begint.',
            body: [
              'Bel zelf, en bel vóór je dienst begint.',
              'Kijk in het arbeidsreglement: de regels van je bedrijf.',
              'Meestal heb je een ziektebriefje van je dokter nodig.',
              'Je hoeft niet te zeggen welke ziekte je hebt.',
            ],
            rule: 'geschreven',
            key: true,
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.ziek.1.wd1',
            situation: 'Hoe meldt Jayden zich ziek?',
            options: [
              { id: 'a', text: 'Hij belt zelf de chef, ruim vóór 10 uur.', best: true, feedback: 'Goed. Zo weet de chef het op tijd.' },
              { id: 'b', text: 'Hij vraagt een collega: "Zeg jij het tegen de chef?"', best: false, feedback: 'Ik snap het. Maar je meldt je meestal zelf ziek.' },
              { id: 'c', text: 'Hij stuurt om 10 uur een bericht: "Ziek."', best: false, feedback: 'Dat is laat, en vaak is een bericht niet genoeg.' },
            ],
            why: 'Bel zelf, en bel vóór je dienst begint. Hoe het moet, staat in het arbeidsreglement. Dat zijn de regels van je bedrijf. Kun je niet komen? Zeg het op tijd.',
          },
          // ⚖️ check: de werknemer hoeft zijn diagnose niet te geven; het ziektebriefje voor de werkgever vermeldt geen ziekte, wel de duur en of je naar buiten mag (art. 31 Arbeidsovereenkomstenwet; beroepsgeheim art. 458 Strafwetboek)
          {
            kind: 'truefalse',
            id: 'r.be.l.ziek.1.tf1',
            statement: 'Je hoeft je baas niet te vertellen welke ziekte je hebt.',
            answer: true,
            why: 'Je hoeft niet te zeggen wat je hebt. Op het ziektebriefje staat ook geen ziekte. Je baas mag wel vragen hoe lang het ongeveer duurt.',
          },
          // ⚖️ check: sinds 1 januari 2026 mag een werknemer nog 2 keer per kalenderjaar 1 dag ziek zijn zonder medisch attest (was 3 keer sinds 1 januari 2023); de werknemer verwittigt wel meteen de werkgever (securex.be "ziektebriefje strengere regels vanaf 2026"; vrt.be "nieuw op 1 januari", 29 dec 2025; zoekresultaten, bijgewerkt oktober 2026)
          // ⚖️ check: een onderneming met minder dan 50 werknemers (geteld op 1 januari) mag in het arbeidsreglement toch voor elke ziektedag een attest vragen (securex.be "mag je nog een medisch attest voor een dag vragen", feb 2026; zoekresultaat, bijgewerkt oktober 2026)
          {
            kind: 'truefalse',
            id: 'r.be.l.ziek.1.tf2',
            statement: 'Twee keer per jaar mag je één dag ziek zijn zonder ziektebriefje.',
            answer: true,
            why: 'Het gaat om 1 dag per keer, en 2 keer per jaar. Je verwittigt je werk wel meteen. Verwittigen betekent: laten weten. Werk je in een bedrijf met minder dan 50 werknemers? Dan kan je baas toch altijd een briefje vragen. Kijk in het arbeidsreglement.',
          },
          // ⚖️ check: het ziektebriefje moet binnen 2 werkdagen bij de werkgever zijn, tenzij het arbeidsreglement of een cao een andere termijn zegt (Arbeidsovereenkomstenwet art. 31 §2)
          {
            kind: 'whatdo',
            id: 'r.be.l.ziek.1.wd2',
            situation: 'Jayden is 3 dagen ziek. Hij krijgt een ziektebriefje van de dokter. Wat kan Jayden het beste doen?',
            options: [
              { id: 'a', text: 'Hij bewaart het thuis, voor als de chef erom vraagt.', best: false, feedback: 'Dat is logisch. Maar zijn baas moet het snel krijgen.' },
              { id: 'b', text: 'Hij bezorgt het snel aan zijn werk.', best: true, feedback: 'Goed. Meestal moet het binnen 2 werkdagen bij zijn baas zijn.' },
              { id: 'c', text: 'Hij stuurt het alleen naar zijn ziekenfonds.', best: false, feedback: 'Bij een korte ziekte gaat het briefje eerst naar je werk.' },
            ],
            why: 'Het ziektebriefje heet ook een doktersattest. Het gaat naar je werkgever. Meestal moet het binnen 2 werkdagen bij je baas zijn. Het arbeidsreglement kan een andere termijn geven.',
          },
          // ⚖️ check: bij interimwerk is het interimkantoor de werkgever; de interimkracht meldt zich ziek bij het kantoor en volgt ook de regels van de gebruiker (wet van 24 juli 1987; federgon.be)
          {
            kind: 'whatdo',
            id: 'r.be.l.ziek.1.wd3',
            situation: 'Kevin werkt via een interimkantoor. Hij is ziek. Wat kan Kevin het beste doen?',
            options: [
              { id: 'a', text: "Hij meldt het alleen aan de collega's op zijn werk.", best: false, feedback: 'Dan weet het kantoor het niet. Dat geeft problemen.' },
              { id: 'b', text: 'Hij meldt zich niet ziek. Hij heeft toch geen vast werk.', best: false, feedback: 'Toch wel melden. Dan houdt hij zijn rechten.' },
              { id: 'c', text: 'Hij meldt het bij het kantoor, en bij het bedrijf.', best: true, feedback: 'Goed. Dan weten ze het allebei.' },
            ],
            why: 'Werk je via een interimkantoor? Dan is het kantoor je werkgever. Meld je ziek bij het kantoor. En vaak ook bij het bedrijf waar je werkt. Vraag aan het begin hoe het moet.',
          },
          {
            kind: 'whoask',
            id: 'r.be.l.ziek.1.wa1',
            question: 'Je werkt via een interimkantoor. Je bent ziek. Bij wie meld je je zeker?',
            options: [
              { id: 'a', who: 'collega', best: false, feedback: 'Een collega kan het doorgeven. Maar je meldt je zelf.' },
              { id: 'b', who: 'interimkantoor', best: true, feedback: 'Goed. Meld je bij het kantoor. Vaak ook bij het bedrijf.' },
              { id: 'c', who: 'huisarts', best: false, feedback: 'De huisarts geeft je een briefje. Je ziekmelden doe je bij je werk.' },
            ],
            why: 'Werk je via een interimkantoor? Meld je ziek bij het kantoor, en vaak ook bij het bedrijf.',
          },
          { kind: 'model', id: 'r.be.l.ziek.1.mo1', context: 'Je belt je werk, want je bent ziek.', nl: 'Goedemorgen, met Jayden. Ik ben ziek. Ik kan vandaag niet komen.' },
        ],
      },
      {
        // Les 6.2 · Je rechten als je ziek bent
        id: 'r.be.l.ziek.2',
        title: 'Je rechten als je ziek bent',
        goal: 'Je weet wat gewaarborgd loon is. Je weet wanneer het ziekenfonds betaalt.',
        remember: 'Ziek? Eerst betaalt je baas, daarna je ziekenfonds.',
        // Wie kan je helpen: de personeelsdienst · je ziekenfonds (mutualiteit) · een vakbond · je
        //   interimkantoor.
        help: ['hr', 'ziekenfonds', 'vakbond', 'interimkantoor'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.ziek.2.sc1',
            picture: 'Esra in de zetel met haar been in het gips. Haar telefoon gaat.',
            lines: [
              'Esra is gevallen.',
              'Ze heeft haar been gebroken.',
              'Ze kan 6 weken niet werken.',
              'Ze is bang dat ze geen loon krijgt.',
              'Dan belt haar leidinggevende om te vragen hoe het gaat.',
            ],
          },
          // ⚖️ check: de eerste 30 dagen betaalt de werkgever gewaarborgd loon; een arbeider (en een bediende met een contract van minder dan 3 maanden) moet daarvoor minstens 1 maand in dienst zijn (zie de noot bij tf1; Arbeidsovereenkomstenwet art. 52 en 70; securex.be "heeft de werknemer recht op gewaarborgd loon"; zoekresultaat)
          // ⚖️ check: bediende (contract van onbepaalde duur of minstens 3 maanden): 30 dagen 100% van het loon (art. 70; nakijken of de regel van 3 maanden nog geldt)
          // ⚖️ check: arbeider: dag 1 tot 7 100%, dag 8 tot 14 85,88%, dag 15 tot 30 25,88% van het loon tot het plafond (plus 85,88% boven het plafond), aangevuld met een uitkering van het ziekenfonds (60% van het begrensde loon) (art. 52; cao nr. 12bis; abvvmetaal.be; ucm.be; zoekresultaten, bijgewerkt oktober 2026)
          // ⚖️ check: na het gewaarborgd loon betaalt het ziekenfonds een uitkering; daarvoor gaat een getuigschrift naar de adviserend arts van het ziekenfonds (inami.fgov.be "aangifte en erkenning", werknemers)
          {
            kind: 'rule',
            id: 'r.be.l.ziek.2.ru1',
            emoji: '🩹',
            title: 'Ziek? Eerst betaalt je baas, daarna je ziekenfonds.',
            body: [
              'De eerste 30 dagen betaalt je baas meestal je loon door.',
              'Dat heet gewaarborgd loon.',
              'Ben je bediende? Dan krijg je die tijd je volle loon.',
              'Ben je arbeider? Dan krijg je na de eerste week iets minder.',
              'Daarna betaalt je ziekenfonds een uitkering.',
              'Stuur daarvoor op tijd een getuigschrift naar je ziekenfonds.',
            ],
            rule: 'geschreven',
          },
          // ⚖️ check: de eerste 30 dagen gewaarborgd loon van de werkgever (Arbeidsovereenkomstenwet art. 52 en 70)
          // ⚖️ check: een arbeider, en een bediende met een contract van minder dan 3 maanden, die nog geen maand in dienst is, heeft geen recht op gewaarborgd loon en krijgt meteen een uitkering van het ziekenfonds; een bediende met een langer of vast contract krijgt het gewaarborgd loon wel, ongeacht de anciënniteit (securex.be "heeft een arbeider recht op gewaarborgd loon", bijgewerkt januari 2025, en "heeft een bediende recht op gewaarborgd loon", bijgewerkt 21 januari 2026; zoekresultaten 31 okt 2026). Inhoudsronde 2: "Werk je nog geen maand bij je baas? Dan betaalt het ziekenfonds." was te algemeen; daarom nu "pas kort" en "soms".
          // ⚖️ check: de carensdag (wachtdag zonder loon) voor arbeiders is afgeschaft sinds 1 januari 2014 (Wet eenheidsstatuut 26 december 2013)
          {
            kind: 'truefalse',
            id: 'r.be.l.ziek.2.tf1',
            statement: 'Als je ziek bent, krijg je geen loon.',
            answer: false,
            why: 'De eerste 30 dagen betaalt je baas meestal je loon door. Dat heet gewaarborgd loon. Werk je pas kort bij je baas? Dan betaalt soms meteen het ziekenfonds. Na 30 dagen krijg je een uitkering van je ziekenfonds.',
          },
          // ⚖️ check: bediende: 30 dagen 100%; arbeider: week 1 100%, week 2 85,88%, dag 15 tot 30 vooral het ziekenfonds plus een aanvulling van de werkgever (Arbeidsovereenkomstenwet art. 52 en 70; abvvmetaal.be; zoekresultaat, bijgewerkt oktober 2026)
          // ⚖️ check: veel paritaire comités geven een extra aanvulling bij ziekte (sectorbrochures ACV/ABVV, bv. accg.be pc 116)
          {
            kind: 'truefalse',
            id: 'r.be.l.ziek.2.tf2',
            statement: 'Een arbeider en een bediende krijgen niet altijd hetzelfde gewaarborgd loon.',
            answer: true,
            why: 'Een bediende krijgt meestal 30 dagen zijn volle loon. Een arbeider krijgt de eerste week zijn volle loon. Daarna krijgt hij iets minder van zijn baas. Vanaf de derde week betaalt ook het ziekenfonds een deel. Je sector geeft soms extra.',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.ziek.2.wd1',
            situation: 'De leidinggevende vraagt: "Wat is er precies met je been?" Wat kan Esra het beste doen?',
            options: [
              { id: 'a', text: 'Ze vertelt alles, ook wat de dokter precies zei.', best: false, feedback: 'Dat mag, als ze wil. Maar het hoeft niet.' },
              { id: 'b', text: 'Ze zegt niets, en ze hangt snel weer op.', best: false, feedback: 'Contact met haar werk is wel normaal en goed.' },
              { id: 'c', text: 'Ze zegt hoe lang het ongeveer gaat duren.', best: true, feedback: 'Goed. Dat wil de leidinggevende vooral weten.' },
            ],
            why: 'Je mag zelf iets vertellen, als je dat wilt. Maar het hoeft niet. Je baas mag vragen hoe lang het duurt.',
          },
          // ⚖️ check: het getuigschrift van arbeidsongeschiktheid gaat naar de adviserend arts van het ziekenfonds: arbeider binnen 14 kalenderdagen, bediende binnen 28 kalenderdagen (dag 1 inbegrepen) (inami.fgov.be "aangifte en erkenning, werknemers"; cm.be "hoe geef je je arbeidsongeschiktheid aan"; zoekresultaten; de 28 dagen nakijken, bijgewerkt oktober 2026)
          // ⚖️ check: sinds 1 januari 2026 stuurt de arts een attest van meer dan 14 dagen en een verlenging elektronisch naar het ziekenfonds (inami.fgov.be "uw arts kan uw attest elektronisch via Mult-eMediatt versturen"; zoekresultaat)
          {
            kind: 'whatdo',
            id: 'r.be.l.ziek.2.wd2',
            situation: 'Esra is 6 weken ziek. Wat moet er naar haar ziekenfonds?',
            options: [
              { id: 'a', text: 'Een getuigschrift van haar dokter, op tijd.', best: true, feedback: 'Goed. Anders krijgt ze misschien minder geld.' },
              { id: 'b', text: 'Niets. Haar baas regelt dat voor haar.', best: false, feedback: 'Nee. Dat doet ze zelf, of haar dokter.' },
              { id: 'c', text: 'Haar loonbrief van de vorige maand.', best: false, feedback: 'Dat is niet het eerste. Het ziekenfonds wil eerst een getuigschrift.' },
            ],
            why: 'Een getuigschrift is een papier van je dokter. Het zegt dat je niet kunt werken. Het gaat naar de adviserend arts van je ziekenfonds. Ben je arbeider? Dan moet het er binnen 14 dagen zijn. Ben je bediende? Dan binnen 28 dagen. Vaak stuurt je dokter het zelf, via de computer.',
          },
          // ⚖️ check: word je ziek tijdens je vakantie, dan kun je die vakantiedagen later opnemen; je verwittigt meteen je werkgever en bezorgt een medisch attest (Wet 2023 over vakantie en arbeidsongeschiktheid, vanaf vakantiejaar 2024; vlaanderen.be "vakantie en vakantiegeld"; nakijken)
          {
            kind: 'truefalse',
            id: 'r.be.l.ziek.2.tf3',
            statement: 'Word je ziek op vakantie? Dan kun je je ziekmelden.',
            answer: true,
            why: 'Meld je meteen ziek bij je werkgever, ook vanuit het buitenland. Vraag een briefje van een dokter daar. Die vakantiedagen kun je dan meestal later nog opnemen.',
          },
          // ⚖️ check: een zelfstandige heeft geen werkgever en dus geen gewaarborgd loon (Arbeidsovereenkomstenwet geldt alleen voor werknemers)
          // ⚖️ check: een zelfstandige kan na een korte wachttijd een uitkering van het ziekenfonds krijgen (inami.fgov.be "aangifte en erkenning van uw arbeidsongeschiktheid als zelfstandige"; lengte van de wachttijd nakijken)
          {
            kind: 'truefalse',
            id: 'r.be.l.ziek.2.tf4',
            statement: 'Kevin is zelfstandige. Is hij ziek? Dan betaalt niemand zijn loon door.',
            answer: true,
            why: 'Een zelfstandige werkt voor zichzelf, zonder werkgever. Niemand betaalt dan je loon door. Na een korte wachttijd kan je ziekenfonds wel iets betalen. Regel daarom ook zelf iets, zoals sparen of een verzekering.',
          },
          // ⚖️ check: na het gewaarborgd loon betaalt het ziekenfonds de uitkering (riziv.fgov.be; askWho ziekenfonds)
          {
            kind: 'whoask',
            id: 'r.be.l.ziek.2.wa1',
            question: 'Je bent langer dan een maand ziek. Wie betaalt dan je uitkering?',
            options: [
              { id: 'a', who: 'hr', best: false, feedback: 'De personeelsdienst helpt met papieren. Maar de uitkering komt van je ziekenfonds.' },
              { id: 'b', who: 'ziekenfonds', best: true, feedback: 'Goed. Na het gewaarborgd loon betaalt je ziekenfonds.' },
              { id: 'c', who: 'rva', best: false, feedback: 'De RVA gaat over werkloosheid, niet over ziekte.' },
            ],
            why: 'Na het gewaarborgd loon betaalt je ziekenfonds een uitkering. Stuur dus op tijd je getuigschrift.',
          },
          { kind: 'model', id: 'r.be.l.ziek.2.mo1', context: 'Je leidinggevende belt om te vragen hoe het gaat.', nl: 'Ik denk dat ik 6 weken niet kan werken. Ik houd u op de hoogte.' },
        ],
      },
      {
        // Les 6.3 · Langer ziek en weer beter
        id: 'r.be.l.ziek.3',
        title: 'Langer ziek en weer beter',
        goal: 'Je weet wat de arbeidsarts en de controlearts doen. Je werkt mee aan je terugkeer.',
        remember: 'De arbeidsarts vertelt je baas niet wat je hebt.',
        // Wie kan je helpen: de arbeidsarts · je huisarts · de adviserend arts van je ziekenfonds ·
        //   een vakbond.
        help: ['arbeidsarts', 'huisarts', 'ziekenfonds', 'vakbond'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.ziek.3.sc1',
            picture: 'Mohammed tegenover een vriendelijke arts met een laptop.',
            lines: [
              'Mohammed heeft last van zijn rug.',
              'Hij is al 5 weken thuis.',
              'Hij krijgt een brief: hij moet naar de arbeidsarts.',
              'Hij denkt: "Werkt die arts niet gewoon voor mijn baas?"',
            ],
          },
          // ⚖️ check: de arbeidsarts (preventieadviseur-arbeidsarts) heeft beroepsgeheim en geeft de werkgever alleen door welk werk je kunt doen (Welzijnswet 4 augustus 1996; codex boek I titel 4; werk.belgie.be "de preventieadviseur-arbeidsarts")
          // ⚖️ check: de werkgever mag een controlearts sturen; die kijkt of je echt arbeidsongeschikt bent en zegt de werkgever geen diagnose (Arbeidsovereenkomstenwet art. 31 §3; Wet 13 juni 1999 betreffende de controlegeneeskunde)
          // ⚖️ check: wie lang ziek is, kan een re-integratietraject volgen bij de arbeidsarts; sinds 1 januari 2026 kan de werkgever het al vanaf de eerste ziektedag vragen (codex boek I titel 4, hoofdstuk VI, "RIT 3.0", KB 17 december 2025; partena-professional.be "nieuwigheden op 1 januari 2026"; zoekresultaten, bijgewerkt oktober 2026)
          {
            kind: 'rule',
            id: 'r.be.l.ziek.3.ru1',
            emoji: '🩺',
            title: 'De arbeidsarts vertelt je baas niet wat je hebt.',
            body: [
              'De arbeidsarts heeft een beroepsgeheim.',
              'Hij zegt je baas alleen welk werk je kunt doen.',
              'Je baas mag ook een controlearts sturen.',
              'Ben je lang ziek? Dan maak je samen een plan om terug te komen.',
            ],
            rule: 'geschreven',
          },
          // ⚖️ check: de arbeidsarts zegt de werkgever niet welke ziekte je hebt (beroepsgeheim, codex boek I titel 4)
          // ⚖️ check: na een afwezigheid van minstens 4 weken mag de werknemer vóór hij terugkomt zelf een bezoek aan de arbeidsarts vragen (bezoek voorafgaand aan de werkhervatting, codex art. I.4-36; nakijken of het na RIT 3.0 zo blijft)
          {
            kind: 'truefalse',
            id: 'r.be.l.ziek.3.tf1',
            statement: 'De arbeidsarts vertelt je baas niet welke ziekte je hebt.',
            answer: true,
            why: 'De arbeidsarts heeft een beroepsgeheim. Hij zegt je baas alleen welk werk je kunt doen. Niet wat je ziekte is. Was je 4 weken of langer ziek? Dan mag je zelf naar de arbeidsarts, vóór je terugkomt.',
          },
          // ⚖️ check: de controlearts mag de werknemer onderzoeken, ook thuis; de werknemer laat dat toe (Arbeidsovereenkomstenwet art. 31 §3)
          // ⚖️ check: de controlearts zegt de werkgever alleen of je arbeidsongeschikt bent, niet welke ziekte (Wet 13 juni 1999 controlegeneeskunde)
          // ⚖️ check: bij onenigheid met de controlearts is er een procedure met een arbiter-arts (art. 31 §5); vraag hulp bij de vakbond
          {
            kind: 'truefalse',
            id: 'r.be.l.ziek.3.tf2',
            statement: 'Een controlearts van je baas mag bij je thuis langskomen.',
            answer: true,
            why: 'Je baas mag een controlearts sturen. Die kijkt of je echt niet kunt werken. Hij zegt je baas niet welke ziekte je hebt. Ben je het oneens met hem? Zeg het meteen, en vraag hulp bij je vakbond.',
          },
          // ⚖️ check: re-integratietraject: werknemer, werkgever en arbeidsarts zoeken samen aangepast of ander werk; de adviserend arts van het ziekenfonds werkt mee (codex boek I titel 4; hetacv.be "re-integratie na langdurige ziekte"; zoekresultaat)
          // ⚖️ check: deeltijds of aangepast werk tijdens een uitkering kan alleen met toestemming van de adviserend arts van het ziekenfonds (toegelaten werk, Wet betreffende de verplichte verzekering voor geneeskundige verzorging en uitkeringen, art. 100 §2; riziv.fgov.be)
          {
            kind: 'whatdo',
            id: 'r.be.l.ziek.3.wd1',
            situation: 'De arbeidsarts zegt: "Begin met halve dagen licht werk." Wat kan Mohammed het beste doen?',
            options: [
              { id: 'a', text: 'Hij doet mee, en hij zegt wat wel en niet lukt.', best: true, feedback: 'Goed. Zo bouwt hij het samen rustig op.' },
              { id: 'b', text: 'Hij zegt nee. Hij is nog niet helemaal beter.', best: false, feedback: 'Dat snap ik. Maar meewerken aan herstel hoort erbij.' },
              { id: 'c', text: 'Hij werkt meteen weer hele dagen. Zo ziet zijn baas dat hij wil.', best: false, feedback: 'Te snel. Dan kan hij weer ziek worden.' },
            ],
            why: 'Ben je lang ziek? Dan kan er een re-integratietraject starten. Dat is een plan om weer te gaan werken. Jij, je baas en de arbeidsarts maken het samen. Halve dagen werken met een uitkering? Vraag eerst toestemming aan je ziekenfonds. Ben je het oneens? Vraag advies bij je vakbond.',
          },
          // ⚖️ check: wie vroeger terug gaat werken dan op het attest staat, verwittigt de werkgever; wie een uitkering kreeg, meldt de werkhervatting aan het ziekenfonds (riziv.fgov.be; cm.be)
          {
            kind: 'whatdo',
            id: 'r.be.l.ziek.3.wd2',
            situation: 'Mohammed is eerder beter dan op zijn briefje staat. Wat kan Mohammed het beste doen?',
            options: [
              { id: 'a', text: 'Hij komt morgen gewoon weer, zonder iets te zeggen.', best: false, feedback: 'Dan klopt het uurrooster misschien niet.' },
              { id: 'b', text: 'Hij wacht tot zijn baas hem zelf belt.', best: false, feedback: 'Dat kan lang duren. Zelf melden is sneller.' },
              { id: 'c', text: 'Hij belt zijn leidinggevende, en zegt dat hij terugkomt.', best: true, feedback: 'Goed. Dan weet iedereen dat hij weer kan.' },
            ],
            why: 'Kom je eerder terug dan op je briefje staat? Zeg het op tijd aan je baas. Kreeg je een uitkering? Laat het dan ook je ziekenfonds weten.',
          },
          {
            kind: 'whoask',
            id: 'r.be.l.ziek.3.wa1',
            question: 'Je wilt na lange ziekte weer werken. Wie kijkt welk werk je kunt doen?',
            options: [
              { id: 'a', who: 'huisarts', best: false, feedback: 'Je huisarts helpt je. Maar welk werk kan, zegt de arbeidsarts.' },
              { id: 'b', who: 'arbeidsarts', best: true, feedback: 'Goed. De arbeidsarts kijkt welk werk je kunt doen.' },
              { id: 'c', who: 'leidinggevende', best: false, feedback: 'Je leidinggevende praat mee. Maar die is geen arts.' },
            ],
            why: 'De arbeidsarts kijkt welk werk je kunt doen. De adviserend arts van je ziekenfonds praat soms mee.',
          },
          { kind: 'model', id: 'r.be.l.ziek.3.mo1', context: 'Je meldt je beter bij je leidinggevende.', nl: 'Ik ben weer beter. Ik kan morgen weer komen werken.' },
        ],
      },
    ],
  },
  zegHet: {
    'r.be.l.ziek.1.mo1': [
      { text: 'Hallo, met Jayden. Ik voel me niet zo goed. Misschien kom ik later.', feedback: 'Dan weet de chef niet of je komt. Zeg het duidelijk.' },
      { text: 'Hoi, met Jayden. Ik ben ziek. Zeg het maar tegen de anderen.', feedback: 'Zo vraag je de chef om je werk te regelen. Zeg gewoon dat je niet komt.' },
    ],
    'r.be.l.ziek.2.mo1': [
      { text: 'Ik weet het niet. Ik bel wel als ik weer kan.', feedback: 'Dan weet je baas niet wat hij kan verwachten. Noem een tijd.' },
      { text: 'Ik ben ziek. Meer hoeft u niet te weten, toch?', feedback: 'Je hoeft je ziekte niet te noemen. Maar zeg wel hoe lang.' },
    ],
    'r.be.l.ziek.3.mo1': [
      { text: 'Ik voel me al wat beter. Misschien kom ik binnenkort terug.', feedback: 'Dat is niet duidelijk. Zeg wanneer je komt.' },
      { text: 'Ik kom morgen weer. Of overmorgen, dat zie ik nog.', feedback: 'Dan kan je baas niet plannen. Kies een dag.' },
    ],
  },
  advice: {
    'r.be.l.ziek.1.ru1': 'advice',
    'r.be.l.ziek.2.ru1': 'advice',
    'r.be.l.ziek.3.ru1': 'advice',
  },
  kun: [
    ['Ik kan mij op tijd ziek melden.', '1F', 'gesprekken'],
    ['Ik kan zeggen wanneer ik een ziektebriefje nodig heb.', '1F', 'gesprekken'],
    ['Ik kan met de arbeidsarts praten over weer werken.', '1F', 'gesprekken'],
  ],
};
