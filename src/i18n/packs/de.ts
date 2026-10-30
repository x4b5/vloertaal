import base from '../de';
import culture from '../culture/de';
import work from '../work/de';
import about from '../about/de';
import learn from '../learn/de';
import sayings from '../sayings/de';
import sounds from '../sounds/de';
import type { LanguagePack } from './types';

/** Everything in one help language, loaded on demand as its own file (src/i18n/index.ts ensureLanguage). */
const pack: LanguagePack = { base, culture, work, about, learn, sayings, sounds, url: import.meta.url };
export default pack;
