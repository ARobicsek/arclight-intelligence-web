import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import express from 'express'
import { createRequire } from 'node:module'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const require = createRequire(import.meta.url)

const isProduction = process.env.NODE_ENV === 'production' || fs.existsSync('./dist/server/entry-server.js')
const port = process.env.PORT || 3000
const base = process.env.BASE || '/'

// Create http server
const app = express()

let vite
if (!isProduction) {
  // Create Vite server in development
  const { createServer } = await import('vite')
  vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    base
  })
  app.use(vite.ssrLoadModule ? vite.middlewares : vite.ssrFix)
}

// Serve static files
if (isProduction) {
  app.use(express.static(path.resolve(__dirname, 'dist/client'), { index: false }))
} else {
  // In development, vite handles static files
}

// SSR route handler - handle all routes
app.use(handleSSR)

async function handleSSR(req, res) {
  try {
    const url = req.originalUrl.replace(base, '')

    let render
    
    if (!isProduction) {
      // Development mode with Vite
      render = (await vite.ssrLoadModule('/src/entry-server.tsx')).renderPage
    } else {
      // Production mode with built files
      render = require('./dist/server/entry-server.js').renderPage
    }

    const html = render()
    res.status(200).set({ 'Content-Type': 'text/html' }).send(html)
  } catch (e) {
    console.error('SSR error:', e)
    !isProduction && vite?.ssrFixStacktrace(e)
    res.status(500).send('Internal Server Error')
  }
}

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})