import type { Gloss } from '../types';

// The translations of "Meedoen in België" (src/content/taalBe/units/society.ts), one object per
// help language. All new: // nieuw, nalezen. The Dutch names (gemeente, gemeenteraad, wijkagent,
// oproepingsbrief, opkomstplicht, justitiehuis, Unia) stay Dutch, as in the English. In Arabic and
// Tigrinya the lines to "you" are written without a gender (as the x forms elsewhere).

export const ar: Gloss = {
  'be.u.society': 'المشاركة في بلجيكا', // nieuw, nalezen
  'be.l.council': 'البلدية (gemeente) والتصويت', // nieuw, nalezen
  'be.w.stemmen': 'يصوّت', // nieuw, nalezen
  'be.w.gemeentehuis': 'مبنى البلدية', // nieuw, nalezen
  'be.w.gemeenteraad': 'المجلس البلدي (يقرّر في شؤون مدينتك)', // nieuw, nalezen
  'be.w.burgemeester': 'رئيس البلدية', // nieuw, nalezen
  'be.w.oproepingsbrief': 'رسالة الدعوة إلى التصويت (فيها أين ومتى التصويت)', // nieuw, nalezen
  'be.w.opkomstplicht': 'واجب الذهاب إلى التصويت', // nieuw, nalezen
  'be.s.council.1': 'سأنتقل إلى بيت آخر. أعطي عنواني الجديد للبلدية.', // nieuw, nalezen
  'be.s.council.2': 'هل يحق لي التصويت للمجلس البلدي؟', // nieuw, nalezen
  'be.s.council.3': 'وصلتني رسالة الدعوة إلى التصويت بالبريد.', // nieuw, nalezen
  'be.c.council.q': { m: 'هل ستذهب للتصويت يوم الأحد؟', f: 'هل ستذهبين للتصويت يوم الأحد؟', x: 'هل التصويت يوم الأحد ضمن خطتك؟' }, // nieuw, nalezen // nagelezen AI ronde 3
  'be.c.council.a': 'نعم. معي رسالة الدعوة وبطاقة الهوية.', // nieuw, nalezen
  'be.l.police': 'الشرطة والاعتراض وحقوقك', // nieuw, nalezen
  'be.w.wijkagent': 'شرطي الحي', // nieuw, nalezen
  'be.w.identiteitskaart': 'بطاقة الهوية (eID)', // nieuw, nalezen
  'be.w.boete': 'الغرامة (مال تدفعه عقوبةً)', // nieuw, nalezen
  'be.w.bezwaar': 'الاعتراض (تقول كتابةً إنك غير موافق)', // nieuw, nalezen
  'be.w.advocaat': 'المحامي', // nieuw, nalezen
  'be.w.recht': 'الحق (ما يسمح لك القانون أن تفعله أو تحصل عليه)', // nieuw, nalezen
  'be.s.police.1': 'بطاقة هويتي معي دائماً.', // nieuw, nalezen
  'be.s.police.2': 'أريد أن أقدّم اعتراضاً.', // nieuw, nalezen
  'be.s.police.3': 'أريد أن أتكلم مع محامٍ أولاً.', // nieuw, nalezen
  'be.c.police.q': 'هل يمكنني رؤية بطاقة هويتك؟', // nieuw, nalezen
  'be.c.police.a': 'نعم، تفضّل. ماذا يحدث؟', // nieuw, nalezen
  'be.c.council': 'البلدية، ومن يحق له التصويت', // nieuw, nalezen
  'be.c.council.b': 'البلدية (gemeente) تحفظ عنوانك وتعطيك بطاقة الهوية. انتقال إلى بيت جديد؟ يجب إبلاغ بلدية البيت الجديد خلال 8 أيام عمل. بعدها يأتي شرطي الحي (wijkagent) ليتأكد أنك تسكن هناك. كل 6 سنوات تجري انتخابات المجلس البلدي (gemeenteraad). يحق التصويت فيها لمن هو من بلد آخر في الاتحاد الأوروبي، ولمن هو من خارج الاتحاد الأوروبي بعد 5 سنوات من الإقامة القانونية. أولاً يلزم التسجيل كناخب في البلدية. في فلاندرز التصويت للمجلس البلدي غير إلزامي. في الانتخابات الأخرى يجب على البلجيكيين الذهاب للتصويت (opkomstplicht). تصل رسالة (oproepingsbrief): يجب أخذها مع بطاقة الهوية. عند الشك: السؤال في البلدية.', // nieuw, nalezen // nagelezen AI ronde 3
  'be.c.council.p': 'هل يحق لي التصويت للمجلس البلدي؟ هل يجب أن أسجّل أولاً؟', // nieuw, nalezen
  'be.c.council.s': 'الأصل من المغرب، والإقامة في خنت (Gent) قانونية منذ ست سنوات. لا جنسية بلجيكية. قريباً انتخابات للمجلس البلدي. ما الصحيح؟', // nieuw, nalezen
  'be.c.council.o1': 'يحق التصويت، بعد التسجيل في البلدية.', // nieuw, nalezen
  'be.c.council.o2': 'يحق التصويت للبرلمان الفدرالي أيضاً.', // nieuw, nalezen
  'be.c.council.o3': 'بلا جواز سفر بلجيكي لا يحق التصويت أبداً.', // nieuw, nalezen
  'be.c.council.w': 'بعد 5 سنوات من الإقامة القانونية يحق التصويت للمجلس البلدي. يلزم التسجيل كناخب أولاً. أما البرلمان الفدرالي فتلزم له الجنسية البلجيكية.', // nieuw, nalezen
  'be.c.police': 'بطاقة هويتك وحقوقك', // nieuw, nalezen
  'be.c.police.b': 'من عمر 15 سنة يجب أن تكون بطاقة الهوية (أو بطاقة الإقامة) معك دائماً، وأن تُظهرها عندما تطلبها الشرطة. وصلتك رسالة فيها قرار لا توافق عليه، مثلاً غرامة من البلدية؟ عندها يمكنك الرد كتابةً (bezwaar maken). الرسالة تقول كيف، وحتى متى. يجب أن يكون ذلك قبل ذلك التاريخ. الجميع متساوون أمام القانون. الشرطة تريد استجوابك؟ عندها يحق لك أن تتكلم مع محامٍ أولاً. الاستشارة الأولى من محامٍ مجانية، في justitiehuis. تمييز؟ Unia يمكنها المساعدة.', // nieuw, nalezen // nagelezen AI ronde 3
  'be.c.police.p': 'لا أوافق على هذا القرار. أقدّم اعتراضاً.', // nieuw, nalezen
  'be.c.police.s': 'وصلت رسالة من البلدية فيها غرامة. الغرامة تبدو غير صحيحة. في الرسالة تاريخ أخير للرد. ما التصرف الصحيح؟', // nieuw, nalezen
  'be.c.police.o1': 'الرد كتابةً، قبل التاريخ المذكور في الرسالة.', // nieuw, nalezen
  'be.c.police.o2': 'الاتصال بهم مرة، وانتظار أن يعاودوا الاتصال.', // nieuw, nalezen
  'be.c.police.o3': 'الانتظار: بعد ذلك التاريخ ينتهي الأمر وحده.', // nieuw, nalezen
  'be.c.police.w': 'الرد يكون كتابةً، قبل التاريخ المذكور في الرسالة. بعد ذلك التاريخ يكون الوقت متأخراً غالباً. justitiehuis يعطي استشارة أولى مجانية.', // nieuw, nalezen
};

