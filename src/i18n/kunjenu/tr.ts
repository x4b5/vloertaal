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
    'kjn.u.firstday.2': "Kime başvurmam gerektiğini sorabilirim.", // nieuw, nalezen
    'kjn.u.help.1': "Anlamadığımı söyleyebilirim.", // nieuw, nalezen
    'kjn.u.help.2': "Birinden daha yavaş konuşmasını isteyebilirim.", // nieuw, nalezen
    'kjn.u.tools.1': "Birinden yazmasını ya da göstermesini isteyebilirim.", // nieuw, nalezen
    'kjn.u.tools.2': "Anladığımı kontrol etmek için bir görevi tekrar edebilirim.", // nieuw, nalezen
    'kjn.u.tools.3': "Hollandaca pratik yapmak istediğimi söyleyebilirim.", // nieuw, nalezen
    'kjn.u.data.1': "Adımı harf harf söyleyebilirim.", // nieuw, nalezen
    'kjn.u.data.2': "Hangi günler çalışabileceğimi söyleyebilirim.", // nieuw, nalezen
    'kjn.u.data.3': "Duyduğum bir tarihi anlayabilirim.", // nieuw, nalezen
    'kjn.u.sounds.1': "“man” ve “maan” gibi kelimeleri ayırt edebilirim.", // nieuw, nalezen
    'kjn.u.sounds.2': "Zor sesler içeren kısa cümleleri tekrar edebilirim.", // nieuw, nalezen
    'kjn.u.safety.1': "“Pas op!” gibi bir uyarıyı anlayabilirim.", // nieuw, nalezen
    'kjn.u.safety.2': "Bir kazayı bildirebilirim.", // nieuw, nalezen
    'kjn.u.safety.3': "Bir şeyi henüz öğrenmediğimi söyleyebilirim.", // nieuw, nalezen
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
    'kjn.u.leave.2': "Hastalık bildirimi yapabilir, iyileşince de bildirebilirim.", // nieuw, nalezen
    'kjn.u.contact.1': "Arayıp kim olduğumu söyleyebilirim.", // nieuw, nalezen
    'kjn.u.contact.2': "Birinden beni geri aramasını isteyebilirim.", // nieuw, nalezen
    'kjn.u.contact.3': "İşe kısa bir mesaj yazabilirim.", // nieuw, nalezen
    'kjn.u.house.1': "“Roken verboden” gibi kuralları okuyabilirim.", // nieuw, nalezen
    'kjn.u.house.2': "Nerede sigara içilebileceğini sorabilirim.", // nieuw, nalezen
    'kjn.u.house.3': "Bir şeyin yasak olduğunu söyleyebilirim.", // nieuw, nalezen
    'kjn.u.numbers.1': "“kwart over vier” gibi saatleri anlayabilirim.", // nieuw, nalezen
    'kjn.u.numbers.2': "Bir şeyin kaç para olduğunu ya da kaç kilo geldiğini söyleyebilirim.", // nieuw, nalezen
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
    'kjn.u.care.1': "Bir danışana yardım edip edemeyeceğimi sorabilirim.", // nieuw, nalezen
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
  },
};

export default t;
