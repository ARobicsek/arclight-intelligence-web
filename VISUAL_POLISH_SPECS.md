# Arclight Intelligence Visual Polish Specifications

Based on the provided mockup and design requirements, this document outlines the comprehensive visual polish specifications for the Arclight Intelligence website.

## Overall Design System

### Color Palette
- **Background**: Light beige/cream `#F5F0E8`
- **Text Primary**: Black `#000000`
- **Text Secondary**: Dark gray `#333333` / `#444444`
- **Text Muted**: Medium gray `#666666`
- **Card Borders**: Light gray/tan `#D4C5B9`
- **Card Background**: Transparent or same as main background

### Typography System
- **Font Family**: Inter, Helvetica Neue, or system fonts
- **Base Font Size**: 16px
- **Line Height**: 1.5-1.7 for body text

## Layout Structure

### 1. Header Section
- **Container**: Full width, padding 40px top/bottom, 60px left/right
- **Logo**: Position top-left, use `/public/logo.png`, approximately 160px width
- **Contact Link**: Position top-right
  - Text: "CONTACT" (uppercase)
  - Color: Black `#000000`
  - Font-weight: 500-600
  - No underline
- **Layout**: Flexbox with `justify-content: space-between` and `align-items: center`

### 2. Hero Section
- **Container**: Centered content, max-width 900px
- **Main Heading**: "ILLUMINATE THE PATH FORWARD"
  - Font-size: 48-54px
  - Font-weight: 900 (extra bold)
  - Letter-spacing: -0.02em (slightly condensed)
  - Margin-bottom: 20px
- **Subheading**: "Bespoke Consulting for Healthcare Innovation"
  - Font-size: 18-20px
  - Font-weight: 400
  - Color: `#333` or `#444`
  - Margin-bottom: 40px
- **Button**: "DISCOVER SOLUTIONS"
  - Border: 2px solid black
  - Background: transparent
  - Padding: 12px 30px
  - Font-size: 14px
  - Letter-spacing: 0.05em
  - Uppercase text
  - Font-weight: 600

### 3. Our Expertise Section
- **Section Title**: "OUR EXPERTISE"
  - Center-aligned
  - Font-size: 32-36px
  - Font-weight: 700
  - Margin-top: 80px
  - Margin-bottom: 50px
- **Cards Container**:
  - CSS Grid or Flexbox
  - 3 equal columns
  - Gap between cards: 30px
  - Max-width: 1100px, centered
- **Individual Cards**:
  - Border: 1px solid `#D4C5B9`
  - Border-radius: 8px
  - Padding: 40px 30px
  - Min-height: 220px
  - Text-align: center
  - Hover effect: `box-shadow: 0 4px 12px rgba(0,0,0,0.1)`

#### Card Content Structure:
1. **PE/VC ADVISORY**
   - Icon: `/public/briefcase.svg` (60x60px) - fallback to briefcase icon
   - Title: "PE/VC ADVISORY" (font-size: 16px, font-weight: 700, margin: 20px 0 10px)
   - Description: Lorem ipsum text (font-size: 14px, line-height: 1.6, color: `#666`)

2. **STARTUP STRATEGY**
   - Icon: `/public/chart.svg` (60x60px) - fallback to chart icon
   - Title: "STARTUP STRATEGY"
   - Same text styling as Card 1

3. **HEALTHCARE AI/DATA**
   - Icon: `/public/gears.svg` (60x60px) - fallback to gears icon
   - Title: "HEALTHCARE AI/DATA"
   - Same text styling as Card 1

### 4. About Us Section
- **Container**:
  - Max-width: 400px
  - Positioned on left side of viewport
  - Margin-top: 80px
  - Margin-left: 60px (same as header padding)
  - Border: 1px solid `#D4C5B9`
  - Border-radius: 8px
  - Padding: 40px
- **Content**:
  - Icon: Circular decorative element (60x60px)
  - Title: "ABOUT US" (font-size: 24px, font-weight: 700, margin: 20px 0)
  - Description: Lorem ipsum text (font-size: 14px, line-height: 1.7, color: `#666`)

### 5. Footer
- **Container**: Full width, margin-top: 100px, padding: 40px 60px
- **Layout**: Flexbox with space-between
- **Left Side**:
  - Logo: Same as header, approximately 140px width
  - Copyright: "© 2024 Arclight Intelligence. All rights reserved." (font-size: 12px, color: `#666`)
- **Right Side**:
  - Empty (Social icons removed per user request)

## Responsive Design

### Mobile (< 768px)
- Cards stack vertically
- Reduce font sizes by 10-20%
- Header padding: 20px
- Center About Us section
- Ensure touch-friendly interactive elements

### Desktop Constraints
- Max-width: 1440px on larger screens
- Center entire layout

## Interactive Elements

### Hover States
- Cards: Subtle shadow `box-shadow: 0 4px 12px rgba(0,0,0,0.1)`
- Buttons: Smooth transitions
- Navigation links: Color transitions

### Smooth Scrolling
- Implement smooth scroll behavior for navigation
- Add anchor links for section navigation

## Asset Requirements

### Icons Needed
- `/public/briefcase.svg` - PE/VC Advisory
- `/public/chart.svg` - Startup Strategy  
- `/public/gears.svg` - Healthcare AI/Data
- Circular decorative element for About section
- (Social icons removed)

### Logo Usage
- Header: `/public/logo.png` at 160px width
- Footer: Same logo at 140px width

## Accessibility Requirements
- Sufficient contrast ratios for all text against beige background
- Focus states for all interactive elements
- Semantic HTML structure
- Alt text for all images and icons

## Implementation Notes
- Use CSS custom properties for consistent color usage
- Implement smooth transitions (0.3s ease) for all interactive elements
- Ensure cross-browser compatibility
- Optimize for performance with efficient CSS and minimal layout shifts