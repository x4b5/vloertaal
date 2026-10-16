import { registerRegion } from '../src/content/regio';
import zlPack from '../src/content/regio/zuid-limburg-pack';

/**
 * For tests: Zuid-Limburg's own file, in place as if the learner had chosen the region (the app
 * loads it only then: src/content/regio ensureRegion). Import it first: `import './regionLoaded';`.
 */
registerRegion(zlPack);
