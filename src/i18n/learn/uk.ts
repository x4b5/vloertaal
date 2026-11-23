import type { CultureTranslation } from '../culture/types';

/** Learning mechanics (G4 r1): speaking without a microphone, picture choice, build feedback, and why a chat reply fits (src/content/chatWhy.ts). */
const t: CultureTranslation = {
  ui: {
    sayAloud: "Мікрофон не потрібен. Скажи це вголос, потім продовжуй.",
    micRetry: "Спробуй мікрофон ще раз",
    micFailed: "Мікрофон не спрацював. Скажи це вголос, потім продовжуй.",
    micRefused: "Застосунок не має доступу до мікрофона. Ти можеш його увімкнути.", // nieuw, nalezen (AI-correctie 2 nov 2026)
    micTurnOn: "Увімкни мікрофон", // nieuw, nalezen
    micStepsIos: "Торкнися «•••» або «aA» в адресному рядку › Параметри вебсайту › Мікрофон › Дозволити. Або: Параметри › Програми › Safari › Мікрофон. Потім торкнися кнопки нижче.", // nieuw, nalezen
    micStepsIosOther: "Торкнися значка ліворуч від вебадреси › Дозволи › Мікрофон › Дозволити. Або: Параметри › Програми › {app} › Мікрофон. Потім торкнися кнопки нижче.", // nieuw, nalezen
    micStepsAndroid: "Торкнися значка ліворуч від вебадреси › Дозволи › Мікрофон › Дозволити. Потім торкнися кнопки нижче.", // nieuw, nalezen
    micStepsAndroidApp: "Утримуй значок Vloertaal на головному екрані › Про додаток › Дозволи › Мікрофон › Дозволити. Потім торкнися кнопки нижче.", // nieuw, nalezen
    micStepsDesktop: "Клацни значок ліворуч від вебадреси › Мікрофон › Дозволити. Потім клацни кнопку нижче.", // nieuw, nalezen
    whichPicture: "Яка це картинка?",
    sayAloudInstead: "Натомість скажи вголос",
    wordsPractised: "Повторені слова",
    reviewComplete: "Повторення завершено!",
  },
  gloss: {
    'c.hello.a.why': "На прощання відповідають прощанням.",
    'c.people.a.why': "Питають імʼя. Ця відповідь його називає.",
    'c.arrive.a.why': "Питають, навіщо людина прийшла. Ця відповідь каже: новий працівник, починає сьогодні.",
    'c.understand.a.why': "Щось незрозуміло? Попросити повторити — це нормально.",
    'c.translate.a.why': "Записка ще незрозуміла, тому спершу її перекладають.",
    'c.understood.a.why': "Повторення завдання перевіряє, чи зрозумілий порядок дій.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.keeplearning.a.why': "Просити говорити нідерландською — нормально: практика допомагає.",
    'c.gear.a.why': "Питання про каску: так, вона на голові.",
    'c.danger.a.why': "У разі нещасного випадку спершу дзвонять 112.",
    'c.alarm.a.why': "Питають, чи всі вийшли: ця відповідь каже, кого ще немає.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.accident.a.why': "Питають, що сталося: ця відповідь каже, що сталося і як він.",
    'c.notyet.a.why': "Коли кажуть «просто спробуй», безпечна відповідь — попросити спершу показати.",
    'c.things.a.why': "Питання «куди». Ця відповідь називає місце.",
    'c.directions.a.why': "Ліворуч чи праворуч? Ця відповідь вибирає одне й каже, де.",
    'c.shift.a.why': "Коли починається зміна? Ця відповідь називає день і годину.",
    'c.sick.a.why': "Хвороба означає залишитися вдома й повідомити про це.",
    'd.speakup.a.why': "На питання, чи щось не так, чесне «так» — добре.",
    'd.agree.a.why': "Відмовити можна. Запропонувати інший день — корисно.",
    'd.task.a.why': "Питання, чи вже готово: ця відповідь каже «майже» і скільки ще.",
    'd.clear.a.why': "Питання, чи зрозуміло: спершу «так», потім одне питання.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.cv.a.why': "Рекомендація — це колишній керівник, який може розповісти про роботу.",
    'c.interview.a.why': "На співбесіді важить досвід роботи.",
    'c.findwork.a.why': "Питають, яку роботу. Ця відповідь її називає.",
    'c.contract.a.why': "«Так» і питання про час — чітко й з бажанням.",
    'c.agency.a.why': "Питають про години: «так», а ще коли і як.",
    'c.bsn.a.why': "Роботодавець може попросити показати посвідчення особи, наприклад паспорт.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.housing.a.why': "Утримання із зарплати мають бути погоджені письмово.",
    'c.payslip.a.why': "Про відсутні години в розрахунковому листі треба повідомити.",
    'c.extra.a.why': "Понаднормові години записують, щоб їх можна було перевірити в розрахунковому листі.",
    'c.phone.a.why': "Без телефону біля машин: повідомлення чекають перерви.",
    'c.smoking.a.why': "Перерви — у визначений час, не раніше.",
    'c.clock.a.why': "Реєструвати прихід за когось іншого заборонено.",
    'c.hygiene.a.why': "Сіточка для волосся — так, прикраси — ні: такі правила гігієни для роботи з їжею.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.smalltalk.a.why': "Питання про вихідні: однієї речі досить.",
    'c.mistakes.a.why': "На комплімент відповідають подякою.",
    'c.respect.a.why': "Про цькування треба сказати, щоб хтось міг допомогти.",
    'c.gossip.a.why': "Неучасть у плітках зберігає довіру в команді.",
    'c.boundaries.a.why': "Жарт, який ранить, можна чітко зупинити.",
    'c.health.a.why': "Перерва береже здоровʼя, тому її беруть.",
    'c.rights.a.why': "Звільнення ніколи не підписують одразу. Спершу порада.",
    'c.mustmay.a.why': "Добровільно означає, що ти можеш вибрати: працювати в суботу не потрібно.",
    'c.leave.a.why': "Коли? Ця відповідь називає місяць і тривалість.",
    'c.illness.a.why': "Медичні подробиці — для лікаря компанії, не для керівника.",
    'c.warning.a.why': "Роботодавець може зробити копію паспорта, але не тримати його.",
    'c.gethelp.a.why': "Чітко сказати, що не так, — тоді вони можуть допомогти.",
    'c.callin.a.why': "Коли повернешся? Ця відповідь називає день.",
    'c.texting.a.why': "Швидка відповідь у застосунку допомагає з графіком.",
    'c.certs.a.why': "Чесне «ні» і бажання вчитися — добра відповідь.",
    'c.diploma.a.why': "«Так» навчанню і питання, хто платить, — це нормально.",
    'c.doctor.a.why': "Чергова служба лікарів має знати, хто хворий і що з ним.",
    'c.insurance.a.why': "Назва страховика є на картці медичного страхування.",
    'c.letters.a.why': "Податкову декларацію подають до 1 травня.",
    'c.scams.a.why': "Банк ніколи не питає PIN-код. Покласти слухавку — правильно.",
    'c.bike.a.why': "Як? Ця відповідь називає транспорт і час.",
    'c.transit.a.why': "Не поїзд: ця відповідь називає автобус.",
    'c.ww.a.why': "Заяву на допомогу з безробіття (WW) треба подати одразу.",
    'c.newjob.a.why': "Номер телефону дає змогу передзвонити.",
    'c.tools.a.why': "Де? Ця відповідь називає місце: у фургоні.",
    'c.site.a.why': "На даху страховка від падіння завжди на першому місці.",
    'c.line.a.why': "Як справи? Ця відповідь каже, як справи, і називає проблему.",
    'c.quality.a.why': "Чому окремо? Ця відповідь називає дефект.",
    'c.client.a.why': "Клієнт просить допомоги: ввічливе «так», з «u».",
    'c.privacy.a.why': "Ліки — для навченого персоналу: їх дає медсестра.",
    'c.kitchen.a.why': "Алергія — це серйозно: шеф-кухар має знати.",
    'c.service.a.why': "Попросили рахунок: коротке «так» — і вже йдуть.",
    'c.cleaning.a.why': "Готово? Ця відповідь каже «майже» і скільки лишилося.",
    'c.cleansafe.a.why': "Мокра підлога слизька: попередження допомагає.",
    'c.shelves.a.why': "Питають «де». Ця відповідь називає прохід і пропонує допомогу.",
    'c.checkout.a.why': "Питають, чи можна платити карткою: коротке привітне «так».",
    'c.counting.a.why': "Питають, скільки: ця відповідь називає число і перевіряє його цифра за цифрою.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.hours.a.why': "Питають про час. Ця відповідь називає час.",
    'c.measures.a.why': "Питають про довжину. Ця відповідь називає довжину.",
    'c.aihelp.a.why': "Питають, хто це написав: чесне «так», яке називає помічника.",
    'c.aiprivate.a.why': "Просять вставити імена в чат-бот: ця відповідь каже «ні» і пояснює чому.",
    'c.aifake.a.why': "Новий номер просить грошей: ця відповідь спершу перевіряє.",
    'c.aiplan.a.why': "Графік склав застосунок: ця відповідь просить про розмову з людиною.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    // In de kas (u.kas, 30 okt 2026): nagelezen (2e lezing).
    'c.harvest.a.why': "Питають, скільки рядів: ця відповідь називає число і те, що залишилося.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.a.why': "Щойно обприскали: ця відповідь каже «ще ні» і чому.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    // nagelezen (2e lezing): why the chat replies of the new lessons fit (30 October 2026).
    'c.details.a.why': "Питають прізвище: ця відповідь його називає і пропонує сказати по літерах.", // nagelezen AI 22 nov
    'c.dates.a.why': "Питають дату: ця відповідь називає день і дату.", // nagelezen AI 22 nov
    'c.permit.a.why': "Відмова з причиною — це нормально. Запропонувати інший день — це допомагає.", // nagelezen AI 22 nov
    'c.kids.a.why': "Питають чому: ця відповідь називає причину — дзвонили з садка.", // nagelezen AI 22 nov
    'c.body.a.why': "Питають, де болить: ця відповідь називає місце і причину.", // nagelezen AI 22 nov
    'c.jobends.a.why': "Житло пов’язане з роботою: ця відповідь питає про строк попередження.", // nagelezen AI 22 nov
    // Entree in the Taal track (30 October 2026), why the chat replies fit: nieuw, nalezen.
    'c.workorder.a.why': "Незрозуміле слово: запитати до початку — правильна відповідь.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handover.a.why': "Питання, чи все готово: ця відповідь каже, що не готово і чому.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.a.why': "Питання «чому»: ця відповідь дає причину — очі треба захищати.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.a.why': "Робота з лампою: ця відповідь спершу питає, чи вимкнено струм.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.garage.a.why': "Просять поміняти шини: «так» і питання, де вони.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carjob.a.why': "Додаткова робота: клієнт має спершу погодитися, тому ця відповідь — питання до начальника.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.a.why': "Питання «коли»: ця відповідь називає день, а договір іде першим.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.a.why': "Відгук ще незрозумілий: попросити показати — добра відповідь.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.council.a.why': "Питання про вибори: «так» і дві речі, які треба взяти.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.a.why': "Поліція просить документ: показати його й запитати, що сталося.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.a.why': "Питання, чи вдається увійти: ця відповідь каже «ні» і чому.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.a.why': "Питання про посилання: чесне «так» і дзвінок в IT-відділ.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.a.why': "Питання про сильні сторони: ця відповідь називає одну, з прикладом.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.a.why': "Питання про план: ця відповідь називає bbl і що це означає.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.a.why': "Питання, чи лист надіслано: ще ні, його спершу перевіряють.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.a.why': "Пропонують «купи зараз, заплати потім»: ввічливе «ні», з причиною.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.a.why': "Пропонують пігулку: ввічливе «ні», з причиною.", // nieuw, nalezen // nagelezen AI 22 nov
    // Vertaalronde 5 november 2026.
    'd.newcolleague.a.why': "«Здається» — це ще не впевненість: попросити показати — значить перевірити, що все виходить.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.a.why': "Питають, чому чистять лінію: наступний продукт без горіхів.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.a.why': "Питають, чи посилка для них: так, а потім підпис.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.a.why': "Просять ще один рейс: ні, бо спершу перерва.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.a.why': "Питають, якої ширини: число з одиницею, і його записано.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.a.why': "Питають, куди покласти дерево: місце і де воно.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.a.why': "Питають, що сталося: так, що саме і як довго.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.a.why': "Питають, як він: що ти бачиш і що це нове.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.a.why': "Просять підняти людину: не самотужки, спершу підйомник.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.a.why': "Питають про чисті склянки: так, і коли вони будуть.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.a.why': "Доручення від шефа: відповідь, щоб він знав, що його почули.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.a.why': "Питають, чи офіс прибрано: ні, і причина.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.a.why': "Питають про серветку: ні, бо червона — для туалету.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.a.why': "Питають про молоко: не «ні», а подивитися на складі.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.a.why': "Сердитий покупець: спокійні слова, і приходить колега.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.a.why': "Питають, які збирати: колір показує, що стигле.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.a.why': "Насувається гроза: зупинитися й піти всередину — безпечний вибір.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.a.why': "Питають, чи підходить: ні, і ще раз поміряти, перш ніж застосовувати силу.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.a.why': "Питають, чи можна брати: ще ні, гарячий метал має охолонути.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.a.why': "Питають, що ти чуєш: яка частина і що вона робить.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.a.why': "Питають, чи можна починати: ще ні, бо це електромобіль.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.a.why': "Питають, як ти: коротке «так» і що ти не поспішаєш.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.a.why': "Питають, як ти: чесне «не дуже» — це нормально.", // nieuw, nalezen // nagelezen AI 22 nov
    // u.communicate en u.feedback (5 november 2026).
    'd.explain.a.why': "Питають, що не так: ця відповідь каже, що сталося і що потрібно.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.listen.a.why': "Незрозуміло, чи це жарт: краще запитати, ніж гадати.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.calm.a.why': "Питають, чому не готово: спокійна причина і що робити спершу.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.talkintime.a.why': "Хтось просить хвилинку: «так» і запитання, щоб людина могла розповісти.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.reachable.a.why': "Передзвонюєш після пропущеного дзвінка: привітання і чому ти дзвониш.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.getfeedback.a.why': "Пропонують зворотний звʼязок: «так» і що ти хочеш робити все добре.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.givefeedback.a.why': "Питають про роботу: спершу що добре, потім що може бути краще.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.meeting.a.why': "Питають, чи є запитання: ця відповідь ставить одне, про графік.", // nieuw, nalezen // nagelezen AI 22 nov
    // Logistiek at four lessons per unit (14 November 2026).
    'c.picking.a.why': "Питають, яка локація: ряд і комірка.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.loading.a.why': "Питають, чи піддон готовий: ні, і що ще треба зробити.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.a.why': "Питають, чи з фургоном усе гаразд: ні, і що зламано.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.a.why': "Питають, де ти: місце і на скільки запізнишся.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Hulp vragen" at four lessons (14 November 2026).
    'c.howto.a.why': "Питають, чи ти знаєш, як: ні, ще ні, сказано чесно.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mayask.a.why': "Питають, чи є питання: так, а спершу — чи є час.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.whereis.a.why': "Питають, чи можеш ти це знайти: ні, і прохання показати, де це.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Instructies", a new basis unit (u.do, 14 November 2026).
    'c.putdown.a.why': "Просять потримати: «так» і питання, куди це поставити.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.a.why': "Питають, чи двері зачинені: «ні», і їх зачиняють зараз.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.a.why': "Питають, чи він уже повний: «так», і його спорожняють.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.a.why': "Просять зробити це зараз: «так» і питання, що потім.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Tegels, stuc en verf", a new sector unit of Bouw (u.afbouw, 20 November 2026).
    'c.tiletools.a.why': "Питають, де міксер: місце і що поруч із ним.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.a.why': "Питають, звідки починати: посередині, на осьовій лінії.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.a.why': "Питають, чи стіна суха: «ні», і скільки чекати.", // nieuw, nalezen // nagelezen AI 22 nov
    // l.paint, l.prep, "Metselen, hout en vastmaken", three lessons of Rekenen and "Machines en gereedschap" (20-21 November 2026).
    'c.shapes.a.why': "Питають, чи це квадрат: «ні», прямокутник, і чому.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.a.why': "Питають, скільки градусів: число і половина чого це.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.a.why': "Питають, яка велика підлога: розрахунок і відповідь.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.a.why': "Питають, яку кисть: широку для стіни, маленьку для кутів.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.a.why': "Питають, чи можна фарбувати: «ні», і що спочатку.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.a.why': "Питають, скільки цеглин залишилося: один піддон, і що цього досить.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.a.why': "Питають, якої висоти має бути ряд: де це можна побачити.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.a.why': "Питають, яку пилку: пилку з обушком, і чому.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.a.why': "Питають, чи кут прямий: «так», і звідки це відомо.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.a.why': "Питають, де дриль: місце, і що він майже заряджений.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.a.why': "Питають, як закріпити полицю: чим і скільки.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.a.why': "Питають, чому машина зупиняється: датчик, і що він не бачить.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.a.why': "Питають, як часто: раз на годину, і де це записати.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.a.why': "Питають, скільки в коробку: число, і де це написано.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.a.why': "Питають, коли: день тижня і момент того дня.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Elektra, leidingen en metaal" (u.install, 21 November 2026).
    'c.wiring.a.why': "Питають, який провід куди: однаковий колір до однакового кольору.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.a.why': "Питають, чи можна відкрити: «ні», і хто це робить.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.a.why': "Питають, чи ще протікає: трохи, і що з цим зробити.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.a.why': "Питають, чому гострий: на ньому ще є задирка.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Assemblage en montage" (u.montage, 21 November 2026).
    'c.assembly.a.why': "Питають, який крок: номер, і куди дивитися.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.a.why': "Питають, як туго: поки ключ не клацне.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.a.why': "Питають, чи можна там стояти: ні, ніколи, і чому.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.a.why': "Питають, чи він хороший: ні, і що з ним не так.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Kweken, sorteren en de kas" (u.kweek) and "Banden, olie en remmen" (u.carservice), 22 November 2026.
    'c.sowing.a.why': "Питають, як глибоко: глибина, і не глибше.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.a.why': "Питають, чи він стиглий: ні, ще зелений, і що робити.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.a.why': "Питають, чому тепло: екран і кватирки закриті.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.a.why': "Питають, чи можна її вбити: ні, і чому вона допомагає.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.a.why': "Питають, чи треба їх знімати: так, і чому.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.a.why': "Питають, скільки: літри, і як перевірити.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.a.why': "Питають, чи треба новий: так, і чому.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.a.why': "Питають, що треба зробити: подивитися в наряд.", // nieuw, nalezen // nagelezen AI 22 nov
    // The new sectors Groen, Facilitair, Beveiliging, Voedingsindustrie, Afval en recycling and Kinderopvang (23 November 2026).
    'c.mowing.a.why': "Питають, чи можна взяти: так, і що зробити спершу.", // nieuw, nalezen
    'c.pruning.a.why': "Питають, які гілки: лише сухі.", // nieuw, nalezen
    'c.hedge.a.why': "Питають, якої висоти: до мотузки, не нижче.", // nieuw, nalezen
    'c.chainsaw.a.why': "Питають, чи можна: ще ні, і що спершу.", // nieuw, nalezen
    'c.weeding.a.why': "Питають, чи це бур’ян: ні, і що з ним робити.", // nieuw, nalezen
    'c.planting.a.why': "Питають, куди: місце на клумбі.", // nieuw, nalezen
    'c.roadside.a.why': "Питають, чи можна перейти: ні, зачекати, і чому.", // nieuw, nalezen
    'c.litter.a.why': "Мешканець питає, коли: ти не знаєш, і хто знає.", // nieuw, nalezen
    'c.reception.a.why': "У відвідувача зустріч: хвилинку, ти дзвониш.", // nieuw, nalezen
    'c.visitors.a.why': "Питають, куди пальто: місце, і де воно.", // nieuw, nalezen
    'c.mailroom.a.why': "Питають, для кого: відділ і поверх.", // nieuw, nalezen
    'c.meetingroom.a.why': "Питають, о котрій: година, і що треба зробити.", // nieuw, nalezen
    'c.faults.a.why': "Питають, чому холодно: що зламалося, і коли прийде допомога.", // nieuw, nalezen
    'c.repairs.a.why': "Питають, чи пищить: так, і чому.", // nieuw, nalezen
    'c.moving.a.why': "Питають, куди: кімната, і куди дивитися.", // nieuw, nalezen
    'c.closing.a.why': "Питають, чи хтось усередині: ні, і що ти робиш зараз.", // nieuw, nalezen
    'c.patrol.a.why': "Питають, чи щось було видно: так, що і де.", // nieuw, nalezen
    'c.access.a.why': "Просять зайти без картки: вибачте, без картки не можна.", // nieuw, nalezen
    'c.cameras.a.why': "Питають, що видно: хто, де, і що ти робиш.", // nieuw, nalezen
    'c.report.a.why': "Питають, що писати у звіті: що, де і коли.", // nieuw, nalezen
    'c.evacuation.a.why': "Питають, чи всі вийшли: ні, скількох бракує.", // nieuw, nalezen
    'c.firstaid.a.why': "Питають, де дефібрилятор: місце, і що поруч.", // nieuw, nalezen
    'c.shoplifting.a.why': "Питають, чи можна обшукати сумку: ні, і хто це робить.", // nieuw, nalezen
    'c.aggression.a.why': "Питають, чому не можна: причина, сказана спокійно.", // nieuw, nalezen
    'c.hygienelock.a.why': "Питають про годинник: ні, і правило за цим.", // nieuw, nalezen
    'c.allergens.a.why': "Питають, чи можна разом: ні, і чому.", // nieuw, nalezen
    'c.coldroom.a.why': "Питають, чому пищить: причина, і що робити.", // nieuw, nalezen
    'c.foreignbody.a.why': "Питають, що робити: кому це показати.", // nieuw, nalezen
    'c.cutting.a.why': "Питають, скільки: вага, і куди дивитися.", // nieuw, nalezen
    'c.labels.a.why': "Питають, яку дату: коли, і куди дивитися.", // nieuw, nalezen
    'c.linecleaning.a.why': "Питають, чи чисто: ще ні, і що залишилося.", // nieuw, nalezen
    'c.haccp.a.why': "Питають, навіщо: щоб знати, що їжа безпечна.", // nieuw, nalezen
    'c.binlorry.a.why': "Питають, чи можна їхати ззаду: ні, і де їхати.", // nieuw, nalezen
    'c.reversing.a.why': "Просять допомогти: так, де ти стоїш, і що робити.", // nieuw, nalezen
    'c.wastesorting.a.why': "Питають, куди: бак, і чому.", // nieuw, nalezen
    'c.wastesafety.a.why': "Питають, що робити після порізу: промити й сказати.", // nieuw, nalezen
    'c.yard.a.why': "Питають, куди: контейнер, і де він.", // nieuw, nalezen
    'c.hazardous.a.why': "Питають, що всередині: ти не знаєш, тож відстав окремо.", // nieuw, nalezen
    'c.baler.a.why': "Питають, чи можна подивитися: ні, і що спершу.", // nieuw, nalezen
    'c.shovel.a.why': "Питають, чи можна пройти: лише коли водій тебе бачить.", // nieuw, nalezen
    'c.nappies.a.why': "Питають, коли: час, і де це записано.", // nieuw, nalezen
    'c.mealtime.a.why': "Питають, чи йому можна: ні, чому, і куди дивитися.", // nieuw, nalezen
    'c.naptime.a.why': "Питають, чи вона спить: так, з якого часу, і що ти перевіряєш.", // nieuw, nalezen
    'c.playtime.a.why': "Питають, чи дитині можна гратися: так, де, і що потім.", // nieuw, nalezen
    'c.pickup.a.why': "Питають, хто забирає: людина, і що вона є в списку.", // nieuw, nalezen
    'c.childsafety.a.why': "Питають, чи вона впала: так, що в неї, і кому ти дзвониш.", // nieuw, nalezen
    'c.sickchild.a.why': "Питають, як він: що ти бачиш, і що ти робиш.", // nieuw, nalezen
    'c.grouprules.a.why': "Питають, чи можна без колег: так, але спершу сказати колезі.", // nieuw, nalezen
    // Second units for Schoonmaak, Horeca, Zorg and Winkel, and the uitzendbureau (23 November 2026).
    'c.sanitary.a.why': "Питають, чи все готово: ще ні, і чому.", // nieuw, nalezen
    'c.hotelroom.a.why': "Питають, скільки лишилося: число, і коли кінець.", // nieuw, nalezen
    'c.dosing.a.why': "Кажуть налити більше: ні, більше не означає краще, і чим міряють.", // nieuw, nalezen
    'c.officenight.a.why': "Питають, чи робота наодинці: так, і буде повідомлення.", // nieuw, nalezen
    'c.knives.a.why': "Просять нарізати: так, шефе, і запитання, як саме.", // nieuw, nalezen
    'c.rawcooked.a.why': "Питають, чи без глютену: точно невідомо, тому перевіряють список.", // nieuw, nalezen
    'c.pass.a.why': "Питають, де їжа: на роздачі, і її вже несуть.", // nieuw, nalezen
    'c.bill.a.why': "Просять заплатити окремо: так, і термінал уже несуть.", // nieuw, nalezen
    'c.washing.a.why': "Клієнт каже ні: це нормально, і пропозиція чогось іншого.", // nieuw, nalezen
    'c.observing.a.why': "Питають, чи є щось особливе: так, і що саме.", // nieuw, nalezen
    'c.homecare.a.why': "Питають, хто там: привітання, хто прийшов, і чи можна зайти.", // nieuw, nalezen
    'c.liftaids.a.why': "Питають, чи можна без допомоги: так, з ковзним простирадлом, і його вже несуть.", // nieuw, nalezen
    'c.returns.a.why': "Хочуть повернути товар: можна, і запитання про чек.", // nieuw, nalezen
    'c.facing.a.why': "Питають, чи все готово: майже, і що ще лишилося.", // nieuw, nalezen
    'c.shrink.a.why': "Просять заглянути в сумку: так, і показують чек.", // nieuw, nalezen
    'c.shopclose.a.why': "Просять зайти: вибачте, зачинено, і коли знову відчиняться.", // nieuw, nalezen
    'c.hirer.a.why': "Пропонують почати на новому місці: так, і запитання про час.", // nieuw, nalezen
    'c.phases.a.why': "Кажуть, що робота закінчується: гаразд, і прохання про іншу роботу.", // nieuw, nalezen
    'c.deductions.a.why': "Кажуть про утримання: запитання, чи це дозволено, і перевірка.", // nieuw, nalezen
    'c.agencyhome.a.why': "Кажуть скоро виїхати: це мало часу, і спершу порада.", // nieuw, nalezen
    // The basis units at four lessons (23 November 2026).
    'c.roster.a.why': "Графік змінився: добре, і питання, який день.", // nieuw, nalezen
    'c.breaks.a.why': "Питають про обідню перерву: час і скільки вона триває.", // nieuw, nalezen
    'c.wound.a.why': "Колега ось-ось знепритомніє: хай полежить, а ти кличеш допомогу.", // nieuw, nalezen
    'c.callhelp.a.why': "Питають, чи він реагує: ні, не реагує.", // nieuw, nalezen
    'c.vacancy.a.why': "Питають, чому ти дзвониш: вакансія і чи вона ще відкрита.", // nieuw, nalezen
    'c.result.a.why': "Відмова: спокійна відповідь і питання чому.", // nieuw, nalezen
    'c.residence.a.why': "Дозвіл майже закінчився: ти одразу подаєш заяву на новий.", // nieuw, nalezen
    'c.newhome.a.why': "Питають, де ти живеш: нове житло і нова адреса.", // nieuw, nalezen
    'c.payparts.a.why': "Питають табельний номер: де він у розрахунковому листі.", // nieuw, nalezen
    'c.latepay.a.why': "Гроші прийдуть пізніше: ти хочеш це письмово.", // nieuw, nalezen
    'c.holiday.a.why': "Пропонують відпустку в травні: ти хочеш у липні й кажеш чому.", // nieuw, nalezen
    'c.special.a.why': "Питають про відпустку у зв’язку з народженням дитини: так, і коли.", // nieuw, nalezen
    'c.unwell.a.why': "Питають, чи все гаразд: ні, і чи можна піти додому.", // nieuw, nalezen
    'c.injury.a.why': "Просять написати пояснення: так, і копію для тебе.", // nieuw, nalezen
    'c.debt.a.why': "Кажуть залишатися, поки борг не сплачено: так не можна, шукай допомоги.", // nieuw, nalezen
    'c.inspection.a.why': "Пропонують поговорити: так, але там, де начальник не чує.", // nieuw, nalezen
    'c.carpool.a.why': "Питають, хто за кермом: ти, і коли ти їх забираєш.", // nieuw, nalezen
    'c.train.a.why': "Питають, чому ти пізно: потяг, і повідомлення вже надіслане.", // nieuw, nalezen
    'c.checklist.a.why': "Питають, чи нічого не забуто: ще один погляд у список.", // nieuw, nalezen
    'c.leavesite.a.why': "Питають, чи ти йдеш після всіх: так, усе вимкнено й двері замкнені.", // nieuw, nalezen
    'c.stagedays.a.why': "Питають, чому тебе не було: хвороба, і дзвінок і школі, і фірмі.", // nieuw, nalezen
    'c.stageend.a.why': "Питають про плани: спершу диплом, потім робота.", // nieuw, nalezen
    'c.neighbours.a.why': "Нова сусідка вітається: приємно познайомитися, і твоє ім’я.", // nieuw, nalezen
    'c.join.a.why': "Запрошують прийти: так, і ти хочеш поговорити з учителем.", // nieuw, nalezen
    'c.workphotos.a.why': "Просять фото для інтернету: ввічливе «ні».", // nieuw, nalezen
    'c.device.a.why': "Питають про новий застосунок: спершу запитай IT-відділ.", // nieuw, nalezen
    // "Veiligheid op het werk" and the VOG (23 November 2026).
    'c.safetysigns.a.why': "Питають, що означає знак: обережно, і який це знак.", // nieuw, nalezen
    'c.substances.a.why': "Питають, чи це отруйне: ти не вгадуєш, а перевіряєш.", // nieuw, nalezen
    'c.firefight.a.why': "Кажуть про пожежу: вона невелика, тож ти береш вогнегасник.", // nieuw, nalezen
    'c.permitwork.a.why': "Питають, хто залишається зовні: ти, і твоє завдання.", // nieuw, nalezen
    'c.vog.a.why': "Питають про твій VOG: ще ні, і на що ти чекаєш.", // nieuw, nalezen
    // "Operator in de procesindustrie" (23 November 2026).
    'c.plantround.a.why': "Питають про тривогу: що занадто високе і де.", // nieuw, nalezen
    'c.plantfault.a.why': "Питають, чи можна запускати: ні, ще висить замок.", // nieuw, nalezen
    'c.shiftwork.a.why': "Питають, що сталося: несправність, і де це записано.", // nieuw, nalezen
    'c.heatdust.a.why': "Питають про телефон: ні, через небезпеку тут.", // nieuw, nalezen
  },
};

export default t;
