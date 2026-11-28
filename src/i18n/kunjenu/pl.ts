import type { CultureTranslation } from '../culture/types';

/** "Wat kun je nu?" in Polish (src/content/kunJeNu.ts): the heading, the note, the coach card's line and
 *  the can-do sentences of all eight themes. */
const t: CultureTranslation = {
  ui: {
    kunJeNu: "Co teraz umiesz?", // nieuw, nalezen // nagelezen AI 28 nov
    kunNote: "Poziom przy każdym zdaniu to wskazówka, a nie oficjalny poziom.", // nieuw, nalezen // nagelezen AI 28 nov
    coachCanDo: "Ile masz zdań „Umiem …” z ukończonych tematów", // nieuw, nalezen // nagelezen AI 28 nov
    kunLuisteren: "słuchanie", // nieuw, nalezen // nagelezen AI 28 nov
    kunSpreken: "mówienie", // nieuw, nalezen // nagelezen AI 28 nov
    kunLezen: "czytanie", // nieuw, nalezen // nagelezen AI 28 nov
    kunSchrijven: "pisanie", // nieuw, nalezen // nagelezen AI 28 nov
    kunGesprekken: "rozmowy", // nieuw, nalezen // nagelezen AI 28 nov
  },
  gloss: {
    'kjn.u.firstday.1': "Umiem przedstawić się komuś z pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.firstday.2': "Umiem zapytać, u kogo mam się zgłosić.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.help.1': "Umiem powiedzieć, że nie rozumiem.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.help.2': "Umiem poprosić, żeby ktoś mówił wolniej.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.do.1': "Rozumiem krótkie polecenie takie jak „Zet het neer”.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.do.2': { m: "Umiem powiedzieć, że skończyłem zadanie.", f: "Umiem powiedzieć, że skończyłam zadanie.", x: "Umiem powiedzieć, że zadanie jest gotowe." }, // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.tools.1': "Umiem poprosić, żeby ktoś to zapisał albo pokazał.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.tools.2': "Umiem powtórzyć polecenie, żeby sprawdzić, czy dobrze rozumiem.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.tools.3': "Umiem powiedzieć, że chcę ćwiczyć niderlandzki.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.data.1': "Umiem przeliterować swoje imię i nazwisko.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.data.2': "Umiem powiedzieć, w które dni mogę pracować.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.data.3': "Rozumiem datę, kiedy ją słyszę.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.sounds.1': "Słyszę różnicę między słowami takimi jak man i maan.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.sounds.2': "Umiem powtórzyć krótkie zdania z trudnymi dźwiękami.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.safety.1': "Rozumiem ostrzeżenie takie jak „Pas op!”.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.safety.2': "Umiem powiedzieć, że jeszcze mnie tego nie nauczono.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.emergency.1': "Umiem zapytać, gdzie wisi gaśnica.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.emergency.2': "Umiem zgłosić wypadek.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.apply.1': "Umiem powiedzieć, jakie mam doświadczenie.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.apply.2': "Umiem opowiedzieć o sobie na rozmowie o pracę.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.contract.1': "Umiem zapytać, ile godzin tygodniowo pracuję.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.contract.2': "Umiem zapytać, czy moja umowa jest na czas określony, czy na stałe.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.contract.3': "Umiem powiedzieć, kiedy mogę, a kiedy nie mogę pracować.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.grow.1': "Umiem powiedzieć, jakie mam dyplomy i certyfikaty.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.grow.2': "Umiem powiedzieć, co dobrze mi wychodzi.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.lost.1': "Umiem powiedzieć, że moja umowa się kończy.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.lost.2': "Umiem zapytać, czy dostanę wypłatę dodatku urlopowego.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.stage.1': "Umiem zapytać, kto jest moim opiekunem praktyk w firmie.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.stage.2': "Umiem poprosić o informację zwrotną i o przykład.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.time.1': "Umiem powiedzieć, o której zaczyna się moja zmiana.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.time.2': "Umiem powiedzieć, że choruję.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.pay.1': "Umiem powiedzieć, że mój pasek wypłaty się nie zgadza.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.pay.2': "Umiem przeczytać słowa takie jak bruto i netto.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.leave.1': "Umiem poprosić o urlop.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.leave.2': "Umiem powiedzieć, że moje dziecko jest chore.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.sick.1': "Umiem zgłosić chorobę i powrót do pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.sick.2': "Umiem powiedzieć, czego jeszcze nie mogę robić.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.sick.3': "Umiem powiedzieć, że na początku pracuję po pół dnia.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.contact.1': "Umiem zadzwonić i powiedzieć, kim jestem.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.contact.2': "Umiem poprosić, żeby ktoś do mnie oddzwonił.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.contact.3': "Umiem napisać krótką wiadomość do pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.house.1': "Umiem przeczytać zasady takie jak „Roken verboden”.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.house.2': "Umiem zapytać, gdzie wolno palić.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.house.3': "Umiem powiedzieć, że czegoś nie wolno.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.numbers.1': "Rozumiem godziny takie jak „kwart over vier”.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.numbers.2': "Umiem powiedzieć, ile coś kosztuje albo waży.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.numbers.3': "Odróżniam liczby takie jak 13 i 30.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.shop.1': "Umiem zapytać klienta, czy chce zapłacić kartą.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.shop.2': "Umiem wskazać klientowi drogę w sklepie.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.ai.1': "Umiem zapytać, czy odpowiedź jest dobra.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.ai.2': "Umiem powiedzieć, że chcę porozmawiać z człowiekiem.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.finish.1': "Umiem zapytać, co znaczy słowo na zleceniu pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.finish.2': "Umiem powiedzieć, co jest gotowe, a co nie.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.online.1': "Umiem powiedzieć, że moje hasło nie działa.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.online.2': "Umiem rozpoznać podejrzany e-mail.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.teamwork.1': "Umiem powiedzieć, że coś mnie martwi.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'kjn.u.teamwork.2': "Umiem spokojnie odmówić dodatkowej pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.teamwork.3': "Umiem zapytać, co mam zrobić najpierw.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.social.1': "Umiem chwilę pogadać z kimś w przerwie.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.social.2': { m: "Umiem powiedzieć, że popełniłem błąd.", f: "Umiem powiedzieć, że popełniłam błąd.", x: "Umiem powiedzieć, że to mój błąd." }, // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.social.3': "Umiem powiedzieć, że coś przekracza moją granicę.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.sayings.1': "Rozumiem kilka popularnych wyrażeń.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.sayings.2': "Umiem powiedzieć, że coś jest bardzo łatwe (een eitje).", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.rights.1': "Umiem powiedzieć, że mam prawo do przerwy.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.rights.2': "Umiem powiedzieć, że chcę złożyć skargę.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.exploit.1': "Umiem powiedzieć, że paszport zostaje u mnie.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.exploit.2': "Umiem zapytać, czy mogę coś zgłosić bez podawania nazwiska.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.papers.1': "Umiem powiedzieć, że zmienił się mój adres.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.papers.2': "Umiem zapytać, ile wynosi czynsz.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.health.1': "Umiem powiedzieć, gdzie mnie boli.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.health.2': "Umiem poprosić o wizytę u lekarza rodzinnego.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.health.3': "Umiem powiedzieć, że pracy jest dla mnie za dużo.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.money.1': "Umiem powiedzieć, że nie rozumiem listu.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.money.2': "Umiem odmówić oszustowi przez telefon.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.travel.1': "Umiem powiedzieć, jak dojeżdżam do pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.travel.2': "Umiem zapytać, gdzie jest przystanek autobusowy.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.society.1': "Umiem zapytać, czy mogę głosować.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.society.2': "Umiem powiedzieć, że chcę złożyć sprzeciw.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.warehouse.1': "Rozumiem krótkie polecenia w magazynie.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.warehouse.2': "Umiem powiedzieć, gdzie coś stoi: po lewej czy po prawej.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.build.1': "Rozumiem ostrzeżenie na budowie.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.build.2': "Umiem poprosić o narzędzia.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.factory.1': "Umiem powiedzieć, że jest awaria.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.factory.2': "Umiem powiedzieć, co jest nie tak z produktem.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.factory.3': "Umiem zgłosić, że mam małe skaleczenie.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.care.1': "Umiem zapytać podopiecznego, czy mogę pomóc.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.care.2': "Umiem coś przekazać pielęgniarce.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.horeca.1': "Umiem zapytać gości, co podać do picia.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.horeca.2': "Umiem powiedzieć, że zapytam szefa kuchni.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.clean.1': "Umiem zapytać, gdzie są rzeczy do sprzątania.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.clean.2': "Umiem ostrzec kogoś, że podłoga jest śliska.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.kas.1': "Umiem zapytać, w którym rzędzie zaczynam.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.kas.2': "Umiem zapytać, czy szklarnia była opryskana.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.tech.1': "Umiem zapytać, czy jest jeszcze prąd.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.tech.2': "Umiem powiedzieć, że kabel jest zepsuty.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.garage.1': "Umiem powiedzieć, że opona jest przebita.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.garage.2': "Umiem powiedzieć, że klient musi się najpierw zgodzić.", // nieuw, nalezen // nagelezen AI 28 nov
    // Vervoer en bezorging (5 november 2026).
    'kjn.u.delivery.1': "Umiem powiedzieć, że klienta nie ma w domu.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.delivery.2': "Umiem poprosić sąsiadów, żeby przyjęli paczkę.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.delivery.3': "Umiem zapytać, kto decyduje o mojej trasie i moich godzinach.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.afbouw.1': "Umiem poprosić o pacę zębatą albo kielnię.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.afbouw.2': "Umiem zapytać, gdzie zaczynam układać płytki.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.afbouw.3': "Umiem powiedzieć, że ściana nie jest jeszcze sucha.", // nieuw, nalezen // nagelezen AI 28 nov
    // Goed communiceren en Feedback en overleg (5 november 2026).
    'kjn.u.communicate.1': "Umiem wyjaśnić, co jest nie tak.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.communicate.2': "Umiem powtórzyć to, co ktoś mi powiedział.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.communicate.3': "Umiem na czas poprosić o rozmowę.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.feedback.1': "Umiem poprosić o przykład, kiedy dostaję feedback.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.feedback.2': "Umiem miło powiedzieć, co może być lepsze.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.feedback.3': "Umiem zadać pytanie na spotkaniu zespołu.", // nieuw, nalezen // nagelezen AI 28 nov
    // "Metselen, hout en vastmaken" and "Machines en gereedschap" (20-21 November 2026).
    'kjn.u.ruwbouw.1': "Umiem poprosić o piłę ręczną albo wkrętarkę.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.ruwbouw.2': "Umiem zapytać, jak przymocować półkę.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.machines.1': "Umiem powiedzieć, że osłona maszyny jest zepsuta.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.machines.2': "Umiem zapytać, jak często mam brać próbkę.", // nieuw, nalezen // nagelezen AI 28 nov
    // "Elektra, leidingen en metaal" (21 November 2026).
    'kjn.u.install.1': "Umiem zapytać, czy mogę otworzyć skrzynkę z bezpiecznikami.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.install.2': "Umiem powiedzieć, że złączka cieknie.", // nieuw, nalezen // nagelezen AI 28 nov
    // "Assemblage en montage" (21 November 2026).
    'kjn.u.montage.1': "Umiem powiedzieć, że pojemnik na części jest prawie pusty.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.montage.2': "Umiem zapytać, jak mocno trzeba dokręcić śrubę.", // nieuw, nalezen // nagelezen AI 28 nov
    // "Kweken, sorteren en de kas" and "Banden, olie en remmen" (22 November 2026).
    'kjn.u.kweek.1': "Umiem powiedzieć, że na roślinie jest pleśń.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.kweek.2': "Umiem zapytać, czy pomidor jest wystarczająco dojrzały.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.carservice.1': "Umiem powiedzieć, że świeci się kontrolka ostrzegawcza.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.carservice.2': "Umiem zapytać, ile oleju trzeba wlać.", // nieuw, nalezen // nagelezen AI 28 nov
    // The new sectors (23 November 2026).
    'kjn.u.mowing.1': "Umiem powiedzieć, że trawa jest za mokra.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.mowing.2': "Umiem zapytać, które gałęzie trzeba obciąć.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.planting.1': "Umiem powiedzieć, że jest tu potłuczone szkło.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.planting.2': "Umiem zapytać, czy mogę przejść przez ulicę.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.frontdesk.1': "Umiem przywitać gościa i mu pomóc.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.frontdesk.2': "Umiem zapytać, dla kogo jest paczka.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.maintenance.1': "Umiem zgłosić usterkę.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.maintenance.2': "Umiem zapytać, gdzie ma iść biurko.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.guarding.1': "Umiem poprosić kogoś o dokument tożsamości.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.guarding.2': "Umiem powiedzieć przez krótkofalówkę, co widzę.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.incidents.1': "Umiem zadzwonić pod 112 i powiedzieć, co się dzieje.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.incidents.2': "Umiem spokojnie mówić do złego klienta.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.foodhygiene.1': "Umiem powiedzieć, że w chłodni jest za ciepło.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.foodhygiene.2': "Umiem zapytać, czy są w tym orzechy.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.foodline.1': "Umiem powiedzieć, że etykieta jest zła.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.foodline.2': "Umiem zapytać, ile ma iść do pojemnika.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.collection.1': "Umiem pomóc kierowcy przy cofaniu.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.collection.2': "Umiem powiedzieć, że pojemnik na kółkach jest za ciężki.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.recycling.1': "Umiem powiedzieć gościowi, gdzie idą jego odpady.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.recycling.2': "Umiem powiedzieć, że prasa się zablokowała.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.toddlers.1': "Umiem powiedzieć, że idę przewinąć dziecko.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.toddlers.2': "Umiem zapytać, czy dziecko już śpi.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.daycare.1': "Umiem powiedzieć rodzicowi, jak minął dzień.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.daycare.2': "Umiem zapytać, kto przyjdzie odebrać dziecko.", // nieuw, nalezen // nagelezen AI 28 nov
    // Five new units (23 November 2026).
    'kjn.u.uitzend.1': "Umiem zapytać, w której fazie jestem.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.uitzend.2': "Umiem zapytać, za co jest potrącenie z mojego wynagrodzenia.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.housekeeping.1': "Umiem powiedzieć, że toaleta jest zatkana.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.housekeeping.2': "Umiem zapytać, ile środka trzeba wlać do wiadra.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.cooking.1': "Umiem zapytać szefa kuchni, jak coś pokroić.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.cooking.2': "Umiem zapytać gościa, czy chce płacić osobno.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.carework.1': "Umiem zapytać podopiecznego, w co chce się ubrać.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.carework.2': { m: "Umiem powiedzieć pielęgniarce, co widziałem.", f: "Umiem powiedzieć pielęgniarce, co widziałam.", x: "Umiem przekazać pielęgniarce swoje obserwacje." }, // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.shopfloor.1': "Umiem poprosić klienta o paragon.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.shopfloor.2': "Umiem powiedzieć, że sklep zaraz się zamyka.", // nieuw, nalezen // nagelezen AI 28 nov
    // "Veiligheid op het werk" and the VOG (23 November 2026).
    'kjn.u.safework.1': "Umiem rozpoznać kilka słów o znakach bezpieczeństwa i pożarze.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.safework.2': "Umiem zapytać, czy środek jest toksyczny.", // nieuw, nalezen // nagelezen AI 28 nov
    // "Operator in de procesindustrie" (23 November 2026).
    'kjn.u.process.1': "Umiem powiedzieć, że ciśnienie jest za wysokie.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.process.2': "Umiem przy przekazaniu zmiany opowiedzieć, co się stało.", // nieuw, nalezen // nagelezen AI 28 nov
    // eight new lessons (26 November 2026).
    'kjn.u.firstday.3': "Umiem poprosić, żeby ktoś pokazał mi coś jeszcze raz.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.rights.3': "Umiem powiedzieć, że traktują mnie inaczej.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.money.3': "Umiem poprosić o plan spłaty.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.warehouse.3': "Umiem powiedzieć, że bez szkolenia nie jeżdżę wózkiem wysokiego składowania.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.process.3': "Umiem zapytać, ile surowca ma wejść.", // nieuw, nalezen // nagelezen AI 28 nov
  },
};

export default t;
