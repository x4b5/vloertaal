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
    'w.feedback': 'geri bildirim',
    'w.uitleggen': 'açıklamak',
    'w.leren': 'öğrenmek',
    'w.verbeteren': 'iyileştirmek, düzeltmek',
    's.mistakes.1': 'Pardon, bir hata yaptım.',
    's.mistakes.2': 'Açıklayabilir misin?',
    's.mistakes.3': 'Övgün için teşekkürler!',
    'c.mistakes.q': 'Aferin!',
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
    'u.leave': 'İzin ve hastalık',
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
    'c.warning.q': 'Pasaportunu bana ver, o kadar.',
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
    'c.doctor.a': 'Oğlumun ateşi çok yüksek.',
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
    's.transit.1': 'Banka kartımla giriş yapıyorum.',
    's.transit.2': 'Çıkış yapmayı unutma.',
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
    'w.client': 'danışan (bakım verdiğin kişi)',
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
    'c.cv': 'Kısa bir Hollanda CV’si',
    'c.cv.b': 'Hollanda’da CV kısadır: 1 veya 2 sayfa. İletişim bilgilerini, iş deneyimini, eğitimini, dillerini ve becerilerini yaz. Fotoğraf gerekmez. Dinini, yaşını veya medeni durumunu yazmak zorunda değilsin. Neler yapabildiğin konusunda dürüst ol. Hollandacanı birine kontrol ettir.',
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
    'c.interview.o1': 'Çalışma saatleri veya eğitim hakkında bir soru sorarsın.', // nagelezen (2e lezing)
    'c.interview.o2': 'Soru sormak kibar olmadığı için hayır dersin.',
    'c.interview.o3': 'İyi çalıştığını göstermek için kendinden daha çok bahsedersin.', // nagelezen (2e lezing)
    'c.interview.w': 'Sorular işle ilgilendiğini gösterir. Hollandalı işverenler genelde soru bekler.',
    'c.findwork': 'Sözleşmeni yazılı al',
    'c.findwork.b': 'Her zaman yazılı bir sözleşme ve kendin için bir kopya iste. İmzalamadan önce oku veya güvendiğin birinden yardım iste. Geçici iş ajansı (uitzendbureau) sana iş bulmak için senden para isteyemez. Genel bilgi. Kendi durumun için işverenine, sendikaya veya Juridisch Loket’e sor.',
    'c.findwork.p': 'Sözleşmeyi önce okuyabilir miyim?',
    'c.findwork.s': 'Yeni bir işveren diyor ki: “Hemen buraya imza at. Sonra okursun.” Ne yaparsın?',
    'c.findwork.o1': 'Okumak için zaman veya bir kopya istersin.', // nagelezen (2e lezing)
    'c.findwork.o2': 'İşi kaybetmemek için hemen imzalarsın.',
    'c.findwork.o3': 'İmzalar, sonra bir kopya istersin.', // nagelezen (2e lezing)
    'c.findwork.w': 'Sözleşmen ne kazandığını ve hakların neler olduğunu söyler. İyi bir işveren sana okuman için zaman verir. Anlamadığın her şeyi sorabilirsin.',
    'c.contract': 'Deneme süresi ve çağrı üzerine çalışma',
    'c.contract.b': 'Deneme süresi (proeftijd) yazılı olmalıdır. 6 ay veya daha kısa bir sözleşmede deneme süresine izin yoktur. Daha uzun ama 2 yıldan kısa bir sözleşmede en fazla 1 aydır. 2 yıl veya daha uzun ya da süresiz bir sözleşmede en fazla 2 aydır. Çağrı üzerine mi çalışıyorsun (oproepkracht)? İşveren seni genelde en az 4 gün önceden çağırmalı. Daha geç çağırırsa gelmek zorunda değilsin. Bir cao bu 4 günü kısaltabilir, ama 1 günden kısa olamaz. İşini bundan daha geç iptal ederlerse yine de ücretini alırsın. Seni 3 saatten az bir iş için çağırırlarsa genelde 3 saatlik ücret alırsın. Genel bilgi. Kendi durumun için işverenine, sendikaya veya Juridisch Loket’e sor.', // nalezen: feit gelijk getrokken
    'c.contract.p': 'Deneme süresi sözleşmemde var mı?',
    'c.contract.s': 'Sözleşmen 3 aylık. İçinde şöyle yazıyor: “Proeftijd: 1 maand”. Ne yaparsın?',
    'c.contract.o1': 'Bunu sorarsın: bu deneme süresi geçerli değil.', // nagelezen (2e lezing)
    'c.contract.o2': 'Hiçbir şey yapmazsın. Her sözleşmede deneme süresi vardır.',
    'c.contract.o3': 'İmzalarsın ve hiç sormazsın, çünkü patron en iyisini bilir.',
    'c.contract.w': '6 ay veya daha kısa bir sözleşmedeki deneme süresi geçerli değildir. Sakince sormak normaldir. Cevap net değilse sendikadan veya Juridisch Loket’ten tavsiye al.',
    'c.agency': 'İşverenin ajanstır',
    'c.agency.b': 'Geçici iş ajansı (uitzendbureau) üzerinden çalışıyorsan, işverenin ajanstır, çalıştığın şirket değil. Sözleşmen ve maaşın ajanstan gelir ve geçici işçiler için bir cao (uitzend-cao) vardır. Aynı işi yapan şirket çalışanlarıyla aynı ücreti alma hakkın var. Ayrıca tatil parası (vakantiegeld) alırsın ve izin günleri biriktirirsin. Çalıştığın saatlerin kendi listesini tut ve bunları maaş bordronda kontrol et. Genel bilgi. Kendi durumun için işverenine, sendikaya veya Juridisch Loket’e sor.',
    'c.agency.p': 'Maaş bordromda saatler eksik.',
    'c.agency.s': 'Maaş bordronda 32 saat yazıyor, ama sen 38 saat çalıştın. Ne yaparsın?',
    'c.agency.o1': 'Kendi saat listeni ajansa gösterir ve düzeltmesini istersin.', // nagelezen (2e lezing)
    'c.agency.o2': 'Sadece 6 saat olduğu için hiçbir şey söylemezsin.',
    'c.agency.o3': 'Çalıştığın şirketteki patrondan bu 6 saati ödemesini istersin.',
    'c.agency.w': 'Sana ajans ödeme yapıyor, bu yüzden hatayı ajans düzeltmeli. Tarih ve saatlerin olduğu kendi listen yardımcı olur. Bunu sormak senin hakkın.',
    'c.bsn': 'BSN’ini güvende tut',
    'c.bsn.b': 'Belediyeye (gemeente) kaydolduğunda bir BSN (burgerservicenummer) alırsın. Burada sadece kısa bir süre mi kalıyorsun? O zaman bir RNI masasına kaydolursun. BSN’in çalışmak, vergi, sağlık sigortası ve banka hesabı için gerekir. İşverenin kimliğine ve BSN’ine ihtiyaç duyar. BSN’ini veya kimliğinin kopyasını ihtiyacı olmayan kişilere verme: neden ihtiyaç duyduklarını sor. Taşınıyor musun? Yeni adresini 5 gün içinde gemeente’ye kaydettir. DigiD, devlet sitelerine giriş bilgindir: onu asla başkasına verme. Burada yaşıyor veya çalışıyor musun? O zaman genelde Hollanda sağlık sigortası (zorgverzekering) yaptırman gerekir. Bunu çabuk hallet. Genel bilgi. Kendi durumun için işverenine, sendikaya veya Juridisch Loket’e sor.',
    'c.bsn.p': 'BSN’ime neden ihtiyacınız var?',
    'c.bsn.s': 'Tanımadığın biri sana WhatsApp’tan iş teklif ediyor. Pasaportunun fotoğrafını ve DigiD giriş bilgilerini istiyor. Ne yaparsın?',
    'c.bsn.o1': 'DigiD giriş bilgilerini asla vermezsin. Önce kim olduğunu kontrol edersin.', // nagelezen (2e lezing)
    'c.bsn.o2': 'İşi almak için her şeyi hemen gönderirsin.',
    'c.bsn.o3': 'Sadece pasaport fotoğrafını gönderirsin, DigiD giriş bilgilerini değil.', // nagelezen (2e lezing)
    'c.bsn.w': 'DigiD’in veya kimliğinin kopyasıyla başkaları senin adını kullanabilir, örneğin kredi veya sosyal yardım almak için. Gerçek bir işverenin kimliğine ve BSN’ine ihtiyacı vardır, ama DigiD giriş bilgilerine asla.',
    'c.housing': 'İşverenden konut',
    'c.housing.b': 'Konutunu işverenin veya ajansın mı ayarlıyor? O zaman kira sözleşmesi iş sözleşmenden ayrı olmalıdır. Yazılı bir kira sözleşmesi ve ne ödediğine dair bir belge iste. Kira maaşından ancak yazılı olarak kabul ettiysen ve yasal sınırlar içinde kesilebilir: bunu maaş bordronda kontrol et. Depozito (borg) en fazla 2 aylık temel kiradır. Ayrıldığında, gerçek hasar düşüldükten sonra geri alırsın. Adresine gemeente’de kaydol. Güvensiz konut, tehdit veya haksız masraflar mı var? Bunu gemeente’ye (meldpunt) bildir ve Juridisch Loket’ten veya bir konut danışma hizmetinden ücretsiz tavsiye al. Kira fiyatı veya hizmet giderleriyle ilgili bir sorun için Huurcommissie vardır. İşin mi bitiyor? Evden ayrılmadan önce tavsiye al. Genel bilgi. Kendi durumun için sendikaya, Juridisch Loket’e veya FairWork’e sor.',
    'c.housing.p': 'Ödediğime dair bir belge alabilir miyim?',
    'c.housing.s': 'İşin bitiyor. Ajans diyor ki: “Yarın evden çıkmalısın.” Ne yaparsın?',
    'c.housing.o1': 'Önce Juridisch Loket’ten tavsiye alırsın.', // nagelezen (2e lezing)
    'c.housing.o2': 'Hemen çıkar ve depozitonu unutursun.',
    'c.housing.o3': 'Kalırsın ve ajansa artık cevap vermezsin.',
    'c.housing.w': 'Kira sözleşmenin işinden ayrı, kendi kuralları vardır. Ücretsiz tavsiye haklarını bilmene yardım eder, örneğin ne zaman çıkman gerektiği ve depozito hakkında.',
    'c.payslip': 'Maaş bordronu kontrol et',
    'c.payslip.b': 'Bruto, vergiden önceki maaşındır. Netto, banka hesabına yatan paradır: bruto eksi vergi ve primler (loonheffing). İşveren sana bir maaş bordrosu (loonstrook) vermek zorundadır. Her bordroda saatleri ve ücreti kontrol et, çalıştığın saatleri de not et. İki işin mi var? Vergi indirimini (loonheffingskorting) sadece bir işverende kullan. Genel bilgi. Kendi durumun için işverenine, sendikaya veya Juridisch Loket’e sor.',
    'c.payslip.p': 'Daha fazla saat çalıştım. Kontrol edebilir misin?',
    'c.payslip.s': 'Maaş bordronda çalıştığından daha az saat görünüyor. Ne yaparsın?',
    'c.payslip.o1': 'Notlarını gösterir ve amirinden kontrol etmesini istersin.', // nagelezen (2e lezing)
    'c.payslip.o2': 'Sorun istemediğin için hiçbir şey söylemezsin.',
    'c.payslip.o3': 'Bir ay beklersin: bir sonraki bordroda düzelir.', // nagelezen (2e lezing)
    'c.payslip.w': 'Maaş bordrosunda hatalar olur. Bunu sormak normaldir ve senin hakkındır. Tarih ve saatlerle ilgili kendi notların çok yardımcı olur.',
    'c.extra': 'Tatil parası ve asgari ücret',
    'c.extra.b': 'Tatil parası (vakantiegeld) alırsın: brüt maaşının en az %8’i. Çoğu işveren bunu yılda bir kez, mayıs veya haziranda öder. Maaşın asla yasal asgari ücretten (minimumloon) düşük olamaz; 21 yaşından küçükler için asgari ücret daha düşüktür. Miktar her yıl değişir: rijksoverheid.nl sitesinden kontrol et. Bir cao çoğu zaman fazla mesai veya gece çalışması için ek ücret verir. Genel bilgi. Kendi durumun için işverenine, sendikaya veya Juridisch Loket’e sor.',
    'c.extra.p': 'Tatil paramı ne zaman alırım?',
    'c.extra.s': 'Bir iş arkadaşın diyor ki: “Mayısta patrondan ekstra para alırsın.” Bu nedir?',
    'c.extra.o1': 'Tatil parası: brüt maaşının en az %8’i.',
    'c.extra.o2': 'Sadece en iyi çalışanlara verilen bir hediye.',
    'c.extra.o3': '13. maaş: herkese bir aylık ek maaş.', // nagelezen (2e lezing)
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
    'c.smoking.o1': 'Hayır der ve molanda dışarıda, sigara içme yerinde içersin.',
    'c.smoking.o2': 'Bu seferlik depo odasında hızlıca içersin.',
    'c.smoking.o3': 'Onun yerine içeride vape kullanırsın, çünkü buna izin var.',
    'c.smoking.w': 'İçeride sigara içmek yasaya aykırıdır ve yangın çıkarabilir. İçeride vape de yasaktır. Kurala uymak herkesi güvende tutar.',
    'c.clock': 'Kartını kendin bas',
    'c.clock.b': 'Giriş ve çıkış kaydını kendin yap, işe gerçekten başladığın ve bıraktığın anda. Asla bir iş arkadaşın için giriş veya çıkış kaydı yapma ve kartını asla başkasına kullandırma. Bu sahtekârlık sayılır ve işten çıkarılmana yol açabilir. Geç mi kalacaksın? Vardiyan başlamadan önce ara. Kayıtlı saatlerinin maaş bordronla uyuştuğunu kontrol et. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.',
    'c.clock.p': 'Çıkış kaydı yapmayı unuttum. Düzeltebilir misin?',
    'c.clock.s': 'Bir iş arkadaşın sana kartını veriyor: “Benim yerime giriş kaydı yap, 20 dakika geç kalacağım.” Ne yaparsın?',
    'c.clock.o1': 'Hayır der ve amiri aramasını söylersin.', // nagelezen (2e lezing)
    'c.clock.o2': 'Arkadaşın olduğu için bir kereliğine yaparsın.',
    'c.clock.o3': 'Onun yerine giriş kaydı yapar ve amire sonra söylersin.',
    'c.clock.w': 'Başkası yerine giriş kaydı yapmak ikiniz için de sahtekârlık sayılır. Hayır demek hem iş arkadaşını hem kendi işini korur.',
    'c.hygiene': 'Ayık kafa, temiz eller',
    'c.hygiene.b': 'İş yerinde alkol ve uyuşturucu kullanmak veya bunları kullandıktan sonra işe gelmek neredeyse tüm şirketlerde yasaktır. Makinelerin ve forkliftlerin yanında çok tehlikelidir ve işten çıkarılmana yol açabilir. Bir ilaç uykunu getiriyor veya başını döndürüyor mu? Amirine söyle, böylece güvenli bir iş yapabilirsin. Hangi ilaç olduğunu söylemek zorunda değilsin. Gıda üretiminde hijyen kuralları sıkıdır: ellerini yıka, temiz iş kıyafeti giy, gerekirse bone tak ve takı takma. Kusma veya ishal mi var? Başlamadan önce bildir. Çalışma yerini düzenli tut. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.',
    'c.hygiene.p': 'Bir ilaç kullanıyorum. Uykumu getiriyor.',
    'c.hygiene.s': 'Doktorun sana uyku yapan bir ilaç veriyor. Yarın forklift kullanman gerekiyor. Ne yaparsın?',
    'c.hygiene.o1': 'Güvenli bir iş yapabilmek için başlamadan önce amirine söylersin.',
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
    'c.mistakes.o1': 'Amirine söyler ve düzeltmeye yardım edersin.', // nagelezen (2e lezing)
    'c.mistakes.o2': 'Hiçbir şey söylemez ve kimsenin fark etmemesini umarsın.',
    'c.mistakes.o3': 'Bir iş arkadaşının yaptığını söylersin.',
    'c.mistakes.w': 'Erken söylenen bir hata kolay düzeltilir. Dürüst olmak güven oluşturur ve bu, hiç hata yapmamaktan daha önemlidir.',
    'c.respect': 'Herkese saygı',
    'c.respect.b': 'İş yerinde herkes eşittir ve cinsiyeti, kökeni, dini veya cinsel yönelimi ne olursa olsun herkese saygıyla davranılır. Fiziksel temas konusunda sen karar verirsin. Tokalaşmak yaygındır, ama başka kibar bir şekilde de selam verebilirsin, örneğin başını sallayıp gülümseyerek, ve bunu kısaca açıklayabilirsin. Birinin kökeni veya diniyle ilgili şakalar, tehditler, zorbalık (pesten) ve istenmeyen cinsel davranış kabul edilmez. Bunu amirine veya şirketinde varsa bir güven danışmanına (vertrouwenspersoon) bildirebilirsin.',
    'c.respect.p': 'Tokalaşmamayı tercih ederim, ama seni selamlamaktan memnuniyet duyarım.',
    'c.respect.s': 'Bir iş arkadaşın sık sık dininle ilgili şakalar yapıyor. Durmasını istedin ama devam ediyor. Ne yaparsın?',
    'c.respect.o1': 'Amirine veya vertrouwenspersoon’a söylersin.',
    'c.respect.o2': 'Sorun çıkmasın diye sen de gülersin.',
    'c.respect.o3': 'Sen de onun kökeniyle ilgili şakalar yaparsın.',
    'c.respect.w': 'Böyle şakalar iş yerinde kabul edilmez. Bildirmek normaldir: şirket iş yerini herkes için güvenli tutmak zorundadır.',
    'c.health': 'Molalar ve çalışma saatleri',
    'c.health.b': 'Yasa sağlığını korur. 5,5 saatten fazla mı çalışıyorsun? O zaman en az 30 dakika mola hakkın var (2 kez 15 dakika olabilir). 10 saatten fazla mı? O zaman en az 45 dakika. Bir cao’da biraz farklı mola kuralları olabilir. Bir vardiyada en fazla 12 saat, bir haftada en fazla 60 saat çalışabilirsin. İşveren sana iş ayakkabısı veya eldiven gibi koruyucu ekipmanı ücretsiz vermek zorundadır. Güvensiz iş veya çok düşük ücret mi var? Bunu Nederlandse Arbeidsinspectie’ye bildirebilirsin, adını vermeden de. Genel bilgi. Kendi durumun için işverenine, sendikaya veya Juridisch Loket’e sor.',
    'c.health.p': 'Henüz mola vermedim.',
    'c.health.s': '6 saattir molasız çalışıyorsun. Amirin devam etmeni istiyor. Ne yaparsın?',
    'c.health.o1': 'Şimdi molaya ihtiyacın olduğunu söylersin.', // nagelezen (2e lezing)
    'c.health.o2': 'Devam eder, sonra daha uzun bir mola verirsin.', // nagelezen (2e lezing)
    'c.health.o3': 'Tek kelime etmeden işi bırakıp eve gidersin.',
    'c.health.w': '5,5 saatten fazla çalıştığında mola yasal bir haktır, bir iyilik değil. Dinlenmek güvenli çalışmana da yardım eder.',
    'c.rights': 'Ayrımcılık ve işten çıkarılma',
    'c.rights.b': 'İş yerinde ayrımcılık yasaktır, örneğin kökenin, dinin veya cinsiyetin yüzünden. İşveren seni öylece işten çıkaramaz: normalde UWV’den veya bir hâkimden izin ya da senin onayın gerekir. (Deneme süresinde veya geçici bir sözleşmenin sonunda başka kurallar geçerlidir.) İşten çıkarılmanla ilgili anlamadığın bir kâğıdı imzalama. İşini bitirmek için bir anlaşma (vaststellingsovereenkomst) mı imzaladın? O zaman genelde 14 gün içinde yazılı olarak iptal edebilirsin. Önce sendikadan (örneğin FNV), bir ayrımcılık danışma merkezinden veya Juridisch Loket’ten (ücretsiz hukuki tavsiye) yardım al. Genel bilgi. Kendi durumun için sendikaya, Juridisch Loket’e veya FairWork’e sor.',
    'c.rights.p': 'Önce tavsiye almak istiyorum.',
    'c.rights.s': 'Patronun sana bir kâğıt veriyor: “Bugün imzala, anlaşmayla ayrılırsın.” Tam anlamıyorsun. Ne yaparsın?',
    'c.rights.o1': 'Henüz imzalamazsın. Zaman ister ve önce tavsiye alırsın.',
    'c.rights.o2': 'Patron sorun olmadığını söylediği için imzalarsın.',
    'c.rights.o3': 'Kâğıdı kaldırır ve bu konuda bir daha hiç konuşmazsın.',
    'c.rights.w': 'İmzalarsan haklarını kaybedebilirsin, örneğin işsizlik maaşı (WW) hakkını. Tavsiye almak için zaman istemek normaldir ve buna izin vardır.',
    'c.leave': 'Tatil ve acil durum izni',
    'c.leave.b': 'Yasaya göre ücretli izin günlerin vardır: haftada çalıştığın gün sayısının en az 4 katı. Tam zamanlı, haftada 5 gün mü çalışıyorsun? O zaman yılda en az 20 gün. Bir cao daha fazlasını verebilir. İzni zamanında ve yazılı olarak iste. Ailende kaza veya hastalık gibi ani bir acil durum mu var? O zaman ücretli kısa izin alabilirsin (calamiteitenverlof). İşverenine hemen haber ver. Genel bilgi. Kendi durumun için işverenine, sendikaya veya Juridisch Loket’e sor.',
    'c.leave.p': 'Temmuz için izin istiyorum.',
    'c.leave.s': 'Yazın üç hafta yurt dışındaki aileni ziyaret etmek istiyorsun. Ne yaparsın?',
    'c.leave.o1': 'İşverenden erkenden, yazılı olarak izin istersin.',
    'c.leave.o2': 'Öylece gider ve döndüğünde patronuna söylersin.',
    'c.leave.o3': 'Bir iş arkadaşından patrona bir gün önce söylemesini istersin.',
    'c.leave.w': 'İşveren genellikle evet demek zorundadır. Sadece çok önemli bir sebeple hayır diyebilir, o zaman da 2 hafta içinde yazılı olarak. Erken sormak “evet” cevabı için en iyi şansı verir.', // nagelezen (2e lezing)
    'c.illness': 'Hastayken hakların',
    'c.illness.b': 'Hasta olduğunda işveren 2 yıla kadar maaşının en az %70’ini ödemek zorundadır. Bir cao çoğu zaman daha fazlasını verir. Ücretsiz en fazla 2 bekleme günü (wachtdagen) olabilir, ama sadece sözleşmende veya cao’da yazıyorsa. Patronun hangi hastalığın olduğunu soramaz: sağlığını ve işini işyeri hekimiyle (bedrijfsarts) konuşursun. İyileşince işverenini ara (betermelden). İlk yıl en az asgari ücret alırsın. Süreli bir sözleşme, hasta olsan da bitiş tarihinde biter. Bir ajans üzerinden mi çalışıyorsun? Sözleşmende ajans maddesi (uitzendbeding) varsa, hastalanınca sözleşmen bitebilir. O zaman UWV’ye Ziektewet’i sor veya sendikaya sor. Genel bilgi. Kendi durumun için işverenine, sendikaya veya Juridisch Loket’e sor.', // nalezen: feit gelijk getrokken
    'c.illness.p': 'İyileştim. Yarın işe geliyorum.',
    'c.illness.s': 'Bir haftadır hastasın. İşverenin işyeri hekimine gitmeni istiyor. Ne yaparsın?',
    'c.illness.o1': 'Gider ve hekimle sağlığın ve işin hakkında konuşursun.',
    'c.illness.o2': 'Kendi doktorun olduğu için gitmezsin.',
    'c.illness.o3': 'Gitmek zorunda kalmamak için hâlâ hastayken işe dönersin.',
    'c.illness.w': 'İşyeri hekimi sağlıklı bir şekilde işe dönmene yardım eder. Hekim patronuna tıbbi bilgilerini söylemez, sadece hangi işleri yapabileceğini söyler.',
    'c.warning': 'Sömürü işaretleri',
    'c.warning.b': 'Bu işaretlere dikkat et. İşveren pasaportunu veya kimliğini elinde tutuyor: buna izin yok, kimliğini kendin saklarsın ve işveren sadece kopyasını alabilir. Anlaşılandan çok daha az ücret alıyorsun veya maaş bordron yok. İşverene veya ajansa büyük bir borç ödemek zorundasın. Başka seçeneğin olmadan aşırı uzun saatler çalışmak zorundasın. Biri seni tehdit ediyor veya konutunu sana baskı yapmak için kullanıyor. Bu normal değildir ve yasaktır. Genel bilgi. Kendi durumun için sendikaya, Juridisch Loket’e veya FairWork’e sor.',
    'c.warning.p': 'Pasaportumu geri istiyorum.',
    'c.warning.s': 'İlk gününde ajans diyor ki: “Güvenlik için pasaportunu biz saklıyoruz.” Ne yaparsın?',
    'c.warning.o1': 'Pasaportu kendin saklarsın. Kopyasını alabilirler.', // nagelezen (2e lezing)
    'c.warning.o2': 'Ajans kuralları bildiği için verirsin.',
    'c.warning.o3': 'Verirsin, ama önce fotoğrafını çekersin.',
    'c.warning.w': 'Pasaportun senindir. Onu elde tutmak, çalışanları kontrol etmenin bir yoludur. İşverenin dosyalar için sadece bir kopyaya ihtiyacı vardır.',
    'c.gethelp': 'Nereden yardım alırsın',
    'c.gethelp.b': 'Kendinde veya başkasında sömürü işaretleri mi görüyorsun? Yardım al. Bunu Nederlandse Arbeidsinspectie’ye, istersen adını vermeden, veya polise bildirebilirsin. Meld Misdaad Anoniem: 0800-7000. Ücretsiz hukuki tavsiye: Juridisch Loket. Tehlikede misin? 112’yi ara. Hollanda’da çalışan herkes yardım alabilir, göçmenler de. Genel bilgi. Kendi durumun için sendikaya, Juridisch Loket’e veya FairWork’e sor.',
    'c.gethelp.p': 'Yardıma ihtiyacım var. Sömürülüyorum.',
    'c.gethelp.s': 'Bir arkadaşın günde 14 saat çalışıyor, neredeyse hiç ücret almıyor ve patrondan korkuyor. Ne yapabilirsin?',
    'c.gethelp.o1': 'İsterse adını vermeden Arbeidsinspectie veya Juridisch Loket ile iletişime geçmesine yardım edersin.',
    'c.gethelp.o2': 'Ona bunun yeni çalışanlar için normal olduğunu söylersin.',
    'c.gethelp.o3': 'Sözleşmesi bitene kadar beklemesini, sonra başka iş aramasını söylersin.',
    'c.gethelp.w': 'Hollanda’da çalışan herkes için yardım vardır. Bildirim isim vermeden de yapılabilir.',
    'c.callin': 'Amirini aramak',
    'c.callin.b': 'Amirini aradığında adını, sebebi ve ne zaman geri gelmeyi düşündüğünü söyle. Hasta mısın? Sadece hasta olduğunu söylemen yeterli, hangi hastalığın olduğunu değil. Telefonla ara: şirketin mesajın yeterli olduğunu söylemiyorsa sadece mesaj atma. Cevap yok mu? Sesli mesaj bırak ve tekrar dene. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.',
    'c.callin.p': 'Merhaba, ben Ali. Bugün gelemiyorum.',
    'c.callin.s': 'Çocuğun hasta ve işe gelemiyorsun. Şirketin aramanı istiyor. Ne yaparsın?',
    'c.callin.o1': 'Vardiyandan önce amirini ararsın.', // nagelezen (2e lezing)
    'c.callin.o2': 'Vardiyanın başında kısa bir mesaj atarsın.',
    'c.callin.o3': 'Komşundan senin yerine aramasını istersin.',
    'c.callin.w': 'Telefonla aramak açık ve hızlıdır, amirin de soru sorabilir. Ne zaman döneceğini düşündüğünü söylemek plan yapmasına yardım eder. Adını ve sebebi de söyle.', // nagelezen (2e lezing)
    'c.texting': 'İşe mesaj: kısa ve kibar',
    'c.texting.b': 'İşe attığın mesajları kısa ve kibar tut. Kim olduğunu ve ne olduğunu söyle, sonunda selam ver. Örneğin: “Hoi Mark, ik ben 10 minuten te laat. Sorry! Groet, Ali”. Uygulamadaki çalışma planına (rooster) sık sık bak. Vardiya isteklerine zamanında cevap ver. Vardiya değiştirmek için önce amirinin ya da planlamacının onay vermesi gerekir, bu yüzden sor: “Mag ik mijn dienst ruilen?” Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.',
    'c.texting.p': 'Merhaba Mark, 10 dakika geç kalacağım. Pardon! Selamlar, Ali',
    'c.texting.s': '10 dakika geç kalacaksın. Amirine hangi mesaj en iyisi?',
    'c.texting.o1': '“Hoi Mark, ik ben 10 minuten te laat. Sorry! Groet, Ali”',
    'c.texting.o2': '“Sorry, ik ben er zo!” (adın olmadan, saat olmadan).', // nagelezen (2e lezing)
    'c.texting.o3': 'Trafik hakkında üç dakikalık bir sesli mesaj.',
    'c.texting.w': 'İyi bir mesaj birkaç kelimeyle kim olduğunu ve ne olduğunu söyler. Böylece amirin durumu hemen anlar.',
    'c.certs': 'Sertifikalar sana yardım eder',
    'c.certs.b': 'İnşaatta, sanayide ve geçici işlerde çoğu zaman VCA sertifikası (güvenlik) gerekir. Forklift kullanmak için genelde forklift sertifikası (heftruckcertificaat) gerekir. İşverenine kursun ve sınavın parasını ödeyip ödemediğini sor.',
    'c.certs.p': 'Burada VCA kursu yapabilir miyim?',
    'c.certs.s': 'Bir iş için VCA sertifikası isteniyor. Henüz sende yok. Ne yaparsın?',
    'c.certs.o1': 'İşverenden veya ajanstan sertifikayı almana yardım etmesini istersin.', // nagelezen (2e lezing)
    'c.certs.o2': 'İşi asla alamayacağını düşündüğün için başvurmazsın.',
    'c.certs.o3': 'Sende olduğunu söyler ve kimsenin kontrol etmemesini umarsın.',
    'c.certs.w': 'Birçok işveren ve ajans VCA için yardım eder. Sormak öğrenmek istediğini gösterir.',
    'c.diploma': 'Diploman değerlidir',
    'c.diploma.b': 'Başka bir ülkeden diploman mı var? Onu IDW’de (Internationale Diplomawaardering) değerlendirtebilirsin. Böylece işverenler buradaki değerini görebilir. İşin için bir eğitim zorunlu mu? O zaman parasını işveren ödemek zorundadır ve çalışma süresinden sayılır. Kurslar hakkında amirine sor. Genel bilgi. Kendi durumun için işverenine, sendikaya veya Juridisch Loket’e sor.',
    'c.diploma.p': 'Benim için kurslar var mı?',
    'c.diploma.s': 'İşverenin, cumartesi ücretsiz olarak zorunlu bir güvenlik eğitimi yapman gerektiğini söylüyor. Hangisi doğru?',
    'c.diploma.o1': 'Parasını işveren öder ve çalışma süresi sayılır.', // nagelezen (2e lezing)
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
    'c.insurance.o1': 'Hemen sağlık sigortası yaptırırsın.', // nagelezen (2e lezing)
    'c.insurance.o2': 'Beklersin: kendi ülkendeki sigortan yeterli.', // nagelezen (2e lezing)
    'c.insurance.o3': 'Bir arkadaşının sigorta kartını kullanırsın.',
    'c.insurance.w': 'Sigortan yoksa doktor veya hastane çok pahalıya mal olabilir ve ceza alabilirsin. Bunu hemen halletmek seni korur. İşverenin veya ajansın sana yardım edebilir.', // nagelezen (2e lezing)
    'c.letters': 'Mektupları görmezden gelme',
    'c.letters.b': 'Belastingdienst, gemeente veya UWV’den gelen mektupları görmezden gelme. Okumak için güvendiğin birinden yardım iste. Geçen yılın vergi beyannamesi (aangifte) genelde 1 Mayıs’tan önce verilmelidir. Ek süre isteyebilirsin. Zorgtoeslag ve huurtoeslag gibi yardımlar (toeslagen) gelirine bağlıdır. Fazla alırsan geri ödemen gerekir, bu yüzden gelir bilgilerini güncel tut. Genel bilgi. Kendi durumun için işverenine, sendikaya veya Juridisch Loket’e sor.',
    'c.letters.p': 'Bir mektup aldım. Bana yardım edebilir misin?',
    'c.letters.s': 'Belastingdienst’ten bir mektup alıyorsun. Anlamıyorsun. Ne yaparsın?',
    'c.letters.o1': 'Güvendiğin birinden yardım istersin.', // nagelezen (2e lezing)
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
    'c.transit.o3': 'Amirine şunu söylersin: kanuna göre sana da verilmesi gerekir.', // nagelezen (2e lezing)
    'c.transit.w': 'Yol parası işverene veya cao’ya bağlıdır. Bunu sormak normaldir ve haklarını bilmene yardım eder.',
    'c.ww': 'İşsizlik maaşı (WW)',
    'c.ww.b': 'İşini mi kaybettin? WW için mümkün olan en kısa sürede, işsiz kaldığın ilk günden sonraki bir hafta içinde UWV’ye başvur. Genelde son 36 haftanın en az 26’sında çalışmış olman gerekir. İşinden kendin ayrılırsan genelde WW alamazsın. werk.nl sitesinde iş arayan olarak kaydol. Genel bilgi. Kendi durumun için işverenine, sendikaya veya Juridisch Loket’e sor.',
    'c.ww.p': 'İşsizlik maaşına başvurmak istiyorum. Ne yapmalıyım?',
    'c.ww.s': 'İşine kızgınsın ve bugün istifa etmek istiyorsun. Akıllıca olan ne?',
    'c.ww.o1': 'Ayrılmadan önce tavsiye alırsın.', // nagelezen (2e lezing)
    'c.ww.o2': 'Bugün istifa edersin: nasılsa WW alırsın.',
    'c.ww.o3': 'Hiçbir şey söylemeden işe gitmeyi bırakırsın.',
    'c.ww.w': 'İstifa etmek, işsizlik maaşını kaybetmene yol açabilir. Önce amirinle, sendikayla veya Juridisch Loket ile konuşmak daha iyi bir yol bulmana yardım edebilir.',
    'c.newjob': 'Yeni iş aramak',
    'c.newjob.b': 'Ayrılmadan önce bir referans (referentie) iste. Maaş bordrolarını ve sözleşmeni sakla. CV’ni güncelle. Geçici iş ajanslarında (uitzendbureaus) ve werk.nl sitesinde iş ara. İş bulmak için asla para ödeme. Genel bilgi. Kendi durumun için sendikaya, Juridisch Loket’e veya FairWork’e sor.',
    'c.newjob.p': 'Adınızı referans olarak verebilir miyim?',
    'c.newjob.s': 'Biri sana iş teklif ediyor, ama önce “iş için” 300 euro ödemen gerekiyor. Ne yaparsın?',
    'c.newjob.o1': 'Ödemezsin. Gerçek bir ajans ararsın.', // nagelezen (2e lezing)
    'c.newjob.o2': 'İyi bir iş buna değer diye ödersin.',
    'c.newjob.o3': 'Yarısını şimdi, kalanını sonra ödersin.',
    'c.newjob.w': 'Bir iş için para istemek bir uyarı işaretidir. Geçici iş ajansı sana iş bulduğu için senden para alamaz. werk.nl’de de iş arayabilirsin.', // nagelezen (2e lezing)
    'c.tools': 'Toolbox toplantısı',
    'c.tools.b': 'Birçok inşaat alanında düzenli olarak kısa bir güvenlik toplantısı yapılır: toolbox toplantısı. Riskler ve yeni kurallar hakkında bilgi alırsın. Toplantıya git, dinle ve anlamadığın bir şey olursa soru sor. Aletlerini kullanmadan önce kontrol et. Bir alet bozuk mu? Amirine söyle.',
    'c.tools.p': 'Bu matkap bozuk. Başka bir tane var mı?',
    'c.tools.s': 'Bir toolbox toplantısı var, ama Hollandacan henüz iyi değil. Ne yaparsın?',
    'c.tools.o1': 'Gider, kaçırdığını sonra bir arkadaşa sorarsın.', // nagelezen (2e lezing)
    'c.tools.o2': 'Nasılsa anlamayacağın için gitmezsin.',
    'c.tools.o3': 'Gitmeden katılım listesini imzalarsın.',
    'c.tools.w': 'Güvenlik bilgisi herkes içindir. Orada telefona izin varsa, bir çeviri uygulaması toplantıyı takip etmene yardım edebilir. Sonra bir iş arkadaşına sormak normaldir ve doğru anlayıp anlamadığını kontrol etmeni sağlar.',
    'c.site': 'Dur ve kontrol et: LMRA',
    'c.site.b': 'Bir işe başlamadan önce bir an dur ve kontrol et: burada ne ters gidebilir? Buna LMRA (işe başlamadan hemen önce yapılan risk analizi) denir. Her zaman baretini tak, yüksekte çalışırken düşme korumanı da. Asla asılı bir yükün altında durma. İş gerçekten tehlikeli mi? O zaman durabilirsin ve hemen amirine söylemelisin. Genel bilgi. Kendi durumun için işverenine, sendikaya veya Juridisch Loket’e sor.',
    'c.site.p': 'Henüz başlamıyorum. Bu güvenli değil.',
    'c.site.s': 'Bir iskelede çalışman gerekiyor ama bir korkuluk eksik. Bir iş arkadaşın diyor ki: “Dikkatli ol, yeter.” Ne yaparsın?',
    'c.site.o1': 'Başlamazsın. Önce amirine bildirirsin.',
    'c.site.o2': 'Başlarsın ama çok dikkatli olursun.',
    'c.site.o3': 'Korkuluğu biraz iple kendin tamir edersin.',
    'c.site.w': 'Yüksekten düşmek çok ağır yaralanmalara yol açabilir. Tehlikeli işi durdurabilirsin ve bildirmek bütün ekibi korur.',
    'c.line': 'Elini çalışan makinelerden uzak tut',
    'c.line.b': 'Çalışan bir makinenin içine asla elini sokma, bir saniyeliğine bile. Arıza (storing) olduğunda acil durdurma düğmesine (noodstop) bas ve amirini çağır. Bakım ve onarım sadece makine kilitlenmişken (lock-out) ve sadece eğitimli kişiler tarafından yapılır. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.',
    'c.line.p': 'Bir arıza var. Acil durdurma düğmesine bastım.',
    'c.line.s': 'Bir ürün makineye sıkıştı. Makine hâlâ çalışıyor. Ne yaparsın?',
    'c.line.o1': 'Acil durdurma düğmesine basar ve amirini çağırırsın.',
    'c.line.o2': 'Hızlıca elinle çekip çıkarırsın.',
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
    'c.client.o1': 'Çalar, bekler, kim olduğunu ve neden geldiğini söylersin.', // nagelezen (2e lezing)
    'c.client.o2': 'Meşgul olduğun için hızlıca içeri girersin.',
    'c.client.o3': 'Onu rahatsız etmemek için yıkamayı atlarsın.',
    'c.client.w': 'Oda, danışanın evidir. Kapıyı çalmak ve açıklamak saygı gösterir ve bakımı daha sakin yapar.',
    'c.privacy': 'Gizlilik, hijyen ve ilaçlar',
    'c.privacy.b': 'Danışanlar hakkında gördüğün ve duyduğun şeyler iş yerinde kalır. İş dışında danışanlardan bahsetme ve asla onların fotoğraflarını paylaşma. Bakımdan önce ve sonra ellerini temizle. Bir danışanda ağrı veya düşme gibi bir değişiklik mi fark ediyorsun? Hemen hemşireye söyle. Eğitimin ve iznin yoksa asla ilaç verme. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.',
    'c.privacy.p': 'Beyefendinin dünden daha fazla ağrısı var.',
    'c.privacy.s': 'Bir danışan senden haplarını istiyor. İlaç vermek için eğitimin yok. Ne yaparsın?',
    'c.privacy.o1': 'Kibarca hemşireyi çağıracağını söyler ve bunu hemen yaparsın.',
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
    'c.cleaning.o1': 'Nasıl güvenli kullanılacağını sorarsın.', // nagelezen (2e lezing)
    'c.cleaning.o2': 'Bol bol kullanırsın, o zaman daha iyi işe yarar.',
    'c.cleaning.o3': 'Eldivensiz denersin.',
    'c.cleaning.w': 'Yanlış ürün veya fazlası cildine, gözlerine veya ciğerlerine zarar verebilir. Sormak bir dakika sürer.',
    'c.cleansafe': 'Ürünleri asla karıştırma',
    'c.cleansafe.b': 'Temizlik ürünlerini asla karıştırma, örneğin çamaşır suyu ve tuvalet temizleyicisini. Bu tehlikeli gazlar oluşturabilir. Ortamı havalandır. Yer mi siliyorsun? Kimse kaymasın diye ıslak zemin levhasını (Pas op, glad!) koy. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.',
    'c.cleansafe.p': 'Levhayı koyuyorum. Zemin ıslak.',
    'c.cleansafe.s': 'Tuvalet çok kirli. Bir iş arkadaşın diyor ki: “İki ürünü karıştır, daha iyi işe yarar.” Ne yaparsın?',
    'c.cleansafe.o1': 'Karıştırmazsın. Tek bir ürün kullanırsın.', // nagelezen (2e lezing)
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
    'c.translate.b': 'Google Translate gibi bir çeviri uygulaması çok yardımcı olur. Yazabilir, konuşabilir veya bir iş arkadaşınla konuşmak için sohbet modunu kullanabilirsin. Kamerayla tabelaları, notları ve talimatları çevirebilirsin. Birçok telefonda WhatsApp da mesajları çevirebilir. Telefonunu sadece güvenli ve izin verilen yerlerde kullan: makinelerin ve forkliftlerin yanında kullanma ve önce sor (daha fazlası “İş yerinde telefonun” dersinde). Uygulamalar hata yapar. Sözleşmen, bir mektup veya bir güvenlik talimatı gibi önemli şeyleri bir kişiye de açıklat. İzin almadan gizli iş belgelerinin fotoğrafını çekme.',
    'c.translate.p': 'Çeviri için telefonumu kullanabilir miyim?',
    'c.translate.s': 'Amirin sana Hollandaca güvenlik talimatları olan bir kâğıt veriyor. Sadece birkaç kelime anlıyorsun. Ne yaparsın?',
    'c.translate.o1': 'Çeviri uygulaması kullanıp kullanamayacağını sorar ve bir açıklama istersin.', // nagelezen (2e lezing)
    'c.translate.o2': '“ja, ja” der ve işe başlarsın. Sonra anlarsın.',
    'c.translate.o3': 'Fotoğrafını çeker ve arkadaşlarının olduğu bir grup sohbetine gönderirsin, onlar çevirsin diye.',
    'c.translate.w': 'Çeviri uygulaması hızlı anlamana yardım eder, ama hata yapabilir. Güvenlik için en iyi kontrol, bir kişinin açıklamasıdır. İş belgeleri gizli olabilir, bu yüzden onları izinsiz paylaşma.',
    'c.understood': 'Anladığını kontrol et',
    'c.understood.b': 'Telefonun konuşmayı yazıya çevirebilir (canlı altyazı): Android’de Live Transcribe, iPhone’da Live Captions. Telefonunun hangi dilleri desteklediğini kontrol et. Birinden bunu yazmasını, göstermesini veya yavaş konuşmasını da isteyebilirsin. Resimli veya senin dilinde bir talimat olup olmadığını sor. Sonra anladığını tekrar söyle: “Dus ik moet eerst …?” Burada bu normaldir ve hataları önler.',
    'c.understood.p': 'Yani önce kutuları saymam mı gerekiyor?',
    'c.understood.s': 'Bir iş arkadaşın yeni bir makinenin nasıl çalıştığını anlatıyor. Hızlı konuşuyor ve bazı kelimeleri kaçırıyorsun. Ne yaparsın?',
    'c.understood.o1': 'Ondan göstermesini veya yazmasını istersin, sonra tekrar söylersin.', // nagelezen (2e lezing)
    'c.understood.o2': 'Başını sallar ve “ja, ja” dersin, zaman kaybetmesin diye.',
    'c.understood.o3': 'Makineyi sonra tek başına dener ve ne olacağını görürsün.',
    'c.understood.w': 'Göstermek, yazmak ve tekrar söylemek hızlı kontrollerdir. İş arkadaşın, bir şey ters gitmeden seni düzeltebilir. Burada bu yavaşlık olarak değil, dikkat olarak görülür.',
    'c.keeplearning': 'Öğrenmeye devam et, her gün biraz',
    'c.keeplearning.b': 'Her gün birkaç dakika, haftada bir uzun saatten daha çok yardımcı olur. İşteki yeni kelimeleri telefonundaki bir not uygulamasına kaydet. Kolay Hollandaca dinle, örneğin NOS Jeugdjournaal (çocuklar için haberler) veya yavaş Hollandaca bir podcast. Birçok halk kütüphanesinde bir Taalhuis var: Hollandaca için ücretsiz yardım, çoğu zaman bir taalcafé (konuşma pratiği yapılan bir yer) veya bir dil arkadaşı (taalmaatje) ile. İş arkadaşların sana yardım etmek için çoğu zaman İngilizceye geçer. Onlardan kibarca seninle Hollandaca konuşmalarını iste: çoğu insan yardım etmeyi sever.',
    'c.keeplearning.p': 'Benimle sadece Hollandaca konuş, böylece daha hızlı öğrenirim.',
    'c.keeplearning.s': 'İş arkadaşların seninle konuşurken hep İngilizceye geçiyor. Hollandaca öğrenmek istiyorsun. Ne yaparsın?',
    'c.keeplearning.o1': 'Onlara teşekkür eder ve seninle Hollandaca konuşmalarını istersin.', // nagelezen (2e lezing)
    'c.keeplearning.o2': 'Hiçbir şey söylemezsin. Hollandaca kendiliğinden gelir.',
    'c.keeplearning.o3': 'Daha kibar olduğu için sen de İngilizce cevap verirsin.', // nagelezen (2e lezing)
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
    's.boundaries.1': "Lütfen bana dokunmayın.",
    's.boundaries.2': "Bu sözü komik bulmuyorum.",
    's.boundaries.3': "Güven danışmanına bir şey bildirmek istiyorum.",
    'c.boundaries.q': "Bu kadar zorluk çıkarma, sadece bir şakaydı.",
    'c.boundaries.a': "Benim için değil. Durmanı istiyorum.",
    'c.gossip': "Dedikodu ve sosyal medya",
    'c.gossip.b': "Bir iş arkadaşının arkasından konuşmak (roddelen) ekipteki güvene zarar verir. Biriyle bir sorunun mu var? O kişiyle veya amirinle konuş. İnternette de işteki kurallar geçerlidir: izin almadan iş arkadaşların, müşteriler veya şirket hakkında fotoğraf, video veya mesaj paylaşma. Patronun ne paylaştığını görebilir ve bu yıllarca internette kalabilir. Birçok ekibin iş için bir grup sohbeti (groepsapp) vardır: orada sadece işten konuş ve ekran görüntülerini başkalarıyla paylaşma. Bir iş arkadaşının özel şeylerini paylaşmak veya internette biriyle alay etmek de zorbalıktır.",
    'c.gossip.p': "Bunun internette olmasını istemiyorum.",
    'c.gossip.s': "Islak zeminde kaydığında bir iş arkadaşın seni videoya çekiyor. Videoyu TikTok’a koymak istiyor. Ne yaparsın?",
    'c.gossip.o1': '“Nee, dat wil ik niet” der ve videoyu silmesini istersin.', // nagelezen (2e lezing)
    'c.gossip.o2': "Zorluk çıkarmamak için güler ve paylaşmasına izin verirsin.",
    'c.gossip.o3': 'Videoyu adın olmadan paylaşmasını istersin.', // nagelezen (2e lezing)
    'c.gossip.w': 'Kimse senin iznin olmadan videonu internete koyamaz. Hayır demek normaldir ve iş arkadaşları internette birbirleriyle alay ettiğinde işverenin harekete geçmek zorundadır. Yine de paylaşırsa amirine söyle.', // nagelezen (2e lezing)
    'c.boundaries': "Sınırı aşmak",
    'c.boundaries.b': "Grensoverschrijdend gedrag, birinin sınırını aşan davranıştır: istenmeyen dokunma, cinsel sözler veya şakalar, dik dik bakmak, istenmeyen resimler göndermek, tehdit veya bağırmak. Diğer kişinin bunu “şaka olarak” söylemiş olması önemli değildir: önemli olan senin nasıl hissettiğindir. Yapabiliyorsan, durmasını istediğini açıkça söyle. Ne olduğunu, ne zaman olduğunu ve kimin gördüğünü yaz. Amirine, güven danışmanına (vertrouwenspersoon, varsa) veya HR’a söyle. İşverenin seni korumak zorundadır ve bildirdiğin için cezalandırılamazsın. Bunun bir iş arkadaşının başına geldiğini mi gördün? İyi olup olmadığını sor ve tanık olmayı teklif et.",
    'c.boundaries.p': "Durmanı istiyorum.",
    'c.boundaries.s': "Ekip liderin sık sık elini sırtına koyuyor ve “güzel” göründüğünü söylüyor. Bu seni rahatsız ediyor. Vardiyalarına o karar veriyor. Ne yaparsın?",
    'c.boundaries.o1': 'Olanları yazar ve vertrouwenspersoon ile konuşursun.', // nagelezen (2e lezing)
    'c.boundaries.o2': "Vardiyalarına o karar verdiği için hiçbir şey söylemezsin.",
    'c.boundaries.o3': "Kimseye nedenini söylemeden işten ayrılırsın.",
    'c.boundaries.w': 'Bu istenmeyen bir davranıştır ve senin suçun değildir. Güven danışmanı seni gizlilik içinde dinler ve sonraki adımı seçmene yardım eder. Bildirdiğinde korunursun. HR ile de konuşabilirsin.', // nagelezen (2e lezing)
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
    'c.shelves.s': 'Rafa yeni süt koyuyorsun. Önde hâlâ tarihi daha yakın olan süt var. Ne yaparsın?',
    'c.shelves.o1': 'Yeni sütü arkaya, eski sütü öne koyarsın.',
    'c.shelves.o2': 'Yeni sütü öne koyarsın, çünkü daha taze.',
    'c.shelves.o3': 'Raf güzel görünsün diye eski sütü atarsın.',
    'c.shelves.w': 'Müşteriler önden alır. Eski ürünler önce satılınca daha az yiyecek atılır.',
    'c.checkout': 'Alkol ve tütün için kimlik',
    'c.checkout.b': '18 yaşından küçük birine alkol veya tütün satamazsın: kanun böyle. Müşterinin kaç yaşında olduğundan emin değil misin? Kimliğini iste. Birçok mağaza 25 yaşından genç görünen herkesten kimlik ister. Kimlik yok mu, ya da 18 yaşından küçük mü? O zaman satmazsın ve kibar kalırsın. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.',
    'c.checkout.p': 'Kimlik olmadan bunu satamam.',
    'c.checkout.s': 'Genç bir adam bira almak istiyor. Yaklaşık 17 yaşında görünüyor. 19 yaşında olduğunu söylüyor ama yanında kimliği yok. Ne yaparsın?',
    'c.checkout.o1': 'Kimlik olmadan satamayacağını söylersin.', // nagelezen (2e lezing)
    'c.checkout.o2': '19 yaşında olduğunu söylediği için satarsın.',
    'c.checkout.o3': 'Satarsın, ama sadece bir kutu.',
    'c.checkout.w': 'Kimlik olmadan yaşını bilemezsin. 18 yaşından küçük birine alkol satmak kanuna aykırıdır ve mağaza para cezası alabilir.',
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
    'c.aihelp.b': 'ChatGPT gibi yapay zekâ uygulamaları ve sohbet robotları çeviri yapabilir, bir mektubu açıklayabilir ya da mesaj yazmana yardım edebilir. Bu faydalı. Ama yapay zekâ bazen hata yapar ve yine de çok emin konuşur. Sözleşmen, maaşın, ilaçlar ya da iş güvenliği gibi önemli konularda cevabı mutlaka bir insanla kontrol et: amirinle, insan kaynaklarıyla (HR) ya da Juridisch Loket’le.',
    'c.aihelp.p': 'Bu doğru mu? Benimle birlikte bir bakabilir misiniz?',
    'c.aihelp.s': 'Bir sohbet robotuna sözleşmeni soruyorsun. Tatil parası (vakantiegeld) almadığını söylüyor. Ne yaparsın?',
    'c.aihelp.o1': 'HR’dan veya Juridisch Loket’ten kontrol etmelerini istersin.', // nagelezen (2e lezing)
    'c.aihelp.o2': 'İnanırsın: sohbet robotu çok emin konuşuyor.',
    'c.aihelp.o3': 'Hiçbir şey söylemez, unutursun.',
    'c.aihelp.w': 'Sohbet robotu kurallar ve sözleşmeler konusunda yanılabilir. Hollanda’da neredeyse her çalışan tatil parası alır. Kuralları bilen bir insan bunu kontrol edebilir.',
    'c.aiprivate': 'Yazmadan önce düşün',
    'c.aiprivate.b': 'Bir sohbet robotuna yazdıkların, onu yapan şirket tarafından kaydedilip kullanılabilir. Bu yüzden BSN’ini, şifreni ya da banka bilgilerini asla yazma. Müşterilerin, hastaların ya da iş arkadaşlarının isimlerini veya fotoğraflarını, iş belgelerini de girme. Birçok işverenin yapay zekâ hakkında kuralları var. Önce işin için kullanıp kullanamayacağını sor. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.',
    'c.aiprivate.p': 'Bunun için yapay zekâ kullanabilir miyim?',
    'c.aiprivate.s': 'Bir sohbet robotunun bir müşteri hakkında rapor yazmasını istiyorsun. Raporda müşterinin adı ve adresi var. Ne yaparsın?',
    'c.aiprivate.o1': 'Önce sorar, adı ve adresi çıkarırsın.', // nagelezen (2e lezing)
    'c.aiprivate.o2': 'Her şeyi sohbet robotuna yazarsın: daha hızlı.',
    'c.aiprivate.o3': 'Raporu kontrol etsin diye bir arkadaşına gönderirsin.',
    'c.aiprivate.w': 'İsimler ve adresler kişisel verilerdir. Öylece başka bir şirkete gidemezler. İşverenin hangi uygulamalara izin verildiğini bilir.',
    'c.aifake': 'Sahte sesler ve videolar',
    'c.aifake.b': 'Yapay zekâyla dolandırıcılar bir sesi taklit edebilir, sahte fotoğraf ve videolar yapabilir. Patronun, bankan ya da ailenden biri gibi gelen bir arama veya mesaj sahte olabilir. Acele, para ve yeni bir numara bir aradaysa dikkatli ol. Telefonu kapat ve bildiğin numarayı kendin geri ara. Gerçek bir banka, işveren ya da polis kodlarını asla istemez.',
    'c.aifake.p': 'Telefonu kapatıp kendim geri ararım.',
    'c.aifake.s': 'Telefonun çalıyor. Tıpkı patronunun sesi gibi bir ses “Bu faturayı hemen öde, acil.” diyor. Ne yaparsın?',
    'c.aifake.o1': 'Telefonu kapatır, patronunu kendin ararsın.', // nagelezen (2e lezing)
    'c.aifake.o2': 'Hemen ödersin: sonuçta patronun.',
    'c.aifake.o3': 'Patronun ödeyebilsin diye banka kodunu verirsin.',
    'c.aifake.w': 'Bir ses yapay zekâyla taklit edilebilir. Acele ve para bir aradaysa bu bir uyarı işaretidir. Bildiğin bir numarayı geri aramak hızlı ve güvenli bir kontroldür.',
    'c.aiplan': 'Buna kim karar verdi?',
    'c.aiplan.b': 'Gittikçe daha fazla şirket çalışma planını bir uygulamaya ya da bilgisayara yaptırıyor, hızını el tarayıcısıyla ölçüyor ya da kararları ona bırakıyor. Hakkında hangi bilgilerin toplandığını sorabilirsin. Hakkında büyük bir karar mı var, örneğin daha az saat, bir uyarı ya da işten çıkarılma? Kimin karar verdiğini sor. Böyle bir kararı tek başına bir bilgisayar verdiyse, bir insanın tekrar bakmasını ve açıklamasını isteyebilirsin. Kendi saatlerini not et. Genel bilgi. Kendi durumun için işverenine, sendikaya veya Juridisch Loket’e sor.',
    'c.aiplan.p': 'Bir insan buna bir bakabilir mi?',
    'c.aiplan.s': 'Planlama uygulaması gelecek ay sana çok daha az saat veriyor. Kimse nedenini söylemiyor. Ne yaparsın?',
    'c.aiplan.o1': 'Bir insanın bunu açıklamasını istersin.', // nagelezen (2e lezing)
    'c.aiplan.o2': 'Kabul edersin: uygulama hep haklıdır.',
    'c.aiplan.o3': 'Uygulamadaki sohbet robotuna nedenini sorarsın.', // nagelezen (2e lezing)
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
    'c.harvest': "Tempo ve parça başı ücret", // nagelezen (2e lezing)
    'c.harvest.b': "Serada çoğu zaman sabit bir tempoda (tempo) çalışırsın. Bazı işverenler kasa, sıra veya kilo başına öder: buna parça başı ücret (stukloon) denir. Parça başı ücrette bile çalıştığın her saat için en az asgari ücreti kazanmalısın. Tutarı rijksoverheid.nl sitesinden kontrol et. Her gün saatlerini ve kasalarını not et ve maaş bordronla karşılaştır. Hızlı çalışmak iyidir, ama güvenli çalışmak önce gelir. Genel bilgi. Kendi durumun için sendikaya, Juridisch Loket’e veya FairWork’e sor.", // nagelezen (2e lezing)
    'c.harvest.p': "Bugün kaç kasa yaptım?", // nagelezen (2e lezing)
    'c.harvest.s': "Sana kasa başına ödeme yapılıyor. Hafta sonunda ücretin, çalıştığın saatler için asgari ücretten çok daha düşük. Ne yaparsın?", // nagelezen (2e lezing)
    'c.harvest.o1': "Kendi saat ve kasa listeni işverenine gösterirsin.", // nagelezen (2e lezing)
    'c.harvest.o2': "Hiçbir şey söylemez, daha çok kazanmak için gelecek hafta daha hızlı çalışırsın.", // nagelezen (2e lezing)
    'c.harvest.o3': "Kabul edersin: parça başı ücrette düşük ücret normaldir.", // nagelezen (2e lezing)
    'c.harvest.w': "Parça başı ücrette de çalıştığın her saat için en az asgari ücreti almalısın. Kendi saat ve kasa listen, ne yaptığını göstermene yardım eder. Düzeltilmezse yardım iste.", // nagelezen (2e lezing)
    'c.greensafe': "Sıcak ve tarım ilaçları", // nagelezen (2e lezing)
    'c.greensafe.b': "Serada hava çok sıcak olabilir, ilkbaharda da. Sık sık su iç, susamadan önce de, ve molalarını serin bir yerde ver. Başın mı dönüyor, miden mi bulanıyor ya da başın mı ağrıyor? Dur ve birine söyle. Bitkiler bazen kimyasallarla ilaçlanır (spuitmiddelen). Az önce ilaçlanmış bir seranın kapısında çoğu zaman bir uyarı levhası olur. Amirin tekrar güvenli olduğunu söyleyene kadar içeri girme. Genel bilgi. Kendi durumun için işverenine, sendikaya veya Juridisch Loket’e sor.", // nagelezen (2e lezing)
    'c.greensafe.p': "Bu serada artık çalışabilir miyim?", // nagelezen (2e lezing)
    'c.greensafe.s': "Bu sabah bir sera ilaçlandı. Kapıda bir uyarı levhası var. Bir iş arkadaşın diyor ki: “Hadi, sadece bir dakika.” Ne yaparsın?", // nagelezen (2e lezing)
    'c.greensafe.o1': "Girmez, ne zaman güvenli olacağını sorarsın.", // nagelezen (2e lezing)
    'c.greensafe.o2': "Hızlıca girer ve nefesini tutarsın.", // nagelezen (2e lezing)
    'c.greensafe.o3': "Girersin, sonra ellerini iyice yıkarsın.", // nagelezen (2e lezing)
    'c.greensafe.w': "Tarım ilaçları hiçbir koku almasan da cildine, gözlerine ve akciğerlerine zarar verebilir. İlaçlamadan sonra tekrar içeri girmeden önce bir bekleme süresi vardır. Bu sürenin ne zaman bittiğini amirin bilir.", // nagelezen (2e lezing)
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
    'l.permit': "Belgeler, uyum ve işin",
    'w.papieren': "belgeler (evraklar)",
    'w.werkvergunning': "çalışma izni",
    'w.werknemer': "işçi, çalışan (bir işveren için çalışırsın)",
    'w.zzper': "serbest çalışan (kendi hesabına çalışırsın)",
    'w.inburgering': "uyum süreci (yeni gelenler için kurs ve sınavlar)",
    'w.taalles': "dil dersi",
    's.permit.1': "Belgelerimle burada çalışabilir miyim?",
    's.permit.2': "Ben işçi miyim, serbest çalışan mı?",
    's.permit.3': "Çağrı üzerine çalışıyorum.",
    'c.permit.q': "Salı günü çalışabilir misin?",
    'c.permit.a': "Hayır, o gün dil dersim var. Çarşamba olur.",
    'l.kids': "Çocuklar ve iş",
    'w.zwanger': "hamile",
    'w.kinderopvang': "çocuk bakımı, kreş",
    'w.ophalen': "almak (gidip birini almak)",
    'w.ziekkind': "hasta bir çocuk",
    'w.ouderschapsverlof': "ebeveyn izni",
    'w.zorgverlof': "bakım izni (hasta bir aile üyesine bakmak için izin)",
    's.kids.1': "Çocuğum hasta. Onu almaya gitmem gerekiyor.",
    's.kids.2': "Acil durum izni alabilir miyim?",
    's.kids.3': "İşverenim maaşımı ödemeye devam ediyor mu?",
    'c.kids.q': "Neden şimdi gitmen gerekiyor?",
    'c.kids.a': "Kreş aradı. Oğlumun ateşi var.",
    'l.body': "Vücut ve ağrı",
    'w.hoofd': "baş, kafa",
    'w.rug': "sırt",
    'w.arm': "kol",
    'w.hand': "el",
    'w.buik': "karın",
    'w.oog': "göz",
    's.body.1': "Elim ağrıyor.",
    's.body.2': "Kendimi iyi hissetmiyorum.",
    's.body.3': "Kolumun üstüne düştüm.",
    'c.body.q': "Neren ağrıyor?",
    'c.body.a': "Sırtım. Ağır bir koli kaldırdım.",
    'l.jobends': "İşin bittiğinde",
    'w.eindafrekening': "son hesap (iş bittiğinde aldığın son ödeme)",
    'w.opzeggen': "feshetmek (bir sözleşmeyi), iptal etmek",
    'w.uitschrijven': "kaydını sildirmek (adını bir listeden çıkarmak)",
    'w.sleutel': "anahtar",
    'w.verhuizen': "taşınmak (başka bir eve)",
    'w.busje': "minibüs",
    's.jobends.1': "Tatil paramı ve izin günlerimi ödenmiş olarak alıyor muyum?",
    's.jobends.2': "Juridisch Loket’ten tavsiye alıyorum.",
    's.jobends.3': "Yeni sağlık sigortamı kendim ayarlıyorum.",
    'c.jobends.q': "İşin cuma günü bitiyor. O zaman evden de çıkman gerekiyor.",
    'c.jobends.a': "Kira sözleşmemin ihbar süresi ne kadar?",
    'c.details': "Bilgilerini doğru ver",
    'c.details.b': "Bir işe başlarken bilgilerini verirsin: adını, adresini, telefon numaranı, doğum tarihini ve BSN’ni. Adını yavaşça, harf harf söyle. Sonra adını sözleşmende ve maaş bordronda kontrol et. Adında veya BSN’nde bir hata, maaşında veya vergide sorun çıkarabilir. Yeni adres ya da telefon numarası mı? İşverenine söyle.",
    'c.details.p': "Harf harf söyleyeyim: A, L, I.",
    'c.details.s': "Ajans telefonda soyadını yazıyor. Yanlış yazdıklarını duyuyorsun. Ne yaparsın?",
    'c.details.o1': "Adını yavaşça harf harf söyler ve geri okumalarını istersin.", // nagelezen (2e lezing)
    'c.details.o2': "Hiçbir şey söylemezsin: adındaki küçük bir hata önemli değil.",
    'c.details.o3': "Telefonu kapatır ve hatayı sonra bulmalarını umarsın.",
    'c.details.w': "Adın sözleşmende, maaş bordronda ve kimliğinde aynı olmalı. O zaman maaşın ve vergin doğru olur. Harf harf söylemek ve geri okutmak hızlı bir kontroldür.",
    'c.dates': "Tarihler: önce gün gelir",
    'c.dates.b': "Hollandacada gün aydan önce gelir: 3-6, 3 Haziran demektir, 6 Mart değil. “Tot en met”, son günün de sayıldığı anlamına gelir. Günler ve aylar küçük harfle yazılır: maandag, juni. Bir tarihten emin değil misin? Sor ve tekrar et.",
    'c.dates.p': "3 Haziran’ı mı kastediyorsun?",
    'c.dates.s': "Çalışma programında şöyle yazıyor: “Vrij: 3-6 tot en met 5-6”. Ne zaman izinlisin?",
    'c.dates.o1': "3, 4 ve 5 Haziran’da.",
    'c.dates.o2': "Sadece 3 ve 4 Haziran’da.",
    'c.dates.o3': "6 Mart’tan 6 Mayıs’a kadar.",
    'c.dates.w': "Önce gün, sonra ay gelir: 3-6, 3 Haziran demektir. “Tot en met”, 5 Haziran’ın da sayıldığı anlamına gelir, yani üç gün izinlisin.",
    'c.permit': "İş ve uyum",
    'c.permit.b': "Uyum sürecini (inburgering) yapman mı gerekiyor? İşverenine söyle ve belediyeye (gemeente) çalıştığını bildir. Dil derslerinin çalışma programına uyup uymayacağını erkenden sor. Burada çalışıp çalışamayacağından emin değil misin? Başlamadan önce kontrol et, örneğin IND’de, UWV’de veya VluchtelingenWerk’te. Bu iş için serbest çalışan (zzp’er) olarak kayıt olmanı mı istiyorlar? Önce tavsiye al. Genel bilgi. Kendi durumun için işverenine, sendikaya veya Juridisch Loket’e sor.",
    'c.permit.p': "Salı günleri dil dersim var. Çalışma programım bunu dikkate alabilir mi?",
    'c.permit.s': "Yeni bir işe başlıyorsun. Dil dersin salı sabahları, ama programa göre salı günleri çalışıyorsun. Ne yaparsın?",
    'c.permit.o1': "Amirine söyler, programı değiştirmelerini istersin.", // nagelezen (2e lezing)
    'c.permit.o2': "İş önce geldiği için dil dersine gitmezsin.",
    'c.permit.o3': "Hiçbir şey söylemeden salı günleri evde kalırsın.",
    'c.permit.w': "Uyum süreci de bir yükümlülüktür. Birçok işveren erkenden öğrenirse yardım eder. Belediye (gemeente) de planını işine göre ayarlamana yardım edebilir.",
    'c.kids': "Çocuğun hasta",
    'c.kids.b': "Çocuğun aniden mi hastalandı? Hemen işverenine söyle. İlk saatler veya günler için acil durum izni (calamiteitenverlof) alabilirsin ve işverenin maaşını ödemeye devam eder. Çocuğunun daha uzun süre bakıma mı ihtiyacı var? O zaman bakım izni (zorgverlof) isteyebilirsin. Hamile misin? İşverenin seni bu yüzden işten çıkaramaz. Doğum izni ve ebeveyn izni (ouderschapsverlof) hakkında zamanında bilgi al. Genel bilgi. Kendi durumun için işverenine, sendikaya veya Juridisch Loket’e sor.",
    'c.kids.p': "Çocuğum hasta. Bugün erken çıkabilir miyim?",
    'c.kids.s': "Kreş (kinderopvang) seni işte arıyor. Çocuğunun ateşi var ve eve gitmesi gerekiyor. Ne yaparsın?",
    'c.kids.o1': "Amirine söyler, acil durum izni istersin.", // nagelezen (2e lezing)
    'c.kids.o2': "Tek kelime etmeden çıkar, yarın açıklarsın.",
    'c.kids.o3': "İşte kalır, çocuğunu vardiyan bitene kadar bekletirsin.",
    'c.kids.w': "Hasta bir çocuk evde acil bir durumdur. Önce amirine söylersen işi planlayabilir. Acil durum izni böyle anlar içindir.",
    'c.body': "Ne olduğunu ve neresinin ağrıdığını söyle",
    'c.body.b': "Doktorda ne olduğunu ve neresinin ağrıdığını söyle. Örneğin: “Ik ben gevallen. Mijn arm doet pijn.” Ağrının ne zamandır olduğunu da söyle. Neyin olduğunu tahmin etmek zorunda değilsin: bunu doktor kontrol eder. İşte mi oldu? Aynı gün amirine de söyle.",
    'c.body.p': "Düştüm. Kolum ağrıyor.",
    'c.body.s': "İşte ağır bir koli kaldırdın. Şimdi sırtın çok ağrıyor. Aile hekimindesin (huisarts). Ne söylersin?",
    'c.body.o1': "Neresinin ağrıdığını ve ne olduğunu: ağır bir koli kaldırdığını.",
    'c.body.o2': "Sadece kendini kötü hissettiğini, başka bir şey değil.",
    'c.body.o3': "İnternette bulduğun bir hastalığın adını.",
    'c.body.w': "Neresinin ağrıdığını ve ne olduğunu söylersen doktor seni daha hızlı anlar. Ne olduğunu doktor kontrol eder. İşte mi oldu? Amirine de söyle.",
    'c.jobends': "İşin bitiyor: başka ne bitiyor?",
    'c.jobends.b': "İşin bittiğinde son hesabını (eindafrekening) kontrol et. Kullanmadığın izin günleri ve tatil paran genelde bununla birlikte ödenir. Ajans üzerinden olan konut, sağlık sigortası veya minibüs aynı anda bitebilir. Kendi sağlık sigortanı zamanında ayarla. Kira sözleşmenin kendi kuralları var: evden çıkmadan önce tavsiye al. Taşınıyor musun ya da Hollanda’dan mı ayrılıyorsun? Belediyeye (gemeente) bildir. Genel bilgi. Kendi durumun için işverenine, sendikaya veya Juridisch Loket’e sor.",
    'c.jobends.p': "Son hesabımı ne zaman alırım?",
    'c.jobends.s': "İşin cuma günü bitiyor. Sağlık sigortan ajans üzerinden. Ne yaparsın?",
    'c.jobends.o1': "Ne zaman bittiğini sorar, zamanında sigorta yaptırırsın.", // nagelezen (2e lezing)
    'c.jobends.o2': "Hiçbir şey: sigorta kendiliğinden devam eder.",
    'c.jobends.o3': "Hastalanana kadar bekler, o zaman ayarlarsın.",
    'c.jobends.w': "Ajans üzerinden olan sigorta çoğu zaman işin bittiğinde biter. Hollanda’da yaşıyor veya çalışıyorsan genelde sağlık sigortası yaptırman zorunludur. Zamanında ayarlarsan sigortasız kalmazsın.",
    // Entree in the Taal track (30 October 2026): nieuw, nalezen.
    'u.finish': "İşini bitirmek", // nieuw, nalezen
    'l.workorder': "İş emri", // nieuw, nalezen
    'w.werkbon': "iş emri (görevinin yazdığı kâğıt ya da uygulama)", // nieuw, nalezen
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
    'w.akkoord': "onaylı, tamam (bir şeye evet diyorsun)", // nieuw, nalezen
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
    'w.stempas': "oy pusulası kartı (oy vermek için gereken kart)", // nieuw, nalezen
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
    's.mychoice.3': "İşi görmek için bir gün yanınızda durabilir miyim?", // nieuw, nalezen
    'c.mychoice.q': "Neyde iyisin?", // nieuw, nalezen
    'c.mychoice.a': "İnsanlara iyi bakabilirim. Evde annemle ilgileniyorum.", // nieuw, nalezen
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
    'l.email': "İşe yazmak", // nieuw, nalezen
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
    'l.healthy': "İşe hazır ve formda", // nieuw, nalezen
    'w.slapen': "uyumak", // nieuw, nalezen
    'w.ontbijt': "kahvaltı", // nieuw, nalezen
    'w.bewegen': "hareket etmek, aktif olmak", // nieuw, nalezen
    'w.moe': "yorgun", // nieuw, nalezen
    'w.drugs': "uyuşturucu", // nieuw, nalezen
    'w.somber': "moralsiz, çökkün (uzun süre üzgün)", // nieuw, nalezen
    's.healthy.1': "Bugün çok yorgunum.", // nieuw, nalezen
    's.healthy.2': "Her zaman önce kahvaltı yaparım.", // nieuw, nalezen
    's.healthy.3': "Molada biraz yürüyüş yapıyorum.", // nieuw, nalezen
    'c.healthy.q': "Hap ister misin? Uyanık kalırsın.", // nieuw, nalezen
    'c.healthy.a': "Hayır, teşekkürler. Bir şeyin etkisi altında çalışmam.", // nieuw, nalezen
    'c.workorder': "Önce oku, sonra başla", // nieuw, nalezen
    'c.workorder.b': "Başlamadan önce iş emrini (werkbon) ya da uygulamadaki görevi oku. Adresi, görevi ve şeylerin sayısını kontrol et. Bir şey net değil mi? Başlamadan önce sor, yarıda değil. Sonra aletlerini ve malzemeyi hazırla. Bu zaman kazandırır ve daha az hata yaparsın. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.workorder.p': "İş emrinde on koli yazıyor. Doğru mu?", // nieuw, nalezen
    'c.workorder.s': "İş emrinde şöyle yazıyor: 3 numaralı odayı boya. İş arkadaşın 5 numaralı oda olduğunu söylüyor. Ne yaparsın?", // nieuw, nalezen
    'c.workorder.o1': "Amirine hangi odanın doğru olduğunu sorarsın.", // nieuw, nalezen
    'c.workorder.o2': "3 numaralı odayı boyarsın, çünkü iş emrinde öyle yazıyor.", // nieuw, nalezen
    'c.workorder.o3': "İki odayı da boyarsın, böylece emin olursun.", // nieuw, nalezen
    'c.workorder.w': "İki şey birbirini tutmuyorsa, başlamadan önce kontrol edersin. Kısa bir soru, işi baştan yapmaktan daha az zaman alır.", // nieuw, nalezen
    'c.handover': "Neyin bittiğini, neyin bitmediğini söyle", // nieuw, nalezen
    'c.handover.b': "Durduğunda işin bitmiş olmaz. Önce yerini ve aletlerini topla. Sonra birinden işini kontrol etmesini iste. Amirine neyin bittiğini, neyin bitmediğini söyle. Bir şey ters mi gitti ya da bir şey mi bozuk? Bunu şimdi söyle, yarın değil. İşi bitirdiğini bildirmek de işinin bir parçası. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.handover.p': "Dört numaralı oda daha bitmedi. Kapı kilitliydi.", // nieuw, nalezen
    'c.handover.s': "Beş oda temizledin. 4 numaralı oda kilitliydi, bu yüzden orayı temizleyemedin. Vardiyan bitiyor. Ne yaparsın?", // nieuw, nalezen
    'c.handover.o1': "Amirine 4 numaralı odanın bitmediğini ve nedenini söylersin.", // nieuw, nalezen
    'c.handover.o2': "Eve gidersin: oda kilitliydi, bu senin suçun değil.", // nieuw, nalezen
    'c.handover.o3': "Listeye “hepsi bitti” yazarsın, çünkü elinden geleni yaptın.", // nieuw, nalezen
    'c.handover.w': "Amirin işi planlar. 4 numaralı odanın bitmediğini bilirse, başka birini gönderebilir. Böylece hiçbir müşteri kirli bir oda bulmaz.", // nieuw, nalezen
    'c.workshop': "Gözler, kulaklar ve yangın", // nieuw, nalezen
    'c.workshop.b': "Taşlama, kesme ve delme kıvılcım, küçük parçalar ve çok gürültü yapar. Kısa bir iş için bile koruyucu gözlük ve kulak koruyucu tak. Çok gürültü olduğunda, işverenin sana kulak koruyucu vermek zorundadır. Kıvılcımlar yangın çıkarabilir. Kaynak için ya da yanabilen şeylerin yakınında taşlama için ek kurallar var (heet werk): başlamadan önce sor. İşten sonra metal parçalarını topla. Genel bilgi. Kendi durumun için işverenine, sendikaya veya Juridisch Loket’e sor.", // nieuw, nalezen
    'c.workshop.p': "Taşlama yapacağım. Kulak koruyucu nerede?", // nieuw, nalezen
    'c.workshop.s': "Küçük bir metal parçasını taşlaman gerekiyor. Bir dakika sürüyor. Koruyucu gözlüğün diğer odada. Ne yaparsın?", // nieuw, nalezen
    'c.workshop.o1': "Bir dakika da olsa önce gözlüğünü alırsın.", // nieuw, nalezen
    'c.workshop.o2': "Gözlerin yarı kapalı taşlarsın, nasılsa çabuk biter.", // nieuw, nalezen
    'c.workshop.o3': "Öbür elini gözlerinin önüne tutarsın.", // nieuw, nalezen
    'c.workshop.w': "Gözüne giren bir kıvılcım ya da metal parçası gözüne kalıcı zarar verebilir. Bu bir saniyede olabilir. Koruyucu gözlük kısa bir işte bile yardımcı olur.", // nieuw, nalezen
    'c.power': "Elektrik: asla öylece değil", // nieuw, nalezen
    'c.power.b': "Gerilim altındaki (onder spanning) bir şeyde asla çalışma. Önce eğitimli bir iş arkadaşı orayı güvenli hâle getirir: elektriği keser ve kontrol eder. Bunu sadece doğru eğitimi alan kişiler yapabilir. Bozuk bir kablo ya da fiş mi görüyorsun? Onu kullanma ve hemen amirine söyle. Elektriğin kesik olduğundan emin değil misin? O zaman elektrik vardır. Genel bilgi. Kendi durumun için işverenine, sendikaya veya Juridisch Loket’e sor.", // nieuw, nalezen
    'c.power.p': "Bozuk bir kablo görüyorum. Kim bakabilir?", // nieuw, nalezen
    'c.power.s': "Bir lamba asman gerekiyor. Bir iş arkadaşın diyor ki: “Elektrik kesik, sanırım.” Ne yaparsın?", // nieuw, nalezen
    'c.power.o1': "Eğitimli bir iş arkadaşından elektriğin kesik olduğunu kontrol etmesini istersin.", // nieuw, nalezen
    'c.power.o2': "Başlarsın, ama kablolara dokunurken kalın eldiven giyersin.", // nieuw, nalezen
    'c.power.o3': "Elektriğin kesik olduğunu kontrol etmek için ışığı açıp kapatırsın.", // nieuw, nalezen
    'c.power.w': "Elektrikte “sanırım” yeterli değildir. Elektrik çarpması seni öldürebilir. Eğitimli bir iş arkadaşı elektrik olmadığını kontrol eder, sonra başlayabilirsin.", // nieuw, nalezen
    'c.garage': "Arabanın altında güvenlik", // nieuw, nalezen
    'c.garage.b': "Sadece kriko üzerinde duran bir arabanın altına asla girme. Araba liftte ya da sehpalar üzerinde sağlam durmalı. Dökülen yağ zemini kaygan yapar: hemen temizle. Eski yağ, aküler ve temizlik ürünleri tehlikeli atıktır. Bunlar özel bir yere gider, asla normal çöpe ya da gidere değil. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.garage.p': "Yerde yağ var. Temizliyorum.", // nieuw, nalezen
    'c.garage.s': "Bir arabanın altına bakman gerekiyor. Araba sadece kriko üzerinde duruyor. İş arkadaşın diyor ki: “Sorun yok, sadece çabuk ol.” Ne yaparsın?", // nieuw, nalezen
    'c.garage.o1': "Araba liftte ya da sehpalarda durana kadar beklersin.", // nieuw, nalezen
    'c.garage.o2': "Altına hızlıca girersin, bacaklarını dışarıda tutarsın.", // nieuw, nalezen
    'c.garage.o3': "Altına girersin, iş arkadaşından arabayı tutmasını istersin.", // nieuw, nalezen
    'c.garage.w': "Kriko kayabilir. Araba çok ağırdır ve altından hızlı çıkamazsın. Sehpalar ya da lift arabayı yerinde tutar.", // nieuw, nalezen
    'c.carjob': "Ek iş mi? Önce müşteriye sor", // nieuw, nalezen
    'c.carjob.b': "İş emrinde yazandan fazla sorun mu buluyorsun? Onları öylece tamir etme. Müşteri önce ek işi ve masrafları onaylamalı. Amirin ya da servis danışmanı müşteriyi arar. Test sürüşü sadece izinle ve sadece geçerli bir ehliyetle yapılır. Ne yaptığını ve hangi parçaları kullandığını yaz. Genel bilgi. Kendi durumun için işverenine, sendikaya veya Juridisch Loket’e sor.", // nieuw, nalezen
    'c.carjob.p': "Bir sorun daha görüyorum. Müşteriyi kim arayacak?", // nieuw, nalezen
    'c.carjob.s': "Bir arabanın yağını değiştiriyorsun. Frenlerin de kötü olduğunu görüyorsun. Araba bir saat içinde hazır olmalı. Ne yaparsın?", // nieuw, nalezen
    'c.carjob.o1': "Müşteriyi araması için amirine söylersin.", // nieuw, nalezen
    'c.carjob.o2': "Frenleri de tamir edersin: müşteri kesin güvenli bir araba ister.", // nieuw, nalezen
    'c.carjob.o3': "Hiçbir şey söylemezsin: frenler iş emrinde yok.", // nieuw, nalezen
    'c.carjob.w': "Müşteri öder, bu yüzden müşteri karar verir. Onun onayı olmadan servis öylece ek iş yapamaz. Kötü frenler tehlikelidir, bu yüzden söylemek önemlidir.", // nieuw, nalezen
    'c.placement': "Önce imzala, sonra başla", // nieuw, nalezen
    'c.placement.b': "Entree’de bir şirkette çok şey öğrenirsin: bu senin stajındır (stage ya da bpv). Başlamadan önce sen, okul ve şirket bir sözleşme imzalarsınız: POK. Şirkette işyeri eğitmenin (praktijkopleider) sana yardım eder. Okulda staj danışmanın (stagebegeleider) sana yardım eder. Hasta mısın? Başlama saatinden önce şirketi ara ve okula da haber ver. Kurallar okuldan okula değişir: staj danışmanına sor.", // nieuw, nalezen
    'c.placement.p': "Staj sözleşmesi imzalanınca başlarım.", // nieuw, nalezen
    'c.placement.s': "Şirket yarın başlamanı istiyor. POK daha imzalanmadı. Ne yaparsın?", // nieuw, nalezen
    'c.placement.o1': "Staj danışmanından önce POK’u halletmesini istersin.", // nieuw, nalezen
    'c.placement.o2': "Yarın başlarsın, POK’u vaktin olunca imzalarsın.", // nieuw, nalezen
    'c.placement.o3': "Başlarsın, ama şimdilik okula bir şey söylemezsin.", // nieuw, nalezen
    'c.placement.w': "POK’ta ne öğrendiğin ve sana kimin yardım ettiği yazar. İmzalı bir POK olmadan stajın diploman için sayılmayabilir. Bu yüzden başlamadan önce imzalarsın.", // nieuw, nalezen
    'c.review': "Geri bildirim iste, bir de örnek", // nieuw, nalezen
    'c.review.b': "Stajda insanlar sana neyin iyi gittiğini ve neyin daha iyi olabileceğini söyler: geri bildirim (feedback). Bu normaldir ve öğrenmene yardım eder. Anlamadın mı? Bir örnek iste. Sen de geri bildirim iste, örneğin haftada bir. Stajında gerçekten bir sorun mu var? Önce işyeri eğitmeninle konuş. İşe yaramıyor mu? O zaman okuldaki staj danışmanına git.", // nieuw, nalezen
    'c.review.p': "Ne iyi gitti, ne daha iyi olabilir?", // nieuw, nalezen
    'c.review.s': "İşyeri eğitmenin diyor ki: “Daha dikkatli çalışman lazım.” Ne demek istediğini bilmiyorsun. Ne yaparsın?", // nieuw, nalezen
    'c.review.o1': "Neyi farklı yapman gerektiğine dair bir örnek istersin.", // nieuw, nalezen
    'c.review.o2': "Evet dersin ve kendin anlayacağını umarsın.", // nieuw, nalezen
    'c.review.o3': "Hiçbir şey ters gitmesin diye bundan sonra çok daha yavaş çalışırsın.", // nieuw, nalezen
    'c.review.w': "Bir örnekle neyi değiştireceğini bilirsin. Sormak, öğrenmek istediğini gösterir. Eğitmenler bunu sever.", // nieuw, nalezen
    'c.council': "Kim oy verebilir?", // nieuw, nalezen
    'c.council.b': "Hollanda’da kimin karar vereceğini oy vererek seçersin. Belediye meclisi (gemeenteraad) senin şehrin hakkında karar verir. Tweede Kamer bütün ülke için yasaları yapar. Hollanda vatandaşlığın varsa 18 yaşından itibaren bütün seçimlerde oy verebilirsin. Belediye meclisi için daha çok kişi oy verebilir: burada yaşayan başka bir AB ülkesinden insanlar ve 5 yıl yasal oturumdan sonra AB dışından insanlar. Belediye (gemeente) sana bir oy kartı (stempas) gönderir. Onu kimliğinle birlikte götür. Oy verip veremeyeceğinden emin değil misin? Belediyeye sor.", // nieuw, nalezen
    'c.council.p': "Belediye meclisi için oy verebilir miyim?", // nieuw, nalezen
    'c.council.s': "Faslısın ve altı yıldır burada yasal olarak yaşıyorsun. Hollanda vatandaşlığın yok. Belediye meclisi seçimi var. Hangisi doğru?", // nieuw, nalezen
    'c.council.o1': "Belediye meclisi için oy verebilirsin.", // nieuw, nalezen
    'c.council.o2': "Tweede Kamer için de oy verebilirsin.", // nieuw, nalezen
    'c.council.o3': "Hollanda pasaportu olmadan hiç oy veremezsin.", // nieuw, nalezen
    'c.council.w': "5 yıl yasal oturumdan sonra belediye meclisi için oy verebilirsin. Tweede Kamer için Hollanda vatandaşlığı gerekir.", // nieuw, nalezen
    'c.police': "Kimliğin ve hakların", // nieuw, nalezen
    'c.police.b': "14 yaşından itibaren polis isterse kimliğini göstermek zorundasın. Bu yüzden onu hep yanında taşı. Katılmadığın bir karar içeren bir mektup mu aldın, örneğin belediyeden ya da UWV’den? O zaman yazılı olarak itiraz edebilirsin (bezwaar maken). Bunu mektuptaki tarihten önce yap. Polis ve hâkim herkese eşit davranmak zorundadır. Gözaltına mı alındın? Avukat isteyebilirsin. Juridisch Loket ücretsiz danışmanlık verir.", // nieuw, nalezen
    'c.police.p': "Bu karara katılmıyorum. İtiraz ediyorum.", // nieuw, nalezen
    'c.police.s': "Belediyeden bir mektup alıyorsun. Onların kararına katılmıyorsun. Mektupta altı haftan olduğu yazıyor. Ne yaparsın?", // nieuw, nalezen
    'c.police.o1': "Tarihten önce bir itiraz mektubu yazarsın.", // nieuw, nalezen
    'c.police.o2': "Onları bir kez ararsın ve seni geri aramalarını beklersin.", // nieuw, nalezen
    'c.police.o3': "Beklersin: altı hafta sonra kendiliğinden biter.", // nieuw, nalezen
    'c.police.w': "İtiraz yazılı olarak, mektuptaki tarihten önce yapılır. O tarihten sonra çoğu zaman çok geçtir. Juridisch Loket onu yazmana yardım edebilir.", // nieuw, nalezen
    'c.login': "Girişin sadece senin", // nieuw, nalezen
    'c.login.b': "Şifren ve DigiD’n sadece senin için. Onları kimseye verme, işverenine ya da bir iş arkadaşına bile. Ortak bir bilgisayarda işin bitince her zaman çıkış yap. Kısa bir süre mi uzaklaşıyorsun? Ekranını kilitle. Şifreni mi unuttun? Bilgi işlem bölümünden (ICT-afdeling) yenisini iste. Bilgisayar kuralları şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu bilgi işlem bölümüne sor.", // nieuw, nalezen
    'c.login.p': "Biraz uzaklaşıyorum. Ekranımı kilitliyorum.", // nieuw, nalezen
    'c.login.s': "Amirin, evraklarını hızlıca halletmek için DigiD’ni ve şifreni istiyor. Ne yaparsın?", // nieuw, nalezen
    'c.login.o1': "Hayır dersin, o yardım ederken girişi kendin yaparsın.", // nieuw, nalezen
    'c.login.o2': "Bu seferlik verirsin, çünkü o senin şefin.", // nieuw, nalezen
    'c.login.o3': "Sonra kullanabilsin diye bir kâğıda yazarsın.", // nieuw, nalezen
    'c.login.w': "DigiD’nle biri vergilerini, yardımlarını ve sağlık belgelerini görüp değiştirebilir. O sadece senin için. Girişi kendin yapıp birinin sana yardım etmesine izin verebilirsin.", // nieuw, nalezen
    'c.phish': "Acele ve bir düğme mi? Tıklama", // nieuw, nalezen
    'c.phish.b': "Sahte bir e-posta (phishing) çoğu zaman gerçek gibi görünür. Hızlı davranmanı ister: “Hesabınız bugün kapatılacak!” Göndereni kontrol et. Beklemediğin bir bağlantıya tıklama ve beklemediğin bir eki açma. Gerçek siteye ya da uygulamaya kendin git. Yine de tıkladın mı? Şifreni hemen değiştir ve bilgi işlem bölümünü ara. Bu utanılacak bir şey değil: ne kadar erken bilirlerse o kadar iyi. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    'c.phish.p': "Şüpheli bir bağlantıya tıkladım.", // nieuw, nalezen
    'c.phish.s': "Bir e-postadaki bağlantıya tıkladın ve şifreni yazdın. Sonra e-postanın sahte olduğunu görüyorsun. Ne yaparsın?", // nieuw, nalezen
    'c.phish.o1': "Şifreni değiştirir ve bilgi işlem bölümünü ararsın.", // nieuw, nalezen
    'c.phish.o2': "Başka kimse tıklamasın diye e-postayı silersin.", // nieuw, nalezen
    'c.phish.o3': "Bir şey ters gidecek mi diye bir gün beklersin.", // nieuw, nalezen
    'c.phish.w': "Şifrenle başka biri işinin sistemlerine girebilir. Şifreni hızlıca değiştirip bilgi işlem bölümüne haber verirsen, bunu zamanında durdurabilirler.", // nieuw, nalezen
    'c.mychoice': "Güçlü yönlerin önemli", // nieuw, nalezen
    'c.mychoice.b': "Neyde iyisin? İşi, okulu ve evi düşün. Ailene bakmak, bir yan iş ya da gönüllü çalışma da sayılır. Neyi seversin, neyi sevmezsin? Hangi işin sana uyduğunu bilmiyor musun? Bir gün birinin yanında işe gitmek iste (meeloopdag). Okuldaki danışmanın seçmene yardım edebilir.", // nieuw, nalezen
    'c.mychoice.p': "İnsanlarla iyi geçinebilirim. Evde çok yardım ederim.", // nieuw, nalezen
    'c.mychoice.s': "Okulda sana soruyorlar: “Neyde iyisin?” Hiç maaşlı bir işin olmadı. Ne dersin?", // nieuw, nalezen
    'c.mychoice.o1': "Evde iyi yaptığın şeyleri, örneğin başkalarına bakmayı.", // nieuw, nalezen
    'c.mychoice.o2': "Henüz bilmediğini, çünkü hiç işin olmadığını.", // nieuw, nalezen
    'c.mychoice.o3': "Her işi yapabileceğini, gerçekten her şeyi.", // nieuw, nalezen
    'c.mychoice.w': "Evde kazandığın beceriler de sayılır. Bakım, planlama ve yardım, işverenlerin ihtiyaç duyduğu becerilerdir. Ne yaptığını bir örnekle anlat.", // nieuw, nalezen
    'c.nextstep': "Entree’den sonra: seviye 2 ya da iş", // nieuw, nalezen
    'c.nextstep.b': "Entree diplomasıyla mbo’nun seviye 2’sine geçebilirsin. Seviye 2 ya da daha yüksek bir diploma, temel yeterliliktir (startkwalificatie). İş bulmana ve işini korumana yardım eder. bbl’de bir şirkette çalışır ve haftada yaklaşık bir gün okula gidersin. Bunun için bir işe ya da bir çalış-öğren yerine (leerwerkbaan) ihtiyacın var. Bir açık güne git ve okuldaki danışmanınla konuş.", // nieuw, nalezen
    'c.nextstep.p': "Entree’den sonra seviye 2’ye geçebilir miyim?", // nieuw, nalezen
    'c.nextstep.s': "Entree diploman var. Bir şirket sana eğitimsiz bir iş teklif ediyor. Sen de öğrenmeye devam etmek istiyorsun. Ne yaparsın?", // nieuw, nalezen
    'c.nextstep.o1': "Şirkete bbl yeri olup olmadığını sorarsın.", // nieuw, nalezen
    'c.nextstep.o2': "İşi alırsın ve öğrenmeyi tamamen bırakırsın.", // nieuw, nalezen
    'c.nextstep.o3': "Bir okul seni arayana kadar evde beklersin.", // nieuw, nalezen
    'c.nextstep.w': "bbl ile hem çalışır hem öğrenirsin. Para kazanırsın ve seviye 2 diploması alırsın. Birçok şirket bunu sever.", // nieuw, nalezen
    'c.email': "Kısa bir e-posta: kim, ne, ne zaman", // nieuw, nalezen
    'c.email.b': "İşe yazılan e-posta kısa ve kibardır. Bir selamla başla, örneğin “Beste Karin,”. Sonra ne istediğini ve ne zaman istediğini yaz. Bir selam ve tam adınla bitir. Kısa bir konu yaz, örneğin “Vrij op vrijdag”. Göndermeden önce e-postanı tekrar oku.", // nieuw, nalezen
    'c.email.p': "Sevgili Karin, cuma günü izin alabilir miyim? Selamlar, Ali Haddad", // nieuw, nalezen
    'c.email.s': "Gelecek cuma izin istiyorsun. Amirine hangi e-posta en iyisi?", // nieuw, nalezen
    'c.email.o1': "“Beste Karin, mag ik vrijdag vrij? Groet, Ali Haddad”", // nieuw, nalezen
    'c.email.o2': "“Vrijdag ben ik er niet.” (selamsız ve adın olmadan).", // nieuw, nalezen
    'c.email.o3': "Haftan hakkında uzun bir e-posta, soru en sonda.", // nieuw, nalezen
    'c.email.w': "İyi bir e-postada bir selam, net bir soru ve adın olur. Böylece amirin hızlıca cevap verebilir.", // nieuw, nalezen
    'c.budget': "Önce sabit giderler", // nieuw, nalezen
    'c.budget.b': "Maaşını aldığında önce sabit giderleri öde: kira, sigorta ve telefon. Her ay küçük bir miktar biriktirmeye çalış, 10 euro bile olsa. Şimdi al, sonra öde de bir borçtur. İnternetten bir şey mi aldın? O zaman genelde 14 gün içinde vazgeçebilirsin. Fişi sakla: garanti için ona ihtiyacın var.", // nieuw, nalezen
    'c.budget.p': "Şimdi ödemeyi tercih ederim. Böylece borcum olmaz.", // nieuw, nalezen
    'c.budget.s': "Bugün maaşını alıyorsun. Yeni ayakkabı istiyorsun, kiran da daha ödenmedi. Ne yaparsın?", // nieuw, nalezen
    'c.budget.o1': "Önce kirayı ödersin, sonra ne kaldığına bakarsın.", // nieuw, nalezen
    'c.budget.o2': "Ayakkabıları alırsın, kirayı sonra ödersin.", // nieuw, nalezen
    'c.budget.o3': "Ayakkabıları “şimdi al, sonra öde” ile alırsın.", // nieuw, nalezen
    'c.budget.w': "Kira, sigorta ve telefon her ay tekrar gelir. Önce bunları ödersen, ne kadar paran kaldığını bilirsin. Böylece borca girmezsin.", // nieuw, nalezen
    'c.healthy': "Uyku, yemek ve uyuşturucu yok", // nieuw, nalezen
    'c.healthy.b': "Yeterince uyuduğunda daha iyi ve daha güvenli çalışırsın, geç bir vardiyadan sonra da. Kahvaltı yap ve gün içinde su iç. Molada hareket et, örneğin kısa bir yürüyüş yap. Alkol ya da uyuşturucunun etkisi altında çalışmak tehlikelidir ve çoğu işveren bunu yasaklar. Uzun süredir moralin mi bozuk, ya da içmeyi veya kullanmayı bırakamıyor musun? Aile hekiminle (huisarts) konuş. Sana yardım edebilir ve bunu gizli tutar.", // nieuw, nalezen
    'c.healthy.p': "Uzun süredir moralim bozuk. Randevu alabilir miyim?", // nieuw, nalezen
    'c.healthy.s': "Bu gece gece vardiyan var. Bir iş arkadaşın uyanık kalman için sana bir hap veriyor. Ne yaparsın?", // nieuw, nalezen
    'c.healthy.o1': "Hayır dersin ve vardiyadan önce birkaç saat uyursun.", // nieuw, nalezen
    'c.healthy.o2': "Yarım hap alırsın, bu tehlikeli değil.", // nieuw, nalezen
    'c.healthy.o3': "Alırsın, ama işte kimseye söylemezsin.", // nieuw, nalezen
    'c.healthy.w': "Bir iş arkadaşından gelen haplar uyuşturucu olabilir. Seni hasta edebilir ya da işte hata yaptırabilir. Uyku, uyanık kalmanın güvenli yoludur.", // nieuw, nalezen
  },
};

export default t;
