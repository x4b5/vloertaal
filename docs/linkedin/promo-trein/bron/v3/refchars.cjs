const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const fs = require('fs');
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1600, height: 560 } });
  const svgs = ['amina','jada','henk','bram'].map(n => fs.readFileSync(`assets/chars/${n}-idle.svg.html`,'utf8').replace(/width="129" height="150"/,'width="390" height="455"'));
  await p.setContent(`<body style="margin:0;background:#fff;display:flex">${svgs.join('')}</body><style>*{animation:none!important}</style>`);
  await p.screenshot({ path: 'v3/ref-chars.png' }); await b.close();
})();
