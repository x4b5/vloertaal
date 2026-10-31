import type { CultureTranslation } from '../culture/types';

/** Sayings and expressions (src/content/sayings.ts): the unit, its tips, and the sayings in later lessons. */
const t: CultureTranslation = {
  ui: {
    sayingBadge: 'این‌طور می‌گویند',
    tagSaying: 'اصطلاح',
    literally: 'کلمه به کلمه:',
    itMeans: 'یعنی:',
  },
  gloss: {
    'u.sayings': 'ضرب‌المثل‌ها و اصطلاح‌ها',
    'l.easy': 'وقتی کار خوب پیش می‌رود',
    'w.eitje': 'خیلی آسان',
    'w.eitje.lit': 'یک تخم‌مرغ کوچک',
    'w.alseentrein': 'خیلی خوب، بدون مشکل',
    'w.alseentrein.lit': 'مثل یک قطار',
    'w.mouwen': 'با جدیت شروع به کار کردن',
    'w.mouwen.lit': 'دست‌ها بیرون از آستین‌ها',
    'w.handje': 'کمی کمک کردن',
    'w.handje.lit': 'با یک دست کوچک کمک کردن',
    'w.knie': 'یک کار را خوب بلد بودن',
    'w.knie.lit': 'آن را زیر زانو داشتن',
    'w.bakker': 'تمام شد، درست شد',
    'w.bakker.lit': 'برای نانوا',
    's.easy.1': 'آن کار کوچک خیلی آسان است.',
    's.easy.2': 'کار خیلی خوب پیش می‌رود.',
    's.easy.3': 'بیایید، دست به کار شویم.',
    'c.easy.q': 'می‌توانی یک لحظه کمک کنی؟', // nagelezen AI 31 okt
    'c.easy.a': 'بله، حتماً، الان می‌آیم.',
    'c.easy.a.why': '«Een handje helpen» یعنی کمک خواستن: جواب «بله» است و رفتن برای کمک.',
    'l.plain': 'حرف را همان‌طور که هست زدن',
    'w.aandebel': 'به دیگران هشدار دادن که مشکلی هست',
    'w.aandebel.lit': 'زنگ را کشیدن',
    'w.tandvlees': 'خیلی خسته بودن',
    'w.tandvlees.lit': 'روی لثه‌های خود راه رفتن',
    'w.deur': 'حرف را فوراً زدن، بدون مقدمهٔ طولانی',
    'w.deur.lit': 'با در توی خانه افتادن',
    'w.blad': 'صادقانه گفتن آنچه فکر می‌کنی', // nagelezen AI 31 okt
    'w.blad.lit': 'هیچ برگی جلوی دهان خود نگذاشتن',
    'w.pijpenstelen': 'باران خیلی شدید می‌بارد',
    'w.pijpenstelen.lit': 'دستهٔ پیپ می‌بارد',
    'w.hart': 'حرف‌های مهربان که دل‌گرمی می‌دهند',
    'w.hart.lit': 'یک قلب زیر کمربند',
    's.plain.1': 'وقتی ایمن نیست، بگو.', // nagelezen AI 31 okt
    's.plain.2': 'واقعاً خیلی خسته‌ام.',
    's.plain.3': 'یک‌راست می‌روم سر اصل مطلب.',
    'c.plain.q': 'باران خیلی شدید می‌بارد!',
    'c.plain.a': 'پس امروز با اتوبوس می‌روم.',
    'c.plain.a.why': 'باران خیلی شدید: در اتوبوس خیس نمی‌شوی.', // nagelezen AI 31 okt
    'c.easy': 'ضرب‌المثل‌ها: کلمه‌ها معنای دیگری دارند',
    'c.easy.b': 'اینجا مردم اغلب از ضرب‌المثل استفاده می‌کنند، سر کار هم. کلمه‌ها یک چیز می‌گویند، ولی معنای دیگری دارند. «Een eitje» یعنی یک تخم‌مرغ کوچک، ولی معنایش این است: خیلی آسان. لازم نیست خودت از ضرب‌المثل استفاده کنی. یک ضرب‌المثل را نمی‌فهمی؟ پس راحت بپرس معنایش چیست.', // nieuw, nalezen
    'c.easy.p': 'منظورت از این چیست؟', // nagelezen AI 31 okt
    'c.easy.s': 'همکارت به کار جدید نگاه می‌کند و می‌گوید: «Dat is een eitje!» منظورش چیست؟', // nagelezen AI 31 okt
    'c.easy.o1': 'این کار خیلی آسان است.',
    'c.easy.o2': 'می‌خواهد تخم‌مرغ بخورد.',
    'c.easy.o3': 'این کار خیلی سخت است.',
    'c.easy.w': '«Een eitje» یعنی: خیلی آسان. همکارت فکر می‌کند این کار زود تمام می‌شود.', // nagelezen AI 31 okt
    'c.plain': 'رک و راست گفتن',
    'c.plain.b': 'همکاران هلندی اغلب مستقیم می‌گویند چه فکر می‌کنند. گاهی با یک ضرب‌المثل شروع می‌کنند: «Ik neem geen blad voor de mond.» (هیچ برگی جلوی دهانم نمی‌گذارم). یعنی: صادقانه می‌گویم چه فکر می‌کنم. منظورشان بی‌ادبی نیست. تو هم می‌توانی آرام و صادقانه بگویی چه فکر می‌کنی.', // nagelezen AI 31 okt
    'c.plain.p': 'می‌توانم صادقانه بگویم چه فکر می‌کنم؟',
    'c.plain.s': 'سرپرستت می‌گوید: «Ik neem geen blad voor de mond.» منظورش چیست؟', // nagelezen AI 31 okt
    'c.plain.o1': 'صادقانه می‌گوید چه فکر می‌کند.',
    'c.plain.o2': 'نمی‌خواهد حرف بزند.',
    'c.plain.o3': 'دارد یک برگ می‌خورد.',
    'c.plain.w': '«Geen blad voor de mond nemen» یعنی: صادقانه و مستقیم گفتن آنچه فکر می‌کنی. خیلی از هلندی‌ها این را سر کار عادی می‌دانند.', // nagelezen AI 31 okt
    'zg.zeil.lit': 'یک چشم کوچک روی بادبان نگه می‌داری؟', // nagelezen AI 31 okt
    'zg.zeil.m': 'حواست هست که همه چیز خوب و ایمن پیش برود؟', // nagelezen AI 31 okt
    'zg.zeil.s': 'سرپرستت باید یک لحظه برود. می‌گوید: «Hou je een oogje in het zeil?» منظورش چیست؟', // nagelezen AI 31 okt
    'zg.zeil.o1': 'تا وقتی او نیست، مراقب باش.', // nagelezen (2e lezing) // nagelezen AI 31 okt
    'zg.zeil.o2': 'برو و یک قایق را نگاه کن.', // nagelezen AI 31 okt
    'zg.zeil.o3': 'یک لحظه چشم‌هایت را ببند.', // nagelezen AI 31 okt
    'zg.zeil.w': '«Een oogje in het zeil houden» یعنی: حواس‌جمع بودن که همه چیز خوب پیش برود. مطمئن نیستی باید حواست به چه باشد؟ قبل از رفتنش از او بپرس.', // nagelezen AI 31 okt
    'zg.lekker.lit': 'خودم را خوشمزه حس نمی‌کنم.',
    'zg.lekker.m': 'حالم کمی بد است، کمی مریضم.',
    'zg.lekker.s': 'یک همکار صبح به تو زنگ می‌زند: «Ik voel me niet lekker.» منظورش چیست؟', // nagelezen AI 31 okt
    'zg.lekker.o1': 'مریض است.',
    'zg.lekker.o2': 'صبحانه‌اش را دوست نداشت.',
    'zg.lekker.o3': 'خیلی خوشحال است.',
    'zg.lekker.w': '«Lekker» برای غذا هم به کار می‌رود، ولی «niet lekker» اینجا یعنی: کمی مریض. وقتی خبر می‌دهی مریض هستی، خودت هم می‌توانی این را بگویی.', // nagelezen AI 31 okt
    'zg.batterij.lit': 'می‌روم باتری‌ام را شارژ کنم.',
    'zg.batterij.m': 'می‌روم استراحت کنم تا دوباره انرژی داشته باشم.',
    'zg.batterij.s': 'همکارت قبل از روزهای مرخصی‌اش می‌گوید: «Ik ga even mijn batterij opladen.» منظورش چیست؟', // nagelezen AI 31 okt
    'zg.batterij.o1': 'می‌خواهد استراحت کند.',
    'zg.batterij.o2': 'باتری گوشی‌اش خالی است.',
    'zg.batterij.o3': 'می‌خواهد اضافه‌کاری کند.',
    'zg.batterij.w': 'در این اصطلاح آدم‌ها مثل گوشی هستند: بعد از استراحت دوباره انرژی داری. روزهای مرخصی برای همین است.', // nagelezen AI 31 okt
    'zg.pluis.lit': 'یک چیزی پُرزدار نیست.',
    'zg.pluis.m': 'یک چیزی درست نیست، یا نمی‌شود به آن اعتماد کرد.',
    'zg.pluis.s': 'دربارهٔ یک کار به یک دوست می‌گویی: قرارداد ندارد، پول را نقد می‌دهند و باید پاسپورتت را بدهی. دوستت می‌گوید: «Er is iets niet pluis.» منظورش چیست؟', // nagelezen AI 31 okt
    'zg.pluis.o1': 'یک چیزِ این کار درست نیست.',
    'zg.pluis.o2': 'این کار نرم و خوب است.',
    'zg.pluis.o3': 'باید لباس نو بخری.', // nagelezen AI 31 okt
    'zg.pluis.w': '«Niet pluis» یعنی: درست نیست، نمی‌شود به آن اعتماد کرد. نداشتن قرارداد و دادن پاسپورت، نشانه‌های هشدار هستند.',
    'zg.oefening.lit': 'تمرین، هنر را به دنیا می‌آورد.',
    'zg.oefening.m': 'اگر زیاد تمرین کنی، در آن خوب می‌شوی.', // nagelezen AI 31 okt
    'zg.oefening.s': 'دوره برایت سخت است. معلمت می‌گوید: «Oefening baart kunst.» منظورش چیست؟', // nagelezen AI 31 okt
    'zg.oefening.o1': 'به تمرین ادامه بده، آن وقت در آن خوب می‌شوی.', // nagelezen AI 31 okt
    'zg.oefening.o2': 'باید به کلاس هنر بروی.', // nagelezen AI 31 okt
    'zg.oefening.o3': 'دست نگه دار، برایت خیلی سخت است.', // nagelezen AI 31 okt
    'zg.oefening.w': 'این یک ضرب‌المثل است: با تمرین بهتر می‌شوی. برای یاد گرفتن هلندی هم درست است.', // nagelezen AI 31 okt
    'zg.zwartwit.lit': 'مطمئن شو که آن را سیاه روی سفید داری.', // nagelezen (2e lezing) // nagelezen AI 31 okt
    'zg.zwartwit.m': 'مطمئن شو که آن را روی کاغذ، به صورت نوشته داری.', // nagelezen (2e lezing) // nagelezen AI 31 okt
    'zg.zwartwit.s': 'رئیست به تو قول حقوق بیشتر می‌دهد. همکارت می‌گوید: «Zorg dat je het zwart op wit hebt.» منظورش چیست؟', // nagelezen AI 31 okt
    'zg.zwartwit.o1': 'قول را به صورت نوشته بخواه.', // nagelezen AI 31 okt
    'zg.zwartwit.o2': 'کاغذ سیاه و سفید بخواه.', // nagelezen AI 31 okt
    'zg.zwartwit.o3': 'هیچ چیزی نپرس.', // nagelezen AI 31 okt
    'zg.zwartwit.w': 'چیزی که نوشته شده، مدرک است. برای حقوق، ساعت‌ها و قراردادت، آن را «zwart op wit» بخواه.', // nagelezen AI 31 okt
    'zg.temooi.lit': 'آن زیباتر از آن است که حقیقت داشته باشد.',
    'zg.temooi.m': 'آن‌قدر خوب به نظر می‌رسد که احتمالاً حقیقت ندارد.',
    'zg.temooi.s': 'یک پیام می‌گیری: «۱۰۰۰ یورو برنده شدید! اطلاعات بانکی‌تان را بفرستید.» همسایه‌ات می‌گوید: «Dat is te mooi om waar te zijn.» منظورش چیست؟', // nagelezen AI 31 okt
    'zg.temooi.o1': 'احتمالاً یک حقه است.',
    'zg.temooi.o2': 'شانس آوردی: زود آن را بفرست.', // nagelezen AI 31 okt
    'zg.temooi.o3': 'پیام خیلی قشنگ است.',
    'zg.temooi.w': 'پیشنهادهایی که زیادی خوب به نظر می‌رسند، اغلب کلاهبرداری هستند. هیچ‌وقت اطلاعات بانکی‌ات را نفرست.', // nagelezen AI 31 okt
    'zg.haast.lit': 'عجلهٔ شتاب‌زده به‌ندرت خوب است.',
    'zg.haast.m': 'وقتی عجله می‌کنی، کارها اغلب خراب می‌شود.', // nagelezen AI 31 okt
    'zg.haast.s': 'دیرت شده و می‌خواهی با دوچرخه از چراغ قرمز رد شوی. همکارت می‌گوید: «Haastige spoed is zelden goed.» منظورش چیست؟', // nagelezen AI 31 okt
    'zg.haast.o1': 'عجله نکن: ایمن نیست.', // nagelezen AI 31 okt
    'zg.haast.o2': 'تندتر رکاب بزن.', // nagelezen AI 31 okt
    'zg.haast.o3': 'دفعهٔ بعد با قطار برو.', // nagelezen AI 31 okt
    'zg.haast.w': 'این ضرب‌المثل یعنی: عجله اغلب کار را خراب می‌کند. چند دقیقه دیر رسیدن بهتر از تصادف است.',
    'zg.waagt.lit': 'کسی که جرئت نکند، نمی‌برد.',
    'zg.waagt.m': 'باید امتحان کنی، وگرنه هیچ‌وقت موفق نمی‌شوی.', // nagelezen AI 31 okt
    'zg.waagt.s': 'یک کار می‌بینی، ولی فکر می‌کنی هلندی‌ات به اندازهٔ کافی خوب نیست. مربی‌ات می‌گوید: «Wie niet waagt, die niet wint.» منظورش چیست؟', // nagelezen AI 31 okt
    'zg.waagt.o1': 'درخواست بده: فقط اگر امتحان کنی، می‌توانی آن را بگیری.', // nagelezen AI 31 okt
    'zg.waagt.o2': 'برای این کار درخواست نده.', // nagelezen AI 31 okt
    'zg.waagt.o3': 'برای بردن باید یک بازی کنی.', // nagelezen AI 31 okt
    'zg.waagt.w': 'این ضرب‌المثل به تو می‌گوید امتحان کنی. درخواست دادن هزینهٔ کمی دارد، و از هر بار امتحان چیزی یاد می‌گیری.', // nagelezen AI 31 okt
    'zg.koning.lit': 'مشتری پادشاه است.',
    'zg.koning.m': 'مشتری خیلی مهم است: خوب و دوستانه به او کمک کن.', // nagelezen AI 31 okt
    'zg.koning.s': 'یک مشتری کمی بداخلاق است. سرپرستت می‌گوید: «De klant is koning.» منظورش چیست؟', // nagelezen AI 31 okt
    'zg.koning.o1': 'دوستانه بمان و خوب به مشتری کمک کن.', // nagelezen AI 31 okt
    'zg.koning.o2': 'مشتری یک پادشاه واقعی است.',
    'zg.koning.o3': 'از مشتری بخواه برود.', // nagelezen AI 31 okt
    'zg.koning.w': 'در فروشگاه مشتری اول است، پس مؤدب می‌مانی. مشتری بی‌ادب است یا تهدید می‌کند؟ پس سرپرستت را صدا کن.', // nagelezen AI 31 okt
    'zg.tijdgeld.lit': 'وقت پول است.',
    'zg.tijdgeld.m': 'وقت باارزش است: آن را هدر نده.', // nagelezen AI 31 okt
    'zg.tijdgeld.s': 'رئیست می‌خواهد کامیون زود بار زده شود. می‌گوید: «Tijd is geld.» منظورش چیست؟', // nagelezen AI 31 okt
    'zg.tijdgeld.o1': 'تند کار کن، وقت را هدر نده.', // nagelezen (2e lezing) // nagelezen AI 31 okt
    'zg.tijdgeld.o2': 'برای دیر آمدن پول می‌گیری.', // nagelezen AI 31 okt
    'zg.tijdgeld.o3': 'ساعت خیلی گران است.',
    'zg.tijdgeld.w': 'این اصطلاح یعنی وقت باارزش است. ولی هیچ‌وقت دلیلی برای کار ناایمن یا ساعت‌های بدون مزد نیست.',
    'zg.eindjes.lit': 'گره زدن سرهای کوچک به هم سخت است.',
    'zg.eindjes.m': 'سخت است که با پولی که داری، هزینهٔ همه چیز را بدهی.', // nagelezen AI 31 okt
    'zg.eindjes.s': 'یک همکار می‌گوید: «Het is moeilijk om de eindjes aan elkaar te knopen.» منظورش چیست؟',
    'zg.eindjes.o1': 'برای همه چیز پول کافی ندارد.',
    'zg.eindjes.o2': 'نمی‌تواند بند کفش‌هایش را ببندد.',
    'zg.eindjes.o3': 'دارد خیاطی یاد می‌گیرد.',
    'zg.eindjes.w': 'خیلی‌ها این را می‌شناسند. مشکل مالی داری؟ زود کمک بخواه، مثلاً از شهرداری (gemeente).', // nagelezen AI 31 okt
  },
};
export default t;
