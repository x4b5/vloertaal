import type { CultureTranslation } from '../culture/types';

/** Somali (so), 5 November 2026: simple standard Somali, "adiga". */
const t: CultureTranslation = {
  ui: {
    about: "Ku saabsan Vloertaal", // nieuw, nalezen
    forCoaches: "Loogu talagalay la-taliyayaasha iyo loo-shaqeeyayaasha", // nieuw, nalezen
    whatsNew: "Maxaa cusub?", // nieuw, nalezen
    newsInDutch: "Isbeddelladu waa Af-Holandiis.", // nieuw, nalezen
    upcomingNow: "Hadda ayaan ka shaqaynaynaa tan.", // nieuw, nalezen
  },
  gloss: {
    'a.what': "Waa maxay Vloertaal?", // nieuw, nalezen
    'a.what.b': "Vloertaal wuxuu kaa caawiyaa inaad barato Af-Holandiiska aad shaqada ugu baahan tahay: bakhaarka, jikada, warshadda ama goobta dhismaha. Maaha oo keliya erayada shaqada, balse dhammaan luqadda ku saabsan shaqada: codsashada shaqo, qandaraaskaaga iyo waraaqda mushaharkaaga, xuquuqdaada, guriga iyo waraaqaha, sheegidda inaad xanuunsan tahay iyo la dhaqanka saaxiibbada shaqada. Casharradu waa gaagaaban yihiin, sidaas darteed maalin kasta dhowr daqiiqo ayaad ku celcelin kartaa. U arag Vloertaal wax yar oo dheeraad ah oo aad dhex samayso. Kuma beddelo koorso luqadeed ama macallin luqadeed.", // nieuw, nalezen
    'a.what.lead': "Vloertaal wuxuu kaa caawiyaa inaad barato Af-Holandiiska aad shaqadaada u baahan tahay. Sidoo kale waxaad baranaysaa sida shaqadu halkan u socoto: qandaraaskaaga, mushaharkaaga, sheegidda inaad xanuunsan tahay. Cashar wuxuu qaataa dhowr daqiiqo. Waa wax dheeraad ah: koorso luqadeed weli waa loo baahan yahay.", // nieuw, nalezen
    'a.story': "Maxaa Vloertaal loo sameeyay?", // nieuw, nalezen
    'a.story.b': "Salaan, waxaan ahay Xavier. Waxaan u shaqeeyaa sidii la-taliye shaqo-helid. Waxaan dadka ka caawiyaa inay shaqo helaan. Mararka qaar shaqadu way khaldantaa. Badanaa sababtu waa luqadda: qof ma fahmo tilmaamaha, ama kuma dhiirran inuu wax weydiiyo. Sidaas darteed ayaan u bilaabay Vloertaal. Waxaan rajeynayaa in app-ku caawiyo, si dad badan ay shaqadooda si fiican u qabtaan oo ay shaqadooda u haystaan. Laakiin app-kan keligay ma dhisi karo, mana doonayo.", // nieuw, nalezen
    'a.beta': "Nooc tijaabo ah", // nieuw, nalezen
    'a.beta.b': "Hadda Vloertaal waan sii dhisaynaa, annagoo wada jirna. App-ku weli waa nooc tijaabo ah (beta). Waxaan ku tijaabinaynaa koox yar oo arday iyo la-taliyayaal ah. Wax walba weli lama hubin, taasna caawimaad ayaan u baahanahay. Mid ka mid ah luqadahayaga ma luqaddaada hooyo baa? Mise wax badan ayaad ka taqaan shaqada iyo xeerarka Holland ama Beljiyam? Markaas naga caawi inaan app-ka hagaajinno. Khalad ma heshay? Noo sheeg. Cinwaankayagu wuxuu ku yaal bogga hoostiisa.", // nieuw, nalezen
    'a.mission': "Hadafkayaga", // nieuw, nalezen
    'a.mission.b': "Vloertaal wuxuu rabaa inuu wax yar caawiyo, si barashada Af-Holandiiska shaqada ay u noqoto mid xoogaa fudud: bilaash, fudud in la isticmaalo, iyo caawimaad luqaddaada ah. Qofna lacag kama sameeyo Vloertaal: xayeysiis ma jiro, rukummo ma jirto, xogtaadana weligeed lama iibiyo.", // nieuw, nalezen
    'a.bram': "Waa kuma Bram?", // nieuw, nalezen
    'a.bram.b': "Bram waa saaxiibkaaga shaqada ee app-ka. Sannado badan ayuu ka shaqeeyay bakhaarro iyo goobo dhismo, wuxuuna jecel yahay inuu caawiyo saaxiibbada shaqada ee cusub. Si deggan ayuu u hadlaa, isaga agtiisana waa caadi inaad khalad samayso.", // nieuw, nalezen
    'a.how': "Sidee buu u shaqeeyaa?", // nieuw, nalezen
    'a.how.b': "Waxaad Af-Holandiis ku baranaysaa caawimaad luqaddaada ah: tilmaamaha iyo erayada waxaad sidoo kale ku arkaysaa Af-Soomaali. Waad dhegeysanaysaa, riixaysaa, weedho samaynaysaa, waxaadna ku celcelinaysaa wadahadallo gaagaaban oo aad la yeelanayso saaxiibbada shaqada.", // nieuw, nalezen
    'a.culture': "Sida wax halkan u socdaan", // nieuw, nalezen
    'a.culture.b': "Luqaddu waa koowaad. Laakiin Vloertaal wuxuu sidoo kale sharxaa sida wax badanaa ugu socdaan shaqada Holland iyo Beljiyam: inaad madaxaaga ku dhahdo “je”, inaad su'aalo weydiiso, inaad waqtiga ilaaliso, iyo inaad sheegto marka wax ku dhibayaan. Talooyinkan waxaad ka helaysaa casharrada iyo qaybta “Talooyinka goobta shaqada”.", // nieuw, nalezen
    'a.who': "Yaa loogu talagalay?", // nieuw, nalezen
    'a.who.b': "Qof kasta oo ku cusub shaqada Holland ama Beljiyam. Luqadaha caawinta: Carabi, Tigrinya, Faarsi, Dari, Soomaali, Yukreeniyaan, Turki, Boolish, Romaaniyaan, Bulgaariyaan, Isbaanish, Boortaqiis, Faransiis iyo Jarmal.", // nieuw, nalezen
    'a.free': "Asturnaantaada", // nieuw, nalezen
    'a.free.b': "Akoon uma baahnid. Horumarkaaga waxaa lagu kaydiyaa taleefankan ama kombiyuutarkan oo keliya. Haddii ay shidan tahay, app-ku wuxuu magac la'aan u tiriyaa inta jeer ee casharrada la sameeyo, iyo inta maalmood: magac ma jiro, raadraac ma jiro. Haddii app-ku khalad leeyahay, taasna wuu tiriyaa, adiga waxba kaa ogaan maayo. Tan waad ka dami kartaa Dejinta. Natiijada tijaabada, jawaabahaaga “Ma u dhiirran kartaa tan?” iyo duubista codkaaga sidoo kale waxay ku jiraan taleefankan ama kombiyuutarkan oo keliya. La-taliye ama macallin wuxuu arkaa oo keliya waxa aad adigu tusto, tusaale ahaan kaarka “Tus sida ay u socoto”. Ma shiddaa “Taleefanka u daa inuu dhegeysto (tijaabo)”? Markaas taleefanka laftiisa ayaa garanaya Af-Holandiiskaaga. Waxba uma tagaan annaga ama dad kale.", // nieuw, nalezen
    'a.disclaimer': "Waa wanaagsan tahay inaad ogaato", // nieuw, nalezen
    'a.disclaimer.b': "Talooyinka Vloertaal waa macluumaad guud, maaha talo sharci. Xeerarku way isbeddeli karaan; qoraallada waxaa markii ugu dambeysay la cusboonaysiiyay Oktoobar 2026. Xaaladdaada gaarka ah, weydii loo-shaqeeyahaaga, ururka shaqaalaha ama Juridisch Loket.", // nieuw, nalezen
    'a.contact': "Su'aal ama khalad?", // nieuw, nalezen
    'a.contact.b': "Ma heshay khalad, tusaale ahaan turjumaad ama talo? Mise su'aal ayaad qabtaa? E-mail u dir hoi@vloertaal.nl. Sawir shaashadeed (screenshot) ayaa caawiya.", // nieuw, nalezen
  },
};

export default t;
