import type { CultureTranslation } from '../culture/types';

/** "Wat kun je nu?" in Ukrainian (src/content/kunJeNu.ts): the heading, the note, the coach card's line and
 *  the can-do sentences of all eight themes. */
const t: CultureTranslation = {
  ui: {
    kunJeNu: "Що ти вмієш тепер?", // nieuw, nalezen
    kunNote: "Рівень біля кожного речення — це орієнтир, а не офіційний рівень.", // nieuw, nalezen
    coachCanDo: "Скільки речень «Я можу …» у тебе є із завершених тем", // nieuw, nalezen
    kunLuisteren: "слухання", // nieuw, nalezen
    kunSpreken: "говоріння", // nieuw, nalezen
    kunLezen: "читання", // nieuw, nalezen
    kunSchrijven: "письмо", // nieuw, nalezen
    kunGesprekken: "розмова", // nieuw, nalezen
  },
  gloss: {
    'kjn.u.firstday.1': "Я можу представитися колегам на роботі.", // nieuw, nalezen
    'kjn.u.firstday.2': "Я можу запитати, до кого мені звернутися.", // nieuw, nalezen
    'kjn.u.help.1': "Я можу сказати, що не розумію.", // nieuw, nalezen
    'kjn.u.help.2': "Я можу попросити говорити повільніше.", // nieuw, nalezen
    'kjn.u.tools.1': "Я можу попросити записати це або показати.", // nieuw, nalezen
    'kjn.u.tools.2': "Я можу повторити завдання, щоб перевірити розуміння.", // nieuw, nalezen
    'kjn.u.tools.3': "Я можу сказати, що хочу практикувати нідерландську.", // nieuw, nalezen
    'kjn.u.data.1': "Я можу назвати своє ім’я по літерах.", // nieuw, nalezen
    'kjn.u.data.2': "Я можу сказати, в які дні можу працювати.", // nieuw, nalezen
    'kjn.u.data.3': "Я можу зрозуміти дату на слух.", // nieuw, nalezen
    'kjn.u.sounds.1': "Я чую різницю між словами, як man і maan.", // nieuw, nalezen
    'kjn.u.sounds.2': "Я можу повторити короткі речення зі складними звуками.", // nieuw, nalezen
    'kjn.u.safety.1': "Я розумію попередження, як «Pas op!».", // nieuw, nalezen
    'kjn.u.safety.2': "Я можу повідомити про нещасний випадок.", // nieuw, nalezen
    'kjn.u.safety.3': "Я можу сказати, що мене цього ще не навчили.", // nieuw, nalezen
    'kjn.u.apply.1': "Я можу розповісти, який у мене досвід.", // nieuw, nalezen
    'kjn.u.apply.2': "Я можу розповісти про себе на співбесіді.", // nieuw, nalezen
    'kjn.u.contract.1': "Я можу запитати, скільки годин на тиждень я працюю.", // nieuw, nalezen
    'kjn.u.contract.2': "Я можу запитати, чи мій контракт тимчасовий, чи постійний.", // nieuw, nalezen
    'kjn.u.contract.3': "Я можу сказати, коли можу і коли не можу працювати.", // nieuw, nalezen
    'kjn.u.grow.1': "Я можу розповісти, які в мене дипломи та сертифікати.", // nieuw, nalezen
    'kjn.u.grow.2': "Я можу сказати, що в мене добре виходить.", // nieuw, nalezen
    'kjn.u.lost.1': "Я можу сказати, що мій контракт закінчується.", // nieuw, nalezen
    'kjn.u.lost.2': "Я можу запитати, чи виплатять мені відпускні.", // nieuw, nalezen
    'kjn.u.stage.1': "Я можу запитати, хто мій наставник на підприємстві.", // nieuw, nalezen // nagelezen AI 31 okt
    'kjn.u.stage.2': "Я можу попросити відгук і приклад.", // nieuw, nalezen
    'kjn.u.time.1': "Я можу сказати, о котрій починається моя зміна.", // nieuw, nalezen
    'kjn.u.time.2': "Я можу сказати, що я хворію.", // nieuw, nalezen
    'kjn.u.pay.1': "Я можу сказати, що в моєму розрахунковому листі помилка.", // nieuw, nalezen
    'kjn.u.pay.2': "Я можу прочитати слова, як bruto і netto.", // nieuw, nalezen
    'kjn.u.leave.1': "Я можу попросити відпустку.", // nieuw, nalezen
    'kjn.u.leave.2': "Я можу повідомити про хворобу і про одужання.", // nieuw, nalezen
    'kjn.u.contact.1': "Я можу зателефонувати і сказати, хто я.", // nieuw, nalezen
    'kjn.u.contact.2': "Я можу попросити, щоб мені передзвонили.", // nieuw, nalezen
    'kjn.u.contact.3': "Я можу написати коротке повідомлення на роботу.", // nieuw, nalezen
    'kjn.u.house.1': "Я можу прочитати правила, як «Roken verboden».", // nieuw, nalezen
    'kjn.u.house.2': "Я можу запитати, де можна курити.", // nieuw, nalezen
    'kjn.u.house.3': "Я можу сказати, що чогось робити не можна.", // nieuw, nalezen
    'kjn.u.numbers.1': "Я розумію час, як «kwart over vier».", // nieuw, nalezen
    'kjn.u.numbers.2': "Я можу сказати, скільки щось коштує або важить.", // nieuw, nalezen
    'kjn.u.shop.1': "Я можу запитати, чи клієнт хоче платити карткою.", // nieuw, nalezen
    'kjn.u.shop.2': "Я можу показати клієнтові дорогу в магазині.", // nieuw, nalezen
    'kjn.u.ai.1': "Я можу запитати, чи правильна відповідь.", // nieuw, nalezen
    'kjn.u.ai.2': "Я можу сказати, що хочу поговорити з людиною.", // nieuw, nalezen
    'kjn.u.finish.1': "Я можу запитати, що означає слово в наряді на роботу.", // nieuw, nalezen
    'kjn.u.finish.2': "Я можу сказати, що готово, а що ні.", // nieuw, nalezen
    'kjn.u.online.1': "Я можу сказати, що мій пароль не працює.", // nieuw, nalezen
    'kjn.u.online.2': "Я можу розпізнати підозрілий лист.", // nieuw, nalezen
    'kjn.u.teamwork.1': "Я можу сказати, що мене дещо турбує.", // nieuw, nalezen
    'kjn.u.teamwork.2': "Я можу спокійно відмовитися від додаткової роботи.", // nieuw, nalezen
    'kjn.u.teamwork.3': "Я можу запитати, що мені зробити спочатку.", // nieuw, nalezen
    'kjn.u.social.1': "Я можу трохи поговорити з колегами на перерві.", // nieuw, nalezen
    'kjn.u.social.2': { m: "Я можу сказати, що зробив помилку.", f: "Я можу сказати, що зробила помилку.", x: "Я можу сказати, що це моя помилка." }, // nieuw, nalezen
    'kjn.u.social.3': "Я можу сказати, що щось переходить мою межу.", // nieuw, nalezen
    'kjn.u.sayings.1': "Я можу зрозуміти кілька поширених висловів.", // nieuw, nalezen
    'kjn.u.sayings.2': "Я можу сказати, що щось дуже легко (een eitje).", // nieuw, nalezen
    'kjn.u.rights.1': "Я можу сказати, що маю право на перерву.", // nieuw, nalezen
    'kjn.u.rights.2': "Я можу сказати, що хочу подати скаргу.", // nieuw, nalezen
    'kjn.u.exploit.1': "Я можу сказати, що мій паспорт залишається в мене.", // nieuw, nalezen
    'kjn.u.exploit.2': "Я можу запитати, чи можна про щось повідомити без мого імені.", // nieuw, nalezen
    'kjn.u.papers.1': "Я можу сказати, що моя адреса змінилася.", // nieuw, nalezen
    'kjn.u.papers.2': "Я можу запитати, скільки коштує оренда.", // nieuw, nalezen
    'kjn.u.health.1': "Я можу сказати, де в мене болить.", // nieuw, nalezen
    'kjn.u.health.2': "Я можу попросити записати мене до сімейного лікаря.", // nieuw, nalezen
    'kjn.u.money.1': "Я можу сказати, що не розумію листа.", // nieuw, nalezen
    'kjn.u.money.2': "Я можу сказати «ні» шахраю по телефону.", // nieuw, nalezen
    'kjn.u.travel.1': "Я можу розповісти, як я добираюся на роботу.", // nieuw, nalezen
    'kjn.u.travel.2': "Я можу запитати, де автобусна зупинка.", // nieuw, nalezen
    'kjn.u.society.1': "Я можу запитати, чи можу я голосувати.", // nieuw, nalezen
    'kjn.u.society.2': "Я можу сказати, що хочу подати заперечення.", // nieuw, nalezen
    'kjn.u.warehouse.1': "Я можу зрозуміти короткі вказівки на складі.", // nieuw, nalezen
    'kjn.u.warehouse.2': "Я можу сказати, де щось стоїть: ліворуч чи праворуч.", // nieuw, nalezen
    'kjn.u.build.1': "Я можу зрозуміти попередження на будові.", // nieuw, nalezen
    'kjn.u.build.2': "Я можу попросити інструменти.", // nieuw, nalezen
    'kjn.u.factory.1': "Я можу сказати, що є несправність.", // nieuw, nalezen
    'kjn.u.factory.2': "Я можу сказати, що не так із виробом.", // nieuw, nalezen
    'kjn.u.care.1': "Я можу запитати клієнта, чи можу я допомогти.", // nieuw, nalezen
    'kjn.u.care.2': "Я можу щось передати медсестрі.", // nieuw, nalezen
    'kjn.u.horeca.1': "Я можу запитати гостей, що вони бажають випити.", // nieuw, nalezen
    'kjn.u.horeca.2': "Я можу сказати, що запитаю шеф-кухаря.", // nieuw, nalezen
    'kjn.u.clean.1': "Я можу запитати, де речі для прибирання.", // nieuw, nalezen
    'kjn.u.clean.2': "Я можу попередити когось, що підлога слизька.", // nieuw, nalezen
    'kjn.u.kas.1': "Я можу запитати, з якого ряду мені починати.", // nieuw, nalezen
    'kjn.u.kas.2': "Я можу запитати, чи теплицю обприскували.", // nieuw, nalezen
    'kjn.u.tech.1': "Я можу запитати, чи тут ще є струм.", // nieuw, nalezen
    'kjn.u.tech.2': "Я можу сказати, що кабель зламаний.", // nieuw, nalezen
    'kjn.u.garage.1': "Я можу сказати, що шина пробита.", // nieuw, nalezen
    'kjn.u.garage.2': "Я можу сказати, що клієнт спершу має погодитися.", // nieuw, nalezen
  },
};

export default t;
