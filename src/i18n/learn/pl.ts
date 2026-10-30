import type { CultureTranslation } from '../culture/types';

/** Learning mechanics (G4 r1): speaking without a microphone, picture choice, build feedback, and why a chat reply fits (src/content/chatWhy.ts). */
const t: CultureTranslation = {
  ui: {
    sayAloud: "Mikrofon nie jest potrzebny. Powiedz to na głos, potem idź dalej.",
    micRetry: "Spróbuj jeszcze raz z mikrofonem",
    micFailed: "Mikrofon nie zadziałał. Powiedz to na głos, potem idź dalej.",
    whichPicture: "Który to obrazek?",
    wrongTapsN: "Błędne dotknięcia: {n}",
    sayAloudInstead: "Zamiast tego powiedz to na głos",
    wordsPractised: "Powtórzone słowa",
    reviewComplete: "Powtórka skończona!",
  },
  gloss: {
    'c.hello.a.why': "Na pożegnanie odpowiada się pożegnaniem.",
    'c.people.a.why': "Pytanie dotyczy imienia. Ta odpowiedź je podaje.",
    'c.arrive.a.why': "Pytanie, w jakiej sprawie: ta odpowiedź mówi, że to nowa osoba, która zaczyna dzisiaj.",
    'c.understand.a.why': "Czegoś nie rozumiesz? Prośba o powtórzenie jest normalna.",
    'c.translate.a.why': "Karteczka jest jeszcze niezrozumiała, więc najpierw się ją tłumaczy.",
    'c.understood.a.why': "Powtórzenie zadania sprawdza, czy polecenie jest jasne.",
    'c.keeplearning.a.why': "Prośba o mówienie po niderlandzku jest w porządku: ćwiczenie pomaga.",
    'c.gear.a.why': "Pytanie dotyczy kasku: tak, jest na głowie.",
    'c.danger.a.why': "W razie wypadku najpierw dzwoni się pod 112.",
    'c.accident.a.why': "Pytanie, co się stało: ta odpowiedź mówi, co się stało i w jakim on jest stanie.",
    'c.notyet.a.why': "Gdy ktoś mówi „po prostu spróbuj”, bezpieczna odpowiedź to poprosić, żeby najpierw pokazał.",
    'c.things.a.why': "Pytanie brzmi „gdzie”. Ta odpowiedź podaje miejsce.",
    'c.directions.a.why': "W lewo czy w prawo? Ta odpowiedź wybiera jedno i mówi, gdzie.",
    'c.shift.a.why': "Kiedy zaczyna się zmiana? Ta odpowiedź podaje dzień i godzinę.",
    'c.sick.a.why': "Kto jest chory, zostaje w domu i daje o tym znać.",
    'd.speakup.a.why': "Pytanie, czy coś jest nie tak: szczere „tak” jest dobre.",
    'd.agree.a.why': "Wolno odmówić. Propozycja innego dnia pomaga.",
    'd.task.a.why': "Pytanie, czy już gotowe: ta odpowiedź mówi „prawie” i ile jeszcze to potrwa.",
    'c.cv.a.why': "Referencja to były szef, który może opowiedzieć o pracy.",
    'c.interview.a.why': "Na rozmowie o pracę liczy się doświadczenie zawodowe.",
    'c.findwork.a.why': "Pytanie dotyczy rodzaju pracy. Ta odpowiedź ją nazywa.",
    'c.contract.a.why': "„Tak” i pytanie o godzinę to jasna i chętna odpowiedź.",
    'c.agency.a.why': "Pytanie o godziny: tak, a do tego kiedy i jak.",
    'c.bsn.a.why': "Pracodawca może poprosić o dokument tożsamości, np. paszport.",
    'c.housing.a.why': "Potrącenia z wypłaty muszą być uzgodnione na piśmie.",
    'c.payslip.a.why': "Brakujące godziny na pasku wypłaty trzeba zgłosić.",
    'c.extra.a.why': "Nadgodziny się zapisuje, żeby można je było sprawdzić na pasku wypłaty.",
    'c.phone.a.why': "Bez telefonu przy maszynach: wiadomości czekają do przerwy.",
    'c.smoking.a.why': "Przerwy są o stałych porach, nie wcześniej.",
    'c.clock.a.why': "Odbijanie karty za kogoś innego jest zabronione.",
    'c.hygiene.a.why': "Siatka na włosach, biżuteria zdjęta: zasady higieny żywności.",
    'c.smalltalk.a.why': "Pytanie dotyczy weekendu: jedna rzecz wystarczy.",
    'c.mistakes.a.why': "Na komplement odpowiada się podziękowaniem.",
    'c.respect.a.why': "O nękaniu trzeba powiedzieć, żeby ktoś mógł pomóc.",
    'c.gossip.a.why': "Unikanie plotek chroni zaufanie w zespole.",
    'c.boundaries.a.why': "Żart, który rani, można wyraźnie przerwać.",
    'c.health.a.why': "Przerwa chroni zdrowie, więc się ją bierze.",
    'c.rights.a.why': "Papieru o zwolnieniu nigdy nie podpisuje się od razu. Najpierw porada.",
    'c.leave.a.why': "Kiedy? Ta odpowiedź podaje miesiąc i jak długo.",
    'c.illness.a.why': "Szczegóły medyczne są dla lekarza zakładowego, nie dla szefa.",
    'c.warning.a.why': "Pracodawca może skopiować paszport, ale nie może go zatrzymać.",
    'c.gethelp.a.why': "Jasno powiedzieć, co jest nie tak: wtedy mogą pomóc.",
    'c.callin.a.why': "Kiedy powrót? Ta odpowiedź podaje dzień.",
    'c.texting.a.why': "Szybka odpowiedź w aplikacji pomaga w planowaniu.",
    'c.certs.a.why': "Szczere „nie” i chęć nauki: dobra odpowiedź.",
    'c.diploma.a.why': "„Tak” dla szkolenia i pytanie, kto płaci, to normalne.",
    'c.doctor.a.why': "Dyżur lekarski musi wiedzieć, kto jest chory i co mu jest.",
    'c.insurance.a.why': "Nazwa ubezpieczyciela jest na karcie ubezpieczenia zdrowotnego.",
    'c.letters.a.why': "Zeznanie podatkowe składa się do 1 maja.",
    'c.scams.a.why': "Bank nigdy nie pyta o PIN. Rozłączenie się jest słuszne.",
    'c.bike.a.why': "Jak? Ta odpowiedź podaje środek transportu i czas.",
    'c.transit.a.why': "Nie pociąg: ta odpowiedź podaje autobus.",
    'c.ww.a.why': "O zasiłek dla bezrobotnych (WW) trzeba wystąpić od razu.",
    'c.newjob.a.why': "Numer telefonu pozwala oddzwonić.",
    'c.tools.a.why': "Gdzie? Ta odpowiedź podaje miejsce: w busie.",
    'c.site.a.why': "Na dachu zabezpieczenie przed upadkiem jest zawsze najważniejsze.",
    'c.line.a.why': "Jak idzie? Ta odpowiedź mówi, jak idzie, i nazywa problem.",
    'c.quality.a.why': "Dlaczego odłożone? Ta odpowiedź podaje wadę.",
    'c.client.a.why': "Podopieczny prosi o pomoc: grzeczne „tak”, z „u”.",
    'c.privacy.a.why': "Leki są dla przeszkolonego personelu: podaje je pielęgniarka.",
    'c.kitchen.a.why': "Alergia to poważna sprawa: szef kuchni musi wiedzieć.",
    'c.service.a.why': "Prośba o rachunek: krótkie „tak” i już się idzie.",
    'c.cleaning.a.why': "Gotowe? Ta odpowiedź mówi „prawie” i ile zostało.",
    'c.cleansafe.a.why': "Mokra podłoga jest śliska: ostrzeżenie pomaga.",
    'c.shelves.a.why': "Pytanie brzmi „gdzie”. Ta odpowiedź podaje alejkę i oferuje pomoc.",
    'c.checkout.a.why': "Pytanie o płatność kartą: krótkie, miłe „tak”.",
    'c.hours.a.why': "Pytanie o godzinę. Ta odpowiedź podaje godzinę.",
    'c.measures.a.why': "Pytanie o długość. Ta odpowiedź podaje długość.",
    'c.aihelp.a.why': "Pytanie, kto to napisał: szczere „tak”, które mówi, kto pomógł.",
    'c.aiprivate.a.why': "Prośba o wpisanie nazwisk do chatbota: ta odpowiedź mówi „nie” i dlaczego.",
    'c.aifake.a.why': "Nowy numer prosi o pieniądze: ta odpowiedź najpierw to sprawdza.",
    'c.aiplan.a.why': "Grafik zrobiła aplikacja: ta odpowiedź prosi o człowieka.",
    // In de kas (u.kas, 30 okt 2026): nagelezen (2e lezing).
    'c.harvest.a.why': "Pytanie, ile rzędów: ta odpowiedź podaje liczbę i to, co zostało.", // nagelezen (2e lezing)
    'c.greensafe.a.why': "Dopiero co opryskana: ta odpowiedź mówi „jeszcze nie” i dlaczego.", // nagelezen (2e lezing)
    // nagelezen (2e lezing): why the chat replies of the new lessons fit (30 October 2026).
    'c.details.a.why': "Pytanie o nazwisko: ta odpowiedź je podaje i proponuje przeliterowanie.",
    'c.dates.a.why': "Pytanie o datę: ta odpowiedź podaje dzień i datę.",
    'c.permit.a.why': "Odmowa jest w porządku, jeśli podasz powód. Zaproponowanie innego dnia pomaga.",
    'c.kids.a.why': "Pytanie „dlaczego”: ta odpowiedź podaje powód, dzwonili ze żłobka.",
    'c.body.a.why': "Pytanie, gdzie boli: ta odpowiedź mówi, gdzie i dlaczego.",
    'c.jobends.a.why': "Mieszkanie jest związane z pracą: ta odpowiedź pyta o okres wypowiedzenia.",
    // Entree in the Taal track (30 October 2026), why the chat replies fit: nieuw, nalezen.
    'c.workorder.a.why': "Niepewne słowo: zapytać przed rozpoczęciem to dobra odpowiedź.", // nieuw, nalezen
    'c.handover.a.why': "Pytanie, czy wszystko gotowe: ta odpowiedź mówi, co nie jest gotowe i dlaczego.", // nieuw, nalezen
    'c.workshop.a.why': "Pytanie „dlaczego”: ta odpowiedź podaje powód, oczy trzeba chronić.", // nieuw, nalezen
    'c.power.a.why': "Praca przy lampie: ta odpowiedź najpierw pyta, czy prąd jest wyłączony.", // nieuw, nalezen
    'c.garage.a.why': "Prośba o zmianę opon: „tak” i pytanie, gdzie one są.", // nieuw, nalezen
    'c.carjob.a.why': "Dodatkowa praca: klient musi się najpierw zgodzić, więc ta odpowiedź do niego dzwoni.", // nieuw, nalezen
    'c.placement.a.why': "Pytanie „kiedy”: ta odpowiedź podaje dzień, a umowa jest najpierw.", // nieuw, nalezen
    'c.review.a.why': "Uwaga nie jest jeszcze jasna: prośba o pokazanie to dobra odpowiedź.", // nieuw, nalezen
    'c.council.a.why': "Pytanie o głosowanie: „tak” i dwie rzeczy, które trzeba zabrać.", // nieuw, nalezen
    'c.police.a.why': "Policja prosi o dokument: pokazać go i zapytać, co się dzieje.", // nieuw, nalezen
    'c.login.a.why': "Pytanie, czy logowanie działa: ta odpowiedź mówi „nie” i dlaczego.", // nieuw, nalezen
    'c.phish.a.why': "Pytanie o link: szczere „tak” i telefon do działu IT.", // nieuw, nalezen
    'c.mychoice.a.why': "Pytanie o mocne strony: ta odpowiedź podaje jedną, z przykładem.", // nieuw, nalezen
    'c.nextstep.a.why': "Pytanie o plan: ta odpowiedź nazywa bbl i mówi, co to znaczy.", // nieuw, nalezen
    'c.email.a.why': "Pytanie, czy mail poszedł: jeszcze nie, najpierw jest sprawdzany.", // nieuw, nalezen
    'c.budget.a.why': "Propozycja „kup teraz, zapłać później”: grzeczne „nie”, z powodem.", // nieuw, nalezen
    'c.healthy.a.why': "Propozycja tabletki: grzeczne „nie”, z powodem.", // nieuw, nalezen
  },
};

export default t;
