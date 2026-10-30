import type { CultureTranslation } from '../culture/types';

/** "Wat kun je nu?" in Turkish (src/content/kunJeNu.ts): the heading, the note, the coach card's line and
 *  the can-do sentences of the first four themes (TODO: the other four). */
const t: CultureTranslation = {
  ui: {
    kunJeNu: "Şimdi neler yapabilirsin?", // nieuw, nalezen
    kunNote: "Her cümlenin yanındaki seviye bir yol göstericidir, resmî bir seviye değildir.", // nieuw, nalezen
    coachCanDo: "Bitirdiğin konulardaki “… yapabilirim” cümlelerinin sayısı", // nieuw, nalezen
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
    'kjn.u.contact.3': "İşten gelen kısa bir mesajı okuyabilirim.", // nieuw, nalezen
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
  },
};

export default t;
