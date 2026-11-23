/**
 * Word pictures of "Operator in de procesindustrie" (u.process, the fourth own unit of Productie,
 * 23 November 2026): one file per word in ./proces. PLACEHOLDERS for now (./placeholder.tsx);
 * illustrators replace them one by one in the house style (docs/tekenstijl.md). No company and no
 * brand in a drawing: a general plant (a paper machine, a kiln, a glass furnace, a mixing hall, a
 * steel line).
 */
import controlekamer from './proces/controlekamer';
import operator from './proces/operator';
import drukmeter from './proces/drukmeter';
import niveau from './proces/niveau';
import snelheid from './proces/snelheid';
import alarmmelding from './proces/alarmmelding';
import stilstand from './proces/stilstand';
import opstarten from './proces/opstarten';
import stilzetten from './proces/stilzetten';
import technischedienst from './proces/technischedienst';
import onderhoudsmonteur from './proces/onderhoudsmonteur';
import resetten from './proces/resetten';
import ploeg from './proces/ploeg';
import ploegwissel from './proces/ploegwissel';
import volcontinu from './proces/volcontinu';
import overdagslapen from './proces/overdagslapen';
import broodtrommel from './proces/broodtrommel';
import aflosser from './proces/aflosser';
import smeltoven from './proces/smeltoven';
import stoom from './proces/stoom';
import stoomleiding from './proces/stoomleiding';
import hittekleding from './proces/hittekleding';
import kwartsstof from './proces/kwartsstof';
import explosiegevaar from './proces/explosiegevaar';

export default {
  ...controlekamer,
  ...operator,
  ...drukmeter,
  ...niveau,
  ...snelheid,
  ...alarmmelding,
  ...stilstand,
  ...opstarten,
  ...stilzetten,
  ...technischedienst,
  ...onderhoudsmonteur,
  ...resetten,
  ...ploeg,
  ...ploegwissel,
  ...volcontinu,
  ...overdagslapen,
  ...broodtrommel,
  ...aflosser,
  ...smeltoven,
  ...stoom,
  ...stoomleiding,
  ...hittekleding,
  ...kwartsstof,
  ...explosiegevaar,
};
