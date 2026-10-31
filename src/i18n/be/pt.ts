import type { CultureTranslation } from '../culture/types';
import { pt as base } from './base';
import { pt as firstday } from './units/firstday';
import { pt as tools } from './units/tools';
import { pt as safety } from './units/safety';
import { pt as warehouse } from './units/warehouse';
import { pt as data } from './units/data';
import { pt as time } from './units/time';
import { pt as teamwork } from './units/teamwork';
import { pt as contract } from './units/contract';
import { pt as papers } from './units/papers';
import { pt as pay } from './units/pay';
import { pt as house } from './units/house';
import { pt as sayings } from './units/sayings';
import { pt as social } from './units/social';
import { pt as rights } from './units/rights';
import { pt as leave } from './units/leave';
import { pt as exploit } from './units/exploit';
import { pt as grow } from './units/grow';
import { pt as health } from './units/health';
import { pt as money } from './units/money';
import { pt as travel } from './units/travel';
import { pt as lost } from './units/lost';
import { pt as shop } from './units/shop';
import { pt as ai } from './units/ai';
import { pt as kas } from './units/kas';
import { pt as stage } from './units/stage';
import { pt as society } from './units/society';
import { pt as online } from './units/online';

/**
 * The Belgian language track in this help language (docs/taal-belgie.md): the shared texts
 * (./base.ts) and every unit's own file (./units). Loaded with the language's pack. A content
 * agent changes only its own unit files, never this one.
 */
const texts: CultureTranslation = { ui: base.ui, gloss: { ...base.gloss, ...firstday, ...tools, ...safety, ...warehouse, ...data, ...time, ...teamwork, ...contract, ...papers, ...pay, ...house, ...social, ...sayings, ...rights, ...leave, ...exploit, ...grow, ...health, ...money, ...travel, ...lost, ...shop, ...ai, ...kas, ...stage, ...society, ...online } };
export default texts;
