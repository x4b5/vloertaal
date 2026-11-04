import type { CultureTranslation } from '../culture/types';

/** Dutch sounds (src/content/sounds.ts): the unit, its word pairs, sentences and chats. */
const t: CultureTranslation = {
  ui: {},
  gloss: {
    'u.sounds': 'ድምጽታት ሆላንድኛ',
    'l.shortlong': 'a ወይ aa፡ ui ወይ ei',
    'w.kl.man': 'ሰብኣይ',
    'w.kl.maan': 'ወርሒ (ኣብ ሰማይ)',
    'w.kl.zak': 'ከረጺት (ቦርሳ)',
    'w.kl.zaak': 'ድኳን',
    'w.kl.ui': 'ሽጉርቲ',
    'w.kl.ei': 'እንቋቝሖ',
    's.shortlong.1': 'እቲ ሰብኣይ ናብ ወርሒ ይጥምት።',
    's.shortlong.2': { m: 'ነቲ ሽጉርቲ ኣብቲ ከረጺት ኣእትዎ።', f: 'ነቲ ሽጉርቲ ኣብቲ ከረጺት ኣእትውዮ።' },
    's.shortlong.3': 'እቲ ድኳን ሰዓት 9:00 ይኽፈት።',
    'c.shortlong.q': { m: 'እንቋቝሖ ትደሊ ዶ?', f: 'እንቋቝሖ ትደልዪ ዶ?' },
    'c.shortlong.a': 'ኣይፋል፡ የቐንየለይ። ድሮ በሊዐ እየ።',
    'c.shortlong.a.why': 'እንቋቝሖ ይቐርብ፡ ብትሕትና «ኣይፋል» ምስ ምኽንያቱ።',
    'l.roundsounds': 'uu፡ oe ከምኡ’ውን eu',
    'w.kl.muur': 'መንደቕ',
    'w.kl.moer': 'ዳዶ (ንቡሎን)',
    'w.kl.buur': 'ጎረቤት',
    'w.kl.boer': 'ሓረስታይ',
    'w.kl.deur': 'ማዕጾ',
    'w.kl.duur': 'ክቡር (ዋጋ)',
    's.roundsounds.1': { m: 'ነቲ ዳዶ ኣጽኒዕካ ጠውዮ።', f: 'ነቲ ዳዶ ኣጽኒዕኪ ጠውይዮ።' },
    's.roundsounds.2': { m: 'በጃኻ ነቲ ማዕጾ ዕጸዎ።', f: 'በጃኺ ነቲ ማዕጾ ዕጸውዮ።' },
    's.roundsounds.3': 'እዚ ጃኬት ኣዝዩ ክቡር እዩ።',
    'c.roundsounds.q': 'እቲ ማዕጾ ክፉት ድዩ?',
    'c.roundsounds.a': 'ኣይፋል፡ ዕጹው እዩ።',
    'c.roundsounds.a.why': 'ማዕጾ ክፉት ድዩ ተሓቲቱ፡ እዚ መልሲ ክፉት ከም ዘይኮነ ይብል።',
    'l.pbgk': 'p ወይ b፡ g፡ k ወይ h', // nagelezen (2e lezing)
    'w.kl.pak': 'ሱፍ (ምሉእ ክዳን)',
    'w.kl.bak': 'ሳጹን፡ መጕሓፊ ጓሓፍ',
    'w.kl.goud': 'ወርቂ',
    'w.kl.koud': 'ዝሑል',
    'w.kl.hoed': 'ባርኔጣ',
    'w.kl.goed': 'ጽቡቕ',
    's.pbgk.1': { m: 'ነቲ ጓሓፍ ኣብቲ መጕሓፊ ደርብዮ።', f: 'ነቲ ጓሓፍ ኣብቲ መጕሓፊ ደርብይዮ።' },
    's.pbgk.2': 'ኣብቲ ኮሪዶር ዝሑል እዩ።',
    's.pbgk.3': { m: 'ጽቡቕ ትገብሮ ኣለኻ!', f: 'ጽቡቕ ትገብርዮ ኣለኺ!' },
    'c.pbgk.q': { m: 'ከመይ ኣለኻ?', f: 'ከመይ ኣለኺ?', x: 'ከመይ ኣለኹም?' }, // x: nieuw, nalezen
    'c.pbgk.a': 'ደሓን እየ፡ ግን ቆሪሩኒ ኣሎ።',
    'c.pbgk.a.why': 'ከመይ ከም ዘሎ ተሓቲቱ፡ መልስን ከመይ ከም ዝስምዖን።',
    // "Hoe zeg je het?" (src/content/klankMond.ts): how the mouth makes each sound.
    'k.uitleg.a': 'ኣፍ ክፉት እዩ፣ ካብ «aa» ቁሩብ ውሑድ። ልሳን ናብ ድሕሪት ይኸይድ። ድምጹ ሓጺር እዩ።', // nieuw, nalezen
    'k.uitleg.aa': 'ኣፍ ብዙሕ ክፉት እዩ። ከናፍር ፈኲሶም ኣለዉ። ልሳን ታሕቲ ጽፍሕ ኢሉ ኣሎ።', // nieuw, nalezen
    'k.uitleg.e': 'ኣፍ ፍርቂ ክፉት እዩ፣ ካብ «ee» ንላዕሊ። ከናፍር ፈኲሶም ኣለዉ። ድምጹ ሓጺር እዩ።', // nieuw, nalezen
    'k.uitleg.ee': 'ኣፍ ፍርቂ ክፉት እዩ። ከናፍር ከም ኣብ ፍሽኽታ ተዘርጊሖም ኣለዉ። ጫፍ ልሳን ንታሕተዎት ኣስናን ይትንክፍ።', // nieuw, nalezen
    'k.uitleg.i': 'ከም «ie»፣ ግን ኣፍ ቁሩብ ዝያዳ ክፉትን ፈኲሱን እዩ። ድምጹ ሓጺር እዩ።', // nieuw, nalezen
    'k.uitleg.ie': 'ኣፍ ዳርጋ ዕጹው እዩ። ከናፍር ከም ኣብ ፍሽኽታ ተዘርጊሖም ኣለዉ። ልሳን ላዕልን ቅድሚትን እዩ።', // nieuw, nalezen
    'k.uitleg.o': 'ኣፍ ክፉት እዩ። ከናፍር ቁሩብ ክቡባት እዮም። ልሳን ኣብ ድሕሪት እዩ። ድምጹ ሓጺር እዩ።', // nieuw, nalezen
    'k.uitleg.oo': 'ከናፍር ክቡባት እዮም። ኣፍ ፍርቂ ክፉት እዩ። ኣብ መወዳእታ ከናፍር ይንእሱ።', // nieuw, nalezen
    'k.uitleg.u': 'ከናፍር ቁሩብ ክቡባት እዮም፣ ጽኑዓት ግን ኣይኮኑን። ልሳን ኣብ ቅድሚት እዩ። ድምጹ ሓጺር እዩ።', // nieuw, nalezen
    'k.uitleg.uu': 'ከናፍር ክቡባትን ጽኑዓትን፣ ከም ንምስዓም። ልሳን ኣብ ቅድሚት፣ ከም ኣብ «ie»።', // nieuw, nalezen
    'k.uitleg.oe': 'ከናፍር ክቡባትን ጽኑዓትን፣ ብዙሕ ናብ ቅድሚት። ንእሽቶ ቀዳድ ጥራይ ይተርፍ። ልሳን ኣብ ድሕሪት ኣፍ ይጸንሕ።', // nieuw, nalezen
    'k.uitleg.eu': 'ኣፍ ፍርቂ ክፉት እዩ። ከናፍር ክቡባት እዮም፣ ግን ጽኑዓት ኣይኮኑን። ልሳን ኣብ ቅድሚት፣ ከም ኣብ «ee»።', // nieuw, nalezen
    'k.uitleg.ui': 'መጀመርታ፣ ኣፍ ፍርቂ ክፉትን ከናፍር ክቡባትን። ድሕሪኡ ከናፍር ይንእሱ፣ ክሳብ «uu»። ከናፍር ክቡባት ይጸንሑ።', // nieuw, nalezen
    'k.uitleg.ij': 'መጀመርታ፣ ኣፍ ፍርቂ ክፉትን ከናፍር ተዘርጊሖምን። ድሕሪኡ ኣፍ ዳርጋ ይዕጾ፣ ክሳብ «ie»።', // nieuw, nalezen
    'k.uitleg.ou': 'መጀመርታ፣ ኣፍ ክፉት። ድሕሪኡ ከናፍር ንኣሽቱን ክቡባትን ይኾኑ፣ ክሳብ «oe»።', // nieuw, nalezen
  },
};
export default t;
