import { LAST_UPDATE, type Update, updateDate } from '../content/updates';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/**
 * The page vloertaal.nl/nieuw: what changed, newest first, in plain Dutch. A plain HTML page
 * (no app code, no tracking), made at build time from src/content/updates.ts.
 */
export function updatesPage(updates: Update[]): string {
  const days = updates
    .map(
      (u) => `<section><h2><time datetime="${u.date}">${esc(updateDate(u.date))}</time></h2><ul>${u.items
        .map((i) => `<li>${esc(i)}</li>`)
        .join('')}</ul></section>`,
    )
    .join('\n');
  return `<!doctype html>
<html lang="nl">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Wat is er nieuw? · Vloertaal</title>
<meta name="description" content="Wat er veranderd is in Vloertaal, de gratis app voor Nederlands op de werkvloer." />
<link rel="canonical" href="https://vloertaal.nl/nieuw/" />
<link rel="icon" href="/icon.svg?v=4" type="image/svg+xml" />
<style>
  :root { color-scheme: light dark; --bg: #e7e3dc; --card: #fffdf8; --ink: #1e2226; --ink2: #4a4f55; --yellow: #ffc414; --line: #d6cfc3; }
  @media (prefers-color-scheme: dark) { :root { --bg: #16191c; --card: #1f2327; --ink: #eceae6; --ink2: #b6b2ab; --line: #343a40; } }
  * { box-sizing: border-box; }
  body { margin: 0; background: var(--bg); color: var(--ink); font: 18px/1.5 system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif; }
  main { max-width: 640px; margin: 0 auto; padding: 24px 16px 48px; }
  header { display: flex; align-items: center; gap: 12px; margin-bottom: 8px; }
  header img { width: 48px; height: 48px; border-radius: 22%; }
  header a { color: inherit; text-decoration: none; font-weight: 700; font-size: 1.6rem; }
  h1 { font-size: 1.5rem; margin: 16px 0 4px; }
  .sub { color: var(--ink2); margin: 0 0 24px; }
  section { background: var(--card); border: 2px solid var(--line); border-radius: 12px; padding: 16px 20px; margin: 0 0 16px; }
  h2 { font-size: 1.1rem; margin: 0 0 8px; display: inline-block; background: linear-gradient(transparent 55%, var(--yellow) 55%); }
  @media (prefers-color-scheme: dark) { h2 { background: none; color: var(--yellow); } }
  ul { margin: 0; padding-inline-start: 1.2em; }
  li { margin: 6px 0; }
  footer { color: var(--ink2); font-size: 0.95rem; margin-top: 24px; }
  footer a { color: inherit; }
  .stripe { height: 12px; background: repeating-linear-gradient(-45deg, var(--yellow) 0 16px, #1e2226 16px 32px); }
</style>
</head>
<body>
<div class="stripe" aria-hidden="true"></div>
<main>
<header><img src="/icon-192.png?v=4" alt="" /><a href="/">vloertaal.</a></header>
<h1>Wat is er nieuw?</h1>
<p class="sub">Laatst bijgewerkt: <time datetime="${LAST_UPDATE}">${esc(updateDate(LAST_UPDATE))}</time>. Vloertaal is gratis en nog in de testfase.</p>
${days}
<footer>
<p>Zie je een fout, of heb je een vraag? Mail naar <a href="mailto:hoi@vloertaal.nl">hoi@vloertaal.nl</a>.</p>
<p><a href="/">Naar de app: vloertaal.nl</a></p>
</footer>
</main>
</body>
</html>
`;
}
