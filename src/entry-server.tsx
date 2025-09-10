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
  
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Arclight Intelligence - Healthcare Innovation Consulting</title>
    <meta name="description" content="Bespoke consulting for healthcare innovation. We help healthtech startups navigate complex healthcare ecosystems and provide strategic guidance for PE/VC advisory." />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://arclightint.com/" />
    <meta property="og:title" content="Arclight Intelligence - Healthcare Innovation Consulting" />
    <meta property="og:description" content="Bespoke consulting for healthcare innovation. We help healthtech startups navigate complex healthcare ecosystems and provide strategic guidance for PE/VC advisory." />
    <meta property="og:image" content="/logo.png" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://arclightint.com/" />
    <meta property="twitter:title" content="Arclight Intelligence - Healthcare Innovation Consulting" />
    <meta property="twitter:description" content="Bespoke consulting for healthcare innovation. We help healthtech startups navigate complex healthcare ecosystems and provide strategic guidance for PE/VC advisory." />
    <meta property="twitter:image" content="/logo.png" />
    
    <!-- Structured Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Arclight Intelligence",
      "url": "https://arclightint.com",
      "logo": "https://arclightint.com/logo.png",
      "description": "Bespoke consulting for healthcare innovation",
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "contact@arclightint.com",
        "contactType": "customer service"
      },
      "founder": {
        "@type": "Person",
        "name": "Dr. Ari Robicsek",
        "jobTitle": "Founder",
        "url": "https://www.linkedin.com/in/ari-robicsek-a408bba2/"
      },
      "service": [
        {
          "@type": "Service",
          "name": "Startup Strategy",
          "description": "We help healthtech startups navigate technically and politically complex healthcare ecosystems, RFP processes, and enterprise sales cycles."
        },
        {
          "@type": "Service", 
          "name": "PE & VC Advisory",
          "description": "We provide deep operational insights, due diligence expertise, and strategic assessment of healthcare technology companies."
        },
        {
          "@type": "Service",
          "name": "Healthcare AI & Data",
          "description": "We guide healthcare organizations through AI adoption, analytics transformation, and data strategy development."
        }
      ]
    }
    </script>
  </head>
  <body>
    <div id="root">${appHtml}</div>
  </body>
</html>`
}