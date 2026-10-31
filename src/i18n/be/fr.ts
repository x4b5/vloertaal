import type { CultureTranslation } from '../culture/types';
import { fr as base } from './base';
import { fr as firstday } from './units/firstday';
import { fr as tools } from './units/tools';
import { fr as safety } from './units/safety';
import { fr as warehouse } from './units/warehouse';
import { fr as data } from './units/data';
import { fr as time } from './units/time';
import { fr as teamwork } from './units/teamwork';
import { fr as contract } from './units/contract';
import { fr as papers } from './units/papers';
import { fr as pay } from './units/pay';
import { fr as house } from './units/house';
import { fr as sayings } from './units/sayings';
import { fr as rights } from './units/rights';
import { fr as leave } from './units/leave';
import { fr as exploit } from './units/exploit';
import { fr as grow } from './units/grow';
import { fr as health } from './units/health';
import { fr as money } from './units/money';
import { fr as travel } from './units/travel';
import { fr as lost } from './units/lost';
import { fr as shop } from './units/shop';
import { fr as ai } from './units/ai';
import { fr as kas } from './units/kas';
import { fr as stage } from './units/stage';
import { fr as society } from './units/society';
import { fr as online } from './units/online';

/**
 * The Belgian language track in this help language (docs/taal-belgie.md): the shared texts
 * (./base.ts) and every unit's own file (./units). Loaded with the language's pack. A content
 * agent changes only its own unit files, never this one.
 */
const texts: CultureTranslation = { ui: base.ui, gloss: { ...base.gloss, ...firstday, ...tools, ...safety, ...warehouse, ...data, ...time, ...teamwork, ...contract, ...papers, ...pay, ...house, ...sayings, ...rights, ...leave, ...exploit, ...grow, ...health, ...money, ...travel, ...lost, ...shop, ...ai, ...kas, ...stage, ...society, ...online } };
export default texts;
