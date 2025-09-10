# SSR Implementation Checklist

## 🎯 Project: Arclight Intelligence - Vite SSR Implementation

**Goal**: Enable Google crawlers to read full page content by implementing server-side rendering

**Current Stack**: React 19 + Vite + TypeScript + Tailwind CSS

**Estimated Total Time**: 10-15 hours

---

## Phase 1: Project Setup & Configuration
**Estimated Time: 2-3 hours**

### 1.1 Install Dependencies
- [ ] Run `npm install --save-dev @types/node`
- [ ] Install express: `npm install express`
- [ ] Install express types: `npm install --save-dev @types/express`

### 1.2 Update Project Structure
- [ ] Create `src/entry-server.tsx` for server entry point
- [ ] Create `src/entry-client.tsx` for client hydration  
- [ ] Update `src/main.tsx` to support hydration
- [ ] Create `server.js` for Express/Node server
- [ ] Update `vite.config.ts` for SSR support

### 1.3 Configure Build Scripts
- [ ] Update `package.json` scripts with:
  ```json
  {
    "build": "npm run build:client && npm run build:server",
    "build:client": "vite build --outDir dist/client",
    "build:server": "vite build --outDir dist/server --ssr src/entry-server.tsx",
    "serve": "node server.js",
    "preview": "npm run build && npm run serve",
    "dev:ssr": "node server.js"
  }
  ```

---

## Phase 2: Core SSR Implementation  
**Estimated Time: 3-4 hours**

### 2.1 Server Entry Point (`src/entry-server.tsx`)
- [ ] Import React and ReactDOMServer
- [ ] Create `render` function that takes URL and returns HTML string
- [ ] Import and render App component with `renderToString`
- [ ] Create HTML template with proper meta tags
- [ ] Handle CSS injection for Tailwind/styled components
- [ ] Add error boundary handling for server errors
- [ ] Export render function as default

### 2.2 Client Entry Point (`src/entry-client.tsx`)  
- [ ] Import React and ReactDOM
- [ ] Replace `createRoot().render()` with `hydrateRoot()`
- [ ] Ensure client-side hydration matches server output exactly
- [ ] Add hydration error handling and logging
- [ ] Import CSS files for client-side

### 2.3 Update Main Entry (`src/main.tsx`)
- [ ] Modify to work with both server and client entry points
- [ ] Extract App component rendering logic
- [ ] Ensure CSS imports are handled properly

### 2.4 Express Server (`server.js`)
- [ ] Set up Express server with static file serving
- [ ] Configure middleware for serving client build assets
- [ ] Implement SSR route handler for all pages (`*`)
- [ ] Add production/development environment handling
- [ ] Configure proper HTTP headers (Cache-Control, Content-Type)
- [ ] Add error handling middleware
- [ ] Set server to listen on port 3000 with fallback

### 2.5 Vite Configuration Updates
- [ ] Add SSR build configuration to `vite.config.ts`
- [ ] Configure separate client/server build outputs
- [ ] Set up development SSR middleware (optional)
- [ ] Handle asset management for both builds
- [ ] Ensure Tailwind CSS works in SSR mode

---

## Phase 3: Content & SEO Optimization
**Estimated Time: 2-3 hours**

### 3.1 Dynamic Meta Tags
- [ ] Create SEO context provider component
- [ ] Implement meta tag injection system in server render
- [ ] Add structured data (JSON-LD) for business information
- [ ] Configure dynamic Open Graph tags based on content
- [ ] Ensure all existing meta tags render server-side

### 3.2 Content Preloading
- [ ] Verify all static content renders on server-side
- [ ] Optimize image loading with proper `alt` attributes
- [ ] Implement critical CSS inlining for above-fold content
- [ ] Add preconnect/prefetch hints for external resources
- [ ] Ensure contact mailto links work in SSR

