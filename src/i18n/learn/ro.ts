import type { CultureTranslation } from '../culture/types';

/** Learning mechanics (G4 r1): speaking without a microphone, picture choice, build feedback, and why a chat reply fits (src/content/chatWhy.ts). */
const t: CultureTranslation = {
  ui: {
    sayAloud: "Nu e nevoie de microfon. Spune cu voce tare, apoi mergi mai departe.",
    micRetry: "Încearcă din nou microfonul",
    micFailed: "Microfonul nu a funcționat. Spune cu voce tare, apoi mergi mai departe.",
    micRefused: "Aplicația nu are voie să folosească microfonul. Îl poți porni.", // nieuw, nalezen
    micTurnOn: "Pornește microfonul", // nieuw, nalezen
    micStepsIos: "Atinge „•••” sau „aA” în bara de adrese › Configurări site web › Microfon › Permite. Sau: Configurări › Aplicații › Safari › Microfon. Apoi atinge butonul de mai jos.", // nieuw, nalezen
    micStepsIosOther: "Atinge pictograma din stânga adresei web › Permisiuni › Microfon › Permite. Sau: Configurări › Aplicații › {app} › Microfon. Apoi atinge butonul de mai jos.", // nieuw, nalezen
    micStepsAndroid: "Atinge pictograma din stânga adresei web › Permisiuni › Microfon › Permite. Apoi atinge butonul de mai jos.", // nieuw, nalezen
    micStepsAndroidApp: "Ține apăsat pe pictograma Vloertaal de pe ecranul principal › Informații aplicație › Permisiuni › Microfon › Permite. Apoi atinge butonul de mai jos.", // nieuw, nalezen
    micStepsDesktop: "Dă clic pe pictograma din stânga adresei web › Microfon › Permite. Apoi dă clic pe butonul de mai jos.", // nieuw, nalezen
    whichPicture: "Care imagine este?",
    sayAloudInstead: "Spune cu voce tare în schimb",
    wordsPractised: "Cuvinte exersate",
    reviewComplete: "Recapitularea s-a terminat!",
  },
  gloss: {
    'c.hello.a.why': "La un salut de rămas-bun se răspunde tot cu un salut de rămas-bun.",
    'c.people.a.why': "Întrebarea cere un nume. Acest răspuns îl dă.",
    'c.arrive.a.why': "Întrebarea e de ce a venit cineva. Răspunsul spune: e nou și începe azi.",
    'c.understand.a.why': "Ceva neînțeles? E normal să ceri repetarea.",
    'c.translate.a.why': "Bilețelul încă nu e clar, așa că întâi se traduce.",
    'c.understood.a.why': "Repetarea sarcinii verifică dacă instrucțiunea e clară.",
    'c.keeplearning.a.why': "E în regulă să ceri să se vorbească olandeză: exercițiul ajută.",
    'c.gear.a.why': "Întrebarea e despre cască: da, e pe cap.",
    'c.danger.a.why': "La un accident, întâi se sună la 112.",
    'c.alarm.a.why': "Întrebarea e dacă toți sunt afară: răspunsul spune cine lipsește încă.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.accident.a.why': "Întrebarea e ce s-a întâmplat: răspunsul spune ce s-a întâmplat și cum e el.",
    'c.notyet.a.why': "La „încearcă, e ușor”, răspunsul sigur e să ceri să ți se arate întâi.",
    'c.things.a.why': "Întrebarea e „unde”. Acest răspuns numește un loc.",
    'c.directions.a.why': "Stânga sau dreapta? Acest răspuns alege una și spune unde.",
    'c.shift.a.why': "Când începe tura? Acest răspuns spune ziua și ora.",
    'c.sick.a.why': "Boala înseamnă: rămâi acasă și anunți asta.",
    'd.speakup.a.why': "La întrebarea dacă e ceva în neregulă, un „da” sincer e bine.",
    'd.agree.a.why': "Ai voie să refuzi. Ajută să propui altă zi.",
    'd.task.a.why': "Întrebat dacă e gata: răspunsul spune „aproape” și cât mai durează.",
    'd.clear.a.why': "Întrebat dacă e clar: întâi „da”, apoi singura întrebare.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.cv.a.why': "O referință e un fost șef care poate vorbi despre muncă.",
    'c.interview.a.why': "La un interviu de angajare contează experiența de muncă.",
    'c.findwork.a.why': "Întrebarea e ce fel de muncă. Acest răspuns o numește.",
    'c.contract.a.why': "Un „da” plus o întrebare despre oră e clar și arată interes.",
    'c.agency.a.why': "Întrebarea e despre ore: da, și spune când și cum.",
    'c.bsn.a.why': "Angajatorul poate cere să vadă un act de identitate, de exemplu pașaportul.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.housing.a.why': "Banii reținuți din salariu trebuie conveniți în scris.",
    'c.payslip.a.why': "Orele lipsă de pe fluturașul de salariu trebuie semnalate.",
    'c.extra.a.why': "Orele suplimentare se notează, ca să poată fi verificate pe fluturașul de salariu.",
    'c.phone.a.why': "Fără telefon lângă utilaje: mesajele așteaptă pauza.",
    'c.smoking.a.why': "Pauzele sunt la ore fixe, nu mai devreme.",
    'c.clock.a.why': "Pontajul pentru altcineva nu e permis.",
    'c.hygiene.a.why': "Boneta pusă, bijuteriile scoase: reguli pentru mâncare curată.",
    'c.smalltalk.a.why': "Întrebarea e despre weekend: un singur lucru e de ajuns.",
    'c.mistakes.a.why': "La un compliment se răspunde cu mulțumesc.",
    'c.respect.a.why': "Hărțuirea trebuie spusă, ca cineva să poată ajuta.",
    'c.gossip.a.why': "Neparticiparea la bârfe păstrează încrederea în echipă.",
    'c.boundaries.a.why': "Ai voie să oprești o glumă care rănește. Spune-o clar.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.health.a.why': "Pauza protejează sănătatea, așa că se ia.",
    'c.rights.a.why': "O concediere nu se semnează niciodată pe loc. Întâi se cere sfat.",
    'c.mustmay.a.why': "Voluntar înseamnă că poți alege: nu e nevoie să lucrezi sâmbătă.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.leave.a.why': "Când? Acest răspuns dă o lună și cât timp.",
    'c.illness.a.why': "Detaliile medicale sunt pentru medicul de medicina muncii, nu pentru șef.",
    'c.warning.a.why': "Angajatorul poate copia pașaportul, nu îl poate păstra.",
    'c.gethelp.a.why': "Când se spune clar ce nu e în regulă, ei pot ajuta.",
    'c.callin.a.why': "Când te întorci? Acest răspuns dă o zi.",
    'c.texting.a.why': "Un răspuns rapid în aplicație ajută planificarea.",
    'c.certs.a.why': "Un „nu” sincer, plus dorința de a învăța: un răspuns bun.",
    'c.diploma.a.why': "„Da” la curs și întrebarea cine plătește sunt normale.",
    'c.doctor.a.why': "Serviciul de gardă trebuie să știe cine e bolnav și ce are.",
    'c.insurance.a.why': "Numele asigurătorului e pe cardul de asigurare de sănătate.",
    'c.letters.a.why': "Declarația de impozit se depune până la 1 mai.",
    'c.scams.a.why': "O bancă nu cere niciodată PIN-ul. Închiderea telefonului e corectă.",
    'c.bike.a.why': "Cum? Acest răspuns dă mijlocul de transport și timpul.",
    'c.transit.a.why': "Nu trenul: acest răspuns numește autobuzul.",
    'c.ww.a.why': "Ajutorul de șomaj (WW) trebuie cerut imediat.",
    'c.newjob.a.why': "Un număr de telefon le permite să sune înapoi.",
    'c.tools.a.why': "Unde? Acest răspuns dă locul: în dubă.",
    'c.site.a.why': "Pe acoperiș, protecția împotriva căderii vine mereu prima.",
    'c.line.a.why': "Cum merge? Acest răspuns spune cum și numește problema.",
    'c.quality.a.why': "De ce e pus deoparte? Acest răspuns dă defectul.",
    'c.client.a.why': "Un client cere ajutor: un „da” politicos, cu „u”.",
    'c.privacy.a.why': "Medicamentele sunt pentru personal instruit: le dă asistenta.",
    'c.kitchen.a.why': "O alergie e serioasă: bucătarul-șef trebuie să știe.",
    'c.service.a.why': "Nota de plată cerută: un „da” scurt, și mergi imediat.",
    'c.cleaning.a.why': "Gata? Acest răspuns spune aproape, și câte au rămas.",
    'c.cleansafe.a.why': "O podea udă alunecă: un avertisment ajută.",
    'c.shelves.a.why': "Întrebarea e „unde”. Răspunsul spune culoarul și oferă ajutor.",
    'c.checkout.a.why': "Se întreabă dacă se poate plăti cu cardul: un „da” scurt și prietenos.",
    'c.counting.a.why': "Întrebarea e câte sunt: răspunsul dă numărul și îl verifică cifră cu cifră.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.hours.a.why': "Întrebarea e despre oră. Răspunsul dă o oră.",
    'c.measures.a.why': "Întrebarea e despre lungime. Răspunsul dă o lungime.",
    'c.aihelp.a.why': "Te întreabă cine a scris: un „da” sincer, care spune cine a ajutat.",
    'c.aiprivate.a.why': "Ți se cere să pui nume într-un chatbot: răspunsul spune „nu” și de ce.",
    'c.aifake.a.why': "Un număr nou cere bani: răspunsul verifică întâi.",
    'c.aiplan.a.why': "Programul l-a făcut o aplicație: răspunsul cere un om.",
    // In de kas (u.kas, 30 okt 2026): nagelezen (2e lezing).
    'c.harvest.a.why': "Întrebarea e câte rânduri: răspunsul ăsta dă un număr și ce a mai rămas.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.a.why': "Tocmai stropită: răspunsul ăsta spune „încă nu” și de ce.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    // nagelezen (2e lezing): why the chat replies of the new lessons fit (30 October 2026).
    'c.details.a.why': "Întrebarea e numele de familie: răspunsul ăsta îl dă și se oferă să-l spună pe litere.", // nagelezen AI 22 nov
    'c.dates.a.why': "Întrebarea e data: răspunsul ăsta dă ziua și data.", // nagelezen AI 22 nov
    'c.permit.a.why': "Un „nu” e în regulă dacă dai un motiv. Ajută să propui altă zi.", // nagelezen AI 22 nov
    'c.kids.a.why': "Întrebarea e de ce: răspunsul ăsta dă motivul, a sunat creșa.", // nagelezen AI 22 nov
    'c.body.a.why': "Întrebarea e unde doare: răspunsul ăsta spune locul și cauza.", // nagelezen AI 22 nov
    'c.jobends.a.why': "Casa e legată de muncă: răspunsul ăsta întreabă de perioada de preaviz.", // nagelezen AI 22 nov
    // Entree in the Taal track (30 October 2026), why the chat replies fit: nieuw, nalezen.
    'c.workorder.a.why': "Nu ești sigur de un cuvânt: să întrebi înainte să începi e răspunsul bun.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handover.a.why': "Întrebat dacă totul e gata: răspunsul acesta spune ce nu e gata, și de ce.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.a.why': "Întrebat de ce: răspunsul acesta dă motivul, ochii trebuie protejați.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.a.why': "Lucru la o lampă: răspunsul acesta întreabă întâi dacă e oprit curentul.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.garage.a.why': "Rugat să schimbe anvelopele: un da, și o întrebare despre unde sunt.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carjob.a.why': "Lucru în plus: clientul trebuie să fie de acord întâi, deci răspunsul acesta îl întreabă pe șef.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.a.why': "Întrebat când: răspunsul acesta dă ziua, iar contractul vine primul.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.a.why': "Feedbackul nu e clar încă: să ceri să ți se arate e un răspuns bun.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.council.a.why': "Întrebat de vot: un da, și cele două lucruri de luat.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.a.why': "Poliția cere actul: îl arăți și întrebi ce s-a întâmplat.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.a.why': "Întrebat dacă merge autentificarea: răspunsul acesta spune nu, și de ce.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.a.why': "Întrebat de link: un da sincer, și un telefon la departamentul IT.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.a.why': "Întrebat despre punctele tari: răspunsul acesta numește unul, cu un exemplu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.a.why': "Întrebat de plan: răspunsul acesta numește bbl și ce înseamnă.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.a.why': "Întrebat dacă l-a trimis: încă nu, întâi e verificat.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.a.why': "I se oferă „plătești mai târziu”: un nu politicos, cu motivul.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.a.why': "I se oferă o pastilă: un nu politicos, cu motivul.", // nieuw, nalezen // nagelezen AI 22 nov
    // Vertaalronde 5 november 2026.
    'd.newcolleague.a.why': "„Cred” nu e încă sigur: când ceri să-ți arate, verifici că merge.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.a.why': "Întrebarea e de ce se curăță linia: următorul produs e fără nuci.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.a.why': "Întrebarea e dacă coletul e pentru persoana respectivă: da, și apoi semnătura.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.a.why': "I se cere încă o cursă: nu, pentru că pauza e mai întâi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.a.why': "Întrebarea e cât de lat: un număr cu unitatea lui, și notat.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.a.why': "Întrebarea e unde merge lemnul: un loc, și unde e locul acela.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.a.why': "Întrebarea e ce s-a întâmplat: da, și ce anume, și cât timp.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.a.why': "Întrebarea e cum îi merge: ce se vede, și că e ceva nou.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.a.why': "Ți se cere să ridici o persoană: nu fără ajutor, întâi vine liftul.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.a.why': "Se cer pahare curate: da, și când vin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.a.why': "O comandă de la bucătarul-șef: repetată, ca el să știe că ai auzit.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.a.why': "Întrebarea e dacă biroul e făcut: nu, cu motivul.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.a.why': "Întrebarea e despre o lavetă: nu, pentru că roșu e pentru toaletă.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.a.why': "Se cere lapte: nu un „nu”, ci te uiți în depozit.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.a.why': "Un client furios: cuvinte calme, și vine un coleg.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.a.why': "Întrebarea e ce se culege: culoarea arată ce e copt.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.a.why': "Vine furtuna: să te oprești și să intri înăuntru e alegerea sigură.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.a.why': "Întrebarea e dacă se potrivește: nu, și măsori din nou înainte să forțezi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.a.why': "Întrebarea e dacă se poate lua în mână: încă nu, metalul fierbinte trebuie să se răcească.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.a.why': "Întrebarea e ce auzi: care piesă, și ce face.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.a.why': "Întrebarea e dacă poți începe lucrul: încă nu, pentru că mașina e electrică.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.a.why': "Întrebarea e cum te simți: un „da” scurt și că o iei încet.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.a.why': "Întrebarea e cum te simți: un „nu prea” sincer e în regulă.", // nieuw, nalezen // nagelezen AI 22 nov
    // Goed communiceren en Feedback en overleg (5 november 2026).
    'd.explain.a.why': "Întrebat ce nu e în regulă: răspunsul spune ce și de ce e nevoie.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.listen.a.why': "Nu știi sigur dacă e o glumă: mai bine întrebi decât să ghicești.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.calm.a.why': "Întrebat de ce nu e gata: un motiv spus calm și ce vine întâi.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.talkintime.a.why': "Cineva cere puțin timp: un „da” și o întrebare, ca să poată povesti.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.reachable.a.why': "Suni înapoi după un apel pierdut: un salut și de ce suni.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.getfeedback.a.why': "Ți se oferă feedback: un „da” și că vrei să faci treaba bine.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.givefeedback.a.why': "Întrebat despre muncă: întâi ce e bine, apoi ce poate fi mai bine.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.meeting.a.why': "Se cer întrebări: răspunsul pune una, despre programul de lucru.", // nieuw, nalezen // nagelezen AI 22 nov
    // Logistiek at four lessons per unit (14 November 2026).
    'c.picking.a.why': "Întrebarea e care e locația: răspunsul spune culoarul și locul.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.loading.a.why': "Întrebat dacă paletul e gata: răspunsul spune „nu” și ce mai trebuie.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.a.why': "Întrebat dacă duba e în regulă: răspunsul spune „nu” și ce e stricat.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.a.why': "Întrebat unde ești: răspunsul spune locul și cu cât întârzii.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Hulp vragen" at four lessons (14 November 2026).
    'c.howto.a.why': "Întrebarea e dacă știi cum: nu, încă nu, spus sincer.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mayask.a.why': "Întrebarea e dacă ai o întrebare: da, și întâi dacă e timp.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.whereis.a.why': "Întrebarea e dacă găsești: nu, și o rugăminte să ți se arate.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Instructies", a new basis unit (u.do, 14 November 2026).
    'c.putdown.a.why': "Rugămintea e să țină ceva: da, și întreabă unde să-l pună.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.a.why': "Întrebarea e dacă ușa e închisă: nu, și o închide acum.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.a.why': "Întrebarea e dacă e plin: da, și îl golește.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.a.why': "Rugămintea e să o facă acum: da, și întreabă ce vine după.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Tegels, stuc en verf", a new sector unit of Bouw (u.afbouw, 20 November 2026).
    'c.tiletools.a.why': "Întrebarea e unde e mixerul: un loc, și ce e aproape de el.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.a.why': "Întrebarea e de unde să înceapă: din mijloc, de pe linia de mijloc.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.a.why': "Întrebarea e dacă peretele e uscat: nu, și cât să mai aștepte.", // nieuw, nalezen // nagelezen AI 22 nov
    // l.paint, l.prep, "Metselen, hout en vastmaken", three lessons of Rekenen and "Machines en gereedschap" (20-21 November 2026).
    'c.shapes.a.why': "Întrebarea e dacă e un pătrat: nu, un dreptunghi, și de ce.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.a.why': "Întrebarea e câte grade: numărul, și din ce e jumătate.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.a.why': "Întrebarea e cât de mare e podeaua: calculul și rezultatul.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.a.why': "Întrebarea e ce pensulă: lată pentru perete, mică pentru colțuri.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.a.why': "Întrebarea e dacă poate vopsi: nu, și ce vine întâi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.a.why': "Întrebarea e câte cărămizi au mai rămas: un palet, și că e destul.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.a.why': "Întrebarea e cât de înalt trebuie să fie rândul: unde se poate vedea.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.a.why': "Întrebarea e ce fierăstrău: fierăstrăul cu spate, și de ce.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.a.why': "Întrebarea e dacă unghiul e drept: da, și de unde se știe.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.a.why': "Întrebarea e unde e bormașina: un loc, și că e aproape plină.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.a.why': "Întrebarea e cum se fixează raftul: cu ce și câte.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.a.why': "Întrebarea e de ce se oprește: senzorul, și ce nu vede.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.a.why': "Întrebarea e cât de des: o dată pe oră, și unde se notează.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.a.why': "Întrebarea e câte într-o cutie: numărul, și unde scrie.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.a.why': "Întrebarea e când: ziua din săptămână, și momentul din acea zi.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Elektra, leidingen en metaal" (u.install, 21 November 2026).
    'c.wiring.a.why': "Întrebarea e ce fir unde merge: aceeași culoare la aceeași culoare.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.a.why': "Întrebarea e dacă e voie să fie deschis: nu, și cine o face.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.a.why': "Întrebarea e dacă mai curge: puțin, și ce se face.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.a.why': "Întrebarea e de ce e ascuțită: mai e o bavură pe ea.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Assemblage en montage" (u.montage, 21 November 2026).
    'c.assembly.a.why': "Întrebarea e ce pas: numărul, și unde să se uite.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.a.why': "Întrebarea e cât de strâns: până face cheia clic.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.a.why': "Întrebarea e dacă e voie să stea acolo: nu, niciodată, și de ce.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.a.why': "Întrebarea e dacă e bun: nu, și ce defect are.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Kweken, sorteren en de kas" (u.kweek) and "Banden, olie en remmen" (u.carservice), 22 November 2026.
    'c.sowing.a.why': "Întrebarea e cât de adânc: adâncimea, și nu mai adânc.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.a.why': "Întrebarea e dacă e coaptă: nu, e prea verde, și ce se face.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.a.why': "Întrebarea e de ce e cald: ecranul și ferestrele sunt închise.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.a.why': "Întrebarea e dacă e voie să fie omorâtă: nu, și de ce ajută.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.a.why': "Întrebarea e dacă trebuie scoase: da, și de ce.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.a.why': "Întrebarea e cât: litrii, și cum se verifică.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.a.why': "Întrebarea e dacă trebuie unul nou: da, și de ce.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.a.why': "Întrebarea e ce trebuie făcut: uită-te pe fișa de lucru.", // nieuw, nalezen // nagelezen AI 22 nov
    // The new sectors Groen, Facilitair, Beveiliging, Voedingsindustrie, Afval en recycling and Kinderopvang (23 November 2026).
    'c.mowing.a.why': "Se întreabă dacă ai voie să-l iei: da, și ce faci întâi.", // nieuw, nalezen
    'c.pruning.a.why': "Se întreabă ce crengi: doar cele uscate.", // nieuw, nalezen
    'c.hedge.a.why': "Se întreabă cât de înalt: până la sfoară, nu mai jos.", // nieuw, nalezen
    'c.chainsaw.a.why': "Se întreabă dacă ai voie: încă nu, și ce vine întâi.", // nieuw, nalezen
    'c.weeding.a.why': "Se întreabă dacă e buruiană: nu, și ce faci cu ea.", // nieuw, nalezen
    'c.planting.a.why': "Se întreabă unde se pune: locul din stratul de flori.", // nieuw, nalezen
    'c.roadside.a.why': "Se întreabă dacă poți traversa: nu, așteaptă, și de ce.", // nieuw, nalezen
    'c.litter.a.why': "Un locuitor întreabă când: nu știi, dar spui cine știe.", // nieuw, nalezen
    'c.reception.a.why': "Un vizitator are o programare: un moment, suni tu.", // nieuw, nalezen
    'c.visitors.a.why': "Se întreabă unde se lasă haina: locul, și unde e.", // nieuw, nalezen
    'c.mailroom.a.why': "Se întreabă pentru cine e: departamentul și etajul.", // nieuw, nalezen
    'c.meetingroom.a.why': "Se întreabă la ce oră: ora, și ce trebuie făcut.", // nieuw, nalezen
    'c.faults.a.why': "Se întreabă de ce e frig: ce e stricat și când vine ajutorul.", // nieuw, nalezen
    'c.repairs.a.why': "Se întreabă dacă piuie: da, și de ce.", // nieuw, nalezen
    'c.moving.a.why': "Se întreabă unde trebuie dus: camera, și unde să te uiți.", // nieuw, nalezen
    'c.closing.a.why': "Se întreabă dacă mai e cineva înăuntru: nu, și ce faci acum.", // nieuw, nalezen
    'c.patrol.a.why': "Se întreabă dacă ai văzut ceva: da, ce și unde.", // nieuw, nalezen
    'c.access.a.why': "Cineva vrea să intre fără card: îmi pare rău, nu fără card.", // nieuw, nalezen
    'c.cameras.a.why': "Se întreabă ce vezi: cine, unde și ce faci.", // nieuw, nalezen
    'c.report.a.why': "Se întreabă ce intră în raport: ce, unde și când.", // nieuw, nalezen
    'c.evacuation.a.why': "Se întreabă dacă sunt toți afară: nu, și câți lipsesc.", // nieuw, nalezen
    'c.firstaid.a.why': "Se întreabă unde e defibrilatorul: locul, și ce e lângă el.", // nieuw, nalezen
    'c.shoplifting.a.why': "Se întreabă dacă ai voie să cauți într-o geantă: nu, și cine face asta.", // nieuw, nalezen
    'c.aggression.a.why': "Se întreabă de ce nu: motivul, spus calm.", // nieuw, nalezen
    'c.hygienelock.a.why': "Se întreabă de ceas: nu, și regula din spatele lui.", // nieuw, nalezen
    'c.allergens.a.why': "Se întreabă dacă pot sta împreună: nu, și de ce.", // nieuw, nalezen
    'c.coldroom.a.why': "Se întreabă de ce piuie: cauza, și ce e de făcut.", // nieuw, nalezen
    'c.foreignbody.a.why': "Se întreabă ce e de făcut: cui să-i arăți.", // nieuw, nalezen
    'c.cutting.a.why': "Se întreabă cât: greutatea, și unde să te uiți.", // nieuw, nalezen
    'c.labels.a.why': "Se întreabă ce dată: când, și unde să te uiți.", // nieuw, nalezen
    'c.linecleaning.a.why': "Se întreabă dacă e curat: încă nu, și ce a mai rămas.", // nieuw, nalezen
    'c.haccp.a.why': "Se întreabă de ce: ca să știm că mâncarea e sigură.", // nieuw, nalezen
    'c.binlorry.a.why': "Se întreabă dacă poți merge pe spate: nu, și unde mergi.", // nieuw, nalezen
    'c.reversing.a.why': "Ți se cere ajutorul: da, unde stai și ce trebuie făcut.", // nieuw, nalezen
    'c.wastesorting.a.why': "Se întreabă unde se pune: unde merge, și de ce.", // nieuw, nalezen
    'c.wastesafety.a.why': "Se întreabă ce faci după o tăietură: speli rana și spui.", // nieuw, nalezen
    'c.yard.a.why': "Se întreabă unde se pune: containerul, și unde e.", // nieuw, nalezen
    'c.hazardous.a.why': "Se întreabă ce e înăuntru: nu știi, deci o pui deoparte.", // nieuw, nalezen
    'c.baler.a.why': "Se întreabă dacă te poți uita: nu, și ce vine întâi.", // nieuw, nalezen
    'c.shovel.a.why': "Se întreabă dacă poți trece: doar când te vede șoferul.", // nieuw, nalezen
    'c.nappies.a.why': "Se întreabă când: ora, și unde scrie.", // nieuw, nalezen
    'c.mealtime.a.why': "Se întreabă dacă are voie: nu, de ce, și unde să te uiți.", // nieuw, nalezen
    'c.naptime.a.why': "Se întreabă dacă doarme: da, de când, și că verifici.", // nieuw, nalezen
    'c.playtime.a.why': "Un copil întreabă dacă se poate juca: da, unde, și ce urmează.", // nieuw, nalezen
    'c.pickup.a.why': "Se întreabă cine îl ia: persoana, și că e pe listă.", // nieuw, nalezen
    'c.childsafety.a.why': "Se întreabă dacă a căzut: da, ce are, și pe cine suni.", // nieuw, nalezen
    'c.sickchild.a.why': "Se întreabă ce face: ce vezi, și ce faci.", // nieuw, nalezen
    'c.grouprules.a.why': "Se întreabă dacă ai voie să ieși fără un coleg: da, dar întâi îi spui unui coleg.", // nieuw, nalezen
    // Second units for Schoonmaak, Horeca, Zorg and Winkel, and the uitzendbureau (23 November 2026).
    'c.sanitary.a.why': "Se întreabă dacă e gata: încă nu, și de ce.", // nieuw, nalezen
    'c.hotelroom.a.why': "Se întreabă câte au mai rămas: numărul, și când termini.", // nieuw, nalezen
    'c.dosing.a.why': "Ți se spune să pui mai mult: nu, mai mult nu e mai bine, și ce folosești.", // nieuw, nalezen
    'c.officenight.a.why': "Se întreabă dacă lucrezi fără colegi: da, și trimiți un mesaj.", // nieuw, nalezen
    'c.knives.a.why': "Ți se cere să tai: da, chef, și o întrebare despre cum.", // nieuw, nalezen
    'c.rawcooked.a.why': "Se întreabă dacă e fără gluten: nu știi sigur, deci te uiți pe listă.", // nieuw, nalezen
    'c.pass.a.why': "Se întreabă unde e mâncarea: pe pass, și o duci acum.", // nieuw, nalezen
    'c.bill.a.why': "Se cere plata separată: da, și aduci POS-ul.", // nieuw, nalezen
    'c.washing.a.why': "Clientul spune nu: e în regulă, și oferi altceva.", // nieuw, nalezen
    'c.observing.a.why': "Se întreabă dacă e ceva deosebit: da, și ce anume.", // nieuw, nalezen
    'c.homecare.a.why': "Se întreabă cine e: un salut, cine ești, și dacă poți intra.", // nieuw, nalezen
    'c.liftaids.a.why': "Ți se cere s-o faci fără ajutor: da, cu cearșaful de alunecare, și îl iei.", // nieuw, nalezen
    'c.returns.a.why': "Se cere un retur: da, și o întrebare despre bon.", // nieuw, nalezen
    'c.facing.a.why': "Se întreabă dacă ai terminat: aproape, și ce a mai rămas.", // nieuw, nalezen
    'c.shrink.a.why': "Se cere să se uite în geantă: da, și arăți bonul.", // nieuw, nalezen
    'c.shopclose.a.why': "Se cere să intre: îmi pare rău, e închis, și când se deschide iar.", // nieuw, nalezen
    'c.hirer.a.why': "Ți se cere să începi într-un loc nou: da, și o întrebare despre oră.", // nieuw, nalezen
    'c.phases.a.why': "Ți se spune că munca se oprește: bine, și ceri altă muncă.", // nieuw, nalezen
    'c.deductions.a.why': "Ți se spune de o reținere: întrebi dacă e permisă și verifici.", // nieuw, nalezen
    'c.agencyhome.a.why': "Ți se spune să pleci curând: e puțin timp, și ceri întâi un sfat.", // nieuw, nalezen
    // The basis units at four lessons (23 November 2026).
    'c.roster.a.why': "Ți se spune că programul s-a schimbat: spui bine și întrebi ce zi.", // nieuw, nalezen
    'c.breaks.a.why': "Te întreabă de pauza de prânz: ora și cât durează.", // nieuw, nalezen
    'c.wound.a.why': "Cineva e pe punctul să leșine: îl lași să stea întins și aduci ajutor.", // nieuw, nalezen
    'c.callhelp.a.why': "Te întreabă dacă răspunde: nu, nu reacționează.", // nieuw, nalezen
    'c.vacancy.a.why': "Te întreabă de ce suni: pentru postul liber, și mai e valabil?", // nieuw, nalezen
    'c.result.a.why': "Ți se spune nu: răspunzi calm și întrebi de ce.", // nieuw, nalezen
    'c.residence.a.why': "Ți se spune că permisul expiră în curând: ceri imediat unul nou.", // nieuw, nalezen
    'c.newhome.a.why': "Te întreabă unde locuiești: o locuință nouă și noua adresă.", // nieuw, nalezen
    'c.payparts.a.why': "Ți se cere numărul de angajat: unde e pe fluturașul de salariu.", // nieuw, nalezen
    'c.latepay.a.why': "Ți se spune că banii vin mai târziu: vrei asta pe hârtie.", // nieuw, nalezen
    'c.holiday.a.why': "Ți se cere să pleci în mai: preferi iulie și spui de ce.", // nieuw, nalezen
    'c.special.a.why': "Te întreabă de concediul de naștere: da, și când.", // nieuw, nalezen
    'c.unwell.a.why': "Te întreabă dacă ești bine: nu, și poți merge acasă?", // nieuw, nalezen
    'c.injury.a.why': "Ți se cere o declarație: da, și o copie pentru tine.", // nieuw, nalezen
    'c.debt.a.why': "Ți se spune să rămâi până plătești datoria: nu e voie, ceri ajutor.", // nieuw, nalezen
    'c.inspection.a.why': "Ți se cere să vorbești: da, dar nu unde aude șeful.", // nieuw, nalezen
    'c.carpool.a.why': "Te întreabă cine conduce: tu, și când îi iei.", // nieuw, nalezen
    'c.train.a.why': "Te întreabă de ce ai întârziat: trenul, și ai trimis un mesaj.", // nieuw, nalezen
    'c.checklist.a.why': "Te întreabă dacă ai uitat ceva: încă o privire pe listă.", // nieuw, nalezen
    'c.leavesite.a.why': "Te întreabă dacă închizi tu: da, totul oprit și ușa încuiată.", // nieuw, nalezen
    'c.stagedays.a.why': "Te întreabă de ce ai lipsit: ți-a fost rău și ai sunat la amândouă.", // nieuw, nalezen
    'c.stageend.a.why': "Te întreabă de planuri: întâi diploma, apoi munca.", // nieuw, nalezen
    'c.neighbours.a.why': "O vecină nouă te salută: te bucuri să o cunoști și îți spui numele.", // nieuw, nalezen
    'c.join.a.why': "Te întreabă dacă vii: da, și vrei să vorbești cu profesorul.", // nieuw, nalezen
    'c.workphotos.a.why': "Ți se cere o poză pentru internet: un nu politicos.", // nieuw, nalezen
    'c.device.a.why': "Te întreabă de o aplicație nouă: întâi întrebi la departamentul IT.", // nieuw, nalezen
    // "Veiligheid op het werk" and the VOG (23 November 2026).
    'c.safetysigns.a.why': "Te întreabă ce înseamnă un indicator: atenție, și ce indicator e.", // nieuw, nalezen
    'c.substances.a.why': "Te întreabă dacă e toxic: nu ghicești, te uiți.", // nieuw, nalezen
    'c.firefight.a.why': "Ți se spune că e foc: e mic, deci iei extinctorul.", // nieuw, nalezen
    'c.permitwork.a.why': "Te întreabă cine stă afară: tu, și sarcina ta.", // nieuw, nalezen
    'c.vog.a.why': "Te întreabă de VOG: încă nu, și ce aștepți.", // nieuw, nalezen
    // "Operator in de procesindustrie" (23 November 2026).
    'c.plantround.a.why': "Te întreabă de alarmă: ce e prea mare și unde.", // nieuw, nalezen
    'c.plantfault.a.why': "Întrebarea e dacă linia poate porni: nu, încă e un lacăt pe ea.", // nieuw, nalezen
    'c.shiftwork.a.why': "Te întreabă ce s-a întâmplat: defecțiunea și unde e scrisă.", // nieuw, nalezen
    'c.heatdust.a.why': "Întrebarea e despre telefon: nu, din cauza pericolului de aici.", // nieuw, nalezen
    // eight new lessons (26 November 2026).
    'c.debthelp.a.why': "Ți se spune că factura nu e plătită: da, și ceri un plan de rate.", // nieuw, nalezen
    'c.taxes.a.why': "Ți se spune că e un plic albastru: mulțumești și îl deschizi imediat.", // nieuw, nalezen
    'c.discrimination.a.why': "Te întreabă dacă ești bine: nu, și o să raportezi.", // nieuw, nalezen
    'c.union.a.why': "Te întreabă de ce ești în sindicat: te apără.", // nieuw, nalezen
    'c.kiln.a.why': "Întrebarea e dacă cioburile se pot strânge cu mâna: nu, cu mătura mică și fărașul.", // nieuw, nalezen
    'c.mixlab.a.why': "Întrebarea e dacă șarja e aprobată: încă nu, laboratorul o testează.", // nieuw, nalezen
    'c.firstweeks.a.why': "Te întreabă de tur: aproape tot, și o întrebare.", // nieuw, nalezen
    'c.orderpick.a.why': "Ți se cere să conduci stivuitorul retractabil: nu, fără instruire pentru asta.", // nieuw, nalezen
  },
};

export default t;