export const ti: Gloss = {
  'be.u.society': 'ኣብ ቤልጅዩም ምስታፍ', // nieuw, nalezen
  'be.l.council': 'ምምሕዳር ከተማ (gemeente) ከምኡውን ምድማጽ', // nieuw, nalezen
  'be.w.stemmen': 'ምድማጽ', // nieuw, nalezen
  'be.w.gemeentehuis': 'ህንጻ ምምሕዳር ከተማ', // nieuw, nalezen
  'be.w.gemeenteraad': 'ቤት ምኽሪ ከተማ (ብዛዕባ ከተማኻ ይውስን)', // nieuw, nalezen
  'be.w.burgemeester': 'ከንቲባ', // nieuw, nalezen
  'be.w.oproepingsbrief': 'ደብዳቤ ምድማጽ (ኣበይን መዓስን ከም እትድምጽ ይነግር)', // nieuw, nalezen
  'be.w.opkomstplicht': 'ግዴታ ናብ ምድማጽ ምኻድ', // nieuw, nalezen
  'be.s.council.1': 'ገዛ እቕይር ኣለኹ። ሓድሽ ኣድራሻይ ንምምሕዳር ከተማ እህብ ኣለኹ።', // nieuw, nalezen
  'be.s.council.2': 'ንቤት ምኽሪ ከተማ ክድምጽ ይፍቀደለይ ድዩ?', // nieuw, nalezen
  'be.s.council.3': 'ደብዳቤ ምድማጽ ብፖስታ መጺኡኒ።', // nieuw, nalezen
  'be.c.council.q': { m: 'ሰንበት ክትድምጽ ክትከይድ ዲኻ?', f: 'ሰንበት ክትድምጺ ክትከዲ ዲኺ?', x: 'ሰንበት ክትድምጹ ክትከዱ ዲኹም?' }, // nieuw, nalezen // nagelezen AI ronde 3
  'be.c.council.a': 'እወ። ደብዳቤ ምድማጽን መንነት ወረቐተይን ኣለዉኒ።', // nieuw, nalezen
  'be.l.police': 'ፖሊስ፡ ተቓውሞ ከምኡውን መሰላት', // nieuw, nalezen
  'be.w.wijkagent': 'ፖሊስ ናይ ከባቢ', // nieuw, nalezen
  'be.w.identiteitskaart': 'መንነት ወረቐት (eID)', // nieuw, nalezen
  'be.w.boete': 'መቕጻዕቲ ገንዘብ', // nieuw, nalezen
  'be.w.bezwaar': 'ተቓውሞ (ብጽሑፍ ከም ዘይትሰማማዕ ምግላጽ)', // nieuw, nalezen
  'be.w.advocaat': 'ጠበቓ', // nieuw, nalezen
  'be.w.recht': 'መሰል (ሕጊ ክትገብሮ ወይ ክትረኽቦ ዝፈቕደልካ)', // nieuw, nalezen
  'be.s.police.1': 'መንነት ወረቐተይ ኩሉ ግዜ ምሳይ ኣሎ።', // nieuw, nalezen
  'be.s.police.2': 'ተቓውሞ ከቕርብ እደሊ።', // nieuw, nalezen
  'be.s.police.3': 'መጀመርታ ምስ ጠበቓ ክዛረብ እደሊ።', // nieuw, nalezen
  'be.c.police.q': 'መንነት ወረቐት ክርኢ ይኽእል ድየ?', // nieuw, nalezen
  'be.c.police.a': 'እወ፡ እንሆ። እንታይ ኣሎ?', // nieuw, nalezen
  'be.c.council': 'ምምሕዳር ከተማ፡ መን ክድምጽ ይኽእል', // nieuw, nalezen
  'be.c.council.b': { m: 'ምምሕዳር ከተማ (gemeente) ኣድራሻ ይሕዝ፡ መንነት ወረቐት ድማ ይህብ። ገዛ ምቕያር? ኣብ ውሽጢ 8 መዓልታት ስራሕ ንምምሕዳር ከተማ ናይቲ ሓድሽ ገዛ ምሕባር የድሊ። ድሕሪኡ ፖሊስ ናይ ከባቢ (wijkagent) ኣብኡ ከም እትነብር ክርኢ ይመጽእ። ኣብ ነፍሲ ወከፍ 6 ዓመት ምርጫ ቤት ምኽሪ ከተማ (gemeenteraad) ኣሎ። ካብ ካልእ ሃገር ናይ ኤውሮጳዊ ሕብረት ዝመጹ፡ ከምኡውን ካብ ደገ ኤውሮጳዊ ሕብረት ድሕሪ 5 ዓመት ሕጋዊ መንበሪ፡ ክድምጹ ይኽእሉ። መጀመርታ ኣብ ምምሕዳር ከተማ ከም መራጺ ምምዝጋብ የድሊ። ኣብ ፍላንደርስ ንቤት ምኽሪ ከተማ ምድማጽ ግዴታ ኣይኮነን። ኣብ ካልኦት ምርጫታት ቤልጅዩማውያን ክድምጹ ግዴታ ኣለዎም (opkomstplicht)። ደብዳቤ (oproepingsbrief) ይመጽእ፡ ምስ መንነት ወረቐት ሒዝካ ኺድ። ርግጸኛ ዘይኮንካ? ንምምሕዳር ከተማ ሕተት።', f: 'ምምሕዳር ከተማ (gemeente) ኣድራሻ ይሕዝ፡ መንነት ወረቐት ድማ ይህብ። ገዛ ምቕያር? ኣብ ውሽጢ 8 መዓልታት ስራሕ ንምምሕዳር ከተማ ናይቲ ሓድሽ ገዛ ምሕባር የድሊ። ድሕሪኡ ፖሊስ ናይ ከባቢ (wijkagent) ኣብኡ ከም እትነብር ክርኢ ይመጽእ። ኣብ ነፍሲ ወከፍ 6 ዓመት ምርጫ ቤት ምኽሪ ከተማ (gemeenteraad) ኣሎ። ካብ ካልእ ሃገር ናይ ኤውሮጳዊ ሕብረት ዝመጹ፡ ከምኡውን ካብ ደገ ኤውሮጳዊ ሕብረት ድሕሪ 5 ዓመት ሕጋዊ መንበሪ፡ ክድምጹ ይኽእሉ። መጀመርታ ኣብ ምምሕዳር ከተማ ከም መራጺ ምምዝጋብ የድሊ። ኣብ ፍላንደርስ ንቤት ምኽሪ ከተማ ምድማጽ ግዴታ ኣይኮነን። ኣብ ካልኦት ምርጫታት ቤልጅዩማውያን ክድምጹ ግዴታ ኣለዎም (opkomstplicht)። ደብዳቤ (oproepingsbrief) ይመጽእ፡ ምስ መንነት ወረቐት ሒዝኪ ኪዲ። ርግጸኛ ዘይኮንኪ? ንምምሕዳር ከተማ ሕተቲ።', x: 'ምምሕዳር ከተማ (gemeente) ኣድራሻ ይሕዝ፡ መንነት ወረቐት ድማ ይህብ። ገዛ ምቕያር? ኣብ ውሽጢ 8 መዓልታት ስራሕ ንምምሕዳር ከተማ ናይቲ ሓድሽ ገዛ ምሕባር የድሊ። ድሕሪኡ ፖሊስ ናይ ከባቢ (wijkagent) ኣብኡ ከም እትነብር ክርኢ ይመጽእ። ኣብ ነፍሲ ወከፍ 6 ዓመት ምርጫ ቤት ምኽሪ ከተማ (gemeenteraad) ኣሎ። ካብ ካልእ ሃገር ናይ ኤውሮጳዊ ሕብረት ዝመጹ፡ ከምኡውን ካብ ደገ ኤውሮጳዊ ሕብረት ድሕሪ 5 ዓመት ሕጋዊ መንበሪ፡ ክድምጹ ይኽእሉ። መጀመርታ ኣብ ምምሕዳር ከተማ ከም መራጺ ምምዝጋብ የድሊ። ኣብ ፍላንደርስ ንቤት ምኽሪ ከተማ ምድማጽ ግዴታ ኣይኮነን። ኣብ ካልኦት ምርጫታት ቤልጅዩማውያን ክድምጹ ግዴታ ኣለዎም (opkomstplicht)። ደብዳቤ (oproepingsbrief) ይመጽእ፡ ምስ መንነት ወረቐት ሒዝኩም ኪዱ። ርግጸኛታት ዘይኮንኩም? ንምምሕዳር ከተማ ሕተቱ።' }, // nieuw, nalezen // nagelezen AI ronde 3
  'be.c.council.p': 'ንቤት ምኽሪ ከተማ ክድምጽ ይፍቀደለይ ድዩ? መጀመርታ ክምዝገብ ኣለኒ ድዩ?', // nieuw, nalezen
  'be.c.council.s': 'መበቆል ካብ ሞሮኮ፡ ኣብ ኽሕንት (Gent) ንሽዱሽተ ዓመት ሕጋዊ መንበሪ። ቤልጅዩማዊ ዜግነት የለን። ቀልጢፉ ምርጫ ቤት ምኽሪ ከተማ ኣሎ። እንታይ እዩ ሓቂ?', // nieuw, nalezen // nagelezen AI ronde 3
  'be.c.council.o1': 'ምድማጽ ይፍቀድ፡ ድሕሪ ኣብ ምምሕዳር ከተማ ምምዝጋብ።', // nieuw, nalezen
  'be.c.council.o2': 'ንፈደራላዊ ባይቶ እውን ምድማጽ ይፍቀድ።', // nieuw, nalezen
  'be.c.council.o3': 'ብዘይ ቤልጅዩማዊ ፓስፖርት ፈጺሙ ምድማጽ ኣይፍቀድን።', // nieuw, nalezen
  'be.c.council.w': 'ድሕሪ 5 ዓመት ሕጋዊ መንበሪ ንቤት ምኽሪ ከተማ ምድማጽ ይፍቀድ። መጀመርታ ከም መራጺ ምምዝጋብ የድሊ። ንፈደራላዊ ባይቶ ቤልጅዩማዊ ዜግነት የድሊ።', // nieuw, nalezen
  'be.c.police': 'መንነት ወረቐትን መሰላትን', // nieuw, nalezen
  'be.c.police.b': { m: 'ካብ 15 ዓመት ጀሚሩ መንነት ወረቐት (ወይ ወረቐት መንበሪ) ኩሉ ግዜ ምሳኻ ክህሉ ኣለዎ፡ ፖሊስ ምስ ዝሓቶ ድማ ምርኣይ የድሊ። ዘይትሰማምዓሉ ውሳነ ዘለዎ ደብዳቤ መጺኡ፡ ንኣብነት መቕጻዕቲ ካብ ምምሕዳር ከተማ? ሽዑ ብጽሑፍ መልሲ ምሃብ ይከኣል (bezwaar maken)። እቲ ደብዳቤ ብኸመይን ክሳብ መዓስን ይነግር። ቅድሚ እቲ ዕለት ግበሮ። ኩሉ ሰብ ኣብ ቅድሚ ሕጊ ማዕረ እዩ። ፖሊስ ክሓትት ይደሊ? ሽዑ መጀመርታ ምስ ጠበቓ ምዝራብ ይፍቀድ። ቀዳማይ ምኽሪ ካብ ጠበቓ ብናጻ እዩ፡ ኣብ justitiehuis። ኣድልዎ? Unia ክሕግዝ ይኽእል።', f: 'ካብ 15 ዓመት ጀሚሩ መንነት ወረቐት (ወይ ወረቐት መንበሪ) ኩሉ ግዜ ምሳኺ ክህሉ ኣለዎ፡ ፖሊስ ምስ ዝሓቶ ድማ ምርኣይ የድሊ። ዘይትሰማምዒሉ ውሳነ ዘለዎ ደብዳቤ መጺኡ፡ ንኣብነት መቕጻዕቲ ካብ ምምሕዳር ከተማ? ሽዑ ብጽሑፍ መልሲ ምሃብ ይከኣል (bezwaar maken)። እቲ ደብዳቤ ብኸመይን ክሳብ መዓስን ይነግር። ቅድሚ እቲ ዕለት ግበርዮ። ኩሉ ሰብ ኣብ ቅድሚ ሕጊ ማዕረ እዩ። ፖሊስ ክሓትት ይደሊ? ሽዑ መጀመርታ ምስ ጠበቓ ምዝራብ ይፍቀድ። ቀዳማይ ምኽሪ ካብ ጠበቓ ብናጻ እዩ፡ ኣብ justitiehuis። ኣድልዎ? Unia ክሕግዝ ይኽእል።', x: 'ካብ 15 ዓመት ጀሚሩ መንነት ወረቐት (ወይ ወረቐት መንበሪ) ኩሉ ግዜ ምሳኹም ክህሉ ኣለዎ፡ ፖሊስ ምስ ዝሓቶ ድማ ምርኣይ የድሊ። ዘይትሰማምዑሉ ውሳነ ዘለዎ ደብዳቤ መጺኡ፡ ንኣብነት መቕጻዕቲ ካብ ምምሕዳር ከተማ? ሽዑ ብጽሑፍ መልሲ ምሃብ ይከኣል (bezwaar maken)። እቲ ደብዳቤ ብኸመይን ክሳብ መዓስን ይነግር። ቅድሚ እቲ ዕለት ግበርዎ። ኩሉ ሰብ ኣብ ቅድሚ ሕጊ ማዕረ እዩ። ፖሊስ ክሓትት ይደሊ? ሽዑ መጀመርታ ምስ ጠበቓ ምዝራብ ይፍቀድ። ቀዳማይ ምኽሪ ካብ ጠበቓ ብናጻ እዩ፡ ኣብ justitiehuis። ኣድልዎ? Unia ክሕግዝ ይኽእል።' }, // nieuw, nalezen // nagelezen AI ronde 3
  'be.c.police.p': 'በዚ ውሳነ ኣይሰማማዕን እየ። ተቓውሞ የቕርብ ኣለኹ።', // nieuw, nalezen
  'be.c.police.s': 'ካብ ምምሕዳር ከተማ መቕጻዕቲ ዘለዎ ደብዳቤ መጺኡ። እቲ መቕጻዕቲ ቅኑዕ ኣይመስልን። ኣብቲ ደብዳቤ ናይ መልሲ ዕለት ኣሎ። እንታይ ይግበር?', // nieuw, nalezen
  'be.c.police.o1': 'ብጽሑፍ መልሲ ምሃብ፡ ቅድሚ እቲ ኣብ ደብዳቤ ዘሎ ዕለት።', // nieuw, nalezen
  'be.c.police.o2': 'ሓንሳብ ምድዋል፡ ክሳብ ዝድውሉ ድማ ምጽባይ።', // nieuw, nalezen
  'be.c.police.o3': 'ምጽባይ፡ ድሕሪ እቲ ዕለት ባዕሉ ይውዳእ።', // nieuw, nalezen
  'be.c.police.w': 'መልሲ ብጽሑፍ ይወሃብ፡ ቅድሚ እቲ ኣብ ደብዳቤ ዘሎ ዕለት። ድሕሪ እቲ ዕለት መብዛሕትኡ ግዜ ደንጒዩ እዩ። justitiehuis ቀዳማይ ምኽሪ ብናጻ ይህብ።', // nieuw, nalezen
};

