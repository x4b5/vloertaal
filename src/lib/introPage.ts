import { type IntroQuestion, WHY } from '../content/intro';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const TITLE = 'Nederlands op de werkvloer. Hoe zit dat eigenlijk?';

function questionSection(q: IntroQuestion, i: number, total: number): string {
  const options = q.options
    .map((o) => `<button type="button" class="opt"${o.right ? ' data-right' : ''}>${esc(o.label)}</button>`)
    .join('');
  const source = q.source ? `<p class="src">Bron: <a href="${esc(q.source.url)}" rel="noopener">${esc(q.source.label)}</a></p>` : '';
  return `<section aria-labelledby="q${i}">
<p class="step">Vraag ${i + 1} van ${total}</p>
<h2 id="q${i}" tabindex="-1">${esc(q.ask)}</h2>
<div class="opts">${options}</div>
<div class="answer" aria-live="polite"><p>${esc(q.answer)}</p>${source}<button type="button" class="next">Volgende</button></div>
</section>`;
}

const STYLE = `
  :root { color-scheme: light dark; --bg: #e7e3dc; --card: #fffdf8; --ink: #1e2226; --ink2: #4a4f55; --yellow: #ffc414; --line: #d6cfc3; --right: #e3efe7; --right-ink: #0f6a4a; --wrong: #f6e3dc; --wrong-ink: #a8361f; }
  @media (prefers-color-scheme: dark) { :root { --bg: #16191c; --card: #1f2327; --ink: #eceae6; --ink2: #b6b2ab; --line: #343a40; --right: #17352a; --right-ink: #7fd1ad; --wrong: #3a211b; --wrong-ink: #f0a58f; } }
  * { box-sizing: border-box; }
  body { margin: 0; background: var(--bg); color: var(--ink); font: 19px/1.5 system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif; }
  main { max-width: 600px; margin: 0 auto; padding: 24px 16px 48px; }
  header { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
  header img { width: 44px; height: 44px; border-radius: 22%; }
  header a { color: inherit; text-decoration: none; font-weight: 700; font-size: 1.5rem; }
  section { background: var(--card); border: 2px solid var(--line); border-radius: 12px; padding: 20px; margin: 0 0 16px; }
  h1, h2 { line-height: 1.25; margin: 0 0 12px; }
  h1 { font-size: 1.6rem; }
  h2 { font-size: 1.3rem; }
  h1:focus, h2:focus { outline: none; }
  .step { color: var(--ink2); font-size: 0.9rem; margin: 0 0 4px; }
  .opts { display: grid; gap: 10px; margin: 16px 0 0; }
  button, .cta { font: inherit; font-weight: 600; border-radius: 10px; padding: 14px 16px; cursor: pointer; text-align: center; }
  .opt { background: var(--card); color: var(--ink); border: 2px solid var(--ink); }
  .opt[disabled] { cursor: default; opacity: 0.55; }
  .opt.right { background: var(--right); color: var(--right-ink); border-color: var(--right-ink); opacity: 1; }
  .opt.wrong { background: var(--wrong); color: var(--wrong-ink); border-color: var(--wrong-ink); opacity: 1; }
  .opt.chosen { opacity: 1; }
  .answer { margin-top: 16px; }
  .next, .begin, .cta { display: block; width: 100%; margin-top: 12px; background: var(--yellow); color: #1e2226; border: 2px solid #1e2226; text-decoration: none; }
  .src { color: var(--ink2); font-size: 0.85rem; }
  .src a, footer a, .mail { color: inherit; }
  .checks { font-weight: 600; }
  footer { color: var(--ink2); font-size: 0.95rem; margin-top: 24px; }
  .stripe { height: 12px; background: repeating-linear-gradient(-45deg, var(--yellow) 0 16px, #1e2226 16px 32px); }
  html:not(.js) .begin, html:not(.js) .next, html:not(.js) .opt { display: none; }
  .js section { display: none; }
  .js section.on { display: block; }
  .js .answer { display: none; }
  .js .answer.shown { display: block; }
`;

/** One section at a time; a choice shows the answer (and which choice was right). No requests. */
const SCRIPT = `
(function () {
  var d = document, root = d.documentElement;
  root.classList.add('js');
  var parts = Array.prototype.slice.call(d.querySelectorAll('main section'));
  var show = function (i) {
    parts.forEach(function (s, j) { s.classList.toggle('on', j === i); });
    if (i === 0) return;
    window.scrollTo(0, 0);
    var h = parts[i].querySelector('h2');
    if (h) h.focus();
  };
  parts.forEach(function (s, i) {
    s.querySelectorAll('.begin, .next').forEach(function (b) { b.addEventListener('click', function () { show(i + 1); }); });
    var opts = s.querySelectorAll('.opt');
    opts.forEach(function (o) {
      o.addEventListener('click', function () {
        opts.forEach(function (x) {
          x.disabled = true;
          if (x.hasAttribute('data-right')) x.classList.add('right');
        });
        o.classList.add(o.hasAttribute('data-right') || !s.querySelector('[data-right]') ? 'chosen' : 'wrong');
        s.querySelector('.answer').classList.add('shown');
      });
    });
  });
  show(0);
})();
`;

/**
 * The page vloertaal.nl/intro, made at build time from src/content/intro.ts. A plain page like
 * /nieuw: no app code, no tracking, works without JavaScript (then everything shows at once).
 */
export function introPage(questions: IntroQuestion[]): string {
  const qs = questions.map((q, i) => questionSection(q, i, questions.length)).join('\n');
  const why = WHY.map((p) => `<p>${esc(p)}</p>`).join('');
  return `<!doctype html>
<html lang="nl">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${esc(TITLE)} · Vloertaal</title>
<meta name="description" content="Drie korte vragen over taal op de werkvloer, en waarom Vloertaal er is." />
<link rel="canonical" href="https://vloertaal.nl/intro/" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Vloertaal" />
<meta property="og:title" content="${esc(TITLE)}" />
<meta property="og:description" content="Drie korte vragen, één minuut. Daarna zie je waarom Vloertaal er is." />
<meta property="og:url" content="https://vloertaal.nl/intro/" />
<meta property="og:image" content="https://vloertaal.nl/og-image.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta name="twitter:card" content="summary_large_image" />
<link rel="icon" href="/icon.svg?v=4" type="image/svg+xml" />
<style>${STYLE}</style>
</head>
<body>
<div class="stripe" aria-hidden="true"></div>
<main>
<header><img src="/icon-192.png?v=4" alt="" /><a href="/">vloertaal.</a></header>
<section aria-labelledby="start">
<h1 id="start" tabindex="-1">${esc(TITLE)}</h1>
<p>Drie korte vragen, één minuut. Daarna zie je waarom Vloertaal er is.</p>
<button type="button" class="begin">Begin</button>
</section>
${qs}
<section aria-labelledby="why">
<h2 id="why" tabindex="-1">Waarom Vloertaal?</h2>
${why}
<p class="checks">✅ Gratis · ✅ Geen account · ✅ Geen reclame</p>
<a class="cta" href="/?intro">Bekijk de app</a>
<p>Meedenken of meedoen? Mail naar <a class="mail" href="mailto:hoi@vloertaal.nl">hoi@vloertaal.nl</a>.</p>
</section>
<footer><p>Vloertaal is een vrijwillig project, nog in de testfase.</p></footer>
</main>
<script>${SCRIPT}</script>
</body>
</html>
`;
}
