import type { CultureTranslation } from '../culture/types';

/** Learning mechanics (G4 r1): speaking without a microphone, picture choice, build feedback, and why a chat reply fits (src/content/chatWhy.ts). */
const t: CultureTranslation = {
  ui: {
    sayAloud: "Mikrofon gerekmez. Sesli söyle, sonra devam et.",
    micRetry: "Mikrofonu tekrar dene",
    micFailed: "Mikrofon çalışmadı. Sesli söyle, sonra devam et.",
    micRefused: "Uygulama mikrofonunu kullanamıyor. Mikrofonu açabilirsin.", // nieuw, nalezen
    micTurnOn: "Mikrofonu aç", // nieuw, nalezen
    micStepsIos: "Adres çubuğunda “•••” ya da “aA”ya dokun › Web Sitesi Ayarları › Mikrofon › İzin Ver. Ya da: Ayarlar › Uygulamalar › Safari › Mikrofon. Sonra aşağıdaki düğmeye dokun.", // nieuw, nalezen
    micStepsIosOther: "Web adresinin solundaki simgeye dokun › İzinler › Mikrofon › İzin ver. Ya da: Ayarlar › Uygulamalar › {app} › Mikrofon. Sonra aşağıdaki düğmeye dokun.", // nieuw, nalezen
    micStepsAndroid: "Web adresinin solundaki simgeye dokun › İzinler › Mikrofon › İzin ver. Sonra aşağıdaki düğmeye dokun.", // nieuw, nalezen
    micStepsAndroidApp: "Ana ekrandaki Vloertaal simgesine basılı tut › Uygulama bilgileri › İzinler › Mikrofon › İzin ver. Sonra aşağıdaki düğmeye dokun.", // nieuw, nalezen
    micStepsDesktop: "Web adresinin solundaki simgeye tıkla › Mikrofon › İzin ver. Sonra aşağıdaki düğmeye tıkla.", // nieuw, nalezen
    whichPicture: "Hangi resim?",
    sayAloudInstead: "Bunun yerine sesli söyle",
    wordsPractised: "Tekrar edilen kelimeler",
    reviewComplete: "Tekrar bitti!",
  },
  gloss: {
    'c.hello.a.why': "Vedalaşmaya vedayla karşılık verilir.",
    'c.people.a.why': "Soru bir isim soruyor. Bu cevap bir isim veriyor.",
    'c.arrive.a.why': "Soru neden gelindiğini soruyor. Bu cevap yeni olduğunu ve bugün başladığını söylüyor.",
    'c.understand.a.why': "Anlaşılmadı mı? Tekrar söylenmesini istemek normaldir.",
    'c.translate.a.why': "Not henüz anlaşılmadı, bu yüzden önce çevrilir.",
    'c.understood.a.why': "Görevi tekrar söylemek, sıranın doğru anlaşıldığını kontrol eder.", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.keeplearning.a.why': "Hollandaca konuşmayı istemek sorun değil: pratik yardımcı olur.",
    'c.gear.a.why': "Soru baretle ilgili: evet, takılı.",
    'c.danger.a.why': "Kazada önce 112 aranır.",
    'c.alarm.a.why': "Herkesin çıkıp çıkmadığı soruluyor: bu cevap kimin hâlâ eksik olduğunu söylüyor.", // nieuw, nalezen
    'c.accident.a.why': "Ne olduğu soruluyor: bu cevap ne olduğunu ve onun durumunu söylüyor.",
    'c.notyet.a.why': "“Bir dene” denince güvenli cevap, önce gösterilmesini istemektir.",
    'c.things.a.why': "Soru \"nereye\" diye soruyor. Bu cevap bir yer söylüyor.",
    'c.directions.a.why': "Sol mu sağ mı? Bu cevap birini seçip yerini söylüyor.",
    'c.shift.a.why': "Vardiya ne zaman başlıyor? Bu cevap günü ve saati söylüyor.",
    'c.sick.a.why': "Hasta olmak evde kalmak ve bunu haber vermek demektir.",
    'd.speakup.a.why': "Bir sorun olup olmadığı sorulunca dürüst bir \"evet\" iyidir.",
    'd.agree.a.why': "Hayır demek sorun değildir. Başka bir gün önermek yardımcı olur.",
    'd.task.a.why': "Bitip bitmediği soruluyor: bu cevap \"neredeyse\" diyor ve ne kadar süreceğini söylüyor.",
    'd.clear.a.why': "Anlaşılıp anlaşılmadığı soruluyor: önce \"evet\", sonra tek soru.", // nieuw, nalezen
    'c.cv.a.why': "Referans, işi anlatabilecek eski bir patrondur.",
    'c.interview.a.why': "İş görüşmesinde iş deneyimi önemlidir.",
    'c.findwork.a.why': "Soru ne tür iş olduğunu soruyor. Bu cevap onu söylüyor.",
    'c.contract.a.why': "\"Evet\" deyip saati sormak açık bir cevaptır ve istekli olduğunu gösterir.", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.agency.a.why': "Soru saatlerle ilgili: evet, ne zaman ve nasıl olduğunu da söylüyor.",
    'c.bsn.a.why': "İşveren pasaport gibi bir kimlik görmek isteyebilir.",
    'c.housing.a.why': "Maaştan kesilen para yazılı olarak kabul edilmelidir.",
    'c.payslip.a.why': "Maaş bordrosundaki eksik saatler bildirilmelidir.",
    'c.extra.a.why': "Fazla mesai yazılır, böylece maaş bordrosunda kontrol edilebilir.",
    'c.phone.a.why': "Makinelerin yanında telefon yok: mesajlar molayı bekler.",
    'c.smoking.a.why': "Molalar belirli saatlerdedir, daha önce değil.",
    'c.clock.a.why': "Başkası yerine giriş kaydı yapmak yasaktır.",
    'c.hygiene.a.why': "Bone takılı, takılar çıkarılmış: temiz gıda kuralları.",
    'c.smalltalk.a.why': "Soru hafta sonuyla ilgili: tek bir şey yeterli.",
    'c.mistakes.a.why': "İltifata teşekkürle karşılık verilir.",
    'c.respect.a.why': "Zorbalık anlatılmalı ki biri yardım edebilsin.",
    'c.gossip.a.why': "Dedikoduya katılmamak ekipte güveni korur.",
    'c.boundaries.a.why': "İncitici bir şaka açıkça durdurulabilir.",
    'c.health.a.why': "Mola sağlığı korur, bu yüzden verilir.",
    'c.rights.a.why': "İşten çıkarma asla hemen imzalanmaz. Önce danışılır.",
    'c.mustmay.a.why': "Gönüllü, seçebilirsin demek: cumartesi çalışmak gerekli değil.",
    'c.leave.a.why': "Ne zaman? Bu cevap bir ay ve süre veriyor.",
    'c.illness.a.why': "Tıbbi ayrıntılar patron için değil, işyeri hekimi içindir.",
    'c.warning.a.why': "İşveren pasaportun kopyasını alabilir, pasaportu tutamaz.",
    'c.gethelp.a.why': "Neyin yanlış olduğunu açıkça söylemek yardım etmelerini sağlar.",
    'c.callin.a.why': "Ne zaman döneceğin soruluyor: bu cevap bir gün veriyor.", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.texting.a.why': "Uygulamada hızlı cevap planlamaya yardımcı olur.",
    'c.certs.a.why': "Dürüst bir \"hayır\" ve öğrenme isteği: iyi bir cevap.",
    'c.diploma.a.why': "Eğitime \"evet\" demek ve kimin ödediğini sormak normaldir.",
    'c.doctor.a.why': "Nöbetçi aile hekimi kimin hasta olduğunu ve neyi olduğunu bilmeli.",
    'c.insurance.a.why': "Sigorta şirketinin adı sağlık sigortası kartında yazar.",
    'c.letters.a.why': "Vergi beyannamesi 1 Mayıs'a kadar verilir.",
    'c.scams.a.why': "Banka asla PIN sormaz. Telefonu kapatmak doğrudur.",
    'c.bike.a.why': "Nasıl? Bu cevap ulaşımı ve süreyi veriyor.",
    'c.transit.a.why': "Tren değil: bu cevap otobüsü söylüyor.",
    'c.ww.a.why': "İşsizlik maaşına (WW) hemen başvurulmalıdır.",
    'c.newjob.a.why': "Telefon numarası geri aramalarını sağlar.",
    'c.tools.a.why': "Nerede? Bu cevap yeri veriyor: kamyonette.",
    'c.site.a.why': "Çatıda düşme koruması her zaman önce gelir.",
    'c.line.a.why': "Nasıl gidiyor? Bu cevap durumu söylüyor ve sorunu belirtiyor.",
    'c.quality.a.why': "Neden ayrı konmuş? Bu cevap kusuru söylüyor.",
    'c.client.a.why': "Bir danışan yardım istiyor: \"u\" ile kibar bir \"evet\".",
    'c.privacy.a.why': "İlaçlar eğitimli personel içindir: onları hemşire verir.",
    'c.kitchen.a.why': "Alerji ciddidir: şef bilmelidir.",
    'c.service.a.why': "Hesap istendi: kısa bir \"evet\" ve hemen gidilir.",
    'c.cleaning.a.why': "Bitti mi? Bu cevap \"neredeyse\" diyor ve kaç tane kaldığını söylüyor.",
    'c.cleansafe.a.why': "Islak zemin kaygandır: uyarı yardımcı olur.",
    'c.shelves.a.why': "Soru \"nerede\" diye soruyor. Bu cevap koridoru söylüyor ve yardım ediyor.",
    'c.checkout.a.why': "Kartla ödeme soruluyor: kısa ve nazik bir \"evet\".",
    'c.counting.a.why': "Kaç tane olduğu soruluyor: bu cevap sayıyı veriyor ve rakam rakam kontrol ediyor.", // nieuw, nalezen
    'c.hours.a.why': "Soru saati soruyor. Bu cevap bir saat söylüyor.",
    'c.measures.a.why': "Soru uzunluğu soruyor. Bu cevap bir uzunluk söylüyor.",
    'c.aihelp.a.why': "Kimin yazdığı soruluyor: yardımı da söyleyen dürüst bir “evet”.",
    'c.aiprivate.a.why': "Sohbet robotuna isim yazman isteniyor: bu cevap “hayır” diyor ve nedenini söylüyor.",
    'c.aifake.a.why': "Yeni bir numara para istiyor: bu cevap önce kontrol ediyor.",
    'c.aiplan.a.why': "Çalışma planını uygulama yaptı: bu cevap bir insan istiyor.",
    // In de kas (u.kas, 30 okt 2026): nagelezen (2e lezing).
    'c.harvest.a.why': "Kaç sıra diye soruluyor: bu cevap bir sayı ve kalanı veriyor.", // nagelezen (2e lezing)
    'c.greensafe.a.why': "Az önce ilaçlandı: bu cevap henüz değil diyor ve nedenini söylüyor.", // nagelezen (2e lezing)
    // nagelezen (2e lezing): why the chat replies of the new lessons fit (30 October 2026).
    'c.details.a.why': "Soyadı soruluyor: bu cevap onu veriyor ve harf harf söylemeyi öneriyor.",
    'c.dates.a.why': "Tarih soruluyor: bu cevap günü ve tarihi veriyor.",
    'c.permit.a.why': "Bir nedenle hayır demek sorun değil. Başka bir gün önermek yardımcı olur.",
    'c.kids.a.why': "Neden diye soruluyor: bu cevap nedeni veriyor, kreş aradı.",
    'c.body.a.why': "Neresinin ağrıdığı soruluyor: bu cevap yeri ve nedeni söylüyor.",
    'c.jobends.a.why': "Ev işe bağlı: bu cevap ihbar süresini soruyor.",
    // Entree in the Taal track (30 October 2026), why the chat replies fit: nieuw, nalezen.
    'c.workorder.a.why': "Bir kelime net değil: başlamadan önce sormak doğru cevap.", // nieuw, nalezen
    'c.handover.a.why': "Her şey bitti mi diye soruluyor: bu cevap neyin bitmediğini ve nedenini söylüyor.", // nieuw, nalezen
    'c.workshop.a.why': "Neden diye soruluyor: bu cevap nedeni veriyor, gözler korunmalı.", // nieuw, nalezen
    'c.power.a.why': "Lambayla ilgili bir iş: bu cevap önce elektriğin kesik olup olmadığını soruyor.", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.garage.a.why': "Lastik değiştirmesi isteniyor: bir evet ve lastiklerin nerede olduğuna dair bir soru.", // nieuw, nalezen
    'c.carjob.a.why': "Ek iş: müşteri önce onay vermeli, bu yüzden bu cevap şefe soruyor.", // nieuw, nalezen
    'c.placement.a.why': "Ne zaman diye soruluyor: bu cevap günü veriyor, önce de sözleşme geliyor.", // nieuw, nalezen
    'c.review.a.why': "Geri bildirim henüz net değil: göstermelerini istemek iyi bir cevap.", // nieuw, nalezen
    'c.council.a.why': "Oy vermek soruluyor: bir evet ve götürülecek iki şey.", // nieuw, nalezen
    'c.police.a.why': "Polis kimlik istiyor: göster ve ne olduğunu sor.", // nieuw, nalezen
    'c.login.a.why': "Giriş yapılabiliyor mu diye soruluyor: bu cevap hayır diyor ve nedenini söylüyor.", // nieuw, nalezen
    'c.phish.a.why': "Bağlantı soruluyor: dürüst bir evet ve bilgi işleme bir telefon.", // nieuw, nalezen
    'c.mychoice.a.why': "Güçlü yönler soruluyor: bu cevap bir tanesini örnekle söylüyor.", // nieuw, nalezen
    'c.nextstep.a.why': "Plan soruluyor: bu cevap bbl’yi ve ne anlama geldiğini söylüyor.", // nieuw, nalezen
    'c.email.a.why': "Gönderildi mi diye soruluyor: daha değil, önce kontrol ediliyor.", // nieuw, nalezen
    'c.budget.a.why': "Sonra ödeme teklif ediliyor: kibar bir hayır, nedeniyle birlikte.", // nieuw, nalezen
    'c.healthy.a.why': "Hap teklif ediliyor: kibar bir hayır, nedeniyle birlikte.", // nieuw, nalezen
    'd.newcolleague.a.why': "\"Sanırım\" henüz emin olmak değil: göstermesini istemek, işin doğru olup olmadığını kontrol eder.", // nieuw, nalezen
    'c.food.a.why': "Bandın neden temizlendiği soruluyor: sıradaki üründe kuruyemiş yok.", // nieuw, nalezen
    'c.parcel.a.why': "Paketin onun mu olduğu soruluyor: evet, sonra da imza.", // nieuw, nalezen
    'c.road.a.why': "Bir sefer daha isteniyor: hayır, çünkü önce mola gelir.", // nieuw, nalezen
    'c.backtowork.a.why': "Nasıl olduğun soruluyor: kısa bir evet, bir de işi yavaş aldığın.", // nieuw, nalezen
    'c.feelwell.a.why': "Nasıl olduğun soruluyor: dürüst bir \"pek iyi değil\" sorun değil.", // nieuw, nalezen
    'c.measure.a.why': "Genişlik soruluyor: birimiyle bir sayı, bir de not almak.", // nieuw, nalezen
    'c.siteday.a.why': "Tahtaların nereye gideceği soruluyor: bir yer, bir de o yerin nerede olduğu.", // nieuw, nalezen
    'c.shifts.a.why': "Ne olduğu soruluyor: evet, ne olduğu ve ne kadar sürdüğü.", // nieuw, nalezen
    'c.signals.a.why': "Nasıl olduğu soruluyor: ne gördüğün, bir de bunun yeni olduğu.", // nieuw, nalezen
    'c.transfer.a.why': "Bir insanı kaldırman isteniyor: tek başına değil, önce kaldırma lifti.", // nieuw, nalezen
    'c.dishes.a.why': "Temiz bardak soruluyor: evet, bir de ne zaman geleceği.", // nieuw, nalezen
    'c.rush.a.why': "Şef bir iş söylüyor: tekrar ediyorsun, böylece duyduğunu bilir.", // nieuw, nalezen
    'c.rounds.a.why': "Ofisin yapılıp yapılmadığı soruluyor: hayır, sebebiyle birlikte.", // nieuw, nalezen
    'c.colours.a.why': "Bir bez soruluyor: hayır, çünkü kırmızı tuvalet içindir.", // nieuw, nalezen
    'c.shophelp.a.why': "Süt soruluyor: \"hayır\" değil, depoya bakmak.", // nieuw, nalezen
    'c.shoptrouble.a.why': "Kızgın bir müşteri: sakin sözler, bir de bir iş arkadaşı geliyor.", // nieuw, nalezen
    'c.plantcare.a.why': "Hangilerini toplayacağın soruluyor: renk, neyin olgun olduğunu söyler.", // nieuw, nalezen
    'c.outdoors.a.why': "Fırtına geliyor: durmak ve içeri girmek güvenli seçimdir.", // nieuw, nalezen
    'c.drawing.a.why': "Uyup uymadığı soruluyor: hayır, zorlamadan önce yeniden ölçmek.", // nieuw, nalezen
    'c.weld.a.why': "Almak için izin isteniyor: henüz değil, sıcak metal önce soğumalı.", // nieuw, nalezen
    'c.carparts.a.why': "Ne duyduğun soruluyor: hangi parça ve ne yaptığı.", // nieuw, nalezen
    'c.carsafe.a.why': "İşe başlamak için izin isteniyor: henüz değil, çünkü araba elektrikli.", // nieuw, nalezen
    // u.communicate en u.feedback (5 november 2026).
    'd.explain.a.why': "Sorunun ne olduğu soruluyor: bu cevap ne olduğunu ve neye ihtiyaç olduğunu söylüyor.", // nieuw, nalezen
    'd.listen.a.why': "Şaka olup olmadığından emin değilsin: sormak, tahmin etmekten iyidir.", // nieuw, nalezen
    'd.calm.a.why': "Neden bitmediği soruluyor: sakin bir sebep, bir de önce ne yapılacağı.", // nieuw, nalezen
    'd.talkintime.a.why': "Biri biraz zaman istiyor: bir evet, bir de anlatabilmesi için bir soru.", // nieuw, nalezen
    'd.reachable.a.why': "Cevapsız bir aramadan sonra geri arıyorsun: bir selam, bir de neden aradığın.", // nieuw, nalezen
    'd.getfeedback.a.why': "Geri bildirim teklif ediliyor: bir evet, bir de işi iyi yapmak istediğin.", // nieuw, nalezen
    'd.givefeedback.a.why': "İş hakkında soruluyor: önce iyi olan, sonra daha iyi olabilecek şey.", // nieuw, nalezen
    'd.meeting.a.why': "Soru olup olmadığı soruluyor: bu cevap çalışma planı hakkında bir soru soruyor.", // nieuw, nalezen
    // Logistiek at four lessons per unit (14 November 2026).
    'c.picking.a.why': "Hangi konum olduğu soruluyor: bu cevap koridoru ve gözü söylüyor.", // nieuw, nalezen
    'c.loading.a.why': "Paletin hazır olup olmadığı soruluyor: bu cevap “hayır” diyor ve daha ne gerektiğini söylüyor.", // nieuw, nalezen
    'c.vancheck.a.why': "Kamyonetin iyi olup olmadığı soruluyor: bu cevap “hayır” diyor ve neyin kırık olduğunu söylüyor.", // nieuw, nalezen
    'c.delay.a.why': "Nerede olduğun soruluyor: bu cevap yeri ve ne kadar geç kalacağını söylüyor.", // nieuw, nalezen
    // "Hulp vragen" at four lessons (14 November 2026).
    'c.howto.a.why': "Nasıl yapıldığının bilinip bilinmediği soruluyor: bu cevap dürüstçe \"hayır, henüz değil\" diyor.", // nieuw, nalezen
    'c.mayask.a.why': "Bir soru olup olmadığı soruluyor: bu cevap \"evet\" diyor ve önce vakit olup olmadığını soruyor.", // nieuw, nalezen
    'c.whereis.a.why': "Bulunup bulunamadığı soruluyor: bu cevap \"hayır\" diyor ve gösterilmesini istiyor.", // nieuw, nalezen
    // "Instructies", a new basis unit (u.do, 14 November 2026).
    'c.putdown.a.why': "Bir şeyi tutması isteniyor: evet, ve nereye koyacağını soruyor.", // nieuw, nalezen
    'c.onoff.a.why': "Kapının kapalı olup olmadığı soruluyor: hayır, ve şimdi kapatıyor.", // nieuw, nalezen
    'c.fillempty.a.why': "Dolu olup olmadığı soruluyor: evet, ve boşaltıyor.", // nieuw, nalezen
    'c.order.a.why': "Şimdi yapması isteniyor: evet, ve sonra ne geldiğini soruyor.", // nieuw, nalezen
  },
};

export default t;
