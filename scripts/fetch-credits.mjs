// Fetches the ElevenLabs credit balance at build time and writes public/credits.json
// for the hidden admin page (#beheer). The API key stays in the CI secret; only the
// numbers below end up on the site. Never fails the build.
import { writeFileSync } from 'node:fs';

const key = process.env.ELEVENLABS_API_KEY;
if (!key) {
  console.log('No ELEVENLABS_API_KEY set; skipping credits.');
  process.exit(0);
}

try {
  const res = await fetch('https://api.elevenlabs.io/v1/user/subscription', { headers: { 'xi-api-key': key } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const s = await res.json();
  const used = Number(s.character_count ?? 0);
  const limit = Number(s.character_limit ?? 0);
  const credits = {
    tier: String(s.tier ?? 'unknown'),
    used,
    limit,
    remaining: Math.max(0, limit - used),
    resetsAt: s.next_character_count_reset_unix ? new Date(s.next_character_count_reset_unix * 1000).toISOString() : null,
    updatedAt: new Date().toISOString(),
  };
  writeFileSync('public/credits.json', JSON.stringify(credits, null, 2));
  console.log(`Credits: ${credits.remaining} of ${credits.limit} left (${credits.tier}).`);
} catch (e) {
  console.log(`Could not fetch ElevenLabs credits: ${e.message}`);
}