export const fa: Gloss = {
  'be.u.society': 'مشارکت در بلژیک', // nieuw, nalezen
  'be.l.council': 'شهرداری (gemeente) و رأی دادن', // nieuw, nalezen
  'be.w.stemmen': 'رأی دادن', // nieuw, nalezen
  'be.w.gemeentehuis': 'ساختمان شهرداری', // nieuw, nalezen
  'be.w.gemeenteraad': 'شورای شهر (دربارهٔ شهر شما تصمیم می‌گیرد)', // nieuw, nalezen
  'be.w.burgemeester': 'شهردار', // nieuw, nalezen
  'be.w.oproepingsbrief': 'نامهٔ دعوت به رأی‌گیری (می‌گوید کجا و کی رأی می‌دهید)', // nieuw, nalezen
  'be.w.opkomstplicht': 'وظیفهٔ رفتن برای رأی دادن', // nieuw, nalezen
  'be.s.council.1': 'خانه‌ام را عوض می‌کنم. آدرس جدیدم را به شهرداری می‌دهم.', // nieuw, nalezen
  'be.s.council.2': 'آیا می‌توانم برای شورای شهر رأی بدهم؟', // nieuw, nalezen
  'be.s.council.3': 'نامهٔ رأی‌گیری‌ام با پست آمد.', // nieuw, nalezen
  'be.c.council.q': 'یکشنبه برای رأی دادن می‌روی؟', // nieuw, nalezen
  'be.c.council.a': 'بله. نامهٔ رأی‌گیری و کارت شناسایی‌ام را دارم.', // nieuw, nalezen
  'be.l.police': 'پلیس، اعتراض و حقوق شما', // nieuw, nalezen
  'be.w.wijkagent': 'مأمور پلیس محله', // nieuw, nalezen
  'be.w.identiteitskaart': 'کارت شناسایی (eID)', // nieuw, nalezen
  'be.w.boete': 'جریمه (پولی که به عنوان تنبیه باید بپردازید)', // nieuw, nalezen
  'be.w.bezwaar': 'اعتراض (کتبی می‌گویید که موافق نیستید)', // nieuw, nalezen
  'be.w.advocaat': 'وکیل', // nieuw, nalezen
  'be.w.recht': 'حق (آنچه قانون می‌گوید می‌توانید بکنید یا بگیرید)', // nieuw, nalezen
  'be.s.police.1': 'کارت شناسایی‌ام همیشه همراهم است.', // nieuw, nalezen
  'be.s.police.2': 'می‌خواهم اعتراض کنم.', // nieuw, nalezen
  'be.s.police.3': 'می‌خواهم اول با یک وکیل حرف بزنم.', // nieuw, nalezen
  'be.c.police.q': 'می‌توانم کارت شناسایی‌تان را ببینم؟', // nieuw, nalezen
  'be.c.police.a': 'بله، بفرمایید. چه شده است؟', // nieuw, nalezen
  'be.c.council': 'شهرداری شما، و چه کسی می‌تواند رأی بدهد', // nieuw, nalezen
  'be.c.council.b': 'شهرداری (gemeente) آدرس شما را نگه می‌دارد و کارت شناسایی‌تان را می‌دهد. اسباب‌کشی می‌کنید؟ ظرف 8 روز کاری به شهرداری خانهٔ جدیدتان خبر بدهید. بعد مأمور پلیس محله (wijkagent) می‌آید تا ببیند آنجا زندگی می‌کنید. هر 6 سال انتخابات شورای شهر (gemeenteraad) برگزار می‌شود. کسانی که از کشور دیگری از اتحادیهٔ اروپا هستند، و کسانی که از بیرون اتحادیهٔ اروپا هستند پس از 5 سال اقامت قانونی، می‌توانند در آن رأی بدهند. اول در شهرداری به عنوان رأی‌دهنده ثبت‌نام می‌کنید. در فلاندر رأی دادن برای شورای شهر اجباری نیست. در انتخابات دیگر، بلژیکی‌ها باید برای رأی دادن بروند (opkomstplicht). نامه‌ای (oproepingsbrief) می‌گیرید: آن را با کارت شناسایی‌تان ببرید. مطمئن نیستید؟ از شهرداری بپرسید.', // nieuw, nalezen
  'be.c.council.p': 'آیا می‌توانم برای شورای شهر رأی بدهم؟ باید اول ثبت‌نام کنم؟', // nieuw, nalezen
  'be.c.council.s': 'شما اهل مراکش هستید و شش سال است که به‌طور قانونی در خنت (Gent) زندگی می‌کنید. بلژیکی نیستید. به‌زودی انتخابات شورای شهر است. چه چیزی درست است؟', // nieuw, nalezen
  'be.c.council.o1': 'می‌توانید رأی بدهید، پس از ثبت‌نام در شهرداری.', // nieuw, nalezen
  'be.c.council.o2': 'برای پارلمان فدرال هم می‌توانید رأی بدهید.', // nieuw, nalezen
  'be.c.council.o3': 'بدون پاسپورت بلژیکی اصلاً نمی‌توانید رأی بدهید.', // nieuw, nalezen
  'be.c.council.w': 'پس از 5 سال اقامت قانونی می‌توانید برای شورای شهر رأی بدهید. اول باید به عنوان رأی‌دهنده ثبت‌نام کنید. برای پارلمان فدرال تابعیت بلژیکی لازم است.', // nieuw, nalezen
  'be.c.police': 'کارت شناسایی و حقوق شما', // nieuw, nalezen
  'be.c.police.b': 'از 15 سالگی باید همیشه کارت شناسایی (یا کارت اقامت) همراهتان باشد و وقتی پلیس خواست، آن را نشان بدهید. نامه‌ای با تصمیمی گرفته‌اید که با آن موافق نیستید، مثلاً جریمه‌ای از شهرداری؟ آن وقت می‌توانید کتبی پاسخ بدهید (bezwaar maken). نامه می‌گوید چطور و تا کی. قبل از آن تاریخ این کار را بکنید. همه در برابر قانون برابرند. پلیس می‌خواهد از شما بازجویی کند؟ آن وقت حق دارید اول با یک وکیل حرف بزنید. اولین مشاوره با وکیل رایگان است، در justitiehuis. تبعیض؟ Unia می‌تواند کمک کند.', // nieuw, nalezen
  'be.c.police.p': 'با این تصمیم موافق نیستم. اعتراض می‌کنم.', // nieuw, nalezen
  'be.c.police.s': 'با نامه‌ای از شهرداری جریمه گرفته‌اید. فکر می‌کنید درست نیست. نامه یک تاریخ برای پاسخ دادن می‌دهد. چه کار می‌کنید؟', // nieuw, nalezen
  'be.c.police.o1': 'قبل از تاریخ نامه، کتبی پاسخ بدهید.', // nieuw, nalezen
  'be.c.police.o2': 'یک بار زنگ بزنید و منتظر بمانید تا به شما زنگ بزنند.', // nieuw, nalezen
  'be.c.police.o3': 'صبر کنید: بعد از آن تاریخ خودش تمام می‌شود.', // nieuw, nalezen
  'be.c.police.w': 'کتبی پاسخ می‌دهید، قبل از تاریخ نامه. بعد از آن تاریخ اغلب دیر است. justitiehuis اولین مشاوره را رایگان می‌دهد.', // nieuw, nalezen
};

export const prs: Gloss = {
  'be.u.society': 'سهم‌گیری در بلجیم', // nieuw, nalezen
  'be.l.council': 'شاروالی (gemeente) و رأی دادن', // nieuw, nalezen
  'be.w.stemmen': 'رأی دادن', // nieuw, nalezen
  'be.w.gemeentehuis': 'تعمیر شاروالی', // nieuw, nalezen
  'be.w.gemeenteraad': 'شورای شهر (دربارهٔ شهر شما تصمیم می‌گیرد)', // nieuw, nalezen
  'be.w.burgemeester': 'شاروال', // nieuw, nalezen
  'be.w.oproepingsbrief': 'نامهٔ دعوت به رأی‌دهی (می‌گوید کجا و چه وقت رأی می‌دهید)', // nieuw, nalezen
  'be.w.opkomstplicht': 'وجیبهٔ رفتن برای رأی دادن', // nieuw, nalezen
  'be.s.council.1': 'خانه‌ام را تبدیل می‌کنم. آدرس نو خود را به شاروالی می‌دهم.', // nieuw, nalezen
  'be.s.council.2': 'آیا می‌توانم برای شورای شهر رأی بدهم؟', // nieuw, nalezen
  'be.s.council.3': 'نامهٔ رأی‌دهی من با پست آمد.', // nieuw, nalezen
  'be.c.council.q': 'یکشنبه برای رأی دادن می‌روی؟', // nieuw, nalezen
  'be.c.council.a': 'بلی. نامهٔ رأی‌دهی و تذکرهٔ هویت خود را دارم.', // nieuw, nalezen
  'be.l.police': 'پولیس، اعتراض و حقوق شما', // nieuw, nalezen
  'be.w.wijkagent': 'پولیس ساحه', // nieuw, nalezen
  'be.w.identiteitskaart': 'کارت هویت (eID)', // nieuw, nalezen
  'be.w.boete': 'جریمه (پولی که به حیث جزا باید بپردازید)', // nieuw, nalezen
  'be.w.bezwaar': 'اعتراض (به‌طور کتبی می‌گویید که موافق نیستید)', // nieuw, nalezen
  'be.w.advocaat': 'وکیل', // nieuw, nalezen
  'be.w.recht': 'حق (آنچه قانون می‌گوید می‌توانید بکنید یا بگیرید)', // nieuw, nalezen
  'be.s.police.1': 'کارت هویتم همیشه با من است.', // nieuw, nalezen
  'be.s.police.2': 'می‌خواهم اعتراض کنم.', // nieuw, nalezen
  'be.s.police.3': 'می‌خواهم اول با یک وکیل گپ بزنم.', // nieuw, nalezen
  'be.c.police.q': 'می‌توانم کارت هویت تان را ببینم؟', // nieuw, nalezen
  'be.c.police.a': 'بلی، بفرمایید. چه گپ است؟', // nieuw, nalezen
  'be.c.council': 'شاروالی شما، و کی می‌تواند رأی بدهد', // nieuw, nalezen
  'be.c.council.b': 'شاروالی (gemeente) آدرس شما را نگه می‌دارد و کارت هویت تان را می‌دهد. کوچ می‌کنید؟ در ظرف 8 روز کاری به شاروالی خانهٔ نو تان خبر بدهید. بعد پولیس ساحه (wijkagent) می‌آید تا ببیند که آنجا زندگی می‌کنید. هر 6 سال انتخابات شورای شهر (gemeenteraad) برگزار می‌شود. کسانی که از کشور دیگر اتحادیهٔ اروپا هستند، و کسانی که از بیرون اتحادیهٔ اروپا هستند بعد از 5 سال اقامت قانونی، می‌توانند در آن رأی بدهند. اول در شاروالی به حیث رأی‌دهنده ثبت‌نام می‌کنید. در فلاندر رأی دادن برای شورای شهر اجباری نیست. در انتخابات دیگر، بلجیمی‌ها باید برای رأی دادن بروند (opkomstplicht). یک نامه (oproepingsbrief) می‌گیرید: آن را با کارت هویت تان ببرید. مطمئن نیستید؟ از شاروالی بپرسید.', // nieuw, nalezen
  'be.c.council.p': 'آیا می‌توانم برای شورای شهر رأی بدهم؟ باید اول ثبت‌نام کنم؟', // nieuw, nalezen
  'be.c.council.s': 'شما از مراکش هستید و شش سال است که به‌طور قانونی در خنت (Gent) زندگی می‌کنید. بلجیمی نیستید. به‌زودی انتخابات شورای شهر است. چه چیز درست است؟', // nieuw, nalezen
  'be.c.council.o1': 'می‌توانید رأی بدهید، بعد از ثبت‌نام در شاروالی.', // nieuw, nalezen
  'be.c.council.o2': 'برای پارلمان فدرال هم می‌توانید رأی بدهید.', // nieuw, nalezen
  'be.c.council.o3': 'بدون پاسپورت بلجیمی هیچ رأی داده نمی‌توانید.', // nieuw, nalezen
  'be.c.council.w': 'بعد از 5 سال اقامت قانونی می‌توانید برای شورای شهر رأی بدهید. اول باید به حیث رأی‌دهنده ثبت‌نام کنید. برای پارلمان فدرال تابعیت بلجیمی لازم است.', // nieuw, nalezen
  'be.c.police': 'کارت هویت و حقوق شما', // nieuw, nalezen
  'be.c.police.b': 'از 15 سالگی باید همیشه کارت هویت (یا کارت اقامت) با شما باشد و وقتی پولیس خواست، آن را نشان بدهید. نامه‌ای با تصمیمی گرفته‌اید که با آن موافق نیستید، مثلاً جریمه‌ای از شاروالی؟ آن وقت می‌توانید به‌طور کتبی جواب بدهید (bezwaar maken). نامه می‌گوید چطور و تا چه وقت. پیش از آن تاریخ این کار را بکنید. همه در برابر قانون برابر هستند. پولیس می‌خواهد از شما سوال و جواب کند؟ آن وقت حق دارید اول با یک وکیل گپ بزنید. اولین مشوره با وکیل رایگان است، در justitiehuis. تبعیض؟ Unia می‌تواند کمک کند.', // nieuw, nalezen
  'be.c.police.p': 'با این تصمیم موافق نیستم. اعتراض می‌کنم.', // nieuw, nalezen
  'be.c.police.s': 'با نامه‌ای از شاروالی جریمه گرفته‌اید. فکر می‌کنید درست نیست. نامه یک تاریخ برای جواب دادن می‌دهد. چه کار می‌کنید؟', // nieuw, nalezen
  'be.c.police.o1': 'پیش از تاریخ نامه، کتبی جواب بدهید.', // nieuw, nalezen
  'be.c.police.o2': 'یک بار زنگ بزنید و منتظر بمانید تا به شما زنگ بزنند.', // nieuw, nalezen
  'be.c.police.o3': 'صبر کنید: بعد از آن تاریخ خودش ختم می‌شود.', // nieuw, nalezen
  'be.c.police.w': 'به‌طور کتبی جواب می‌دهید، پیش از تاریخ نامه. بعد از آن تاریخ اکثراً دیر است. justitiehuis اولین مشوره را رایگان می‌دهد.', // nieuw, nalezen
};

