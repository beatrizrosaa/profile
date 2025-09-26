import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ler o manifest.json gerado pelo Vite
const manifestPath = path.join(__dirname, '../build/client/.vite/manifest.json');
const buildPath = path.join(__dirname, '../build/client');

if (fs.existsSync(manifestPath)) {
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  
  // Encontrar os arquivos CSS e JS principais
  const entryClient = Object.values(manifest).find(entry => 
    entry.name === 'entry.client' || entry.src?.includes('entry.client')
  );
  const rootEntry = Object.values(manifest).find(entry => 
    entry.css && entry.css.length > 0
  );
  
  const cssFile = rootEntry && rootEntry.css ? rootEntry.css[0] : '';
  const jsFile = entryClient ? entryClient.file : '';
  
  // Gerar o HTML para SPA
  const html = `<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Beatriz Rosa - Portfólio</title>
    <meta name="description" content="Portfólio de Beatriz Rosa - Engenharia da Computação e Ciência da Computação" />
    ${cssFile ? `<link rel="stylesheet" href="/${cssFile}" />` : ''}
    <style>
      #root {
        min-height: 100vh;
      }
      body {
        margin: 0;
        padding: 0;
      }
    </style>
  </head>
  <body>
    <div id="root">
      <div style="display: flex; justify-content: center; align-items: center; min-height: 100vh; font-family: system-ui;">
        <div>Carregando...</div>
      </div>
    </div>
    ${jsFile ? `<script type="module" src="/${jsFile}"></script>` : ''}
  </body>
</html>`;
  
  // Escrever o index.html
  fs.writeFileSync(path.join(buildPath, 'index.html'), html);
  console.log('✅ index.html gerado com sucesso!');
  console.log('CSS:', cssFile);
  console.log('JS:', jsFile);
} else {
  console.error('❌ Manifest não encontrado!');
}