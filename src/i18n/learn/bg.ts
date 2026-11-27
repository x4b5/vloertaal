import type { CultureTranslation } from '../culture/types';

/** Learning mechanics (G4 r1): speaking without a microphone, picture choice, build feedback, and why a chat reply fits (src/content/chatWhy.ts). */
const t: CultureTranslation = {
  ui: {
    sayAloud: "Не е нужен микрофон. Кажи го на глас, после продължи.",
    micRetry: "Опитай микрофона отново",
    micFailed: "Микрофонът не проработи. Кажи го на глас, после продължи.",
    micRefused: "Приложението не може да използва микрофона ти. Можеш да го включиш.", // nieuw, nalezen
    micTurnOn: "Включи микрофона", // nieuw, nalezen
    micStepsIos: "Докосни „•••“ или „aA“ в адресната лента › Настройки на уебсайт › Микрофон › Разрешаване. Или: Настройки › Приложения › Safari › Микрофон. После докосни бутона отдолу.", // nieuw, nalezen
    micStepsIosOther: "Докосни иконата вляво от уеб адреса › Разрешения › Микрофон › Разрешаване. Или: Настройки › Приложения › {app} › Микрофон. После докосни бутона отдолу.", // nieuw, nalezen
    micStepsAndroid: "Докосни иконата вляво от уеб адреса › Разрешения › Микрофон › Разрешаване. После докосни бутона отдолу.", // nieuw, nalezen
    micStepsAndroidApp: "Задръж иконата на Vloertaal на началния екран › Информация за приложението › Разрешения › Микрофон › Разрешаване. После докосни бутона отдолу.", // nieuw, nalezen
    micStepsDesktop: "Кликни иконата вляво от уеб адреса › Микрофон › Разрешаване. После кликни бутона отдолу.", // nieuw, nalezen
    whichPicture: "Коя е правилната картинка?",
    sayAloudInstead: "Вместо това го кажи на глас",
    wordsPractised: "Упражнени думи",
    reviewComplete: "Преговорът приключи!",
  },
  gloss: {
    'c.hello.a.why': "На сбогуване се отговаря със сбогуване.",
    'c.people.a.why': "Въпросът е за име. Този отговор го казва.",
    'c.arrive.a.why': "Въпросът е защо някой е дошъл. Този отговор казва: нов е и започва днес.",
    'c.understand.a.why': "Нещо не е ясно? Нормално е да се помоли за повторение.",
    'c.translate.a.why': "Бележката още не е ясна, затова първо се превежда.",
    'c.understood.a.why': "Като повториш задачата, проверяваш дали редът на действията е ясен.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.keeplearning.a.why': "Може да се помоли да се говори на нидерландски: упражнението помага.",
    'c.gear.a.why': "Въпросът е за каската: да, на главата е.",
    'c.danger.a.why': "При злополука първо се звъни на 112.",
    'c.alarm.a.why': "Питат дали всички са навън: отговорът казва кой още липсва.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.accident.a.why': "Пита се какво се е случило: отговорът казва какво е станало и как е той.",
    'c.notyet.a.why': "На „просто опитай“ безопасният отговор е да помолиш първо да ти покажат.",
    'c.things.a.why': "Въпросът е „къде“. Този отговор казва място.",
    'c.directions.a.why': "Наляво или надясно? Този отговор избира едното и казва къде.",
    'c.shift.a.why': "Кога започва смяната? Този отговор казва деня и часа.",
    'c.sick.a.why': "Болест означава да се остане вкъщи и да се съобщи.",
    'd.speakup.a.why': "На въпроса дали има нещо, честното „да“ е добре.",
    'd.agree.a.why': "Може да се откаже. Предложение за друг ден помага.",
    'd.task.a.why': "На въпроса дали е готово: отговорът казва „почти“ и колко още.",
    'd.clear.a.why': "На въпроса дали е ясно: първо „да“, после единственият въпрос.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.cv.a.why': "Препоръката е от бивш шеф, който може да разкаже за работата.",
    'c.interview.a.why': "На интервю за работа значение има трудовият опит.",
    'c.findwork.a.why': "Въпросът е каква работа. Този отговор я назовава.",
    'c.contract.a.why': "„Да“ плюс въпрос за часа е ясно и показва желание.",
    'c.agency.a.why': "Питат за часовете: „да“, а също кога и как.",
    'c.bsn.a.why': "Работодателят може да поиска да види документ за самоличност, напр. паспорт.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.housing.a.why': "Удръжките от заплатата трябва да са договорени писмено.",
    'c.payslip.a.why': "Липсващите часове във фиша за заплата трябва да се съобщят.",
    'c.extra.a.why': "Извънредните часове се записват, за да могат да се проверят във фиша за заплата.",
    'c.phone.a.why': "Без телефон до машините: съобщенията чакат почивката.",
    'c.smoking.a.why': "Почивките са в определени часове, не по-рано.",
    'c.clock.a.why': "Чекирането за някой друг не е позволено.",
    'c.hygiene.a.why': "Мрежичка за коса – да, бижута – не: правила за хигиена на храната.",
    'c.smalltalk.a.why': "Въпросът е за уикенда: едно нещо е достатъчно.",
    'c.mistakes.a.why': "На комплимент се отговаря с благодарност.",
    'c.respect.a.why': "За тормоза трябва да се каже, за да може някой да помогне.",
    'c.gossip.a.why': "Неучастието в клюки пази доверието в екипа.",
    'c.boundaries.a.why': "Можеш ясно да спреш шега, която наранява.",
    'c.health.a.why': "Почивката пази здравето, затова се взема.",
    'c.rights.a.why': "Уволнение никога не се подписва веднага. Първо се търси съвет.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.mustmay.a.why': "Доброволно значи, че можеш да избираш: не е нужно да работиш в събота.",
    'c.leave.a.why': "Кога? Този отговор дава месец и колко дълго.",
    'c.illness.a.why': "Медицинските подробности са за лекаря на фирмата, не за шефа.",
    'c.warning.a.why': "Работодателят може да копира паспорта, но не и да го задържи.",
    'c.gethelp.a.why': "Когато се каже ясно какво не е наред, те могат да помогнат.",
    'c.callin.a.why': "Кога е връщането? Този отговор дава ден.",
    'c.texting.a.why': "Бързият отговор в приложението помага при планирането.",
    'c.certs.a.why': "Честно „не“ плюс желание за учене: добър отговор.",
    'c.diploma.a.why': "„Да“ за обучение и въпросът кой плаща са нормални.",
    'c.doctor.a.why': "Дежурният лекар трябва да знае кой е болен и какво му е.",
    'c.insurance.a.why': "Името на застрахователя е на здравноосигурителната карта.",
    'c.letters.a.why': "Данъчната декларация се подава до 1 май.",
    'c.scams.a.why': "Банката никога не пита за ПИН. Затварянето на телефона е правилно.",
    'c.bike.a.why': "Как? Този отговор казва с какво и колко време.",
    'c.transit.a.why': "Не влакът: този отговор назовава автобуса.",
    'c.ww.a.why': "Обезщетение за безработица (WW) се иска веднага.",
    'c.newjob.a.why': "Телефонният номер им позволява да се обадят.",
    'c.tools.a.why': "Къде? Този отговор дава мястото: в буса.",
    'c.site.a.why': "На покрив обезопасяването срещу падане винаги е на първо място.",
    'c.line.a.why': "Как върви? Този отговор казва как върви и назовава проблема.",
    'c.quality.a.why': "Защо е оставено настрана? Този отговор назовава дефекта.",
    'c.client.a.why': "Клиент моли за помощ: учтиво „да“, с „u“.",
    'c.privacy.a.why': "Лекарствата са за обучен персонал: дава ги медицинската сестра.",
    'c.kitchen.a.why': "Алергията е сериозна: главният готвач трябва да знае.",
    'c.service.a.why': "Поискаха сметката: кратко „да“ и идваш веднага.",
    'c.cleaning.a.why': "Готово ли е? Този отговор казва „почти“ и колко остават.",
    'c.cleansafe.a.why': "Мокрият под е хлъзгав: предупреждението помага.",
    'c.shelves.a.why': "Въпросът е „къде“. Отговорът казва пътеката и предлага помощ.",
    'c.checkout.a.why': "Питат дали може с карта: кратко и любезно „да“.",
    'c.counting.a.why': "Питат колко: отговорът дава числото и го проверява цифра по цифра.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.hours.a.why': "Въпросът е за часа. Отговорът казва час.",
    'c.measures.a.why': "Въпросът е за дължината. Отговорът казва дължина.",
    'c.aihelp.a.why': "Питат кой го е написал: честно „да“, което казва кой е помогнал.",
    'c.aiprivate.a.why': "Молят те да сложиш имена в чатбот: този отговор казва „не“ и защо.",
    'c.aifake.a.why': "Нов номер иска пари: този отговор първо проверява.",
    'c.aiplan.a.why': "Графикът е от приложение: този отговор иска човек.",
    // In de kas (u.kas, 30 okt 2026): nagelezen (2e lezing).
    'c.harvest.a.why': "Питат колко реда: този отговор дава число и колко остават.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.a.why': "Току-що напръскана: този отговор казва „още не“ и защо.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    // nagelezen (2e lezing): why the chat replies of the new lessons fit (30 October 2026).
    'c.details.a.why': "Питат за фамилията: този отговор я казва и предлага да я каже буква по буква.", // nagelezen AI 22 nov
    'c.dates.a.why': "Питат за датата: този отговор дава деня и датата.", // nagelezen AI 22 nov
    'c.permit.a.why': "Отказът е наред, когато има причина. Да предложиш друг ден помага.", // nagelezen AI 22 nov
    'c.kids.a.why': "Питат защо: този отговор дава причината — обадиха се от детската градина.", // nagelezen AI 22 nov
    'c.body.a.why': "Питат къде боли: този отговор казва мястото и причината.", // nagelezen AI 22 nov
    'c.jobends.a.why': "Жилището е свързано с работата: този отговор пита за срока на предизвестие.", // nagelezen AI 22 nov
    // Entree in the Taal track (30 October 2026), why the chat replies fit: nieuw, nalezen.
    'c.workorder.a.why': "Неясна дума: да попиташ преди началото е правилният отговор.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handover.a.why': "Въпрос дали всичко е готово: този отговор казва какво не е готово и защо.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.a.why': "Въпрос „защо“: този отговор дава причината, очите трябва да се пазят.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.a.why': "Работа по лампа: този отговор първо пита дали токът е спрян.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.garage.a.why': "Молба да се сменят гумите: „да“ и въпрос къде са.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carjob.a.why': "Допълнителна работа: клиентът трябва първо да се съгласи, затова този отговор пита шефа.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.a.why': "Въпрос „кога“: този отговор дава деня, а договорът е първо.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.a.why': "Обратната връзка още не е ясна: да помолиш да ти покажат е добър отговор.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.council.a.why': "Въпрос за гласуването: „да“ и двете неща, които трябва да се вземат.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.a.why': "Полицията иска документ: показваш го и питаш какво става.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.a.why': "Въпрос дали влизането става: този отговор казва „не“ и защо.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.a.why': "Въпрос за линка: честно „да“ и обаждане на IT отдела.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.a.why': "Въпрос за силните страни: този отговор назовава една, с пример.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.a.why': "Въпрос за плана: този отговор назовава bbl и какво значи.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.a.why': "Въпрос дали е изпратен: още не, първо се проверява.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.a.why': "Предлагат „купи сега, плати после“: учтиво „не“, с причина.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.a.why': "Предлагат хапче: учтиво „не“, с причина.", // nieuw, nalezen // nagelezen AI 22 nov
    // Vertaalronde 5 november 2026.
    'd.newcolleague.a.why': "„Мисля“ още не е сигурно: като помолиш да ти покаже, проверяваш дали става.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.a.why': "Питат защо се чисти линията: следващият продукт е без ядки.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.a.why': "Питат дали пратката е за тях: да, и после подписът.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.a.why': "Искат още един курс: не, защото почивката е първо.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.a.why': "Питат колко широко: число с мерната единица, и го записваш.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.a.why': "Питат къде да отиде дървото: място, и къде е то.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.a.why': "Питат какво е станало: да, и какво, и колко време.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.a.why': "Питат как е той: какво виждаш, и че е ново.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.a.why': "Молят те да вдигнеш човек: не без помощ, първо идва подемникът.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.a.why': "Питат за чисти чаши: да, и кога идват.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.a.why': "Задача от главния готвач: повтаряш я, за да знае, че я чу.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.a.why': "Питат дали офисът е готов: не, с причината.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.a.why': "Питат за кърпа: не, защото червената е за тоалетната.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.a.why': "Питат за мляко: не просто „не“, а поглеждаш в склада.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.a.why': "Ядосан клиент: спокойни думи, и идва колега.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.a.why': "Питат кои да берат: цветът показва кое е узряло.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.a.why': "Идва буря: да спреш и да влезеш вътре е безопасният избор.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.a.why': "Питат дали пасва: не, и мериш пак, преди да насилваш.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.a.why': "Питат дали може да го вземат: още не, горещият метал първо трябва да изстине.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.a.why': "Питат какво чуваш: коя част и какво прави.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.a.why': "Питат дали може да започнат работа: още не, защото колата е електрическа.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.a.why': "Питат как си: кратко „да“ и че не бързаш.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.a.why': "Питат как си: честното „не съвсем“ е наред.", // nieuw, nalezen // nagelezen AI 22 nov
    // Goed communiceren en Feedback en overleg (5 november 2026).
    'd.explain.a.why': "На въпроса какво не е наред: този отговор казва какво и от какво има нужда.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.listen.a.why': "Не е ясно дали е шега: по-добре питаш, отколкото да гадаеш.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.calm.a.why': "На въпроса защо не е готово: спокойна причина и кое е първо.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.talkintime.a.why': "Някой моли за минутка: едно „да“ и въпрос, за да може да разкаже.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.reachable.a.why': "Връщаш пропуснато обаждане: поздрав и защо се обаждаш.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.getfeedback.a.why': "Предлагат ти обратна връзка: едно „да“ и че искаш да го правиш добре.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.givefeedback.a.why': "На въпроса за работата: първо какво е добре, после какво може да е по-добре.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.meeting.a.why': "Питат за въпроси: този отговор задава един, за графика.", // nieuw, nalezen // nagelezen AI 22 nov
    // Logistiek at four lessons per unit (14 November 2026).
    'c.picking.a.why': "Питат коя е локацията: пътеката и клетката.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.loading.a.why': "Питат дали палетът е готов: не, и какво още му трябва.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.a.why': "Питат дали всичко е наред с буса: не, и какво е счупено.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.a.why': "Питат къде си: мястото и с колко ще закъснееш.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Hulp vragen" at four lessons (14 November 2026).
    'c.howto.a.why': "На въпроса дали знаеш как: не, още не, казано честно.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mayask.a.why': "На въпроса дали имаш въпрос: да, а първо дали има време.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.whereis.a.why': "На въпроса дали можеш да го намериш: не, и молба да го посочат.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Instructies", a new basis unit (u.do, 14 November 2026).
    'c.putdown.a.why': "Молят да се подържи нещо: „да“ и въпрос къде да се сложи.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.a.why': "Питат дали вратата е затворена: „не“, и я затварят сега.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.a.why': "Питат дали вече е пълен: „да“, и го изпразват.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.a.why': "Молят да се направи сега: „да“ и въпрос какво следва.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Tegels, stuc en verf", a new sector unit of Bouw (u.afbouw, 20 November 2026).
    'c.tiletools.a.why': "Питат къде е миксерът: място, и какво има близо до него.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.a.why': "Питат откъде да се започне: от средата, на централната линия.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.a.why': "Питат дали стената е суха: „не“, и колко да се чака.", // nieuw, nalezen // nagelezen AI 22 nov
    // l.paint, l.prep, "Metselen, hout en vastmaken", three lessons of Rekenen and "Machines en gereedschap" (20-21 November 2026).
    'c.shapes.a.why': "Питат дали е квадрат: „не“, правоъгълник, и защо.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.a.why': "Питат колко градуса: числото, и на какво е половината.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.a.why': "Питат колко голям е подът: сметката, и отговорът.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.a.why': "Питат коя четка: широката за стената, малката за ъглите.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.a.why': "Питат дали може да се боядисва: „не“, и какво е първо.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.a.why': "Питат колко тухли са останали: един палет, и че стига.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.a.why': "Питат колко висока трябва да е редицата: къде може да се види.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.a.why': "Питат кой трион: гърбовият трион, и защо.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.a.why': "Питат дали ъгълът е прав: „да“, и откъде се знае.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.a.why': "Питат къде е винтовертът: място, и че е почти зареден.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.a.why': "Питат как да се закрепи рафтът: с какво, и с колко.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.a.why': "Питат защо спира: сензорът, и какво не вижда.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.a.why': "Питат колко често: веднъж на час, и къде да се запише.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.a.why': "Питат колко в един кашон: числото, и къде пише.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.a.why': "Питат кога: денят от седмицата, и моментът в този ден.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Elektra, leidingen en metaal" (u.install, 21 November 2026).
    'c.wiring.a.why': "Питат коя жица къде отива: еднакъв цвят с еднакъв цвят.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.a.why': "Питат дали може да се отвори: не, и кой го прави.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.a.why': "Питат дали още тече: малко, и какво ще се направи.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.a.why': "Питат защо е остър: още има чапак.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Assemblage en montage" (u.montage, 21 November 2026).
    'c.assembly.a.why': "Питат коя стъпка: номерът и къде да се погледне.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.a.why': "Питат колко здраво: докато ключът щракне.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.a.why': "Питат дали може да се стои там: не, никога, и защо.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.a.why': "Питат дали е добър: не, и какво му е.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Kweken, sorteren en de kas" (u.kweek) and "Banden, olie en remmen" (u.carservice), 22 November 2026.
    'c.sowing.a.why': "Питат колко дълбоко: дълбочината, и не по-дълбоко.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.a.why': "Питат дали е узрял: не, твърде зелен е, и какво да се прави.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.a.why': "Питат защо е топло: завесата и прозорците са затворени.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.a.why': "Питат дали може да се убие: не, и защо помага.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.a.why': "Питат дали трябва да се свалят: да, и защо.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.a.why': "Питат колко: литрите и как да се провери.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.a.why': "Питат дали трябва да е нов: да, и защо.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.a.why': "Питат какво трябва да се направи: да се погледне работната поръчка.", // nieuw, nalezen // nagelezen AI 22 nov
    // The new sectors Groen, Facilitair, Beveiliging, Voedingsindustrie, Afval en recycling and Kinderopvang (23 November 2026).
    'c.mowing.a.why': "Питат дали може да се вземе: да, и какво да се направи първо.", // nieuw, nalezen
    'c.pruning.a.why': "Питат кои клони: само сухите.", // nieuw, nalezen
    'c.hedge.a.why': "Питат колко висок: до въжето, не по-ниско.", // nieuw, nalezen
    'c.chainsaw.a.why': "Питат дали може: още не, и какво идва първо.", // nieuw, nalezen
    'c.weeding.a.why': "Питат дали е плевел: не, и какво да се прави с него.", // nieuw, nalezen
    'c.planting.a.why': "Питат къде отива: мястото в лехата.", // nieuw, nalezen
    'c.roadside.a.why': "Питат дали може да се пресече: не, чакай, и защо.", // nieuw, nalezen
    'c.litter.a.why': "Живущ пита кога: не знаеш, и кой знае.", // nieuw, nalezen
    'c.reception.a.why': "Посетител има среща: един момент, ти се обаждаш.", // nieuw, nalezen
    'c.visitors.a.why': "Питат къде отива палтото: мястото, и къде е то.", // nieuw, nalezen
    'c.mailroom.a.why': "Питат за кого е: отделът, и етажът.", // nieuw, nalezen
    'c.meetingroom.a.why': "Питат в колко часа: часът, и какво трябва да се направи.", // nieuw, nalezen
    'c.faults.a.why': "Питат защо е студено: какво е развалено, и кога идва помощ.", // nieuw, nalezen
    'c.repairs.a.why': "Питат дали пиука: да, и защо.", // nieuw, nalezen
    'c.moving.a.why': "Питат къде отива: стаята, и къде да се погледне.", // nieuw, nalezen
    'c.closing.a.why': "Питат дали има някой вътре: не, и какво правиш сега.", // nieuw, nalezen
    'c.patrol.a.why': "Питат дали е видяно нещо: да, какво, и къде.", // nieuw, nalezen
    'c.access.a.why': "Искат да влязат без карта: съжаляваме, не и без карта.", // nieuw, nalezen
    'c.cameras.a.why': "Питат какво виждаш: кой, къде, и какво правиш.", // nieuw, nalezen
    'c.report.a.why': "Питат какво пише в доклада: какво, къде и кога.", // nieuw, nalezen
    'c.evacuation.a.why': "Питат дали всички са навън: не, колко липсват.", // nieuw, nalezen
    'c.firstaid.a.why': "Питат къде е дефибрилаторът: мястото, и какво има до него.", // nieuw, nalezen
    'c.shoplifting.a.why': "Питат дали може да се претърси чанта: не, и кой го прави.", // nieuw, nalezen
    'c.aggression.a.why': "Питат защо не: причината, казана спокойно.", // nieuw, nalezen
    'c.hygienelock.a.why': "Питат за часовник: не, и правилото зад това.", // nieuw, nalezen
    'c.allergens.a.why': "Питат дали може да е заедно: не, и защо.", // nieuw, nalezen
    'c.coldroom.a.why': "Питат защо пиука: причината, и какво да се направи.", // nieuw, nalezen
    'c.foreignbody.a.why': "Питат какво да се прави: на кого да се покаже.", // nieuw, nalezen
    'c.cutting.a.why': "Питат колко: теглото, и къде да се погледне.", // nieuw, nalezen
    'c.labels.a.why': "Питат каква дата: кога, и къде да се погледне.", // nieuw, nalezen
    'c.linecleaning.a.why': "Питат дали е чисто: още не, и какво остава.", // nieuw, nalezen
    'c.haccp.a.why': "Питат защо: за да знаем, че храната е безопасна.", // nieuw, nalezen
    'c.binlorry.a.why': "Питат дали може да се вози отзад: не, и къде да се вози.", // nieuw, nalezen
    'c.reversing.a.why': "Молят за помощ: да, къде стоиш, и какво да се прави.", // nieuw, nalezen
    'c.wastesorting.a.why': "Питат къде отива: кофата, и защо.", // nieuw, nalezen
    'c.wastesafety.a.why': "Питат какво да се прави след порязване: да се измие, и да се каже.", // nieuw, nalezen
    'c.yard.a.why': "Питат къде отива: контейнерът, и къде е той.", // nieuw, nalezen
    'c.hazardous.a.why': "Питат какво има вътре: не знаеш, затова се оставя настрана.", // nieuw, nalezen
    'c.baler.a.why': "Питат дали може да се погледне: не, и какво идва първо.", // nieuw, nalezen
    'c.shovel.a.why': "Питат дали може да се мине: само когато шофьорът те вижда.", // nieuw, nalezen
    'c.nappies.a.why': "Питат кога: часът, и къде е записан.", // nieuw, nalezen
    'c.mealtime.a.why': "Питат дали той може да получи: не, защо, и къде да се погледне.", // nieuw, nalezen
    'c.naptime.a.why': "Питат дали спи: да, от кога, и че ще провериш.", // nieuw, nalezen
    'c.playtime.a.why': "Дете пита дали може да играе: да, къде, и какво после.", // nieuw, nalezen
    'c.pickup.a.why': "Питат кой ще вземе детето: човекът, и че тя е в списъка.", // nieuw, nalezen
    'c.childsafety.a.why': "Питат дали е паднала: да, какво има, и на кого се обаждаш.", // nieuw, nalezen
    'c.sickchild.a.why': "Питат как е той: какво виждаш, и какво правиш.", // nieuw, nalezen
    'c.grouprules.a.why': "Питат дали може да се излезе с групата без колега: да, но първо се казва на колега.", // nieuw, nalezen
    // Second units for Schoonmaak, Horeca, Zorg and Winkel, and the uitzendbureau (23 November 2026).
    'c.sanitary.a.why': "Питат дали е готово: още не, и защо.", // nieuw, nalezen
    'c.hotelroom.a.why': "Питат колко остават: броят, и кога свършваш.", // nieuw, nalezen
    'c.dosing.a.why': "Казват да се сложи повече: не, повече не е по-добре, и с какво се мери.", // nieuw, nalezen
    'c.officenight.a.why': "Питат дали се работи без друг човек в сградата: да, и ще има съобщение.", // nieuw, nalezen
    'c.knives.a.why': "Молят да се нареже: да, шефе, и въпрос как.", // nieuw, nalezen
    'c.rawcooked.a.why': "Питат дали е без глутен: не е сигурно, затова се проверява списъкът.", // nieuw, nalezen
    'c.pass.a.why': "Питат къде е храната: на паса, и вече се носи.", // nieuw, nalezen
    'c.bill.a.why': "Молят да платят поотделно: да, и терминалът идва.", // nieuw, nalezen
    'c.washing.a.why': "Клиентът казва не: това е добре, и се предлага нещо друго.", // nieuw, nalezen
    'c.observing.a.why': "Питат има ли нещо особено: да, и какво точно.", // nieuw, nalezen
    'c.homecare.a.why': "Питат кой е: поздрав, кой идва, и може ли да се влезе.", // nieuw, nalezen
    'c.liftaids.a.why': "Питат дали става без помощ: да, с плъзгащия чаршаф, и той се донася.", // nieuw, nalezen
    'c.returns.a.why': "Искат да върнат стока: може, и въпрос за касовата бележка.", // nieuw, nalezen
    'c.facing.a.why': "Питат дали е готово: почти, и какво още остава.", // nieuw, nalezen
    'c.shrink.a.why': "Искат да погледнат в чантата: да, и се показва касовата бележка.", // nieuw, nalezen
    'c.shopclose.a.why': "Искат да влязат: съжалявам, затворено, и кога се отваря пак.", // nieuw, nalezen
    'c.hirer.a.why': "Питат за начало на ново място: да, и въпрос за часа.", // nieuw, nalezen
    'c.phases.a.why': "Казват, че работата спира: добре, и молба за друга работа.", // nieuw, nalezen
    'c.deductions.a.why': "Казват за удръжка: въпрос дали е разрешено, и проверка.", // nieuw, nalezen
    'c.agencyhome.a.why': "Казват да се напусне скоро: това е кратко, и първо съвет.", // nieuw, nalezen
    // The basis units at four lessons (23 November 2026).
    'c.roster.a.why': "Графикът се промени: добре, и въпрос кой ден.", // nieuw, nalezen
    'c.breaks.a.why': "Питат за обедната почивка: часът и колко трае.", // nieuw, nalezen
    'c.wound.a.why': "Някой ще припадне: нека полежи, а ти отиваш за помощ.", // nieuw, nalezen
    'c.callhelp.a.why': "Питат дали реагира: не, не реагира.", // nieuw, nalezen
    'c.vacancy.a.why': "Питат защо се обаждаш: обявата и дали мястото е още свободно.", // nieuw, nalezen
    'c.result.a.why': "Отказ: спокоен отговор и въпрос защо.", // nieuw, nalezen
    'c.residence.a.why': "Разрешението почти изтече: веднага подаваш за ново.", // nieuw, nalezen
    'c.newhome.a.why': "Питат къде живееш: ново жилище и новият адрес.", // nieuw, nalezen
    'c.payparts.a.why': "Питат за служебния номер: къде е във фиша за заплата.", // nieuw, nalezen
    'c.latepay.a.why': "Парите ще дойдат по-късно: искаш това писмено.", // nieuw, nalezen
    'c.holiday.a.why': "Питат дали можеш в отпуск през май: предпочиташ юли и казваш защо.", // nieuw, nalezen
    'c.special.a.why': "Питат за отпуска при раждане: да, и кога.", // nieuw, nalezen
    'c.unwell.a.why': "Питат дали си добре: не, и може ли да си отидеш вкъщи.", // nieuw, nalezen
    'c.injury.a.why': "Искат обяснение: да, и копие за теб.", // nieuw, nalezen
    'c.debt.a.why': "Казват ти да останеш, докато дългът се изплати: не е позволено, търсиш помощ.", // nieuw, nalezen
    'c.inspection.a.why': "Канят те да говориш: да, но не там, където шефът чува.", // nieuw, nalezen
    'c.carpool.a.why': "Питат кой кара: ти, и кога ще ги вземеш.", // nieuw, nalezen
    'c.train.a.why': "Питат защо закъсня: влакът, и съобщението вече е изпратено.", // nieuw, nalezen
    'c.checklist.a.why': "Питат дали нищо не е забравено: още един поглед в списъка.", // nieuw, nalezen
    'c.leavesite.a.why': "Питат дали си тръгваш след всички: да, всичко е изключено и вратата е заключена.", // nieuw, nalezen
    'c.stagedays.a.why': "Питат защо отсъства: болест, и обаждане и до училището, и до фирмата.", // nieuw, nalezen
    'c.stageend.a.why': "Питат за плановете ти: първо дипломата, после работа.", // nieuw, nalezen
    'c.neighbours.a.why': "Нова съседка поздравява: приятно ти е, и казваш името си.", // nieuw, nalezen
    'c.join.a.why': "Канят те: да, и искаш да говориш с учителя.", // nieuw, nalezen
    'c.workphotos.a.why': "Искат снимка за интернет: учтиво „не“.", // nieuw, nalezen
    'c.device.a.why': "Питат за ново приложение: първо питай IT отдела.", // nieuw, nalezen
    // "Veiligheid op het werk" and the VOG (23 November 2026).
    'c.safetysigns.a.why': "Питат какво означава знак: внимание, и какъв е знакът.", // nieuw, nalezen
    'c.substances.a.why': "Питат дали е отровно: не гадаеш, а проверяваш.", // nieuw, nalezen
    'c.firefight.a.why': "Казват, че има пожар: малък е, затова вземаш пожарогасителя.", // nieuw, nalezen
    'c.permitwork.a.why': "Питат кой остава отвън: ти, и задачата ти.", // nieuw, nalezen
    'c.vog.a.why': "Питат за VOG: още не, и какво чакаш.", // nieuw, nalezen
    // "Operator in de procesindustrie" (23 November 2026).
    'c.plantround.a.why': "Питат за алармата: какво е твърде високо и къде.", // nieuw, nalezen
    'c.plantfault.a.why': "Питат дали може да пуснеш: не, още има катинар.", // nieuw, nalezen
    'c.shiftwork.a.why': "Питат какво е станало: повредата и къде е записана.", // nieuw, nalezen
    'c.heatdust.a.why': "Питат за телефона: не, заради опасността тук.", // nieuw, nalezen
    // eight new lessons (26 November 2026).
    'c.debthelp.a.why': "Казват, че сметката не е платена: да, и молба за разсрочено плащане.", // nieuw, nalezen
    'c.taxes.a.why': "Казват, че има син плик: благодарност и веднага отваряне.", // nieuw, nalezen
    'c.discrimination.a.why': "Питат дали си добре: не, и ще има сигнал за това.", // nieuw, nalezen
    'c.union.a.why': "Питат защо членуваш: застъпват се за теб.", // nieuw, nalezen
    'c.kiln.a.why': "Питат за събиране на парчета с ръка: не, с метличка и лопатка.", // nieuw, nalezen
    'c.mixlab.a.why': "Питат дали партидата е одобрена: още не, лабораторията я изпитва.", // nieuw, nalezen
    'c.firstweeks.a.why': "Питат за обиколката: почти всичко и един въпрос.", // nieuw, nalezen
    'c.orderpick.a.why': "Молят да караш ричтрака: не, няма обучение.", // nieuw, nalezen
  },
};

export default t;
