import base from '../uk';
import culture from '../culture/uk';
import work from '../work/uk';
import about from '../about/uk';
import learn from '../learn/uk';
import sayings from '../sayings/uk';
import sounds from '../sounds/uk';
import kunJeNu from '../kunjenu/uk';
import be from '../be/uk';
import notices from '../notices/uk';
import type { LanguagePack } from './types';

/** Everything in one help language, loaded on demand as its own file (src/i18n/index.ts ensureLanguage). */
const pack: LanguagePack = { base, culture, work, about, learn, sayings, sounds, kunJeNu, be, notices, url: import.meta.url };
export default pack;
