import type { RuleUnit } from '../types';

/**
 * Unit 5 · Werktijden, pauze en vrij (les 5.1–5.4).
 * Converted from docs/werkregels-curriculum.md; edit the curriculum first, then this file.
 * `// ⚖️ check:` marks a fact the expert must check (docs/werkregels-bronnen.md). The marker is
 * never shown or read aloud. `// Redactie:` notes are for the makers only.
 */
export const tijdUnit: RuleUnit = {
  id: 'r.tijd',
  title: 'Werktijden, pauze en vrij',
  emoji: '⏰',
  color: '#c2412d',
  lessons: [
    {
      // Les 5.1 · Je rooster en je werktijden
      id: 'r.l.tijd.1',
      title: 'Je rooster en je werktijden',
      goal: 'Je kent de grenzen voor werktijden. Ook voor jongeren. Je weet dat het rooster op tijd moet komen.',
      // ⚖️ check: Hooguit 12 uur ⚖️ per dienst.
      remember: 'Hooguit 12 uur per dienst. Ben je jonger dan 18? Dan minder.',
      // Wie kan je helpen: een vakbond · de ondernemingsraad, als je bedrijf die heeft · de
      //   Nederlandse Arbeidsinspectie (melden kan zonder je naam).
      help: ['vakbond', 'arbeidsinspectie'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.tijd.1.sc1',
          picture: 'Mohammed in een magazijn voor een rooster aan de muur. Eén vakje is rood.',
          lines: [
            'Mohammed werkt in een magazijn.',
            'Het rooster hangt aan de muur en staat in een app.',
            'Op dinsdag staat hij ineens 13 uur ingeroosterd.',
            'Hij twijfelt of dat mag.',
          ],
        },
        // ⚖️ check: Hooguit 12 uur ⚖️ per dienst.
        // ⚖️ check: De wet zegt: hooguit 12 uur ⚖️ per dienst.
        // ⚖️ check: En hooguit 60 uur ⚖️ in één week.
        // ⚖️ check: Ben je 16 of 17? Dan hooguit 9 uur per dienst ⚖️.
        // ⚖️ check: Je werkgever laat je werktijden meestal 4 weken ⚖️ van tevoren weten.
        {
          kind: 'rule',
          id: 'r.l.tijd.1.ru1',
          emoji: '🗓️',
          title: 'Hooguit 12 uur per dienst. Ben je jonger dan 18? Dan minder.',
          body: [
            'De wet zegt: hooguit 12 uur per dienst.',
            'En hooguit 60 uur in één week.',
            'Ben je 16 of 17? Dan hooguit 9 uur per dienst.',
            'Je werkgever laat je werktijden meestal 4 weken van tevoren weten.',
          ],
          rule: 'geschreven',
        },
        // ⚖️ check: De wet zegt: hooguit 12 uur ⚖️ per dienst.
        // ⚖️ check: En hooguit 60 uur ⚖️ in één week.
        // ⚖️ check: Over een langere tijd moet het gemiddeld minder zijn ⚖️.
        {
          kind: 'truefalse',
          id: 'r.l.tijd.1.tf1',
          statement: 'Een dienst van 13 uur mag meestal niet.',
          answer: true,
          why: 'De wet zegt: hooguit 12 uur per dienst. En hooguit 60 uur in één week. Over een langere tijd moet het gemiddeld minder zijn. Voor nachtdiensten en jongeren zijn de regels strenger.',
        },
        // ⚖️ check: Ben je 16 of 17 ⚖️?
        // ⚖️ check: Dan mag je niet werken tussen 23.00 en 6.00 uur ⚖️.
        // ⚖️ check: Je werkt hooguit 9 uur per dienst ⚖️.
        // ⚖️ check: En hooguit 45 uur per week ⚖️.
        // ⚖️ check: Je schooltijd telt daarbij mee ⚖️.
        {
          kind: 'truefalse',
          id: 'r.l.tijd.1.tf2',
          statement: 'Jayden is 17. Hij mag in het restaurant werken tot middernacht.',
          answer: false,
          why: 'Ben je 16 of 17? Dan mag je niet werken tussen 23.00 en 6.00 uur. Je werkt hooguit 9 uur per dienst. En hooguit 45 uur per week. Je schooltijd telt daarbij mee.',
        },
        // ⚖️ check: Meestal 4 weken ⚖️ van tevoren, tenzij de cao iets anders zegt.
        {
          kind: 'whatdo',
          id: 'r.l.tijd.1.wd1',
          situation: 'Het rooster verandert steeds een dag van tevoren. Mohammed kan zo niets plannen.',
          options: [
            { id: 'a', text: 'Hij past zich aan. Zo gaat het nu eenmaal.', best: false, feedback: 'Begrijpelijk. Maar er zijn regels voor het rooster.' },
            { id: 'b', text: 'Hij vraagt wanneer het rooster vast hoort te staan.', best: true, feedback: 'Goed. Rustig vragen is de eerste stap.' },
            { id: 'c', text: 'Hij komt alleen nog op de dagen die hem uitkomen.', best: false, feedback: 'Dan breekt hij zelf afspraken. Praten werkt beter.' },
          ],
          why: 'Je werkgever moet je werktijden op tijd laten weten. Meestal 4 weken van tevoren, tenzij de cao iets anders zegt. Een wijziging moet een goede reden hebben.',
        },
        {
          kind: 'whoask',
          id: 'r.l.tijd.1.wa1',
          question: 'Je moet steeds veel te lange diensten draaien. Waar meld je dat, zonder je naam?',
          options: [
            { id: 'a', who: 'uwv', best: false, feedback: 'UWV gaat over uitkeringen, niet over je rooster.' },
            { id: 'b', who: 'arbeidsinspectie', best: true, feedback: 'Goed. De Arbeidsinspectie controleert de werktijden.' },
            { id: 'c', who: 'politie', best: false, feedback: 'De politie is voor misdaad en gevaar.' },
          ],
          why: 'De Nederlandse Arbeidsinspectie controleert of bedrijven zich aan de werktijden houden.',
        },
        { kind: 'model', id: 'r.l.tijd.1.mo1', context: 'Je rooster heeft een te lange dienst.', nl: '13 uur is te lang voor mij. Mag dat volgens de regels?' },
      ],
    },
    {
      // Les 5.2 · Pauze
      id: 'r.l.tijd.2',
      title: 'Pauze',
      goal: 'Je weet wanneer je recht hebt op pauze, en hoe lang.',
      // ⚖️ check: Meer dan 5,5 uur ⚖️ werken?
      remember: 'Meer dan 5,5 uur werken? Dan heb je recht op pauze.',
      // Wie kan je helpen: een vakbond · de Nederlandse Arbeidsinspectie.
      help: ['vakbond', 'arbeidsinspectie'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.tijd.2.sc1',
          picture: 'Sanne achter de kassa van een drukke supermarkt. Ze kijkt naar de klok.',
          lines: [
            'Sanne werkt van 9 tot 17 uur in de supermarkt.',
            'Het is druk.',
            'Haar leidinggevende zegt: "Pauze doen we vandaag maar niet."',
            'Sanne heeft honger en is moe.',
          ],
        },
        // ⚖️ check: Meer dan 5,5 uur ⚖️ werken?
        // ⚖️ check: Werk je meer dan 5,5 uur ⚖️?
        // ⚖️ check: Dan krijg je minstens 30 minuten ⚖️ pauze.
        // ⚖️ check: Werk je meer dan 10 uur ⚖️?
        // ⚖️ check: Dan minstens 45 minuten ⚖️.
        // ⚖️ check: Ben je 16 of 17? Dan krijg je al pauze na 4,5 uur ⚖️.
        {
          kind: 'rule',
          id: 'r.l.tijd.2.ru1',
          emoji: '☕',
          title: 'Meer dan 5,5 uur werken? Dan heb je recht op pauze.',
          body: [
            'Werk je meer dan 5,5 uur? Dan krijg je minstens 30 minuten pauze.',
            'Werk je meer dan 10 uur? Dan minstens 45 minuten.',
            'Ben je 16 of 17? Dan krijg je al pauze na 4,5 uur.',
            'Pauze is de wet, geen gunst.',
          ],
          rule: 'geschreven',
        },
        // ⚖️ check: Werk je meer dan 5,5 uur ⚖️?
        // ⚖️ check: Dan krijg je minstens 30 minuten ⚖️ pauze.
        // ⚖️ check: Dat mag ook 2 keer 15 minuten ⚖️.
        // ⚖️ check: Werk je meer dan 10 uur ⚖️?
        // ⚖️ check: Dan minstens 45 minuten ⚖️.
        // ⚖️ check: Ben je 16 of 17? Dan krijg je al pauze na 4,5 uur ⚖️.
        {
          kind: 'truefalse',
          id: 'r.l.tijd.2.tf1',
          statement: 'Werk je meer dan 5,5 uur? Dan heb je recht op pauze.',
          answer: true,
          why: 'Werk je meer dan 5,5 uur? Dan krijg je minstens 30 minuten pauze. Dat mag ook 2 keer 15 minuten. Werk je meer dan 10 uur? Dan minstens 45 minuten. Ben je 16 of 17? Dan krijg je al pauze na 4,5 uur.',
        },
        {
          kind: 'whatdo',
          id: 'r.l.tijd.2.wd1',
          situation: 'De leidinggevende wil vandaag geen pauze.',
          options: [
            { id: 'a', text: 'Je vraagt rustig wanneer je vandaag wel pauze kunt nemen.', best: true, feedback: 'Goed. Zo zoek je samen een moment.' },
            { id: 'b', text: 'Je slaat je pauze over. Het is nu eenmaal druk.', best: false, feedback: 'Begrijpelijk. Maar pauze is je recht, ook als het druk is.' },
            { id: 'c', text: 'Je neemt meteen pauze, ook al staat er een rij.', best: false, feedback: 'Je hebt recht op pauze. Maar overleg eerst even.' },
          ],
          why: 'Pauze is de wet, geen gunst. Rust helpt je ook om veilig te werken. Zoek samen een moment, ook als het druk is.',
        },
        // ⚖️ check: Pauze is vaak onbetaald. Dat hangt af van je contract of cao ⚖️.
        {
          kind: 'truefalse',
          id: 'r.l.tijd.2.tf2',
          statement: 'Je pauze wordt altijd betaald.',
          answer: false,
          why: 'Pauze is vaak onbetaald. Dat hangt af van je contract of cao. In je pauze hoef je niet te werken. Je mag dan echt stoppen.',
        },
        {
          kind: 'whoask',
          id: 'r.l.tijd.2.wa1',
          question: 'Je krijgt bijna nooit pauze. Praten helpt niet. Wie helpt je met je rechten?',
          options: [
            { id: 'a', who: 'collega', best: false, feedback: 'Samen sta je sterker. Maar je collega kan het niet regelen.' },
            { id: 'b', who: 'huisarts', best: false, feedback: 'De huisarts gaat over je gezondheid, niet over je rechten.' },
            { id: 'c', who: 'vakbond', best: true, feedback: 'Goed. Een vakbond helpt je met je rechten op het werk.' },
          ],
          why: 'Een vakbond helpt bij je rechten. Melden kan ook bij de Nederlandse Arbeidsinspectie.',
        },
        { kind: 'model', id: 'r.l.tijd.2.mo1', context: 'Je hebt nog geen pauze gehad.', nl: 'Ik heb nog geen pauze gehad. Wanneer kan ik even weg?' },
      ],
    },
    {
      // Les 5.3 · Overwerk en nee zeggen
      id: 'r.l.tijd.3',
      title: 'Overwerk en nee zeggen',
      goal: 'Je kunt nee zeggen tegen extra uren, en je houdt je overuren bij.',
      remember: 'Overwerk? Schrijf de uren op, met datum en tijd.',
      // Wie kan je helpen: je cao · een vakbond · de loonadministratie.
      help: ['vakbond', 'hr'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.tijd.3.sc1',
          who: 'henk',
          picture: 'Kevin bij een lopende band. Leidinggevende Henk tikt hem op de schouder. De klok zegt 17.00.',
          lines: [
            'Kevin werkt in een fabriek.',
            'Het is 5 uur en zijn dienst is klaar.',
            'Zijn leidinggevende Henk vraagt: "Kun je 2 uur langer blijven?"',
            'Kevin moet vanavond op zijn broertje passen.',
          ],
        },
        // ⚖️ check: Het hangt af van je contract en je cao ⚖️.
        {
          kind: 'rule',
          id: 'r.l.tijd.3.ru1',
          emoji: '🕔',
          title: 'Overwerk? Schrijf de uren op, met datum en tijd.',
          body: [
            'Je moet niet altijd overwerken. Het hangt af van je contract en je cao.',
            'Schrijf je extra uren op, met datum en tijd.',
            'Check daarna je loonstrook.',
            'Krijg je extra uren contant, buiten je loonstrook om? Dat is zwart werk.',
          ],
          rule: 'geschreven',
        },
        {
          kind: 'whatdo',
          id: 'r.l.tijd.3.wd1',
          situation: 'Kevin kan vandaag niet langer blijven.',
          options: [
            { id: 'a', text: 'Hij zegt ja, en hij gaat toch om 5 uur weg.', best: false, feedback: 'Dan rekent Henk op iemand die er niet is.' },
            { id: 'b', text: 'Hij zegt: "Vandaag niet. Morgen kan ik wel."', best: true, feedback: 'Goed. Duidelijk, en hij biedt iets anders aan.' },
            { id: 'c', text: 'Hij zegt "misschien", en hij belt zijn moeder.', best: false, feedback: 'Dan weet Henk niet waar hij aan toe is.' },
          ],
          why: 'Een duidelijk nee wordt hier gewaardeerd. Ja zeggen en het niet doen, kost veel vertrouwen. Bied een andere keer aan als dat kan.',
        },
        // ⚖️ check: Het hangt af van je contract en je cao ⚖️.
        // ⚖️ check: Bij een noodgeval moet je soms wel ⚖️.
        {
          kind: 'truefalse',
          id: 'r.l.tijd.3.tf1',
          statement: 'Je moet altijd overwerken als je baas het vraagt.',
          answer: false,
          why: 'Het hangt af van je contract en je cao. Bij een noodgeval moet je soms wel. Maar jouw situatie telt ook mee. Bijvoorbeeld zorg voor een kind.',
        },
        // ⚖️ check: Loon contant, buiten de loonstrook om, is zwart werk. Dan bouw je bijvoorbeeld
        //   geen WW en pensioen op ⚖️. (Niet: "loon zonder loonstrook is zwart werk": een loonstrook
        //   hoeft alleen bij de eerste betaling en als het bedrag verandert, zie loon.ts.)
        {
          kind: 'whatdo',
          id: 'r.l.tijd.3.wd2',
          situation: 'Kevin werkt deze week voor de derde keer over.',
          options: [
            { id: 'a', text: 'Hij vertrouwt erop dat Henk het zelf bijhoudt.', best: false, feedback: 'Henk vergeet misschien iets. Je eigen lijst is zekerder.' },
            { id: 'b', text: 'Hij vraagt Henk om de extra uren contant te betalen.', best: false, feedback: 'Contant en buiten de loonstrook om is zwart werk. Dan mis je rechten.' },
            { id: 'c', text: 'Hij schrijft de extra uren op, met datum en tijd.', best: true, feedback: 'Goed. Daarna checkt hij zijn loonstrook.' },
          ],
          why: 'Je eigen lijst helpt als er iets misgaat. Check daarna je loonstrook. Krijg je loon contant, buiten je loonstrook om? Dan is het zwart werk. Dan bouw je bijvoorbeeld geen WW en pensioen op.',
        },
        {
          kind: 'whoask',
          id: 'r.l.tijd.3.wa1',
          question: 'Je weet niet wat je cao zegt over overwerk. Wie kan het uitleggen?',
          options: [
            { id: 'a', who: 'vakbond', best: true, feedback: "Goed. Een vakbond kent de cao's goed." },
            { id: 'b', who: 'collega', best: false, feedback: 'Een collega weet het misschien. Maar niet altijd precies.' },
            { id: 'c', who: 'bedrijfsarts', best: false, feedback: 'De bedrijfsarts gaat over je gezondheid, niet over je cao.' },
          ],
          why: 'Een vakbond kent de cao. Je overuren check je bij de loonadministratie.',
        },
        { kind: 'model', id: 'r.l.tijd.3.mo1', context: 'Je kunt vandaag niet langer blijven.', nl: 'Vandaag lukt het niet. Morgen kan ik wel een uur langer.' },
      ],
    },
    {
      // Les 5.4 · Vrij vragen en verlof
      id: 'r.l.tijd.4',
      title: 'Vrij vragen en verlof',
      goal: 'Je vraagt vrij op tijd en op papier. Je weet wat je doet bij een noodgeval.',
      remember: 'Vraag vrij op tijd, en altijd op papier of in de app.',
      // Wie kan je helpen: je leidinggevende · je cao · een vakbond · rijksoverheid.nl (verlof).
      help: ['leidinggevende', 'vakbond'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.tijd.4.sc1',
          picture: 'Esra achter een computer. Op het scherm een kalender en een vliegtuigje.',
          lines: [
            'Esra wil in de zomer 3 weken naar haar familie.',
            'Het is nu februari.',
            'Haar collega zegt: "Vraag het pas in juni. Dan weet je het zeker."',
            'Esra twijfelt.',
          ],
        },
        // ⚖️ check: Zegt hij nee? Dat moet hij binnen 2 weken ⚖️ op papier laten weten.
        // ⚖️ check: Zegt je werkgever binnen 2 weken niets? Dan is je vakantie goedgekeurd ⚖️
        //   (art. 7:638 lid 3 BW).
        {
          kind: 'rule',
          id: 'r.l.tijd.4.ru1',
          emoji: '🌴',
          title: 'Vraag vrij op tijd, en altijd op papier of in de app.',
          body: [
            'Vraag vrij op tijd en op papier.',
            'Je werkgever moet in principe ja zeggen.',
            'Zegt hij nee? Dat moet hij binnen 2 weken op papier laten weten.',
            'Zegt je werkgever binnen 2 weken niets? Dan is je vakantie goedgekeurd.',
            'Bij een noodgeval mag je meteen weg. Laat het wel meteen weten.',
          ],
          rule: 'geschreven',
        },
        // ⚖️ check: Alleen bij een heel goede reden van het bedrijf mag hij nee zeggen ⚖️.
        // ⚖️ check: Dat moet hij binnen 2 weken ⚖️ op papier laten weten.
        {
          kind: 'whatdo',
          id: 'r.l.tijd.4.wd1',
          situation: 'Wanneer vraagt Esra haar vakantie aan?',
          options: [
            { id: 'a', text: 'Ze wacht tot juni, zoals haar collega zegt.', best: false, feedback: 'Dan hebben anderen de weken misschien al.' },
            { id: 'b', text: 'Ze boekt de reis alvast, en ze meldt het later.', best: false, feedback: 'Riskant. De baas moet het eerst goedvinden.' },
            { id: 'c', text: 'Ze vraagt het nu al, per mail of in de app.', best: true, feedback: 'Goed. Vroeg en op papier geeft de beste kans.' },
          ],
          why: 'Vraag vrij op tijd en op papier. Je werkgever moet in principe ja zeggen. Alleen bij een heel goede reden van het bedrijf mag hij nee zeggen. Dat moet hij binnen 2 weken op papier laten weten. Zegt je werkgever binnen 2 weken niets? Dan is je vakantie goedgekeurd.',
        },
        // ⚖️ check: Je krijgt minstens 4 keer ⚖️ zoveel vrije dagen als je dagen per week werkt.
        // ⚖️ check: Vrije dagen van de wet vervallen meestal op 1 juli van het jaar erna ⚖️ (6 maanden
        //   na het jaar waarin je ze opbouwde, art. 7:640a BW; was eerder fout: "na een half jaar").
        {
          kind: 'truefalse',
          id: 'r.l.tijd.4.tf1',
          statement: 'Werk je 5 dagen per week? Dan heb je minstens 20 vrije dagen per jaar.',
          answer: true,
          why: 'Je krijgt minstens 4 keer zoveel vrije dagen als je dagen per week werkt. Je cao geeft vaak meer. Vrije dagen van de wet vervallen meestal op 1 juli van het jaar erna. Wil je vrij voor een feestdag, zoals het Suikerfeest of Kerst? Vraag die dag op tijd aan.',
        },
        // ⚖️ check: Bij een noodgeval mag je meteen weg. Dat heet calamiteitenverlof ⚖️.
        // ⚖️ check: Je krijgt dan meestal gewoon loon ⚖️.
        // ⚖️ check: Vraag naar zorgverlof ⚖️.
        {
          kind: 'whatdo',
          id: 'r.l.tijd.4.wd2',
          situation: 'Piotr krijgt een telefoontje. Zijn zoon is gevallen op school en moet naar het ziekenhuis.',
          options: [
            { id: 'a', text: 'Hij zegt het meteen tegen zijn leidinggevende, en gaat.', best: true, feedback: 'Goed. Zo weet het werk wat er aan de hand is.' },
            { id: 'b', text: 'Hij werkt eerst zijn dienst af, en gaat dan.', best: false, feedback: 'Dat hoeft niet. Bij een noodgeval mag je weg.' },
            { id: 'c', text: 'Hij gaat meteen weg, en hij belt morgen zijn baas.', best: false, feedback: 'Gaan is goed. Maar laat het meteen weten.' },
          ],
          why: 'Bij een noodgeval mag je meteen weg. Dat heet calamiteitenverlof. Je krijgt dan meestal gewoon loon. Moet je langer voor iemand zorgen? Vraag naar zorgverlof.',
        },
        {
          kind: 'whoask',
          id: 'r.l.tijd.4.wa1',
          question: 'Je wilt in de zomer 3 weken vrij. Bij wie vraag je het aan?',
          options: [
            { id: 'a', who: 'collega', best: false, feedback: 'Je collega kan je vakantie niet goedkeuren.' },
            { id: 'b', who: 'vakbond', best: false, feedback: 'Een vakbond helpt bij problemen. Vrij vragen doe je op je werk.' },
            { id: 'c', who: 'leidinggevende', best: true, feedback: 'Goed. Je leidinggevende keurt je vakantie goed.' },
          ],
          why: 'Vrij vraag je aan je leidinggevende, per mail of in de app.',
        },
        { kind: 'model', id: 'r.l.tijd.4.mo1', context: 'Je vraagt vakantie aan.', nl: 'Ik wil graag vrij van 1 tot en met 21 juli. Kan dat?' },
      ],
    },
  ],
};
