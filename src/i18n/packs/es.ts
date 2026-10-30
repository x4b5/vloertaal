import base from '../es';
import culture from '../culture/es';
import work from '../work/es';
import about from '../about/es';
import learn from '../learn/es';
import sayings from '../sayings/es';
import sounds from '../sounds/es';
import type { LanguagePack } from './types';

/** Everything in one help language, loaded on demand as its own file (src/i18n/index.ts ensureLanguage). */
const pack: LanguagePack = { base, culture, work, about, learn, sayings, sounds, url: import.meta.url };
export default pack;
