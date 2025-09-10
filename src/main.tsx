import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const container = document.getElementById('root')!

// Check if the app was server-rendered by looking for server-rendered content
if (container.hasChildNodes()) {
  // Hydrate the server-rendered content
  hydrateRoot(container, 
    <StrictMode>
      <App />
    </StrictMode>
  )
} else {
  // Client-side render (fallback for development)
  createRoot(container).render(
    <StrictMode>
      <App />
    </StrictMode>
  )
}
