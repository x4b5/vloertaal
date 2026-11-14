import type { CultureTranslation } from '../culture/types';

/** "Wat kun je nu?" in Bulgarian (src/content/kunJeNu.ts): the heading, the note, the coach card's line and
 *  the can-do sentences of all eight themes. */
const t: CultureTranslation = {
  ui: {
    kunJeNu: "Какво можеш сега?", // nieuw, nalezen
    kunNote: "Нивото до всяко изречение е ориентир, а не официално ниво.", // nieuw, nalezen
    coachCanDo: "Колко изречения „Мога …“ имаш от завършените теми", // nieuw, nalezen
    kunLuisteren: "слушане", // nieuw, nalezen
    kunSpreken: "говорене", // nieuw, nalezen
    kunLezen: "четене", // nieuw, nalezen
    kunSchrijven: "писане", // nieuw, nalezen
    kunGesprekken: "разговори", // nieuw, nalezen
  },
  gloss: {
    'kjn.u.firstday.1': "Мога да се представя на колега.", // nieuw, nalezen
    'kjn.u.firstday.2': "Мога да попитам при кого да се явя.", // nieuw, nalezen
    'kjn.u.help.1': "Мога да кажа, че не разбирам.", // nieuw, nalezen
    'kjn.u.help.2': "Мога да помоля някого да говори по-бавно.", // nieuw, nalezen
    'kjn.u.do.1': "Мога да разбера кратко указание като „Zet het neer“.", // nieuw, nalezen
    'kjn.u.do.2': { m: "Мога да кажа, че съм приключил със задача.", f: "Мога да кажа, че съм приключила със задача.", x: "Мога да кажа, че задачата е готова." }, // nieuw, nalezen
    'kjn.u.tools.1': "Мога да помоля някого да го запише или да го покаже.", // nieuw, nalezen
    'kjn.u.tools.2': "Мога да повторя указанието, за да проверя дали разбирам.", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'kjn.u.tools.3': "Мога да кажа, че искам да упражнявам нидерландски.", // nieuw, nalezen
    'kjn.u.data.1': "Мога да кажа името си буква по буква.", // nieuw, nalezen
    'kjn.u.data.2': "Мога да кажа в кои дни мога да работя.", // nieuw, nalezen
    'kjn.u.data.3': "Мога да разбера дата, когато я чуя.", // nieuw, nalezen
    'kjn.u.sounds.1': "Мога да различа думи като man и maan.", // nieuw, nalezen
    'kjn.u.sounds.2': "Мога да повторя кратки изречения с трудни звуци.", // nieuw, nalezen
    'kjn.u.safety.1': "Мога да разбера предупреждение като „Pas op!“.", // nieuw, nalezen
    'kjn.u.safety.2': "Мога да кажа, че още не са ме научили на нещо.", // nieuw, nalezen
    'kjn.u.emergency.1': "Мога да попитам къде е пожарогасителят.", // nieuw, nalezen
    'kjn.u.emergency.2': "Мога да съобщя за злополука.", // nieuw, nalezen
    'kjn.u.apply.1': "Мога да кажа какъв опит имам.", // nieuw, nalezen
    'kjn.u.apply.2': "Мога да разкажа за себе си на интервю за работа.", // nieuw, nalezen
    'kjn.u.contract.1': "Мога да попитам колко часа седмично работя.", // nieuw, nalezen
    'kjn.u.contract.2': "Мога да попитам дали договорът ми е временен или постоянен.", // nieuw, nalezen
    'kjn.u.contract.3': "Мога да кажа кога мога и кога не мога да работя.", // nieuw, nalezen
    'kjn.u.grow.1': "Мога да кажа какви дипломи и сертификати имам.", // nieuw, nalezen
    'kjn.u.grow.2': "Мога да кажа какво ми се удава.", // nieuw, nalezen
    'kjn.u.lost.1': "Мога да кажа, че договорът ми свършва.", // nieuw, nalezen
    'kjn.u.lost.2': "Мога да попитам дали ще ми платят парите за отпуск.", // nieuw, nalezen
    'kjn.u.stage.1': "Мога да попитам кой е наставникът ми във фирмата.", // nieuw, nalezen // nagelezen AI 31 okt
    'kjn.u.stage.2': "Мога да поискам обратна връзка и пример.", // nieuw, nalezen
    'kjn.u.time.1': "Мога да кажа в колко часа започва смяната ми.", // nieuw, nalezen
    'kjn.u.time.2': { m: "Мога да кажа, че съм болен.", f: "Мога да кажа, че съм болна.", x: "Мога да кажа, че се разболях." }, // nieuw, nalezen (AI-correctie 2 nov 2026)
    'kjn.u.pay.1': "Мога да кажа, че фишът ми за заплата не е верен.", // nieuw, nalezen
    'kjn.u.pay.2': "Мога да прочета думи като bruto и netto.", // nieuw, nalezen
    'kjn.u.leave.1': "Мога да поискам отпуск.", // nieuw, nalezen
    'kjn.u.leave.2': "Мога да кажа, че детето ми е болно.", // nieuw, nalezen
    'kjn.u.sick.1': "Мога да съобщя за болест и за връщане на работа.", // nieuw, nalezen
    'kjn.u.sick.2': "Мога да кажа какво още не мога.", // nieuw, nalezen
    'kjn.u.sick.3': "Мога да кажа, че отначало работя половин ден.", // nieuw, nalezen
    'kjn.u.contact.1': "Мога да се обадя и да кажа кой съм.", // nieuw, nalezen
    'kjn.u.contact.2': "Мога да помоля някого да ми се обади.", // nieuw, nalezen
    'kjn.u.contact.3': "Мога да напиша кратко съобщение до работата.", // nieuw, nalezen
    'kjn.u.house.1': "Мога да прочета правила като „Roken verboden“.", // nieuw, nalezen
    'kjn.u.house.2': "Мога да попитам къде може да се пуши.", // nieuw, nalezen
    'kjn.u.house.3': "Мога да кажа, че нещо не е позволено.", // nieuw, nalezen
    'kjn.u.numbers.1': "Мога да разбера часове като „kwart over vier“.", // nieuw, nalezen
    'kjn.u.numbers.2': "Мога да кажа колко струва или тежи нещо.", // nieuw, nalezen
    'kjn.u.numbers.3': "Мога да различавам числа като 13 и 30.", // nieuw, nalezen
    'kjn.u.shop.1': "Мога да попитам клиент дали иска да плати с карта.", // nieuw, nalezen
    'kjn.u.shop.2': "Мога да покажа на клиент пътя в магазина.", // nieuw, nalezen
    'kjn.u.ai.1': "Мога да попитам дали един отговор е верен.", // nieuw, nalezen
    'kjn.u.ai.2': "Мога да кажа, че искам да говоря с човек.", // nieuw, nalezen
    'kjn.u.finish.1': "Мога да попитам какво значи дума в работната поръчка.", // nieuw, nalezen
    'kjn.u.finish.2': "Мога да кажа кое е готово и кое не.", // nieuw, nalezen
    'kjn.u.online.1': "Мога да кажа, че паролата ми не работи.", // nieuw, nalezen
    'kjn.u.online.2': "Мога да позная подозрителен имейл.", // nieuw, nalezen
    'kjn.u.teamwork.1': "Мога да кажа, че нещо ме притеснява.", // nieuw, nalezen
    'kjn.u.teamwork.2': "Мога спокойно да откажа допълнителна работа.", // nieuw, nalezen
    'kjn.u.teamwork.3': "Мога да попитам какво да направя първо.", // nieuw, nalezen
    'kjn.u.social.1': "Мога да си побъбря с колегите в почивката.", // nieuw, nalezen
    'kjn.u.social.2': "Мога да кажа, че сгреших.", // nieuw, nalezen
    'kjn.u.social.3': "Мога да кажа, че нещо нарушава личните ми граници.", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'kjn.u.sayings.1': "Мога да разбера няколко често срещани израза.", // nieuw, nalezen
    'kjn.u.sayings.2': "Мога да кажа, че нещо е много лесно (een eitje).", // nieuw, nalezen
    'kjn.u.rights.1': "Мога да кажа, че имам право на почивка.", // nieuw, nalezen
    'kjn.u.rights.2': "Мога да кажа, че искам да подам оплакване.", // nieuw, nalezen
    'kjn.u.exploit.1': "Мога да кажа, че паспортът остава при мен.", // nieuw, nalezen
    'kjn.u.exploit.2': "Мога да попитам дали мога да съобщя нещо, без да казвам името си.", // nieuw, nalezen
    'kjn.u.papers.1': "Мога да кажа, че адресът ми се промени.", // nieuw, nalezen
    'kjn.u.papers.2': "Мога да попитам колко е наемът.", // nieuw, nalezen
    'kjn.u.health.1': "Мога да кажа къде ме боли.", // nieuw, nalezen
    'kjn.u.health.2': "Мога да поискам час при личния лекар.", // nieuw, nalezen
    'kjn.u.health.3': "Мога да кажа, че работата ми идва в повече.", // nieuw, nalezen
    'kjn.u.money.1': "Мога да кажа, че не разбирам едно писмо.", // nieuw, nalezen
    'kjn.u.money.2': "Мога да откажа на измамник по телефона.", // nieuw, nalezen
    'kjn.u.travel.1': "Мога да кажа как стигам до работа.", // nieuw, nalezen
    'kjn.u.travel.2': "Мога да попитам къде е автобусната спирка.", // nieuw, nalezen
    'kjn.u.society.1': "Мога да попитам дали мога да гласувам.", // nieuw, nalezen
    'kjn.u.society.2': "Мога да кажа, че искам да подам възражение.", // nieuw, nalezen
    'kjn.u.warehouse.1': "Мога да разбера кратки указания в склада.", // nieuw, nalezen
    'kjn.u.warehouse.2': "Мога да кажа къде е нещо: отляво или отдясно.", // nieuw, nalezen
    'kjn.u.build.1': "Мога да разбера предупреждение на строежа.", // nieuw, nalezen
    'kjn.u.build.2': "Мога да поискам инструменти.", // nieuw, nalezen
    'kjn.u.factory.1': "Мога да кажа, че има повреда.", // nieuw, nalezen
    'kjn.u.factory.2': "Мога да кажа какво не е наред с един продукт.", // nieuw, nalezen
    'kjn.u.factory.3': "Мога да съобщя, че имам малко порязване.", // nieuw, nalezen
    'kjn.u.care.1': "Мога да попитам клиент дали мога да помогна.", // nieuw, nalezen
    'kjn.u.care.2': "Мога да предам нещо на медицинската сестра.", // nieuw, nalezen
    'kjn.u.horeca.1': "Мога да попитам гостите какво ще пият.", // nieuw, nalezen
    'kjn.u.horeca.2': "Мога да кажа, че ще попитам главния готвач.", // nieuw, nalezen
    'kjn.u.clean.1': "Мога да попитам къде са нещата за почистване.", // nieuw, nalezen
    'kjn.u.clean.2': "Мога да предупредя някого, че подът е хлъзгав.", // nieuw, nalezen
    'kjn.u.kas.1': "Мога да попитам от кой ред да започна.", // nieuw, nalezen
    'kjn.u.kas.2': "Мога да попитам дали една оранжерия е пръскана.", // nieuw, nalezen
    'kjn.u.tech.1': "Мога да попитам дали още има ток.", // nieuw, nalezen
    'kjn.u.tech.2': "Мога да кажа, че един кабел е повреден.", // nieuw, nalezen
    'kjn.u.garage.1': "Мога да кажа, че една гума е спукана.", // nieuw, nalezen
    'kjn.u.garage.2': "Мога да кажа, че клиентът първо трябва да е съгласен.", // nieuw, nalezen
    // Vervoer en bezorging (5 november 2026).
    'kjn.u.delivery.1': "Мога да кажа, че клиентът не е вкъщи.", // nieuw, nalezen
    'kjn.u.delivery.2': "Мога да помоля съседите да приемат пратка.", // nieuw, nalezen
    'kjn.u.delivery.3': "Мога да попитам кой решава маршрута и часовете ми.", // nieuw, nalezen
    // Goed communiceren en Feedback en overleg (5 november 2026).
    'kjn.u.communicate.1': "Мога да обясня какво не е наред.", // nieuw, nalezen
    'kjn.u.communicate.2': "Мога да повторя чутото.", // nieuw, nalezen
    'kjn.u.communicate.3': "Мога навреме да помоля за разговор.", // nieuw, nalezen
    'kjn.u.feedback.1': "Мога да помоля за пример, когато получавам обратна връзка.", // nieuw, nalezen
    'kjn.u.feedback.2': "Мога любезно да кажа какво може да е по-добре.", // nieuw, nalezen
    'kjn.u.feedback.3': "Мога да задам въпрос на екипна среща.", // nieuw, nalezen
  },
};

export default t;
