import type { BeUnit } from '../types';

/**
 * Unit 3 (België) · Contract en soorten werk: de Belgische versie van
 * src/content/regels/units/contract.ts. Zelfde vier lessen en stap-id's, met "r.be." vooraan.
 * Drie lessen zijn opnieuw geschreven, want de Nederlandse regel geldt in België niet
 * (docs/belgie-vlaanderen-plan.md, ❌):
 *   3.2 geen proeftijd en geen ketenregeling, wel een opzegtermijn en art. 10bis;
 *   3.3 geen oproepcontract, wel een variabel uurrooster en interim met dagcontracten;
 *   3.4 geen zzp, wel een zelfstandige (KBO) en duaal leren.
 * Vlaamse woorden: arbeidsreglement, paritair comité, opzegtermijn, C4, interimkantoor,
 * uurrooster, zelfstandige, ondernemingsloket.
 *
 * `// ⚖️ check:` = een feit dat de deskundige nakijkt, met de bron. Opgezocht op 30 okt 2026.
 * werk.belgie.be en securex.be waren in deze sessie niet te openen (netwerk geblokkeerd,
 * 30 okt 2026): de feiten komen uit zoekresultaten (Securex, Partena, Legalnews, Claeys & Engels,
 * Lexgo, Federgon, vlaanderen.be). `// Redactie:` is voor de makers.
 */