export const uk: Gloss = {
  'be.u.society': 'Участь у житті Бельгії', // nieuw, nalezen
  'be.l.council': 'Громада (gemeente) і вибори', // nieuw, nalezen
  'be.w.stemmen': 'голосувати', // nieuw, nalezen
  'be.w.gemeentehuis': 'будівля громади (ратуша)', // nieuw, nalezen
  'be.w.gemeenteraad': 'рада громади (вирішує щодо твого міста)', // nieuw, nalezen
  'be.w.burgemeester': 'мер, бургомістр', // nieuw, nalezen
  'be.w.oproepingsbrief': 'запрошення на вибори (там сказано, де і коли голосувати)', // nieuw, nalezen
  'be.w.opkomstplicht': 'обов’язок прийти на вибори', // nieuw, nalezen
  'be.s.council.1': 'Я переїжджаю. Я повідомляю громаді свою нову адресу.', // nieuw, nalezen
  'be.s.council.2': 'Чи можу я голосувати за раду громади?', // nieuw, nalezen
  'be.s.council.3': 'Моє запрошення на вибори прийшло поштою.', // nieuw, nalezen
  'be.c.council.q': 'Підеш у неділю голосувати?', // nieuw, nalezen
  'be.c.council.a': 'Так. У мене є запрошення і моя ID-картка.', // nieuw, nalezen
  'be.l.police': 'Поліція, заперечення і твої права', // nieuw, nalezen
  'be.w.wijkagent': 'дільничний поліцейський', // nieuw, nalezen
  'be.w.identiteitskaart': 'ID-картка (eID)', // nieuw, nalezen
  'be.w.boete': 'штраф (гроші, які треба заплатити як покарання)', // nieuw, nalezen
  'be.w.bezwaar': 'заперечення (ти письмово кажеш, що не згоден)', // nieuw, nalezen
  'be.w.advocaat': 'адвокат', // nieuw, nalezen
  'be.w.recht': 'право (що закон дозволяє тобі робити чи отримати)', // nieuw, nalezen
  'be.s.police.1': 'Моя ID-картка завжди при мені.', // nieuw, nalezen
  'be.s.police.2': 'Я хочу подати заперечення.', // nieuw, nalezen
  'be.s.police.3': 'Я хочу спершу поговорити з адвокатом.', // nieuw, nalezen
  'be.c.police.q': 'Можна побачити вашу ID-картку?', // nieuw, nalezen
  'be.c.police.a': 'Так, ось вона. Що сталося?', // nieuw, nalezen
  'be.c.council': 'Твоя громада і хто може голосувати', // nieuw, nalezen
  'be.c.council.b': 'Громада (gemeente) зберігає твою адресу і видає тобі ID-картку. Переїжджаєш? Повідом громаду нового житла протягом 8 робочих днів. Потім дільничний (wijkagent) приходить перевірити, що ти там живеш. Кожні 6 років відбуваються вибори до ради громади (gemeenteraad). Голосувати можуть люди з іншої країни ЄС, а люди з-поза ЄС — після 5 років законного перебування. Спершу треба зареєструватися як виборець у громаді. У Фландрії голосувати за раду громади не обов’язково. На інших виборах бельгійці мусять прийти голосувати (opkomstplicht). Ти отримаєш лист (oproepingsbrief): візьми його разом з ID-карткою. Не впевнений? Запитай у громаді.', // nieuw, nalezen
  'be.c.council.p': 'Чи можу я голосувати за раду громади? Мені спершу треба зареєструватися?', // nieuw, nalezen
  'be.c.council.s': 'Ти з Марокко і вже шість років законно живеш у Генті (Gent). У тебе немає бельгійського громадянства. Скоро вибори до ради громади. Що правда?', // nieuw, nalezen
  'be.c.council.o1': 'Можна голосувати, після реєстрації в громаді.', // nieuw, nalezen
  'be.c.council.o2': 'Можна голосувати і за федеральний парламент.', // nieuw, nalezen
  'be.c.council.o3': 'Без бельгійського паспорта взагалі не можна голосувати.', // nieuw, nalezen
  'be.c.council.w': 'Після 5 років законного перебування можна голосувати за раду громади. Спершу треба зареєструватися як виборець. Для федерального парламенту потрібне бельгійське громадянство.', // nieuw, nalezen
  'be.c.police': 'Твоя ID-картка і твої права', // nieuw, nalezen
  'be.c.police.b': 'З 15 років ID-картка (або картка на проживання) має бути завжди при тобі, і ти показуєш її, коли просить поліція. Отримав лист з рішенням, з яким не згоден, наприклад штраф від громади? Тоді можна відповісти письмово (bezwaar maken). У листі сказано, як і до якої дати. Зроби це до цієї дати. Усі рівні перед законом. Поліція хоче тебе допитати? Тоді ти маєш право спершу поговорити з адвокатом. Перша порада адвоката безкоштовна, у justitiehuis. Дискримінація? Unia може допомогти.', // nieuw, nalezen
  'be.c.police.p': 'Я не згоден із цим рішенням. Я подаю заперечення.', // nieuw, nalezen
  'be.c.police.s': 'Ти отримуєш листом штраф від громади. Тобі здається, що це неправильно. У листі є дата для відповіді. Що ти робиш?', // nieuw, nalezen
  'be.c.police.o1': 'Відповісти письмово, до дати в листі.', // nieuw, nalezen
  'be.c.police.o2': 'Подзвонити один раз і чекати, поки передзвонять.', // nieuw, nalezen
  'be.c.police.o3': 'Чекати: після цієї дати все мине саме.', // nieuw, nalezen
  'be.c.police.w': 'Відповідають письмово, до дати в листі. Після неї часто вже запізно. У justitiehuis дають першу пораду безкоштовно.', // nieuw, nalezen
};

