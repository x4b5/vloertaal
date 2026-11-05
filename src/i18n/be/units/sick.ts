import type { CultureTranslation } from '../../culture/types';
import type { Gloss } from '../types';
import { fa as faBase, prs as prsBase, tr as trBase } from '../base';

/** A tip's body with the Belgian closing line of this language (src/i18n/be/base.ts, src/lib/tipText.ts), as in ./leave.ts. */
const end = (body: string, base: CultureTranslation, kind: 'advice' | 'abuse'): string => {
  const line = base.gloss[`be.closing.${kind}`];
  return `${body} ${typeof line === 'string' ? line : (line.x ?? line.m)}`;
};

// The translations of the Belgian version of u.sick, "Ziekte" (src/content/taalBe/units/sick.ts),
// one object per help language. The lines and the tip of "Sick at home" (l.illness) kept their ids
// when the unit was split (5 November 2026): their translations stay in ./leave.ts.
// TO DO (the translation round): the new ids of "Back to work after illness" (l.backtowork):
// be.s.backtowork.3, and the tip be.c.backtowork (.b, .p, .s, .o1-.o3, .w; .b ends with the
// Belgian closing line, as in ./leave.ts: end(…, <lang>Base, 'advice')); then import this file in
// src/i18n/be/<lang>.ts like ./leave.ts. Until then the Belgian lesson shows English there.

