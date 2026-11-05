import type { CultureTranslation } from '../culture/types';

/** The regions in Somali (src/content/regio): the Settings row "Waar woon je?", the Sociale kaart (its categories; the rows themselves stay Dutch), and the unit "Jouw regio: Zuid-Limburg" with its tips. "Zuid-Limburg" is a name: it is not translated. */
const t: CultureTranslation = {
  ui: {
    regionTitle: "Xaggee ku nooshahay?", // nieuw, nalezen
    regionHint: "Ma ku nooshahay ama ma ka shaqaysaa Zuid-Limburg? Markaas waxaad helaysaa casharro dheeraad ah oo ku saabsan gobolkaaga.", // nieuw, nalezen
    regionOther: "Meel kale / ma rabo inaan sheego", // nieuw, nalezen
    regionNone: "Lama dooran", // nieuw, nalezen
    socialMap: "Halka aad caawimo ka heli karto", // nieuw, nalezen
    socialMapHint: "Meesha aad u tagayso iyo waxa loo tago. Riix saf si aad u wacdo ama u furto bogga internetka.", // nieuw, nalezen
    socialMapNote: "Macluumaad guud, ma aha talo. Magacyada, lambarrada iyo bogagga internetka way isbeddeli karaan.", // nieuw, nalezen
    socialMapWrong: "Wax ma khaldan yihiin? U dir iimayl hoi@vloertaal.nl.", // nieuw, nalezen
  },
  gloss: {
    'rg.zl.u': "Gobolkaaga: Zuid-Limburg", // nieuw, nalezen
    'rg.zl.l.1': "Xarunta dowladda hoose iyo gurigaaga", // nieuw, nalezen
    'rg.zl.w.gemeentehuis': "xarunta dowladda hoose (dhismaha)", // nieuw, nalezen
    'rg.zl.w.loket': "miiska adeegga, shubbaakka", // nieuw, nalezen
    'rg.zl.w.verhuizing': "guuritaanka (guri cusub)", // nieuw, nalezen
    'rg.zl.w.woningcorporatie': "shirkadda guryaha (kiro bulsho)", // nieuw, nalezen
    'rg.zl.w.wachtlijst': "liiska sugitaanka", // nieuw, nalezen
    'rg.zl.w.buurt': "xaafadda", // nieuw, nalezen
    'rg.zl.s.1.1': "Waxaan rabaa inaan iska diiwaangeliyo xarunta dowladda hoose.", // nieuw, nalezen
    'rg.zl.s.1.2': "Ballan baan leeyahay saacadda tobanka.", // nieuw, nalezen
    'rg.zl.s.1.3': "Waxaan ku jiraa liiska sugitaanka guri.", // nieuw, nalezen
    'rg.zl.c.1.q': "Xaggee ku nooshahay?", // nieuw, nalezen
    'rg.zl.c.1.a': "Heerlen. Hadda ayaan u guuray.", // nieuw, nalezen
    'rg.zl.l.2': "Xadka, karnifaalka iyo lahjadda", // nieuw, nalezen
    'rg.zl.w.grens': "xadka (u dhexeeya laba dal)", // nieuw, nalezen
    'rg.zl.w.buitenland': "dibadda, dal kale", // nieuw, nalezen
    'rg.zl.w.carnaval': "karnifaalka (dabaaldeg weyn oo waddooyinka ah, bisha February ama March)", // nieuw, nalezen
    'rg.zl.w.dialect': "lahjadda (habka deegaanka loogu hadlo)", // nieuw, nalezen
    'rg.zl.w.verstaan': "fahmid (waxa qof sheegayo)", // nieuw, nalezen
    'rg.zl.w.langzaam': "si tartiib ah", // nieuw, nalezen
    'rg.zl.s.2.1': "Waxaan ku noolahay Holland, waxaanan ka shaqeeyaa Jarmalka.", // nieuw, nalezen
    'rg.zl.s.2.2': "Af-Holandiis ma ku hadli kartaa? Lahjadda ma fahmo.", // nieuw, nalezen
    'rg.zl.s.2.3': "Fasax ma qaadan karaa karnifaalka?", // nieuw, nalezen
    'rg.zl.c.2.q': "Waan ka xumahay, aad baan u dhakhso u hadlayaa.", // nieuw, nalezen
    'rg.zl.c.2.a': "Haa, wax yar si tartiib ah, fadlan.", // nieuw, nalezen
    'rg.zl.c.1': "Diiwaangeli cinwaankaaga, oo raadi guri", // nieuw, nalezen
    'rg.zl.c.1.b': "Marka aad guurto, u sheeg gemeente-gaaga cusub (xarunta dowladda hoose) muddo 5 maalmood gudahood. Gemeente-yada intooda badan waxay ku shaqeeyaan ballan: marka hore eeg bogga internetkooda. Haddii aad dibadda ka timid, adigu tag, adigoo wata baasaboorkaaga ama aqoonsigaaga iyo qandaraaska kirada. Kirada bulshada, si bilaash ah isu diiwaangeli thuisinlimburg.nl oo cusboonaysii sannad kasta. Weligaa lacag ha ku bixin guri aadan arag. Macluumaad guud. Xaaladdaada gaarka ah: weydii loo-shaqeeyahaaga, ururka shaqaalaha ama Juridisch Loket.", // nieuw, nalezen
    'rg.zl.c.1.p': "Ballan ma qabsan karaa?", // nieuw, nalezen
    'rg.zl.c.1.s': "Toddobaadkii hore waxaad u guurtay Maastricht. Boostadaadu weli waxay tagtaa cinwaankaagii hore. Maxaad samaynaysaa?", // nieuw, nalezen
    'rg.zl.c.1.o1': "Hadda cinwaankaaga cusub ka diiwaangeli gemeente-ga Maastricht.", // nieuw, nalezen
    'rg.zl.c.1.o2': "Sug. Gemeente-gu iskiis ayuu u ogaan doonaa.", // nieuw, nalezen
    'rg.zl.c.1.o3': "Cinwaankaaga cusub u sheeg loo-shaqeeyahaaga oo keliya.", // nieuw, nalezen
    'rg.zl.c.1.w': "Waa inaad adigu u sheegto gemeente-gaaga cusub, muddo 5 maalmood gudahood. Cinwaankaaga waxaa loo baahan yahay boostadaada, mushaharkaaga, caymiskaaga caafimaadka iyo gunnooyinka.", // nieuw, nalezen
    'rg.zl.c.2': "Karnifaalka, lahjadda iyo xadka", // nieuw, nalezen
    'rg.zl.c.2.b': "Karnifaalka (Limburg waxaa sidoo kale lagu yiraahdaa “vastelaovend”) sannad kasta wuu wareegaa, bisha February ama March. Ma aha fasax rasmi ah: hore u codso maalmo fasax ah. Dad badan ayaa shaqada ku hadla lahjadda Limburg. Waa caadi inaadan fahmin. Si naxariis leh u weydii: “Kunt u Nederlands praten?” Saaxiibada shaqada qaarkood waxay ku hadlaan Jarmal ama Faransiis. Ma ku nooshahay hal dal oo ka shaqaysaa dal kale? Ka hor intaadan saxiixin, weydii GrensInfoPunt talo bilaash ah oo ku saabsan cashuurta, caymiska iyo gunnooyinka.", // nieuw, nalezen
    'rg.zl.c.2.p': "Ma ku sheegi doontaa Af-Holandiis?", // nieuw, nalezen
    'rg.zl.c.2.s': "Saaxiib shaqo ayaa hawl kuugu sharraxaya lahjad. Ma fahmin. Maxaad samaynaysaa?", // nieuw, nalezen
    'rg.zl.c.2.o1': "Si naxariis leh u weydii inuu Af-Holandiis ku sheegi karo.", // nieuw, nalezen
    'rg.zl.c.2.o2': "Madaxa ruxo oo iska qiyaas waxa la samaynayo.", // nieuw, nalezen
    'rg.zl.c.2.o3': "U sheeg in lahjaddu edeb darro tahay.", // nieuw, nalezen
    'rg.zl.c.2.w': "Dad badan lahjaddu waa luqaddooda, ma aha edeb darro. Saaxiibada shaqada intooda badan way ku faraxsan yihiin inay u beddelaan Af-Holandiis. Qiyaasidu waxay keeni kartaa khaladaad, ammaanka marka la eegona waa inaad had iyo jeer fahantaa.", // nieuw, nalezen
    'rg.cat.gemeente': "Xarunta dowladda hoose (gemeente)", // nieuw, nalezen
    'rg.cat.juridisch': "Talo sharci", // nieuw, nalezen
    'rg.cat.werk': "Shaqo", // nieuw, nalezen
    'rg.cat.bijstand': "Kaalmada bulshada (bijstand)", // nieuw, nalezen
    'rg.cat.uitzend': "Xafiisyada shaqo-qorista", // nieuw, nalezen
    'rg.cat.buurt': "Xaafadda iyo daryeelka bulshada", // nieuw, nalezen
    'rg.cat.schulden': "Deymaha", // nieuw, nalezen
    'rg.cat.taal': "Barashada luqadda", // nieuw, nalezen
    'rg.cat.zorg': "Daryeelka caafimaadka", // nieuw, nalezen
    'rg.cat.grens': "Xadka", // nieuw, nalezen
    'rg.cat.vakbond': "Ururka shaqaalaha", // nieuw, nalezen
    'rg.cat.nieuwkomers': "Dadka cusub ee haysta sharci deganaansho", // nieuw, nalezen
    'rg.cat.veilig': "Rabshadaha qoyska dhexdiisa", // nieuw, nalezen
    'rg.cat.wonen': "Guryaha", // nieuw, nalezen
  },
};
export default t;