export const tr: Gloss = {
  'be.u.society': 'Belçika’da katılım', // nieuw, nalezen
  'be.l.council': 'Belediye (gemeente) ve oy vermek', // nieuw, nalezen
  'be.w.stemmen': 'oy vermek', // nieuw, nalezen
  'be.w.gemeentehuis': 'belediye binası', // nieuw, nalezen
  'be.w.gemeenteraad': 'belediye meclisi (şehrin hakkında karar verir)', // nieuw, nalezen
  'be.w.burgemeester': 'belediye başkanı', // nieuw, nalezen
  'be.w.oproepingsbrief': 'oy daveti mektubu (nerede ve ne zaman oy vereceğini yazar)', // nieuw, nalezen
  'be.w.opkomstplicht': 'oy vermeye gitme zorunluluğu', // nieuw, nalezen
  'be.s.council.1': 'Taşınıyorum. Yeni adresimi belediyeye bildiriyorum.', // nieuw, nalezen
  'be.s.council.2': 'Belediye meclisi için oy verebilir miyim?', // nieuw, nalezen
  'be.s.council.3': 'Oy daveti mektubum postayla geldi.', // nieuw, nalezen
  'be.c.council.q': 'Pazar günü oy vermeye gidiyor musun?', // nieuw, nalezen
  'be.c.council.a': 'Evet. Davet mektubum ve kimlik kartım yanımda.', // nieuw, nalezen
  'be.l.police': 'Polis, itiraz ve hakların', // nieuw, nalezen
  'be.w.wijkagent': 'mahalle polisi', // nieuw, nalezen
  'be.w.identiteitskaart': 'kimlik kartı (eID)', // nieuw, nalezen
  'be.w.boete': 'para cezası (ceza olarak ödemen gereken para)', // nieuw, nalezen
  'be.w.bezwaar': 'itiraz (kabul etmediğini yazılı olarak söylersin)', // nieuw, nalezen
  'be.w.advocaat': 'avukat', // nieuw, nalezen
  'be.w.recht': 'hak (yasanın yapmana veya almana izin verdiği şey)', // nieuw, nalezen
  'be.s.police.1': 'Kimlik kartım her zaman yanımda.', // nieuw, nalezen
  'be.s.police.2': 'İtiraz etmek istiyorum.', // nieuw, nalezen
  'be.s.police.3': 'Önce bir avukatla konuşmak istiyorum.', // nieuw, nalezen
  'be.c.police.q': 'Kimlik kartınızı görebilir miyim?', // nieuw, nalezen
  'be.c.police.a': 'Evet, buyurun. Ne oldu?', // nieuw, nalezen
  'be.c.council': 'Belediyen ve kimin oy verebileceği', // nieuw, nalezen
  'be.c.council.b': 'Belediye (gemeente) adresini kayıtlı tutar ve sana kimlik kartını verir. Taşınıyor musun? Yeni evinin belediyesine 8 iş günü içinde bildir. Sonra mahalle polisi (wijkagent) orada oturduğunu kontrol etmeye gelir. Her 6 yılda bir belediye meclisi (gemeenteraad) seçimi olur. Başka bir AB ülkesinden gelenler ve AB dışından gelenler 5 yıl yasal oturumdan sonra bu seçimde oy verebilir. Önce belediyeye seçmen olarak kaydolursun. Flandre’da belediye meclisi için oy vermek zorunlu değildir. Diğer seçimlerde Belçikalılar oy vermeye gitmek zorundadır (opkomstplicht). Bir mektup (oproepingsbrief) alırsın: onu kimlik kartınla birlikte götür. Emin değil misin? Belediyeye sor.', // nieuw, nalezen
  'be.c.council.p': 'Belediye meclisi için oy verebilir miyim? Önce kaydolmam gerekiyor mu?', // nieuw, nalezen
  'be.c.council.s': 'Faslısın ve altı yıldır Gent’te yasal olarak yaşıyorsun. Belçika vatandaşı değilsin. Yakında belediye meclisi seçimi var. Hangisi doğru?', // nieuw, nalezen
  'be.c.council.o1': 'Belediyeye kaydolduktan sonra oy verebilirsin.', // nieuw, nalezen
  'be.c.council.o2': 'Federal parlamento için de oy verebilirsin.', // nieuw, nalezen
  'be.c.council.o3': 'Belçika pasaportu olmadan hiç oy veremezsin.', // nieuw, nalezen
  'be.c.council.w': '5 yıl yasal oturumdan sonra belediye meclisi için oy verebilirsin. Önce seçmen olarak kaydolman gerekir. Federal parlamento için Belçika vatandaşlığı gerekir.', // nieuw, nalezen
  'be.c.police': 'Kimlik kartın ve hakların', // nieuw, nalezen
  'be.c.police.b': '15 yaşından itibaren kimlik kartın (veya oturum kartın) her zaman yanında olmalı ve polis isterse göstermelisin. Kabul etmediğin bir kararın yazılı olduğu bir mektup mu aldın, örneğin belediyeden bir para cezası? O zaman yazılı olarak cevap verebilirsin (bezwaar maken). Mektup nasıl ve ne zamana kadar yapacağını yazar. O tarihten önce yap. Herkes yasa önünde eşittir. Polis seni sorgulamak mı istiyor? O zaman önce bir avukatla konuşma hakkın var. Bir avukattan ilk danışmanlık ücretsizdir, justitiehuis’te. Ayrımcılık mı? Unia yardım edebilir.', // nieuw, nalezen
  'be.c.police.p': 'Bu karara katılmıyorum. İtiraz ediyorum.', // nieuw, nalezen
  'be.c.police.s': 'Belediyeden mektupla bir para cezası alıyorsun. Bunun doğru olmadığını düşünüyorsun. Mektupta cevap için bir tarih var. Ne yaparsın?', // nieuw, nalezen
  'be.c.police.o1': 'Mektuptaki tarihten önce yazılı cevap ver.', // nieuw, nalezen
  'be.c.police.o2': 'Bir kere ara ve seni geri aramalarını bekle.', // nieuw, nalezen
  'be.c.police.o3': 'Bekle: o tarihten sonra kendiliğinden biter.', // nieuw, nalezen
  'be.c.police.w': 'Mektuptaki tarihten önce yazılı olarak cevap verirsin. O tarihten sonra çoğu zaman çok geçtir. Justitiehuis ilk danışmanlığı ücretsiz verir.', // nieuw, nalezen
};

export const pl: Gloss = {
  'be.u.society': 'Uczestnictwo w życiu Belgii', // nieuw, nalezen
  'be.l.council': 'Gmina (gemeente) i głosowanie', // nieuw, nalezen
  'be.w.stemmen': 'głosować', // nieuw, nalezen
  'be.w.gemeentehuis': 'urząd gminy (budynek)', // nieuw, nalezen
  'be.w.gemeenteraad': 'rada gminy (decyduje o twoim mieście)', // nieuw, nalezen
  'be.w.burgemeester': 'burmistrz', // nieuw, nalezen
  'be.w.oproepingsbrief': 'wezwanie do głosowania (list: gdzie i kiedy głosujesz)', // nieuw, nalezen
  'be.w.opkomstplicht': 'obowiązek pójścia na wybory', // nieuw, nalezen
  'be.s.council.1': 'Przeprowadzam się. Podaję gminie mój nowy adres.', // nieuw, nalezen
  'be.s.council.2': 'Czy mogę głosować w wyborach do rady gminy?', // nieuw, nalezen
  'be.s.council.3': 'Moje wezwanie do głosowania przyszło pocztą.', // nieuw, nalezen
  'be.c.council.q': 'Idziesz w niedzielę głosować?', // nieuw, nalezen
  'be.c.council.a': 'Tak. Mam wezwanie i dowód osobisty.', // nieuw, nalezen
  'be.l.police': 'Policja, sprzeciw i twoje prawa', // nieuw, nalezen
  'be.w.wijkagent': 'dzielnicowy (policjant z twojej okolicy)', // nieuw, nalezen
  'be.w.identiteitskaart': 'dowód osobisty (eID)', // nieuw, nalezen
  'be.w.boete': 'mandat, grzywna (pieniądze płacone jako kara)', // nieuw, nalezen
  'be.w.bezwaar': 'sprzeciw (piszesz, że się nie zgadzasz)', // nieuw, nalezen
  'be.w.advocaat': 'adwokat', // nieuw, nalezen
  'be.w.recht': 'prawo (to, co prawo pozwala ci robić lub dostać)', // nieuw, nalezen
  'be.s.police.1': 'Zawsze mam przy sobie dowód osobisty.', // nieuw, nalezen
  'be.s.police.2': 'Chcę złożyć sprzeciw.', // nieuw, nalezen
  'be.s.police.3': 'Chcę najpierw porozmawiać z adwokatem.', // nieuw, nalezen
  'be.c.police.q': 'Czy mogę zobaczyć pana/pani dowód osobisty?', // nieuw, nalezen
  'be.c.police.a': 'Tak, proszę. O co chodzi?', // nieuw, nalezen
  'be.c.council': 'Twoja gmina i kto może głosować', // nieuw, nalezen
  'be.c.council.b': 'Gmina (gemeente) prowadzi twój adres i wydaje ci dowód osobisty. Przeprowadzka? Zgłoś to w gminie nowego mieszkania w ciągu 8 dni roboczych. Potem dzielnicowy (wijkagent) przychodzi sprawdzić, czy tam mieszkasz. Co 6 lat są wybory do rady gminy (gemeenteraad). Mogą w nich głosować osoby z innego kraju UE, a osoby spoza UE po 5 latach legalnego pobytu. Najpierw trzeba zapisać się w gminie jako wyborca. We Flandrii głosowanie do rady gminy nie jest obowiązkowe. W innych wyborach Belgowie muszą iść głosować (opkomstplicht). Dostaniesz list (oproepingsbrief): weź go razem z dowodem osobistym. Nie wiesz? Zapytaj w gminie.', // nieuw, nalezen
  'be.c.council.p': 'Czy mogę głosować w wyborach do rady gminy? Czy muszę się najpierw zapisać?', // nieuw, nalezen
  'be.c.council.s': 'Pochodzisz z Maroka i od sześciu lat legalnie mieszkasz w Gandawie (Gent). Nie masz obywatelstwa belgijskiego. Wkrótce są wybory do rady gminy. Co jest prawdą?', // nieuw, nalezen
  'be.c.council.o1': 'Możesz głosować, gdy zapiszesz się w gminie.', // nieuw, nalezen
  'be.c.council.o2': 'Możesz też głosować do parlamentu federalnego.', // nieuw, nalezen
  'be.c.council.o3': 'Bez belgijskiego paszportu w ogóle nie możesz głosować.', // nieuw, nalezen
  'be.c.council.w': 'Po 5 latach legalnego pobytu możesz głosować do rady gminy. Najpierw trzeba zapisać się jako wyborca. Do parlamentu federalnego potrzebne jest obywatelstwo belgijskie.', // nieuw, nalezen
  'be.c.police': 'Twój dowód osobisty i twoje prawa', // nieuw, nalezen
  'be.c.police.b': 'Od 15. roku życia musisz zawsze mieć przy sobie dowód osobisty (lub kartę pobytu) i pokazać go, gdy prosi policja. Dostajesz list z decyzją, z którą się nie zgadzasz, na przykład mandat od gminy? Wtedy możesz odpowiedzieć na piśmie (bezwaar maken). W liście jest napisane, jak i do kiedy. Zrób to przed tą datą. Wszyscy są równi wobec prawa. Policja chce cię przesłuchać? Wtedy możesz najpierw porozmawiać z adwokatem. Pierwsza porada adwokata jest bezpłatna, w justitiehuis. Dyskryminacja? Unia może pomóc.', // nieuw, nalezen
  'be.c.police.p': 'Nie zgadzam się z tą decyzją. Składam sprzeciw.', // nieuw, nalezen
  'be.c.police.s': 'Dostajesz listem mandat od gminy. Myślisz, że to niesłuszne. W liście jest data na odpowiedź. Co robisz?', // nieuw, nalezen
  'be.c.police.o1': 'Odpowiadasz na piśmie, przed datą w liście.', // nieuw, nalezen
  'be.c.police.o2': 'Dzwonisz raz i czekasz, aż oddzwonią.', // nieuw, nalezen
  'be.c.police.o3': 'Czekasz: po tej dacie sprawa sama się skończy.', // nieuw, nalezen
  'be.c.police.w': 'Odpowiada się na piśmie, przed datą w liście. Po tej dacie często jest za późno. W justitiehuis pierwsza porada jest bezpłatna.', // nieuw, nalezen
};

