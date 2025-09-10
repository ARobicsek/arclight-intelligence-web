# SSR Implementation Session Prompt

## 🚀 Ready to Start SSR Implementation

**Copy and paste this prompt to begin the SSR implementation in your next Claude Code session:**

---

**PROMPT FOR NEXT SESSION:**

```
I need to implement Server-Side Rendering (SSR) for my React + Vite application to improve Google crawler accessibility. 

CONTEXT:
- Current stack: React 19 + Vite + TypeScript + Tailwind CSS
- Project: Arclight Intelligence healthcare consulting website
- Goal: Enable Google crawlers to read full page content without JavaScript
- Approach: Comprehensive Vite SSR implementation

CURRENT ISSUE:
My webpage content is only rendered client-side via React, so Google crawlers see an empty <div id="root"></div> instead of the actual content. I have a detailed implementation checklist ready.

NEXT STEPS:
1. Please read the SSR_IMPLEMENTATION_CHECKLIST.md file to understand the full plan
2. Start with Phase 1: Project Setup & Configuration
3. Follow the checklist step-by-step, marking items as completed
4. Test each phase before moving to the next

IMPORTANT:
- Use the TodoWrite tool to track progress through the checklist
- Test SSR output frequently with curl/browser tools
- Ensure all existing functionality remains intact
- Focus on getting Google crawlers to see the full page content

Please begin by reading the checklist and starting Phase 1.
```

---

## 📁 Files Reference

**Checklist**: `SSR_IMPLEMENTATION_CHECKLIST.md` - Complete step-by-step implementation guide

**Key Project Files to Reference:**
- `package.json` - Current dependencies and scripts
- `vite.config.ts` - Current Vite configuration  
- `src/App.tsx` - Main React component with all content
- `src/main.tsx` - Current client entry point
- `dist/index.html` - Current HTML output (shows the crawler problem)

## 🎯 Success Criteria Reminder

At the end of implementation, running `curl http://localhost:3000` should return HTML containing:
- "ILLUMINATE THE PATH FORWARD" 
- "STARTUP STRATEGY"
- "PE & VC ADVISORY" 
- "HEALTHCARE AI & DATA"
- "ABOUT US" section content
- All contact information

## ⚡ Quick Start Commands

Once implementation begins:

```bash
# Install dependencies
npm install --save-dev @types/node
npm install express @types/express

# Test current output (should be empty)
npm run build
npm run preview
curl http://localhost:4173

# After SSR implementation  
npm run build
npm run serve
curl http://localhost:3000
```

## 🔍 Validation Commands

```bash
# Check if content is in server response
curl http://localhost:3000 | grep "ILLUMINATE THE PATH FORWARD"
curl http://localhost:3000 | grep "STARTUP STRATEGY"

# Lighthouse SEO test
npx lighthouse http://localhost:3000 --only-categories=seo --view
```

---

**Ready to implement!** Copy the prompt above to start your SSR implementation session.