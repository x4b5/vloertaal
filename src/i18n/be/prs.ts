import type { CultureTranslation } from '../culture/types';
import { prs as base } from './base';
import { prs as firstday } from './units/firstday';
import { prs as tools } from './units/tools';
import { prs as safety } from './units/safety';
import { prs as warehouse } from './units/warehouse';
import { prs as data } from './units/data';
import { prs as time } from './units/time';
import { prs as teamwork } from './units/teamwork';
import { prs as contract } from './units/contract';
import { prs as papers } from './units/papers';
import { prs as pay } from './units/pay';
import { prs as house } from './units/house';
import { prs as sayings } from './units/sayings';
import { prs as rights } from './units/rights';
import { prs as leave } from './units/leave';
import { prs as exploit } from './units/exploit';
import { prs as grow } from './units/grow';
import { prs as health } from './units/health';
import { prs as money } from './units/money';
import { prs as travel } from './units/travel';
import { prs as lost } from './units/lost';
import { prs as shop } from './units/shop';
import { prs as ai } from './units/ai';
import { prs as kas } from './units/kas';
import { prs as stage } from './units/stage';
import { prs as society } from './units/society';
import { prs as online } from './units/online';

/**
 * The Belgian language track in this help language (docs/taal-belgie.md): the shared texts
 * (./base.ts) and every unit's own file (./units). Loaded with the language's pack. A content
 * agent changes only its own unit files, never this one.
 */
const texts: CultureTranslation = { ui: base.ui, gloss: { ...base.gloss, ...firstday, ...tools, ...safety, ...warehouse, ...data, ...time, ...teamwork, ...contract, ...papers, ...pay, ...house, ...sayings, ...rights, ...leave, ...exploit, ...grow, ...health, ...money, ...travel, ...lost, ...shop, ...ai, ...kas, ...stage, ...society, ...online } };
export default texts;
