import base from '../pt';
import culture from '../culture/pt';
import work from '../work/pt';
import about from '../about/pt';
import learn from '../learn/pt';
import sayings from '../sayings/pt';
import sounds from '../sounds/pt';
import kunJeNu from '../kunjenu/pt';
import type { LanguagePack } from './types';

/** Everything in one help language, loaded on demand as its own file (src/i18n/index.ts ensureLanguage). */
const pack: LanguagePack = { base, culture, work, about, learn, sayings, sounds, kunJeNu, url: import.meta.url };
export default pack;
