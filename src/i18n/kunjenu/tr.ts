import type { CultureTranslation } from '../culture/types';

/** "Wat kun je nu?" in Turkish (src/content/kunJeNu.ts): the heading, the note, the coach card's line and
 *  the can-do sentences of all eight themes. */
const t: CultureTranslation = {
  ui: {
    kunJeNu: "Şimdi neler yapabilirsin?", // nieuw, nalezen
    kunNote: "Her cümlenin yanındaki seviye bir yol göstericidir, resmî bir seviye değildir.", // nieuw, nalezen
    coachCanDo: "Bitirdiğin konulardaki “… yapabilirim” cümlelerinin sayısı", // nieuw, nalezen
    kunLuisteren: "dinleme", // nieuw, nalezen
    kunSpreken: "konuşma", // nieuw, nalezen
    kunLezen: "okuma", // nieuw, nalezen
    kunSchrijven: "yazma", // nieuw, nalezen
    kunGesprekken: "karşılıklı konuşma", // nieuw, nalezen
  },
  gloss: {
    'kjn.u.firstday.1': "Kendimi bir iş arkadaşıma tanıtabilirim.", // nieuw, nalezen
    'kjn.u.firstday.2': "Geldiğimde kime haber vermem gerektiğini sorabilirim.", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'kjn.u.help.1': "Anlamadığımı söyleyebilirim.", // nieuw, nalezen
    'kjn.u.help.2': "Birinden daha yavaş konuşmasını isteyebilirim.", // nieuw, nalezen
    'kjn.u.do.1': "“Zet het neer” gibi kısa bir talimatı anlayabilirim.", // nieuw, nalezen
    'kjn.u.do.2': "Bir işi bitirdiğimi söyleyebilirim.", // nieuw, nalezen
    'kjn.u.tools.1': "Birinden yazmasını ya da göstermesini isteyebilirim.", // nieuw, nalezen
    'kjn.u.tools.2': "Anladığımı kontrol etmek için bir talimatı tekrar edebilirim.", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'kjn.u.tools.3': "Hollandaca pratik yapmak istediğimi söyleyebilirim.", // nieuw, nalezen
    'kjn.u.data.1': "Adımı harf harf söyleyebilirim.", // nieuw, nalezen
    'kjn.u.data.2': "Hangi günler çalışabileceğimi söyleyebilirim.", // nieuw, nalezen
    'kjn.u.data.3': "Duyduğum bir tarihi anlayabilirim.", // nieuw, nalezen
    'kjn.u.sounds.1': "“man” ve “maan” gibi kelimeleri ayırt edebilirim.", // nieuw, nalezen
    'kjn.u.sounds.2': "Zor sesler içeren kısa cümleleri tekrar edebilirim.", // nieuw, nalezen
    'kjn.u.safety.1': "“Pas op!” gibi bir uyarıyı anlayabilirim.", // nieuw, nalezen
    'kjn.u.safety.2': "Bir şeyi henüz öğrenmediğimi söyleyebilirim.", // nieuw, nalezen
    'kjn.u.emergency.1': "Yangın söndürücünün nerede olduğunu sorabilirim.", // nieuw, nalezen
    'kjn.u.emergency.2': "Bir kazayı bildirebilirim.", // nieuw, nalezen
    'kjn.u.apply.1': "Ne tür deneyimim olduğunu anlatabilirim.", // nieuw, nalezen
    'kjn.u.apply.2': "İş görüşmesinde kendimden bahsedebilirim.", // nieuw, nalezen
    'kjn.u.contract.1': "Haftada kaç saat çalıştığımı sorabilirim.", // nieuw, nalezen
    'kjn.u.contract.2': "Sözleşmemin geçici mi yoksa süresiz mi olduğunu sorabilirim.", // nieuw, nalezen
    'kjn.u.contract.3': "Ne zaman çalışabileceğimi ve ne zaman çalışamayacağımı söyleyebilirim.", // nieuw, nalezen
    'kjn.u.grow.1': "Hangi diplomalarım ve sertifikalarım olduğunu söyleyebilirim.", // nieuw, nalezen
    'kjn.u.grow.2': "Neyi iyi yaptığımı söyleyebilirim.", // nieuw, nalezen
    'kjn.u.lost.1': "Sözleşmemin bittiğini söyleyebilirim.", // nieuw, nalezen
    'kjn.u.lost.2': "Tatil paramın ödenip ödenmeyeceğini sorabilirim.", // nieuw, nalezen
    'kjn.u.stage.1': "İşyeri eğitmenimin kim olduğunu sorabilirim.", // nieuw, nalezen // nagelezen AI 31 okt
    'kjn.u.stage.2': "Geri bildirim ve bir örnek isteyebilirim.", // nieuw, nalezen
    'kjn.u.time.1': "Vardiyamın saat kaçta başladığını söyleyebilirim.", // nieuw, nalezen
    'kjn.u.time.2': "Hasta olduğumu söyleyebilirim.", // nieuw, nalezen
    'kjn.u.pay.1': "Maaş bordromun doğru olmadığını söyleyebilirim.", // nieuw, nalezen
    'kjn.u.pay.2': "“bruto” ve “netto” gibi kelimeleri okuyabilirim.", // nieuw, nalezen
    'kjn.u.leave.1': "İzin isteyebilirim.", // nieuw, nalezen
    'kjn.u.leave.2': "Çocuğumun hasta olduğunu söyleyebilirim.", // nieuw, nalezen
    'kjn.u.contact.1': "Arayıp kim olduğumu söyleyebilirim.", // nieuw, nalezen
    'kjn.u.contact.2': "Birinden beni geri aramasını isteyebilirim.", // nieuw, nalezen
    'kjn.u.contact.3': "İşe kısa bir mesaj yazabilirim.", // nieuw, nalezen
    'kjn.u.house.1': "“Roken verboden” gibi kuralları okuyabilirim.", // nieuw, nalezen
    'kjn.u.house.2': "Nerede sigara içilebileceğini sorabilirim.", // nieuw, nalezen
    'kjn.u.house.3': "Bir şeyin yasak olduğunu söyleyebilirim.", // nieuw, nalezen
    'kjn.u.numbers.1': "“kwart over vier” gibi saatleri anlayabilirim.", // nieuw, nalezen
    'kjn.u.numbers.2': "Bir şeyin kaç para olduğunu ya da kaç kilo geldiğini söyleyebilirim.", // nieuw, nalezen
    'kjn.u.numbers.3': "13 ile 30 gibi sayıları ayırt edebilirim.", // nieuw, nalezen
    'kjn.u.shop.1': "Bir müşteriye kartla ödemek isteyip istemediğini sorabilirim.", // nieuw, nalezen
    'kjn.u.shop.2': "Bir müşteriye mağazada yolu gösterebilirim.", // nieuw, nalezen
    'kjn.u.ai.1': "Bir cevabın doğru olup olmadığını sorabilirim.", // nieuw, nalezen
    'kjn.u.ai.2': "Bir insanla konuşmak istediğimi söyleyebilirim.", // nieuw, nalezen
    'kjn.u.finish.1': "İş emrindeki bir kelimenin ne anlama geldiğini sorabilirim.", // nieuw, nalezen
    'kjn.u.finish.2': "Neyin bittiğini, neyin bitmediğini söyleyebilirim.", // nieuw, nalezen
    'kjn.u.online.1': "Şifremin çalışmadığını söyleyebilirim.", // nieuw, nalezen
    'kjn.u.online.2': "Şüpheli bir e-postayı tanıyabilirim.", // nieuw, nalezen
    'kjn.u.teamwork.1': "Bir şeyin beni rahatsız ettiğini söyleyebilirim.", // nieuw, nalezen
    'kjn.u.teamwork.2': "Fazladan işe sakin bir şekilde hayır diyebilirim.", // nieuw, nalezen
    'kjn.u.teamwork.3': "Önce ne yapmam gerektiğini sorabilirim.", // nieuw, nalezen
    'kjn.u.communicate.1': "Neyin yanlış olduğunu anlatabilirim.", // nieuw, nalezen
    'kjn.u.communicate.2': "Duyduğumu tekrar söyleyebilirim.", // nieuw, nalezen
    'kjn.u.communicate.3': "Zamanında bir görüşme isteyebilirim.", // nieuw, nalezen
    'kjn.u.feedback.1': "Geri bildirim aldığımda bir örnek isteyebilirim.", // nieuw, nalezen
    'kjn.u.feedback.2': "Neyin daha iyi olabileceğini nazikçe söyleyebilirim.", // nieuw, nalezen
    'kjn.u.feedback.3': "Ekip toplantısında bir soru sorabilirim.", // nieuw, nalezen
    'kjn.u.social.1': "Molada biraz sohbet edebilirim.", // nieuw, nalezen
    'kjn.u.social.2': "Bir hata yaptığımı söyleyebilirim.", // nieuw, nalezen
    'kjn.u.social.3': "Bir şeyin sınırımı aştığını söyleyebilirim.", // nieuw, nalezen
    'kjn.u.sayings.1': "Birkaç yaygın deyimi anlayabilirim.", // nieuw, nalezen
    'kjn.u.sayings.2': "Bir şeyin çok kolay olduğunu (een eitje) söyleyebilirim.", // nieuw, nalezen
    'kjn.u.rights.1': "Mola hakkım olduğunu söyleyebilirim.", // nieuw, nalezen
    'kjn.u.rights.2': "Şikâyette bulunmak istediğimi söyleyebilirim.", // nieuw, nalezen
    'kjn.u.exploit.1': "Pasaportumu kendimde tuttuğumu söyleyebilirim.", // nieuw, nalezen
    'kjn.u.exploit.2': "Bir şeyi adımı vermeden bildirip bildiremeyeceğimi sorabilirim.", // nieuw, nalezen
    'kjn.u.papers.1': "Adresimin değiştiğini söyleyebilirim.", // nieuw, nalezen
    'kjn.u.papers.2': "Kiranın ne kadar olduğunu sorabilirim.", // nieuw, nalezen
    'kjn.u.health.1': "Neremin ağrıdığını söyleyebilirim.", // nieuw, nalezen
    'kjn.u.health.2': "Aile hekiminden randevu isteyebilirim.", // nieuw, nalezen
    'kjn.u.money.1': "Bir mektubu anlamadığımı söyleyebilirim.", // nieuw, nalezen
    'kjn.u.money.2': "Telefonda bir dolandırıcıya hayır diyebilirim.", // nieuw, nalezen
    'kjn.u.travel.1': "İşe nasıl gittiğimi anlatabilirim.", // nieuw, nalezen
    'kjn.u.travel.2': "Otobüs durağının nerede olduğunu sorabilirim.", // nieuw, nalezen
    'kjn.u.society.1': "Oy verip veremeyeceğimi sorabilirim.", // nieuw, nalezen
    'kjn.u.society.2': "İtiraz etmek istediğimi söyleyebilirim.", // nieuw, nalezen
    'kjn.u.warehouse.1': "Depoda kısa talimatları anlayabilirim.", // nieuw, nalezen
    'kjn.u.warehouse.2': "Bir şeyin nerede olduğunu söyleyebilirim: solda ya da sağda.", // nieuw, nalezen
    'kjn.u.build.1': "İnşaatta bir uyarıyı anlayabilirim.", // nieuw, nalezen
    'kjn.u.build.2': "Alet isteyebilirim.", // nieuw, nalezen
    'kjn.u.factory.1': "Bir arıza olduğunu söyleyebilirim.", // nieuw, nalezen
    'kjn.u.factory.2': "Bir üründe neyin yanlış olduğunu söyleyebilirim.", // nieuw, nalezen
    'kjn.u.care.1': "Bakımını yaptığım bir kişiye yardım edip edemeyeceğimi sorabilirim.", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'kjn.u.care.2': "Bir şeyi hemşireye iletebilirim.", // nieuw, nalezen
    'kjn.u.horeca.1': "Misafirlere ne içmek istediklerini sorabilirim.", // nieuw, nalezen
    'kjn.u.horeca.2': "Şefe soracağımı söyleyebilirim.", // nieuw, nalezen
    'kjn.u.clean.1': "Temizlik malzemelerinin nerede olduğunu sorabilirim.", // nieuw, nalezen
    'kjn.u.clean.2': "Birini zeminin kaygan olduğu konusunda uyarabilirim.", // nieuw, nalezen
    'kjn.u.kas.1': "Hangi sıradan başlayacağımı sorabilirim.", // nieuw, nalezen
    'kjn.u.kas.2': "Bir seranın ilaçlanıp ilaçlanmadığını sorabilirim.", // nieuw, nalezen
    'kjn.u.tech.1': "Hâlâ elektrik olup olmadığını sorabilirim.", // nieuw, nalezen
    'kjn.u.tech.2': "Bir kablonun bozuk olduğunu söyleyebilirim.", // nieuw, nalezen
    'kjn.u.garage.1': "Bir lastiğin patlak olduğunu söyleyebilirim.", // nieuw, nalezen
    'kjn.u.garage.2': "Müşterinin önce onay vermesi gerektiğini söyleyebilirim.", // nieuw, nalezen
    'kjn.u.sick.1': "Hastalık bildirimi yapabilir, iyileşince de bildirebilirim.", // nieuw, nalezen
    'kjn.u.sick.2': "Neyi henüz yapamadığımı söyleyebilirim.", // nieuw, nalezen
    'kjn.u.sick.3': "İlk başta yarım gün çalıştığımı söyleyebilirim.", // nieuw, nalezen
    'kjn.u.health.3': "İşin bana fazla gelmeye başladığını söyleyebilirim.", // nieuw, nalezen
    'kjn.u.factory.3': "Küçük bir yaram olduğunu bildirebilirim.", // nieuw, nalezen
    'kjn.u.delivery.1': "Müşterinin evde olmadığını söyleyebilirim.", // nieuw, nalezen
    'kjn.u.delivery.2': "Komşulardan bir paketi teslim almalarını isteyebilirim.", // nieuw, nalezen
    'kjn.u.delivery.3': "Güzergâhımı ve saatlerimi kimin belirlediğini sorabilirim.", // nieuw, nalezen
    'kjn.u.afbouw.1': "Dişli malayı ya da malayı isteyebilirim.", // nieuw, nalezen
    'kjn.u.afbouw.2': "Fayanslara nereden başlayacağımı sorabilirim.", // nieuw, nalezen
    'kjn.u.afbouw.3': "Duvarın henüz kurumadığını söyleyebilirim.", // nieuw, nalezen
    // "Metselen, hout en vastmaken" and "Machines en gereedschap" (20-21 November 2026).
    'kjn.u.ruwbouw.1': "El testeresini ya da akülü matkabı isteyebilirim.", // nieuw, nalezen
    'kjn.u.ruwbouw.2': "Bir tahtayı nasıl sabitleyeceğimi sorabilirim.", // nieuw, nalezen
    'kjn.u.machines.1': "Makine korumasının kırık olduğunu söyleyebilirim.", // nieuw, nalezen
    'kjn.u.machines.2': "Ne sıklıkla numune alacağımı sorabilirim.", // nieuw, nalezen
    // "Elektra, leidingen en metaal" (21 November 2026).
    'kjn.u.install.1': "Sigorta kutusunu açıp açamayacağımı sorabilirim.", // nieuw, nalezen
    'kjn.u.install.2': "Bir rakorun sızdırdığını söyleyebilirim.", // nieuw, nalezen
    // "Assemblage en montage" (21 November 2026).
    'kjn.u.montage.1': "Parça kutusunun neredeyse boş olduğunu söyleyebilirim.", // nieuw, nalezen
    'kjn.u.montage.2': "Bir cıvatanın ne kadar sıkı olması gerektiğini sorabilirim.", // nieuw, nalezen
    // "Kweken, sorteren en de kas" and "Banden, olie en remmen" (22 November 2026).
    'kjn.u.kweek.1': "Bir bitkide küf olduğunu söyleyebilirim.", // nieuw, nalezen
    'kjn.u.kweek.2': "Bir domatesin yeterince olgun olup olmadığını sorabilirim.", // nieuw, nalezen
    'kjn.u.carservice.1': "Uyarı lambasının yandığını söyleyebilirim.", // nieuw, nalezen
    'kjn.u.carservice.2': "Ne kadar yağ girmesi gerektiğini sorabilirim.", // nieuw, nalezen
    // The new sectors (23 November 2026).
    'kjn.u.mowing.1': "Çimin fazla ıslak olduğunu söyleyebilirim.", // nieuw, nalezen
    'kjn.u.mowing.2': "Hangi dalların kesilmesi gerektiğini sorabilirim.", // nieuw, nalezen
    'kjn.u.planting.1': "Cam kırıkları olduğunu söyleyebilirim.", // nieuw, nalezen
    'kjn.u.planting.2': "Yolun karşısına geçip geçemeyeceğimi sorabilirim.", // nieuw, nalezen
    'kjn.u.frontdesk.1': "Bir ziyaretçiyi karşılayıp ona yardım edebilirim.", // nieuw, nalezen
    'kjn.u.frontdesk.2': "Bir paketin kimin için olduğunu sorabilirim.", // nieuw, nalezen
    'kjn.u.maintenance.1': "Bir arızayı bildirebilirim.", // nieuw, nalezen
    'kjn.u.maintenance.2': "Bir masanın nereye gitmesi gerektiğini sorabilirim.", // nieuw, nalezen
    'kjn.u.guarding.1': "Birinin kimliğini görmek isteyebilirim.", // nieuw, nalezen
    'kjn.u.guarding.2': "Telsizde ne gördüğümü söyleyebilirim.", // nieuw, nalezen
    'kjn.u.incidents.1': "112’yi arayıp neyin yanlış olduğunu söyleyebilirim.", // nieuw, nalezen
    'kjn.u.incidents.2': "Kızgın bir müşteriyle sakince konuşabilirim.", // nieuw, nalezen
    'kjn.u.foodhygiene.1': "Soğuk odanın fazla sıcak olduğunu söyleyebilirim.", // nieuw, nalezen
    'kjn.u.foodhygiene.2': "İçinde kuruyemiş olup olmadığını sorabilirim.", // nieuw, nalezen
    'kjn.u.foodline.1': "Etiketin doğru olmadığını söyleyebilirim.", // nieuw, nalezen
    'kjn.u.foodline.2': "Bir kaba ne kadar girmesi gerektiğini sorabilirim.", // nieuw, nalezen
    'kjn.u.collection.1': "Şoförün geri gitmesine yardım edebilirim.", // nieuw, nalezen
    'kjn.u.collection.2': "Tekerlekli bir çöp kutusunun fazla ağır olduğunu söyleyebilirim.", // nieuw, nalezen
    'kjn.u.recycling.1': "Bir ziyaretçiye atığının nereye gittiğini söyleyebilirim.", // nieuw, nalezen
    'kjn.u.recycling.2': "Presin sıkıştığını söyleyebilirim.", // nieuw, nalezen
    'kjn.u.toddlers.1': "Bir çocuğun bezini değiştireceğimi söyleyebilirim.", // nieuw, nalezen
    'kjn.u.toddlers.2': "Bir çocuğun uyuyup uyumadığını sorabilirim.", // nieuw, nalezen
    'kjn.u.daycare.1': "Bir anneye ya da babaya günün nasıl geçtiğini anlatabilirim.", // nieuw, nalezen
    'kjn.u.daycare.2': "Bir çocuğu kimin almaya geleceğini sorabilirim.", // nieuw, nalezen
    // Five new units (23 November 2026).
    'kjn.u.uitzend.1': "Hangi aşamada olduğumu sorabilirim.", // nieuw, nalezen
    'kjn.u.uitzend.2': "Maaşımdan yapılan bir kesintinin ne için olduğunu sorabilirim.", // nieuw, nalezen
    'kjn.u.housekeeping.1': "Bir tuvaletin tıkalı olduğunu söyleyebilirim.", // nieuw, nalezen
    'kjn.u.housekeeping.2': "Kovaya ne kadar ürün konacağını sorabilirim.", // nieuw, nalezen
    'kjn.u.cooking.1': "Şefe bir şeyi nasıl keseceğimi sorabilirim.", // nieuw, nalezen
    'kjn.u.cooking.2': "Bir misafire ayrı ödemek isteyip istemediğini sorabilirim.", // nieuw, nalezen
    'kjn.u.carework.1': "Bir danışana ne giymek istediğini sorabilirim.", // nieuw, nalezen
    'kjn.u.carework.2': "Hemşireye ne gördüğümü anlatabilirim.", // nieuw, nalezen
    'kjn.u.shopfloor.1': "Bir müşteriden fişi isteyebilirim.", // nieuw, nalezen
    'kjn.u.shopfloor.2': "Mağazanın birazdan kapanacağını söyleyebilirim.", // nieuw, nalezen
  },
};

export default t;
