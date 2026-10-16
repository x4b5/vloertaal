import base from '../fa';
import culture from '../culture/fa';
import work from '../work/fa';
import about from '../about/fa';
import learn from '../learn/fa';
import sayings from '../sayings/fa';
import sounds from '../sounds/fa';
import type { LanguagePack } from './types';

/** Everything in one help language, loaded on demand as its own file (src/i18n/index.ts ensureLanguage). */
const pack: LanguagePack = { base, culture, work, about, learn, sayings, sounds, url: import.meta.url };
export default pack;
