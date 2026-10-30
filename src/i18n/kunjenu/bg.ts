import type { CultureTranslation } from '../culture/types';

/** "Wat kun je nu?" in Bulgarian (src/content/kunJeNu.ts): the heading, the note, the coach card's line and
 *  the can-do sentences of the first four themes (TODO: the other four). */
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
    'kjn.u.tools.1': "Мога да помоля някого да го запише или да го покаже.", // nieuw, nalezen
    'kjn.u.tools.2': "Мога да повторя задача, за да проверя дали разбирам.", // nieuw, nalezen
    'kjn.u.tools.3': "Мога да кажа, че искам да упражнявам нидерландски.", // nieuw, nalezen
    'kjn.u.data.1': "Мога да кажа името си буква по буква.", // nieuw, nalezen
    'kjn.u.data.2': "Мога да кажа в кои дни мога да работя.", // nieuw, nalezen
    'kjn.u.data.3': "Мога да разбера дата, когато я чуя.", // nieuw, nalezen
    'kjn.u.sounds.1': "Мога да различа думи като man и maan.", // nieuw, nalezen
    'kjn.u.sounds.2': "Мога да повторя кратки изречения с трудни звуци.", // nieuw, nalezen
    'kjn.u.safety.1': "Мога да разбера предупреждение като „Pas op!“.", // nieuw, nalezen
    'kjn.u.safety.2': "Мога да съобщя за злополука.", // nieuw, nalezen
    'kjn.u.safety.3': "Мога да кажа, че още не са ме научили на нещо.", // nieuw, nalezen
    'kjn.u.apply.1': "Мога да кажа какъв опит имам.", // nieuw, nalezen
    'kjn.u.apply.2': "Мога да разкажа за себе си на интервю за работа.", // nieuw, nalezen
    'kjn.u.contract.1': "Мога да попитам колко часа седмично работя.", // nieuw, nalezen
    'kjn.u.contract.2': "Мога да попитам дали договорът ми е временен или постоянен.", // nieuw, nalezen
    'kjn.u.contract.3': "Мога да кажа кога мога и кога не мога да работя.", // nieuw, nalezen
    'kjn.u.grow.1': "Мога да кажа какви дипломи и сертификати имам.", // nieuw, nalezen
    'kjn.u.grow.2': "Мога да кажа какво ми се удава.", // nieuw, nalezen
    'kjn.u.lost.1': "Мога да кажа, че договорът ми свършва.", // nieuw, nalezen
    'kjn.u.lost.2': "Мога да попитам дали ще ми платят парите за отпуск.", // nieuw, nalezen
    'kjn.u.stage.1': "Мога да попитам кой е наставникът ми на практиката.", // nieuw, nalezen
    'kjn.u.stage.2': "Мога да поискам обратна връзка и пример.", // nieuw, nalezen
    'kjn.u.time.1': "Мога да кажа в колко часа започва смяната ми.", // nieuw, nalezen
    'kjn.u.time.2': { m: "Мога да кажа, че съм болен.", f: "Мога да кажа, че съм болна.", x: "Мога да кажа, че съм болен / болна." }, // nieuw, nalezen
    'kjn.u.pay.1': "Мога да кажа, че фишът ми за заплата не е верен.", // nieuw, nalezen
    'kjn.u.pay.2': "Мога да прочета думи като bruto и netto.", // nieuw, nalezen
    'kjn.u.leave.1': "Мога да поискам отпуск.", // nieuw, nalezen
    'kjn.u.leave.2': "Мога да съобщя за болест и за връщане на работа.", // nieuw, nalezen
    'kjn.u.contact.1': "Мога да се обадя и да кажа кой съм.", // nieuw, nalezen
    'kjn.u.contact.2': "Мога да помоля някого да ми се обади.", // nieuw, nalezen
    'kjn.u.contact.3': "Мога да напиша кратко съобщение до работата.", // nieuw, nalezen
    'kjn.u.house.1': "Мога да прочета правила като „Roken verboden“.", // nieuw, nalezen
    'kjn.u.house.2': "Мога да попитам къде може да се пуши.", // nieuw, nalezen
    'kjn.u.house.3': "Мога да кажа, че нещо не е позволено.", // nieuw, nalezen
    'kjn.u.numbers.1': "Мога да разбера часове като „kwart over vier“.", // nieuw, nalezen
    'kjn.u.numbers.2': "Мога да кажа колко струва или тежи нещо.", // nieuw, nalezen
    'kjn.u.shop.1': "Мога да попитам клиент дали иска да плати с карта.", // nieuw, nalezen
    'kjn.u.shop.2': "Мога да покажа на клиент пътя в магазина.", // nieuw, nalezen
    'kjn.u.ai.1': "Мога да попитам дали един отговор е верен.", // nieuw, nalezen
    'kjn.u.ai.2': "Мога да кажа, че искам да говоря с човек.", // nieuw, nalezen
    'kjn.u.finish.1': "Мога да попитам какво значи дума в работната поръчка.", // nieuw, nalezen
    'kjn.u.finish.2': "Мога да кажа кое е готово и кое не.", // nieuw, nalezen
    'kjn.u.online.1': "Мога да кажа, че паролата ми не работи.", // nieuw, nalezen
    'kjn.u.online.2': "Мога да позная подозрителен имейл.", // nieuw, nalezen
  },
};

export default t;