export const be: BeUnit = {
  unit: {
    id: 'r.be.contract',
    title: 'Contract en soorten werk',
    emoji: '📄',
    color: '#7e5428',
    lessons: [
      {
        // Les 3.1 · Je contract: wat staat erin?
        id: 'r.be.l.contract.1',
        title: 'Je contract: wat staat erin?',
        goal: 'Je weet welke afspraken op papier horen. Je weet wat een paritair comité is. En je weet dat papier telt.',
        remember: 'Wat op papier staat, telt. Bewaar je contract goed.',
        // Wie kan je helpen: een vakbond (ABVV, ACV, ACLVB) · gratis eerste juridisch advies
        //   (justitiehuis) · Toezicht op de Sociale Wetten.
        help: ['vakbond', 'justitiehuis', 'tsw'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.contract.1.sc1',
            picture: 'Sanne aan tafel met een contract en een fluostift. Drie woorden zijn geel.',
            lines: [
              'Sanne krijgt haar eerste contract bij een supermarkt.',
              'Het zijn 4 bladzijden.',
              'Er staan moeilijke woorden in.',
              'Ze ziet "bepaalde tijd", "paritair comité" en "12 uur per week".',
            ],
          },
          // ⚖️ check: een contract voor bepaalde tijd moet schriftelijk zijn, uiterlijk bij het begin
          //   van het werk; anders geldt het als contract voor onbepaalde tijd (Arbeidsovereenkomstenwet
          //   3 juli 1978, art. 9; werk.belgie.be, niet te openen op 30 okt 2026; lexgo.be 5839)
          // ⚖️ check: een deeltijds contract moet schriftelijk zijn, uiterlijk bij het begin, met de
          //   arbeidsregeling en het uurrooster (Arbeidsovereenkomstenwet art. 11bis)
          // ⚖️ check: de regels van het bedrijf (uren, pauze, boetes, opzeg) staan in het
          //   arbeidsreglement; de werknemer krijgt een kopie (Wet 8 april 1965 tot instelling van de
          //   arbeidsreglementen)
          // ⚖️ check: het paritair comité sluit de sectorale afspraken (cao's) over loon en regels (werk.belgie.be, paritaire comités)
          {
            kind: 'rule',
            id: 'r.be.l.contract.1.ru1',
            emoji: '📄',
            title: 'Wat op papier staat, telt. Bewaar je contract goed.',
            body: [
              'Werk je tijdelijk of deeltijds? Dan moet je contract op papier staan.',
              'Dat moet klaar zijn vóór je begint.',
              'De regels van je bedrijf staan in het arbeidsreglement.',
              'De afspraken van je sector komen van het paritair comité.',
            ],
            rule: 'geschreven',
            key: true,
          },
          // ⚖️ check: de werkgever geeft de werknemer de belangrijkste informatie over het werk
          //   (loon, uren, plaats, opzeg) op papier of digitaal (Wet 7 oktober 2022 transparante en
          //   voorspelbare arbeidsvoorwaarden, omzetting Richtlijn EU 2019/1152)
          // ⚖️ check: termijn: bronnen spreken elkaar tegen. Eén zoekresultaat zegt "uiterlijk op de
          //   eerste werkdag", de richtlijn laat 7 dagen tot 1 maand toe. Daarom geen termijn in de les
          //   (forumforthefuture.be over de wet van 7 oktober 2022; lexgo.be 12216). Nakijken.
          {
            kind: 'truefalse',
            id: 'r.be.l.contract.1.tf1',
            statement: 'Je werkgever moet de belangrijkste afspraken op papier of per mail geven.',
            answer: true,
            why: 'Je werkgever moet je de belangrijkste afspraken geven. Bijvoorbeeld wat je verdient, hoeveel uur je werkt en waar. Dat kan op papier of digitaal. Bewaar het goed. Bij een probleem kijken ze ernaar.',
          },
          // ⚖️ check: het nummer van het paritair comité staat vaak in het contract of op de loonbrief (hetacv.be "je loonbrief")
          {
            kind: 'whatdo',
            id: 'r.be.l.contract.1.wd1',
            situation: 'Sanne snapt de woorden "paritair comité" niet. Wat kan Sanne het beste doen?',
            options: [
              { id: 'a', text: 'Ze slaat het woord over. Het is vast een detail.', best: false, feedback: 'Jammer. Daar komen juist veel van haar rechten vandaan.' },
              { id: 'b', text: 'Ze tekent eerst, en ze zoekt het later op.', best: false, feedback: 'Beter andersom: eerst snappen, dan tekenen.' },
              { id: 'c', text: 'Ze vraagt wat het is, en welk nummer het heeft.', best: true, feedback: 'Goed. Dan kan ze de afspraken zelf opzoeken.' },
            ],
            why: 'Elke sector heeft een paritair comité. Daar maken vakbonden en werkgevers afspraken over loon en regels. Het nummer staat vaak in je contract of op je loonbrief. Een vakbond kan je de afspraken uitleggen.',
          },
          // ⚖️ check: bij ziekte, werkloosheid of ontslag kijken het ziekenfonds, de RVA en de rechter
          //   naar je contract en je loon (rva.be; riziv.fgov.be; gewoonte)
          // ⚖️ check: werkt een deeltijdse werknemer vaak meer uren dan in het contract, dan kan hij
          //   vragen om een contract met meer uren (Arbeidsovereenkomstenwet / programmawet 22
          //   december 1989, voorrangsrecht deeltijdse werknemers; nakijken)
          {
            kind: 'whatdo',
            id: 'r.be.l.contract.1.wd2',
            situation: 'In het contract staat 12 uur. De baas zegt: "U werkt echt 30 uur."',
            options: [
              { id: 'a', text: 'Je vindt het goed. 30 uur is toch meer geld.', best: false, feedback: 'Nu wel. Maar bij ziekte of ontslag telt het contract.' },
              { id: 'b', text: 'Je zegt niets. Je wilt geen gedoe op je eerste dag.', best: false, feedback: 'Dat snap ik. Maar later is het lastiger.' },
              { id: 'c', text: 'Je vraagt of hij 30 uur in het contract zet.', best: true, feedback: 'Goed. Wat op papier staat, telt.' },
            ],
            why: 'Bij ziekte, werkloosheid of ontslag kijken ze naar je contract. Werk je lange tijd meer uren? Dan kun je vragen om die uren in je contract.',
          },
          // Mag ik hier werken? Bewust geen regels per groep: alleen "vraag het na vóór je begint".
          // ⚖️ check: wie geen Belg of EU-burger is, heeft vaak een toelating nodig om te werken (een
          //   gecombineerde vergunning of een verblijfskaart met toegang tot werk); in Vlaanderen
          //   beslist het Departement Werk en Sociale Economie (vlaanderen.be "arbeidskaart en
          //   gecombineerde vergunning"; zoekresultaat)
          // ⚖️ check: de werkgever doet een Dimona-aangifte vóór je begint, en bewaart bij een
          //   buitenlandse werknemer een kopie van de verblijfstitel (socialsecurity.be Dimona; wet 30 april 1999)
          // ⚖️ check: advies over je papieren: onder meer het Agentschap Integratie en Inburgering (integratiekaart.be; zoekresultaat)
          {
            kind: 'whatdo',
            id: 'r.be.l.contract.1.wd3',
            situation: 'Ewa woont net in België. Ze krijgt een job aangeboden. Ze weet niet of ze hier al mag werken. Wat kan Ewa het beste doen?',
            options: [
              { id: 'a', text: 'Ze begint gewoon. De baas regelt het vast wel.', best: false, feedback: 'Riskant. Zonder de goede papieren kan ze problemen krijgen.' },
              { id: 'b', text: 'Ze vraagt het eerst na bij een vakbond.', best: true, feedback: 'Goed. Dan weet ze het zeker.' },
              { id: 'c', text: 'Ze vraagt het aan een vriendin die hier ook werkt.', best: false, feedback: 'Vriendelijk. Maar het hangt af van haar eigen papieren.' },
            ],
            why: 'Mag je in België werken? Dat hangt af van je papieren. Weet je het niet zeker? Vraag het na vóór je begint. Dat kan bij een vakbond of het Agentschap Integratie en Inburgering. Je werkgever moet je melden vóór je begint.',
          },
          {
            kind: 'whoask',
            id: 'r.be.l.contract.1.wa1',
            question: 'Je snapt een paar woorden in je contract niet. Wie legt het uit?',
            options: [
              { id: 'a', who: 'collega', best: false, feedback: 'Een collega bedoelt het goed. Maar die weet het vaak niet zeker.' },
              { id: 'b', who: 'vakbond', best: true, feedback: 'Goed. Een vakbond legt je contract uit aan zijn leden.' },
              { id: 'c', who: 'rva', best: false, feedback: 'De RVA gaat over werkloosheid, niet over je contract.' },
            ],
            why: 'Een vakbond legt je contract uit. Ben je geen lid? In het justitiehuis krijg je gratis een eerste advies.',
          },
          { kind: 'model', id: 'r.be.l.contract.1.mo1', context: 'Je wilt je echte uren op papier.', nl: 'Kunt u de afspraak over mijn uren in het contract zetten?' },
        ],
      },
      {
        // Les 3.2 · Opzeggen, tijdelijk en vast (opnieuw geschreven: geen proeftijd in België)
        id: 'r.be.l.contract.2',
        title: 'Opzeggen, tijdelijk en vast',
        goal: 'Je weet dat er geen proeftijd meer is, wel een opzegtermijn. Je weet wat er gebeurt aan het eind van een tijdelijk contract.',
        remember: 'Ook in het begin heb je een opzegtermijn. Vraag altijd je C4.',
        // Wie kan je helpen: een vakbond · gratis eerste juridisch advies (justitiehuis) · de VDAB
        //   en de vakbond of de HVW (als je werk stopt).
        help: ['vakbond', 'justitiehuis', 'hvw'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.contract.2.sc1',
            picture: 'Mohammed bij een kalender. Er staat een rood rondje om een datum.',
            lines: [
              'Mohammed heeft een contract voor 1 jaar.',
              'Na 3 weken zegt zijn baas: "Het past niet."',
              '"U kunt morgen stoppen."',
              'Mohammed denkt: "Ik ben toch nog in mijn proeftijd?"',
            ],
          },
          // ⚖️ check: het proefbeding (de proeftijd) is afgeschaft voor contracten vanaf 1 januari 2014
          //   (Wet eenheidsstatuut 26 december 2013; werk.belgie.be "opzeggingstermijnen vanaf 1 januari 2014")
          // ⚖️ check: wil de werkgever stoppen, dan geeft hij een opzegtermijn of betaalt hij een
          //   opzegvergoeding (loon voor die termijn) (Arbeidsovereenkomstenwet art. 37 en 39)
          // ⚖️ check: opzeg door de werkgever: schriftelijk, met een aangetekende brief of een
          //   gerechtsdeurwaarder (Arbeidsovereenkomstenwet art. 37)
          // ⚖️ check: bronnen spreken elkaar tegen over de eerste 6 maanden. Voor contracten die
          //   beginnen vanaf 1 augustus 2026 geldt in de eerste 6 maanden een opzegtermijn van 1 week,
          //   voor werkgever en werknemer (Securex, juni 2026; Legalnews/Partena; oeccbb.be "wijziging
          //   opzeggingstermijnen sinds 1 augustus 2026"; de bronnen noemen de wet van 18 mei 2026 of
          //   van 3 juni 2026). Securex: het proefbeding komt formeel niet terug, maar de eerste 6
          //   maanden werken "functioneel als een soort proefperiode". Loyens & Loeff spreekt van een
          //   "terugkeer van het proefbeding". Daarom zegt de les alleen: in het begin is de termijn
          //   kort. Geen getal in de les. Nakijken.
          // ⚖️ check: bij het einde van het contract geeft de werkgever de werknemer een C4 (werkloosheidsbewijs) (rva.be; KB 25 november 1991, art. 137)
          {
            kind: 'rule',
            id: 'r.be.l.contract.2.ru1',
            emoji: '📅',
            title: 'Ook in het begin heb je een opzegtermijn. Vraag altijd je C4.',
            body: [
              'In België bestaat de oude proeftijd niet meer.',
              'Wil je baas stoppen? Dan geeft hij je een opzegtermijn.',
              'Of hij betaalt je loon voor die tijd: een opzegvergoeding.',
              'In de eerste maanden is de opzegtermijn kort.',
              'Stopt je werk? Vraag dan je C4. Die heb je nodig voor een uitkering.',
            ],
            rule: 'geschreven',
          },
          // ⚖️ check: het proefbeding is afgeschaft sinds 1 januari 2014 (Wet eenheidsstatuut 26
          //   december 2013); of er sinds 2026 iets "zoals een proefperiode" terug is: bronnen spreken
          //   elkaar tegen (zie hierboven: Securex "niet formeel"; Loyens & Loeff "terugkeer")
          {
            kind: 'truefalse',
            id: 'r.be.l.contract.2.tf1',
            statement: 'In het begin mag je baas je zonder opzegtermijn laten stoppen.',
            answer: false,
            why: 'De oude proeftijd bestaat niet meer. Ook in het begin heb je een opzegtermijn. Die is wel kort. Of je baas betaalt je loon voor die tijd. Vraag het na bij een vakbond.',
          },
          // ⚖️ check: opeenvolgende contracten van bepaalde tijd zonder onderbreking gelden in principe
          //   als één contract van onbepaalde tijd (Arbeidsovereenkomstenwet art. 10)
          // ⚖️ check: uitzondering 1: hoogstens 4 contracten, elk minstens 3 maanden, samen hoogstens 2
          //   jaar; uitzondering 2: met toestemming van de inspectie contracten van minstens 6 maanden,
          //   samen hoogstens 3 jaar (Arbeidsovereenkomstenwet art. 10bis; clbgroup.be FAQ 2016;
          //   juridischforum.be; Grondwettelijk Hof 17 juni 2021, nr. 93/2021)
          // ⚖️ check: wordt de regel niet gevolgd, dan heb je een contract van onbepaalde tijd (vast) (art. 10bis §4)
          {
            kind: 'truefalse',
            id: 'r.be.l.contract.2.tf2',
            statement: 'Je baas mag je steeds opnieuw een tijdelijk contract geven.',
            answer: false,
            why: 'Tijdelijke contracten na elkaar mogen alleen onder strenge regels. Bijvoorbeeld: hoogstens 4 contracten, samen hoogstens 2 jaar. Klopt dat niet? Dan heb je meestal een vast contract.',
          },
          // ⚖️ check: een contract van bepaalde tijd stopt vanzelf op de einddatum; er is in België
          //   geen plicht voor de werkgever om dat vooraf aan te kondigen (geen "aanzegtermijn")
          //   (Arbeidsovereenkomstenwet art. 32)
          // ⚖️ check: werk je na de einddatum gewoon verder, dan heb je een contract van onbepaalde tijd (Arbeidsovereenkomstenwet art. 11)
          {
            kind: 'whatdo',
            id: 'r.be.l.contract.2.wd1',
            situation: 'Fatima heeft een tijdelijk contract tot 1 juni. Het is half mei. Ze hoort niets. Wat kan Fatima het beste doen?',
            options: [
              { id: 'a', text: 'Ze wacht af. Geen bericht betekent: ze mag blijven.', best: false, feedback: 'Dat klopt niet. Een tijdelijk contract stopt vanzelf.' },
              { id: 'b', text: 'Ze vraagt haar baas of ze na 1 juni mag blijven.', best: true, feedback: 'Goed. Dan weet ze op tijd of ze mag blijven.' },
              { id: 'c', text: 'Ze zoekt alvast ander werk en zegt niets.', best: false, feedback: 'Slim om te zoeken. Maar vragen kan ook.' },
            ],
            why: 'Een tijdelijk contract stopt vanzelf op de einddatum. Je baas hoeft dat niet vooraf te zeggen. Vraag dus zelf op tijd of je mag blijven. Werk je na de einddatum gewoon verder? Dan heb je meestal een vast contract.',
          },
          // ⚖️ check: wie werkloos wordt, schrijft zich in bij de VDAB en vraagt de uitkering aan via
          //   een uitbetalingsinstelling: een vakbond (ABVV, ACV, ACLVB) of de HVW (Hulpkas); de RVA
          //   beslist (rva.be; hvw.fgov.be; zoekresultaat)
          {
            kind: 'whoask',
            id: 'r.be.l.contract.2.wa1',
            question: 'Je tijdelijke contract stopt. Je hebt nog geen nieuw werk. Waar vraag je een uitkering aan?',
            options: [
              { id: 'a', who: 'justitiehuis', best: false, feedback: 'Daar krijg je advies, maar geen uitkering.' },
              { id: 'b', who: 'ocmw', best: false, feedback: 'Ben je je werk kwijt? Dan is de werkloosheid meestal de eerste stap.' },
              { id: 'c', who: 'hvw', best: true, feedback: 'Goed. De HVW of je vakbond helpt je aanvraag en betaalt uit.' },
            ],
            why: 'Schrijf je in bij de VDAB. Vraag je uitkering aan bij een vakbond of bij de HVW. Neem je C4 mee. De RVA beslist over je uitkering.',
          },
          { kind: 'model', id: 'r.be.l.contract.2.mo1', context: 'Je baas stopt je contract in het begin.', nl: 'Hoe lang is mijn opzegtermijn? En krijg ik mijn C4?' },
        ],
      },
      {
        // Les 3.3 · Variabel uurrooster en interim (opnieuw geschreven: geen oproepcontract in België)
        id: 'r.be.l.contract.3',
        title: 'Variabel uurrooster en interim',
        goal: 'Je kent de basisregels voor een variabel uurrooster. Je weet wat een interimkantoor wel en niet mag.',
        remember: 'Variabel uurrooster? Je moet je uren vooraf krijgen.',
        // Wie kan je helpen: een vakbond · het interimkantoor · bij te weinig loon of te veel
        //   dagcontracten: Toezicht op de Sociale Wetten.
        help: ['vakbond', 'interimkantoor', 'tsw'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.contract.3.sc1',
            picture: 'Esra in een hotelgang met een poetskar. Haar gsm gaat.',
            lines: [
              'Esra werkt deeltijds in een hotel.',
              'Ze heeft een variabel uurrooster.',
              'Dat betekent: haar uren zijn niet elke week hetzelfde.',
              'Vrijdag belt het hotel: "Kunt u morgen extra komen?"',
            ],
          },
          // ⚖️ check: een deeltijdse werknemer met een variabel uurrooster krijgt zijn uurrooster
          //   minstens 7 werkdagen vooraf (sinds de Arbeidsdeal 2022; was 5 werkdagen); een algemeen
          //   verbindend verklaarde sector-cao kan dat korter maken, maar niet korter dan 3 werkdagen
          //   (programmawet 22 december 1989, art. 159; securex.be "deeltijders moeten hun uurrooster 7
          //   werkdagen vooraf krijgen"; werk.belgie.be "variabele werkroosters", niet te openen op 30 okt 2026)
          // ⚖️ check: dat blijft zo na de wet van 18 mei 2026 diverse arbeidsbepalingen (vanaf 1 juni
          //   2026: deeltijds minimum van 1/3 naar 1/10 van voltijds) (partena-professional.be; claeysengels.be, juni 2026)
          // ⚖️ check: een werkperiode duurt minstens 3 uur, met uitzonderingen per sector (Arbeidswet 16
          //   maart 1971, art. 21 §2). Bronnen spreken elkaar tegen: Claeys & Engels (juni 2026) zegt
          //   "minstens 3 uur per prestatie blijft"; Loyens & Loeff sprak eerder van 3 uur per week. Nakijken.
          // ⚖️ check: de uurroosters (het kader) staan in het arbeidsreglement (securex.be, juni 2026)
          {
            kind: 'rule',
            id: 'r.be.l.contract.3.ru1',
            emoji: '📲',
            title: 'Variabel uurrooster? Je moet je uren vooraf krijgen.',
            body: [
              'Werk je deeltijds met wisselende uren? Dat heet een variabel uurrooster.',
              'Je baas moet je uurrooster vooraf geven: meestal 7 werkdagen vooraf.',
              'Je sector kan dat korter maken, maar niet korter dan 3 werkdagen.',
              'Een werkperiode duurt meestal minstens 3 uur.',
              'De regels staan ook in het arbeidsreglement.',
            ],
            rule: 'geschreven',
          },
          // ⚖️ check: het uurrooster wordt 7 werkdagen vooraf bekendgemaakt, of minstens 3 werkdagen
          //   vooraf als de sector dat afspreekt (programmawet 22 december 1989; securex.be)
          // ⚖️ check: uren buiten het uurrooster zijn "aanvullende uren"; die spreek je af, met regels
          //   over loon en toeslag (Arbeidsovereenkomstenwet art. 11bis; nakijken of de werknemer
          //   altijd mag weigeren)
          {
            kind: 'truefalse',
            id: 'r.be.l.contract.3.tf1',
            statement: 'Esra moet morgen komen, want het hotel belt haar.',
            answer: false,
            why: 'Je uurrooster moet vooraf bekend zijn: meestal 7 werkdagen vooraf. Soms 3 werkdagen. Morgen staat niet in haar uurrooster. Extra uren spreek je samen af.',
          },
          // ⚖️ check: een werkperiode duurt minstens 3 uur; er zijn uitzonderingen per sector (Arbeidswet
          //   art. 21 §2; zie de noot hierboven). Of je loon krijgt voor 3 uur als de baas je eerder
          //   naar huis stuurt: niet zeker, daarom zegt de les "vraag het na".
          {
            kind: 'whatdo',
            id: 'r.be.l.contract.3.wd1',
            situation: 'Esra werkt maar 1 uur. Dan stuurt de baas haar naar huis.',
            options: [
              { id: 'a', text: 'Ze krijgt loon voor 1 uur. Zo werkt deeltijds werk.', best: false, feedback: 'Niet zeker. Er is een regel voor korte werkperiodes.' },
              { id: 'b', text: 'Ze vraagt het na: een werkperiode is meestal minstens 3 uur.', best: true, feedback: 'Goed. Een vakbond weet wat er in haar sector geldt.' },
              { id: 'c', text: 'Ze krijgt niets, want ze was er maar kort.', best: false, feedback: 'Nee. De baas betaalt gewerkte tijd altijd.' },
            ],
            why: 'Een werkperiode duurt in België meestal minstens 3 uur. Er zijn uitzonderingen per sector. Wordt je werk veel korter? Vraag het na bij je vakbond.',
          },
          // ⚖️ check: een interimkracht krijgt minstens hetzelfde loon en dezelfde voordelen als een
          //   vaste werknemer bij de gebruiker, in dezelfde functie (Uitzendarbeidswet 24 juli 1987, art. 10)
          // ⚖️ check: het interimcontract moet schriftelijk zijn, binnen 2 werkdagen na het begin (Uitzendarbeidswet art. 8; nakijken)
          {
            kind: 'truefalse',
            id: 'r.be.l.contract.3.tf2',
            statement: 'Een interimkracht krijgt hetzelfde loon als vaste mensen met hetzelfde werk.',
            answer: true,
            why: "Dat klopt. Doe je hetzelfde werk als vaste collega's? Dan krijg je minstens hetzelfde loon. Zo staat het in de wet. Weet je het niet zeker? Vraag het na bij het interimkantoor.",
          },
          // Voor werk betaal je nooit: de tweede vraag naast r.be.l.zoeken.1.
          // ⚖️ check: inschrijven bij een interimkantoor is gratis; een bureau mag de werkzoekende geen
          //   vergoeding vragen (Decreet private arbeidsbemiddeling 10 december 2010, art. 5, 9°; federgon.be)
          {
            kind: 'truefalse',
            id: 'r.be.l.contract.3.tf3',
            statement: 'Een interimkantoor mag je laten betalen om je in te schrijven.',
            answer: false,
            why: 'Inschrijven bij een interimkantoor is gratis. Het kantoor krijgt geld van het bedrijf waar je werkt. Voor echt werk hoef jij zelf niet te betalen. Vraagt een kantoor toch geld? Dan klopt er iets niet.',
          },
          // ⚖️ check: een dagcontract is een interimcontract voor één dag; opeenvolgende dagcontracten
          //   bij dezelfde gebruiker mogen alleen als die een echte nood aan flexibiliteit kan aantonen,
          //   en het aantal moet daarbij passen (Uitzendarbeidswet art. 8bis; KB 2018; federgon.be
          //   brochure "opeenvolgende dagcontracten", versie 2023; securex.be)
          // ⚖️ check: sinds 1 januari 2023 betaalt de gebruiker een extra bijdrage bij veel dagcontracten (federgon.be; legalnews.be, Claeys & Engels)
          {
            kind: 'whatdo',
            id: 'r.be.l.contract.3.wd2',
            situation: 'Piotr werkt via een interimkantoor. Al maanden krijgt hij elke dag een nieuw contract voor één dag. Wat kan Piotr het beste doen?',
            options: [
              { id: 'a', text: 'Hij zegt niets. Zo werkt interim nu eenmaal altijd.', best: false, feedback: 'Niet altijd. Voor veel dagcontracten gelden regels.' },
              { id: 'b', text: 'Hij vraagt de vakbond of dit zo mag.', best: true, feedback: 'Goed. Zo weet hij of het mag.' },
              { id: 'c', text: 'Hij komt een paar dagen niet, om te protesteren.', best: false, feedback: 'Dat snap ik. Maar dan verliest hij misschien zijn werk.' },
            ],
            why: 'Een dagcontract is een contract voor één dag. Bij interim mag dat. Maar veel dagcontracten na elkaar mogen niet zomaar. Het bedrijf moet dan echt flexibel werk hebben. Weet je het niet zeker? Vraag een vakbond om advies.',
          },
          // ⚖️ check: Toezicht op de Sociale Wetten (FOD WASO) controleert loon, uren en contracten; je
          //   kunt een klacht indienen, je naam blijft geheim (werk.belgie.be, niet te openen op 30 okt 2026)
          {
            kind: 'whoask',
            id: 'r.be.l.contract.3.wa1',
            question: 'Je krijgt veel te weinig loon voor je uren. Waar meld je dat?',
            options: [
              { id: 'a', who: 'tsw', best: true, feedback: 'Goed. Zij controleren of bedrijven genoeg betalen.' },
              { id: 'b', who: 'politie', best: false, feedback: 'De politie is voor misdaad en gevaar. Te weinig loon meld je ergens anders.' },
              { id: 'c', who: 'interimkantoor', best: false, feedback: 'Werk je via interim? Vraag het daar eerst. Maar zij zijn je werkgever.' },
            ],
            why: 'Bij te weinig loon kun je naar Toezicht op de Sociale Wetten. Je naam blijft daar geheim. Een vakbond helpt je ook.',
          },
          { kind: 'model', id: 'r.be.l.contract.3.mo1', context: 'Je baas vraagt je voor morgen, buiten je uurrooster.', nl: 'Morgen lukt niet, dat staat niet in mijn uurrooster. Volgende week kan ik wel.' },
        ],
      },
      {
        // Les 3.4 · Stage, duaal leren en zelfstandige (opnieuw geschreven: geen zzp in België)
        id: 'r.be.l.contract.4',
        title: 'Stage, duaal leren en zelfstandige',
        goal: 'Je weet het verschil tussen stage, duaal leren, werknemer en zelfstandige. Je kent de risico\'s.',
        remember: 'Zelfstandige? Geen loon als je ziek bent, en geen werkloosheidsuitkering.',
        // Wie kan je helpen: je school · een vakbond (sommige hebben een dienst voor zelfstandigen) ·
        //   gratis eerste juridisch advies (justitiehuis) · een ondernemingsloket of sociaal
        //   verzekeringsfonds (informatie over zelfstandig werken).
        help: ['vakbond', 'justitiehuis'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.contract.4.sc1',
            picture: 'Jayden met een grote koerierstas op zijn rug. Naast hem een fiets.',
            lines: [
              'Jayden is 18.',
              'Hij zoekt werk.',
              'Een koeriersbedrijf zegt: "Word zelfstandige bij ons. Dan verdien je meer per uur."',
              'Een zelfstandige werkt voor zichzelf, niet voor een baas.',
              'Jayden weet niet of dat slim is.',
            ],
          },
          // ⚖️ check: een zelfstandige schrijft zich in bij de KBO (Kruispuntbank van Ondernemingen)
          //   via een erkend ondernemingsloket, en sluit aan bij een sociaal verzekeringsfonds; daar
          //   betaalt hij zijn sociale bijdragen (partena-professional.be; vlaio.be "je statuut als zelfstandige")
          // ⚖️ check: een zelfstandige heeft geen recht op gewaarborgd loon en geen
          //   werkloosheidsuitkering; bij ziekte soms een uitkering van het ziekenfonds, na een
          //   wachttijd (inasti.be / rsvz; partena-professional.be; wachttijd niet gevonden: nakijken)
          // ⚖️ check: wie volgt de werkgever voor uren, werk en controle, is vaak werknemer; criteria:
          //   wil van de partijen, vrijheid van werktijd, vrijheid van werk, hiërarchische controle
          //   (Arbeidsrelatiewet, Programmawet 27 december 2006, art. 328-343; vlaanderen.be "wat is
          //   schijnzelfstandigheid"; vermoedens in onder meer bouw, schoonmaak, vervoer en platformwerk)
          {
            kind: 'rule',
            id: 'r.be.l.contract.4.ru1',
            emoji: '🚲',
            title: 'Zelfstandige? Geen loon als je ziek bent, en geen werkloosheidsuitkering.',
            body: [
              'Een zelfstandige schrijft zich in bij de KBO. Dat is de lijst van bedrijven.',
              'Dat doe je via een ondernemingsloket.',
              'Je betaalt zelf je sociale bijdragen, via een sociaal verzekeringsfonds.',
              'Je krijgt geen loon als je ziek bent, en geen werkloosheidsuitkering.',
              'Bepaalt het bedrijf je uren, je werk en je controle? Dan ben je misschien werknemer.',
            ],
            rule: 'geschreven',
          },
          // ⚖️ check: geen gewaarborgd loon bij ziekte; soms een uitkering van het ziekenfonds, lager
          //   dan loon; geen werkloosheidsuitkering; het overbruggingsrecht geeft een tijdelijke
          //   uitkering als je zaak moet stoppen, bijvoorbeeld bij faillissement (partena-professional.be
          //   "rechten en plichten als zelfstandige"; socialsecurity.belgium.be infoblad zelfstandigen 2026)
          {
            kind: 'truefalse',
            id: 'r.be.l.contract.4.tf1',
            statement: 'Als zelfstandige krijg je je loon door als je ziek bent.',
            answer: false,
            why: 'Als zelfstandige heb je geen baas die je loon betaalt. Ben je ziek? Dan krijg je soms een uitkering van je ziekenfonds. Die is lager. Stopt je werk? Dan krijg je geen werkloosheidsuitkering. Meer per uur is dus niet altijd meer geld.',
          },
          // ⚖️ check: wie volgens de feiten onder gezag werkt, is werknemer, ook als het contract
          //   "zelfstandige" zegt: schijnzelfstandigheid (Arbeidsrelatiewet 27 december 2006; de
          //   Commissie Administratieve Regeling Arbeidsrelatie geeft advies, commissiearbeidsrelaties.belgium.be)
          {
            kind: 'whatdo',
            id: 'r.be.l.contract.4.wd1',
            situation: 'Het bedrijf bepaalt Jaydens uren, zijn kleren en zijn route. Toch noemen ze hem zelfstandige. Wat kan Jayden het beste doen?',
            options: [
              { id: 'a', text: 'Hij vraagt advies. Misschien is hij gewoon werknemer.', best: true, feedback: 'Goed. Dan weet hij welke rechten hij heeft.' },
              { id: 'b', text: 'Hij vindt het prima. Zo gaat het bij koeriers.', best: false, feedback: 'Dat is logisch. Maar dan mist hij misschien rechten.' },
              { id: 'c', text: 'Hij koopt alvast zelf een fiets en een tas.', best: false, feedback: 'Wacht daar nog even mee. Eerst advies vragen.' },
            ],
            why: 'Bepaalt het bedrijf hoe, wanneer en waar je werkt? Dan ben je vaak gewoon werknemer. Dan heb je recht op loon bij ziekte en op een uitkering. Iemand die zelfstandige heet, maar werknemer is, heet schijnzelfstandig.',
          },
          // ⚖️ check: op een schoolstage krijg je meestal geen loon; bij duaal leren met een
          //   overeenkomst alternerende opleiding betaalt het bedrijf een maandelijkse leervergoeding;
          //   bij een stageovereenkomst alternerende opleiding niet (securex.be "verplichtingen van de
          //   onderneming"; vlaanderen.be duaal leren; de grens van 20 uur per week: bronnen spreken
          //   elkaar tegen, daarom geen getal in de les)
          {
            kind: 'truefalse',
            id: 'r.be.l.contract.4.tf2',
            statement: 'Op een stage krijg je altijd loon.',
            answer: false,
            why: 'Op een schoolstage ben je aan het leren. Je krijgt meestal geen loon. Duaal leren is anders. Dan leer je een groot deel in een bedrijf. Daar krijg je vaak een vergoeding.',
          },
          {
            kind: 'whoask',
            id: 'r.be.l.contract.4.wa1',
            question: 'Jayden weet het niet zeker: is hij zelfstandige of gewoon werknemer? Wie geeft gratis advies?',
            options: [
              { id: 'a', who: 'collega', best: false, feedback: "Collega's weten het vaak ook niet zeker." },
              { id: 'b', who: 'justitiehuis', best: true, feedback: 'Goed. Daar krijg je gratis een eerste advies over je rechten.' },
              { id: 'c', who: 'rva', best: false, feedback: 'De RVA gaat over werkloosheid. Dit advies krijg je ergens anders.' },
            ],
            why: 'In het justitiehuis krijg je gratis een eerste advies. Een vakbond helpt ook.',
          },
          { kind: 'model', id: 'r.be.l.contract.4.mo1', context: 'Je weet niet wat voor contract je hebt.', nl: 'Ben ik hier werknemer of zelfstandige? Wat staat er in mijn contract?' },
        ],
      },
    ],
  },
  zegHet: {
    'r.be.l.contract.1.mo1': [
      { text: 'Oké, we spreken het gewoon samen af. Dat is ook goed.', feedback: 'Een afspraak die je alleen zegt, is moeilijk te bewijzen.' },
      { text: 'Ik vertrouw u niet. Zet het nu meteen op papier!', feedback: 'Dat klinkt boos. Je kunt het ook rustig vragen.' },
    ],
    'r.be.l.contract.2.mo1': [
      { text: 'Oké, dan ga ik maar. Jammer, het is wat het is.', feedback: 'Dan weet je niets over je opzeg. Vraag het gewoon.' },
      { text: 'Dit is oneerlijk! U bent een slechte baas!', feedback: 'Dat klinkt boos. Vraag liever rustig naar je opzeg en je C4.' },
    ],
    'r.be.l.contract.3.mo1': [
      { text: 'Oké, dan kom ik morgen toch maar. Ik zeg wel iets anders af.', feedback: 'Morgen staat niet in je uurrooster. Je mag het zeggen.' },
      { text: 'Morgen? Nee, dat gaat niet. Bel me maar niet meer zo laat.', feedback: 'Dat klinkt boos. Zeg ook wanneer je wel kunt.' },
    ],
    'r.be.l.contract.4.mo1': [
      { text: 'Het maakt mij niet uit wat ik ben. Als ik maar werk heb.', feedback: 'Het is wel belangrijk. Het geeft andere rechten.' },
      { text: 'Ik vraag het wel aan een collega. Die weet het vast.', feedback: 'Een collega weet het misschien niet. Vraag het aan je baas.' },
    ],
  },
  advice: {
    'r.be.l.contract.1.ru1': 'advice',
    'r.be.l.contract.2.ru1': 'advice',
    'r.be.l.contract.3.ru1': 'advice',
    'r.be.l.contract.4.ru1': 'advice',
  },
  kun: [
    ['Ik kan de belangrijkste afspraken in mijn contract lezen.', '1F', 'lezen'],
    ['Ik kan vragen hoe lang mijn opzegtermijn is.', '1F', 'gesprekken'],
    ['Ik kan zeggen dat iets niet in mijn uurrooster staat.', '1F', 'gesprekken'],
  ],
};
