import type { CultureTranslation } from '../culture/types';
import { ro as base } from './base';
import { ro as firstday } from './units/firstday';
import { ro as tools } from './units/tools';
import { ro as safety } from './units/safety';
import { ro as warehouse } from './units/warehouse';
import { ro as data } from './units/data';
import { ro as time } from './units/time';
import { ro as teamwork } from './units/teamwork';
import { ro as contract } from './units/contract';
import { ro as papers } from './units/papers';
import { ro as pay } from './units/pay';
import { ro as house } from './units/house';
import { ro as sayings } from './units/sayings';
import { ro as rights } from './units/rights';
import { ro as leave } from './units/leave';
import { ro as exploit } from './units/exploit';
import { ro as grow } from './units/grow';
import { ro as health } from './units/health';
import { ro as money } from './units/money';
import { ro as travel } from './units/travel';
import { ro as lost } from './units/lost';
import { ro as shop } from './units/shop';
import { ro as ai } from './units/ai';
import { ro as kas } from './units/kas';
import { ro as stage } from './units/stage';
import { ro as society } from './units/society';
import { ro as online } from './units/online';

/**
 * The Belgian language track in this help language (docs/taal-belgie.md): the shared texts
 * (./base.ts) and every unit's own file (./units). Loaded with the language's pack. A content
 * agent changes only its own unit files, never this one.
 */
const texts: CultureTranslation = { ui: base.ui, gloss: { ...base.gloss, ...firstday, ...tools, ...safety, ...warehouse, ...data, ...time, ...teamwork, ...contract, ...papers, ...pay, ...house, ...sayings, ...rights, ...leave, ...exploit, ...grow, ...health, ...money, ...travel, ...lost, ...shop, ...ai, ...kas, ...stage, ...society, ...online } };
export default texts;