export const ro: Gloss = {
  'be.u.society': 'Participarea în Belgia', // nieuw, nalezen
  'be.l.council': 'Primăria (gemeente) și votul', // nieuw, nalezen
  'be.w.stemmen': 'a vota', // nieuw, nalezen
  'be.w.gemeentehuis': 'clădirea primăriei', // nieuw, nalezen
  'be.w.gemeenteraad': 'consiliul local (decide pentru orașul tău)', // nieuw, nalezen
  'be.w.burgemeester': 'primarul', // nieuw, nalezen
  'be.w.oproepingsbrief': 'scrisoarea de convocare la vot (spune unde și când votezi)', // nieuw, nalezen
  'be.w.opkomstplicht': 'obligația de a merge la vot', // nieuw, nalezen
  'be.s.council.1': 'Mă mut. Îi dau primăriei noua mea adresă.', // nieuw, nalezen
  'be.s.council.2': 'Am voie să votez pentru consiliul local?', // nieuw, nalezen
  'be.s.council.3': 'Scrisoarea mea de convocare a venit prin poștă.', // nieuw, nalezen
  'be.c.council.q': 'Mergi duminică la vot?', // nieuw, nalezen
  'be.c.council.a': 'Da. Am scrisoarea de convocare și cartea de identitate.', // nieuw, nalezen
  'be.l.police': 'Poliția, contestația și drepturile tale', // nieuw, nalezen
  'be.w.wijkagent': 'polițistul de cartier', // nieuw, nalezen
  'be.w.identiteitskaart': 'cartea de identitate (eID)', // nieuw, nalezen
  'be.w.boete': 'amenda (bani pe care trebuie să-i plătești ca pedeapsă)', // nieuw, nalezen
  'be.w.bezwaar': 'contestația (spui în scris că nu ești de acord)', // nieuw, nalezen
  'be.w.advocaat': 'avocatul', // nieuw, nalezen
  'be.w.recht': 'dreptul (ce îți permite legea să faci sau să primești)', // nieuw, nalezen
  'be.s.police.1': 'Am mereu cartea de identitate la mine.', // nieuw, nalezen
  'be.s.police.2': 'Vreau să fac o contestație.', // nieuw, nalezen
  'be.s.police.3': 'Vreau să vorbesc mai întâi cu un avocat.', // nieuw, nalezen
  'be.c.police.q': 'Pot să vă văd cartea de identitate?', // nieuw, nalezen
  'be.c.police.a': 'Da, poftiți. Ce s-a întâmplat?', // nieuw, nalezen
  'be.c.council': 'Primăria ta și cine are voie să voteze', // nieuw, nalezen
  'be.c.council.b': 'Primăria (gemeente) îți ține adresa și îți dă cartea de identitate. Te muți? Anunță primăria noii locuințe în 8 zile lucrătoare. Apoi polițistul de cartier (wijkagent) vine să verifice că locuiești acolo. La fiecare 6 ani sunt alegeri pentru consiliul local (gemeenteraad). Pot vota oamenii din altă țară UE, iar cei din afara UE după 5 ani de ședere legală. Mai întâi te înscrii ca alegător la primărie. În Flandra votul pentru consiliul local nu este obligatoriu. La celelalte alegeri, belgienii trebuie să meargă la vot (opkomstplicht). Primești o scrisoare (oproepingsbrief): ia-o cu tine, împreună cu cartea de identitate. Nu ești sigur? Întreabă la primărie.', // nieuw, nalezen
  'be.c.council.p': 'Am voie să votez pentru consiliul local? Trebuie să mă înscriu mai întâi?', // nieuw, nalezen
  'be.c.council.s': 'Vii din Maroc și locuiești legal în Gent de șase ani. Nu ai cetățenie belgiană. În curând sunt alegeri pentru consiliul local. Ce este adevărat?', // nieuw, nalezen
  'be.c.council.o1': 'Ai voie să votezi, după ce te înscrii la primărie.', // nieuw, nalezen
  'be.c.council.o2': 'Ai voie să votezi și pentru parlamentul federal.', // nieuw, nalezen
  'be.c.council.o3': 'Fără pașaport belgian nu ai voie deloc să votezi.', // nieuw, nalezen
  'be.c.council.w': 'După 5 ani de ședere legală ai voie să votezi pentru consiliul local. Mai întâi trebuie să te înscrii ca alegător. Pentru parlamentul federal ai nevoie de cetățenie belgiană.', // nieuw, nalezen
  'be.c.police': 'Cartea de identitate și drepturile tale', // nieuw, nalezen
  'be.c.police.b': 'De la 15 ani trebuie să ai mereu la tine cartea de identitate (sau cartea de rezidență) și s-o arăți când îți cere poliția. Primești o scrisoare cu o decizie cu care nu ești de acord, de exemplu o amendă de la primărie? Atunci poți răspunde în scris (bezwaar maken). Scrisoarea spune cum și până când. Fă-o înainte de acea dată. Toți sunt egali în fața legii. Poliția vrea să te interogheze? Atunci ai dreptul să vorbești mai întâi cu un avocat. Primul sfat de la un avocat este gratuit, la justitiehuis. Discriminare? Unia te poate ajuta.', // nieuw, nalezen
  'be.c.police.p': 'Nu sunt de acord cu această decizie. Fac o contestație.', // nieuw, nalezen
  'be.c.police.s': 'Primești prin scrisoare o amendă de la primărie. Crezi că nu e corectă. Scrisoarea dă o dată pentru răspuns. Ce faci?', // nieuw, nalezen
  'be.c.police.o1': 'Răspunzi în scris, înainte de data din scrisoare.', // nieuw, nalezen
  'be.c.police.o2': 'Suni o dată și aștepți să te sune ei înapoi.', // nieuw, nalezen
  'be.c.police.o3': 'Aștepți: după acea dată, se termină de la sine.', // nieuw, nalezen
  'be.c.police.w': 'Răspunzi în scris, înainte de data din scrisoare. După acea dată e adesea prea târziu. La justitiehuis primul sfat este gratuit.', // nieuw, nalezen
};

export const bg: Gloss = {
  'be.u.society': 'Участие в живота на Белгия', // nieuw, nalezen
  'be.l.council': 'Общината (gemeente) и гласуването', // nieuw, nalezen
  'be.w.stemmen': 'гласувам', // nieuw, nalezen
  'be.w.gemeentehuis': 'сградата на общината', // nieuw, nalezen
  'be.w.gemeenteraad': 'общинският съвет (решава за твоя град)', // nieuw, nalezen
  'be.w.burgemeester': 'кметът', // nieuw, nalezen
  'be.w.oproepingsbrief': 'поканата за гласуване (писмо: къде и кога гласуваш)', // nieuw, nalezen
  'be.w.opkomstplicht': 'задължението да отидеш да гласуваш', // nieuw, nalezen
  'be.s.council.1': 'Местя се. Давам новия си адрес на общината.', // nieuw, nalezen
  'be.s.council.2': 'Мога ли да гласувам за общинския съвет?', // nieuw, nalezen
  'be.s.council.3': 'Поканата ми за гласуване дойде по пощата.', // nieuw, nalezen
  'be.c.council.q': 'Ще ходиш ли да гласуваш в неделя?', // nieuw, nalezen
  'be.c.council.a': 'Да. Имам поканата и личната си карта.', // nieuw, nalezen
  'be.l.police': 'Полицията, възражението и твоите права', // nieuw, nalezen
  'be.w.wijkagent': 'кварталният полицай', // nieuw, nalezen
  'be.w.identiteitskaart': 'личната карта (eID)', // nieuw, nalezen
  'be.w.boete': 'глобата (пари, които плащаш като наказание)', // nieuw, nalezen
  'be.w.bezwaar': 'възражението (казваш писмено, че не си съгласен)', // nieuw, nalezen
  'be.w.advocaat': 'адвокатът', // nieuw, nalezen
  'be.w.recht': 'правото (какво законът ти позволява да правиш или да получиш)', // nieuw, nalezen
  'be.s.police.1': 'Винаги нося личната си карта.', // nieuw, nalezen
  'be.s.police.2': 'Искам да подам възражение.', // nieuw, nalezen
  'be.s.police.3': 'Искам първо да говоря с адвокат.', // nieuw, nalezen
  'be.c.police.q': 'Може ли да видя личната ви карта?', // nieuw, nalezen
  'be.c.police.a': 'Да, ето я. Какво има?', // nieuw, nalezen
  'be.c.council': 'Твоята община и кой може да гласува', // nieuw, nalezen
  'be.c.council.b': 'Общината (gemeente) пази адреса ти и ти издава личната карта. Местиш се? Съобщи на общината на новото жилище до 8 работни дни. След това кварталният полицай (wijkagent) идва да провери, че живееш там. На всеки 6 години има избори за общински съвет (gemeenteraad). В тях могат да гласуват хора от друга страна от ЕС, а хора извън ЕС след 5 години законно пребиваване. Първо се записваш като избирател в общината. Във Фландрия гласуването за общинския съвет не е задължително. На другите избори белгийците трябва да отидат да гласуват (opkomstplicht). Получаваш писмо (oproepingsbrief): вземи го с личната си карта. Не си сигурен? Попитай в общината.', // nieuw, nalezen
  'be.c.council.p': 'Мога ли да гласувам за общинския съвет? Трябва ли първо да се запиша?', // nieuw, nalezen
  'be.c.council.s': 'Идваш от Мароко и от шест години живееш законно в Гент (Gent). Нямаш белгийско гражданство. Скоро има избори за общински съвет. Кое е вярно?', // nieuw, nalezen
  'be.c.council.o1': 'Можеш да гласуваш, след като се запишеш в общината.', // nieuw, nalezen
  'be.c.council.o2': 'Можеш да гласуваш и за федералния парламент.', // nieuw, nalezen
  'be.c.council.o3': 'Без белгийски паспорт изобщо не можеш да гласуваш.', // nieuw, nalezen
  'be.c.council.w': 'След 5 години законно пребиваване можеш да гласуваш за общинския съвет. Първо трябва да се запишеш като избирател. За федералния парламент трябва белгийско гражданство.', // nieuw, nalezen
  'be.c.police': 'Личната ти карта и твоите права', // nieuw, nalezen
  'be.c.police.b': 'От 15 години трябва винаги да носиш личната си карта (или картата за пребиваване) и да я показваш, когато полицията поиска. Получаваш писмо с решение, с което не си съгласен, например глоба от общината? Тогава можеш да отговориш писмено (bezwaar maken). В писмото пише как и до кога. Направи го преди тази дата. Всички са равни пред закона. Полицията иска да те разпита? Тогава имаш право първо да говориш с адвокат. Първият съвет от адвокат е безплатен, в justitiehuis. Дискриминация? Unia може да помогне.', // nieuw, nalezen
  'be.c.police.p': 'Не съм съгласен с това решение. Подавам възражение.', // nieuw, nalezen
  'be.c.police.s': 'Получаваш с писмо глоба от общината. Мислиш, че не е правилна. В писмото има дата за отговор. Какво правиш?', // nieuw, nalezen
  'be.c.police.o1': 'Отговаряш писмено, преди датата в писмото.', // nieuw, nalezen
  'be.c.police.o2': 'Обаждаш се веднъж и чакаш да ти се обадят.', // nieuw, nalezen
  'be.c.police.o3': 'Чакаш: след тази дата всичко спира само.', // nieuw, nalezen
  'be.c.police.w': 'Отговаря се писмено, преди датата в писмото. След нея често е твърде късно. В justitiehuis първият съвет е безплатен.', // nieuw, nalezen
};

