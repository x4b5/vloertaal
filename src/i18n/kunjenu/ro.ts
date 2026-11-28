import type { CultureTranslation } from '../culture/types';

/** "Wat kun je nu?" in Romanian (src/content/kunJeNu.ts): the heading, the note, the coach card's line and
 *  the can-do sentences of all eight themes. */
const t: CultureTranslation = {
  ui: {
    kunJeNu: "Ce poți face acum?", // nieuw, nalezen // nagelezen AI 28 nov
    kunNote: "Nivelul de lângă fiecare propoziție e un reper, nu un nivel oficial.", // nieuw, nalezen // nagelezen AI 28 nov
    coachCanDo: "Câte propoziții „Pot …” ai din subiectele terminate", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    kunLuisteren: "ascultare", // nieuw, nalezen // nagelezen AI 28 nov
    kunSpreken: "vorbire", // nieuw, nalezen // nagelezen AI 28 nov
    kunLezen: "citire", // nieuw, nalezen // nagelezen AI 28 nov
    kunSchrijven: "scriere", // nieuw, nalezen // nagelezen AI 28 nov
    kunGesprekken: "conversație", // nieuw, nalezen // nagelezen AI 28 nov
  },
  gloss: {
    'kjn.u.firstday.1': "Pot să mă prezint unui coleg.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.firstday.2': "Pot să întreb la cine trebuie să mă prezint.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.help.1': "Pot să spun că nu înțeleg.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.help.2': "Pot să rog pe cineva să vorbească mai rar.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.do.1': "Pot să înțeleg o instrucțiune scurtă, ca „Zet het neer”.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.do.2': "Pot să spun că am terminat o treabă.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.tools.1': "Pot să rog pe cineva să scrie sau să-mi arate.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.tools.2': "Pot să repet o instrucțiune ca să verific dacă am înțeles.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    'kjn.u.tools.3': "Pot să spun că vreau să exersez olandeza.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.data.1': "Pot să-mi spun numele pe litere.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.data.2': "Pot să spun în ce zile pot lucra.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.data.3': "Pot să înțeleg o dată când o aud.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.sounds.1': "Pot să deosebesc cuvinte ca man și maan.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.sounds.2': "Pot să repet propoziții scurte cu sunete grele.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.safety.1': "Pot să înțeleg un avertisment ca „Pas op!”.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.safety.2': "Pot să spun că nu am învățat încă ceva.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.emergency.1': "Pot să întreb unde este extinctorul.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'kjn.u.emergency.2': "Pot să raportez un accident.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.apply.1': "Pot să spun ce experiență am.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.apply.2': "Pot să vorbesc despre mine la un interviu de angajare.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.contract.1': "Pot să întreb câte ore pe săptămână lucrez.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.contract.2': "Pot să întreb dacă am un contract temporar sau permanent.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.contract.3': "Pot să spun când pot și când nu pot lucra.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.grow.1': "Pot să spun ce diplome și certificate am.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.grow.2': "Pot să spun la ce mă pricep.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.lost.1': "Pot să spun că mi se termină contractul.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.lost.2': "Pot să întreb dacă primesc banii de concediu.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.stage.1': "Pot să întreb cine este îndrumătorul meu de la firmă.", // nieuw, nalezen // nagelezen AI 31 okt
    'kjn.u.stage.2': "Pot să cer feedback și un exemplu.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.time.1': "Pot să spun la ce oră începe tura mea.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.time.2': { m: "Pot să spun că sunt bolnav.", f: "Pot să spun că sunt bolnavă.", x: "Pot să spun că m-am îmbolnăvit." }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'kjn.u.pay.1': "Pot să spun că fluturașul de salariu nu e corect.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.pay.2': "Pot să citesc cuvinte ca bruto și netto.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.leave.1': "Pot să cer concediu.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.leave.2': "Pot să spun că copilul meu e bolnav.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.sick.1': "Pot să anunț boala și revenirea la muncă.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.sick.2': "Pot să spun ce nu pot face încă.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.sick.3': "Pot să spun că la început lucrez jumătăți de zi.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.contact.1': "Pot să sun și să spun cine sunt.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.contact.2': "Pot să rog pe cineva să mă sune înapoi.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.contact.3': "Pot să scriu un mesaj scurt către serviciu.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.house.1': "Pot să citesc reguli ca „Roken verboden”.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.house.2': "Pot să întreb unde am voie să fumez.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.house.3': "Pot să spun că ceva nu e permis.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    'kjn.u.numbers.1': "Pot să înțeleg ore ca „kwart over vier”.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.numbers.2': "Pot să spun cât costă sau cât cântărește ceva.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.numbers.3': "Pot deosebi numere ca 13 și 30.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.shop.1': "Pot să întreb un client dacă vrea să plătească cu cardul.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.shop.2': "Pot să arăt unui client drumul prin magazin.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.ai.1': "Pot să întreb dacă un răspuns e corect.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.ai.2': "Pot să spun că vreau să vorbesc cu un om.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.finish.1': "Pot să întreb ce înseamnă un cuvânt de pe fișa de lucru.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.finish.2': "Pot să spun ce e gata și ce nu.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.online.1': "Pot să spun că parola mea nu merge.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.online.2': "Pot să recunosc un e-mail suspect.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.teamwork.1': "Pot să spun că ceva mă deranjează.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.teamwork.2': "Pot să refuz calm munca în plus.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.teamwork.3': "Pot să întreb ce trebuie să fac mai întâi.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.social.1': "Pot să fac puțină conversație în pauză.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.social.2': "Pot să spun că am greșit.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.social.3': "Pot să spun că ceva îmi depășește limita.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.sayings.1': "Pot să înțeleg câteva expresii obișnuite.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.sayings.2': "Pot să spun că ceva e foarte ușor (een eitje).", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.rights.1': "Pot să spun că am dreptul la pauză.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.rights.2': "Pot să spun că vreau să fac o plângere.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.exploit.1': "Pot să spun că pașaportul rămâne la mine.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.exploit.2': "Pot să întreb dacă pot raporta ceva fără să-mi dau numele.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.papers.1': "Pot să spun că mi s-a schimbat adresa.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.papers.2': "Pot să întreb cât e chiria.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.health.1': "Pot să spun unde mă doare.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.health.2': "Pot să cer o programare la medicul de familie.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.health.3': "Pot să spun că munca devine prea mult pentru mine.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.money.1': "Pot să spun că nu înțeleg o scrisoare.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.money.2': "Pot să-i spun nu unui escroc la telefon.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.travel.1': "Pot să spun cum ajung la muncă.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.travel.2': "Pot să întreb unde e stația de autobuz.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.society.1': "Pot să întreb dacă am voie să votez.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.society.2': "Pot să spun că vreau să fac contestație.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.warehouse.1': "Pot să înțeleg instrucțiuni scurte în depozit.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.warehouse.2': "Pot să spun unde e ceva: în stânga sau în dreapta.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.build.1': "Pot să înțeleg un avertisment pe șantier.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.build.2': "Pot să cer o unealtă.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'kjn.u.factory.1': "Pot să spun că e o defecțiune.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.factory.2': "Pot să spun ce nu e în regulă cu un produs.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.factory.3': "Pot să anunț că am o tăietură mică.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.care.1': "Pot să întreb un client dacă pot să ajut.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.care.2': "Pot să transmit ceva asistentei medicale.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.horeca.1': "Pot să întreb oaspeții ce doresc să bea.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.horeca.2': "Pot să spun că îl întreb pe bucătarul-șef.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.clean.1': "Pot să întreb unde sunt lucrurile de curățenie.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.clean.2': "Pot să avertizez pe cineva că podeaua e alunecoasă.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.kas.1': "Pot să întreb în ce rând încep.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.kas.2': "Pot să întreb dacă o seră a fost stropită.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.tech.1': "Pot să întreb dacă mai e curent.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.tech.2': "Pot să spun că un cablu e stricat.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.garage.1': "Pot să spun că o anvelopă e spartă.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.garage.2': "Pot să spun că mai întâi clientul trebuie să fie de acord.", // nieuw, nalezen // nagelezen AI 28 nov
    // Vervoer en bezorging (5 november 2026).
    'kjn.u.delivery.1': "Pot să spun că clientul nu e acasă.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.delivery.2': "Pot să le cer vecinilor să primească un colet.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.delivery.3': "Pot să întreb cine decide traseul și orele mele.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.afbouw.1': "Pot să cer gletiera zimțată sau mistria.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.afbouw.2': "Pot să întreb de unde încep cu plăcile.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.afbouw.3': "Pot să spun că peretele nu e încă uscat.", // nieuw, nalezen // nagelezen AI 28 nov
    // Goed communiceren en Feedback en overleg (5 november 2026).
    'kjn.u.communicate.1': "Pot să explic ce nu e în regulă.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.communicate.2': "Pot să spun ce am auzit.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.communicate.3': "Pot să cer la timp o discuție.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.feedback.1': "Pot să cer un exemplu când primesc feedback.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.feedback.2': "Pot să spun prietenos ce poate fi mai bine.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.feedback.3': "Pot să pun o întrebare la o ședință de echipă.", // nieuw, nalezen // nagelezen AI 28 nov
    // "Metselen, hout en vastmaken" and "Machines en gereedschap" (20-21 November 2026).
    'kjn.u.ruwbouw.1': "Pot să cer fierăstrăul de mână sau bormașina cu acumulator.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.ruwbouw.2': "Pot să întreb cum fixez o scândură.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.machines.1': "Pot să spun că apărătoarea de protecție e stricată.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.machines.2': "Pot să întreb cât de des iau o probă.", // nieuw, nalezen // nagelezen AI 28 nov
    // "Elektra, leidingen en metaal" (21 November 2026).
    'kjn.u.install.1': "Pot să întreb dacă am voie să deschid tabloul electric.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.install.2': "Pot să spun că un racord pierde apă.", // nieuw, nalezen // nagelezen AI 28 nov
    // "Assemblage en montage" (21 November 2026).
    'kjn.u.montage.1': "Pot să spun că lada cu piese e aproape goală.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.montage.2': "Pot să întreb cât de strâns trebuie să fie un bolț.", // nieuw, nalezen // nagelezen AI 28 nov
    // "Kweken, sorteren en de kas" and "Banden, olie en remmen" (22 November 2026).
    'kjn.u.kweek.1': "Pot să spun că e mucegai pe o plantă.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.kweek.2': "Pot să întreb dacă o roșie e destul de coaptă.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.carservice.1': "Pot să spun că martorul de avertizare e aprins.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.carservice.2': "Pot să întreb cât ulei trebuie pus.", // nieuw, nalezen // nagelezen AI 28 nov
    // The new sectors (23 November 2026).
    'kjn.u.mowing.1': "Pot să spun că iarba e prea udă.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.mowing.2': "Pot să întreb ce crengi trebuie tăiate.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.planting.1': "Pot să spun că sunt cioburi.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.planting.2': "Pot să întreb dacă am voie să traversez drumul.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.frontdesk.1': "Pot să salut și să ajut un vizitator.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.frontdesk.2': "Pot să întreb pentru cine e un colet.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.maintenance.1': "Pot să raportez o defecțiune.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.maintenance.2': "Pot să întreb unde trebuie dus un birou.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.guarding.1': "Pot să cer să văd actul de identitate al cuiva.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.guarding.2': "Pot să spun prin stație ce văd.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.incidents.1': "Pot să sun la 112 și să spun ce s-a întâmplat.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.incidents.2': "Pot să vorbesc calm cu un client furios.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.foodhygiene.1': "Pot să spun că în camera frigorifică e prea cald.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.foodhygiene.2': "Pot să întreb dacă are nuci în el.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.foodline.1': "Pot să spun că eticheta nu e corectă.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.foodline.2': "Pot să întreb cât trebuie pus într-o caserolă.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.collection.1': "Pot să-l ajut pe șofer să dea înapoi.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.collection.2': "Pot să spun că o pubelă e prea grea.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.recycling.1': "Pot să-i spun unui vizitator unde merge gunoiul lui.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.recycling.2': "Pot să spun că presa s-a blocat.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.toddlers.1': "Pot să spun că schimb scutecul unui copil.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.toddlers.2': "Pot să întreb dacă un copil doarme deja.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.daycare.1': "Pot să-i spun unui părinte cum a fost ziua.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.daycare.2': "Pot să întreb cine vine să ia un copil.", // nieuw, nalezen // nagelezen AI 28 nov
    // Five new units (23 November 2026).
    'kjn.u.uitzend.1': "Pot să întreb în ce fază sunt.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.uitzend.2': "Pot să întreb pentru ce e o reținere din salariul meu.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.housekeeping.1': "Pot să spun că o toaletă e înfundată.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.housekeeping.2': "Pot să întreb cât produs se pune în găleată.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.cooking.1': "Pot să-l întreb pe bucătarul-șef cum să tai ceva.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.cooking.2': "Pot să întreb un oaspete dacă vrea să plătească separat.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.carework.1': "Pot să întreb un client ce vrea să poarte.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.carework.2': "Pot să-i spun asistentei ce am văzut.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.shopfloor.1': "Pot să-i cer unui client bonul.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.shopfloor.2': "Pot să spun că magazinul se închide în curând.", // nieuw, nalezen // nagelezen AI 28 nov
    // "Veiligheid op het werk" and the VOG (23 November 2026).
    'kjn.u.safework.1': "Pot să recunosc câteva cuvinte despre indicatoarele de siguranță și despre foc.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.safework.2': "Pot să întreb dacă un produs e toxic.", // nieuw, nalezen // nagelezen AI 28 nov
    // "Operator in de procesindustrie" (23 November 2026).
    'kjn.u.process.1': "Pot să spun că presiunea e prea mare.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.process.2': "Pot să spun la predarea turei ce s-a întâmplat.", // nieuw, nalezen // nagelezen AI 28 nov
    // eight new lessons (26 November 2026).
    'kjn.u.firstday.3': "Pot să rog pe cineva să-mi mai arate o dată.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.rights.3': "Pot să spun că mă tratează altfel.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.money.3': "Pot să cer un plan de rate.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.warehouse.3': "Pot să spun că nu conduc un stivuitor retractabil fără instruire.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.process.3': "Pot să întreb cât trebuie să pun dintr-o materie primă.", // nieuw, nalezen // nagelezen AI 28 nov
  },
};

export default t;
