import type { CultureTranslation } from '../culture/types';

/** Somali (so): learning mechanics: speaking without a microphone, picture choice, build feedback, and why a chat reply fits (src/content/chatWhy.ts). */
const t: CultureTranslation = {
  ui: {
    sayAloud: "Makarafoon looma baahna. Kor u dheh, kadib sii wad.", // nieuw, nalezen
    micRetry: "Makarafoonka mar kale isku day", // nieuw, nalezen
    micFailed: "Makarafoonku ma shaqayn. Kor u dheh, kadib sii wad.", // nieuw, nalezen
    micRefused: "Abka looma oggola inuu isticmaalo makarafoonkaaga. Waad shidi kartaa.", // nieuw, nalezen
    micTurnOn: "Shid makarafoonka", // nieuw, nalezen
    micStepsIos: "Riix “•••” ama “aA” ee ku yaal sadarka cinwaanka › Website Settings › Microphone › Allow. Ama: Settings › Apps › Safari › Microphone. Kadib riix badhanka hoose.", // nieuw, nalezen
    micStepsIosOther: "Riix astaanta ku taal bidixda cinwaanka bogga › Permissions › Microphone › Allow. Ama: Settings › Apps › {app} › Microphone. Kadib riix badhanka hoose.", // nieuw, nalezen
    micStepsAndroid: "Riix astaanta ku taal bidixda cinwaanka bogga › Permissions › Microphone › Allow. Kadib riix badhanka hoose.", // nieuw, nalezen
    micStepsAndroidApp: "Ku hay astaanta Vloertaal ee shaashadda hore › App info › Permissions › Microphone › Allow. Kadib riix badhanka hoose.", // nieuw, nalezen
    micStepsDesktop: "Guji astaanta ku taal bidixda cinwaanka bogga › Microphone › Allow. Kadib guji badhanka hoose.", // nieuw, nalezen
    whichPicture: "Waa sawirkee?", // nieuw, nalezen
    sayAloudInstead: "Kor u dheh beddelkeeda", // nieuw, nalezen
    wordsPractised: "Ereyada lagu tababaray", // nieuw, nalezen
    reviewComplete: "Dib-u-eegistu way dhammaatay!", // nieuw, nalezen
  },
  gloss: {
    'c.hello.a.why': "Nabadgelyo waxaa looga jawaabaa nabadgelyo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.people.a.why': "Su'aashu waxay weydiinaysaa magac. Jawaabtani mid bay bixinaysaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.arrive.a.why': "Waxaa la weydiiyay sababta aad u timid: jawaabtani waxay sheegaysaa inaad cusub tahay oo maanta bilaabayso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.understand.a.why': "Ma fahmin? Inaad codsato in mar kale laguu sheego waa caadi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.translate.a.why': "Warqadda yar weli ma cadda, sidaas darteed marka hore ayaa la turjumayaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.understood.a.why': "Inaad hawsha dib u sheegto waxay hubisaa waxa ay tahay inaad marka hore samayso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.keeplearning.a.why': "Inaad Af-Holandiis codsato waa caadi: tababarku wuu caawiyaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.gear.a.why': "Su'aashu waxay ku saabsan tahay koofiyadda adag: haa, waa la xiray.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.danger.a.why': "Shil marka uu dhaco, marka hore waxaa la wacaa 112.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.alarm.a.why': "Waxaa la weydiiyay in qof walba baxay: jawaabtani waxay sheegaysaa cidda weli maqan.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.accident.a.why': "Waxaa la weydiiyay waxa dhacay: jawaabtani waxay sheegaysaa waxa dhacay iyo sida uu yahay.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.notyet.a.why': "Waxaa lagu yiri iska isku day: inaad codsato in marka hore lagu tuso waa jawaabta ammaanka ah.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.things.a.why': "Su'aashu waxay weydiinaysaa meesha. Jawaabtani waxay magacawdaa meel.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.directions.a.why': "Bidix mise midig? Jawaabtani mid bay dooranaysaa oo waxay sheegaysaa meesha.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shift.a.why': "Goorma ayuu shiftku bilaabmaa? Jawaabtani waxay bixinaysaa maalinta iyo saacadda.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sick.a.why': "Xanuunsan macnaheedu waa inaad guriga joogto, oo aad sheegto.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.speakup.a.why': "Waxaa la weydiiyay in wax qaldan yihiin: haa daacad ah waa wanaagsan tahay.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.agree.a.why': "Maya in la yiraahdo waa la oggol yahay. Inaad maalin kale soo jeediso way caawisaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.task.a.why': "Waxaa la weydiiyay in la dhammeeyay: jawaabtani waxay leedahay ku dhowaad, iyo inta ay qaadanayso.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.clear.a.why': "Waxaa la weydiiyay in ay caddahay: marka hore haa, kadib su'aasha keliya.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.cv.a.why': "Tixraac (referentie) waa madax hore oo ka sheekayn kara shaqada.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.interview.a.why': "Wareysiga shaqada, waayo-aragnimada shaqada ayaa muhiim ah.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.findwork.a.why': "Su'aashu waxay weydiinaysaa shaqada nooceeda. Jawaabtani way magacawdaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.contract.a.why': "Haa iyo su'aal ku saabsan saacadda waa cad yahay oo waxay muujinaysaa xamaasad.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.agency.a.why': "Waxaa la weydiiyay saacadaha: haa, oo waxay sheegaysaa goorta iyo sida.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.bsn.a.why': "Loo-shaqeeyuhu wuxuu codsan karaa inuu arko aqoonsi, sida baasaboor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.housing.a.why': "Lacagta laga jaro mushaharka waa in warqad lagu heshiiyaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.payslip.a.why': "Saacadaha ka maqan warqadda mushaharka waa in la sheegaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.extra.a.why': "Saacadaha dheeraadka ah waa la qoraa, si loogu hubiyo warqadda mushaharka.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phone.a.why': "Taleefan ma jiro meel u dhow mashiinnada: fariimuhu waxay sugayaan nasashada.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.smoking.a.why': "Nasashadu waxay leedahay waqtiyo go'an, ka hor ma aha.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.clock.a.why': "Inaad qof kale u diiwaangeliso imaanshaha (inklokken) lama oggola.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.hygiene.a.why': "Shabagga timaha xiro, dahabka iska siib: xeerarka cunto nadiif ah.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.smalltalk.a.why': "Su'aashu waxay ku saabsan tahay dhammaadka toddobaadka: hal shay ayaa ku filan.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mistakes.a.why': "Ammaanta waxaa looga jawaabaa mahadsanid.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.respect.a.why': "Bahdilaadda (pesten) waa in la sheegaa, si qof u caawiyo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.gossip.a.why': "Inaadan ka qayb gelin xanta waxay ilaalisaa kalsoonida kooxda.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.boundaries.a.why': "Kaftan wax dhibaya waa la joojin karaa, si cad.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.health.a.why': "Nasashadu waxay ilaalisaa caafimaadka, sidaas darteed waa la qaataa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rights.a.why': "Eryid (ontslag) weligeed isla markiiba lama saxiixo. Talo ayaa marka hore timaada.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay.a.why': "Ikhtiyaari macnaheedu waa waad dooran kartaa: Sabtida in la shaqeeyo looma baahna.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.leave.a.why': "Goorma? Jawaabtani waxay bixinaysaa bil iyo inta ay le'eg tahay.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.illness.a.why': "Faahfaahinta caafimaadka waxaa leh dhakhtarka shirkadda, ma aha madaxa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.warning.a.why': "Loo-shaqeeyuhu wuu koobiyayn karaa baasaboorka, laakiin ma hayn karo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.gethelp.a.why': "Inaad si cad u sheegto waxa qaldan waxay u sahlaysaa inay ku caawiyaan.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.callin.a.why': "Goorma ayaad soo laabanaysaa? Jawaabtani waxay bixinaysaa maalin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.texting.a.why': "Jawaab degdeg ah oo abka ah waxay caawisaa qorshaynta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.certs.a.why': "Maya daacad ah, iyo rabitaan aad wax ku barato: jawaab wanaagsan.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diploma.a.why': "Haa in tababarka loo yiraahdo, iyo in la weydiiyo cidda bixinaysa, waa caadi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.doctor.a.why': "Adeegga dhakhtarka qoyska (huisartsenpost) wuxuu u baahan yahay inuu ogaado cidda xanuunsan iyo waxa qaldan.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.insurance.a.why': "Magaca shirkadda caymiska wuxuu ku qoran yahay kaarka caymiska caafimaadka.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.letters.a.why': "Cashuur-celinta (belastingaangifte) waa in la sameeyaa ka hor 1 May.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.scams.a.why': "Bangigu weligiis ma weydiiyo PIN. Inaad taleefanka dhigto waa sax.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.bike.a.why': "Sidee? Jawaabtani waxay bixinaysaa gaadiidka iyo waqtiga.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transit.a.why': "Ma aha tareenka: jawaabtani waxay halkii ka magacawdaa baska.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.ww.a.why': "Gunnada shaqo la'aanta (WW) waa in isla markiiba la codsadaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.newjob.a.why': "Lambarka taleefanka ayaa u sahlaya inay dib kuu soo wacaan.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tools.a.why': "Xaggee? Jawaabtani waxay bixinaysaa meesha: gaariga yar (bus) dhexdiisa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.site.a.why': "Saqafka dushiisa, ka-hortagga dhicitaanka ayaa had iyo jeer ka horreeya.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.line.a.why': "Sidee u socotaa? Jawaabtani waxay sheegaysaa sida, oo waxay magacawdaa dhibaatada.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.quality.a.why': "Maxaa dhinac loo dhigay? Jawaabtani waxay bixinaysaa ceebta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.client.a.why': "Macmiil ayaa caawimo codsaday: haa edeb leh, oo leh “u”.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.privacy.a.why': "Daawooyinka waxaa leh shaqaale tababaran: kalkaalisada ayaa bixisa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.kitchen.a.why': "Xasaasiyaddu waa arrin culus: kuugga madaxa ah (chef) waa inuu ogaadaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.service.a.why': "Waxaa la weydiiyay biilka: haa gaaban, oo jidka ayaa lagu jiraa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.cleaning.a.why': "Ma dhammaatay? Jawaabtani waxay leedahay ku dhowaad, iyo inta hartay.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.cleansafe.a.why': "Dhul qoyan waa lagu simbiriirixdaa: digniin ayaa caawisa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shelves.a.why': "Waxaa la weydiiyay meesha: jawaabtani waxay magacawdaa waddada dhexe (gang) oo way caawisaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.checkout.a.why': "Waxaa la weydiiyay in kaar lagu bixin karo: haa naxariis leh.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.a.why': "Waxaa la weydiiyay immisa: jawaabtani waxay bixinaysaa tirada oo hubisaa lambarradeeda.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.hours.a.why': "Waxaa la weydiiyay saacadda: jawaabtani waxay bixinaysaa waqti.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measures.a.why': "Waxaa la weydiiyay dhererka: jawaabtani waxay bixinaysaa dherer.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.aihelp.a.why': "Waxaa la weydiiyay cidda qortay: haa daacad ah oo magacawda caawimada.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.aiprivate.a.why': "Waxaa la codsaday in magacyo la geliyo chatbot: jawaabtani waxay leedahay maya, iyo sababta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.aifake.a.why': "Lambar cusub ayaa lacag weydiinaya: jawaabtani marka hore way hubinaysaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.aiplan.a.why': "Ab ayaa sameeyay jadwalka: jawaabtani waxay codsanaysaa qof.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.harvest.a.why': "Waxaa la weydiiyay immisa saf: jawaabtani waxay bixinaysaa tiro, iyo waxa hadhay.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greensafe.a.why': "Hadda ayaa la buufiyay: jawaabtani waxay leedahay weli maya, iyo sababta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.details.a.why': "Waxaa la weydiiyay magaca dambe: jawaabtani way bixinaysaa oo waxay soo jeedinaysaa inay xaraf xaraf u higgaadiso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dates.a.why': "Waxaa la weydiiyay taariikhda: jawaabtani waxay bixinaysaa maalinta iyo taariikhda.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.permit.a.why': "Maya waa caadi haddii ay sabab leedahay. Inaad maalin kale soo jeediso way caawisaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.kids.a.why': "Waxaa la weydiiyay sababta: jawaabtani waxay bixinaysaa sababta, xannaanada carruurta ayaa soo wacday.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.body.a.why': "Waxaa la weydiiyay meesha wax kaa xanuunayaan: jawaabtani waxay magacawdaa meesha iyo sababta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.jobends.a.why': "Guriga wuxuu la socdaa shaqada: jawaabtani waxay weydiinaysaa muddada ogeysiiska (opzegtermijn).", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder.a.why': "Erey aadan hubin: inaad weydiiso ka hor intaadan bilaabin waa jawaabta saxda ah.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handover.a.why': "Waxaa la weydiiyay in wax walba la dhammeeyay: jawaabtani waxay sheegaysaa waxa aan la dhammayn, iyo sababta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.a.why': "Waxaa la weydiiyay sababta: jawaabtani waxay bixinaysaa sababta, indhuhu waxay u baahan yihiin ilaalin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.a.why': "Shaqo laambad ah: jawaabtani marka hore waxay weydiinaysaa in korontada la damiyay.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.garage.a.why': "Waxaa la codsaday in taayirada la beddelo: haa, iyo su'aal ah meesha ay yaallaan.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carjob.a.why': "Shaqada dheeraadka ah waxay u baahan tahay oggolaanshaha macmiilka: jawaabtani waxay weydiinaysaa madaxa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.a.why': "Waxaa la weydiiyay goorta: jawaabtani waxay bixinaysaa maalinta, heshiiskuna wuu ka horreeyaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.a.why': "Faallada (feedback) weli ma cadda: inaad codsato in lagu tuso waa jawaab wanaagsan.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.council.a.why': "Waxaa la weydiiyay codbixinta: haa, iyo labada shay ee la keenayo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.a.why': "Booliisku wuxuu weydiinayaa aqoonsi: tus, oo weydii waxa socda.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.a.why': "Waxaa la weydiiyay in gelitaanku shaqaynayo: jawaabtani waxay leedahay maya, iyo sababta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.a.why': "Waxaa la weydiiyay xiriirka (link): haa daacad ah, iyo wac waaxda IT-ga.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.a.why': "Waxaa la weydiiyay dhinacyada xoogga: jawaabtani mid bay magacawdaa, tusaale ahaan.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.a.why': "Waxaa la weydiiyay qorshaha: jawaabtani waxay magacawdaa bbl iyo waxa ay macnaheedu tahay.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.a.why': "Waxaa la weydiiyay in la diray: weli maya, marka hore ayaa la hubinayaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.a.why': "Hadda iibso, goor dambe bixi ayaa la soo bandhigay: maya edeb leh, oo sabab leh.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.a.why': "Kaniini ayaa la soo bandhigay: maya edeb leh, oo sabab leh.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.newcolleague.a.why': "“Waxaan u malaynayaa” weli lama hubo: inaad codsato inuu ku tuso ayaa hubinaysa inay shaqaynayso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.a.why': "Waxaa la weydiiyay sababta khadka loo nadiifinayo: badeecada xigta looska kuma jiro.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.a.why': "Waxaa la weydiiyay ballaca: tiro iyo halbeeggeeda, oo la qoray.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.a.why': "Waxaa la weydiiyay meesha alwaaxdu aadayso: meel, iyo halka ay ku taal.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.a.why': "Waxaa la weydiiyay wixii dhacay: haa, waxa dhacay, iyo muddada.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.a.why': "Waxaa la weydiiyay sida uu yahay: waxa aad aragto, iyo inay cusub tahay.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.a.why': "Waxaa la codsaday in qof la qaado: keligaa maya, wiishka dadka ayaa ka horreeya.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.a.why': "Waxaa la weydiiyay galaasyo nadiif ah: haa, iyo goorta ay imanayaan.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.a.why': "Amar shefka ka yimid: dib ayaa loo yiri, si uu u ogaado inaad maqashay.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.a.why': "Waxaa la weydiiyay in xafiiska la dhammeeyay: maya, iyo sababta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.a.why': "Waxaa la weydiiyay maro: maya, sababtoo ah casaanka waxaa leh musqusha.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.a.why': "Waxaa la weydiiyay caano: ma aha “maya”, ee bakhaarka ayaa la eegayaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.a.why': "Macmiil xanaaqsan: erayo deggan, saaxiib shaqona wuu imanayaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.a.why': "Waxaa la weydiiyay kuwa la gurayo: midabka ayaa sheega waxa bislaaday.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.a.why': "Onkod ayaa soo socda: in la joojiyo oo gudaha la galo ayaa ah doorashada ammaanka ah.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.a.why': "Waxaa la weydiiyay inuu ku habboon yahay: maya, oo mar kale ayaa la cabbirayaa ka hor inta aan xoog la isticmaalin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.a.why': "Waxaa la weydiiyay in la qaadi karo: weli maya, birta kulul waa inay marka hore qabowdaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.a.why': "Waxaa la weydiiyay waxa aad maqlayso: qaybta, iyo waxa ay samaynayso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.a.why': "Waxaa la weydiiyay in shaqada la bilaabi karo: weli maya, sababtoo ah baabuurku waa koronto.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.a.why': "Waxaa la weydiiyay in baakaddu iyaga u tahay: haa, kadibna saxiixa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.a.why': "Waxaa la weydiiyay hal safar oo kale: maya, sababtoo ah nasashada ayaa ka horraysa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.a.why': "Waxaa lagu weydiiyay sidaad tahay: haa gaaban, iyo inaad si tartiib ah u qaadanayso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.a.why': "Waxaa lagu weydiiyay sidaad tahay: “aan sidaas u fiicnayn” daacad ah waa caadi.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.explain.a.why': "Waxaa la weydiiyay waxa qaldan: jawaabtani waxay sheegaysaa waxa, iyo waxa loo baahan yahay.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.listen.a.why': "Ma hubtid inay kaftan tahay: inaad weydiiso ayaa ka wanaagsan inaad qiyaasto.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.calm.a.why': "Waxaa la weydiiyay sababta aan loo dhammayn: sabab deggan, iyo waxa ka horreeya.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.talkintime.a.why': "Qof ayaa in yar waqti codsaday: haa, iyo su'aal si uu u sheego.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.reachable.a.why': "Dib u wacid kadib wac aad seegtay: salaan, iyo sababta aad u wacayso.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.getfeedback.a.why': "Faallo (feedback) ayaa laguu soo bandhigay: haa, iyo inaad rabto inaad si fiican u samayso.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.givefeedback.a.why': "Waxaa la weydiiyay shaqada: marka hore waxa fiican, kadib waxa ka sii fiicnaan kara.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.meeting.a.why': "Waxaa la weydiiyay su'aalo: jawaabtani mid bay weydiinaysaa, oo ku saabsan jadwalka.", // nieuw, nalezen // nagelezen AI 22 nov
    // Logistiek at four lessons per unit (14 November 2026).
    'c.picking.a.why': "Waxaa la weydiiyay goobta: marinka iyo booska.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.loading.a.why': "Waxaa la weydiiyay in baaleetku diyaar yahay: maya, iyo waxa uu weli u baahan yahay.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.a.why': "Waxaa la weydiiyay in baabuurku fiican yahay: maya, iyo waxa jaban.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.a.why': "Waxaa la weydiiyay meesha aad joogto: meesha, iyo inta aad daahayso.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Hulp vragen" at four lessons (14 November 2026).
    'c.howto.a.why': "Waxaa lagu weydiiyay inaad taqaan sida: maya, weli maya, si daacad ah.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mayask.a.why': "Waxaa lagu weydiiyay inaad su'aal qabto: haa, marka horena in waqti jiro.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.whereis.a.why': "Waxaa lagu weydiiyay inaad heli karto: maya, iyo codsi ah in laguu tilmaamo.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Instructies", a new basis unit (u.do, 14 November 2026).
    'c.putdown.a.why': "Waxaa la weydiistay inuu wax hayo: haa, iyo meesha la dhigayo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.a.why': "Waxaa la weydiiyay in albaabku xiran yahay: maya, oo hadda ayuu xirayaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.a.why': "Waxaa la weydiiyay in uu buuxsamay: haa, oo wuu faaruqinayaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.a.why': "Waxaa la weydiistay inuu hadda sameeyo: haa, iyo waxa ku xiga.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Tegels, stuc en verf", a new sector unit of Bouw (u.afbouw, 20 November 2026).
    'c.tiletools.a.why': "Waxaa la weydiiyay meesha uu yaal mashiinka qasa: meel, iyo waxa u dhow.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.a.why': "Waxaa la weydiiyay meesha laga bilaabo: bartamaha, xariiqda dhexe.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.a.why': "Waxaa la weydiiyay in derbigu qallalay: maya, iyo inta la sugayo.", // nieuw, nalezen // nagelezen AI 22 nov
    // l.paint, l.prep, "Metselen, hout en vastmaken", three lessons of Rekenen and "Machines en gereedschap" (20-21 November 2026).
    'c.shapes.a.why': "Waxaa la weydiiyay inuu afargeesle yahay: maya, waa leydi, iyo sababta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.a.why': "Waxaa la weydiiyay immisa darajo: tirada, iyo waxa ay badhka ka tahay.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.a.why': "Waxaa la weydiiyay inta uu dhulku le'eg yahay: xisaabta, iyo jawaabta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.a.why': "Waxaa la weydiiyay burushkee: kan ballaaran derbiga, kan yarna geesaha.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.a.why': "Waxaa la weydiiyay in la rinjiyeyn karo: maya, iyo waxa marka hore la sameeyo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.a.why': "Waxaa la weydiiyay immisa bulukeeti ayaa haray: hal baaleet, iyo inay ku filan yihiin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.a.why': "Waxaa la weydiiyay joogga safka: meesha lagu arki karo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.a.why': "Waxaa la weydiiyay miinshaarkee: miinshaarka yar, iyo sababta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.a.why': "Waxaa la weydiiyay in xagashu qumman tahay: haa, iyo sida lagu ogaaday.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.a.why': "Waxaa la weydiiyay meesha uu dariilku yaal: meel, iyo inuu ku dhowaad buuxo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.a.why': "Waxaa la weydiiyay sida khaanadda loo xiro: waxa lagu xiro, iyo immisa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.a.why': "Waxaa la weydiiyay sababta uu u istaago: dareemaha, iyo waxa uusan arkin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.a.why': "Waxaa la weydiiyay intee jeer: saacaddii mar, iyo meesha lagu qoro.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.a.why': "Waxaa la weydiiyay immisa sanduuqiiba: tirada, iyo meesha ay ku qoran tahay.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.a.why': "Waxaa la weydiiyay goorma: maalinta toddobaadka, iyo waqtiga maalintaas.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Elektra, leidingen en metaal" (u.install, 21 November 2026).
    'c.wiring.a.why': "Waxaa la weydiiyay siliggee meeshee galo: midab iyo midabkiisa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.a.why': "Waxaa la weydiiyay in la furi karo: maya, iyo cidda samaysa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.a.why': "Waxaa la weydiiyay inuu weli daadanayo: wax yar, iyo waxa laga qabanayo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.a.why': "Waxaa la weydiiyay sababta uu u fiiqan yahay: weli geeso fiiqan ayaa ku yaal.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Assemblage en montage" (u.montage, 21 November 2026).
    'c.assembly.a.why': "Waxaa la weydiiyay tallaabadee: lambarka, iyo meesha la eego.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.a.why': "Waxaa la weydiiyay intee le'eg in la adkeeyo: ilaa furaha xooggu dhawaaqo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.a.why': "Waxaa la weydiiyay in halkaas la istaagi karo: maya, weligaa, iyo sababta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.a.why': "Waxaa la weydiiyay inay fiican tahay: maya, iyo waxa ka khaldan.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Kweken, sorteren en de kas" (u.kweek) and "Banden, olie en remmen" (u.carservice), 22 November 2026.
    'c.sowing.a.why': "Waxaa la weydiiyay intee hoos u galo: qotada, oo wax ka badan maya.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.a.why': "Waxaa la weydiiyay inay bislaatay: maya, aad bay u cagaaran tahay, iyo waxa la sameeyo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.a.why': "Waxaa la weydiiyay sababta ay u kulushahay: daahda iyo daaqaduhu way xiran yihiin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.a.why': "Waxaa la weydiiyay in la dili karo: maya, iyo sababta uu u caawiyo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.a.why': "Waxaa la weydiiyay in la furayo: haa, iyo sababta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.a.why': "Waxaa la weydiiyay immisa: litirrada, iyo sida loo hubiyo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.a.why': "Waxaa la weydiiyay in mid cusub loo baahan yahay: haa, iyo sababta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.a.why': "Waxaa la weydiiyay waxa la qabanayo: eeg kaarka shaqada.", // nieuw, nalezen // nagelezen AI 22 nov
    // The new sectors Groen, Facilitair, Beveiliging, Voedingsindustrie, Afval en recycling and Kinderopvang (23 November 2026).
    'c.mowing.a.why': "Waxaa la weydiiyay in la qaadan karo: haa, iyo waxa marka hore la sameeyo.", // nieuw, nalezen
    'c.pruning.a.why': "Waxaa la weydiiyay laamahee: kuwa dhintay oo keliya.", // nieuw, nalezen
    'c.hedge.a.why': "Waxaa la weydiiyay intee dherer le'eg: ilaa xarigga, oo ka hooseysiin maya.", // nieuw, nalezen
    'c.chainsaw.a.why': "Waxaa la weydiiyay in la oggol yahay: weli maya, iyo waxa marka hore imanaya.", // nieuw, nalezen
    'c.weeding.a.why': "Waxaa la weydiiyay inuu haramo yahay: maya, iyo waxa lagu sameeyo.", // nieuw, nalezen
    'c.planting.a.why': "Waxaa la weydiiyay meesha uu galayo: meesha beerta ubaxa.", // nieuw, nalezen
    'c.roadside.a.why': "Waxaa la weydiiyay in la tallaabi karo: maya, sug, iyo sababta.", // nieuw, nalezen
    'c.litter.a.why': "Deggane ayaa weydiiyay goorma: ma garanaysid, iyo cidda garanaysa.", // nieuw, nalezen
    'c.reception.a.why': "Booqde ballan ayuu leeyahay: daqiiqad, waad u yeeraysaa.", // nieuw, nalezen
    'c.visitors.a.why': "Waxaa la weydiiyay meesha jaakaddu aado: meesha, iyo halka ay ku taal.", // nieuw, nalezen
    'c.mailroom.a.why': "Waxaa la weydiiyay cidda iska leh: qaybta, iyo dabaqa.", // nieuw, nalezen
    'c.meetingroom.a.why': "Waxaa la weydiiyay saacadda: waqtiga, iyo waxa la samaynayo.", // nieuw, nalezen
    'c.faults.a.why': "Waxaa la weydiiyay sababta ay u qabow tahay: waxa jaban, iyo goorta caawimaaddu imanayso.", // nieuw, nalezen
    'c.repairs.a.why': "Waxaa la weydiiyay inuu dhawaaqayo: haa, iyo sababta.", // nieuw, nalezen
    'c.moving.a.why': "Waxaa la weydiiyay meesha uu aado: qolka, iyo meesha la eego.", // nieuw, nalezen
    'c.closing.a.why': "Waxaa la weydiiyay in qof gudaha joogo: maya, iyo waxa aad hadda samaynayso.", // nieuw, nalezen
    'c.patrol.a.why': "Waxaa la weydiiyay inaad wax aragtay: haa, waxa, iyo meesha.", // nieuw, nalezen
    'c.access.a.why': "Waxaa la weydiiyay in la galo kaar la'aan: waan ka xumahay, kaar la'aan maya.", // nieuw, nalezen
    'c.cameras.a.why': "Waxaa la weydiiyay waxa aad aragto: cidda, meesha, iyo waxa aad samaynayso.", // nieuw, nalezen
    'c.report.a.why': "Waxaa la weydiiyay waxa warbixinta galaya: waxa, meesha iyo goorta.", // nieuw, nalezen
    'c.evacuation.a.why': "Waxaa la weydiiyay in qof walba baxay: maya, iyo immisa ayaa maqan.", // nieuw, nalezen
    'c.firstaid.a.why': "Waxaa la weydiiyay meesha AED-gu yaal: meesha, iyo waxa agtiisa ah.", // nieuw, nalezen
    'c.shoplifting.a.why': "Waxaa la weydiiyay in bac la baari karo: maya, iyo cidda taas samaysa.", // nieuw, nalezen
    'c.aggression.a.why': "Waxaa la weydiiyay sababta maya: sababta, oo si deggan loo sheegay.", // nieuw, nalezen
    'c.hygienelock.a.why': "Waxaa la weydiiyay saacad: maya, iyo xeerka ka dambeeya.", // nieuw, nalezen
    'c.allergens.a.why': "Waxaa la weydiiyay in la wada dhigi karo: maya, iyo sababta.", // nieuw, nalezen
    'c.coldroom.a.why': "Waxaa la weydiiyay sababta uu u dhawaaqayo: sababta, iyo waxa la sameeyo.", // nieuw, nalezen
    'c.foreignbody.a.why': "Waxaa la weydiiyay waxa la sameeyo: cidda la tusayo.", // nieuw, nalezen
    'c.cutting.a.why': "Waxaa la weydiiyay immisa: miisaanka, iyo meesha la eego.", // nieuw, nalezen
    'c.labels.a.why': "Waxaa la weydiiyay taariikhdee: goorta, iyo meesha la eego.", // nieuw, nalezen
    'c.linecleaning.a.why': "Waxaa la weydiiyay inuu nadiif yahay: weli maya, iyo waxa haray.", // nieuw, nalezen
    'c.haccp.a.why': "Waxaa la weydiiyay sababta: si aan u ogaano in cuntadu ammaan tahay.", // nieuw, nalezen
    'c.binlorry.a.why': "Waxaa la weydiiyay in gadaasha lagu raaci karo: maya, iyo meesha lagu raaco.", // nieuw, nalezen
    'c.reversing.a.why': "Waxaa la weydiiyay caawimaad: haa, meesha aad taagan tahay, iyo waxa la sameeyo.", // nieuw, nalezen
    'c.wastesorting.a.why': "Waxaa la weydiiyay meesha uu galo: weelka, iyo sababta.", // nieuw, nalezen
    'c.wastesafety.a.why': "Waxaa la weydiiyay waxa la sameeyo goyn kadib: dhaq, oo sheeg.", // nieuw, nalezen
    'c.yard.a.why': "Waxaa la weydiiyay meesha uu galayo: konteenarka, iyo halka uu yaal.", // nieuw, nalezen
    'c.hazardous.a.why': "Waxaa la weydiiyay waxa ku jira: ma garanaysid, sidaas darteed dhinac dhig.", // nieuw, nalezen
    'c.baler.a.why': "Waxaa la weydiiyay in la eegi karo: maya, iyo waxa marka hore imanaya.", // nieuw, nalezen
    'c.shovel.a.why': "Waxaa la weydiiyay in la dhaafi karo: oo keliya marka darawalku ku arko.", // nieuw, nalezen
    'c.nappies.a.why': "Waxaa la weydiiyay goorma: waqtiga, iyo meesha lagu qoray.", // nieuw, nalezen
    'c.mealtime.a.why': "Waxaa la weydiiyay in la siin karo: maya, sababta, iyo meesha la eego.", // nieuw, nalezen
    'c.naptime.a.why': "Waxaa la weydiiyay inay hurudo: haa, tan iyo goorma, iyo inaad hubinayso.", // nieuw, nalezen
    'c.playtime.a.why': "Waxaa la weydiiyay in ilmuhu ciyaari karo: haa, meesha, iyo waxa xiga.", // nieuw, nalezen
    'c.pickup.a.why': "Waxaa la weydiiyay cidda qaadaysa: qofka, iyo inay liiska ku jirto.", // nieuw, nalezen
    'c.childsafety.a.why': "Waxaa la weydiiyay inay dhacday: haa, waxa ay leedahay, iyo cidda aad wacayso.", // nieuw, nalezen
    'c.sickchild.a.why': "Waxaa la weydiiyay sida uu yahay: waxa aad aragto, iyo waxa aad samaynayso.", // nieuw, nalezen
    'c.grouprules.a.why': "Waxaa la weydiiyay in keligaa la bixi karo: haa, laakiin marka hore u sheeg saaxiib shaqo.", // nieuw, nalezen
    // Second units for Schoonmaak, Horeca, Zorg and Winkel, and the uitzendbureau (23 November 2026).
    'c.sanitary.a.why': "Waxaa la weydiiyay in la dhammeeyay: weli maya, iyo sababta.", // nieuw, nalezen
    'c.hotelroom.a.why': "Waxaa la weydiiyay inta harsan: tirada, iyo goorta aad dhammaynayso.", // nieuw, nalezen
    'c.dosing.a.why': "Waxaa la yiri wax badan isticmaal: maya, badan ma fiicna, iyo waxa aad isticmaasho.", // nieuw, nalezen
    'c.officenight.a.why': "Waxaa la weydiiyay inaad keligaa shaqaynayso: haa, oo fariin ayaad diraysaa.", // nieuw, nalezen
    'c.knives.a.why': "Waxaa la weydiistay inaad wax jarto: haa shef, iyo su'aal ku saabsan sida.", // nieuw, nalezen
    'c.rawcooked.a.why': "Waxaa la weydiiyay inay gluten la'aan tahay: lama hubo, sidaas darteed liiska ayaad eegaysaa.", // nieuw, nalezen
    'c.pass.a.why': "Waxaa la weydiiyay meesha cuntadu taal: miiska cuntada, oo hadda ayaad keenaysaa.", // nieuw, nalezen
    'c.bill.a.why': "Waxaa la weydiiyay in gooni loo bixin karo: haa, oo mashiinka kaarka ayaad keenaysaa.", // nieuw, nalezen
    'c.washing.a.why': "Macmiilku wuxuu yiri maya: waa hagaag, oo wax kale ayaad u bandhigaysaa.", // nieuw, nalezen
    'c.observing.a.why': "Waxaa la weydiiyay in wax gaar ah jiraan: haa, iyo waxa saxda ah.", // nieuw, nalezen
    'c.homecare.a.why': "Waxaa la weydiiyay cidda joogta: salaan, cidda aad tahay, iyo ma soo geli karaa.", // nieuw, nalezen
    'c.liftaids.a.why': "Waxaa la weydiiyay in keligaa la sameeyo: haa, go'a simbiriirixa, oo waad keenaysaa.", // nieuw, nalezen
    'c.returns.a.why': "Waxaa la weydiiyay in la soo celin karo: haa, iyo su'aal ku saabsan rasiidhka.", // nieuw, nalezen
    'c.facing.a.why': "Waxaa la weydiiyay inaad dhammaysay: ku dhowaad, iyo waxa weli haray.", // nieuw, nalezen
    'c.shrink.a.why': "Waxaa la weydiiyay in boorsadaada la eegi karo: haa, oo rasiidhka ayaad tusaysaa.", // nieuw, nalezen
    'c.shopclose.a.why': "Waxaa la weydiiyay in la soo geli karo: waan ka xumahay, waa xiran yahay, iyo goorta mar kale la furayo.", // nieuw, nalezen
    'c.hirer.a.why': "Waxaa la weydiiyay inaad meel cusub ka bilowdo: haa, iyo su'aal ku saabsan waqtiga.", // nieuw, nalezen
    'c.phases.a.why': "Waxaa la sheegay in shaqadu joogsanayso: hagaag, oo shaqo kale ayaad weydiinaysaa.", // nieuw, nalezen
    'c.deductions.a.why': "Waxaa lagu sheegay jarid: waxaad weydiinaysaa in la oggol yahay, oo waad hubinaysaa.", // nieuw, nalezen
    'c.agencyhome.a.why': "Waxaa la yiri dhowaan ka bax: taasi waa gaaban tahay, oo marka hore talo ayaad weydiinaysaa.", // nieuw, nalezen
    // The basis units at four lessons (23 November 2026).
    'c.roster.a.why': "Waxaa la sheegay in jadwalku isbeddelay: hagaag, iyo maalintee.", // nieuw, nalezen
    'c.breaks.a.why': "Waxaa la weydiiyay nasashada qadada: waqtiga, iyo inta ay qaadato.", // nieuw, nalezen
    'c.wound.a.why': "Wuu suuxi gaadhay: ha jiifo, oo caawimaad keen.", // nieuw, nalezen
    'c.callhelp.a.why': "Waxaa la weydiiyay inuu jawaabayo: maya, ma jawaabayo.", // nieuw, nalezen
    'c.vacancy.a.why': "Waxaa la weydiiyay sababta aad u wacdo: shaqada bannaan, oo weli ma furan tahay?", // nieuw, nalezen
    'c.result.a.why': "Maya ayaa la yiri: jawaab deggan, oo waxaad weydiinaysaa sababta.", // nieuw, nalezen
    'c.residence.a.why': "Waxaa la sheegay in sharcigu dhici gaadhay: isla markiiba ayaad codsanaysaa.", // nieuw, nalezen
    'c.newhome.a.why': "Waxaa la weydiiyay meesha aad ku nooshahay: guri cusub, iyo cinwaanka cusub.", // nieuw, nalezen
    'c.payparts.a.why': "Waxaa la weydiiyay lambarka shaqaalaha: meesha uu ku qoran yahay warqadda mushaharka.", // nieuw, nalezen
    'c.latepay.a.why': "Waxaa la sheegay in lacagtu goor dambe imanayso: waxaad rabtaa in taas la qoro.", // nieuw, nalezen
    'c.holiday.a.why': "Waxaa la weydiiyay inaad May aaddo: waxaad door bidaysaa July, iyo sababta.", // nieuw, nalezen
    'c.special.a.why': "Waxaa la weydiiyay fasaxa dhalashada: haa, iyo goorta.", // nieuw, nalezen
    'c.unwell.a.why': "Waxaa la weydiiyay inaad fiican tahay: maya, oo ma aadi kartaa guriga?", // nieuw, nalezen
    'c.injury.a.why': "Waxaa la weydiiyay warbixin: haa, iyo nuqul adiga kuu ah.", // nieuw, nalezen
    'c.debt.a.why': "Waxaa la yiri joog ilaa deynta la bixiyo: lama oggola, caawimaad raadso.", // nieuw, nalezen
    'c.inspection.a.why': "Waxaa la weydiiyay inaad hadasho: haa, laakiin meel aanu madaxu maqlayn.", // nieuw, nalezen
    'c.carpool.a.why': "Waxaa la weydiiyay cidda wadaysa: adiga, iyo goorta aad soo qaadayso.", // nieuw, nalezen
    'c.train.a.why': "Waxaa la weydiiyay sababta aad u soo daahday: tareenka, oo fariin ayaad dirtay.", // nieuw, nalezen
    'c.checklist.a.why': "Waxaa la weydiiyay inaad wax illowday: mar kale ayaad liiska eegaysaa.", // nieuw, nalezen
    'c.leavesite.a.why': "Waxaa la weydiiyay inaad ugu dambeyn baxayso: haa, wax walba waa dansan yihiin oo albaabku waa qufulan yahay.", // nieuw, nalezen
    'c.stagedays.a.why': "Waxaa la weydiiyay sababta aad u maqnayd: xanuun, oo labadaba waad wacday.", // nieuw, nalezen
    'c.stageend.a.why': "Waxaa la weydiiyay qorshayaashaada: marka hore shahaadada, kadib shaqo.", // nieuw, nalezen
    'c.neighbours.a.why': "Deris cusub ayaa salaamay: ku faraxsanahay inaan ku barto, iyo magacaaga.", // nieuw, nalezen
    'c.join.a.why': "Waxaa lagu weydiiyay inaad timaado: haa, oo waxaad rabtaa inaad la hadasho macallinka.", // nieuw, nalezen
    'c.workphotos.a.why': "Sawir internetka loogu talagalay ayaa la weydiiyay: maya edeb leh.", // nieuw, nalezen
    'c.device.a.why': "Waxaa la weydiiyay app cusub: marka hore weydii waaxda IT-ga.", // nieuw, nalezen
    // "Veiligheid op het werk" and the VOG (23 November 2026).
    'c.safetysigns.a.why': "Waxaa la weydiiyay waxa calaamad ka dhigan tahay: taxaddar, iyo calaamadda ay tahay.", // nieuw, nalezen
    'c.substances.a.why': "Waxaa la weydiiyay in ay sun tahay: lama qiyaaso, waa la eegaa.", // nieuw, nalezen
    'c.firefight.a.why': "Waxaa la sheegay in dab jiro: waa yar yahay, sidaas darteed qalabka dab-demiska ayaa la keenaa.", // nieuw, nalezen
    'c.permitwork.a.why': "Waxaa la weydiiyay cidda bannaanka ku haraysa: qofka laftiisa, iyo hawshiisa.", // nieuw, nalezen
    'c.vog.a.why': "Waxaa la weydiiyay VOG-ga: weli maya, iyo waxa la sugayo.", // nieuw, nalezen
    // "Operator in de procesindustrie" (23 November 2026).
    'c.plantround.a.why': "Waxaa la weydiiyay alaarmiga: waxa xad-dhaafay, iyo meesha.", // nieuw, nalezen
    'c.plantfault.a.why': "Waxaa la weydiiyay in la shidi karo: maya, quful ayaa weli saaran.", // nieuw, nalezen
    'c.shiftwork.a.why': "Waxaa la weydiiyay waxa dhacay: cilladda, iyo meesha lagu qoray.", // nieuw, nalezen
    'c.heatdust.a.why': "Waxaa la weydiiyay taleefanka: maya, khatarta halkan jirta awgeed.", // nieuw, nalezen
    // eight new lessons (26 November 2026).
    'c.debthelp.a.why': "Waxaa la sheegay in biilka aan la bixin: haa, oo qorshe lacag-bixineed ayaa la weydiistay.", // nieuw, nalezen
    'c.taxes.a.why': "Waxaa la sheegay in baqshad buluug ah jirto: mahadsanid, oo isla markiiba waa la furayaa.", // nieuw, nalezen
    'c.discrimination.a.why': "Waxaa la weydiiyay in wax walba fiican yihiin: maya, oo waa la soo sheegi doonaa.", // nieuw, nalezen
    'c.union.a.why': "Waxaa la weydiiyay sababta xubinnimada: way u doodaan qofka.", // nieuw, nalezen
    'c.kiln.a.why': "Waxaa la weydiiyay in jajabka gacanta lagu soo qaadi karo: maya, xaaqin iyo majarafad.", // nieuw, nalezen
    'c.mixlab.a.why': "Waxaa la weydiiyay in dufcadda la oggolaaday: weli maya, shaybaarka ayaa tijaabinaya.", // nieuw, nalezen
    'c.firstweeks.a.why': "Waxaa la weydiiyay wareegga tusidda: ku dhowaad wax walba, iyo hal su'aal.", // nieuw, nalezen
    'c.orderpick.a.why': "Waxaa la weydiistay in reachtruck-ga la kaxeeyo: maya, tababar looma helin.", // nieuw, nalezen
  },
};
export default t;