export const ar: Gloss = {};
export const ti: Gloss = {};
export const fa: Gloss = {
  'be.s.backtowork.3': "پزشک طب کار می‌گوید: آرام‌آرام بیشترش کن.", // nieuw, nalezen
  'be.c.backtowork': "برگشتن قدم به قدم", // nieuw, nalezen
  'be.c.backtowork.b': end("خوب شده‌ای؟ قبل از اینکه برگردی به کارفرما خبر بده، حتی وقتی زودتر از تاریخی است که در گواهی پزشکی‌ات نوشته شده. بعد از یک بیماری طولانی‌تر، اغلب قدم به قدم شروع می‌کنی: اول ساعت‌های کمتر، یا کار سبک‌تر. پزشک طب کار (arbeidsarts) بررسی می‌کند چه کاری از تو برمی‌آید. مدت طولانی‌تری مریض بوده‌ای؟ آن وقت تو، کارفرما و arbeidsarts می‌توانید با هم برای برگشتنت برنامه‌ای بریزید (re-integratietraject). از ziekenfonds کمک‌هزینه می‌گیری؟ پس اول از ziekenfonds بپرس، قبل از اینکه پاره‌وقت کار کنی. روشن بگو چه کاری از تو برمی‌آید، و چه کاری هنوز نه. لازم نیست به همکاران بگویی چه بیماری‌ای داشتی.", faBase, 'advice'), // nieuw, nalezen
  'be.c.backtowork.p': "این را دیگر می‌توانم. آن را هنوز نمی‌توانم.", // nieuw, nalezen (= c.backtowork.p)
  'be.c.backtowork.s': "سه هفته مریض بودی. در اولین روز برگشتنت، سرپرستت از تو می‌خواهد جعبه‌های سنگین بلند کنی. پزشک طب کار گفته: فعلاً فقط کار سبک. چه کار می‌کنی؟", // nieuw, nalezen
  'be.c.backtowork.o1': "آرام می‌گویی که حالا کار سبک می‌توانی بکنی، و چه کاری را هنوز نمی‌توانی.", // nieuw, nalezen (= c.backtowork.o1)
  'be.c.backtowork.o2': "با این حال جعبه‌ها را بلند می‌کنی: نمی‌خواهی دردسر درست کنی.", // nieuw, nalezen (= c.backtowork.o2)
  'be.c.backtowork.o3': "بدون یک کلمه به خانه می‌روی.", // nieuw, nalezen (= c.backtowork.o3)
  'be.c.backtowork.w': "سرپرستت می‌خواهد برگردی، آن هم سالم. وقتی روشن بگویی چه کاری از تو برمی‌آید، او می‌تواند کار را برنامه‌ریزی کند. زود زیاد کار کردن می‌تواند دوباره مریضت کند.", // nieuw, nalezen (= c.backtowork.w)
};
export const prs: Gloss = {
  'be.s.backtowork.3': "داکتر طب کار می‌گوید: آهسته آهسته زیاد کنید.", // nieuw, nalezen
  'be.c.backtowork': "برگشتن قدم به قدم", // nieuw, nalezen
  'be.c.backtowork.b': end("جور شده‌اید؟ پیش از اینکه برگردید به کارفرما خبر بدهید، حتی وقتی زودتر از تاریخی است که در تصدیق داکتر شما نوشته شده. بعد از یک مریضی درازتر، اکثراً قدم به قدم شروع می‌کنید: اول ساعت‌های کمتر، یا کار سبک‌تر. داکتر طب کار (arbeidsarts) می‌بیند که چه کاری کرده می‌توانید. مدت درازتری مریض بوده‌اید؟ آن وقت شما، کارفرما و arbeidsarts می‌توانید با هم برای برگشت شما یک پلان بسازید (re-integratietraject). از ziekenfonds کمک‌پول می‌گیرید؟ پس اول از ziekenfonds بپرسید، پیش از اینکه نیمه‌وقت کار کنید. واضح بگویید که چه کاری کرده می‌توانید، و چه کاری هنوز نی. لازم نیست به همکاران بگویید که چه مریضی داشتید.", prsBase, 'advice'), // nieuw, nalezen
  'be.c.backtowork.p': "این را حالا کرده می‌توانم. آن را هنوز کرده نمی‌توانم.", // nieuw, nalezen (= c.backtowork.p)
  'be.c.backtowork.s': "شما سه هفته مریض بودید. در روز اول برگشت، سرپرست شما از شما می‌خواهد که قطی‌های سنگین را بلند کنید. داکتر طب کار گفته: فعلاً فقط کار سبک. چه می‌کنید؟", // nieuw, nalezen
  'be.c.backtowork.o1': "آرام بگویید که حالا کار سبک کرده می‌توانید، و چه کاری را هنوز کرده نمی‌توانید.", // nieuw, nalezen (= c.backtowork.o1)
  'be.c.backtowork.o2': "با این هم قطی‌ها را بلند کنید: نمی‌خواهید مشکل پیدا کنید.", // nieuw, nalezen (= c.backtowork.o2)
  'be.c.backtowork.o3': "بدون یک کلمه به خانه بروید.", // nieuw, nalezen (= c.backtowork.o3)
  'be.c.backtowork.w': "سرپرست شما می‌خواهد که برگردید، آن هم صحتمند. وقتی واضح بگویید که چه کرده می‌توانید، او می‌تواند کار را پلان کند. خیلی زود کار زیاد کردن می‌تواند شما را دوباره مریض کند.", // nieuw, nalezen (= c.backtowork.w)
};
export const uk: Gloss = {};
export const tr: Gloss = {
  'be.s.backtowork.3': "İş yeri hekimi diyor ki: yavaş yavaş artır.", // nieuw, nalezen
  'be.c.backtowork': "Adım adım geri dönmek", // nieuw, nalezen
  'be.c.backtowork.b': end("İyileştin mi? Geri dönmeden önce işverenine haber ver, doktor raporunda yazandan daha erken olsa da. Daha uzun bir hastalıktan sonra çoğu zaman adım adım başlarsın: önce daha az saat ya da daha hafif iş. İş yeri hekimi (arbeidsarts) hangi işleri yapabileceğine bakar. Daha uzun süre mi hastaydın? O zaman sen, işverenin ve arbeidsarts dönüşün için birlikte bir plan yapabilirsiniz (re-integratietraject). Ziekenfonds’tan ödenek mi alıyorsun? O zaman yarı zamanlı çalışmadan önce ziekenfonds’una sor. Neler yapabildiğini ve neleri henüz yapamadığını açıkça söyle. Hangi hastalığı geçirdiğini iş arkadaşlarına söylemek zorunda değilsin.", trBase, 'advice'), // nieuw, nalezen
  'be.c.backtowork.p': "Bunu artık yapabiliyorum. Şunu henüz yapamıyorum.", // nieuw, nalezen (= c.backtowork.p)
  'be.c.backtowork.s': "Üç hafta hastaydın. Döndüğün ilk gün amirin senden ağır kutuları kaldırmanı istiyor. İş yeri hekimi dedi ki: şimdilik sadece hafif iş. Ne yaparsın?", // nieuw, nalezen
  'be.c.backtowork.o1': "Şimdi hafif iş yapabildiğini ve neyi henüz yapamadığını sakince söylersin.", // nieuw, nalezen (= c.backtowork.o1)
  'be.c.backtowork.o2': "Yine de kutuları kaldırırsın: zorluk çıkarmak istemiyorsun.", // nieuw, nalezen (= c.backtowork.o2)
  'be.c.backtowork.o3': "Tek kelime etmeden eve gidersin.", // nieuw, nalezen (= c.backtowork.o3)
  'be.c.backtowork.w': "Amirin geri dönmeni istiyor, hem de sağlıklı olarak. Neler yapabildiğini açıkça söylersen, işi planlayabilir. Çok erken çok fazla iş yapmak seni yeniden hasta edebilir.", // nieuw, nalezen (= c.backtowork.w)
};
export const pl: Gloss = {};
export const ro: Gloss = {};
export const bg: Gloss = {};
export const es: Gloss = {};
export const pt: Gloss = {};
export const fr: Gloss = {};
export const de: Gloss = {};