export const es: Gloss = {
  'be.u.society': 'Participar en Bélgica', // nieuw, nalezen
  'be.l.council': 'El ayuntamiento (gemeente) y votar', // nieuw, nalezen
  'be.w.stemmen': 'votar', // nieuw, nalezen
  'be.w.gemeentehuis': 'el edificio del ayuntamiento', // nieuw, nalezen
  'be.w.gemeenteraad': 'el concejo municipal (decide sobre tu ciudad)', // nieuw, nalezen
  'be.w.burgemeester': 'el alcalde', // nieuw, nalezen
  'be.w.oproepingsbrief': 'la carta de convocatoria (dice dónde y cuándo votas)', // nieuw, nalezen
  'be.w.opkomstplicht': 'la obligación de ir a votar', // nieuw, nalezen
  'be.s.council.1': 'Me mudo. Doy mi nueva dirección al ayuntamiento.', // nieuw, nalezen
  'be.s.council.2': '¿Puedo votar para el concejo municipal?', // nieuw, nalezen
  'be.s.council.3': 'Mi carta de convocatoria llegó por correo.', // nieuw, nalezen
  'be.c.council.q': '¿Vas a votar el domingo?', // nieuw, nalezen
  'be.c.council.a': 'Sí. Tengo mi carta de convocatoria y mi carné de identidad.', // nieuw, nalezen
  'be.l.police': 'La policía, recurrir y tus derechos', // nieuw, nalezen
  'be.w.wijkagent': 'el policía de barrio', // nieuw, nalezen
  'be.w.identiteitskaart': 'el carné de identidad (eID)', // nieuw, nalezen
  'be.w.boete': 'la multa (dinero que pagas como castigo)', // nieuw, nalezen
  'be.w.bezwaar': 'el recurso (dices por escrito que no estás de acuerdo)', // nieuw, nalezen
  'be.w.advocaat': 'el abogado', // nieuw, nalezen
  'be.w.recht': 'el derecho (lo que la ley te deja hacer o recibir)', // nieuw, nalezen
  'be.s.police.1': 'Siempre llevo mi carné de identidad.', // nieuw, nalezen
  'be.s.police.2': 'Quiero presentar un recurso.', // nieuw, nalezen
  'be.s.police.3': 'Quiero hablar primero con un abogado.', // nieuw, nalezen
  'be.c.police.q': '¿Puedo ver su carné de identidad?', // nieuw, nalezen
  'be.c.police.a': 'Sí, aquí lo tiene. ¿Qué pasa?', // nieuw, nalezen
  'be.c.council': 'Tu ayuntamiento, y quién puede votar', // nieuw, nalezen
  'be.c.council.b': 'El ayuntamiento (gemeente) guarda tu dirección y te da el carné de identidad. ¿Te mudas? Avisa al ayuntamiento de tu nueva casa en 8 días laborables. Después el policía de barrio (wijkagent) viene a comprobar que vives allí. Cada 6 años hay elecciones al concejo municipal (gemeenteraad). Pueden votar las personas de otro país de la UE, y las de fuera de la UE tras 5 años de residencia legal. Primero te inscribes como votante en el ayuntamiento. En Flandes, votar para el concejo municipal no es obligatorio. En las demás elecciones, los belgas deben ir a votar (opkomstplicht). Recibes una carta (oproepingsbrief): llévala con tu carné de identidad. ¿No lo sabes seguro? Pregunta en el ayuntamiento.', // nieuw, nalezen
  'be.c.council.p': '¿Puedo votar para el concejo municipal? ¿Tengo que inscribirme primero?', // nieuw, nalezen
  'be.c.council.s': 'Vienes de Marruecos y vives legalmente en Gante (Gent) desde hace seis años. No tienes la nacionalidad belga. Pronto hay elecciones al concejo municipal. ¿Qué es verdad?', // nieuw, nalezen
  'be.c.council.o1': 'Puedes votar, después de inscribirte en el ayuntamiento.', // nieuw, nalezen
  'be.c.council.o2': 'También puedes votar para el parlamento federal.', // nieuw, nalezen
  'be.c.council.o3': 'Sin pasaporte belga no puedes votar en nada.', // nieuw, nalezen
  'be.c.council.w': 'Tras 5 años de residencia legal puedes votar para el concejo municipal. Primero tienes que inscribirte como votante. Para el parlamento federal necesitas la nacionalidad belga.', // nieuw, nalezen
  'be.c.police': 'Tu carné de identidad y tus derechos', // nieuw, nalezen
  'be.c.police.b': 'Desde los 15 años debes llevar siempre tu carné de identidad (o tu tarjeta de residencia) y enseñarlo cuando la policía lo pida. ¿Recibes una carta con una decisión con la que no estás de acuerdo, por ejemplo una multa del ayuntamiento? Entonces puedes responder por escrito (bezwaar maken). La carta dice cómo y hasta cuándo. Hazlo antes de esa fecha. Todos son iguales ante la ley. ¿La policía quiere interrogarte? Entonces puedes hablar primero con un abogado. El primer consejo de un abogado es gratis, en el justitiehuis. ¿Discriminación? Unia puede ayudar.', // nieuw, nalezen
  'be.c.police.p': 'No estoy de acuerdo con esta decisión. Presento un recurso.', // nieuw, nalezen
  'be.c.police.s': 'Recibes por carta una multa del ayuntamiento. Crees que no es justa. La carta da una fecha para responder. ¿Qué haces?', // nieuw, nalezen
  'be.c.police.o1': 'Respondes por escrito, antes de la fecha de la carta.', // nieuw, nalezen
  'be.c.police.o2': 'Llamas una vez y esperas a que te llamen.', // nieuw, nalezen
  'be.c.police.o3': 'Esperas: después de esa fecha, se acaba solo.', // nieuw, nalezen
  'be.c.police.w': 'Se responde por escrito, antes de la fecha de la carta. Después de esa fecha suele ser tarde. El justitiehuis da un primer consejo gratis.', // nieuw, nalezen
};

export const pt: Gloss = {
  'be.u.society': 'Participar na Bélgica', // nieuw, nalezen
  'be.l.council': 'A câmara municipal (gemeente) e votar', // nieuw, nalezen
  'be.w.stemmen': 'votar', // nieuw, nalezen
  'be.w.gemeentehuis': 'o edifício da câmara municipal', // nieuw, nalezen
  'be.w.gemeenteraad': 'a assembleia municipal (decide sobre a tua cidade)', // nieuw, nalezen
  'be.w.burgemeester': 'o presidente da câmara', // nieuw, nalezen
  'be.w.oproepingsbrief': 'a carta de convocatória (diz onde e quando votas)', // nieuw, nalezen
  'be.w.opkomstplicht': 'a obrigação de ir votar', // nieuw, nalezen
  'be.s.council.1': 'Vou mudar de casa. Dou a minha nova morada à câmara.', // nieuw, nalezen
  'be.s.council.2': 'Posso votar para a assembleia municipal?', // nieuw, nalezen
  'be.s.council.3': 'A minha carta de convocatória chegou pelo correio.', // nieuw, nalezen
  'be.c.council.q': 'Vais votar no domingo?', // nieuw, nalezen
  'be.c.council.a': 'Sim. Tenho a carta de convocatória e o meu cartão de identidade.', // nieuw, nalezen
  'be.l.police': 'A polícia, reclamar e os teus direitos', // nieuw, nalezen
  'be.w.wijkagent': 'o polícia de bairro', // nieuw, nalezen
  'be.w.identiteitskaart': 'o cartão de identidade (eID)', // nieuw, nalezen
  'be.w.boete': 'a multa (dinheiro que pagas como castigo)', // nieuw, nalezen
  'be.w.bezwaar': 'a reclamação (dizes por escrito que não concordas)', // nieuw, nalezen
  'be.w.advocaat': 'o advogado', // nieuw, nalezen
  'be.w.recht': 'o direito (o que a lei te deixa fazer ou receber)', // nieuw, nalezen
  'be.s.police.1': 'Tenho sempre o meu cartão de identidade comigo.', // nieuw, nalezen
  'be.s.police.2': 'Quero apresentar uma reclamação.', // nieuw, nalezen
  'be.s.police.3': 'Quero falar primeiro com um advogado.', // nieuw, nalezen
  'be.c.police.q': 'Posso ver o seu cartão de identidade?', // nieuw, nalezen
  'be.c.police.a': 'Sim, aqui está. O que se passa?', // nieuw, nalezen
  'be.c.council': 'A tua câmara municipal, e quem pode votar', // nieuw, nalezen
  'be.c.council.b': 'A câmara municipal (gemeente) guarda a tua morada e dá-te o cartão de identidade. Vais mudar de casa? Avisa a câmara da tua nova casa em 8 dias úteis. Depois o polícia de bairro (wijkagent) vem verificar que vives lá. A cada 6 anos há eleições para a assembleia municipal (gemeenteraad). Podem votar pessoas de outro país da UE, e pessoas de fora da UE após 5 anos de residência legal. Primeiro inscreves-te como eleitor na câmara. Na Flandres, votar para a assembleia municipal não é obrigatório. Nas outras eleições, os belgas têm de ir votar (opkomstplicht). Recebes uma carta (oproepingsbrief): leva-a com o teu cartão de identidade. Não tens a certeza? Pergunta na câmara.', // nieuw, nalezen
  'be.c.council.p': 'Posso votar para a assembleia municipal? Tenho de me inscrever primeiro?', // nieuw, nalezen
  'be.c.council.s': 'Vens de Marrocos e vives legalmente em Gante (Gent) há seis anos. Não tens nacionalidade belga. Em breve há eleições para a assembleia municipal. O que é verdade?', // nieuw, nalezen
  'be.c.council.o1': 'Podes votar, depois de te inscreveres na câmara.', // nieuw, nalezen
  'be.c.council.o2': 'Também podes votar para o parlamento federal.', // nieuw, nalezen
  'be.c.council.o3': 'Sem passaporte belga não podes votar em nada.', // nieuw, nalezen
  'be.c.council.w': 'Após 5 anos de residência legal podes votar para a assembleia municipal. Primeiro tens de te inscrever como eleitor. Para o parlamento federal precisas da nacionalidade belga.', // nieuw, nalezen
  'be.c.police': 'O teu cartão de identidade e os teus direitos', // nieuw, nalezen
  'be.c.police.b': 'A partir dos 15 anos tens de andar sempre com o cartão de identidade (ou o cartão de residência) e mostrá-lo quando a polícia pedir. Recebes uma carta com uma decisão com que não concordas, por exemplo uma multa da câmara? Então podes responder por escrito (bezwaar maken). A carta diz como e até quando. Fá-lo antes dessa data. Todos são iguais perante a lei. A polícia quer interrogar-te? Então podes falar primeiro com um advogado. O primeiro conselho de um advogado é grátis, no justitiehuis. Discriminação? A Unia pode ajudar.', // nieuw, nalezen
  'be.c.police.p': 'Não concordo com esta decisão. Apresento uma reclamação.', // nieuw, nalezen
  'be.c.police.s': 'Recebes por carta uma multa da câmara. Achas que não está certa. A carta dá uma data para responder. O que fazes?', // nieuw, nalezen
  'be.c.police.o1': 'Respondes por escrito, antes da data da carta.', // nieuw, nalezen
  'be.c.police.o2': 'Ligas uma vez e esperas que te liguem de volta.', // nieuw, nalezen
  'be.c.police.o3': 'Esperas: depois dessa data, acaba sozinho.', // nieuw, nalezen
  'be.c.police.w': 'Responde-se por escrito, antes da data da carta. Depois dessa data, muitas vezes é tarde. O justitiehuis dá um primeiro conselho grátis.', // nieuw, nalezen
};