### 3.3 Performance Optimizations
- [ ] Implement code splitting for non-critical components
- [ ] Configure bundle size optimization
- [ ] Set up compression (gzip/brotli) in Express
- [ ] Optimize Tailwind CSS purging for production
- [ ] Add resource hints (preload, prefetch) to HTML template

---

## Phase 4: Testing & Validation
**Estimated Time: 2-3 hours**

### 4.1 Crawler Testing
- [ ] Test server output with `curl http://localhost:3000` 
- [ ] Validate content appears in raw HTML response
- [ ] Test with Google Search Console URL inspection
- [ ] Validate with Facebook Sharing Debugger
- [ ] Check Twitter Card Validator
- [ ] Run Lighthouse SEO audit (target score > 95)
- [ ] Test with various user agents (Googlebot, etc.)

### 4.2 Functionality Testing
- [ ] Verify all interactive elements work post-hydration
- [ ] Test contact button mailto functionality
- [ ] Test responsive design on mobile/desktop
- [ ] Validate hover effects and transitions work
- [ ] Check error boundaries function properly
- [ ] Test navigation and routing (if applicable)

### 4.3 Performance Validation
- [ ] Run Core Web Vitals tests
- [ ] Measure Time to First Byte (TTFB) < 600ms
- [ ] Check Largest Contentful Paint (LCP) < 2.5s
- [ ] Validate Cumulative Layout Shift (CLS) < 0.1
- [ ] Test First Contentful Paint (FCP) < 1.8s
- [ ] Verify hydration happens quickly and smoothly

---

## Phase 5: Production Deployment
**Estimated Time: 1-2 hours**

### 5.1 Server Configuration
- [ ] Configure production Node.js server environment
- [ ] Set up process management (PM2 recommended)
- [ ] Configure reverse proxy (nginx/Apache) if needed
- [ ] Set up SSL certificates for HTTPS
- [ ] Configure CDN for static assets
- [ ] Set appropriate environment variables

### 5.2 Monitoring & Analytics
- [ ] Add server-side logging for errors and performance
- [ ] Configure error tracking (Sentry or similar)
- [ ] Set up performance monitoring
- [ ] Enable Google Analytics with server-side events
- [ ] Add health check endpoint for monitoring

---

## 📋 Success Criteria Checklist

### SEO & Crawling
- [ ] Google crawler can read full page content without JavaScript
- [ ] All text content appears in browser "View Source"
- [ ] Meta tags and structured data render server-side
- [ ] Social media link previews work correctly (LinkedIn, Facebook, Twitter)

### Performance  
- [ ] Page loads in < 2 seconds (Core Web Vitals passing)
- [ ] Lighthouse SEO score > 95
- [ ] Lighthouse Performance score > 90
- [ ] No hydration mismatches or errors in console

### Functionality
- [ ] All interactive functionality remains intact post-hydration
- [ ] Contact buttons and mailto links work properly
- [ ] Responsive design works on all devices
- [ ] Error handling works in both server and client modes

---

## 🔧 Key Files Created/Modified

**New Files:**
- `src/entry-server.tsx` - Server-side rendering entry point
- `src/entry-client.tsx` - Client-side hydration entry point  
- `server.js` - Express server for SSR

**Modified Files:**
- `package.json` - Updated build scripts
- `vite.config.ts` - Added SSR configuration
- `src/main.tsx` - Modified for hydration support

**Generated Files:**
- `dist/client/` - Client-side build output
- `dist/server/` - Server-side build output

---

## 🚨 Important Notes

1. **Backup First**: Create git commit before starting implementation
2. **Test Frequently**: Test SSR output after each major change
3. **CSS Handling**: Ensure Tailwind CSS classes render properly in SSR
4. **Asset Paths**: Verify all image and asset paths work in SSR mode
5. **Environment Variables**: Keep development and production configs separate

---

**Last Updated**: January 2025  
**Project**: Arclight Intelligence Web  
**Implementation Type**: Comprehensive Vite SSR