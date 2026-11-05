import base from '../so';
import culture from '../culture/so';
import work from '../work/so';
import about from '../about/so';
import learn from '../learn/so';
import sayings from '../sayings/so';
import sounds from '../sounds/so';
import kunJeNu from '../kunjenu/so';
import be from '../be/so';
import notices from '../notices/so';
import type { LanguagePack } from './types';

/** Everything in one help language, loaded on demand as its own file (src/i18n/index.ts ensureLanguage). */
const pack: LanguagePack = { base, culture, work, about, learn, sayings, sounds, kunJeNu, be, notices, url: import.meta.url };
export default pack;
