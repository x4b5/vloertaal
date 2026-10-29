import type { RuleUnit } from '../types';

/**
 * Unit 9 · Problemen en je rechten (les 9.1–9.4).
 * Converted from docs/werkregels-curriculum.md; edit the curriculum first, then this file.
 * `// ⚖️ check:` marks a fact the expert must check (docs/werkregels-bronnen.md). The marker is
 * never shown or read aloud. `// Redactie:` notes are for the makers only.
 */
export const rechtenUnit: RuleUnit = {
  id: 'r.rechten',
  title: 'Problemen en je rechten',
  emoji: '🛡️',
  color: '#a33b5c',
  lessons: [
    {
      // Les 9.1 · Discriminatie
      id: 'r.l.rechten.1',
      title: 'Discriminatie',
      goal: 'Je herkent discriminatie bij solliciteren en op het werk. Je weet hoe je het meldt.',
      remember: 'Discriminatie is verboden. Schrijf het op en meld het.',
      // Wie kan je helpen: discriminatie.nl (een meldpunt in je regio) · het College voor de
      //   Rechten van de Mens · de vertrouwenspersoon, als je bedrijf die heeft · een vakbond · het
      //   Juridisch Loket · de politie, bij bedreiging.
      help: ['vertrouwenspersoon', 'vakbond', 'juridischloket', 'politie'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.rechten.1.sc1',
          picture: 'Mohammed en Sanne, ieder met een telefoon. Op beide schermen dezelfde vacature.',
          lines: [
            'Mohammed en Sanne solliciteren op dezelfde baan.',
            "Hun cv's zijn bijna hetzelfde.",
            'Sanne mag op gesprek komen.',
            'Mohammed hoort: "De baan is al weg."',
            'Een dag later staat de vacature er nog.',
          ],
        },
        {
          kind: 'rule',
          id: 'r.l.rechten.1.ru1',
          emoji: '🚫',
          title: 'Discriminatie is verboden. Schrijf het op en meld het.',
          body: [
            'Discriminatie bij werk is verboden.',
            'Bijvoorbeeld om je afkomst, geloof, geslacht, leeftijd of handicap.',
            'Schrijf op wat er gebeurde, met datum.',
            'Meld het via discriminatie.nl.',
          ],
          rule: 'geschreven',
        },
        {
          kind: 'truefalse',
          id: 'r.l.rechten.1.tf1',
          statement: 'Een werkgever mag kiezen op afkomst of geloof.',
          answer: false,
          why: 'Discriminatie bij werk is verboden. Bijvoorbeeld om je afkomst, geloof, geslacht, leeftijd of handicap. Dat geldt bij solliciteren en bij stages. En ook bij loon en promotie.',
        },
        {
          kind: 'whatdo',
          id: 'r.l.rechten.1.wd1',
          situation: 'Mohammed denkt dat het om zijn naam gaat. Wat kan Mohammed het beste doen?',
          options: [
            { id: 'a', text: 'Hij laat het gaan. Bewijzen kan hij het toch niet.', best: false, feedback: 'Begrijpelijk. Maar melden kan ook zonder hard bewijs.' },
            { id: 'b', text: 'Hij schrijft op wat er gebeurde, en hij meldt het.', best: true, feedback: 'Goed. Zo kan iemand hem helpen.' },
            { id: 'c', text: 'Hij zet de naam van het bedrijf boos online.', best: false, feedback: 'Dat kan hem zelf problemen geven.' },
          ],
          why: 'Schrijf op wat er gebeurde, met datum. Bewaar berichten en de vacature. Meld het via discriminatie.nl. Melden helpt, ook voor anderen.',
        },
        // ⚖️ check: Bijvoorbeeld veiligheid of hygiëne ⚖️.
        {
          kind: 'whatdo',
          id: 'r.l.rechten.1.wd2',
          situation: 'Esra draagt een hoofddoek. Haar teamleider zegt: "Hier geen hoofddoek." Er is geen reden van veiligheid of hygiëne. Wat kan Esra het beste doen?',
          options: [
            { id: 'a', text: 'Ze vraagt waarom, en ze vraagt advies.', best: true, feedback: 'Goed. Dan weet ze wat haar rechten zijn.' },
            { id: 'b', text: 'Ze doet hem af, en ze zegt er niets van.', best: false, feedback: 'Begrijpelijk. Maar het kan discriminatie zijn.' },
            { id: 'c', text: 'Ze neemt meteen ontslag.', best: false, feedback: 'Dan verliest ze misschien rechten. Ze kan beter eerst advies vragen.' },
          ],
          why: 'Een regel over kleding moet een goede reden hebben. Bijvoorbeeld veiligheid of hygiëne. Zonder goede reden kan het discriminatie zijn. Het College voor de Rechten van de Mens kan daar gratis een oordeel over geven.',
        },
        {
          kind: 'whoask',
          id: 'r.l.rechten.1.wa1',
          question: 'Je denkt dat een bedrijf je niet nam om je naam. Wie geeft gratis advies over je rechten?',
          options: [
            { id: 'a', who: 'uwv', best: false, feedback: 'UWV gaat over uitkeringen, niet over discriminatie.' },
            { id: 'b', who: 'juridischloket', best: true, feedback: 'Goed. Het Juridisch Loket geeft gratis advies.' },
            { id: 'c', who: 'bedrijfsarts', best: false, feedback: 'De bedrijfsarts gaat over je gezondheid op het werk.' },
          ],
          why: 'Het Juridisch Loket helpt gratis. Melden kan ook bij discriminatie.nl.',
        },
        { kind: 'model', id: 'r.l.rechten.1.mo1', context: 'Je vindt dat ze je anders behandelen dan anderen.', nl: 'Ik heb het gevoel dat ik anders behandeld word. Kunnen we praten?' },
      ],
    },
    {
      // Les 9.2 · Grensoverschrijdend gedrag
      id: 'r.l.rechten.2',
      title: 'Grensoverschrijdend gedrag',
      goal: 'Je herkent gedrag dat over je grens gaat, en je zegt stop. Je weet wie je kan helpen.',
      remember: 'Het gaat om hoe het voor jou voelt, niet om de grap.',
      // Wie kan je helpen: de vertrouwenspersoon, als je bedrijf die heeft · je leidinggevende of
      //   HR · de Nederlandse Arbeidsinspectie · bij aanranding of verkrachting: de politie of het
      //   Centrum Seksueel Geweld (0800-0188 ⚖️).
      // ⚖️ check: bij aanranding of verkrachting: de politie of het Centrum Seksueel Geweld (0800-0188 ⚖️).
      help: ['vertrouwenspersoon', 'leidinggevende', 'hr', 'arbeidsinspectie', 'politie'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.rechten.2.sc1',
          picture: 'Dewi in een hotelgang. Een collega staat veel te dicht bij haar.',
          lines: [
            'Dewi werkt in een hotel.',
            'Een collega maakt steeds grapjes over haar lichaam.',
            'Soms legt hij zijn hand op haar rug.',
            'De anderen lachen erom.',
            'Dewi vindt het niet fijn.',
          ],
        },
        // ⚖️ check: Je werkgever moet je beschermen ⚖️.
        {
          kind: 'rule',
          id: 'r.l.rechten.2.ru1',
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
        {
          kind: 'truefalse',
          id: 'r.l.rechten.2.tf1',
          statement: 'Als hij het als grapje bedoelt, is het niet erg.',
          answer: false,
          why: 'Grensoverschrijdend gedrag is gedrag dat over jouw grens gaat. Bijvoorbeeld aanraken, seksuele grappen of staren. Het maakt niet uit hoe de ander het bedoelt. Het gaat om hoe het voor jou voelt.',
        },
        // ⚖️ check: Je werkgever moet je beschermen ⚖️.
        {
          kind: 'whatdo',
          id: 'r.l.rechten.2.wd1',
          situation: 'Dewi wil dat het stopt. Wat kan Dewi het beste doen?',
          options: [
            { id: 'a', text: 'Ze lacht mee. Dan houdt het vanzelf wel op.', best: false, feedback: 'Begrijpelijk. Maar vaak gaat het dan juist door.' },
            { id: 'b', text: 'Ze zegt duidelijk: "Stop. Ik wil dit niet."', best: true, feedback: 'Goed. Dan weet hij het, en anderen horen het ook.' },
            { id: 'c', text: 'Ze gaat hem uit de weg, en ze zegt niets.', best: false, feedback: 'Dat lost het niet op. Hulp vragen mag.' },
          ],
          why: 'Zeg duidelijk dat je het niet wilt, als je dat kunt. Schrijf op wat er gebeurde, wanneer, en wie het zag. Vertel het aan je leidinggevende of de vertrouwenspersoon. Je werkgever moet je beschermen.',
        },
        {
          kind: 'whatdo',
          id: 'r.l.rechten.2.wd2',
          situation: 'Kevin ziet dat anderen een collega steeds uitlachen en pesten. Wat kan Kevin het beste doen?',
          options: [
            { id: 'a', text: 'Hij lacht mee. Anders is hij straks zelf de volgende.', best: false, feedback: 'Begrijpelijk. Maar zo gaat het pesten door.' },
            { id: 'b', text: 'Hij doet alsof hij niets heeft gezien.', best: false, feedback: 'Dan voelt de collega zich alleen.' },
            { id: 'c', text: 'Hij vraagt de collega of het goed met hem gaat.', best: true, feedback: 'Goed. Dat helpt meer dan hij denkt.' },
          ],
          why: 'Pesten maakt mensen ziek. Vraag of het goed gaat. Bied aan om getuige te zijn. Samen sta je sterker.',
        },
        {
          kind: 'whoask',
          id: 'r.l.rechten.2.wa1',
          question: 'Een collega gaat steeds over je grens. Met wie op je werk praat je in vertrouwen?',
          options: [
            { id: 'a', who: 'vertrouwenspersoon', best: true, feedback: 'Goed. Een vertrouwenspersoon luistert, en helpt je verder.' },
            { id: 'b', who: 'collega', best: false, feedback: 'Een collega kan steunen. Maar die kan het niet oplossen.' },
            { id: 'c', who: 'uwv', best: false, feedback: 'UWV gaat over uitkeringen, niet over gedrag op je werk.' },
          ],
          why: 'Heeft je bedrijf een vertrouwenspersoon? Dan kun je daar in vertrouwen praten. Of ga naar je leidinggevende of HR.',
        },
        { kind: 'model', id: 'r.l.rechten.2.mo1', context: 'Iemand gaat over je grens.', nl: 'Stop. Ik wil dit niet.' },
      ],
    },
    {
      // Les 9.3 · Uitbuiting en oplichting
      id: 'r.l.rechten.3',
      title: 'Uitbuiting en oplichting',
      goal: 'Je herkent uitbuiting en een geldezel-trucje. Je weet waar je hulp krijgt.',
      remember: 'Je paspoort en je bankpas geef je nooit af.',
      // Wie kan je helpen: de Nederlandse Arbeidsinspectie (melden kan zonder je naam) · Meld
      //   Misdaad Anoniem: 0800-7000 ⚖️ · de politie · bij gevaar: 112 · FairWork · een vakbond ·
      //   het Juridisch Loket.
      // ⚖️ check: Meld Misdaad Anoniem: 0800-7000 ⚖️
      help: ['arbeidsinspectie', 'politie', 'vakbond', 'juridischloket'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.rechten.3.sc1',
          picture: 'Piotr in een volle kamer met stapelbedden. Een man houdt een paspoort vast.',
          lines: [
            'Piotr werkt via een bureau in een kas.',
            'Het bureau regelt ook zijn kamer.',
            'De baas houdt zijn paspoort, "voor de veiligheid".',
            'Piotr werkt 70 uur per week.',
            'Zijn loon is veel lager dan beloofd.',
          ],
        },
        {
          kind: 'rule',
          id: 'r.l.rechten.3.ru1',
          emoji: '🛂',
          title: 'Je paspoort en je bankpas geef je nooit af.',
          body: [
            'Je ID houd je altijd zelf. Een werkgever mag alleen een kopie maken.',
            'Je paspoort afpakken is een teken van uitbuiting.',
            'Geef je bankpas en codes nooit aan een ander.',
            'Uitbuiting kun je melden bij de Arbeidsinspectie, ook zonder je naam.',
          ],
          rule: 'geschreven',
          key: true,
        },
        {
          kind: 'truefalse',
          id: 'r.l.rechten.3.tf1',
          statement: 'Een werkgever mag je paspoort voor je bewaren.',
          answer: false,
          why: 'Je ID houd je altijd zelf. Een werkgever mag alleen een kopie maken. Je paspoort afpakken is een duidelijk teken van uitbuiting.',
        },
        {
          kind: 'whatdo',
          id: 'r.l.rechten.3.wd1',
          situation: 'Piotr is bang dat hij zijn werk en zijn kamer kwijtraakt. Wat kan Piotr het beste doen?',
          options: [
            { id: 'a', text: 'Hij zoekt hulp, ook al is hij bang.', best: true, feedback: 'Goed. Er zijn mensen die hem kunnen helpen.' },
            { id: 'b', text: 'Hij wacht af. Het wordt vast beter als hij hard werkt.', best: false, feedback: 'Begrijpelijk. Maar dit gaat meestal niet vanzelf over.' },
            { id: 'c', text: 'Hij vraagt de baas beleefd om iets meer loon.', best: false, feedback: 'Mag. Maar het paspoort en de uren blijven een probleem.' },
          ],
          why: 'Uitbuiting is niet normaal, en het mag niet. Iedereen die in Nederland werkt, kan hulp krijgen. Je kunt het melden bij de Arbeidsinspectie, ook zonder je naam. Ben je in gevaar? Bel 112.',
        },
        {
          kind: 'whatdo',
          id: 'r.l.rechten.3.wd2',
          situation: 'Jayden krijgt een bericht: "Mogen we je bankpas een week lenen? Je krijgt 500 euro." Wat kan Jayden het beste doen?',
          options: [
            { id: 'a', text: 'Hij doet het één keer. Het is snel verdiend.', best: false, feedback: 'Niet doen. Dit is een bekend trucje van criminelen.' },
            { id: 'b', text: 'Hij zegt nee, en hij blokkeert het nummer.', best: true, feedback: 'Goed. Zo voorkomt hij grote problemen.' },
            { id: 'c', text: 'Hij geeft alleen zijn rekeningnummer, niet zijn pas.', best: false, feedback: 'Ook dat kunnen criminelen misbruiken.' },
          ],
          why: 'Dit heet een geldezel zijn. Criminelen gebruiken jouw rekening voor hun geld. Dat is strafbaar, ook voor jou. Je kunt er grote schulden aan overhouden. Geef je pas en codes nooit aan een ander.',
        },
        {
          kind: 'whoask',
          id: 'r.l.rechten.3.wa1',
          question: 'Piotr wil uitbuiting melden, zonder zijn naam. Waar kan dat?',
          options: [
            { id: 'a', who: 'uitzendbureau', best: false, feedback: 'Het bureau is hier misschien juist het probleem.' },
            { id: 'b', who: 'arbeidsinspectie', best: true, feedback: 'Goed. De Arbeidsinspectie pakt uitbuiting aan.' },
            { id: 'c', who: 'hr', best: false, feedback: 'HR werkt voor het bedrijf. Zoek hulp van buiten.' },
          ],
          why: 'Melden kan bij de Nederlandse Arbeidsinspectie, ook zonder je naam. Ben je in gevaar? Bel 112.',
        },
        { kind: 'model', id: 'r.l.rechten.3.mo1', context: 'Je baas houdt je paspoort.', nl: 'Ik wil mijn paspoort terug. Het is van mij.' },
      ],
    },
    {
      // Les 9.4 · Ontslag en het einde van je baan
      id: 'r.l.rechten.4',
      title: 'Ontslag en het einde van je baan',
      goal: 'Je tekent niets over ontslag zonder advies. Je kent je basisrechten bij ontslag.',
      remember: 'Teken nooit iets over ontslag zonder advies.',
      // Wie kan je helpen: het Juridisch Loket · een vakbond (word lid vóór je een probleem hebt:
      //   soms is er een wachttijd ⚖️) · een rechtsbijstandverzekering, als je die hebt · UWV (WW,
      //   zie les 10.1).
      // ⚖️ check: een vakbond (word lid vóór je een probleem hebt: soms is er een wachttijd ⚖️)
      help: ['juridischloket', 'vakbond', 'uwv'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.rechten.4.sc1',
          picture: 'Sanne aan een tafel tegenover haar baas. Voor haar ligt een papier met een pen.',
          lines: [
            'Sanne werkt 2 jaar bij een webshop.',
            'Haar baas roept haar binnen.',
            'Hij zegt: "We moeten bezuinigen. Teken dit maar, dan regelen we het netjes."',
            'Het papier heet een vaststellingsovereenkomst.',
          ],
        },
        // ⚖️ check: Staat er iets verkeerd in? Dan kun je je WW kwijtraken ⚖️.
        // ⚖️ check: Binnen 14 dagen ⚖️ na het tekenen mag je je nog bedenken (art. 7:670b BW).
        // ⚖️ check: Je baas heeft meestal toestemming nodig van UWV of de rechter ⚖️.
        {
          kind: 'rule',
          id: 'r.l.rechten.4.ru1',
          emoji: '🖊️',
          title: 'Teken nooit iets over ontslag zonder advies.',
          body: [
            'Staat er iets verkeerd in? Dan kun je je WW kwijtraken.',
            'Om tijd vragen is normaal.',
            'Binnen 14 dagen na het tekenen mag je je nog bedenken.',
            'Je baas heeft meestal toestemming nodig van UWV of de rechter.',
          ],
          rule: 'geschreven',
          key: true,
        },
        {
          kind: 'whatdo',
          id: 'r.l.rechten.4.wd1',
          situation: 'De baas legt een pen neer. Wat kan Sanne het beste doen?',
          options: [
            { id: 'a', text: 'Ze tekent meteen. Dan krijgt ze vast een goede referentie.', best: false, feedback: 'Begrijpelijk. Maar ze weet nog niet wat ze opgeeft.' },
            { id: 'b', text: 'Ze vraagt tijd, en ze laat het papier eerst nakijken.', best: true, feedback: 'Goed. Daar heeft ze recht op.' },
            { id: 'c', text: 'Ze tekent, en ze schrijft erbij dat ze het niet zeker weet.', best: false, feedback: 'Dan heeft ze toch getekend. Dat erbij schrijven helpt niet.' },
          ],
          why: 'Een vaststellingsovereenkomst is een afspraak om je baan samen te stoppen. Staat er iets verkeerd in? Dan kun je je WW kwijtraken. Vraag eerst advies. Om tijd vragen is normaal.',
        },
        // ⚖️ check: Binnen 14 dagen ⚖️ na het tekenen mag je je nog bedenken.
        // ⚖️ check: Staat die termijn niet in het papier? Dan heb je 3 weken ⚖️ (art. 7:670b lid 2 BW).
        {
          kind: 'truefalse',
          id: 'r.l.rechten.4.tf1',
          statement: 'Heb je toch getekend? Dan kun je het nooit meer terugdraaien.',
          answer: false,
          why: 'Binnen 14 dagen na het tekenen mag je je nog bedenken. Doe dat op papier of per mail. Staat die termijn niet in het papier? Dan heb je 3 weken.',
        },
        // ⚖️ check: Je baas heeft meestal toestemming nodig van UWV of de rechter ⚖️.
        // ⚖️ check: Bij ontslag krijg je vaak geld mee: de transitievergoeding ⚖️.
        {
          kind: 'truefalse',
          id: 'r.l.rechten.4.tf2',
          statement: 'Je baas mag je zomaar ontslaan, als hij dat wil.',
          answer: false,
          why: 'Je baas heeft meestal toestemming nodig van UWV of de rechter. Of jouw instemming. Bij ontslag krijg je vaak geld mee: de transitievergoeding. In de proeftijd en bij een tijdelijk contract gelden andere regels. Op staande voet ontslagen? Vraag meteen advies.',
        },
        {
          kind: 'whoask',
          id: 'r.l.rechten.4.wa1',
          question: 'Je baas wil dat je een papier over ontslag tekent. Wie kijkt het gratis na?',
          options: [
            { id: 'a', who: 'hr', best: false, feedback: 'HR werkt voor je werkgever. Vraag advies van buiten.' },
            { id: 'b', who: 'uwv', best: false, feedback: 'UWV gaat over je WW. Het papier laat je ergens anders nakijken.' },
            { id: 'c', who: 'juridischloket', best: true, feedback: 'Goed. Het Juridisch Loket kijkt gratis mee.' },
          ],
          why: 'Laat een papier over ontslag nakijken door het Juridisch Loket of een vakbond.',
        },
        { kind: 'model', id: 'r.l.rechten.4.mo1', context: 'Je baas wil dat je meteen tekent voor ontslag.', nl: 'Ik teken nu niet. Ik wil het eerst laten nakijken.' },
      ],
    },
  ],
};
