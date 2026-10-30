import type { BeUnit } from '../types';

/**
 * Sector schoonmaak (België) · Werken in de schoonmaak: de Belgische versie van de sectorunit
 * r.clean (src/content/regels/units/sector.ts, `cleanUnit`). Grotendeels dezelfde regels; anders
 * zijn de labels: arbeidsarts, preventieadviseur, Toezicht op het Welzijn op het Werk. Vlaamse
 * woorden: kuisen, javel (chloor), ploegbaas.
 *
 * `// ⚖️ check:` = een feit dat de deskundige nakijkt, met de bron. Opgezocht op 30 okt 2026:
 * werk.belgie.be was in deze sessie niet te openen (netwerk geblokkeerd, 30 okt 2026).
 */
export const be: BeUnit = {
  unit: {
    id: 'r.be.clean',
    title: 'Werken in de schoonmaak',
    emoji: '🧽',
    color: '#3f93b8',
    lessons: [
      {
        // Les S.1 · Schoonmaakmiddelen: nooit mengen
        id: 'r.be.l.clean.1',
        title: 'Schoonmaakmiddelen: nooit mengen',
        goal: 'Je mengt nooit middelen en je leest het etiket. Je weet wat je doet als je alleen werkt.',
        remember: 'Meng nooit schoonmaakmiddelen. Lees eerst het etiket.',
        // Wie kan je helpen: je leidinggevende of ploegbaas · de preventieadviseur · Toezicht op het
        //   Welzijn op het Werk · bij een ongeval: 112.
        help: ['leidinggevende', 'vakbond'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.clean.1.sc1',
            picture: 'Fatima in een kantoortoilet met twee flessen in haar handen.',
            lines: [
              "Fatima kuist 's avonds een kantoor.",
              'Ze werkt alleen.',
              'Een wc is heel vuil.',
              'Ze denkt: "Met twee middelen samen gaat het sneller."',
              'Ze pakt de javel en een ontkalker.',
            ],
          },
          // ⚖️ check: de werkgever moet uitleg geven over gevaarlijke middelen en gratis PBM geven (Codex welzijn op het werk, boek VI, titel 1 chemische agentia; boek IX, titel 2 PBM; werk.belgie.be; niet geopend)
          // ⚖️ check: bij alleenwerk moet de werkgever de risico's bekijken en zorgen dat je hulp kunt krijgen (Welzijnswet art. 5, risicoanalyse; Codex boek I; werk.belgie.be; niet geopend)
          {
            kind: 'rule',
            id: 'r.be.l.clean.1.ru1',
            emoji: '🧪',
            title: 'Meng nooit schoonmaakmiddelen. Lees eerst het etiket.',
            body: [
              'Meng nooit schoonmaakmiddelen. Dan kan er giftig gas ontstaan.',
              'Lees eerst het etiket.',
              'Je werkgever geeft uitleg en beschermende spullen.',
              'Werk je alleen? Spreek af hoe je hulp vraagt.',
            ],
            rule: 'geschreven',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.clean.1.wd1',
            situation: 'Fatima wil de wc snel proper krijgen. Wat kan Fatima het beste doen?',
            options: [
              { id: 'a', text: 'Ze giet de twee middelen samen. Dan werkt het sterker.', best: false, feedback: 'Niet doen. Dan kan er giftig gas ontstaan.' },
              { id: 'b', text: 'Ze gebruikt één middel, en spoelt goed na.', best: true, feedback: 'Goed. Eén middel tegelijk is veilig.' },
              { id: 'c', text: 'Ze mengt ze, maar ze zet eerst het raam open.', best: false, feedback: 'Een open raam is niet genoeg. Het gas is gevaarlijk.' },
            ],
            why: 'Meng nooit schoonmaakmiddelen. Javel met een ander middel kan giftig gas geven. Dat is slecht voor je longen. Gebruik één middel tegelijk. Spoel goed na voor je een ander middel pakt.',
          },
          // ⚖️ check: op het etiket staan gevarenpictogrammen met een rode rand (CLP-verordening (EG) 1272/2008); de werkgever geeft uitleg en gratis PBM (Codex boek VI en IX)
          {
            kind: 'truefalse',
            id: 'r.be.l.clean.1.tf1',
            statement: 'Op het etiket staat hoe je een middel veilig gebruikt.',
            answer: true,
            why: 'Op het etiket staan tekeningen met een rode rand. Die tonen gevaar. Er staat ook of je handschoenen of een bril nodig hebt. Je werkgever moet uitleg geven. En beschermende spullen, gratis.',
          },
          // ⚖️ check: werk je alleen, dan moet je werkgever zorgen dat je hulp kunt krijgen (Welzijnswet art. 5; risicoanalyse alleenwerk; werk.belgie.be; niet geopend)
          {
            kind: 'whatdo',
            id: 'r.be.l.clean.1.wd2',
            situation: "Fatima werkt alleen in het gebouw. Het is 10 uur 's avonds. Wat kan Fatima het beste doen?",
            options: [
              { id: 'a', text: 'Ze spreekt met haar ploegbaas af hoe ze hulp vraagt.', best: true, feedback: 'Goed. Dan weet iemand waar ze is.' },
              { id: 'b', text: 'Ze werkt gewoon door. Er gebeurt toch bijna nooit iets.', best: false, feedback: 'Dat is logisch. Maar alleen loopt ze meer gevaar.' },
              { id: 'c', text: 'Ze neemt haar zoon mee, voor de veiligheid.', best: false, feedback: 'Dat snap ik. Maar haar werkgever moet dit regelen.' },
            ],
            why: 'Werk je alleen? Dan moet je werkgever zorgen dat je hulp kunt krijgen. Spreek af wie je belt als er iets is. Zorg dat je gsm opgeladen is.',
          },
          {
            kind: 'whoask',
            id: 'r.be.l.clean.1.wa1',
            question: 'Je krijgt geen handschoenen voor een sterk middel. Wie vraag je het eerst?',
            options: [
              { id: 'a', who: 'collega', best: false, feedback: 'Een collega heeft misschien een paar. Maar je werk moet ze geven.' },
              { id: 'b', who: 'leidinggevende', best: true, feedback: 'Goed. Je leidinggevende moet zorgen voor gratis handschoenen.' },
              { id: 'c', who: 'huisarts', best: false, feedback: 'De huisarts helpt als je klachten hebt. Voorkom het liever.' },
            ],
            why: 'Vraag beschermende spullen aan je leidinggevende of ploegbaas. Je krijgt ze gratis. Helpt dat niet? Vraag het de vakbond.',
          },
          { kind: 'model', id: 'r.be.l.clean.1.mo1', context: 'Je werkt vanavond alleen.', nl: 'Ik werk vanavond alleen. Wie kan ik bellen als er iets is?' },
        ],
      },
      {
        // Les S.2 · Je lichaam sparen
        id: 'r.be.l.clean.2',
        title: 'Je lichaam sparen',
        goal: 'Je werkt zo dat je rug en armen gezond blijven. Je meldt klachten op tijd.',
        remember: 'Pijn door je werk? Wacht niet. Zeg het op tijd.',
        // Wie kan je helpen: je leidinggevende · de arbeidsarts · de preventieadviseur.
        help: ['leidinggevende', 'arbeidsarts'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.clean.2.sc1',
            picture: 'Piotr met een mop in een lange schoolgang. Hij houdt een hand op zijn rug.',
            lines: [
              'Piotr kuist elke dag een school.',
              'Hij dweilt veel gangen.',
              'Zijn steel is kort, dus hij werkt gebukt.',
              "'s Avonds doet zijn rug pijn.",
            ],
          },
          // ⚖️ check: de werkgever zorgt dat het werk niet te zwaar is voor je lichaam (Codex welzijn op het werk, boek VIII, titel 1 en 3: ergonomie en manueel hanteren van lasten; werk.belgie.be; niet geopend)
          // ⚖️ check: je mag zelf een spontane raadpleging bij de arbeidsarts vragen (Codex boek I, titel 4, art. I.4-37; werk.belgie.be; niet geopend)
          {
            kind: 'rule',
            id: 'r.be.l.clean.2.ru1',
            emoji: '🧹',
            title: 'Pijn door je werk? Wacht niet. Zeg het op tijd.',
            body: [
              'Je werkgever zorgt dat je werk niet te zwaar is.',
              'Goede spullen helpen, zoals een lange steel of een kar.',
              'Til dicht bij je lichaam, met gebogen knieën.',
              'Pijn? Praat erover, of ga naar de arbeidsarts.',
            ],
            rule: 'geschreven',
          },
          // ⚖️ check: de werkgever moet de belasting voor je lichaam beperken, met aangepaste hulpmiddelen (Codex boek VIII)
          {
            kind: 'whatdo',
            id: 'r.be.l.clean.2.wd1',
            situation: 'Piotr heeft steeds last van zijn rug. Wat kan Piotr het beste doen?',
            options: [
              { id: 'a', text: 'Hij neemt elke dag een pijnstiller, en werkt door.', best: false, feedback: 'Dat snap ik. Maar zo lost hij het probleem niet op.' },
              { id: 'b', text: 'Hij werkt sneller, dan staat hij korter gebukt.', best: false, feedback: 'Haast maakt het vaak erger.' },
              { id: 'c', text: 'Hij vraagt een steel die op zijn lengte past.', best: true, feedback: 'Goed. Met de goede spullen werkt hij rechtop.' },
            ],
            why: 'Je werkgever moet zorgen dat je werk niet te zwaar is. Goede spullen helpen daarbij. Bijvoorbeeld een steel die je langer kunt maken. Of een kar, zodat je minder tilt.',
          },
          // ⚖️ check: je mag zelf een afspraak met de arbeidsarts vragen (spontane raadpleging, Codex boek I, titel 4)
          {
            kind: 'truefalse',
            id: 'r.be.l.clean.2.tf1',
            statement: 'Pijn hoort er gewoon bij in de schoonmaak.',
            answer: false,
            why: 'Pijn is een waarschuwing. Wacht niet tot het erger wordt. Praat erover met je leidinggevende. Je mag ook zelf een afspraak vragen bij de arbeidsarts.',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.clean.2.wd2',
            situation: 'Piotr moet een zware vuilniszak in een hoge container gooien. Wat kan Piotr het beste doen?',
            options: [
              { id: 'a', text: 'Hij tilt de zak in één keer met een ruk omhoog.', best: false, feedback: 'Dat is zwaar voor zijn rug. Zo kan hij zich bezeren.' },
              { id: 'b', text: 'Hij maakt de zak minder vol, of vraagt een collega.', best: true, feedback: 'Goed. Twee keer lopen is beter dan een pijnlijke rug.' },
              { id: 'c', text: 'Hij laat de zak gewoon naast de container staan.', best: false, feedback: 'Dan blijft het werk liggen voor iemand anders.' },
            ],
            why: 'Til dicht bij je lichaam, met je knieën gebogen. Draai niet met je rug terwijl je tilt. Te zwaar? Maak het lichter, of vraag hulp. Gebruik een kar als dat kan.',
          },
          {
            kind: 'whoask',
            id: 'r.be.l.clean.2.wa1',
            question: 'Je rug doet al weken pijn door je werk. Met wie praat je over je gezondheid op het werk?',
            options: [
              { id: 'a', who: 'arbeidsarts', best: true, feedback: 'Goed. De arbeidsarts weet veel van werk en klachten.' },
              { id: 'b', who: 'ziekenfonds', best: false, feedback: 'Het ziekenfonds betaalt als je ziek bent. Praat eerst op je werk.' },
              { id: 'c', who: 'vakbond', best: false, feedback: 'Een vakbond helpt bij je rechten. Voor je rug is er iemand anders.' },
            ],
            why: 'Je mag zelf een afspraak vragen bij de arbeidsarts. Je huisarts kan ook helpen.',
          },
          { kind: 'model', id: 'r.be.l.clean.2.mo1', context: 'Je spullen geven je pijn.', nl: 'Mijn steel is te kort. Ik krijg pijn in mijn rug. Is er een langere?' },
        ],
      },
    ],
  },
  zegHet: {
    'r.be.l.clean.1.mo1': [
      { text: 'Ik werk vanavond alleen. Dat lukt wel, ik bel niemand.', feedback: 'Er kan iets gebeuren. Vraag wie je dan kunt bellen.' },
      { text: 'Ik werk vanavond alleen. Ik bel dan wel een vriend.', feedback: 'Een vriend kan op je werk niet helpen. Vraag wie je kunt bellen.' },
    ],
    'r.be.l.clean.2.mo1': [
      { text: 'Ik krijg pijn in mijn rug. Maar dat hoort er wel bij.', feedback: 'Pijn hoort er niet bij. Vraag om betere spullen.' },
      { text: 'Mijn rug doet een beetje pijn. Ik weet niet waarom.', feedback: 'Zeg wat de pijn geeft. Dan kan je baas iets doen.' },
    ],
  },
  advice: {
    'r.be.l.clean.1.ru1': 'advice',
    'r.be.l.clean.2.ru1': 'advice',
  },
};
