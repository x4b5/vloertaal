import type { CultureTranslation } from '../culture/types';

/** "Wat kun je nu?" in Somali (src/content/kunJeNu.ts): the heading, the note, the coach card's line and the can-do sentences of all themes. */
const t: CultureTranslation = {
  ui: {
    kunJeNu: "Maxaad hadda samayn kartaa?", // nieuw, nalezen
    kunNote: "Heerka ku qoran jumlad kasta waa tilmaan, ma aha heer rasmi ah.", // nieuw, nalezen
    coachCanDo: "Inta jumladood ee “Waan … karaa” aad haysato, mawduucyada aad dhammaysay", // nieuw, nalezen
    kunLuisteren: "dhegeysi", // nieuw, nalezen
    kunSpreken: "hadal", // nieuw, nalezen
    kunLezen: "akhris", // nieuw, nalezen
    kunSchrijven: "qoris", // nieuw, nalezen
    kunGesprekken: "wada-hadallo", // nieuw, nalezen
  },
  gloss: {
    'kjn.u.firstday.1': "Waan is barin karaa saaxiib shaqo.", // nieuw, nalezen
    'kjn.u.firstday.2': "Waan weydiin karaa cidda aan u tagayo.", // nieuw, nalezen
    'kjn.u.help.1': "Waan sheegi karaa inaanan fahmin.", // nieuw, nalezen
    'kjn.u.help.2': "Waan ka codsan karaa qof inuu si tartiib ah u hadlo.", // nieuw, nalezen
    'kjn.u.tools.1': "Waan ka codsan karaa qof inuu qoro ama i tuso.", // nieuw, nalezen
    'kjn.u.tools.2': "Waan ku celin karaa amar si aan u hubiyo inaan fahmay.", // nieuw, nalezen
    'kjn.u.tools.3': "Waan sheegi karaa inaan rabo inaan ku tababarto Af-Holandiis.", // nieuw, nalezen
    'kjn.u.data.1': "Waan higgaadin karaa magacayga.", // nieuw, nalezen
    'kjn.u.data.2': "Waan sheegi karaa maalmaha aan shaqayn karo.", // nieuw, nalezen
    'kjn.u.data.3': "Waan fahmi karaa taariikh.", // nieuw, nalezen
    'kjn.u.sounds.1': "Waan maqli karaa farqiga u dhexeeya ereyada sida man iyo maan.", // nieuw, nalezen
    'kjn.u.sounds.2': "Waan ku celin karaa jumlado gaagaaban oo leh codad adag.", // nieuw, nalezen
    'kjn.u.safety.1': "Waan fahmi karaa digniin sida “Pas op!”.", // nieuw, nalezen
    'kjn.u.safety.2': "Waan sheegi karaa inaanan weli wax baran.", // nieuw, nalezen
    'kjn.u.emergency.1': "Waan weydiin karaa meesha dab-demiyuhu yaal.", // nieuw, nalezen
    'kjn.u.emergency.2': "Waan sheegi karaa shil dhacay.", // nieuw, nalezen
    'kjn.u.apply.1': "Waan sheegi karaa waayo-aragnimada aan leeyahay.", // nieuw, nalezen
    'kjn.u.apply.2': "Waan ka hadli karaa naftayda wareysiga shaqada.", // nieuw, nalezen
    'kjn.u.contract.1': "Waan weydiin karaa immisa saacadood ayaan toddobaadkii shaqaynayaa.", // nieuw, nalezen
    'kjn.u.contract.2': "Waan weydiin karaa in qandaraaskaygu ku meel gaar yahay ama joogto yahay.", // nieuw, nalezen
    'kjn.u.contract.3': "Waan sheegi karaa goorta aan shaqayn karo iyo goorta aanan shaqayn karin.", // nieuw, nalezen
    'kjn.u.grow.1': "Waan sheegi karaa shahaadooyinka iyo warqadaha aqoonta ee aan haysto.", // nieuw, nalezen
    'kjn.u.grow.2': "Waan sheegi karaa waxa aan ku fiicnahay.", // nieuw, nalezen
    'kjn.u.lost.1': "Waan sheegi karaa in qandaraaskaygu dhammaanayo.", // nieuw, nalezen
    'kjn.u.lost.2': "Waan weydiin karaa in lacagta fasaxa (vakantiegeld) la i siin doono.", // nieuw, nalezen
    'kjn.u.stage.1': "Waan weydiin karaa cidda tababaraha shaqada ii ah.", // nieuw, nalezen
    'kjn.u.stage.2': "Waan codsan karaa faallo (feedback) iyo tusaale.", // nieuw, nalezen
    'kjn.u.time.1': "Waan sheegi karaa saacadda uu shiftkaygu bilaabmayo.", // nieuw, nalezen
    'kjn.u.time.2': "Waan sheegi karaa inaan xanuunsanahay.", // nieuw, nalezen
    'kjn.u.pay.1': "Waan sheegi karaa in warqadda mushaharkaygu aanay sax ahayn.", // nieuw, nalezen
    'kjn.u.pay.2': "Waan akhrin karaa ereyada sida bruto iyo netto.", // nieuw, nalezen
    'kjn.u.leave.1': "Waan codsan karaa fasax.", // nieuw, nalezen
    'kjn.u.leave.2': "Waan sheegi karaa in ilmahaygu xanuunsan yahay.", // nieuw, nalezen
    'kjn.u.contact.1': "Waan wici karaa oo sheegi karaa cidda aan ahay.", // nieuw, nalezen
    'kjn.u.contact.2': "Waan ka codsan karaa qof inuu dib ii soo waco.", // nieuw, nalezen
    'kjn.u.contact.3': "Waan u qori karaa fariin gaaban shaqada.", // nieuw, nalezen
    'kjn.u.house.1': "Waan akhrin karaa xeerarka sida “Roken verboden”.", // nieuw, nalezen
    'kjn.u.house.2': "Waan weydiin karaa meesha la ii oggol yahay inaan sigaar ku cabbo.", // nieuw, nalezen
    'kjn.u.house.3': "Waan sheegi karaa in wax aan la oggolayn.", // nieuw, nalezen
    'kjn.u.numbers.1': "Waan fahmi karaa waqtiyada sida “kwart over vier”.", // nieuw, nalezen
    'kjn.u.numbers.2': "Waan sheegi karaa inta wax ku kacayaan ama culayskooda.", // nieuw, nalezen
    'kjn.u.numbers.3': "Waan kala garan karaa lambarrada sida 13 iyo 30.", // nieuw, nalezen
    'kjn.u.shop.1': "Waan weydiin karaa macmiil inuu rabo inuu kaar ku bixiyo.", // nieuw, nalezen
    'kjn.u.shop.2': "Waan tusi karaa macmiil jidka dukaanka dhexdiisa.", // nieuw, nalezen
    'kjn.u.ai.1': "Waan weydiin karaa in jawaab sax tahay.", // nieuw, nalezen
    'kjn.u.ai.2': "Waan sheegi karaa inaan rabo inaan la hadlo qof.", // nieuw, nalezen
    'kjn.u.finish.1': "Waan weydiin karaa waxa erey ku qoran amarka shaqada (werkbon) macnihiisu yahay.", // nieuw, nalezen
    'kjn.u.finish.2': "Waan sheegi karaa waxa dhammaaday iyo waxa aan dhammaan.", // nieuw, nalezen
    'kjn.u.online.1': "Waan sheegi karaa in furahayga sirta ah (password) aanu shaqaynayn.", // nieuw, nalezen
    'kjn.u.online.2': "Waan garan karaa iimayl laga shakiyo.", // nieuw, nalezen
    'kjn.u.teamwork.1': "Waan sheegi karaa in wax i dhibayaan.", // nieuw, nalezen
    'kjn.u.teamwork.2': "Waan si deggan ugu dhihi karaa maya shaqo dheeraad ah.", // nieuw, nalezen
    'kjn.u.teamwork.3': "Waan weydiin karaa waxa aan marka hore samaynayo.", // nieuw, nalezen
    'kjn.u.communicate.1': "Waan sharxi karaa waxa qaldan.", // nieuw, nalezen
    'kjn.u.communicate.2': "Waan sheegi karaa waxa aan maqlay.", // nieuw, nalezen
    'kjn.u.communicate.3': "Waan waqtigeeda ku codsan karaa wada-hadal.", // nieuw, nalezen
    'kjn.u.feedback.1': "Waan codsan karaa tusaale marka faallo (feedback) la i siiyo.", // nieuw, nalezen
    'kjn.u.feedback.2': "Waan si naxariis leh u sheegi karaa waxa ka sii fiicnaan kara.", // nieuw, nalezen
    'kjn.u.feedback.3': "Waan su'aal ka weydiin karaa shirka kooxda.", // nieuw, nalezen
    'kjn.u.social.1': "Waan sheekaysan karaa xilliga nasashada.", // nieuw, nalezen
    'kjn.u.social.2': "Waan sheegi karaa inaan khalad sameeyay.", // nieuw, nalezen
    'kjn.u.social.3': "Waan sheegi karaa in wax xadkayga dhaafayaan.", // nieuw, nalezen
    'kjn.u.sayings.1': "Waan fahmi karaa dhowr oraahood oo caan ah.", // nieuw, nalezen
    'kjn.u.sayings.2': "Waan sheegi karaa in wax aad u fudud yihiin (een eitje).", // nieuw, nalezen
    'kjn.u.rights.1': "Waan sheegi karaa inaan xaq u leeyahay nasasho.", // nieuw, nalezen
    'kjn.u.rights.2': "Waan sheegi karaa inaan rabo inaan cabasho gudbiyo.", // nieuw, nalezen
    'kjn.u.exploit.1': "Waan sheegi karaa inaan baasaboorkayga anigu hayo.", // nieuw, nalezen
    'kjn.u.exploit.2': "Waan weydiin karaa inaan wax u sheegi karo anigoo magacayga qarinaya.", // nieuw, nalezen
    'kjn.u.papers.1': "Waan sheegi karaa in cinwaankaygu isbeddelay.", // nieuw, nalezen
    'kjn.u.papers.2': "Waan weydiin karaa inta uu kirada yahay.", // nieuw, nalezen
    'kjn.u.health.1': "Waan sheegi karaa meesha i xanuunaysa.", // nieuw, nalezen
    'kjn.u.health.2': "Waan ballan ka codsan karaa dhakhtarka guud (huisarts).", // nieuw, nalezen
    'kjn.u.money.1': "Waan sheegi karaa inaanan fahmin warqad.", // nieuw, nalezen
    'kjn.u.money.2': "Waan taleefanka ugu dhihi karaa maya khiyaano-badane.", // nieuw, nalezen
    'kjn.u.travel.1': "Waan sheegi karaa sida aan shaqada u imaado.", // nieuw, nalezen
    'kjn.u.travel.2': "Waan weydiin karaa meesha uu joogsiga baska yahay.", // nieuw, nalezen
    'kjn.u.society.1': "Waan weydiin karaa in la ii oggol yahay inaan codeeyo.", // nieuw, nalezen
    'kjn.u.society.2': "Waan sheegi karaa inaan rabo inaan diido go'aan (bezwaar maak).", // nieuw, nalezen
    'kjn.u.warehouse.1': "Waan fahmi karaa amarro gaagaaban oo bakhaarka ah.", // nieuw, nalezen
    'kjn.u.warehouse.2': "Waan sheegi karaa meesha wax yaallaan: bidix ama midig.", // nieuw, nalezen
    'kjn.u.build.1': "Waan fahmi karaa digniin goobta dhismaha.", // nieuw, nalezen
    'kjn.u.build.2': "Waan codsan karaa qalab.", // nieuw, nalezen
    'kjn.u.factory.1': "Waan sheegi karaa in cillad jirto.", // nieuw, nalezen
    'kjn.u.factory.2': "Waan sheegi karaa waxa ka qaldan badeecad.", // nieuw, nalezen
    'kjn.u.care.1': "Waan weydiin karaa macmiil (cliënt) inaan caawin karo.", // nieuw, nalezen
    'kjn.u.care.2': "Waan u gudbin karaa wax kalkaalisada.", // nieuw, nalezen
    'kjn.u.horeca.1': "Waan weydiin karaa martida waxay rabaan inay cabbaan.", // nieuw, nalezen
    'kjn.u.horeca.2': "Waan sheegi karaa inaan weydiinayo kuugga madaxa ah.", // nieuw, nalezen
    'kjn.u.clean.1': "Waan weydiin karaa meesha ay yaallaan alaabta nadiifinta.", // nieuw, nalezen
    'kjn.u.clean.2': "Waan uga digi karaa qof in dabaqu siibanayo.", // nieuw, nalezen
    'kjn.u.kas.1': "Waan weydiin karaa safka aan ka bilaabayo.", // nieuw, nalezen
    'kjn.u.kas.2': "Waan weydiin karaa in aqal-dhireedka (kas) la buufiyay.", // nieuw, nalezen
    'kjn.u.tech.1': "Waan weydiin karaa in korontadu weli shidan tahay.", // nieuw, nalezen
    'kjn.u.tech.2': "Waan sheegi karaa in fiilo jabtay.", // nieuw, nalezen
    'kjn.u.garage.1': "Waan sheegi karaa in taayir dabaysha ka baxday.", // nieuw, nalezen
    'kjn.u.garage.2': "Waan sheegi karaa in macmiilku marka hore oggolaado.", // nieuw, nalezen
    'kjn.u.sick.1': "Waan sheegi karaa inaan xanuunsanahay, oo waan sheegi karaa marka aan fiicnaado.", // nieuw, nalezen
    'kjn.u.sick.2': "Waan sheegi karaa waxa aanan weli samayn karin.", // nieuw, nalezen
    'kjn.u.sick.3': "Waan sheegi karaa inaan bilowga shaqaynayo badh maalmeed.", // nieuw, nalezen
    'kjn.u.health.3': "Waan sheegi karaa in shaqadu igu badanayso.", // nieuw, nalezen
    'kjn.u.factory.3': "Waan sheegi karaa inaan leeyahay goos yar.", // nieuw, nalezen
    'kjn.u.delivery.1': "Waan sheegi karaa in macmiilku aanu guriga joogin.", // nieuw, nalezen
    'kjn.u.delivery.2': "Waan ka codsan karaa deriska inay baakad ii qaataan.", // nieuw, nalezen
    'kjn.u.delivery.3': "Waan weydiin karaa cidda go'aamisa jidkayga iyo waqtiyadayda.", // nieuw, nalezen
  },
};
export default t;
