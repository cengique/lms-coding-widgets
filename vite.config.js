import { resolve } from 'path'
import { defineConfig } from 'vite'
import { parse } from 'marked';
import fs from 'node:fs/promises';

export default defineConfig({
  base: 'lms-coding-widgets', 
  build: {
    rollupOptions: {
      // Point the input to your custom HTML file
      input: {
        main: resolve(__dirname, 'slides.html'), 
      },
    },
  },
  plugins: [
    {
      name: 'markdown-to-html',
      apply: 'build',
      async closeBundle() {
        const md = await fs.readFile('README.md', 'utf-8');
        const css = await fs.readFile('node_modules/github-markdown-css/github-markdown.css')
        const body = await parse(md);
        const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>README</title>
  <style> ${css} </style>
  <link rel="stylesheet" href="https://jsdelivr.net">
</head>
<body>
<main class="markdown-body" style="max-width: 800px; margin: 40px auto; padding: 0 20px;">
  ${body}
</main>
</body>
</html>`;        
        await fs.mkdir('dist', { recursive: true });
        await fs.writeFile('dist/index.html', html);
      },
    },
  ],
})
