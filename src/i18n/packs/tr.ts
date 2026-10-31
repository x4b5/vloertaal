import base from '../tr';
import culture from '../culture/tr';
import work from '../work/tr';
import about from '../about/tr';
import learn from '../learn/tr';
import sayings from '../sayings/tr';
import sounds from '../sounds/tr';
import kunJeNu from '../kunjenu/tr';
import be from '../be/tr';
import notices from '../notices/tr';
import type { LanguagePack } from './types';

/** Everything in one help language, loaded on demand as its own file (src/i18n/index.ts ensureLanguage). */
const pack: LanguagePack = { base, culture, work, about, learn, sayings, sounds, kunJeNu, be, notices, url: import.meta.url };
export default pack;
