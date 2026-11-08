import type { CultureTranslation } from '../culture/types';
import { so as base } from './base';
import { so as firstday } from './units/firstday';
import { so as tools } from './units/tools';
import { so as emergency } from './units/emergency';
import { so as warehouse } from './units/warehouse';
import { so as data } from './units/data';
import { so as time } from './units/time';
import { so as teamwork } from './units/teamwork';
import { so as contract } from './units/contract';
import { so as papers } from './units/papers';
import { so as pay } from './units/pay';
import { so as house } from './units/house';
import { so as sayings } from './units/sayings';
import { so as social } from './units/social';
import { so as rights } from './units/rights';
import { so as leave } from './units/leave';
import { so as sick } from './units/sick';
import { so as exploit } from './units/exploit';
import { so as grow } from './units/grow';
import { so as health } from './units/health';
import { so as money } from './units/money';
import { so as travel } from './units/travel';
import { so as lost } from './units/lost';
import { so as shop } from './units/shop';
import { so as ai } from './units/ai';
import { so as kas } from './units/kas';
import { so as stage } from './units/stage';
import { so as society } from './units/society';
import { so as online } from './units/online';

/**
 * The Belgian language track in this help language (docs/taal-belgie.md): the shared texts
 * (./base.ts) and every unit's own file (./units). Loaded with the language's pack. A content
 * agent changes only its own unit files, never this one.
 */
const texts: CultureTranslation = { ui: base.ui, gloss: { ...base.gloss, ...firstday, ...tools, ...emergency, ...warehouse, ...data, ...time, ...teamwork, ...contract, ...papers, ...pay, ...house, ...social, ...sayings, ...rights, ...leave, ...sick, ...exploit, ...grow, ...health, ...money, ...travel, ...lost, ...shop, ...ai, ...kas, ...stage, ...society, ...online } };
export default texts;
