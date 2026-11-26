import type { CultureTranslation } from '../culture/types';

/** Learning mechanics (G4 r1): speaking without a microphone, picture choice, build feedback, and why a chat reply fits (src/content/chatWhy.ts). */
const t: CultureTranslation = {
  ui: {
    sayAloud: "Mikrofon nie jest potrzebny. Powiedz to na głos, potem idź dalej.",
    micRetry: "Spróbuj jeszcze raz z mikrofonem",
    micFailed: "Mikrofon nie zadziałał. Powiedz to na głos, potem idź dalej.",
    micRefused: "Aplikacja nie może używać mikrofonu. Możesz go włączyć.", // nieuw, nalezen
    micTurnOn: "Włącz mikrofon", // nieuw, nalezen
    micStepsIos: "Stuknij „•••” lub „aA” na pasku adresu › Ustawienia witryny › Mikrofon › Zezwalaj. Albo: Ustawienia › Aplikacje › Safari › Mikrofon. Potem stuknij przycisk poniżej.", // nieuw, nalezen
    micStepsIosOther: "Stuknij ikonę po lewej stronie adresu › Uprawnienia › Mikrofon › Zezwalaj. Albo: Ustawienia › Aplikacje › {app} › Mikrofon. Potem stuknij przycisk poniżej.", // nieuw, nalezen
    micStepsAndroid: "Stuknij ikonę po lewej stronie adresu › Uprawnienia › Mikrofon › Zezwalaj. Potem stuknij przycisk poniżej.", // nieuw, nalezen
    micStepsAndroidApp: "Przytrzymaj ikonę Vloertaal na ekranie głównym › Informacje o aplikacji › Uprawnienia › Mikrofon › Zezwalaj. Potem stuknij przycisk poniżej.", // nieuw, nalezen
    micStepsDesktop: "Kliknij ikonę po lewej stronie adresu › Mikrofon › Zezwalaj. Potem kliknij przycisk poniżej.", // nieuw, nalezen
    whichPicture: "Który to obrazek?",
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
    'c.alarm.a.why': "Pytanie, czy wszyscy wyszli: ta odpowiedź mówi, kogo jeszcze brakuje.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.accident.a.why': "Pytanie, co się stało: ta odpowiedź mówi, co się stało i w jakim on jest stanie.",
    'c.notyet.a.why': "Gdy ktoś mówi „po prostu spróbuj”, bezpieczna odpowiedź to poprosić, żeby najpierw pokazał.",
    'c.things.a.why': "Pytanie brzmi „gdzie”. Ta odpowiedź podaje miejsce.",
    'c.directions.a.why': "W lewo czy w prawo? Ta odpowiedź wybiera jedno i mówi, gdzie.",
    'c.shift.a.why': "Kiedy zaczyna się zmiana? Ta odpowiedź podaje dzień i godzinę.",
    'c.sick.a.why': "Kto jest chory, zostaje w domu i daje o tym znać.",
    'd.speakup.a.why': "Pytanie, czy coś jest nie tak: szczere „tak” jest dobre.",
    'd.agree.a.why': "Wolno odmówić. Propozycja innego dnia pomaga.",
    'd.task.a.why': "Pytanie, czy już gotowe: ta odpowiedź mówi „prawie” i ile jeszcze to potrwa.",
    'd.clear.a.why': "Pytanie, czy jasne: najpierw „tak”, potem to jedno pytanie.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.cv.a.why': "Referencja to były szef, który może opowiedzieć o pracy.",
    'c.interview.a.why': "Na rozmowie o pracę liczy się doświadczenie zawodowe.",
    'c.findwork.a.why': "Pytanie dotyczy rodzaju pracy. Ta odpowiedź ją nazywa.",
    'c.contract.a.why': "„Tak” i pytanie o godzinę to jasna i chętna odpowiedź.",
    'c.agency.a.why': "Pytanie o godziny: tak, a do tego kiedy i jak.",
    'c.bsn.a.why': "Pracodawca może poprosić o pokazanie dokumentu tożsamości, np. paszportu.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
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
    'c.mustmay.a.why': "Dobrowolne znaczy, że możesz wybrać: praca w sobotę nie jest potrzebna.",
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
    'c.counting.a.why': "Pytanie, ile: ta odpowiedź podaje liczbę i sprawdza ją cyfra po cyfrze.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.hours.a.why': "Pytanie o godzinę. Ta odpowiedź podaje godzinę.",
    'c.measures.a.why': "Pytanie o długość. Ta odpowiedź podaje długość.",
    'c.aihelp.a.why': "Pytanie, kto to napisał: szczere „tak”, które mówi, kto pomógł.",
    'c.aiprivate.a.why': "Prośba o wpisanie nazwisk do chatbota: ta odpowiedź mówi „nie” i dlaczego.",
    'c.aifake.a.why': "Nowy numer prosi o pieniądze: ta odpowiedź najpierw to sprawdza.",
    'c.aiplan.a.why': "Grafik zrobiła aplikacja: ta odpowiedź prosi o człowieka.",
    // In de kas (u.kas, 30 okt 2026): nagelezen (2e lezing).
    'c.harvest.a.why': "Pytanie, ile rzędów: ta odpowiedź podaje liczbę i to, co zostało.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.a.why': "Dopiero co opryskana: ta odpowiedź mówi „jeszcze nie” i dlaczego.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    // nagelezen (2e lezing): why the chat replies of the new lessons fit (30 October 2026).
    'c.details.a.why': "Pytanie o nazwisko: ta odpowiedź je podaje i proponuje przeliterowanie.", // nagelezen AI 22 nov
    'c.dates.a.why': "Pytanie o datę: ta odpowiedź podaje dzień i datę.", // nagelezen AI 22 nov
    'c.permit.a.why': "Odmowa jest w porządku, jeśli podasz powód. Zaproponowanie innego dnia pomaga.", // nagelezen AI 22 nov
    'c.kids.a.why': "Pytanie „dlaczego”: ta odpowiedź podaje powód, dzwonili ze żłobka.", // nagelezen AI 22 nov
    'c.body.a.why': "Pytanie, gdzie boli: ta odpowiedź mówi, gdzie i dlaczego.", // nagelezen AI 22 nov
    'c.jobends.a.why': "Mieszkanie jest związane z pracą: ta odpowiedź pyta o okres wypowiedzenia.", // nagelezen AI 22 nov
    // Entree in the Taal track (30 October 2026), why the chat replies fit: nieuw, nalezen.
    'c.workorder.a.why': "Niepewne słowo: zapytać przed rozpoczęciem to dobra odpowiedź.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handover.a.why': "Pytanie, czy wszystko gotowe: ta odpowiedź mówi, co nie jest gotowe i dlaczego.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.a.why': "Pytanie „dlaczego”: ta odpowiedź podaje powód, oczy trzeba chronić.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.a.why': "Praca przy lampie: ta odpowiedź najpierw pyta, czy prąd jest wyłączony.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.garage.a.why': "Prośba o zmianę opon: „tak” i pytanie, gdzie one są.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carjob.a.why': "Dodatkowa praca: klient musi się najpierw zgodzić, więc ta odpowiedź pyta szefa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.a.why': "Pytanie „kiedy”: ta odpowiedź podaje dzień, a umowa jest najpierw.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.a.why': "Uwaga nie jest jeszcze jasna: prośba o pokazanie to dobra odpowiedź.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.council.a.why': "Pytanie o głosowanie: „tak” i dwie rzeczy, które trzeba zabrać.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.a.why': "Policja prosi o dokument: pokazać go i zapytać, co się dzieje.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.a.why': "Pytanie, czy logowanie działa: ta odpowiedź mówi „nie” i dlaczego.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.a.why': "Pytanie o link: szczere „tak” i telefon do działu IT.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.a.why': "Pytanie o mocne strony: ta odpowiedź podaje jedną, z przykładem.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.a.why': "Pytanie o plan: ta odpowiedź nazywa bbl i mówi, co to znaczy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.a.why': "Pytanie, czy mail poszedł: jeszcze nie, najpierw jest sprawdzany.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.a.why': "Propozycja „kup teraz, zapłać później”: grzeczne „nie”, z powodem.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.a.why': "Propozycja tabletki: grzeczne „nie”, z powodem.", // nieuw, nalezen // nagelezen AI 22 nov
    // Vertaalronde 5 november 2026.
    'd.newcolleague.a.why': "„Chyba” to jeszcze nie pewność: kiedy prosisz, żeby pokazał, sprawdzasz, czy to działa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.a.why': "Pytanie, dlaczego czyści się linię: następny produkt jest bez orzechów.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.a.why': "Pytanie, czy paczka jest dla tej osoby: tak, a potem podpis.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.a.why': "Prośba o jeszcze jeden kurs: nie, bo najpierw jest przerwa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.a.why': "Pytanie, jak szerokie: liczba z jednostką i zapisana.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.a.why': "Pytanie, gdzie ma trafić drewno: miejsce i gdzie ono jest.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.a.why': "Pytanie, co się stało: tak, co i jak długo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.a.why': "Pytanie, jak on się czuje: co widzisz i że to coś nowego.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.a.why': "Prośba o podniesienie człowieka: nie w pojedynkę, najpierw podnośnik.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.a.why': "Pytanie o czyste szklanki: tak i kiedy będą.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.a.why': "Polecenie szefa kuchni: powtórzone, żeby wiedział, że słyszysz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.a.why': "Pytanie, czy biuro jest zrobione: nie, z powodem.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.a.why': "Pytanie o ściereczkę: nie, bo czerwona jest do toalety.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.a.why': "Pytanie o mleko: nie samo „nie”, tylko sprawdzenie w magazynie.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.a.why': "Zdenerwowany klient: spokojne słowa i przychodzi kolega.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.a.why': "Pytanie, które zbierać: kolor mówi, co jest dojrzałe.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.a.why': "Idzie burza: przerwać pracę i iść do środka to bezpieczny wybór.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.a.why': "Pytanie, czy pasuje: nie, i ponowny pomiar zamiast siły.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.a.why': "Pytanie, czy można to wziąć: jeszcze nie, gorący metal musi ostygnąć.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.a.why': "Pytanie, co słyszysz: która część i co robi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.a.why': "Pytanie, czy można zacząć pracę: jeszcze nie, bo samochód jest elektryczny.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.a.why': "Pytanie, jak się czujesz: krótkie „tak” i że robisz wszystko powoli.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.a.why': "Pytanie, jak się czujesz: szczere „nie bardzo” jest w porządku.", // nieuw, nalezen // nagelezen AI 22 nov
    // Goed communiceren en Feedback en overleg (5 november 2026).
    'd.explain.a.why': "Pytanie, co jest nie tak: ta odpowiedź mówi co i czego potrzeba.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.listen.a.why': "Nie wiadomo, czy to żart: lepiej zapytać, niż zgadywać.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.calm.a.why': "Pytanie, dlaczego to nie jest gotowe: spokojny powód i co zrobić najpierw.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.talkintime.a.why': "Ktoś prosi o chwilę: „tak” i pytanie, żeby ta osoba mogła opowiedzieć.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.reachable.a.why': "Oddzwaniasz po nieodebranym połączeniu: powitanie i powód telefonu.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.getfeedback.a.why': "Propozycja feedbacku: „tak” i że chcesz to robić dobrze.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.givefeedback.a.why': "Pytanie o pracę: najpierw co jest dobre, potem co może być lepsze.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.meeting.a.why': "Pytanie, czy są pytania: ta odpowiedź zadaje jedno, o grafik.", // nieuw, nalezen // nagelezen AI 22 nov
    // Logistiek at four lessons per unit (14 November 2026).
    'c.picking.a.why': "Pytanie, która lokalizacja: alejka i przegródka.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.loading.a.why': "Pytanie, czy paleta jest gotowa: nie, i czego jeszcze potrzebuje.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.a.why': "Pytanie, czy z busem wszystko w porządku: nie, i co jest zepsute.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.a.why': "Pytanie, gdzie jesteś: miejsce i ile się spóźnisz.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Hulp vragen" at four lessons (14 November 2026).
    'c.howto.a.why': "Pytanie, czy wiesz, jak: nie, jeszcze nie, powiedziane szczerze.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mayask.a.why': "Pytanie, czy masz pytanie: tak, a najpierw, czy jest czas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.whereis.a.why': "Pytanie, czy możesz to znaleźć: nie, i prośba o wskazanie.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Instructies", a new basis unit (u.do, 14 November 2026).
    'c.putdown.a.why': "Prośba o potrzymanie: tak, i pytanie, gdzie to postawić.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.a.why': "Pytanie, czy drzwi są zamknięte: nie, i właśnie się je zamyka.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.a.why': "Pytanie, czy jest już pełny: tak, i właśnie się go opróżnia.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.a.why': "Prośba, żeby zrobić to teraz: tak, i pytanie, co potem.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Tegels, stuc en verf", a new sector unit of Bouw (u.afbouw, 20 November 2026).
    'c.tiletools.a.why': "Pytanie, gdzie jest mieszadło: miejsce i co jest blisko.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.a.why': "Pytanie, gdzie zacząć: pośrodku, na linii środkowej.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.a.why': "Pytanie, czy ściana jest sucha: nie, i jak długo czekać.", // nieuw, nalezen // nagelezen AI 22 nov
    // l.paint, l.prep, "Metselen, hout en vastmaken", three lessons of Rekenen and "Machines en gereedschap" (20-21 November 2026).
    'c.shapes.a.why': "Pytanie, czy to kwadrat: nie, prostokąt, i dlaczego.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.a.why': "Pytanie, ile stopni: liczba i czego to połowa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.a.why': "Pytanie, jak duża jest podłoga: obliczenie i wynik.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.a.why': "Pytanie, który pędzel: szeroki do ściany, mały do rogów.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.a.why': "Pytanie, czy można malować: nie, i co jest najpierw.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.a.why': "Pytanie, ile zostało cegieł: jedna paleta i że to wystarczy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.a.why': "Pytanie, jak wysoka ma być warstwa: gdzie można to zobaczyć.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.a.why': "Pytanie, która piła: grzbietnica, i dlaczego.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.a.why': "Pytanie, czy kąt jest prosty: tak, i skąd to wiadomo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.a.why': "Pytanie, gdzie jest wkrętarka: miejsce i że jest prawie naładowana.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.a.why': "Pytanie, jak przymocować półkę: czym i ile.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.a.why': "Pytanie, dlaczego się zatrzymuje: czujnik i czego nie widzi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.a.why': "Pytanie, jak często: raz na godzinę, i gdzie to zapisać.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.a.why': "Pytanie, ile do kartonu: liczba i gdzie to jest napisane.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.a.why': "Pytanie, kiedy: dzień tygodnia i pora tego dnia.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Elektra, leidingen en metaal" (u.install, 21 November 2026).
    'c.wiring.a.why': "Pytanie, który przewód gdzie: ten sam kolor do tego samego koloru.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.a.why': "Pytanie, czy można to otworzyć: nie, i kto to robi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.a.why': "Pytanie, czy jeszcze cieknie: trochę, i co się z tym robi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.a.why': "Pytanie, dlaczego jest ostra: jest na niej jeszcze zadzior.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Assemblage en montage" (u.montage, 21 November 2026).
    'c.assembly.a.why': "Pytanie, który krok: numer i gdzie patrzeć.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.a.why': "Pytanie, jak mocno: aż klucz kliknie.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.a.why': "Pytanie, czy można tam stać: nie, nigdy, i dlaczego.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.a.why': "Pytanie, czy jest dobry: nie, i co jest z nim nie tak.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Kweken, sorteren en de kas" (u.kweek) and "Banden, olie en remmen" (u.carservice), 22 November 2026.
    'c.sowing.a.why': "Pytanie, jak głęboko: głębokość, i nie głębiej.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.a.why': "Pytanie, czy jest dojrzały: nie, za zielony, i co robić.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.a.why': "Pytanie, dlaczego jest ciepło: ekran i wietrzniki są zamknięte.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.a.why': "Pytanie, czy można ją zabić: nie, i dlaczego pomaga.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.a.why': "Pytanie, czy trzeba je zdjąć: tak, i dlaczego.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.a.why': "Pytanie, ile: litry, i jak to sprawdzić.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.a.why': "Pytanie, czy musi być nowa: tak, i dlaczego.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.a.why': "Pytanie, co trzeba zrobić: spojrzeć na zlecenie.", // nieuw, nalezen // nagelezen AI 22 nov
    // The new sectors Groen, Facilitair, Beveiliging, Voedingsindustrie, Afval en recycling and Kinderopvang (23 November 2026).
    'c.mowing.a.why': "Pytanie, czy można ją wziąć: tak, i co zrobić najpierw.", // nieuw, nalezen
    'c.pruning.a.why': "Pytanie, które gałęzie: tylko martwe.", // nieuw, nalezen
    'c.hedge.a.why': "Pytanie, jak wysoko: do linki, nie niżej.", // nieuw, nalezen
    'c.chainsaw.a.why': "Pytanie, czy można: jeszcze nie, i co jest najpierw.", // nieuw, nalezen
    'c.weeding.a.why': "Pytanie, czy to chwast: nie, i co z nim zrobić.", // nieuw, nalezen
    'c.planting.a.why': "Pytanie, gdzie ma iść: miejsce na rabacie.", // nieuw, nalezen
    'c.roadside.a.why': "Pytanie, czy można przejść: nie, czekać, i dlaczego.", // nieuw, nalezen
    'c.litter.a.why': "Mieszkaniec pyta, kiedy: odpowiedź, że nie wiadomo, i kto to wie.", // nieuw, nalezen
    'c.reception.a.why': "Gość jest umówiony: chwileczkę, i telefon do tej osoby.", // nieuw, nalezen
    'c.visitors.a.why': "Pytanie, gdzie zostawić kurtkę: miejsce, i gdzie ono jest.", // nieuw, nalezen
    'c.mailroom.a.why': "Pytanie, dla kogo to jest: dział i piętro.", // nieuw, nalezen
    'c.meetingroom.a.why': "Pytanie, o której: godzina, i co trzeba zrobić.", // nieuw, nalezen
    'c.faults.a.why': "Pytanie, dlaczego jest zimno: co jest zepsute i kiedy przyjdzie pomoc.", // nieuw, nalezen
    'c.repairs.a.why': "Pytanie, czy piszczy: tak, i dlaczego.", // nieuw, nalezen
    'c.moving.a.why': "Pytanie, gdzie ma iść: pokój, i gdzie patrzeć.", // nieuw, nalezen
    'c.closing.a.why': "Pytanie, czy ktoś jest w środku: nie, i co się teraz robi.", // nieuw, nalezen
    'c.patrol.a.why': "Pytanie, czy coś było widać: tak, co, i gdzie.", // nieuw, nalezen
    'c.access.a.why': "Prośba o wejście bez karty: przykro mi, bez karty nie.", // nieuw, nalezen
    'c.cameras.a.why': "Pytanie, co widać: kogo, gdzie, i co się robi.", // nieuw, nalezen
    'c.report.a.why': "Pytanie, co jest w raporcie: co, gdzie i kiedy.", // nieuw, nalezen
    'c.evacuation.a.why': "Pytanie, czy wszyscy wyszli: nie, i ilu osób brakuje.", // nieuw, nalezen
    'c.firstaid.a.why': "Pytanie, gdzie jest AED: miejsce, i co jest obok.", // nieuw, nalezen
    'c.shoplifting.a.why': "Pytanie, czy można przeszukać torbę: nie, i kto to robi.", // nieuw, nalezen
    'c.aggression.a.why': "Pytanie, dlaczego nie: powód, powiedziany spokojnie.", // nieuw, nalezen
    'c.hygienelock.a.why': "Pytanie o zegarek: nie, i zasada, która za tym stoi.", // nieuw, nalezen
    'c.allergens.a.why': "Pytanie, czy może iść razem: nie, i dlaczego.", // nieuw, nalezen
    'c.coldroom.a.why': "Pytanie, dlaczego piszczy: przyczyna, i co zrobić.", // nieuw, nalezen
    'c.foreignbody.a.why': "Pytanie, co zrobić: komu to pokazać.", // nieuw, nalezen
    'c.cutting.a.why': "Pytanie, ile: waga, i gdzie patrzeć.", // nieuw, nalezen
    'c.labels.a.why': "Pytanie, jaka data: kiedy, i gdzie patrzeć.", // nieuw, nalezen
    'c.linecleaning.a.why': "Pytanie, czy jest czysta: jeszcze nie, i co zostało do zrobienia.", // nieuw, nalezen
    'c.haccp.a.why': "Pytanie, dlaczego: żeby wiedzieć, że jedzenie jest bezpieczne.", // nieuw, nalezen
    'c.binlorry.a.why': "Pytanie, czy można jechać z tyłu: nie, i gdzie się jedzie.", // nieuw, nalezen
    'c.reversing.a.why': "Prośba o pomoc: tak, gdzie się stoi, i co robić.", // nieuw, nalezen
    'c.wastesorting.a.why': "Pytanie, gdzie to idzie: pojemnik, i dlaczego.", // nieuw, nalezen
    'c.wastesafety.a.why': "Pytanie, co robić po skaleczeniu: umyć ranę i powiedzieć.", // nieuw, nalezen
    'c.yard.a.why': "Pytanie, gdzie to idzie: kontener, i gdzie on jest.", // nieuw, nalezen
    'c.hazardous.a.why': "Pytanie, co jest w środku: nie wiadomo, więc odstawić na bok.", // nieuw, nalezen
    'c.baler.a.why': "Pytanie, czy można zajrzeć: nie, i co jest najpierw.", // nieuw, nalezen
    'c.shovel.a.why': "Pytanie, czy można przejść: tylko kiedy kierowca widzi.", // nieuw, nalezen
    'c.nappies.a.why': "Pytanie, kiedy: godzina, i gdzie to jest zapisane.", // nieuw, nalezen
    'c.mealtime.a.why': "Pytanie, czy może to dostać: nie, dlaczego, i gdzie patrzeć.", // nieuw, nalezen
    'c.naptime.a.why': "Pytanie, czy śpi: tak, od kiedy, i że ktoś zaraz sprawdzi.", // nieuw, nalezen
    'c.playtime.a.why': "Dziecko pyta, czy może się bawić: tak, gdzie, i co potem.", // nieuw, nalezen
    'c.pickup.a.why': "Pytanie, kto odbiera: osoba, i że jest na liście.", // nieuw, nalezen
    'c.childsafety.a.why': "Pytanie, czy się przewróciła: tak, co jej jest, i do kogo się dzwoni.", // nieuw, nalezen
    'c.sickchild.a.why': "Pytanie, jak się czuje: co widać, i co się robi.", // nieuw, nalezen
    'c.grouprules.a.why': "Pytanie, czy można wyjść w pojedynkę: tak, ale najpierw powiedzieć koledze.", // nieuw, nalezen
    // Second units for Schoonmaak, Horeca, Zorg and Winkel, and the uitzendbureau (23 November 2026).
    'c.sanitary.a.why': "Pytanie, czy już gotowe: jeszcze nie, i dlaczego.", // nieuw, nalezen
    'c.hotelroom.a.why': "Pytanie, ile zostało: liczba, i kiedy będzie koniec.", // nieuw, nalezen
    'c.dosing.a.why': "Prośba, żeby dać więcej: nie, więcej nie znaczy lepiej, i czego się używa.", // nieuw, nalezen
    'c.officenight.a.why': "Pytanie o pracę w pojedynkę: tak, i że przyjdzie wiadomość.", // nieuw, nalezen
    'c.knives.a.why': "Prośba o pokrojenie: tak, szefie, i pytanie jak.", // nieuw, nalezen
    'c.rawcooked.a.why': "Pytanie, czy jest bez glutenu: nie wiadomo na pewno, więc sprawdza się listę.", // nieuw, nalezen
    'c.pass.a.why': "Pytanie, gdzie jest jedzenie: na wydawce, i że już idzie.", // nieuw, nalezen
    'c.bill.a.why': "Prośba o osobne płacenie: tak, i terminal już idzie.", // nieuw, nalezen
    'c.washing.a.why': "Podopieczny mówi nie: to w porządku, i propozycja czegoś innego.", // nieuw, nalezen
    'c.observing.a.why': "Pytanie, czy jest coś szczególnego: tak, i co dokładnie.", // nieuw, nalezen
    'c.homecare.a.why': "Pytanie, kto tam: powitanie, kto to jest, i czy można wejść.", // nieuw, nalezen
    'c.liftaids.a.why': "Pytanie, czy da się w pojedynkę: tak, z matą ślizgową, i że już się ją bierze.", // nieuw, nalezen
    'c.returns.a.why': "Prośba o zwrot: tak, i pytanie o paragon.", // nieuw, nalezen
    'c.facing.a.why': "Pytanie, czy już gotowe: prawie, i co jeszcze zostało.", // nieuw, nalezen
    'c.shrink.a.why': "Prośba o zajrzenie do torby: tak, i pokazanie paragonu.", // nieuw, nalezen
    'c.shopclose.a.why': "Prośba o wejście: przepraszam, zamknięte, i kiedy znowu otwarte.", // nieuw, nalezen
    'c.hirer.a.why': "Pytanie o start w nowym miejscu: tak, i pytanie o godzinę.", // nieuw, nalezen
    'c.phases.a.why': "Wiadomość, że praca się kończy: dobrze, i prośba o inną pracę.", // nieuw, nalezen
    'c.deductions.a.why': "Wiadomość o potrąceniu: pytanie, czy to dozwolone, i sprawdzenie.", // nieuw, nalezen
    'c.agencyhome.a.why': "Polecenie szybkiej wyprowadzki: to krótko, i najpierw rada.", // nieuw, nalezen
    // The basis units at four lessons (23 November 2026).
    'c.roster.a.why': "Wiadomość o zmianie w grafiku: zgoda i pytanie o dzień.", // nieuw, nalezen
    'c.breaks.a.why': "Pytanie o przerwę obiadową: godzina i jak długo trwa.", // nieuw, nalezen
    'c.wound.a.why': "Ktoś zaraz zemdleje: niech się położy, a ty idziesz po pomoc.", // nieuw, nalezen
    'c.callhelp.a.why': "Pytanie, czy reaguje: nie, nie reaguje.", // nieuw, nalezen
    'c.vacancy.a.why': "Pytanie, w jakiej sprawie dzwonisz: oferta pracy i czy jest jeszcze aktualna.", // nieuw, nalezen
    'c.result.a.why': "Odmowa: spokojna odpowiedź i pytanie dlaczego.", // nieuw, nalezen
    'c.residence.a.why': "Zezwolenie prawie wygasło: od razu składasz wniosek o nowe.", // nieuw, nalezen
    'c.newhome.a.why': "Pytanie, gdzie mieszkasz: nowe mieszkanie i nowy adres.", // nieuw, nalezen
    'c.payparts.a.why': "Pytanie o numer pracownika: gdzie jest na pasku wypłaty.", // nieuw, nalezen
    'c.latepay.a.why': "Pieniądze przyjdą później: chcesz to mieć na piśmie.", // nieuw, nalezen
    'c.holiday.a.why': "Prośba o urlop w maju: wolisz lipiec i mówisz dlaczego.", // nieuw, nalezen
    'c.special.a.why': "Pytanie o urlop z powodu narodzin dziecka: tak, i od kiedy.", // nieuw, nalezen
    'c.unwell.a.why': "Pytanie, czy wszystko w porządku: nie, i prośba o pójście do domu.", // nieuw, nalezen
    'c.injury.a.why': "Prośba o oświadczenie: tak, i kopia dla ciebie.", // nieuw, nalezen
    'c.debt.a.why': "Masz zostać, aż spłacisz dług: tak nie wolno, szukasz pomocy.", // nieuw, nalezen
    'c.inspection.a.why': "Pytanie o rozmowę: tak, ale tam, gdzie szef nie słyszy.", // nieuw, nalezen
    'c.carpool.a.why': "Pytanie, kto prowadzi: ty, i o której ich odbierasz.", // nieuw, nalezen
    'c.train.a.why': "Pytanie, dlaczego tak późno: pociąg, a wiadomość już wysłana.", // nieuw, nalezen
    'c.checklist.a.why': "Pytanie, czy niczego nie brakuje: jeszcze jedno spojrzenie na listę.", // nieuw, nalezen
    'c.leavesite.a.why': "Pytanie, czy wychodzisz na końcu: tak, wszystko wyłączone i drzwi zamknięte.", // nieuw, nalezen
    'c.stagedays.a.why': "Pytanie o nieobecność: choroba i telefon do szkoły i do firmy.", // nieuw, nalezen
    'c.stageend.a.why': "Pytanie o plany: najpierw dyplom, potem praca.", // nieuw, nalezen
    'c.neighbours.a.why': "Nowa sąsiadka się wita: miło cię poznać i twoje imię.", // nieuw, nalezen
    'c.join.a.why': "Zaproszenie: tak, i chcesz porozmawiać z nauczycielem.", // nieuw, nalezen
    'c.workphotos.a.why': "Prośba o zdjęcie do internetu: grzeczne nie.", // nieuw, nalezen
    'c.device.a.why': "Pytanie o nową aplikację: najpierw zapytaj dział IT.", // nieuw, nalezen
    // "Veiligheid op het werk" and the VOG (23 November 2026).
    'c.safetysigns.a.why': "Pytanie, co oznacza znak: uwaga, i jaki to znak.", // nieuw, nalezen
    'c.substances.a.why': "Pytanie, czy to toksyczne: nie zgadujesz, tylko sprawdzasz.", // nieuw, nalezen
    'c.firefight.a.why': "Wiadomość o pożarze: jest mały, więc bierzesz gaśnicę.", // nieuw, nalezen
    'c.permitwork.a.why': "Pytanie, kto zostaje na zewnątrz: ty i twoje zadanie.", // nieuw, nalezen
    'c.vog.a.why': "Pytanie o twój VOG: jeszcze nie, i na co czekasz.", // nieuw, nalezen
    // "Operator in de procesindustrie" (23 November 2026).
    'c.plantround.a.why': "Pytanie o alarm: co jest za wysokie i gdzie.", // nieuw, nalezen
    'c.plantfault.a.why': "Pytanie, czy wolno uruchomić: nie, kłódka jest jeszcze założona.", // nieuw, nalezen
    'c.shiftwork.a.why': "Pytanie, co się stało: awaria i gdzie to jest zapisane.", // nieuw, nalezen
    'c.heatdust.a.why': "Pytanie o telefon: nie, z powodu zagrożenia w tym miejscu.", // nieuw, nalezen
    // eight new lessons (26 November 2026).
    'c.debthelp.a.why': "Informacja, że rachunek nie jest zapłacony: tak, i prośba o plan spłaty.", // nieuw, nalezen
    'c.taxes.a.why': "Informacja o niebieskiej kopercie: podziękowanie i otwarcie jej od razu.", // nieuw, nalezen
    'c.discrimination.a.why': "Pytanie, czy wszystko w porządku: nie, i zgłoszenie tego.", // nieuw, nalezen
    'c.union.a.why': "Pytanie, dlaczego należysz do związku: stają w twojej obronie.", // nieuw, nalezen
    'c.kiln.a.why': "Pytanie o zbieranie odłamków ręką: nie, zmiotką i szufelką.", // nieuw, nalezen
    'c.mixlab.a.why': "Pytanie, czy partia jest zatwierdzona: jeszcze nie, laboratorium ją bada.", // nieuw, nalezen
    'c.firstweeks.a.why': "Pytanie o oprowadzanie: prawie wszystko i jedno pytanie.", // nieuw, nalezen
    'c.orderpick.a.why': "Prośba o jazdę wózkiem wysokiego składowania: nie, brak szkolenia.", // nieuw, nalezen
  },
};

export default t;
