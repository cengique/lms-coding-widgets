import { resolve } from 'path'
import { defineConfig } from 'vite'
import { parse } from 'marked';
import fs from 'node:fs/promises';

export default defineConfig({
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
        const body = await parse(md);
        const html = `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>README</title></head><body>${body}</body></html>`;
        
        await fs.mkdir('dist', { recursive: true });
        await fs.writeFile('dist/index.html', html);
      },
    },
  ],
})
