import type { CultureTranslation } from '../culture/types';

/** Learning mechanics (G4 r1): speaking without a microphone, picture choice, build feedback, and why a chat reply fits (src/content/chatWhy.ts). */
const t: CultureTranslation = {
  ui: {
    sayAloud: "Mikrofon gerekmez. Sesli söyle, sonra devam et.",
    micRetry: "Mikrofonu tekrar dene",
    micFailed: "Mikrofon çalışmadı. Sesli söyle, sonra devam et.",
    micRefused: "Uygulama mikrofonunu kullanamıyor. Mikrofonu açabilirsin.", // nieuw, nalezen // nagelezen AI 28 nov
    micTurnOn: "Mikrofonu aç", // nieuw, nalezen // nagelezen AI 28 nov
    micStepsIos: "Adres çubuğunda “•••” ya da “aA”ya dokun › Web Sitesi Ayarları › Mikrofon › İzin Ver. Ya da: Ayarlar › Uygulamalar › Safari › Mikrofon. Sonra aşağıdaki düğmeye dokun.", // nieuw, nalezen // nagelezen AI 28 nov
    micStepsIosOther: "Web adresinin solundaki simgeye dokun › İzinler › Mikrofon › İzin ver. Ya da: Ayarlar › Uygulamalar › {app} › Mikrofon. Sonra aşağıdaki düğmeye dokun.", // nieuw, nalezen // nagelezen AI 28 nov
    micStepsAndroid: "Web adresinin solundaki simgeye dokun › İzinler › Mikrofon › İzin ver. Sonra aşağıdaki düğmeye dokun.", // nieuw, nalezen // nagelezen AI 28 nov
    micStepsAndroidApp: "Ana ekrandaki Vloertaal simgesine basılı tut › Uygulama bilgileri › İzinler › Mikrofon › İzin ver. Sonra aşağıdaki düğmeye dokun.", // nieuw, nalezen // nagelezen AI 28 nov
    micStepsDesktop: "Web adresinin solundaki simgeye tıkla › Mikrofon › İzin ver. Sonra aşağıdaki düğmeye tıkla.", // nieuw, nalezen // nagelezen AI 28 nov
    whichPicture: "Hangi resim?",
    sayAloudInstead: "Bunun yerine sesli söyle",
    wordsPractised: "Tekrar edilen kelimeler",
    reviewComplete: "Tekrar bitti!",
  },
  gloss: {
    'c.hello.a.why': "Vedalaşmaya vedayla karşılık verilir.",
    'c.people.a.why': "Soru bir isim soruyor. Bu cevap bir isim veriyor.",
    'c.arrive.a.why': "Soru neden gelindiğini soruyor: bu cevap yeni olduğunu ve bugün başladığını söylüyor.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.understand.a.why': "Anlaşılmadı mı? Tekrar söylenmesini istemek normaldir.",
    'c.translate.a.why': "Not henüz anlaşılmadı, bu yüzden önce çevrilir.",
    'c.understood.a.why': "Görevi tekrar söylemek, sıranın doğru anlaşıldığını kontrol eder.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.keeplearning.a.why': "Hollandaca konuşmayı istemek sorun değil: pratik yardımcı olur.",
    'c.gear.a.why': "Soru baretle ilgili: evet, takılı.",
    'c.danger.a.why': "Kazada önce 112 aranır.",
    'c.alarm.a.why': "Herkesin çıkıp çıkmadığı soruluyor: bu cevap kimin hâlâ eksik olduğunu söylüyor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.accident.a.why': "Ne olduğu soruluyor: bu cevap ne olduğunu ve onun durumunu söylüyor.",
    'c.notyet.a.why': "“Bir dene” denince güvenli cevap, önce gösterilmesini istemektir.",
    'c.things.a.why': "Soru \"nereye\" diye soruyor. Bu cevap bir yer söylüyor.",
    'c.directions.a.why': "Sol mu sağ mı? Bu cevap birini seçip yerini söylüyor.",
    'c.shift.a.why': "Vardiya ne zaman başlıyor? Bu cevap günü ve saati söylüyor.",
    'c.sick.a.why': "Hasta olmak evde kalmak ve bunu haber vermek demektir.",
    'd.speakup.a.why': "Bir sorun olup olmadığı sorulunca dürüst bir \"evet\" iyidir.",
    'd.agree.a.why': "Hayır demek sorun değildir. Başka bir gün önermek yardımcı olur.",
    'd.task.a.why': "Bitip bitmediği soruluyor: bu cevap \"neredeyse\" diyor ve ne kadar süreceğini söylüyor.",
    'd.clear.a.why': "Anlaşılıp anlaşılmadığı soruluyor: önce \"evet\", sonra tek soru.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.cv.a.why': "Referans, işi anlatabilecek eski bir patrondur.",
    'c.interview.a.why': "İş görüşmesinde iş deneyimi önemlidir.",
    'c.findwork.a.why': "Soru ne tür iş olduğunu soruyor. Bu cevap onu söylüyor.",
    'c.contract.a.why': "\"Evet\" deyip saati sormak açık bir cevaptır ve istekli olduğunu gösterir.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
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
    'c.callin.a.why': "Ne zaman döneceğin soruluyor. Bu cevap bir gün veriyor.", // nieuw, nalezen (AI-correctie 28 nov 2026)
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
    'c.shelves.a.why': "Soru \"nerede\" diye soruyor: bu cevap koridoru söylüyor ve yardım ediyor.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.checkout.a.why': "Kartla ödeme soruluyor: kısa ve nazik bir \"evet\".",
    'c.counting.a.why': "Kaç tane olduğu soruluyor: bu cevap sayıyı veriyor ve rakam rakam kontrol ediyor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.hours.a.why': "Soru saati soruyor: bu cevap bir saat söylüyor.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.measures.a.why': "Soru uzunluğu soruyor: bu cevap bir uzunluk söylüyor.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.aihelp.a.why': "Kimin yazdığı soruluyor: yardımı da söyleyen dürüst bir “evet”.",
    'c.aiprivate.a.why': "Sohbet robotuna isim yazman isteniyor: bu cevap “hayır” diyor ve nedenini söylüyor.",
    'c.aifake.a.why': "Yeni bir numara para istiyor: bu cevap önce kontrol ediyor.",
    'c.aiplan.a.why': "Çalışma planını uygulama yaptı: bu cevap bir insan istiyor.",
    // In de kas (u.kas, 30 okt 2026): nagelezen (2e lezing).
    'c.harvest.a.why': "Kaç sıra diye soruluyor: bu cevap bir sayı ve kalanı veriyor.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.a.why': "Az önce ilaçlandı: bu cevap henüz değil diyor ve nedenini söylüyor.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    // nagelezen (2e lezing): why the chat replies of the new lessons fit (30 October 2026).
    'c.details.a.why': "Soyadı soruluyor: bu cevap onu veriyor ve harf harf söylemeyi öneriyor.", // nagelezen AI 22 nov
    'c.dates.a.why': "Tarih soruluyor: bu cevap günü ve tarihi veriyor.", // nagelezen AI 22 nov
    'c.permit.a.why': "Bir nedenle hayır demek sorun değil. Başka bir gün önermek yardımcı olur.", // nagelezen AI 22 nov
    'c.kids.a.why': "Neden diye soruluyor: bu cevap nedeni veriyor, kreş aradı.", // nagelezen AI 22 nov
    'c.body.a.why': "Neresinin ağrıdığı soruluyor: bu cevap yeri ve nedeni söylüyor.", // nagelezen AI 22 nov
    'c.jobends.a.why': "Ev işe bağlı: bu cevap ihbar süresini soruyor.", // nagelezen AI 22 nov
    // Entree in the Taal track (30 October 2026), why the chat replies fit: nieuw, nalezen.
    'c.workorder.a.why': "Bir kelime net değil: başlamadan önce sormak doğru cevap.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handover.a.why': "Her şey bitti mi diye soruluyor: bu cevap neyin bitmediğini ve nedenini söylüyor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.a.why': "Neden diye soruluyor: bu cevap nedeni veriyor, gözler korunmalı.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.a.why': "Lambayla ilgili bir iş: bu cevap önce elektriğin kesik olup olmadığını soruyor.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.garage.a.why': "Lastik değiştirmesi isteniyor: bir evet ve lastiklerin nerede olduğuna dair bir soru.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carjob.a.why': "Ek iş: müşteri önce onay vermeli, bu yüzden bu cevap şefe soruyor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.a.why': "Ne zaman diye soruluyor: bu cevap günü veriyor, önce de sözleşme geliyor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.a.why': "Geri bildirim henüz net değil: göstermelerini istemek iyi bir cevap.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.council.a.why': "Oy vermek soruluyor: bir evet ve götürülecek iki şey.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.a.why': "Polis kimlik istiyor: göster ve ne olduğunu sor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.a.why': "Giriş yapılabiliyor mu diye soruluyor: bu cevap hayır diyor ve nedenini söylüyor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.a.why': "Bağlantı soruluyor: dürüst bir evet ve bilgi işleme bir telefon.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.a.why': "Güçlü yönler soruluyor: bu cevap bir tanesini örnekle söylüyor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.a.why': "Plan soruluyor: bu cevap bbl’yi ve ne anlama geldiğini söylüyor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.a.why': "Gönderildi mi diye soruluyor: daha değil, önce kontrol ediliyor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.a.why': "Sonra ödeme teklif ediliyor: kibar bir hayır, nedeniyle birlikte.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.a.why': "Hap teklif ediliyor: kibar bir hayır, nedeniyle birlikte.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.newcolleague.a.why': "\"Sanırım\" henüz emin olmak değil: göstermesini istemek, işin doğru olup olmadığını kontrol eder.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.a.why': "Bandın neden temizlendiği soruluyor: sıradaki üründe kuruyemiş yok.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.a.why': "Paketin onun mu olduğu soruluyor: evet, sonra da imza.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.a.why': "Bir sefer daha isteniyor: hayır, çünkü önce mola gelir.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.a.why': "Nasıl olduğun soruluyor: kısa bir evet, bir de işi yavaş aldığın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.a.why': "Nasıl olduğun soruluyor: dürüst bir \"pek iyi değil\" sorun değil.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.a.why': "Genişlik soruluyor: birimiyle bir sayı, bir de not almak.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.a.why': "Tahtaların nereye gideceği soruluyor: bir yer, bir de o yerin nerede olduğu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.a.why': "Ne olduğu soruluyor: evet, ne olduğu ve ne kadar sürdüğü.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.a.why': "Nasıl olduğu soruluyor: ne gördüğün, bir de bunun yeni olduğu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.a.why': "Bir insanı kaldırman isteniyor: tek başına değil, önce kaldırma lifti.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.a.why': "Temiz bardak soruluyor: evet, bir de ne zaman geleceği.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.a.why': "Şef bir iş söylüyor: tekrar ediyorsun, böylece duyduğunu bilir.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.a.why': "Ofisin yapılıp yapılmadığı soruluyor: hayır, sebebiyle birlikte.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.a.why': "Bir bez soruluyor: hayır, çünkü kırmızı tuvalet içindir.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.a.why': "Süt soruluyor: \"hayır\" değil, depoya bakmak.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.a.why': "Kızgın bir müşteri: sakin sözler, bir de bir iş arkadaşı geliyor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.a.why': "Hangilerini toplayacağın soruluyor: renk, neyin olgun olduğunu söyler.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.a.why': "Fırtına geliyor: durmak ve içeri girmek güvenli seçimdir.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.a.why': "Uyup uymadığı soruluyor: hayır, zorlamadan önce yeniden ölçmek.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.a.why': "Almak için izin isteniyor: henüz değil, sıcak metal önce soğumalı.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.a.why': "Ne duyduğun soruluyor: hangi parça ve ne yaptığı.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.a.why': "İşe başlamak için izin isteniyor: henüz değil, çünkü araba elektrikli.", // nieuw, nalezen // nagelezen AI 22 nov
    // u.communicate en u.feedback (5 november 2026).
    'd.explain.a.why': "Sorunun ne olduğu soruluyor: bu cevap ne olduğunu ve neye ihtiyaç olduğunu söylüyor.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.listen.a.why': "Şaka olup olmadığından emin değilsin: sormak, tahmin etmekten iyidir.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.calm.a.why': "Neden bitmediği soruluyor: sakin bir sebep, bir de önce ne yapılacağı.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.talkintime.a.why': "Biri biraz zaman istiyor: bir evet, bir de anlatabilmesi için bir soru.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.reachable.a.why': "Cevapsız bir aramadan sonra geri arıyorsun: bir selam, bir de neden aradığın.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.getfeedback.a.why': "Geri bildirim teklif ediliyor: bir evet, bir de işi iyi yapmak istediğin.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.givefeedback.a.why': "İş hakkında soruluyor: önce iyi olan, sonra daha iyi olabilecek şey.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.meeting.a.why': "Soru olup olmadığı soruluyor: bu cevap çalışma planı hakkında bir soru soruyor.", // nieuw, nalezen // nagelezen AI 22 nov
    // Logistiek at four lessons per unit (14 November 2026).
    'c.picking.a.why': "Hangi konum olduğu soruluyor: bu cevap koridoru ve gözü söylüyor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.loading.a.why': "Paletin hazır olup olmadığı soruluyor: bu cevap “hayır” diyor ve daha ne gerektiğini söylüyor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.a.why': "Kamyonetin iyi olup olmadığı soruluyor: bu cevap “hayır” diyor ve neyin kırık olduğunu söylüyor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.a.why': "Nerede olduğun soruluyor: bu cevap yeri ve ne kadar geç kalacağını söylüyor.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Hulp vragen" at four lessons (14 November 2026).
    'c.howto.a.why': "Nasıl yapıldığının bilinip bilinmediği soruluyor: bu cevap dürüstçe \"hayır, henüz değil\" diyor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mayask.a.why': "Bir soru olup olmadığı soruluyor: bu cevap \"evet\" diyor ve önce vakit olup olmadığını soruyor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.whereis.a.why': "Bulunup bulunamadığı soruluyor: bu cevap \"hayır\" diyor ve gösterilmesini istiyor.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Instructies", a new basis unit (u.do, 14 November 2026).
    'c.putdown.a.why': "Bir şeyi tutması isteniyor: evet, ve nereye koyacağını soruyor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.a.why': "Kapının kapalı olup olmadığı soruluyor: hayır, ve şimdi kapatıyor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.a.why': "Dolu olup olmadığı soruluyor: evet, ve boşaltıyor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.a.why': "Şimdi yapması isteniyor: evet, ve sonra ne geldiğini soruyor.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Tegels, stuc en verf", a new sector unit of Bouw (u.afbouw, 20 November 2026).
    'c.tiletools.a.why': "Mikserin nerede olduğu soruluyor: bir yer, bir de yakınında ne olduğu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.a.why': "Nereden başlanacağı soruluyor: ortadan, orta çizgiden.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.a.why': "Duvarın kuru olup olmadığı soruluyor: hayır, bir de ne kadar bekleneceği.", // nieuw, nalezen // nagelezen AI 22 nov
    // l.paint, l.prep, "Metselen, hout en vastmaken", three lessons of Rekenen and "Machines en gereedschap" (20-21 November 2026).
    'c.shapes.a.why': "Kare olup olmadığı soruluyor: hayır, bir dikdörtgen, bir de neden.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.a.why': "Kaç derece olduğu soruluyor: sayı, bir de neyin yarısı olduğu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.a.why': "Zeminin ne kadar büyük olduğu soruluyor: hesap, bir de sonuç.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.a.why': "Hangi fırça olduğu soruluyor: duvar için geniş, köşeler için ince.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.a.why': "Boyanıp boyanamayacağı soruluyor: hayır, bir de önce ne geldiği.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.a.why': "Kaç tuğla kaldığı soruluyor: bir palet, bir de bunun yettiği.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.a.why': "Sıranın ne kadar yüksek olması gerektiği soruluyor: bunun nerede görüldüğü.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.a.why': "Hangi testere olduğu soruluyor: sırtlı testere, bir de neden.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.a.why': "Açının dik olup olmadığı soruluyor: evet, bir de bunun nasıl bilindiği.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.a.why': "Matkabın nerede olduğu soruluyor: bir yer, bir de neredeyse dolu olduğu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.a.why': "Rafın nasıl sabitleneceği soruluyor: neyle, bir de kaç tane.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.a.why': "Neden durduğu soruluyor: sensör, bir de neyi görmediği.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.a.why': "Ne sıklıkla olduğu soruluyor: saatte bir, bir de nereye yazılacağı.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.a.why': "Bir kutuya kaç tane girdiği soruluyor: sayı, bir de nerede yazdığı.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.a.why': "Ne zaman olduğu soruluyor: haftanın günü, bir de o gün hangi an.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Elektra, leidingen en metaal" (u.install, 21 November 2026).
    'c.wiring.a.why': "Hangi telin nereye gittiği soruluyor: aynı renk aynı renge.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.a.why': "Açıp açamayacağı soruluyor: hayır, bir de bunu kimin yaptığı.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.a.why': "Hâlâ sızdırıp sızdırmadığı soruluyor: biraz, bir de bunun için ne yapılacağı.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.a.why': "Neden keskin olduğu soruluyor: üstünde hâlâ çapak var.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Assemblage en montage" (u.montage, 21 November 2026).
    'c.assembly.a.why': "Hangi adım olduğu soruluyor: numarası ve nereye bakılacağı.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.a.why': "Ne kadar sıkı olacağı soruluyor: anahtar tık edene kadar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.a.why': "Orada durulup durulamayacağı soruluyor: hayır, asla, bir de nedeni.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.a.why': "İyi olup olmadığı soruluyor: hayır, bir de neyinin yanlış olduğu.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Kweken, sorteren en de kas" (u.kweek) and "Banden, olie en remmen" (u.carservice), 22 November 2026.
    'c.sowing.a.why': "Ne kadar derine gideceği soruluyor: derinlik, bir de daha derine gitmediği.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.a.why': "Olgun olup olmadığı soruluyor: hayır, fazla yeşil, bir de ne yapılacağı.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.a.why': "Neden sıcak olduğu soruluyor: perde ve pencereler kapalı.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.a.why': "Öldürülüp öldürülemeyeceği soruluyor: hayır, bir de neden yardım ettiği.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.a.why': "Çıkmaları gerekip gerekmediği soruluyor: evet, bir de nedeni.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.a.why': "Ne kadar olduğu soruluyor: kaç litre, bir de nasıl kontrol edileceği.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.a.why': "Yenisinin gerekip gerekmediği soruluyor: evet, bir de nedeni.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.a.why': "Ne yapılması gerektiği soruluyor: iş emrine bakılır.", // nieuw, nalezen // nagelezen AI 22 nov
    // The new sectors Groen, Facilitair, Beveiliging, Voedingsindustrie, Afval en recycling and Kinderopvang (23 November 2026).
    'c.mowing.a.why': "Alıp alamayacağın soruluyor: evet, bir de önce ne yapılacağı.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pruning.a.why': "Hangi dallar olduğu soruluyor: sadece kuru olanlar.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hedge.a.why': "Ne kadar yüksek olacağı soruluyor: ipe kadar, daha alçak değil.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.chainsaw.a.why': "İzin olup olmadığı soruluyor: henüz değil, bir de önce ne geldiği.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.weeding.a.why': "Yabani ot olup olmadığı soruluyor: hayır, bir de onunla ne yapılacağı.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.planting.a.why': "Nereye gittiği soruluyor: çiçek tarhındaki yeri.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roadside.a.why': "Karşıya geçilip geçilemeyeceği soruluyor: hayır, bekle, bir de nedeni.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.litter.a.why': "Bir mahalle sakini ne zaman olacağını soruyor: bilmiyorsun, bir de kimin bildiği.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reception.a.why': "Bir ziyaretçinin randevusu var: bir dakika, sen arıyorsun.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.visitors.a.why': "Montun nereye gideceği soruluyor: yeri, bir de nerede olduğu.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mailroom.a.why': "Kimin için olduğu soruluyor: bölüm, bir de kat.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.meetingroom.a.why': "Saat kaçta olduğu soruluyor: saat, bir de ne yapılması gerektiği.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.faults.a.why': "Neden soğuk olduğu soruluyor: neyin bozuk olduğu, bir de yardımın ne zaman geldiği.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.repairs.a.why': "Ötüp ötmediği soruluyor: evet, bir de nedeni.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.moving.a.why': "Nereye gittiği soruluyor: oda, bir de nereye bakılacağı.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.closing.a.why': "İçeride biri olup olmadığı soruluyor: hayır, bir de şimdi ne yaptığın.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.patrol.a.why': "Bir şey görüp görmediğin soruluyor: evet, ne, bir de nerede.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.access.a.why': "Kartsız içeri girmek isteniyor: üzgünüm, kartsız olmaz.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cameras.a.why': "Ne gördüğün soruluyor: kimi, nerede, bir de ne yaptığın.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.report.a.why': "Rapora ne yazılacağı soruluyor: ne, nerede ve ne zaman.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.evacuation.a.why': "Herkesin dışarıda olup olmadığı soruluyor: hayır, kaç kişinin eksik olduğu.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstaid.a.why': "AED’nin nerede olduğu soruluyor: yeri, bir de yanında ne olduğu.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shoplifting.a.why': "Bir çantanın aranıp aranamayacağı soruluyor: hayır, bir de bunu kimin yaptığı.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.aggression.a.why': "Neden olmadığı soruluyor: nedeni, sakince söyleniyor.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hygienelock.a.why': "Saat soruluyor: hayır, bir de arkasındaki kural.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.allergens.a.why': "Birlikte gidip gidemeyeceği soruluyor: hayır, bir de nedeni.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.coldroom.a.why': "Neden öttüğü soruluyor: nedeni, bir de ne yapılacağı.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.foreignbody.a.why': "Ne yapılacağı soruluyor: kime gösterileceği.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cutting.a.why': "Ne kadar olduğu soruluyor: ağırlık, bir de nereye bakılacağı.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.labels.a.why': "Hangi tarih olduğu soruluyor: ne zaman, bir de nereye bakılacağı.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.linecleaning.a.why': "Temiz olup olmadığı soruluyor: henüz değil, bir de ne kaldığı.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.haccp.a.why': "Nedeni soruluyor: yiyeceğin güvenli olduğunu bilmek için.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.binlorry.a.why': "Arkada gidilip gidilemeyeceği soruluyor: hayır, bir de nerede gidileceği.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reversing.a.why': "Yardım isteniyor: evet, nerede durduğun, bir de ne yapılacağı.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesorting.a.why': "Nereye gittiği soruluyor: hangi kutu, bir de nedeni.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesafety.a.why': "Kesikten sonra ne yapılacağı soruluyor: yıka, bir de söyle.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.yard.a.why': "Nereye gittiği soruluyor: konteyner, bir de nerede olduğu.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hazardous.a.why': "İçinde ne olduğu soruluyor: bilmiyorsun, o yüzden kenara koy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.baler.a.why': "Bakılıp bakılamayacağı soruluyor: hayır, bir de önce ne geldiği.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shovel.a.why': "Geçilip geçilemeyeceği soruluyor: sadece şoför seni görüyorsa.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.nappies.a.why': "Ne zaman olduğu soruluyor: saat, bir de nerede yazdığı.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mealtime.a.why': "Yiyip yiyemeyeceği soruluyor: hayır, nedeni, bir de nereye bakılacağı.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.naptime.a.why': "Uyuyup uyumadığı soruluyor: evet, ne zamandan beri, bir de kontrol ettiğin.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.playtime.a.why': "Bir çocuğun oynayıp oynayamayacağı soruluyor: evet, nerede, bir de sonra ne olacağı.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pickup.a.why': "Kimin alacağı soruluyor: kişi, bir de listede olduğu.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.childsafety.a.why': "Düşüp düşmediği soruluyor: evet, neyi olduğu, bir de kimi aradığın.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sickchild.a.why': "Nasıl olduğu soruluyor: ne gördüğün, bir de ne yaptığın.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.grouprules.a.why': "Tek başına gidip gidemeyeceğin soruluyor: evet, ama önce bir iş arkadaşına söyle.", // nieuw, nalezen // nagelezen AI 28 nov
    // Second units for Schoonmaak, Horeca, Zorg and Winkel, and the uitzendbureau (23 November 2026).
    'c.sanitary.a.why': "Bitip bitmediği soruluyor: henüz değil, bir de nedeni.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hotelroom.a.why': "Kaç tane kaldığı soruluyor: sayı, bir de ne zaman bittiği.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dosing.a.why': "Daha fazla kullanman söyleniyor: hayır, fazlası daha iyi değil, bir de ne kullandığın.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.officenight.a.why': "Tek başına çalışıp çalışmadığın soruluyor: evet, bir de mesaj atacaksın.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.knives.a.why': "Kesmen isteniyor: evet şef, bir de nasıl kesileceğine dair bir soru.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.rawcooked.a.why': "Glutensiz olup olmadığı soruluyor: emin değilsin, bu yüzden listeye bakıyorsun.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pass.a.why': "Yemeğin nerede olduğu soruluyor: pass’te, bir de şimdi getiriyorsun.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.bill.a.why': "Ayrı ödemek isteniyor: evet, bir de kart makinesini getiriyorsun.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.washing.a.why': "Danışan hayır diyor: sorun değil, bir de başka bir şey öneriyorsun.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.observing.a.why': "Özel bir şey olup olmadığı soruluyor: evet, bir de tam olarak ne olduğu.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.homecare.a.why': "Kimin geldiği soruluyor: bir selam, kim olduğun, bir de içeri girip giremeyeceğini soruyorsun.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.liftaids.a.why': "Tek başına yapman isteniyor: evet, kaydırma çarşafıyla, bir de onu getiriyorsun.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.returns.a.why': "İade etmek isteniyor: evet, bir de fişle ilgili bir soru.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.facing.a.why': "İşin bitip bitmediği soruluyor: neredeyse, bir de geriye ne kaldığı.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shrink.a.why': "Çantana bakmak isteniyor: evet, bir de fişi gösteriyorsun.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.shopclose.a.why': "İçeri girmek isteniyor: üzgünüm, kapalı, bir de ne zaman tekrar açıldığı.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hirer.a.why': "Yeni bir yerde başlaman isteniyor: evet, bir de saatle ilgili bir soru.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.phases.a.why': "İşin bittiği söyleniyor: tamam, bir de başka iş istiyorsun.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.deductions.a.why': "Bir kesinti söyleniyor: buna izin olup olmadığını soruyorsun, bir de kontrol ediyorsun.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.agencyhome.a.why': "Yakında çıkman söyleniyor: bu kısa bir süre, bir de önce tavsiye alıyorsun.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    // The basis units at four lessons (23 November 2026).
    'c.roster.a.why': "Çalışma planının değiştiği söyleniyor: tamam, bir de hangi gün.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.breaks.a.why': "Öğle molası soruluyor: saati, bir de ne kadar sürdüğü.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wound.a.why': "Bayılmak üzere: onu yatırırsın ve yardım getirirsin.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.callhelp.a.why': "Tepki verip vermediği soruluyor: hayır, tepki vermiyor.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vacancy.a.why': "Neden aradığın soruluyor: iş ilanı, bir de hâlâ açık mı?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.result.a.why': "Hayır deniyor: sakin bir cevap, bir de nedenini soruyorsun.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.residence.a.why': "İznin süresinin neredeyse dolduğu söyleniyor: hemen başvuruyorsun.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.newhome.a.why': "Nerede oturduğun soruluyor: yeni bir ev, bir de yeni adres.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.payparts.a.why': "Personel numaran soruluyor: maaş bordrosunda nerede olduğu.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.latepay.a.why': "Paranın sonra geleceği söyleniyor: bunu yazılı olarak istiyorsun.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.holiday.a.why': "Mayısta gitmen isteniyor: temmuzu tercih ediyorsun, bir de nedenini söylüyorsun.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.special.a.why': "Doğum izni soruluyor: evet, bir de ne zaman.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.unwell.a.why': "İyi olup olmadığın soruluyor: hayır, bir de eve gidip gidemeyeceğini soruyorsun.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.injury.a.why': "İfade isteniyor: evet, bir de senin için bir kopya.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debt.a.why': "Borç ödenene kadar kalman söyleniyor: buna izin yok, yardım al.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.inspection.a.why': "Konuşmak isteyip istemediğin soruluyor: evet, ama patronun duyamayacağı bir yerde.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.carpool.a.why': "Kimin süreceği soruluyor: sen, bir de onları ne zaman alacağın.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.train.a.why': "Neden geç kaldığın soruluyor: tren, bir de mesaj attın.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.checklist.a.why': "Bir şey unutup unutmadığın soruluyor: listeye bir kez daha bakmak.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.leavesite.a.why': "En son senin çıkıp çıkmadığın soruluyor: evet, her şey kapalı ve kapı kilitli.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stagedays.a.why': "Neden olmadığın soruluyor: hastaydın, bir de ikisini de aradın.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stageend.a.why': "Planların soruluyor: önce diploma, sonra iş.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.neighbours.a.why': "Yeni bir komşu merhaba diyor: tanıştığına memnunsun, bir de adın.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.join.a.why': "Gelip gelmeyeceğin soruluyor: evet, bir de öğretmenle konuşmak istiyorsun.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.workphotos.a.why': "İnternet için bir fotoğraf isteniyor: kibar bir hayır.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.device.a.why': "Yeni bir uygulama soruluyor: önce bilgi işlem bölümüne sor.", // nieuw, nalezen // nagelezen AI 28 nov
    // "Veiligheid op het werk" and the VOG (23 November 2026).
    'c.safetysigns.a.why': "Bir işaretin ne demek olduğu soruluyor: dikkat, bir de hangi işaret olduğu.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.substances.a.why': "Zehirli olup olmadığı soruluyor: tahmin etmiyorsun, bakıyorsun.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firefight.a.why': "Yangın olduğu söyleniyor: küçük, bu yüzden söndürücüyü getiriyorsun.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.permitwork.a.why': "Dışarıda kimin kalacağı soruluyor: sen, bir de görevin.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vog.a.why': "VOG’un soruluyor: henüz yok, bir de ne beklediğin.", // nieuw, nalezen // nagelezen AI 28 nov
    // "Operator in de procesindustrie" (23 November 2026).
    'c.plantround.a.why': "Alarm soruluyor: ne çok yüksek, bir de nerede.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantfault.a.why': "Çalıştırılabilir mi diye soruluyor: hayır, üzerinde hâlâ bir kilit var.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shiftwork.a.why': "Ne olduğu soruluyor: arıza, bir de nereye yazıldığı.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.heatdust.a.why': "Telefon soruluyor: hayır, buradaki tehlike yüzünden.", // nieuw, nalezen // nagelezen AI 28 nov
    // eight new lessons (26 November 2026).
    'c.debthelp.a.why': "Faturanın ödenmediği söyleniyor: evet, bir de ödeme planı istiyorsun.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.taxes.a.why': "Mavi bir zarf olduğu söyleniyor: teşekkürler, bir de hemen açıyorsun.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.discrimination.a.why': "İyi olup olmadığın soruluyor: hayır, bir de bunu bildireceksin.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.union.a.why': "Neden üye olduğun soruluyor: seni savunuyorlar.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.kiln.a.why': "Kırık parçaları elle toplamak soruluyor: hayır, el süpürgesi ve faraş.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mixlab.a.why': "Partinin onaylanıp onaylanmadığı soruluyor: henüz değil, laboratuvar test ediyor.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstweeks.a.why': "Tur soruluyor: neredeyse her şey, bir de bir soru.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.orderpick.a.why': "Reach truck kullanman isteniyor: hayır, bunun için eğitim yok.", // nieuw, nalezen // nagelezen AI 28 nov
    // four new lessons (27 November 2026).
    'd.appraisal.a.why': "Hedefin soruluyor: öğrenmek istediğin açık bir şey.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.forms.a.why': "Form soruluyor: neredeyse, bir de nereye imza atılacağı.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.voicemail.a.why': "Adın ve numaran isteniyor: adın, bir de geri arama ricası.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dentist.a.why': "Son ziyaretin soruluyor: ne zaman, bir de bir kontrol istiyorsun.", // nieuw, nalezen // nagelezen AI 28 nov
  },
};

export default t;
