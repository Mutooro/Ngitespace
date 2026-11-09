import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { SITE_URL, pages } from './src/seo.js'

// The sitemap is written after vite-ssg has rendered every page.
// vite-plugin-sitemap builds its URL list by globbing the output directory in
// Vite's closeBundle hook, which runs before vite-ssg writes the 17 pages, so
// it only ever found index.html.
function writeSitemap() {
  const today = new Date().toISOString().slice(0, 10)
  const urls = Object.values(pages)
    .filter((page) => !page.noindex)
    .map((page) => `${SITE_URL}${page.path}`)

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map((url) => `  <url><loc>${url}</loc><lastmod>${today}</lastmod></url>`),
    '</urlset>',
    '',
  ].join('\n')

  writeFileSync(resolve(process.cwd(), 'dist', 'sitemap.xml'), xml, 'utf-8')
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  ssgOptions: {
    onFinished: writeSitemap,
  },
})
