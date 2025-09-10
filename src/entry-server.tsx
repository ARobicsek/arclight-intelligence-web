import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'

export function render() {
  const html = renderToString(
    <StrictMode>
      <App />
    </StrictMode>
  )
  
  return html
}

export function renderPage() {
  const appHtml = render()
  const isProduction = process.env.NODE_ENV === 'production'
  
  const headContent = isProduction
    ? `<script type="module" crossorigin src="/assets/main-DKTLX5q4.js"></script>
    <link rel="stylesheet" crossorigin href="/assets/main-D9ziHzso.css">`
    : `<script>
    try {
      alert('BASIC JS TEST: JavaScript works on mobile!');
      console.log('BASIC JS: Inline script executed');
    } catch(e) {
      alert('BASIC JS ERROR: ' + e.message);
    }
    </script>
    <script type="module" src="/@vite/client"></script>
    <script type="module" src="/src/main.tsx"></script>`
  
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/x-icon" href="/logo.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Arclight Intelligence - Healthcare Innovation Consulting</title>
    <meta name="description" content="Expert guidance at the intersection of healthcare operations, data analytics, and emerging technology. PE/VC Advisory, Startup Strategy, and Healthcare AI/Data Implementation." />
    <meta name="keywords" content="healthcare consulting, healthcare AI, healthcare data analytics, PE VC advisory, healthcare startups, healthcare innovation, Dr. Ari Robicsek" />
    <meta name="author" content="Arclight Intelligence, LLC" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://arclightintelligence.com" />
    <meta property="og:title" content="Arclight Intelligence - Healthcare Innovation Consulting" />
    <meta property="og:description" content="Expert guidance at the intersection of healthcare operations, data analytics, and emerging technology." />
    <meta property="og:image" content="https://arclightintelligence.com/logo.png" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://arclightintelligence.com" />
    <meta property="twitter:title" content="Arclight Intelligence - Healthcare Innovation Consulting" />
    <meta property="twitter:description" content="Expert guidance at the intersection of healthcare operations, data analytics, and emerging technology." />
    <meta property="twitter:image" content="https://arclightintelligence.com/logo.png" />
    
    ${headContent}
  </head>
  <body>
    <noscript>
      <div style="background: red; color: white; padding: 20px; text-align: center;">
        <h1>MOBILE DEBUG: JavaScript is disabled or blocked</h1>
        <p>This confirms JavaScript execution is failing on mobile</p>
      </div>
    </noscript>
    <div style="background: blue; color: white; padding: 10px; text-align: center; position: fixed; top: 0; left: 0; right: 0; z-index: 9999;">
      MOBILE DEBUG: HTML is loading - User Agent: <span id="ua-display">Loading...</span>
    </div>
    <div id="root">${appHtml}</div>
    <div style="background: green; color: white; padding: 10px; text-align: center; position: fixed; bottom: 0; left: 0; right: 0; z-index: 9999;">
      MOBILE DEBUG: HTML fully loaded - Checking JS execution...
    </div>
    <script>
      document.getElementById('ua-display').textContent = navigator.userAgent.substring(0, 80);
    </script>
  </body>
</html>`
}