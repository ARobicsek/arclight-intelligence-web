# Arclight Intelligence Website Project Checklist

## Phase 1: Initial Setup (Day 1)
- [x] Create GitHub repository on github.com
- [x] Clone locally with Claude Code
- [ ] Create basic React/TypeScript app with Vite (simpler than webpack)
- [ ] Add Tailwind CSS
- [ ] Create folder structure
- [ ] Add your logo and icon assets

## Phase 2: Basic Structure (Day 1-2)
- [ ] Build single-page layout with sections
- [ ] Add logo and basic styling
- [ ] Create navigation with smooth scroll
- [ ] Add placeholder content

## Phase 3: Deploy to Netlify (Day 2)
- [ ] Connect GitHub to Netlify
- [ ] Deploy basic site
- [ ] Test on mobile devices
- [ ] Get feedback, iterate

## Phase 4: Content & Polish (Day 3-4)
- [ ] Add final copy
- [ ] Implement service cards with your icons
- [ ] Style and animations
- [ ] Simple contact button with mailto: link:
  ```typescript
  <a href="mailto:contact@arclightintelligence.com?subject=Inquiry from Website">
    Contact Us
  </a>
  ```

## Phase 5: Responsive Design (Day 4-5)
- [ ] Mobile optimization
- [ ] Tablet optimization
- [ ] Cross-browser testing

## Phase 6: Final Details (Day 5-6)
- [ ] Meta tags for SEO
- [ ] Create favicon from logo
- [ ] Add Google Analytics (optional)
- [ ] Performance optimization

## Phase 7: Domain (When Ready)
- [ ] Buy domain
- [ ] Connect to Netlify
- [ ] Update email address

---

## Design Notes from Mockup
Based on the homepage mockup, the site features:

- **Header**: Clean logo with "CONTACT" navigation
- **Hero Section**: "ILLUMINATE THE PATH FORWARD" headline with "Bespoke Consulting for Healthcare Innovation" tagline
- **CTA Button**: "DISCOVER SOLUTIONS" 
- **Services Section**: "OUR EXPERTISE" with three service cards:
  - PE/VC ADVISORY (briefcase icon)
  - STARTUP STRATEGY (chart icon) 
  - HEALTHCARE AI/DATA (gear icon)
- **About Section**: "ABOUT US" with placeholder text and circular icon
- **Footer**: Logo, copyright "© 2024 Arclight Intelligence. All your input." and social icons (LinkedIn, Twitter)

**Design Style**: Elegant, minimal, professional with lots of white space and clean typography.

---

## Session Notes: Feb 19, 2026
**Minimalist Monochrome Redesign Implementation**

1.  **Global Styling (`index.css` & `App.css`)**:
    *   Replaced previous styling with a strict `#000000` and `#FFFFFF` (with `#F5F5F5` off-white backgrounds) monochrome palette.
    *   Removed all rounded corners (strict `0px` border-radius) and soft shadows.
    *   Added standard Google Fonts: *Playfair Display* (Headings), *Source Serif 4* (Body), *JetBrains Mono* (Accents).
2.  **Structural Components (`App.tsx`)**:
    *   **Hero**: Updated to use a large, high-impact `Playfair Display` typography ("ILLUMINATE THE PATH FORWARD") and implemented the `texture-grid` background.
    *   **Expertise Section**: Converted cards to use black borders, sharp corners, and instant "color-inversion" hover states (white-on-black). Scaled the expertise icons (Match/Torch/Bulb) up by ~30-40% (`w-16 h-16` / `w-20 h-20`).
    *   **About Us**: Updated text to accurately reflect Dr. Ari Robicsek's background and Arclight Intelligence's mission.
    *   **Logo**: Updated sizing to `h-14` (approx 56px) for better visibility.
3.  **Deployment Prep**:
    *   Project is ready to be built (`npm run build`).
    *   Resultant `dist` folder contents should be uploaded directly to the `public_html` directory of the Namecheap cPanel hosting for `arclightint.com`.

**Next Session Planning**:
- Await user tweaks to the current layout.
- Potential mobile breakpoint adjustments if copy/icons need to be tweaked for specific devices. 