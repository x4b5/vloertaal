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
    'c.alarm.a.why': "Întrebarea e dacă toți sunt afară: răspunsul spune cine lipsește încă.", // nieuw, nalezen
    'c.accident.a.why': "Întrebarea e ce s-a întâmplat: răspunsul spune ce s-a întâmplat și cum e el.",
    'c.notyet.a.why': "La „încearcă, e ușor”, răspunsul sigur e să ceri să ți se arate întâi.",
    'c.things.a.why': "Întrebarea e „unde”. Acest răspuns numește un loc.",
    'c.directions.a.why': "Stânga sau dreapta? Acest răspuns alege una și spune unde.",
    'c.shift.a.why': "Când începe tura? Acest răspuns spune ziua și ora.",
    'c.sick.a.why': "Boala înseamnă: rămâi acasă și anunți asta.",
    'd.speakup.a.why': "La întrebarea dacă e ceva în neregulă, un „da” sincer e bine.",
    'd.agree.a.why': "Ai voie să refuzi. Ajută să propui altă zi.",
    'd.task.a.why': "Întrebat dacă e gata: răspunsul spune „aproape” și cât mai durează.",
    'd.clear.a.why': "Întrebat dacă e clar: întâi „da”, apoi singura întrebare.", // nieuw, nalezen
    'c.cv.a.why': "O referință e un fost șef care poate vorbi despre muncă.",
    'c.interview.a.why': "La un interviu de angajare contează experiența de muncă.",
    'c.findwork.a.why': "Întrebarea e ce fel de muncă. Acest răspuns o numește.",
    'c.contract.a.why': "Un „da” plus o întrebare despre oră e clar și arată interes.",
    'c.agency.a.why': "Întrebarea e despre ore: da, și spune când și cum.",
    'c.bsn.a.why': "Angajatorul poate cere să vadă un act de identitate, de exemplu pașaportul.", // nieuw, nalezen (AI-correctie 2 nov 2026)
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
    'c.boundaries.a.why': "Ai voie să oprești o glumă care rănește. Spune-o clar.", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.health.a.why': "Pauza protejează sănătatea, așa că se ia.",
    'c.rights.a.why': "O concediere nu se semnează niciodată pe loc. Întâi se cere sfat.",
    'c.mustmay.a.why': "Voluntar înseamnă că poți alege: nu e nevoie să lucrezi sâmbătă.", // nieuw, nalezen
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
    'c.counting.a.why': "Întrebarea e câte sunt: răspunsul dă numărul și îl verifică cifră cu cifră.", // nieuw, nalezen
    'c.hours.a.why': "Întrebarea e despre oră. Răspunsul dă o oră.",
    'c.measures.a.why': "Întrebarea e despre lungime. Răspunsul dă o lungime.",
    'c.aihelp.a.why': "Te întreabă cine a scris: un „da” sincer, care spune cine a ajutat.",
    'c.aiprivate.a.why': "Ți se cere să pui nume într-un chatbot: răspunsul spune „nu” și de ce.",
    'c.aifake.a.why': "Un număr nou cere bani: răspunsul verifică întâi.",
    'c.aiplan.a.why': "Programul l-a făcut o aplicație: răspunsul cere un om.",
    // In de kas (u.kas, 30 okt 2026): nagelezen (2e lezing).
    'c.harvest.a.why': "Întrebarea e câte rânduri: răspunsul ăsta dă un număr și ce a mai rămas.", // nagelezen (2e lezing)
    'c.greensafe.a.why': "Tocmai stropită: răspunsul ăsta spune „încă nu” și de ce.", // nagelezen (2e lezing)
    // nagelezen (2e lezing): why the chat replies of the new lessons fit (30 October 2026).
    'c.details.a.why': "Întrebarea e numele de familie: răspunsul ăsta îl dă și se oferă să-l spună pe litere.",
    'c.dates.a.why': "Întrebarea e data: răspunsul ăsta dă ziua și data.",
    'c.permit.a.why': "Un „nu” e în regulă dacă dai un motiv. Ajută să propui altă zi.",
    'c.kids.a.why': "Întrebarea e de ce: răspunsul ăsta dă motivul, a sunat creșa.",
    'c.body.a.why': "Întrebarea e unde doare: răspunsul ăsta spune locul și cauza.",
    'c.jobends.a.why': "Casa e legată de muncă: răspunsul ăsta întreabă de perioada de preaviz.",
    // Entree in the Taal track (30 October 2026), why the chat replies fit: nieuw, nalezen.
    'c.workorder.a.why': "Nu ești sigur de un cuvânt: să întrebi înainte să începi e răspunsul bun.", // nieuw, nalezen
    'c.handover.a.why': "Întrebat dacă totul e gata: răspunsul acesta spune ce nu e gata, și de ce.", // nieuw, nalezen
    'c.workshop.a.why': "Întrebat de ce: răspunsul acesta dă motivul, ochii trebuie protejați.", // nieuw, nalezen
    'c.power.a.why': "Lucru la o lampă: răspunsul acesta întreabă întâi dacă e oprit curentul.", // nieuw, nalezen
    'c.garage.a.why': "Rugat să schimbe anvelopele: un da, și o întrebare despre unde sunt.", // nieuw, nalezen
    'c.carjob.a.why': "Lucru în plus: clientul trebuie să fie de acord întâi, deci răspunsul acesta îl întreabă pe șef.", // nieuw, nalezen
    'c.placement.a.why': "Întrebat când: răspunsul acesta dă ziua, iar contractul vine primul.", // nieuw, nalezen
    'c.review.a.why': "Feedbackul nu e clar încă: să ceri să ți se arate e un răspuns bun.", // nieuw, nalezen
    'c.council.a.why': "Întrebat de vot: un da, și cele două lucruri de luat.", // nieuw, nalezen
    'c.police.a.why': "Poliția cere actul: îl arăți și întrebi ce s-a întâmplat.", // nieuw, nalezen
    'c.login.a.why': "Întrebat dacă merge autentificarea: răspunsul acesta spune nu, și de ce.", // nieuw, nalezen
    'c.phish.a.why': "Întrebat de link: un da sincer, și un telefon la departamentul IT.", // nieuw, nalezen
    'c.mychoice.a.why': "Întrebat despre punctele tari: răspunsul acesta numește unul, cu un exemplu.", // nieuw, nalezen
    'c.nextstep.a.why': "Întrebat de plan: răspunsul acesta numește bbl și ce înseamnă.", // nieuw, nalezen
    'c.email.a.why': "Întrebat dacă l-a trimis: încă nu, întâi e verificat.", // nieuw, nalezen
    'c.budget.a.why': "I se oferă „plătești mai târziu”: un nu politicos, cu motivul.", // nieuw, nalezen
    'c.healthy.a.why': "I se oferă o pastilă: un nu politicos, cu motivul.", // nieuw, nalezen
    // Vertaalronde 5 november 2026.
    'd.newcolleague.a.why': "„Cred” nu e încă sigur: când ceri să-ți arate, verifici că merge.", // nieuw, nalezen
    'c.food.a.why': "Întrebarea e de ce se curăță linia: următorul produs e fără nuci.", // nieuw, nalezen
    'c.parcel.a.why': "Întrebarea e dacă coletul e pentru persoana respectivă: da, și apoi semnătura.", // nieuw, nalezen
    'c.road.a.why': "I se cere încă o cursă: nu, pentru că pauza e mai întâi.", // nieuw, nalezen
    'c.measure.a.why': "Întrebarea e cât de lat: un număr cu unitatea lui, și notat.", // nieuw, nalezen
    'c.siteday.a.why': "Întrebarea e unde merge lemnul: un loc, și unde e locul acela.", // nieuw, nalezen
    'c.shifts.a.why': "Întrebarea e ce s-a întâmplat: da, și ce anume, și cât timp.", // nieuw, nalezen
    'c.signals.a.why': "Întrebarea e cum îi merge: ce se vede, și că e ceva nou.", // nieuw, nalezen
    'c.transfer.a.why': "Ți se cere să ridici o persoană: nu fără ajutor, întâi vine liftul.", // nieuw, nalezen
    'c.dishes.a.why': "Se cer pahare curate: da, și când vin.", // nieuw, nalezen
    'c.rush.a.why': "O comandă de la bucătarul-șef: repetată, ca el să știe că ai auzit.", // nieuw, nalezen
    'c.rounds.a.why': "Întrebarea e dacă biroul e făcut: nu, cu motivul.", // nieuw, nalezen
    'c.colours.a.why': "Întrebarea e despre o lavetă: nu, pentru că roșu e pentru toaletă.", // nieuw, nalezen
    'c.shophelp.a.why': "Se cere lapte: nu un „nu”, ci te uiți în depozit.", // nieuw, nalezen
    'c.shoptrouble.a.why': "Un client furios: cuvinte calme, și vine un coleg.", // nieuw, nalezen
    'c.plantcare.a.why': "Întrebarea e ce se culege: culoarea arată ce e copt.", // nieuw, nalezen
    'c.outdoors.a.why': "Vine furtuna: să te oprești și să intri înăuntru e alegerea sigură.", // nieuw, nalezen
    'c.drawing.a.why': "Întrebarea e dacă se potrivește: nu, și măsori din nou înainte să forțezi.", // nieuw, nalezen
    'c.weld.a.why': "Întrebarea e dacă se poate lua în mână: încă nu, metalul fierbinte trebuie să se răcească.", // nieuw, nalezen
    'c.carparts.a.why': "Întrebarea e ce auzi: care piesă, și ce face.", // nieuw, nalezen
    'c.carsafe.a.why': "Întrebarea e dacă poți începe lucrul: încă nu, pentru că mașina e electrică.", // nieuw, nalezen
    'c.backtowork.a.why': "Întrebarea e cum te simți: un „da” scurt și că o iei încet.", // nieuw, nalezen
    'c.feelwell.a.why': "Întrebarea e cum te simți: un „nu prea” sincer e în regulă.", // nieuw, nalezen
    // Goed communiceren en Feedback en overleg (5 november 2026).
    'd.explain.a.why': "Întrebat ce nu e în regulă: răspunsul spune ce și de ce e nevoie.", // nieuw, nalezen
    'd.listen.a.why': "Nu știi sigur dacă e o glumă: mai bine întrebi decât să ghicești.", // nieuw, nalezen
    'd.calm.a.why': "Întrebat de ce nu e gata: un motiv spus calm și ce vine întâi.", // nieuw, nalezen
    'd.talkintime.a.why': "Cineva cere puțin timp: un „da” și o întrebare, ca să poată povesti.", // nieuw, nalezen
    'd.reachable.a.why': "Suni înapoi după un apel pierdut: un salut și de ce suni.", // nieuw, nalezen
    'd.getfeedback.a.why': "Ți se oferă feedback: un „da” și că vrei să faci treaba bine.", // nieuw, nalezen
    'd.givefeedback.a.why': "Întrebat despre muncă: întâi ce e bine, apoi ce poate fi mai bine.", // nieuw, nalezen
    'd.meeting.a.why': "Se cer întrebări: răspunsul pune una, despre programul de lucru.", // nieuw, nalezen
  },
};

export default t;
