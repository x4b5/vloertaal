import base from '../fr';
import culture from '../culture/fr';
import work from '../work/fr';
import about from '../about/fr';
import learn from '../learn/fr';
import sayings from '../sayings/fr';
import sounds from '../sounds/fr';
import kunJeNu from '../kunjenu/fr';
import be from '../be/fr';
import notices from '../notices/fr';
import type { LanguagePack } from './types';

/** Everything in one help language, loaded on demand as its own file (src/i18n/index.ts ensureLanguage). */
const pack: LanguagePack = { base, culture, work, about, learn, sayings, sounds, kunJeNu, be, notices, url: import.meta.url };
export default pack;
