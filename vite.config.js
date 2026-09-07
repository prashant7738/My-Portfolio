import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Per-route <title>/<meta description> overrides applied to the prerendered HTML at build time
const routeMeta = {
  '/': {
    title: 'Prashant Kafle | AI Engineer & Full-Stack Developer',
    description: 'Prashant Kafle is an AI Engineer and Computer Engineering student building production RAG pipelines, multi-agent LLM systems, and full-stack applications.',
  },
  '/projects': {
    title: 'Projects | Prashant Kafle',
    description: 'RAG pipelines, multi-agent LLM systems, and full-stack projects built by Prashant Kafle, including team-built and faculty-supervised work.',
  },
  '/publications': {
    title: 'Publications | Prashant Kafle',
    description: 'Research publication by Prashant Kafle: Evaluating AI Agents with LLM-Based Judges.',
  },
  '/contact': {
    title: 'About & Contact | Prashant Kafle',
    description: 'About Prashant Kafle, an AI Engineer open for freelance Gen AI contracts and collaborative team projects. Get in touch.',
  },
}

// Route strings from vite-react-ssg omit the leading slash except for the root path
const normalizeRoute = (route) => (route === '/' ? '/' : `/${route}`)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
  ssgOptions: {
    onPageRendered(route, renderedHTML) {
      const meta = routeMeta[normalizeRoute(route)]
      if (!meta) return renderedHTML
      return renderedHTML
        .replace(/<title>.*?<\/title>/, `<title>${meta.title}</title>`)
        .replace(/<meta name="description" content=".*?">/, `<meta name="description" content="${meta.description}">`)
        .replace(/<meta property="og:title" content=".*?">/, `<meta property="og:title" content="${meta.title}">`)
        .replace(/<meta property="og:description" content=".*?">/, `<meta property="og:description" content="${meta.description}">`)
        .replace(/<meta name="twitter:title" content=".*?">/, `<meta name="twitter:title" content="${meta.title}">`)
        .replace(/<meta name="twitter:description" content=".*?">/, `<meta name="twitter:description" content="${meta.description}">`)
    },
  },
})
