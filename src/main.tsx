import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

console.log('[MOBILE DEBUG] main.tsx loaded, starting React initialization')
alert('[MOBILE DEBUG] main.tsx script loaded! UA: ' + navigator.userAgent.substring(0, 50))
console.log('[MOBILE DEBUG] User agent:', navigator.userAgent)
console.log('[MOBILE DEBUG] Document ready state:', document.readyState)

const container = document.getElementById('root')!
console.log('[MOBILE DEBUG] Container found:', !!container)
console.log('[MOBILE DEBUG] Container has children:', container.hasChildNodes())
console.log('[MOBILE DEBUG] Container innerHTML length:', container.innerHTML.length)

// Check if the app was server-rendered by looking for server-rendered content
if (container.hasChildNodes()) {
  // Hydrate the server-rendered content
  console.log('[MOBILE DEBUG] Starting hydration...')
  try {
    hydrateRoot(container, 
      <StrictMode>
        <App />
      </StrictMode>
    )
    console.log('[MOBILE DEBUG] Hydration completed successfully')
  } catch (error) {
    console.error('[MOBILE DEBUG] Hydration failed:', error)
  }
} else {
  // Client-side render (fallback for development)
  console.log('[MOBILE DEBUG] Starting client-side render...')
  try {
    createRoot(container).render(
      <StrictMode>
        <App />
      </StrictMode>
    )
    console.log('[MOBILE DEBUG] Client-side render completed successfully')
  } catch (error) {
    console.error('[MOBILE DEBUG] Client-side render failed:', error)
  }
}
