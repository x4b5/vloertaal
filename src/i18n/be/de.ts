import type { CultureTranslation } from '../culture/types';
import { de as base } from './base';
import { de as firstday } from './units/firstday';
import { de as tools } from './units/tools';
import { de as safety } from './units/safety';
import { de as warehouse } from './units/warehouse';
import { de as data } from './units/data';
import { de as time } from './units/time';
import { de as teamwork } from './units/teamwork';
import { de as contract } from './units/contract';
import { de as papers } from './units/papers';
import { de as pay } from './units/pay';
import { de as house } from './units/house';
import { de as sayings } from './units/sayings';
import { de as social } from './units/social';
import { de as rights } from './units/rights';
import { de as leave } from './units/leave';
import { de as exploit } from './units/exploit';
import { de as grow } from './units/grow';
import { de as health } from './units/health';
import { de as money } from './units/money';
import { de as travel } from './units/travel';
import { de as lost } from './units/lost';
import { de as shop } from './units/shop';
import { de as ai } from './units/ai';
import { de as kas } from './units/kas';
import { de as stage } from './units/stage';
import { de as society } from './units/society';
import { de as online } from './units/online';

/**
 * The Belgian language track in this help language (docs/taal-belgie.md): the shared texts
 * (./base.ts) and every unit's own file (./units). Loaded with the language's pack. A content
 * agent changes only its own unit files, never this one.
 */
const texts: CultureTranslation = { ui: base.ui, gloss: { ...base.gloss, ...firstday, ...tools, ...safety, ...warehouse, ...data, ...time, ...teamwork, ...contract, ...papers, ...pay, ...house, ...social, ...sayings, ...rights, ...leave, ...exploit, ...grow, ...health, ...money, ...travel, ...lost, ...shop, ...ai, ...kas, ...stage, ...society, ...online } };
export default texts;
