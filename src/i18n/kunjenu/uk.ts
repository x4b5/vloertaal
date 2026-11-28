import type { CultureTranslation } from '../culture/types';

/** "Wat kun je nu?" in Ukrainian (src/content/kunJeNu.ts): the heading, the note, the coach card's line and
 *  the can-do sentences of all eight themes. */
const t: CultureTranslation = {
  ui: {
    kunJeNu: "Що ти вмієш тепер?", // nieuw, nalezen // nagelezen AI 28 nov
    kunNote: "Рівень біля кожного речення — це орієнтир, а не офіційний рівень.", // nieuw, nalezen // nagelezen AI 28 nov
    coachCanDo: "Скільки речень «Я можу …» у тебе є із завершених тем", // nieuw, nalezen // nagelezen AI 28 nov
    kunLuisteren: "слухання", // nieuw, nalezen // nagelezen AI 28 nov
    kunSpreken: "говоріння", // nieuw, nalezen // nagelezen AI 28 nov
    kunLezen: "читання", // nieuw, nalezen // nagelezen AI 28 nov
    kunSchrijven: "письмо", // nieuw, nalezen // nagelezen AI 28 nov
    kunGesprekken: "розмова", // nieuw, nalezen // nagelezen AI 28 nov
  },
  gloss: {
    'kjn.u.firstday.1': "Я можу представитися колегам на роботі.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.firstday.2': "Я можу запитати, до кого мені звернутися.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.help.1': "Я можу сказати, що не розумію.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.help.2': "Я можу попросити говорити повільніше.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.do.1': "Я розумію коротку вказівку, як-от «Zet het neer».", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.do.2': { m: "Я можу сказати, що закінчив завдання.", f: "Я можу сказати, що закінчила завдання.", x: "Я можу сказати, що завдання готове." }, // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.tools.1': "Я можу попросити записати це або показати.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.tools.2': "Я можу повторити вказівку, щоб перевірити розуміння.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    'kjn.u.tools.3': "Я можу сказати, що хочу практикувати нідерландську.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.data.1': "Я можу назвати своє ім’я по літерах.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.data.2': "Я можу сказати, в які дні можу працювати.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.data.3': "Я можу зрозуміти дату на слух.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.sounds.1': "Я чую різницю між словами, як-от man і maan.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    'kjn.u.sounds.2': "Я можу повторити короткі речення зі складними звуками.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.safety.1': "Я розумію попередження, як-от «Pas op!».", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    'kjn.u.safety.2': "Я можу сказати, що мене цього ще не навчили.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.emergency.1': "Я можу запитати, де висить вогнегасник.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.emergency.2': "Я можу повідомити про нещасний випадок.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.apply.1': "Я можу розповісти, який у мене досвід.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.apply.2': "Я можу розповісти про себе на співбесіді.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.contract.1': "Я можу запитати, скільки годин на тиждень я працюю.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.contract.2': "Я можу запитати, чи мій контракт тимчасовий, чи постійний.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.contract.3': "Я можу сказати, коли можу і коли не можу працювати.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.grow.1': "Я можу розповісти, які в мене дипломи та сертифікати.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.grow.2': "Я можу сказати, що в мене добре виходить.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.lost.1': "Я можу сказати, що мій контракт закінчується.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.lost.2': "Я можу запитати, чи виплатять мені відпускні.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.stage.1': "Я можу запитати, хто мій наставник на підприємстві.", // nieuw, nalezen // nagelezen AI 31 okt
    'kjn.u.stage.2': "Я можу попросити відгук і приклад.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.time.1': "Я можу сказати, о котрій починається моя зміна.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.time.2': "Я можу сказати, що я хворію.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.pay.1': "Я можу сказати, що в моєму розрахунковому листі помилка.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.pay.2': "Я можу прочитати слова, як-от bruto і netto.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    'kjn.u.leave.1': "Я можу попросити відпустку.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.leave.2': "Я можу сказати, що моя дитина хвора.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.sick.1': "Я можу повідомити про хворобу і про одужання.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.sick.2': "Я можу сказати, чого ще не можу робити.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.sick.3': "Я можу сказати, що спершу працюю по півдня.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.contact.1': "Я можу зателефонувати і сказати, хто я.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.contact.2': "Я можу попросити, щоб мені передзвонили.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.contact.3': "Я можу написати коротке повідомлення на роботу.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.house.1': "Я можу прочитати правила, як-от «Roken verboden».", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    'kjn.u.house.2': "Я можу запитати, де можна курити.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.house.3': "Я можу сказати, що чогось робити не можна.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.numbers.1': "Я розумію позначення часу, як-от «kwart over vier».", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    'kjn.u.numbers.2': "Я можу сказати, скільки щось коштує або важить.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.numbers.3': "Я розрізняю числа, як-от 13 і 30.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.shop.1': "Я можу запитати, чи клієнт хоче платити карткою.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.shop.2': "Я можу показати клієнтові дорогу в магазині.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.ai.1': "Я можу запитати, чи правильна відповідь.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.ai.2': "Я можу сказати, що хочу поговорити з людиною.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.finish.1': "Я можу запитати, що означає слово в наряді на роботу.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.finish.2': "Я можу сказати, що готово, а що ні.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.online.1': "Я можу сказати, що мій пароль не працює.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.online.2': "Я можу розпізнати підозрілий лист.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.teamwork.1': "Я можу сказати, що мене дещо турбує.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.teamwork.2': "Я можу спокійно відмовитися від додаткової роботи.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.teamwork.3': "Я можу запитати, що мені зробити спочатку.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.communicate.1': "Я можу пояснити, що не так.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.communicate.2': { m: "Я можу сказати, що я почув.", f: "Я можу сказати, що я почула.", x: "Я можу переказати почуте." }, // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.communicate.3': "Я можу вчасно попросити про розмову.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.feedback.1': "Я можу попросити приклад, коли отримую зворотний звʼязок.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.feedback.2': "Я можу привітно сказати, що можна зробити краще.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.feedback.3': "Я можу поставити запитання на робочій нараді.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.social.1': "Я можу трохи поговорити з колегами на перерві.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.social.2': { m: "Я можу сказати, що зробив помилку.", f: "Я можу сказати, що зробила помилку.", x: "Я можу сказати, що це моя помилка." }, // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.social.3': "Я можу сказати, що щось порушує мої межі.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    'kjn.u.sayings.1': "Я можу зрозуміти кілька поширених висловів.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.sayings.2': "Я можу сказати, що щось дуже легко (een eitje).", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.rights.1': "Я можу сказати, що маю право на перерву.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.rights.2': "Я можу сказати, що хочу подати скаргу.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.exploit.1': "Я можу сказати, що мій паспорт залишається в мене.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.exploit.2': "Я можу запитати, чи можна про щось повідомити без мого імені.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.papers.1': "Я можу сказати, що моя адреса змінилася.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.papers.2': "Я можу запитати, скільки коштує оренда.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.health.1': "Я можу сказати, де в мене болить.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.health.2': "Я можу попросити записати мене до сімейного лікаря.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.health.3': "Я можу сказати, що роботи для мене стає забагато.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.money.1': "Я можу сказати, що не розумію листа.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.money.2': "Я можу сказати «ні» шахраю по телефону.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.travel.1': "Я можу розповісти, як я добираюся на роботу.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.travel.2': "Я можу запитати, де автобусна зупинка.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.society.1': "Я можу запитати, чи маю я право голосувати.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    'kjn.u.society.2': "Я можу сказати, що хочу подати заперечення.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.warehouse.1': "Я можу зрозуміти короткі вказівки на складі.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.warehouse.2': "Я можу сказати, де щось стоїть: ліворуч чи праворуч.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.build.1': "Я можу зрозуміти попередження на будові.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.build.2': "Я можу попросити інструменти.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.factory.1': "Я можу сказати, що є несправність.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.factory.2': "Я можу сказати, що не так із виробом.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.factory.3': "Я можу повідомити, що в мене невеликий поріз.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.care.1': "Я можу запитати клієнта, чи можу я допомогти.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.care.2': "Я можу щось передати медсестрі.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.horeca.1': "Я можу запитати гостей, що вони бажають випити.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.horeca.2': "Я можу сказати, що запитаю шеф-кухаря.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.clean.1': "Я можу запитати, де речі для прибирання.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.clean.2': "Я можу попередити когось, що підлога слизька.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.kas.1': "Я можу запитати, з якого ряду мені починати.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.kas.2': "Я можу запитати, чи теплицю обприскували.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.tech.1': "Я можу запитати, чи тут ще є струм.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.tech.2': "Я можу сказати, що кабель зламаний.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.garage.1': "Я можу сказати, що шина пробита.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.garage.2': "Я можу сказати, що клієнт спершу має погодитися.", // nieuw, nalezen // nagelezen AI 28 nov
    // Vervoer en bezorging (5 november 2026).
    'kjn.u.delivery.1': "Я можу сказати, що клієнта немає вдома.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.delivery.2': "Я можу попросити сусідів узяти посилку.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.delivery.3': "Я можу запитати, хто визначає мій маршрут і мій час.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.afbouw.1': "Я можу попросити зубчастий шпатель або кельму.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.afbouw.2': "Я можу запитати, звідки мені починати класти плитку.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.afbouw.3': "Я можу сказати, що стіна ще не суха.", // nieuw, nalezen // nagelezen AI 28 nov
    // "Metselen, hout en vastmaken" and "Machines en gereedschap" (20-21 November 2026).
    'kjn.u.ruwbouw.1': "Я можу попросити ножівку або акумуляторний дриль.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.ruwbouw.2': "Я можу запитати, як закріпити дошку.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.machines.1': "Я можу сказати, що захисний кожух зламаний.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.machines.2': "Я можу запитати, як часто брати зразок.", // nieuw, nalezen // nagelezen AI 28 nov
    // "Elektra, leidingen en metaal" (21 November 2026).
    'kjn.u.install.1': "Я можу запитати, чи можна мені відкрити електрощиток.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.install.2': "Я можу сказати, що фітинг протікає.", // nieuw, nalezen // nagelezen AI 28 nov
    // "Assemblage en montage" (21 November 2026).
    'kjn.u.montage.1': "Я можу сказати, що ящик для деталей майже порожній.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.montage.2': "Я можу запитати, як туго треба затягнути болт.", // nieuw, nalezen // nagelezen AI 28 nov
    // "Kweken, sorteren en de kas" and "Banden, olie en remmen" (22 November 2026).
    'kjn.u.kweek.1': "Я можу сказати, що на рослині пліснява.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.kweek.2': "Я можу запитати, чи помідор достатньо стиглий.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.carservice.1': "Я можу сказати, що горить контрольна лампа.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.carservice.2': "Я можу запитати, скільки мастила треба залити.", // nieuw, nalezen // nagelezen AI 28 nov
    // The new sectors (23 November 2026).
    'kjn.u.mowing.1': "Я можу сказати, що трава занадто мокра.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.mowing.2': "Я можу запитати, які гілки треба зрізати.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.planting.1': "Я можу сказати, що тут бите скло.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.planting.2': "Я можу запитати, чи можна мені перейти дорогу.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.frontdesk.1': "Я можу привітати відвідувача і допомогти йому.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.frontdesk.2': "Я можу запитати, для кого посилка.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.maintenance.1': "Я можу повідомити про несправність.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.maintenance.2': "Я можу запитати, куди треба поставити стіл.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.guarding.1': "Я можу попросити показати документ.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.guarding.2': "Я можу сказати по рації, що я бачу.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.incidents.1': "Я можу подзвонити 112 і сказати, що сталося.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.incidents.2': "Я можу спокійно говорити зі злим клієнтом.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.foodhygiene.1': "Я можу сказати, що в холодильній камері занадто тепло.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.foodhygiene.2': "Я можу запитати, чи в цьому є горіхи.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.foodline.1': "Я можу сказати, що етикетка неправильна.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.foodline.2': "Я можу запитати, скільки треба класти в контейнер.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.collection.1': "Я можу допомогти водієві здати назад.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.collection.2': "Я можу сказати, що контейнер занадто важкий.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.recycling.1': "Я можу сказати відвідувачу, куди йдуть його відходи.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.recycling.2': "Я можу сказати, що прес заклинило.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.toddlers.1': "Я можу сказати, що зараз поміняю дитині підгузок.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.toddlers.2': "Я можу запитати, чи дитина вже спить.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.daycare.1': "Я можу розповісти мамі чи татові, як минув день.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.daycare.2': "Я можу запитати, хто прийде забрати дитину.", // nieuw, nalezen // nagelezen AI 28 nov
    // Five new units (23 November 2026).
    'kjn.u.uitzend.1': "Я можу запитати, у якій я фазі.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.uitzend.2': "Я можу запитати, за що утримання з моєї зарплати.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.housekeeping.1': "Я можу сказати, що туалет забитий.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.housekeeping.2': "Я можу запитати, скільки засобу треба налити у відро.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.cooking.1': "Я можу запитати шеф-кухаря, як щось нарізати.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.cooking.2': "Я можу запитати гостя, чи хоче він платити окремо.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.carework.1': "Я можу запитати клієнта, що він хоче вдягнути.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.carework.2': { m: "Я можу розповісти медсестрі, що я бачив.", f: "Я можу розповісти медсестрі, що я бачила.", x: "Я можу розповісти медсестрі про свої спостереження." }, // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.shopfloor.1': "Я можу попросити в покупця чек.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.shopfloor.2': "Я можу сказати, що магазин скоро зачиняється.", // nieuw, nalezen // nagelezen AI 28 nov
    // "Veiligheid op het werk" and the VOG (23 November 2026).
    'kjn.u.safework.1': "Я можу впізнати деякі слова про знаки безпеки та пожежу.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.safework.2': "Я можу запитати, чи засіб отруйний.", // nieuw, nalezen // nagelezen AI 28 nov
    // "Operator in de procesindustrie" (23 November 2026).
    'kjn.u.process.1': "Я можу сказати, що тиск занадто високий.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.process.2': "Я можу розповісти на передачі зміни, що сталося.", // nieuw, nalezen // nagelezen AI 28 nov
    // eight new lessons (26 November 2026).
    'kjn.u.firstday.3': "Я можу попросити когось показати ще раз.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.rights.3': "Я можу сказати, що до мене ставляться інакше.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.money.3': "Я можу попросити про розстрочку.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.warehouse.3': "Я можу сказати, що без навчання не керую річтраком.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.process.3': "Я можу запитати, скільки сировини треба засипати.", // nieuw, nalezen // nagelezen AI 28 nov
  },
};

export default t;
