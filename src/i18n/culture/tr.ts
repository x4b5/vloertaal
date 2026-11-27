import type { CultureTranslation } from './types';

const t: CultureTranslation = {
  ui: {
    cultureBadge: 'Burada nasıl yapılır',
    whatDoYouDo: 'Ne yaparsın?',
    whatDoYouSay: 'Ne dersin?',
    whatIsRight: 'Hangisi doğru?',
    sayThis: 'Böyle söyle',
    goodChoice: 'İyi seçim!',
    otherChoice: 'Burada genelde farklı yapılır',
    cultureTips: 'İş yeri ipuçları',
    cultureTipsHint: 'Hollanda’da bir iş yerinde işler genelde nasıl yürür. Tekrar okumak için bir ipucuna dokun.',
  },
  gloss: {
    'c.je': '“Je” mi, “u” mu?',
    'c.je.b': 'İş yerinde çoğu kişi birbirine “je” der, çoğu zaman patrona da. Emin değilsen “u” ile başla ve diğerlerinin nasıl konuştuğunu dinle. Burada “je” demek kaba değildir.',
    'c.je.p': 'Sana “je” diyebilir miyim?',
    'c.je.s': 'Yeni amirin diyor ki: “Zeg maar je, hoor!” Ne demek istiyor?',
    'c.je.o1': 'Ona “je” demeni istiyor.',
    'c.je.o2': 'Bir şey söylemeni istiyor.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.je.o3': 'Daha kibar konuşmanı istiyor.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.je.w': '“Zeg maar je” samimi bir sözdür: aradaki mesafeyi azaltmak istiyor. Birçok Hollanda iş yerinde amire “je” demek normaldir.',
    'c.names': 'İsimler ve tokalaşma',
    'c.names.b': 'İlk gününde kısaca tokalaş, kişinin yüzüne bak ve adını söyle. İş arkadaşları ve yöneticiler genelde birbirine adıyla hitap eder.',
    'c.names.p': 'Merhaba, ben Ali. Burada yeniyim.',
    'c.names.s': 'Bir iş arkadaşın yanına geliyor: “Hoi, ik ben Mark.” Ne yaparsın?',
    'c.names.o1': 'Tokalaşır ve adını söylersin.',
    'c.names.o2': 'Başını sallar, gülümser ve soru sorulmasını beklersin.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.names.o3': 'Tokalaşır ve ona “meneer” (beyefendi) dersin.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.names.w': 'Adınla kısaca tanışmak normal bir başlangıçtır. Böylece iş arkadaşların seni daha kolay hatırlar ve seni de aralarına katar.',
    'c.arrive': 'İlk günün: nereye gitmeli',
    'c.arrive.b': 'İlk gününde önce resepsiyona ya da ana girişe git. Adını, varsa iş ajansının adını ve kiminle görüşmen gerektiğini söyle. Birçok şirket sana bir rehber iş arkadaşı (buddy) verir: ona her şeyi sorabilirsin.',
    'c.arrive.p': 'Günaydın, ben Ali. Bugün başlıyorum. Kime gitmem gerekiyor?',
    'c.arrive.s': 'İlk günün, saat 6:45. Kapı kapalı. Bir diyafon var. Ne yaparsın?',
    'c.arrive.o1': 'Zile basar, adını ve bugün başladığını söylersin.',
    'c.arrive.o2': 'Biri çıkana kadar kapıda beklersin.',
    'c.arrive.o3': 'Başka bir kapı bulmak için binanın etrafında dolaşırsın.',
    'c.arrive.w': 'Diyafon ziyaretçiler ve yeni çalışanlar içindir. Kim olduğunu söylediğinde doğru kişiyi çağırabilirler.',
    'c.ask': 'Soru sormak iyidir',
    'c.ask.b': 'Soru sormak, işi iyi yapmak istediğini gösterir. Anlamadığında başını sallamak hatalara veya kazalara yol açabilir. Tekrar sormak tamamen normaldir.',
    'c.ask.p': 'Pardon, anlamadım. Bir kez daha anlatır mısın?',
    'c.ask.s': 'Amirin bir işi çok hızlı anlatıyor. Anlamadın. Ne yaparsın?',
    'c.ask.o1': 'Tekrar açıklamasını istersin.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.ask.o2': 'Başını sallar ve tahmin etmeye çalışırsın.',
    'c.ask.o3': 'Hollandacan için özür diler ve işe başlarsın.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.ask.w': 'Burada amirler soru bekler. Hata yapmaktansa iki kez sormak daha iyidir.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.gear': 'Güvenlik kuralları herkes için',
    'c.gear.b': 'Baret, ayakkabı ve eldiven kuralları bir öneri değildir: herkes uyar, patron da. İşverenin ihtiyacın olan koruyucu ekipmanı sana ücretsiz vermek zorundadır. Üstüne olmayan ekipman seni iyi korumaz. O yüzden kendi bedenini iste: “Heb je dit ook in mijn maat?”',
    'c.gear.p': 'Eldivenlerim yırtıldı. Yenilerini nereden alabilirim?',
    'c.gear.s': 'Eldivenlerin yırtık. Ne yaparsın?',
    'c.gear.o1': 'Amirinden yeni eldiven istersin.',
    'c.gear.o2': 'Eldivensiz çalışmaya devam edersin.',
    'c.gear.o3': 'Sessizce kendi paranla yeni eldiven alırsın.',
    'c.gear.w': 'Koruyucu ekipman işverenin işidir. İstemek normaldir ve güvenliği ciddiye aldığını gösterir.',
    'c.unsafe': 'Tehlikeliyse söyle',
    'c.unsafe.b': 'Bir şey tehlikeliyse hemen söyle, patrona da. Gerçekten tehlikeli olan bir işi durdurabilirsin. Kazaları ve ucuz atlatılan kazaları bildir, küçük olsalar bile.',
    'c.unsafe.p': 'Dur! Bu güvenli değil.',
    'c.unsafe.s': 'Bir palet çok yüksek istiflenmiş ve neredeyse düşüyor. Kimse yaralanmadı. Ne yaparsın?',
    'c.unsafe.o1': 'İş arkadaşlarını uyarır ve amirine söylersin.',
    'c.unsafe.o2': 'Bir şey olmadığı için hiçbir şey söylemezsin.',
    'c.unsafe.o3': 'Paleti kendin düzeltir ve kimseye söylemezsin.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.unsafe.w': 'Ucuz atlatılan bir kaza bir uyarıdır. Bildirmek gerçek bir kazayı önlemeye yardım eder. İşveren seni bunun için cezalandıramaz.',
    'c.alarm': 'Alarm çalıyor: dur ve dışarı çık', // nieuw, nalezen // nagelezen AI 22 nov
    'c.alarm.b': 'İlk gününde acil çıkışların ve toplanma alanının nerede olduğunu sor. Alarm çaldığında işini hemen bırak. Eşyalarını bırak ve kaçış yolundan dışarı çık. Merdiveni kullan, asansörü asla. Toplanma alanında kimin dışarıda olduğunu sayarlar, o yüzden orada kal. Sadece bir tatbikat olduğunu düşünsen de dışarı çık.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.alarm.p': 'Yeniyim. Toplanma alanı nerede?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.alarm.s': 'Yangın alarmı çalıyor. Bir siparişi bitirmek üzeresin. Ne yaparsın?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.alarm.o1': 'Hemen durur ve toplanma alanına yürürsün.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.alarm.o2': 'Önce siparişi bitirir, sonra dışarı çıkarsın.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.alarm.o3': 'Önce dolabından montunu ve telefonunu alırsın.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.alarm.w': 'Duman hızla yayılır, o yüzden hemen çıkarsın. Eşyaların bekleyebilir. Toplanma alanında herkesi sayarlar: böylece kimse seni içeride aramak zorunda kalmaz.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.accident': 'Her kazayı bildir',
    'c.accident.b': 'Her kazayı, küçük olsa bile, amirine veya BHV’er’e (iş yerindeki ilk yardım görevlisine) söyle. Bir ajans üzerinden mi çalışıyorsun? Ajansa da haber ver. Acil durumda önce 112’yi ara. Kazanın olduğu şirket, ciddi bir kazayı Nederlandse Arbeidsinspectie’ye bildirmek zorundadır (ajans üzerinden çalışıyorsan da): biri öldüğünde, kalıcı olarak yaralandığında veya hastanede yatması gerektiğinde. Genel bilgi. Kendi durumun için işverenine, sendikaya veya Juridisch Loket’e sor.',
    'c.accident.p': 'İş arkadaşım yaralandı. İlk yardım görevlisi nerede?',
    'c.accident.s': 'Bir şey kaldırırken sırtını incitiyorsun. İşini kaybetmekten korkuyorsun. Ne yaparsın?',
    'c.accident.o1': 'Aynı gün amirine bildirirsin.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.accident.o2': 'İşini kaybetmemek için hiçbir şey söylemezsin.',
    'c.accident.o3': 'Ağrının kendiliğinden geçip geçmeyeceğini beklersin.',
    'c.accident.w': 'Küçük görünse bile aynı gün bildir: ağrı sonra artabilir. İşverenin seni bildirdiğin için cezalandırması yasaktır. Bir ajans üzerinden mi çalışıyorsun? Ajansa da söyle.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.notyet': 'Henüz öğrenmedin mi? Söyle',
    'c.notyet.b': 'Çalıştığın şirket, işini nasıl güvenli yapacağını sana açıklamak zorundadır. Kimsenin sana öğretmediği bir makineyi ya da forklifti kullanma. Burada “Dit heb ik nog niet geleerd” demek normaldir: güvenli çalıştığını gösterir.',
    'c.notyet.p': 'Bunu henüz öğrenmedim. Yapıp gösterebilir misin?',
    'c.notyet.s': 'Yoğun bir sabah. Amirin diyor ki: “Pak jij even de heftruck? Het is makkelijk.” Daha önce hiç forklift kullanmadın. Ne yaparsın?',
    'c.notyet.o1': 'Öğrenmediğini söylersin. Eğitim istersin.',
    'c.notyet.o2': 'Sadece bu seferlik yavaş ve dikkatli sürersin.',
    'c.notyet.o3': '“Ja” der ve iyi gitmesini umarsın.',
    'c.notyet.w': 'Eğitim almadan forklift kullanmak senin için de başkaları için de tehlikelidir. Eğitim ya da başka iş istemek normaldir, iş yoğun olsa bile.',
    'c.direct': 'Açık sözlü olmak kabalık değil',
    'c.direct.b': 'Hollandalı iş arkadaşları çoğu zaman çok açık konuşur, örneğin “Dat is fout” veya “Doe het zo”. Genelde kaba olmak istemezler. Sen de nazik kaldığın sürece açık konuşabilirsin.',
    'c.direct.p': 'Tamam, o zaman nasıl yapmalı?',
    'c.direct.s': 'Bir iş arkadaşın diyor ki: “Nee, dat is fout. Die doos moet daar.” Ne yaparsın?',
    'c.direct.o1': 'Nasıl yapılması gerektiğini sorar ve kutuyu taşırsın.',
    'c.direct.o2': 'Defalarca özür dilersin: iş arkadaşın kızgın.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.direct.o3': 'Hiçbir şey söylemezsin ve kutuyu olduğu yerde bırakırsın.',
    'c.direct.w': 'Açık geri bildirim işle ilgilidir, seninle değil. “hoe moet het dan?” diye sormak öğrenmek istediğini gösterir.',
    'c.limits': 'Çok ağırsa söyle',
    'c.limits.b': 'Kimse her şeyi tek başına kaldırmanı beklemez. “dit is te zwaar” deyip yardım veya alet istemek akıllıcadır, zayıflık değil. Belini korur.',
    'c.limits.p': 'Bu kutu çok ağır. Bir saniye yardım eder misin?',
    'c.limits.s': 'Senin için çok ağır bir kutuyu kaldırman gerekiyor. Ne yaparsın?',
    'c.limits.o1': 'Bir iş arkadaşından yardım istersin veya taşıma arabası kullanırsın.',
    'c.limits.o2': 'Kimse zayıf olduğunu düşünmesin diye yine de kaldırırsın.',
    'c.limits.o3': 'Orada bırakır ve hiçbir şey söylemezsin.',
    'c.limits.w': 'Yardım istemek normal bir takım çalışmasıdır. Sakatlanmış bir bel, bir dakikalık yardımdan çok daha pahalıya mal olur.',
    'c.time': 'Zamanında demek biraz erken demek',
    'c.time.b': 'Zamanında olmak çok önemlidir. Birçok kişi vardiya başlamadan beş-on dakika önce gelir. Geç kalacaksan vardiyan başlamadan önce mesaj at veya ara, sonra değil.',
    'c.time.p': 'Pardon, otobüs gecikti. Saat sekizde orada olurum.',
    'c.time.s': 'Otobüsün gecikti ve 15 dakika geç kalacaksın. Ne yaparsın?',
    'c.time.o1': 'Hemen amirine haber verirsin.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.time.o2': 'Vardığında açıklarsın.',
    'c.time.o3': 'Bugün hiç işe gitmezsin.',
    'c.time.w': 'Erken haber vermek ekibin plan yapmasını sağlar. Haber vermeden geç kalmak, gecikmenin kendisinden çok daha kötü görülür.',
    'c.sick': 'Hastalık bildirimi nasıl yapılır',
    'c.sick.b': 'Şirketinin başka bir kuralı yoksa, vardiyan başlamadan önce amirini kendin ara. Bir ajans üzerinden mi çalışıyorsun? Ajansa da haber ver. Hangi hastalığın olduğunu söylemek zorunda değilsin. Genel bilgi. Kendi durumun için işverenine, sendikaya veya Juridisch Loket’e sor.',
    'c.sick.p': 'Hastayım. Bugün işe gelemiyorum.',
    'c.sick.s': 'Ateşle uyanıyorsun. Vardiyan 7:00\'de başlıyor. Ne yaparsın?',
    'c.sick.o1': 'Saat 7:00\'den önce amirini ararsın.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.sick.o2': 'Bir iş arkadaşından patrona sonra söylemesini istersin.',
    'c.sick.o3': 'Evde kalır ve yarın ararsın.',
    'c.sick.w': 'Çoğu Hollanda iş yerinde kural, hastalığını kendin ve zamanında bildirmektir. İşverenin ne kadar süreceğini sorabilir, ama hangi hastalık olduğunu soramaz.',
    'c.speakup': 'Seni rahatsız eden şeyi söyle',
    'c.speakup.b': 'Burada bir şey seni rahatsız ettiğinde bunu sakin bir şekilde söylemek normaldir ve saygı görür. Önce o kişiyle sakin bir anda konuş. “ik” ile başlayan cümleler kur: “Ik vind het niet fijn dat ...”. İşe yaramazsa amirinle konuş.',
    'c.speakup.p': 'Bir şey beni rahatsız ediyor. Biraz konuşabilir miyiz?',
    'c.speakup.s': 'Bir iş arkadaşın ağır işleri hep sana bırakıyor. Bu seni rahatsız ediyor. Ne yaparsın?',
    'c.speakup.o1': 'İş arkadaşına seni neyin rahatsız ettiğini söylersin.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.speakup.o2': 'Susar ve gittikçe daha çok sinirlenirsin.',
    'c.speakup.o3': 'Onu diğer bütün iş arkadaşlarına şikâyet edersin.',
    'c.speakup.w': 'Hollandalı iş arkadaşları genelde bunu doğrudan duymayı tercih eder. Erken ve sakin söylemek ilişkiyi iyi tutar.',
    'c.no': '“Afspraak is afspraak”',
    'c.no.b': '“ja” dediğinde insanlar buna güvenir: söz sözdür. Bu yüzden bir şeyi yapamadığında “nee” veya “dat lukt niet” demek sorun değil. Bunu zamanında söyle ve mümkünse başka bir seçenek öner.',
    'c.no.p': 'Hayır, bugün olmuyor. Yarın olur.',
    'c.no.s': 'Amirin cumartesi fazladan çalışıp çalışamayacağını soruyor. Çalışamazsın. Ne yaparsın?',
    'c.no.o1': 'Hayır der ve başka bir gün önerirsin.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.no.o2': 'Evet der ve sonra gelmezsin.',
    'c.no.o3': 'Evet dersin: patrona hayır denmez.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.no.w': 'Net bir “nee” saygı görür. “ja” deyip gelmemek güveni çok daha fazla bozar.',
    'c.task': 'Bitince söyle, anlamadığında sor',
    'c.task.b': 'Hollanda’da amir bir işi çoğu zaman birkaç kelimeyle verir. İş bitince bunu söylersin. Anlamadığın hâlde “ja” demek çoğu zaman hatalara yol açar. Tekrar sormak ya da göstermesini istemek burada normaldir, kabalık değildir.',
    'c.task.p': 'Bitti! Şimdi ne yapayım?',
    'c.task.s': 'Amirin bir işi çok hızlı anlatıyor. Sadece yarısını anladın. Ne yaparsın?',
    'c.task.o1': 'Bir kez daha göstermesini istersin.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.task.o2': 'Anladığın yarıdan başlarsın.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.task.o3': 'Bir iş arkadaşın yapana kadar beklersin.',
    'c.task.w': 'Tekrar sormak normaldir ve bir dakika sürer. Bir hatayı düzeltmek çok daha uzun sürer. Çoğu amir bir şeyi iki kez göstermeyi tercih eder.',
    'c.clear': 'En önemli şeyi önce söyle', // nieuw, nalezen // nagelezen AI 22 nov
    'c.clear.b': 'Birçok dilde önce bütün hikâyeyi anlatmak, asıl konuyu sona bırakmak kibarlıktır. Burada iş yerinde ise tam tersi. Önce neyin yanlış olduğunu ya da neye ihtiyacın olduğunu söyle. Sonra sebebini söyle. Sakin konuş ve iki üç cümleden sonra dur, böylece karşındaki kişi bir şey sorabilir. İş görüşmesinde de öyle: önce cevap, sonra bir örnek. Yavaş konuşmak burada kabalık değil: insanların seni anlamasına yardımcı olur.',
    'c.clear.p': 'Pardon, bir kez daha sakince söyleyeyim.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.clear.s': 'İşe 20 dakika geç geliyorsun. Amirin soruyor: “Wat is er?” Ne yaparsın?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.clear.o1': 'Önce geç kaldığını söyler ve özür dilersin. Sonra nedenini söylersin.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.clear.o2': 'Bu sabah olan her şeyi baştan anlatırsın.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.clear.o3': 'Hiçbir şey söylemez ve hemen işe başlarsın.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.clear.w': 'Amirin önce neler olduğunu bilmek ister. Sebep ondan sonra gelir. Kısa ve sakin konuşmak nettir, burada aynı zamanda kibarlıktır.', // nieuw, nalezen // nagelezen AI 22 nov
    'u.teamwork': 'Birlikte çalışmak',
    'l.speakup': 'Bir şey beni rahatsız ediyor',
    'w.probleem': 'sorun',
    'w.praten': 'konuşmak',
    'w.nietfijn': 'hoş değil',
    'w.eerlijk': 'adil, dürüst',
    'w.boos': 'kızgın',
    'w.samen': 'birlikte',
    's.speakup.1': 'Bir şey beni rahatsız ediyor.',
    's.speakup.2': 'Biraz konuşabilir miyiz?',
    's.speakup.3': 'Bence bu adil değil.',
    'd.speakup.q': 'Bir sorun mu var?',
    'd.speakup.a': 'Evet, bir şey beni rahatsız ediyor.',
    'l.agree': 'Anlaşmalar ve hayır demek',
    'w.afspraak': 'anlaşma, randevu',
    'w.lukken': 'başarmak, yolunda gitmek',
    'w.oneens': 'aynı fikirde olmamak',
    'w.zaterdag': 'cumartesi',
    'w.overwerken': 'fazla mesai yapmak',
    'w.misschien': 'belki',
    's.agree.1': 'Hayır, bugün olmuyor.',
    's.agree.2': 'Sana katılmıyorum.',
    's.agree.3': 'Söz sözdür.',
    'd.agree.q': 'Cumartesi fazla mesai yapabilir misin?',
    'd.agree.a': 'Hayır, olmuyor. Pazar olur.',
    'l.task': 'Amirinden gelen talimatlar',
    'w.taak': 'görev, iş',
    'w.eerst': 'önce, ilk olarak',
    'w.daarna': 'ondan sonra',
    'w.afmaken': 'bitirmek',
    'w.snel': 'hızlı',
    'w.bijna': 'neredeyse',
    's.task.1': 'Önce ne yapmalıyım?',
    's.task.2': 'Bu işi bitirdim.',
    's.task.3': 'Bir kez daha gösterebilir misiniz?',
    'd.task.q': 'Bitirdin mi?',
    'd.task.a': 'Neredeyse. Beş dakika daha.',
    'l.clear': 'Kısa ve net', // nieuw, nalezen
    'w.kort': 'kısa', // nieuw, nalezen
    'w.duidelijk': 'net, açık', // nieuw, nalezen
    'w.belangrijkste': 'en önemli şey', // nieuw, nalezen
    'w.rustig': 'sakin, sakince', // nieuw, nalezen
    'w.teveel': 'çok fazla', // nieuw, nalezen
    'w.vraag': 'soru', // nieuw, nalezen
    's.clear.1': 'Kısaca söyleyeyim: makine bozuk.', // nieuw, nalezen
    's.clear.2': 'Önce en önemlisi: hastayım.', // nieuw, nalezen
    's.clear.3': 'Pardon, çok hızlı ve çok fazla konuşuyorum.', // nieuw, nalezen
    'd.clear.q': 'Anlaşıldı mı?', // nieuw, nalezen
    'd.clear.a': 'Evet. Bir sorum daha var.', // nieuw, nalezen
    'l.newcolleague': "Yeni bir iş arkadaşına yardım etmek", // nieuw, nalezen
    'w.welkom': "hoş geldin", // nieuw, nalezen
    'w.inwerken': "işe alıştırmak (ilk günlerde yeni bir iş arkadaşına işi göstermek)", // nieuw, nalezen
    'w.stap': "adım (bir işin küçük bir parçası)", // nieuw, nalezen
    'w.nadoen': "aynısını yapmak (birinin sana gösterdiğini yapmak)", // nieuw, nalezen
    'w.geduld': "sabır", // nieuw, nalezen
    'w.kast': "dolap", // nieuw, nalezen
    's.newcolleague.1': "Hoş geldin! Bugün sana işi göstereceğim.", // nieuw, nalezen
    's.newcolleague.2': "Önce izle. Sonra aynısını sen yaparsın.", // nieuw, nalezen
    's.newcolleague.3': "Eldivenler şu dolapta.", // nieuw, nalezen
    'd.newcolleague.q': "Anladım, sanırım.", // nieuw, nalezen
    'd.newcolleague.a': "Güzel. Göster bakalım.", // nieuw, nalezen
    'c.newcolleague': "Göster, adım adım", // nieuw, nalezen // nagelezen AI 22 nov
    'c.newcolleague.b': "İlk haftalarında senin için zor olan şey, yeni bir iş arkadaşı için de zordur. İşi küçük adımlarla anlat: önce bu, sonra şu. Daha hızlı ya da daha yüksek sesle konuşma: göster ve senden sonra o da yapsın. “Snap je het?” diye sorma: birçok kişi anlamasa da evet der. Bunun yerine “Laat eens zien” de ve izle. Tuvalet, yemekhane ve eldivenler gibi şeylerin nerede olduğunu söyle. Sabırlı ol (geduld): öğrenmek herkes için zaman alır.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.newcolleague.p': "Aferin! Şimdi sıradaki adım.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.newcolleague.s': "Yeni bir iş arkadaşına bir işi anlatıyorsun. O da şöyle diyor: “Ja, ja, ik snap het.” Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.newcolleague.o1': "“Laat eens zien,” der ve onun yapmasını izlersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.newcolleague.o2': "“Goed zo,” der ve kendi işine dönersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.newcolleague.o3': "Hepsini yeniden, daha hızlı ve daha yüksek sesle anlatırsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.newcolleague.w': "Birçok kişi anlamasa da “ja” der. O gösterince, ikiniz de işin doğru olup olmadığını görürsünüz. Bu, sonra bir hatayı düzeltmekten daha hızlıdır.", // nieuw, nalezen // nagelezen AI 22 nov
    // Vertaalronde 5 november 2026: u.communicate (Goed communiceren) en u.feedback (Feedback en overleg).
    'u.communicate': "İyi iletişim kurmak", // nieuw, nalezen
    'l.explain': "Neyin yanlış olduğunu söylemek", // nieuw, nalezen
    'w.ietsmis': "bir sorun var, bir şey yanlış", // nieuw, nalezen
    'w.stilstaan': "durmak, durmuş olmak (bir makine, bir bant)", // nieuw, nalezen
    'w.lampje': "(uyarı) lambası", // nieuw, nalezen
    'w.komen': "gelmek", // nieuw, nalezen
    'w.nodighebben': "ihtiyacı olmak", // nieuw, nalezen
    'w.meteen': "hemen, derhal", // nieuw, nalezen
    's.explain.1': "Bant durdu. İkinci hatta. Gelebilir misin?", // nieuw, nalezen
    's.explain.2': "Makinede kırmızı bir lamba yanıyor.", // nieuw, nalezen
    's.explain.3': "Tehlikeli. Hemen gelebilir misin?", // nieuw, nalezen
    'd.explain.q': "Sorun ne?", // nieuw, nalezen
    'd.explain.a': "Barkod okuyucu çalışmıyor. Yenisine ihtiyacım var.", // nieuw, nalezen
    'l.listen': "İyi dinlemek", // nieuw, nalezen
    'w.uitpraten': "sözünü bitirmek (birinin sözünü bitirmesine izin vermek)", // nieuw, nalezen
    'w.onderbreken': "sözünü kesmek", // nieuw, nalezen
    'w.aankijken': "(birine) bakmak", // nieuw, nalezen
    'w.bedoelen': "kastetmek, demek istemek", // nieuw, nalezen
    'w.dus': "yani (duyduğunu kontrol etmek için)", // nieuw, nalezen
    'w.doorvragen': "sormaya devam etmek (anlaşılana kadar)", // nieuw, nalezen
    's.listen.1': "Yani önce kutuları sayacağım, sonra paketleyeceğim, öyle mi?", // nieuw, nalezen
    's.listen.2': "O kelimeyle ne demek istiyorsun?", // nieuw, nalezen
    's.listen.3': "Pardon, sen sözünü bitir.", // nieuw, nalezen
    'd.listen.q': "Yarın daha saat dörtte başlıyorsun.", // nieuw, nalezen
    'd.listen.a': "Gerçekten mi? Yoksa şaka mıydı?", // nieuw, nalezen
    'l.calm': "Sakin kalmak", // nieuw, nalezen
    'w.nadenken': "düşünmek (bir şey hakkında)", // nieuw, nalezen
    'w.ademhalen': "nefes almak", // nieuw, nalezen
    'w.oplossen': "çözmek, halletmek", // nieuw, nalezen
    'w.druk': "yoğun (çok iş var)", // nieuw, nalezen
    'w.straks': "birazdan, sonra (bugün)", // nieuw, nalezen
    'w.misverstand': "yanlış anlaşılma", // nieuw, nalezen
    's.calm.1': "Bunu sakince çözmek istiyorum.", // nieuw, nalezen
    's.calm.2': "Biraz düşünebilir miyim?", // nieuw, nalezen
    's.calm.3': "Sonra konuşabilir miyiz?", // nieuw, nalezen
    'd.calm.q': "Bu neden hâlâ bitmedi?", // nieuw, nalezen
    'd.calm.a': "Pardon, çok yoğunuz. Önce ne yapılmalı?", // nieuw, nalezen
    'l.talkintime': "Zamanında konuşmak", // nieuw, nalezen
    'w.gesprek': "görüşme, konuşma", // nieuw, nalezen
    'w.bespreken': "konuşmak, görüşmek (bir konuyu)", // nieuw, nalezen
    'w.zorgenmaken': "endişelenmek", // nieuw, nalezen
    'w.oplossing': "çözüm", // nieuw, nalezen
    'w.ineens': "birden, aniden", // nieuw, nalezen
    'w.wegblijven': "gelmemek (işe gelmemek)", // nieuw, nalezen
    's.talkintime.1': "Bir şey beni rahatsız ediyor. Biraz vaktin var mı?", // nieuw, nalezen
    's.talkintime.2': "Seninle bir şey konuşmak istiyorum.", // nieuw, nalezen
    's.talkintime.3': "İşi bırakmayı düşünüyorum. Önce konuşabilir miyiz?", // nieuw, nalezen
    'd.talkintime.q': "Biraz vaktin var mı? Bir şey beni rahatsız ediyor.", // nieuw, nalezen
    'd.talkintime.a': "Tabii. Ne oldu?", // nieuw, nalezen
    'l.reachable': "Ulaşılabilir olmak", // nieuw, nalezen
    'w.opnemen': "(telefonu) açmak, cevap vermek", // nieuw, nalezen
    'w.gemisteoproep': "cevapsız arama", // nieuw, nalezen
    'w.voicemail': "sesli mesaj", // nieuw, nalezen
    'w.beltegoed': "telefon bakiyesi, kontör (ön ödemeli)", // nieuw, nalezen
    'w.bereik': "çekim, sinyal (telefonda)", // nieuw, nalezen
    'w.onbekend': "bilinmeyen (bilinmeyen bir numara)", // nieuw, nalezen
    's.reachable.1': "Hollandacam henüz iyi değil. Yavaş konuşabilir misiniz?", // nieuw, nalezen
    's.reachable.2': "Bunu mesaj olarak da gönderebilir misiniz?", // nieuw, nalezen
    's.reachable.3': "Yeni bir numaram var.", // nieuw, nalezen
    'd.reachable.q': "Günaydın, planlamadan arıyorum.", // nieuw, nalezen
    'd.reachable.a': "Günaydın. Beni aramışsınız? Pardon, kaçırdım.", // nieuw, nalezen
    'c.explain': "Ne, nerede, neye ihtiyacın var", // nieuw, nalezen // nagelezen AI 22 nov
    'c.explain.b': "İşte bir sorun olduğunda, bunu üç adımda söyle. Önce sorun ne: “De band staat stil.” Sonra nerede: “Bij lijn twee.” Sonra neye ihtiyacın var: “Kun je komen?” Böylece karşındaki kişi, çok soru sormadan ne yapacağını bilir. Onun adını bilmiyor musun? Parmağınla göster. Tehlikeli mi? Bunu ilk önce söyle: “Het is gevaarlijk.” Kaza mı oldu? Önce yardım çağır (daha fazlası “Kaza bildirmek” dersinde).", // nieuw, nalezen // nagelezen AI 22 nov
    'c.explain.p': "Gelip bir bakabilir misin?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.explain.s': "Senin yerindeki barkod okuyucu çalışmayı bırakıyor. Ekip liderini arıyorsun. Ne dersin?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.explain.o1': "“De scanner is kapot. Bij gang vier. Kun je komen?”", // nieuw, nalezen // nagelezen AI 22 nov
    'c.explain.o2': "“Hallo, ik heb een probleem.” Sonra beklersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.explain.o3': "“Sorry, sorry! Het is niet mijn schuld!”", // nieuw, nalezen // nagelezen AI 22 nov
    'c.explain.w': "Artık ekip liderin neyin yanlış olduğunu, nerede olduğunu ve neye ihtiyacın olduğunu biliyor. Kimsenin önce üç soru sorması gerekmiyor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.listen': "Önce dinle, sonra kontrol et", // nieuw, nalezen // nagelezen AI 22 nov
    'c.listen.b': "Cevap vermeden önce karşındakinin sözünü bitirmesine izin ver (uitpraten). Seninle konuşan kişiye bak: burada bu, dinlediğini gösterir. Birçok ülkede patronunun gözlerine bakmazsın. Bu bir saygı işaretidir. Burada ara sıra ona bakmak kibarlıktır. Karşındaki sözünü bitirince, duyduğunu tekrar söyle: “Dus eerst …, en dan …?” Bir kelimenin ne demek olduğundan emin değil misin? Sor: “Wat bedoel je met …?” Bazı iş arkadaşları ciddi bir yüzle şaka yapar. Emin değil misin? Sor: “Was dat een grapje?”",
    'c.listen.p': "Bekle, bunu iyi anlamak istiyorum.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.listen.s': "Amirin yeni bir işi anlatıyor. Bir şey söylemek istiyorsun ama o hâlâ konuşuyor. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.listen.o1': "Sözünü bitirmesine izin verirsin. Sonra duyduğunu tekrar söylersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.listen.o2': "Unutmamak için hemen konuşmaya başlarsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.listen.o3': "Her şeye başını sallarsın ve hiçbir şey sormazsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.listen.w': "Sözünü bitirdiğinde işin tamamını bilirsin. Tekrar söylemek dinlediğini gösterir, o da seni hâlâ düzeltebilir.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.calm': "Zor olsa da sakin kal", // nieuw, nalezen // nagelezen AI 22 nov
    'c.calm.b': "Herkes bazen sinirlenir, işte de. Biri sana mı kızgın? Önce dinle ve sakin kal. Hemen cevap vermek zorunda değilsin: “Mag ik even nadenken?” Sen de mi sinirleniyorsun? Yavaşça nefes al ve şöyle de: “Kunnen we straks praten?” Sonra ikiniz de sakin olduğunuzda konuşun. Çok mu yoğun? Önce neyin yapılması gerektiğini sor. Bağırmak, tehdit etmek veya itmek işte asla kabul edilmez. Dur de ve amirine söyle (daha fazlası “Herkese saygı” ve “Sınırı aşmak” derslerinde).", // nieuw, nalezen // nagelezen AI 22 nov
    'c.calm.p': "Bence bu bir yanlış anlaşılma.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.calm.s': "Bir iş arkadaşın kızgın: palet yanlış yerde. Bunu senin yapmadığını düşünüyorsun. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.calm.o1': "Sakin kalırsın, dinlersin, sonra bildiğini söylersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.calm.o2': "Sen de sinirlenirsin ve daha yüksek sesle söylersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.calm.o3': "Çekip gidersin ve onunla bir daha konuşmazsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.calm.w': "Sen sakin kalınca karşındaki de çoğu zaman sakinleşir. O zaman ne olduğunu öğrenip sorunu birlikte çözebilirsiniz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.talkintime': "Sorun küçükken konuş", // nieuw, nalezen // nagelezen AI 22 nov
    'c.talkintime.b': "Küçük bir sorun, onun hakkında konuşmazsan büyür. Sonra birden sinirlenirsin ya da birden işi bırakırsın. Zamanında konuş: amirinle, bir iş arkadaşınla veya varsa bir güven danışmanıyla (vertrouwenspersoon). Biraz zaman iste: “Heb je even tijd?” Sorunun ne olduğunu ve ne istediğini kısaca söyle. İşi bırakmayı mı düşünüyorsun? Önce konuş. Çoğu zaman bir çözüm vardır, örneğin başka bir vardiya veya başka bir iş. İşi kendin bırakırsan ödeneğini (uitkering) kaybedebilirsin ve çoğu zaman bir ihbar süresi (opzegtermijn) vardır. Genel bilgi. Kendi durumun için işverenine, sendikaya veya Juridisch Loket’e sor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.talkintime.p': "Birlikte bir çözüm arayabilir miyiz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.talkintime.s': "Haftalardır çalışma planın bir sorun. Bugün kızgınsın ve hemen bırakmak istiyorsun. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.talkintime.o1': "Önce amirinden bir görüşme istersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.talkintime.o2': "Şimdi gidersin ve bir daha gelmezsin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.talkintime.o3': "Hiçbir şey söylemez ve öylece devam edersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.talkintime.w': "Zamanında konuşmak bir sorunu küçük tutar. Çoğu zaman bir çözüm vardır ve böylece çoğu zaman işini ve gelirini korursun.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.reachable': "Telefonu aç ya da aynı gün geri ara", // nieuw, nalezen // nagelezen AI 22 nov
    'c.reachable.b': "Ajanslar ve işverenler iş olduğunda sık sık arar. Çoğu zaman işi, telefonu ilk açan ya da ilk geri arayan kişi alır. Bir aramayı mı kaçırdın? Aynı gün geri ara. İşte telefonun yanında değil mi? Molanda geri ara. Sesli mesajlarını dinle ve telefonunda biraz kontör (beltegoed) bulundur. Telefonda anlamak zor mu? Bunu söyle ve sor: “Kunt u het ook appen?” Biri para veya kod mu istiyor? Telefonu kapat (daha fazlası “Dolandırıcılığa dikkat” dersinde). Yeni bir numara mı? Numaranı işyerine, ajansa ve belediyeye (gemeente) bildir.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.reachable.p': "Sizi molamda geri arayacağım.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.reachable.s': "Molanda ajanstan gelen bir cevapsız arama görüyorsun. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.reachable.o1': "Şimdi, molanda geri ararsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.reachable.o2': "Seni tekrar aramalarını beklersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.reachable.o3': "Gelecek hafta, boş olduğunda geri ararsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.reachable.w': "Ajanslar iş olduğunda sık sık arar. Aynı gün geri ararsan işi istediğini gösterirsin ve belki işi sen alırsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'u.feedback': "Geri bildirim ve ekip toplantısı", // nieuw, nalezen
    'l.getfeedback': "Geri bildirim almak", // nieuw, nalezen
    'w.tip': "ipucu (kısa bir tavsiye)", // nieuw, nalezen
    'w.verbeterpunt': "geliştirilecek nokta (daha iyi olabilecek şey)", // nieuw, nalezen
    'w.goedbedoeld': "iyi niyetle söylenmiş (sana yardım etmek için)", // nieuw, nalezen
    'w.kritiek': "eleştiri (birinin iyi bulmadığı şey)", // nieuw, nalezen
    'w.normaal': "normal", // nieuw, nalezen
    'w.positief': "olumlu (iyi giden şey hakkında)", // nieuw, nalezen
    's.getfeedback.1': "Teşekkürler, bunu bilmek iyi oldu.", // nieuw, nalezen
    's.getfeedback.2': "Bir örnek verebilir misin?", // nieuw, nalezen
    's.getfeedback.3': "Neyi daha iyi yapabilirim?", // nieuw, nalezen
    'd.getfeedback.q': "Sana biraz geri bildirim verebilir miyim?", // nieuw, nalezen
    'd.getfeedback.a': "Evet, lütfen. İşimi iyi yapmak istiyorum.", // nieuw, nalezen
    'l.givefeedback': "Geri bildirim vermek", // nieuw, nalezen
    'w.dichtplakken': "bantla kapatmak", // nieuw, nalezen
    'w.netjes': "düzgün, derli toplu", // nieuw, nalezen
    'w.scheef': "eğri, düz değil", // nieuw, nalezen
    'w.vriendelijk': "nazik, güler yüzlü", // nieuw, nalezen
    'w.concreet': "somut (açık bir örnekle)", // nieuw, nalezen
    'w.ondervierogen': "baş başa (sadece ikiniz)", // nieuw, nalezen
    's.givefeedback.1': "Bunu iyi yapıyorsun.", // nieuw, nalezen
    's.givefeedback.2': "Kutuları da bantla kapatabilir misin?", // nieuw, nalezen
    's.givefeedback.3': "Kutuların eğri durduğunu görüyorum.", // nieuw, nalezen
    'd.givefeedback.q': "İşimi nasıl buluyorsun?", // nieuw, nalezen
    'd.givefeedback.a': "Düzgün! Sadece kutular eğri duruyor.", // nieuw, nalezen
    'l.meeting': "Ekip toplantısında söz almak", // nieuw, nalezen
    'w.werkoverleg': "ekip toplantısı (iş hakkında)", // nieuw, nalezen
    'w.beurt': "sıra (konuşma sırası)", // nieuw, nalezen
    'w.idee': "fikir", // nieuw, nalezen
    'w.mening': "görüş (o konuda ne düşündüğün)", // nieuw, nalezen
    'w.handopsteken': "elini kaldırmak", // nieuw, nalezen
    'w.agenda': "gündem (toplantıdaki konuların listesi)", // nieuw, nalezen
    's.meeting.1': "Bir şey söyleyebilir miyim?", // nieuw, nalezen
    's.meeting.2': "Çalışma planıyla ilgili bir sorum var.", // nieuw, nalezen
    's.meeting.3': "Bir fikrim var.", // nieuw, nalezen
    'd.meeting.q': "Başka sorusu olan var mı?", // nieuw, nalezen
    'd.meeting.a': "Evet. Yeni çalışma planı ne zaman gelecek?", // nieuw, nalezen
    'c.getfeedback': "Geri bildirim işinle ilgilidir", // nieuw, nalezen // nagelezen AI 22 nov
    'c.getfeedback.b': "Geri bildirim, birinin işin hakkında söylediğidir: neyin iyi gittiği ve neyin daha iyi olabileceği. Bu senin işinle ilgilidir, seninle değil. Burada iş yerinde geri bildirim normaldir ve yardım etmek içindir. Neyi farklı yapacağın açık değil mi? Bir örnek iste. Önce dinle ve hemen kendini savunma. Sonra teşekkür et ve dene. Sen de geri bildirim isteyebilirsin: “Wat kan ik beter doen?”", // nieuw, nalezen // nagelezen AI 22 nov
    'c.getfeedback.p': "Teşekkürler. Bir örnek verebilir misin?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.getfeedback.s': "Amirin işine bakıyor ve diyor ki: “Dit kan beter.” Ne demek istediğini bilmiyorsun. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.getfeedback.o1': "Teşekkür eder ve bir örnek istersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.getfeedback.o2': "Gerçekten elinden geleni yaptığını söylersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.getfeedback.o3': "Başını sallar ve yine aynı şekilde yaparsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.getfeedback.w': "Geri bildirim sana yardım etmek içindir. Bir örnek, onun ne istediğini gösterir. Bir “teşekkürler” de dinlediğini gösterir.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.givefeedback': "Geri bildirim vermek: önce iyi olan", // nieuw, nalezen // nagelezen AI 22 nov
    'c.givefeedback.b': "Bir iş arkadaşının işi hakkında bir şey mi söylemek istiyorsun? Önce neyin iyi gittiğini söyle. Sonra neyin daha iyi olabileceğini nazikçe ve açıkça, bir örnekle söyle. Bunu uygun bir anda, sadece o kişiye söyle, herkes oradayken değil. Kişi hakkında ne düşündüğünü değil, ne gördüğünü söyle: “Ik zie dat ...”. Nazik kal: yardım etmek istiyorsun, kazanmak değil.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.givefeedback.p': "Bunu iyi yapıyorsun. Kutuları da bantla kapatabilir misin?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.givefeedback.s': "Yeni bir iş arkadaşı kutuları bantlamayı unutuyor. Hepiniz yemekhanedesiniz. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.givefeedback.o1': "Sonra, baş başayken: önce iyi giden şey, sonra kutular.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.givefeedback.o2': "Herkesin önünde ona yanlış yaptığını söylersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.givefeedback.o3': "Hiçbir şey söylemez ve onun kutularını kendin bantlarsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.givefeedback.w': "Baş başayken utanmadan dinleyebilir. Önce neyin iyi gittiğini söylersen, gerisini daha iyi duyar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.meeting': "Toplantıda senin sesin de önemli", // nieuw, nalezen // nagelezen AI 22 nov
    'c.meeting.b': "Birçok ekip, iş hakkında kısa bir toplantı yapar (het werkoverleg). Orada senin görüşün de önemlidir, Hollandacan mükemmel olmasa bile. Bir soru da iyi bir katkıdır: belki başkaları da bunu bilmek istiyordur. Sıranı bekle ve karşındakinin sözünü bitirmesine izin ver. Sonra elini kaldır ya da şöyle de: “Mag ik iets zeggen?” Bunu grupta söylemeye cesaret edemiyor musun? Toplantıdan sonra amirine söyle.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.meeting.p': "Bir şey söyleyebilir miyim? Bir fikrim var.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.meeting.s': "Ekip toplantısında amirin yeni çalışma planını anlatıyor. Vardiyanın ne zaman başladığını anlamıyorsun. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.meeting.o1': "O konuşmayı bitirince sorunu sorarsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.meeting.o2': "Zaman kaybetmemek için hiçbir şey söylemezsin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.meeting.o3': "O hâlâ konuşurken hemen sorarsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.meeting.w': "Bir soru iyi bir katkıdır: belki başkaları da anlamamıştır. Sıranı beklersen herkes onu duyabilir.", // nieuw, nalezen // nagelezen AI 22 nov
    // Logistiek at four lessons per unit (14 November 2026).
    'c.picking': "Ürün eksik mi? Söyle", // nieuw, nalezen // nagelezen AI 22 nov
    'c.picking.b': "Göz boş mu, ya da ürün yerinde yok mu? Aynı görünen başka bir ürünü alma: o zaman müşteri yanlış şeyi alır. Bunu ekip liderine söyle ya da barkod okuyucuda bildir. Etiketteki numarayı kontrol et, sadece rengi ya da resmi değil. Doğru çalışmak, hızlı çalışmaktan daha önemlidir.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.picking.p': "Bu ürün eksik. Ne yapmalıyım?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.picking.s': "Göz boş. Yanındaki gözde neredeyse aynı görünen bir ürün var. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.picking.o1': "Ürünün eksik olduğunu bildirirsin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.picking.o2': "Diğer ürünü alırsın: aynı görünüyor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.picking.o3': "Ürünü atlar ve hiçbir şey söylemezsin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.picking.w': "Yanlış ürün geri gelir ve bu, sormaktan daha çok zaman alır. Bildirdiğinde biri gözü doldurabilir ya da siparişi değiştirebilir.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.loading': "Geri giden kamyonun arkasına asla geçme", // nieuw, nalezen // nagelezen AI 22 nov
    'c.loading.b': "Şoför kamyonun arkasındaki her şeyi göremez. Geri giden bir kamyonun arkasından asla yürüme ve kamyonla kapının arasında durma. Kamyon durana ve şoför seni görene kadar bekle. İndirirken bir palet eksik ya da hasarlı mı? Şoför gitmeden önce söyle.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.loading.p': "Biraz bekle. Kamyon geri gidiyor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.loading.s': "Bir kamyon kapıya doğru geri geri geliyor. Arkasından hızlıca karşıya geçmek istiyorsun. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.loading.o1': "Kamyon durana kadar beklersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.loading.o2': "Arkasından koşarsın: yeterince hızlısın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.loading.o3': "Arkasından yürür ve şoföre el sallarsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.loading.w': "Kamyonun arkası, şoförün göremediği bir yerdir. Beklemek bir dakikanı alır. Orada bir kaza çok ciddidir.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Hulp vragen" at four lessons (14 November 2026).
    'c.howto': "Doğru yaptığını kontrol et", // nieuw, nalezen // nagelezen AI 22 nov
    'c.howto.b': "Bir işin nasıl yapılacağından emin değil misin? Nasıl yapıldığını sor ya da bir iş arkadaşından işine kısaca bakmasını iste. Burada kontrol etmek normaldir, bir hafta ya da bir ay sonra bile. Tahmin etmek sormaktan daha çok zaman alır: hatalı iş yeniden yapılmalıdır. “Doe ik het zo goed?” iş arkadaşlarının duymayı sevdiği bir sorudur.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.howto.p': "Doğru mu diye bir bakar mısın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.howto.s': "Yeni bir iş yapıyorsun. Doğru yaptığından emin değilsin. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.howto.o1': "Bir iş arkadaşından bakmasını istersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.howto.o2': "Devam edersin: belki doğrudur.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.howto.o3': "Durur ve biri gelene kadar beklersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.howto.w': "Bir iş arkadaşının kısa bir bakışı sonradan çok işten kurtarır. Ve işi daha hızlı öğrenirsin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mayask': "Sormak için doğru zaman", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mayask.b': "Konu güvenlik mi, ya da şu anda bir şey ters gidebilir mi? Hemen sor, iş arkadaşın meşgul olsa bile. Acil değil mi? İş arkadaşın işini bitirene kadar bekle ve sonra sor: “Heb je even tijd?” Soracağın birçok küçük şey mi var? Bunları yaz ve hepsini birlikte sor. Kimse bir soruyu can sıkıcı bulmaz. Bir hata daha çok zaman alır.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mayask.p': "Pardon, rahatsız ediyorum. Biraz vaktin var mı?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mayask.s': "İş arkadaşın telefonda konuşuyor. Acil olmayan bir şey sormak istiyorsun. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mayask.o1': "Görüşme bitene kadar bekler, sonra sorarsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mayask.o2': "Şimdi sorarsın: soru sormak her zaman iyidir.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mayask.o3': "Sormazsın: iş arkadaşın meşgul.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mayask.w': "Biraz beklemek saygı gösterir ve cevabını yine de alırsın. Sadece tehlike bekleyemez.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.whereis': "Kayboldun mu? Sor yeter", // nieuw, nalezen // nagelezen AI 22 nov
    'c.whereis.b': "Yeni bir iş yeri büyüktür ve birçok kapı birbirine benzer. Kimse bir günde her şeyi bulmanı beklemez. Bir odayı, bir aleti ya da birini bulamıyor musun? Gördüğün ilk iş arkadaşına sor. Birçok iş arkadaşı seninle birlikte yürür ya da yolu gösterir. Çıkışların nerede olduğunu biliyor musun? İlk gününde sor: bu senin güvenliğin için.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.whereis.p': "Yolumu kaybettim. Yemekhane nerede?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.whereis.s': "İkinci günün. Soyunma odasını bulamıyorsun ve vardiyan beş dakika sonra başlıyor. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.whereis.o1': "Gördüğün ilk iş arkadaşına sorarsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.whereis.o2': "Aramaya devam edersin: tekrar sormak utanç verici.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.whereis.o3': "Kendi kıyafetlerinle işe başlarsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.whereis.w': "Sormak on saniye sürer. Tek başına aramak geç kalmana neden olabilir. İş arkadaşları yeni bir yerde yol bulmanın zor olduğunu bilir.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Tijd en rooster" and "Als het misgaat" at four lessons (23 November 2026): the tips of l.roster, l.breaks, l.wound and l.callhelp.
    'c.wound': "Yanık mı? Suyla soğut", // nieuw, nalezen
    'c.wound.b': "Küçük bir kesik: temiz bir bez ya da sargıyla üzerine bastır ve ilk yardım görevlisine söyle. Bir yanık: hemen ılık akan suyla, en az 10 dakika soğut. Gözüne bir şey mi kaçtı? Suyla ya da göz duşunda yıka. Ciddi mi? 112’yi ara. İlk gününde ilk yardım çantasının ve göz duşunun nerede olduğunu sor.", // nieuw, nalezen
    'c.wound.p': "Kendimi yaktım. Musluk nerede?", // nieuw, nalezen
    'c.wound.s': "Bir iş arkadaşın elini sıcak bir makinede yakıyor. Ne yaparsın?", // nieuw, nalezen
    'c.wound.o1': "Ilık akan suyla soğutursun.", // nieuw, nalezen
    'c.wound.o2': "Hemen üzerine tereyağı ya da krem sürersin.", // nieuw, nalezen
    'c.wound.o3': "Doğrudan cilde buz koyar ve beklersin.", // nieuw, nalezen
    'c.wound.w': "Su ısıyı ciltten çeker, böylece yanık daha az derin olur. Buz, tereyağı ve krem durumu kötüleştirebilir.", // nieuw, nalezen
    'c.callhelp': "112’yi aramak: önce nerede olduğunu söyle", // nieuw, nalezen
    'c.callhelp.b': "Bir hayat tehlikedeyse ya da her dakika önemliyse 112’yi ara. Önce nerede olduğunu söyle: sokak, numara ve şehir. Sonra ne olduğunu söyle. Hatta kal ve soruları cevapla. Bir iş arkadaşından ambulansı girişte beklemesini iste. İş yerinin adresini bilmiyor musun? Bugün öğren.", // nieuw, nalezen
    'c.callhelp.p': "112’yi arıyorum. Ambulansı bekler misin?", // nieuw, nalezen
    'c.callhelp.s': "112’yi arıyorsun. Operatör çok soru soruyor, ama sen iş arkadaşına yardım etmek istiyorsun. Ne yaparsın?", // nieuw, nalezen
    'c.callhelp.o1': "Hatta kalır ve cevap verirsin.", // nieuw, nalezen
    'c.callhelp.o2': "Telefonu kapatır ve iş arkadaşına gidersin.", // nieuw, nalezen
    'c.callhelp.o3': "\"Çabuk gelin\" der ve kapatırsın.", // nieuw, nalezen
    'c.callhelp.w': "Operatör sen konuşurken yardım gönderir ve sana ne yapacağını söyler. Çok erken kapatırsan yardım yanlış yere gidebilir.", // nieuw, nalezen
    'c.roster': "Çalışma planına her gün bak", // nieuw, nalezen
    'c.roster.b': "Çalışma planı değişebilir, son anda bile. Ona her gün bak, uygulamada ya da panoda. Bir değişiklik mi görüyorsun? Gelebileceğini kontrol et. Bir gün çalışamıyor musun? Bunu erken söyle, o gün değil. Bir vardiyayı değiştirmek mi istiyorsun? Önce amirine sor: birçok şirketin bunun için bir kuralı vardır. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.roster.p': "Cumartesi çalışamam. Değiştirebilir miyim?", // nieuw, nalezen
    'c.roster.s': "Çalışma planın değişti. Şimdi cumartesi çalışman gerekiyor, ama çalışamazsın. Ne yaparsın?", // nieuw, nalezen
    'c.roster.o1': "Bugün amirine söyler ve vardiyayı değiştirmeyi istersin.", // nieuw, nalezen
    'c.roster.o2': "Hiçbir şey söylemez ve cumartesi evde kalırsın.", // nieuw, nalezen
    'c.roster.o3': "Bir iş arkadaşından gitmesini ister ve kimseye söylemezsin.", // nieuw, nalezen
    'c.roster.w': "Erken söylersen amirin başka birini bulabilir. Haber vermeden gelmemek çok ciddi bir şey olarak görülür.", // nieuw, nalezen
    'c.breaks': "Saatlerini not et", // nieuw, nalezen
    'c.breaks.b': "Her gün ne zaman başladığını, ne zaman bitirdiğini ve molanın ne kadar sürdüğünü not et. Maaşın doğru olmadığında kendi listen yardımcı olur. Erken çıkman mı gerekiyor, örneğin doktor için? Amirine zamanında sor. Planlanandan daha uzun mu çalıştın? Bunu da not et. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.breaks.p': "Yarın doktora gitmem gerekiyor. Erken çıkabilir miyim?", // nieuw, nalezen
    'c.breaks.s': "Yarın saat üçte doktora gitmen gerekiyor. Vardiyan beşte bitiyor. Ne yaparsın?", // nieuw, nalezen
    'c.breaks.o1': "Bugün amirine erken çıkıp çıkamayacağını sorarsın.", // nieuw, nalezen
    'c.breaks.o2': "Üçte çıkar ve ertesi gün açıklarsın.", // nieuw, nalezen
    'c.breaks.o3': "Doktora gitmez ve vardiyanı bitirirsin.", // nieuw, nalezen
    'c.breaks.w': "Zamanında sormak, amirinin işi planlamasını sağlar. Sormadan çıkmak güvenilmezlik olarak görülür.", // nieuw, nalezen
    // eight new lessons (26 November 2026).
    'c.firstweeks': "Tekrar sor: bu normal", // nieuw, nalezen
    'c.firstweeks.b': "İlk haftalarında kimse senden her şeyi bilmeni beklemez. Çoğu zaman bir tanıtım turu (rondleiding) olur ve sana yol gösteren bir iş arkadaşın olur. Önce izle, sonra iş arkadaşın izlerken kendin yap. Bir şeyi mi unuttun? Tekrar sor: \"Wil je het nog een keer laten zien?\" Bu, tahmin etmekten daha iyidir. Yeni kelimeleri ve adımları küçük bir not defterine yaz. Bazı sözleşmeler bir deneme süresiyle (proeftijd) başlar: o sürede sen ya da işverenin işi hızla bitirebilir. Sözleşmende deneme süresi olup olmadığını sor. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.firstweeks.p': "Unuttum. Bir kez daha gösterir misin?", // nieuw, nalezen
    'c.firstweeks.s': "Dün iş arkadaşın sana makineyi nasıl çalıştıracağını gösterdi. Bugün üçüncü adımı hatırlamıyorsun. Ne yaparsın?", // nieuw, nalezen
    'c.firstweeks.o1': "İş arkadaşından bir kez daha göstermesini istersin.", // nieuw, nalezen
    'c.firstweeks.o2': "Tahmin eder ve denersin.", // nieuw, nalezen
    'c.firstweeks.o3': "Başka biri çalıştırana kadar beklersin.", // nieuw, nalezen
    'c.firstweeks.w': "İlk haftalarda tekrar sormak normaldir. Bir makinede tahminle iş yapmak tehlikeli olabilir ve daha çok zaman alır.", // nieuw, nalezen
    'c.orderpick': "Yaya yolunda yürü", // nieuw, nalezen
    'c.orderpick.b': "Büyük bir depoda siparişleri bir toplama listesi ve bir barkod okuyucuyla toplarsın: her ürünü okutursun, böylece doğru ürünler doğru müşteriye gider. Birçok sipariş toplayıcı, onları yukarı kaldıran küçük bir araç ya da yüksek raflar için bir reach truck kullanır. Bunları ancak eğitimini aldıysan kullan, çoğu zaman bir sertifikayla. Yaya yollarında yürü ve hareket eden araçlardan uzak dur: sürücü seni her zaman göremez. Soğuk odada ya da dondurucuda, işten aldığın sıcak kıyafetleri, eldivenleri ve şapkayı giy. Isınma molalarını kullan ve içeri girdiğinde birine haber ver. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.orderpick.p': "Biraz yemekhanede ısınmaya gidiyorum.", // nieuw, nalezen
    'c.orderpick.s': "Diğer koridora gitmen gerekiyor. Yaya yolu etrafından dolaşıyor; araçların arasından düz geçmek daha hızlı. Ne yaparsın?", // nieuw, nalezen
    'c.orderpick.o1': "Daha uzun olsa da yaya yolunu kullanırsın.", // nieuw, nalezen
    'c.orderpick.o2': "Araçların arasından hızla koşarak geçersin.", // nieuw, nalezen
    'c.orderpick.o3': "Yürüyerek geçer ve sürücülere el sallarsın.", // nieuw, nalezen
    'c.orderpick.w': "Bir araç sürücüsü seni çoğu zaman göremez, örneğin yüksek bir yükün arkasındayken. Yaya yolunda insanlar beklenir ve güvendedir.", // nieuw, nalezen
    // four new lessons (27 November 2026).
    'l.appraisal': "Performans görüşmesi", // nieuw, nalezen
    'w.functioneringsgesprek': "performans görüşmesi (amirinle işinin nasıl gittiği ve ne öğrenmek istediğin hakkında bir konuşma)", // nieuw, nalezen
    'w.beoordelingsgesprek': "değerlendirme görüşmesi (amirinin işin hakkında bir karar verdiği bir konuşma)", // nieuw, nalezen
    'w.voorbereiden': "hazırlamak (bir şeye hazırlanmak)", // nieuw, nalezen
    'w.goedgaan': "iyi gitmek", // nieuw, nalezen
    'w.doel': "hedef (ulaşmak istediğin şey)", // nieuw, nalezen
    'w.voorgezien': "“görüldü” diye imzalamak (okuduğunu gösterir; kabul ettiğin anlamına gelmez)", // nieuw, nalezen
    's.appraisal.1': "Görüşmeye iyi hazırlanıyorum.", // nieuw, nalezen
    's.appraisal.2': "Yeni bir şey öğrenmek istiyorum.", // nieuw, nalezen
    's.appraisal.3': "Önce raporu okuyabilir miyim?", // nieuw, nalezen
    'd.appraisal.q': "Gelecek yıl için hedefin ne?", // nieuw, nalezen
    'd.appraisal.a': "Forklift sertifikamı almak istiyorum.", // nieuw, nalezen
    'c.appraisal': "Görüşmen: hazırlan, oku", // nieuw, nalezen
    'c.appraisal.b': "Birçok şirkette yılda bir ya da iki kez işin hakkında bir görüşme yapılır. Performans görüşmesinde (functioneringsgesprek) birlikte konuşursunuz: neyin iyi gittiği, neyin daha iyi olabileceği ve ne öğrenmek istediğin. Değerlendirme görüşmesinde (beoordelingsgesprek) amirin işin hakkında bir karar verir. Bu, maaşın ya da yeni bir sözleşme için önemli olabilir. Görüşmeye hazırlan: neyin iyi gittiğini, neyin zor olduğunu ve ne öğrenmek istediğini yaz. Bir kurs ya da eğitim isteyebilirsin. Sonunda anlaşmalar (afspraken) yaparsınız, çoğu zaman kısa bir raporda. İmzalamadan önce iyice oku ve bir kopya iste. Kabul etmiyor musun? “Voor akkoord” (kabul edildi) diye değil, “voor gezien” (görüldü) diye imzala ve kendi görüşünü yaz. Genel bilgi. Kendi durumun için işverenine, sendikaya veya Juridisch Loket’e sor.", // nieuw, nalezen
    'c.appraisal.p': "Görüldü diye imzalıyorum, kabul edildi diye değil.", // nieuw, nalezen
    'c.appraisal.s': "Değerlendirme görüşmenden sonra imzalaman için raporu alıyorsun. Sence içindeki bir nokta doğru değil. Ne yaparsın?", // nieuw, nalezen
    'c.appraisal.o1': "“Voor gezien” diye imzalar ve görüşünü yazarsın.", // nieuw, nalezen
    'c.appraisal.o2': "İş bitsin diye hızlıca “voor akkoord” diye imzalarsın.", // nieuw, nalezen
    'c.appraisal.o3': "Hiçbir şey söylemez ve hiç imzalamazsın.", // nieuw, nalezen
    'c.appraisal.w': "“Voor gezien”, okuduğun anlamına gelir, kabul ettiğin anlamına değil. Bunu söyleyip kendi görüşünü yazdığında amirin ne düşündüğünü bilir.", // nieuw, nalezen
  },
};

export default t;
