# ShlGrow Portfolio Website - Design Guidelines

## Design Approach
**Reference-Based**: Drawing inspiration from modern digital agency portfolios with a YouTube/creator economy focus. The design combines sleek professionalism with dynamic, video-platform aesthetics.

## Core Design Elements

### A. Color Palette
**Dark Mode Primary:**
- Background: Dark Navy (#0a0f1b)
- Primary Accent: Teal (vibrant, for CTAs and key elements)
- Secondary Accent: Gold (#f4d03f) (strategic use for premium touches, certifications, highlights)
- Text: White/light grays for optimal dark mode readability

**Color Strategy:**
- Dark navy creates professional, cinematic backdrop reminiscent of video editing suites
- Teal provides energetic, modern contrast for interactive elements
- Gold sparingly applied for premium feel and important certifications/badges
- High contrast ensured throughout for accessibility

### B. Typography
**Heading Font:** Montserrat (bold, modern, excellent for impact)
- Hero headline: Extra bold, large scale
- Section headings: Bold weight
- Card titles: Semi-bold

**Body Font:** Lato (clean, readable, professional)
- Body text: Regular weight
- Captions: Light weight
- Form labels: Medium weight

**Hierarchy:** Clear size progression from h1 (hero) → h2 (sections) → h3 (cards) → body

### C. Layout System
**Spacing:** Tailwind spacing units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-16 to py-24
- Card padding: p-6 to p-8
- Element gaps: gap-6 to gap-8

**Grid Patterns:**
- Team cards: 4-column grid (lg:grid-cols-4)
- Services/Why YouTube: 3-column grid (lg:grid-cols-3)
- Portfolio: 3-column masonry-style grid
- Testimonials: 2-column grid (lg:grid-cols-2)

### D. Component Library

**Navigation:**
- Fixed/sticky header with dark navy background and blur effect on scroll
- Logo placement left, navigation links right
- Mobile: Hamburger menu with slide-in drawer

**Hero Section:**
- Parallax background with YouTube studio image (dark overlay for text readability)
- Gradient-shift animation on background (subtle teal-to-navy gradient animation)
- Centered content with large headline, subheadline, primary CTA button
- Height: min-h-screen for full viewport impact

**Cards:**
- Team cards: Photo, name, role, bio with hover-scale effect
- Service cards: Icon/graphic, title, description with subtle hover-lift
- Portfolio cards: Thumbnail image with overlay play button, project title, hover reveals details
- Testimonial cards: Quote, client photo, name, platform, star rating

**Forms:**
- Contact form with clean input fields (dark backgrounds with teal focus states)
- Checkbox for GDPR consent with link to privacy policy
- Inline validation indicators
- Submit button with teal background and gold hover state

**Buttons:**
- Primary CTA: Teal background, white text, gold hover state
- Secondary: Outline variant with teal border, blur background when on images
- Icon buttons: Circular, teal with white icons

**Stats Section:**
- Large numbers in gold color
- Animated counters (count-up effect on scroll into view)
- Clean typography with descriptive labels

### E. Animations & Interactions
**Page Load:**
- Fade-in-up animation for sections as they scroll into viewport
- Stagger animations for card grids (sequential reveal)

**Hover States:**
- Cards: Subtle scale (hover-scale), shadow increase
- Buttons: Color shift (teal → gold transition)
- Portfolio thumbnails: Play button pulse, overlay opacity change

**Continuous:**
- Hero gradient: Slow gradient-shift animation (15s loop)
- Stats: Pulse animation on icons
- Social icons: Gentle bounce on hover

**Parallax:**
- Hero background: Slower scroll rate than content (0.5x speed)
- Section backgrounds: Subtle parallax where appropriate

## Images & Media

**Hero Image:**
- Large, high-quality YouTube studio setup image
- Dark overlay (40-50% opacity) to ensure text readability
- Aspect ratio: Wide landscape for cinematic feel
- Parallax scroll effect implemented

**Portfolio Thumbnails:**
- YouTube-style 16:9 aspect ratio thumbnails
- Placeholder: Unsplash images related to content creation, video production
- Overlay with play button icon (centered, white with teal accent)
- Hover state reveals project details overlay

**Team Photos:**
- Professional headshots, circular or rounded square format
- Consistent sizing and style across all team members
- High contrast against dark background

**Icons:**
- Use Heroicons or Font Awesome via CDN
- Service icons: Outline style in teal
- Social media: Brand-colored icons (YouTube red, Instagram gradient, LinkedIn blue)
- Certification badges: Gold-accented icons

## Layout Specifics

**Single-Page Structure:**
1. Parallax hero with CTA
2. About (company story + team grid)
3. Stats counter
4. Services grid
5. Why YouTube persuasive section
6. Portfolio showcase
7. Testimonials carousel
8. Why Choose Us grid
9. Contact form with embedded Netlify Forms
10. Footer (social links, privacy policy, certifications)

**Vertical Flow:**
- Sections alternate visual density (image-heavy → text-heavy)
- Consistent py-16 to py-24 spacing between sections
- Dark navy background throughout with subtle texture/gradient overlays

**Responsive Behavior:**
- Desktop: Multi-column grids as specified
- Tablet: 2-column grids, reduced spacing
- Mobile: Single column stack, full-width cards, condensed hero

## Special Features

**GDPR Compliance:**
- CookieBot integration with banner linking to /privacy-policy
- Consent checkbox in contact form (required)
- Clear privacy policy link in footer

**Performance:**
- Lazy loading for images below fold
- Optimized animation performance (transform/opacity only)
- Google Analytics integration (G-XYZ placeholder)

**Accessibility:**
- High contrast dark mode throughout
- Focus states on all interactive elements (teal outline)
- Proper heading hierarchy
- Alt text for all images
- Form labels and validation messages