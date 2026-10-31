import base from '../bg';
import culture from '../culture/bg';
import work from '../work/bg';
import about from '../about/bg';
import learn from '../learn/bg';
import sayings from '../sayings/bg';
import sounds from '../sounds/bg';
import kunJeNu from '../kunjenu/bg';
import be from '../be/bg';
import notices from '../notices/bg';
import type { LanguagePack } from './types';

/** Everything in one help language, loaded on demand as its own file (src/i18n/index.ts ensureLanguage). */
const pack: LanguagePack = { base, culture, work, about, learn, sayings, sounds, kunJeNu, be, notices, url: import.meta.url };
export default pack;
