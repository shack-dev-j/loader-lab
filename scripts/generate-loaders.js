const fs = require('fs');
const path = require('path');
const loaders = require('./loaders-data.js');

const loadersDir = path.join(__dirname, '..', 'loaders');
if (!fs.existsSync(loadersDir)) {
  fs.mkdirSync(loadersDir, { recursive: true });
}

loaders.forEach(loader => {
  const filePath = path.join(loadersDir, `${loader.id}.html`);
  const content = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${loader.name} - Loader Lab</title>
  <style>
    /* Reset & Demo Centering Container */
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
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      padding: 24px;
    }
    .demo-label {
      margin-top: 24px;
      font-size: 14px;
      font-weight: 500;
      color: #94a3b8;
      letter-spacing: 0.5px;
    }

    /* ======================================================
       LOADER CSS BLOCK (Self-contained, customize variables)
       ====================================================== */
${loader.css}
  </style>
</head>
<body>
  <!-- ${loader.name} (${loader.group}) -->
  ${loader.html}
  <p class="demo-label">${loader.name}</p>
</body>
</html>
`;

  fs.writeFileSync(filePath, content, 'utf8');
});

console.log(`Successfully generated ${loaders.length} standalone loader files in /loaders!`);
