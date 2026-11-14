import type { CultureTranslation } from './types';

const t: CultureTranslation = {
  ui: {
    cultureBadge: 'Cum merg lucrurile aici',
    whatDoYouDo: 'Ce faci?',
    whatDoYouSay: 'Ce spui?',
    whatIsRight: 'Ce este corect?',
    sayThis: 'Spune așa',
    goodChoice: 'Alegere bună!',
    otherChoice: 'Aici de obicei se face altfel',
    cultureTips: 'Sfaturi pentru locul de muncă',
    cultureTipsHint: 'Cum merg de obicei lucrurile la un loc de muncă în Olanda. Atinge un sfat ca să-l citești din nou.',
  },
  gloss: {
    'c.je': '„Je” sau „u”?',
    'c.je.b': { m: 'La muncă, cei mai mulți își spun „je” unul altuia, des și șefului. Dacă nu ești sigur, începe cu „u” și ascultă ce fac ceilalți. Aici nu e nepoliticos să spui „je”.', f: 'La muncă, cei mai mulți își spun „je” unul altuia, des și șefului. Dacă nu ești sigură, începe cu „u” și ascultă ce fac ceilalți. Aici nu e nepoliticos să spui „je”.', x: 'La muncă, cei mai mulți își spun „je” unul altuia, des și șefului. Dacă nu știi sigur, începe cu „u” și ascultă ce fac ceilalți. Aici nu e nepoliticos să spui „je”.' }, // x: nieuw, nalezen
    'c.je.p': 'Pot să-ți spun „je”?',
    'c.je.s': 'Noua ta șefă îți spune: „Zeg maar je, hoor!” Ce vrea să spună?',
    'c.je.o1': 'Vrea să-i spui „je”.',
    'c.je.o2': 'Îți cere să spui ceva.', // nagelezen (2e lezing)
    'c.je.o3': 'Vrea să vorbești mai politicos.', // nagelezen (2e lezing)
    'c.je.w': '„Zeg maar je” e prietenos: vrea mai puțină distanță. În multe locuri de muncă din Olanda e normal să-i spui „je” șefului.',
    'c.names': 'Prenumele și o strângere de mână',
    'c.names.b': 'În prima zi, dă scurt mâna, uită-te la persoană și spune-ți prenumele. Colegii și șefii își spun de obicei pe prenume.',
    'c.names.p': { m: 'Salut, sunt Ali. Sunt nou aici.', f: 'Salut, sunt Ali. Sunt nouă aici.', x: 'Salut, sunt Ali. Sunt nou / nouă aici.' }, // x: nieuw, nalezen
    'c.names.s': 'Un coleg vine la tine: „Hoi, ik ben Mark.” Ce faci?',
    'c.names.o1': 'Îi dai mâna și îți spui numele.', // nagelezen (2e lezing)
    'c.names.o2': 'Dai din cap, zâmbești și aștepți întrebări.', // nagelezen (2e lezing)
    'c.names.o3': 'Îi dai mâna și îi spui „meneer” (domnule).', // nagelezen (2e lezing)
    'c.names.w': 'O prezentare scurtă cu prenumele e începutul normal. Îi ajută pe colegi să te țină minte și să te cheme cu ei.',
    'c.arrive': 'Prima zi: unde mergi',
    'c.arrive.b': 'În prima zi, mergi întâi la recepție sau la intrarea principală. Spune-ți numele, agenția, dacă ai una, și la cine trebuie să mergi. Multe firme îți dau un coleg îndrumător (buddy): îl poți întreba orice.',
    'c.arrive.p': 'Bună dimineața, sunt Ali. Încep azi. La cine trebuie să merg?',
    'c.arrive.s': 'E ora 6:45, prima ta zi. Poarta e închisă. Există un interfon. Ce faci?',
    'c.arrive.o1': 'Suni, îți spui numele și că începi azi.',
    'c.arrive.o2': 'Aștepți la poartă până iese cineva.',
    'c.arrive.o3': 'Ocolești clădirea ca să găsești altă ușă.',
    'c.arrive.w': 'Interfonul e pentru vizitatori și pentru angajații noi. Când spui cine ești, pot chema persoana potrivită.',
    'c.ask': 'E bine să pui întrebări',
    'c.ask.b': 'Când pui o întrebare, arăți că vrei să faci treaba bine. Dacă dai din cap fără să înțelegi, pot apărea greșeli sau accidente. E complet normal să întrebi din nou.',
    'c.ask.p': 'Scuze, nu înțeleg. Poți să-mi explici încă o dată?',
    'c.ask.s': 'Șeful tău explică o sarcină foarte repede. Nu ai înțeles. Ce faci?',
    'c.ask.o1': 'Ceri să ți se explice din nou.', // nagelezen (2e lezing)
    'c.ask.o2': 'Dai din cap și încerci să ghicești.',
    'c.ask.o3': 'Îți ceri scuze pentru olandeza ta și te apuci de lucru.', // nagelezen (2e lezing)
    'c.ask.w': 'Aici, șefii se așteaptă la întrebări. E mai bine să întrebi de două ori decât să greșești.', // nieuw, nalezen
    'c.gear': 'Regulile de siguranță sunt pentru toți',
    'c.gear.b': 'Regulile despre cască, încălțăminte și mănuși nu sunt doar o sugestie: toți le respectă, și șeful. Angajatorul trebuie să-ți dea gratuit echipamentul de protecție de care ai nevoie. Echipamentul care nu ți se potrivește nu te protejează bine. Așa că cere mărimea ta: „Heb je dit ook in mijn maat?”',
    'c.gear.p': 'Mi s-au stricat mănușile. De unde iau altele noi?',
    'c.gear.s': 'Mănușile tale sunt rupte. Ce faci?',
    'c.gear.o1': 'Îi ceri șefului mănuși noi.',
    'c.gear.o2': 'Lucrezi mai departe fără mănuși.',
    'c.gear.o3': 'Îți cumperi în liniște mănuși noi din banii tăi.',
    'c.gear.w': 'Echipamentul de protecție e treaba angajatorului. E normal să-l ceri și arăți că iei siguranța în serios.',
    'c.unsafe': 'Spune când ceva nu e sigur',
    'c.unsafe.b': 'Dacă ceva e periculos, spune imediat, și șefului. Poți opri o muncă dacă e cu adevărat nesigură. Raportează accidentele și aproape-accidentele, chiar și pe cele mici.',
    'c.unsafe.p': 'Stop! Asta nu e sigur.',
    'c.unsafe.s': 'Un palet e stivuit prea sus și aproape cade. Nimeni nu s-a rănit. Ce faci?',
    'c.unsafe.o1': 'Îi avertizezi pe colegi și îi spui șefului.',
    'c.unsafe.o2': 'Nu spui nimic, pentru că nu s-a întâmplat nimic.',
    'c.unsafe.o3': { m: 'Repari singur paletul și nu spui nimănui.', f: 'Repari singură paletul și nu spui nimănui.', x: 'Repari pe cont propriu paletul și nu spui nimănui.' }, // nieuw, nalezen
    'c.unsafe.w': 'Un aproape-accident e un avertisment. Dacă îl raportezi, ajuți la prevenirea unui accident adevărat. Angajatorul nu are voie să te pedepsească pentru asta.',
    'c.alarm': 'Sună alarma: oprește-te și ieși afară', // nieuw, nalezen
    'c.alarm.b': 'În prima zi, întreabă unde sunt ieșirile de urgență și punctul de adunare. Când sună alarma, oprește imediat lucrul. Lasă-ți lucrurile și ieși afară pe traseul de evacuare. Ia scara, niciodată liftul. La punctul de adunare se numără cine e afară, așa că rămâi acolo. Ieși și atunci când crezi că e doar un exercițiu.', // nieuw, nalezen
    'c.alarm.p': { m: 'Sunt nou. Unde este punctul de adunare?', f: 'Sunt nouă. Unde este punctul de adunare?', x: 'Sunt o persoană nouă aici. Unde este punctul de adunare?' }, // nieuw, nalezen
    'c.alarm.s': 'Sună alarma de incendiu. Aproape ai terminat o comandă. Ce faci?', // nieuw, nalezen
    'c.alarm.o1': 'Te oprești imediat și mergi la punctul de adunare.', // nieuw, nalezen
    'c.alarm.o2': 'Termini întâi comanda, apoi ieși afară.', // nieuw, nalezen
    'c.alarm.o3': 'Îți iei întâi geaca și telefonul din dulap.', // nieuw, nalezen
    'c.alarm.w': 'Fumul se întinde repede, așa că ieși imediat. Lucrurile tale pot aștepta. La punctul de adunare se numără toți: atunci nimeni nu trebuie să te caute înăuntru.', // nieuw, nalezen
    'c.accident': 'Raportează orice accident',
    'c.accident.b': 'Spune-i șefului sau BHV’er-ului (persoanei de prim ajutor din firmă) despre orice accident, chiar și unul mic. Lucrezi printr-o agenție? Anunță și agenția. În caz de urgență, sună întâi la 112. Firma unde s-a petrecut accidentul trebuie să raporteze un accident grav la Nederlandse Arbeidsinspectie (și dacă lucrezi printr-o agenție): când cineva moare, rămâne cu o vătămare permanentă sau trebuie să stea în spital. Informații generale. Pentru situația ta: întreabă angajatorul, sindicatul sau Juridisch Loket.',
    'c.accident.p': 'Colegul meu e rănit. Unde e persoana de prim ajutor?',
    'c.accident.s': 'Îți accidentezi spatele când ridici ceva. Ți-e frică să nu-ți pierzi locul de muncă. Ce faci?',
    'c.accident.o1': 'Îi raportezi șefului în aceeași zi.', // nagelezen (2e lezing)
    'c.accident.o2': 'Nu spui nimic, ca să nu-ți pierzi locul de muncă.',
    'c.accident.o3': 'Aștepți să vezi dacă durerea trece de la sine.',
    'c.accident.w': 'Raportează în aceeași zi, chiar dacă pare ceva mic: durerea se poate agrava mai târziu. Angajatorul nu are voie să te pedepsească pentru că ai raportat. Lucrezi printr-o agenție? Spune și agenției.', // nagelezen (2e lezing)
    'c.notyet': 'N-ai învățat încă? Spune asta',
    'c.notyet.b': 'Firma la care lucrezi trebuie să-ți explice cum să-ți faci munca în siguranță. Nu folosi un utilaj sau un motostivuitor dacă nu te-a învățat nimeni să-l folosești. E normal aici să spui „Dit heb ik nog niet geleerd”: arată că lucrezi în siguranță.', // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.notyet.p': 'Asta n-am învățat-o încă. Poți să-mi arăți cum se face?',
    'c.notyet.s': 'O dimineață aglomerată. Șeful îți spune: „Pak jij even de heftruck? Het is makkelijk.” N-ai condus niciodată un motostivuitor. Ce faci?',
    'c.notyet.o1': 'Spui că n-ai învățat. Ceri instruire.',
    'c.notyet.o2': 'Conduci încet și atent, doar de data asta.',
    'c.notyet.o3': 'Spui „ja” și speri că o să meargă bine.',
    'c.notyet.w': 'Un motostivuitor fără instruire e periculos, pentru tine și pentru alții. E normal să ceri instruire sau altă muncă, chiar și când e aglomerat.',
    'c.direct': 'Direct nu înseamnă nepoliticos',
    'c.direct.b': { m: 'Colegii din Olanda spun des lucrurile foarte direct, de exemplu „Dat is fout” sau „Doe het zo”. De obicei nu vor să fie nepoliticoși. Și tu poți fi direct, atâta timp cât rămâi prietenos.', f: 'Colegii din Olanda spun des lucrurile foarte direct, de exemplu „Dat is fout” sau „Doe het zo”. De obicei nu vor să fie nepoliticoși. Și tu poți fi directă, atâta timp cât rămâi prietenoasă.', x: 'Colegii din Olanda spun des lucrurile foarte direct, de exemplu „Dat is fout” sau „Doe het zo”. De obicei nu vor să fie nepoliticoși. Și tu poți vorbi direct, atâta timp cât vorbești prietenos.' }, // x: nieuw, nalezen
    'c.direct.p': 'Bine, atunci cum trebuie făcut?',
    'c.direct.s': 'Un coleg spune: „Nee, dat is fout. Die doos moet daar.” Ce faci?',
    'c.direct.o1': 'Întrebi cum trebuie făcut și muți cutia.',
    'c.direct.o2': 'Îți ceri scuze de multe ori: colegul e supărat.', // nagelezen (2e lezing)
    'c.direct.o3': 'Nu spui nimic și lași cutia unde e.',
    'c.direct.w': 'Feedbackul direct e despre muncă, nu despre tine. Când întrebi „hoe moet het dan?”, arăți că vrei să înveți.',
    'c.limits': 'Spune când e prea greu',
    'c.limits.b': { m: 'Nimeni nu se așteaptă să ridici totul singur. Să spui „dit is te zwaar” și să ceri ajutor sau o unealtă e inteligent, nu un semn de slăbiciune. Așa îți protejezi spatele.', f: 'Nimeni nu se așteaptă să ridici totul singură. Să spui „dit is te zwaar” și să ceri ajutor sau o unealtă e inteligent, nu un semn de slăbiciune. Așa îți protejezi spatele.', x: 'Nimeni nu se așteaptă să ridici totul fără ajutor. Să spui „dit is te zwaar” și să ceri ajutor sau o unealtă e inteligent, nu un semn de slăbiciune. Așa îți protejezi spatele.' }, // x: nieuw, nalezen
    'c.limits.p': 'Cutia asta e prea grea. Mă ajuți puțin?',
    'c.limits.s': 'Trebuie să ridici o cutie mult prea grea pentru tine. Ce faci?',
    'c.limits.o1': 'Ceri ajutor unui coleg sau folosești un cărucior.',
    'c.limits.o2': { m: 'O ridici oricum, ca să nu creadă nimeni că ești slab.', f: 'O ridici oricum, ca să nu creadă nimeni că ești slabă.', x: 'O ridici oricum, ca să nu creadă nimeni că nu ai putere.' }, // x: nieuw, nalezen
    'c.limits.o3': 'O lași acolo și nu spui nimic.',
    'c.limits.w': 'Să ceri ajutor e muncă normală în echipă. Un spate rănit costă mult mai mult decât un minut de ajutor.',
    'c.time': 'La timp înseamnă puțin mai devreme',
    'c.time.b': 'Punctualitatea e foarte importantă. Mulți ajung cu cinci sau zece minute înainte să înceapă tura. Dacă vei întârzia, trimite un mesaj sau sună înainte să înceapă tura, nu după.',
    'c.time.p': 'Scuze, autobuzul întârzie. Ajung la opt.',
    'c.time.s': 'Autobuzul tău întârzie și vei ajunge cu 15 minute mai târziu. Ce faci?',
    'c.time.o1': 'Îi spui imediat șefului.', // nagelezen (2e lezing)
    'c.time.o2': 'Explici abia când ajungi la muncă.',
    'c.time.o3': 'Azi nu mai mergi deloc la muncă.',
    'c.time.w': 'Dacă anunți din timp, echipa se poate organiza. Să întârzii fără să anunți e văzut ca mult mai rău decât întârzierea în sine.',
    'c.sick': { m: 'Cum anunți că ești bolnav', f: 'Cum anunți că ești bolnavă', x: 'Cum anunți că te-ai îmbolnăvit' }, // x: nieuw, nalezen
    'c.sick.b': 'Sună-l tu pe șef, înainte să înceapă tura, dacă firma nu are altă regulă. Lucrezi printr-o agenție? Anunță și agenția. Nu trebuie să spui ce boală ai. Informații generale. Pentru situația ta: întreabă angajatorul, sindicatul sau Juridisch Loket.',
    'c.sick.p': { m: 'Sunt bolnav. Azi nu pot veni la muncă.', f: 'Sunt bolnavă. Azi nu pot veni la muncă.', x: 'Sunt bolnav / bolnavă. Azi nu pot veni la muncă.' }, // x: nieuw, nalezen
    'c.sick.s': 'Te trezești cu febră. Tura ta începe la 7:00. Ce faci?',
    'c.sick.o1': 'Îl suni pe șef înainte de 7:00.', // nagelezen (2e lezing)
    'c.sick.o2': 'Îi ceri unui coleg să-i spună mai târziu șefului.',
    'c.sick.o3': 'Stai acasă și suni mâine.',
    'c.sick.w': { m: 'În majoritatea locurilor de muncă din Olanda, regula e să anunți tu și la timp că ești bolnav. Angajatorul poate întreba cât va dura, dar nu ce boală ai.', f: 'În majoritatea locurilor de muncă din Olanda, regula e să anunți tu și la timp că ești bolnavă. Angajatorul poate întreba cât va dura, dar nu ce boală ai.', x: 'În majoritatea locurilor de muncă din Olanda, regula e să anunți tu și la timp că te-ai îmbolnăvit. Angajatorul poate întreba cât va dura, dar nu ce boală ai.' }, // x: nieuw, nalezen
    'c.speakup': 'Spune ce te deranjează',
    'c.speakup.b': 'Aici e normal și respectat să spui calm când ceva te deranjează. Vorbește întâi cu persoana, într-un moment liniștit. Folosește propoziții cu „ik”: „Ik vind het niet fijn dat ...”. Dacă nu ajută, vorbește cu șeful.',
    'c.speakup.p': 'Ceva mă deranjează. Putem vorbi puțin?',
    'c.speakup.s': 'Un coleg îți lasă mereu ție munca grea. Asta te deranjează. Ce faci?',
    'c.speakup.o1': 'Îi spui colegului ce te deranjează.', // nagelezen (2e lezing)
    'c.speakup.o2': 'Taci și te enervezi tot mai tare.',
    'c.speakup.o3': 'Te plângi de el la toți ceilalți colegi.',
    'c.speakup.w': 'Colegii din Olanda preferă de obicei să audă direct. Dacă spui devreme și calm, relația rămâne bună.',
    'c.no': '„Afspraak is afspraak”',
    'c.no.b': 'Când spui „ja”, oamenii se bazează pe asta: o înțelegere e o înțelegere. Așa că e în regulă să spui „nee” sau „dat lukt niet” când nu poți face ceva. Spune la timp și, dacă poți, propune altă variantă.',
    'c.no.p': 'Nu, azi nu se poate. Mâine pot.',
    'c.no.s': 'Șeful te întreabă dacă poți lucra în plus sâmbătă. Nu poți. Ce faci?',
    'c.no.o1': 'Spui nu și propui altă zi.', // nagelezen (2e lezing)
    'c.no.o2': 'Spui da și apoi nu vii.',
    'c.no.o3': 'Spui da: șefului nu-i poți spune nu.', // nagelezen (2e lezing)
    'c.no.w': 'Un „nee” clar e respectat. Să spui „ja” și să nu vii strică mult mai mult încrederea.',
    'c.task': 'Spune când ai terminat, întreabă când nu e clar',
    'c.task.b': 'În Olanda, un șef dă adesea o sarcină în câteva cuvinte. Când ai terminat, spui asta. Dacă spui „ja” când nu ai înțeles, apar des greșeli. Să întrebi din nou sau să ceri să ți se arate e normal aici și nu e nepoliticos.',
    'c.task.p': 'Gata! Ce să fac acum?',
    'c.task.s': 'Șeful îți explică o sarcină foarte repede. Ai înțeles doar jumătate. Ce faci?',
    'c.task.o1': 'Ceri să-ți arate încă o dată.', // nagelezen (2e lezing)
    'c.task.o2': 'Începi cu jumătatea pe care ai înțeles-o.', // nagelezen (2e lezing)
    'c.task.o3': 'Aștepți până o face un coleg.',
    'c.task.w': 'E normal să întrebi din nou și durează un minut. Să repari o greșeală durează mult mai mult. Cei mai mulți șefi preferă să arate de două ori.',
    'c.clear': 'Spune întâi ce e cel mai important', // nieuw, nalezen
    'c.clear.b': 'În multe limbi e politicos să spui întâi toată povestea, iar ideea principală la sfârșit. La muncă aici e invers. Spune întâi ce nu e în regulă sau de ce ai nevoie. Apoi spune motivul. Vorbește calm și oprește-te după două-trei propoziții, ca celălalt să poată întreba ceva. Și la un interviu de angajare: întâi răspunsul, apoi un exemplu. Să vorbești încet nu e nepoliticos aici: îi ajută pe oameni să te înțeleagă.',
    'c.clear.p': 'Scuze, o mai spun o dată, calm.', // nieuw, nalezen
    'c.clear.s': 'Întârzii 20 de minute. Șeful te întreabă: „Wat is er?” Ce faci?', // nieuw, nalezen
    'c.clear.o1': 'Spui întâi că ai întârziat și că îți pare rău. Apoi spui de ce.', // nieuw, nalezen
    'c.clear.o2': 'Povestești de la început tot ce s-a întâmplat azi-dimineață.', // nieuw, nalezen
    'c.clear.o3': 'Nu spui nimic și te apuci repede de lucru.', // nieuw, nalezen
    'c.clear.w': 'Șeful vrea întâi să știe ce se întâmplă. Motivul vine după aceea. Scurt și calm înseamnă clar, iar aici e și politicos.', // nieuw, nalezen
    'u.teamwork': 'Lucrul împreună',
    'l.speakup': 'Ceva mă deranjează',
    'w.probleem': 'problema',
    'w.praten': 'a vorbi',
    'w.nietfijn': 'neplăcut',
    'w.eerlijk': 'corect, cinstit',
    'w.boos': 'supărat, furios',
    'w.samen': 'împreună',
    's.speakup.1': 'Ceva mă deranjează.',
    's.speakup.2': 'Putem vorbi puțin?',
    's.speakup.3': 'Nu cred că e corect.',
    'd.speakup.q': 'E ceva în neregulă?',
    'd.speakup.a': 'Da, ceva mă deranjează.',
    'l.agree': 'Înțelegeri și cum spui nu',
    'w.afspraak': 'înțelegerea, programarea',
    'w.lukken': 'a reuși, a se descurca',
    'w.oneens': 'a nu fi de acord',
    'w.zaterdag': 'sâmbătă',
    'w.overwerken': 'a face ore suplimentare',
    'w.misschien': 'poate',
    's.agree.1': 'Nu, azi nu se poate.',
    's.agree.2': 'Nu sunt de acord cu tine.',
    's.agree.3': 'O înțelegere e o înțelegere.',
    'd.agree.q': 'Poți face ore suplimentare sâmbătă?',
    'd.agree.a': 'Nu, nu se poate. Duminică pot.',
    'l.task': 'Instrucțiuni de la șef',
    'w.taak': 'sarcina',
    'w.eerst': 'mai întâi',
    'w.daarna': 'după aceea',
    'w.afmaken': 'a termina',
    'w.snel': 'repede',
    'w.bijna': 'aproape',
    's.task.1': 'Ce trebuie să fac mai întâi?',
    's.task.2': 'Am terminat cu sarcina asta.',
    's.task.3': 'Puteți să-mi arătați încă o dată?',
    'd.task.q': 'Ai terminat?',
    'd.task.a': 'Aproape. Încă cinci minute.',
    'l.clear': 'Scurt și clar', // nieuw, nalezen
    'w.kort': 'scurt', // nieuw, nalezen
    'w.duidelijk': 'clar', // nieuw, nalezen
    'w.belangrijkste': 'cel mai important lucru', // nieuw, nalezen
    'w.rustig': 'calm, liniștit', // nieuw, nalezen
    'w.teveel': 'prea mult', // nieuw, nalezen
    'w.vraag': 'întrebarea', // nieuw, nalezen
    's.clear.1': 'O spun scurt: utilajul e stricat.', // nieuw, nalezen
    's.clear.2': { m: 'Întâi cel mai important: sunt bolnav.', f: 'Întâi cel mai important: sunt bolnavă.', x: 'Întâi cel mai important: sunt bolnav / bolnavă.' }, // nieuw, nalezen
    's.clear.3': 'Scuze, vorbesc prea repede și prea mult.', // nieuw, nalezen
    'd.clear.q': 'E clar?', // nieuw, nalezen
    'd.clear.a': 'Da. Mai am o întrebare.', // nieuw, nalezen
    // Vertaalronde 5 november 2026: l.newcolleague en c.newcolleague.
    'l.newcolleague': "Să ajuți un coleg nou", // nieuw, nalezen
    'w.welkom': "bun venit", // nieuw, nalezen
    'w.inwerken': "a instrui un coleg nou (a-i arăta munca în primele zile)", // nieuw, nalezen
    'w.stap': "pasul (o mică parte dintr-o sarcină)", // nieuw, nalezen
    'w.nadoen': "a face la fel (a face ce ți-a arătat cineva)", // nieuw, nalezen
    'w.geduld': "răbdarea", // nieuw, nalezen
    'w.kast': "dulapul", // nieuw, nalezen
    's.newcolleague.1': "Bun venit! Azi îți arăt eu munca.", // nieuw, nalezen
    's.newcolleague.2': "Întâi uită-te. Apoi faci și tu la fel.", // nieuw, nalezen
    's.newcolleague.3': "Mănușile sunt în dulapul acela.", // nieuw, nalezen
    'd.newcolleague.q': "Cred că am înțeles.", // nieuw, nalezen
    'd.newcolleague.a': "Bine. Arată-mi.", // nieuw, nalezen
    'c.newcolleague': "Arată, pas cu pas", // nieuw, nalezen
    'c.newcolleague.b': "Ce a fost greu pentru tine în primele săptămâni e greu și pentru un coleg nou. Explică munca în pași mici: întâi asta, apoi aia. Nu vorbi mai repede sau mai tare: arată și lasă-l să facă după tine. Nu întreba „Snap je het?”: mulți spun „da” și când nu înțeleg. Spune în schimb „Laat eens zien” și uită-te. Spune-i unde sunt lucrurile, de exemplu toaleta, cantina și mănușile. Ai răbdare (geduld): învățatul durează, pentru toată lumea.", // nieuw, nalezen
    'c.newcolleague.p': "Bravo! Acum pasul următor.", // nieuw, nalezen
    'c.newcolleague.s': "Îi explici o sarcină unui coleg nou. El spune: „Ja, ja, ik snap het.” Ce faci?", // nieuw, nalezen
    'c.newcolleague.o1': "Spui „Laat eens zien” și te uiți cum o face.", // nieuw, nalezen
    'c.newcolleague.o2': "Spui „Goed zo” și te întorci la munca ta.", // nieuw, nalezen
    'c.newcolleague.o3': "Explici totul încă o dată, mai repede și mai tare.", // nieuw, nalezen
    'c.newcolleague.w': "Mulți spun „ja” și când n-au înțeles. Când el îți arată, vedeți amândoi dacă merge. E mai repede decât să repari o greșeală mai târziu.", // nieuw, nalezen
    // Vertaalronde 5 november 2026: Goed communiceren (u.communicate).
    'u.communicate': "Să comunici bine", // nieuw, nalezen
    'l.explain': "Să spui ce nu e în regulă", // nieuw, nalezen
    'w.ietsmis': "ceva nu e în regulă", // nieuw, nalezen
    'w.stilstaan': "a sta, a fi oprit (un utilaj, o bandă)", // nieuw, nalezen
    'w.lampje': "beculețul (de avertizare)", // nieuw, nalezen
    'w.komen': "a veni", // nieuw, nalezen
    'w.nodighebben': "a avea nevoie de", // nieuw, nalezen
    'w.meteen': "imediat, pe loc", // nieuw, nalezen
    's.explain.1': "Banda s-a oprit. La linia doi. Poți să vii?", // nieuw, nalezen
    's.explain.2': "Pe utilaj e aprins un bec roșu.", // nieuw, nalezen
    's.explain.3': "E periculos. Poți să vii imediat?", // nieuw, nalezen
    'd.explain.q': "Ce nu e în regulă?", // nieuw, nalezen
    'd.explain.a': "Scanerul nu merge. Am nevoie de unul nou.", // nieuw, nalezen
    'l.listen': "Să asculți bine", // nieuw, nalezen
    'w.uitpraten': "a termina de vorbit (a lăsa pe cineva să termine)", // nieuw, nalezen
    'w.onderbreken': "a întrerupe", // nieuw, nalezen
    'w.aankijken': "a se uita la (cineva)", // nieuw, nalezen
    'w.bedoelen': "a vrea să spună, a se referi la", // nieuw, nalezen
    'w.dus': "deci (ca să verifici ce ai auzit)", // nieuw, nalezen
    'w.doorvragen': "a mai întreba (până e clar)", // nieuw, nalezen
    's.listen.1': "Deci întâi număr cutiile, și apoi împachetez?", // nieuw, nalezen
    's.listen.2': "Ce vrei să spui cu cuvântul ăsta?", // nieuw, nalezen
    's.listen.3': "Scuze, te rog, termină ce spuneai.", // nieuw, nalezen
    'd.listen.q': "Mâine începi deja la patru.", // nieuw, nalezen
    'd.listen.a': "Serios? Sau era o glumă?", // nieuw, nalezen
    'l.calm': "Să-ți păstrezi calmul", // nieuw, nalezen
    'w.nadenken': "a se gândi (la ceva)", // nieuw, nalezen
    'w.ademhalen': "a respira", // nieuw, nalezen
    'w.oplossen': "a rezolva, a lămuri", // nieuw, nalezen
    'w.druk': "aglomerat (mult de lucru)", // nieuw, nalezen
    'w.straks': "mai târziu (azi), peste puțin", // nieuw, nalezen
    'w.misverstand': "neînțelegerea", // nieuw, nalezen
    's.calm.1': "Vreau să rezolv asta calm.", // nieuw, nalezen
    's.calm.2': "Pot să mă gândesc puțin?", // nieuw, nalezen
    's.calm.3': "Putem vorbi mai târziu?", // nieuw, nalezen
    'd.calm.q': "De ce nu e gata încă asta?", // nieuw, nalezen
    'd.calm.a': "Scuze, e foarte aglomerat. Ce trebuie făcut întâi?", // nieuw, nalezen
    'l.talkintime': "Vorbește la timp despre asta", // nieuw, nalezen
    'w.gesprek': "discuția, conversația", // nieuw, nalezen
    'w.bespreken': "a discuta (despre ceva)", // nieuw, nalezen
    'w.zorgenmaken': "a-ți face griji", // nieuw, nalezen
    'w.oplossing': "soluția", // nieuw, nalezen
    'w.ineens': "deodată, dintr-odată", // nieuw, nalezen
    'w.wegblijven': "a lipsi (a nu veni la muncă)", // nieuw, nalezen
    's.talkintime.1': "Ceva mă deranjează. Ai puțin timp?", // nieuw, nalezen
    's.talkintime.2': "Vreau să discut ceva cu tine.", // nieuw, nalezen
    's.talkintime.3': "Mă gândesc să-mi dau demisia. Putem vorbi întâi?", // nieuw, nalezen
    'd.talkintime.q': "Ai puțin timp? Ceva mă deranjează.", // nieuw, nalezen
    'd.talkintime.a': "Sigur. Ce s-a întâmplat?", // nieuw, nalezen
    'l.reachable': "Să fii de găsit la telefon", // nieuw, nalezen
    'w.opnemen': "a răspunde (la telefon)", // nieuw, nalezen
    'w.gemisteoproep': "apelul pierdut", // nieuw, nalezen
    'w.voicemail': "mesageria vocală", // nieuw, nalezen
    'w.beltegoed': "creditul (pe cartelă)", // nieuw, nalezen
    'w.bereik': "semnalul (la telefon)", // nieuw, nalezen
    'w.onbekend': "necunoscut (un număr necunoscut)", // nieuw, nalezen
    's.reachable.1': "Olandeza mea nu e încă bună. Puteți vorbi mai rar?", // nieuw, nalezen
    's.reachable.2': "Puteți să mi-l trimiteți și ca mesaj?", // nieuw, nalezen
    's.reachable.3': "Am un număr nou.", // nieuw, nalezen
    'd.reachable.q': "Bună dimineața, sunt de la planificare.", // nieuw, nalezen
    'd.reachable.a': "Bună dimineața. M-ați sunat? Scuze, n-am apucat să răspund.", // nieuw, nalezen
    'c.explain': "Ce, unde, de ce ai nevoie", // nieuw, nalezen
    'c.explain.b': "Când ceva nu e în regulă la muncă, spune-o în trei pași. Întâi ce nu e în regulă: „De band staat stil.” Apoi unde: „Bij lijn twee.” Apoi de ce ai nevoie: „Kun je komen?” Acum celălalt știe ce să facă, fără multe întrebări. Nu știi cuvântul? Arată cu degetul. E periculos? Spune asta întâi: „Het is gevaarlijk.” Un accident? Întâi cheamă ajutor (mai multe în lecția „Cum raportezi un accident”).", // nieuw, nalezen
    'c.explain.p': "Poți să vii să te uiți?", // nieuw, nalezen
    'c.explain.s': "Scanerul de la locul tău nu mai merge. Îl suni pe șeful de echipă. Ce spui?", // nieuw, nalezen
    'c.explain.o1': "„De scanner is kapot. Bij gang vier. Kun je komen?”", // nieuw, nalezen
    'c.explain.o2': "„Hallo, ik heb een probleem.” Apoi aștepți.", // nieuw, nalezen
    'c.explain.o3': "„Sorry, sorry! Het is niet mijn schuld!”", // nieuw, nalezen
    'c.explain.w': "Acum șeful de echipă știe ce nu e în regulă, unde și de ce ai nevoie. Nimeni nu trebuie să pună întâi trei întrebări.", // nieuw, nalezen
    'c.listen': "Întâi ascultă, apoi verifică", // nieuw, nalezen
    'c.listen.b': "Lasă-l pe celălalt să termine de vorbit (uitpraten) înainte să răspunzi. Uită-te la persoana care îți vorbește: aici asta arată că asculți. În multe țări nu te uiți șefului în ochi. Acesta e un semn de respect. Aici e politicos să te uiți la el din când în când. Când celălalt a terminat, repetă ce ai auzit: „Dus eerst …, en dan …?” Nu știi sigur ce înseamnă un cuvânt? Întreabă: „Wat bedoel je met …?” Unii colegi fac glume cu fața serioasă. Nu știi sigur? Întreabă: „Was dat een grapje?”",
    'c.listen.p': "Stai, vreau să înțeleg bine.", // nieuw, nalezen
    'c.listen.s': "Șefa ta explică o sarcină nouă. Vrei să spui ceva, dar ea încă vorbește. Ce faci?", // nieuw, nalezen
    'c.listen.o1': "O lași să termine. Apoi repeți ce ai auzit.", // nieuw, nalezen
    'c.listen.o2': "Începi imediat să vorbești, ca să nu uiți.", // nieuw, nalezen
    'c.listen.o3': "Dai din cap la tot și nu întrebi nimic.", // nieuw, nalezen
    'c.listen.w': "Când ea a terminat, știi toată sarcina. Când repeți, arăți că ai ascultat, iar ea te mai poate corecta.", // nieuw, nalezen
    'c.calm': "Păstrează-ți calmul, și când e greu", // nieuw, nalezen
    'c.calm.b': "Toată lumea se enervează uneori, și la muncă. E cineva supărat pe tine? Întâi ascultă și păstrează-ți calmul. Nu trebuie să răspunzi imediat: „Mag ik even nadenken?” Te enervezi și tu? Respiră încet și spune: „Kunnen we straks praten?” Apoi vorbiți când v-ați liniștit amândoi. E foarte aglomerat? Întreabă ce trebuie făcut întâi. Țipetele, amenințările sau îmbrâncelile nu sunt niciodată în regulă la muncă. Spune stop și spune-i șefului (mai multe în lecțiile „Respect pentru toți” și „Depășirea limitelor”).", // nieuw, nalezen
    'c.calm.p': "Cred că e o neînțelegere.", // nieuw, nalezen
    'c.calm.s': "Un coleg e supărat: paletul e în locul greșit. Crezi că nu tu l-ai pus acolo. Ce faci?", // nieuw, nalezen
    'c.calm.o1': "Îți păstrezi calmul, asculți, apoi spui ce știi.", // nieuw, nalezen
    'c.calm.o2': "Te enervezi și tu și vorbești mai tare.", // nieuw, nalezen
    'c.calm.o3': "Pleci și nu mai vorbești cu el.", // nieuw, nalezen
    'c.calm.w': "Când îți păstrezi calmul, deseori și celălalt se calmează. Atunci puteți afla ce s-a întâmplat și puteți rezolva împreună.", // nieuw, nalezen
    'c.talkintime': "Vorbește cât timp problema e mică", // nieuw, nalezen
    'c.talkintime.b': "O problemă mică devine mare când nu vorbești despre ea. Apoi te enervezi deodată sau renunți deodată. Vorbește la timp: cu șeful, cu un coleg sau cu vertrouwenspersoon (persoana de încredere, dacă există). Cere puțin timp: „Heb je even tijd?” Spune pe scurt care e problema și ce vrei. Te gândești să-ți dai demisia? Vorbește întâi. Deseori există o soluție, de exemplu altă tură sau altă sarcină. Dacă demisionezi tu, poți pierde indemnizația (uitkering) și deseori există o perioadă de preaviz (opzegtermijn). Informații generale. Pentru situația ta: întreabă angajatorul, sindicatul sau Juridisch Loket.", // nieuw, nalezen
    'c.talkintime.p': "Putem căuta împreună o soluție?", // nieuw, nalezen
    'c.talkintime.s': "De săptămâni întregi programul tău e o problemă. Azi te-ai enervat și vrei să renunți imediat. Ce faci?", // nieuw, nalezen
    'c.talkintime.o1': "Întâi îi ceri șefului o discuție.", // nieuw, nalezen
    'c.talkintime.o2': "Pleci acum și nu te mai întorci.", // nieuw, nalezen
    'c.talkintime.o3': "Nu spui nimic și mergi mai departe.", // nieuw, nalezen
    'c.talkintime.w': "Când vorbești la timp, problema rămâne mică. Deseori există o soluție și așa îți păstrezi de multe ori locul de muncă și venitul.", // nieuw, nalezen
    'c.reachable': "Răspunde sau sună înapoi în aceeași zi", // nieuw, nalezen
    'c.reachable.b': "Agențiile și angajatorii sună des când e de lucru. Deseori primește munca primul care răspunde sau sună înapoi. Ai un apel pierdut? Sună înapoi în aceeași zi. Nu ai telefonul la tine la muncă? Sună înapoi în pauză. Ascultă-ți mesageria vocală și ține puțin credit (beltegoed) pe telefon. Îți e greu să înțelegi la telefon? Spune asta și întreabă: „Kunt u het ook appen?” Cineva îți cere bani sau coduri? Închide (mai multe în lecția „Atenție la înșelătorii”). Ai un număr nou? Dă-l la muncă, la agenție și la primărie (gemeente).", // nieuw, nalezen
    'c.reachable.p': "Vă sun înapoi în pauză.", // nieuw, nalezen
    'c.reachable.s': "În pauză vezi un apel pierdut de la agenție. Ce faci?", // nieuw, nalezen
    'c.reachable.o1': "Suni înapoi acum, în pauză.", // nieuw, nalezen
    'c.reachable.o2': "Aștepți până te sună din nou.", // nieuw, nalezen
    'c.reachable.o3': "Suni înapoi săptămâna viitoare, când ai timp liber.", // nieuw, nalezen
    'c.reachable.w': "Agențiile sună des când e de lucru. Când suni înapoi în aceeași zi, arăți că vrei munca, și poate o primești.", // nieuw, nalezen
    // Vertaalronde 5 november 2026: Feedback en overleg (u.feedback).
    'u.feedback': "Feedback și ședințe de echipă", // nieuw, nalezen
    'l.getfeedback': "Când primești feedback", // nieuw, nalezen
    'w.tip': "sfatul (un sfat scurt)", // nieuw, nalezen
    'w.verbeterpunt': "punctul de îmbunătățit (ce poate fi mai bine)", // nieuw, nalezen
    'w.goedbedoeld': "cu intenție bună (ca să te ajute)", // nieuw, nalezen
    'w.kritiek': "critica (ce crede cineva că nu e bine)", // nieuw, nalezen
    'w.normaal': "normal", // nieuw, nalezen
    'w.positief': "pozitiv (despre ce merge bine)", // nieuw, nalezen
    's.getfeedback.1': "Mulțumesc, e bine de știut.", // nieuw, nalezen
    's.getfeedback.2': "Poți să-mi dai un exemplu?", // nieuw, nalezen
    's.getfeedback.3': "Ce pot să fac mai bine?", // nieuw, nalezen
    'd.getfeedback.q': "Pot să-ți dau puțin feedback?", // nieuw, nalezen
    'd.getfeedback.a': "Da, te rog. Vreau să fac treaba bine.", // nieuw, nalezen
    'l.givefeedback': "Când dai feedback", // nieuw, nalezen
    'w.dichtplakken': "a închide cu bandă adezivă", // nieuw, nalezen
    'w.netjes': "îngrijit, ordonat", // nieuw, nalezen
    'w.scheef': "strâmb, nu drept", // nieuw, nalezen
    'w.vriendelijk': "prietenos, amabil", // nieuw, nalezen
    'w.concreet': "concret (cu un exemplu clar)", // nieuw, nalezen
    'w.ondervierogen': "între patru ochi (doar voi doi)", // nieuw, nalezen
    's.givefeedback.1': "Faci asta bine.", // nieuw, nalezen
    's.givefeedback.2': "Poți să închizi și cutiile cu bandă?", // nieuw, nalezen
    's.givefeedback.3': "Văd că cutiile stau strâmb.", // nieuw, nalezen
    'd.givefeedback.q': "Ce părere ai despre munca mea?", // nieuw, nalezen
    'd.givefeedback.a': "Îngrijit! Doar cutiile stau strâmb.", // nieuw, nalezen
    'l.meeting': "Să vorbești la ședința de echipă", // nieuw, nalezen
    'w.werkoverleg': "ședința de echipă (despre muncă)", // nieuw, nalezen
    'w.beurt': "rândul (momentul tău să vorbești)", // nieuw, nalezen
    'w.idee': "ideea", // nieuw, nalezen
    'w.mening': "părerea (ce crezi despre asta)", // nieuw, nalezen
    'w.handopsteken': "a ridica mâna", // nieuw, nalezen
    'w.agenda': "ordinea de zi (lista de puncte pentru ședință)", // nieuw, nalezen
    's.meeting.1': "Pot să spun ceva?", // nieuw, nalezen
    's.meeting.2': "Am o întrebare despre programul de lucru.", // nieuw, nalezen
    's.meeting.3': "Am o idee.", // nieuw, nalezen
    'd.meeting.q': "Mai are cineva o întrebare?", // nieuw, nalezen
    'd.meeting.a': "Da. Când vine noul program de lucru?", // nieuw, nalezen
    'c.getfeedback': "Feedbackul e despre munca ta", // nieuw, nalezen
    'c.getfeedback.b': "Feedbackul e ce spune cineva despre munca ta: ce merge bine și ce poate fi mai bine. E despre munca ta, nu despre tine. La muncă aici, feedbackul e normal și e menit să ajute. Nu e clar ce să faci altfel? Cere un exemplu. Întâi ascultă și nu te apăra imediat. Apoi mulțumește și încearcă. Poți să ceri și tu feedback: „Wat kan ik beter doen?”", // nieuw, nalezen
    'c.getfeedback.p': "Mulțumesc. Poți să-mi dai un exemplu?", // nieuw, nalezen
    'c.getfeedback.s': "Șefa ta se uită la munca ta și spune: „Dit kan beter.” Nu știi ce vrea să spună. Ce faci?", // nieuw, nalezen
    'c.getfeedback.o1': "Mulțumești și ceri un exemplu.", // nieuw, nalezen
    'c.getfeedback.o2': "Spui că chiar ai făcut tot ce ai putut.", // nieuw, nalezen
    'c.getfeedback.o3': "Dai din cap și o faci din nou la fel.", // nieuw, nalezen
    'c.getfeedback.w': "Feedbackul e menit să te ajute. Un exemplu arată ce vrea ea. Iar un „mulțumesc” arată că asculți.", // nieuw, nalezen
    'c.givefeedback': "Când dai feedback: întâi partea bună", // nieuw, nalezen
    'c.givefeedback.b': "Vrei să spui ceva despre munca unui coleg? Întâi spune ce merge bine. Apoi spune prietenos și clar ce poate fi mai bine, cu un exemplu. Spune-o la un moment potrivit, doar acelei persoane, nu când sunt toți de față. Spune ce vezi, nu ce crezi despre persoană: „Ik zie dat ...”. Vorbește prietenos: vrei să ajuți, nu să câștigi.", // nieuw, nalezen
    'c.givefeedback.p': "Faci asta bine. Poți să închizi și cutiile cu bandă?", // nieuw, nalezen
    'c.givefeedback.s': "Un coleg nou uită să închidă cutiile cu bandă. Sunteți toți în cantină. Ce faci?", // nieuw, nalezen
    'c.givefeedback.o1': "Mai târziu, între patru ochi: întâi ce merge bine, apoi cutiile.", // nieuw, nalezen
    'c.givefeedback.o2': "Îi spui de față cu toți că e greșit.", // nieuw, nalezen
    'c.givefeedback.o3': "Nu spui nimic și îi închizi tu cutiile.", // nieuw, nalezen
    'c.givefeedback.w': "Între patru ochi, el poate asculta fără să-i fie rușine. Când spui întâi ce merge bine, aude mai bine restul.", // nieuw, nalezen
    'c.meeting': "Vocea ta contează la ședință", // nieuw, nalezen
    'c.meeting.b': "Multe echipe au o ședință scurtă despre muncă (het werkoverleg). Părerea ta e binevenită acolo, și când olandeza ta nu e perfectă. Și o întrebare e o contribuție bună: poate și alții vor să știe. Așteaptă-ți rândul și lasă-l pe celălalt să termine. Apoi ridică mâna sau spune: „Mag ik iets zeggen?” Nu îndrăznești să spui asta în grup? Spune-i șefului după ședință.", // nieuw, nalezen
    'c.meeting.p': "Pot să spun ceva? Am o idee.", // nieuw, nalezen
    'c.meeting.s': "La ședința de echipă, șefa explică noul program de lucru. Nu înțelegi când începe tura ta. Ce faci?", // nieuw, nalezen
    'c.meeting.o1': "Când ea termină de vorbit, îți pui întrebarea.", // nieuw, nalezen
    'c.meeting.o2': "Nu spui nimic, ca să nu pierzi timpul.", // nieuw, nalezen
    'c.meeting.o3': "Întrebi imediat, cât timp ea încă vorbește.", // nieuw, nalezen
    'c.meeting.w': "O întrebare e o contribuție bună: poate nici alții n-au înțeles. Când îți aștepți rândul, toată lumea o poate auzi.", // nieuw, nalezen
    // Logistiek at four lessons per unit (14 November 2026).
    'c.picking': "Lipsește un articol? Spune", // nieuw, nalezen
    'c.picking.b': "Locul e gol sau articolul nu e acolo? Nu lua alt articol care arată la fel: atunci clientul primește lucrul greșit. Spune-i șefului de echipă sau raportează în scaner. Verifică numărul de pe autocolant, nu doar culoarea sau poza. E mai important să lucrezi exact decât să lucrezi repede.", // nieuw, nalezen
    'c.picking.p': "Articolul ăsta lipsește. Ce trebuie să fac?", // nieuw, nalezen
    'c.picking.s': "Locul e gol. În locul de alături e un articol care arată aproape la fel. Ce faci?", // nieuw, nalezen
    'c.picking.o1': "Raportezi că articolul lipsește.", // nieuw, nalezen
    'c.picking.o2': "Iei celălalt articol: arată la fel.", // nieuw, nalezen
    'c.picking.o3': "Sari peste articol și nu spui nimic.", // nieuw, nalezen
    'c.picking.w': "Un articol greșit vine înapoi, iar asta costă mai mult timp decât o întrebare. Când raportezi, cineva poate umple locul sau poate schimba comanda.", // nieuw, nalezen
    'c.loading': "Niciodată în spatele unui camion care dă cu spatele", // nieuw, nalezen
    'c.loading.b': "Șoferul nu poate vedea tot ce e în spatele camionului. Nu merge niciodată în spatele unui camion care dă cu spatele și nu sta între camion și ușă. Așteaptă până când camionul stă pe loc și șoferul te-a văzut. Lipsește un palet sau e deteriorat când descarci? Spune înainte să plece șoferul.", // nieuw, nalezen
    'c.loading.p': "Așteaptă puțin. Camionul dă cu spatele.", // nieuw, nalezen
    'c.loading.s': "Un camion dă cu spatele spre ușă. Vrei să treci repede prin spatele lui. Ce faci?", // nieuw, nalezen
    'c.loading.o1': "Aștepți până când camionul stă pe loc.", // nieuw, nalezen
    'c.loading.o2': { m: "Alergi prin spatele lui: ești destul de rapid.", f: "Alergi prin spatele lui: ești destul de rapidă.", x: "Alergi prin spatele lui: te miști destul de repede." }, // nieuw, nalezen
    'c.loading.o3': "Mergi prin spatele lui și îi faci semn cu mâna șoferului.", // nieuw, nalezen
    'c.loading.w': "În spatele unui camion e un loc pe care șoferul nu îl poate vedea. Așteptarea costă un minut. Un accident acolo e foarte grav.", // nieuw, nalezen
    // "Hulp vragen" at four lessons (14 November 2026).
    'c.howto': "Verifică dacă faci bine", // nieuw, nalezen
    'c.howto.b': { m: "Nu ești sigur cum trebuie făcută o sarcină? Întreabă cum sau roagă un coleg să se uite puțin la munca ta. Aici e normal să verifici, chiar și după o săptămână sau o lună. Ghicitul costă mai mult timp decât întrebatul: ce e greșit trebuie făcut din nou. „Doe ik het zo goed?” e o întrebare pe care colegii o aud cu plăcere.", f: "Nu ești sigură cum trebuie făcută o sarcină? Întreabă cum sau roagă un coleg să se uite puțin la munca ta. Aici e normal să verifici, chiar și după o săptămână sau o lună. Ghicitul costă mai mult timp decât întrebatul: ce e greșit trebuie făcut din nou. „Doe ik het zo goed?” e o întrebare pe care colegii o aud cu plăcere.", x: "Nu știi sigur cum trebuie făcută o sarcină? Întreabă cum sau roagă un coleg să se uite puțin la munca ta. Aici e normal să verifici, chiar și după o săptămână sau o lună. Ghicitul costă mai mult timp decât întrebatul: ce e greșit trebuie făcut din nou. „Doe ik het zo goed?” e o întrebare pe care colegii o aud cu plăcere." }, // nieuw, nalezen
    'c.howto.p': "Vrei să te uiți puțin dacă e bine?", // nieuw, nalezen
    'c.howto.s': { m: "Faci o sarcină nouă. Nu ești sigur că o faci bine. Ce faci?", f: "Faci o sarcină nouă. Nu ești sigură că o faci bine. Ce faci?", x: "Faci o sarcină nouă. Nu știi sigur dacă o faci bine. Ce faci?" }, // nieuw, nalezen
    'c.howto.o1': "Rogi un coleg să se uite.", // nieuw, nalezen
    'c.howto.o2': "Mergi mai departe: poate e bine.", // nieuw, nalezen
    'c.howto.o3': "Te oprești și aștepți până vine cineva.", // nieuw, nalezen
    'c.howto.w': "O privire scurtă a unui coleg te scutește de multă muncă mai târziu. Și înveți sarcina mai repede.", // nieuw, nalezen
    'c.mayask': "Momentul potrivit să întrebi", // nieuw, nalezen
    'c.mayask.b': "E vorba de siguranță sau poate merge ceva prost chiar acum? Întreabă imediat, chiar și când colegul tău e ocupat. Nu e urgent? Așteaptă până când colegul tău a terminat și apoi întreabă: „Heb je even tijd?” Ai multe întrebări mici? Scrie-le și pune-le pe toate odată. Pe nimeni nu supără o întrebare. O greșeală costă mai mult timp.", // nieuw, nalezen
    'c.mayask.p': "Scuze că deranjez. Ai puțin timp?", // nieuw, nalezen
    'c.mayask.s': "Colegul tău vorbește la telefon. Ai o întrebare care nu e urgentă. Ce faci?", // nieuw, nalezen
    'c.mayask.o1': "Aștepți până se termină convorbirea, apoi întrebi.", // nieuw, nalezen
    'c.mayask.o2': "Întrebi acum: o întrebare e mereu bună.", // nieuw, nalezen
    'c.mayask.o3': "Nu întrebi: colegul tău e ocupat.", // nieuw, nalezen
    'c.mayask.w': "Dacă aștepți puțin, arăți respect și tot primești răspunsul. Doar pericolul nu poate aștepta.", // nieuw, nalezen
    'c.whereis': "Te-ai rătăcit? Întreabă", // nieuw, nalezen
    'c.whereis.b': "Un loc de muncă nou e mare și multe uși arată la fel. Nimeni nu se așteaptă să găsești totul după o zi. Nu găsești o încăpere, o unealtă sau o persoană? Întreabă primul coleg pe care îl vezi. Mulți colegi merg cu tine sau îți arată drumul. Știi unde sunt ieșirile? Întreabă în prima ta zi: e pentru siguranța ta.", // nieuw, nalezen
    'c.whereis.p': "M-am rătăcit. Unde este cantina?", // nieuw, nalezen
    'c.whereis.s': "E a doua ta zi. Nu găsești vestiarul, iar tura ta începe în cinci minute. Ce faci?", // nieuw, nalezen
    'c.whereis.o1': "Întrebi primul coleg pe care îl vezi.", // nieuw, nalezen
    'c.whereis.o2': "Cauți mai departe: e jenant să întrebi iar.", // nieuw, nalezen
    'c.whereis.o3': "Începi munca în hainele tale.", // nieuw, nalezen
    'c.whereis.w': { m: "Să întrebi durează zece secunde. Dacă cauți singur, poți întârzia. Colegii știu că e greu să te descurci într-un loc nou.", f: "Să întrebi durează zece secunde. Dacă cauți singură, poți întârzia. Colegii știu că e greu să te descurci într-un loc nou.", x: "Să întrebi durează zece secunde. Dacă cauți pe cont propriu, poți întârzia. Colegii știu că e greu să te descurci într-un loc nou." }, // nieuw, nalezen
  },
};

export default t;