export const fr: Gloss = {
  'be.u.society': 'Participer en Belgique', // nieuw, nalezen
  'be.l.council': 'La commune (gemeente) et voter', // nieuw, nalezen
  'be.w.stemmen': 'voter', // nieuw, nalezen
  'be.w.gemeentehuis': 'la maison communale', // nieuw, nalezen
  'be.w.gemeenteraad': 'le conseil communal (il décide pour ta ville)', // nieuw, nalezen
  'be.w.burgemeester': 'le bourgmestre', // nieuw, nalezen
  'be.w.oproepingsbrief': 'la convocation électorale (elle dit où et quand tu votes)', // nieuw, nalezen
  'be.w.opkomstplicht': 'l’obligation d’aller voter', // nieuw, nalezen
  'be.s.council.1': 'Je déménage. Je donne ma nouvelle adresse à la commune.', // nieuw, nalezen
  'be.s.council.2': 'Est-ce que je peux voter pour le conseil communal ?', // nieuw, nalezen
  'be.s.council.3': 'Ma convocation est arrivée par la poste.', // nieuw, nalezen
  'be.c.council.q': 'Tu vas voter dimanche ?', // nieuw, nalezen
  'be.c.council.a': 'Oui. J’ai ma convocation et ma carte d’identité.', // nieuw, nalezen
  'be.l.police': 'La police, contester et tes droits', // nieuw, nalezen
  'be.w.wijkagent': 'l’agent de quartier', // nieuw, nalezen
  'be.w.identiteitskaart': 'la carte d’identité (eID)', // nieuw, nalezen
  'be.w.boete': 'l’amende (de l’argent à payer comme punition)', // nieuw, nalezen
  'be.w.bezwaar': 'la réclamation (tu dis par écrit que tu n’es pas d’accord)', // nieuw, nalezen
  'be.w.advocaat': 'l’avocat', // nieuw, nalezen
  'be.w.recht': 'le droit (ce que la loi te permet de faire ou de recevoir)', // nieuw, nalezen
  'be.s.police.1': 'J’ai toujours ma carte d’identité sur moi.', // nieuw, nalezen
  'be.s.police.2': 'Je veux faire une réclamation.', // nieuw, nalezen
  'be.s.police.3': 'Je veux d’abord parler à un avocat.', // nieuw, nalezen
  'be.c.police.q': 'Je peux voir votre carte d’identité ?', // nieuw, nalezen
  'be.c.police.a': 'Oui, la voici. Qu’est-ce qui se passe ?', // nieuw, nalezen
  'be.c.council': 'Ta commune, et qui peut voter', // nieuw, nalezen
  'be.c.council.b': 'La commune (gemeente) garde ton adresse et te donne ta carte d’identité. Tu déménages ? Préviens la commune de ton nouveau logement dans les 8 jours ouvrables. Ensuite, l’agent de quartier (wijkagent) vient vérifier que tu habites là. Tous les 6 ans, il y a des élections pour le conseil communal (gemeenteraad). Les personnes d’un autre pays de l’UE peuvent y voter, et celles de hors UE après 5 ans de séjour légal. D’abord, tu t’inscris comme électeur à la commune. En Flandre, voter pour le conseil communal n’est pas obligatoire. Pour les autres élections, les Belges doivent aller voter (opkomstplicht). Tu reçois une lettre (oproepingsbrief) : apporte-la avec ta carte d’identité. Pas sûr ? Demande à la commune.', // nieuw, nalezen
  'be.c.council.p': 'Est-ce que je peux voter pour le conseil communal ? Je dois d’abord m’inscrire ?', // nieuw, nalezen
  'be.c.council.s': 'Tu viens du Maroc et tu habites légalement à Gand (Gent) depuis six ans. Tu n’as pas la nationalité belge. Il y a bientôt des élections communales. Qu’est-ce qui est vrai ?', // nieuw, nalezen
  'be.c.council.o1': 'Tu peux voter, après ton inscription à la commune.', // nieuw, nalezen
  'be.c.council.o2': 'Tu peux aussi voter pour le parlement fédéral.', // nieuw, nalezen
  'be.c.council.o3': 'Sans passeport belge, tu ne peux pas voter du tout.', // nieuw, nalezen
  'be.c.council.w': 'Après 5 ans de séjour légal, tu peux voter pour le conseil communal. Tu dois d’abord t’inscrire comme électeur. Pour le parlement fédéral, il faut la nationalité belge.', // nieuw, nalezen
  'be.c.police': 'Ta carte d’identité et tes droits', // nieuw, nalezen
  'be.c.police.b': 'Dès 15 ans, tu dois toujours avoir sur toi ta carte d’identité (ou ta carte de séjour) et la montrer quand la police la demande. Tu reçois une lettre avec une décision avec laquelle tu n’es pas d’accord, par exemple une amende de la commune ? Alors tu peux répondre par écrit (bezwaar maken). La lettre dit comment et jusqu’à quand. Fais-le avant cette date. Tout le monde est égal devant la loi. La police veut t’interroger ? Alors tu peux d’abord parler à un avocat. Un premier conseil d’un avocat est gratuit, au justitiehuis (maison de justice). Discrimination ? Unia peut aider.', // nieuw, nalezen
  'be.c.police.p': 'Je ne suis pas d’accord avec cette décision. Je fais une réclamation.', // nieuw, nalezen
  'be.c.police.s': 'Tu reçois par lettre une amende de la commune. Tu penses qu’elle n’est pas juste. La lettre donne une date pour répondre. Que fais-tu ?', // nieuw, nalezen
  'be.c.police.o1': 'Répondre par écrit, avant la date de la lettre.', // nieuw, nalezen
  'be.c.police.o2': 'Appeler une fois, et attendre qu’ils rappellent.', // nieuw, nalezen
  'be.c.police.o3': 'Attendre : après cette date, ça s’arrête tout seul.', // nieuw, nalezen
  'be.c.police.w': 'On répond par écrit, avant la date de la lettre. Après cette date, il est souvent trop tard. Le justitiehuis donne un premier conseil gratuit.', // nieuw, nalezen
};

export const de: Gloss = {
  'be.u.society': 'Mitmachen in Belgien', // nieuw, nalezen
  'be.l.council': 'Die Gemeinde (gemeente) und Wählen', // nieuw, nalezen
  'be.w.stemmen': 'wählen (seine Stimme abgeben)', // nieuw, nalezen
  'be.w.gemeentehuis': 'das Gemeindehaus (Rathaus)', // nieuw, nalezen
  'be.w.gemeenteraad': 'der Gemeinderat (er entscheidet über deinen Ort)', // nieuw, nalezen
  'be.w.burgemeester': 'der Bürgermeister', // nieuw, nalezen
  'be.w.oproepingsbrief': 'die Wahlaufforderung (Brief: wo und wann du wählst)', // nieuw, nalezen
  'be.w.opkomstplicht': 'die Pflicht, wählen zu gehen', // nieuw, nalezen
  'be.s.council.1': 'Ich ziehe um. Ich gebe der Gemeinde meine neue Adresse.', // nieuw, nalezen
  'be.s.council.2': 'Darf ich für den Gemeinderat wählen?', // nieuw, nalezen
  'be.s.council.3': 'Meine Wahlaufforderung kam mit der Post.', // nieuw, nalezen
  'be.c.council.q': 'Gehst du am Sonntag wählen?', // nieuw, nalezen
  'be.c.council.a': 'Ja. Ich habe meine Wahlaufforderung und meinen Personalausweis.', // nieuw, nalezen
  'be.l.police': 'Polizei, Widerspruch und deine Rechte', // nieuw, nalezen
  'be.w.wijkagent': 'der Bezirkspolizist (die Polizei deines Viertels)', // nieuw, nalezen
  'be.w.identiteitskaart': 'der Personalausweis (eID)', // nieuw, nalezen
  'be.w.boete': 'das Bußgeld (Geld, das du als Strafe zahlen musst)', // nieuw, nalezen
  'be.w.bezwaar': 'der Widerspruch (du sagst schriftlich, dass du nicht einverstanden bist)', // nieuw, nalezen
  'be.w.advocaat': 'der Anwalt', // nieuw, nalezen
  'be.w.recht': 'das Recht (was das Gesetz dir zu tun oder zu bekommen erlaubt)', // nieuw, nalezen
  'be.s.police.1': 'Ich habe meinen Personalausweis immer dabei.', // nieuw, nalezen
  'be.s.police.2': 'Ich will Widerspruch einlegen.', // nieuw, nalezen
  'be.s.police.3': 'Ich will zuerst mit einem Anwalt sprechen.', // nieuw, nalezen
  'be.c.police.q': 'Darf ich Ihren Personalausweis sehen?', // nieuw, nalezen
  'be.c.police.a': 'Ja, hier ist er. Was ist los?', // nieuw, nalezen
  'be.c.council': 'Deine Gemeinde, und wer wählen darf', // nieuw, nalezen
  'be.c.council.b': 'Die Gemeinde (gemeente) führt deine Adresse und gibt dir deinen Personalausweis. Du ziehst um? Melde es der Gemeinde deiner neuen Wohnung innerhalb von 8 Werktagen. Dann kommt der Bezirkspolizist (wijkagent) und prüft, ob du dort wohnst. Alle 6 Jahre gibt es eine Wahl zum Gemeinderat (gemeenteraad). Menschen aus einem anderen EU-Land dürfen dabei wählen, und Menschen von außerhalb der EU nach 5 Jahren legalem Aufenthalt. Zuerst lässt du dich bei der Gemeinde als Wähler eintragen. In Flandern musst du für den Gemeinderat nicht wählen. Bei den anderen Wahlen müssen Belgier wählen gehen (opkomstplicht). Du bekommst einen Brief (oproepingsbrief): Bring ihn mit deinem Personalausweis mit. Nicht sicher? Frag die Gemeinde.', // nieuw, nalezen
  'be.c.council.p': 'Darf ich für den Gemeinderat wählen? Muss ich mich zuerst eintragen?', // nieuw, nalezen
  'be.c.council.s': 'Du kommst aus Marokko und wohnst seit sechs Jahren legal in Gent. Du bist kein Belgier. Bald gibt es eine Wahl zum Gemeinderat. Was stimmt?', // nieuw, nalezen
  'be.c.council.o1': 'Du darfst wählen, wenn du dich bei der Gemeinde einträgst.', // nieuw, nalezen
  'be.c.council.o2': 'Du darfst auch für das föderale Parlament wählen.', // nieuw, nalezen
  'be.c.council.o3': 'Ohne belgischen Pass darfst du gar nicht wählen.', // nieuw, nalezen
  'be.c.council.w': 'Nach 5 Jahren legalem Aufenthalt darfst du für den Gemeinderat wählen. Zuerst musst du dich als Wähler eintragen. Für das föderale Parlament brauchst du die belgische Staatsangehörigkeit.', // nieuw, nalezen
  'be.c.police': 'Dein Personalausweis und deine Rechte', // nieuw, nalezen
  'be.c.police.b': 'Ab 15 musst du deinen Personalausweis (oder deine Aufenthaltskarte) immer dabeihaben und zeigen, wenn die Polizei danach fragt. Du bekommst einen Brief mit einer Entscheidung, mit der du nicht einverstanden bist, zum Beispiel ein Bußgeld der Gemeinde? Dann kannst du schriftlich antworten (bezwaar maken). Im Brief steht, wie und bis wann. Mach es vor diesem Datum. Alle sind vor dem Gesetz gleich. Die Polizei will dich befragen? Dann darfst du zuerst mit einem Anwalt sprechen. Eine erste Beratung durch einen Anwalt ist kostenlos, im Justitiehuis. Diskriminierung? Unia kann helfen.', // nieuw, nalezen
  'be.c.police.p': 'Ich bin mit dieser Entscheidung nicht einverstanden. Ich lege Widerspruch ein.', // nieuw, nalezen
  'be.c.police.s': 'Du bekommst von der Gemeinde ein Bußgeld per Brief. Du findest es nicht richtig. Im Brief steht ein Datum für die Antwort. Was machst du?', // nieuw, nalezen
  'be.c.police.o1': 'Du antwortest schriftlich, vor dem Datum im Brief.', // nieuw, nalezen
  'be.c.police.o2': 'Du rufst einmal an und wartest auf einen Rückruf.', // nieuw, nalezen
  'be.c.police.o3': 'Du wartest: Nach diesem Datum ist es von selbst vorbei.', // nieuw, nalezen
  'be.c.police.w': 'Man antwortet schriftlich, vor dem Datum im Brief. Danach ist es oft zu spät. Das Justitiehuis gibt eine erste Beratung kostenlos.', // nieuw, nalezen
};
