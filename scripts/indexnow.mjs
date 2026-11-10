#!/usr/bin/env node
// IndexNow (step 5 of the SEO/GEO round, 10 November 2026): after a new version is live, tell Bing
// and the other IndexNow search engines (Yandex, Seznam, Naver …; Google does not take part) which
// pages changed, so they read them again within days instead of weeks. Run by
// .github/workflows/indexnow.yml on every push to main, with two builds: the one before the push
// and the one after it. Only pages in the sitemap count, and only those whose HTML changed or is
// new, so a push that changes nothing on the site sends nothing.
//
//   node scripts/indexnow.mjs <dist-before> <dist-after> [--dry-run] [--wait] [--all]
//
//  --dry-run  only print what would be sent
//  --all      send every page of the sitemap, changed or not (Actions › IndexNow › Run workflow,
//             "Alle pagina's": after a run that could not send, e.g. while the key was checked)
//  --wait     first wait (at most 20 minutes) until the site serves the new version of the first
//             changed page: statichost.eu builds the site by itself after the push.
//
// The key is the file public/<key>.txt (its name is its content); the search engines fetch it from
// vloertaal.nl to check that the message comes from the site itself. It is not a secret.
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { pathToFileURL } from 'node:url';

export const SITE = 'https://vloertaal.nl';
export const HOST = 'vloertaal.nl';
export const ENDPOINT = 'https://api.indexnow.org/indexnow';
/** At most this many addresses in one message (the protocol allows 10,000). */
export const BATCH = 10_000;

/** The key: the one file in public/ named <32 hex characters>.txt whose content is that name. */
export function findKey(publicDir = 'public') {
  const keys = readdirSync(publicDir).filter((f) => /^[0-9a-f]{32}\.txt$/.test(f) && readFileSync(join(publicDir, f), 'utf8').trim() === f.slice(0, -4));
  if (keys.length !== 1) throw new Error(`indexnow: expected one key file in ${publicDir}, found ${keys.length}`);
  return keys[0].slice(0, -4);
}

/** "pl/tip/x/index.html" → "/pl/tip/x/"; "index.html" → "/"; anything else → null. */
export function pathOf(file) {
  if (file === 'index.html') return '/';
  return file.endsWith('/index.html') ? `/${file.slice(0, -'index.html'.length)}` : null;
}

/** Every page (path → HTML) of a built dist. */
export function pagesOf(dist) {
  const out = new Map();
  const visit = (dir) => {
    for (const name of readdirSync(dir)) {
      const full = join(dir, name);
      if (statSync(full).isDirectory()) visit(full);
      else if (name === 'index.html') out.set(pathOf(relative(dist, full).replace(/\\/g, '/')), readFileSync(full, 'utf8'));
    }
  };
  if (existsSync(dist)) visit(dist);
  return out;
}

/** The paths in a sitemap.xml. */
export function sitemapPaths(xml) {
  return [...xml.matchAll(/<loc>https:\/\/vloertaal\.nl([^<]*)<\/loc>/g)].map((m) => m[1]);
}

/** The sitemap's pages that are new or changed between two builds, in sitemap order. */
export function changedPaths(before, after, sitemap) {
  return sitemap.filter((p) => after.has(p) && before.get(p) !== after.get(p));
}

/** The messages to send: IndexNow's JSON, at most BATCH addresses each. */
export function messages(paths, key) {
  const out = [];
  for (let i = 0; i < paths.length; i += BATCH) {
    out.push({ host: HOST, key, keyLocation: `${SITE}/${key}.txt`, urlList: paths.slice(i, i + BATCH).map((p) => `${SITE}${p}`) });
  }
  return out;
}

/**
 * What an answer of IndexNow means: 'ok' (200 OK, or 202 Accepted: the key is still being checked),
 * 'wait' (403 SiteVerificationNotCompleted: a new key that IndexNow has not checked yet; the first
 * run after the key came, 10 November 2026, got this: try again later), or 'fail' (anything else:
 * a wrong key, a bad request).
 */
export function verdict(status, text = '') {
  if (status === 200 || status === 202) return 'ok';
  if (status === 403 && text.includes('SiteVerificationNotCompleted')) return 'wait';
  return 'fail';
}

/** While the key is being checked: try again this many times, this long apart (about 20 minutes in all). */
export const RETRIES = 4;
export const RETRY_MS = 5 * 60_000;

async function waitForLive(path, html, minutes = 20) {
  const until = Date.now() + minutes * 60_000;
  while (Date.now() < until) {
    try {
      const res = await fetch(`${SITE}${path}`, { cache: 'no-store' });
      if (res.ok && (await res.text()) === html) return true;
    } catch {
      // Not reachable right now: try again.
    }
    await new Promise((r) => setTimeout(r, 30_000));
  }
  return false;
}

const isMain = process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;
if (isMain) {
  const args = process.argv.slice(2);
  const [beforeDir, afterDir] = args.filter((a) => !a.startsWith('--'));
  if (!beforeDir || !afterDir) {
    console.error('usage: node scripts/indexnow.mjs <dist-before> <dist-after> [--dry-run] [--wait]');
    process.exit(2);
  }
  const key = findKey();
  const after = pagesOf(afterDir);
  const inSitemap = sitemapPaths(readFileSync(join(afterDir, 'sitemap.xml'), 'utf8'));
  const paths = args.includes('--all') ? inSitemap.filter((p) => after.has(p)) : changedPaths(pagesOf(beforeDir), after, inSitemap);
  console.log(`IndexNow: ${paths.length} ${args.includes('--all') ? 'page(s) of the sitemap' : 'new or changed page(s)'}`);
  for (const p of paths.slice(0, 30)) console.log(`  ${p}`);
  if (paths.length > 30) console.log(`  … and ${paths.length - 30} more`);
  if (paths.length === 0 || args.includes('--dry-run')) process.exit(0);
  if (args.includes('--wait') && !(await waitForLive(paths[0], after.get(paths[0])))) {
    // Sent anyway: at worst a search engine reads a page once more before the new version is there.
    console.log(`::warning title=IndexNow::${paths[0]} still showed the old version after 20 minutes; sending anyway.`);
  }
  for (const body of messages(paths, key)) {
    for (let attempt = 0; ; attempt++) {
      const res = await fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json; charset=utf-8' }, body: JSON.stringify(body) });
      const text = res.status === 200 || res.status === 202 ? '' : await res.text();
      const v = verdict(res.status, text);
      if (v === 'ok') {
        console.log(`IndexNow: sent ${body.urlList.length} address(es), ${res.status}`);
        break;
      }
      if (v === 'fail') {
        console.error(`::error title=IndexNow::${res.status} ${text}`);
        process.exit(1);
      }
      if (attempt >= RETRIES) {
        // Not a fault of the site: IndexNow is still checking the key. Not red; run the job again later.
        console.log(`::warning title=IndexNow::IndexNow is still checking the key (${res.status} SiteVerificationNotCompleted). Nothing sent; run this job again later (Actions › IndexNow › Re-run jobs).`);
        process.exit(0);
      }
      console.log(`IndexNow: the key is still being checked (403); trying again in ${RETRY_MS / 60_000} minutes (${attempt + 1}/${RETRIES}).`);
      await new Promise((r) => setTimeout(r, RETRY_MS));
    }
  }
}
