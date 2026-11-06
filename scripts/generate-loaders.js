const fs = require('fs');
const path = require('path');
const loaders = require('./loaders-data.js');

const rootDir = path.resolve(__dirname, '..');
const loadersDir = path.join(rootDir, 'loaders');
const distDir = path.join(rootDir, 'dist');

[loadersDir, distDir].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

// 1. Generate standalone files in loaders/
loaders.forEach(loader => {
  const filePath = path.join(loadersDir, `${loader.id}.html`);
  const content = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${loader.name} - Loader Lab</title>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: #090d16;
      color: #f8fafc;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      padding: 24px;
    }
    .demo-label {
      margin-top: 24px;
      font-size: 13px;
      font-weight: 500;
      color: #94a3b8;
    }

${loader.css}
  </style>
</head>
<body>
  ${loader.html}
  <p class="demo-label">${loader.name}</p>
</body>
</html>
`;
  fs.writeFileSync(filePath, content, 'utf8');
});

// 2. Generate dist/loaders.css
let consolidatedCss = `/**
 * Loader Lab - 30 Pure CSS Loading Animations
 * MIT License (c) 2026 Loader Lab Contributors
 * https://github.com/shack-dev-j/loader-lab
 */

`;

loaders.forEach(loader => {
  consolidatedCss += `/* --- ${loader.name} (${loader.group}) --- */\n${loader.css}\n\n`;
});

fs.writeFileSync(path.join(distDir, 'loaders.css'), consolidatedCss, 'utf8');

// 3. Generate data.js for frontend showcase
fs.writeFileSync(
  path.join(rootDir, 'data.js'),
  'window.LOADERS_DATA = ' + JSON.stringify(loaders, null, 2) + ';',
  'utf8'
);

console.log('✓ Successfully generated 30 standalone loaders, dist/loaders.css, and data.js!');
