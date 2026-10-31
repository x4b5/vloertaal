import type { CultureTranslation } from '../culture/types';

/** "Wat kun je nu?" in Romanian (src/content/kunJeNu.ts): the heading, the note, the coach card's line and
 *  the can-do sentences of all eight themes. */
const t: CultureTranslation = {
  ui: {
    kunJeNu: "Ce poți face acum?", // nieuw, nalezen
    kunNote: "Nivelul de lângă fiecare propoziție e un reper, nu un nivel oficial.", // nieuw, nalezen
    coachCanDo: "Câte propoziții „Pot …” ai din temele terminate", // nieuw, nalezen
    kunLuisteren: "ascultare", // nieuw, nalezen
    kunSpreken: "vorbire", // nieuw, nalezen
    kunLezen: "citire", // nieuw, nalezen
    kunSchrijven: "scriere", // nieuw, nalezen
    kunGesprekken: "conversație", // nieuw, nalezen
  },
  gloss: {
    'kjn.u.firstday.1': "Pot să mă prezint unui coleg.", // nieuw, nalezen
    'kjn.u.firstday.2': "Pot să întreb la cine trebuie să mă prezint.", // nieuw, nalezen
    'kjn.u.help.1': "Pot să spun că nu înțeleg.", // nieuw, nalezen
    'kjn.u.help.2': "Pot să rog pe cineva să vorbească mai rar.", // nieuw, nalezen
    'kjn.u.tools.1': "Pot să rog pe cineva să scrie sau să-mi arate.", // nieuw, nalezen
    'kjn.u.tools.2': "Pot să repet o sarcină ca să verific dacă am înțeles.", // nieuw, nalezen
    'kjn.u.tools.3': "Pot să spun că vreau să exersez olandeza.", // nieuw, nalezen
    'kjn.u.data.1': "Pot să-mi spun numele pe litere.", // nieuw, nalezen
    'kjn.u.data.2': "Pot să spun în ce zile pot lucra.", // nieuw, nalezen
    'kjn.u.data.3': "Pot să înțeleg o dată când o aud.", // nieuw, nalezen
    'kjn.u.sounds.1': "Pot să deosebesc cuvinte ca man și maan.", // nieuw, nalezen
    'kjn.u.sounds.2': "Pot să repet propoziții scurte cu sunete grele.", // nieuw, nalezen
    'kjn.u.safety.1': "Pot să înțeleg un avertisment ca „Pas op!”.", // nieuw, nalezen
    'kjn.u.safety.2': "Pot să raportez un accident.", // nieuw, nalezen
    'kjn.u.safety.3': "Pot să spun că nu am învățat încă ceva.", // nieuw, nalezen
    'kjn.u.apply.1': "Pot să spun ce experiență am.", // nieuw, nalezen
    'kjn.u.apply.2': "Pot să vorbesc despre mine la un interviu de angajare.", // nieuw, nalezen
    'kjn.u.contract.1': "Pot să întreb câte ore pe săptămână lucrez.", // nieuw, nalezen
    'kjn.u.contract.2': "Pot să întreb dacă am un contract temporar sau permanent.", // nieuw, nalezen
    'kjn.u.contract.3': "Pot să spun când pot și când nu pot lucra.", // nieuw, nalezen
    'kjn.u.grow.1': "Pot să spun ce diplome și certificate am.", // nieuw, nalezen
    'kjn.u.grow.2': "Pot să spun la ce mă pricep.", // nieuw, nalezen
    'kjn.u.lost.1': "Pot să spun că mi se termină contractul.", // nieuw, nalezen
    'kjn.u.lost.2': "Pot să întreb dacă primesc banii de concediu.", // nieuw, nalezen
    'kjn.u.stage.1': "Pot să întreb cine este îndrumătorul meu de la firmă.", // nieuw, nalezen // nagelezen AI 31 okt
    'kjn.u.stage.2': "Pot să cer feedback și un exemplu.", // nieuw, nalezen
    'kjn.u.time.1': "Pot să spun la ce oră începe tura mea.", // nieuw, nalezen
    'kjn.u.time.2': { m: "Pot să spun că sunt bolnav.", f: "Pot să spun că sunt bolnavă.", x: "Pot să spun că sunt bolnav / bolnavă." }, // nieuw, nalezen
    'kjn.u.pay.1': "Pot să spun că fluturașul de salariu nu e corect.", // nieuw, nalezen
    'kjn.u.pay.2': "Pot să citesc cuvinte ca bruto și netto.", // nieuw, nalezen
    'kjn.u.leave.1': "Pot să cer concediu.", // nieuw, nalezen
    'kjn.u.leave.2': "Pot să anunț boala și revenirea la muncă.", // nieuw, nalezen
    'kjn.u.contact.1': "Pot să sun și să spun cine sunt.", // nieuw, nalezen
    'kjn.u.contact.2': "Pot să rog pe cineva să mă sune înapoi.", // nieuw, nalezen
    'kjn.u.contact.3': "Pot să scriu un mesaj scurt către serviciu.", // nieuw, nalezen
    'kjn.u.house.1': "Pot să citesc reguli ca „Roken verboden”.", // nieuw, nalezen
    'kjn.u.house.2': "Pot să întreb unde am voie să fumez.", // nieuw, nalezen
    'kjn.u.house.3': "Pot să spun că ceva nu e voie.", // nieuw, nalezen
    'kjn.u.numbers.1': "Pot să înțeleg ore ca „kwart over vier”.", // nieuw, nalezen
    'kjn.u.numbers.2': "Pot să spun cât costă sau cât cântărește ceva.", // nieuw, nalezen
    'kjn.u.shop.1': "Pot să întreb un client dacă vrea să plătească cu cardul.", // nieuw, nalezen
    'kjn.u.shop.2': "Pot să arăt unui client drumul prin magazin.", // nieuw, nalezen
    'kjn.u.ai.1': "Pot să întreb dacă un răspuns e corect.", // nieuw, nalezen
    'kjn.u.ai.2': "Pot să spun că vreau să vorbesc cu un om.", // nieuw, nalezen
    'kjn.u.finish.1': "Pot să întreb ce înseamnă un cuvânt de pe fișa de lucru.", // nieuw, nalezen
    'kjn.u.finish.2': "Pot să spun ce e gata și ce nu.", // nieuw, nalezen
    'kjn.u.online.1': "Pot să spun că parola mea nu merge.", // nieuw, nalezen
    'kjn.u.online.2': "Pot să recunosc un e-mail suspect.", // nieuw, nalezen
    'kjn.u.teamwork.1': "Pot să spun că ceva mă deranjează.", // nieuw, nalezen
    'kjn.u.teamwork.2': "Pot să refuz calm munca în plus.", // nieuw, nalezen
    'kjn.u.teamwork.3': "Pot să întreb ce trebuie să fac mai întâi.", // nieuw, nalezen
    'kjn.u.social.1': "Pot să fac puțină conversație în pauză.", // nieuw, nalezen
    'kjn.u.social.2': "Pot să spun că am greșit.", // nieuw, nalezen
    'kjn.u.social.3': "Pot să spun că ceva îmi depășește limita.", // nieuw, nalezen
    'kjn.u.sayings.1': "Pot să înțeleg câteva expresii obișnuite.", // nieuw, nalezen
    'kjn.u.sayings.2': "Pot să spun că ceva e foarte ușor (een eitje).", // nieuw, nalezen
    'kjn.u.rights.1': "Pot să spun că am dreptul la pauză.", // nieuw, nalezen
    'kjn.u.rights.2': "Pot să spun că vreau să fac o plângere.", // nieuw, nalezen
    'kjn.u.exploit.1': "Pot să spun că pașaportul rămâne la mine.", // nieuw, nalezen
    'kjn.u.exploit.2': "Pot să întreb dacă pot raporta ceva fără să-mi dau numele.", // nieuw, nalezen
    'kjn.u.papers.1': "Pot să spun că mi s-a schimbat adresa.", // nieuw, nalezen
    'kjn.u.papers.2': "Pot să întreb cât e chiria.", // nieuw, nalezen
    'kjn.u.health.1': "Pot să spun unde mă doare.", // nieuw, nalezen
    'kjn.u.health.2': "Pot să cer o programare la medicul de familie.", // nieuw, nalezen
    'kjn.u.money.1': "Pot să spun că nu înțeleg o scrisoare.", // nieuw, nalezen
    'kjn.u.money.2': "Pot să-i spun nu unui escroc la telefon.", // nieuw, nalezen
    'kjn.u.travel.1': "Pot să spun cum ajung la muncă.", // nieuw, nalezen
    'kjn.u.travel.2': "Pot să întreb unde e stația de autobuz.", // nieuw, nalezen
    'kjn.u.society.1': "Pot să întreb dacă am voie să votez.", // nieuw, nalezen
    'kjn.u.society.2': "Pot să spun că vreau să fac contestație.", // nieuw, nalezen
    'kjn.u.warehouse.1': "Pot să înțeleg instrucțiuni scurte în depozit.", // nieuw, nalezen
    'kjn.u.warehouse.2': "Pot să spun unde e ceva: în stânga sau în dreapta.", // nieuw, nalezen
    'kjn.u.build.1': "Pot să înțeleg un avertisment pe șantier.", // nieuw, nalezen
    'kjn.u.build.2': "Pot să cer unelte.", // nieuw, nalezen
    'kjn.u.factory.1': "Pot să spun că e o defecțiune.", // nieuw, nalezen
    'kjn.u.factory.2': "Pot să spun ce nu e în regulă cu un produs.", // nieuw, nalezen
    'kjn.u.care.1': "Pot să întreb un client dacă pot să ajut.", // nieuw, nalezen
    'kjn.u.care.2': "Pot să transmit ceva asistentei medicale.", // nieuw, nalezen
    'kjn.u.horeca.1': "Pot să întreb oaspeții ce doresc să bea.", // nieuw, nalezen
    'kjn.u.horeca.2': "Pot să spun că îl întreb pe bucătarul-șef.", // nieuw, nalezen
    'kjn.u.clean.1': "Pot să întreb unde sunt lucrurile de curățenie.", // nieuw, nalezen
    'kjn.u.clean.2': "Pot să avertizez pe cineva că podeaua e alunecoasă.", // nieuw, nalezen
    'kjn.u.kas.1': "Pot să întreb în ce rând încep.", // nieuw, nalezen
    'kjn.u.kas.2': "Pot să întreb dacă o seră a fost stropită.", // nieuw, nalezen
    'kjn.u.tech.1': "Pot să întreb dacă mai e curent.", // nieuw, nalezen
    'kjn.u.tech.2': "Pot să spun că un cablu e stricat.", // nieuw, nalezen
    'kjn.u.garage.1': "Pot să spun că o anvelopă e spartă.", // nieuw, nalezen
    'kjn.u.garage.2': "Pot să spun că mai întâi clientul trebuie să fie de acord.", // nieuw, nalezen
  },
};

export default t;
