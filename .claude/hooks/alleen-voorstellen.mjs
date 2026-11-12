#!/usr/bin/env node
// A lock on the pen of the marketing-communicatie agent (.claude/agents/marketing-communicatie.md):
// it may write its drafts (bestuur/voorstellen/) and its own log, and nothing else. Runs before
// every Write or Edit of that agent; exit 2 refuses the call and tells the agent why.
// When in doubt (no path, unreadable input) it refuses.
// Claude Code runs this only where the folder is trusted (the trust dialog, accepted once on a
// computer). In a cloud session it is skipped (tried on 12 November 2026), so it is an extra
// lock, not the only one: see "De sloten" in bestuur/README.md.
import { realpathSync } from 'node:fs';
import { dirname, basename, resolve, relative, sep } from 'node:path';

const ALLOWED_DIR = 'bestuur/voorstellen/';
const ALLOWED_FILES = ['bestuur/logboek/marketing-communicatie.md'];

function refuse(why) {
  process.stderr.write(
    `Geweigerd: ${why} Deze rol schrijft alleen in ${ALLOWED_DIR} en in ${ALLOWED_FILES[0]}. ` +
      'Zie je iets wat ergens anders moet veranderen? Zet het in je verslag aan de secretaris.\n',
  );
  process.exit(2);
}

// A path through a symlink counts as the place it really is. The file itself may not exist yet,
// so the folder above it is resolved, as far up as there is one.
function real(path) {
  try {
    return realpathSync(path);
  } catch {
    const up = dirname(path);
    return up === path ? path : resolve(real(up), basename(path));
  }
}

let input = '';
for await (const chunk of process.stdin) input += chunk;

let call;
try {
  call = JSON.parse(input);
} catch {
  refuse('de aanvraag was niet te lezen.');
}

const root = real(process.env.CLAUDE_PROJECT_DIR || call.cwd || process.cwd());
const file = call?.tool_input?.file_path;
if (typeof file !== 'string' || file === '') refuse('er staat geen bestand in de aanvraag.');

const rel = relative(root, real(resolve(root, file))).split(sep).join('/');
if (rel.startsWith('..') || rel.startsWith('/')) refuse(`${file} ligt buiten de repo.`);

if (rel.startsWith(ALLOWED_DIR) || ALLOWED_FILES.includes(rel)) process.exit(0);
refuse(`${rel} is niet van deze rol.`);
