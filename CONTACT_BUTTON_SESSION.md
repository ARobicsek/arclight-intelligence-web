# Next Session: Fix Contact Button Functionality

## Current Issue
The contact buttons (both desktop header and mobile footer versions) are currently using `window.location.href = 'mailto:...'` which may not work reliably across all devices and email clients.

## Current Implementation
Both buttons use this onClick handler:
```javascript
onClick={() => window.location.href = 'mailto:contact@arclightintelligence.com?subject=Inquiry from Website'}
```

## Goals for Next Session
1. **Test current functionality** - Verify if the mailto links work on different devices/browsers
2. **Improve contact button reliability** - Consider alternatives like:
   - Contact form modal/popup
   - Dedicated contact page
   - Better mailto implementation with fallbacks
   - Copy email to clipboard functionality
3. **Enhanced user experience** - Add visual feedback when contact button is clicked
4. **Responsive testing** - Ensure contact method works well on both desktop and mobile

## Technical Considerations
- Email client availability varies by device
- Some browsers block mailto links
- Mobile devices may not have email apps configured
- Consider accessibility for users without email clients

## Files to Focus On
- `src/App.tsx` (lines ~21 and ~244) - Contact button implementations
- `src/App.css` - Contact button styling
- Consider creating new contact-related components if implementing forms

## Current Button Locations
- **Desktop**: Header navigation (hidden on mobile)
- **Mobile**: Footer area (hidden on desktop)
- Both buttons have consistent styling and the same mailto functionality

## Next Steps
1. Test current mailto functionality across browsers/devices
2. Research and implement more reliable contact methods
3. Add user feedback/confirmation when contact action is triggered
4. Ensure accessibility and cross-platform compatibility