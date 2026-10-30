import base from '../ti';
import culture from '../culture/ti';
import work from '../work/ti';
import about from '../about/ti';
import learn from '../learn/ti';
import sayings from '../sayings/ti';
import sounds from '../sounds/ti';
import kunJeNu from '../kunjenu/ti';
import type { LanguagePack } from './types';

/** Everything in one help language, loaded on demand as its own file (src/i18n/index.ts ensureLanguage). */
const pack: LanguagePack = { base, culture, work, about, learn, sayings, sounds, kunJeNu, url: import.meta.url };
export default pack;
