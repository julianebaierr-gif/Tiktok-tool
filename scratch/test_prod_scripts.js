const https = require('https');

https.get('https://www.quktik.com/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', async () => {
    const scripts = [];
    const matches = data.match(/<script[^>]*src=["']([^"']*)["']/gi) || [];
    for (const m of matches) {
      const src = m.match(/src=["']([^"']*)["']/i)[1];
      scripts.push(src);
    }
    console.log(`Found ${scripts.length} script tags on production home page.`);
    for (const s of scripts) {
      const fullUrl = s.startsWith('http') ? s : `https://www.quktik.com${s}`;
      await new Promise(resolve => {
        https.get(fullUrl, r => {
          console.log(`[${r.statusCode}] ${s}`);
          resolve();
        }).on('error', err => {
          console.log(`[ERR] ${s}: ${err.message}`);
          resolve();
        });
      });
    }
  });
});
