import type { CultureTranslation } from '../culture/types';

/** Work-and-rights units (src/content/work.ts): lessons, words, sentences, chats and tips. */
const t: CultureTranslation = {
  ui: {},
  gloss: {
    'u.apply': 'İşe başvurmak',
    'l.cv': 'CV’n ve mektubun',
    'w.cv': 'CV (özgeçmiş)',
    'w.motivatie': 'motivasyon (bu işi neden istediğin)',
    'w.ervaring': 'deneyim',
    'w.opleiding': 'eğitim, öğrenim',
    'w.vaardigheden': 'beceriler',
    'w.referentie': 'referans (işin hakkında bilgi verebilecek biri)',
    's.cv.1': 'İşte CV’m.',
    's.cv.2': 'İnşaatta deneyimim var.',
    's.cv.3': 'Üç dil konuşuyorum.',
    'c.cv.q': 'Referansın var mı?',
    'c.cv.a': 'Evet, önceki patronum.',
    'l.interview': 'İş görüşmesi',
    'w.sollicitatiegesprek': 'iş görüşmesi',
    'w.begroeten': 'selamlamak',
    'w.vertellen': 'anlatmak',
    'w.vraagstellen': 'soru sormak',
    'w.salaris': 'maaş',
    'w.functie': 'iş, pozisyon',
    's.interview.1': 'Bir iş görüşmem var.',
    's.interview.2': 'Hâlâ Hollandaca öğreniyorum.',
    's.interview.3': 'Sizden ne zaman haber alırım?',
    'c.interview.q': 'Bana biraz kendinden bahset.',
    'c.interview.a': 'Beş yıl bir depoda çalıştım.',
    'u.contract': 'İş ve sözleşmeler',
    'l.findwork': 'İş bulmak',
    'w.vacature': 'iş ilanı',
    'w.uitzendbureau': 'geçici iş ajansı',
    'w.solliciteren': 'işe başvurmak',
    'w.contract': 'sözleşme',
    'w.tekenen': 'imzalamak',
    'w.tijdelijk': 'geçici',
    's.findwork.1': 'Bir işe başvurmak istiyorum.',
    's.findwork.2': 'Sözleşme geçici mi, süresiz mi?',
    's.findwork.3': 'Sözleşmenin bir kopyasını alabilir miyim?',
    'c.findwork.q': 'Nasıl bir iş arıyorsun?',
    'c.findwork.a': 'Depoda iş arıyorum.',
    'l.contract': 'Sözleşmen',
    'w.werkgever': 'işveren',
    'w.uren': 'saatler',
    'w.oproepkracht': 'çağrı üzerine çalışan',
    'w.proeftijd': 'deneme süresi',
    'w.opzegtermijn': 'ihbar süresi',
    'w.cao': 'toplu iş sözleşmesi',
    's.contract.1': 'Haftada kaç saat çalışıyorum?',
    's.contract.2': 'Deneme süresi ne kadar?',
    's.contract.3': 'Benim için hangi toplu iş sözleşmesi geçerli?',
    'c.contract.q': 'Yarın işe gelebilir misin?',
    'c.contract.a': 'Evet, saat kaçta orada olmalıyım?',
    'l.agency': 'Ajans üzerinden çalışmak',
    'w.uitzendkracht': 'geçici işçi (ajans üzerinden çalışan)',
    'w.intercedent': 'ajanstaki irtibat kişisi',
    'w.urenbriefje': 'çalışma saatleri formu',
    'w.opdracht': 'görevlendirme (bir şirketteki iş)',
    'w.verlengen': 'uzatmak',
    'w.uitbetalen': 'ödemek (parayı vermek)',
    's.agency.1': 'Geçici iş ajansı üzerinden çalışıyorum.',
    's.agency.2': 'Görevlendirmem uzatılacak mı?',
    's.agency.3': 'Görevlendirmem ne zaman bitiyor?',
    'c.agency.q': 'Saatlerini bildirdin mi?',
    'c.agency.a': 'Evet, dün uygulamadan.',
    'u.papers': 'Konut ve belgeler',
    'l.bsn': 'BSN’in ve belgelerin',
    'w.bsn': 'vatandaş hizmet numarası',
    'w.identiteitsbewijs': 'kimlik belgesi',
    'w.gemeente': 'belediye',
    'w.inschrijven': 'kaydolmak',
    'w.adres': 'adres',
    'w.zorgverzekering': 'sağlık sigortası',
    's.bsn.1': 'Belediyeye kaydoluyorum.',
    's.bsn.2': 'Adresim değişti.',
    's.bsn.3': 'DigiD ile giriş yapıyorum.',
    'c.bsn.q': 'Kimliğini görebilir miyim?',
    'c.bsn.a': 'Evet, işte pasaportum.',
    'l.housing': 'Konut',
    'w.kamer': 'oda',
    'w.huur': 'kira',
    'w.huurcontract': 'kira sözleşmesi',
    'w.borg': 'depozito',
    'w.huisbaas': 'ev sahibi',
    'w.inhouden': '(maaştan) kesmek',
    's.housing.1': 'Haftalık kira ne kadar?',
    's.housing.2': 'Depozitoyu geri alır mıyım?',
    's.housing.3': 'Ayrı bir kira sözleşmesi istiyorum.',
    'c.housing.q': 'Kirayı maaşından kesiyoruz.',
    'c.housing.a': 'O zaman bunu yazılı istiyorum.',
    'u.pay': 'Maaş',
    'l.payslip': 'Maaş bordron',
    'w.loon': 'ücret, maaş',
    'w.bruto': 'brüt (vergiden önce)',
    'w.netto': 'net (eline geçen)',
    'w.loonstrook': 'maaş bordrosu',
    'w.belasting': 'vergi',
    'w.uurloon': 'saatlik ücret',
    's.payslip.1': 'Saatlik ücretim ne kadar?',
    's.payslip.2': 'Maaş bordrom doğru değil.',
    's.payslip.3': 'Net, brütten az.',
    'c.payslip.q': 'Maaş bordronu aldın mı?',
    'c.payslip.a': 'Evet, ama bazı saatler eksik.',
    'l.extra': 'Ek para',
    'w.vakantiegeld': 'tatil parası (yılda bir ödenen yasal ek ücret)',
    'w.overuren': 'fazla mesai saatleri',
    'w.toeslag': 'ek ödeme',
    'w.minimumloon': 'asgari ücret',
    'w.bankrekening': 'banka hesabı',
    'w.betalen': 'ödemek',
    's.extra.1': 'Gece çalışması için ek ödeme alır mıyım?',
    's.extra.2': 'Fazla mesai saatleri ödeniyor mu?',
    's.extra.3': 'Maaşım banka hesabıma yatıyor.',
    'c.extra.q': 'Bugün iki saat daha kalabilir misin?',
    'c.extra.a': 'Evet, fazla mesaiyi not eder misin?',
    'u.house': 'İş yeri kuralları',
    'l.phone': 'İş yerinde telefonun',
    'w.telefoon': 'telefon',
    'w.appen': 'mesaj atmak (uygulamayla)',
    'w.kluisje': 'kilitli dolap',
    'w.uitzetten': 'kapatmak',
    'w.prive': 'özel, kişisel',
    'w.foto': 'fotoğraf',
    's.phone.1': 'Telefonum dolabımda.',
    's.phone.2': 'Telefonumu kapatıyorum.',
    's.phone.3': 'Burada fotoğraf çekebilir miyim?',
    'c.phone.q': 'Makinenin yanında telefon yok, tamam mı?',
    'c.phone.a': 'Tamam, mesajları molada atarım.',
    'l.smoking': 'Sigara içmek',
    'w.roken': 'sigara içmek',
    'w.rookplek': 'sigara içme yeri',
    'w.verboden': 'yasak',
    'w.buiten': 'dışarıda',
    'w.esigaret': 'elektronik sigara (vape)',
    'w.brandbaar': 'kolay yanar (yanıcı)',
    's.smoking.1': 'Burada sigara içmek yasak.',
    's.smoking.2': 'Sigara içme yeri nerede?',
    's.smoking.3': 'Sadece molada dışarıda sigara içiyorum.',
    'c.smoking.q': 'Sigara içmeye geliyor musun?',
    'c.smoking.a': 'Hayır, henüz molam yok.',
    'l.clock': 'Kart basmak ve zamanında olmak',
    'w.inklokken': 'giriş kaydı yapmak (kart basmak)',
    'w.uitklokken': 'çıkış kaydı yapmak (kart basmak)',
    'w.pasje': '(personel) kartı',
    'w.prikklok': 'kart basma saati',
    'w.optijd': 'zamanında',
    'w.rooster': 'çalışma planı',
    's.clock.1': 'Saat altıda giriş kaydı yapıyorum.',
    's.clock.2': 'Kartımı unuttum.',
    's.clock.3': 'Çalışma planı nerede?',
    'c.clock.q': 'Benim yerime giriş kaydı yapar mısın?',
    'c.clock.a': 'Hayır, buna izin yok.',
    'l.hygiene': 'Alkol, uyuşturucu ve hijyen',
    'w.alcohol': 'alkol',
    'w.medicijn': 'ilaç',
    'w.handenwassen': 'el yıkamak',
    'w.werkkleding': 'iş kıyafeti',
    'w.haarnetje': 'bone (saç filesi)',
    'w.schoon': 'temiz',
    's.hygiene.1': 'İşten önce ellerini yıka.',
    's.hygiene.2': 'Alkol ve uyuşturucu yasak.',
    's.hygiene.3': 'İş kıyafetlerim temiz.',
    'c.hygiene.q': 'Boneni taktın mı?',
    'c.hygiene.a': 'Evet, yüzüğümü de çıkardım.',
    'u.social': 'İyi geçinmek',
    'l.smalltalk': 'Sohbet ve molalar',
    'w.weekend': 'hafta sonu',
    'w.koffie': 'kahve',
    'w.gezellig': 'keyifli, samimi',
    'w.weer': 'hava',
    'w.verjaardag': 'doğum günü',
    'w.gefeliciteerd': 'tebrikler',
    's.smalltalk.1': 'Hafta sonun nasıl geçti?',
    's.smalltalk.2': 'Yanınıza oturabilir miyim?',
    's.smalltalk.3': 'Bugün hava güzel.',
    'c.smalltalk.q': 'Bu hafta sonu ne yaptın?',
    'c.smalltalk.a': 'Arkadaşlarla futbol oynadım.',
    'l.mistakes': 'Geri bildirim ve hatalar',
    'w.fout': 'hata',
    'w.compliment': 'övgü, iltifat',
    'w.feedback': "geri bildirim (birinin işin hakkında söyledikleri)", // nieuw, nalezen
    'w.uitleggen': 'açıklamak',
    'w.leren': 'öğrenmek',
    'w.verbeteren': 'iyileştirmek, düzeltmek',
    's.mistakes.1': 'Pardon, bir hata yaptım.',
    's.mistakes.2': 'Açıklayabilir misin?',
    's.mistakes.3': 'Övgün için teşekkürler!',
    'c.mistakes.q': 'Çok iyi iş çıkardın!', // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.mistakes.a': 'Teşekkürler, bunu duymak güzel.',
    'l.respect': 'Herkese saygı',
    'w.respect': 'saygı',
    'w.gelijk': 'eşit',
    'w.grens': 'sınır',
    'w.neezeggen': 'hayır demek',
    'w.pesten': 'zorbalık yapmak',
    'w.vertrouwenspersoon': 'güven danışmanı (sorunlarını gizlice anlatabileceğin kişi)',
    's.respect.1': 'Burada herkes eşittir.',
    's.respect.2': 'Bunu doğru bulmuyorum.',
    's.respect.3': 'Dur, sınırım bu.',
    'c.respect.q': 'Ne oldu? Üzgün görünüyorsun.',
    'c.respect.a': 'Bir iş arkadaşım bana zorbalık yapıyor.',
    'u.rights': 'Kurallar ve haklar',
    'l.health': 'Güvenli ve sağlıklı çalışmak',
    'w.arbowet': 'iş sağlığı ve güvenliği yasası',
    'w.veilig': 'güvenli',
    'w.werktijden': 'çalışma saatleri',
    'w.rust': 'dinlenme',
    'w.beschermingsmiddelen': 'koruyucu ekipman',
    'w.arbeidsinspectie': 'Çalışma Müfettişliği',
    's.health.1': 'Mola hakkım var.',
    's.health.2': 'İş güvenli olmalı.',
    's.health.3': 'Bunu Çalışma Müfettişliğine bildiriyorum.',
    'c.health.q': 'Şimdi mola vermen lazım.',
    'c.health.a': 'Tamam, biraz oturayım.',
    'l.rights': 'Hakların',
    'w.recht': 'hak',
    'w.discriminatie': 'ayrımcılık',
    'w.vakbond': 'sendika',
    'w.juridischloket': 'ücretsiz hukuki yardım masası',
    'w.klacht': 'şikâyet',
    'w.ontslag': 'işten çıkarılma',
    's.rights.1': 'Şikâyette bulunmak istiyorum.',
    's.rights.2': 'Sendika üyesiyim.',
    's.rights.3': 'Bu ayrımcılık.',
    'c.rights.q': 'İşten çıkarılman için buraya imza at.',
    'c.rights.a': 'Hayır, henüz imzalamıyorum.',
    'l.mustmay': 'Zorunda mısın, yoksa seçebilir misin?',
    'w.moeten': 'zorunda olmak, -meli',
    'w.niethoeven': 'zorunda olmamak',
    'w.nodig': 'gerekli',
    'w.vrijwillig': 'gönüllü, isteğe bağlı',
    'w.keuze': 'seçim',
    'w.regel': 'kural',
    's.mustmay.1': 'Bunu imzalamak zorunda mıyım?',
    's.mustmay.2': 'Hayır, imzalamak zorunda değilsin.',
    's.mustmay.3': 'Kural bu: kask zorunludur.',
    'c.mustmay.q': 'Cumartesi fazla mesai yapmak zorunda mıyım?',
    'c.mustmay.a': 'Hayır, gerekli değil. Gönüllüdür.',
    'u.leave': "İzin", // nieuw, nalezen // nagelezen AI 22 nov
    'l.leave': 'İzin günleri',
    'w.vakantiedagen': 'izin günleri (tatil)',
    'w.verlof': 'izin',
    'w.aanvragen': 'istemek, başvurmak',
    'w.feestdag': 'resmî tatil',
    'w.vrij': 'izinli, çalışmıyor',
    'w.calamiteitenverlof': 'acil durum izni',
    's.leave.1': 'İzin istiyorum.',
    's.leave.2': 'Resmî tatilde izinli miyim?',
    's.leave.3': 'Evde acil bir durum var.',
    'c.leave.q': 'Ne zaman tatile gitmek istiyorsun?',
    'c.leave.a': 'Temmuzda, üç hafta.',
    'l.illness': 'Evde hasta',
    'w.ziekmelden': 'hastalık bildirmek',
    'w.betermelden': 'iyileştiğini bildirmek',
    'w.bedrijfsarts': 'işyeri hekimi',
    'w.ziekte': 'hastalık',
    'w.doorbetalen': 'ödemeye devam etmek',
    'w.wachtdag': 'bekleme günü (ücretsiz)',
    's.illness.1': 'Hasta olduğumu bildiriyorum.',
    's.illness.2': 'İşyeri hekimiyle randevum var.',
    's.illness.3': 'Yarın işe geri geliyorum.',
    'c.illness.q': 'Tam olarak neyin var?',
    'c.illness.a': 'Bunu işyeri hekimiyle konuşacağım.',
    'u.exploit': 'Haklarını bil: sömürü',
    'l.warning': 'Uyarı işaretleri',
    'w.uitbuiting': 'sömürü',
    'w.paspoort': 'pasaport',
    'w.schuld': 'borç',
    'w.dreigen': 'tehdit etmek',
    'w.onderbetaald': 'çok az ücret alan',
    'w.afpakken': 'elinden almak',
    's.warning.1': 'Pasaportum patronumda.',
    's.warning.2': 'Maaş bordrosu almıyorum.',
    's.warning.3': 'Bir borcu geri ödemem gerekiyor.',
    'c.warning.q': 'Pasaportunu bana ver.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.warning.a': 'Hayır, sadece bir kopyasını alabilirsiniz.',
    'l.gethelp': 'Yardım almak',
    'w.politie': 'polis',
    'w.anoniem': 'adını vermeden (anonim)',
    'w.melden': 'bildirmek',
    'w.hulp': 'yardım',
    'w.gevaar': 'tehlike',
    'w.bang': 'korkmuş',
    's.gethelp.1': 'Bir şey bildirmek istiyorum.',
    's.gethelp.2': 'Bunu adımı vermeden yapabilir miyim?',
    's.gethelp.3': 'Patronumdan korkuyorum.',
    'c.gethelp.q': 'Sana nasıl yardım edebilirim?',
    'c.gethelp.a': 'İş yerinde bana kötü davranılıyor.',
    'u.contact': 'İş yerini aramak ve mesaj atmak',
    'l.callin': 'Telefonla haber vermek',
    'w.telefoontje': 'telefon görüşmesi',
    'w.terugbellen': 'geri aramak',
    'w.bereikbaar': 'ulaşılabilir (telefonla)',
    'w.reden': 'sebep',
    'w.overmorgen': 'öbür gün',
    'w.inspreken': 'sesli mesaj bırakmak',
    's.callin.1': 'Merhaba, ben Ali.',
    's.callin.2': 'Sanırım öbür gün geri gelirim.',
    's.callin.3': 'Beni geri arayabilir misiniz?',
    'c.callin.q': 'Ne zaman geri geleceksin?',
    'c.callin.a': 'Sanırım pazartesi.',
    'l.texting': 'Mesajlar ve vardiya uygulaması',
    'w.bericht': 'mesaj',
    'w.app': 'uygulama',
    'w.reageren': 'cevap vermek',
    'w.ruilen': 'değiş tokuş etmek',
    'w.kijken': 'bakmak, kontrol etmek',
    'w.groet': 'selam (mesajın sonunda)',
    's.texting.1': 'On dakika geç kalacağım.',
    's.texting.2': 'Benimle vardiya değiştirmek isteyen var mı?',
    's.texting.3': 'Uygulamaya her gün bakıyorum.',
    'c.texting.q': 'Cumartesi fazladan bir vardiya yapabilir misin?',
    'c.texting.a': 'Evet, uygulamadan hemen cevap veririm.',
    'u.grow': 'Diplomalar ve ilerlemek',
    'l.certs': 'Sertifikalar',
    'w.certificaat': 'sertifika',
    'w.cursus': 'kurs',
    'w.examen': 'sınav',
    'w.slagen': '(sınavı) geçmek',
    'w.heftruckcertificaat': 'forklift sertifikası',
    'w.halen': '(sertifika) almak',
    's.certs.1': 'VCA güvenlik sertifikam var.',
    's.certs.2': 'Bir kursa gitmek istiyorum.',
    's.certs.3': 'Kursun parasını işveren mi ödüyor?',
    'c.certs.q': 'Forklift sertifikan var mı?',
    'c.certs.a': 'Hayır, ama almak isterim.',
    'l.diploma': 'Diploman ve eğitimin',
    'w.diploma': 'diploma',
    'w.waarderen': '(diplomayı) değerlendirtmek',
    'w.training': 'eğitim',
    'w.verplicht': 'zorunlu',
    'w.werktijd': 'çalışma süresi',
    'w.verderkomen': 'ilerlemek',
    's.diploma.1': 'Kendi ülkemden bir diplomam var.',
    's.diploma.2': 'Bu eğitim zorunlu mu?',
    's.diploma.3': 'İşimde ilerlemek istiyorum.',
    'c.diploma.q': 'Bir eğitim almak ister misin?',
    'c.diploma.a': 'Evet, lütfen! Parasını kim ödüyor?',
    'u.health': 'Sağlık',
    'l.doctor': 'Doktor mu, 112 mi?',
    'w.huisarts': 'aile hekimi',
    'w.huisartsenpost': 'akşam, gece ve hafta sonu için nöbetçi aile hekimi',
    'w.apotheek': 'eczane',
    'w.recept': 'reçete',
    'w.spoed': 'acil',
    'w.ambulance': 'ambulans',
    's.doctor.1': 'Aile hekiminden randevu istiyorum.',
    's.doctor.2': 'Eczane nerede?',
    's.doctor.3': 'Acil.',
    'c.doctor.q': 'Nöbetçi aile hekimi, size nasıl yardım edebilirim?',
    'c.doctor.a': 'Oğlumun ateşi yüksek.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'l.insurance': 'Sağlık sigortası',
    'w.premie': 'prim (aylık ödeme)',
    'w.eigenrisico': 'kendi payın (önce senin ödediğin masraflar)',
    'w.zorgtoeslag': 'sağlık yardımı (devletten)',
    'w.verzekeraar': 'sigorta şirketi',
    'w.permaand': 'aylık',
    'w.vergoeden': '(masrafları) karşılamak',
    's.insurance.1': 'Her ay prim ödüyorum.',
    's.insurance.2': 'Bu karşılanıyor mu?',
    's.insurance.3': 'Sağlık yardımına başvuruyorum.',
    'c.insurance.q': 'Hangi sigorta şirketindesin?',
    'c.insurance.a': 'Sağlık sigortası kartımda yazıyor.',
    'u.money': 'Para ve mektuplar',
    'l.letters': 'Resmî mektuplar',
    'w.brief': 'mektup',
    'w.post': 'posta',
    'w.belastingdienst': 'Vergi Dairesi',
    'w.aangifte': 'vergi beyannamesi',
    'w.inkomen': 'gelir',
    'w.terugbetalen': 'geri ödemek',
    's.letters.1': 'Bu mektubu anlamıyorum.',
    's.letters.2': 'Bu mektupta bana yardım eder misin?',
    's.letters.3': 'Gelirim değişti.',
    'c.letters.q': 'Vergi beyannameni verdin mi?',
    'c.letters.a': 'Hayır, 1 Mayıs’tan önce vereceğim.',
    'l.scams': 'Dolandırıcılığa dikkat',
    'w.pincode': 'PIN kodu',
    'w.link': 'bağlantı (link)',
    'w.oplichter': 'dolandırıcı',
    'w.sms': 'kısa mesaj (SMS)',
    'w.controleren': 'kontrol etmek',
    'w.nep': 'sahte',
    's.scams.1': 'PIN kodumu asla vermem.',
    's.scams.2': 'Bağlantıya tıklamıyorum.',
    's.scams.3': 'Bu mesaj sahte.',
    'c.scams.q': 'Burası banka. PIN kodunuz ne?',
    'c.scams.a': 'Vermiyorum. Telefonu kapatıyorum.',
    'u.travel': 'İşe gitmek',
    'l.bike': 'Bisikletle',
    'w.fiets': 'bisiklet',
    'w.fietspad': 'bisiklet yolu',
    'w.licht': 'lamba, ışık',
    'w.slot': 'kilit',
    'w.stoplicht': 'trafik ışığı',
    'w.bel': 'zil',
    's.bike.1': 'İşe bisikletle gidiyorum.',
    's.bike.2': 'Lambanı yak!',
    's.bike.3': 'Bisikletini kilitle.',
    'c.bike.q': 'İşe nasıl gidiyorsun?',
    'c.bike.a': 'Bisikletle, yirmi dakika.',
    'l.transit': 'Toplu taşıma ve yol masrafları',
    'w.bus': 'otobüs',
    'w.trein': 'tren',
    'w.inchecken': 'giriş yapmak (kart okutmak)',
    'w.uitchecken': 'çıkış yapmak (kart okutmak)',
    'w.bankpas': 'banka kartı',
    'w.reiskosten': 'yol parası',
    's.transit.1': 'Banka kartımı okutuyorum.', // nieuw, nalezen (4 nov 2026)
    's.transit.2': 'İnerken kartını okutmayı unutma.', // nieuw, nalezen (4 nov 2026)
    's.transit.3': 'Otobüs durağı nerede?',
    'c.transit.q': 'Trenle mi geliyorsun?',
    'c.transit.a': 'Hayır, otobüsle. Kapının önünde duruyor.',
    'u.lost': 'İşini kaybetmek',
    'l.ww': 'İşsizlik maaşı',
    'w.uitkering': 'ödenek (devletten gelen para)',
    'w.ww': 'işsizlik maaşı',
    'w.werkloos': 'işsiz',
    'w.uwv': 'UWV (iş ve sosyal yardım kurumu)',
    'w.ontslagnemen': 'işten ayrılmak (istifa etmek)',
    'w.werkzoekende': 'iş arayan',
    's.ww.1': 'UWV’ye işsizlik maaşı için başvuruyorum.',
    's.ww.2': 'İşsizim.',
    's.ww.3': 'Sözleşmem bitiyor.',
    'c.ww.q': 'Sözleşmen bittiğine göre şimdi ne yapacaksın?',
    'c.ww.a': 'Hemen işsizlik maaşına başvuracağım.',
    'l.newjob': 'Yeni iş aramak',
    'w.baan': 'iş',
    'w.zoeken': 'aramak',
    'w.bewaren': 'saklamak',
    'w.bijwerken': 'güncellemek',
    'w.gratis': 'ücretsiz',
    'w.nooit': 'asla, hiçbir zaman',
    's.newjob.1': 'Yeni bir iş arıyorum.',
    's.newjob.2': 'Maaş bordrolarımı saklıyorum.',
    's.newjob.3': 'İş aramak ücretsizdir.',
    'c.newjob.q': 'İş olunca seni arayabilir miyiz?',
    'c.newjob.a': 'Evet, lütfen. İşte numaram.',
    'u.build': 'İnşaat alanında',
    'l.tools': 'Aletler ve malzemeler',
    'w.steiger': 'iskele',
    'w.ladder': 'el merdiveni',
    'w.boor': 'matkap',
    'w.hamer': 'çekiç',
    'w.beton': 'beton',
    'w.kraan': 'vinç',
    's.tools.1': 'Çekici bir saniye bana ver.',
    's.tools.2': 'Merdiven iskeleye dayalı.',
    's.tools.3': 'Beton hâlâ ıslak.',
    'c.tools.q': 'Matkap nerede?',
    'c.tools.a': 'Kamyonette, arkada.',
    'l.site': 'Şantiyede güvenlik',
    'w.valbeveiliging': 'düşme koruması (emniyet kemeri)',
    'w.last': 'yük',
    'w.gat': 'delik',
    'w.vallen': 'düşmek',
    'w.risico': 'risk',
    'w.weigeren': 'reddetmek',
    's.site.1': 'Dikkat, başının üstünde yük var!',
    's.site.2': 'Düşme korumanı tak.',
    's.site.3': 'İşe başlamadan önce risk kontrolü (LMRA) yapıyorum.',
    'c.site.q': 'Bir saniye çatıda yardım edebilir misin?',
    'c.site.a': 'Evet, ama önce düşme korumamı takayım.',
    'u.factory': 'Fabrikada',
    'l.line': 'Bant ve makineler',
    'w.lopendeband': 'yürüyen bant, üretim hattı',
    'w.machine': 'makine',
    'w.storing': 'arıza',
    'w.noodstop': 'acil durdurma düğmesi',
    'w.inpakken': 'paketlemek',
    'w.productie': 'üretim',
    's.line.1': 'Bant durdu.',
    's.line.2': 'Bir arıza var.',
    's.line.3': 'Ürünleri paketliyorum.',
    'c.line.q': 'Bantta işler nasıl?',
    'c.line.a': 'İyi, ama makine çok yavaş.',
    'l.quality': 'Kalite',
    'w.kwaliteit': 'kalite',
    'w.product': 'ürün',
    'w.afkeuren': 'reddetmek (kusurlu diye ayırmak)',
    'w.beschadigd': 'hasarlı',
    'w.etiket': 'etiket',
    'w.lijst': 'liste',
    's.quality.1': 'Bu ürün hasarlı.',
    's.quality.2': 'Etiket doğru değil.',
    's.quality.3': 'Bunu reddetmem mi gerekiyor?',
    'c.quality.q': 'Bu neden kenara konmuş?',
    'c.quality.a': 'Etiket eğri.',
    'u.care': 'Bakım işinde',
    'l.client': 'Danışan ve günlük bakım',
    'w.client': 'bakımını yaptığın kişi', // nieuw, nalezen (4 nov 2026)
    'w.wassen': 'yıkamak',
    'w.aankleden': 'giyinmek, birini giydirmek',
    'w.eten': 'yemek',
    'w.rolstoel': 'tekerlekli sandalye',
    'w.verpleegkundige': 'hemşire',
    's.client.1': 'İyi uyudunuz mu?',
    's.client.2': 'Giyinmenize yardım edeceğim.',
    's.client.3': 'Biraz daha yemek ister misiniz?',
    'c.client.q': 'Montumu giymeme yardım edebilir misiniz?',
    'c.client.a': 'Tabii, size yardım edeyim.',
    'l.privacy': 'Bakımda gizlilik ve güvenlik',
    'w.privacy': 'gizlilik',
    'w.hygiene': 'hijyen',
    'w.doorgeven': '(bilgiyi) iletmek',
    'w.geheim': 'gizli',
    'w.toestemming': 'izin',
    'w.gevallen': 'düşmüş',
    's.privacy.1': 'Hanımefendi düştü.',
    's.privacy.2': 'Bunu hemşireye ileteceğim.',
    's.privacy.3': 'Evde danışanlardan bahsetmem.',
    'c.privacy.q': 'Bay Jansen’e haplarını verebilir misin?',
    'c.privacy.a': 'Hayır, buna iznim yok. Hemşireyi çağırırım.',
    'u.horeca': 'Otel ve restoranda',
    'l.kitchen': 'Mutfakta',
    'w.keuken': 'mutfak',
    'w.snijden': 'kesmek',
    'w.pan': 'tava',
    'w.koelcel': 'soğuk oda',
    'w.allergie': 'alerji',
    'w.datum': 'tarih',
    's.kitchen.1': 'Eti soğuk odaya koy.',
    's.kitchen.2': 'Soğanları küçük doğra.',
    's.kitchen.3': 'Bunun içinde kuruyemiş var mı?',
    'c.kitchen.q': 'Bir misafirin kuruyemiş alerjisi var.',
    'c.kitchen.a': 'Şefe soracağım.',
    'l.service': 'Misafirlere servis',
    'w.gast': 'misafir',
    'w.bestelling': 'sipariş',
    'w.rekening': 'hesap',
    'w.menu': 'menü',
    'w.afruimen': '(masayı) toplamak',
    'w.fooi': 'bahşiş',
    's.service.1': 'Ne içmek istersiniz?',
    's.service.2': 'Siparişinizi alabilir miyim?',
    's.service.3': 'Masayı topluyorum.',
    'c.service.q': 'Hesabı alabilir miyiz?',
    'c.service.a': 'Tabii, geliyorum.',
    'u.clean': 'Temizlik',
    'l.cleaning': 'Temizlik malzemeleri',
    'w.dweil': 'paspas (yer silmek için)',
    'w.emmer': 'kova',
    'w.schoonmaakmiddel': 'temizlik ürünü',
    'w.stofzuiger': 'elektrikli süpürge',
    'w.stoffen': 'toz almak',
    'w.prullenbak': 'çöp kutusu',
    's.cleaning.1': 'Kova nerede?',
    's.cleaning.2': 'Koridoru süpüreceğim.',
    's.cleaning.3': 'Çöp kutusunu boşalt.',
    'c.cleaning.q': 'Tuvaletleri bitirdin mi?',
    'c.cleaning.a': 'Neredeyse, iki tane daha.',
    'l.cleansafe': 'Güvenli temizlik',
    'w.glad': 'kaygan',
    'w.bordje': 'uyarı levhası',
    'w.mengen': 'karıştırmak',
    'w.damp': 'buhar, zehirli duman',
    'w.luchten': 'havalandırmak',
    'w.spoelen': 'durulamak',
    's.cleansafe.1': 'Dikkat, kaygan!',
    's.cleansafe.2': 'Uyarı levhasını koy.',
    's.cleansafe.3': 'Temizlik ürünlerini asla karıştırma.',
    'c.cleansafe.q': 'Buradan geçebilir miyim?',
    'c.cleansafe.a': 'Dikkat, zemin hâlâ kaygan.',
    'c.cv': 'Kısa bir CV', // nieuw, nalezen // nagelezen AI 22 nov
    'c.cv.b': 'Burada CV kısadır: 1 veya 2 sayfa. İletişim bilgilerini, iş deneyimini, eğitimini, dillerini ve becerilerini yaz. Fotoğraf gerekmez. Dinini, yaşını veya medeni durumunu yazmak zorunda değilsin. Neler yapabildiğin konusunda dürüst ol. Hollandacanı birine kontrol ettir.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.cv.p': 'CV’mi okur musun? Hollandacam doğru mu?',
    'c.cv.s': 'Kendi ülkende 3 yıl bir fabrikada çalıştın ama diploman yok. CV’ne ne yazarsın?',
    'c.cv.o1': 'İşi ve orada ne yaptığını dürüstçe yazarsın.',
    'c.cv.o2': 'Diploman olmadığı için hiçbir şey yazmazsın.',
    'c.cv.o3': 'Daha iyi görünmek için diploman olduğunu yazarsın.',
    'c.cv.w': 'İş deneyimi önemlidir, yurt dışındaki de. Dürüst olmak önemlidir: işverenler bunu kontrol edebilir.',
    'c.interview': 'İş görüşmesi',
    'c.interview.b': 'Zamanında gel: 5-10 dakika erken. Kibarca selam ver ve kişinin yüzüne bak. Neler yapabildiğini kısaca anlat. Senin de soru sorman normal ve olumludur, örneğin çalışma saatleri, iş veya eğitim hakkında. Sonunda ne zaman haber alacağını sorabilirsin. Hâlâ Hollandaca öğrendiğini söylemek sorun değil. İşveren sana dinini, hamilelik durumunu veya sağlığını soramaz. Cevap vermek zorunda değilsin: kibarca cevap vermemeyi tercih ettiğini söyleyebilirsin.',
    'c.interview.p': 'Ben de bir şey sorabilir miyim? İş haftada kaç saat?',
    'c.interview.s': 'Görüşmenin sonunda işveren soruyor: “Heb je nog vragen?” Ne yaparsın?',
    'c.interview.o1': 'Çalışma saatleri veya eğitim hakkında bir soru sorarsın.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.interview.o2': 'Soru sormak kibar olmadığı için hayır dersin.',
    'c.interview.o3': 'İyi çalıştığını göstermek için kendinden daha çok bahsedersin.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.interview.w': 'Sorular işle ilgilendiğini gösterir. Burada işverenler genelde soru bekler.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.findwork': 'Sözleşmeni yazılı al',
    'c.findwork.b': 'Her zaman yazılı bir sözleşme ve kendin için bir kopya iste. İmzalamadan önce oku veya güvendiğin birinden yardım iste. Geçici iş ajansı (uitzendbureau) sana iş bulmak için senden para isteyemez. Genel bilgi. Kendi durumun için işverenine, sendikaya veya Juridisch Loket’e sor.',
    'c.findwork.p': 'Sözleşmeyi önce okuyabilir miyim?',
    'c.findwork.s': 'Yeni bir işveren diyor ki: “Hemen buraya imza at. Sonra okursun.” Ne yaparsın?',
    'c.findwork.o1': 'Okumak için zaman veya bir kopya istersin.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.findwork.o2': 'İşi kaybetmemek için hemen imzalarsın.',
    'c.findwork.o3': 'İmzalar, sonra bir kopya istersin.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.findwork.w': 'Sözleşmen ne kazandığını ve hakların neler olduğunu söyler. İyi bir işveren sana okuman için zaman verir. Anlamadığın her şeyi sorabilirsin.',
    'c.contract': 'Deneme süresi ve çağrı üzerine çalışma',
    'c.contract.b': 'Deneme süresi (proeftijd) yazılı olmalıdır. 6 ay veya daha kısa bir sözleşmede deneme süresine izin yoktur. Daha uzun ama 2 yıldan kısa bir sözleşmede en fazla 1 aydır. 2 yıl veya daha uzun ya da süresiz bir sözleşmede en fazla 2 aydır. Çağrı üzerine mi çalışıyorsun (oproepkracht)? İşveren seni genelde en az 4 gün önceden çağırmalı. Daha geç çağırırsa gelmek zorunda değilsin. Bir cao bu 4 günü kısaltabilir, ama 1 günden kısa olamaz. İşini bundan daha geç iptal ederlerse yine de ücretini alırsın. Seni 3 saatten az bir iş için çağırırlarsa genelde 3 saatlik ücret alırsın. Genel bilgi. Kendi durumun için işverenine, sendikaya veya Juridisch Loket’e sor.', // nalezen: feit gelijk getrokken // nagelezen AI 22 nov
    'c.contract.p': 'Deneme süresi sözleşmemde var mı?',
    'c.contract.s': 'Sözleşmen 3 aylık. İçinde şöyle yazıyor: “Proeftijd: 1 maand”. Ne yaparsın?',
    'c.contract.o1': 'Bunu sorarsın: bu deneme süresi geçerli değil.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.contract.o2': 'Hiçbir şey yapmazsın. Her sözleşmede deneme süresi vardır.',
    'c.contract.o3': 'İmzalarsın ve hiç sormazsın, çünkü patron en iyisini bilir.',
    'c.contract.w': '6 ay veya daha kısa bir sözleşmedeki deneme süresi geçerli değildir. Sakince sormak normaldir. Cevap net değilse sendikadan veya Juridisch Loket’ten tavsiye al.',
    'c.agency': 'İşverenin ajanstır',
    'c.agency.b': 'Geçici iş ajansı (uitzendbureau) üzerinden çalışıyorsan, işverenin ajanstır, çalıştığın şirket değil. Sözleşmen ve maaşın ajanstan gelir ve geçici işçiler için bir cao (uitzend-cao) vardır. Aynı işi yapan şirket çalışanlarıyla aynı ücreti alma hakkın var. Ayrıca tatil parası (vakantiegeld) alırsın ve izin günleri biriktirirsin. Çalıştığın saatlerin kendi listesini tut ve bunları maaş bordronda kontrol et. Genel bilgi. Kendi durumun için işverenine, sendikaya veya Juridisch Loket’e sor.',
    'c.agency.x': 'Başka bir ülkedeki işveren seni bir süreliğine buraya mı gönderdi? O zaman görevlendirilmiş (gedetacheerd) çalışıyorsun. İşverenden A1 belgesini iste: nerede sigortalı olduğunu gösterir. Burada yine de en az Hollanda asgari ücretini alırsın.', // nieuw, nalezen (uit een ander land, 10 nov 2026) // nagelezen AI 22 nov
    'c.agency.p': 'Maaş bordromda saatler eksik.',
    'c.agency.s': 'Maaş bordronda 32 saat yazıyor, ama sen 38 saat çalıştın. Ne yaparsın?',
    'c.agency.o1': 'Kendi saat listeni ajansa gösterir ve düzeltmesini istersin.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.agency.o2': 'Sadece 6 saat olduğu için hiçbir şey söylemezsin.',
    'c.agency.o3': 'Çalıştığın şirketteki patrondan bu 6 saati ödemesini istersin.',
    'c.agency.w': 'Sana ajans ödeme yapıyor, bu yüzden hatayı ajans düzeltmeli. Tarih ve saatlerin olduğu kendi listen yardımcı olur. Bunu sormak senin hakkın.',
    'c.bsn': 'BSN’ini güvende tut',
    'c.bsn.b': 'Belediyeye (gemeente) kaydolduğunda bir BSN (burgerservicenummer) alırsın. Burada sadece kısa bir süre mi kalıyorsun? O zaman bir RNI masasına kaydolursun. BSN’in çalışmak, vergi, sağlık sigortası ve banka hesabı için gerekir. İşverenin kimliğine ve BSN’ine ihtiyaç duyar. BSN’ini veya kimliğinin kopyasını herkese verme. Önce neden ihtiyaç duyduklarını sor. Taşınıyor musun? Yeni adresini 5 gün içinde gemeente’ye kaydettir. DigiD, devlet sitelerine giriş bilgindir: onu asla başkasına verme. Burada yaşıyor veya çalışıyor musun? O zaman genelde Hollanda sağlık sigortası (zorgverzekering) yaptırman gerekir. Bunu çabuk hallet. Genel bilgi. Kendi durumun için işverenine, sendikaya veya Juridisch Loket’e sor.',
    'c.bsn.p': 'BSN’ime neden ihtiyacınız var?',
    'c.bsn.s': 'Tanımadığın biri sana WhatsApp’tan iş teklif ediyor. Pasaport fotoğrafını ve DigiD giriş bilgilerini istiyor. Ne yaparsın?', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.bsn.o1': 'DigiD giriş bilgilerini asla vermezsin. Kim olduğunu kontrol edersin.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.bsn.o2': 'İşi almak için her şeyi hemen gönderirsin.',
    'c.bsn.o3': 'Sadece pasaport fotoğrafını gönderirsin.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.bsn.w': 'DigiD’in veya kimliğinin kopyasıyla başkaları senin adını kullanabilir, örneğin kredi veya sosyal yardım almak için. Gerçek bir işverenin kimliğine ve BSN’ine ihtiyacı vardır, ama DigiD giriş bilgilerine asla.',
    'c.housing': 'İşverenden konut',
    'c.housing.b': 'Konutunu işverenin veya ajansın mı ayarlıyor? O zaman kira sözleşmesi iş sözleşmenden ayrı olmalıdır. Yazılı bir kira sözleşmesi ve ne ödediğine dair bir belge iste. Kira maaşından ancak yazılı olarak kabul ettiysen ve yasal sınırlar içinde kesilebilir: bunu maaş bordronda kontrol et. Depozito (borg) en fazla 2 aylık temel kiradır. Ayrıldığında, gerçek hasar düşüldükten sonra geri alırsın. Adresine gemeente’de kaydol. Güvensiz konut, tehdit veya haksız masraflar mı var? Bunu gemeente’ye (meldpunt) bildir ve Juridisch Loket’ten veya bir konut danışma hizmetinden ücretsiz tavsiye al. Kira fiyatı veya hizmet giderleriyle ilgili bir sorun için Huurcommissie vardır. İşin mi bitiyor? Evden ayrılmadan önce tavsiye al. Genel bilgi. Kendi durumun için sendikaya, Juridisch Loket’e veya FairWork’e sor.',
    'c.housing.p': 'Ödediğime dair bir belge alabilir miyim?',
    'c.housing.s': 'İşin bitiyor. Ajans diyor ki: “Yarın evden çıkmalısın.” Ne yaparsın?',
    'c.housing.o1': 'Önce Juridisch Loket’ten tavsiye alırsın.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.housing.o2': 'Hemen çıkar ve depozitonu unutursun.',
    'c.housing.o3': 'Kalırsın ve ajansa artık cevap vermezsin.',
    'c.housing.w': 'Kira sözleşmenin işinden ayrı, kendi kuralları vardır. Ücretsiz tavsiye haklarını bilmene yardım eder, örneğin ne zaman çıkman gerektiği ve depozito hakkında.',
    'c.payslip': 'Maaş bordronu kontrol et',
    'c.payslip.b': 'Bruto, vergiden önceki maaşındır. Netto, banka hesabına yatan paradır: bruto eksi vergi ve primler (loonheffing). İşveren sana bir maaş bordrosu (loonstrook) vermek zorundadır. Her bordroda saatleri ve ücreti kontrol et, çalıştığın saatleri de not et. İki işin mi var? Vergi indirimini (loonheffingskorting) sadece bir işverende kullan. Genel bilgi. Kendi durumun için işverenine, sendikaya veya Juridisch Loket’e sor.',
    'c.payslip.p': 'Daha fazla saat çalıştım. Kontrol edebilir misin?',
    'c.payslip.s': 'Maaş bordronda çalıştığından daha az saat görünüyor. Ne yaparsın?',
    'c.payslip.o1': 'Notlarını gösterir ve amirinden kontrol etmesini istersin.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.payslip.o2': 'Sorun istemediğin için hiçbir şey söylemezsin.',
    'c.payslip.o3': 'Bir ay beklersin: bir sonraki bordroda düzelir.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.payslip.w': 'Maaş bordrosunda hatalar olur. Bunu sormak normaldir ve senin hakkındır. Tarih ve saatlerle ilgili kendi notların çok yardımcı olur.',
    'c.extra': 'Tatil parası ve asgari ücret',
    'c.extra.b': 'Tatil parası (vakantiegeld) alırsın: brüt maaşının en az %8’i. Çoğu işveren bunu yılda bir kez, mayıs veya haziranda öder. Maaşın asla yasal asgari ücretten (minimumloon) düşük olamaz; 21 yaşından küçükler için asgari ücret daha düşüktür. Miktar her yıl değişir: rijksoverheid.nl sitesinden kontrol et. Bir cao çoğu zaman fazla mesai veya gece çalışması için ek ücret verir. Genel bilgi. Kendi durumun için işverenine, sendikaya veya Juridisch Loket’e sor.',
    'c.extra.p': 'Tatil paramı ne zaman alırım?',
    'c.extra.s': 'Bir iş arkadaşın diyor ki: “Mayısta patrondan ekstra para alırsın.” Bu nedir?',
    'c.extra.o1': 'Tatil parası: brüt maaşının en az %8’i.',
    'c.extra.o2': 'Sadece en iyi çalışanlara verilen bir hediye.',
    'c.extra.o3': '13. maaş: herkese bir aylık ek maaş.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.extra.w': 'Tatil parası senin hakkındır, hediye değil. Çalıştığın her saatle birikir. İşinden daha erken ayrılırsan son maaşınla birlikte alırsın.',
    'c.phone': 'İş yerinde telefonun',
    'c.phone.b': 'Birçok iş yerinde çalışırken telefona izin verilmez, özellikle makinelerin ve forkliftlerin yanında veya gıda üretiminde. Bu güvensiz veya hijyene aykırı olabilir. Telefonunu molada kullan. Ailenden acil bir arama mı bekliyorsun? Önce amirine söyle. İzin almadan iş yerinde fotoğraf veya video çekme: iş arkadaşlarının gizliliğini ve şirket sırlarını düşün. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.',
    'c.phone.p': 'Çocuğum hasta. Telefonum açık kalabilir mi?',
    'c.phone.s': 'Annen hastanede ve bugün arayabilir. Çalışma alanında telefona izin yok. Ne yaparsın?',
    'c.phone.o1': 'Amirine söyler ve sana nasıl ulaşılabileceğini sorarsın.',
    'c.phone.o2': 'Telefonu cebinde tutar ve makinenin başında gizlice cevap verirsin.',
    'c.phone.o3': 'Kimseye nedenini söylemeden evde kalırsın.',
    'c.phone.w': 'Amirler ailedeki acil durumları genelde anlar. Bildiklerinde güvenli bir çözüm bulabilirler, örneğin telefonuna bakman için belirli bir saat.',
    'c.smoking': 'Sigara sadece dışarıda',
    'c.smoking.b': 'Hollanda’da iş yerinin içinde sigara içmek yasayla yasaktır. Bu elektronik sigaralar (vape) için de geçerlidir. 2022’den beri şirketlerin içinde sigara odalarına da izin yoktur. Sadece dışarıda, işverenin izin verdiği yerde ve genelde sadece molanda sigara iç. Ekstra sigara molaları bir hak değildir: bunları amirinle konuşup kararlaştır. Yakıt veya depodaki kutular gibi kolay yanan şeylerin yanında asla sigara içme. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.',
    'c.smoking.p': 'Molamda dışarıda sigara içebilir miyim?',
    'c.smoking.s': 'Hava soğuk ve yağmurlu. Bir iş arkadaşın diyor ki: “Depo odasında iç gitsin, kimse görmez.” Ne yaparsın?',
    'c.smoking.o1': 'Hayır der ve molanda dışarıda içersin.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.smoking.o2': 'Bu seferlik depo odasında hızlıca içersin.',
    'c.smoking.o3': 'Onun yerine içeride vape kullanırsın, çünkü buna izin var.',
    'c.smoking.w': 'İçeride sigara içmek yasaya aykırıdır ve yangın çıkarabilir. İçeride vape de yasaktır. Kurala uymak herkesi güvende tutar.',
    'c.clock': 'Kartını kendin bas',
    'c.clock.b': 'Giriş ve çıkış kaydını kendin yap, işe gerçekten başladığın ve bıraktığın anda. Asla bir iş arkadaşın için giriş veya çıkış kaydı yapma ve kartını asla başkasına kullandırma. Bu sahtekârlık sayılır ve işten çıkarılmana yol açabilir. Geç mi kalacaksın? Vardiyan başlamadan önce ara. Kayıtlı saatlerinin maaş bordronla uyuştuğunu kontrol et. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.',
    'c.clock.p': 'Çıkış kaydı yapmayı unuttum. Düzeltebilir misin?',
    'c.clock.s': 'Bir iş arkadaşın sana kartını veriyor: “Benim yerime giriş kaydı yap, 20 dakika geç kalacağım.” Ne yaparsın?',
    'c.clock.o1': 'Hayır der ve amiri aramasını söylersin.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.clock.o2': 'Arkadaşın olduğu için bir kereliğine yaparsın.',
    'c.clock.o3': 'Onun yerine giriş kaydı yapar ve amire sonra söylersin.',
    'c.clock.w': 'Başkası yerine giriş kaydı yapmak ikiniz için de sahtekârlık sayılır. Hayır demek hem iş arkadaşını hem kendi işini korur.',
    'c.hygiene': 'Ayık kafa, temiz eller',
    'c.hygiene.b': 'İş yerinde alkol ve uyuşturucu kullanmak veya bunları kullandıktan sonra işe gelmek neredeyse tüm şirketlerde yasaktır. Makinelerin ve forkliftlerin yanında çok tehlikelidir ve işten çıkarılmana yol açabilir. Bir ilaç uykunu getiriyor veya başını döndürüyor mu? Amirine söyle, böylece güvenli bir iş yapabilirsin. Hangi ilaç olduğunu söylemek zorunda değilsin. Gıda üretiminde hijyen kuralları sıkıdır: ellerini yıka, temiz iş kıyafeti giy, gerekirse bone tak ve takı takma. Kusma veya ishal mi var? Başlamadan önce bildir. Çalışma yerini düzenli tut. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.',
    'c.hygiene.p': 'Bir ilaç kullanıyorum. Uykumu getiriyor.',
    'c.hygiene.s': 'Doktorun sana uyku yapan bir ilaç veriyor. Yarın forklift kullanman gerekiyor. Ne yaparsın?',
    'c.hygiene.o1': 'Başlamadan önce amirine söylersin.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.hygiene.o2': 'Hiçbir şey söylemez ve çok yavaş sürersin.',
    'c.hygiene.o3': 'Doktoruna sormadan ilacı bırakırsın.',
    'c.hygiene.w': 'Amirinin hangi ilaç olduğunu bilmesi gerekmez, sadece şu an araç süremeyeceğini veya makinelerle çalışamayacağını bilmesi yeter. Bu seni ve iş arkadaşlarını güvende tutar.',
    'c.smalltalk': 'Molada sohbet',
    'c.smalltalk.b': 'Molada kısa sohbetler normaldir. Ekibin bir parçası gibi hissetmene yardım eder. Kahve veya öğle yemeği masasında hoş karşılanırsın. Kolay konular hafta sonu, hava, spor ve tatillerdir. Maaş, din veya birinin özel hayatı hakkındaki sorular başta çoğu zaman fazla kişiseldir. İnsanlar doğum günlerinde çoğu zaman ekibe pasta gibi bir ikramda bulunur (trakteren). Bir iş arkadaşının doğum günü mü? “Gefeliciteerd!” de.',
    'c.smalltalk.p': 'Doğum günün kutlu olsun!',
    'c.smalltalk.s': 'Molada iş arkadaşların bir masada birlikte oturuyor. Onları henüz iyi tanımıyorsun. Ne yaparsın?',
    'c.smalltalk.o1': '“Mag ik bij jullie zitten?” diye sorar ve kısa bir sohbetle aralarına katılırsın.',
    'c.smalltalk.o2': 'Onları rahatsız etmemek için her gün dışarıda yalnız yersin.',
    'c.smalltalk.o3': 'Her iş arkadaşına ne kadar kazandığını sorarsın.',
    'c.smalltalk.w': 'Masaya katılmak hoş karşılanır ve ekibi tanımana yardım eder. “Hoe was je weekend?” gibi basit bir soru iyi bir başlangıçtır.',
    'c.mistakes': 'Hata yapmak normaldir',
    'c.mistakes.b': 'İş yerinde herkes hata yapar. Düzeltilebilmesi için hemen söyle: “Sorry, ik heb een fout gemaakt.” Bir hatayı saklamak, hatanın kendisinden çok daha kötü görülür. Geri bildirim işle ilgilidir, bir insan olarak seninle değil. Övgü mü aldın? Sadece teşekkür et. Neyi daha iyi yapacağın belli değil mi? Sor: “Kun je het uitleggen?”',
    'c.mistakes.p': 'Pardon, bir hata yaptım. Nasıl düzeltebilirim?',
    'c.mistakes.s': '20 kutuyu yanlış palete koydun. Henüz kimse görmedi. Ne yaparsın?',
    'c.mistakes.o1': 'Amirine söyler ve düzeltmeye yardım edersin.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.mistakes.o2': 'Hiçbir şey söylemez ve kimsenin fark etmemesini umarsın.',
    'c.mistakes.o3': 'Bir iş arkadaşının yaptığını söylersin.',
    'c.mistakes.w': 'Erken söylenen bir hata kolay düzeltilir. Dürüst olmak güven oluşturur ve bu, hiç hata yapmamaktan daha önemlidir.',
    'c.respect': 'Herkese saygı',
    'c.respect.b': 'İş yerinde herkes eşittir ve cinsiyeti, kökeni, dini veya cinsel yönelimi ne olursa olsun herkese saygıyla davranılır. Fiziksel temas konusunda sen karar verirsin. Tokalaşmak yaygındır. Ama başka kibar bir şekilde de selam verebilirsin, örneğin başını sallayıp gülümseyerek. Sonra bunu kısaca açıkla. Birinin kökeni veya diniyle ilgili şakalar, tehditler, zorbalık (pesten) ve istenmeyen cinsel davranış kabul edilmez. Bunu amirine veya şirketinde varsa bir güven danışmanına (vertrouwenspersoon) bildirebilirsin.',
    'c.respect.p': 'Tokalaşmamayı tercih ederim, ama seni selamlamaktan memnuniyet duyarım.',
    'c.respect.s': 'Bir iş arkadaşın sık sık dininle ilgili şakalar yapıyor. Durmasını istedin ama devam ediyor. Ne yaparsın?',
    'c.respect.o1': 'Amirine veya vertrouwenspersoon’a söylersin.',
    'c.respect.o2': 'Sorun çıkmasın diye onunla birlikte gülersin.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.respect.o3': 'Sen de onun kökeniyle ilgili şakalar yaparsın.',
    'c.respect.w': 'Böyle şakalar iş yerinde kabul edilmez. Bildirmek normaldir: şirket iş yerini herkes için güvenli tutmak zorundadır.',
    'c.health': 'Molalar ve çalışma saatleri',
    'c.health.b': 'Yasa sağlığını korur. 5,5 saatten fazla mı çalışıyorsun? O zaman en az 30 dakika mola hakkın var (2 kez 15 dakika olabilir). 10 saatten fazla mı? O zaman en az 45 dakika. Bir cao’da biraz farklı mola kuralları olabilir. Bir vardiyada en fazla 12 saat, bir haftada en fazla 60 saat çalışabilirsin. 18 yaşından küçük müsün? O zaman çalışabileceğin en fazla saat daha azdır. İşveren sana iş ayakkabısı veya eldiven gibi koruyucu ekipmanı ücretsiz vermek zorundadır. Güvensiz iş veya çok düşük ücret mi var? Bunu Nederlandse Arbeidsinspectie’ye bildirebilirsin, adını vermeden de. Genel bilgi. Kendi durumun için işverenine, sendikaya veya Juridisch Loket’e sor.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.health.p': 'Henüz mola vermedim.',
    'c.health.s': '6 saattir molasız çalışıyorsun. Amirin devam etmeni istiyor. Ne yaparsın?',
    'c.health.o1': 'Şimdi molaya ihtiyacın olduğunu söylersin.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.health.o2': 'Devam eder, sonra daha uzun bir mola verirsin.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.health.o3': 'Tek kelime etmeden işi bırakıp eve gidersin.',
    'c.health.w': '5,5 saatten fazla çalıştığında mola yasal bir haktır, bir iyilik değil. Dinlenmek güvenli çalışmana da yardım eder.',
    'c.rights': 'Ayrımcılık ve işten çıkarılma',
    'c.rights.b': 'İş yerinde ayrımcılık yasaktır, örneğin kökenin, dinin veya cinsiyetin yüzünden. İşveren seni öylece işten çıkaramaz: normalde UWV’den veya bir hâkimden izin ya da senin onayın gerekir. (Deneme süresinde veya geçici bir sözleşmenin sonunda başka kurallar geçerlidir.) İşten çıkarılmanla ilgili anlamadığın bir kâğıdı imzalama. İş sözleşmeni sona erdiren bir anlaşma (vaststellingsovereenkomst) mı imzaladın? O zaman genelde 14 gün içinde yazılı olarak iptal edebilirsin. Önce yardım al. Sendikaya (örneğin FNV), bir ayrımcılık danışma merkezine veya Juridisch Loket’e git. Juridisch Loket ücretsiz hukuki tavsiye verir. Genel bilgi. Kendi durumun için sendikaya, Juridisch Loket’e veya FairWork’e sor.',
    'c.rights.p': 'Önce tavsiye almak istiyorum.',
    'c.rights.s': 'Patronun sana bir kâğıt veriyor: “Bugün imzala, anlaşmayla ayrılırsın.” Tam anlamıyorsun. Ne yaparsın?',
    'c.rights.o1': 'Henüz imzalamazsın. Önce tavsiye alırsın.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.rights.o2': 'Patron sorun olmadığını söylediği için imzalarsın.',
    'c.rights.o3': 'Kâğıdı kaldırır ve bu konuda bir daha hiç konuşmazsın.',
    'c.rights.w': 'İçinde yanlış bir şey var mı? O zaman haklarını kaybedebilirsin, örneğin işsizlik maaşı (WW) hakkını. Tavsiye almak için zaman istemek normaldir ve buna izin vardır.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay': 'Moet, hoeft niet, mag niet',
    'c.mustmay.b': 'Hollandacada “moeten” kelimesinin tersi “niet hoeven” olur. “Je moet tekenen” şu demek: seçeneğin yok. “Je hoeft niet te tekenen” şu demek: seçebilirsin. “Je mag niet tekenen” şu demek: yasak. Dikkat: İngilizcede “must not”, “mag niet” demektir. Türkçede “zorunda değilsin”, “hoeft niet” demektir. Emin değil misin? Sor.',
    'c.mustmay.p': 'Zorunlu mu, yoksa seçme hakkım var mı?',
    'c.mustmay.s': 'Ekip liderin diyor ki: “Je hoeft zaterdag niet te komen.” Ne demek istiyor?',
    'c.mustmay.o1': 'Cumartesi gelmek zorunda değilsin. Seçebilirsin.',
    'c.mustmay.o2': 'Cumartesi gelmen yasak.',
    'c.mustmay.o3': 'Cumartesi gelmek zorundasın.',
    'c.mustmay.w': '“Niet hoeven” zorunlu olmadığı anlamına gelir: seçebilirsin. “Niet mogen” yasak anlamına gelirdi.',
    'c.leave': 'Tatil ve acil durum izni',
    'c.leave.b': 'Yasaya göre ücretli izin günlerin vardır: haftada çalıştığın gün sayısının en az 4 katı. Tam zamanlı, haftada 5 gün mü çalışıyorsun? O zaman yılda en az 20 gün. Bir cao daha fazlasını verebilir. İzni zamanında ve yazılı olarak iste. Ailende kaza veya hastalık gibi ani bir acil durum mu var? O zaman ücretli kısa izin alabilirsin (calamiteitenverlof). İşverenine hemen haber ver. Genel bilgi. Kendi durumun için işverenine, sendikaya veya Juridisch Loket’e sor.',
    'c.leave.p': 'Temmuz için izin istiyorum.',
    'c.leave.s': 'Yazın üç hafta yurt dışındaki aileni ziyaret etmek istiyorsun. Ne yaparsın?',
    'c.leave.o1': 'İşverenden erkenden, yazılı olarak izin istersin.',
    'c.leave.o2': 'Öylece gider ve döndüğünde patronuna söylersin.',
    'c.leave.o3': 'Bir iş arkadaşından patrona bir gün önce söylemesini istersin.',
    'c.leave.w': 'İşveren genellikle evet demek zorundadır. Sadece çok önemli bir sebeple hayır diyebilir, o zaman da 2 hafta içinde yazılı olarak. Erken sormak “evet” cevabı için en iyi şansı verir.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.illness': 'Hastayken hakların',
    'c.illness.b': 'Hasta olduğunda işveren 2 yıla kadar maaşının en az %70’ini ödemek zorundadır. Bir cao çoğu zaman daha fazlasını verir. Ücretsiz en fazla 2 bekleme günü (wachtdagen) olabilir, ama sadece sözleşmende veya cao’da yazıyorsa. Patronun hangi hastalığın olduğunu soramaz. Sağlığını ve işini işyeri hekimiyle (bedrijfsarts) konuşursun. İyileşince işverenini ara (betermelden). İlk yıl en az asgari ücret alırsın. Süreli bir sözleşme, hasta olsan da bitiş tarihinde biter. Bir ajans üzerinden mi çalışıyorsun? Sözleşmende ajans maddesi (uitzendbeding) varsa, hastalanınca sözleşmen bitebilir. O zaman UWV’ye Ziektewet’i sor veya sendikaya sor. Genel bilgi. Kendi durumun için işverenine, sendikaya veya Juridisch Loket’e sor.',
    'c.illness.x': 'Hastasın ve kendi ülkene gitmek mi istiyorsun? Önce işverenine veya ajansa sor. İzinsiz gidersen maaşın kesilebilir. Oradaki adresini ver ve telefonu aç.', // nieuw, nalezen (uit een ander land, 10 nov 2026) // nagelezen AI 22 nov
    'c.illness.p': 'İyileştim. Yarın işe geliyorum.',
    'c.illness.s': 'Bir haftadır hastasın. İşverenin seni işyeri hekimine gönderiyor. Ne yaparsın?', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.illness.o1': 'Gider, sağlığın ve işin hakkında konuşursun.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.illness.o2': 'Gitmezsin: kendi doktorun var.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.illness.o3': 'Hâlâ hastayken işe dönersin.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.illness.w': 'İşyeri hekimi sağlıklı bir şekilde işe dönmene yardım eder. Hekim patronuna tıbbi bilgilerini söylemez, sadece hangi işleri yapabileceğini söyler.',
    'c.warning': 'Sömürü işaretleri',
    'c.warning.b': 'Bu işaretlere dikkat et. İşveren pasaportunu veya kimliğini elinde tutuyor. Buna izin yok: kimliğini kendin saklarsın. İşveren sadece kopyasını alabilir. Anlaşılandan çok daha az ücret alıyorsun veya maaş bordron yok. İşverene veya ajansa büyük bir borç ödemek zorundasın. Başka seçeneğin olmadan aşırı uzun saatler çalışmak zorundasın. Biri seni tehdit ediyor veya konutunu sana baskı yapmak için kullanıyor. Bu normal değildir ve yasaktır. Genel bilgi. Kendi durumun için sendikaya, Juridisch Loket’e veya FairWork’e sor.',
    'c.warning.p': 'Pasaportumu geri istiyorum.',
    'c.warning.s': 'İlk gününde ajans diyor ki: “Güvenlik için pasaportunu biz saklıyoruz.” Ne yaparsın?',
    'c.warning.o1': 'Pasaportu kendin saklarsın. Kopyasını alabilirler.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.warning.o2': 'Ajans kuralları bildiği için verirsin.',
    'c.warning.o3': 'Verirsin, ama önce fotoğrafını çekersin.',
    'c.warning.w': 'Pasaportun senindir. Onu elde tutmak, çalışanları kontrol etmenin bir yoludur. İşverenin dosyalar için sadece bir kopyaya ihtiyacı vardır.',
    'c.gethelp': 'Nereden yardım alırsın',
    'c.gethelp.b': 'Kendinde veya başkasında sömürü işaretleri mi görüyorsun? Yardım al. Bunu Nederlandse Arbeidsinspectie’ye, istersen adını vermeden, veya polise bildirebilirsin. Meld Misdaad Anoniem: 0800-7000. Ücretsiz hukuki tavsiye: Juridisch Loket. Tehlikede misin? 112’yi ara. Hollanda’da çalışan herkes yardım alabilir, göçmenler de. Genel bilgi. Kendi durumun için sendikaya, Juridisch Loket’e veya FairWork’e sor.',
    'c.gethelp.p': 'Yardıma ihtiyacım var. Sömürülüyorum.',
    'c.gethelp.s': 'Bir arkadaşın neredeyse hiç ücret almadan günde 14 saat çalışıyor. Patronundan korkuyor. Ne yapabilirsin?', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.gethelp.o1': 'Arbeidsinspectie veya Juridisch Loket ile iletişime geçmesine yardım edersin.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.gethelp.o2': 'Ona bunun yeni çalışanlar için normal olduğunu söylersin.',
    'c.gethelp.o3': 'Sözleşmesi bitene kadar beklemesini, sonra ayrılmasını söylersin.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.gethelp.w': 'Hollanda’da çalışan herkes için yardım vardır. Bildirim isim vermeden de yapılabilir.',
    'c.callin': 'Amirini aramak',
    'c.callin.b': 'Amirini aradığında adını, sebebi ve ne zaman geri gelmeyi düşündüğünü söyle. Hasta mısın? Sadece hasta olduğunu söylemen yeterli, hangi hastalığın olduğunu değil. Telefonla ara: şirketin mesajın yeterli olduğunu söylemiyorsa sadece mesaj atma. Cevap yok mu? Sesli mesaj bırak ve tekrar dene. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.',
    'c.callin.p': 'Merhaba, ben Ali. Bugün gelemiyorum.',
    'c.callin.s': 'Çocuğun hasta ve işe gelemiyorsun. Şirketin aramanı istiyor. Ne yaparsın?',
    'c.callin.o1': 'Vardiyandan önce amirini ararsın.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.callin.o2': 'Vardiyanın başında kısa bir mesaj atarsın.',
    'c.callin.o3': 'Komşundan senin yerine aramasını istersin.',
    'c.callin.w': 'Telefonla aramak açık ve hızlıdır, amirin de soru sorabilir. Ne zaman döneceğini düşündüğünü söylemek plan yapmasına yardım eder. Adını ve sebebi de söyle.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.texting': 'İşe mesaj: kısa ve kibar',
    'c.texting.b': 'İşe attığın mesajları kısa ve kibar tut. Kim olduğunu ve ne olduğunu söyle, sonunda selam ver. Örneğin: “Hoi Mark, ik ben 10 minuten te laat. Sorry! Groet, Ali”. Uygulamadaki çalışma planına (rooster) sık sık bak. Vardiya isteklerine zamanında cevap ver. Vardiya değiştirmek için önce amirinin ya da planlamacının onay vermesi gerekir, bu yüzden sor: “Mag ik mijn dienst ruilen?” Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.',
    'c.texting.p': 'Merhaba Mark, 10 dakika geç kalacağım. Pardon! Selamlar, Ali',
    'c.texting.s': '10 dakika geç kalacaksın. Amirine hangi mesaj en iyisi?',
    'c.texting.o1': '“Hoi Mark, ik ben 10 minuten te laat. Sorry! Groet, Ali”',
    'c.texting.o2': '“Sorry, ik ben er zo!” (adın olmadan, saat olmadan).', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.texting.o3': 'Trafik hakkında üç dakikalık bir sesli mesaj.',
    'c.texting.w': 'İyi bir mesaj birkaç kelimeyle kim olduğunu ve ne olduğunu söyler. Böylece amirin durumu hemen anlar.',
    'c.certs': 'Sertifikalar sana yardım eder',
    'c.certs.b': 'İnşaatta, sanayide ve geçici işlerde çoğu zaman VCA sertifikası (güvenlik) gerekir. Forklift kullanmak için genelde forklift sertifikası (heftruckcertificaat) gerekir. İşverenine kursun ve sınavın parasını ödeyip ödemediğini sor.',
    'c.certs.p': 'Burada VCA kursu yapabilir miyim?',
    'c.certs.s': 'Bir iş için VCA sertifikası isteniyor. Henüz sende yok. Ne yaparsın?',
    'c.certs.o1': 'İşverenden veya ajanstan sertifikayı almana yardım etmesini istersin.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.certs.o2': 'İşi asla alamayacağını düşündüğün için başvurmazsın.',
    'c.certs.o3': 'Sende olduğunu söyler ve kimsenin kontrol etmemesini umarsın.',
    'c.certs.w': 'Birçok işveren ve ajans VCA için yardım eder. Sormak öğrenmek istediğini gösterir.',
    'c.diploma': 'Diploman değerlidir',
    'c.diploma.b': 'Başka bir ülkeden diploman mı var? Onu IDW’de (Internationale Diplomawaardering) değerlendirtebilirsin. Böylece işverenler buradaki değerini görebilir. İşin için bir eğitim zorunlu mu? O zaman parasını işveren ödemek zorundadır ve çalışma süresinden sayılır. Kurslar hakkında amirine sor. Genel bilgi. Kendi durumun için işverenine, sendikaya veya Juridisch Loket’e sor.',
    'c.diploma.p': 'Benim için kurslar var mı?',
    'c.diploma.s': 'İşverenin, cumartesi ücretsiz olarak zorunlu bir güvenlik eğitimi yapman gerektiğini söylüyor. Hangisi doğru?',
    'c.diploma.o1': 'Parasını işveren öder ve çalışma süresi sayılır.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.diploma.o2': 'Eğitim her zaman kendi boş zamanındadır.',
    'c.diploma.o3': 'Eğitimin parasını kendin ödemelisin.',
    'c.diploma.w': 'Bir eğitim işin için zorunluysa parasını işveren öder ve çalışma süresinden sayılır. Net değilse tavsiye al.',
    'c.doctor': 'Doktor mu, 112 mi?',
    'c.doctor.b': 'Evine yakın bir aile hekimine (huisarts) kaydol. Akşam, gece veya hafta sonu acil tedaviye mi ihtiyacın var? O zaman huisartsenpost’u ara. 112’yi sadece acil durumda ara: hayati tehlike, yangın veya şu anda işlenen bir suç. İlaçları eczaneden (apotheek) alırsın.',
    'c.doctor.p': 'Aile hekimine kaydolmak istiyorum.',
    'c.doctor.s': 'Cumartesi gecesi. Çocuğunun ateşi yüksek ama uyanık ve normal nefes alıyor. Ne yaparsın?',
    'c.doctor.o1': 'Huisartsenpost’u ararsın.',
    'c.doctor.o2': '112’yi ararsın.',
    'c.doctor.o3': 'Pazartesiye kadar bekler ve hiçbir şey yapmazsın.',
    'c.doctor.w': 'Huisartsenpost mesai saatleri dışında acil tedavi için yardım eder. 112 acil durumlar içindir: hayati tehlike, yangın veya şu anda işlenen bir suç.',
    'c.insurance': 'Sağlık sigortası',
    'c.insurance.b': 'Hollanda’da yaşıyor veya çalışıyorsan genelde temel sağlık sigortası zorunludur. Her ay prim ödersin. Her yıl bir kendi payı (eigen risico) vardır: ilk masrafları kendin ödersin. Miktar değişir: sigorta şirketine sor. Aile hekimine (huisarts) gitmek kendi payına sayılmaz. Gelirin düşükse sağlık yardımı (zorgtoeslag) alabilirsin. Genel bilgi. Kendi durumun için işverenine, sendikaya veya Juridisch Loket’e sor.',
    'c.insurance.p': 'Sağlık sigortasına ihtiyacım var. Bana yardım edebilir misiniz?',
    'c.insurance.s': 'İki hafta önce burada çalışmaya başladın ve henüz sağlık sigortan yok. Ne yaparsın?',
    'c.insurance.o1': 'Hemen sağlık sigortası yaptırırsın.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.insurance.o2': 'Beklersin: kendi ülkendeki sigortan yeterli.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.insurance.o3': 'Bir arkadaşının sigorta kartını kullanırsın.',
    'c.insurance.w': 'Sigortan yoksa doktor veya hastane çok pahalıya mal olabilir ve ceza alabilirsin. Bunu hemen halletmek seni korur. İşverenin veya ajansın sana yardım edebilir.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.letters': 'Mektupları görmezden gelme',
    'c.letters.b': 'Belastingdienst, gemeente veya UWV’den gelen mektupları görmezden gelme. Okumak için güvendiğin birinden yardım iste. Geçen yılın vergi beyannamesi (aangifte) genelde 1 Mayıs’tan önce verilmelidir. Ek süre isteyebilirsin. Zorgtoeslag ve huurtoeslag gibi yardımlar (toeslagen) gelirine bağlıdır. Fazla alırsan geri ödemen gerekir, bu yüzden gelir bilgilerini güncel tut. Genel bilgi. Kendi durumun için işverenine, sendikaya veya Juridisch Loket’e sor.',
    'c.letters.p': 'Bir mektup aldım. Bana yardım edebilir misin?',
    'c.letters.s': 'Belastingdienst’ten bir mektup alıyorsun. Anlamıyorsun. Ne yaparsın?',
    'c.letters.o1': 'Güvendiğin birinden okumana yardım etmesini istersin.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.letters.o2': 'Bir çekmeceye koyar ve beklersin.',
    'c.letters.o3': 'Muhtemelen reklam olduğu için atarsın.',
    'c.letters.w': 'Resmî mektupların çoğu zaman bir son tarihi vardır. Zamanında cevap verirsen sorunlar genelde daha kolay çözülür.',
    'c.scams': 'Dolandırıcılığa dikkat',
    'c.scams.b': 'Bankan kodlarını veya PIN’ini asla telefonla, SMS’le veya e-postayla istemez. Beklemediğin mesajlardaki bağlantılara tıklama. Biri seni hemen ödeme yapman için mi sıkıştırıyor? Dur ve önce kontrol et. Bankanı resmî numarasından ara, örneğin banka kartının üstündeki veya bankanın sitesindeki numaradan.',
    'c.scams.p': 'Bankayı kendim geri arayacağım.',
    'c.scams.s': 'Bir SMS alıyorsun: “Banka hesabın bloke edilecek. Hemen bu bağlantıya tıkla.” Ne yaparsın?',
    'c.scams.o1': 'Tıklamazsın. Bankanı resmî numarasından ararsın.',
    'c.scams.o2': 'Hesabın bloke olmasın diye hemen tıklarsın.',
    'c.scams.o3': 'SMS’e cevap verir ve gerçek olup olmadığını sorarsın.',
    'c.scams.w': 'Dolandırıcılar baskı ve sahte bağlantılar kullanır. Bankan kodlarını asla bir bağlantı veya mesajla istemez.',
    'c.bike': 'İşe bisikletle gitmek',
    'c.bike.b': 'Hava karanlıkken lambalarını yak. Bisiklet yolunda git, trafik ışıklarına ve işaretlere uy. Bisikletini her zaman kilitle. Bisiklet sürerken telefonu elinde tutmak yasaktır.',
    'c.bike.p': 'Bisikletimi nereye park edebilirim?',
    'c.bike.s': 'Hava karanlık ve gece vardiyana bisikletle gidiyorsun. Telefonun çalıyor. Ne yaparsın?',
    'c.bike.o1': 'Cevap vermeden önce güvenli bir yerde durursun.',
    'c.bike.o2': 'Bisiklet sürerken telefon elinde cevap verirsin.',
    'c.bike.o3': 'Devam eder ve telefonuna hızlıca bakarsın.',
    'c.bike.w': 'Bisiklet sürerken elde telefon yasak ve tehlikelidir. Önce durmak sadece bir an sürer.',
    'c.transit': 'Otobüs, tren ve yol masrafları',
    'c.transit.b': 'Çoğu otobüs ve trende banka kartınla ödeyebilirsin (OVpay). Aynı kartla hem giriş HEM çıkış yap, yoksa fazla ödersin. Yol parası (reiskostenvergoeding) yasal bir hak değildir: işverenine veya cao’ya bağlıdır. Bunu sor. Genel bilgi. Kendi durumun için işverenine, sendikaya veya Juridisch Loket’e sor.',
    'c.transit.p': 'Yol masraflarım için para alıyor muyum?',
    'c.transit.s': 'Her gün otobüsle işe gidiyorsun. Bir iş arkadaşın yol parası alıyor, sen almıyorsun. Ne yaparsın?',
    'c.transit.o1': 'Amirine şirketinde veya cao’nda kuralların ne olduğunu sorarsın.',
    'c.transit.o2': 'Muhtemelen senin için olmadığından hiçbir şey söylemezsin.',
    'c.transit.o3': 'Amirine şunu söylersin: kanuna göre sana da verilmesi gerekir.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.transit.w': 'Yol parası işverene veya cao’ya bağlıdır. Bunu sormak normaldir ve haklarını bilmene yardım eder.',
    'c.ww': 'İşsizlik maaşı (WW)',
    'c.ww.b': 'İşini mi kaybettin? WW için mümkün olan en kısa sürede, işsiz kaldığın ilk günden sonraki bir hafta içinde UWV’ye başvur. Genelde son 36 haftanın en az 26’sında çalışmış olman gerekir. İşinden kendin ayrılırsan genelde WW alamazsın. werk.nl sitesinde iş arayan olarak kaydol. Genel bilgi. Kendi durumun için işverenine, sendikaya veya Juridisch Loket’e sor.',
    'c.ww.x': 'Başka bir AB ülkesinde iş mi arıyorsun? WW’yi bazen yanında götürebilirsin. Gitmeden önce UWV’den U2 formunu iste. U2 olmadan WW’n kesilir.', // nieuw, nalezen (uit een ander land, 10 nov 2026) // nagelezen AI 22 nov
    'c.ww.p': 'İşsizlik maaşına başvurmak istiyorum. Ne yapmalıyım?',
    'c.ww.s': 'İşine kızgınsın ve bugün istifa etmek istiyorsun. Akıllıca olan ne?',
    'c.ww.o1': 'Ayrılmadan önce tavsiye alırsın.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.ww.o2': 'Bugün istifa edersin: nasılsa WW alırsın.',
    'c.ww.o3': 'Hiçbir şey söylemeden işe gitmeyi bırakırsın.',
    'c.ww.w': 'İstifa etmek, işsizlik maaşını kaybetmene yol açabilir. Önce amirinle, sendikayla veya Juridisch Loket ile konuşmak daha iyi bir yol bulmana yardım edebilir.',
    'c.newjob': 'Yeni iş aramak',
    'c.newjob.b': 'Ayrılmadan önce bir referans (referentie) iste. Maaş bordrolarını ve sözleşmeni sakla. CV’ni güncelle. Geçici iş ajanslarında (uitzendbureaus) ve werk.nl sitesinde iş ara. İş bulmak için asla para ödeme. Genel bilgi. Kendi durumun için sendikaya, Juridisch Loket’e veya FairWork’e sor.',
    'c.newjob.p': 'Adınızı referans olarak verebilir miyim?',
    'c.newjob.s': 'Biri sana iş teklif ediyor, ama önce “iş için” 300 euro ödemen gerekiyor. Ne yaparsın?',
    'c.newjob.o1': 'Ödemezsin. Gerçek bir ajans ararsın.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.newjob.o2': 'İyi bir iş buna değer diye ödersin.',
    'c.newjob.o3': 'Yarısını şimdi, kalanını sonra ödersin.',
    'c.newjob.w': 'Bir iş için para istemek bir uyarı işaretidir. Geçici iş ajansı sana iş bulduğu için senden para alamaz. werk.nl’de de iş arayabilirsin.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.tools': 'Toolbox toplantısı',
    'c.tools.b': 'Birçok inşaat alanında düzenli olarak kısa bir güvenlik toplantısı yapılır: toolbox toplantısı. Riskler ve yeni kurallar hakkında bilgi alırsın. Toplantıya git, dinle ve anlamadığın bir şey olursa soru sor. Aletlerini kullanmadan önce kontrol et. Bir alet bozuk mu? Amirine söyle.',
    'c.tools.p': 'Bu matkap bozuk. Başka bir tane var mı?',
    'c.tools.s': 'Bir toolbox toplantısı var, ama Hollandacan henüz iyi değil. Ne yaparsın?',
    'c.tools.o1': 'Gider, kaçırdığını sonra bir arkadaşa sorarsın.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.tools.o2': 'Nasılsa anlamayacağın için gitmezsin.',
    'c.tools.o3': 'Gitmeden katılım listesini imzalarsın.',
    'c.tools.w': 'Güvenlik bilgisi herkes içindir. Orada telefona izin varsa, bir çeviri uygulaması toplantıyı takip etmene yardım edebilir. Sonra bir iş arkadaşına sormak normaldir ve doğru anlayıp anlamadığını kontrol etmeni sağlar.',
    'c.site': 'Dur ve kontrol et: LMRA',
    'c.site.b': 'Bir işe başlamadan önce bir an dur ve kontrol et: burada ne ters gidebilir? Buna LMRA (işe başlamadan hemen önce yapılan risk analizi) denir. Her zaman baretini tak, yüksekte çalışırken düşme korumanı da. Asla asılı bir yükün altında durma. İş gerçekten tehlikeli mi? O zaman durabilirsin ve hemen amirine söylemelisin. Genel bilgi. Kendi durumun için işverenine, sendikaya veya Juridisch Loket’e sor.',
    'c.site.p': 'Henüz başlamıyorum. Bu güvenli değil.',
    'c.site.s': 'Bir iskelede çalışman gerekiyor ama bir korkuluk eksik. Bir iş arkadaşın diyor ki: “Dikkatli ol, yeter.” Ne yaparsın?',
    'c.site.o1': 'Başlamazsın ve amirine söylersin.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.site.o2': 'Başlarsın ama çok dikkatli olursun.',
    'c.site.o3': 'Korkuluğu biraz iple kendin tamir edersin.',
    'c.site.w': 'Yüksekten düşmek çok ağır yaralanmalara yol açabilir. Tehlikeli işi durdurabilirsin ve bildirmek bütün ekibi korur.',
    'c.line': 'Elini çalışan makinelerden uzak tut',
    'c.line.b': 'Çalışan bir makinenin içine asla elini sokma, bir saniyeliğine bile. Arıza (storing) olduğunda acil durdurma düğmesine (noodstop) bas ve amirini çağır. Bakım ve onarım sadece makine kilitlenmişken (lock-out) ve sadece eğitimli kişiler tarafından yapılır. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.',
    'c.line.p': 'Bir arıza var. Acil durdurma düğmesine bastım.',
    'c.line.s': 'Bir ürün makineye sıkıştı. Makine hâlâ çalışıyor. Ne yaparsın?',
    'c.line.o1': 'Acil durdurma düğmesine basar ve amirini çağırırsın.',
    'c.line.o2': 'Bozulmadan önce hızlıca elinle çekip çıkarırsın.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.line.o3': 'Bırakır ve makinenin kendiliğinden düzelmesini umarsın.',
    'c.line.w': 'Çalışan makineler bir saniyede ağır kazalara yol açabilir. Makineyi durdurmana her zaman izin vardır ve bu her zaman daha iyidir.',
    'c.quality': 'Kalite: gördüğünü söyle',
    'c.quality.b': 'Bir üründe hasar veya yanlış etiket gibi bir sorun mu görüyorsun? Bildir ve ürünü kenara koy. Sırf bant çalışmaya devam etsin diye geçmesine izin verme. Bir sorunu erken bulmak çok iş ve para kazandırır. Amirin bunu söylediğin için memnun olur.',
    'c.quality.p': 'Bence bu ürünlerde bir sorun var.',
    'c.quality.s': 'Birçok ürünün etiketinde yanlış tarih olduğunu görüyorsun. Bant çok yoğun. Ne yaparsın?',
    'c.quality.o1': 'Hemen amirine veya kalite sorumlusuna söylersin.',
    'c.quality.o2': 'Senin işin olmadığı için geçmelerine izin verirsin.',
    'c.quality.o3': 'Sessizce çöpe atarsın.',
    'c.quality.w': 'Yanlış bir etiket, bütün ürünlerin mağazalardan geri toplanması gerektiği anlamına gelebilir. Bunu erken söylemek iyi bir ekip arkadaşının işidir.',
    'c.client': 'Danışana saygı',
    'c.client.b': 'Bir danışanın odasına girmeden önce kapıyı çal. Kim olduğunu söyle, ne yapacağını açıkla ve izin iste. Danışanlara “u” de, senden “je” demeni istemedikleri sürece. Danışanların kendi yapabildikleri şeyleri kendilerinin yapmasına izin ver.',
    'c.client.p': 'Girebilir miyim? Yıkanmanıza yardım etmeye geldim.',
    'c.client.s': 'Bir danışanın yıkanmasına yardım etmen gerekiyor. Odasının kapısı kapalı. Ne yaparsın?',
    'c.client.o1': 'Çalar, bekler, kim olduğunu ve neden geldiğini söylersin.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.client.o2': 'Meşgul olduğun için hızlıca içeri girersin.',
    'c.client.o3': 'Onu rahatsız etmemek için yıkamayı atlarsın.',
    'c.client.w': 'Oda, danışanın evidir. Kapıyı çalmak ve açıklamak saygı gösterir ve bakımı daha sakin yapar.',
    'c.privacy': 'Gizlilik, hijyen ve ilaçlar',
    'c.privacy.b': 'Danışanlar hakkında gördüğün ve duyduğun şeyler iş yerinde kalır. İş dışında danışanlardan bahsetme ve asla onların fotoğraflarını paylaşma. Bakımdan önce ve sonra ellerini temizle. Bir danışanda ağrı veya düşme gibi bir değişiklik mi fark ediyorsun? Hemen hemşireye söyle. Eğitimin ve iznin yoksa asla ilaç verme. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.',
    'c.privacy.p': 'Beyefendinin dünden daha fazla ağrısı var.',
    'c.privacy.s': 'Bir danışan senden haplarını istiyor. İlaç vermek için eğitimin yok. Ne yaparsın?',
    'c.privacy.o1': 'Kibarca hemşireyi çağıracağını söylersin.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.privacy.o2': 'Neye ihtiyacı olduğunu bildiği için hapları verirsin.',
    'c.privacy.o3': 'Hayır der ve gidersin.',
    'c.privacy.w': 'Yanlış ilaç tehlikeli olabilir. Doğru kişiyi hemen çağırmak danışana yardım eder ve herkesi güvende tutar.',
    'c.kitchen': 'Gıda güvenliği',
    'c.kitchen.b': 'Ellerini sık sık yıka, tuvaletten sonra ve çiğ ete dokunduktan sonra da. Soğuk yiyecekleri soğuk, sıcak yiyecekleri sıcak tut. Sakladığın yiyeceklere tarihli bir etiket koy. Bu kurallara HACCP denir. Alerjiler ciddidir: bir yemekte ne olduğundan emin değil misin? Her zaman şefe sor. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.',
    'c.kitchen.p': 'Şef, bu sosta gluten var mı?',
    'c.kitchen.s': 'Bir misafir bir yemekte kuruyemiş olup olmadığını soruyor. Emin değilsin. Ne yaparsın?',
    'c.kitchen.o1': 'Kontrol edeceğini söyler ve şefe sorarsın.',
    'c.kitchen.o2': 'Misafir memnun olsun diye “hayır” dersin.',
    'c.kitchen.o3': 'Misafire kuruyemişleri ayıklamasını söylersin.',
    'c.kitchen.w': 'Alerjisi olan bir misafir için küçük bir hata çok tehlikeli olabilir. Şefe sormak her zaman doğrudur.',
    'c.service': 'Misafirlere karşı kibar ol',
    'c.service.b': 'Misafirlere “u” de, sana “je” demeni istemedikleri sürece. Yoğun olduğunda da güler yüzlü ve sakin ol. Bir sorudan emin değil misin? Kontrol edeceğini söyle. Bahşiş (fooi): kurallar yerden yere değişir. Çalıştığın yerde bahşişlerin nasıl paylaşıldığını sor.',
    'c.service.p': 'Bir dakika, hemen yanınızdayım.',
    'c.service.s': 'Çok yoğun. Bir misafir seni çağırıyor ama sen başka bir masaya tabak taşıyorsun. Ne yaparsın?',
    'c.service.o1': 'Misafire bakar ve “Een moment, ik kom zo bij u.” dersin.',
    'c.service.o2': 'Vaktin olana kadar misafiri görmezden gelirsin.',
    'c.service.o3': 'Tabakları boş bir masaya bırakır ve önce misafire gidersin.',
    'c.service.w': 'Kısa bir işaret misafire onu gördüğünü gösterir. Sonra işini sakince bitirebilirsin.',
    'c.cleaning': 'Etiketi oku',
    'c.cleaning.b': 'Her temizlik ürününün bir etiketi vardır. Piktogramlar (kırmızı bir eşkenar dörtgen içindeki küçük resimler) tehlikeyi gösterir, örneğin cildin, gözlerin veya ciğerlerin için. Etiketi oku ya da ürünün ne için olduğunu ve nasıl kullanılacağını sor. İşverenin verdiği eldivenleri tak. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.',
    'c.cleaning.p': 'Bu ürün ne için?',
    'c.cleaning.s': 'Yeni bir temizlik ürünü alıyorsun. Etiketi iyi okuyamıyorsun. Ne yaparsın?',
    'c.cleaning.o1': 'Nasıl güvenli kullanılacağını sorarsın.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.cleaning.o2': 'Bol bol kullanırsın, o zaman daha iyi işe yarar.',
    'c.cleaning.o3': 'Eldivensiz denersin.',
    'c.cleaning.w': 'Yanlış ürün veya fazlası cildine, gözlerine veya ciğerlerine zarar verebilir. Sormak bir dakika sürer.',
    'c.cleansafe': 'Ürünleri asla karıştırma',
    'c.cleansafe.b': 'Temizlik ürünlerini asla karıştırma, örneğin çamaşır suyu ve tuvalet temizleyicisini. Bu tehlikeli gazlar oluşturabilir. Ortamı havalandır. Yer mi siliyorsun? Kimse kaymasın diye ıslak zemin levhasını (Pas op, glad!) koy. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.',
    'c.cleansafe.p': 'Levhayı koyuyorum. Zemin ıslak.',
    'c.cleansafe.s': 'Tuvalet çok kirli. Bir iş arkadaşın diyor ki: “İki ürünü karıştır, daha iyi işe yarar.” Ne yaparsın?',
    'c.cleansafe.o1': 'Karıştırmazsın. Tek bir ürün kullanırsın.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.cleansafe.o2': 'Karıştırırsın, ama bir pencere açarsın.',
    'c.cleansafe.o3': 'Hızlıca karıştırır ve odadan çıkarsın.',
    'c.cleansafe.w': 'Ürünleri karıştırmak, pencere açık olsa bile zehirli gaz oluşturabilir. İyi kullanılan tek bir ürün yeterlidir.',
    'u.tools': 'Akıllı araçlar',
    'l.translate': 'Telefonunla çevir',
    'w.vertaalapp': 'çeviri uygulaması',
    'w.vertalen': 'çevirmek',
    'w.camera': 'kamera',
    'w.briefje': 'not kâğıdı (küçük bir kâğıt)',
    'w.spreken': 'konuşmak',
    'w.vertaling': 'çeviri',
    's.translate.1': 'Telefonumla çeviriyorum.',
    's.translate.2': 'Bunu hızlıca çevirebilir miyim?',
    's.translate.3': 'Bir saniye telefonuma konuşur musunuz?',
    'c.translate.q': 'O notta ne yazıyor?',
    'c.translate.a': 'Bir dakika, çeviriyorum.',
    'l.understood': 'Anlamak ve anlaşılmak',
    'w.herhalen': 'tekrarlamak',
    'w.opschrijven': 'yazmak, not etmek',
    'w.latenzien': 'göstermek',
    'w.ondertiteling': 'altyazı (konuşmanın yazısı)',
    'w.instructie': 'talimat',
    'w.plaatje': 'resim',
    's.understood.1': 'Bunu yazar mısınız?',
    's.understood.2': 'Gösterebilir misiniz?',
    's.understood.3': 'Resimli bir talimat var mı?',
    'c.understood.q': 'Önce ortalığı topla, sonra paketle.',
    'c.understood.a': 'Yani önce toparlamam mı gerekiyor?',
    'l.keeplearning': 'Öğrenmeye devam et',
    'w.bibliotheek': 'kütüphane (halk kütüphanesi)',
    'w.taalhuis': 'Taalhuis (Hollandaca için ücretsiz yardım)',
    'w.oefenen': 'pratik yapmak',
    'w.luisteren': 'dinlemek',
    'w.elkedag': 'her gün',
    'w.woord': 'kelime',
    's.keeplearning.1': 'Her gün on dakika pratik yapıyorum.',
    's.keeplearning.2': 'Bu kelime ne demek?',
    's.keeplearning.3': 'Benimle Hollandaca konuşur musun?',
    'c.keeplearning.q': 'İngilizce konuşayım mı?',
    'c.keeplearning.a': 'Hayır, Hollandaca lütfen. Pratik yapmak istiyorum.',
    'c.translate': 'Çeviri uygulamaları: akıllı, ama kontrol et',
    'c.translate.b': 'Google Translate gibi bir çeviri uygulaması çok yardımcı olur. Yazabilir, konuşabilir veya bir iş arkadaşınla konuşmak için sohbet modunu kullanabilirsin. Kamerayla tabelaları, notları ve talimatları çevirebilirsin. Birçok telefonda WhatsApp da mesajları çevirebilir. Telefonunu sadece güvenli ve izin verilen yerlerde kullan. Makinelerin ve forkliftlerin yanında asla kullanma. Her zaman önce sor. Uygulamalar hata yapar. Sözleşmen, bir mektup veya bir güvenlik talimatı gibi önemli şeyleri bir kişiye de açıklat. İzin almadan gizli iş belgelerinin fotoğrafını çekme.',
    'c.translate.p': 'Çeviri için telefonumu kullanabilir miyim?',
    'c.translate.s': 'Amirin sana Hollandaca güvenlik talimatları veriyor. Sadece birkaç kelime anlıyorsun. Ne yaparsın?', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.translate.o1': 'Bir açıklama ister ve uygulama kullanıp kullanamayacağını sorarsın.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.translate.o2': '“ja, ja” der ve işe başlarsın.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.translate.o3': 'Fotoğrafını çeker ve arkadaşlarına gönderirsin, onlar çevirsin diye.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.translate.w': 'Çeviri uygulaması hızlı anlamana yardım eder, ama hata yapabilir. Güvenlik için en iyi kontrol, bir kişinin açıklamasıdır. İş belgeleri gizli olabilir, bu yüzden onları izinsiz paylaşma.',
    'c.understood': 'Anladığını kontrol et',
    'c.understood.b': 'Telefonun konuşmayı yazıya çevirebilir (canlı altyazı): Android’de Live Transcribe, iPhone’da Live Captions. Telefonunun hangi dilleri desteklediğini kontrol et. Birinden bunu yazmasını, göstermesini veya yavaş konuşmasını da isteyebilirsin. Resimli veya senin dilinde bir talimat olup olmadığını sor. Sonra anladığını tekrar söyle: “Dus ik moet eerst …?” Burada bu normaldir ve hataları önler.',
    'c.understood.p': 'Yani önce kutuları saymam mı gerekiyor?',
    'c.understood.s': 'Bir iş arkadaşın yeni bir makinenin nasıl çalıştığını anlatıyor. Hızlı konuşuyor ve bazı kelimeleri kaçırıyorsun. Ne yaparsın?',
    'c.understood.o1': 'Ondan göstermesini veya yazmasını istersin, sonra tekrar söylersin.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.understood.o2': 'Başını sallar ve “ja, ja” dersin, zaman kaybetmesin diye.',
    'c.understood.o3': 'Makineyi sonra tek başına dener ve ne olacağını görürsün.',
    'c.understood.w': 'Göstermek, yazmak ve tekrar söylemek hızlı kontrollerdir. İş arkadaşın, bir şey ters gitmeden seni düzeltebilir. Burada bu yavaşlık olarak değil, dikkat olarak görülür.',
    'c.keeplearning': 'Öğrenmeye devam et, her gün biraz',
    'c.keeplearning.b': 'Her gün birkaç dakika, haftada bir uzun saatten daha çok yardımcı olur. İşteki yeni kelimeleri telefonundaki bir not uygulamasına kaydet. Kolay Hollandaca dinle, örneğin NOS Jeugdjournaal (çocuklar için haberler) veya yavaş Hollandaca bir podcast. Birçok halk kütüphanesinde bir Taalhuis var: Hollandaca için ücretsiz yardım, çoğu zaman bir taalcafé (konuşma pratiği yapılan bir yer) veya bir dil arkadaşı (taalmaatje) ile. İş arkadaşların sana yardım etmek için çoğu zaman İngilizceye geçer. Onlardan kibarca seninle Hollandaca konuşmalarını iste: çoğu insan yardım etmeyi sever.',
    'c.keeplearning.p': 'Benimle sadece Hollandaca konuş, böylece daha hızlı öğrenirim.',
    'c.keeplearning.s': 'İş arkadaşların seninle konuşurken hep İngilizceye geçiyor. Hollandaca öğrenmek istiyorsun. Ne yaparsın?',
    'c.keeplearning.o1': 'Onlara teşekkür eder ve seninle Hollandaca konuşmalarını istersin.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.keeplearning.o2': 'Hiçbir şey söylemezsin. Hollandaca kendiliğinden gelir.',
    'c.keeplearning.o3': 'Daha kibar olduğu için sen de İngilizce cevap verirsin.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.keeplearning.w': 'İş arkadaşları kibar olmak için çoğu zaman İngilizceye geçer. Hollandaca istediğinde çoğu yardım etmekten mutlu olur. İş yerinde her gün biraz konuşmak, öğrenmenin en hızlı yollarından biridir.',
    'l.gossip': "Dedikodu ve sosyal medya",
    'w.roddelen': "dedikodu yapmak",
    'w.posten': "paylaşmak (internette), gönderi atmak",
    'w.groepsapp': "grup sohbeti",
    'w.socialemedia': "sosyal medya",
    'w.delen': "paylaşmak",
    'w.screenshot': "ekran görüntüsü",
    's.gossip.1': "İş arkadaşlarım hakkında dedikodu yapmam.",
    's.gossip.2': "İşten fotoğrafları internete koymam.",
    's.gossip.3': "Bunu bana kendin söylemeni tercih ederim.",
    'c.gossip.q': "Mark’ın ne yaptığını duydun mu?",
    'c.gossip.a': "Hayır, ve onun hakkında konuşmamayı tercih ederim.",
    'l.boundaries': "Sınırı aşmak",
    'w.aanraken': "dokunmak",
    'w.ongewenst': "istenmeyen",
    'w.opmerking': "söz, yorum",
    'w.intimidatie': "taciz, yıldırma",
    'w.getuige': "tanık",
    'w.grapje': "şaka",
    's.boundaries.1': "Bana dokunma.", // nieuw, nalezen ("Blijf van me af.", 4 nov 2026)
    's.boundaries.2': "Bu sözü komik bulmuyorum.",
    's.boundaries.3': "Güven danışmanına bir şey bildirmek istiyorum.",
    'c.boundaries.q': "Bu kadar zorluk çıkarma, sadece bir şakaydı.",
    'c.boundaries.a': "Benim için şaka değildi. Durmanı istiyorum.", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.gossip': "Dedikodu ve sosyal medya",
    'c.gossip.b': "Bir iş arkadaşının arkasından konuşmak (roddelen) ekipteki güvene zarar verir. Biriyle bir sorunun mu var? O kişiyle veya amirinle konuş. İnternette de işteki kurallar geçerlidir. İzin almadan iş arkadaşların, müşteriler veya şirket hakkında hiçbir şey paylaşma. Buna fotoğraflar, videolar ve mesajlar da dahildir. Patronun ne paylaştığını görebilir ve bu yıllarca internette kalabilir. Birçok ekibin iş için bir grup sohbeti (groepsapp) vardır: orada sadece işten konuş ve ekran görüntülerini başkalarıyla paylaşma. Bir iş arkadaşının özel şeylerini paylaşmak veya internette biriyle alay etmek de zorbalıktır.",
    'c.gossip.p': "Bunun internette olmasını istemiyorum.",
    'c.gossip.s': "Islak zeminde kaydığında bir iş arkadaşın seni videoya çekiyor. Videoyu TikTok’a koymak istiyor. Ne yaparsın?",
    'c.gossip.o1': '“Nee, dat wil ik niet” der ve videoyu silmesini istersin.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.gossip.o2': "Zorluk çıkarmamak için güler ve paylaşmasına izin verirsin.",
    'c.gossip.o3': 'Videoyu adın olmadan paylaşmasını istersin.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.gossip.w': 'Genelde kimse senin iznin olmadan videonu internete koyamaz. Hayır demek normaldir ve iş arkadaşları internette birbirleriyle alay ettiğinde işverenin harekete geçmek zorundadır. Yine de paylaşırsa amirine söyle.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.boundaries': "Sınırı aşmak",
    'c.boundaries.b': "Grensoverschrijdend gedrag, birinin sınırını aşan davranıştır. Örneğin: istenmeyen dokunma, cinsel sözler veya şakalar, dik dik bakmak, istenmeyen resimler, tehdit veya bağırmak. Diğer kişinin bunu “şaka olarak” söylemiş olması önemli değildir: önemli olan senin nasıl hissettiğindir. Yapabiliyorsan, durmasını istediğini açıkça söyle. Ne olduğunu, ne zaman olduğunu ve kimin gördüğünü yaz. Amirine, güven danışmanına (vertrouwenspersoon, varsa) veya HR’a söyle. İşverenin seni korumak zorundadır ve bildirdiğin için cezalandırılamazsın. Bunun bir iş arkadaşının başına geldiğini mi gördün? İyi olup olmadığını sor ve tanık olmayı teklif et.",
    'c.boundaries.p': "Durmanı istiyorum.",
    'c.boundaries.s': "Ekip liderin sık sık elini sırtına koyuyor ve “güzel” göründüğünü söylüyor. Bu seni rahatsız ediyor. Vardiyalarına o karar veriyor. Ne yaparsın?",
    'c.boundaries.o1': 'Olanları yazar ve vertrouwenspersoon ile konuşursun.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.boundaries.o2': "Vardiyalarına o karar verdiği için hiçbir şey söylemezsin.",
    'c.boundaries.o3': "Kimseye nedenini söylemeden işten ayrılırsın.",
    'c.boundaries.w': 'Bu istenmeyen bir davranıştır ve senin suçun değildir. Güven danışmanı seni gizlilik içinde dinler ve sonraki adımı seçmene yardım eder. Bildirdiğinde korunursun. HR ile de konuşabilirsin.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'u.shop': 'Mağazada',
    'l.shelves': 'Raflar ve stok',
    'w.schap': 'raf (mağazada)',
    'w.vakkenvullen': 'rafları doldurmak',
    'w.voorraad': 'stok',
    'w.houdbaarheidsdatum': 'son kullanma tarihi',
    'w.prijskaartje': 'fiyat etiketi',
    'w.achteraan': 'arkada, arkaya',
    's.shelves.1': 'Yeni ürünleri arkaya koy.',
    's.shelves.2': 'Bu ürünün tarihi geçmiş.',
    's.shelves.3': 'Hâlâ stok var mı?',
    'c.shelves.q': 'Pirinci nerede bulabilirim?',
    'c.shelves.a': 'Dördüncü koridorda. Sizinle geleyim.',
    'l.checkout': 'Kasada',
    'w.klant': 'müşteri',
    'w.kassa': 'kasa',
    'w.wisselgeld': 'para üstü',
    'w.bonnetje': 'fiş',
    'w.pinnen': 'kartla ödemek',
    'w.contant': 'nakit',
    's.checkout.1': 'Kartla mı, nakit mi ödemek istersiniz?',
    's.checkout.2': 'Buyurun, para üstünüz.',
    's.checkout.3': 'Kimliğinizi görebilir miyim?',
    'c.checkout.q': 'Burada kartla ödeyebilir miyim?',
    'c.checkout.a': 'Evet, tabii, olur.',
    'u.numbers': 'Zaman, para ve ölçüler',
    'l.counting': 'Sayılar', // nieuw, nalezen
    'w.dertien': 'on üç (13)', // nieuw, nalezen
    'w.dertig': 'otuz (30)', // nieuw, nalezen
    'w.zeventien': 'on yedi (17)', // nieuw, nalezen
    'w.zeventig': 'yetmiş (70)', // nieuw, nalezen
    'w.zevenenveertig': 'kırk yedi (47)', // nieuw, nalezen
    'w.vierenzeventig': 'yetmiş dört (74)', // nieuw, nalezen
    's.counting.1': 'On üç kutum var, otuz değil.', // nieuw, nalezen
    's.counting.2': 'Yetmiş dört numaralı yer boş.', // nieuw, nalezen
    's.counting.3': 'Rakam rakam söyleyebilir misiniz?', // nieuw, nalezen
    'c.counting.q': 'Kaç kutu kaldı?', // nieuw, nalezen
    'c.counting.a': 'Yetmiş. Yedi, sıfır.', // nieuw, nalezen
    'l.hours': 'Saatler ve zaman',
    'w.uur': 'saat (60 dakika)',
    'w.minuut': 'dakika',
    'w.kwartier': 'çeyrek saat (15 dakika)',
    'w.halfuur': 'yarım saat (30 dakika)',
    'w.duren': 'sürmek',
    'w.optellen': 'toplamak (sayıları)',
    's.hours.1': 'Yedi buçukta (7.30) başlıyorum.',
    's.hours.2': 'Bugün sekiz saat çalışıyorum.',
    's.hours.3': 'Mola yarım saat sürüyor.',
    'c.hours.q': 'Saat kaçta bitiriyorsun?',
    'c.hours.a': 'Dördü çeyrek geçe.',
    'l.measures': 'Para ve ölçüler',
    'w.euro': 'euro',
    'w.cent': 'sent',
    'w.kilo': 'kilo',
    'w.liter': 'litre',
    'w.meter': 'metre',
    'w.tellen': 'saymak',
    's.measures.1': 'Fiyatı altı euro elli sent.',
    's.measures.2': 'Bu kutu on kilo geliyor.',
    's.measures.3': 'Kırk kutu saydım.',
    'c.measures.q': 'O tahta ne kadar uzun?',
    'c.measures.a': 'Tam iki metre.',
    'c.shelves': 'Eskiler öne',
    'c.shelves.b': 'Rafları doldururken ürünlerin üzerindeki tarihe bak. Tarihi daha yakın olan ürünleri öne, yenileri arkaya koy. Müşteriler önden alır, böylece eski ürünler önce satılır. Bir ürünün tarihi geçmiş mi, ya da hasarlı mı? Onu raftan al ve ne yapacağını sor. Koridorları kutulardan ve arabalardan boş tut. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.',
    'c.shelves.p': 'Tarihi geçmiş ürünlerle ne yapayım?',
    'c.shelves.s': 'Rafa yeni süt koyuyorsun. Önde tarihi daha yakın olan süt var. Ne yaparsın?', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.shelves.o1': 'Yeni süt arkaya, eski süt öne.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.shelves.o2': 'Yeni süt öne, çünkü daha taze.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.shelves.o3': 'Eski sütü atarsın.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.shelves.w': 'Müşteriler önden alır. Eski ürünler önce satılınca daha az yiyecek atılır.',
    'c.checkout': 'Alkol ve tütün için kimlik',
    'c.checkout.b': '18 yaşından küçük birine alkol veya tütün satamazsın: kanun böyle. Müşterinin kaç yaşında olduğundan emin değil misin? Kimliğini iste. Birçok mağaza 25 yaşından genç görünen herkesten kimlik ister. Kimlik yok mu, ya da 18 yaşından küçük mü? O zaman satmazsın ve kibar kalırsın. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.',
    'c.checkout.p': 'Kimlik olmadan bunu satamam.',
    'c.checkout.s': 'Genç bir adam bira almak istiyor. Yaklaşık 17 yaşında görünüyor. 19 yaşında olduğunu söylüyor ama yanında kimliği yok. Ne yaparsın?',
    'c.checkout.o1': 'Kimlik olmadan satamayacağını söylersin.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.checkout.o2': '19 yaşında olduğunu söylediği için satarsın.',
    'c.checkout.o3': 'Satarsın, ama sadece bir kutu.',
    'c.checkout.w': 'Kimlik olmadan yaşını bilemezsin. 18 yaşından küçük birine alkol satmak kanuna aykırıdır ve mağaza para cezası alabilir.',
    'c.counting': 'Vijfentwintig: önce 5, sonra 20', // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.b': 'Hollandacada 0’dan 12’ye kadar her sayının kendi kelimesi var: nul, een, twee, drie, vier, vijf, zes, zeven, acht, negen, tien, elf, twaalf. 13’ten 19’a kadar olan sayılar -tien ile biter: dertien, veertien, vijftien, zestien, zeventien, achttien, negentien. Onluklar -tig ile biter: twintig, dertig, veertig, vijftig, zestig, zeventig, tachtig, negentig. 21’den 99’a kadar önce son rakam söylenir: 25, vijfentwintig yani “beş ve yirmi” olur. Yani 47 zevenenveertig, 74 de vierenzeventig. Dertien ve dertig neredeyse aynı duyulur: sonuna dikkat et. Emin değil misin? Rakamları tek tek tekrar et.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.p': 'Dört, yedi? Yani kırk yedi?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.s': 'Amirin diyor ki: “Ga naar gang zevenenveertig.” Hangi koridor?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.o1': '47 numaralı koridor.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.o2': '74 numaralı koridor.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.o3': '40 numaralı koridor.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.w': '“Zevenenveertig”, “yedi ve kırk” demek: önce 7, sonra 40. Yani 47 numaralı koridor. Birçok yeni gelen 74 duyar ve yanlış koridora gider.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.hours': '“Half acht” 7.30 demek',
    'c.hours.b': 'Hollandacada “half” bir sonraki saate göre söylenir: half acht 7.30 demektir, 8.30 değil. Kwart over acht 8.15, kwart voor acht ise 7.45 demektir. Saatlerini kendin kontrol et: bitiş saati eksi başlangıç saati, eksi mola. Mola çoğu zaman ücretli değildir. Saatlerini her gün not et.',
    'c.hours.p': '“Half acht” mı? Yani sekizden yarım saat önce mi?',
    'c.hours.s': 'Amirin diyor ki: “Morgen begin je om half negen.” Yarın saat kaçta başlıyorsun?',
    'c.hours.o1': '8.30’da.',
    'c.hours.o2': '9.30’da.',
    'c.hours.o3': '8.00’de.',
    'c.hours.w': '“Half negen”, dokuza yarım saat var demektir: 8.30. Birçok yeni gelen bunun 9.30 olduğunu sanır ve bir saat geç gelir.',
    'c.measures': 'Akıllıca say, ölç, tahmin etme',
    'c.measures.b': 'Saymak için çok kutu mu var? Bir kattaki kutuları say, sonra kat sayısını. Sonra çarp: bir katta 8 kutu ve 5 kat, 40 kutu eder. Temizlik ürünlerinde, etikette yazan miktarı ölç. Fazlası daha iyi değil: cildine zarar verebilir ve para israfıdır. Bir sayıdan emin değil misin? Tekrar say ya da sor. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.',
    'c.measures.p': 'İki kere saydım.',
    'c.measures.s': 'Bir palette 6 kat var. Her katta 8 kutu var. Amirin kaç kutu olduğunu soruyor. Ne dersin?',
    'c.measures.o1': '48 kutu.',
    'c.measures.o2': '14 kutu.',
    'c.measures.o3': 'Galiba 50 civarı.',
    'c.measures.w': '8 kutuluk 6 kat, 6 çarpı 8 demek: 48. Bir katı sayıp çarpmak hızlıdır ve gerçek bir sayı tahminden iyidir.',
    'u.ai': 'Akıllı uygulamalar ve yapay zekâ',
    'l.aihelp': 'Yardımcı olarak yapay zekâ',
    'w.ai': 'yapay zekâ (AI)',
    'w.chatbot': 'sohbet robotu, chatbot (yazışabildiğin uygulama)',
    'w.antwoord': 'cevap',
    'w.meekijken': 'biriyle birlikte bakmak, birlikte kontrol etmek',
    'w.kloppen': 'doğru olmak',
    'w.zeker': 'emin, kesin',
    's.aihelp.1': 'Bu mektubu açıklayabilir misin?',
    's.aihelp.2': 'Bu cevap doğru mu?',
    's.aihelp.3': 'Benimle birlikte bir bakabilir misiniz?',
    'c.aihelp.q': 'Bunu kendin mi yazdın?',
    'c.aihelp.a': 'Evet, yapay zekânın yardımıyla.',
    'l.aiprivate': 'Paylaşmadıkların',
    'w.persoonlijk': 'kişisel',
    'w.gegevens': 'bilgiler, veriler (ad, adres, numara)',
    'w.wachtwoord': 'şifre',
    'w.typen': 'yazmak (klavyeyle)',
    'w.opslaan': 'kaydetmek, saklamak',
    'w.inloggen': 'giriş yapmak (hesaba)',
    's.aiprivate.1': 'Müşterilerin isimlerini paylaşmam.',
    's.aiprivate.2': 'İşim için yapay zekâ kullanabilir miyim?',
    's.aiprivate.3': 'Şifrem gizli.',
    'c.aiprivate.q': 'Bunu sohbet robotuna yaz.',
    'c.aiprivate.a': 'Yazmasam daha iyi, içinde müşteri isimleri var.',
    'l.aifake': 'Sahte mi, gerçek mi?',
    'w.echt': 'gerçek',
    'w.stem': 'ses',
    'w.filmpje': 'video, kısa film',
    'w.ophangen': 'telefonu kapatmak',
    'w.nummer': '(telefon) numarası',
    'w.haast': 'acele',
    's.aifake.1': 'Bu gerçek mi, sahte mi?',
    's.aifake.2': 'Telefonu kapatıp kendim geri ararım.',
    's.aifake.3': 'Para göndermem.',
    'c.aifake.q': 'Merhaba, bu benim yeni numaram. Hemen biraz para gönderebilir misin?',
    'c.aifake.a': 'Önce eski numaranı arayacağım.',
    'l.aiplan': 'Bir uygulama karar verince',
    'w.planning': 'planlama, çalışma planı',
    'w.mens': 'insan',
    'w.computer': 'bilgisayar',
    'w.tempo': '(çalışma) hızı, tempo',
    'w.automatisch': 'otomatik',
    'w.besluit': 'karar',
    's.aiplan.1': 'Bu kararı kim verdi?',
    's.aiplan.2': 'Bir insanla konuşmak istiyorum.',
    's.aiplan.3': 'Çalışma planımda neden daha az saatim var?',
    'c.aiplan.q': 'Çalışma planını uygulama yaptı.',
    'c.aiplan.a': 'Bunu bir insanla konuşabilir miyim?',
    'c.aihelp': 'Yapay zekâ yardım eder, bir insan kontrol eder',
    'c.aihelp.b': 'ChatGPT gibi yapay zekâ uygulamaları ve sohbet robotları çeviri yapabilir, bir mektubu açıklayabilir ya da mesaj yazmana yardım edebilir. Bu faydalı. Ama yapay zekâ bazen hata yapar ve yine de çok emin konuşur. Konu sözleşmen, maaşın, ilaçlar ya da iş güvenliği mi? O zaman cevabı mutlaka bir insanla kontrol et. Örneğin amirinle, insan kaynaklarıyla (HR) ya da Juridisch Loket’le.',
    'c.aihelp.p': 'Bu doğru mu? Benimle birlikte bir bakabilir misiniz?',
    'c.aihelp.s': 'Bir sohbet robotuna sözleşmeni soruyorsun. Tatil parası (vakantiegeld) almadığını söylüyor. Ne yaparsın?',
    'c.aihelp.o1': 'HR’dan veya Juridisch Loket’ten kontrol etmelerini istersin.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.aihelp.o2': 'İnanırsın: sohbet robotu çok emin konuşuyor.',
    'c.aihelp.o3': 'Hiçbir şey söylemez, unutursun.',
    'c.aihelp.w': 'Sohbet robotu kurallar ve sözleşmeler konusunda yanılabilir. Hollanda’da neredeyse her çalışan tatil parası alır. Kuralları bilen bir insan bunu kontrol edebilir.',
    'c.aiprivate': 'Yazmadan önce düşün',
    'c.aiprivate.b': 'Bir sohbet robotuna yazdıkların, onu yapan şirket tarafından kaydedilip kullanılabilir. Bu yüzden BSN’ini, şifreni ya da banka bilgilerini asla yazma. Müşterilerin, hastaların ya da iş arkadaşlarının isimlerini veya fotoğraflarını, iş belgelerini de girme. Birçok işverenin yapay zekâ hakkında kuralları var. Önce işin için kullanıp kullanamayacağını sor. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.',
    'c.aiprivate.p': 'Bunun için yapay zekâ kullanabilir miyim?',
    'c.aiprivate.s': 'Bir sohbet robotunun bir müşteri hakkında rapor yazmasını istiyorsun. Raporda müşterinin adı ve adresi var. Ne yaparsın?',
    'c.aiprivate.o1': 'Önce sorar, adı ve adresi çıkarırsın.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.aiprivate.o2': 'Her şeyi sohbet robotuna yazarsın: daha hızlı.',
    'c.aiprivate.o3': 'Raporu kontrol etsin diye bir arkadaşına gönderirsin.',
    'c.aiprivate.w': 'İsimler ve adresler kişisel verilerdir. Öylece başka bir şirkete gidemezler. İşverenin hangi uygulamalara izin verildiğini bilir.',
    'c.aifake': 'Sahte sesler ve videolar',
    'c.aifake.b': 'Yapay zekâyla dolandırıcılar bir sesi taklit edebilir, sahte fotoğraf ve videolar yapabilir. Patronun, bankan ya da ailenden biri gibi gelen bir arama veya mesaj sahte olabilir. Acele, para ve yeni bir numara bir aradaysa dikkatli ol. Telefonu kapat ve bildiğin numarayı kendin geri ara. Gerçek bir banka, işveren ya da polis kodlarını asla istemez.',
    'c.aifake.p': 'Telefonu kapatıp kendim geri ararım.',
    'c.aifake.s': 'Telefonun çalıyor. Tıpkı patronunun sesi gibi bir ses “Bu faturayı hemen öde, acil.” diyor. Ne yaparsın?',
    'c.aifake.o1': 'Telefonu kapatır, patronunu kendin ararsın.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.aifake.o2': 'Hemen ödersin: sonuçta patronun.',
    'c.aifake.o3': 'Patronun ödeyebilsin diye banka kodunu verirsin.',
    'c.aifake.w': 'Bir ses yapay zekâyla taklit edilebilir. Acele ve para bir aradaysa bu bir uyarı işaretidir. Bildiğin bir numarayı geri aramak hızlı ve güvenli bir kontroldür.',
    'c.aiplan': 'Buna kim karar verdi?',
    'c.aiplan.b': 'Gittikçe daha fazla şirket kararları bir uygulamaya ya da bilgisayara bırakıyor. Örneğin çalışma planını o yapıyor ya da hızını el tarayıcısıyla ölçüyor. Hakkında hangi bilgilerin toplandığını sorabilirsin. Hakkında büyük bir karar mı var, örneğin daha az saat, bir uyarı ya da işten çıkarılma? Kimin karar verdiğini sor. Bu kararı tek başına bir bilgisayar mı verdi? O zaman bir insanın tekrar kontrol etmesini ve açıklamasını isteyebilirsin. Kendi saatlerini not et. Genel bilgi. Kendi durumun için işverenine, sendikaya veya Juridisch Loket’e sor.',
    'c.aiplan.p': 'Bir insan buna bir bakabilir mi?',
    'c.aiplan.s': 'Planlama uygulaması gelecek ay sana çok daha az saat veriyor. Kimse nedenini söylemiyor. Ne yaparsın?',
    'c.aiplan.o1': 'Bir insanın bunu açıklamasını istersin.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.aiplan.o2': 'Kabul edersin: uygulama hep haklıdır.',
    'c.aiplan.o3': 'Uygulamadaki sohbet robotuna nedenini sorarsın.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.aiplan.w': 'Uygulamalar hata yapar ve senin hakkında her şeyi bilmez. Açıklama isteyebilirsin, bir insan da buna tekrar bakabilir.',
    // In de kas (u.kas, 30 okt 2026): nagelezen (2e lezing).
    'u.kas': "Serada", // nagelezen (2e lezing)
    'l.harvest': "Hasat ve ayıklama", // nagelezen (2e lezing)
    'w.kas': "sera", // nagelezen (2e lezing)
    'w.gewas': "ürün (yetişen bitkiler)", // nagelezen (2e lezing)
    'w.rij': "sıra (bitki sırası)", // nagelezen (2e lezing)
    'w.oogsten': "hasat etmek", // nagelezen (2e lezing)
    'w.sorteren': "ayıklamak, sınıflandırmak", // nagelezen (2e lezing)
    'w.krat': "kasa", // nagelezen (2e lezing)
    's.harvest.1': "Serada çalışıyorum.", // nagelezen (2e lezing)
    's.harvest.2': "Hangi sıradan başlıyorum?", // nagelezen (2e lezing)
    's.harvest.3': "Kasa dolu.", // nagelezen (2e lezing)
    'c.harvest.q': "Kaç sıra yaptın?", // nagelezen (2e lezing)
    'c.harvest.a': "Dört. İki tane daha kaldı.", // nagelezen (2e lezing)
    'l.greensafe': "Serada güvenlik", // nagelezen (2e lezing)
    'w.spuitmiddelen': "tarım ilaçları (bitkiler için kimyasallar)", // nagelezen (2e lezing)
    'w.bespoten': "ilaçlanmış (tarım ilacıyla)", // nagelezen (2e lezing)
    'w.plukkar': "toplama arabası", // nagelezen (2e lezing)
    'w.bukken': "eğilmek", // nagelezen (2e lezing)
    'w.drinken': "içmek", // nagelezen (2e lezing)
    'w.hitte': "sıcak (hava çok sıcak olduğunda)", // nagelezen (2e lezing)
    's.greensafe.1': "Bu sera ilaçlandı mı?", // nagelezen (2e lezing)
    's.greensafe.2': "Biraz su içmeye gidiyorum.", // nagelezen (2e lezing)
    's.greensafe.3': "Toplama arabası nerede?", // nagelezen (2e lezing)
    'c.greensafe.q': "Üç numaralı serada çalışabilir miyim?", // nagelezen (2e lezing)
    'c.greensafe.a': "Hayır, henüz değil. Az önce ilaçlandı.", // nagelezen (2e lezing)
    'c.harvest': "Tempo ve parça başı ücret", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.harvest.b': "Serada çoğu zaman sabit bir tempoda (tempo) çalışırsın. Bazı işverenler kasa, sıra veya kilo başına öder: buna parça başı ücret (stukloon) denir. Parça başı ücrette bile çalıştığın her saat için en az asgari ücreti kazanmalısın. Tutarı rijksoverheid.nl sitesinden kontrol et. Her gün saatlerini ve kasalarını not et ve maaş bordronla karşılaştır. Hızlı çalışmak iyidir, ama güvenli çalışmak önce gelir. Genel bilgi. Kendi durumun için sendikaya, Juridisch Loket’e veya FairWork’e sor.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.harvest.p': "Bugün kaç kasa yaptım?", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.harvest.s': "Sana kasa başına ödeme yapılıyor. Bu hafta saat başına asgari ücretten daha az kazanıyorsun. Ne yaparsın?", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.harvest.o1': "Kendi saat ve kasa listeni gösterirsin.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.harvest.o2': "Hiçbir şey söylemez, daha hızlı çalışırsın.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.harvest.o3': "Kabul edersin: parça başı ücrette bu normaldir.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.harvest.w': "Parça başı ücrette de çalıştığın her saat için en az asgari ücreti almalısın. Kendi saat ve kasa listen, ne yaptığını göstermene yardım eder. Düzeltilmezse yardım iste.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe': "Sıcak ve tarım ilaçları", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.b': "Serada hava çok sıcak olabilir, ilkbaharda da. Sık sık su iç, susamadan önce de, ve molalarını serin bir yerde ver. Başın mı dönüyor, miden mi bulanıyor ya da başın mı ağrıyor? Dur ve birine söyle. Bitkiler bazen kimyasallarla ilaçlanır (spuitmiddelen). Az önce ilaçlanmış bir seranın kapısında çoğu zaman bir uyarı levhası olur. Amirin tekrar güvenli olduğunu söyleyene kadar içeri girme. Genel bilgi. Kendi durumun için işverenine, sendikaya veya Juridisch Loket’e sor.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.p': "Bu serada artık çalışabilir miyim?", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.s': "Bu sabah bir sera ilaçlandı. Kapıda bir uyarı levhası var. Bir iş arkadaşın diyor ki: “Hadi, sadece bir dakika.” Ne yaparsın?", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.o1': "Girmez, ne zaman güvenli olacağını sorarsın.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.o2': "Hızlıca girer ve nefesini tutarsın.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.o3': "Girersin, sonra ellerini iyice yıkarsın.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.w': "Tarım ilaçları hiçbir koku almasan da cildine, gözlerine ve akciğerlerine zarar verebilir. İlaçlamadan sonra tekrar içeri girmeden önce bir bekleme süresi vardır. Bu sürenin ne zaman bittiğini amirin bilir.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    // nagelezen (2e lezing): Getallen en gegevens (u.data), l.permit, l.kids, l.body, l.jobends and their tips (30 October 2026).
    'u.data': "Sayılar ve bilgiler",
    'l.details': "Kişisel bilgilerin",
    'w.voornaam': "ad",
    'w.achternaam': "soyadı",
    'w.spellen': "harf harf söylemek (harfleri tek tek söylemek)",
    'w.telefoonnummer': "telefon numarası",
    'w.geboortedatum': "doğum tarihi",
    'w.formulier': "form (doldurulacak bir kâğıt veya sayfa)",
    's.details.1': "Bunu harf harf söyleyebilir misiniz?",
    's.details.2': "Yeni telefon numaramı bildiriyorum.",
    's.details.3': "Bu form Vergi Dairesi (Belastingdienst) için.",
    'c.details.q': "Soyadın ne?",
    'c.details.a': "Haddad. Harf harf söyleyeyim mi?",
    'l.dates': "Günler ve tarihler",
    'w.maandag': "pazartesi",
    'w.week': "hafta",
    'w.maand': "ay",
    'w.volgendeweek': "gelecek hafta",
    'w.vorigeweek': "geçen hafta",
    'w.totenmet': "… dahil (son gün de sayılır)",
    's.dates.1': "Pazartesiden perşembeye kadar (perşembe dahil) çalışabilirim.",
    's.dates.2': "Gelecek hafta dört gün çalışıyorum.",
    's.dates.3': "Geçen hafta kırk saat çalıştım.",
    'c.dates.q': "Bugün tarih ne?",
    'c.dates.a': "Bugün 3 Haziran Pazartesi.",
    'l.permit': "Belgeler, uyum ve işin", // nagelezen AI 22 nov
    'w.papieren': "belgeler (evraklar)", // nagelezen AI 22 nov
    'w.werkvergunning': "çalışma izni", // nagelezen AI 22 nov
    'w.werknemer': "işçi, çalışan (bir işveren için çalışırsın)", // nagelezen AI 22 nov
    'w.zzper': "serbest çalışan (kendi hesabına çalışırsın)", // nagelezen AI 22 nov
    'w.inburgering': "uyum süreci (yeni gelenler için kurs ve sınavlar)", // nagelezen AI 22 nov
    'w.taalles': "dil dersi", // nagelezen AI 22 nov
    's.permit.1': "Belgelerimle burada çalışabilir miyim?", // nagelezen AI 22 nov
    's.permit.2': "Ben işçi miyim, serbest çalışan mı?", // nagelezen AI 22 nov
    's.permit.3': "Çağrı üzerine çalışıyorum.", // nagelezen AI 22 nov
    'c.permit.q': "Salı günü çalışabilir misin?", // nagelezen AI 22 nov
    'c.permit.a': "Hayır, o gün dil dersim var. Çarşamba olur.", // nagelezen AI 22 nov
    'l.kids': "Çocuklar ve iş", // nagelezen AI 22 nov
    'w.zwanger': "hamile", // nagelezen AI 22 nov
    'w.kinderopvang': "çocuk bakımı, kreş", // nagelezen AI 22 nov
    'w.ophalen': "almak (gidip birini almak)", // nagelezen AI 22 nov
    'w.ziekkind': "hasta bir çocuk", // nagelezen AI 22 nov
    'w.ouderschapsverlof': "ebeveyn izni", // nagelezen AI 22 nov
    'w.zorgverlof': "bakım izni (hasta bir aile üyesine bakmak için izin)", // nagelezen AI 22 nov
    's.kids.1': "Çocuğum hasta. Onu almaya gitmem gerekiyor.", // nagelezen AI 22 nov
    's.kids.2': "Acil durum izni alabilir miyim?", // nagelezen AI 22 nov
    's.kids.3': "İşverenim maaşımı ödemeye devam ediyor mu?", // nagelezen AI 22 nov
    'c.kids.q': "Neden şimdi gitmen gerekiyor?", // nagelezen AI 22 nov
    'c.kids.a': "Kreş aradı. Oğlumun ateşi var.", // nagelezen AI 22 nov
    'l.body': "Vücut ve ağrı", // nagelezen AI 22 nov
    'w.hoofd': "baş, kafa", // nagelezen AI 22 nov
    'w.rug': "sırt", // nagelezen AI 22 nov
    'w.arm': "kol", // nagelezen AI 22 nov
    'w.hand': "el", // nagelezen AI 22 nov
    'w.buik': "karın", // nagelezen AI 22 nov
    'w.oog': "göz", // nagelezen AI 22 nov
    's.body.1': "Elim ağrıyor.", // nagelezen AI 22 nov
    's.body.2': "Kendimi iyi hissetmiyorum.", // nagelezen AI 22 nov
    's.body.3': "Kolumun üstüne düştüm.", // nagelezen AI 22 nov
    'c.body.q': "Neren ağrıyor?", // nagelezen AI 22 nov
    'c.body.a': "Sırtım. Ağır bir koli kaldırdım.", // nagelezen AI 22 nov
    'l.jobends': "İşin bittiğinde", // nagelezen AI 22 nov
    'w.eindafrekening': "son hesap (iş bittiğinde aldığın son ödeme)", // nagelezen AI 22 nov
    'w.opzeggen': "feshetmek (bir sözleşmeyi), iptal etmek", // nagelezen AI 22 nov
    'w.uitschrijven': "kaydını sildirmek (adını bir listeden çıkarmak)", // nagelezen AI 22 nov
    'w.sleutel': "anahtar", // nagelezen AI 22 nov
    'w.verhuizen': "taşınmak (başka bir eve)", // nagelezen AI 22 nov
    'w.busje': "minibüs", // nagelezen AI 22 nov
    's.jobends.1': "Tatil param ve izin günlerimin parası bana ödenecek mi?", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    's.jobends.2': "Juridisch Loket’ten tavsiye alıyorum.", // nagelezen AI 22 nov
    's.jobends.3': "Yeni sağlık sigortamı kendim ayarlıyorum.", // nagelezen AI 22 nov
    'c.jobends.q': "İşin cuma günü bitiyor. O zaman evden de çıkman gerekiyor.", // nagelezen AI 22 nov
    'c.jobends.a': "Kira sözleşmemin ihbar süresi ne kadar?", // nagelezen AI 22 nov
    'c.details': "Bilgilerini doğru ver", // nagelezen AI 22 nov
    'c.details.b': "Bir işe başlarken bilgilerini verirsin. Yani adını, adresini, telefon numaranı, doğum tarihini ve BSN’ni. Adını yavaşça, harf harf söyle. Sonra adını sözleşmende ve maaş bordronda kontrol et. Adında veya BSN’nde bir hata, maaşında veya vergide sorun çıkarabilir. Yeni adres ya da telefon numarası mı? İşverenine söyle.", // nagelezen AI 22 nov
    'c.details.p': "Harf harf söyleyeyim: A, L, I.", // nagelezen AI 22 nov
    'c.details.s': "Ajans telefonda soyadını yazıyor. Yanlış yazdıklarını duyuyorsun. Ne yaparsın?", // nagelezen AI 22 nov
    'c.details.o1': "Adını yavaşça harf harf söyler ve geri okumalarını istersin.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.details.o2': "Hiçbir şey söylemezsin: adındaki küçük bir hata önemli değil.", // nagelezen AI 22 nov
    'c.details.o3': "Telefonu kapatır ve hatayı sonra bulmalarını umarsın.", // nagelezen AI 22 nov
    'c.details.w': "Adın sözleşmende, maaş bordronda ve kimliğinde aynı olmalı. O zaman maaşın ve vergin doğru olur. Harf harf söylemek ve geri okutmak hızlı bir kontroldür.", // nagelezen AI 22 nov
    'c.dates': "Tarihler: önce gün gelir", // nagelezen AI 22 nov
    'c.dates.b': "Hollandacada gün aydan önce gelir: 3-6, 3 Haziran demektir, 6 Mart değil. “Tot en met”, son günün de sayıldığı anlamına gelir. Günler ve aylar küçük harfle yazılır: maandag, juni. Bir tarihten emin değil misin? Sor ve tekrar et.", // nagelezen AI 22 nov
    'c.dates.p': "3 Haziran’ı mı kastediyorsun?", // nagelezen AI 22 nov
    'c.dates.s': "Çalışma programında şöyle yazıyor: “Vrij: 3-6 tot en met 5-6”. Ne zaman izinlisin?", // nagelezen AI 22 nov
    'c.dates.o1': "3, 4 ve 5 Haziran’da.", // nagelezen AI 22 nov
    'c.dates.o2': "Sadece 3 ve 4 Haziran’da.", // nagelezen AI 22 nov
    'c.dates.o3': "6 Mart’tan 6 Mayıs’a kadar.", // nagelezen AI 22 nov
    'c.dates.w': "Önce gün, sonra ay gelir: 3-6, 3 Haziran demektir. “Tot en met”, 5 Haziran’ın da sayıldığı anlamına gelir, yani üç gün izinlisin.", // nagelezen AI 22 nov
    'c.permit': "İş ve uyum", // nagelezen AI 22 nov
    'c.permit.b': "Uyum sürecini (inburgering) yapman mı gerekiyor? İşverenine söyle ve belediyeye (gemeente) çalıştığını bildir. Dil derslerinin çalışma programına uyup uymayacağını erkenden sor. Burada çalışıp çalışamayacağından emin değil misin? Başlamadan önce kontrol et, örneğin IND’de, UWV’de veya VluchtelingenWerk’te. Bu iş için serbest çalışan (zzp’er) olarak kayıt olmanı mı istiyorlar? Önce tavsiye al. Genel bilgi. Kendi durumun için işverenine, sendikaya veya Juridisch Loket’e sor.", // nagelezen AI 22 nov
    'c.permit.p': "Salı günleri dil dersim var. Çalışma programım bunu dikkate alabilir mi?", // nagelezen AI 22 nov
    'c.permit.s': "Dil dersin salı sabahı. Yeni programına göre o saatte çalışıyorsun. Ne yaparsın?", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.permit.o1': "Amirinden programı değiştirmesini istersin.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.permit.o2': "Derse gitmezsin: iş önce gelir.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.permit.o3': "Salı günleri evde kalır ve hiçbir şey söylemezsin.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.permit.w': "Uyum süreci de bir yükümlülüktür. Birçok işveren erkenden öğrenirse yardım eder. Belediye (gemeente) de planını işine göre ayarlamana yardım edebilir.", // nagelezen AI 22 nov
    'c.kids': "Çocuğun hasta", // nagelezen AI 22 nov
    'c.kids.b': "Çocuğun aniden mi hastalandı? Hemen işverenine söyle. İlk saatler veya günler için acil durum izni (calamiteitenverlof) alabilirsin ve işverenin maaşını ödemeye devam eder. Çocuğunun daha uzun süre bakıma mı ihtiyacı var? O zaman bakım izni (zorgverlof) isteyebilirsin. Hamile misin? İşverenin seni bu yüzden işten çıkaramaz. Doğum izni ve ebeveyn izni (ouderschapsverlof) hakkında zamanında bilgi al. Genel bilgi. Kendi durumun için işverenine, sendikaya veya Juridisch Loket’e sor.", // nagelezen AI 22 nov
    'c.kids.p': "Çocuğum hasta. Bugün erken çıkabilir miyim?", // nagelezen AI 22 nov
    'c.kids.s': "Kreş (kinderopvang) seni işte arıyor. Çocuğunun ateşi var ve eve gitmesi gerekiyor. Ne yaparsın?", // nagelezen AI 22 nov
    'c.kids.o1': "Amirine söyler, acil durum izni istersin.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.kids.o2': "Tek kelime etmeden çıkar, yarın açıklarsın.", // nagelezen AI 22 nov
    'c.kids.o3': "İşte kalır, çocuğunu vardiyan bitene kadar bekletirsin.", // nagelezen AI 22 nov
    'c.kids.w': "Hasta bir çocuk evde acil bir durumdur. Önce amirine söylersen işi planlayabilir. Acil durum izni böyle anlar içindir.", // nagelezen AI 22 nov
    'c.body': "Ne olduğunu ve neresinin ağrıdığını söyle", // nagelezen AI 22 nov
    'c.body.b': "Doktorda ne olduğunu ve neresinin ağrıdığını söyle. Örneğin: “Ik ben gevallen. Mijn arm doet pijn.” Ağrının ne zamandır olduğunu da söyle. Neyin olduğunu tahmin etmek zorunda değilsin: bunu doktor kontrol eder. İşte mi oldu? Aynı gün amirine de söyle.", // nagelezen AI 22 nov
    'c.body.p': "Düştüm. Kolum ağrıyor.", // nagelezen AI 22 nov
    'c.body.s': "İşte ağır bir koli kaldırdın. Şimdi sırtın çok ağrıyor. Aile hekimindesin (huisarts). Ne söylersin?", // nagelezen AI 22 nov
    'c.body.o1': "Neresinin ağrıdığını ve ne olduğunu: ağır bir koli kaldırdığını.", // nagelezen AI 22 nov
    'c.body.o2': "Sadece kendini kötü hissettiğini, başka bir şey değil.", // nagelezen AI 22 nov
    'c.body.o3': "İnternette bulduğun bir hastalığın adını.", // nagelezen AI 22 nov
    'c.body.w': "Neresinin ağrıdığını ve ne olduğunu söylersen doktor seni daha hızlı anlar. Ne olduğunu doktor kontrol eder. İşte mi oldu? Amirine de söyle.", // nagelezen AI 22 nov
    'c.jobends': "İşin bitiyor: başka ne bitiyor?", // nagelezen AI 22 nov
    'c.jobends.b': "İşin bittiğinde son hesabını (eindafrekening) kontrol et. Kullanmadığın izin günleri ve tatil paran genelde bununla birlikte ödenir. Ajans üzerinden olan konut, sağlık sigortası veya minibüs aynı anda bitebilir. Kendi sağlık sigortanı zamanında ayarla. Kira sözleşmenin kendi kuralları var: evden çıkmadan önce tavsiye al. Taşınıyor musun ya da Hollanda’dan mı ayrılıyorsun? Belediyeye (gemeente) bildir. Genel bilgi. Kendi durumun için işverenine, sendikaya veya Juridisch Loket’e sor.", // nagelezen AI 22 nov
    'c.jobends.p': "Son hesabımı ne zaman alırım?", // nagelezen AI 22 nov
    'c.jobends.s': "İşin cuma günü bitiyor. Sağlık sigortan ajans üzerinden. Ne yaparsın?", // nagelezen AI 22 nov
    'c.jobends.o1': "Ne zaman bittiğini sorar, zamanında kendi sigortanı yaptırırsın.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.jobends.o2': "Hiçbir şey: sigorta kendiliğinden devam eder.", // nagelezen AI 22 nov
    'c.jobends.o3': "Hastalanana kadar bekler, o zaman ayarlarsın.", // nagelezen AI 22 nov
    'c.jobends.w': "Ajans üzerinden olan sigorta çoğu zaman işin bittiğinde biter. Hollanda’da yaşıyor veya çalışıyorsan genelde sağlık sigortası yaptırman zorunludur. Zamanında ayarlarsan sigortasız kalmazsın.", // nagelezen AI 22 nov
    // Entree in the Taal track (30 October 2026): nieuw, nalezen.
    'u.finish': "İşini bitirmek", // nieuw, nalezen
    'l.workorder': "İş emri", // nieuw, nalezen
    'w.werkbon': "iş emri (görevinin yazılı olduğu kâğıt ya da uygulama)", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'w.lezen': "okumak", // nieuw, nalezen
    'w.aantal': "sayı, adet (kaç tane)", // nieuw, nalezen
    'w.materiaal': "malzeme (iş için gereken şeyler)", // nieuw, nalezen
    'w.klaarleggen': "hazırlamak (gereken şeyleri hazır koymak)", // nieuw, nalezen
    'w.handtekening': "imza", // nieuw, nalezen
    's.workorder.1': "Önce iş emrini okuyorum.", // nieuw, nalezen
    's.workorder.2': "Bu sayı doğru mu?", // nieuw, nalezen
    's.workorder.3': "Malzemeyi hazırlıyorum.", // nieuw, nalezen
    'c.workorder.q': "Ne yapman gerektiğini biliyor musun?", // nieuw, nalezen
    'c.workorder.a': "Neredeyse. İş emrindeki bu kelime ne demek?", // nieuw, nalezen
    'l.handover': "Bitti mi, daha bitmedi mi?", // nieuw, nalezen
    'w.opruimen': "toplamak, ortalığı düzeltmek", // nieuw, nalezen
    'w.nakijken': "kontrol etmek (işe bir kez daha bakmak)", // nieuw, nalezen
    'w.afmelden': "işi bitirdiğini bildirmek (işin bittiğini söyleyip çıkmak)", // nieuw, nalezen
    'w.kapot': "bozuk, kırık", // nieuw, nalezen
    'w.opslot': "kilitli", // nieuw, nalezen
    'w.bijzonderheid': "kapı", // nieuw, nalezen
    's.handover.1': "Yerimi topluyorum.", // nieuw, nalezen
    's.handover.2': "İşimi kontrol edebilir misiniz?", // nieuw, nalezen
    's.handover.3': "Amirime işi bitirdiğimi bildiriyorum.", // nieuw, nalezen
    'c.handover.q': "Her şey bitti mi?", // nieuw, nalezen
    'c.handover.a': "Neredeyse. Dört numaralı oda kilitliydi.", // nieuw, nalezen
    'u.tech': "Atölyede", // nieuw, nalezen
    'l.workshop': "Atölye aletleri", // nieuw, nalezen
    'w.gereedschap': "aletler", // nieuw, nalezen
    'w.zagen': "testereyle kesmek", // nieuw, nalezen
    'w.slijpen': "taşlamak (metali makineyle düzeltmek ya da kesmek)", // nieuw, nalezen
    'w.vonk': "kıvılcım", // nieuw, nalezen
    'w.gehoorbescherming': "kulak koruyucu", // nieuw, nalezen
    'w.lawaai': "gürültü (çok yüksek ses)", // nieuw, nalezen
    's.workshop.1': "Aletler nerede?", // nieuw, nalezen
    's.workshop.2': "Taşlama yaparken kulak koruyucu takıyorum.", // nieuw, nalezen
    's.workshop.3': "Kıvılcımlara dikkat et!", // nieuw, nalezen
    'c.workshop.q': "Neden gözlük takıyorsun?", // nieuw, nalezen
    'c.workshop.a': "Testereyle keserken gözüme parçacıklar kaçabilir.", // nieuw, nalezen
    'l.power': "Önce elektriği kes", // nieuw, nalezen
    'w.stroom': "elektrik, akım", // nieuw, nalezen
    'w.kabel': "kablo", // nieuw, nalezen
    'w.stekker': "fiş", // nieuw, nalezen
    'w.onderspanning': "gerilim altında (elektrik var)", // nieuw, nalezen
    'w.spanningsloos': "gerilimsiz, güvenli (elektrik yok)", // nieuw, nalezen
    'w.elektricien': "elektrikçi", // nieuw, nalezen
    's.power.1': "Burada hâlâ elektrik var mı?", // nieuw, nalezen
    's.power.2': "Bu kablo bozuk.", // nieuw, nalezen
    's.power.3': "Elektrik kesilene kadar bekliyorum.", // nieuw, nalezen
    'c.power.q': "Şu lambayı değiştirebilir misin?", // nieuw, nalezen
    'c.power.a': "Elektrik kesik mi? Değilse elektrikçiyi beklerim.", // nieuw, nalezen
    'u.garage': "Oto serviste", // nieuw, nalezen
    'l.garage': "Lastik, yağ ve lift", // nieuw, nalezen
    'w.band': "lastik", // nieuw, nalezen
    'w.olie': "yağ", // nieuw, nalezen
    'w.accu': "akü", // nieuw, nalezen
    'w.monteur': "tamirci, oto teknisyeni", // nieuw, nalezen
    'w.hefbrug': "araç lifti (arabayı yukarı kaldırır)", // nieuw, nalezen
    'w.lek': "patlak, sızdıran (hava ya da su kaçıyor)", // nieuw, nalezen
    's.garage.1': "Lastik patlak.", // nieuw, nalezen
    's.garage.2': "Yeni yağ nerede duruyor?", // nieuw, nalezen
    's.garage.3': "Araba liftte.", // nieuw, nalezen
    'c.garage.q': "Bu arabanın lastiklerini değiştirebilir misin?", // nieuw, nalezen
    'c.garage.a': "Evet. Kış lastikleri nerede?", // nieuw, nalezen
    'l.carjob': "Karar müşterinin", // nieuw, nalezen
    'w.proefrit': "test sürüşü", // nieuw, nalezen
    'w.rijbewijs': "ehliyet", // nieuw, nalezen
    'w.akkoord': "kabul, tamam (bir şeye evet diyorsun)", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'w.kosten': "masraflar (ödenmesi gereken para)", // nieuw, nalezen
    'w.repareren': "tamir etmek", // nieuw, nalezen
    'w.onderdeel': "parça (araba ya da makine parçası)", // nieuw, nalezen
    's.carjob.1': "Müşteri masrafları onaylıyor mu?", // nieuw, nalezen
    's.carjob.2': "Bu parça bozuk.", // nieuw, nalezen
    's.carjob.3': "Test sürüşü yapabilir miyim?", // nieuw, nalezen
    'c.carjob.q': "Frenler de kötü. Onları hemen yapar mısın?", // nieuw, nalezen
    'c.carjob.a': "Önce şefe sorarım. Müşterinin onay vermesi lazım.", // nieuw, nalezen
    'u.stage': "Staj yapmak", // nieuw, nalezen
    'l.placement': "Stajın", // nieuw, nalezen
    'w.stage': "staj (bir şirkette öğreniyorsun)", // nieuw, nalezen
    'w.praktijkopleider': "işyeri eğitmeni (şirkette sana yol gösterir)", // nieuw, nalezen
    'w.stagebegeleider': "okulun staj danışmanı (okul adına sana yol gösterir)", // nieuw, nalezen
    'w.pok': "staj sözleşmesi (sen, okul ve şirket imzalar)", // nieuw, nalezen
    'w.school': "okul", // nieuw, nalezen
    'w.leerbedrijf': "eğitim veren işyeri (öğrencilerin öğrenebildiği şirket)", // nieuw, nalezen
    's.placement.1': "Stajımı bir depoda yapıyorum.", // nieuw, nalezen
    's.placement.2': "İşyeri eğitmenim kim?", // nieuw, nalezen
    's.placement.3': "Staj sözleşmesini daha imzalamadım.", // nieuw, nalezen
    'c.placement.q': "Stajına ne zaman başlıyorsun?", // nieuw, nalezen
    'c.placement.a': "Pazartesi. Önce staj sözleşmesini imzalıyoruz.", // nieuw, nalezen
    'l.review': "Stajın hakkında geri bildirim", // nieuw, nalezen
    'w.beoordeling': "değerlendirme (ne kadar iyi yaptığın)", // nieuw, nalezen
    'w.leerdoel': "öğrenme hedefi (öğrenmek istediğin şey)", // nieuw, nalezen
    'w.voorbeeld': "örnek", // nieuw, nalezen
    'w.portfolio': "portfolyo (işlerini ve kanıtlarını koyduğun dosya)", // nieuw, nalezen
    'w.cijfer': "not", // nieuw, nalezen
    'w.verslag': "rapor (işin hakkında bir yazı)", // nieuw, nalezen
    's.review.1': "Neyi daha iyi yapabilirim?", // nieuw, nalezen
    's.review.2': "Bir örnek verebilir misiniz?", // nieuw, nalezen
    's.review.3': "Değerlendirmem gelecek hafta.", // nieuw, nalezen
    'c.review.q': "Daha hızlı çalışman lazım.", // nieuw, nalezen
    'c.review.a': "Tamam. Nasıl daha hızlı olacağını gösterebilir misiniz?", // nieuw, nalezen
    'u.society': "Hollanda’da hayata katılmak", // nieuw, nalezen
    'l.council': "Belediye ve oy vermek", // nieuw, nalezen
    'w.stemmen': "oy vermek", // nieuw, nalezen
    'w.verkiezing': "seçim", // nieuw, nalezen
    'w.gemeenteraad': "belediye meclisi (şehrin hakkında karar verir)", // nieuw, nalezen
    'w.parlement': "parlamento (yasaları yapar)", // nieuw, nalezen
    'w.stempas': "oy kartı (oy vermek için gereken kart)", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'w.burgemeester': "belediye başkanı", // nieuw, nalezen
    's.council.1': "Oy verebilir miyim?", // nieuw, nalezen
    's.council.2': "Oy kartım postayla geldi.", // nieuw, nalezen
    's.council.3': "Belediye meclisi mahallem hakkında karar veriyor.", // nieuw, nalezen
    'c.council.q': "Çarşamba günü oy vermeye gidiyor musun?", // nieuw, nalezen
    'c.council.a': "Evet. Oy kartım ve kimliğim yanımda.", // nieuw, nalezen
    'l.police': "Polis ve hakların", // nieuw, nalezen
    'w.agent': "polis memuru", // nieuw, nalezen
    'w.boete': "para cezası (ceza olarak ödemen gereken para)", // nieuw, nalezen
    'w.bezwaar': "itiraz (katılmadığını yazılı olarak söylüyorsun)", // nieuw, nalezen
    'w.rechter': "hâkim", // nieuw, nalezen
    'w.advocaat': "avukat", // nieuw, nalezen
    'w.wet': "yasa, kanun", // nieuw, nalezen
    's.police.1': "Para cezası aldım.", // nieuw, nalezen
    's.police.2': "İtiraz etmek istiyorum.", // nieuw, nalezen
    's.police.3': "Bir avukatla konuşmak istiyorum.", // nieuw, nalezen
    'c.police.q': "Kimlik belgenizi görebilir miyim?", // nieuw, nalezen
    'c.police.a': "Evet, buyurun. Ne oldu?", // nieuw, nalezen
    'u.online': "İş yerinde internet", // nieuw, nalezen // nagelezen AI 31 okt
    'l.login': "Giriş yapmak", // nieuw, nalezen
    'w.uitloggen': "çıkış yapmak (hesaptan)", // nieuw, nalezen
    'w.account': "hesap", // nieuw, nalezen
    'w.scherm': "ekran", // nieuw, nalezen
    'w.vergrendelen': "kilitlemek (ekranı ya da telefonu)", // nieuw, nalezen
    'w.gebruikersnaam': "kullanıcı adı", // nieuw, nalezen
    'w.inlogcode': "giriş kodu (SMS ya da uygulamayla gelen kod)", // nieuw, nalezen
    's.login.1': "Şifremi unuttum.", // nieuw, nalezen
    's.login.2': "Her zaman çıkış yapıyorum.", // nieuw, nalezen
    's.login.3': "DigiD’mi kimseye vermem.", // nieuw, nalezen
    'c.login.q': "Giriş yapabiliyor musun?", // nieuw, nalezen
    'c.login.a': "Hayır, şifrem çalışmıyor.", // nieuw, nalezen
    'l.phish': "Sahte e-postalar", // nieuw, nalezen
    'w.afzender': "gönderen", // nieuw, nalezen
    'w.klikken': "tıklamak", // nieuw, nalezen
    'w.bijlage': "ek dosya", // nieuw, nalezen
    'w.verdacht': "şüpheli", // nieuw, nalezen
    'w.ictafdeling': "bilgi işlem bölümü", // nieuw, nalezen
    'w.wijzigen': "değiştirmek", // nieuw, nalezen
    's.phish.1': "Bu e-posta şüpheli.", // nieuw, nalezen
    's.phish.2': "Ek dosyayı açmıyorum.", // nieuw, nalezen
    's.phish.3': "Şifremi hemen değiştiriyorum.", // nieuw, nalezen
    'c.phish.q': "Bağlantıya tıkladın mı?", // nieuw, nalezen
    'c.phish.a': "Evet. Bilgi işlemi arıyorum.", // nieuw, nalezen
    'l.mychoice': "Neyde iyiyim?", // nieuw, nalezen
    'w.goedin': "bir şeyde iyi olmak", // nieuw, nalezen
    'w.kiezen': "seçmek", // nieuw, nalezen
    'w.beroep': "meslek, iş türü", // nieuw, nalezen
    'w.bijbaan': "yan iş (okulun yanında küçük bir iş)", // nieuw, nalezen
    'w.nauwkeurig': "dikkatli ve titiz", // nieuw, nalezen
    'w.meeloopdag': "gözlem günü (birinin yanında bir gün işe gittiğin gün)", // nieuw, nalezen
    's.mychoice.1': "Ellerimle iyi çalışabilirim.", // nieuw, nalezen
    's.mychoice.2': "İnsanlarla çalışmayı severim.", // nieuw, nalezen
    's.mychoice.3': "İşi görmek için bir gün yanınızda olabilir miyim?", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.mychoice.q': "Neyde iyisin?", // nieuw, nalezen
    'c.mychoice.a': "İnsanlara iyi bakabilirim. Evde anneme bakıyorum.", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'l.nextstep': "Entree’den sonra", // nieuw, nalezen
    'w.niveau2': "seviye 2 (mbo’nun bir sonraki seviyesi)", // nieuw, nalezen
    'w.startkwalificatie': "temel yeterlilik (mbo seviye 2 ya da daha yüksek diploma)", // nieuw, nalezen
    'w.bbl': "bbl (bir şirkette çalışıp haftada yaklaşık bir gün okula gidiyorsun)", // nieuw, nalezen
    'w.doorstromen': "devam etmek (daha yüksek bir seviyeye)", // nieuw, nalezen
    'w.aanmelden': "kaydolmak (bir okula ya da kursa)", // nieuw, nalezen
    'w.opendag': "açık gün (bir okulu ziyaret edebilirsin)", // nieuw, nalezen
    's.nextstep.1': "Entree’den sonra seviye 2’ye geçmek istiyorum.", // nieuw, nalezen
    's.nextstep.2': "Hem çalışmak hem okumak istiyorum.", // nieuw, nalezen
    's.nextstep.3': "Açık gün ne zaman?", // nieuw, nalezen
    'c.nextstep.q': "Entree’den sonra ne yapacaksın?", // nieuw, nalezen
    'c.nextstep.a': "bbl yapmak istiyorum. Böylece hem çalışırım hem öğrenirim.", // nieuw, nalezen
    'l.email': "İş yerine yazmak", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'w.mail': "e-posta", // nieuw, nalezen
    'w.onderwerp': "konu (e-postanın)", // nieuw, nalezen
    'w.beste': "sevgili, sayın (mektubun ya da e-postanın başında)", // nieuw, nalezen
    'w.beleefd': "kibar", // nieuw, nalezen
    'w.nalezen': "tekrar okumak (göndermeden önce kontrol etmek)", // nieuw, nalezen
    'w.versturen': "göndermek", // nieuw, nalezen
    's.email.1': "Konu kısmına ne yazayım?", // nieuw, nalezen
    's.email.2': "E-postamı bir kez daha okuyorum.", // nieuw, nalezen
    's.email.3': "E-postayı yarın gönderiyorum.", // nieuw, nalezen
    'c.email.q': "İzin günün hakkındaki e-postayı gönderdin mi?", // nieuw, nalezen
    'c.email.a': "Daha değil. Önce bir daha okuyacağım.", // nieuw, nalezen
    'l.budget': "Her ay paran", // nieuw, nalezen
    'w.vastelasten': "sabit giderler (kira, sigorta, telefon: her ay)", // nieuw, nalezen
    'w.sparen': "para biriktirmek", // nieuw, nalezen
    'w.abonnement': "abonelik (her ay ödüyorsun)", // nieuw, nalezen
    'w.achterafbetalen': "sonra ödemek (şimdi al, sonra öde)", // nieuw, nalezen
    'w.bedenktijd': "cayma süresi (fikrini değiştirme süresi)", // nieuw, nalezen
    'w.garantie': "garanti (çalışmalı, yoksa tamir edilir)", // nieuw, nalezen
    's.budget.1': "Önce sabit giderleri ödüyorum.", // nieuw, nalezen
    's.budget.2': "Her ay biraz para biriktiriyorum.", // nieuw, nalezen
    's.budget.3': "Bu aboneliği iptal ediyorum.", // nieuw, nalezen
    'c.budget.q': "Bu telefonu şimdi al, sonra öde!", // nieuw, nalezen
    'c.budget.a': "Hayır, teşekkürler. Sonra ödemek de borçtur.", // nieuw, nalezen
    'l.healthy': "İşe hazır ve formda", // nieuw, nalezen // nagelezen AI 22 nov
    'w.slapen': "uyumak", // nieuw, nalezen // nagelezen AI 22 nov
    'w.ontbijt': "kahvaltı", // nieuw, nalezen // nagelezen AI 22 nov
    'w.bewegen': "hareket etmek, aktif olmak", // nieuw, nalezen // nagelezen AI 22 nov
    'w.moe': "yorgun", // nieuw, nalezen // nagelezen AI 22 nov
    'w.drugs': "uyuşturucu", // nieuw, nalezen // nagelezen AI 22 nov
    'w.somber': "moralsiz, çökkün (uzun süre üzgün)", // nieuw, nalezen // nagelezen AI 22 nov
    's.healthy.1': "Bugün çok yorgunum.", // nieuw, nalezen // nagelezen AI 22 nov
    's.healthy.2': "Her zaman önce kahvaltı yaparım.", // nieuw, nalezen // nagelezen AI 22 nov
    's.healthy.3': "Molada biraz yürüyüş yapıyorum.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.q': "Hap ister misin? Uyanık kalırsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.a': "Hayır, teşekkürler. Bir şeyin etkisi altında çalışmam.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder': "Önce oku, sonra başla", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder.b': "Başlamadan önce iş emrini (werkbon) ya da uygulamadaki görevi oku. Adresi, görevi ve şeylerin sayısını kontrol et. Bir şey net değil mi? Başlamadan önce sor, yarıda değil. Sonra aletlerini ve malzemeyi hazırla. Bu zaman kazandırır ve daha az hata yaparsın. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder.p': "İş emrinde on koli yazıyor. Doğru mu?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder.s': "İş emrinde şöyle yazıyor: 3 numaralı odayı boya. İş arkadaşın 5 numaralı oda olduğunu söylüyor. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder.o1': "Amirine hangi odanın doğru olduğunu sorarsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder.o2': "3 numaralı odayı boyarsın, çünkü iş emrinde öyle yazıyor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder.o3': "İki odayı da boyarsın, böylece emin olursun.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder.w': "İki şey birbirini tutmuyorsa, başlamadan önce kontrol edersin. Kısa bir soru, işi baştan yapmaktan daha az zaman alır.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handover': "Neyin bittiğini, neyin bitmediğini söyle", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handover.b': "Durduğunda işin bitmiş olmaz. Önce yerini ve aletlerini topla. Sonra birinden işini kontrol etmesini iste. Amirine neyin bittiğini, neyin bitmediğini söyle. Bir şey ters mi gitti ya da bir şey mi bozuk? Bunu şimdi söyle, yarın değil. İşi bitirdiğini bildirmek de işinin bir parçası. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handover.p': "Dört numaralı oda daha bitmedi. Kapı kilitliydi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handover.s': "Beş oda temizledin. 4 numaralı oda kilitliydi. Vardiyan bitiyor. Ne yaparsın?", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.handover.o1': "Amirine 4 numaralı odanın bitmediğini söylersin.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.handover.o2': "Eve gidersin: 4 numaralı oda kilitliydi, bu senin suçun değil.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.handover.o3': "Listeye “hepsi bitti” yazarsın.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.handover.w': "Amirin işi planlar. 4 numaralı odanın bitmediğini bilirse, başka birini gönderebilir. Böylece hiçbir müşteri kirli bir oda bulmaz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop': "Gözler, kulaklar ve yangın", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.b': "Taşlama, kesme ve delme kıvılcım, küçük parçalar ve çok gürültü yapar. Kısa bir iş için bile koruyucu gözlük ve kulak koruyucu tak. Çok gürültü olduğunda, işverenin sana kulak koruyucu vermek zorundadır. Kıvılcımlar yangın çıkarabilir. Kaynak için ya da yanabilen şeylerin yakınında taşlama için ek kurallar var (heet werk): başlamadan önce sor. İşten sonra metal parçalarını topla. Genel bilgi. Kendi durumun için işverenine, sendikaya veya Juridisch Loket’e sor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.p': "Taşlama yapacağım. Kulak koruyucu nerede?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.s': "Küçük bir metal parçasını taşlaman gerekiyor. Bir dakika sürüyor. Koruyucu gözlüğün diğer odada. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.o1': "Bir dakika da olsa önce gözlüğünü alırsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.o2': "Gözlerin yarı kapalı taşlarsın, nasılsa çabuk biter.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.o3': "Öbür elini gözlerinin önüne tutarsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.w': "Gözüne giren bir kıvılcım ya da metal parçası gözüne kalıcı zarar verebilir. Bu bir saniyede olabilir. Koruyucu gözlük kısa bir işte bile yardımcı olur.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power': "Elektrik: asla öylece değil", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.b': "Gerilim altındaki (onder spanning) bir şeyde asla çalışma. Önce eğitimli bir iş arkadaşı orayı güvenli hâle getirir: elektriği keser ve kontrol eder. Bunu sadece doğru eğitimi alan kişiler yapabilir. Bozuk bir kablo ya da fiş mi görüyorsun? Onu kullanma ve hemen amirine söyle. Elektriğin kesik olduğundan emin değil misin? O zaman elektrik vardır. Genel bilgi. Kendi durumun için işverenine, sendikaya veya Juridisch Loket’e sor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.p': "Bozuk bir kablo görüyorum. Kim bakabilir?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.s': "Bir lamba asman gerekiyor. Bir iş arkadaşın diyor ki: “Elektrik kesik, sanırım.” Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.o1': "Eğitimli bir iş arkadaşından elektriğin kesik olduğunu kontrol etmesini istersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.o2': "Başlarsın, ama kablolara dokunurken kalın eldiven giyersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.o3': "Elektriğin kesik olduğunu kontrol etmek için ışığı açıp kapatırsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.w': "Elektrikte “sanırım” yeterli değildir. Elektrik çarpması seni öldürebilir. Eğitimli bir iş arkadaşı elektrik olmadığını kontrol eder, sonra başlayabilirsin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.garage': "Arabanın altında güvenlik", // nieuw, nalezen // nagelezen AI 22 nov
    'c.garage.b': "Sadece kriko üzerinde duran bir arabanın altına asla girme. Araba liftte ya da sehpalar üzerinde sağlam durmalı. Dökülen yağ zemini kaygan yapar: hemen temizle. Eski yağ, aküler ve temizlik ürünleri tehlikeli atıktır. Bunlar özel bir yere gider, asla normal çöpe ya da gidere değil. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.garage.p': "Yerde yağ var. Temizliyorum.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.garage.s': "Sadece kriko üzerinde duran bir arabanın altına bakman gerekiyor. Bir iş arkadaşın diyor ki: “Sorun yok, çabuk ol.” Ne yaparsın?", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.garage.o1': "Lifti ya da sehpaları beklersin.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.garage.o2': "Altına hızlıca girersin, bacakların dışarıda.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.garage.o3': "İş arkadaşından arabayı tutmasını istersin.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.garage.w': "Kriko kayabilir. Araba çok ağırdır ve altından hızlı çıkamazsın. Sehpalar ya da lift arabayı yerinde tutar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carjob': "Ek iş mi? Önce müşteriye sor", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carjob.b': "İş emrinde yazandan fazla sorun mu buluyorsun? Onları öylece tamir etme. Müşteri önce ek işi ve masrafları onaylamalı. Amirin ya da servis danışmanı müşteriyi arar. Test sürüşü sadece izinle ve sadece geçerli bir ehliyetle yapılır. Ne yaptığını ve hangi parçaları kullandığını yaz. Genel bilgi. Kendi durumun için işverenine, sendikaya veya Juridisch Loket’e sor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carjob.p': "Bir sorun daha görüyorum. Müşteriyi kim arayacak?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carjob.s': "Bir arabanın yağını değiştiriyorsun. Frenler de kötü. Bir saat içinde hazır olmalı. Ne yaparsın?", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.carjob.o1': "Müşteriyi araması için amirine söylersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carjob.o2': "Güvenlik için frenleri de tamir edersin.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.carjob.o3': "Hiçbir şey söylemezsin: iş emrinde yoklar.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.carjob.w': "Müşteri öder, bu yüzden müşteri karar verir. Onun onayı olmadan servis öylece ek iş yapamaz. Kötü frenler tehlikelidir, bu yüzden söylemek önemlidir.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement': "Önce imzala, sonra başla", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.b': "Entree’de bir şirkette çok şey öğrenirsin: bu senin stajındır (stage ya da bpv). Başlamadan önce sen, okul ve şirket bir sözleşme imzalarsınız: POK. Şirkette işyeri eğitmenin (praktijkopleider) sana yardım eder. Okulda staj danışmanın (stagebegeleider) sana yardım eder. Hasta mısın? Başlama saatinden önce şirketi ara ve okula da haber ver. Kurallar okuldan okula değişir: staj danışmanına sor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.p': "Ancak staj sözleşmesi imzalanınca başlarım.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.s': "Şirket yarın başlamanı istiyor. POK daha imzalanmadı. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.o1': "Staj danışmanından önce POK’u halletmesini istersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.o2': "Yarın başlarsın, POK’u vaktin olunca imzalarsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.o3': "Başlarsın, ama şimdilik okula bir şey söylemezsin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.w': "POK’ta ne öğrendiğin ve sana kimin yardım ettiği yazar. İmzalı bir POK olmadan stajın diploman için sayılmayabilir. Bu yüzden başlamadan önce imzalarsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review': "Geri bildirim iste, bir de örnek", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.b': "Stajda insanlar sana neyin iyi gittiğini ve neyin daha iyi olabileceğini söyler: geri bildirim (feedback). Bu normaldir ve öğrenmene yardım eder. Anlamadın mı? Bir örnek iste. Sen de geri bildirim iste, örneğin haftada bir. Stajında gerçekten bir sorun mu var? Önce işyeri eğitmeninle konuş. İşe yaramıyor mu? O zaman okuldaki staj danışmanına git.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.p': "Ne iyi gitti, ne daha iyi olabilir?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.s': "İşyeri eğitmenin diyor ki: “Daha dikkatli çalışman lazım.” Ne demek istediğini bilmiyorsun. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.o1': "Neyi farklı yapman gerektiğine dair bir örnek istersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.o2': "Evet dersin ve kendin anlayacağını umarsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.o3': "Hiçbir şey ters gitmesin diye bundan sonra çok daha yavaş çalışırsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.w': "Bir örnekle neyi değiştireceğini bilirsin. Sormak, öğrenmek istediğini gösterir. Eğitmenler bunu sever.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.council': "Kim oy verebilir?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.council.b': "Hollanda’da kimin karar vereceğini oy vererek seçersin. Belediye meclisi (gemeenteraad) senin şehrin hakkında karar verir. Tweede Kamer bütün ülke için yasaları yapar. Hollanda vatandaşlığın varsa 18 yaşından itibaren bütün seçimlerde oy verebilirsin. Belediye meclisi için daha çok kişi oy verebilir. Burada yaşayan başka bir AB ülkesinden insanlar oy verebilir. AB dışından insanlar 5 yıl yasal oturumdan sonra oy verebilir. Belediye (gemeente) sana bir oy kartı (stempas) gönderir. Onu kimliğinle birlikte götür. Oy verip veremeyeceğinden emin değil misin? Belediyeye sor.", // nagelezen AI 22 nov
    'c.council.p': "Belediye meclisi için oy verebilir miyim?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.council.s': "Faslısın ve altı yıldır Hollanda vatandaşlığı olmadan burada yasal olarak yaşıyorsun. Hangisi doğru?", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.council.o1': "Belediye meclisi için oy verebilirsin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.council.o2': "Tweede Kamer için de oy verebilirsin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.council.o3': "Hollanda pasaportu olmadan oy veremezsin.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.council.w': "5 yıl yasal oturumdan sonra belediye meclisi için oy verebilirsin. Tweede Kamer için Hollanda vatandaşlığı gerekir.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police': "Kimliğin ve hakların", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.b': "14 yaşından itibaren polis isterse kimliğini göstermek zorundasın. Bu yüzden onu hep yanında taşı. Örneğin belediyeden ya da UWV’den bir mektup mu aldın? İçindeki karara katılmıyor musun? O zaman yazılı olarak itiraz edebilirsin (bezwaar maken). Bunu mektuptaki tarihten önce yap. Polis ve hâkim herkese eşit davranmak zorundadır. Gözaltına mı alındın? Avukat isteyebilirsin. Juridisch Loket ücretsiz danışmanlık verir.", // nagelezen AI 22 nov
    'c.police.p': "Bu karara katılmıyorum. İtiraz ediyorum.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.s': "Belediyeden bir mektup alıyorsun. Onların kararına katılmıyorsun. Mektupta altı haftan olduğu yazıyor. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.o1': "Tarihten önce bir itiraz mektubu yazarsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.o2': "Onları bir kez ararsın ve seni geri aramalarını beklersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.o3': "Beklersin: altı hafta sonra kendiliğinden biter.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.w': "İtiraz yazılı olarak, mektuptaki tarihten önce yapılır. O tarihten sonra çoğu zaman çok geçtir. Juridisch Loket onu yazmana yardım edebilir.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login': "Girişin sadece senin", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.b': "Şifren ve DigiD’n sadece senin için. Onları kimseye verme, işverenine ya da bir iş arkadaşına bile. Ortak bir bilgisayarda işin bitince her zaman çıkış yap. Kısa bir süre mi uzaklaşıyorsun? Ekranını kilitle. Şifreni mi unuttun? Bilgi işlem bölümünden (ICT-afdeling) yenisini iste. Bilgisayar kuralları şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu bilgi işlem bölümüne sor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.p': "Biraz uzaklaşıyorum. Ekranımı kilitliyorum.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.s': "Amirin, evraklarını hızlıca halletmek için DigiD’ni ve şifreni istiyor. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.o1': "Hayır dersin, o yardım ederken girişi kendin yaparsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.o2': "Bu seferlik verirsin, çünkü o senin şefin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.o3': "Sonra kullanabilsin diye bir kâğıda yazarsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.w': "DigiD’nle biri vergilerini, yardımlarını ve sağlık belgelerini görüp değiştirebilir. O sadece senin için. Girişi kendin yapıp birinin sana yardım etmesine izin verebilirsin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish': "Acele ve bir düğme mi? Tıklama", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.b': "Sahte bir e-posta (phishing) çoğu zaman gerçek gibi görünür. Hızlı davranmanı ister: “Hesabınız bugün kapatılacak!” Göndereni kontrol et. Beklemediğin bir bağlantıya tıklama ve beklemediğin bir eki açma. Gerçek siteye ya da uygulamaya kendin git. Yine de tıkladın mı? Şifreni hemen değiştir ve bilgi işlem bölümünü ara. Bu utanılacak bir şey değil: ne kadar erken bilirlerse o kadar iyi. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.p': "Şüpheli bir bağlantıya tıkladım.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.s': "Bir e-postadaki bağlantıya tıkladın ve şifreni yazdın. Sonra e-postanın sahte olduğunu görüyorsun. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.o1': "Şifreni değiştirir ve bilgi işlem bölümünü ararsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.o2': "Başka kimse tıklamasın diye e-postayı silersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.o3': "Bir şey ters gidecek mi diye bir gün beklersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.w': "Şifrenle başka biri işinin sistemlerine girebilir. Şifreni hızlıca değiştirip bilgi işlem bölümüne haber verirsen, bunu zamanında durdurabilirler.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice': "Güçlü yönlerin önemli", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.b': "Neyde iyisin? İşi, okulu ve evi düşün. Ailene bakmak, bir yan iş ya da gönüllü çalışma da sayılır. Neyi seversin, neyi sevmezsin? Hangi işin sana uyduğunu bilmiyor musun? Bir gün birinin yanında işe gitmek iste (meeloopdag). Okuldaki danışmanın seçmene yardım edebilir.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.p': "İnsanlarla iyi geçinebilirim. Evde çok yardım ederim.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.s': "Okulda sana soruyorlar: “Neyde iyisin?” Hiç maaşlı bir işin olmadı. Ne dersin?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.o1': "Evde iyi yaptığın şeyleri, örneğin başkalarına bakmayı.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.o2': "Henüz bilmediğini, çünkü hiç işin olmadığını.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.o3': "Her işi yapabileceğini, gerçekten her şeyi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.w': "Evde kazandığın beceriler de sayılır. Bakım, planlama ve yardım, işverenlerin ihtiyaç duyduğu becerilerdir. Ne yaptığını bir örnekle anlat.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep': "Entree’den sonra: seviye 2 ya da iş", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.b': "Entree diplomasıyla mbo’nun seviye 2’sine geçebilirsin. Seviye 2 ya da daha yüksek bir diploma, temel yeterliliktir (startkwalificatie). İş bulmana ve işini korumana yardım eder. bbl’de bir şirkette çalışır ve haftada yaklaşık bir gün okula gidersin. Bunun için bir işe ya da bir çalış-öğren yerine (leerwerkbaan) ihtiyacın var. Bir açık güne git ve okuldaki danışmanınla konuş.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.p': "Entree’den sonra seviye 2’ye geçebilir miyim?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.s': "Entree diploman var. Bir şirket sana eğitimsiz bir iş teklif ediyor. Sen de öğrenmeye devam etmek istiyorsun. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.o1': "Şirkete bbl yeri olup olmadığını sorarsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.o2': "İşi alırsın ve öğrenmeyi tamamen bırakırsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.o3': "Bir okul seni arayana kadar evde beklersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.w': "bbl ile hem çalışır hem öğrenirsin. Para kazanırsın ve seviye 2 diploması alırsın. Birçok şirket bunu sever.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email': "Kısa bir e-posta: kim, ne, ne zaman", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.b': "İşe yazılan e-posta kısa ve kibardır. Bir selamla başla, örneğin “Beste Karin,”. Sonra ne istediğini ve ne zaman istediğini yaz. Bir selam ve tam adınla bitir. Kısa bir konu yaz, örneğin “Vrij op vrijdag”. Göndermeden önce e-postanı tekrar oku.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.p': "Sevgili Karin, cuma günü izin alabilir miyim? Selamlar, Ali Haddad", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.s': "Gelecek cuma izin istiyorsun. Amirine hangi e-posta en iyisi?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.o1': "“Beste Karin, mag ik vrijdag vrij? Groet, Ali Haddad”", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.o2': "“Vrijdag ben ik er niet.” (selamsız ve adın olmadan).", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.o3': "Haftan hakkında uzun bir e-posta, soru en sonda.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.w': "İyi bir e-postada bir selam, net bir soru ve adın olur. Böylece amirin hızlıca cevap verebilir.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget': "Önce sabit giderler", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.b': "Maaşını aldığında önce sabit giderleri öde: kira, sigorta ve telefon. Her ay küçük bir miktar biriktirmeye çalış, 10 euro bile olsa. Şimdi al, sonra öde de bir borçtur. İnternetten bir şey mi aldın? O zaman genelde 14 gün içinde vazgeçebilirsin. Fişi sakla: garanti için ona ihtiyacın var.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.p': "Şimdi ödemeyi tercih ederim. Böylece borcum olmaz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.s': "Bugün maaşını alıyorsun. Yeni ayakkabı istiyorsun, kiran da daha ödenmedi. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.o1': "Önce kirayı ödersin, sonra ne kaldığına bakarsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.o2': "Ayakkabıları alırsın, kirayı sonra ödersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.o3': "Ayakkabıları “şimdi al, sonra öde” ile alırsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.w': "Kira, sigorta ve telefon her ay tekrar gelir. Önce bunları ödersen, ne kadar paran kaldığını bilirsin. Böylece borca girmezsin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy': "Uyku, beslenme ve uyuşturucuya hayır", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.healthy.b': "Yeterince uyuduğunda daha iyi ve daha güvenli çalışırsın, geç bir vardiyadan sonra da. Kahvaltı yap ve gün içinde su iç. Molada hareket et, örneğin kısa bir yürüyüş yap. Alkol ya da uyuşturucunun etkisi altında çalışmak tehlikelidir ve çoğu işveren bunu yasaklar. Uzun süredir moralin mi bozuk, ya da içmeyi veya kullanmayı bırakamıyor musun? Aile hekiminle (huisarts) konuş. Sana yardım edebilir ve bunu gizli tutar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.p': "Uzun süredir moralim bozuk. Randevu alabilir miyim?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.s': "Bu gece gece vardiyan var. Bir iş arkadaşın uyanık kalman için sana bir hap veriyor. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.o1': "Hayır dersin ve vardiyadan önce birkaç saat uyursun.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.o2': "Yarım hap alırsın, bu tehlikeli değil.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.o3': "Alırsın, ama işte kimseye söylemezsin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.w': "Bir iş arkadaşından gelen haplar uyuşturucu olabilir. Seni hasta edebilir ya da işte hata yaptırabilir. Uyku, uyanık kalmanın güvenli yoludur.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.food': "Gıdayla çalışmak", // nieuw, nalezen
    'w.mes': "bıçak", // nieuw, nalezen
    'w.snijhandschoen': "kesilmeye dayanıklı eldiven (kesiklere karşı bir eldiven)", // nieuw, nalezen
    'w.vriescel': "dondurucu oda (çok soğuk bir oda)", // nieuw, nalezen
    'w.sieraden': "takılar (yüzük, saat, küpe)", // nieuw, nalezen
    'w.pleister': "yara bandı (küçük bir kesik için)", // nieuw, nalezen
    'w.vlees': "et", // nieuw, nalezen
    's.food.1': "Takılarımı çıkarıyorum.", // nieuw, nalezen
    's.food.2': "Kesilmeye dayanıklı eldivenler nerede?", // nieuw, nalezen
    's.food.3': "Dondurucu odada kalın bir mont giyiyorum.", // nieuw, nalezen
    'c.food.q': "Bandı neden şimdi temizliyoruz?", // nieuw, nalezen
    'c.food.a': "Sırada kuruyemişsiz bir ürün var.", // nieuw, nalezen
    'c.food': "Temiz eller, güvenli gıda", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.b': "Gıdayla çalışmanın sıkı hijyen kuralları vardır: bone, temiz iş kıyafeti, yıkanmış eller ve takı yok. Bu kurallar herkes için aynıdır. Senin hakkında bir şey söylemezler: yiyeceği, onu yiyecek insanlar için güvenli tutarlar. Bıçakla çalışırken her zaman kesilmeye dayanıklı eldivenini tak. Soğuk bir odada veya dondurucu odada sana verilen sıcak kıyafetleri giy ve molanda ısın. Hasta mısın, ya da elinde bir yara mı var? İşe başlamadan önce bunu bildir. O zaman özel bir yara bandı ya da bir süreliğine başka bir iş alabilirsin. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.p': "Elimde küçük bir kesik var. Bir yara bandı alabilir miyim?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.s': "Evde parmağını biraz kestin. Bugün etle çalışıyorsun. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.o1': "Amirine söyler ve bir yara bandı istersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.o2': "Hiçbir şey söylemezsin: sadece küçük bir kesik.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.o3': "Kimse görmesin diye üstüne eldiven giyersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.w': "Küçük bir yara yiyeceğe mikrop bulaştırabilir. Bildirdiğinde özel bir yara bandı ya da bir süreliğine başka bir iş alabilirsin. Bildirmek normaldir: kimse seni bunun için suçlamaz.", // nieuw, nalezen // nagelezen AI 22 nov
    'u.delivery': "Taşımacılık ve teslimat", // nieuw, nalezen
    'l.parcel': "Paket teslimatı", // nieuw, nalezen
    'w.pakket': "paket", // nieuw, nalezen
    'w.bestelbus': "kamyonet (dağıtım aracı)", // nieuw, nalezen
    'w.bezorgen': "teslim etmek (müşteriye götürmek)", // nieuw, nalezen
    'w.inladen': "yüklemek (eşyaları araca koymak)", // nieuw, nalezen
    'w.aanbellen': "kapı zilini çalmak", // nieuw, nalezen
    'w.bewijs': "kanıt (ne olduğunu gösteren bir şey)", // nieuw, nalezen
    's.parcel.1': "Her paketi okutuyorum.", // nieuw, nalezen
    's.parcel.2': "Müşteri evde değil.", // nieuw, nalezen
    's.parcel.3': "Komşularınız için bir paket alır mısınız?", // nieuw, nalezen
    'c.parcel.q': "Bu paket benim mi?", // nieuw, nalezen
    'c.parcel.a': "Evet. Buraya imza atar mısınız lütfen?", // nieuw, nalezen
    'l.road': "Yolda güvenli ve adil", // nieuw, nalezen
    'w.rijden': "araç sürmek", // nieuw, nalezen
    'w.zwaar': "ağır", // nieuw, nalezen
    'w.steekwagen': "yük arabası (ağır kutular için iki tekerlekli el arabası)", // nieuw, nalezen
    'w.route': "güzergâh (gittiğin yol)", // nieuw, nalezen
    'w.loondienst': "maaşlı çalışan (bir patron için çalışır ve maaş alırsın)", // nieuw, nalezen
    'w.bepalen': "belirlemek (nasıl yapılacağını söylemek)", // nieuw, nalezen
    's.road.1': "Bu paket çok ağır. Yük arabasını getiriyorum.", // nieuw, nalezen
    's.road.2': "Yol kaygan. Yavaş sürüyorum.", // nieuw, nalezen
    's.road.3': "Güzergâhımı ve saatlerimi kim belirliyor?", // nieuw, nalezen
    'c.road.q': "Bugün bir sefer daha yapabilir misin?", // nieuw, nalezen
    'c.road.a': "Hayır, o zaman molama vaktim kalmaz.", // nieuw, nalezen
    'c.parcel': "Evde yok ya da paket hasarlı", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.b': "Müşteri evde değil mi? Şirketinin kurallarına uy: komşuları dene ya da paketi geri götür. Müşteri istemediyse paketi öylece kapının önüne bırakma. Bir paket hasarlı ya da ıslak mı? Hiçbir sorun yokmuş gibi teslim etme. Kanıt olarak bir fotoğraf çek ve bunu barkod okuyucuda ya da uygulamada bildir. Bir sorun hakkında dürüst olmak, onu saklamaktan her zaman daha iyidir. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.p': "Bu paket hasarlı. İşte bir fotoğraf.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.s': "Müşteri evde değil, komşular da yok. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.o1': "“Evde yok” diye okutur ve paketi geri götürürsün.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.o2': "“Teslim edildi” diye okutur ve kapının önüne bırakırsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.o3': "Kimse görmesin diye çöp kutusunun arkasına saklarsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.w': "“Teslim edildi” diye okutulan bir paket gerçekten müşteride olmalıdır. Gerçekte ne olduysa onu okutursan, müşteri paketi sonra alabilir ve kimse onu kaybettiğini düşünmez.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road': "Yolda güvenlik ve adil çalışma", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.b': "Araç sürerken telefonunu asla elinde tutma: bu yasaktır. Navigasyon için bir telefon tutucu kullan. Yoğun bir günde de molalarını ver. Ağır bir paket mi? Yük arabasını kullan ya da birlikte kaldırın. Buz ya da kar mı var? Yavaş sür: geç varmak kazadan iyidir. Bazı şirketler serbest çalışan (zelfstandig) olarak çalıştığını söyler. Ama saatlerini, güzergâhını ve kıyafetlerini kim belirliyor? Bunların hepsini şirket belirliyorsa, aslında maaşlı çalışan (in loondienst) olabilirsin. O zaman çoğu zaman daha fazla hakkın olur, örneğin hastayken ücret almak. Bu konuda daha fazlası “Belgeler, uyum ve işin” dersinde. Genel bilgi. Kendi durumun için sendikaya, Juridisch Loket’e veya FairWork’e sor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.p': "Şimdi molamı veriyorum. Sonra yoluma devam edeceğim.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.s': "Şirket sana serbest çalışan diyor. Ama saatlerini, güzergâhını ve kıyafetlerini o belirliyor. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.o1': "Tavsiye istersin: belki de maaşlı çalışansın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.o2': "Hiçbir şey yapmazsın: sözleşmede serbest çalışan yazıyor, o hâlde öyledir.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.o3': "Aynı parayı kazanmak için daha çok saat çalışırsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.w': "Önemli olan, sadece sözleşmedeki kelime değil, gerçekte nasıl çalıştığındır. Şirket nasıl, ne zaman ve nerede çalışacağını belirliyorsa, çoğu zaman maaşlı çalışansın. O zaman daha fazla hakkın olur.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.feelwell': "İşte iyi hissetmek", // nieuw, nalezen // nagelezen AI 22 nov
    'w.werkdruk': "iş yükü baskısı (az zamanda çok iş)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.wakkerliggen': "uyanık yatmak (uyuyamıyorsun)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.ploegendienst': "vardiyalı çalışma (sırayla sabah, akşam ve gece vardiyası)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.heimwee': "sıla hasreti (evini özlemek)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.familie': "aile", // nieuw, nalezen // nagelezen AI 22 nov
    'w.alleen': "yalnız", // nieuw, nalezen // nagelezen AI 22 nov
    's.feelwell.1': "Vardiyalı çalışma yüzünden kötü uyuyorum.", // nieuw, nalezen // nagelezen AI 22 nov
    's.feelwell.2': "Çok fazla. Tek başıma başaramıyorum.", // nieuw, nalezen // nagelezen AI 22 nov
    's.feelwell.3': "Memleketimi özledim. Ailem çok uzakta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.q': "İyi misin?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.a': "Pek iyi değil. Geceleri sık sık uyuyamıyorum.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell': "Çok mu fazla? Tek başına yapmak zorunda değilsin", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.b': "Herkes bazen yorgun, stresli ya da üzgün hisseder. Çok fazla iş (werkdruk), vardiyalı çalışma yüzünden kötü uyku ya da aileni özlemek her şeyi ağırlaştırabilir. Bunu tek başına taşımak zorunda değilsin ve “bu çok fazla” demek zayıflık değildir. Güvendiğin biriyle konuş. Örneğin amirin, işyeri hekimi (bedrijfsarts) ya da aile hekimin (huisarts). Ya da şirketinde varsa güven danışmanı (vertrouwenspersoon). İşyeri hekimiyle bir görüşmeyi kendin de isteyebilirsin. Doktorlar ne söylediğini patronuna anlatmaz. İntihar etmeyi mi düşünüyorsun, ya da biri için endişeleniyor musun? 113’ü ara (ücretsiz, gece gündüz) ya da 113.nl’de sohbet et.", // nagelezen AI 22 nov
    'c.feelwell.p': "Pek iyi değilim. Seninle biraz konuşabilir miyim?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.s': "Haftalardır kötü uyuyorsun ve iş çok fazla. Kendini çok yorgun hissediyorsun. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.o1': "Amirine ya da işyeri hekimine söylersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.o2': "Hiçbir şey söylemez, daha çok ve daha hızlı çalışırsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.o3': "Evde kalır, kimseye nedenini söylemezsin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.w': "Bunu erken söylemek zayıflık değildir. O zaman birlikte bir çıkış yolu arayabilirsiniz, örneğin başka vardiyalar. Bunu tek başına yapmak zorunda değilsin.", // nieuw, nalezen // nagelezen AI 22 nov
    'u.sick': "Hastalık", // nieuw, nalezen // nagelezen AI 22 nov
    'l.backtowork': "Hastalıktan sonra işe dönüş", // nieuw, nalezen // nagelezen AI 22 nov
    'w.opbouwen': "kademeli artırmak (yavaş yavaş, adım adım)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.halvedagen': "yarım günler (günün sadece bir kısmında çalışırsın)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.lichtwerk': "hafif iş (ağır olmayan)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.zwaarwerk': "ağır iş", // nieuw, nalezen // nagelezen AI 22 nov
    'w.herstellen': "iyileşmek, yeniden sağlığına kavuşmak", // nieuw, nalezen // nagelezen AI 22 nov
    'w.welkomterug': "tekrar hoş geldin", // nieuw, nalezen // nagelezen AI 22 nov
    's.backtowork.1': "Yarım günlerle başlıyorum.", // nieuw, nalezen // nagelezen AI 22 nov
    's.backtowork.2': "Hafif işi artık yapabiliyorum. Ağır işi henüz değil.", // nieuw, nalezen // nagelezen AI 22 nov
    's.backtowork.3': "İşyeri hekimi diyor ki: yavaş yavaş artır.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.q': "Tekrar hoş geldin! Daha iyi misin?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.a': "Evet, daha iyiyim. Kendimi zorlamıyorum.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork': "Adım adım geri dönmek", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.b': "İyileştin mi? İşverenine yeniden çalışabileceğini bildir (betermelden). Daha uzun bir hastalıktan sonra çoğu zaman adım adım başlarsın: önce daha az saat ya da daha hafif iş. İşyeri hekimi (bedrijfsarts) neler yapabileceğin konusunda tavsiye verir. Daha uzun süre mi hastaydın? O zaman sen ve işverenin dönüşün için birlikte bir plan yaparsınız. Bu yasadır (Wet verbetering poortwachter). Neler yapabildiğini ve neleri henüz yapamadığını açıkça söyle. Hangi hastalığı geçirdiğini iş arkadaşlarına söylemek zorunda değilsin. Genel bilgi. Kendi durumun için işverenine, sendikaya veya Juridisch Loket’e sor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.p': "Bunu artık yapabiliyorum. Şunu henüz yapamıyorum.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.s': "Üç hafta hastaydın. Döndüğün ilk gün amirin senden ağır kutuları kaldırmanı istiyor. İşyeri hekimi dedi ki: şimdilik sadece hafif iş. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.o1': "Şimdi hafif iş yapabildiğini ve neyi henüz yapamadığını sakince söylersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.o2': "Yine de kutuları kaldırırsın: zorluk çıkarmak istemiyorsun.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.o3': "Tek kelime etmeden eve gidersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.w': "Amirin geri dönmeni istiyor, hem de sağlıklı olarak. Neler yapabildiğini açıkça söylersen, işi planlayabilir. Çok erken çok fazla iş yapmak seni yeniden hasta edebilir.", // nieuw, nalezen // nagelezen AI 22 nov

    'l.measure': "Ölçmek", // nieuw, nalezen
    'w.rolmaat': "şerit metre", // nieuw, nalezen
    'w.waterpas': "su terazisi (bir şeyin düz olup olmadığını gösterir)", // nieuw, nalezen
    'w.meten': "ölçmek", // nieuw, nalezen
    'w.rechtlijn': "düz (eğri değil)", // nieuw, nalezen
    'w.plank': "tahta, kalas", // nieuw, nalezen
    'w.schroef': "vida", // nieuw, nalezen
    's.measure.1': "Bu tahta ne kadar uzun?", // nieuw, nalezen
    's.measure.2': "Duvar düz değil.", // nieuw, nalezen
    's.measure.3': "İki kez ölçüyorum.", // nieuw, nalezen
    'c.measure.q': "Genişliği ne kadar olmalı?", // nieuw, nalezen
    'c.measure.a': "Doksan santimetre. Not alıyorum.", // nieuw, nalezen
    'c.measure': "İki kez ölç, bir kez kes", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.b': "Şantiyede ölçüler çoğu zaman milimetre olarak söylenir. Yani “dokuz yüz”, 90 santimetre demek olabilir. Emin değil misin? Sor: “Bu milimetre mi, santimetre mi?” Sayıyı tekrar et ve yaz. Kesmeden ya da delmeden önce iki kez ölç: kısa kesilen tahta kısa kalır. Hata mı yaptın? Hemen söyle. O zaman ekip bunu hâlâ düzeltebilir ve daha ucuza gelir.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.p': "Bu milimetre mi, santimetre mi?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.s': "İş arkadaşın bir ölçü söylüyor. İyi duymadın. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.o1': "Sayıyı tekrar eder ve doğru mu diye sorarsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.o2': "Tahtayı, duyduğunu sandığın ölçüye göre kesersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.o3': "Kendisi gelip bakana kadar beklersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.w': "Yanlış bir ölçü malzeme ve zaman kaybettirir. Sayıyı tekrar etmek iki saniye sürer ve şantiyede herkes bunu yapar.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.siteday': "Düzenli bir şantiye", // nieuw, nalezen
    'w.bouwplaats': "şantiye", // nieuw, nalezen
    'w.uitvoerder': "şantiye şefi (şantiyedeki amir)", // nieuw, nalezen
    'w.keet': "şantiye barakası (mola ve toplantılar için)", // nieuw, nalezen
    'w.afval': "atık, çöp", // nieuw, nalezen
    'w.container': "konteyner (atık için çok büyük bir kutu)", // nieuw, nalezen
    'w.struikelen': "tökezlemek (bir şeye takılıp düşmek)", // nieuw, nalezen
    's.siteday.1': "Atık konteynere atılır.", // nieuw, nalezen
    's.siteday.2': "Şantiye şefi barakada.", // nieuw, nalezen
    's.siteday.3': "Dikkat, burada ayağın takılabilir.", // nieuw, nalezen
    'c.siteday.q': "Bu tahtalar nereye gidecek?", // nieuw, nalezen
    'c.siteday.a': "Girişteki konteynere.", // nieuw, nalezen
    'c.siteday': "Düzenli şantiye, güvenli şantiyedir", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.b': "Şantiyede ortalığı toplamak işin bir parçasıdır, herkes için. Ortada duran tahtalar, kablolar ve atıklar insanların takılıp düşmesine yol açar. Bu yüzden kendi yerini sadece gün sonunda değil, gün içinde de topla. Atıklar ayrılır: ahşap, taş ve metal çoğu zaman ayrı konteynerlere gider. Hangisi olduğundan emin değil misin? Sor. Dışarı çıkmış bir çivi ya da kapağı olmayan bir çukur mu görüyorsun? Güvenli bir şekilde yapabiliyorsan düzelt, ya da şantiye şefine (de uitvoerder) söyle. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.p': "Burayı topluyorum. Böylece kimse takılıp düşmez.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.s': "Yolun üstünde çivili tahtalar duruyor. Senin değiller. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.o1': "Onları kenara çekersin ya da şantiye şefine söylersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.o2': "Üstlerinden atlarsın: senin tahtaların değil.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.o3': "Beklersin: başka biri toplar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.w': "Herkes aynı yolları kullanır. Tehlikeyi gören bir şey yapar: şantiyede bu normaldir.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.shifts': "Vardiyanı devretmek", // nieuw, nalezen
    'w.vroegedienst': "sabah vardiyası", // nieuw, nalezen
    'w.latedienst': "akşam vardiyası", // nieuw, nalezen
    'w.nachtdienst': "gece vardiyası", // nieuw, nalezen
    'w.overdracht': "devir teslim (sonraki vardiyaya ne olduğunu anlatırsın)", // nieuw, nalezen
    'w.aflossen': "birinin yerini almak (sıradaki kişi gelir, sen gidebilirsin)", // nieuw, nalezen
    'w.teamleider': "ekip lideri", // nieuw, nalezen
    's.shifts.1': "Bu hafta akşam vardiyasındayım.", // nieuw, nalezen
    's.shifts.2': "Benim yerimi kim alacak?", // nieuw, nalezen
    's.shifts.3': "İki numaralı makine arıza yaptı.", // nieuw, nalezen
    'c.shifts.q': "Vardiyanda bir şey oldu mu?", // nieuw, nalezen
    'c.shifts.a': "Evet. Bant yarım saat durdu.", // nieuw, nalezen
    'c.shifts': "Sonraki vardiyaya anlat", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.b': "Bir fabrika çoğu zaman gece gündüz, vardiyalarla çalışır. Vardiyanın sonunda yerini bir iş arkadaşın alır. Öylece gitme: iş arkadaşın gelene kadar bekle. Ne olduğunu birkaç kelimeyle anlat: bir arıza, hatalı bir ürün, bitmemiş bir iş. Birçok şirkette bunun için bir liste ya da ekran da vardır. Aktarmadığın bir sorun sonraki vardiyada geri gelir ve o zaman kimse nedenini bilmez. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.p': "Makine arıza yaptı. Şimdi yine çalışıyor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.s': "Vardiyan bitti. İş arkadaşın beş dakika gecikti. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.o1': "Beklersin ve ekip liderine haber verirsin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.o2': "Eve gidersin: vardiyan bitti.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.o3': "Makineyi durdurur ve gidersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.w': "Çalışan bir makine tek başına bırakılamaz. Bekleyip haber verirsen iş güvenli şekilde devam eder ve ekip lideri sorunu çözebilir.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.signals': "Gördüğünü söyle", // nieuw, nalezen
    'w.duizelig': "başı dönen", // nieuw, nalezen
    'w.misselijk': "midesi bulanan (kusacak gibi hissedersin)", // nieuw, nalezen
    'w.benauwd': "nefesi daralan", // nieuw, nalezen
    'w.koorts': "ateş (yüksek vücut ısısı)", // nieuw, nalezen
    'w.verward': "kafası karışık (kişi nerede olduğunu bilmiyor)", // nieuw, nalezen
    'w.anders': "farklı (normaldeki gibi değil)", // nieuw, nalezen
    's.signals.1': "Hanımefendinin başı dönüyor.", // nieuw, nalezen
    's.signals.2': "Beyefendi bugün yemek yemiyor.", // nieuw, nalezen
    's.signals.3': "Gelip bir bakabilir misin?", // nieuw, nalezen
    'c.signals.q': "Bay Jansen nasıl?", // nieuw, nalezen
    'c.signals.a': "Kafası karışık. Bu dünkünden farklı.", // nieuw, nalezen
    'c.signals': "Danışanı her gün sen görürsün", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.b': "Çoğu zaman bir danışanı en çok gören kişi sensin. Bu yüzden bir şey farklı olduğunda ilk sen fark edersin: daha az yemek, daha çok ağrı, kafa karışıklığı, nefes darlığı. Ne olduğunu bilmek zorunda değilsin. Ne gördüğünü ve ne zaman gördüğünü söyle. Aynı gün hemşireye anlat ve görevinse yaz. Ciddi mi görünüyor? Bekleme: hemen hemşireyi ara. Bir kez fazla haber vermek, bir kez eksik haber vermekten iyidir.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.p': "Hanımefendi yemek yemiyor ve başı dönüyor. Bu normalden farklı.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.s': "Bir danışan bugün sessiz ve yemek yemek istemiyor. Normalde çok konuşur. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.o1': "Gördüğünü bugün hemşireye söylersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.o2': "Birkaç gün beklersin: belki geçer.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.o3': "Ona dolaptan bir hap verirsin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.w': "Küçük bir değişiklik bir hastalığın ilk işareti olabilir. Ne olduğuna sen karar vermezsin: hemşire karar verir. Ama ancak sen söylersen bir şey yapabilir.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.transfer': "Birinin kalkmasına yardım etmek", // nieuw, nalezen
    'w.tillift': "kaldırma lifti (insanı kaldıran bir makine)", // nieuw, nalezen
    'w.rollator': "tekerlekli yürüteç", // nieuw, nalezen
    'w.bed': "yatak", // nieuw, nalezen
    'w.opstaan': "kalkmak, ayağa kalkmak", // nieuw, nalezen
    'w.gaanzitten': "oturmak", // nieuw, nalezen
    'w.voorzichtig': "dikkatli, nazik", // nieuw, nalezen
    's.transfer.1': "Kalkmanıza yardım edeceğim.", // nieuw, nalezen
    's.transfer.2': "Biraz oturmak ister misiniz?", // nieuw, nalezen
    's.transfer.3': "Önce kaldırma liftini getiriyorum.", // nieuw, nalezen
    'c.transfer.q': "Hanımefendiyi yataktan kaldırabilir misin?", // nieuw, nalezen
    'c.transfer.a': "Tek başıma olmaz. Kaldırma liftini getiriyorum.", // nieuw, nalezen
    'c.transfer': "Önce söyle, sonra yardım et", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.b': "Bir danışana dokunmadan önce ne yapacağını söyle: “Ik help u nu met opstaan.” O zaman danışan korkmaz ve sana yardımcı olabilir. Danışanın hâlâ yapabildiği şeyleri kendisinin yapmasına izin ver: bu onu güçlü tutar. Bir insanı tek başına kaldırma. Orada bulunan yardımcı araçları, örneğin kaldırma liftini kullan ve sana gösterildiği gibi çalış. Henüz gösterilmedi mi? Önce sor. Belin bütün çalışma hayatın boyunca sana lazım. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.p': "Şimdi kalkmanıza yardım edeceğim. Hazır mısınız?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.s': "Bir danışan yataktan kalkmak istiyor. Kaldırma liftini kullanmayı henüz öğrenmedin. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.o1': "Lifti bilen bir iş arkadaşına sorarsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.o2': "Onu kendin kaldırırsın: ağır değil.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.o3': "Lifti denersin: zor olamaz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.w': "Bir insanı yanlış kaldırmak danışana da senin beline de zarar verebilir. Bir iş arkadaşına sormak birkaç dakika sürer. Bir düşme aylar sürebilir.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.dishes': "Bulaşık yıkamak", // nieuw, nalezen
    'w.afwas': "bulaşık", // nieuw, nalezen
    'w.vaatwasser': "bulaşık makinesi", // nieuw, nalezen
    'w.bord': "tabak", // nieuw, nalezen
    'w.glas': "bardak, cam", // nieuw, nalezen
    'w.bestek': "çatal bıçak takımı (bıçak, çatal ve kaşık)", // nieuw, nalezen
    'w.afdrogen': "kurulamak (bezle)", // nieuw, nalezen
    's.dishes.1': "Bulaşık makinesi bitti.", // nieuw, nalezen
    's.dishes.2': "Dikkat, bir bardak kırıldı.", // nieuw, nalezen
    's.dishes.3': "Temiz çatal bıçak kalmadı.", // nieuw, nalezen
    'c.dishes.q': "Temiz bardak kaldı mı?", // nieuw, nalezen
    'c.dishes.a': "Evet, hemen getiriyorum.", // nieuw, nalezen
    'c.dishes': "Cam kırıldı: hemen söyle", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.b': "Mutfakta cam kırılır. Bu normaldir ve kimse buna kızmaz. Ama hemen, yüksek sesle ve açıkça söyle: “Glas!” Parçaları çıplak elle toplama: fırça kullan. Cam yiyeceğin yakınına ya da buzun içine mi düştü? O zaman o yiyecek ya da o buz atılmalıdır, hepsi. Yemeğin içindeki küçük bir cam parçası misafir için çok tehlikelidir. Cam kendi kutusuna atılır, birinin kaldıracağı bir torbaya değil. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.p': "Dikkat, cam! Hemen topluyorum.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.s': "İçecekler için olan buzun üstünde bir bardak kırılıyor. Çok yoğun. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.o1': "Söylersin ve bütün buzu atarsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.o2': "Görebildiğin parçaları çıkarırsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.o3': "Hiçbir şey söylemezsin: şimdi çok yoğun.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.w': "Buzun içindeki küçük cam parçalarını göremezsin. Yeni buz az paraya mal olur. İçeceğinde cam olan bir misafir ciddi şekilde yaralanabilir.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.rush': "İş yoğunken", // nieuw, nalezen
    'w.heet': "sıcak, kızgın", // nieuw, nalezen
    'w.chef': "şef (mutfağın amiri)", // nieuw, nalezen
    'w.terras': "teras (dışarıdaki masalar)", // nieuw, nalezen
    'w.tafel': "masa", // nieuw, nalezen
    'w.dienblad': "tepsi", // nieuw, nalezen
    'w.wachten': "beklemek", // nieuw, nalezen
    's.rush.1': "Sıcak! Arkandan geçiyorum.", // nieuw, nalezen
    's.rush.2': "Altı numaralı masa yemeği bekliyor.", // nieuw, nalezen
    's.rush.3': "Bunu terasa götürüyorum.", // nieuw, nalezen
    'c.rush.q': "Dört numaralı masaya bakabilir misin?", // nieuw, nalezen
    'c.rush.a': "Evet, şef. Geliyorum.", // nieuw, nalezen
    'c.rush': "İş yoğunken kısa sözler", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.b': "İş yoğunken mutfakta insanlar kısa sözlerle konuşur: “Heet!”, “Achter!”, “Tafel zes!” Bu kabalık değildir. Hızlı ve güvenlidir: herkes sıcak tavaların ve bıçakların nerede olduğunu bilir. Birinin arkasından geçerken sen de “Heet!” ya da “Achter!” diye seslen. Sana bir iş mi söylendi? Tekrar et: “Ja, chef.” O zaman şef duyduğunu bilir. Yoğunlukta biri sana sert mi konuştu? Çoğu zaman bu, servis bitince geçer. Tatsızlık devam mı ediyor? O zaman sakin bir anda bunu konuş.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.p': "Arkandayım! Elimde sıcak bir tava var.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.s': "Çok yoğun. Şef sesleniyor: “Tafel zes, nu!” Lütfen demiyor. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.o1': "“Ja, chef” der ve yaparsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.o2': "Durur ve ona kaba olduğunu söylersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.o3': "Yaparsın, ama karşılık olarak hiçbir şey söylemezsin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.w': "Yoğunlukta kısa konuşmak normaldir ve kişisel değildir. Tekrar etmek, duyduğunu gösterir. Bu, mutfağı hızlı ve güvenli tutar.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.rounds': "Temizlik turun", // nieuw, nalezen
    'w.kantoor': "ofis", // nieuw, nalezen
    'w.verdieping': "kat (bir binanın 1. ya da 2. katı)", // nieuw, nalezen
    'w.gang': "koridor", // nieuw, nalezen
    'w.toiletpapier': "tuvalet kâğıdı", // nieuw, nalezen
    'w.zeep': "sabun", // nieuw, nalezen
    'w.bijvullen': "yeniden doldurmak, tamamlamak", // nieuw, nalezen
    's.rounds.1': "İkinci kattan başlıyorum.", // nieuw, nalezen
    's.rounds.2': "Tuvalet kâğıdı bitti.", // nieuw, nalezen
    's.rounds.3': "Sabunu dolduruyorum.", // nieuw, nalezen
    'c.rounds.q': "Üç numaralı ofisi yaptın mı?", // nieuw, nalezen
    'c.rounds.a': "Hayır, orada hâlâ biri çalışıyor.", // nieuw, nalezen
    'c.rounds': "İnsanların çalıştığı yerde temizlik", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.b': "Çoğu zaman başkaları hâlâ çalışırken temizlik yaparsın. Onlara selam ver ve sor: “Mag ik hier even schoonmaken?” Çoğu kişi evet der. Biri toplantıda ya da telefonda mı? O zaman sonra tekrar gel. Masadaki kâğıtların yerini değiştirme ve onları okuma: etraflarını temizle. Turun için belirli bir süren var. Süre işi iyi yapmak için çok mu kısa? Kimseye söylemeden oda atlama. Neyi yapamadığını ve nedenini amirine söyle.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.p': "İyi günler. Burayı temizleyebilir miyim?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.s': "Turun bugün daha uzun sürüyor: bir oda çok kirliydi. İki ofis yapılmadı. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.o1': "Amirine hangi iki ofis olduğunu ve nedenini söylersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.o2': "Eve gidersin ve kimsenin fark etmemesini umarsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.o3': "Onları çok hızlı yaparsın, yerleri silmeden.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.w': "Kirli bir ofis bulan müşteri şikâyet eder. Durumu bilen bir amir bunu açıklayabilir ya da sana daha fazla süre verebilir. Söylemek başarısızlık değildir.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.colours': "Renkler ve bezler", // nieuw, nalezen
    'w.doek': "bez", // nieuw, nalezen
    'w.spons': "sünger", // nieuw, nalezen
    'w.rood': "kırmızı", // nieuw, nalezen
    'w.blauw': "mavi", // nieuw, nalezen
    'w.geel': "sarı", // nieuw, nalezen
    'w.groen': "yeşil", // nieuw, nalezen
    's.colours.1': "Kırmızı bez tuvalet içindir.", // nieuw, nalezen
    's.colours.2': "Temiz bir bez al.", // nieuw, nalezen
    's.colours.3': "Burada hangi rengi kullanayım?", // nieuw, nalezen
    'c.colours.q': "Bu bezi çalışma masası için kullanabilir miyim?", // nieuw, nalezen
    'c.colours.a': "Hayır, kırmızı olan sadece tuvalet için.", // nieuw, nalezen
    'c.colours': "Her rengin bir yeri var", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.b': "Birçok temizlik şirketi renklerle çalışır. Bezin, süngerin ve kovanın her rengi tek bir yer içindir. Çoğu zaman kırmızı tuvalet için, mavi ise çalışma masaları ve masalar içindir. Böylece tuvaletteki kir bir masaya ya da mutfağa taşınmaz. Renkler her şirkette farklı olabilir, bu yüzden ilk gününde sor. Bir bez kirli mi, ya da yere mi düştü? Temiz bir tane al. Kullanılmış bezler çamaşır torbasına konur, arabaya geri değil. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.p': "Burada tuvalet için hangi renk kullanılıyor?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.s': "Mavi bezlerin bitti. Daha üç masa temizlemen gerekiyor. Sadece kırmızı bezlerin var. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.o1': "Önce yeni mavi bezler alırsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.o2': "Kırmızı bir bez kullanırsın: temiz temizdir.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.o3': "Üçü için de aynı mavi bezi yeniden kullanırsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.w': "Bir renk sistemi ancak herkes ona her zaman uyarsa işe yarar. O zaman kimse bir bezin nerede kullanıldığını merak etmek zorunda kalmaz.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.shophelp': "Müşteriye yardım etmek", // nieuw, nalezen
    'w.aanbieding': "kampanya (kısa bir süre için daha ucuz)", // nieuw, nalezen
    'w.korting': "indirim (daha az ödersin)", // nieuw, nalezen
    'w.uitverkocht': "tükendi", // nieuw, nalezen
    'w.magazijn': "depo", // nieuw, nalezen
    'w.tas': "çanta, poşet", // nieuw, nalezen
    'w.bestellen': "sipariş vermek", // nieuw, nalezen
    's.shophelp.1': "Maalesef o tükendi.", // nieuw, nalezen
    's.shophelp.2': "Yanında bir poşet ister misiniz?", // nieuw, nalezen
    's.shophelp.3': "Bu kahve kampanyada.", // nieuw, nalezen
    'c.shophelp.q': "Süt kaldı mı?", // nieuw, nalezen
    'c.shophelp.a': "Sizin için depoya bir bakayım.", // nieuw, nalezen
    'c.shophelp': "“Bilmiyorum” son söz değildir", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.b': "Bir müşteri bir şey soruyor ve sen cevabı bilmiyorsun. Sorun değil: kimse her şeyi bilmez. Ama sadece “nee” ya da “weet ik niet” deme ve çekip gitme. Şöyle de: “Ik vraag het even voor u”, ve bir iş arkadaşını çağır. Bir ürün tükendi mi? Ne zaman yeniden geleceğini söyle ya da ona benzer bir şey göster. Rafları doldurmakla meşgulken de müşteriye bak ve selam ver. Soruyu anlamadın mı? Müşteriden yavaşça tekrar söylemesini iste.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.p': "Bunu bilmiyorum. Sizin için sorayım.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.s': "Bir müşteri bir ürün soruyor. Kelimeyi bilmiyorsun. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.o1': "Şöyle dersin: “Ik vraag het even voor u.”", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.o2': "“Nee” der ve çalışmaya devam edersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.o3': "Gitsin diye rastgele bir yeri gösterirsin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.w': "Müşteri yeni olmana ya da hâlâ Hollandaca öğrenmene aldırmaz. Ama yardım alamamak müşteriyi rahatsız eder. Bir iş arkadaşını çağırmak iyi hizmettir.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.shoptrouble': "Zor anlar", // nieuw, nalezen
    'w.bedrijfsleider': "mağaza müdürü", // nieuw, nalezen
    'w.beveiliger': "güvenlik görevlisi", // nieuw, nalezen
    'w.dief': "hırsız", // nieuw, nalezen
    'w.stelen': "çalmak", // nieuw, nalezen
    'w.schreeuwen': "bağırmak", // nieuw, nalezen
    'w.geldterug': "para iadesi (paranı geri alırsın)", // nieuw, nalezen
    's.shoptrouble.1': "Mağaza müdürünü çağırıyorum.", // nieuw, nalezen
    's.shoptrouble.2': "Lütfen bağırmayın.", // nieuw, nalezen
    's.shoptrouble.3': "Sanırım biri bir şey çalıyor.", // nieuw, nalezen
    'c.shoptrouble.q': "Paramı hemen geri istiyorum!", // nieuw, nalezen
    'c.shoptrouble.a': "Anlıyorum. İş arkadaşımı çağırıyorum.", // nieuw, nalezen
    'c.shoptrouble': "Kızgın müşteri ya da hırsız: önce sen gelirsin", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.b': "Bazen bir müşteri kızar ya da birinin bir şey çaldığını görürsün. Senin güvenliğin önce gelir, her zaman. Kızgın bir müşteride: sakin kal, karşılık olarak bağırma ve mağaza müdürünü çağır. Bunu tek başına çözmek zorunda değilsin. Bir hırsız mı görüyorsun? Peşinden koşma, onu tutma ve kapının önünü kesme. Ne gördüğüne iyi bak ve hemen müdüre ya da güvenlik görevlisine söyle. Eşyaların yerine yenisi konabilir. Senin yerine konamaz. Sonrasında korktun mu? Bunu amirinle konuş. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.p': "Birinin çantasına bir şey koyduğunu görüyorum.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.s': "Bir adam montunun altına bir şişe koyuyor ve çıkışa yürüyor. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.o1': "Müdüre ya da güvenlik görevlisine söylersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.o2': "Peşinden koşar ve kolunu tutarsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.o3': "Kapının önünde durursun.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.w': "Durdurulan bir hırsız şiddete başvurabilir. Müdür ve güvenlik görevlisi ne yapılacağını bilir. Hiçbir ürün yaralanmana değmez.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.plantcare': "Bitkiye bakmak", // nieuw, nalezen
    'w.plantblad': "yaprak", // nieuw, nalezen
    'w.stengel': "sap, gövde", // nieuw, nalezen
    'w.bloem': "çiçek", // nieuw, nalezen
    'w.knippen': "kesmek (makasla)", // nieuw, nalezen
    'w.tomaat': "domates", // nieuw, nalezen
    'w.rijp': "olgun (toplanmaya hazır)", // nieuw, nalezen
    's.plantcare.1': "Bu domates henüz olgun değil.", // nieuw, nalezen
    's.plantcare.2': "Yaprağı kesip alıyorum.", // nieuw, nalezen
    's.plantcare.3': "Sap kırılmış.", // nieuw, nalezen
    'c.plantcare.q': "Hangi domatesleri toplayayım?", // nieuw, nalezen
    'c.plantcare.a': "Sadece kırmızıları. Yeşiller henüz olgun değil.", // nieuw, nalezen
    'c.plantcare': "Temiz eller, sağlıklı bitkiler", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.b': "Bitkiler de hastalanabilir. Bir virüs eller, eldivenler, bıçaklar ve kıyafetlerle bitkiden bitkiye geçer. Bir serada tek bir hasta bitki, binlerce bitkinin atılması anlamına gelebilir. Bu yüzden kapıda sıkı kurallar vardır: ellerini yıka, şirketin iş kıyafetlerini giy ve ayak dezenfektan havuzundan geç. Birçok sera, öğle yemeğinde kendi domatesini, biberini ya da salatalığını getirmene izin vermez. Garip görünen bir bitki mi görüyorsun? Ona dokunma. Hangi sırada olduğunu amirine söyle. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.p': "On ikinci sırada hasta bir bitki var.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.s': "Garip sarı lekeleri olan bir bitki görüyorsun. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.o1': "Dokunmazsın ve amirine söylersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.o2': "Onu söker ve yanında götürürsün.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.o3': "Lekeli yaprakları kesersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.w': "Hasta bir bitkiye dokunduğunda virüs seninle birlikte sonraki bitkilere gider. Amirin onu güvenli şekilde nasıl kaldıracağını bilir.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.outdoors': "Dışarıda çalışmak", // nieuw, nalezen
    'w.land': "tarla (bitkilerin dışarıda yetiştiği yer)", // nieuw, nalezen
    'w.regen': "yağmur", // nieuw, nalezen
    'w.zon': "güneş", // nieuw, nalezen
    'w.laarzen': "çizmeler", // nieuw, nalezen
    'w.regenpak': "yağmurluk takımı (yağmura karşı ceket ve pantolon)", // nieuw, nalezen
    'w.onweer': "gök gürültülü fırtına", // nieuw, nalezen
    's.outdoors.1': "Yağmur yağıyor. Yağmurluk takımımı giyiyorum.", // nieuw, nalezen
    's.outdoors.2': "Çizmelerim ıslak.", // nieuw, nalezen
    's.outdoors.3': "Bugün güneş çok güçlü.", // nieuw, nalezen
    'c.outdoors.q': "Gök gürültülü fırtına geliyor. Ne yapacağız?", // nieuw, nalezen
    'c.outdoors.a': "Duruyoruz ve içeri giriyoruz.", // nieuw, nalezen
    'c.outdoors': "Güneş, yağmur ve gök gürültüsü", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.b': "Dışarıda her türlü havada çalışırsın. Güneşte: başını ve cildini ört, güneş kremi kullan ve sık sık su iç. Yağmurda: yağmurluk takımını ve çizmelerini giy, molada da kuru kıyafetler giy. Islaklık ve soğuk seni hasta eder ve yavaşlatır. Gök mü gürlüyor? O zaman dur ve içeri gir, ya da bir arabaya veya minibüse bin. Ağacın altına değil, açık tarlaya da değil. İş için yağmurluk ya da çizme mi lazım? Kendin satın almadan önce işverenine sor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.p': "Fırtına geliyor. İçeri girelim mi?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.s': "Tarladasın. Yakında gök gürültüsü duyuyorsun. Sıran neredeyse bitti. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.o1': "Durur ve içeri ya da minibüse girersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.o2': "Önce sırayı çabucak bitirirsin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.o3': "Büyük ağacın altında beklersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.w': "Yıldırım en yüksek noktaya düşer, düz bir tarlada bu sensin. Sıra bir çeyrek saat bekleyebilir.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.drawing': "Çizim ve ölçü", // nieuw, nalezen
    'w.tekening': "çizim (parçanın nasıl olması gerektiğini gösterir)", // nieuw, nalezen
    'w.maat': "ölçü, boyut", // nieuw, nalezen
    'w.millimeter': "milimetre", // nieuw, nalezen
    'w.schuifmaat': "kumpas (çok hassas ölçer)", // nieuw, nalezen
    'w.passen': "uymak, yerine oturmak", // nieuw, nalezen
    'w.bout': "cıvata", // nieuw, nalezen
    's.drawing.1': "Çizimdeki ölçü ne?", // nieuw, nalezen
    's.drawing.2': "Bu parça uymuyor.", // nieuw, nalezen
    's.drawing.3': "İki milimetre fazla büyük.", // nieuw, nalezen
    'c.drawing.q': "Cıvata uyuyor mu?", // nieuw, nalezen
    'c.drawing.a': "Hayır. Bir kez daha ölçüyorum.", // nieuw, nalezen
    'c.drawing': "Çizim ne diyorsa o", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.b': "Atölyede çizimde ne yazıyorsa onu yaparsın, göze aşağı yukarı doğru görüneni değil. Ölçüler milimetredir ve bir milimetre bile fazla olabilir. Bir parça uymuyor mu? Zorlama ve deliği “azıcık” büyütme. Yeniden ölç ve çizime bak. Çizimi okuyamıyor musun, ya da bir ölçü mü eksik? Başlamadan önce sor. Bir soru bir dakikanı alır. Yanlış bir parça malzemeye ve saatlere mal olur.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.p': "Bu ölçüyü okuyamıyorum. Bir bakabilir misin?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.s': "Bir parça uymuyor: bir milimetre fazla büyük. Çekiçle vurursan girer. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.o1': "Yeniden ölçer ve ne yapman gerektiğini sorarsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.o2': "Çekiçle vurarak sokarsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.o3': "Biraz taşlarsın ve hiçbir şey söylemezsin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.w': "Zorla giren bir parça sonradan, müşterideyken kırılabilir. Bildirirsen sebep bulunabilir.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.weld': "Kaynak ve sıcak iş", // nieuw, nalezen
    'w.lassen': "kaynak yapmak (metali çok yüksek ısıyla birleştirmek)", // nieuw, nalezen
    'w.laskap': "kaynak maskesi", // nieuw, nalezen
    'w.rook': "duman", // nieuw, nalezen
    'w.afzuiging': "duman emme sistemi (dumanı uzaklaştırır)", // nieuw, nalezen
    'w.afkoelen': "soğumak", // nieuw, nalezen
    'w.brandwond': "yanık (sıcaktan olan yara)", // nieuw, nalezen
    's.weld.1': "Kaynak maskemi takıyorum.", // nieuw, nalezen
    's.weld.2': "Duman emme sistemini çalıştır.", // nieuw, nalezen
    's.weld.3': "Dikkat, metal hâlâ sıcak.", // nieuw, nalezen
    'c.weld.q': "Bunu şimdi alabilir miyim?", // nieuw, nalezen
    'c.weld.a': "Hayır, bekle. Önce soğuması lazım.", // nieuw, nalezen
    'c.weld': "Sıcak metal soğuk görünür", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.b': "Kaynak çok parlak bir ışık verir. Kaynak maskesi olmadan ona bakma, uzaktan bile: gözlerin yanabilir ve bunu ancak saatler sonra hissedersin. Yakınında bir iş arkadaşın mı kaynak yapıyor? Başka yöne bak ya da paravanın arkasında dur. Yeni kaynak yapılmış ya da taşlanmış metal normal görünür, ama çok sıcaktır. Onu çıplak elle tutma. Kaynak dumanı akciğerlerine zararlıdır: duman emme sistemini çalıştır. Yanık mı oldu? Hemen suyla soğut, en az on dakika, ve bildir. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.p': "Bu soğudu mu?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.s': "Yanında bir iş arkadaşın kaynak yapıyor. Sende kaynak maskesi yok. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.o1': "Başka yöne bakar ve paravanın arkasında durursun.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.o2': "Biraz izlersin: bundan bir şey öğrenebilirsin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.o3': "Gözlerini yarı kapatırsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.w': "Kaynak ışığı gözlerini yakar, yandan ve uzaktan da. Acıyı ancak sonra hissedersin, çoğu zaman gece.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.carparts': "Arabanın parçaları", // nieuw, nalezen
    'w.motor': "motor", // nieuw, nalezen
    'w.motorkap': "kaput (motorun üstündeki kapak)", // nieuw, nalezen
    'w.rem': "fren", // nieuw, nalezen
    'w.lamp': "lamba, far", // nieuw, nalezen
    'w.ruitenwisser': "silecek", // nieuw, nalezen
    'w.stoel': "koltuk, sandalye", // nieuw, nalezen
    's.carparts.1': "Kaputu aç.", // nieuw, nalezen
    's.carparts.2': "Sol ön lamba bozuk.", // nieuw, nalezen
    's.carparts.3': "Frenler ses yapıyor.", // nieuw, nalezen
    'c.carparts.q': "Ne duyuyorsun?", // nieuw, nalezen
    'c.carparts.a': "Motor garip bir ses çıkarıyor.", // nieuw, nalezen
    'c.carparts': "Araba müşterinindir", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.b': "Tamirhanedeki araba senin değildir: müşterinindir. Binmeden önce koltuğa ve direksiyona kılıf geçir, içeride de temiz ellerle çalış. Koltuğu, aynaları ve radyoyu olduğu gibi bırak. Koltuğu oynatman mı gerekti? Eski yerine getir. Arabadaki kişisel eşyalara dokunma. Bir çizik ya da leke mi yaptın? Hemen amirine söyle. Bunu evde fark eden müşteri bir daha gelmez.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.p': "Bir çizik yaptım. Özür dilerim.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.s': "Bir müşterinin araba kapısında küçük bir çizik yapıyorsun. Kimse görmedi. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.o1': "Hemen amirine söylersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.o2': "Hiçbir şey söylemezsin: çok küçük.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.o3': "Bir bezle silersin ve geçmesini umarsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.w': "Herkes bazen hata yapar. Bir tamirhane çiziği onarabilir ya da müşteriye dürüstçe söyleyebilir. Saklanan bir çizik tamirhanenin iyi adını zedeler.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.carsafe': "Benzin, gaz ve elektrik", // nieuw, nalezen
    'w.krik': "kriko (arabanın bir tarafını kaldırır)", // nieuw, nalezen
    'w.benzine': "benzin", // nieuw, nalezen
    'w.elektrischeauto': "elektrikli araba", // nieuw, nalezen
    'w.oranje': "turuncu", // nieuw, nalezen
    'w.morsen': "dökmek (yanlışlıkla)", // nieuw, nalezen
    'w.lap': "iş bezi (kirli işler için bez)", // nieuw, nalezen
    's.carsafe.1': "Benzin kokusu alıyorum.", // nieuw, nalezen
    's.carsafe.2': "Yağ dökülmüş. Bir bez getiriyorum.", // nieuw, nalezen
    's.carsafe.3': "Turuncu kablolara dokunmuyorum.", // nieuw, nalezen
    'c.carsafe.q': "Bu arabada çalışabilir miyim?", // nieuw, nalezen
    'c.carsafe.a': "Henüz değil. Bu elektrikli bir araba.", // nieuw, nalezen
    'c.carsafe': "Turuncu kablolar ve çalışan motorlar", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.b': "Elektrikli ya da hibrit bir arabada çok yüksek gerilimli bir batarya vardır. Bunun kabloları turuncudur. Onlara dokunma ve onları sökme: önce özel eğitimli bir tamirci arabayı güvenli hâle getirmelidir. Arabanın yanında bir levha ya da koni mi var? O zaman uzak dur. Kapalı yerde çalışan bir motor, koklayamadığın ve göremediğin bir gaz çıkarır ve bu gaz öldürebilir. Yani: egzoz hortumunu tak ya da kapıları aç. Benzin kokusu mu alıyorsun? Kıvılcım yok, sigara yok. Hemen amirine söyle. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.p': "Bu araba güvenli hâle getirildi mi?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.s': "Elektrikli bir arabada tekerlek değiştirmen gerekiyor. Arabanın altında gevşek bir turuncu kablo görüyorsun. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.o1': "Hiçbir şeye dokunmaz ve eğitimli tamirciyi çağırırsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.o2': "Kabloyu elinle geri itersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.o3': "Kuru bir bezle geri itersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.w': "Elektrikli bir arabanın bataryasında, araba kapalıyken bile öldürecek kadar elektrik vardır. Bu parçalara sadece eğitimi olan kişi dokunabilir.", // nieuw, nalezen // nagelezen AI 22 nov
    // Logistiek at four lessons per unit (14 November 2026).
    'l.vancheck': "Kamyoneti kontrol etmek", // nieuw, nalezen
    'w.schade': "hasar", // nieuw, nalezen
    'w.deuk': "göçük", // nieuw, nalezen
    'w.spiegel': "ayna", // nieuw, nalezen
    'w.tanken': "yakıt almak (kamyonete yakıt koymak)", // nieuw, nalezen
    'w.opladen': "şarj etmek (elektrikli bir kamyonet, bir telefon)", // nieuw, nalezen
    'w.parkeren': "park etmek", // nieuw, nalezen
    's.vancheck.1': "Kapıda bir göçük var.", // nieuw, nalezen
    's.vancheck.2': "Bu hasar zaten vardı.", // nieuw, nalezen
    's.vancheck.3': "Önce daha yakıt almam gerekiyor.", // nieuw, nalezen
    'c.vancheck.q': "Kamyonette her şey yolunda mı?", // nieuw, nalezen
    'c.vancheck.a': "Hayır, ayna kırık.", // nieuw, nalezen
    'c.vancheck': "Sürmeden önce bak", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.b': "İlk seferinden önce kamyonetin etrafında bir tur at. Bir göçük, bir çizik ya da kırık bir ayna mı görüyorsun? Bir fotoğraf çek ve yola çıkmadan önce bildir. Böylece herkes hasarın zaten orada olduğunu bilir. Seferin sırasında bir şey mi oldu? Küçük olsa bile aynı gün bildir. Hasarı saklamak sonra daha büyük sorunlar çıkarır. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.p': "Kamyonette hasar var. İşte bir fotoğraf.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.s': "Sabah kamyonette yeni bir göçük görüyorsun. Onu sen yapmadın. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.o1': "Bir fotoğraf çeker ve sürmeden önce bildirirsin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.o2': "Hiçbir şey söylemezsin: bu senin göçüğün değil.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.o3': "Bekler ve birinin sorup sormayacağına bakarsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.w': "Sürmeden önce bildirirsen, kimse bunu senin yaptığını düşünemez. Saati olan bir fotoğraf herkes için açıktır.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.delay': "Yolda gecikmeler", // nieuw, nalezen
    'w.file': "trafik sıkışıklığı", // nieuw, nalezen
    'w.vertraging': "gecikme (planlanandan daha geç kalırsın)", // nieuw, nalezen
    'w.omleiding': "alternatif güzergâh (yol kapalı olduğu için başka bir yol)", // nieuw, nalezen
    'w.navigatie': "navigasyon (yolu gösteren uygulama)", // nieuw, nalezen
    'w.planner': "planlamacı (güzergâhları yapan kişi)", // nieuw, nalezen
    'w.retour': "iade (geri giden bir paket)", // nieuw, nalezen
    's.delay.1': "Trafik sıkışıklığındayım.", // nieuw, nalezen
    's.delay.2': "Yarım saat gecikmem var.", // nieuw, nalezen
    's.delay.3': "Bu paket iade olarak geri gidiyor.", // nieuw, nalezen
    'c.delay.q': "Şimdi neredesin?", // nieuw, nalezen
    'c.delay.a': "Alternatif güzergâhtayım. On dakika geç kalacağım.", // nieuw, nalezen
    'c.delay': "Geç mi kalıyorsun? Zamanında söyle", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.b': "Trafik sıkışıklığı ya da kapalı bir yol senin suçun değil. Ama geç kalacağını öğrenir öğrenmez planlamacıya söyle. O zaman planlamacı müşterilere haber verebilir ya da güzergâhı değiştirebilir. Önce güvenli bir yerde dur: araç sürerken telefon elindeyken arama yapma. Ve zamanı geri kazanmak için daha hızlı sürme. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.p': "Trafik sıkışıklığındayım. Yarım saat geç kalacağım.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.s': "Bir yol kapalı. Alternatif güzergâh sana otuz dakika kaybettiriyor. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.o1': "Güvenli şekilde durabildiğin anda planlamacıya söylersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.o2': "Zamanı geri kazanmak için daha hızlı sürersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.o3': "Hiçbir şey söylemezsin: belki kimse fark etmez.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.w': "Planlamacı bunu erken öğrenirse, müşteriler haber alır ve kimse boşuna beklemez. Daha hızlı sürmek tehlikelidir ve neredeyse hiç zaman kazandırmaz.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Instructies", a new basis unit (u.do, 14 November 2026).
    'u.do': "Talimatlar", // nieuw, nalezen
    'l.putdown': "Onu oraya koy", // nieuw, nalezen
    'w.zetten': "koymak (dik duran bir şey: kutu, kova)", // nieuw, nalezen
    'w.leggen': "koymak, yatırmak (düz yatan bir şey)", // nieuw, nalezen
    'w.brengen': "getirmek, götürmek (bir yere ya da bir kişiye)", // nieuw, nalezen
    'w.geven': "vermek", // nieuw, nalezen
    'w.vasthouden': "tutmak", // nieuw, nalezen
    'w.loslaten': "bırakmak", // nieuw, nalezen
    's.putdown.1': "Onu oraya koy.", // nieuw, nalezen
    's.putdown.2': "Bunu yemekhaneye götür.", // nieuw, nalezen
    's.putdown.3': "Bunu bir saniye tut.", // nieuw, nalezen
    'c.putdown.q': "Bunu bir saniye tutar mısın?", // nieuw, nalezen
    'c.putdown.a': "Evet. Nereye koyayım?", // nieuw, nalezen
    'c.putdown': "Tuttuğunu söyle", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.b': "Bir şeyi birlikte mi taşıyorsunuz, ya da bir iş arkadaşın sana ağır bir şey mi veriyor? Onu iyi tuttuğunda “Ik heb hem” de. O zaman iş arkadaşın bırakmanın güvenli olduğunu bilir. Kendin mi bırakmak istiyorsun? Önce sor: “Heb je hem?” Ve cevabı bekle. Bu her iş yerinde normaldir. Böylece eşyalar ayaklara ve ellere düşmez.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.p': "Tuttum. Bırakabilirsin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.s': "Bir iş arkadaşın sana ağır bir kutu veriyor. Onu henüz iyi tutmuyorsun. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.o1': "“wacht” der ve önce daha iyi tutarsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.o2': "Hiçbir şey söylemezsin: o görür.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.o3': "Hızlıca alırsın, o beklemesin diye.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.w': "İş arkadaşın, senin tuttuğunu düşündüğünde bırakır. Tek bir kelime sana iyi tutman için zaman verir.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.onoff': "Çalıştır ve durdur, aç ve kapat", // nieuw, nalezen
    'w.aanzetten': "çalıştırmak, açmak (bir makineyi, ışığı)", // nieuw, nalezen
    'w.opendoen': "açmak", // nieuw, nalezen
    'w.dichtdoen': "kapatmak", // nieuw, nalezen
    'w.drukken': "basmak (bir düğmeye)", // nieuw, nalezen
    'w.draaien': "çevirmek", // nieuw, nalezen
    'w.stoppen': "durmak, durdurmak", // nieuw, nalezen
    's.onoff.1': "Kapıyı kapat.", // nieuw, nalezen
    's.onoff.2': "Düğmeye bas.", // nieuw, nalezen
    's.onoff.3': "Dur! Onu kapat.", // nieuw, nalezen
    'c.onoff.q': "Kapı kapalı mı?", // nieuw, nalezen
    'c.onoff.a': "Hayır. Şimdi kapatıyorum.", // nieuw, nalezen
    'c.onoff': "Dur demek dur demektir", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.b': "Biri “Stop!” diye mi bağırıyor? Hemen dur, nedenini bilmesen bile. Sonra sor. Kısa ve yüksek sesli bir kelime burada öfke değildir: iş arkadaşları birbirini böyle güvende tutar. Kendin mi tehlikeli bir şey görüyorsun? Sen de “Stop!” diye bağır, yıllardır burada çalışan birine bile. Kimse bunu garip bulmaz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.p': "Dur! Bir saniye bekle.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.s': "Bir makineyi çalıştırıyorsun. Bir iş arkadaşın “Stop!” diye bağırıyor. Sen bir sorun görmüyorsun. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.o1': "Hemen durursun ve nedenini sonra sorarsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.o2': "Devam edersin: bir sorun görmüyorsun.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.o3': "Önce neden durman gerektiğini sorarsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.w': "İş arkadaşın senin görmediğin bir şeyi görüyor olabilir. Önce dur, sonra konuş: bu herkesi güvende tutar.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.fillempty': "İt, çek, doldur", // nieuw, nalezen
    'w.duwen': "itmek", // nieuw, nalezen
    'w.trekken': "çekmek", // nieuw, nalezen
    'w.vullen': "doldurmak", // nieuw, nalezen
    'w.leegmaken': "boşaltmak", // nieuw, nalezen
    'w.schoonmaken': "temizlemek", // nieuw, nalezen
    'w.vol': "dolu", // nieuw, nalezen
    's.fillempty.1': "İtme, çek.", // nieuw, nalezen
    's.fillempty.2': "Bu dolu. Onu boşalt.", // nieuw, nalezen
    's.fillempty.3': "Bunu bir temizle.", // nieuw, nalezen
    'c.fillempty.q': "Doldu mu?", // nieuw, nalezen
    'c.fillempty.a': "Evet. Boşaltıyorum.", // nieuw, nalezen
    'c.fillempty': "Bitti mi? Söyle", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.b': "Bir işi bitirdin mi? Söyle: “Ik ben klaar.” Ve sonra ne yapabileceğini sor. Biri seni görene kadar sessizce beklemek, doğru olmasa bile, çalışmak istemiyormuşsun gibi görünebilir. Sıradaki işi soran iş arkadaşları bir süre sonra çoğu zaman daha ilginç işler alır. Yeni bir şey öğrenmek mi istiyorsun? Onu da sor: “Mag ik dat ook leren?”", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.p': "Bitirdim. Başka ne yapabilirim?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.s': "İşini bitirdin. Amirin başka bir şeyle meşgul. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.o1': "Bitirdiğini söyler ve sırada ne olduğunu sorarsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.o2': "Amirin seni görene kadar beklersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.o3': "Mola verirsin: işin bitti.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.w': "Bir amir her şeyi göremez. Bitirdiğini söylediğinde iş devam eder ve daha fazlasını yapmak istediğini gösterirsin.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.order': "Önce bu, sonra şu", // nieuw, nalezen
    'w.nu': "şimdi", // nieuw, nalezen
    'w.dan': "sonra", // nieuw, nalezen
    'w.altijd': "her zaman", // nieuw, nalezen
    'w.genoeg': "yeterli, yeter", // nieuw, nalezen
    'w.meer': "daha fazla", // nieuw, nalezen
    'w.alles': "her şey", // nieuw, nalezen
    's.order.1': "Önce bu, sonra şu.", // nieuw, nalezen
    's.order.2': "Bu kadar yeter.", // nieuw, nalezen
    's.order.3': "Bunu her zaman böyle yap.", // nieuw, nalezen
    'c.order.q': "Bunu şimdi yapabilir misin?", // nieuw, nalezen
    'c.order.a': "Evet. Önce bu, peki sonra?", // nieuw, nalezen
    'c.order': "Aynı anda çok iş mi? Önce hangisi, sor", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.b': "Bazen tek bir cümlede üç iş alırsın. Bunu akılda tutmak zordur, Hollandacayı iyi konuşanlar için bile. Hangisinin önce geldiğini sor: “Wat moet ik eerst doen?” İşleri yazabilir, ya da parmaklarınla sayıp geri söyleyebilirsin. Birini mi unuttun? Geri dön ve sor. Bu, tahmin etmekten daha iyidir.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.p': "Bu çok fazla. Önce ne yapayım?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.s': "Amirin sana çok hızlı üç iş veriyor. Sadece ilkini hatırlıyorsun. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.o1': "Hemen işleri bir kez daha söylemesini istersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.o2': "İlkini yapar ve gerisini hatırlamayı umarsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.o3': "Hiçbir şey yapmazsın: üçünü de bilmiyorsun.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.w': "Hemen sormak on saniye sürer. Sonra amirin gitmiş olabilir, o zaman ya beklersin ya da tahmin edersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'u.afbouw': "Fayans, sıva ve boya", // nieuw, nalezen
    'l.tiletools': "Fayansçının aletleri", // nieuw, nalezen
    'w.lijmkam': "dişli mala, tarak (fayans yapıştırıcısını çizgi çizgi yayar)", // nieuw, nalezen
    'w.troffel': "mala", // nieuw, nalezen
    'w.tegelsnijder': "fayans kesici", // nieuw, nalezen
    'w.nijptang': "kerpeten (fayanstan küçük parçalar koparmak için)", // nieuw, nalezen
    'w.mixer': "mikser, karıştırıcı (kovada yapıştırıcı ya da sıva karıştırır)", // nieuw, nalezen
    'w.duimstok': "katlanır metre", // nieuw, nalezen
    's.tiletools.1': "Bana dişli malayı bir ver.", // nieuw, nalezen
    's.tiletools.2': "Fayansı fayans kesiciyle kesiyorum.", // nieuw, nalezen
    's.tiletools.3': "Önce katlanır metreyle ölç.", // nieuw, nalezen
    'c.tiletools.q': "Mikser nerede?", // nieuw, nalezen
    'c.tiletools.a': "Kovanın orada, kapının yanında.", // nieuw, nalezen
    'c.tiletools': "Yapıştırıcı sertleşmeden aletlerini temizle", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.b': "Fayans yapıştırıcısı ve sıva çabuk sertleşir, aletlerinin üstünde de. Bu yüzden dişli malayı, malayı ve mikseri hemen bir kova suda temizle, moladan önce de. Sertleşmiş yapıştırıcı çıkmaz ve üstünde sert yapıştırıcı olan dişli mala kötü çizgiler yapar. Kirli suyu lavaboya ya da gidere dökme: tıkanır. Suyun nereye dökülebileceğini sor. Mikser: iki elinle tut ve yavaş çalıştır. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.p': "Dişli malayı bir temizliyorum.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.s': "Mola zamanı. Dişli malan ıslak yapıştırıcıyla dolu. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.o1': "Suda temizler, sonra molaya çıkarsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.o2': "Bırakırsın: iş bitince temizlersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.o3': "Yapıştırıcı kovasına koyarsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.w': "Fayans yapıştırıcısı molada da sertleşir. Temiz bir dişli mala iyi çizgiler yapar ve fayanslar iyi yapışır. Üstünde sertleşmiş yapıştırıcı olursa çok iş çıkar, ya da yeni bir alet gerekir.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.tiling': "Fayans, yapıştırıcı ve orta çizgi", // nieuw, nalezen
    'w.tegel': "fayans, karo", // nieuw, nalezen
    'w.tegellijm': "fayans yapıştırıcısı", // nieuw, nalezen
    'w.tegelkruisje': "derz artısı (fayansların arasına konan küçük artı)", // nieuw, nalezen
    'w.hartlijn': "orta çizgi, aks (fayansa ondan başlanır)", // nieuw, nalezen
    'w.tegelplaat': "fayans levhası (fayans döşemeyi çalışmak için bir levha)", // nieuw, nalezen
    'w.potlood': "kurşun kalem", // nieuw, nalezen
    's.tiling.1': "Fayans yapıştırıcısı hâlâ ıslak.", // nieuw, nalezen
    's.tiling.2': "Fayansların arasına derz artısı koy.", // nieuw, nalezen
    's.tiling.3': "Önce kurşun kalemle orta çizgiyi çiz.", // nieuw, nalezen
    'c.tiling.q': "Fayanslara nereden başlıyorum?", // nieuw, nalezen
    'c.tiling.a': "Ortadan, orta çizgiden.", // nieuw, nalezen
    'c.tiling': "Orta çizgiden başla, az yapıştırıcıyla", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.b': "Fayansçı bir köşeden başlamaz. Önce kurşun kalem ve su terazisiyle orta çizgiyi çizersin ve oradan başlarsın. O zaman iki uçtaki kesik fayanslar aynı boyda olur. Sadece kısa sürede fayansla kapatabileceğin kadar yapıştırıcı sür. Çok uzun bekleyen yapıştırıcının üstünde kuru bir kabuk oluşur ve o zaman fayanslar iyi yapışmaz. Her kesişme noktasına bir derz artısı koy, böylece bütün derzler aynı olur. Sık sık su terazisiyle kontrol et: eğri bir fayansı şimdi düzeltmek kolay, yarın zor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.p': "Bir seferde çok fazla yapıştırıcı sürmüyorum.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.s': "Uzun bir telefon konuşmasından sonra duvardaki yapıştırıcının üstünde kuru bir kabuk var. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.o1': "Kazıyıp alır, taze yapıştırıcı sürersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.o2': "Fayansları yine de üstüne bastırırsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.o3': "Süngerle ıslatır ve devam edersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.w': "Üstünde kuru kabuk olan yapıştırıcı fayansı iyi tutmaz. Sonra fayans yerinden çıkabilir ve o zaman iş yeniden yapılmalıdır.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.plaster': "Sıva yapmak", // nieuw, nalezen
    'w.stucspaan': "perdah malası (sıvayı düzlemek için düz çelik mala)", // nieuw, nalezen
    'w.oplegspaan': "sıvacı tablası (üstünde sıva tutulan düz levha)", // nieuw, nalezen
    'w.spackmes': "spatula (geniş, düz bir bıçak)", // nieuw, nalezen
    'w.rei': "mastar (sıvayı düzlemek için uzun, düz bir çubuk)", // nieuw, nalezen
    'w.sponsspaan': "sünger mala", // nieuw, nalezen
    'w.hoekprofiel': "köşe profili (düz bir köşe için metal şerit)", // nieuw, nalezen
    's.plaster.1': "Önce köşe profilini köşeye koy.", // nieuw, nalezen
    's.plaster.2': "Duvarı perdah malasıyla pürüzsüz yap.", // nieuw, nalezen
    's.plaster.3': "Mastarı duvarın üstünden çek.", // nieuw, nalezen
    'c.plaster.q': "Duvar kurudu mu?", // nieuw, nalezen
    'c.plaster.a': "Hayır, bir gün daha bekle.", // nieuw, nalezen
    'c.plaster': "Sıvanın kuruması zaman alır", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.b': "Yeni sıva uzun süre ıslak kalır. Islak bir duvar, kuru bir duvardan daha koyudur. Boyacı ancak duvar her yerde kuruyunca başlayabilir ve bu günler ya da haftalar sürebilir. Isıtıcıyla daha hızlı kurutma: o zaman sıva çatlayabilir. Biri çok erken mi boyamak istiyor? Duvarın henüz kurumadığını söyle. Başlamadan önce de zemini, pencereleri ve prizleri ört: sıva zor çıkar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.p': "Duvar hâlâ ıslak. Henüz boyayamazsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.s': "Boyacı yarın başlamak istiyor. Yeni sıvada hâlâ koyu lekeler var. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.o1': "Boyacıya söylersin: duvar henüz kuru değil.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.o2': "Bu gece önüne bir ısıtıcı koyarsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.o3': "Bir şey söylemezsin: boyacı görür.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.w': "Koyu lekeler, sıvanın hâlâ ıslak olduğunu gösterir. Islak duvardaki boya kalkabilir ve ısıtıcı çatlak yapabilir. Beklemek, işi yeniden yapmaktan daha ucuzdur.", // nieuw, nalezen // nagelezen AI 22 nov
    // l.paint and l.prep (u.afbouw), "Metselen, hout en vastmaken" (u.ruwbouw), three lessons of Rekenen (u.numbers) and "Machines en gereedschap" (u.machines), 20-21 November 2026.
    'u.ruwbouw': "Duvar örmek, ahşap ve sabitlemek", // nieuw, nalezen
    'u.machines': "Makineler ve aletler", // nieuw, nalezen
    'l.shapes': "Şekiller", // nieuw, nalezen
    'w.vierkant': "kare", // nieuw, nalezen
    'w.rechthoek': "dikdörtgen", // nieuw, nalezen
    'w.driehoek': "üçgen", // nieuw, nalezen
    'w.cirkel': "daire", // nieuw, nalezen
    'w.kubus': "küp", // nieuw, nalezen
    'w.balk': "blok, dikdörtgen prizma (uzun bir kutu şekli)", // nieuw, nalezen
    's.shapes.1': "Fayans bir kare.", // nieuw, nalezen
    's.shapes.2': "Bu oda bir dikdörtgen.", // nieuw, nalezen
    's.shapes.3': "Bir tuğlanın şekli dikdörtgen prizmadır.", // nieuw, nalezen
    'c.shapes.q': "Bu bir kare mi?", // nieuw, nalezen
    'c.shapes.a': "Hayır, bir dikdörtgen. Boyu eninden uzun.", // nieuw, nalezen
    'c.shapes': "Dikdörtgeni iki çapraz çizgiyle kontrol et", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.b': "Bir oda, bir zemin ya da bir çerçeve çoğu zaman dikdörtgendir. Ama köşeler gerçekten dik mi? Bunun kolay bir kontrolü var. Bir köşeden karşı köşeye ölç. Sonra diğer iki köşenin arasını ölç. İki uzunluk aynı mı? O zaman köşeler doğru. Aynı değil mi? O zaman şekil biraz eğik ve fayanslar ya da zemin iyi oturmaz. Başlamadan önce amirine söyle.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.p': "Bu iki ölçü aynı değil.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.s': "Bir zemini köşeden köşeye, iki yönde ölçüyorsun. Biri daha uzun. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.o1': "Başlamadan önce amirine söylersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.o2': "Bir köşeden başlarsın, olur.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.o3': "Sadece bir tarafı yeniden ölçersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.w': "İki farklı uzunluk, köşelerin dik olmadığı anlamına gelir. O zaman fayanslar ya da tahtalar oturmaz. Bunu başlamadan önce bilmek daha iyidir.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.angles': "Açılar ve yuvarlak şekiller", // nieuw, nalezen
    'w.hoek': "açı", // nieuw, nalezen
    'w.graad': "derece (°)", // nieuw, nalezen
    'w.geodriehoek': "iletkili gönye (açıölçerli üçgen cetvel)", // nieuw, nalezen
    'w.boog': "kemer, kavis", // nieuw, nalezen
    'w.cilinder': "silindir", // nieuw, nalezen
    'w.parallellogram': "paralelkenar", // nieuw, nalezen
    's.angles.1': "Bu açı doksan derece.", // nieuw, nalezen
    's.angles.2': "Açıyı iletkili gönyeyle ölç.", // nieuw, nalezen
    's.angles.3': "Borunun şekli silindirdir.", // nieuw, nalezen
    'c.angles.q': "Bu açı kaç derece?", // nieuw, nalezen
    'c.angles.a': "Kırk beş. Dik açının yarısı.", // nieuw, nalezen
    'c.angles': "Büyük bir köşeyi 3, 4 ve 5 ile kontrol et", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.b': "Şantiyede çoğu zaman dik açıyı kontrol edersin: zemindeki bir duvar, bir odanın köşesi. Küçük bir köşeyi gönyeyle ya da iletkili gönyeyle kontrol edersin. Büyük bir köşe için eski bir yöntem var. Bir tarafta 3 metre, öbür tarafta 4 metre ölç ve ikisine de bir işaret koy. İşaretten işarete tam 5 metre mi? O zaman açı 90 derecedir. Daha küçük de olur: 30, 40 ve 50 santimetre.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.p': "Bu açı dik değil.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.s': "Yeni bir duvarın büyük bir köşesini kontrol etmen gerekiyor. Gönyen çok küçük. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.o1': "3, 4 ve 5 metre ölçersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.o2': "Uzaktan bakarsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.o3': "Yine de küçük gönyeyi kullanırsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.w': "3, 4 ve 5 ile büyük bir köşeyi sadece bir şerit metreyle tam olarak kontrol edebilirsin. Gözle bakınca bir köşe doğru görünebilir ama yine de yanlış olabilir.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.size': "Uzunluk, alan ve hacim", // nieuw, nalezen
    'w.lengte': "uzunluk", // nieuw, nalezen
    'w.breedte': "genişlik", // nieuw, nalezen
    'w.hoogte': "yükseklik", // nieuw, nalezen
    'w.oppervlakte': "alan (uzunluk çarpı genişlik, metrekare olarak)", // nieuw, nalezen
    'w.inhoud': "hacim (uzunluk çarpı genişlik çarpı yükseklik)", // nieuw, nalezen
    'w.centimeter': "santimetre", // nieuw, nalezen
    's.size.1': "Alan, uzunluk çarpı genişliktir.", // nieuw, nalezen
    's.size.2': "Hacim, uzunluk çarpı genişlik çarpı yüksekliktir.", // nieuw, nalezen
    's.size.3': "On milimetre bir santimetredir.", // nieuw, nalezen
    'c.size.q': "Zemin kaç metrekare?", // nieuw, nalezen
    'c.size.a': "Dörde beş metre, yani yirmi metrekare.", // nieuw, nalezen
    'c.size': "Ne kadar gerektiğini hesapla, biraz da ekle", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.b': "Kaç fayans, ne kadar boya, ne kadar kum? Bunu alanla ya da hacimle hesaplarsın. Alan: uzunluk çarpı genişlik, metrekare olarak. Hacim: uzunluk çarpı genişlik çarpı yükseklik, metreküp olarak. Her şeyi aynı birimle ölç: hepsi metre ya da hepsi santimetre. Ölçüleri yaz, aklında tutma. Sonra kesilen parçalar ve hatalar için biraz fazlasını ekle. Emin değil misin? Bir iş arkadaşından hesabını kontrol etmesini iste.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.p': "Ölçüleri yazıyorum.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.s': "Zemini ölçtün. Fayansları bugün sipariş etmen gerekiyor. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.o1': "Alanı hesaplar ve biraz eklersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.o2': "Tam alan kadar sipariş edersin, bir fayans bile fazla değil.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.o3': "Tahmin edersin: zemini gördün.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.w': "Bazı fayansları her zaman kesersin, bazıları da kırılır. Biraz fazlası olursa yarıda durup yeniden sipariş etmen gerekmez.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.paint': "Boya yapmak", // nieuw, nalezen
    'w.verf': "boya", // nieuw, nalezen
    'w.kwast': "boya fırçası (geniş bir fırça)", // nieuw, nalezen
    'w.penseel': "ince fırça (köşeler ve kenarlar için)", // nieuw, nalezen
    'w.roerstok': "karıştırma çubuğu", // nieuw, nalezen
    'w.tape': "maskeleme bandı", // nieuw, nalezen
    'w.strijkvaatje': "boya kabı (boya yaparken elinde tuttuğun küçük kap)", // nieuw, nalezen
    's.paint.1': "Önce boyayı iyice karıştır.", // nieuw, nalezen
    's.paint.2': "Kenarı bantla kapat.", // nieuw, nalezen
    's.paint.3': "Boya kabına biraz boya koy.", // nieuw, nalezen
    'c.paint.q': "Hangi fırçayı alayım?", // nieuw, nalezen
    'c.paint.a': "Duvar için geniş olanı, köşeler için ince fırçayı.", // nieuw, nalezen
    'c.paint': "İyice karıştır ve yukarıdan aşağı boya", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.b': "Bir süre bekleyen boya, kutunun dibinde koyu olur. Bu yüzden önce karıştırma çubuğuyla, renk her yerde aynı olana kadar iyice karıştır. Büyük kutudan boyama: boya kabına biraz boya koy ve kutuyu yeniden kapat. O zaman boya bozulmaz. Yukarıdan aşağı boya, böylece damlalar ıslak boyanın üstüne düşer ve onları hâlâ fırçayla düzeltebilirsin. Duvar için geniş fırçayı, köşeler için ince fırçayı kullan. Sonunda fırçaları hemen temizle.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.p': "Önce boyayı iyice karıştırıyorum.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.s': "Eski bir boya kutusu açıyorsun. Üstü sulu, dibi koyu. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.o1': "Önce çubukla iyice karıştırırsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.o2': "Üstteki sulu boyayla boyarsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.o3': "Her yeri sulu olana kadar su eklersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.w': "Rengin bir kısmı kutunun dibindedir. Karıştırmazsan duvarda lekeler ve çizgiler olur.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.prep': "Boyaya hazırlık", // nieuw, nalezen
    'w.plamuurmes': "macun spatulası (delikleri doldurmak için)", // nieuw, nalezen
    'w.schuurpapier': "zımpara kâğıdı", // nieuw, nalezen
    'w.verfkrabber': "boya kazıyıcı", // nieuw, nalezen
    'w.stoffertje': "küçük süpürge fırçası (toz süpürmek için)", // nieuw, nalezen
    'w.schuren': "zımparalamak", // nieuw, nalezen
    'w.afplakken': "bantlamak (bir kenarı bantla kapatmak)", // nieuw, nalezen
    's.prep.1': "Önce eski boyayı kazı.", // nieuw, nalezen
    's.prep.2': "Ahşabı zımparalayıp pürüzsüz yap.", // nieuw, nalezen
    's.prep.3': "Tozu küçük süpürge fırçasıyla süpür.", // nieuw, nalezen
    'c.prep.q': "Artık boyayabilir miyim?", // nieuw, nalezen
    'c.prep.a': "Hayır, önce zımparala ve deliği kapat.", // nieuw, nalezen
    'c.prep': "İyi boya işi boyadan önce başlar", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.b': "Boya kirin, tozun ya da gevşek eski boyanın üstüne iyi yapışmaz. Bu yüzden önce gevşek boyayı boya kazıyıcıyla kazı. Delikleri macun ve macun spatulasıyla doldur ve macunun kurumasını bekle. Sonra zımparalayıp pürüzsüz yap. Zımparadan sonra tozu küçük süpürge fırçasıyla süpür, kenarlardan da. En son, temiz kalması gereken yerleri bantla kapat, mesela pencereleri ve prizleri. Zımpara ince toz yapar: toz maskesi tak ve hangisi olduğunu sor. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.p': "Önce zımpara, sonra boya.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.s': "Kapıyı zımparaladın. Üstünde hâlâ toz var. İş arkadaşın şimdi boyamak istiyor. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.o1': "Önce tozu fırçayla süpürürsün.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.o2': "Boyamasına izin verirsin: boya tozu kapatır.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.o3': "Tozu elinle silersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.w': "Tozun üstündeki boya iyi yapışmaz. Sonra pul pul kalkar ve bütün iş yeniden yapılmalıdır.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.brick': "Duvar örmek", // nieuw, nalezen
    'w.speciekuip': "harç teknesi", // nieuw, nalezen
    'w.metseltroffel': "duvarcı malası", // nieuw, nalezen
    'w.baksteen': "tuğla", // nieuw, nalezen
    'w.cement': "çimento", // nieuw, nalezen
    'w.voegijzer': "derz demiri (tuğlaların arasındaki derzleri düzlemek için)", // nieuw, nalezen
    'w.handveger': "el fırçası", // nieuw, nalezen
    's.brick.1': "Harç teknesinde hâlâ çimento var.", // nieuw, nalezen
    's.brick.2': "Derzi derz demiriyle düzle.", // nieuw, nalezen
    's.brick.3': "Duvarı el fırçasıyla temizle.", // nieuw, nalezen
    'c.brick.q': "Kaç tuğlan kaldı?", // nieuw, nalezen
    'c.brick.a': "Bir palet daha. Bugün için yeter.", // nieuw, nalezen
    'c.brick': "Çalışırken duvarı temiz tut", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.b': "Tuğlaları dizerken harç ıslaktır ve birkaç saatte sertleşir. Bu yüzden temiz çalış. Derzden taşan harcı hemen malayla kazı. Derzleri, harç biraz katılaşınca derz demiriyle düzle, harç hâlâ ıslakken değil. Sonra duvarı el fırçasıyla fırçala. Tuğlanın önündeki sert harcı çıkarmak çok zordur. Gün sonunda duvarın üstünü ört, böylece yağmur harcı yıkamaz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.p': "Derzleri düzlüyorum.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.s': "Gün sonunda tuğlaların önünde harç var. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.o1': "Sertleşmeden şimdi fırçayla temizlersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.o2': "Bırakırsın: gelecek hafta temizlersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.o3': "Duvarı bol suyla yıkarsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.w': "Taze harç fırçayla kolayca çıkar. Sert harç tuğlada kalır ve o zaman duvar güzel görünmez.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.wall': "Düz bir duvar", // nieuw, nalezen
    'w.metseltouw': "duvarcı ipi (düz bir sıra için ip)", // nieuw, nalezen
    'w.klos': "ip takozu (ipi köşede tutar)", // nieuw, nalezen
    'w.lagenmaatlat': "sıra cetveli (her sıranın yüksekliğini gösterir)", // nieuw, nalezen
    'w.profiel': "köşe dikmesi (duvarın ucunda düz bir direk)", // nieuw, nalezen
    'w.kop': "baş (tuğlanın kısa ucu)", // nieuw, nalezen
    'w.strek': "boy (tuğlanın uzun yanı)", // nieuw, nalezen
    's.wall.1': "Duvarcı ipini gergin çek.", // nieuw, nalezen
    's.wall.2': "Köşe dikmesi düz durmalı.", // nieuw, nalezen
    's.wall.3': "Tuğlayı uzun yanı dışarı bakacak şekilde koy.", // nieuw, nalezen
    'c.wall.q': "Bu sıra ne kadar yüksek olmalı?", // nieuw, nalezen
    'c.wall.a': "Sıra cetveline bak.", // nieuw, nalezen
    'c.wall': "İp duvarı düz tutar", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.b': "Duvarcı gözle örmez. Önce duvarın iki ucunda köşe dikmeleri düz durur. Aralarına, bir sonraki sıranın yüksekliğinde duvarcı ipini gergin çekersin. Her tuğlayı ipe göre koy, ama ipi itme. Sıra cetveli her sıranın ne kadar yüksek olması gerektiğini gösterir. Sık sık su terazisiyle kontrol et. Eğri bir tuğlayı harç ıslakken düzeltmek kolay, yarın düzeltmek çok zor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.p': "Duvarcı ipi gergin mi?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.s': "Duvarcı ipi gevşek ve ortada biraz sarkıyor. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.o1': "Önce gergin çeker, sonra devam edersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.o2': "Tuğlaları yine de altına dizersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.o3': "Tuğlaları gözle dizersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.w': "Gevşek bir ip ortada sarkar, o zaman sıra da sarkar. Gergin bir ip düz bir sıra verir.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.wood': "Ahşapla çalışmak", // nieuw, nalezen
    'w.handzaag': "el testeresi", // nieuw, nalezen
    'w.kapzaag': "sırtlı testere (sert sırtı olan küçük bir testere)", // nieuw, nalezen
    'w.houtbeitel': "ağaç keskisi", // nieuw, nalezen
    'w.handschaaf': "el rendesi", // nieuw, nalezen
    'w.timmermanshamer': "marangoz çekici", // nieuw, nalezen
    'w.houtenhamer': "tokmak (tahta bir çekiç)", // nieuw, nalezen
    's.wood.1': "Tahtayı ölçüsüne göre kes.", // nieuw, nalezen
    's.wood.2': "Kenarı rendeleyip pürüzsüz yap.", // nieuw, nalezen
    's.wood.3': "Keskiye tokmakla vur.", // nieuw, nalezen
    'c.wood.q': "Hangi testere lazım?", // nieuw, nalezen
    'c.wood.a': "Sırtlı testere, bu küçük parça için.", // nieuw, nalezen
    'c.wood': "Kısa kalan düzeltilemez", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.b': "Çok kısa kesilen ahşap yeniden uzatılamaz. Bu yüzden iki kez ölç ve kesmeden önce çizgiyi çiz. Çizginin yanından, ihtiyacın olmayan parçanın tarafından kes. Ahşabı sabit tut: tezgâhta ya da bir işkenceyle, dizinin üstünde değil. Bırak işi testere yapsın, uzun ve sakin hareketlerle. Keskiyi vücudundan ve öbür elinden uzağa doğru it. Keskiyi ve rendeyi keskin tut: kör bir alet daha kolay kayar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.p': "Bir kez daha ölçüyorum.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.s': "Bir tahtayı ölçüsüne göre kesmen gerekiyor. Bir kez, hızlıca ölçtün. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.o1': "Yeniden ölçer, sonra çizgiyi çizersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.o2': "Şimdi kesersin: büyük ihtimalle doğrudur.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.o3': "Çizgi çizmeden, gözle kesersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.w': "Çok uzunsa yeniden kesebilirsin, çok kısayı düzeltemezsin. Yeniden ölçmek bir dakika sürer; yeni bir tahta çok daha fazlasını.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.square': "İşaretlemek", // nieuw, nalezen
    'w.winkelhaak': "gönye (dik açıyı gösterir)", // nieuw, nalezen
    'w.verstekhaak': "açılı gönye (45 derece)", // nieuw, nalezen
    'w.zwaaihaak': "ayarlı gönye (açıyı kendin ayarlarsın)", // nieuw, nalezen
    'w.kruishout': "çizecek (kenar boyunca çizgi çizer)", // nieuw, nalezen
    'w.passer': "pergel (daire çizer)", // nieuw, nalezen
    'w.aftekenen': "işaretlemek (keseceğin yeri çizmek)", // nieuw, nalezen
    's.square.1': "Çizgiyi gönyeyle işaretle.", // nieuw, nalezen
    's.square.2': "Ayarlı gönyeyi doğru açıya getir.", // nieuw, nalezen
    's.square.3': "Pergelle bir daire çiz.", // nieuw, nalezen
    'c.square.q': "Açı dik mi?", // nieuw, nalezen
    'c.square.a': "Evet, gönye tam oturuyor.", // nieuw, nalezen
    'c.square': "Tek bir düz kenardan işaretle", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.b': "Kesmeden ya da delmeden önce yerini işaretlersin. Sivri bir kurşun kalem kullan: kalın bir çizgi tam değildir. Ahşabın düz bir kenarını seç ve her şeyi o kenardan ölç. Gönyenin kalın kısmını kenara sıkıca dayat ve çizgiyi çeliğin boyunca çiz. Kullanmayacağın parçaya küçük bir çarpı çiz. Sonra çizginin yanından, çarpının olduğu taraftan kesersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.p': "Önce işaretliyorum.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.s': "Kurşun kalemin kör ve kalın bir çizgi çiziyor. Bir tahtayı işaretlemek istiyorsun. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.o1': "Önce kalemi açar, sonra çizersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.o2': "Çizgiyi yine de çizersin, olur.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.o3': "Tırnağınla işaretlersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.w': "Kalın bir çizgi birkaç milimetre genişliğindedir. O zaman nereden keseceğini bilemezsin ve parça tam olmaz.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.screw': "Matkaplar ve vidalar", // nieuw, nalezen
    'w.accuboor': "akülü matkap", // nieuw, nalezen
    'w.boormachine': "elektrikli matkap (kablolu)", // nieuw, nalezen
    'w.bitje': "tornavida ucu, bits", // nieuw, nalezen
    'w.plug': "dübel", // nieuw, nalezen
    'w.schroevendraaier': "tornavida", // nieuw, nalezen
    'w.spijker': "çivi", // nieuw, nalezen
    's.screw.1': "Bir delik del ve içine dübel tak.", // nieuw, nalezen
    's.screw.2': "Bu vidaya hangi uç uyar?", // nieuw, nalezen
    's.screw.3': "Çiviyi ahşaba çak.", // nieuw, nalezen
    'c.screw.q': "Akülü matkap nerede?", // nieuw, nalezen
    'c.screw.a': "Şarj aletinde, neredeyse dolu.", // nieuw, nalezen
    'c.screw': "Delmeden önce bak", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.b': "Bir duvarı delmeden önce arkasında ne olduğunu düşün. Borular ve kablolar çoğu zaman bir prizden ya da bir anahtardan dümdüz yukarı, aşağı ya da yana gider. Nerede olduklarını sor ya da bir dedektörle kontrol et. Dübelle aynı boyda bir matkap ucu seç ve deliği dübelden biraz daha derin del. Vidaya uygun ucu kullan: yanlış uç kayar ve vidanın başını bozar. Delerken koruyucu gözlük tak.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.p': "Burayı delebilir miyim?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.s': "Bir prizin tam üstüne delik delmen gerekiyor. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.o1': "Önce kablonun nereden geçtiğini sorarsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.o2': "Delersin: orada asla kablo olmaz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.o3': "Yavaş delersin, o zaman güvenlidir.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.w': "Bir prizden çoğu zaman dümdüz yukarı bir kablo gider. Kabloyu delmek tehlikelidir ve onarımı çok iş çıkarır.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.fix': "Bir şeyleri sabitlemek", // nieuw, nalezen
    'w.bevestigen': "sabitlemek (bir şeyi duvara sağlam takmak)", // nieuw, nalezen
    'w.vastzetten': "sıkmak (sıkı olana kadar çevirmek)", // nieuw, nalezen
    'w.lijmen': "yapıştırmak", // nieuw, nalezen
    'w.inbussleutel': "alyan anahtarı (altıgen anahtar)", // nieuw, nalezen
    'w.kruisschroevendraaier': "yıldız tornavida (artı uçlu)", // nieuw, nalezen
    'w.platteschroevendraaier': "düz tornavida", // nieuw, nalezen
    's.fix.1': "Rafı duvara sabitle.", // nieuw, nalezen
    's.fix.2': "Cıvatayı alyan anahtarıyla sık.", // nieuw, nalezen
    's.fix.3': "Düz tornavidayı al, yıldızı değil.", // nieuw, nalezen
    'c.fix.q': "Bu rafı nasıl sabitlerim?", // nieuw, nalezen
    'c.fix.a': "İki dübel ve iki vidayla.", // nieuw, nalezen
    'c.fix': "Sıkı, ama fazla sıkı değil", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.b': "Bir vida ya da cıvata sıkı olmalı, ama fazla sıkı değil. Çok sert çevirirsen diş bozulur ya da ahşap yarılır. Artık dönmeyene kadar çevir, sonra dur. Akülü matkapta önce numaralı halkayı düşük bir sayıya getir. Duvardaki bir raf, duvara uygun dübel ister: taş duvar, ince bir levha duvardan başka dübel ister. Yapıştırıcı zaman ister: parçaları birbirine bastır, bir işkenceyle tut ve yapıştırıcı kuruyana kadar bekle.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.p': "Raf iyi sabitlendi mi?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.s': "İki ahşap parçayı yapıştırdın. İş arkadaşın onu hemen kullanmak istiyor. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.o1': "Söylersin: önce yapıştırıcının kuruması lazım.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.o2': "Kullanmasına izin verirsin: yapıştırıcı çabuktur.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.o3': "Bir dakika elinde tutarsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.w': "Islak yapıştırıcı henüz tutmaz. Çok erken kullanırsan parçalar yine ayrılır. O zaman baştan başlaman gerekir.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.atmachine': "Makinenin başında", // nieuw, nalezen
    'w.bedieningspaneel': "kontrol paneli (bir makinenin düğmeleri ve ekranı)", // nieuw, nalezen
    'w.startknop': "başlatma düğmesi (yeşil)", // nieuw, nalezen
    'w.hendel': "kol, manivela", // nieuw, nalezen
    'w.afscherming': "makine koruması (hareketli parçaların üstündeki kapak)", // nieuw, nalezen
    'w.sensor': "sensör (orada bir şey olup olmadığını görür)", // nieuw, nalezen
    'w.signaallamp': "sinyal lambası (makinenin üstündeki renkli ışıklar)", // nieuw, nalezen
    's.atmachine.1': "Yeşil başlatma düğmesine bas.", // nieuw, nalezen
    's.atmachine.2': "Sinyal lambası kırmızı. Bir arıza var.", // nieuw, nalezen
    's.atmachine.3': "Makine korumasını asla çıkarma.", // nieuw, nalezen
    'c.atmachine.q': "Makine neden sürekli duruyor?", // nieuw, nalezen
    'c.atmachine.a': "Sensör kutuyu iyi görmüyor.", // nieuw, nalezen
    'c.atmachine': "Koruma yerinde kalır", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.b': "Bir makinenin hareketli parçaları bir eli, bir giysi kolunu ya da saçı bir saniyeden kısa sürede içeri çekebilir. Koruma bunun için vardır. Onu asla çıkarma ve makine çalışırken asla arkasına uzanma. Bir koruma ya da sensör çalışmıyor mu? O zaman makine güvenli değildir: makineyi durdur ve ekip liderine söyle. Bir şey mi sıkıştı? Önce makineyi durdur ve sen çalışırken kimsenin onu çalıştıramayacağından emin ol. Bunun nasıl yapıldığı şirketten şirkete değişir: başlamadan önce açıklama iste. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.p': "Makine koruması kırık.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.s': "Bir kutu makineye, korumanın hemen arkasına sıkıştı. Makine çalışıyor. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.o1': "Önce makineyi durdurur, sonra yardım çağırırsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.o2': "Hızlıca uzanıp kutuyu çekip çıkarırsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.o3': "Makine çalışırken korumayı açarsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.w': "Çalışan bir makine, sen tepki veremeden elini içeri çekebilir. Durdurmak bir an sürer; yaralı bir el aylar sürer.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.inspect': "Ölçmek ve kontrol etmek", // nieuw, nalezen
    'w.weegschaal': "terazi", // nieuw, nalezen
    'w.meetklok': "komparatör (çok küçük farkları ölçer)", // nieuw, nalezen
    'w.loep': "büyüteç", // nieuw, nalezen
    'w.monster': "numune (kontrol etmek için aldığın bir ürün)", // nieuw, nalezen
    'w.afkeurbak': "hatalı ürün kutusu (iyi olmayan ürünler için)", // nieuw, nalezen
    'w.teller': "sayaç (ürünleri sayar)", // nieuw, nalezen
    's.inspect.1': "Ürünü teraziye koy.", // nieuw, nalezen
    's.inspect.2': "Bu ürün hasarlı. Hatalı ürün kutusuna gidiyor.", // nieuw, nalezen
    's.inspect.3': "Etikete büyüteçle bakıyorum.", // nieuw, nalezen
    'c.inspect.q': "Ne sıklıkla numune alıyorum?", // nieuw, nalezen
    'c.inspect.a': "Her saat bir tane. Listeye yaz.", // nieuw, nalezen
    'c.inspect': "Kontrol ettiğin şeyi yaz", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.b': "Fabrikada iş sırasında ürünleri kontrol edersin: tartarsın, ölçersin ya da yakından bakarsın. Her kontrolü hemen saatiyle birlikte listeye yaz. Sonra, akıldan değil. Bir ürün doğru değil mi? Onu hatalı ürün kutusuna koy ve sonrakilere dikkatle bak. Daha fazla ürün mü yanlış? O zaman makinede bir sorun var. Hemen ekip liderine söyle. Erken bulunan bir sorun çok ürünü kurtarır. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.p': "Daha fazla ürün yanlış.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.s': "Terazi, art arda üç ürünün çok hafif olduğunu gösteriyor. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.o1': "Hemen ekip liderine söylersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.o2': "Onları yeniden banta koyarsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.o3': "Bir şey söylemezsin: olur böyle şeyler.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.w': "Art arda üç yanlış ürün, makinede bir sorun olduğunu gösterir. Ne kadar erken söylersen o kadar az ürün boşa gider.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.packing': "Paketleme", // nieuw, nalezen
    'w.verpakking': "ambalaj", // nieuw, nalezen
    'w.krimpfolie': "shrink folyo (ısıyla sıkılaşan plastik film)", // nieuw, nalezen
    'w.sealmachine': "kapatma makinesi (paketi ısıyla kapatır)", // nieuw, nalezen
    'w.vulmateriaal': "dolgu malzemesi (kutudaki hava yastıkları ya da kâğıt)", // nieuw, nalezen
    'w.afbreekmes': "maket bıçağı", // nieuw, nalezen
    'w.tapepistool': "koli bandı tabancası", // nieuw, nalezen
    's.packing.1': "Kutuya dolgu malzemesi koy.", // nieuw, nalezen
    's.packing.2': "Kutuyu koli bandı tabancasıyla kapat.", // nieuw, nalezen
    's.packing.3': "Kapatma makinesi sıcak. Dikkat et!", // nieuw, nalezen
    'c.packing.q': "Bir kutuya kaç ürün giriyor?", // nieuw, nalezen
    'c.packing.a': "On iki. Listede yazıyor.", // nieuw, nalezen
    'c.packing': "Vücudundan uzağa doğru kes", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.b': "Paketleme hızlı bir iştir ve maket bıçağı çok keskindir. Her zaman vücudundan ve öbür elinden uzağa doğru kes. Her kesimden sonra bıçağı geri it, bıçağı bir anlığına bıraktığında da. Kör bir parçayı dikkatle kır ve eski bıçaklar için olan kutuya at, normal çöpe değil. Kapatma makinesi ve shrink folyo için sıcak hava tabancası çok ısınır: sıcak parçalara dokunma. Her kutuyu da kontrol et: doğru ürün, doğru sayı ve etiket düz mü. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.p': "Önce bıçağı geri itiyorum.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.s': "Maket bıçağını bir anlığına masaya koyuyorsun. Bıçak hâlâ dışarıda. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.o1': "Önce bıçağı geri itersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.o2': "Bırakırsın: birazdan yine lazım olacak.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.o3': "Böyle cebine koyarsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.w': "Masada ya da cepte açık bir bıçak seni ya da bir iş arkadaşını kesebilir. Geri itmek bir saniye sürer.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.upkeep': "Bakım", // nieuw, nalezen
    'w.persluchtpistool': "hava tabancası", // nieuw, nalezen
    'w.steeksleutel': "açık ağızlı anahtar", // nieuw, nalezen
    'w.oliekannetje': "yağdanlık", // nieuw, nalezen
    'w.smeerpistool': "gres pompası", // nieuw, nalezen
    'w.lekbak': "damlama tavası (sızan yağı toplar)", // nieuw, nalezen
    'w.poetsdoek': "temizlik bezi", // nieuw, nalezen
    's.upkeep.1': "Yağ sızıyor. Altına damlama tavasını koy.", // nieuw, nalezen
    's.upkeep.2': "Yağı temizlik beziyle sil.", // nieuw, nalezen
    's.upkeep.3': "Hava tabancasını asla birine doğru tutma.", // nieuw, nalezen
    'c.upkeep.q': "Makineyi ne zaman yağlıyoruz?", // nieuw, nalezen
    'c.upkeep.a': "Her pazartesi, ilk vardiyadan önce.", // nieuw, nalezen
    'c.upkeep': "Temiz bir makine sorunlarını gösterir", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.b': "Küçük bakım çoğu zaman işin bir parçasıdır: silmek, yağlamak ve gres yapmak. Bunu sadece makine kapalıyken ve nasıl yapıldığını öğrendiysen yap. Temiz bir makineyi kontrol etmek kolaydır: bir sızıntıyı ya da gevşek bir parçayı hemen görürsün. Yerdeki yağ kaygandır. Sızıntının altına bir damlama tavası koy, yeri sil ve ekip liderine söyle. Yağlı bezleri özel çöp kutusuna at. Hava tabancasını asla bir insana doğru tutma ve onunla asla giysilerini ya da cildini temizleme. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.p': "Makine yağ sızdırıyor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.s': "Makinenin altında küçük bir yağ birikintisi görüyorsun. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.o1': "Altına bir damlama tavası koyar ve bildirirsin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.o2': "Bırakırsın: sadece biraz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.o3': "Üstüne biraz kâğıt koyar ve devam edersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.w': "Bir sızıntı büyür ve yerdeki yağ insanları kaydırır. Erken bulunursa küçük bir onarımdır.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Elektra, leidingen en metaal" (u.install, 21 November 2026).
    'u.install': "Elektrik, borular ve metal", // nieuw, nalezen
    'l.wiring': "Kablo bağlantısı", // nieuw, nalezen
    'w.draad': "tel (bir kablonun içindeki tek tel)", // nieuw, nalezen
    'w.stopcontact': "priz (duvarda)", // nieuw, nalezen
    'w.schakelaar': "anahtar (ışık için)", // nieuw, nalezen
    'w.lasklem': "klemens (telleri birleştirir)", // nieuw, nalezen
    'w.striptang': "kablo sıyırma pensesi", // nieuw, nalezen
    'w.kabelgoot': "kablo kanalı (kablolar için bir kanal)", // nieuw, nalezen
    's.wiring.1': "Telin ucundan bir santimetre sıy.", // nieuw, nalezen
    's.wiring.2': "Telleri klemense sabitle.", // nieuw, nalezen
    's.wiring.3': "Kablolar kablo kanalına girer.", // nieuw, nalezen
    'c.wiring.q': "Hangi tel nereye gidiyor?", // nieuw, nalezen
    'c.wiring.a': "Kahverengi kahverengiye, mavi maviye.", // nieuw, nalezen
    'c.wiring': "Renkler telin ne yaptığını söyler", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.b': "Bir binada tellerin sabit renkleri vardır. Kahverengi (bazen siyah ya da gri) elektriği getirir. Mavi geri döner. Yeşil-sarı topraktır: insanları korur ve asla başka bir şey için kullanılmaz. Aynı rengi aynı renge bağla. Teli sadece klemense sığacak kadar soy: dışarıda hiç çıplak bakır kalmamalı. Teli içeri it, sonra sabit olduğunu kontrol etmek için hafifçe çek. Hangi telin hangisi olduğundan emin değil misin? Dur ve sor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.p': "Toprak hangi renk?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.s': "Bir lamba bağlıyorsun. Klemensten bir parça bakır dışarı çıkıyor. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.o1': "Teli kısaltır ve yeniden bağlarsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.o2': "Bırakırsın: lamba çalışıyor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.o3': "Etrafına bir parça bant sararsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.w': "Klemensin dışındaki çıplak bakır bir şeye değebilir. Bu, elektrik çarpmasına ya da kısa devreye yol açabilir, aylar sonra bile.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.testing': "Ölçmek ve güvenli çalışmak", // nieuw, nalezen
    'w.multimeter': "multimetre (elektriği ölçer)", // nieuw, nalezen
    'w.spanningzoeker': "kontrol kalemi (küçük lambalı bir tornavida)", // nieuw, nalezen
    'w.meterkast': "sigorta kutusu", // nieuw, nalezen
    'w.zekering': "sigorta (bir sorun olduğunda elektriği keser)", // nieuw, nalezen
    'w.hangslot': "asma kilit", // nieuw, nalezen
    'w.aardedraad': "toprak teli (yeşil-sarı)", // nieuw, nalezen
    's.testing.1': "Sigorta attı.", // nieuw, nalezen
    's.testing.2': "Şaltere bir asma kilit tak.", // nieuw, nalezen
    's.testing.3': "Önce multimetreyle ölç.", // nieuw, nalezen
    'c.testing.q': "Sigorta kutusunu açabilir miyim?", // nieuw, nalezen
    'c.testing.a': "Hayır, onu elektrikçi yapar.", // nieuw, nalezen
    'c.testing': "Kapalı, kilitli, ölçülmüş", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.b': "Elektrik işine başlamadan önce üç adım at. Kapat: sigorta kutusundaki doğru sigortayı, sadece duvardaki anahtarı değil. Kilitle: üstüne kendi asma kilidini tak ve anahtarı yanında tut, böylece kimse onu yeniden açamaz. Ölç: bir kontrol kalemi ya da multimetreyle gerçekten elektrik olmadığını kontrol et. Ancak ondan sonra başlarsın. Bir sigorta tekrar tekrar mı atıyor? Onu açmaya devam etme: amirine söyle. Elektrik işini sadece sana izin verildiyse yap. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.p': "Artık üzerinde elektrik yok.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.s': "Sigortayı kapattın. Bir iş arkadaşın diyor ki: “Şimdi başla, kapalı.” Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.o1': "Kilitler ve önce ölçersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.o2': "Başlarsın: iş arkadaşın biliyor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.o3': "Kontrol etmek için tele hızlıca dokunursun.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.w': "Bazen yanlış sigorta kapalıdır ya da biri onu yeniden açar. Bir kilit ve bir ölçüm, gerçekten güvenli olduğunu gösterir.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.pipes': "Borular ve su", // nieuw, nalezen
    'w.buis': "boru", // nieuw, nalezen
    'w.koppeling': "rakor (iki boruyu birleştirir)", // nieuw, nalezen
    'w.pijpsnijder': "boru kesici", // nieuw, nalezen
    'w.waterpomptang': "papağan pense", // nieuw, nalezen
    'w.afsluiter': "vana (suyu keser)", // nieuw, nalezen
    'w.teflontape': "teflon bant (borunun dişi için beyaz bant)", // nieuw, nalezen
    's.pipes.1': "Vanayı kapat.", // nieuw, nalezen
    's.pipes.2': "Boruyu boru kesiciyle kes.", // nieuw, nalezen
    's.pipes.3': "Dişin etrafına teflon bant sar.", // nieuw, nalezen
    'c.pipes.q': "Rakor hâlâ sızdırıyor mu?", // nieuw, nalezen
    'c.pipes.a': "Biraz. Biraz daha sıkacağım.", // nieuw, nalezen
    'c.pipes': "Önce su kapalı, bir de kova hazır", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.b': "Bir su borusunu açmadan önce vanayı kapat. Sonra daha aşağıdaki bir musluğu aç, böylece boru boşalır. Çalıştığın yerin altına bir kova ve bir bez koy. Bakır boruyu testereyle değil, boru kesiciyle kes: uç yuvarlak ve temiz kalır. Rakoru sıkıca sık, ama fazla sert değil. İşin bitince suyu yavaşça aç ve damla olup olmadığına bak. Bıraktığın küçük bir sızıntı su hasarına dönüşür.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.p': "Su kapalı mı?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.s': "Yeni bir rakor taktın. Suyu açıyorsun. Her dakika küçük bir damla düşüyor. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.o1': "Suyu kapatır, rakoru sıkar ya da yeniden yaparsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.o2': "Bırakırsın: sadece bir damla.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.o3': "Altına bir kova koyar ve eve gidersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.w': "Dakikada bir damla, haftada birçok litre eder. Su, yere ya da alttaki tavana zarar verebilir.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.metalwork': "Metal işleme", // nieuw, nalezen
    'w.bankschroef': "mengene (bir parçayı tezgâhta sıkıca tutar)", // nieuw, nalezen
    'w.vijl': "eğe (metali elle düzeltmek için)", // nieuw, nalezen
    'w.ijzerzaag': "demir testeresi (metal için bir testere)", // nieuw, nalezen
    'w.kolomboormachine': "sütunlu matkap (ayaklı büyük bir matkap)", // nieuw, nalezen
    'w.draadtap': "kılavuz (bir deliğe diş açar)", // nieuw, nalezen
    'w.braam': "çapak (metali kestikten sonra kalan keskin kenar)", // nieuw, nalezen
    's.metalwork.1': "Metali mengeneye sıkıştır.", // nieuw, nalezen
    's.metalwork.2': "Çapağı eğeyle al.", // nieuw, nalezen
    's.metalwork.3': "Ellerini matkaptan uzak tut.", // nieuw, nalezen
    'c.metalwork.q': "Kenar neden bu kadar keskin?", // nieuw, nalezen
    'c.metalwork.a': "Üstünde hâlâ çapak var.", // nieuw, nalezen
    'c.metalwork': "Sıkıştır, asla elle tutma", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.b': "Sütunlu matkapta küçük bir parçayı asla elinde tutma. Matkap onu yakalayıp çok hızlı döndürebilir. Onu mengeneye sıkıştır. Uzun saçını bağla ve dönen bir matkapta eldiven giyme: eldiveni içeri çekebilir. Koruyucu gözlük tak. Testereyle kestikten ya da deldikten sonra metalde çapak olur: keskin bir kenar. Parçayı eline almadan ya da birine vermeden önce onu eğeyle al. Metal talaşlarını elinle değil, bir fırçayla süpür.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.p': "Önce onu sıkıştırıyorum.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.s': "Küçük bir metal parçasına delik delmen gerekiyor. Mengene başka bir tezgâhta. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.o1': "Mengeneyi getirir ve parçayı sıkıştırırsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.o2': "Elinle sıkıca tutarsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.o3': "Eldiven giyer ve tutarsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.w': "Matkap küçük bir parçayı yakalayıp döndürebilir. O zaman parça eline çarpar. Mengenede ise yerinde durur.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Assemblage en montage" (u.montage, 21 November 2026).
    'u.montage': "Montaj", // nieuw, nalezen
    'l.assembly': "Montaj hattında", // nieuw, nalezen
    'w.werkinstructie': "iş talimatı (adımların yazılı olduğu bir kâğıt)", // nieuw, nalezen
    'w.onderdelenbak': "parça kutusu", // nieuw, nalezen
    'w.mal': "fikstür (parçayı doğru yerde tutar)", // nieuw, nalezen
    'w.rolbaan': "makaralı konveyör", // nieuw, nalezen
    'w.montagetafel': "montaj tezgâhı", // nieuw, nalezen
    'w.voetpedaal': "ayak pedalı (ayağınla bastığın bir düğme)", // nieuw, nalezen
    's.assembly.1': "Önce iş talimatını oku.", // nieuw, nalezen
    's.assembly.2': "Parça kutusu neredeyse boş.", // nieuw, nalezen
    's.assembly.3': "Parçayı fikstüre koy.", // nieuw, nalezen
    'c.assembly.q': "Şimdi hangi adım geliyor?", // nieuw, nalezen
    'c.assembly.a': "Dördüncü adım. İş talimatına bak.", // nieuw, nalezen
    'c.assembly': "Adımları izle, hep aynı sırayla", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.b': "Montaj hattında her adımın kendi yeri ve sırası vardır. İş talimatı bunları gösterir, çoğu zaman resimlerle. Adımları her seferinde aynı sırayla yap, daha hızlı bir yol bildiğini düşündüğünde de. Başka bir sıra, iyi görünen ama çalışmayan bir ürün çıkarabilir. Bir kutu neredeyse boş mu? Zamanında söyle, böylece hat durmaz. Daha iyi olabilecek bir adım mı görüyorsun? Ekip liderine söyle: o zaman herkes için değişebilir.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.p': "Yeni parçalara ihtiyacım var.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.s': "Üçüncü adımı yapmanın daha hızlı bir yolunu buldun. İş talimatı başka bir şey söylüyor. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.o1': "Önce ekip liderine sorarsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.o2': "Bundan sonra kendi bildiğin gibi yaparsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.o3': "İş arkadaşlarına kendi yolunu öğretirsin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.w': "Sıranın çoğu zaman göremediğin bir nedeni vardır. Senin yolun daha iyiyse, herkes için değişebilir.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.fastening': "Sıkma ve bağlama", // nieuw, nalezen
    'w.schroefmachine': "vidalama makinesi (hattın üstünde asılı durur)", // nieuw, nalezen
    'w.momentsleutel': "tork anahtarı (cıvata yeterince sıkı olunca tık eder)", // nieuw, nalezen
    'w.tiewrap': "kablo bağı", // nieuw, nalezen
    'w.sluitring': "pul", // nieuw, nalezen
    'w.klinknagel': "perçin", // nieuw, nalezen
    'w.popnageltang': "perçin tabancası", // nieuw, nalezen
    's.fastening.1': "Cıvatayı tork anahtarıyla sık.", // nieuw, nalezen
    's.fastening.2': "Pulu unutma.", // nieuw, nalezen
    's.fastening.3': "Kabloları bir kablo bağıyla birbirine bağla.", // nieuw, nalezen
    'c.fastening.q': "Bu cıvata ne kadar sıkı olmalı?", // nieuw, nalezen
    'c.fastening.a': "Tork anahtarı tık edene kadar.", // nieuw, nalezen
    'c.fastening': "Tık sesi yeterli", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.b': "Tork anahtarı, cıvata yeterince sıkı olunca tık eder. Tık sesinde dur: daha fazla çevirme. Fazla sıkı, cıvatayı ya da parçayı kırabilir; fazla gevşek ise yerinden çıkabilir. Vidalama makinesi de aynı şekilde çalışır: kendiliğinden durur. Her pulu yerine tak: eksik bir pul sonradan zor görülür. Cıvatalarını say. Bir tane artıyor mu, ya da bir tane daha mı lazım? O zaman bir şey yanlış: ekip liderine söyle.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.p': "Bir cıvata arttı.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.s': "Tork anahtarın tık etti. Cıvata sana hâlâ biraz gevşek geliyor. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.o1': "Durur ve ekip liderine sorarsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.o2': "Elinle biraz daha çevirirsin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.o3': "Daha uzun bir anahtar kullanırsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.w': "Tık sesi doğru kuvvete ayarlıdır. Yanlış geliyorsa anahtarın kontrol edilmesi gerekebilir. Daha fazla çevirmek cıvatayı kırabilir.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.handling': "Kaldırmak ve taşımak", // nieuw, nalezen
    'w.takel': "caraskal (ağır parçaları zincirle kaldırır)", // nieuw, nalezen
    'w.hijshaak': "kaldırma kancası", // nieuw, nalezen
    'w.tilhulp': "kaldırma yardımcısı (parçayı vakumla tutar)", // nieuw, nalezen
    'w.onderdelenkar': "parça arabası", // nieuw, nalezen
    'w.draaitafel': "döner tabla (kendini değil, parçayı döndürürsün)", // nieuw, nalezen
    'w.rolcontainer': "tekerlekli kafes (tekerlekler üstünde yüksek bir kafes)", // nieuw, nalezen
    's.handling.1': "Bunu tek başına kaldırma. Caraskalı kullan.", // nieuw, nalezen
    's.handling.2': "Kaldırma kancası iyice kapandı mı?", // nieuw, nalezen
    's.handling.3': "Parça arabasını it, çekme.", // nieuw, nalezen
    'c.handling.q': "Caraskalın altında durabilir miyim?", // nieuw, nalezen
    'c.handling.a': "Hayır, asılı bir yükün altında asla.", // nieuw, nalezen
    'c.handling': "Ağır işi caraskal yapsın", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.b': "Ağır parçalar sırtınla değil, bir caraskal ya da kaldırma yardımcısıyla kaldırılır. Kaldırmadan önce kancayı kontrol et: emniyet mandalı kapanmalı. Yavaş kaldır ve ellerini ve ayaklarını yükten uzak tut. Asılı bir yükün altında asla durma ya da yürüme. Bir parçayı döndürmek için döner tablayı kullan: o zaman sırtını bükmen gerekmez. Bir arabayı ya da tekerlekli kafesi it: nereye gittiğini görürsün ve sırtın daha az yorulur. Caraskalı sadece nasıl kullanılacağını öğrendiysen kullan. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.p': "Caraskalı kullanıyorum.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.s': "Bir parça çok ağır. Caraskal on dakika daha dolu. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.o1': "Caraskalı beklersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.o2': "Tek başına, hızlıca kaldırırsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.o3': "Yerde sürüklersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.w': "Ağır bir parça sırtını bir saniyede sakatlayabilir. On dakika beklemek, aylarca ağrı çekmekten iyidir.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.finalcheck': "Son kontrol", // nieuw, nalezen
    'w.typeplaatje': "tip plakası (tipi ve numarası yazan küçük metal bir plaka)", // nieuw, nalezen
    'w.stempel': "damga", // nieuw, nalezen
    'w.testbank': "test tezgâhı", // nieuw, nalezen
    'w.goedkeursticker': "onay etiketi (yeşil bir etiket: ürün iyi)", // nieuw, nalezen
    'w.kras': "çizik", // nieuw, nalezen
    'w.barst': "çatlak", // nieuw, nalezen
    's.finalcheck.1': "Tip plakası eğri.", // nieuw, nalezen
    's.finalcheck.2': "Bu üründe bir çizik var.", // nieuw, nalezen
    's.finalcheck.3': "Onay etiketi olmadan gitmez.", // nieuw, nalezen
    'c.finalcheck.q': "Bu ürün iyi mi?", // nieuw, nalezen
    'c.finalcheck.a': "Hayır, içinde bir çatlak var.", // nieuw, nalezen
    'c.finalcheck': "Etiketi sadece iyi ürünler alır", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.b': "Son kontrol, müşteri bulmadan önce bir hatayı bulmak için son şanstır. Listedeki her maddeyi kontrol et, iş yoğunken de. Küçük bir çizik ya da çatlak kolayca gözden kaçar: iyi ışıkta ve birden fazla taraftan bak. Onay etiketini ya da damgayı sadece her madde iyiyse koy. Emin değil misin? Ürünü kenara koy ve sor. Burada bulunan bir hata az tutar, müşteride bulunan bir hata ise çok pahalıya mal olur. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.p': "Bu ürün kenara gidiyor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.s': "Hat çok yoğun. Bir üründe, etiketin altında küçük bir çizik görüyorsun. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.o1': "Kenara koyar ve ekip liderine söylersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.o2': "Onay etiketini yapıştırırsın: çizik küçük.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.o3': "Etiketi çiziğin üstüne kaydırırsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.w': "Küçük bir çizik, üretim hattında bir sorunun işareti olabilir. Onu saklamak, sorunu sadece müşteriye taşır.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Kweken, sorteren en de kas" (u.kweek) and "Banden, olie en remmen" (u.carservice), 22 November 2026.
    'u.kweek': "Yetiştirme, ayıklama ve sera", // nieuw, nalezen
    'l.sowing': "Ekim ve çelik", // nieuw, nalezen
    'w.zaad': "tohumlar", // nieuw, nalezen
    'w.zaaibak': "fide viyolü", // nieuw, nalezen
    'w.stek': "çelik (yeni kök salan bir bitki parçası)", // nieuw, nalezen
    'w.potgrond': "saksı toprağı", // nieuw, nalezen
    'w.kweekpot': "fide saksısı", // nieuw, nalezen
    'w.gieter': "sulama kabı", // nieuw, nalezen
    's.sowing.1': "Her göze iki tohum koy.", // nieuw, nalezen
    's.sowing.2': "Çeliği saksı toprağına koy.", // nieuw, nalezen
    's.sowing.3': "Genç bitkilere biraz su ver.", // nieuw, nalezen
    'c.sowing.q': "Tohum ne kadar derine girmeli?", // nieuw, nalezen
    'c.sowing.a': "Yarım santimetre. Daha derine değil.", // nieuw, nalezen
    'c.sowing': "Küçük bitkiler nazik bir el ister", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.b': "Genç bitkiler zayıftır. Bir çeliği ya da fideyi saptan değil, yapraktan tut: yaprak yeniden büyür, kırık bir sap büyümez. Toprağı sert değil, hafifçe bastır. Tohumlar akıp gitmesin diye suyu yavaşça, ince bir püskürtmeyle ver. Temiz ellerle ve temiz viyollerle çalış: genç bitkiler kolayca hastalanır. Herkes içinde ne olduğunu bilsin diye her viyolün üstüne tarihi ve bitki çeşidini yaz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.p': "Onu yapraktan tutuyorum.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.s': "Küçük bir fideyi bir saksıya taşıman gerekiyor. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.o1': "Onu nazikçe bir yapraktan tutarsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.o2': "Onu saptan çekip çıkarırsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.o3': "Onu toprakla birlikte sıkarak çıkarırsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.w': "Bir yaprak yeniden büyüyebilir. Kırık bir sap büyüyemez ve o zaman bitki ölür.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.sorting': "Ayıklama ve paketleme", // nieuw, nalezen
    'w.tros': "salkım (tek bir sapta bir demet domates)", // nieuw, nalezen
    'w.bakje': "kutu (meyve için küçük bir kutu)", // nieuw, nalezen
    'w.sorteermachine': "ayıklama makinesi", // nieuw, nalezen
    'w.etiketpistool': "etiket tabancası", // nieuw, nalezen
    'w.kleurenkaart': "renk kartı (meyvenin ne kadar olgun olması gerektiğini gösterir)", // nieuw, nalezen
    'w.tomatenschaar': "hasat makası", // nieuw, nalezen
    's.sorting.1': "Salkımları kasaya dikkatlice koy.", // nieuw, nalezen
    's.sorting.2': "Bu domates fazla olgun. Kenara gidiyor.", // nieuw, nalezen
    's.sorting.3': "Renk kartına bak.", // nieuw, nalezen
    'c.sorting.q': "Bu domates yeterince olgun mu?", // nieuw, nalezen
    'c.sorting.a': "Hayır, hâlâ fazla yeşil. Bitkide bırak.", // nieuw, nalezen
    'c.sorting': "Her meyve önemlidir", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.b': "Meyve ve sebze kolayca ezilir. Onları yavaşça bırak, düşürme ya da fırlatma. Bugün bir ezik görmezsin, ama yarın meyve yumuşak ve kahverengidir. Hangi rengin nereye gittiğini bilmek için renk kartına bak. Hasarlı ya da çürük bir meyveyi kenara koy: bir kutudaki tek bir kötü meyve diğerlerini bozabilir. Kutuları ve kasaları temiz tut ve onları asla yere koyma.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.p': "Bu hasarlı.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.s': "Kutu dolduruyorsun. Bir domateste yumuşak, kahverengi bir leke var. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.o1': "Onu kenara koyarsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.o2': "Onu kutunun dibine saklarsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.o3': "Onu yine de paketlersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.w': "Çürük bir domates diğerlerinin daha hızlı çürümesine yol açar. Müşteri onu bulur ve bütün kutu geri gelir.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.greenhouse': "Sera ve iklimi", // nieuw, nalezen
    'w.buisrailkar': "boru ray arabası (ısıtma borularının üstünde gider)", // nieuw, nalezen
    'w.druppelaar': "damlatıcı (suyu damla damla verir)", // nieuw, nalezen
    'w.luchtraam': "çatı penceresi (çatıdaki bir pencere)", // nieuw, nalezen
    'w.kasscherm': "sera perdesi (çatının altındaki bir bez)", // nieuw, nalezen
    'w.ventilator': "vantilatör", // nieuw, nalezen
    'w.thermometer': "termometre", // nieuw, nalezen
    's.greenhouse.1': "Boru ray arabasını sıranın sonuna sür.", // nieuw, nalezen
    's.greenhouse.2': "Damlatıcı gevşek.", // nieuw, nalezen
    's.greenhouse.3': "Hava sıcak. Çatı pencereleri açılıyor.", // nieuw, nalezen
    'c.greenhouse.q': "Serada neden bu kadar sıcak?", // nieuw, nalezen
    'c.greenhouse.a': "Perde kapalı, pencereler de.", // nieuw, nalezen
    'c.greenhouse': "İklimi bilgisayara bırak", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.b': "Serada iklimi bir bilgisayar ayarlar: pencereleri, perdeyi, ısıtmayı ve suyu. Bir pencereyi kendin açma ya da bir ayarı kendin değiştirme. Sızdıran bir damlatıcı ya da kapanmayan bir pencere gibi garip bir şey mi görüyorsun? Amirine söyle. Boru ray arabası ısıtma borularının üstünde gider: onu sadece nasıl kullanılacağını öğrendiysen kullan. Ayaklarını platformda tut ve borulara asla dokunma: sıcak olabilirler. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.p': "Bu damlatıcı sızdırıyor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.s': "Bir damlatıcı gevşemiş. Su yere akıyor. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.o1': "Onu yerine takar ve amirine söylersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.o2': "Bırakırsın: sadece su.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.o3': "Bütün sıranın suyunu kapatırsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.w': "Gevşek bir damlatıcı su israf eder, bitki çok az su alır ve ıslak zemin kaygandır.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.pests': "Zararlılar ve temiz çalışmak", // nieuw, nalezen
    'w.luis': "yaprak biti (bitkilerin üstünde küçük yeşil bir böcek)", // nieuw, nalezen
    'w.vangplaat': "yapışkan tuzak (böcekleri yakalayan sarı bir kart)", // nieuw, nalezen
    'w.rups': "tırtıl", // nieuw, nalezen
    'w.sluipwesp': "parazit eşek arısı (zararlıları öldüren küçük bir eşek arısı)", // nieuw, nalezen
    'w.schimmel': "küf", // nieuw, nalezen
    'w.ontsmettingsmat': "dezenfeksiyon paspası (kapıda üstüne basarsın)", // nieuw, nalezen
    's.pests.1': "Bu yaprakta yaprak bitleri var.", // nieuw, nalezen
    's.pests.2': "Yapışkan tuzağı bitkilerin üstüne as.", // nieuw, nalezen
    's.pests.3': "Dezenfeksiyon paspasının üstünden yürü.", // nieuw, nalezen
    'c.pests.q': "Bu eşek arısını öldürebilir miyim?", // nieuw, nalezen
    'c.pests.a': "Hayır, o bir parazit eşek arısı. Bize yardım ediyor.", // nieuw, nalezen
    'c.pests': "Hastalıkları sıradan sıraya taşıma", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.b': "Serada bir hastalık ya da zararlı hızla yayılır. Onu ellerinde, kıyafetlerinde ve aletlerinde taşıyabilirsin. Bu yüzden her kapıda dezenfeksiyon paspasının üstünden yürü ve seranın başka bir bölümüne geçerken ellerini yıka. İşine sağlıklı sıralarda başla ve hasta sıralarda bitir. Bir bitkide böcek, leke ya da küf mü görüyorsun? Ona dokunma, ama nerede olduğunu amirine söyle. Seradaki bazı böcekler yardımcıdır: onları rahat bırak. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.p': "Burada küf var.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.s': "Sırandaki birkaç bitkide gri küf görüyorsun. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.o1': "Nerede olduğunu amirine söylersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.o2': "Kötü yaprakları koparır ve devam edersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.o3': "Hiçbir şey söylemezsin: sadece birkaç bitki.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.w': "Küf hızla yayılır. Amirin ne yapılacağını ve nereden başlanacağını bilir.", // nieuw, nalezen // nagelezen AI 22 nov
    'u.carservice': "Lastik, yağ ve frenler", // nieuw, nalezen
    'l.tyres': "Lastik değiştirmek", // nieuw, nalezen
    'w.wielbout': "bijon cıvatası", // nieuw, nalezen
    'w.slagmoersleutel': "darbeli somun anahtarı", // nieuw, nalezen
    'w.bandenspanningsmeter': "lastik basınç ölçer", // nieuw, nalezen
    'w.bandenprofiel': "lastik dişi (lastikteki oluklar)", // nieuw, nalezen
    'w.velg': "jant", // nieuw, nalezen
    'w.bandenwisselaar': "lastik sökme makinesi (lastiği janttan çıkaran bir makine)", // nieuw, nalezen
    's.tyres.1': "Bijon cıvatalarını çapraz sırayla sık.", // nieuw, nalezen
    's.tyres.2': "Lastik dişi çok az.", // nieuw, nalezen
    's.tyres.3': "Basıncı lastik basınç ölçerle ölç.", // nieuw, nalezen
    'c.tyres.q': "Bu lastiklerin çıkması lazım mı?", // nieuw, nalezen
    'c.tyres.a': "Evet, diş neredeyse bitti.", // nieuw, nalezen
    'c.tyres': "Elle tak, tork anahtarıyla sık", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.b': "Darbeli somun anahtarı hızlı ve çok güçlüdür. Onu bijon cıvatalarını sökmek için kullan, ama sıkıca sıkmak için değil. Önce cıvataları elle tak. Sonra onları tork anahtarıyla, o arabanın kuvvetine göre çapraz sırayla sık. Sıkı olmayan bir tekerlek yolda giderken çıkabilir. Eline aldığın her lastiğin dişini ve basıncını kontrol et. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.p': "Önce onları elle takıyorum.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.s': "Bir tekerleği geri takıyorsun. Bir iş arkadaşın diyor ki: “Darbeli somun anahtarını kullan, daha hızlı.” Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.o1': "Elle takar, sonra tork anahtarını kullanırsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.o2': "Darbeli somun anahtarıyla sıkıca sıkarsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.o3': "Elle takar ve öyle bırakırsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.w': "Darbeli somun anahtarı bir cıvatayı fazla sıkabilir ya da yeterince sıkmayabilir. Doğru kuvveti sadece tork anahtarı verir.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.oilchange': "Yağ değiştirmek", // nieuw, nalezen
    'w.oliefilter': "yağ filtresi", // nieuw, nalezen
    'w.oliepeilstok': "yağ çubuğu (ne kadar yağ olduğunu gösterir)", // nieuw, nalezen
    'w.opvangbak': "yağ toplama kabı (eski yağı toplar)", // nieuw, nalezen
    'w.trechter': "huni", // nieuw, nalezen
    'w.aftapplug': "boşaltma tapası", // nieuw, nalezen
    'w.olievat': "yağ varili", // nieuw, nalezen
    's.oilchange.1': "Yağ toplama kabını motorun altına koy.", // nieuw, nalezen
    's.oilchange.2': "Boşaltma tapasını sök.", // nieuw, nalezen
    's.oilchange.3': "Yağ çubuğuna bak.", // nieuw, nalezen
    'c.oilchange.q': "Ne kadar yağ girmeli?", // nieuw, nalezen
    'c.oilchange.a': "Dört litre. Sonra yağ çubuğuna bak.", // nieuw, nalezen
    'c.oilchange': "Eski yağ varile gider, gidere değil", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.b': "Eski yağ suya ve toprağa zararlıdır. Biraz yağ bile çok fazla suyu kirletebilir. Bu yüzden bütün eski yağı yağ toplama kabında topla ve eski yağ variline dök. Onu asla bir gidere ya da lavaboya dökme. Eski filtreler ve yağlı bezler kendi çöp kutularına gider. Sıcak yağ cildini yakabilir: önce motoru biraz soğumaya bırak ve eldiven giy. Dökülen yağı hemen temizle: yerdeki yağ kaygandır. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.p': "Eski yağ nereye gidiyor?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.s': "Yağ toplama kabı eski yağla dolu. Varil atölyenin öbür ucunda. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.o1': "Onu dikkatlice varile taşırsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.o2': "Onu dışarıdaki gidere dökersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.o3': "Sonra için arabanın altında bırakırsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.w': "Gidere dökülen eski yağ suyu kirletir. Arabanın altında duran dolu bir kaba birisi çarpar ve kap devrilir.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.brakes': "Frenler ve lambalar", // nieuw, nalezen
    'w.remschijf': "fren diski", // nieuw, nalezen
    'w.remblok': "fren balatası", // nieuw, nalezen
    'w.koplamp': "far", // nieuw, nalezen
    'w.remvloeistof': "fren hidroliği", // nieuw, nalezen
    'w.remklauw': "fren kaliperi", // nieuw, nalezen
    'w.achterlamp': "arka lamba", // nieuw, nalezen
    's.brakes.1': "Fren balataları aşınmış.", // nieuw, nalezen
    's.brakes.2': "Fren hidroliğini kontrol et.", // nieuw, nalezen
    's.brakes.3': "Sol arka lamba çalışmıyor.", // nieuw, nalezen
    'c.brakes.q': "Fren diskinin de değişmesi lazım mı?", // nieuw, nalezen
    'c.brakes.a': "Evet, çok ince.", // nieuw, nalezen
    'c.brakes': "Frenler: iki kez kontrol et", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.b': "Frenler insanları hayatta tutar. Bu yüzden sakin çalış ve işini iki kez kontrol et. Yeni balata ya da diskten sonra, araba hareket etmeden önce fren pedalına birkaç kez bas: ilk basış çoğu zaman fazla derine gider. Fren hidroliği cildine ve boyaya zararlıdır: eldiven giy ve damlaları hemen sil. Fren tozunu basınçlı havayla üfleme: onu fren temizleyiciyle ve bir bezle temizle. Araba çıkmadan önce her lambayı kontrol et, fren lambalarını da.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.p': "Fren pedalına birkaç kez basıyorum.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.s': "Yeni fren balataları taktın. Arabanın dışarı çıkması gerekiyor. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.o1': "Fren pedalına birkaç kez basarsın.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.o2': "Onu hemen dışarı sürersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.o3': "Kontrol etmeden dışarı itersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.w': "Yeni balatalardan sonra pedal ilk seferde fazla derine gidebilir. O zaman araba durmaz.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.diagnosis': "Arıza okumak ve iş emri", // nieuw, nalezen
    'w.diagnosecomputer': "arıza tespit cihazı (arabanın arızalarını okur)", // nieuw, nalezen
    'w.waarschuwingslampje': "uyarı lambası (gösterge panelinde)", // nieuw, nalezen
    'w.werkorder': "iş emri (arabada ne yapılması gerektiği)", // nieuw, nalezen
    'w.kentekenplaat': "plaka", // nieuw, nalezen
    'w.autosleutel': "araba anahtarı", // nieuw, nalezen
    'w.stoelhoes': "koltuk kılıfı (koltuğu temiz tutar)", // nieuw, nalezen
    's.diagnosis.1': "Arıza tespit cihazını bağla.", // nieuw, nalezen
    's.diagnosis.2': "Uyarı lambası yanıyor.", // nieuw, nalezen
    's.diagnosis.3': "Koltuğa bir koltuk kılıfı geçir.", // nieuw, nalezen
    'c.diagnosis.q': "Bu arabada ne yapılması gerekiyor?", // nieuw, nalezen
    'c.diagnosis.a': "İş emrine bak.", // nieuw, nalezen
    'c.diagnosis': "Arabaya kendi araban gibi davran", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.b': "Bir müşteri sana arabasını ve anahtarını verir. İkisine de özenle davran. Binmeden önce koltuğa bir koltuk kılıfı geçir ve yere bir paspas koy. Sadece iş emrinde yazanı yap. Başka bozuk bir şey mi buluyorsun? Not al ve amirine söyle: karar müşterinindir. Anahtarı etiketiyle birlikte yerinde tut. Radyoyu, telefonu ya da arabadaki eşyaları kullanma. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.p': "Bu iş emrinde yok.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.s': "Yağ değiştiriyorsun. Bir lastiğin dişi neredeyse bitmiş. Bu iş emrinde yok. Ne yaparsın?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.o1': "Not alır ve amirine söylersin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.o2': "Lastiği hemen değiştirirsin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.o3': "Hiçbir şey söylemezsin: bu senin işin değil.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.w': "Neyin yapılıp ödeneceğine müşteri karar verir. Ama lastiğin tehlikeli olduğunu bilmesi gerekir.", // nieuw, nalezen // nagelezen AI 22 nov
    // The new sectors Groen, Facilitair, Beveiliging, Voedingsindustrie, Afval en recycling and Kinderopvang, two units each (23 November 2026).
    'u.mowing': "Çim biçmek ve budamak", // nieuw, nalezen
    'l.mowing': "Çimleri biçmek", // nieuw, nalezen
    'w.gras': "çim", // nieuw, nalezen
    'w.maaien': "biçmek (çimi kesmek)", // nieuw, nalezen
    'w.grasmaaier': "çim biçme makinesi", // nieuw, nalezen
    'w.zitmaaier': "binmeli çim biçme makinesi (üstüne oturduğun bir makine)", // nieuw, nalezen
    'w.bosmaaier': "tırpan makinesi (uzun bir sapın ucunda bir biçme makinesi)", // nieuw, nalezen
    'w.gelaatsscherm': "yüz siperi", // nieuw, nalezen
    's.mowing.1': "Önce kenar boyundaki çimi biç.", // nieuw, nalezen
    's.mowing.2': "Çim fazla ıslak. Yarın biçeceğiz.", // nieuw, nalezen
    's.mowing.3': "Yüz siperini tak.", // nieuw, nalezen
    'c.mowing.q': "Binmeli makineyi alabilir miyim?", // nieuw, nalezen
    'c.mowing.a': "Evet, ama önce taşları topla.", // nieuw, nalezen
    'c.mowing': "Taşlar uzağa fırlar", // nieuw, nalezen
    'c.mowing.b': "Bir çim biçme makinesi ya da tırpan makinesi bir taşı çok uzağa ve çok sert fırlatabilir. Bu yüzden önce çimin üstünden yürü ve taşları, camları ve dalları topla. Yüz siperini ya da koruyucu gözlüğünü, kulak koruyucunu ve güvenlik ayakkabılarını tak. Başka insanları uzak tut. Biri yaklaşıyor mu? Makineyi durdur. Motor çalışırken elini asla bir biçme makinesinin altına sokma: motoru kapat ve bıçak tamamen durana kadar bekle. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.mowing.p': "Biraz uzak durur musunuz lütfen?", // nieuw, nalezen
    'c.mowing.s': "Tırpan makinesini kullanıyorsun. Köpekli bir adam sana doğru yürüyor. Ne yaparsın?", // nieuw, nalezen
    'c.mowing.o1': "O geçene kadar makineyi durdurursun.", // nieuw, nalezen
    'c.mowing.o2': "Devam edersin: seni görebiliyor.", // nieuw, nalezen
    'c.mowing.o3': "Ona sırtını döner ve devam edersin.", // nieuw, nalezen
    'c.mowing.w': "Tırpan makinesinden fırlayan bir taş, uzaktan bile birini ağır yaralayabilir.", // nieuw, nalezen
    'l.pruning': "Budamak", // nieuw, nalezen
    'w.snoeien': "budamak (bir bitkinin dallarını kesmek)", // nieuw, nalezen
    'w.snoeischaar': "budama makası", // nieuw, nalezen
    'w.tak': "dal", // nieuw, nalezen
    'w.struik': "çalı", // nieuw, nalezen
    'w.boom': "ağaç", // nieuw, nalezen
    'w.snoeizaag': "budama testeresi", // nieuw, nalezen
    's.pruning.1': "Yolun kenarındaki çalıları buda.", // nieuw, nalezen
    's.pruning.2': "Bu dal kuru. Onu testereyle kes.", // nieuw, nalezen
    's.pruning.3': "Dalları bir yığına koy.", // nieuw, nalezen
    'c.pruning.q': "Hangi dallar kesilmeli?", // nieuw, nalezen
    'c.pruning.a': "Sadece kuru dallar.", // nieuw, nalezen
    'c.pruning': "Temiz bir kesik en iyi iyileşir", // nieuw, nalezen
    'c.pruning.b': "Keskin ve temiz bir makasla buda. Temiz bir kesik hızla iyileşir; yırtılmış bir dal hastalanır. Bir tomurcuğun ya da yan dalın hemen üstünden kes ve uzun bir parça bırakma. Önce kuru ve kırık dalları kes. Öbür elini bıçaklardan uzak tut. Eldiven giy: bazı bitkilerin dikeni vardır ya da cildini kızartır. İşten sonra makası temizle.", // nieuw, nalezen
    'c.pruning.p': "Nereden kesmem gerekiyor?", // nieuw, nalezen
    'c.pruning.s': "Budama makasın kör. Dalları yırtıyor. Ne yaparsın?", // nieuw, nalezen
    'c.pruning.o1': "Keskin bir makas istersin.", // nieuw, nalezen
    'c.pruning.o2': "Dalı daha sert çekersin.", // nieuw, nalezen
    'c.pruning.o3': "Devam edersin: sadece bir çalı.", // nieuw, nalezen
    'c.pruning.w': "Kör bir makas dalı yırtar. Bitki hastalanır ve sen daha çok yorulursun.", // nieuw, nalezen
    'l.hedge': "Çit budamak", // nieuw, nalezen
    'w.heg': "çit (canlı çit)", // nieuw, nalezen
    'w.heggenschaar': "çit budama makinesi (bir çiti kesen makine)", // nieuw, nalezen
    'w.kruiwagen': "el arabası", // nieuw, nalezen
    'w.hark': "tırmık", // nieuw, nalezen
    'w.snoeiafval': "bahçe atığı (kesilmiş dallar ve yapraklar)", // nieuw, nalezen
    'w.zeil': "branda (büyük bir plastik örtü)", // nieuw, nalezen
    's.hedge.1': "Brandayı çitin altına ser.", // nieuw, nalezen
    's.hedge.2': "Çiti güzel ve düz kes.", // nieuw, nalezen
    's.hedge.3': "Bahçe atığını el arabasıyla götür.", // nieuw, nalezen
    'c.hedge.q': "Çit ne kadar yüksek kalmalı?", // nieuw, nalezen
    'c.hedge.a': "İpe kadar. Daha alçak değil.", // nieuw, nalezen
    'c.hedge': "Önce yuva var mı bak", // nieuw, nalezen
    'c.hedge.b': "İlkbaharda ve yazın kuşlar çitlere ve çalılara yuva yapar. Kuşların kullandığı yuvalar koruma altındadır. Bu yüzden kesmeden önce çitin içine bak. Yumurtalı ya da yavru kuşlu bir yuva mı görüyorsun? Orayı kesme ve amirine söyle. Çit budama makinesini iki elinle tut. Yerde ya da sağlam bir merdivende dur, asla bir sandalyede ya da bir kovanın üstünde durma. Kabloyu arkanda tut.", // nieuw, nalezen
    'c.hedge.p': "Burada bir yuva var.", // nieuw, nalezen
    'c.hedge.s': "Mayıs ayında bir çit budıyorsun. Yavru kuşlu bir yuva görüyorsun. Ne yaparsın?", // nieuw, nalezen
    'c.hedge.o1': "Orada durur ve amirine söylersin.", // nieuw, nalezen
    'c.hedge.o2': "Etrafını dikkatlice kesersin.", // nieuw, nalezen
    'c.hedge.o3': "Yuvayı çıkarır ve devam edersin.", // nieuw, nalezen
    'c.hedge.w': "Kuşların kullandığı yuvalar koruma altındadır. Çitin bu kısmına ne olacağına amirin karar verir.", // nieuw, nalezen
    'l.chainsaw': "Motorlu testere ve yaprak üfleyici", // nieuw, nalezen
    'w.kettingzaag': "motorlu testere", // nieuw, nalezen
    'w.stam': "gövde (bir ağacın)", // nieuw, nalezen
    'w.zaagbroek': "testere pantolonu (zinciri durdurur)", // nieuw, nalezen
    'w.bladblazer': "yaprak üfleyici", // nieuw, nalezen
    'w.bladeren': "yapraklar", // nieuw, nalezen
    'w.jerrycan': "bidon (yakıt için bir kap)", // nieuw, nalezen
    's.chainsaw.1': "Testere pantolonunu giy.", // nieuw, nalezen
    's.chainsaw.2': "Yaprakları bir yığına üfle.", // nieuw, nalezen
    's.chainsaw.3': "Yakıtı sadece motor soğukken doldur.", // nieuw, nalezen
    'c.chainsaw.q': "Motorlu testereyle çalışabilir miyim?", // nieuw, nalezen
    'c.chainsaw.a': "Henüz değil. Önce bir kurs alacaksın.", // nieuw, nalezen
    'c.chainsaw': "Motorlu testere sadece eğitimle", // nieuw, nalezen
    'c.chainsaw.b': "Motorlu testere, yeşil alan işindeki en tehlikeli aletlerden biridir. Onunla sadece bir kurs aldıysan ve amirin izin verirse çalış. Her zaman testere pantolonu, yüz siperli bir kask, kulak koruyucu, eldiven ve güvenlik botları giy. Motorlu testereyle asla tek başına çalışma. Onu iki elinle tut ve asla omuzlarının üstünde kesme. Yaprak üfleyiciyle: asla insanlara, arabalara ya da açık pencerelere doğru üfleme. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.chainsaw.p': "Bunun için henüz kurs almadım.", // nieuw, nalezen
    'c.chainsaw.s': "Bir iş arkadaşın diyor ki: “Motorlu testereyi al, kolay.” Hiç kurs almadın. Ne yaparsın?", // nieuw, nalezen
    'c.chainsaw.o1': "Henüz kurs almadığını söylersin.", // nieuw, nalezen
    'c.chainsaw.o2': "Dikkatlice, sadece bir kez denersin.", // nieuw, nalezen
    'c.chainsaw.o3': "Alırsın ve önce bir video izlersin.", // nieuw, nalezen
    'c.chainsaw.w': "Motorlu testere bacağını bir saniyede kesebilir. Eğitim almadan onun nasıl geri tepebileceğini bilemezsin.", // nieuw, nalezen
    'u.planting': "Dikim, yabani otlar ve sokak", // nieuw, nalezen
    'l.weeding': "Ot ayıklamak", // nieuw, nalezen
    'w.onkruid': "yabani ot (gitmesi gereken bitkiler)", // nieuw, nalezen
    'w.wieden': "ot ayıklamak (yabani otları çekip çıkarmak)", // nieuw, nalezen
    'w.schoffel': "çapa", // nieuw, nalezen
    'w.perk': "çiçek tarhı", // nieuw, nalezen
    'w.onkruidbrander': "ot yakma aleti (yabani otları ısıyla öldürür)", // nieuw, nalezen
    'w.wortel': "kök (bir bitkinin)", // nieuw, nalezen
    's.weeding.1': "Yabani otları köküyle birlikte çek.", // nieuw, nalezen
    's.weeding.2': "Girişin yanındaki çiçek tarhını çapala.", // nieuw, nalezen
    's.weeding.3': "Dikkat: ot yakma aleti sıcak.", // nieuw, nalezen
    'c.weeding.q': "Bu bir yabani ot mu?", // nieuw, nalezen
    'c.weeding.a': "Hayır, o bir bitki. Onu bırak.", // nieuw, nalezen
    'c.weeding': "Yabani ot: kök gitmeli", // nieuw, nalezen
    'c.weeding.b': "Kök toprakta kalırsa yabani ot yeniden büyür. Bu yüzden onu köküyle çek ya da toprağın hemen altından çapala. Toprak biraz ıslakken çalış: o zaman kök kolayca çıkar. Yabani otlara karşı ilaç püskürtme, nasıl yapıldığını öğrenmediysen ve amirin söylemediyse. Ot yakma aleti çok sıcaktır: onu kuru çimden, yapraklardan, çitlerden, arabalardan ve çöp kutularından uzak tut. Yanarken onu asla yere bırakma. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.weeding.p': "Bu yabani ot mu, bitki mi?", // nieuw, nalezen
    'c.weeding.s': "Ot yakma aletini kullanıyorsun. Yolun yanında kuru bir çit var. Ne yaparsın?", // nieuw, nalezen
    'c.weeding.o1': "Oradaki otları elle çekersin.", // nieuw, nalezen
    'c.weeding.o2': "Hızlıca yakar ve yürümeye devam edersin.", // nieuw, nalezen
    'c.weeding.o3': "Yakar ve bir kez arkana bakarsın.", // nieuw, nalezen
    'c.weeding.w': "Kuru bir çit hızla tutuşur. Evlerin ya da arabaların yakınında bir yangın çok tehlikelidir.", // nieuw, nalezen
    'l.planting': "Dikim yapmak", // nieuw, nalezen
    'w.planten': "dikmek (bitki dikmek)", // nieuw, nalezen
    'w.schep': "kürek", // nieuw, nalezen
    'w.plantgat': "dikim çukuru", // nieuw, nalezen
    'w.kluit': "kök topu (köklerin etrafındaki toprak)", // nieuw, nalezen
    'w.compost': "kompost", // nieuw, nalezen
    'w.boompaal': "ağaç kazığı (genç bir ağacı tutan direk)", // nieuw, nalezen
    's.planting.1': "Ağaç için bir dikim çukuru kaz.", // nieuw, nalezen
    's.planting.2': "Ağacı kazığın yanına dik olarak koy.", // nieuw, nalezen
    's.planting.3': "Yeni bitkilere bol su ver.", // nieuw, nalezen
    'c.planting.q': "Bu bitki nereye gidiyor?", // nieuw, nalezen
    'c.planting.a': "Çiçek tarhının arkasına, duvarın yanına.", // nieuw, nalezen
    'c.planting': "Toprağın altında: kablolar ve borular", // nieuw, nalezen
    'c.planting.b': "Çimin ve kaldırımın altında çoğu zaman kablolar ve borular vardır: elektrik, gaz, su ve internet için. Bu yüzden dikkatlice kaz. Toprakta renkli bir şerit ya da plastik bir levha mı görüyorsun, ya da sert bir şeye mi çarpıyorsun? Kazmayı durdur ve amirine söyle. Asla zorla kazmaya devam etme. Ağır bir ağacı ya da büyük bir kök topunu birlikte ve dizlerini bükerek kaldırın. Yeni bir bitkiye aynı gün su ver. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.planting.p': "Sert bir şeye çarpıyorum.", // nieuw, nalezen
    'c.planting.s': "Bir dikim çukuru kazıyorsun. Küreğin kırmızı plastik bir şeride çarpıyor. Ne yaparsın?", // nieuw, nalezen
    'c.planting.o1': "Kazmayı durdurur ve amirine söylersin.", // nieuw, nalezen
    'c.planting.o2': "Şeridin yanında dikkatlice kazmaya devam edersin.", // nieuw, nalezen
    'c.planting.o3': "Şeridi çekip çıkarır ve devam edersin.", // nieuw, nalezen
    'c.planting.w': "Topraktaki bir şerit, altında bir kablo ya da boru olduğunu haber verir. Bir gaz borusu ya da elektrik kablosu çok tehlikelidir.", // nieuw, nalezen
    'l.roadside': "Yolun kenarında çalışmak", // nieuw, nalezen
    'w.pion': "trafik konisi", // nieuw, nalezen
    'w.verkeer': "trafik", // nieuw, nalezen
    'w.stoep': "kaldırım (yolun yanındaki yaya yolu)", // nieuw, nalezen
    'w.fietser': "bisikletli", // nieuw, nalezen
    'w.pijlwagen': "ok römorku (sürücüleri uyaran büyük oklu bir römork)", // nieuw, nalezen
    'w.berm': "yol kenarı (yolun yanındaki çimenlik)", // nieuw, nalezen
    's.roadside.1': "Yeleğini giy. Yolun kenarında çalışıyoruz.", // nieuw, nalezen
    's.roadside.2': "Konileri kamyonetin arkasına koy.", // nieuw, nalezen
    's.roadside.3': "Bisikletlilere dikkat et.", // nieuw, nalezen
    'c.roadside.q': "Şimdi karşıya geçebilir miyim?", // nieuw, nalezen
    'c.roadside.a': "Hayır, bekle. Bir kamyon geliyor.", // nieuw, nalezen
    'c.roadside': "Yolun kenarında: görünür ol, konilerin arkasında kal", // nieuw, nalezen
    'c.roadside.b': "Yolun kenarında çalışmak tehlikelidir: sürücüler telefonlarına bakar ya da çok hızlı gider. Bu yüzden kısa bir iş için bile her zaman reflektörlü yeleğini giy. Başlamadan önce konileri ve tabelaları koy ve en son onları topla. Kamyoneti seninle trafik arasında bir kalkan olarak park et. Konilerin arkasında kal. Bakmadan asla geri adım atma ve yapabildiğinde yüzün trafiğe dönük çalış. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.roadside.p': "Önce konileri koyuyorum.", // nieuw, nalezen
    'c.roadside.s': "Yolun kenarında küçük bir çalıyı kesmen gerekiyor. Beş dakika sürer. Ne yaparsın?", // nieuw, nalezen
    'c.roadside.o1': "Yeleği giyer ve konileri koyarsın.", // nieuw, nalezen
    'c.roadside.o2': "Konisiz, hızlıca yaparsın.", // nieuw, nalezen
    'c.roadside.o3': "Bir iş arkadaşından arabalara bakmasını istersin.", // nieuw, nalezen
    'c.roadside.w': "Bir kaza sadece bir saniye sürer. Konisiz beş dakika, korumasız beş dakikadır.", // nieuw, nalezen
    'l.litter': "Sokaktaki çöpler ve mahalle", // nieuw, nalezen
    'w.zwerfafval': "sokak çöpü (sokakta kalan çöp)", // nieuw, nalezen
    'w.grijper': "çöp toplama maşası (çöpü tutan bir çubuk)", // nieuw, nalezen
    'w.vuilniszak': "çöp torbası", // nieuw, nalezen
    'w.scherven': "cam kırıkları (keskin parçalar)", // nieuw, nalezen
    'w.aanhanger': "römork", // nieuw, nalezen
    'w.bewoner': "mahalle sakini (burada oturan biri)", // nieuw, nalezen
    's.litter.1': "Sokak çöpünü çöp toplama maşasıyla topla.", // nieuw, nalezen
    's.litter.2': "Dikkat, burada cam kırıkları var.", // nieuw, nalezen
    's.litter.3': "Çöp torbalarını römorkun yanına koy.", // nieuw, nalezen
    'c.litter.q': "Bu ağaç ne zaman budanacak?", // nieuw, nalezen
    'c.litter.a': "Bilmiyorum. Belediyeye sorun.", // nieuw, nalezen
    'c.litter': "Bir iğneye asla dokunma", // nieuw, nalezen
    'c.litter.b': "Parklarda ve çalılıklarda bazen bir şırınga iğnesi bulursun. Onu asla elinle alma, eldivenle de alma. Çöp toplama maşasını kullan ve iğneyi kapaklı sert bir kutuya ya da şişeye koy, asla bir çöp torbasına koyma. Amirine söyle. Bir iğne sana battı mı? Yarayı bol suyla yıka ve hemen bir doktoru ara. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.litter.p': "Burada bir iğne var.", // nieuw, nalezen
    'c.litter.s': "Çimenlerde, bir bankın yanında bir iğne görüyorsun. Ne yaparsın?", // nieuw, nalezen
    'c.litter.o1': "Onu çöp toplama maşasıyla alırsın.", // nieuw, nalezen
    'c.litter.o2': "Onu eldivenle alırsın.", // nieuw, nalezen
    'c.litter.o3': "Onu çöp torbasına koyarsın.", // nieuw, nalezen
    'c.litter.w': "Bir iğne hastalık taşıyabilir. Eldiven bir iğneyi durdurmaz, sert bir kutu ise başkalarını güvende tutar.", // nieuw, nalezen
    'u.frontdesk': "Resepsiyon, posta ve toplantılar", // nieuw, nalezen
    'l.reception': "Danışma bankosunda", // nieuw, nalezen
    'w.balie': "danışma bankosu, tezgâh", // nieuw, nalezen
    'w.bezoeker': "ziyaretçi", // nieuw, nalezen
    'w.intercom': "diyafon (kapıdaki biriyle konuşursun)", // nieuw, nalezen
    'w.doorverbinden': "bağlamak (bir telefon görüşmesini)", // nieuw, nalezen
    'w.toestel': "dahili hat (binanın içindeki bir telefon numarası)", // nieuw, nalezen
    'w.wachtruimte': "bekleme alanı", // nieuw, nalezen
    's.reception.1': "Günaydın, size yardımcı olabilir miyim?", // nieuw, nalezen
    's.reception.2': "Sizi bağlıyorum.", // nieuw, nalezen
    's.reception.3': "Lütfen bekleme alanında oturun.", // nieuw, nalezen
    'c.reception.q': "Bayan Jansen ile randevum var.", // nieuw, nalezen
    'c.reception.a': "Bir dakika. Onu arıyorum.", // nieuw, nalezen
    'c.reception': "İlk gördükleri yüz sensin", // nieuw, nalezen
    'c.reception.b': "Danışma bankosunda bir ziyaretçinin karşılaştığı ilk kişi sensin. Başını kaldır, gülümse ve selam ver, telefonla meşgulken de. Ziyaretçilere “u” de. Telefonu şirketin adıyla ve kendi adınla aç. Cevabı bilmiyor musun? Bunu söyle ve bilen birini bul. Tanımadığın insanlara personelin adlarını, telefon numaralarını ya da odalarını asla verme.", // nieuw, nalezen
    'c.reception.p': "Günaydın, size nasıl yardımcı olabilirim?", // nieuw, nalezen
    'c.reception.s': "Telefondasın. Bir ziyaretçi bankoya geliyor ve bekliyor. Ne yaparsın?", // nieuw, nalezen
    'c.reception.o1': "Başını kaldırır ve birazdan geleceğini gösterirsin.", // nieuw, nalezen
    'c.reception.o2': "Başını kaldırmadan görüşmeni bitirirsin.", // nieuw, nalezen
    'c.reception.o3': "Telefonu hemen kapatırsın.", // nieuw, nalezen
    'c.reception.w': "Görüldüğünü bilen bir ziyaretçi sakince bekler. Görülmeyen bir ziyaretçi istenmediğini hisseder.", // nieuw, nalezen
    'l.visitors': "Ziyaretçi karşılamak", // nieuw, nalezen
    'w.bezoekerspasje': "ziyaretçi kartı", // nieuw, nalezen
    'w.lift': "asansör", // nieuw, nalezen
    'w.garderobe': "vestiyer (montunu astığın yer)", // nieuw, nalezen
    'w.parkeerplaats': "park yeri", // nieuw, nalezen
    'w.hal': "hol (girişteki büyük salon)", // nieuw, nalezen
    'w.begeleiden': "eşlik etmek (biriyle bir yere kadar yürümek)", // nieuw, nalezen
    's.visitors.1': "Adınızı buraya yazar mısınız?", // nieuw, nalezen
    's.visitors.2': "Buyurun, ziyaretçi kartınız.", // nieuw, nalezen
    's.visitors.3': "Sizi asansöre götüreyim.", // nieuw, nalezen
    'c.visitors.q': "Montumu nereye bırakabilirim?", // nieuw, nalezen
    'c.visitors.a': "Vestiyere, asansörün yanında.", // nieuw, nalezen
    'c.visitors': "Her ziyaretçi kayıt yaptırır", // nieuw, nalezen
    'c.visitors.b': "Her ziyaretçi adını listeye yazar ya da ekranda kayıt yaptırır ve bir ziyaretçi kartı alır. Böylece binada kimin olduğunu bilirsin. Yangın olduğunda bu önemlidir: herkes dışarı çıkmalıdır ve biri listeyi kontrol eder. Ziyaretin sonunda ziyaretçi kartı geri verir. Tanımadığın insanları arkandan içeri alma: kime geldiklerini kibarca sor. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.visitors.p': "Kime geldiniz?", // nieuw, nalezen
    'c.visitors.s': "Bir adam bir iş arkadaşının arkasından içeri giriyor. Kartı yok. Ne yaparsın?", // nieuw, nalezen
    'c.visitors.o1': "Ona kime geldiğini kibarca sorarsın.", // nieuw, nalezen
    'c.visitors.o2': "Geçmesine izin verirsin: personelle birlikte girdi.", // nieuw, nalezen
    'c.visitors.o3': "Hemen polisi ararsın.", // nieuw, nalezen
    'c.visitors.w': "Acil bir durumda içeride kimin olduğunu bilmen gerekir. Ve içeri giren herkesin orada olmak için bir nedeni yoktur.", // nieuw, nalezen
    'l.mailroom': "Posta ve paketler", // nieuw, nalezen
    'w.postkamer': "posta odası", // nieuw, nalezen
    'w.koerier': "kurye (paket getiren biri)", // nieuw, nalezen
    'w.postvak': "posta gözü (posta için bir göz, her kişiye bir tane)", // nieuw, nalezen
    'w.envelop': "zarf", // nieuw, nalezen
    'w.afdeling': "bölüm", // nieuw, nalezen
    'w.postkar': "posta arabası", // nieuw, nalezen
    's.mailroom.1': "Kurye bir paket getiriyor.", // nieuw, nalezen
    's.mailroom.2': "Mektupları doğru posta gözüne koy.", // nieuw, nalezen
    's.mailroom.3': "Bu paket hasarlı.", // nieuw, nalezen
    'c.mailroom.q': "Bu paket kimin için?", // nieuw, nalezen
    'c.mailroom.a': "Mali işler için, ikinci katta.", // nieuw, nalezen
    'c.mailroom': "Posta özeldir", // nieuw, nalezen
    'c.mailroom.b': "Posta ve paketler özeldir. Başkası için gelen bir mektubu ya da paketi asla açma. Her parçanın üstündeki adı ve bölümü kontrol et ve onu doğru posta gözüne koy. Bir kurye paket getirdiğinde, imzalamadan önce ona bak: hasarlı mı? Bunu not et. Bir paket garip mi: kokuyor mu, sızdırıyor mu ya da göndereni yok mu? Onu açma ve amirine söyle. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.mailroom.p': "Kutu ıslak ve yırtık.", // nieuw, nalezen
    'c.mailroom.s': "Bir kurye bir paket getiriyor. Bir köşesi ıslak ve yırtık. Ne yaparsın?", // nieuw, nalezen
    'c.mailroom.o1': "İmzalamadan önce hasarı yazarsın.", // nieuw, nalezen
    'c.mailroom.o2': "İmzalarsın ve kimseye söylemezsin.", // nieuw, nalezen
    'c.mailroom.o3': "Her şey var mı diye onu açarsın.", // nieuw, nalezen
    'c.mailroom.w': "İmzaladıktan sonra paket sağlammış gibi görünür. O zaman hasarı kimse ödemez.", // nieuw, nalezen
    'l.meetingroom': "Toplantı odasını hazırlamak", // nieuw, nalezen
    'w.vergaderzaal': "toplantı odası", // nieuw, nalezen
    'w.beamer': "projektör", // nieuw, nalezen
    'w.whiteboard': "beyaz tahta", // nieuw, nalezen
    'w.thermoskan': "termos (kahveyi sıcak tutar)", // nieuw, nalezen
    'w.kopje': "fincan", // nieuw, nalezen
    'w.koffieautomaat': "kahve makinesi", // nieuw, nalezen
    's.meetingroom.1': "Masanın etrafına on sandalye koy.", // nieuw, nalezen
    's.meetingroom.2': "Kahve ve çay hazırla.", // nieuw, nalezen
    's.meetingroom.3': "Projektör çalışmıyor.", // nieuw, nalezen
    'c.meetingroom.q': "Toplantı saat kaçta başlıyor?", // nieuw, nalezen
    'c.meetingroom.a': "Onda. Her şeyin hazır olmasını sağla.", // nieuw, nalezen
    'c.meetingroom': "İlk misafirden önce hazır", // nieuw, nalezen
    'c.meetingroom.b': "Bir toplantı odası, ilk kişi içeri girmeden önce hazır olmalıdır. Sandalyeleri, masayı, projektörü ve kabloları kontrol et. Fincanlar ve sütle birlikte kahve, çay ve su koy. Sıcak içecekleri dikkatlice taşı ve asla insanların üstünden geçirme. Toplantıdan sonra masayı temizle ve her şeyi geri götür. Bir toplantı odasında duyduklarını kendine saklarsın.", // nieuw, nalezen
    'c.meetingroom.p': "Oda hazır.", // nieuw, nalezen
    'c.meetingroom.s': "Toplantı beş dakika sonra başlıyor. Projektör çalışmıyor. Ne yaparsın?", // nieuw, nalezen
    'c.meetingroom.o1': "Bunu hemen düzenleyen kişiye söylersin.", // nieuw, nalezen
    'c.meetingroom.o2': "Beklersin: belki kimsenin ihtiyacı olmaz.", // nieuw, nalezen
    'c.meetingroom.o3': "Masaya bir not bırakırsın.", // nieuw, nalezen
    'c.meetingroom.w': "Beş dakika, onu tamir etmek ya da başka bir oda bulmak için hâlâ yeterli bir süredir. Sonra herkes bekler.", // nieuw, nalezen
    'u.maintenance': "Arızalar, onarımlar ve taşınma", // nieuw, nalezen
    'l.faults': "Arıza bildirmek", // nieuw, nalezen
    'w.melding': "bildirim (bir şeyin yanlış olduğunu söylersin)", // nieuw, nalezen
    'w.lekkage': "sızıntı (su dışarı geliyor)", // nieuw, nalezen
    'w.verwarming': "kalorifer, ısıtma", // nieuw, nalezen
    'w.airco': "klima", // nieuw, nalezen
    'w.afvoer': "gider", // nieuw, nalezen
    'w.verstopt': "tıkalı (hiçbir şey geçmiyor)", // nieuw, nalezen
    's.faults.1': "Arızayı bildiriyorum.", // nieuw, nalezen
    's.faults.2': "Mutfakta bir sızıntı var.", // nieuw, nalezen
    's.faults.3': "Tuvaletin gideri tıkalı.", // nieuw, nalezen
    'c.faults.q': "Burası neden bu kadar soğuk?", // nieuw, nalezen
    'c.faults.a': "Kalorifer bozuk. Teknisyen yarın geliyor.", // nieuw, nalezen
    'c.faults': "Bildir, tek başına tamir etme", // nieuw, nalezen
    'c.faults.b': "Sızıntı, yanmayan bir lamba ya da kapanmayan bir kapı gibi bozuk bir şey mi görüyorsun? Küçük olsa bile bildir: sisteme ya da amirine. Nerede olduğunu, ne gördüğünü ve ne zamandan beri olduğunu söyle. Elektriği, gazı ya da ısıtmayı kendin tamir etme. Gaz kokusu mu alıyorsun? Yakınında bir düğme ya da telefon kullanma, pencereleri aç, insanları dışarı çıkar ve dışarıda yardım çağır. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.faults.p': "Bir arıza bildirmek istiyorum.", // nieuw, nalezen
    'c.faults.s': "Koridorda tavandan su damlıyor. Ne yaparsın?", // nieuw, nalezen
    'c.faults.o1': "Bildirir ve altına bir kova koyarsın.", // nieuw, nalezen
    'c.faults.o2': "Beklersin: belki kendiliğinden durur.", // nieuw, nalezen
    'c.faults.o3': "Bakmak için tavanı açarsın.", // nieuw, nalezen
    'c.faults.w': "Küçük bir sızıntı büyük bir hasara dönüşebilir. Kova zemini kuru tutar, böylece kimse kaymaz.", // nieuw, nalezen
    'l.repairs': "Küçük onarımlar", // nieuw, nalezen
    'w.vervangen': "değiştirmek (yenisini takmak)", // nieuw, nalezen
    'w.deurklink': "kapı kolu", // nieuw, nalezen
    'w.scharnier': "menteşe", // nieuw, nalezen
    'w.gereedschapskist': "alet kutusu", // nieuw, nalezen
    'w.rookmelder': "duman dedektörü", // nieuw, nalezen
    'w.batterij': "pil", // nieuw, nalezen
    's.repairs.1': "Koridordaki lambayı değiştir.", // nieuw, nalezen
    's.repairs.2': "Kapı kolu gevşek.", // nieuw, nalezen
    's.repairs.3': "Sandalyeyi değil, merdiveni al.", // nieuw, nalezen
    'c.repairs.q': "Duman dedektörü mü bipliyor?", // nieuw, nalezen
    'c.repairs.a': "Evet, pil neredeyse bitti.", // nieuw, nalezen
    'c.repairs': "Merdiven, asla sandalye değil", // nieuw, nalezen
    'c.repairs.b': "Bir lamba ya da yüksek bir raf için merdiven kullan, asla bir sandalye, masa ya da kutu kullanma. Onu düz bir zemine koy, tamamen aç ve en üst basamakta durma. Bir lambayı değiştirmeden önce ışığı kapat ve eski lambayı soğumaya bırak. Sadece öğrendiğin onarımları yap. İşin bitince aletlerini alet kutusuna geri koy, böylece kimse onlara takılıp düşmez. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.repairs.p': "Merdiveni getiriyorum.", // nieuw, nalezen
    'c.repairs.s': "Ofiste bir lamba bozuk. Merdiven başka bir katta. Ne yaparsın?", // nieuw, nalezen
    'c.repairs.o1': "Merdiveni getirirsin.", // nieuw, nalezen
    'c.repairs.o2': "Bir ofis sandalyesinin üstüne çıkarsın.", // nieuw, nalezen
    'c.repairs.o3': "Masanın üstüne çıkarsın.", // nieuw, nalezen
    'c.repairs.w': "Bir sandalye kayabilir ya da devrilebilir. Sandalyeden düşmek seni ağır yaralayabilir.", // nieuw, nalezen
    'l.moving': "Bir çalışma yerini taşımak", // nieuw, nalezen
    'w.verhuisdoos': "taşınma kutusu", // nieuw, nalezen
    'w.bureau': "çalışma masası", // nieuw, nalezen
    'w.bureaustoel': "ofis sandalyesi", // nieuw, nalezen
    'w.werkplek': "çalışma yeri (birinin çalıştığı masa)", // nieuw, nalezen
    'w.kamernummer': "oda numarası", // nieuw, nalezen
    'w.plattegrond': "kat planı (binanın bir haritası)", // nieuw, nalezen
    's.moving.1': "Her kutunun üstüne oda numarasını yaz.", // nieuw, nalezen
    's.moving.2': "Kutuları yük arabasına koy.", // nieuw, nalezen
    's.moving.3': "Çalışma yerini boşalt.", // nieuw, nalezen
    'c.moving.q': "Bu masa nereye gitmeli?", // nieuw, nalezen
    'c.moving.a': "On iki numaralı odaya. Kat planına bak.", // nieuw, nalezen
    'c.moving': "Taşınma: akıllıca kaldır, her şeyi etiketle", // nieuw, nalezen
    'c.moving.b': "Taşınma ağır bir iştir. Bir kutuyu fazla doldurma: kitaplar ve dosyalar ağırdır. Dizlerini bükerek, sırtın düz ve yük vücuduna yakın şekilde kaldır. Daha çok kutu için yük arabasını kullan ve bir masayı birlikte kaldırın. Her kutunun, sandalyenin ve bilgisayarın üstüne yeni oda numarasını yaz. Önce kabloları çıkar. Kutuları asla bir koridora ya da bir acil çıkışın önüne koyma.", // nieuw, nalezen
    'c.moving.p': "Bunu kaldırmama yardım edebilir misin?", // nieuw, nalezen
    'c.moving.s': "Ağır bir masayı taşıman gerekiyor. İş arkadaşın molada. Ne yaparsın?", // nieuw, nalezen
    'c.moving.o1': "Yardım beklersin ve onu birlikte kaldırırsınız.", // nieuw, nalezen
    'c.moving.o2': "Onu tek başına sürüklersin.", // nieuw, nalezen
    'c.moving.o3': "Onu tek başına, çok dikkatlice kaldırırsın.", // nieuw, nalezen
    'c.moving.w': "Ağır bir masayı tek başına kaldırırsan sırtını sakatlayabilirsin. Birlikte kolay ve güvenlidir.", // nieuw, nalezen
    'l.closing': "Binayı açmak ve kapatmak", // nieuw, nalezen
    'w.sleutelbos': "anahtar destesi", // nieuw, nalezen
    'w.afsluiten': "kilitlemek (her yeri kapatmak)", // nieuw, nalezen
    'w.ronde': "tur (her odanın önünden geçen bir yürüyüş)", // nieuw, nalezen
    'w.raam': "pencere", // nieuw, nalezen
    'w.alarmcode': "alarm kodu", // nieuw, nalezen
    'w.nachtslot': "gece kilidi (gece için ek kilit)", // nieuw, nalezen
    's.closing.1': "Binanın son turunu yapıyorum.", // nieuw, nalezen
    's.closing.2': "Bütün pencereler kapalı mı?", // nieuw, nalezen
    's.closing.3': "Kapıyı gece kilidine al.", // nieuw, nalezen
    'c.closing.q': "İçeride hâlâ biri var mı?", // nieuw, nalezen
    'c.closing.a': "Hayır, herkes gitti. Her yeri kilitliyorum.", // nieuw, nalezen
    'c.closing': "Alarm kodu gizlidir", // nieuw, nalezen
    'c.closing.b': "Günün sonunda son turu atarsın. İçeride kimsenin kalmadığını, pencerelerin kapalı ve ışıkların sönük olduğunu kontrol et. Acil çıkışlar boş kalır. Anahtarları yanında tut, asla bir çekmecede bırakma. Alarm kodu gizlidir: onu asla kimseye verme, telefonda da verme. Alarm mı çalıyor? Şirketinin adımlarını izle. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.closing.p': "Alarm kodunu kimseye vermem.", // nieuw, nalezen
    'c.closing.s': "Biri arıyor: “Alarm şirketindenim. Kodunuz ne?” Ne yaparsın?", // nieuw, nalezen
    'c.closing.o1': "Hayır der ve amirine söylersin.", // nieuw, nalezen
    'c.closing.o2': "Kodu verirsin: sesi kibar.", // nieuw, nalezen
    'c.closing.o3': "Kodun sadece yarısını verirsin.", // nieuw, nalezen
    'c.closing.w': "Gerçek bir alarm şirketi telefonda kodunu sormaz. Bir hırsız sorabilir.", // nieuw, nalezen
    'u.guarding': "Devriye ve giriş kontrolü", // nieuw, nalezen
    'l.patrol': "Tur", // nieuw, nalezen
    'w.surveilleren': "devriye gezmek (etrafta dolaşıp gözlemek)", // nieuw, nalezen
    'w.zaklamp': "el feneri", // nieuw, nalezen
    'w.terrein': "arazi (bir binanın etrafındaki alan)", // nieuw, nalezen
    'w.hek': "çit, kapı (bahçe kapısı)", // nieuw, nalezen
    'w.inbraak': "hırsızlık (biri çalmak için içeri girer)", // nieuw, nalezen
    'w.openstaan': "açık olmak (kapalı olması gereken bir kapı ya da pencere)", // nieuw, nalezen
    's.patrol.1': "Her iki saatte bir tur atıyorum.", // nieuw, nalezen
    's.patrol.2': "Salonun arkasındaki kapı açık.", // nieuw, nalezen
    's.patrol.3': "El fenerini yanına al.", // nieuw, nalezen
    'c.patrol.q': "Turunda bir şey gördün mü?", // nieuw, nalezen
    'c.patrol.a': "Evet. Arka kapının yanında bir pencere açıktı.", // nieuw, nalezen
    'c.patrol': "Bak ve bildir, kahramanlık yapma", // nieuw, nalezen
    'c.patrol.b': "Turunda bakarsın: kapılar ve pencereler kapalı mı, çit sağlam mı, orada olmaması gereken biri var mı? Gördüklerini saatiyle birlikte yaz. Kırık bir pencere ya da gece bir insan gibi garip bir şey mi görüyorsun? Tek başına içeri girme. Telsizle ya da telefonla kontrol merkezini ya da polisi ara ve güvenli bir yerde bekle. Önce kendi güvenliğin gelir. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.patrol.p': "Çitin yanında birini görüyorum.", // nieuw, nalezen
    'c.patrol.s': "Gece zorla açılmış bir kapı görüyorsun. İçeriden ses duyuyorsun. Ne yaparsın?", // nieuw, nalezen
    'c.patrol.o1': "Dışarıda kalır ve yardım çağırırsın.", // nieuw, nalezen
    'c.patrol.o2': "Hızlıca içeri girer ve bakarsın.", // nieuw, nalezen
    'c.patrol.o3': "İçeriye geldiğini bağırırsın.", // nieuw, nalezen
    'c.patrol.w': "İçerideki bir hırsız tehlikeli olabilir. Polis ne yapacağını bilir; senin işin görmek ve bildirmek.", // nieuw, nalezen
    'l.access': "Giriş kontrolü", // nieuw, nalezen
    'w.slagboom': "bariyer (yolun üstünde yukarı kalkan bir çubuk)", // nieuw, nalezen
    'w.toegangspas': "giriş kartı (kapıyı açan bir kart)", // nieuw, nalezen
    'w.legitimatie': "kimlik belgesi (pasaport ya da kimlik kartı)", // nieuw, nalezen
    'w.draaihek': "turnike (aynı anda tek kişi için dönen bir geçit)", // nieuw, nalezen
    'w.kenteken': "plaka numarası (bir arabanın harfleri ve rakamları)", // nieuw, nalezen
    'w.toegang': "giriş izni (içeri girebilirsin)", // nieuw, nalezen
    's.access.1': "Kimliğinizi görebilir miyim?", // nieuw, nalezen
    's.access.2': "Kartınız çalışmıyor. Bir telefon edeceğim.", // nieuw, nalezen
    's.access.3': "Bariyeri açıyorum.", // nieuw, nalezen
    'c.access.q': "İçeri girebilir miyim? Kartımı unuttum.", // nieuw, nalezen
    'c.access.a': "Üzgünüm, kartsız içeri giremezsiniz.", // nieuw, nalezen
    'c.access': "Kart yoksa giriş yok", // nieuw, nalezen
    'c.access.b': "Kapıda ya da bankoda içeri kimin girdiğini kontrol edersin. Herkesin bir kartı olmalı ya da adı listede olmalı. Biri kızgın ya da aceleci olduğunda da güler yüzlü ol. Biri patron olduğunu söylediği için istisna yapma: kontrol et. Kendi kartını asla kimseye ödünç verme ve asla birinin arkandan içeri girmesine izin verme. Kaybolan bir kart hemen bildirilmelidir. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.access.p': "Kartınızı görebilir miyim?", // nieuw, nalezen
    'c.access.s': "Takım elbiseli bir adam diyor ki: “Ben yeni müdürüm. Henüz kartım yok.” Ne yaparsın?", // nieuw, nalezen
    'c.access.o1': "İçeri almadan önce kontrol edersin.", // nieuw, nalezen
    'c.access.o2': "İçeri alırsın: önemli birine benziyor.", // nieuw, nalezen
    'c.access.o3': "Ona kendi kartını verirsin.", // nieuw, nalezen
    'c.access.w': "Herkes müdür olduğunu söyleyebilir. Kısa bir kontrol binayı güvende tutar ve gerçek bir müdür bunu anlar.", // nieuw, nalezen
    'l.cameras': "Kameralar ve kontrol merkezi", // nieuw, nalezen
    'w.meldkamer': "kontrol merkezi (insanların kameraları izlediği ve çağrılara baktığı yer)", // nieuw, nalezen
    'w.beeldscherm': "ekran, monitör", // nieuw, nalezen
    'w.camerabeelden': "kamera görüntüleri (kameranın kaydettikleri)", // nieuw, nalezen
    'w.inzoomen': "yakınlaştırmak", // nieuw, nalezen
    'w.bewegingsmelder': "hareket sensörü (bir şey hareket edince bunu görür)", // nieuw, nalezen
    'w.verdachte': "şüpheli", // nieuw, nalezen
    's.cameras.1': "Üç numaralı kamerada çitin yanında birini görüyorum.", // nieuw, nalezen
    's.cameras.2': "Yakınlaştırıyorum.", // nieuw, nalezen
    's.cameras.3': "Kontrol merkezi polisi arıyor.", // nieuw, nalezen
    'c.cameras.q': "Ekranda ne görüyorsun?", // nieuw, nalezen
    'c.cameras.a': "Çitin yanında bir adam. Bir iş arkadaşımı gönderiyorum.", // nieuw, nalezen
    'c.cameras': "Kamera görüntüleri özeldir", // nieuw, nalezen
    'c.cameras.b': "Kameralar insanları kaydeder: personeli, ziyaretçileri ve oradan geçen insanları. Ekranlarda gördüklerin özeldir. Sadece işin için izle ve ekranı asla telefonunla çekme. Görüntüleri asla arkadaşlarına gönderme ya da internete koyma. Bir olay mı var? Kamerayı ve saati yaz ve amirine söyle. Görüntüleri kimin alacağına, örneğin polise, sadece şirketin karar verir. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.cameras.p': "Bunu göstermeye iznim yok.", // nieuw, nalezen
    'c.cameras.s': "Bir iş arkadaşın kameralardan komik bir klip göndermeni istiyor. Ne yaparsın?", // nieuw, nalezen
    'c.cameras.o1': "Hayır dersin: görüntüler özeldir.", // nieuw, nalezen
    'c.cameras.o2': "Sadece ona gönderirsin.", // nieuw, nalezen
    'c.cameras.o3': "Ekranı telefonunla çekersin.", // nieuw, nalezen
    'c.cameras.w': "Görüntülerdeki insanlar paylaşılmayı kabul etmedi. Göndermek işine mal olabilir.", // nieuw, nalezen
    'l.report': "Telsiz ve rapor", // nieuw, nalezen
    'w.portofoon': "telsiz", // nieuw, nalezen
    'w.rapport': "rapor (olanların yazılı hâli)", // nieuw, nalezen
    'w.incident': "olay (ters giden bir şey)", // nieuw, nalezen
    'w.tijdstip': "saat (bir şeyin olduğu an)", // nieuw, nalezen
    'w.logboek': "kayıt defteri (her şeyi yazdığın bir defter ya da uygulama)", // nieuw, nalezen
    'w.oproepen': "çağırmak (telsizle)", // nieuw, nalezen
    's.report.1': "Olayın raporunu yazıyorum.", // nieuw, nalezen
    's.report.2': "Saat tam olarak kaçtı?", // nieuw, nalezen
    's.report.3': "Seni iyi duyamıyorum. Tekrar söyle.", // nieuw, nalezen
    'c.report.q': "Rapora ne yazılmalı?", // nieuw, nalezen
    'c.report.a': "Ne olduğu, nerede ve saat kaçta olduğu.", // nieuw, nalezen
    'c.report': "Hemen yaz", // nieuw, nalezen
    'c.report.b': "Raporu bir olaydan hemen sonra, hâlâ iyi hatırlarken yaz. Kendi gördüğünü ve duyduğunu yaz: ne oldu, nerede, saat kaçta ve orada kim vardı. Düşündüklerini değil, gerçekleri yaz. Telsizde kısa ve açık konuş ve karşındaki bitirene kadar bekle. Kim olduğunu ve nerede olduğunu söyle. İyi bir rapor polise, şirketine ve sana yardım eder.", // nieuw, nalezen
    'c.report.p': "Hemen yazıyorum.", // nieuw, nalezen
    'c.report.s': "Yoğun bir geceden sonra çok yorgunsun. Küçük bir olay oldu. Ne yaparsın?", // nieuw, nalezen
    'c.report.o1': "Eve gitmeden önce raporu yazarsın.", // nieuw, nalezen
    'c.report.o2': "Yarın, iyi bir uykudan sonra yazarsın.", // nieuw, nalezen
    'c.report.o3': "Yazmazsın: sadece küçük bir şeydi.", // nieuw, nalezen
    'c.report.w': "Yarın ayrıntıları unutursun. Saati ya da yeri olmayan bir rapor kimseye yardım etmez.", // nieuw, nalezen
    'u.incidents': "Acil durumlar ve mağaza", // nieuw, nalezen
    'l.evacuation': "Yangın ve tahliye", // nieuw, nalezen
    'w.brandmelder': "yangın alarm butonu (yangın olunca bastığın kırmızı bir kutu)", // nieuw, nalezen
    'w.brandweer': "itfaiye", // nieuw, nalezen
    'w.branddeur': "yangın kapısı (ateşi ve dumanı durdurur)", // nieuw, nalezen
    'w.brandmeldcentrale': "yangın alarm paneli (alarmın nerede olduğunu gösterir)", // nieuw, nalezen
    'w.ontruimingsplan': "tahliye planı (herkes dışarı çıkmak zorunda kalınca kimin ne yapacağı)", // nieuw, nalezen
    'w.sirene': "siren", // nieuw, nalezen
    's.evacuation.1': "İkinci salonda yangın alarmı var.", // nieuw, nalezen
    's.evacuation.2': "Yangın kapılarını kapalı tut.", // nieuw, nalezen
    's.evacuation.3': "İtfaiyeyi girişte bekliyorum.", // nieuw, nalezen
    'c.evacuation.q': "Herkes dışarıda mı?", // nieuw, nalezen
    'c.evacuation.a': "Hayır, listedeki iki kişi hâlâ eksik.", // nieuw, nalezen
    'c.evacuation': "Yangın: önce alarm, sonra dışarı", // nieuw, nalezen
    'c.evacuation.b': "Ateş ya da duman mı görüyorsun? Yangın alarm butonuna bas ya da 112’yi ara. Sonra insanların kaçış yollarından dışarı çıkmasına yardım et, asla asansörle değil. Arkandan kapıları kapat, ama kilitleme. Bir yangını sadece küçükse ve nasıl yapıldığını öğrendiysen söndürmeye çalış. Toplanma noktasına git ve orada kimin olduğunu say. İtfaiyeyi girişte karşıla ve onlara bildiklerini anlat. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.evacuation.p': "Herkes dışarı, toplanma noktasına.", // nieuw, nalezen
    'c.evacuation.s': "Yangın alarmı çalıyor. Bir adam asansöre binmek istiyor. Ne yaparsın?", // nieuw, nalezen
    'c.evacuation.o1': "Onu merdivenlere yönlendirirsin.", // nieuw, nalezen
    'c.evacuation.o2': "Binmesine izin verirsin: asansör daha hızlı.", // nieuw, nalezen
    'c.evacuation.o3': "Onunla birlikte asansöre binersin.", // nieuw, nalezen
    'c.evacuation.w': "Yangında asansör durabilir ya da dumanla dolabilir. Merdivenler güvenli çıkış yoludur.", // nieuw, nalezen
    'l.firstaid': "İlk yardım ve 112", // nieuw, nalezen
    'w.ehbo': "ilk yardım", // nieuw, nalezen
    'w.aed': "AED (duran bir kalbe yardım eden bir cihaz)", // nieuw, nalezen
    'w.reanimeren': "kalp masajı yapmak (bir hayat kurtarmak için göğse bastırmak)", // nieuw, nalezen
    'w.bewusteloos': "bilinçsiz (kişi uyanmıyor)", // nieuw, nalezen
    'w.ademen': "nefes almak", // nieuw, nalezen
    'w.alarmnummer': "acil durum numarası (112)", // nieuw, nalezen
    's.firstaid.1': "112’yi ara. Ambulans iste.", // nieuw, nalezen
    's.firstaid.2': "AED’yi resepsiyondan getir.", // nieuw, nalezen
    's.firstaid.3': "Nefes almıyor. Kalp masajı yapacağım.", // nieuw, nalezen
    'c.firstaid.q': "AED nerede?", // nieuw, nalezen
    'c.firstaid.a': "Girişte, asansörün yanında.", // nieuw, nalezen
    'c.firstaid': "112’yi ara, kalp masajına başla, AED’yi getir", // nieuw, nalezen
    'c.firstaid.b': "Biri yere düşüyor ve tepki vermiyor mu? Hemen 112’yi ara ya da başka birine arat. Kişinin normal nefes alıp almadığını kontrol et. Almıyorsa: kalp masajına başla ve birine AED’yi getirt. AED konuşur ve sana ne yapacağını söyler; yanlış yapamazsın. Ambulans devralana kadar devam et. İlk yardım kursun var mı? İş arkadaşlarına söyle, böylece kimi çağıracaklarını bilirler.", // nieuw, nalezen
    'c.firstaid.p': "112’yi ara ve AED’yi getir.", // nieuw, nalezen
    'c.firstaid.s': "Bir adam holde yere düşüyor. Kıpırdamıyor ve nefes almıyor. Ne yaparsın?", // nieuw, nalezen
    'c.firstaid.o1': "112’yi arar ve kalp masajına başlarsın.", // nieuw, nalezen
    'c.firstaid.o2': "Uyanacak mı diye beklersin.", // nieuw, nalezen
    'c.firstaid.o3': "Onu kaldırır ve bir sandalyeye oturtursun.", // nieuw, nalezen
    'c.firstaid.w': "Kalp durduğunda her dakika önemlidir. Kalp masajı ve AED, ambulans gelmeden önce bir hayat kurtarabilir.", // nieuw, nalezen
    'l.shoplifting': "Mağaza hırsızlığı", // nieuw, nalezen
    'w.winkeldiefstal': "mağazadan hırsızlık", // nieuw, nalezen
    'w.heterdaad': "suçüstü (olurken görürsün)", // nieuw, nalezen
    'w.aanhouden': "alıkoymak (polis gelene kadar birini tutmak)", // nieuw, nalezen
    'w.detectiepoortje': "güvenlik kapısı (kapıda öter)", // nieuw, nalezen
    'w.alarmlabel': "alarm etiketi (kapının ötmesini sağlar)", // nieuw, nalezen
    'w.verstoppen': "saklamak", // nieuw, nalezen
    's.shoplifting.1': "Çıkıştaki kapı ötüyor.", // nieuw, nalezen
    's.shoplifting.2': "Olurken gördüm.", // nieuw, nalezen
    's.shoplifting.3': "Polis gelene kadar onu tutuyorum.", // nieuw, nalezen
    'c.shoplifting.q': "Çantasını arayabilir miyim?", // nieuw, nalezen
    'c.shoplifting.a': "Hayır. Bunu polis yapar.", // nieuw, nalezen
    'c.shoplifting': "Mağaza hırsızlığı: izle, bildir, kaba kuvvet yok", // nieuw, nalezen
    'c.shoplifting.b': "Birinin çaldığını mı gördün? Sakin kal ve hemen polisi ara. Bazı mağazalar bir güvenlik görevlisinin hırsızı polis gelene kadar tutmasına izin verir; başkaları der ki: sadece izle, bildir ve kişinin neye benzediğini aklında tut. Asla vurma ya da tekmeleme ve asla birini boğazından tutma. Bir insanı, ceplerini ya da çantasını asla arama: bu polisin işidir. Gördüklerini yaz ve kamera görüntülerini sakla. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.shoplifting.p': "Benimle gelir misiniz lütfen?", // nieuw, nalezen
    'c.shoplifting.s': "Bir kadının çantasına bir şişe koyduğunu gördün. Dışarı çıkıyor. Ne yaparsın?", // nieuw, nalezen
    'c.shoplifting.o1': "Onu sakince durdurur ve polisi ararsın.", // nieuw, nalezen
    'c.shoplifting.o2': "Kapıda çantasını hızlıca ararsın.", // nieuw, nalezen
    'c.shoplifting.o3': "Onu sertçe yere itersin.", // nieuw, nalezen
    'c.shoplifting.w': "Bir insanı aramak polisin işidir ve kaba kuvvet birini yaralayabilir ve seni başını belaya sokabilir.", // nieuw, nalezen
    'l.aggression': "Zor insanlar", // nieuw, nalezen
    'w.agressie': "saldırganlık (kızgın, şiddetli davranış)", // nieuw, nalezen
    'w.schelden': "küfretmek (birine)", // nieuw, nalezen
    'w.kalmeren': "sakinleşmek", // nieuw, nalezen
    'w.afstand': "mesafe", // nieuw, nalezen
    'w.huisverbod': "giriş yasağı (artık buraya giremezsin)", // nieuw, nalezen
    'w.bodycam': "yaka kamerası (üniformandaki küçük bir kamera)", // nieuw, nalezen
    's.aggression.1': "Sakin olun beyefendi. Size yardım etmek istiyorum.", // nieuw, nalezen
    's.aggression.2': "Mesafeni koru ve sakin kal.", // nieuw, nalezen
    's.aggression.3': "Giriş yasağınız var. Şimdi gitmeniz gerekiyor.", // nieuw, nalezen
    'c.aggression.q': "Neden içeri giremiyorum?", // nieuw, nalezen
    'c.aggression.a': "Burada giriş yasağınız var.", // nieuw, nalezen
    'c.aggression': "Sakin kal, mesafeni koru", // nieuw, nalezen
    'c.aggression.b': "Kızgın bir insan, sen sakin kaldığında daha hızlı sakinleşir. Yavaş ve sessizce konuş ve kişiye “u” de. Aranızda bir kol boyu ya da daha fazla mesafe bırak ve arkanda bir çıkış yolu tut. Kişiye dokunma ve sen de bağırma. Tehlikeli mi oluyor? Geri çekil ve bir iş arkadaşını ya da polisi çağır. Sonra bunu yaz. Kötü bir olaydan sonra bunu biriyle konuş. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.aggression.p': "Sakin olun. Size yardım etmek istiyorum.", // nieuw, nalezen
    'c.aggression.s': "Bir adam sana bağırıyor ve çok yaklaşıyor. Ne yaparsın?", // nieuw, nalezen
    'c.aggression.o1': "Geri çekilir ve sakince konuşursun.", // nieuw, nalezen
    'c.aggression.o2': "Ondan daha yüksek sesle bağırırsın.", // nieuw, nalezen
    'c.aggression.o3': "Onu kendinden uzağa itersin.", // nieuw, nalezen
    'c.aggression.w': "Sakin sözler ve mesafe gerginliği azaltır. Bağırmak ya da itmek durumu daha kötü yapar.", // nieuw, nalezen
    'u.foodhygiene': "Hijyen ve soğuk", // nieuw, nalezen
    'l.hygienelock': "Hijyen kabini", // nieuw, nalezen
    'w.hygienesluis': "hijyen kabini (içeri girmeden önce temizlendiğin oda)", // nieuw, nalezen
    'w.baardnetje': "sakal filesi", // nieuw, nalezen
    'w.laarzenwasser': "çizme yıkayıcı (çizmelerini temizleyen fırçalar)", // nieuw, nalezen
    'w.desinfecteren': "dezenfekte etmek (mikropları öldürmek)", // nieuw, nalezen
    'w.werkjas': "iş önlüğü", // nieuw, nalezen
    'w.bacterie': "mikrop, bakteri", // nieuw, nalezen
    's.hygienelock.1': "Ellerini yıka ve dezenfekte et.", // nieuw, nalezen
    's.hygienelock.2': "Boneni ve sakal fileni tak.", // nieuw, nalezen
    's.hygienelock.3': "Çizme yıkayıcıdan geç.", // nieuw, nalezen
    'c.hygienelock.q': "Saatimi takılı tutabilir miyim?", // nieuw, nalezen
    'c.hygienelock.a': "Hayır, bütün takılar çıkarılır.", // nieuw, nalezen
    'c.hygienelock': "Her seferinde temiz gir", // nieuw, nalezen
    'c.hygienelock.b': "Bir gıda fabrikasında yiyecek için en büyük tehlike sensin: mikroplar ellerinden, saçından ve kıyafetlerinden gelir. Bu yüzden her içeri girişinde hijyen kabininden geç, moladan ya da tuvaletten sonra da. Bone takılı, sakalın varsa sakal filesi takılı, temiz iş kıyafeti, bütün takılar çıkarılmış. Ellerini sabunla yıka, kurula ve dezenfekte et. Hasta mısın, ishalin ya da kusman mı var? Başlamadan önce amirine söyle. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.hygienelock.p': "İshalim var. Bugün çalışabilir miyim?", // nieuw, nalezen
    'c.hygienelock.s': "Tuvaletten dönüyorsun. İş arkadaşın diyor ki: “Kabini atla, işimiz çok.” Ne yaparsın?", // nieuw, nalezen
    'c.hygienelock.o1': "Yine de kabinden geçersin.", // nieuw, nalezen
    'c.hygienelock.o2': "Sadece bu sefer atlarsın.", // nieuw, nalezen
    'c.hygienelock.o3': "Sadece yeni eldiven giyersin.", // nieuw, nalezen
    'c.hygienelock.w': "Tuvaletten gelen mikroplar birçok müşteriyi hasta edebilir. Kabinde birkaç dakika bunu önler.", // nieuw, nalezen
    'l.allergens': "Alerjenler", // nieuw, nalezen
    'w.allergeen': "alerjen (bazı insanları çok hasta eden yiyecek)", // nieuw, nalezen
    'w.noten': "kuruyemiş (fındık, ceviz gibi)", // nieuw, nalezen
    'w.pinda': "yer fıstığı", // nieuw, nalezen
    'w.gluten': "gluten (buğdayda, yani ekmekte ve kekte)", // nieuw, nalezen
    'w.sesam': "susam (küçük tohumlar, örneğin ekmeğin üstünde)", // nieuw, nalezen
    'w.kruisbesmetting': "çapraz bulaşma (bir şey olmaması gereken bir yiyeceğe karışır)", // nieuw, nalezen
    's.allergens.1': "Bu ürün kuruyemiş içerir.", // nieuw, nalezen
    's.allergens.2': "İçinde hangi alerjenlerin olduğuna etikette bak.", // nieuw, nalezen
    's.allergens.3': "Yer fıstığından sonra her şeyi iyice temizle.", // nieuw, nalezen
    'c.allergens.q': "Bu kap ötekilerle birlikte gidebilir mi?", // nieuw, nalezen
    'c.allergens.a': "Hayır, içinde kuruyemiş var.", // nieuw, nalezen
    'c.allergens': "Bir iz bile yeter", // nieuw, nalezen
    'c.allergens.b': "Bazı insanlar için çok az miktarda kuruyemiş, yer fıstığı, süt, yumurta, gluten ya da susam hayati tehlike yaratabilir. Bu yüzden etiket bir üründe tam olarak ne olduğunu söylemelidir. Alerjenleri ayrı tut: kendi kapları, aletleri ve renkleri. Alerjenli bir üründen sonra, bir sonraki üründen önce hat temizlenir. Bir malzemeyi asla değiştirme, aynı görünse bile. Emin değil misin? Sor. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.allergens.p': "Bunun içinde kuruyemiş var mı?", // nieuw, nalezen
    'c.allergens.s': "Bademler bitti. Bir iş arkadaşın diyor ki: “Fındık kullan, kimse fark etmez.” Ne yaparsın?", // nieuw, nalezen
    'c.allergens.o1': "Hayır der ve amirine söylersin.", // nieuw, nalezen
    'c.allergens.o2': "Kullanırsın: kuruyemiş kuruyemiştir.", // nieuw, nalezen
    'c.allergens.o3': "Kullanırsın ve etikette hiçbir şeyi değiştirmezsin.", // nieuw, nalezen
    'c.allergens.w': "Etiket içinde ne olduğunu söylemelidir. Yanlış bir kuruyemiş, alerjisi olan birini çok hasta edebilir.", // nieuw, nalezen
    'l.coldroom': "Soğuk oda ve dondurucu", // nieuw, nalezen
    'w.temperatuur': "sıcaklık", // nieuw, nalezen
    'w.graden': "derece (°C)", // nieuw, nalezen
    'w.bevroren': "donmuş", // nieuw, nalezen
    'w.ontdooien': "çözdürmek (buzunu çözmek)", // nieuw, nalezen
    'w.koelketen': "soğuk zincir (yiyecek baştan sona soğuk kalır)", // nieuw, nalezen
    'w.thermokleding': "termal kıyafet (soğuk için sıcak kıyafetler)", // nieuw, nalezen
    's.coldroom.1': "Dondurucu odada eksi on sekiz derece.", // nieuw, nalezen
    's.coldroom.2': "Eti hemen soğuk odaya koy.", // nieuw, nalezen
    's.coldroom.3': "Sıcaklığı listeye yaz.", // nieuw, nalezen
    'c.coldroom.q': "Soğuk oda neden ötüyor?", // nieuw, nalezen
    'c.coldroom.a': "Kapı açık. Hemen kapat.", // nieuw, nalezen
    'c.coldroom': "Soğukta çalışmak: sıcak giyin, ürünü soğuk tut", // nieuw, nalezen
    'c.coldroom.b': "Yiyecek baştan sona soğuk kalmalıdır: kamyondan soğuk odaya, oradan da mağazaya. Bu yüzden soğuk ürünleri hemen kaldır ve soğuk odanın ve dondurucunun kapılarını kapalı tut. Sıcaklığı kontrol et ve yaz. Dondurucuda termal kıyafetini, eldivenlerini ve bir bere giy ve zamanında sıcak bir mola ver. Kapıyı içeriden her zaman açabildiğinden emin ol. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.coldroom.p': "Burası fazla sıcak. Soğutma çalışmıyor.", // nieuw, nalezen
    'c.coldroom.s': "Soğuk odanın termometresi normalden çok daha yüksek bir sayı gösteriyor. Ne yaparsın?", // nieuw, nalezen
    'c.coldroom.o1': "Hemen amirine söylersin.", // nieuw, nalezen
    'c.coldroom.o2': "Beklersin: yeniden soğur.", // nieuw, nalezen
    'c.coldroom.o3': "Listeye normal sayıyı yazarsın.", // nieuw, nalezen
    'c.coldroom.w': "Fazla sıcak, mikropların ürediği anlamına gelir. Yiyeceğin hâlâ güvenli olup olmadığına amirin karar verir.", // nieuw, nalezen
    'l.foreignbody': "Yiyecekte cam, metal ve plastik", // nieuw, nalezen
    'w.metaaldetector': "metal dedektörü", // nieuw, nalezen
    'w.glasbreuk': "cam kırılması (kırılan cam)", // nieuw, nalezen
    'w.splinter': "kıymık (küçük, keskin bir parça)", // nieuw, nalezen
    'w.vreemdvoorwerp': "yabancı madde (yiyecekte olmaması gereken bir şey)", // nieuw, nalezen
    'w.vervuild': "kirlenmiş (içine kirli bir şey girmiş)", // nieuw, nalezen
    'w.ploegleider': "vardiya şefi", // nieuw, nalezen
    's.foreignbody.1': "Metal dedektörü ötüyor. Hattı durdur.", // nieuw, nalezen
    's.foreignbody.2': "İkinci hatta cam kırıldı.", // nieuw, nalezen
    's.foreignbody.3': "Ürünü ret kutusuna koy.", // nieuw, nalezen
    'c.foreignbody.q': "Bu plastik parçasıyla ne yapayım?", // nieuw, nalezen
    'c.foreignbody.a': "Onu vardiya şefine göster.", // nieuw, nalezen
    'c.foreignbody': "Yiyecekte bir şey mi var? Durdur ve bildir", // nieuw, nalezen
    'c.foreignbody.b': "Cam, metal, plastik, yara bandı ya da saç asla yiyeceğe karışmamalıdır. Metal dedektörü ötüyor mu ya da garip bir şey mi buluyorsun? Ürünü kenara koy ve vardiya şefine söyle. Cam mı kırıldı? Yakınındaki hattı durdur: neyin atılması gerektiğine vardiya şefi karar verir. Sadece mavi yara bandı kullan, böylece kolayca görülürler. İş alanına asla cam, kalem ya da açıkta duran eşyalar götürme. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.foreignbody.p': "Üründe bir şey buldum.", // nieuw, nalezen
    'c.foreignbody.s': "Hattın üstünde cam bir lamba kırılıyor. Ürünler akmaya devam ediyor. Ne yaparsın?", // nieuw, nalezen
    'c.foreignbody.o1': "Hattı durdurur ve vardiya şefini çağırırsın.", // nieuw, nalezen
    'c.foreignbody.o2': "Görebildiğin camları toplarsın.", // nieuw, nalezen
    'c.foreignbody.o3': "Devam edersin: dedektör camı bulur.", // nieuw, nalezen
    'c.foreignbody.w': "Bir metal dedektörü camı bulmaz. Göremediğin küçük parçalar bir müşteriyi ağır yaralayabilir.", // nieuw, nalezen
    'u.foodline': "Üretim hattı", // nieuw, nalezen
    'l.cutting': "Kesmek ve tartmak", // nieuw, nalezen
    'w.uitbenen': "kemiğini ayırmak (etin kemiklerini kesip çıkarmak)", // nieuw, nalezen
    'w.fileren': "fileto yapmak (balığı ya da eti yassı parçalara kesmek)", // nieuw, nalezen
    'w.portie': "porsiyon", // nieuw, nalezen
    'w.wegen': "tartmak", // nieuw, nalezen
    'w.gewicht': "ağırlık", // nieuw, nalezen
    'w.snijplank': "kesme tahtası", // nieuw, nalezen
    's.cutting.1': "Her porsiyonu tart.", // nieuw, nalezen
    's.cutting.2': "Ağırlık fazla düşük.", // nieuw, nalezen
    's.cutting.3': "Başlamadan önce bıçağını bile.", // nieuw, nalezen
    'c.cutting.q': "Bir kaba ne kadar girmeli?", // nieuw, nalezen
    'c.cutting.a': "Beş yüz gram. Teraziye bak.", // nieuw, nalezen
    'c.cutting': "Keskin bıçak, güvenli el", // nieuw, nalezen
    'c.cutting.b': "Keskin bir bıçak kör bir bıçaktan daha güvenlidir: daha az kuvvet gerekir, bu yüzden daha az kayar. Öbür elinde her zaman kesilmeye dayanıklı eldivenini giy. Vücudundan dışarı doğru kes. Bir bıçağı tahtanın üstüne düz bırak, asla bir lavaboya ya da etin altına koyma. Düşen bir bıçağı yakalamaya çalışma: geri çekil. Bıçağı ucu aşağıda, bacağına yakın taşı. Küçük bir kesik bile kapatılmalı ve bildirilmelidir.", // nieuw, nalezen
    'c.cutting.p': "Bıçağım kör.", // nieuw, nalezen
    'c.cutting.s': "Bıçağın elinden kayıyor ve düşüyor. Ne yaparsın?", // nieuw, nalezen
    'c.cutting.o1': "Geri çekilir ve düşmesine izin verirsin.", // nieuw, nalezen
    'c.cutting.o2': "Onu hızlıca yakalarsın.", // nieuw, nalezen
    'c.cutting.o3': "Onu ayağınla durdurursun.", // nieuw, nalezen
    'c.cutting.w': "Düşen bir bıçağı tutarsan derin keser. Yerde hiçbir zarar veremez.", // nieuw, nalezen
    'l.labels': "Paketleme ve etiketler", // nieuw, nalezen
    'w.etiketteren': "etiketlemek (etiket yapıştırmak)", // nieuw, nalezen
    'w.lotnummer': "parti numarası (bir parti ürün için tek bir numara)", // nieuw, nalezen
    'w.vacuum': "vakumlu (bütün hava çıkmış)", // nieuw, nalezen
    'w.schaal': "tabak (yiyecek için düz bir kap)", // nieuw, nalezen
    'w.printer': "yazıcı", // nieuw, nalezen
    'w.omdoos': "dış koli (küçük paketlerin etrafındaki büyük kutu)", // nieuw, nalezen
    's.labels.1': "Etiketteki tarihin doğru olup olmadığını kontrol et.", // nieuw, nalezen
    's.labels.2': "Bu paket vakumlu değil. Onu yeniden paketle.", // nieuw, nalezen
    's.labels.3': "Parti numarasını listeye yaz.", // nieuw, nalezen
    'c.labels.q': "Üstüne hangi tarih gelmeli?", // nieuw, nalezen
    'c.labels.a': "On gün sonrası. Listeye bak.", // nieuw, nalezen
    'c.labels': "Yanlış bir etiket tehlikelidir", // nieuw, nalezen
    'c.labels.b': "Etiket müşteriye içinde ne olduğunu, ne kadar ağır olduğunu ve ne zamana kadar iyi olduğunu söyler. Yanlış bir tarih ya da yanlış bir etiket insanları hasta edebilir, örneğin bir alerjen eksik olduğunda. Bu yüzden her yeni üretimin ilk etiketlerini kontrol et: ürünü, tarihi ve parti numarasını. Bir şey yanlış mı? Dur ve amirine söyle. Yanlış etiketli ürünler kenara konur, asla satılmaz. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.labels.p': "Etiket doğru değil.", // nieuw, nalezen
    'c.labels.s': "Etiketlerdeki tarihin bir hafta fazla ileri olduğunu görüyorsun. Ne yaparsın?", // nieuw, nalezen
    'c.labels.o1': "Paketlemeyi durdurur ve amirine söylersin.", // nieuw, nalezen
    'c.labels.o2': "Devam edersin: bir hafta önemli değil.", // nieuw, nalezen
    'c.labels.o3': "Tarihi bir kalemle değiştirirsin.", // nieuw, nalezen
    'c.labels.w': "Yanlış bir tarih, insanların artık güvenli olmayan yiyecekleri yemesine yol açabilir. Şimdi durmak, sonra geri çağırmaktan iyidir.", // nieuw, nalezen
    'l.linecleaning': "Hattı temizlemek", // nieuw, nalezen
    'w.schuim': "köpük", // nieuw, nalezen
    'w.hogedrukspuit': "basınçlı yıkama makinesi", // nieuw, nalezen
    'w.naspoelen': "durulamak (temiz suyla yıkamak)", // nieuw, nalezen
    'w.demonteren': "sökmek (parçalarına ayırmak)", // nieuw, nalezen
    'w.borstel': "fırça", // nieuw, nalezen
    'w.restjes': "artıklar (küçük yiyecek parçaları)", // nieuw, nalezen
    's.linecleaning.1': "Önce makineyi kapat.", // nieuw, nalezen
    's.linecleaning.2': "Köpüğü bandın üstüne püskürt.", // nieuw, nalezen
    's.linecleaning.3': "Sonra her şeyi temiz suyla durula.", // nieuw, nalezen
    'c.linecleaning.q': "Bant temizlendi mi?", // nieuw, nalezen
    'c.linecleaning.a': "Henüz değil. Daha durulamam gerekiyor.", // nieuw, nalezen
    'c.linecleaning': "Temizlemeden önce elektriği kes", // nieuw, nalezen
    'c.linecleaning.b': "Çalışan bir makineyi asla temizleme. Onu kapat ve kimsenin onu yeniden çalıştıramayacağından emin ol: şirketinin adımlarını izle. Doğru eldiveni, gözlüğü ve çizmeleri giy: temizlik ürünleri cildini ve gözlerini yakabilir. Ürünleri asla karıştırma. Önce artıkları al, sonra köpükle, fırçala ve durula. Elektrik kutularına ya da fişlere su püskürtme. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.linecleaning.p': "Makine kapalı mı?", // nieuw, nalezen
    'c.linecleaning.s': "Bantta biraz et sıkışmış. Makine hâlâ çalışıyor. Ne yaparsın?", // nieuw, nalezen
    'c.linecleaning.o1': "Önce kapatır, sonra çıkarırsın.", // nieuw, nalezen
    'c.linecleaning.o2': "Elinle hızlıca çekip çıkarırsın.", // nieuw, nalezen
    'c.linecleaning.o3': "Bir bıçakla itip çıkarırsın.", // nieuw, nalezen
    'c.linecleaning.w': "Çalışan bir bant elini bir saniyede içeri çekebilir. Kapatmak sadece bir an sürer.", // nieuw, nalezen
    'l.haccp': "Kontrol etmek ve yazmak (HACCP)", // nieuw, nalezen
    'w.controlepunt': "kontrol noktası (bir şeyi kontrol etmen gereken bir adım)", // nieuw, nalezen
    'w.kerntemperatuur': "iç sıcaklık (yiyeceğin içindeki sıcaklık)", // nieuw, nalezen
    'w.prikthermometer': "batırma termometresi (yiyeceğin içine batırırsın)", // nieuw, nalezen
    'w.afwijking': "sapma (bir şey olması gerektiği gibi değil)", // nieuw, nalezen
    'w.steekproef': "numune kontrolü (birkaç ürünü test edersin)", // nieuw, nalezen
    'w.kwaliteitsdienst': "kalite bölümü (QA)", // nieuw, nalezen
    's.haccp.1': "İç sıcaklığı batırma termometresiyle ölç.", // nieuw, nalezen
    's.haccp.2': "Her şeyi listeye yaz.", // nieuw, nalezen
    's.haccp.3': "Bir şey mi yanlış? Hemen bildir.", // nieuw, nalezen
    'c.haccp.q': "Neden her şeyi yazmam gerekiyor?", // nieuw, nalezen
    'c.haccp.a': "Böylece yiyeceğin güvenli olduğunu biliriz.", // nieuw, nalezen
    'c.haccp': "HACCP: kontrol et, yaz, bildir", // nieuw, nalezen
    'c.haccp.b': "Her gıda şirketi bir gıda güvenliği planıyla (HACCP) çalışır. Bu plan, soğuk odanın sıcaklığı ya da pişmiş etin iç sıcaklığı gibi, hangi adımlarda bir şeyi kontrol etmen gerektiğini söyler. Kontrol edersin, yazarsın ve imzalarsın. Gerçekten ölçtüğünü yaz, yanlış olduğunda da. Yanlış bir sayı senin suçun değildir, ama onu saklamak tehlikelidir. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.haccp.p': "Sıcaklık fazla yüksek.", // nieuw, nalezen
    'c.haccp.s': "Saat onda ölçmeyi unuttun. İş arkadaşın diyor ki: “İyi bir sayı yaz geç.” Ne yaparsın?", // nieuw, nalezen
    'c.haccp.o1': "Şimdi ölçer ve gerçek saati yazarsın.", // nieuw, nalezen
    'c.haccp.o2': "Saat on için iyi bir sayı yazarsın.", // nieuw, nalezen
    'c.haccp.o3': "O satırı boş bırakırsın.", // nieuw, nalezen
    'c.haccp.w': "Liste gerçekte ne olduğunu göstermelidir. Uydurulmuş bir sayı, insanları hasta edebilecek bir sorunu saklar.", // nieuw, nalezen
    'u.collection': "Çöp toplamak", // nieuw, nalezen
    'l.binlorry': "Çöp kamyonu", // nieuw, nalezen
    'w.vuilniswagen': "çöp kamyonu", // nieuw, nalezen
    'w.kliko': "tekerlekli çöp kutusu (tekerlekli bir çöp bidonu)", // nieuw, nalezen
    'w.kieplift': "kutu kaldırıcı (kutuyu kaldırır ve boşaltır)", // nieuw, nalezen
    'w.treeplank': "arka basamak (kamyonun arkasındaki basamak)", // nieuw, nalezen
    'w.bijplaatsing': "fazladan çöp (kutunun yanına bırakılan torbalar)", // nieuw, nalezen
    'w.ophaaldag': "çöp toplama günü", // nieuw, nalezen
    's.binlorry.1': "Tekerlekli çöp kutusunu kutu kaldırıcıya koy.", // nieuw, nalezen
    's.binlorry.2': "Konteynerin yanında torbalar var.", // nieuw, nalezen
    's.binlorry.3': "Tekerlekli çöp kutusu fazla ağır. Onu bırak.", // nieuw, nalezen
    'c.binlorry.q': "Arkada gidebilir miyim?", // nieuw, nalezen
    'c.binlorry.a': "Hayır, kabine bin.", // nieuw, nalezen
    'c.binlorry': "Görünür ol ve içeride git", // nieuw, nalezen
    'c.binlorry.b': "Her turda reflektörlü kıyafetini giy. Kamyona kaldırım tarafından in ve bin, asla trafik tarafından değil. Kamyonun arkasında değil, kabinde git: arkada sadece şirketin buna açıkça izin veriyorsa dur, kamyon geri giderken ya da hızlı giderken ise asla. Kutu kaldırıcı hareket ederken ondan uzak dur. Bir kutu fazla mı ağır ya da içinden bir şey mi çıkıyor? Onu bırak ve bildir. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.binlorry.p': "Bu tekerlekli çöp kutusu fazla ağır.", // nieuw, nalezen
    'c.binlorry.s': "Bir sonraki sokak çok yakın. Şoför diyor ki: “Arka basamağa çık.” Ne yaparsın?", // nieuw, nalezen
    'c.binlorry.o1': "Yine de kabine binersin.", // nieuw, nalezen
    'c.binlorry.o2': "Basamağa çıkarsın: yakın.", // nieuw, nalezen
    'c.binlorry.o3': "Kamyonun arkasından yürürsün.", // nieuw, nalezen
    'c.binlorry.w': "Hareket eden bir kamyondan düşmek bu işin en büyük tehlikelerinden biridir. Kabinde güvendesin.", // nieuw, nalezen
    'l.reversing': "Güvenli geri manevra", // nieuw, nalezen
    'w.achteruitrijden': "geri gitmek (geriye doğru sürmek)", // nieuw, nalezen
    'w.dodehoek': "kör nokta (şoförün seni göremediği yer)", // nieuw, nalezen
    'w.aanwijzer': "yönlendirici (şoföre yol gösteren kişi)", // nieuw, nalezen
    'w.oogcontact': "göz teması", // nieuw, nalezen
    'w.piepen': "ötmek, bip sesi çıkarmak", // nieuw, nalezen
    'w.cabine': "kabin (şoförün oturduğu yer)", // nieuw, nalezen
    's.reversing.1': "Asla kamyonun arkasında durma.", // nieuw, nalezen
    's.reversing.2': "Seni aynada göremiyorum.", // nieuw, nalezen
    's.reversing.3': "Şoförle göz teması kur.", // nieuw, nalezen
    'c.reversing.q': "Geri gitmeme yardım edebilir misin?", // nieuw, nalezen
    'c.reversing.a': "Evet, soldayım. Aynana bak.", // nieuw, nalezen
    'c.reversing': "Geri giden bir kamyonun arkasında asla durma", // nieuw, nalezen
    'c.reversing.b': "Çöp kamyonlarıyla olan kazaların çoğu, kamyonlar geri giderken olur. Şoför kamyonun tam arkasını göremez: kör nokta. Bu yüzden geri gidebilecek bir kamyonun arkasında asla durma ya da yürüme. Şoförü yandan, birbirinizi aynada görebileceğiniz yerden yönlendir. Göz teması mı kayboldu? Şoför durur. Başlamadan önce açık işaretler üzerinde anlaşın. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.reversing.p': "Dur! Seni artık göremiyorum.", // nieuw, nalezen
    'c.reversing.s': "Kamyon geri gidiyor. Bir torbayı almak için arkasından yürüyorsun. Ne yaparsın?", // nieuw, nalezen
    'c.reversing.o1': "Kamyon durana kadar beklersin.", // nieuw, nalezen
    'c.reversing.o2': "Hızlı yürürsün: sadece bir saniye.", // nieuw, nalezen
    'c.reversing.o3': "Şoföre el sallar ve gidersin.", // nieuw, nalezen
    'c.reversing.w': "Bir şoför seni kamyonun arkasında göremez. Bir kaza için bir saniye yeter.", // nieuw, nalezen
    'l.wastesorting': "Çöp ayırmak", // nieuw, nalezen
    'w.papier': "kâğıt", // nieuw, nalezen
    'w.plastic': "plastik", // nieuw, nalezen
    'w.gft': "organik atık (meyve, sebze ve bitkiler)", // nieuw, nalezen
    'w.restafval': "evsel atık (ayrılamayan çöp)", // nieuw, nalezen
    'w.karton': "karton", // nieuw, nalezen
    'w.blik': "teneke kutu", // nieuw, nalezen
    's.wastesorting.1': "Cam, cam kumbarasına gider.", // nieuw, nalezen
    's.wastesorting.2': "Bu evsel atığa gider.", // nieuw, nalezen
    's.wastesorting.3': "Kartonu katlayıp düzleştir.", // nieuw, nalezen
    'c.wastesorting.q': "Pizza kutusu nereye gider?", // nieuw, nalezen
    'c.wastesorting.a': "Evsel atığa. Üstünde yağ var.", // nieuw, nalezen
    'c.wastesorting': "İyi ayırmak iş kazandırır", // nieuw, nalezen
    'c.wastesorting.b': "Ayrılmış çöp yeniden kullanılabilir: kâğıt kâğıt olur, cam cam olur. Ama yanlış tek bir şey bütün bir yükü bozabilir. Bu yüzden boşaltmadan önce kutunun içine bak. Kâğıdın içinde bir torba evsel atık gibi, oraya ait olmayan bir şey mi var? Onu bırak ya da şirketinin kurallarını izle. Hangi çöpün nereye gittiği şehirden şehire değişir: bölgenin kurallarını öğren. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.wastesorting.p': "Bu buraya ait değil.", // nieuw, nalezen
    'c.wastesorting.s': "Bir kâğıt kutusu siyah çöp torbalarıyla dolu. Ne yaparsın?", // nieuw, nalezen
    'c.wastesorting.o1': "Onu bırakır ve bildirirsin.", // nieuw, nalezen
    'c.wastesorting.o2': "Onu kâğıdın içine boşaltırsın.", // nieuw, nalezen
    'c.wastesorting.o3': "Torbaları elle çıkarırsın.", // nieuw, nalezen
    'c.wastesorting.w': "Kâğıdın içindeki çöp bütün yükü bozar. Torbalarda keskin ya da kirli şeyler de olabilir.", // nieuw, nalezen
    'l.wastesafety': "Keskin şeyler ve kaldırmak", // nieuw, nalezen
    'w.snijwond': "kesik (keskin bir şeyden olan yara)", // nieuw, nalezen
    'w.prikken': "batmak (keskin bir uç cildine girer)", // nieuw, nalezen
    'w.naald': "iğne", // nieuw, nalezen
    'w.scherp': "keskin", // nieuw, nalezen
    'w.rugpijn': "sırt ağrısı", // nieuw, nalezen
    'w.tetanusprik': "tetanos aşısı (yaradaki kirden gelen bir hastalığa karşı iğne)", // nieuw, nalezen
    's.wastesafety.1': "Bir torbayı asla altından tutma.", // nieuw, nalezen
    's.wastesafety.2': "Dikkat, bu torbada cam var.", // nieuw, nalezen
    's.wastesafety.3': "Bana bir iğne battı.", // nieuw, nalezen
    'c.wastesafety.q': "Elimi kestim. Ne yapmalıyım?", // nieuw, nalezen
    'c.wastesafety.a': "Yarayı iyice yıka. Ve bana söyle.", // nieuw, nalezen
    'c.wastesafety': "Bir torbayı asla sıkma", // nieuw, nalezen
    'c.wastesafety.b': "Bir çöp torbasında cam, bıçak ya da iğne olabilir. Bu yüzden bir torbayı asla vücuduna bastırma, asla sıkma ve asla bacağına dayayarak taşıma: onu üstünden, senden uzakta tut. Eldivenlerini giy. Dizlerini bükerek ve sırtın düz kaldır ve bir kutuyu taşıma, it. Bir şey sana battı mı ya da seni kesti mi? Yarayı suyla iyice yıka ve aynı gün amirine söyle.", // nieuw, nalezen
    'c.wastesafety.p': "Bana bir şey battı.", // nieuw, nalezen
    'c.wastesafety.s': "Bir torba yırtılıyor. İçinde bir iğne görüyorsun. Ne yaparsın?", // nieuw, nalezen
    'c.wastesafety.o1': "Ona dokunmaz ve bildirirsin.", // nieuw, nalezen
    'c.wastesafety.o2': "Eldivenle alırsın.", // nieuw, nalezen
    'c.wastesafety.o3': "Torbanın içine geri itersin.", // nieuw, nalezen
    'c.wastesafety.w': "Eldiven bir iğneyi durdurmaz. Bir iğne hastalık taşıyabilir.", // nieuw, nalezen
    'u.recycling': "Atık getirme merkezi", // nieuw, nalezen
    'l.yard': "Atık getirme merkezinde", // nieuw, nalezen
    'w.milieustraat': "atık getirme merkezi (insanların büyük ya da özel atıklarını getirdiği yer)", // nieuw, nalezen
    'w.grofvuil': "büyük atık (kanepe gibi büyük eşyalar)", // nieuw, nalezen
    'w.puin': "moloz (kırık taşlar ve tuğlalar)", // nieuw, nalezen
    'w.matras': "yatak (şilte)", // nieuw, nalezen
    'w.weegbrug': "kantar (arabalar ve kamyonlar için bir terazi)", // nieuw, nalezen
    'w.afvalpas': "atık kartı (sakinler onu girişte gösterir)", // nieuw, nalezen
    's.yard.1': "Moloz dört numaralı konteynere gider.", // nieuw, nalezen
    's.yard.2': "Atık kartınızı görebilir miyim?", // nieuw, nalezen
    's.yard.3': "Önce kantarın üstünden geçin.", // nieuw, nalezen
    'c.yard.q': "Bu yatak nereye gider?", // nieuw, nalezen
    'c.yard.a': "Arkadaki büyük atık konteynerine.", // nieuw, nalezen
    'c.yard': "Yardım et, ama alanı güvenli tut", // nieuw, nalezen
    'c.yard.b': "Atık getirme merkezinde ziyaretçilere atıklarının nereye gittiğini söylersin ve iyi ayrılıp ayrılmadığını kontrol edersin. Güler yüzlü ol: birçok insan yılda sadece birkaç kez gelir ve kuralları bilmez. Çocukları ve ziyaretçileri makinelerden ve yüksek konteynerlerin kenarından uzak tut. Ağır şeyleri birlikte kaldırın ya da ziyaretçinin kendi eşyasını taşımasına izin ver. Biri tanımadığın bir şey mi getiriyor? İçeri girmeden önce sor. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.yard.p': "Bu dört numaralı konteynere gider.", // nieuw, nalezen
    'c.yard.s': "Bir adam dolu bir torbayı tahta konteynerine atmak istiyor. Ne yaparsın?", // nieuw, nalezen
    'c.yard.o1': "Torbada ne olduğunu sorarsın.", // nieuw, nalezen
    'c.yard.o2': "Atmasına izin verirsin: onun çöpü.", // nieuw, nalezen
    'c.yard.o3': "Onun yerine sen atarsın.", // nieuw, nalezen
    'c.yard.w': "Yanlış tek bir şey dolu bir konteyneri bozabilir. Güler yüzlü bir soru atığı temiz tutar.", // nieuw, nalezen
    'l.hazardous': "Kimyasal atık", // nieuw, nalezen
    'w.chemischafval': "kimyasal atık (boya ve yağ gibi tehlikeli atık)", // nieuw, nalezen
    'w.spuitbus': "sprey kutusu", // nieuw, nalezen
    'w.asbest': "asbest (eski binalarda bulunan tehlikeli bir malzeme)", // nieuw, nalezen
    'w.lekken': "sızdırmak", // nieuw, nalezen
    'w.gevarensymbool': "tehlike işareti (tehlikeye karşı uyaran bir resim)", // nieuw, nalezen
    'w.vat': "varil", // nieuw, nalezen
    's.hazardous.1': "Boyayı kimyasal atığın yanına koy.", // nieuw, nalezen
    's.hazardous.2': "Bu şişe sızdırıyor. Onu eldivenle al.", // nieuw, nalezen
    's.hazardous.3': "Asbest iyi paketlenmiş olmalı.", // nieuw, nalezen
    'c.hazardous.q': "Bu şişede ne var?", // nieuw, nalezen
    'c.hazardous.a': "Bilmiyorum. Onu kenara koy.", // nieuw, nalezen
    'c.hazardous': "Bilinmiyor mu? Açma, koklama", // nieuw, nalezen
    'c.hazardous.b': "Boya, yağ, temizlik ürünleri, piller ve sprey kutuları gibi kimyasal atıklar yakabilir, zehirleyebilir ya da patlayabilir. Tehlike işaretlerine bak. Eldiven ve koruyucu gözlük tak. İçinde ne olduğunu koklamak için bir şişeyi asla açma ve ürünleri asla karıştırma. Sızdıran bir şişeyi dik tut ve bir tepsiye koy. Asbest sadece iyi paketlenmişse içeri alınabilir: onu asla kırma ve paketinden çıkarma. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.hazardous.p': "Bunun içinde ne var?", // nieuw, nalezen
    'c.hazardous.s': "Bir kadın etiketsiz bir şişe getiriyor. Keskin bir kokusu var. Ne yaparsın?", // nieuw, nalezen
    'c.hazardous.o1': "Onu ayrı koyar ve amirine söylersin.", // nieuw, nalezen
    'c.hazardous.o2': "Onu açar ve ne olduğunu koklarsın.", // nieuw, nalezen
    'c.hazardous.o3': "Onu boya variline dökersin.", // nieuw, nalezen
    'c.hazardous.w': "Bilinmeyen ürünler başkalarıyla tepkimeye girebilir. Nereye güvenle gidebileceğini amirin bilir.", // nieuw, nalezen
    'l.baler': "Balya presi", // nieuw, nalezen
    'w.balenpers': "balya presi (atığı bloklar hâlinde sıkıştıran bir makine)", // nieuw, nalezen
    'w.baal': "balya (sıkıştırılmış bir kâğıt ya da plastik bloğu)", // nieuw, nalezen
    'w.persen': "sıkıştırmak, preslemek", // nieuw, nalezen
    'w.vastlopen': "sıkışmak, takılmak", // nieuw, nalezen
    'w.binddraad': "balya teli", // nieuw, nalezen
    'w.vulopening': "doldurma ağzı (atığın içeri girdiği yer)", // nieuw, nalezen
    's.baler.1': "Pres sıkıştı. Acil durdurma düğmesine bas.", // nieuw, nalezen
    's.baler.2': "Elini asla presin içine sokma.", // nieuw, nalezen
    's.baler.3': "Balyayı iyice bağla.", // nieuw, nalezen
    'c.baler.q': "Pres takılıyor. Bir bakabilir miyim?", // nieuw, nalezen
    'c.baler.a': "Hayır. Önce elektrik kesilir.", // nieuw, nalezen
    'c.baler': "Balya presinin içine asla uzanma", // nieuw, nalezen
    'c.baler.b': "Bir balya presi çok büyük bir kuvvetle sıkıştırır. Onu sadece nasıl kullanılacağını öğrendiysen kullan. Doldurma ağzına asla elini, kolunu ya da ayağını sokma, makine duruyor gibi görünse de. Takılıyor mu? Acil durdurma düğmesine bas, makineyi kapat ve kimsenin onu açamayacağından emin ol: şirketinin adımlarını izle. Ancak ondan sonra bak. Bir balya presinin ya da konteynerin içine asla tırmanma. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.baler.p': "Pres sıkıştı.", // nieuw, nalezen
    'c.baler.s': "Doldurma ağzında bir karton parçası sıkışmış. Makine duruyor. Ne yaparsın?", // nieuw, nalezen
    'c.baler.o1': "Makineyi tamamen kapatır, sonra kartonu çıkarırsın.", // nieuw, nalezen
    'c.baler.o2': "Elinle hızlıca çekip çıkarırsın.", // nieuw, nalezen
    'c.baler.o3': "Ayağınla içeri itersin.", // nieuw, nalezen
    'c.baler.w': "Duran bir makine yeniden çalışabilir. Elektrik kesilmeden elin tehlikededir.", // nieuw, nalezen
    'l.shovel': "Alandaki kepçe", // nieuw, nalezen
    'w.shovel': "kepçe (önünde bir kova olan büyük bir makine)", // nieuw, nalezen
    'w.zwaailamp': "döner lamba (bir makinenin üstündeki turuncu ışık)", // nieuw, nalezen
    'w.bunker': "bölme (tek tür atık için büyük, betondan bir alan)", // nieuw, nalezen
    'w.looppad': "yaya yolu (sadece insanlar için bir yol)", // nieuw, nalezen
    'w.toeteren': "korna çalmak", // nieuw, nalezen
    'w.opscheppen': "küreklemek, kepçeyle almak", // nieuw, nalezen
    's.shovel.1': "Yaya yolunda kal.", // nieuw, nalezen
    's.shovel.2': "Kepçe geri gidiyor. Dikkat!", // nieuw, nalezen
    's.shovel.3': "Döner lamba yanıyor. Makine hareket ediyor.", // nieuw, nalezen
    'c.shovel.q': "Kepçenin yanından geçebilir miyim?", // nieuw, nalezen
    'c.shovel.a': "Sadece şoför seni görüyorsa.", // nieuw, nalezen
    'c.shovel': "Kepçenin yolundan uzak dur", // nieuw, nalezen
    'c.shovel.b': "Bir kepçe büyüktür ve şoförü etrafında az şey görür, özellikle arkasında. Bu yüzden yaya yollarında kal ve reflektörlü kıyafetini giy. Hareket eden bir makinenin arkasından asla yürüme. Geçmek mi istiyorsun? Şoför seni görüp bir işaret verene kadar bekle. Döner lamba şu anlama gelir: bu makine çalışıyor. Ziyaretçileri ondan çok uzak tut. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.shovel.p': "Beni gördün mü?", // nieuw, nalezen
    'c.shovel.s': "Çalışan bir kepçenin yanından geçmen gerekiyor. Şoför başka tarafa bakıyor. Ne yaparsın?", // nieuw, nalezen
    'c.shovel.o1': "O seni görene kadar beklersin.", // nieuw, nalezen
    'c.shovel.o2': "Hızlıca yanından geçersin.", // nieuw, nalezen
    'c.shovel.o3': "Makinenin arkasından yürürsün.", // nieuw, nalezen
    'c.shovel.w': "Seni görmemiş bir şoför senin için duramaz.", // nieuw, nalezen
    'u.toddlers': "Çocuklar", // nieuw, nalezen
    'l.nappies': "Bez değiştirmek", // nieuw, nalezen
    'w.luier': "bez (çocuk bezi)", // nieuw, nalezen
    'w.verschonen': "değiştirmek (bezi)", // nieuw, nalezen
    'w.commode': "alt değiştirme masası", // nieuw, nalezen
    'w.billendoekje': "ıslak mendil (bebek için)", // nieuw, nalezen
    'w.potje': "lazımlık", // nieuw, nalezen
    'w.zindelijk': "tuvalet eğitimini almış (çocuk tuvaleti kullanabiliyor)", // nieuw, nalezen
    's.nappies.1': "Sem’in bezini değiştireceğim.", // nieuw, nalezen
    's.nappies.2': "Bez değiştirdikten sonra ellerini yıka.", // nieuw, nalezen
    's.nappies.3': "Bir çocuğu alt değiştirme masasında asla yalnız bırakma.", // nieuw, nalezen
    'c.nappies.q': "Noor’un bezini ne zaman değiştirdin?", // nieuw, nalezen
    'c.nappies.a': "Saat onda. Uygulamada yazıyor.", // nieuw, nalezen
    'c.nappies': "Bir elin çocuğun üstünde", // nieuw, nalezen
    'c.nappies.b': "Bir çocuğu alt değiştirme masasına koymadan önce her şeyi hazırla: temiz bir bez, ıslak mendiller ve kıyafetler. Sonra bir elini her zaman çocuğun üstünde tut. Asla uzaklaşma, bir saniyeliğine bile. Her bez değişiminden sonra ellerini yıka ve masayı temizle. Bezi ne zaman değiştirdiğini yaz, böylece anne baba bilir. Bir pişik ya da bir yara mı görüyorsun? Bunu yaz ve bir iş arkadaşına söyle. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.nappies.p': "Şu an bezini değiştiriyorum.", // nieuw, nalezen
    'c.nappies.s': "Bir bebeğin bezini değiştiriyorsun. Islak mendilleri unuttun; odanın öbür tarafındalar. Ne yaparsın?", // nieuw, nalezen
    'c.nappies.o1': "Bebeği yanına alırsın.", // nieuw, nalezen
    'c.nappies.o2': "Hızlıca alırsın: yakında.", // nieuw, nalezen
    'c.nappies.o3': "Bebeği bırakır ve seslenirsin.", // nieuw, nalezen
    'c.nappies.w': "Bir bebek bir saniyede alt değiştirme masasından yuvarlanıp düşebilir. Bir çocuğu orada asla yalnız bırakma.", // nieuw, nalezen
    'l.mealtime': "Yemek ve içmek", // nieuw, nalezen
    'w.fles': "biberon (bebek için)", // nieuw, nalezen
    'w.slabbetje': "mama önlüğü", // nieuw, nalezen
    'w.beker': "kupa (kulplu)", // nieuw, nalezen
    'w.kinderstoel': "mama sandalyesi", // nieuw, nalezen
    'w.fruithap': "meyve püresi", // nieuw, nalezen
    'w.boertje': "gaz çıkarma (geğirme)", // nieuw, nalezen
    's.mealtime.1': "Yemekten önce ellerini yıka.", // nieuw, nalezen
    's.mealtime.2': "Lisa’ya biberonunu saat on ikide ver.", // nieuw, nalezen
    's.mealtime.3': "Herkes masaya oturur.", // nieuw, nalezen
    'c.mealtime.q': "Daan bir bisküvi yiyebilir mi?", // nieuw, nalezen
    'c.mealtime.a': "Hayır, alerjisi var. Listeye bak.", // nieuw, nalezen
    'c.mealtime': "Yiyecek vermeden önce listeye bak", // nieuw, nalezen
    'c.mealtime.b': "Bir çocuğa yiyecek ya da içecek vermeden önce listeye bak: bazı çocukların alerjisi var, bazıları da sağlıkları ya da inançları yüzünden belirli yiyecekleri yiyemez. Yemekten önce kendi ellerini ve çocukların ellerini yıka. Çocuklar yiyip içerken otursunlar, asla yürümesinler ya da koşmasınlar. Küçük çocuklar için yiyecekleri küçük kes, örneğin üzümleri parçalara. Bir çocuğa başka bir çocuğun evden getirdiği bir şeyi asla verme. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.mealtime.p': "Bunu yiyebilir mi?", // nieuw, nalezen
    'c.mealtime.s': "Bir çocuk bisküvi için ağlıyor. Bu çocuğu iyi tanımıyorsun. Ne yaparsın?", // nieuw, nalezen
    'c.mealtime.o1': "Önce listeye bakarsın.", // nieuw, nalezen
    'c.mealtime.o2': "Verirsin: sadece bir bisküvi.", // nieuw, nalezen
    'c.mealtime.o3': "Yarım bisküvi verirsin.", // nieuw, nalezen
    'c.mealtime.w': "Bir bisküvide kuruyemiş, süt ya da yumurta olabilir. Alerjisi olan bir çocuk için bu çok tehlikeli olabilir.", // nieuw, nalezen
    'l.naptime': "Uyumak", // nieuw, nalezen
    'w.bedje': "bebek karyolası (bebek için küçük bir yatak)", // nieuw, nalezen
    'w.slaapkamer': "yatak odası, uyku odası", // nieuw, nalezen
    'w.knuffel': "peluş oyuncak", // nieuw, nalezen
    'w.speen': "emzik", // nieuw, nalezen
    'w.babyfoon': "bebek telsizi", // nieuw, nalezen
    'w.slaapzak': "bebek uyku tulumu", // nieuw, nalezen
    's.naptime.1': "Bebeği sırtüstü yatır.", // nieuw, nalezen
    's.naptime.2': "Uyku odasına sık sık bakıyorum.", // nieuw, nalezen
    's.naptime.3': "İşte peluş oyuncağın. İyi uykular.", // nieuw, nalezen
    'c.naptime.q': "Mila uyudu mu?", // nieuw, nalezen
    'c.naptime.a': "Evet, saat birden beri. Birazdan yine bakacağım.", // nieuw, nalezen
    'c.naptime': "Bebekler sırtüstü uyur", // nieuw, nalezen
    'c.naptime.b': "Bir bebek en güvenli şekilde sırtüstü, bir uyku tulumunda, kendi karyolasında uyur. Karyolada yastık, açıkta battaniye ve büyük oyuncaklar olmaz. Odayı serin ve havadar tut. Uyuyan çocuklara sık sık bak: bebek telsizi açıkken de bak ve dinle. Bir anne ya da baba bebeğini başka bir şekilde uyutmanı mı istiyor? Önce amirine söyle. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.naptime.p': "Gidip uyku odasına bakacağım.", // nieuw, nalezen
    'c.naptime.s': "Bir bebek karyolada yüzüstü uyumuş. Ne yaparsın?", // nieuw, nalezen
    'c.naptime.o1': "Onu nazikçe sırtüstü çevirirsin.", // nieuw, nalezen
    'c.naptime.o2': "Uyumaya bırakırsın: artık uyuyor.", // nieuw, nalezen
    'c.naptime.o3': "Yanına bir yastık koyarsın.", // nieuw, nalezen
    'c.naptime.w': "Sırtüstü yatan bir bebek rahatça nefes alabilir. Bir yastık yüzünü kapatabilir.", // nieuw, nalezen
    'l.playtime': "Oyun oynamak", // nieuw, nalezen
    'w.spelen': "oynamak", // nieuw, nalezen
    'w.speelgoed': "oyuncaklar", // nieuw, nalezen
    'w.zandbak': "kum havuzu", // nieuw, nalezen
    'w.glijbaan': "kaydırak", // nieuw, nalezen
    'w.puzzel': "yapboz", // nieuw, nalezen
    'w.buitenspelen': "dışarıda oynamak", // nieuw, nalezen
    's.playtime.1': "Dışarıda oynayacağız. Montlar giyilsin!", // nieuw, nalezen
    's.playtime.2': "Oyuncakları topla.", // nieuw, nalezen
    's.playtime.3': "Kaydırağa aynı anda tek çocuk.", // nieuw, nalezen
    'c.playtime.q': "Yapbozla oynayabilir miyim?", // nieuw, nalezen
    'c.playtime.a': "Evet, masada. Sonra onu toplarsın.", // nieuw, nalezen
    'c.playtime': "Güvenli oyun: bak, say, kontrol et", // nieuw, nalezen
    'c.playtime.b': "Çocuklar oynayarak öğrenir, bu yüzden bir şeyleri denemelerine izin ver. Ama onları her zaman gözünün önünde tut, dışarıda da. Dışarı çıkarken ve içeri dönerken çocukları say. Önce oyun alanını kontrol et: kapı kapalı mı, cam ya da çöp var mı? Küçük parçalı oyuncaklar üç yaşından küçük çocuklar için değildir: boğazlarına kaçabilir. Ağza giren oyuncakları sık sık temizle. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.playtime.p': "Herkes burada mı?", // nieuw, nalezen
    'c.playtime.s': "Oyun alanından içeri dönüyorsun. Saydığında bir çocuk eksik çıkıyor. Ne yaparsın?", // nieuw, nalezen
    'c.playtime.o1': "Bir iş arkadaşına söyler ve hemen ararsın.", // nieuw, nalezen
    'c.playtime.o2': "Beklersin: çocuk kendisi içeri gelir.", // nieuw, nalezen
    'c.playtime.o3': "Yarın yeniden sayarsın.", // nieuw, nalezen
    'c.playtime.w': "Dışarıda yalnız kalan bir çocuk yaralanabilir ya da uzaklaşabilir. Her dakika önemlidir.", // nieuw, nalezen
    'u.daycare': "Anne babalar, güvenlik ve grup", // nieuw, nalezen
    'l.pickup': "Getirmek ve almak", // nieuw, nalezen
    'w.ouder': "anne ya da baba (veli)", // nieuw, nalezen
    'w.afscheid': "vedalaşma", // nieuw, nalezen
    'w.oppas': "bakıcı", // nieuw, nalezen
    'w.schriftje': "defter (anne babalarla personel arasındaki notlar için)", // nieuw, nalezen
    'w.ouderapp': "veli uygulaması (anne babalara fotoğraflar ve mesajlar için)", // nieuw, nalezen
    'w.wennen': "alışmak (yeni bir yere alışmak)", // nieuw, nalezen
    's.pickup.1': "Bunu deftere yazacağım.", // nieuw, nalezen
    's.pickup.2': "Babana bay bay de.", // nieuw, nalezen
    's.pickup.3': "Veli uygulamasına bir fotoğraf koyuyorum.", // nieuw, nalezen
    'c.pickup.q': "Sem’i bugün kim alacak?", // nieuw, nalezen
    'c.pickup.a': "Büyükannesi. O listede var.", // nieuw, nalezen
    'c.pickup': "Sadece listedeki kişilere", // nieuw, nalezen
    'c.pickup.b': "Bir çocuğu sadece anne ya da babasına ya da anne babanın sana haber verdiği birine teslim et. Kişiyi tanımıyor musun? Kim olduğunu sor, kimliğine bak ve anne babayla ya da amirinle kontrol et. Alırken anne ya da babaya günün nasıl geçtiğini anlat: yemek, uyku, oyun ve özel bir şey varsa. Önemli şeyleri deftere ya da uygulamaya yaz. Başka çocuklar hakkında sadece kendi anne babalarıyla konuş. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.pickup.p': "Siz kimsiniz? Anne babayı arayacağım.", // nieuw, nalezen
    'c.pickup.s': "Tanımadığın bir adam Sem’i almaya geliyor. Listede yok. Ne yaparsın?", // nieuw, nalezen
    'c.pickup.o1': "Sem gitmeden önce anne babayı ararsın.", // nieuw, nalezen
    'c.pickup.o2': "Sem’in gitmesine izin verirsin: adını biliyor.", // nieuw, nalezen
    'c.pickup.o3': "Sem’e onu tanıyıp tanımadığını sorarsın.", // nieuw, nalezen
    'c.pickup.w': "Anne babanın seçtiği biri devralana kadar çocuktan sen sorumlusun.", // nieuw, nalezen
    'l.childsafety': "Grupta güvenlik", // nieuw, nalezen
    'w.traphekje': "merdiven kapısı", // nieuw, nalezen
    'w.vingerstrip': "parmak koruyucu (kapıda, parmaklar sıkışmasın diye)", // nieuw, nalezen
    'w.verslikken': "boğazına kaçmak (yiyecek yanlış yere gider)", // nieuw, nalezen
    'w.bult': "şişlik (başta)", // nieuw, nalezen
    'w.schaafwond': "sıyrık (cilt sıyrılmış)", // nieuw, nalezen
    'w.toezicht': "gözetim (çocuklara göz kulak olursun)", // nieuw, nalezen
    's.childsafety.1': "Merdiven kapısını her zaman kapat.", // nieuw, nalezen
    's.childsafety.2': "Şişliğe biraz buz koyuyorum.", // nieuw, nalezen
    's.childsafety.3': "Sem’in boğazına bir şey kaçtı. Ona yardım ediyorum.", // nieuw, nalezen
    'c.childsafety.q': "Bo düştü mü?", // nieuw, nalezen
    'c.childsafety.a': "Evet, başında bir şişlik var. Annesini arıyorum.", // nieuw, nalezen
    'c.childsafety': "Etrafa bir çocuğun gözüyle bak", // nieuw, nalezen
    'c.childsafety.b': "Küçük çocuklar her şeyi ağızlarına koyar ve her şeye tırmanır. Bu yüzden merdiven kapısını kapalı tut, temizlik ürünlerini ve ilaçları ulaşamayacakları yere koy ve sıcak içecekleri çocuklardan uzak tut. Odayı her gün kontrol et. Bir çocuk yaralanıyor mu? İlk yardım yap, çocuğu teselli et, anne babaya söyle ve bunu yaz. Ciddi mi? 112’yi ara. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.childsafety.p': "Merdiven kapısı açık.", // nieuw, nalezen
    'c.childsafety.s': "Sıcak kahveni alçak bir masaya koydun. Küçük bir çocuk ona doğru yürüyor. Ne yaparsın?", // nieuw, nalezen
    'c.childsafety.o1': "Kahveyi hemen yükseğe koyarsın.", // nieuw, nalezen
    'c.childsafety.o2': "Çocuğa ona dokunmamasını söylersin.", // nieuw, nalezen
    'c.childsafety.o3': "Onu hızlıca içersin.", // nieuw, nalezen
    'c.childsafety.w': "Sıcak kahve küçük bir çocuğu kötü yakabilir. Tek güvenli yer, ulaşamayacağı bir yerdir.", // nieuw, nalezen
    'l.sickchild': "Hasta bir çocuk ve alerjiler", // nieuw, nalezen
    'w.huiduitslag': "döküntü (ciltte kırmızı lekeler)", // nieuw, nalezen
    'w.diarree': "ishal", // nieuw, nalezen
    'w.overgeven': "kusmak", // nieuw, nalezen
    'w.allergielijst': "alerji listesi", // nieuw, nalezen
    'w.adrenalinepen': "adrenalin kalemi (güçlü bir alerji için ilaç kalemi)", // nieuw, nalezen
    'w.temperaturen': "ateşini ölçmek", // nieuw, nalezen
    's.sickchild.1': "Sem’in ateşi var. Babasını arıyorum.", // nieuw, nalezen
    's.sickchild.2': "Yemekten önce alerji listesine bak.", // nieuw, nalezen
    's.sickchild.3': "İzin olmadan asla ilaç verme.", // nieuw, nalezen
    'c.sickchild.q': "Jip nasıl?", // nieuw, nalezen
    'c.sickchild.a': "Çok sıcak. Ateşini ölçeceğim.", // nieuw, nalezen
    'c.sickchild': "Hasta bir çocuk: tahmin etme, söyle", // nieuw, nalezen
    'c.sickchild.b': "Çocukların nasıl olduğuna dikkat et. Bir çocuk sıcak mı, çok yorgun mu, kusuyor mu ya da döküntüsü mü var? Ateşini ölç, iş arkadaşına söyle ve anne babayı ara. Bir ilacı sadece anne babanın yazılı izniyle ver ve neyi ne zaman verdiğini yaz. Hangi çocukların alerjisi olduğunu ve ilaçlarının nerede olduğunu bil. Güçlü bir alerjik tepki gösteren bir çocuk: öğrendiysen adrenalin kalemini kullan ve 112’yi ara. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.sickchild.p': "Çocuğunuz hasta. Gelip onu alabilir misiniz?", // nieuw, nalezen
    'c.sickchild.s': "Bir anne diyor ki: “Ona saat ikide ateş şurubu ver.” Form yok. Ne yaparsın?", // nieuw, nalezen
    'c.sickchild.o1': "Önce formu imzalamasını istersin.", // nieuw, nalezen
    'c.sickchild.o2': "Verirsin: anne istedi.", // nieuw, nalezen
    'c.sickchild.o3': "Güvenli olsun diye yarısını verirsin.", // nieuw, nalezen
    'c.sickchild.w': "Yazılı izin olmadan ilaç veremezsin. Form çocuğu da seni de korur.", // nieuw, nalezen
    'l.grouprules': "Grup ve kurallar", // nieuw, nalezen
    'w.pedagogischmedewerker': "çocuk bakım görevlisi", // nieuw, nalezen
    'w.mentor': "mentor (bir çocuğu yakından takip eden görevli)", // nieuw, nalezen
    'w.vierogenprincipe': "dört göz ilkesi (başka bir yetişkin seni her zaman görebilir ya da duyabilir)", // nieuw, nalezen
    'w.observeren': "gözlemlemek (dikkatle izlemek ve yazmak)", // nieuw, nalezen
    'w.peuter': "küçük çocuk (iki ya da üç yaşında bir çocuk)", // nieuw, nalezen
    'w.groep': "grup (her gün birlikte olan çocuklar)", // nieuw, nalezen
    's.grouprules.1': "Lisa’nın mentoru benim.", // nieuw, nalezen
    's.grouprules.2': "Bir iş arkadaşı bizi her zaman görebilir ya da duyabilir.", // nieuw, nalezen
    's.grouprules.3': "Daan için endişeleniyorum.", // nieuw, nalezen
    'c.grouprules.q': "Grupla tek başıma dışarı çıkabilir miyim?", // nieuw, nalezen
    'c.grouprules.a': "Evet, ama önce bir iş arkadaşına söyle.", // nieuw, nalezen
    'c.grouprules': "Asla gözden uzakta yalnız değil", // nieuw, nalezen
    'c.grouprules.b': "Çocuk bakımında, çocuklarla birlikteyken başka bir yetişkin seni her zaman görebilmeli ya da duyabilmelidir. Bu, çocukları ve seni korur. Her çocuğun bir mentoru vardır: o çocuğu yakından takip eden ve anne babayla konuşan bir görevli. Bir çocuk için evdeki durum yüzünden, örneğin morluklar ya da korku yüzünden endişeleniyor musun? Çocuğa fazla soru sorma: adımları bilen amirine söyle. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.grouprules.p': "Bu çocuk için endişeleniyorum.", // nieuw, nalezen
    'c.grouprules.s': "Bir çocukta yine morluklar görüyorsun. Çocuk sessiz. Ne yaparsın?", // nieuw, nalezen
    'c.grouprules.o1': "Aynı gün amirine söylersin.", // nieuw, nalezen
    'c.grouprules.o2': "Çocuğa çok soru sorarsın.", // nieuw, nalezen
    'c.grouprules.o3': "Anne babayı arar ve nedenini sorarsın.", // nieuw, nalezen
    'c.grouprules.w': "Bir çocukla ilgili endişelerde amirin adımları bilir. Çok soru çocuğu korkutabilir.", // nieuw, nalezen
    // Second units for Schoonmaak, Horeca, Zorg and Winkel, and "Werken via een uitzendbureau" (23 November 2026).
    'u.housekeeping': "Tuvaletler, otel odaları ve makineler", // nieuw, nalezen
    'l.sanitary': "Tuvaletler ve lavabolar", // nieuw, nalezen
    'w.wastafel': "lavabo (banyoda ya da tuvalette el yıkanan yer)", // nieuw, nalezen
    'w.toiletpot': "klozet", // nieuw, nalezen
    'w.toiletborstel': "tuvalet fırçası", // nieuw, nalezen
    'w.urinoir': "pisuar", // nieuw, nalezen
    'w.kalk': "kireç (musluklarda ve fayanslarda sudan kalan beyaz şey)", // nieuw, nalezen
    'w.ontstopper': "pompa (tıkanmış bir tuvalet ya da gider için bir alet)", // nieuw, nalezen
    's.sanitary.1': "Önce lavaboları, sonra tuvaletleri yapıyorum.", // nieuw, nalezen
    's.sanitary.2': "Muslukta kireç var.", // nieuw, nalezen
    's.sanitary.3': "Birinci kattaki tuvalet tıkalı.", // nieuw, nalezen
    'c.sanitary.q': "Tuvaletler bitti mi?", // nieuw, nalezen
    'c.sanitary.a': "Henüz değil. Bir tuvalet tıkalı.", // nieuw, nalezen
    'c.sanitary': "Temizden kirliye", // nieuw, nalezen
    'c.sanitary.b': "Tuvaletlerde temizden kirliye doğru çalışırsın: önce aynalar ve lavabolar, sonra tuvaletler, en son da zemin. Böylece tuvaletteki kiri lavaboya taşımazsın. Tuvalet için olan renkteki bezleri kullan ve eldiven giy. Tuvalet fırçasını da temizle ve kurumaya bırak. Bir tuvalet tıkalı ya da bozuk mu? Kapıya bir levha as ve bunu bildir. İşin bitince ellerini yıka, eldiven giydiysen de. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.sanitary.p': "Bu tuvalet tıkalı. Üstüne bir levha asıyorum.", // nieuw, nalezen
    'c.sanitary.s': "Bir tuvaleti temizledin. Sırada lavabo var. Elinde hâlâ aynı bez var. Ne yaparsın?", // nieuw, nalezen
    'c.sanitary.o1': "Lavabo için olan renkte bir bez alırsın.", // nieuw, nalezen
    'c.sanitary.o2': "Aynı bezi kullanırsın: hâlâ temiz görünüyor.", // nieuw, nalezen
    'c.sanitary.o3': "Bezi önce tuvalette çalkalarsın.", // nieuw, nalezen
    'c.sanitary.w': "Tuvaletteki mikroplar bezin üzerindedir, görmesen bile. Yeni bir bez onları ellerden ve yüzlerden uzak tutar.", // nieuw, nalezen
    'l.hotelroom': "Otel odaları", // nieuw, nalezen
    'w.laken': "çarşaf (yatakta)", // nieuw, nalezen
    'w.kussensloop': "yastık kılıfı", // nieuw, nalezen
    'w.dekbed': "yorgan", // nieuw, nalezen
    'w.handdoek': "havlu", // nieuw, nalezen
    'w.kamerlijst': "oda listesi (bugün yapman gereken odalar)", // nieuw, nalezen
    'w.opmaken': "(yatağı) yapmak", // nieuw, nalezen
    's.hotelroom.1': "Yatağı temiz çarşaflarla yapıyorum.", // nieuw, nalezen
    's.hotelroom.2': "Banyoya iki temiz havlu koy.", // nieuw, nalezen
    's.hotelroom.3': "On iki numaralı oda bitti. On üçe gidiyorum.", // nieuw, nalezen
    'c.hotelroom.q': "Kaç odan kaldı?", // nieuw, nalezen
    'c.hotelroom.a': "Dört tane daha. Sonra listem bitiyor.", // nieuw, nalezen
    'c.hotelroom': "Kapıyı çal, kim olduğunu söyle ve bekle", // nieuw, nalezen
    'c.hotelroom.b': "Bir otel odasına girmeden önce kapıyı çal ve kim olduğunu söyle, örneğin “Housekeeping!”. Biraz bekle ve tekrar çal. Kapıda “Niet storen” levhası mı var? O zaman içeri girme ve bunu oda listene yaz. Misafir odada mı? Şimdi temizleyip temizleyemeyeceğini sor ya da daha sonra gel. Misafirin eşyaları oldukları yerde kalır. Bir misafir bir şey mi unuttu? Onu resepsiyona götür. Hiçbir şeyi asla kendine alma, küçük bir şeyi bile. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.hotelroom.p': "Günaydın. Odayı şimdi temizleyebilir miyim?", // nieuw, nalezen
    'c.hotelroom.s': "Boş bir odada yatağın altında bir telefon buluyorsun. Misafir gitmiş. Ne yaparsın?", // nieuw, nalezen
    'c.hotelroom.o1': "Onu resepsiyona götürürsün.", // nieuw, nalezen
    'c.hotelroom.o2': "Kendine alırsın: misafir gitti.", // nieuw, nalezen
    'c.hotelroom.o3': "Yatağın altında bırakırsın.", // nieuw, nalezen
    'c.hotelroom.w': "Kayıp eşyalar hâlâ misafire aittir. Resepsiyon onları geri verebilir. Onları almak hırsızlıktır ve işini kaybetmene yol açabilir.", // nieuw, nalezen
    'l.dosing': "Ürünler ve makineler", // nieuw, nalezen
    'w.doseren': "dozlamak (bir üründen doğru miktarı kullanmak)", // nieuw, nalezen
    'w.maatbeker': "ölçü kabı", // nieuw, nalezen
    'w.sprayflacon': "sprey şişesi", // nieuw, nalezen
    'w.concentraat': "konsantre (suyla karıştırdığın güçlü bir ürün)", // nieuw, nalezen
    'w.veiligheidsblad': "güvenlik bilgi formu (bir ürünün tehlikelerini ve ne yapılacağını söyler)", // nieuw, nalezen
    'w.schrobzuigmachine': "zemin yıkama makinesi (zemini fırçalayan ve emerek kurutan bir makine)", // nieuw, nalezen
    's.dosing.1': "Bir kova suya bir kapak koy.", // nieuw, nalezen
    's.dosing.2': "Önce etiketi oku.", // nieuw, nalezen
    's.dosing.3': "Zemin yıkama makinesi şarja takılmalı.", // nieuw, nalezen
    'c.dosing.q': "Biraz daha ürün koy. O zaman daha temiz olur.", // nieuw, nalezen
    'c.dosing.a': "Hayır, fazlası daha iyi değil. Ölçü kabını kullanıyorum.", // nieuw, nalezen
    'c.dosing': "Doğru doz, fazlası değil", // nieuw, nalezen
    'c.dosing.b': "Daha fazla ürün daha iyi temizlemez. Fazlası yapışkan bir tabaka bırakır, böylece zemin daha çabuk kirlenir ve kaygan olabilir. Cildin ve ciğerlerin için de daha kötüdür. Ölçü kabını ya da dozaj pompasını kullan ve etikete uy. Önce su, sonra ürün: böylece sıçramaz. Zemin yıkama makinesini kullanmadan önce şarjlı olduğunu ve deposunda temiz su olduğunu kontrol et. Sonunda kirli su deposunu boşalt ve çalkala. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.dosing.p': "Ne kadar koymam gerekiyor?", // nieuw, nalezen
    'c.dosing.s': "Zemin yapışkan kalıyor. Bir iş arkadaşın diyor ki: “İki kat ürün kullan.” Ne yaparsın?", // nieuw, nalezen
    'c.dosing.o1': "Etiketteki dozu kullanır ve sorarsın.", // nieuw, nalezen
    'c.dosing.o2': "İki katını kullanırsın: o zaman temiz olur.", // nieuw, nalezen
    'c.dosing.o3': "Ürünü doğrudan zemine dökersin.", // nieuw, nalezen
    'c.dosing.w': "Yapışkan bir zemin genelde ürünün az değil, fazla olduğunu gösterir. Doğru doz en iyi temizler ve en güvenlisidir.", // nieuw, nalezen
    'l.officenight': "Ofisler, sabah erken ya da akşam geç", // nieuw, nalezen
    'w.toetsenbord': "klavye", // nieuw, nalezen
    'w.papierbak': "kâğıt kutusu (eski kâğıtlar için)", // nieuw, nalezen
    'w.lichtschakelaar': "ışık düğmesi", // nieuw, nalezen
    'w.pantry': "çay ocağı (ofisteki küçük mutfak)", // nieuw, nalezen
    'w.deurmat': "kapı paspası (girişteki paspas)", // nieuw, nalezen
    'w.alleenwerken': "tek başına çalışmak (binada başka kimse yok)", // nieuw, nalezen
    's.officenight.1': "Çöp kutularını ve kâğıt kutusunu boşaltıyorum.", // nieuw, nalezen
    's.officenight.2': "Masadaki kâğıtlara dokunmuyorum.", // nieuw, nalezen
    's.officenight.3': "İşim bitince ışığı kapatıyorum.", // nieuw, nalezen
    'c.officenight.q': "Bu akşam binada tek başına mı çalışıyorsun?", // nieuw, nalezen
    'c.officenight.a': "Evet. İşim bitince sana mesaj atacağım.", // nieuw, nalezen
    'c.officenight': "Binada tek başına", // nieuw, nalezen
    'c.officenight.b': "Sabah erken ya da akşam geç bir ofisi genelde tek başına temizlersin. Bir şey olursa ne yapacağını bil: kimi ararsın ve ilk yardım çantası nerede? Telefonunu yanında tut. Amirinle ya da bir iş arkadaşınla, başladığında ve bitirdiğinde mesaj atacağın konusunda anlaş. Tanımadığın kimseyi içeri alma. Kâğıtlara, ekranlara ya da klavyelere temizlik için gerekenden fazla dokunma ve üzerlerinde yazanları asla okuma. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.officenight.p': "İşim bitti, şimdi eve gidiyorum.", // nieuw, nalezen
    'c.officenight.s': "Gece bir adam cam kapıyı çalıyor. Burada çalıştığını ve anahtarını unuttuğunu söylüyor. Ne yaparsın?", // nieuw, nalezen
    'c.officenight.o1': "Açmazsın. Amirini ararsın.", // nieuw, nalezen
    'c.officenight.o2': "Onu içeri alırsın: güler yüzlü görünüyor.", // nieuw, nalezen
    'c.officenight.o3': "Ona kendi anahtarını verirsin.", // nieuw, nalezen
    'c.officenight.w': "Herkes orada çalıştığını söyleyebilir. Amirin bunu kontrol edebilir. Senin güvenliğin ve bina önce gelir.", // nieuw, nalezen
    'u.cooking': "Mutfak ve servis", // nieuw, nalezen
    'l.knives': "Bıçaklar ve kesmek", // nieuw, nalezen
    'w.koksmes': "şef bıçağı (büyük bir mutfak bıçağı)", // nieuw, nalezen
    'w.dunschiller': "sebze soyacağı", // nieuw, nalezen
    'w.schillen': "soymak", // nieuw, nalezen
    'w.hakken': "kıymak (çok küçük kesmek)", // nieuw, nalezen
    'w.raspen': "rendelemek", // nieuw, nalezen
    'w.blokjes': "küpler (küçük kare parçalar)", // nieuw, nalezen
    's.knives.1': "Havuçları küp küp kes.", // nieuw, nalezen
    's.knives.2': "Bıçağı lavaboya koyma.", // nieuw, nalezen
    's.knives.3': "Maydanozu ince kıy.", // nieuw, nalezen
    'c.knives.q': "Soğanları kesebilir misin?", // nieuw, nalezen
    'c.knives.a': "Evet, şef. Halka mı, küp mü?", // nieuw, nalezen
    'c.knives': "Bıçak bir alettir, oyuncak değil", // nieuw, nalezen
    'c.knives.b': "Bıçağını keskin tut: kör bir bıçak daha kolay kayar. Kaymayan bir tahtada kes: altına ıslak bir bez koy. Parmaklarını bir pençe gibi içe doğru bük. Ucu aşağıda, bacağına yakın yürü ve birinin yanından geçerken “Mes!” de. Bir bıçağı asla suyla dolu bir lavaboya koyma: biri onu görmeden tutabilir. Bir bıçak mı düşüyor? Geri çekil, yakalamaya çalışma. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.knives.p': "Bıçak! Arkandan geçiyorum.", // nieuw, nalezen
    'c.knives.s': "Kesiyorsun. Bıçağın tahtadan kayıyor ve düşüyor. Ne yaparsın?", // nieuw, nalezen
    'c.knives.o1': "Geri çekilir ve düşmesine izin verirsin.", // nieuw, nalezen
    'c.knives.o2': "Hızlıca elinle yakalarsın.", // nieuw, nalezen
    'c.knives.o3': "Ayağınla durdurursun.", // nieuw, nalezen
    'c.knives.w': "Düşen bir bıçak elini ya da ayağını derin kesebilir. Yerdeki bir bıçağın sadece yıkanması gerekir.", // nieuw, nalezen
    'l.rawcooked': "Çiğ, pişmiş ve alerjenler", // nieuw, nalezen
    'w.rauw': "çiğ (pişmemiş)", // nieuw, nalezen
    'w.gaar': "pişmiş (yemeye hazır)", // nieuw, nalezen
    'w.afdekken': "üstünü örtmek (bir kapak ya da folyoyla)", // nieuw, nalezen
    'w.kleurcode': "renk kodu (her yiyecek türü için tek renk tahta ve bıçak)", // nieuw, nalezen
    'w.allergenenlijst': "alerjen listesi (her yemekte ne olduğunu söyler)", // nieuw, nalezen
    'w.glutenvrij': "glutensiz (gluten içermeyen)", // nieuw, nalezen
    's.rawcooked.1': "Çiğ et buzdolabının en altına konur.", // nieuw, nalezen
    's.rawcooked.2': "Tavuk pişti mi?", // nieuw, nalezen
    's.rawcooked.3': "Soğuk odadaki kapların üstünü ört.", // nieuw, nalezen
    'c.rawcooked.q': "Bu sos glutensiz mi?", // nieuw, nalezen
    'c.rawcooked.a': "Emin değilim. Alerjen listesine bakacağım.", // nieuw, nalezen
    'c.rawcooked': "Çiğ ve hazır yiyecek asla birbirine değmez", // nieuw, nalezen
    'c.rawcooked.b': "Çiğ et, balık ve yumurta mikrop taşıyabilir. Onları yemeye hazır yiyeceklerden uzak tut. Ayrı bir tahta ve bıçak ya da mutfağının renk kodunu kullan ve çiğ yiyeceğe dokunduktan sonra ellerini yıka. Çiğ et buzdolabının en altına konur, böylece başka yiyeceklerin üstüne hiçbir şey damlamaz. Yiyeceklerin üstünü ört ve üzerine tarih koy. Alerjilerde bir iz bile yeterli olabilir: temiz aletler kullan. Bir restoran, misafirlere bir yemekte hangi alerjenlerin olduğunu söyleyebilmek zorundadır: alerjen listesine bak. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.rawcooked.p': "Çiğ et için hangi tahta?", // nieuw, nalezen
    'c.rawcooked.s': "Çiğ tavuk kestin. Şimdi bir salata için domates kesmen gerekiyor. Ne yaparsın?", // nieuw, nalezen
    'c.rawcooked.o1': "Temiz bir tahta ve temiz bir bıçak alırsın.", // nieuw, nalezen
    'c.rawcooked.o2': "Tahtayı bir bezle siler ve devam edersin.", // nieuw, nalezen
    'c.rawcooked.o3': "Domatesleri aynı tahtada kesersin.", // nieuw, nalezen
    'c.rawcooked.w': "Çiğ tavuktaki mikroplar domateslere geçer ve salata bir daha pişirilmez. Temiz bir tahta bunu önler.", // nieuw, nalezen
    'l.pass': "Bulaşıkhane ve pass", // nieuw, nalezen
    'w.pass': "pass (tabakların garsonu beklediği tezgâh)", // nieuw, nalezen
    'w.bon': "sipariş fişi (garsondan mutfağa giden sipariş)", // nieuw, nalezen
    'w.spoelkeuken': "bulaşıkhane (bulaşıkların yıkandığı yer)", // nieuw, nalezen
    'w.vaatwaskorf': "bulaşık sepeti (bulaşık makinesine giren sepet)", // nieuw, nalezen
    'w.voorspoelen': "ön durulama yapmak (makineden önce durulamak)", // nieuw, nalezen
    'w.warmhoudlamp': "ısıtma lambası (tabakları sıcak tutar)", // nieuw, nalezen
    's.pass.1': "Sekiz numaralı masa pass’te.", // nieuw, nalezen
    's.pass.2': "İki yeni sipariş fişi geliyor.", // nieuw, nalezen
    's.pass.3': "Önce tabakları ön durula.", // nieuw, nalezen
    'c.pass.q': "On iki numaralı masa nerede kaldı?", // nieuw, nalezen
    'c.pass.a': "Pass’te. Şimdi getiriyorum.", // nieuw, nalezen
    'c.pass': "Pass: tabaklar beklemez", // nieuw, nalezen
    'c.pass.b': "Mutfak, garson için tabakları pass’e koyar. Sıcak yemek misafire çabuk gitmeli, bu yüzden bir tabak pass’te uzun beklemez. Fişi kontrol et: doğru masa, doğru yemekler, tabağın kenarı temiz mi? O zaman al. Bulaşıkhanede: ön durula, her şeyi sepetlere koy ve gerisini makineye bırak. Makine çalışırken açma: buhar çok sıcaktır. Makinenin ürünlerini doldururken eldiven giy. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.pass.p': "Bu hangi masa?", // nieuw, nalezen
    'c.pass.s': "Pass’te iki tabak var. Hangi masa için olduklarını bilmiyorsun. Ne yaparsın?", // nieuw, nalezen
    'c.pass.o1': "Fişe bakar ya da şefe sorarsın.", // nieuw, nalezen
    'c.pass.o2': "Onları bekleyen bir masaya götürürsün.", // nieuw, nalezen
    'c.pass.o3': "Başka biri alana kadar beklersin.", // nieuw, nalezen
    'c.pass.w': "Yanlış masaya giden bir tabak, bekleyen iki misafir ve soğuk yemek demektir. Kısa bir soru daha hızlıdır.", // nieuw, nalezen
    'l.bill': "Yemekler ve hesap", // nieuw, nalezen
    'w.voorgerecht': "başlangıç (ilk yemek)", // nieuw, nalezen
    'w.hoofdgerecht': "ana yemek", // nieuw, nalezen
    'w.nagerecht': "tatlı", // nieuw, nalezen
    'w.reservering': "rezervasyon (önceden ayrılmış bir masa)", // nieuw, nalezen
    'w.pinapparaat': "kart makinesi", // nieuw, nalezen
    'w.apartbetalen': "ayrı ödemek (herkes kendi payını öder)", // nieuw, nalezen
    's.bill.1': "Rezervasyonunuz var mı?", // nieuw, nalezen
    's.bill.2': "Birlikte mi, ayrı mı ödemek istersiniz?", // nieuw, nalezen
    's.bill.3': "Ana yemeği şimdi getireyim mi?", // nieuw, nalezen
    'c.bill.q': "Ayrı ödeyebilir miyiz?", // nieuw, nalezen
    'c.bill.a': "Evet, tabii. Kart makinesini alıyorum.", // nieuw, nalezen
    'c.bill': "Masada para: iki kez say", // nieuw, nalezen
    'c.bill.b': "Bir misafir öderken tutarı açıkça söyle ve misafirin kart makinesini görmesine izin ver. Nakitte parayı aldığında say, para üstünü verirken bir kez daha say. Para kasaya ya da garson cüzdanına gider, asla kendi cebine değil. Bahşişler (fooi) şirketinin söylediği yere gider, örneğin bahşiş kutusuna. Bir misafir ödemeden mi gitti? Arkasından koşma: müdürüne söyle. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.bill.p': "Kırk beş euro, lütfen.", // nieuw, nalezen
    'c.bill.s': "Bir misafir sana para veriyor ve diyor ki: “Doğru, tamam.” Parayı saymadın. Ne yaparsın?", // nieuw, nalezen
    'c.bill.o1': "Misafir oradayken sayarsın.", // nieuw, nalezen
    'c.bill.o2': "Parayı kaldırır, sonra sayarsın.", // nieuw, nalezen
    'c.bill.o3': "Misafire güvenir ve teşekkür edersin.", // nieuw, nalezen
    'c.bill.w': "Sonra sayarsan ve para eksikse, kimse ne olduğunu kontrol edemez. Masada saymak hem misafiri hem de seni korur.", // nieuw, nalezen
    'u.carework': "Kişisel bakım ve evde bakım", // nieuw, nalezen
    'l.washing': "Yıkamak ve giydirmek", // nieuw, nalezen
    'w.washandje': "yıkama eldiveni (eldiven gibi küçük bir bez)", // nieuw, nalezen
    'w.douchestoel': "duş sandalyesi", // nieuw, nalezen
    'w.tandenpoetsen': "dişlerini fırçalamak", // nieuw, nalezen
    'w.kammen': "taramak", // nieuw, nalezen
    'w.scheren': "tıraş etmek", // nieuw, nalezen
    'w.steunkous': "destek çorabı (bacaklar için sıkı bir çorap)", // nieuw, nalezen
    's.washing.1': "Su yeterince sıcak mı?", // nieuw, nalezen
    's.washing.2': "Yüzünüzü kendiniz yıkamak ister misiniz?", // nieuw, nalezen
    's.washing.3': "Şimdi destek çoraplarınızı giydiriyorum.", // nieuw, nalezen
    'c.washing.q': "Bugün duş almak istemiyorum.", // nieuw, nalezen
    'c.washing.a': "Olur. Lavaboda size yardım edeyim mi?", // nieuw, nalezen
    'c.washing': "Önce sor, ört ve seçmesine izin ver", // nieuw, nalezen
    'c.washing.b': "Birini yıkamak çok özel bir şeydir. Ne yapacağını söyle ve önce sor. Yıkamadığın vücut bölümlerini bir havluyla ört. Kapıyı ya da perdeyi kapat. Danışanın seçmesine izin ver: duş mu, lavaboda yıkanmak mı ve hangi kıyafetleri giyeceği. Danışanın hâlâ yapabildiği şeyleri kendisinin yapmasına izin ver, daha yavaş olsa bile. Bir danışan hayır mı diyor? Zorlama. Daha sonra tekrar dene, başka bir şey öner ve hemşireye söyle.", // nieuw, nalezen
    'c.washing.p': "Bugün ne giymek istersiniz?", // nieuw, nalezen
    'c.washing.s': "Bir danışan bugün yıkanmak istemediğini söylüyor. Ne yaparsın?", // nieuw, nalezen
    'c.washing.o1': "Kabul eder ve hemşireye söylersin.", // nieuw, nalezen
    'c.washing.o2': "Yine de yıkarsın: listede var.", // nieuw, nalezen
    'c.washing.o3': "Atlarsın ve hiçbir şey söylemezsin.", // nieuw, nalezen
    'c.washing.w': "Bir danışan hayır diyebilir. Bakımı zorlamak güveni zedeler. Hemşire nedenine ve neler yapılabileceğine bakabilir.", // nieuw, nalezen
    'l.observing': "Gözlemlemek ve rapor yazmak", // nieuw, nalezen
    'w.rapporteren': "rapor yazmak (gördüğünü bakım dosyasına yazmak)", // nieuw, nalezen
    'w.zorgdossier': "bakım dosyası (bir danışanın bakımıyla ilgili her şey)", // nieuw, nalezen
    'w.drukplek': "bası yarası (uzun süre yatmaktan ya da oturmaktan oluşan kırmızı bir yer)", // nieuw, nalezen
    'w.huid': "cilt", // nieuw, nalezen
    'w.plassen': "çiş yapmak", // nieuw, nalezen
    'w.vochtlijst': "sıvı listesi (bir danışanın ne kadar içtiği)", // nieuw, nalezen
    's.observing.1': "Hanımefendinin topuğunda kırmızı bir yer var.", // nieuw, nalezen
    's.observing.2': "Beyefendi bugün az içti.", // nieuw, nalezen
    's.observing.3': "Bunu bakım dosyasına yazıyorum.", // nieuw, nalezen
    'c.observing.q': "Bayan Jansen’le ilgili özel bir şey var mı?", // nieuw, nalezen
    'c.observing.a': "Evet. Bugün neredeyse hiç çiş yapmadı.", // nieuw, nalezen
    'c.observing': "Düşündüğünü değil, gördüğünü yaz", // nieuw, nalezen
    'c.observing.b': "Bakım dosyasına yazdığını bir sonraki iş arkadaşın okur. Gerçekleri yaz: ne gördüğünü, duyduğunu ya da ölçtüğünü ve ne zaman. “Mevrouw is lastig” değil, “Mevrouw wilde niet eten en duwde het bord weg.” Aynı gün, kısa cümlelerle yaz. Hollandaca nasıl yazacağından emin değil misin? Hemşireye söyle ve birlikte yazın. Birini yıkarken cildine bak: geçmeyen kırmızı bir yer bir bası yarasının başlangıcı olabilir. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.observing.p': "Gördüğümü yazıyorum.", // nieuw, nalezen
    'c.observing.s': "Bir danışan yıkama sırasında kızgındı. Bunu dosyaya yazman gerekiyor. Ne yaparsın?", // nieuw, nalezen
    'c.observing.o1': "Ne dediğini, ne yaptığını ve ne zaman olduğunu yazarsın.", // nieuw, nalezen
    'c.observing.o2': "Şunu yazarsın: “Zor bir kadın, her zamanki gibi.”", // nieuw, nalezen
    'c.observing.o3': "Hiçbir şey yazmazsın: bu normal.", // nieuw, nalezen
    'c.observing.w': "Gerçekler, bir sonraki iş arkadaşının ve hemşirenin harekete geçmesine yardım eder. Bir fikir ne olduğunu söylemez.", // nieuw, nalezen
    'l.homecare': "Evde bakım", // nieuw, nalezen
    'w.thuiszorg': "evde bakım (danışanın kendi evinde bakım)", // nieuw, nalezen
    'w.sleutelkluis': "anahtar kasası (içinde ev anahtarı olan, şifreli küçük bir kutu)", // nieuw, nalezen
    'w.zorgplan': "bakım planı (bir danışanın hangi bakımı nasıl aldığı)", // nieuw, nalezen
    'w.wijkverpleegkundige': "bölge hemşiresi (evde bakım ekibinin hemşiresi)", // nieuw, nalezen
    'w.mantelzorger': "aile bakıcısı (danışana bakan bir akraba ya da arkadaş)", // nieuw, nalezen
    'w.alarmknop': "alarm düğmesi (danışan yardım çağırmak için üzerinde taşır)", // nieuw, nalezen
    's.homecare.1': "Önce zili çalıyorum. Sonra anahtarı alıyorum.", // nieuw, nalezen
    's.homecare.2': "Bakım planında ne yazıyor?", // nieuw, nalezen
    's.homecare.3': "Bugün çeyrek saat geç geleceğim.", // nieuw, nalezen
    'c.homecare.q': "Kim o?", // nieuw, nalezen
    'c.homecare.a': "Günaydın, evde bakımdan geliyorum. İçeri girebilir miyim?", // nieuw, nalezen
    'c.homecare': "Birinin evinde misafirsin", // nieuw, nalezen
    'c.homecare.b': "Evde bakımda danışanın kendi evinde çalışırsın. Orada misafirsin: anahtarın olsa bile zili çal ve kim olduğunu söyle. Anahtar kasasının şifresi gizlidir. Onu asla başkalarının görebileceği bir yere yazma ve anahtar kasasını her zaman tekrar kapat. Bakım planına uy: ne yapacağın orada yazar. Bir şey farklı mı, ya da danışan kapıyı açmıyor mu? Öylece gitme. Ekibini ya da bölge hemşiresini ara. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.homecare.p': "Günaydın, evde bakımdan geliyorum.", // nieuw, nalezen
    'c.homecare.s': "Zili çalıyorsun. Danışan açmıyor. Arabası orada. Ne yaparsın?", // nieuw, nalezen
    'c.homecare.o1': "Ekibini arar ve beklersin.", // nieuw, nalezen
    'c.homecare.o2': "Bir sonraki danışana geçersin.", // nieuw, nalezen
    'c.homecare.o3': "Bir kez daha çalar, sonra gidersin.", // nieuw, nalezen
    'c.homecare.w': "Danışan düşmüş ya da hasta olabilir. Ekibin ne yapılacağını ve kimde anahtar olduğunu bilir.", // nieuw, nalezen
    'l.liftaids': "Kaldırma aletleri ve güvenlik", // nieuw, nalezen
    'w.glijlaken': "kaydırma çarşafı (danışanı yatakta hareket ettirmek için kaygan bir çarşaf)", // nieuw, nalezen
    'w.tilband': "kaldırma askısı (lift için danışanın altına konur)", // nieuw, nalezen
    'w.stalift': "ayağa kaldırma lifti (danışanın ayağa kalkmasına yardım eder)", // nieuw, nalezen
    'w.werkhoogte': "çalışma yüksekliği (yatak kalçanın hizasında)", // nieuw, nalezen
    'w.bedhek': "yatak korkuluğu", // nieuw, nalezen
    'w.transferplank': "transfer tahtası (yataktan sandalyeye kaymak için bir tahta)", // nieuw, nalezen
    's.liftaids.1': "Yatağı çalışma yüksekliğine getir.", // nieuw, nalezen
    's.liftaids.2': "Tekerlekli sandalyenin freni çekili mi?", // nieuw, nalezen
    's.liftaids.3': "Bunu iki kişi yapıyoruz.", // nieuw, nalezen
    'c.liftaids.q': "Hanımefendiyi tek başına çevirebilir misin?", // nieuw, nalezen
    'c.liftaids.a': "Kaydırma çarşafıyla yapabilirim. Hemen alıyorum.", // nieuw, nalezen
    'c.liftaids': "Kaldırmayı alet yapsın", // nieuw, nalezen
    'c.liftaids.b': "Bir lift kullanmadan önce kontrol et: pil şarjlı mı, askı doğru boyda mı ve yırtık değil mi? Yatağın ve tekerlekli sandalyenin frenlerini çek. Eğilmemek için yatağı kalçanın hizasına getir. Danışana her adımı söyle. Bakım planı bir danışanın hangi alete ihtiyacı olduğunu söyler. Bir alet bozuk ya da eksik mi? Onsuz idare etmeye çalışma: bildir ve bir iş arkadaşından yardım iste. Bir aletin nasıl çalıştığı sana gösterilmedi mi? Başlamadan önce sor. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.liftaids.p': "Askı bozuk. Başka bir tane alıyorum.", // nieuw, nalezen
    'c.liftaids.s': "Lifti kullanmak istiyorsun. Askıda küçük bir yırtık var. Ne yaparsın?", // nieuw, nalezen
    'c.liftaids.o1': "Başka bir askı alır ve yırtığı bildirirsin.", // nieuw, nalezen
    'c.liftaids.o2': "Kullanırsın: yırtık çok küçük.", // nieuw, nalezen
    'c.liftaids.o3': "Askıya bir düğüm atarsın.", // nieuw, nalezen
    'c.liftaids.w': "Küçük bir yırtık bir insanın ağırlığı altında büyüyebilir. Liftten düşmek danışanı ağır yaralayabilir.", // nieuw, nalezen
    'u.shopfloor': "Kasa, stok ve kapanış", // nieuw, nalezen
    'l.returns': "İadeler ve kasa", // nieuw, nalezen
    'w.terugbrengen': "geri getirmek (bir ürünü mağazaya)", // nieuw, nalezen
    'w.klantenkaart': "müşteri kartı (puan biriktirmek için bir kart)", // nieuw, nalezen
    'w.statiegeld': "depozito (boş bir şişe ya da kutu için geri alınan para)", // nieuw, nalezen
    'w.kassalade': "kasa çekmecesi (paranın durduğu çekmece)", // nieuw, nalezen
    'w.streepjescode': "barkod", // nieuw, nalezen
    'w.tegoedbon': "alışveriş kuponu (daha sonra mağazada harcamak için bir kâğıt)", // nieuw, nalezen
    's.returns.1': "Müşteri kartıyla puan biriktiriyor musunuz?", // nieuw, nalezen
    's.returns.2': "Barkod okumuyor.", // nieuw, nalezen
    's.returns.3': "Paranızı geri mi istersiniz, yoksa bir alışveriş kuponu mu?", // nieuw, nalezen
    'c.returns.q': "Bu kazağı geri getirmek istiyorum.", // nieuw, nalezen
    'c.returns.a': "Olur. Fişiniz hâlâ duruyor mu?", // nieuw, nalezen
    'c.returns': "İadeler: mağazanın kurallarına uy", // nieuw, nalezen
    'c.returns.b': "Her mağazanın iadeler için kendi kuralları vardır: kaç gün, fişle ya da fişsiz, para iadesi ya da alışveriş kuponu. Bunları öğren ve her müşteri için uygula. Emin değil misin? Bir iş arkadaşına ya da müdüre sor ve tek başına karar verme. Vardiyanın sonunda kasa çekmeceni say, mağazan böyle yapıyorsa bir iş arkadaşınla birlikte. Kasadan asla kendin için para alma, bir anlığına ödünç almak için bile. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.returns.p': "Hemen mağaza müdürüne soracağım.", // nieuw, nalezen
    'c.returns.s': "Bir müşteri ayakkabılar için parasını geri istiyor. Fişi yok. Kuralı bilmiyorsun. Ne yaparsın?", // nieuw, nalezen
    'c.returns.o1': "Müdüre ne yapılacağını sorarsın.", // nieuw, nalezen
    'c.returns.o2': "Parayı geri verirsin: kadın kibar.", // nieuw, nalezen
    'c.returns.o3': "Hayır der ve onu gönderirsin.", // nieuw, nalezen
    'c.returns.w': "Müdür kuralları bilir ve karar verebilir. O zaman müşteri adil bir cevap alır ve suç sende olmaz.", // nieuw, nalezen
    'l.facing': "Raf düzeni ve soğuk ürünler", // nieuw, nalezen
    'w.facen': "rafı düzeltmek (ürünleri öne çekmek, etiketi önde)", // nieuw, nalezen
    'w.afprijzen': "fiyat düşürmek (daha düşük bir fiyat vermek)", // nieuw, nalezen
    'w.koelvak': "soğutma rafı (mağazadaki soğuk raf)", // nieuw, nalezen
    'w.diepvries': "dondurucu", // nieuw, nalezen
    'w.uitpakken': "paketten çıkarmak", // nieuw, nalezen
    'w.schapkaartje': "raf etiketi (raftaki fiyat kartı)", // nieuw, nalezen
    's.facing.1': "Önce soğutma rafı, sonra geri kalanı.", // nieuw, nalezen
    's.facing.2': "Her şeyi düzgünce öne çek.", // nieuw, nalezen
    's.facing.3': "Bugünkü ürünlerin fiyatını düşür.", // nieuw, nalezen
    'c.facing.q': "Soğutma rafıyla işin bitti mi?", // nieuw, nalezen
    'c.facing.a': "Neredeyse. Hâlâ rafı düzeltmem gerekiyor.", // nieuw, nalezen
    'c.facing': "Önce soğuk, raf dolu görünsün", // nieuw, nalezen
    'c.facing.b': "Soğuk ve dondurulmuş ürünler her şeyden önce buzdolabına ya da dondurucuya gider. Uzun süre sıcakta kalmamalılar. Sonra geri kalanı. Rafı düzeltmek şu demektir: ürünleri öne çek, etiketi müşteriye dönük olsun. O zaman raf dolu ve düzenli görünür. Raf etiketini kontrol et: fiyat bu ürün için doğru mu? Kutuları açarken vücudundan dışarı doğru kes ve çok derin kesme: ürüne zarar verebilirsin. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.facing.p': "Önce soğuk ürünler, sonra geri kalanı.", // nieuw, nalezen
    'c.facing.s': "Bir palet süt ve bir palet cips geliyor. Yalnızsın. Ne yaparsın?", // nieuw, nalezen
    'c.facing.o1': "Önce sütü buzdolabına koyarsın.", // nieuw, nalezen
    'c.facing.o2': "Cipsle başlarsın: daha hafif.", // nieuw, nalezen
    'c.facing.o3': "Bir iş arkadaşın gelene kadar ikisini de bırakırsın.", // nieuw, nalezen
    'c.facing.w': "Çok uzun süre sıcakta kalan süt müşterileri hasta edebilir ve atılması gerekir. Cips bekleyebilir.", // nieuw, nalezen
    'l.shrink': "Hasar ve hırsızlık", // nieuw, nalezen
    'w.derving': "fire (mağazanın kaybı: kırık, eski ya da çalınmış ürünler)", // nieuw, nalezen
    'w.afschrijven': "kayıttan düşmek (bir ürünü kayıp olarak kaydetmek)", // nieuw, nalezen
    'w.personeelsaankoop': "personel alışverişi (kendi mağazandan aldıkların)", // nieuw, nalezen
    'w.tassencontrole': "çanta kontrolü", // nieuw, nalezen
    'w.kassamedewerker': "kasiyer", // nieuw, nalezen
    'w.winkelwagen': "alışveriş arabası", // nieuw, nalezen
    's.shrink.1': "Bu kavanoz kırık. Onu kayıttan düşüyorum.", // nieuw, nalezen
    's.shrink.2': "Alışverişimi bir iş arkadaşımın kasasında ödüyorum.", // nieuw, nalezen
    's.shrink.3': "Çıkışın yanında dolu bir alışveriş arabası duruyor.", // nieuw, nalezen
    'c.shrink.q': "Çantana bir bakabilir miyim?", // nieuw, nalezen
    'c.shrink.a': "Evet, tabii. İşte fişim.", // nieuw, nalezen
    'c.shrink': "Kendi alışverişin: müşteri gibi öde", // nieuw, nalezen
    'c.shrink.b': "Bir mağaza kırık ürünler, eski ürünler ve hırsızlık yüzünden çok şey kaybeder. Bunu düşük tutmaya yardım et. Kırık ya da hasarlı bir ürün mü? Rafa geri koyma: mağazanın yaptığı gibi kayıttan düş. Kendi alışverişin: her müşteri gibi kasada öde ve fişi sakla. Birçok mağazada kendi alışverişini kendin kasadan geçiremezsin: bunu bir iş arkadaşın yapar. Ödemeden asla bir ürün yeme ya da alma, küçük bir şey bile. Bazı mağazalar çantaları kontrol eder: bu bir mağaza kuralıdır, sana güvenilmediğinin işareti değil. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.shrink.p': "Önce öderim ve fişi saklarım.", // nieuw, nalezen
    'c.shrink.s': "Vardiyanın sonunda acıkmışsın. Bir sandviçin tarihi bugün geçmiş. Ne yaparsın?", // nieuw, nalezen
    'c.shrink.o1': "Müdüre kuralın ne olduğunu sorarsın.", // nieuw, nalezen
    'c.shrink.o2': "Yersin: nasılsa atılacak.", // nieuw, nalezen
    'c.shrink.o3': "Çantana koyup eve götürürsün.", // nieuw, nalezen
    'c.shrink.w': "Birçok mağazada bir ürünü ödemeden almak hırsızlıktır, eski olsa bile. Önce sormak seni güvende tutar.", // nieuw, nalezen
    'l.shopclose': "Mağazayı kapatmak", // nieuw, nalezen
    'w.sluitingstijd': "kapanış saati", // nieuw, nalezen
    'w.rolluik': "kepenk", // nieuw, nalezen
    'w.kasverschil': "kasa farkı (kasada olması gerekenden fazla ya da az para)", // nieuw, nalezen
    'w.kluis': "çelik kasa (para için sağlam bir kutu)", // nieuw, nalezen
    'w.overval': "soygun (birinin tehditle para alması)", // nieuw, nalezen
    'w.achterdeur': "arka kapı", // nieuw, nalezen
    's.shopclose.1': "On dakika sonra kapatıyoruz.", // nieuw, nalezen
    's.shopclose.2': "Kasayı iki kişi sayıyoruz.", // nieuw, nalezen
    's.shopclose.3': "Arka kapı kilitli mi?", // nieuw, nalezen
    'c.shopclose.q': "Hızlıca içeri girebilir miyim?", // nieuw, nalezen
    'c.shopclose.a': "Üzgünüm, kapalıyız. Yarın saat sekizde açıyoruz.", // nieuw, nalezen
    'c.shopclose': "Soygun: ver ve güvende kal", // nieuw, nalezen
    'c.shopclose.b': "Kapanış saatinde kasada çok para olur, bu yüzden mağazaların kuralları vardır: iki kişi say, parayı çelik kasaya götür ve önce arka kapıyı kilitle. Bir soygun mu (overval)? Hayatın paradan daha değerlidir. Sakin kal, söylediklerini yap ve karşı koyma ya da arkalarından koşma. Hatırlayabildiklerini aklında tut: kıyafet, boy, ses. Gittiklerinde: kapıyı kilitle, 112’yi ara ve hiçbir şeye dokunma. Sonra bunu müdürünle ya da güvendiğin biriyle konuş. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.shopclose.p': "Kapatıyoruz. Kapıyı kilitliyorum.", // nieuw, nalezen
    'c.shopclose.s': "Bıçaklı bir adam kasandaki parayı istiyor. Ne yaparsın?", // nieuw, nalezen
    'c.shopclose.o1': "Sakin kalır ve parayı ona verirsin.", // nieuw, nalezen
    'c.shopclose.o2': "Onunla kavga edersin: para onun değil.", // nieuw, nalezen
    'c.shopclose.o3': "Arkaya koşar ve kendini kilitlersin.", // nieuw, nalezen
    'c.shopclose.w': "Kavga etmek ya da kaçmak bir soyguncuyu sinirli ve daha tehlikeli yapar. Paranın yerine yenisi konabilir. Senin yerine kimse konamaz.", // nieuw, nalezen
    'u.uitzend': "Geçici iş ajansı üzerinden çalışmak", // nieuw, nalezen
    'l.hirer': "Ajans ve kullanıcı şirket", // nieuw, nalezen
    'w.inlener': "kullanıcı şirket (ajansın seni çalışmaya gönderdiği şirket)", // nieuw, nalezen
    'w.vestiging': "şube (ajansın senin şehrindeki ofisi)", // nieuw, nalezen
    'w.intakegesprek': "ilk görüşme (ajansta yapılan ilk konuşma)", // nieuw, nalezen
    'w.opstapplaats': "biniş noktası (ajansın otobüsünün seni aldığı yer)", // nieuw, nalezen
    'w.bedrijfsregels': "şirket kuralları (kullanıcı şirketin kuralları)", // nieuw, nalezen
    'w.aanspreekpunt': "irtibat kişisi (sorularınla gittiğin kişi)", // nieuw, nalezen
    's.hirer.1': "Yarın yeni bir kullanıcı şirkette çalışıyorsun.", // nieuw, nalezen
    's.hirer.2': "Burada irtibat kişim kim?", // nieuw, nalezen
    's.hirer.3': "Otobüs biniş noktasından saat altıda kalkıyor.", // nieuw, nalezen
    'c.hirer.q': "Yarın yeni bir kullanıcı şirkette başlayabilir misin?", // nieuw, nalezen
    'c.hirer.a': "Evet. Saat kaçta orada olmalıyım?", // nieuw, nalezen
    'c.hirer': "İki şirket: kim ne yapar?", // nieuw, nalezen
    'c.hirer.b': "Bir ajans (uitzendbureau) üzerinden çalışırsın, ama işi başka bir şirkette yaparsın: kullanıcı şirket (inlener). Ajans senin işverenindir: sözleşmen, maaşın, maaş bordron ve izin günlerin ajanstan gelir. Kullanıcı şirket iş yerinde sana ne yapacağını söyler ve tıpkı kendi çalışanları için olduğu gibi işinin güvenli olmasını sağlamak zorundadır. Hastalığını ajansının söylediği şekilde bildir: genelde hem ajansa hem kullanıcı şirkete. Ajanstaki irtibat kişinin adını ve telefon numarasını telefonunda sakla. Genel bilgi. Kendi durumun için işverenine, sendikaya veya Juridisch Loket’e sor.", // nieuw, nalezen
    'c.hirer.p': "Ajansta irtibat kişim kim?", // nieuw, nalezen
    'c.hirer.s': "Kullanıcı şirkette bir makineyle çalışman gerekiyor. Kimse sana nasıl yapılacağını göstermedi. Ne yaparsın?", // nieuw, nalezen
    'c.hirer.o1': "Kullanıcı şirketten önce sana göstermesini istersin.", // nieuw, nalezen
    'c.hirer.o2': "Denersin: sorumlu olan ajans.", // nieuw, nalezen
    'c.hirer.o3': "Eve gider ve hiçbir şey söylemezsin.", // nieuw, nalezen
    'c.hirer.w': "Kullanıcı şirket, kendi çalışanlarına olduğu gibi sana da güvenli çalışmayı göstermek zorundadır. Bunu istemek senin hakkın.", // nieuw, nalezen
    'l.phases': "Sözleşmen ve aşamalar", // nieuw, nalezen
    'w.fase': "aşama (ajans sözleşmendeki bir adım: A, B ya da C)", // nieuw, nalezen
    'w.uitzendbeding': "ajans maddesi (kullanıcı şirketin sana artık ihtiyacı olmadığında işin bitebilir)", // nieuw, nalezen
    'w.aflopen': "bitmek, sona ermek (bir sözleşme)", // nieuw, nalezen
    'w.doorwerken': "çalışmaya devam etmek (aynı yerde)", // nieuw, nalezen
    'w.vastecontract': "süresiz sözleşme (bitiş tarihi olmayan bir sözleşme)", // nieuw, nalezen
    'w.onderbreking': "ara (iki sözleşme arasında işsiz geçen süre)", // nieuw, nalezen
    's.phases.1': "Şimdi hangi aşamadayım?", // nieuw, nalezen
    's.phases.2': "Sözleşmem gelecek hafta bitiyor.", // nieuw, nalezen
    's.phases.3': "Burada çalışmaya devam edebilir miyim?", // nieuw, nalezen
    'c.phases.q': "Görevlendirmen cuma günü bitiyor.", // nieuw, nalezen
    'c.phases.a': "Tamam. Benim için başka bir işiniz var mı?", // nieuw, nalezen
    'c.phases': "A, B ve C aşamaları", // nieuw, nalezen
    'c.phases.b': "Geçici işçilerin çoğu, geçici işçiler için bir cao’ya (uitzend-cao) göre çalışır. Bu cao’da aşamalar vardır. A aşamasında, kullanıcı şirketin sana artık ihtiyacı olmadığında işin genelde bitebilir (uitzendbeding). B aşamasında belirli süreli sözleşmeler alırsın. C aşamasında ajansla süresiz bir sözleşme alırsın. Her aşamanın ne kadar sürdüğü cao’nda yazar. Ajansa hangi aşamada olduğunu sor ve bütün sözleşmelerini sakla. Genel bilgi. Kendi durumun için işverenine, sendikaya veya Juridisch Loket’e sor.", // nieuw, nalezen
    'c.phases.p': "A aşaması benim için ne kadar sürüyor?", // nieuw, nalezen
    'c.phases.s': "Uzun süredir aynı ajans için çalışıyorsun. Hâlâ kısa sözleşmeler alıyorsun. Ne yaparsın?", // nieuw, nalezen
    'c.phases.o1': "Ajansa hangi aşamada olduğunu sorarsın.", // nieuw, nalezen
    'c.phases.o2': "Hiçbir şey: ajans işi her zaman kısadır.", // nieuw, nalezen
    'c.phases.o3': "Bırakır ve başka bir ajans ararsın.", // nieuw, nalezen
    'c.phases.w': "Yeterli süreden sonra cao sana daha fazla güvence verir. Ajans sana nerede olduğunu söyleyebilir ve sendika bunu seninle birlikte kontrol edebilir.", // nieuw, nalezen
    'l.deductions': "Maaş ve kesintiler", // nieuw, nalezen
    'w.inhouding': "kesinti (maaşından düşülen para)", // nieuw, nalezen
    'w.vastekracht': "kadrolu çalışan (kullanıcı şirketin kendi çalışanı)", // nieuw, nalezen
    'w.vervoer': "ulaşım (işe giden otobüs ya da minibüs)", // nieuw, nalezen
    'w.schriftelijk': "yazılı (kâğıt üzerinde ya da bir e-postada)", // nieuw, nalezen
    'w.navragen': "sorup öğrenmek (bir şeyin doğru olup olmadığını öğrenmek)", // nieuw, nalezen
    'w.brutoloon': "brüt maaş (vergi ve kesintilerden önceki maaşın)", // nieuw, nalezen
    's.deductions.1': "Maaş bordromdaki bu kesinti ne?", // nieuw, nalezen
    's.deductions.2': "Kadrolu çalışanlarla aynı parayı mı kazanıyorum?", // nieuw, nalezen
    's.deductions.3': "Bunu önce kâğıt üzerinde görmek istiyorum.", // nieuw, nalezen
    'c.deductions.q': "Otobüsün masrafını maaşından kesiyoruz.", // nieuw, nalezen
    'c.deductions.a': "Buna izin var mı? Önce bunu sorup öğreneceğim.", // nieuw, nalezen
    'c.deductions': "Maaşından ne kesilebilir?", // nieuw, nalezen
    'c.deductions.b': "Aynı işi yapan kullanıcı şirket çalışanlarıyla en az aynı ücreti alma hakkın var. Maaşından kesilen para (inhouding) maaş bordronda yazmalıdır. Vergi ve primler kanunen kesilir. Bunların dışında ajans asgari ücretten sadece iki masraf kesebilir: konutunun kirası ve sağlık sigortası primi, ve bu da sadece buna yazılı olarak onay verdiysen. Ulaşım, iş kıyafeti, para cezaları ya da sana iş bulma ücreti gibi başka masraflar asgari ücretten kesilemez. Bir kesintiyi anlamıyor musun? Ajanstan bunu yazılı olarak açıklamasını iste. Genel bilgi. Kendi durumun için sendikaya, Juridisch Loket’e veya FairWork’e sor.", // nieuw, nalezen
    'c.deductions.p': "Bu kesinti ne için?", // nieuw, nalezen
    'c.deductions.s': "Ajans işe giden otobüs için maaşından para kesiyor. Asgari ücret alıyorsun. Ne yaparsın?", // nieuw, nalezen
    'c.deductions.o1': "Bunu sorarsın: buna izin yok.", // nieuw, nalezen
    'c.deductions.o2': "Hiçbir şey: her gün otobüse biniyorsun.", // nieuw, nalezen
    'c.deductions.o3': "Otobüse binmeyi bırakır ve yürürsün.", // nieuw, nalezen
    'c.deductions.w': "Asgari ücretten sadece kira ve sağlık sigortası kesilebilir, ve sadece yazılı onayınla. Sendika ya da Juridisch Loket sana yardım edebilir.", // nieuw, nalezen
    'l.agencyhome': "Konut ve yardım", // nieuw, nalezen
    'w.huisvesting': "konut (ajansın ayarladığı, yaşanacak bir yer)", // nieuw, nalezen
    'w.huisgenoot': "ev arkadaşı (aynı evde yaşayan kişi)", // nieuw, nalezen
    'w.huisregels': "ev kuralları (yaşadığın evin kuralları)", // nieuw, nalezen
    'w.huismeester': "ev sorumlusu (eve bakan kişi)", // nieuw, nalezen
    'w.meldpunt': "bildirim noktası (bir sorunu bildirebileceğin yer)", // nieuw, nalezen
    'w.advies': "tavsiye", // nieuw, nalezen
    's.agencyhome.1': "Kendime ait bir kira sözleşmesi istiyorum.", // nieuw, nalezen
    's.agencyhome.2': "Banyoda küf var.", // nieuw, nalezen
    's.agencyhome.3': "Tavsiye için sendikayı arıyorum.", // nieuw, nalezen
    'c.agencyhome.q': "Cuma günü evden çıkmalısın.", // nieuw, nalezen
    'c.agencyhome.a': "Bu çok kısa. Önce tavsiye alacağım.", // nieuw, nalezen
    'c.agencyhome': "Evin ve nereden yardım alacağın", // nieuw, nalezen
    'c.agencyhome.b': "Konutunu ajans mı ayarlıyor? O zaman iş sözleşmenden ayrı, yazılı ve sana ait bir kira sözleşmesi alırsın. Bir kopyasını sakla. Sözleşmede ne ödediğin ve kiranın nasıl ve ne zaman bittiği yazar. İşin mi bitiyor? Evin her zaman aynı gün bitmez: ayrılmadan önce tavsiye al. Güvensiz ya da çok kalabalık konut, tehdit ya da çok düşük maaş mı? Yardım al: sendika, Juridisch Loket (ücretsiz hukuki tavsiye), FairWork ya da isimsiz olarak da bildirimde bulunabileceğin Nederlandse Arbeidsinspectie. Genel bilgi. Kendi durumun için sendikaya, Juridisch Loket’e veya FairWork’e sor.", // nieuw, nalezen
    'c.agencyhome.p': "Kira sözleşmemin bir kopyasını alabilir miyim?", // nieuw, nalezen
    'c.agencyhome.s': "İşin bitiyor. Ev sorumlusu bugün evden çıkman gerektiğini söylüyor. Ne yaparsın?", // nieuw, nalezen
    'c.agencyhome.o1': "Önce sendikaya ya da Juridisch Loket’e sorarsın.", // nieuw, nalezen
    'c.agencyhome.o2': "Bugün çıkar ve bir arkadaşında kalırsın.", // nieuw, nalezen
    'c.agencyhome.o3': "Çantanı toplar ve dışarıda uyursun.", // nieuw, nalezen
    'c.agencyhome.w': "Kira sözleşmenin işinden ayrı, kendi kuralları vardır. Tavsiye, gerçekten ne zaman çıkman gerektiğini bilmene yardım eder.", // nieuw, nalezen
    // The basis units at four lessons (23 November 2026): two new lessons each in Solliciteren, Wonen en papieren, Loon, Verlof, Ziekte, Uitbuiting herkennen, Naar je werk, Je werk afronden, Stage lopen, Meedoen in Nederland and Online op je werk.
    'l.vacancy': "Bir iş ilanını okumak", // nieuw, nalezen
    'w.advertentie': "ilan (bir iş ya da bir şey sunan metin)", // nieuw, nalezen
    'w.eis': "şart (sahip olman ya da yapabilmen gereken şey)", // nieuw, nalezen
    'w.parttime': "yarı zamanlı (haftada daha az saat)", // nieuw, nalezen
    'w.fulltime': "tam zamanlı (tam bir çalışma haftası)", // nieuw, nalezen
    'w.sollicitatiebrief': "başvuru mektubu", // nieuw, nalezen
    'w.contactpersoon': "irtibat kişisi (arayabileceğin ya da yazabileceğin kişi)", // nieuw, nalezen
    's.vacancy.1': "İlanınızı internette gördüm.", // nieuw, nalezen
    's.vacancy.2': "İş yarı zamanlı mı, tam zamanlı mı?", // nieuw, nalezen
    's.vacancy.3': "Şartlar neler?", // nieuw, nalezen
    'c.vacancy.q': "Neden arıyorsunuz?", // nieuw, nalezen
    'c.vacancy.a': "İş ilanınız için arıyorum. Hâlâ açık mı?", // nieuw, nalezen
    'l.result': "İş görüşmesinden sonra", // nieuw, nalezen
    'w.aangenomen': "işe alınmış (işi aldın)", // nieuw, nalezen
    'w.afwijzing': "ret (işi alamadın)", // nieuw, nalezen
    'w.aanbod': "teklif (sana işi öneriyorlar)", // nieuw, nalezen
    'w.proefdag': "deneme günü (denemek için bir günlük iş)", // nieuw, nalezen
    'w.nabellen': "tekrar aramak (durumun nasıl olduğunu sormak için)", // nieuw, nalezen
    'w.teleurgesteld': "hayal kırıklığına uğramış", // nieuw, nalezen
    's.result.1': "İşe alındın!", // nieuw, nalezen
    's.result.2': "Ret cevabı aldım.", // nieuw, nalezen
    's.result.3': "Deneme günü ücretli mi?", // nieuw, nalezen
    'c.result.q': "Maalesef başka birini seçiyoruz.", // nieuw, nalezen
    'c.result.a': "Ne yazık. Nedenini sorabilir miyim?", // nieuw, nalezen
    'l.residence': "Oturma belgelerin", // nieuw, nalezen
    'w.verblijfsvergunning': "oturma izni", // nieuw, nalezen
    'w.pasfoto': "vesikalık fotoğraf", // nieuw, nalezen
    'w.vingerafdruk': "parmak izi", // nieuw, nalezen
    'w.geldig': "geçerli (hâlâ kullanılabilir)", // nieuw, nalezen
    'w.verloopdatum': "son geçerlilik tarihi (geçerli olduğu son gün)", // nieuw, nalezen
    'w.volgnummer': "sıra numarası (sıranı gösteren fiş)", // nieuw, nalezen
    's.residence.1': "Oturma iznim bir yıl daha geçerli.", // nieuw, nalezen
    's.residence.2': "Pasaportunun son geçerlilik tarihi ne?", // nieuw, nalezen
    's.residence.3': "Belediyede randevum var.", // nieuw, nalezen
    'c.residence.q': "Oturma izninin süresi neredeyse doldu.", // nieuw, nalezen
    'c.residence.a': "O zaman hemen yenisine başvuracağım.", // nieuw, nalezen
    'l.newhome': "Taşınmak", // nieuw, nalezen
    'w.brievenbus': "posta kutusu", // nieuw, nalezen
    'w.meterstand': "sayaç değeri (gaz, elektrik ya da su sayacındaki rakamlar)", // nieuw, nalezen
    'w.naambordje': "isim tabelası (kapıdaki adın)", // nieuw, nalezen
    'w.woning': "konut (bir ev ya da bir daire)", // nieuw, nalezen
    'w.doorsturen': "yönlendirmek (yeni bir adrese göndermek)", // nieuw, nalezen
    'w.verhuisdag': "taşınma günü", // nieuw, nalezen
    's.newhome.1': "Gelecek hafta taşınıyorum.", // nieuw, nalezen
    's.newhome.2': "Adım posta kutusunda yazmıyor.", // nieuw, nalezen
    's.newhome.3': "Yeni adresimi bildiriyorum.", // nieuw, nalezen
    'c.newhome.q': "Şimdi nerede oturuyorsun?", // nieuw, nalezen
    'c.newhome.a': "Yeni bir evde. İşte yeni adresim.", // nieuw, nalezen
    'l.payparts': "Maaş bordronda neler var", // nieuw, nalezen
    'w.pensioen': "emeklilik (yaşlandığın zaman için para)", // nieuw, nalezen
    'w.periode': "dönem (bu maaşın haftaları ya da ayı)", // nieuw, nalezen
    'w.bedrag': "tutar (para)", // nieuw, nalezen
    'w.totaal': "toplam", // nieuw, nalezen
    'w.afkorting': "kısaltma (bir kelimenin kısa hâli)", // nieuw, nalezen
    'w.personeelsnummer': "personel numarası (şirketteki numaran)", // nieuw, nalezen
    's.payparts.1': "Bu kısaltma ne demek?", // nieuw, nalezen
    's.payparts.2': "Bu tutar emekliliğime gidiyor.", // nieuw, nalezen
    's.payparts.3': "Bu maaş hangi dönem için?", // nieuw, nalezen
    'c.payparts.q': "Personel numaran ne?", // nieuw, nalezen
    'c.payparts.a': "En üstte, adımın yanında.", // nieuw, nalezen
    'l.latepay': "Geç, eksik ya da nakit maaş", // nieuw, nalezen
    'w.zwartwerken': "kayıt dışı çalışmak (sözleşme yok, vergi yok, kâğıt üzerinde hak yok)", // nieuw, nalezen
    'w.voorschot': "avans (maaş gününden önce maaşının bir kısmı)", // nieuw, nalezen
    'w.nabetaling': "geriye dönük ödeme (maaşını düzeltmek için sonra aldığın para)", // nieuw, nalezen
    'w.tekort': "eksik (eksik olan para)", // nieuw, nalezen
    'w.betaaldag': "maaş günü", // nieuw, nalezen
    'w.bankafschrift': "banka hesap dökümü (giren ve çıkan paranın listesi)", // nieuw, nalezen
    's.latepay.1': "Maaşım gecikti.", // nieuw, nalezen
    's.latepay.2': "Kayıt dışı çalışmıyorum.", // nieuw, nalezen
    's.latepay.3': "Avans alabilir miyim?", // nieuw, nalezen
    'c.latepay.q': "Eksik parayı gelecek ay alacaksın.", // nieuw, nalezen
    'c.latepay.a': "Bunu yazılı olarak alabilir miyim?", // nieuw, nalezen
    'l.holiday': "Tatilini planlamak", // nieuw, nalezen
    'w.saldo': "kalan gün (daha kaç günün olduğu)", // nieuw, nalezen
    'w.goedkeuren': "onaylamak (evet demek)", // nieuw, nalezen
    'w.verlopen': "süresi dolmak (artık geçerli değil)", // nieuw, nalezen
    'w.zomervakantie': "yaz tatili", // nieuw, nalezen
    'w.drukte': "yoğun dönem (çok iş)", // nieuw, nalezen
    'w.aanvraag': "talep, başvuru (bir şey istersin, çoğu zaman bir formla)", // nieuw, nalezen
    's.holiday.1': "Daha kaç izin günüm var?", // nieuw, nalezen
    's.holiday.2': "İznim onaylandı.", // nieuw, nalezen
    's.holiday.3': "Formu dolduruyorum.", // nieuw, nalezen
    'c.holiday.q': "Yazın iş yoğun. Mayısta tatile gidebilir misin?", // nieuw, nalezen
    'c.holiday.a': "Temmuzda gitmeyi tercih ederim. O zaman ailem evde.", // nieuw, nalezen
    'l.special': "Özel izin günleri", // nieuw, nalezen
    'w.bruiloft': "düğün", // nieuw, nalezen
    'w.begrafenis': "cenaze", // nieuw, nalezen
    'w.geboorteverlof': "doğum izni (bebek doğduğunda partner için)", // nieuw, nalezen
    'w.bijzonderverlof': "özel izin (örneğin bir düğün ya da cenaze için)", // nieuw, nalezen
    'w.kerstdagen': "Noel (iki Noel günü)", // nieuw, nalezen
    'w.vrijvragen': "izin günü istemek", // nieuw, nalezen
    's.special.1': "Erkek kardeşim evleniyor. İzin günü isteyebilir miyim?", // nieuw, nalezen
    's.special.2': "Amcam öldü. Cenaze cuma günü.", // nieuw, nalezen
    's.special.3': "Noel’de çalışmak zorunda mıyım?", // nieuw, nalezen
    'c.special.q': "Bebeğin için tebrikler! Doğum izni alıyor musun?", // nieuw, nalezen
    'c.special.a': "Evet, ilk hafta evdeyim.", // nieuw, nalezen
    'l.unwell': "Kendini iyi hissetmemek", // nieuw, nalezen
    'w.hoofdpijn': "baş ağrısı", // nieuw, nalezen
    'w.griep': "grip", // nieuw, nalezen
    'w.verkouden': "nezle olmak", // nieuw, nalezen
    'w.nietlekker': "iyi değil (kendini biraz hasta hissediyorsun)", // nieuw, nalezen
    'w.naarhuis': "eve gitmek", // nieuw, nalezen
    'w.uitzieken': "iyileşene kadar evde kalmak", // nieuw, nalezen
    's.unwell.1': "Kendimi iyi hissetmiyorum.", // nieuw, nalezen
    's.unwell.2': "Başım ağrıyor ve nezleyim.", // nieuw, nalezen
    's.unwell.3': "Eve gidiyorum. Hastayım.", // nieuw, nalezen
    'c.unwell.q': "Solgun görünüyorsun. İyi misin?", // nieuw, nalezen
    'c.unwell.a': "Hayır, kendimi iyi hissetmiyorum. Eve gidebilir miyim?", // nieuw, nalezen
    'l.injury': "İşte yaralanmak", // nieuw, nalezen
    'w.bedrijfsongeval': "iş kazası", // nieuw, nalezen
    'w.verzekering': "sigorta", // nieuw, nalezen
    'w.schadevergoeding': "tazminat (zarar için para)", // nieuw, nalezen
    'w.oorzaak': "sebep (neden olduğu)", // nieuw, nalezen
    'w.letsel': "yaralanma (vücuduna gelen zarar)", // nieuw, nalezen
    'w.verklaring': "ifade (ne olduğu hakkında yazdığın ya da söylediğin)", // nieuw, nalezen
    's.injury.1': "İş kazası geçirdim.", // nieuw, nalezen
    's.injury.2': "Sebebi neydi?", // nieuw, nalezen
    's.injury.3': "İş arkadaşım gördü.", // nieuw, nalezen
    'c.injury.q': "İfadeni buraya yazar mısın?", // nieuw, nalezen
    'c.injury.a': "Evet. Bir kopyasını alabilir miyim?", // nieuw, nalezen
    'l.debt': "Patrona ya da ajansa borç", // nieuw, nalezen
    'w.lening': "kredi, ödünç para", // nieuw, nalezen
    'w.lenen': "ödünç almak, ödünç vermek", // nieuw, nalezen
    'w.vastzitten': "sıkışıp kalmak (gidemiyorsun)", // nieuw, nalezen
    'w.tussenpersoon': "aracı (para karşılığında iş ayarlayan kişi)", // nieuw, nalezen
    'w.rente': "faiz (bir kredi için ödediğin ek para)", // nieuw, nalezen
    'w.belofte': "söz, vaat", // nieuw, nalezen
    's.debt.1': "Bu iş için para ödemek zorunda kaldım.", // nieuw, nalezen
    's.debt.2': "Borcum her ay artıyor.", // nieuw, nalezen
    's.debt.3': "Pasaportum aracıda.", // nieuw, nalezen
    'c.debt.q': "Ancak borcun ödenince gidebilirsin.", // nieuw, nalezen
    'c.debt.a': "Buna izin yok. Yardım istiyorum.", // nieuw, nalezen
    'l.inspection': "Denetim ve başka yardımlar", // nieuw, nalezen
    'w.inspectie': "denetim (işin adil ve güvenli olup olmadığını kontrol eden kişiler)", // nieuw, nalezen
    'w.controle': "kontrol", // nieuw, nalezen
    'w.slachtoffer': "mağdur", // nieuw, nalezen
    'w.mensenhandel': "insan ticareti (insanlar iş ya da seks için kullanılır ve satılır)", // nieuw, nalezen
    'w.vertrouwen': "güvenmek", // nieuw, nalezen
    'w.tolk': "tercüman", // nieuw, nalezen
    's.inspection.1': "Yarın denetim geliyor.", // nieuw, nalezen
    's.inspection.2': "Bir tercüman alabilir miyim?", // nieuw, nalezen
    's.inspection.3': "Bu adama güvenmiyorum.", // nieuw, nalezen
    'c.inspection.q': "Müfettişlerle konuşmak ister misin?", // nieuw, nalezen
    'c.inspection.a': "Evet, ama patronum bunu duymamalı.", // nieuw, nalezen
    'l.carpool': "Araç paylaşımı ve iş minibüsü", // nieuw, nalezen
    'w.carpoolen': "araç paylaşmak (tek arabayla birlikte işe gitmek)", // nieuw, nalezen
    'w.meerijden': "birinin arabasıyla gitmek (başkasının arabasında)", // nieuw, nalezen
    'w.gordel': "emniyet kemeri", // nieuw, nalezen
    'w.instappen': "binmek (bir arabaya, otobüse ya da trene)", // nieuw, nalezen
    'w.uitstappen': "inmek (bir arabadan, otobüsten ya da trenden)", // nieuw, nalezen
    'w.bijrijder': "ön yolcu (sürücünün yanında)", // nieuw, nalezen
    's.carpool.1': "Seninle gelebilir miyim?", // nieuw, nalezen
    's.carpool.2': "Emniyet kemerini tak.", // nieuw, nalezen
    's.carpool.3': "İstasyonda iniyorum.", // nieuw, nalezen
    'c.carpool.q': "Yarın kim sürüyor?", // nieuw, nalezen
    'c.carpool.a': "Ben sürüyorum. Saat altıda seni alırım.", // nieuw, nalezen
    'l.train': "Tren, gecikmeler ve geç kalmak", // nieuw, nalezen
    'w.station': "istasyon", // nieuw, nalezen
    'w.perron': "peron (trene bindiğin yer)", // nieuw, nalezen
    'w.overstappen': "aktarma yapmak (başka bir trene ya da otobüse)", // nieuw, nalezen
    'w.uitvallen': "iptal olmak (tren gitmiyor)", // nieuw, nalezen
    'w.kaartje': "bilet", // nieuw, nalezen
    'w.reisplanner': "yolculuk planlayıcı (trenleri ve otobüsleri gösteren bir uygulama)", // nieuw, nalezen
    's.train.1': "Trenim iptal oldu.", // nieuw, nalezen
    's.train.2': "Bir kez aktarma yapmam gerekiyor.", // nieuw, nalezen
    's.train.3': "Tren hangi perondan kalkıyor?", // nieuw, nalezen
    'c.train.q': "Neden bu kadar geç kaldın?", // nieuw, nalezen
    'c.train.a': "Trenim iptal oldu. Sana mesaj attım.", // nieuw, nalezen
    'l.checklist': "Bitirmeden önce kontrol et", // nieuw, nalezen
    'w.checklist': "kontrol listesi (kontrol edilecek şeylerin listesi)", // nieuw, nalezen
    'w.afvinken': "işaretlemek (bir görevin yanına tik koymak)", // nieuw, nalezen
    'w.overdoen': "yeniden yapmak", // nieuw, nalezen
    'w.compleet': "tam (hiçbir şey eksik değil)", // nieuw, nalezen
    'w.vergeten': "unutmak", // nieuw, nalezen
    'w.resultaat': "sonuç", // nieuw, nalezen
    's.checklist.1': "Kontrol listesindeki her şeyi işaretliyorum.", // nieuw, nalezen
    's.checklist.2': "Sipariş tam mı?", // nieuw, nalezen
    's.checklist.3': "Bunu yeniden yapmam gerekiyor.", // nieuw, nalezen
    'c.checklist.q': "Hiçbir şeyi unutmadın mı?", // nieuw, nalezen
    'c.checklist.a': "Kontrol listesine bir kez daha bakacağım.", // nieuw, nalezen
    'l.leavesite': "İş yerinden ayrılmak", // nieuw, nalezen
    'w.terugzetten': "geri koymak (yerine)", // nieuw, nalezen
    'w.vegen': "süpürmek", // nieuw, nalezen
    'w.vloer': "zemin", // nieuw, nalezen
    'w.uitdoen': "kapatmak (ışığı, bir makineyi)", // nieuw, nalezen
    'w.alslaatste': "en son", // nieuw, nalezen
    'w.achterlaten': "bırakmak (yerini nasıl bıraktığın)", // nieuw, nalezen
    's.leavesite.1': "Yerimi düzenli bırakıyorum.", // nieuw, nalezen
    's.leavesite.2': "En son kim çıkıyor?", // nieuw, nalezen
    's.leavesite.3': "Işığı söndür ve kapıyı kapat.", // nieuw, nalezen
    'c.leavesite.q': "Bugün en son sen mi çıkıyorsun?", // nieuw, nalezen
    'c.leavesite.a': "Evet. Her şeyi kapatıyorum ve kapıyı kilitliyorum.", // nieuw, nalezen
    'l.stagedays': "Stajında her gün", // nieuw, nalezen
    'w.stageplek': "staj yeri (stajını yaptığın şirket)", // nieuw, nalezen
    'w.afwezig': "yok, gelmemiş (orada değil)", // nieuw, nalezen
    'w.aanwezig': "mevcut, hazır (orada)", // nieuw, nalezen
    'w.stagevergoeding': "staj ücreti (stajında alabileceğin para)", // nieuw, nalezen
    'w.begeleiding': "rehberlik (danışmanından aldığın yardım)", // nieuw, nalezen
    'w.leerling': "öğrenci (okulda)", // nieuw, nalezen
    's.stagedays.1': "Yarın gelmeyeceğim. Hastayım.", // nieuw, nalezen
    's.stagedays.2': "Staj ücreti alıyor muyum?", // nieuw, nalezen
    's.stagedays.3': "Staj yerimde dört gün çalışıyorum.", // nieuw, nalezen
    'c.stagedays.q': "Dün neden yoktun?", // nieuw, nalezen
    'c.stagedays.a': "Hastaydım. Okulu ve şirketi aradım.", // nieuw, nalezen
    'l.stageend': "Stajının sonu", // nieuw, nalezen
    'w.eindgesprek': "son görüşme (stajının sonunda)", // nieuw, nalezen
    'w.geslaagd': "geçti, başarılı (yeterince iyi yaptın)", // nieuw, nalezen
    'w.gezakt': "kaldı, başarısız (bu sefer yeterince iyi değil)", // nieuw, nalezen
    'w.herkansing': "telafi (yeni bir şans)", // nieuw, nalezen
    'w.bedanken': "teşekkür etmek", // nieuw, nalezen
    'w.trakteren': "ikram etmek (herkese yiyecek güzel bir şey getirmek)", // nieuw, nalezen
    's.stageend.1': "Yarın son görüşmem var.", // nieuw, nalezen
    's.stageend.2': "Stajımı geçtim.", // nieuw, nalezen
    's.stageend.3': "Herkese teşekkür etmek istiyorum.", // nieuw, nalezen
    'c.stageend.q': "Son günün! Şimdi ne yapacaksın?", // nieuw, nalezen
    'c.stageend.a': "Önce diplomamı alacağım. Sonra iş arayacağım.", // nieuw, nalezen
    'l.neighbours': "Mahallen", // nieuw, nalezen
    'w.buurt': "mahalle", // nieuw, nalezen
    'w.buurthuis': "mahalle evi (mahallendeki etkinlikler için bir yer)", // nieuw, nalezen
    'w.straat': "sokak", // nieuw, nalezen
    'w.kennismaken': "tanışmak (biriyle ilk kez karşılaşmak)", // nieuw, nalezen
    'w.overlast': "rahatsızlık (başkaları için gürültü ya da sorun)", // nieuw, nalezen
    'w.buurvrouw': "komşu (bir kadın)", // nieuw, nalezen
    's.neighbours.1': "Kısa süredir bu sokakta oturuyorum.", // nieuw, nalezen
    's.neighbours.2': "Kütüphanede Hollandaca pratik yapıyorum.", // nieuw, nalezen
    's.neighbours.3': "Rahatsızlık için özür dilerim.", // nieuw, nalezen
    'c.neighbours.q': "Merhaba, ben yeni komşunuzum.", // nieuw, nalezen
    'c.neighbours.a': "Tanıştığımıza memnun oldum! Ben Ali.", // nieuw, nalezen
    'l.join': "Okul, spor ve gönüllülük", // nieuw, nalezen
    'w.vrijwilliger': "gönüllü (para almadan yardım eden kişi)", // nieuw, nalezen
    'w.vrijwilligerswerk': "gönüllü iş", // nieuw, nalezen
    'w.sportclub': "spor kulübü", // nieuw, nalezen
    'w.ouderavond': "veli toplantısı (okulda)", // nieuw, nalezen
    'w.leraar': "öğretmen", // nieuw, nalezen
    'w.basisschool': "ilkokul", // nieuw, nalezen
    's.join.1': "Oğlum ilkokula gidiyor.", // nieuw, nalezen
    's.join.2': "Bir spor kulübünde futbol oynuyorum.", // nieuw, nalezen
    's.join.3': "Cumartesi günleri gönüllü çalışıyorum.", // nieuw, nalezen
    'c.join.q': "Veli toplantısına geliyor musun?", // nieuw, nalezen
    'c.join.a': "Evet. Öğretmenle konuşmak istiyorum.", // nieuw, nalezen
    'l.workphotos': "Fotoğraflar ve veriler", // nieuw, nalezen
    'w.gezicht': "yüz", // nieuw, nalezen
    'w.klantgegevens': "müşteri bilgileri (bir müşterinin adı, adresi, telefonu)", // nieuw, nalezen
    'w.onlinezetten': "internete koymak", // nieuw, nalezen
    'w.wissen': "silmek", // nieuw, nalezen
    'w.werktelefoon': "iş telefonu", // nieuw, nalezen
    'w.bestand': "dosya (bilgisayarda)", // nieuw, nalezen
    's.workphotos.1': "İşle ilgili fotoğrafları internete koymam.", // nieuw, nalezen
    's.workphotos.2': "Fotoğrafı hemen siliyorum.", // nieuw, nalezen
    's.workphotos.3': "Onun yüzü fotoğrafta.", // nieuw, nalezen
    'c.workphotos.q': "Senin bir fotoğrafını çekebilir miyim? İnternet için.", // nieuw, nalezen
    'c.workphotos.a': "Hayır, istemem. İnternette olmak istemiyorum.", // nieuw, nalezen
    'l.device': "Güvenli bir telefon ve bilgisayar", // nieuw, nalezen
    'w.update': "güncelleme (bir uygulamanın ya da programın yeni sürümü)", // nieuw, nalezen
    'w.virus': "virüs (bilgisayarına zarar veren bir program)", // nieuw, nalezen
    'w.wifi': "wifi", // nieuw, nalezen
    'w.usbstick': "USB bellek", // nieuw, nalezen
    'w.installeren': "yüklemek", // nieuw, nalezen
    'w.openbaar': "herkese açık (herkes için)", // nieuw, nalezen
    's.device.1': "Güncellemeyi bu akşam yüklüyorum.", // nieuw, nalezen
    's.device.2': "Bu USB bellek yerde duruyordu.", // nieuw, nalezen
    's.device.3': "Bu wifi güvenli mi?", // nieuw, nalezen
    'c.device.q': "Bu uygulamayı iş telefonuna yükleyebilir miyim?", // nieuw, nalezen
    'c.device.a': "Önce bilgi işlem bölümüne sor.", // nieuw, nalezen
    'c.vacancy': "Ara ya da kısa bir mesaj gönder", // nieuw, nalezen
    'c.vacancy.b': "İlanı iyi oku: saatler, yer ve ehliyet ya da sertifika gibi sahip olman gerekenler. Her şeye sahip olman gerekmez: çoğuna sahipsen yine de dene. Ara ya da kısa bir mesaj yaz: adını, hangi iş olduğunu ve onu neden istediğini söyle. Bir iş almak için asla para ödeme ve bir ilan için asla giriş kodlarını gönderme.", // nieuw, nalezen
    'c.vacancy.p': "Diplomam yok, ama çok deneyimim var.", // nieuw, nalezen
    'c.vacancy.s': "Bir ilan 3 yıl deneyim istiyor. Senin 2 yıl deneyimin var. Ne yaparsın?", // nieuw, nalezen
    'c.vacancy.o1': "Yine de başvurursun ve neler yapabildiğini söylersin.", // nieuw, nalezen
    'c.vacancy.o2': "Başvurmazsın: deneyimin çok az.", // nieuw, nalezen
    'c.vacancy.o3': "3 yıl yazarsın: kimse kontrol etmez.", // nieuw, nalezen
    'c.vacancy.w': "Bir ilan çoğu zaman işin gerçekten gerektirdiğinden fazlasını ister. Neler yapabildiğin konusunda dürüst olmak, yalan söylemekten daha iyi sonuç verir.", // nieuw, nalezen
    'c.result': "Bir hayır son değildir", // nieuw, nalezen
    'c.result.b': "Bir hafta sonra hiç haber alamadın mı? Arayıp kibarca sorabilirsin. Hayır cevabı mı aldın? Bir dahaki sefere neyi daha iyi yapabileceğini sor: birçok işveren bunu söyler. Sonra yeniden dene: çoğu insan önce birkaç hayır cevabı alır. Evet cevabı mı aldın? Ne zaman başlayacağını sor ve başlamadan önce sözleşmeni iste. Deneme gününe mi davet edildin? Önceden ne kadar süreceğini ve ücretli olup olmadığını sor.", // nieuw, nalezen
    'c.result.p': "Bir dahaki sefere neyi daha iyi yapabilirim?", // nieuw, nalezen
    'c.result.s': "Bir iş görüşmesinden sonra e-postayla hayır cevabı alıyorsun. Ne yaparsın?", // nieuw, nalezen
    'c.result.o1': "Neyi daha iyi yapabileceğini kibarca sorarsın.", // nieuw, nalezen
    'c.result.o2': "Hata yaptıklarını yazarak cevap verirsin.", // nieuw, nalezen
    'c.result.o3': "Başvurmayı bırakırsın: işe yaramıyor.", // nieuw, nalezen
    'c.result.w': "Geri bildirim bir sonraki görüşmende sana yardım eder. Kibar bir soru da senin hakkında iyi bir izlenim bırakır.", // nieuw, nalezen
    'c.residence': "Belgelerin: tarihi kontrol et", // nieuw, nalezen
    'c.residence.b': "AB’den misin? O zaman geçerli bir pasaport ya da kimlik kartıyla burada yaşayabilir ve çalışabilirsin: izne ihtiyacın yok. AB dışından mısın? O zaman geçerli bir oturma iznine ihtiyacın var. Kartın üzerinde çalışıp çalışamayacağın yazar. Belgelerinin son geçerlilik tarihini kontrol et. Yeni bir izne IND’de zamanında başvur: tarihten aylar önce, son haftada değil. Her mektubun bir kopyasını sakla. Genel bilgi. Kendi durumun için işverenine, sendikaya veya Juridisch Loket’e sor.", // nieuw, nalezen
    'c.residence.p': "İznimin süresi yakında doluyor. Ne yapmam gerekiyor?", // nieuw, nalezen
    'c.residence.s': "Oturma izninin süresi iki ay sonra doluyor. İşte çok yoğunsun. Ne yaparsın?", // nieuw, nalezen
    'c.residence.o1': "Hemen şimdi yenisine başvurursun.", // nieuw, nalezen
    'c.residence.o2': "Son haftaya kadar beklersin.", // nieuw, nalezen
    'c.residence.o3': "Hiçbir şey yapmazsın: önce iş gelir.", // nieuw, nalezen
    'c.residence.w': "Geçerli bir izin olmadan çalışmana izin verilmeyebilir. Yeni bir izin zaman alır, bu yüzden erken başlarsın.", // nieuw, nalezen
    'c.newhome': "Yeni adres mi? Herkese söyle", // nieuw, nalezen
    'c.newhome.b': "Taşınıyor musun? Yeni adresini hemen belediyeye (gemeente) bildir: bunu yapmak zorundasın. İşverenine, bankana, sigortana ve doktoruna da söyle. Adını posta kutusuna yaz, yoksa mektuplar sana ulaşmaz. Taşınma günü sayaç değerlerini not et ve fotoğraflarını çek. O zaman sadece kullandığının parasını ödersin.", // nieuw, nalezen
    'c.newhome.p': "Taşındım. Bu benim yeni adresim.", // nieuw, nalezen
    'c.newhome.s': "İki hafta önce taşındın. Mektupların hâlâ eski adresine gidiyor. Ne yaparsın?", // nieuw, nalezen
    'c.newhome.o1': "Yeni adresini hemen belediyeye verirsin.", // nieuw, nalezen
    'c.newhome.o2': "Beklersin: posta seni bulur.", // nieuw, nalezen
    'c.newhome.o3': "Eski komşundan mektuplarını saklamasını istersin.", // nieuw, nalezen
    'c.newhome.w': "Para cezaları ya da vergi mektupları gibi önemli mektupların tarihleri vardır. Yanlış adrese giderlerse onları kaçırabilirsin.", // nieuw, nalezen
    'c.payparts': "Her satırı oku", // nieuw, nalezen
    'c.payparts.b': "Maaş bordronda çok satır ve kısa kelimeler var. En üstte: adın, personel numaran ve dönem. Sonra brüt maaşın, saatlerin ve varsa ek ödemeler. Sonra kesilenler: vergi ve primler. Birçok işte emekliliğin için hem sen hem işverenin ödersiniz: kendi payını maaş bordronda görürsün. En altta: net maaşın. Bir satırı anlamıyor musun? İşverenden bunu açıklamasını iste. Bütün maaş bordrolarını sakla. Genel bilgi. Kendi durumun için işverenine, sendikaya veya Juridisch Loket’e sor.", // nieuw, nalezen
    'c.payparts.p': "Maaş bordromdaki bu satır ne demek?", // nieuw, nalezen
    'c.payparts.s': "Maaş bordronda bir miktar para \"pensioen\" kalemine gidiyor. Nedenini bilmiyorsun. Ne yaparsın?", // nieuw, nalezen
    'c.payparts.o1': "İşverenden bunu açıklamasını istersin.", // nieuw, nalezen
    'c.payparts.o2': "Şimdi daha çok para almak için bunun durdurulmasını istersin.", // nieuw, nalezen
    'c.payparts.o3': "Görmezden gelirsin: o kadar uzun kalmayacaksın.", // nieuw, nalezen
    'c.payparts.w': "Emeklilik parası senin için, ileriye yönelik biriktirilir. İş değiştirdiğinde onu genelde kaybetmezsin. Sormak neyin sana ait olduğunu bilmene yardım eder.", // nieuw, nalezen
    'c.latepay': "Geç ya da nakit maaş mı? Zamanında harekete geç", // nieuw, nalezen
    'c.latepay.b': "Maaşın sözleşmende ya da cao’nda yazan günde gelmek zorundadır. Gecikti mi, ya da eksik para mı var? Bunu yazılı olarak sor, örneğin bir e-postayla. Banka hesap dökümlerini ve kendi saat listeni sakla. Maaş bordrosu olmadan nakit mi ödeniyorsun? O zaman bu çoğu zaman kayıt dışıdır (zwart): saatlerin kaydedilmez ve sonra işini kanıtlamak ya da bir ödenek almak zordur. Maaş bordrosu iste. Genel bilgi. Kendi durumun için sendikaya, Juridisch Loket’e veya FairWork’e sor.", // nieuw, nalezen
    'c.latepay.p': "Maaşım henüz yatmadı. Ne zaman gelecek?", // nieuw, nalezen
    'c.latepay.s': "Patronun diyor ki: \"Bundan sonra sana nakit ödeyeceğim. Bordro yok, böylesi daha kolay.\" Ne yaparsın?", // nieuw, nalezen
    'c.latepay.o1': "Hayır der ve maaş bordrosu istersin.", // nieuw, nalezen
    'c.latepay.o2': "Evet dersin: nakit daha çok para demek.", // nieuw, nalezen
    'c.latepay.o3': "Evet dersin, ama sadece bu ay için.", // nieuw, nalezen
    'c.latepay.w': "Maaş bordrosu olmadan işin kâğıt üzerinde görünmez. O zaman haklarını kaybedebilirsin, örneğin işini kaybettiğinde bir ödenek hakkını.", // nieuw, nalezen
    'c.holiday': "İzin günlerin: zamanında kullan", // nieuw, nalezen
    'c.holiday.b': "Daha kaç izin günün kaldığını kontrol et: çoğu zaman maaş bordronda ya da uygulamada yazar. Tatilini erkenden planla ve yazılı olarak iste. Yasal izin günlerinin süresi yılın bitiminden 6 ay sonra dolar, ama onları kullanamadıysan dolmaz. Cao’ndan ya da sözleşmenden gelen ek günler daha uzun geçerli kalır, genelde 5 yıl. İşin bitiyor mu? O zaman kullanmadığın günler için para alırsın. Genel bilgi. Kendi durumun için işverenine, sendikaya veya Juridisch Loket’e sor.", // nieuw, nalezen
    'c.holiday.p': "İzin günlerimi bu yıl kullanmak istiyorum.", // nieuw, nalezen
    'c.holiday.s': "Kasım ayındayız. Bu yıldan hâlâ 12 izin günün var. Amirin bu konuda hiçbir şey söylemiyor. Ne yaparsın?", // nieuw, nalezen
    'c.holiday.o1': "Onları ne zaman kullanabileceğini sorarsın.", // nieuw, nalezen
    'c.holiday.o2': "Hiçbir şey yapmazsın: sonsuza kadar kalırlar.", // nieuw, nalezen
    'c.holiday.o3': "Onları unutursun: artık gittiler.", // nieuw, nalezen
    'c.holiday.w': "İzin günleri dinlenmek içindir ve süreleri dolabilir. Zamanında sorarsan onları hâlâ planlayabilirsin.", // nieuw, nalezen
    'c.special': "Bir düğün, bir cenaze, bir bebek", // nieuw, nalezen
    'c.special.b': "Bebeğin doğdu mu ve sen partner misin? O zaman ilk 4 hafta içinde ücretli 1 hafta doğum izni alırsın. Cao’n çoğu zaman düğünün için ya da ailende bir cenaze için özel izin (bijzonder verlof) verir. Noel gibi resmî tatiller: hiçbir yasa izinli olduğunu söylemez. İzinli olup olmadığını ya da ek ücret alıp almadığını sözleşmen ya da cao’n söyler. İzin günlerini zamanında iste. Genel bilgi. Kendi durumun için işverenine, sendikaya veya Juridisch Loket’e sor.", // nieuw, nalezen
    'c.special.p': "Eşim bebek bekliyor. Doğum iznini nasıl isterim?", // nieuw, nalezen
    'c.special.s': "Baban yurt dışında vefat etti. Cenazeye gitmek istiyorsun. Ne yaparsın?", // nieuw, nalezen
    'c.special.o1': "İşverenine söyler ve hangi izni alabileceğini sorarsın.", // nieuw, nalezen
    'c.special.o2': "Öylece gidersin ve döndüğünde onlara söylersin.", // nieuw, nalezen
    'c.special.o3': "Gitmezsin: hiç izin günün kalmadı.", // nieuw, nalezen
    'c.special.w': "İşverenin bunun çok önemli olduğunu anlar. Birçok cao özel izin verir ve izin günlerini de kullanabilirsin.", // nieuw, nalezen
    'c.unwell': "İşte ya da tatilde hasta", // nieuw, nalezen
    'c.unwell.b': "İşte kendini hasta mı hissediyorsun? Eve gitmeden önce amirine söyle: bu senin hastalık bildirimindir. Öylece çekip gitme. Tatilde mi hastalandın? İşverenine evdeki gibi aynı şekilde bildir, yurt dışından da. O zaman hasta günler genelde izin günü sayılmaz. Oradaki bir doktordan bir belge gerekebilir. Genel bilgi. Kendi durumun için işverenine, sendikaya veya Juridisch Loket’e sor.", // nieuw, nalezen
    'c.unwell.p': "Tatilde hastalandım.", // nieuw, nalezen
    'c.unwell.s': "Memleketinde tatildesin. Grip oluyorsun ve 5 gün yatakta kalıyorsun. Ne yaparsın?", // nieuw, nalezen
    'c.unwell.o1': "Hemen işverenine bildirirsin.", // nieuw, nalezen
    'c.unwell.o2': "Hiçbir şey: nasılsa tatildesin.", // nieuw, nalezen
    'c.unwell.o3': "Döndüğünde işverenine söylersin.", // nieuw, nalezen
    'c.unwell.w': "Zamanında bildirirsen hasta günler genelde izin günü sayılmaz. O zaman o günleri daha sonra kullanabilirsin.", // nieuw, nalezen
    'c.injury': "İşte yaralandın mı? Not al", // nieuw, nalezen
    'c.injury.b': "İşte mi yaralandın? Ne olduğunu, ne zaman ve nerede olduğunu ve kimin gördüğünü yaz. Fotoğraf çek ve doktordan gelen bütün kâğıtları sakla. Kaza raporunun bir kopyasını iste. İş güvenli olmadığı için mi yaralandın? O zaman işverenin genelde zararını ödemek zorundadır. Bunun onların suçu olduğunu kanıtlamak zorunda değilsin: işveren, güvenliğin için yeterince şey yaptığını göstermek zorundadır. Bir şey imzalamadan önce tavsiye al. Genel bilgi. Kendi durumun için işverenine, sendikaya veya Juridisch Loket’e sor.", // nieuw, nalezen
    'c.injury.p': "Raporun bir kopyasını alabilir miyim?", // nieuw, nalezen
    'c.injury.s': "Korumasız bir makinede elini yaralıyorsun. Sonra patronun bir kâğıt imzalamanı istiyor: \"Kendi hatamdı.\" Ne yaparsın?", // nieuw, nalezen
    'c.injury.o1': "İmzalamazsın. Önce tavsiye alırsın.", // nieuw, nalezen
    'c.injury.o2': "Sorun çıkmasın diye imzalarsın.", // nieuw, nalezen
    'c.injury.o3': "İmzalarsın, ama bir fotoğrafını saklarsın.", // nieuw, nalezen
    'c.injury.w': "İmzaladığın şey sonra önemli olabilir, örneğin tazminat istediğinde. Önce sendikadan ya da Juridisch Loket’ten tavsiye al.", // nieuw, nalezen
    'c.debt': "Hiç bitmeyen bir borç", // nieuw, nalezen
    'c.debt.b': "Hollanda’da bir ajans sana iş bulduğu için senden para isteyemez. Yolculuk ya da iş için borç para almak zorunda kaldın mı ve borç sürekli artıyor mu? Borç ödenene kadar kalmak zorunda mısın? Bu bir sömürü işaretidir. Bir borç asla çalışmaya devam etmek zorunda olduğun anlamına gelmez: bırakabilirsin. Borçla ilgili her kâğıdı ve mesajı sakla. Genel bilgi. Kendi durumun için sendikaya, Juridisch Loket’e veya FairWork’e sor.", // nieuw, nalezen
    'c.debt.p': "Daha ne kadar ödemem gerekiyor? Bunu yazılı olarak istiyorum.", // nieuw, nalezen
    'c.debt.s': "Ajans otobüs biletini ödedi. Şimdi her hafta maaşından para kesiyor ve borç azalmıyor. Ne yaparsın?", // nieuw, nalezen
    'c.debt.o1': "Yazılı bir liste ister ve yardım alırsın.", // nieuw, nalezen
    'c.debt.o2': "Daha hızlı ödemek için daha çok saat çalışırsın.", // nieuw, nalezen
    'c.debt.o3': "Hiçbir şey söylemezsin: ajans sana yardım etti.", // nieuw, nalezen
    'c.debt.w': "Azalmayan bir borç seni sıkışmış hâlde tutar. Listeyle sendika ya da FairWork bunun adil olup olmadığını kontrol edebilir.", // nieuw, nalezen
    'c.inspection': "Denetim senin için var", // nieuw, nalezen
    'c.inspection.b': "Nederlandse Arbeidsinspectie işin güvenli ve adil olup olmadığını kontrol eder: maaş, saatler ve sömürü. Müfettişler iş yerine gelip çalışanlarla konuşabilir. Onlara gerçeği söyleyebilirsin: bir şeyi kimin bildirdiğini patronuna söylemezler. Kendi dilinde yardıma mı ihtiyacın var? Bir tercüman iste. FairWork sömürü mağdurlarına ücretsiz yardım eder, geçerli belgesi olmayan insanlara da. Genel bilgi. Kendi durumun için sendikaya, Juridisch Loket’e veya FairWork’e sor.", // nieuw, nalezen
    'c.inspection.p': "Bir şey anlatmak istiyorum, ama patronum orada olmadan.", // nieuw, nalezen
    'c.inspection.s': "Bir müfettiş çalışma saatlerini soruyor. Patronun sana 8 saat demeni söyledi. Sen 12 saat çalışıyorsun. Ne yaparsın?", // nieuw, nalezen
    'c.inspection.o1': "Müfettişe gerçeği söylersin.", // nieuw, nalezen
    'c.inspection.o2': "Patronunun dediği gibi 8 saat dersin.", // nieuw, nalezen
    'c.inspection.o3': "Hiçbir şey söylemez ve uzaklaşırsın.", // nieuw, nalezen
    'c.inspection.w': "Müfettiş ancak gerçeği bilirse yardım edebilir. Söylediklerin sana yardım eder, iş arkadaşlarına da.", // nieuw, nalezen
    'c.carpool': "Arabada: kemer takılı ve masraflarda anlaşın", // nieuw, nalezen
    'c.carpool.b': "Arabadaki herkes emniyet kemeri takar, arkada da. Sürücünün geçerli bir ehliyeti olmalı ve sürmeden önce alkol içmemeli. Minibüste çok fazla insan mı var, ya da sürücü tehlikeli mi sürüyor? Bunu söyle ve binme. İş arkadaşlarınla araç mı paylaşıyorsun? Yakıt masraflarını nasıl paylaşacağınızda önce anlaşın. Ajansın iş minibüsünde misin? Bunun sana neye mal olduğunu sor ve bunu yazılı olarak al.", // nieuw, nalezen
    'c.carpool.p': "Minibüste çok fazla insan var. Binmiyorum.", // nieuw, nalezen
    'c.carpool.s': "İş minibüsünde 9 koltuk var. Bu sabah 11 kişi binmek istiyor. Ne yaparsın?", // nieuw, nalezen
    'c.carpool.o1': "Binmezsin ve amirini ararsın.", // nieuw, nalezen
    'c.carpool.o2': "Arkada yere oturursun.", // nieuw, nalezen
    'c.carpool.o3': "Sıkışıp binersin: sadece 20 dakika.", // nieuw, nalezen
    'c.carpool.w': "Koltuk ve kemer olmadan küçük bir kaza çok ciddi olabilir. İşverenin ya da ajansın başka bir yol bulabilir.", // nieuw, nalezen
    'c.train': "Tren mi gecikti? Hemen mesaj at", // nieuw, nalezen
    'c.train.b': "Çıkmadan önce yolculuk planlayıcısına bak: trenler ve otobüsler gecikebilir ya da iptal olabilir. Trenin mi gecikti? Amirine hemen, varacağın saati de yazarak bir mesaj at. Fırtınalı günlerde ya da hatta çalışma olduğunda daha erken bir trene bin. Uzun bir gecikmeden sonra çoğu zaman paranı geri alabilirsin: tren şirketinin web sitesine bak.", // nieuw, nalezen
    'c.train.p': "Trenim gecikti. Saat dokuzda orada olacağım.", // nieuw, nalezen
    'c.train.s': "Trenin iptal oldu. Bir sonraki 30 dakika sonra kalkıyor. Vardiyan 40 dakika sonra başlıyor. Ne yaparsın?", // nieuw, nalezen
    'c.train.o1': "Geç kalacağını şimdi mesajla bildirirsin.", // nieuw, nalezen
    'c.train.o2': "Beklersin ve oraya varınca açıklarsın.", // nieuw, nalezen
    'c.train.o3': "Eve gidersin: senin suçun değil.", // nieuw, nalezen
    'c.train.w': "Amirin erkenden bilirse daha iyi planlayabilir. Gecikme senin suçun değil, ama bunu haber vermek senin işin.", // nieuw, nalezen
    'c.checklist': "Önce kendin kontrol et", // nieuw, nalezen
    'c.checklist.b': "\"Klaar\" demeden önce kendi işini kontrol et. Varsa kontrol listesini kullan ve her adımı işaretle. İşine sanki müşteriymişsin gibi bak. Bir şey iyi değil mi? Şimdi yeniden yap: bu, sonradan yapmaktan daha hızlıdır. Emin değil misin? Bir iş arkadaşından bakmasını iste. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.checklist.p': "Bitirdim. Bir bakar mısın?", // nieuw, nalezen
    'c.checklist.s': "İşin bitti. Kontrol listesinde bir adım işaretlenmemiş. Onu yaptığını düşünüyorsun. Ne yaparsın?", // nieuw, nalezen
    'c.checklist.o1': "O adımı tekrar kontrol eder, sonra işaretlersin.", // nieuw, nalezen
    'c.checklist.o2': "İşaretlersin: muhtemelen yapmışsındır.", // nieuw, nalezen
    'c.checklist.o3': "Boş bırakırsın: listeyi kimse okumuyor.", // nieuw, nalezen
    'c.checklist.w': "Kontrol listesi ancak doğruysa işe yarar. Bir kez daha bakmak bir dakika sürer. Bir hata saatler alabilir.", // nieuw, nalezen
    'c.leavesite': "Bulmak istediğin gibi bırak", // nieuw, nalezen
    'c.leavesite.b': "İşinin sonunda yerini temiz ve güvenli bırak. Aletleri ve malzemeleri yerine koy ve zemini süpür. Kullandığın makineleri ve ışıkları kapat. En son sen mi çıkıyorsun? Pencereleri ve kapıları kontrol et ve şirketinin söylediği şekilde kilitle. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.leavesite.p': "En son ben çıkıyorum. Kapıyı kilitlemem gerekiyor mu?", // nieuw, nalezen
    'c.leavesite.s': "İş yerinde en son sen kaldın. Alarmı nasıl kuracağını bilmiyorsun. Ne yaparsın?", // nieuw, nalezen
    'c.leavesite.o1': "Amirini arar ve sorarsın.", // nieuw, nalezen
    'c.leavesite.o2': "Alarmı kurmadan çıkarsın: geç oldu.", // nieuw, nalezen
    'c.leavesite.o3': "Bip sesi gelene kadar düğmelere basarsın.", // nieuw, nalezen
    'c.leavesite.w': "Alarmı kurulmamış bir bina güvenli değildir. Amirin yarın bir sorunla karşılaşmaktansa bir telefon almayı tercih eder.", // nieuw, nalezen
    'c.stagedays': "Bir öğrenci ve bir iş arkadaşı", // nieuw, nalezen
    'c.stagedays.b': "Staj yerinde öğrenmek için oradasın, ama bir iş arkadaşı gibi çalışırsın: zamanında, iş yerinin kurallarına uyarak ve hasta olduğunda arayarak. Çok soru sorabilirsin: zaten bunun için oradasın. İşin öğrenmene yardım etmeli, bütün gün sadece temizlik ya da taşıma değil. Böyle olmuyor mu? Okuldaki staj danışmanınla konuş. Staj ücreti her zaman verilmez: başlamadan önce bunu sor. Kurallar okuldan okula değişir: staj danışmanına sor.", // nieuw, nalezen
    'c.stagedays.p': "Bunu da öğrenmek istiyorum. İzleyebilir miyim?", // nieuw, nalezen
    'c.stagedays.s': "Stajında üç hafta boyunca her gün sadece kantini temizliyorsun. Ne yaparsın?", // nieuw, nalezen
    'c.stagedays.o1': "Bunu staj danışmanınla konuşursun.", // nieuw, nalezen
    'c.stagedays.o2': "Yaparsın ve hiçbir şey söylemezsin: sen bir öğrencisin.", // nieuw, nalezen
    'c.stagedays.o3': "Sana başka iş verene kadar evde kalırsın.", // nieuw, nalezen
    'c.stagedays.w': "Staj, mesleğini öğrenmek içindir. Danışmanın daha iyi görevler için şirketle konuşabilir.", // nieuw, nalezen
    'c.stageend': "İyi bitir ve referans iste", // nieuw, nalezen
    'c.stageend.b': "Son görüşmede neyin iyi gittiğini ve neyin daha iyi olabileceğini duyarsın. Örnekler iste ve bir sonraki işin için not al. İyi geçti mi? Onların adını referans olarak verip veremeyeceğini sor. Son gününde iş arkadaşlarına teşekkür et: burada birçok kişi pasta ya da şeker gibi yiyecek küçük bir şey getirir. Kurallar okuldan okula değişir: staj danışmanına sor.", // nieuw, nalezen
    'c.stageend.p': "Adınızı referans olarak verebilir miyim?", // nieuw, nalezen
    'c.stageend.s': "Stajının son günü. Ne yaparsın?", // nieuw, nalezen
    'c.stageend.o1': "İş arkadaşlarına teşekkür eder ve vedalaşırsın.", // nieuw, nalezen
    'c.stageend.o2': "Hiçbir şey söylemeden sessizce çıkarsın.", // nieuw, nalezen
    'c.stageend.o3': "Şirketten bir hediye istersin.", // nieuw, nalezen
    'c.stageend.w': "İyi bir veda iyi bir izlenim bırakır. Belki sonra orada çalışmak istersin ya da onlara referans olarak ihtiyacın olur.", // nieuw, nalezen
    'c.neighbours': "Komşularına merhaba de", // nieuw, nalezen
    'c.neighbours.b': "Bir sokakta yeni misin? Komşularına merhaba de ve adını söyle. Bu, sonra sorunları çözmeyi kolaylaştırır. Gece mi çalışıyorsun, ya da çok kişiyle mi yaşıyorsun? Akşam geç saatlerde ve gece sessiz ol. Çöpünü doğru günde dışarı çıkar. Kütüphanede ve mahalle evinde çoğu zaman Hollandaca pratik yapabilirsin, bazen ücretsiz.", // nieuw, nalezen
    'c.neighbours.p': "Merhaba, ben Ali. Yan tarafta oturuyorum.", // nieuw, nalezen
    'c.neighbours.s': "Beş iş arkadaşınla yaşıyorsun. Bir komşu, geceleri sık sık gürültü olduğunu söylüyor. Ne yaparsın?", // nieuw, nalezen
    'c.neighbours.o1': "Özür dilersin ve sessiz olmak için anlaşırsın.", // nieuw, nalezen
    'c.neighbours.o2': "Hepinizin çalıştığını ve dinlenmeniz gerektiğini söylersin.", // nieuw, nalezen
    'c.neighbours.o3': "Hiçbir şey söylemez ve kapıyı kapatırsın.", // nieuw, nalezen
    'c.neighbours.w': "Erken yapılan iyi bir konuşma daha büyük sorunları önler. Seni tanıyan komşular çoğu zaman daha cana yakın ve daha yardımseverdir.", // nieuw, nalezen
    'c.join': "Katıl: Hollandacayı daha hızlı öğrenirsin", // nieuw, nalezen
    'c.join.b': "İş dışında Hollandacayı en hızlı, insanlarla bir şeyler yaparak öğrenirsin: spor, bir kulüp ya da gönüllü iş. Çocuğun okula mı gidiyor? Hollandacan mükemmel olmasa da veli toplantısına git: öğretmen seninle tanışmak ister. Yavaş Hollandaca konuşulmasını isteyebilir ya da bir çeviri uygulaması kullanabilirsin. Gönüllü iş CV’nde de iyi görünür.", // nieuw, nalezen
    'c.join.p': "Biraz daha yavaş konuşur musunuz?", // nieuw, nalezen
    'c.join.s': "Veli toplantısına davet edildin. Hollandacan henüz iyi değil. Ne yaparsın?", // nieuw, nalezen
    'c.join.o1': "Gidersin ve basit Hollandaca ya da bir uygulama kullanırsın.", // nieuw, nalezen
    'c.join.o2': "Gitmezsin: öğretmen seni anlamaz.", // nieuw, nalezen
    'c.join.o3': "Meşgul olduğunu söyleyen kısa bir mesaj atarsın.", // nieuw, nalezen
    'c.join.w': "Öğretmen senin Hollandacan hakkında değil, çocuğun hakkında konuşmak istiyor. Gelmek, önem verdiğini gösterir.", // nieuw, nalezen
    'c.workphotos': "Önce sor, sonra paylaş", // nieuw, nalezen
    'c.workphotos.b': "İşte çekilen bir fotoğraf düşündüğünden fazlasını gösterebilir: bir müşteri, bir danışan, bir ekran ya da üzerinde isimler olan bir kâğıt. İşle ilgili fotoğrafları işvereninin izni olmadan internete koyma ve insanların fotoğraflarını onların onayı olmadan asla koyma. Müşteri bilgileri iş yerinde kalır: onları kendi telefonuna ya da e-postana gönderme. Yanlışlıkla bir şey mi gönderdin? Hemen amirine söyle. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.workphotos.p': "Önce izin isteyeceğim.", // nieuw, nalezen
    'c.workphotos.s': "Bir iş arkadaşın ekip uygulamasına bir müşterinin komik bir fotoğrafını koyuyor. Ne yaparsın?", // nieuw, nalezen
    'c.workphotos.o1': "Bunun doğru olmadığını söyler ve paylaşmazsın.", // nieuw, nalezen
    'c.workphotos.o2': "Paylaşırsın: sadece ekip uygulamasında.", // nieuw, nalezen
    'c.workphotos.o3': "Beğenirsin, ama paylaşmazsın.", // nieuw, nalezen
    'c.workphotos.w': "Müşteri bu fotoğrafa evet demedi. Bir uygulamadaki fotoğraflar hızla her yere gidebilir. Bunu kibarca söylemek müşteriyi ve iş arkadaşını korur.", // nieuw, nalezen
    'c.device': "Güncellemelere evet, garip belleklere hayır", // nieuw, nalezen
    'c.device.b': "Telefonuna ve bilgisayarına güncellemeleri yükle: hackerların kullandığı açıkları kapatırlar. Bir USB bellek mi buldun? Bilgisayarına takma: bilgi işlem bölümüne ver. İş telefonuna ya da iş bilgisayarına sadece iş yerinin izin verdiği uygulamaları yükle. Herkese açık wifi’de bankana ya da işine giriş yapma. Telefonunu bir kodla kilitle. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.device.p': "Bir USB bellek buldum. Onunla ne yapmalıyım?", // nieuw, nalezen
    'c.device.s': "Otoparkta bir USB bellek buluyorsun. Üzerinde \"Salaris\" yazıyor. Ne yaparsın?", // nieuw, nalezen
    'c.device.o1': "Bilgi işlem bölümüne verirsin.", // nieuw, nalezen
    'c.device.o2': "Kimin olduğunu görmek için bilgisayarına takarsın.", // nieuw, nalezen
    'c.device.o3': "Eve götürür ve orada bakarsın.", // nieuw, nalezen
    'c.device.w': "Bir bellekte virüs olabilir, ilginç görünse bile. Bilgi işlem bölümü onu güvenli bir şekilde kontrol edebilir.", // nieuw, nalezen
    // "Veiligheid op het werk" (four lessons) and the VOG lesson of "Werken via een uitzendbureau" (23 November 2026).
    'u.safework': "İş yerinde güvenlik", // nieuw, nalezen
    'l.vog': "Geçmişin: VOG", // nieuw, nalezen
    'w.vog': "iyi hal belgesi (VOG: devletten gelen ve geçmişinin bu iş için sorun olmadığını söyleyen bir belge)", // nieuw, nalezen
    'w.strafblad': "sabıka kaydı (bir mahkemenin seni suçlu bulduğu suçlar)", // nieuw, nalezen
    'w.screening': "geçmiş kontrolü (işe başlamadan önce geçmişinin kontrol edilmesi)", // nieuw, nalezen
    'w.personenregister': "çocuk bakımı sicili (çocuk bakımında çalışan herkes bu sicilde olmalıdır)", // nieuw, nalezen
    'w.beveiligerspas': "güvenlik görevlisi kartı (güvenlik görevlisi olarak çalışmak için gereken kart)", // nieuw, nalezen
    'w.verleden': "geçmiş", // nieuw, nalezen
    's.vog.1': "Bakım işlerinde neredeyse her zaman VOG isterler.", // nieuw, nalezen
    's.vog.2': "VOG’um var ve çocuk bakımı sicilindeyim.", // nieuw, nalezen
    's.vog.3': "Güvenlik görevlisi kartımı geçmiş kontrolünden sonra alıyorum.", // nieuw, nalezen
    'c.vog.q': "Ajans bir VOG istiyor. Onu aldın mı?", // nieuw, nalezen
    'c.vog.a': "Hayır. Hâlâ Justis’ten gelecek e-postayı bekliyorum.", // nieuw, nalezen
    'l.safetysigns': "Güvenlik işaretleri", // nieuw, nalezen
    'w.verbodsbord': "yasak işareti (üzerinde çizgi olan kırmızı bir daire: bunu yapamazsın)", // nieuw, nalezen
    'w.gebodsbord': "zorunluluk işareti (beyaz resimli mavi bir daire: bunu yapmak zorundasın)", // nieuw, nalezen
    'w.waarschuwingsbord': "uyarı işareti (siyah kenarlı sarı bir üçgen: dikkat, tehlike)", // nieuw, nalezen
    'w.reddingsbord': "kurtarma işareti (yeşil bir dikdörtgen: çıkış yolu ya da ilk yardım)", // nieuw, nalezen
    'w.brandbord': "yangın ekipmanı işareti (kırmızı bir kare: burada bir yangın söndürücü ya da yangın hortumu var)", // nieuw, nalezen
    'w.pictogram': "piktogram (kelimeler olmadan bir şey söyleyen basit bir resim)", // nieuw, nalezen
    's.safetysigns.1': "Kırmızı yuvarlak bir işaret şu demektir: buna izin yok.", // nieuw, nalezen
    's.safetysigns.2': "Mavi bir işaret ne yapman gerektiğini söyler.", // nieuw, nalezen
    's.safetysigns.3': "Acil çıkışa kadar yeşil işaretleri takip et.", // nieuw, nalezen
    'c.safetysigns.q': "Bu sarı işaret ne demek?", // nieuw, nalezen
    'c.safetysigns.a': "Dikkat, tehlike. Bu bir uyarı işareti.", // nieuw, nalezen
    'l.substances': "Tehlikeli maddeler", // nieuw, nalezen
    'w.stofmasker': "toz maskesi (burnunu ve ağzını kapatır)", // nieuw, nalezen
    'w.giftig': "zehirli", // nieuw, nalezen
    'w.bijtend': "aşındırıcı (cildini yakar ya da metali aşındırır)", // nieuw, nalezen
    'w.drinkfles': "içecek şişesi", // nieuw, nalezen
    'w.opbergen': "kaldırmak, yerine koymak (kendi yerine, örneğin kilitlenen bir dolaba)", // nieuw, nalezen
    'w.dop': "kapak (bir şişenin ya da bidonun)", // nieuw, nalezen
    's.substances.1': "Önce etiketteki tehlike işaretine bak.", // nieuw, nalezen
    's.substances.2': "Onu asla bir içecek şişesine dökme.", // nieuw, nalezen
    's.substances.3': "Burada toz maskesi takmak zorundasın.", // nieuw, nalezen
    'c.substances.q': "Bu ürün zehirli mi?", // nieuw, nalezen
    'c.substances.a': "Bu, güvenlik bilgi formunda yazıyor. Ona bakacağım.", // nieuw, nalezen
    'l.firefight': "Yangın", // nieuw, nalezen
    'w.branddriehoek': "yangın üçgeni (yangının yakıta, havaya ve ısıya ihtiyacı vardır; birini ortadan kaldırırsan yangın söner)", // nieuw, nalezen
    'w.zuurstof': "oksijen (havada bulunur; yangının ona ihtiyacı vardır)", // nieuw, nalezen
    'w.blussen': "söndürmek (bir yangını)", // nieuw, nalezen
    'w.blusdeken': "yangın battaniyesi", // nieuw, nalezen
    'w.openvuur': "açık ateş (bir alev, örneğin bir çakmaktan ya da bir gaz brülöründen)", // nieuw, nalezen
    'w.brandslang': "yangın hortumu (duvardaki bir makarada)", // nieuw, nalezen
    's.firefight.1': "Yanan yağın üzerine asla su atma.", // nieuw, nalezen
    's.firefight.2': "Sadece küçük bir yangını kendin söndürürsün.", // nieuw, nalezen
    's.firefight.3': "Yangın battaniyesini tavanın üzerine ört.", // nieuw, nalezen
    'c.firefight.q': "Çöp kutusunda yangın var!", // nieuw, nalezen
    'c.firefight.a': "Küçük. Yangın söndürücüyü getiriyorum.", // nieuw, nalezen
    'l.permitwork': "İş güvenliği izni, kapalı alanlar ve yük kaldırma", // nieuw, nalezen
    'w.werkvergunningveilig': "iş güvenliği izni (tehlikeli işler için bir güvenlik belgesi: ne, nerede ve hangi tehlikeler; oturma ya da çalışma belgelerin değil)", // nieuw, nalezen
    'w.beslotenruimte': "kapalı alan (bir tank, bir çukur ya da bir kanalizasyon: küçük ve az temiz havalı)", // nieuw, nalezen
    'w.gasmeting': "gaz ölçümü (içeri girmeden önce havayı ölçersin)", // nieuw, nalezen
    'w.mangatwacht': "giriş gözcüsü (girişte dışarıda kalan, irtibatı sürdüren ve alarm veren kişi)", // nieuw, nalezen
    'w.signaalgever': "işaretçi (vinç operatörüne el işaretleri veren kişi)", // nieuw, nalezen
    'w.hijsen': "kaldırmak (bir yükü vinçle)", // nieuw, nalezen
    's.permitwork.1': "İş güvenliği izni olmadan başlamayız.", // nieuw, nalezen
    's.permitwork.2': "Önce gaz ölçümü, ancak ondan sonra kapalı alana giriş.", // nieuw, nalezen
    's.permitwork.3': "İşaretçiye bak: kaldır, indir, dur.", // nieuw, nalezen
    'c.permitwork.q': "Tankın yanında dışarıda kim kalıyor?", // nieuw, nalezen
    'c.permitwork.a': "Ben. Giriş gözcüsü benim.", // nieuw, nalezen
    'c.vog': "VOG: geçmişinin kontrolü", // nieuw, nalezen
    'c.vog.b': "Bazı işler için ajans ya da işveren bir VOG (Verklaring Omtrent het Gedrag) ister. Bu, devletten gelen bir belgedir: geçmişinin bu iş için sorun olmadığını söyler. Bakım, çocuk bakımı ve güvenlik işlerinde neredeyse her zaman buna ihtiyacın olur. Başvuruyu genelde işveren internetten başlatır. Justis’ten bir e-posta alırsın, başvuruyu DigiD ile tamamlar ve ücreti ödersin. Önce kimin ödeyeceğini sor: çoğu zaman işveren parayı geri öder. Çocuklarla ya da korunmasız kişilerle çalışan gönüllüler için çoğu zaman ücretsizdir. Sabıka kaydın mı var? Bu her zaman VOG alamayacağın anlamına gelmez: Justis bu iş için neyin önemli olduğuna bakar. Emin değil misin? Juridisch Loket’e sor. Genel bilgi. Kendi durumun için işverenine, sendikaya veya Juridisch Loket’e sor.", // nieuw, nalezen
    'c.vog.p': "VOG’u kendim mi ödemem gerekiyor?", // nieuw, nalezen
    'c.vog.s': "Bir bakımevindeki yeni işin senden VOG istiyor. Yıllar önce polisle bir sorunun olmuştu. Ne yaparsın?", // nieuw, nalezen
    'c.vog.o1': "Başvurursun ve endişeliysen Juridisch Loket’e sorarsın.", // nieuw, nalezen
    'c.vog.o2': "Başvurmazsın: onu asla alamazsın.", // nieuw, nalezen
    'c.vog.o3': "Vaktin olmadığını söyler ve başka iş ararsın.", // nieuw, nalezen
    'c.vog.w': "Justis sadece iş için neyin önemli olduğuna bakar. Geçmişinde bir şey olan birçok kişi yine de VOG alır. Emin değilsen tavsiye almak yardımcı olur.", // nieuw, nalezen
    'c.safetysigns': "VCA nedir?", // nieuw, nalezen
    'c.safetysigns.b': "VCA bir iş güvenliği sertifikasıdır. Birçok şirket, ajans üzerinden çalışsan da, bunu ister, örneğin inşaatta ve sanayide. Çoğu işçi B-VCA (VCA Basis) yapar; bir amir VOL-VCA yapar. Bir kursa gidersin ve tanınmış bir sınav merkezinde çoktan seçmeli sorularla bir sınava girersin. Sınava çoğu zaman birkaç dilde, örneğin İngilizce ya da Lehçe girebilirsin: sınav merkezine sor. Diploma 10 yıl geçerlidir. Çoğu zaman işveren ya da ajans öder: kendin ödemeden önce sor. Bir ajans her masrafı maaşından kesemez (ajans üzerinden çalışma konusuna bak). Bu derslerde güvenli çalışmada ve VCA’da karşılaştığın bazı kelimeleri öğrenirsin. VCA için bir kursa gidersin ve bir sınava girersin. Genel bilgi. Kendi durumun için işverenine, sendikaya veya Juridisch Loket’e sor.", // nieuw, nalezen
    'c.safetysigns.p': "VCA kursunu kim ödüyor?", // nieuw, nalezen
    'c.safetysigns.s': "Bir ajans diyor ki: “VCA’ya ihtiyacın var. Kursu sen ödersin, ya da parasını maaşından keseriz.” Ne yaparsın?", // nieuw, nalezen
    'c.safetysigns.o1': "Kimin ödediğini sorarsın ve bunu yazılı olarak alırsın.", // nieuw, nalezen
    'c.safetysigns.o2': "İşi almak için hemen ödersin.", // nieuw, nalezen
    'c.safetysigns.o3': "Hiçbir şey demezsin ve imzalarsın.", // nieuw, nalezen
    'c.safetysigns.w': "VCA’yı çoğu zaman işveren ya da ajans öder. Bir şey ödemen gerekiyorsa bunu önceden, yazılı olarak bilmek istersin.", // nieuw, nalezen
    'c.substances': "Önce etiketi oku, sonra çalış", // nieuw, nalezen
    'c.substances.b': "Tehlikeli bir ürünün etiketinde, içinde siyah bir resim olan kırmızı bir baklava şekli vardır: tehlike işareti. Resim tehlikeyi gösterir, örneğin ateş, zehir ya da cildini yakan bir ürün. Etiket ve güvenlik bilgi formu (veiligheidsblad), onunla nasıl güvenli çalışacağını ve bir şey ters giderse ne yapacağını söyler. Onların söylediklerini giy ve tak: eldiven, koruyucu gözlük ya da maske. Kapağı kapat ve ürünü kendi yerine kaldır. Onu asla bir içecek şişesine dökme: biri onu içebilir. Onunla çalışırken yemek yeme, bir şey içme ya da sigara içme ve sonra ellerini yıka. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.substances.p': "Bu ürünün güvenlik bilgi formu nerede?", // nieuw, nalezen
    'c.substances.s': "Bir iş arkadaşın, yanında götürmek için bir temizlik ürününü boş bir su şişesine döküyor. Ne yaparsın?", // nieuw, nalezen
    'c.substances.o1': "Bunun tehlikeli olduğunu söylersin: biri onu içebilir.", // nieuw, nalezen
    'c.substances.o2': "Hiçbir şey: bu onun kendi şişesi.", // nieuw, nalezen
    'c.substances.o3': "Şişeye küçük bir etiket yapıştırırsın.", // nieuw, nalezen
    'c.substances.w': "Bir içecek şişesinde ürün su ya da limonata gibi görünür. Biri onu yanlışlıkla içebilir. Ürün kendi ambalajında, etiketiyle birlikte kalır.", // nieuw, nalezen
    'c.firefight': "Küçük yangın mı, büyük yangın mı?", // nieuw, nalezen
    'c.firefight.b': "Yangının üç şeye ihtiyacı vardır: yakıt, hava ve ısı. Buna yangın üçgeni denir. Birini ortadan kaldırırsan yangın söner. Yangın battaniyesi havayı keser. Su ısıyı alır, ama yanan sıvı yağa ya da katı yağa veya elektrikli şeylere asla su kullanma. Yangın söndürücüye bak: ne için olduğu üzerinde yazar. Köpük ve toz birçok yangında işe yarar; CO2 elektrik yangınları için iyidir. Kıvılcımları ve açık ateşi kolay yanan ürünlerden uzak tut. Sadece küçük bir yangını kendin söndür, ve sadece güvenliyse. Daha mı büyük? Dışarı çık, kapıyı arkandan kapat ve alarm ver. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.firefight.p': "Yangın battaniyesi nerede asılı?", // nieuw, nalezen
    'c.firefight.s': "Kantinde bir tavadaki yağ alev alıyor. Alevler hâlâ küçük. Ne yaparsın?", // nieuw, nalezen
    'c.firefight.o1': "Yangın battaniyesini tavanın üzerine örtersin.", // nieuw, nalezen
    'c.firefight.o2': "Üzerine bir bardak su atarsın.", // nieuw, nalezen
    'c.firefight.o3': "Tavayı dışarı taşırsın.", // nieuw, nalezen
    'c.firefight.w': "Yanan yağa su atmak büyük bir ateş topu oluşturur. Battaniye havayı keser ve yangın söner. Yapabiliyorsan ocağı kapat.", // nieuw, nalezen
    'c.permitwork': "Tehlikeli iş: önce izin", // nieuw, nalezen
    'c.permitwork.b': "Yanabilen şeylerin yakınında kaynak yapmak ya da bir tankta veya çukurda çalışmak gibi tehlikeli işler için şirket çoğu zaman bir iş güvenliği izni (werkvergunning) kullanır. Bu bir güvenlik belgesidir, oturma ya da çalışma belgelerin değil. Ne yaptığını, nerede yaptığını, hangi tehlikeler olduğunu ve onlara karşı ne yapılacağını söyler. Onu oku ve ancak imzalandığında başla. Kapalı bir alanda çok az hava ya da tehlikeli bir gaz olabilir: önce gaz ölçümü yapılır ve bir giriş gözcüsü dışarıda kalır. İçeride biri zor durumda mı? Alarm ver: korunmadan asla içeri girme. Vinçle çalışırken işaretleri tek bir kişi verir: işaretçi. Asla asılı bir yükün altında durma. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.permitwork.p': "İş güvenliği izni imzalandı mı?", // nieuw, nalezen
    'c.permitwork.s': "Tanktaki iş arkadaşın cevap vermiyor. Giriş gözcüsü sensin. Ne yaparsın?", // nieuw, nalezen
    'c.permitwork.o1': "Alarm verirsin ve dışarıda kalırsın.", // nieuw, nalezen
    'c.permitwork.o2': "Ona yardım etmek için hızla içeri tırmanırsın.", // nieuw, nalezen
    'c.permitwork.o3': "Birkaç dakika beklersin, sonra bakarsın.", // nieuw, nalezen
    'c.permitwork.w': "İş arkadaşına zarar veren gaz sana da zarar verebilir. Tanklardaki kurbanların birçoğu yardıma koşan kişilerdi. Alarmdan sonra koruyucu donanımla yardım gelir.", // nieuw, nalezen
    // "Operator in de procesindustrie", the fourth own unit of Productie (23 November 2026).
    'u.process': "Proses endüstrisinde operatör", // nieuw, nalezen
    'l.plantround': "Tur ve kontrol odası", // nieuw, nalezen
    'w.controlekamer': "kontrol odası (operatörlerin bütün tesisi ekranlardan izlediği yer)", // nieuw, nalezen
    'w.operator': "operatör (bir tesisin makinelerini çalıştıran ve izleyen kişi)", // nieuw, nalezen
    'w.drukmeter': "basınç göstergesi, manometre (ibreli yuvarlak bir gösterge)", // nieuw, nalezen
    'w.niveau': "seviye (bir tankın ya da silonun ne kadar dolu olduğu)", // nieuw, nalezen
    'w.snelheid': "hız (bir hattın ya da makinenin ne kadar hızlı çalıştığı)", // nieuw, nalezen
    'w.alarmmelding': "alarm mesajı (ekranda bir şeyin yanlış olduğunu söyleyen bir uyarı)", // nieuw, nalezen
    's.plantround.1': "Turumu atıyorum.", // nieuw, nalezen
    's.plantround.2': "Basınç çok yüksek.", // nieuw, nalezen
    's.plantround.3': "Değeri yazıyorum.", // nieuw, nalezen
    'c.plantround.q': "Ekranda neden bir alarm var?", // nieuw, nalezen
    'c.plantround.a': "İki numaralı tankta seviye çok yüksek.", // nieuw, nalezen
    'l.plantfault': "Bir arıza", // nieuw, nalezen
    'w.stilstand': "duruş (hat durur ve hiçbir şey üretilmez)", // nieuw, nalezen
    'w.opstarten': "çalıştırmak, devreye almak (bir makineyi ya da hattı, adım adım)", // nieuw, nalezen
    'w.stilzetten': "durdurmak (bir makineyi doğru şekilde durdurmak)", // nieuw, nalezen
    'w.technischedienst': "bakım bölümü (TD: makineleri onarırlar)", // nieuw, nalezen
    'w.onderhoudsmonteur': "bakım teknisyeni", // nieuw, nalezen
    'w.resetten': "resetlemek, sıfırlamak (ekrandaki ya da paneldeki bir arızayı silmek)", // nieuw, nalezen
    's.plantfault.1': "Arıza olduğunda vardiya şefini ararım.", // nieuw, nalezen
    's.plantfault.2': "Çalışan bir makinenin içine asla uzanma.", // nieuw, nalezen
    's.plantfault.3': "Bakım bölümü yolda.", // nieuw, nalezen
    'c.plantfault.q': "Hattı yeniden çalıştırabilir miyim?", // nieuw, nalezen
    'c.plantfault.a': "Hayır, bekle. Teknisyenin kilidi hâlâ üzerinde.", // nieuw, nalezen
    'l.shiftwork': "Vardiyalar ve geceler", // nieuw, nalezen
    'w.ploeg': "vardiya ekibi (aynı vardiyalarda çalışan grup)", // nieuw, nalezen
    'w.ploegwissel': "vardiya değişimi (bir ekip eve gider, sonraki ekip başlar)", // nieuw, nalezen
    'w.volcontinu': "kesintisiz, gece gündüz (tesis haftanın her günü gece gündüz çalışır)", // nieuw, nalezen
    'w.overdagslapen': "gündüz uyumak (bir gece vardiyasından sonra)", // nieuw, nalezen
    'w.broodtrommel': "yemek kutusu", // nieuw, nalezen
    'w.aflosser': "nöbeti devralan kişi (senin yerini alan iş arkadaşı)", // nieuw, nalezen
    's.shiftwork.1': "Fabrikamız kesintisiz çalışıyor.", // nieuw, nalezen
    's.shiftwork.2': "Bunu sonraki vardiya ekibi için kayıt defterine yaz.", // nieuw, nalezen
    's.shiftwork.3': "Devir teslim için zamanındayım.", // nieuw, nalezen
    'c.shiftwork.q': "Dün gece ne oldu?", // nieuw, nalezen
    'c.shiftwork.a': "Üç numaralı pompa durdu. Kayıt defterinde yazıyor.", // nieuw, nalezen
    'l.heatdust': "Isı, buhar ve toz", // nieuw, nalezen
    'w.smeltoven': "ergitme fırını (camı ya da metali eriten çok sıcak bir fırın)", // nieuw, nalezen
    'w.stoom': "buhar (çok sıcak su buharı)", // nieuw, nalezen
    'w.stoomleiding': "buhar borusu (buhar görmesen de sıcaktır)", // nieuw, nalezen
    'w.hittekleding': "ısıya dayanıklı koruyucu giysi", // nieuw, nalezen
    'w.kwartsstof': "kuvars tozu (kilden, kumdan ya da taştan çıkan çok ince toz; akciğerlerine zarar verir)", // nieuw, nalezen
    'w.explosiegevaar': "patlama tehlikesi (havadaki toz ya da buhar patlayabilir; üzerinde EX yazan sarı bir işaret)", // nieuw, nalezen
    's.heatdust.1': "Ergitme fırınının yanında sık sık su iç.", // nieuw, nalezen
    's.heatdust.2': "Kuvars tozunu göremezsin. Toz maskeni tak.", // nieuw, nalezen
    's.heatdust.3': "Burada patlama tehlikesi var: kıvılcım olmaz.", // nieuw, nalezen
    'c.heatdust.q': "Telefonum bu bölgeye girebilir mi?", // nieuw, nalezen
    'c.heatdust.a': "Hayır. Burada patlama tehlikesi var.", // nieuw, nalezen
    'c.plantround': "Turunu at, değerleri yaz", // nieuw, nalezen
    'c.plantround.b': "Gece gündüz çalışan bir tesisin gözlere ve kulaklara ihtiyacı vardır. Turunda bakar, dinler ve koklarsın: yeni bir ses, bir sızıntı ya da garip bir koku bir sorunun ilk işareti olabilir. Göstergeleri okursun: sıcaklık, basınç, hız ve seviye. Her değeri hemen, saatiyle birlikte listeye ya da sisteme yaz. Sonradan, ezberden değil. Bir değer çok mu yüksek ya da çok mu düşük? Hemen kontrol odasına ya da vardiya şefine söyle. Ekrandaki bir alarm asla “sadece bir alarm” değildir: neden çaldığını bilmeden onu kapatma. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.plantround.p': "Sıcaklık çok yüksek.", // nieuw, nalezen
    'c.plantround.s': "Turunda basınç biraz fazla yüksek. Vardiyan neredeyse bitiyor. Ne yaparsın?", // nieuw, nalezen
    'c.plantround.o1': "Hemen kontrol odasına söylersin.", // nieuw, nalezen
    'c.plantround.o2': "Yazarsın ve kimseye söylemezsin.", // nieuw, nalezen
    'c.plantround.o3': "Sonraki vardiyaya bırakırsın.", // nieuw, nalezen
    'c.plantround.w': "Bir tesiste küçük bir değişiklik hızla büyüyebilir. Kontrol odası bunu erken öğrenirse, bir şey ters gitmeden önce müdahale edebilir.", // nieuw, nalezen
    'c.plantfault': "Durdur, kilitle, sonra onar", // nieuw, nalezen
    'c.plantfault.b': "Arıza olduğunda hat durur ve herkes onun hızla yeniden çalışmasını ister. Ama birçok kaza tam o zaman olur. Çalışan bir makinenin içine asla uzanma, “sadece bir anlığına” bile. Vardiya şefini ya da bakım bölümünü ara. Biri makinede çalışmadan önce makine durdurulur ve kilitlenir, böylece kimse onu çalıştıramaz. Çoğu zaman makinede çalışan herkes üzerine kendi kilidini takar. Ancak bütün kilitler çıkarıldığında ve vardiya şefin güvenli olduğunu söylediğinde yeniden çalıştır. Öğrendiğin şekilde, adım adım çalıştır. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.plantfault.p': "Üzerinde hâlâ bir kilit var.", // nieuw, nalezen
    'c.plantfault.s': "Makineye bir ürün sıkıştı. Makine hâlâ çalışıyor. Bir iş arkadaşın diyor ki: “Hızlıca çekip çıkar.” Ne yaparsın?", // nieuw, nalezen
    'c.plantfault.o1': "İçine uzanmazsın: vardiya şefini ararsın.", // nieuw, nalezen
    'c.plantfault.o2': "Elinle hızlıca çekip çıkarırsın.", // nieuw, nalezen
    'c.plantfault.o3': "Makine çalışırken bir sopayla iterek çıkarırsın.", // nieuw, nalezen
    'c.plantfault.w': "Hâlâ çalışan bir makine her an hareket edebilir. Durdurulmuş ve kilitlenmiş bir makine sana zarar veremez.", // nieuw, nalezen
    'c.shiftwork': "Geceler: uyu, ye, zamanında ol", // nieuw, nalezen
    'c.shiftwork.b': "Birçok tesis haftanın her günü gece gündüz çalışır. Sırayla sabah, akşam ve gece vardiyalarında çalışırsın, çoğu zaman üç ya da beş vardiya ekibiyle. Gece vardiyasından sonra karanlık ve sessiz bir odada uyu ve ailene ne zaman uyuduğunu söyle. Belli saatlerde ye ve kendi yemeğini getir: gece yemekhane çoğu zaman kapalıdır. Devir teslim için zamanında ol: iş arkadaşın bekliyor ve tesis yalnız bırakılamaz. Gece vardiyaları için yasada ve çoğu zaman cao’da ek kurallar vardır, örneğin gece vardiyalarından sonraki dinlenme hakkında. Çalıştığın yerde kuralların ne olduğunu sor. Genel bilgi. Kendi durumun için işverenine, sendikaya veya Juridisch Loket’e sor.", // nieuw, nalezen
    'c.shiftwork.p': "Gece vardiyaları için kurallar neler?", // nieuw, nalezen
    'c.shiftwork.s': "Dört geceden sonra vardiya şefin senden bir gece daha çalışmanı istiyor. Çok yorgunsun. Ne yaparsın?", // nieuw, nalezen
    'c.shiftwork.o1': "Çok yorgun olduğunu söyler ve kuralları sorarsın.", // nieuw, nalezen
    'c.shiftwork.o2': "Evet der ve bol kahve içersin.", // nieuw, nalezen
    'c.shiftwork.o3': "Evet der ve molanda biraz uyursun.", // nieuw, nalezen
    'c.shiftwork.w': "Yorgun insanlar daha çok hata yapar ve bir tesiste bir hata tehlikeli olabilir. Gece vardiyalarından sonra dinlenmeyle ilgili kurallar vardır.", // nieuw, nalezen
    'c.heatdust': "Isı, toz ve kıvılcımlar", // nieuw, nalezen
    'c.heatdust.b': "Bir ergitme fırınının, bir pişirme fırınının ya da buharın yakınında çok sıcaktır. Sık sık su iç, susamadan önce de. Isıya dayanıklı koruyucu giysiyi giy ve boruları ya da parçaları eldivensiz tutma: buhar ve sıcak metal yakar, onları görmesen de. Başın mı dönüyor ya da miden mi bulanıyor? Dur, serin bir yere git ve birine söyle. Kilden, kumdan ya da taştan çıkan toz kuvars tozu (kwartsstof) içerebilir. Onu görmezsin, ama akciğerlerine zarar verir. Toz emme sistemini kullan, toz maskeni tak ve tozu asla basınçlı havayla üfleme. Bazı bölgelerde toz ya da buhar patlayabilir: bunu üzerinde EX yazan sarı bir işaret gösterir. Orada: kıvılcım yok, ateş yok ve çoğu zaman normal telefon yok. Her bölgede neye izin verildiğini sor. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.heatdust.p': "Kendimi iyi hissetmiyorum. Serin bir yere gidiyorum.", // nieuw, nalezen
    'c.heatdust.s': "Makinende ince kil tozu var. Bir iş arkadaşın diyor ki: “Hava tabancasıyla üfle.” Ne yaparsın?", // nieuw, nalezen
    'c.heatdust.o1': "Islak bezle ya da elektrikli süpürgeyle temizlersin.", // nieuw, nalezen
    'c.heatdust.o2': "Üflersin: daha hızlı.", // nieuw, nalezen
    'c.heatdust.o3': "Sonraki vardiyaya bırakırsın.", // nieuw, nalezen
    'c.heatdust.w': "Üflemek tozu havalandırır, havaya ve akciğerlerine. Islak bir bez ya da elektrikli süpürge tozu aşağıda tutar.", // nieuw, nalezen
  },
};

export default t;
