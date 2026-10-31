import type { CultureTranslation } from '../culture/types';
import { pl as base } from './base';
import { pl as firstday } from './units/firstday';
import { pl as tools } from './units/tools';
import { pl as safety } from './units/safety';
import { pl as warehouse } from './units/warehouse';
import { pl as data } from './units/data';
import { pl as time } from './units/time';
import { pl as teamwork } from './units/teamwork';
import { pl as contract } from './units/contract';
import { pl as papers } from './units/papers';
import { pl as pay } from './units/pay';
import { pl as house } from './units/house';
import { pl as sayings } from './units/sayings';
import { pl as rights } from './units/rights';
import { pl as leave } from './units/leave';
import { pl as exploit } from './units/exploit';
import { pl as grow } from './units/grow';
import { pl as health } from './units/health';
import { pl as money } from './units/money';
import { pl as travel } from './units/travel';
import { pl as lost } from './units/lost';
import { pl as shop } from './units/shop';
import { pl as ai } from './units/ai';
import { pl as kas } from './units/kas';
import { pl as stage } from './units/stage';
import { pl as society } from './units/society';
import { pl as online } from './units/online';

/**
 * The Belgian language track in this help language (docs/taal-belgie.md): the shared texts
 * (./base.ts) and every unit's own file (./units). Loaded with the language's pack. A content
 * agent changes only its own unit files, never this one.
 */
const texts: CultureTranslation = { ui: base.ui, gloss: { ...base.gloss, ...firstday, ...tools, ...safety, ...warehouse, ...data, ...time, ...teamwork, ...contract, ...papers, ...pay, ...house, ...sayings, ...rights, ...leave, ...exploit, ...grow, ...health, ...money, ...travel, ...lost, ...shop, ...ai, ...kas, ...stage, ...society, ...online } };
export default texts;
