# RemoteRecruit – Home Page

A modern, fully responsive landing page for RemoteRecruit built with Next.js, React, Tailwind CSS, and Framer Motion.

## 📋 Project Overview

This project recreates the RemoteRecruit features page based on Figma design specifications with full support for desktop, tablet, and mobile views. The page includes smooth scroll animations, interactive components, and a scroll-to-top button.

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/nh-nahid/remote-recruit.git
cd remote-recruit
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Tech Stack

- **Framework**: Next.js 14+ / React 18+
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Image Optimization**: Next.js Image component (with lazy loading)
- **Deployment**: Vercel (recommended)

## 🏗️ Project Structure

```
components/
├── Hero.jsx              # Hero section with fade-in animation
├── Feature1.jsx          # Global reach feature with scroll animation
├── Feature2.jsx          # Fee-free feature with scroll animation
├── Showcase.jsx          # Custom profile showcase
├── Trial.jsx             # Call-to-action section
├── Questions.jsx         # Interactive FAQ accordion
├── Footer.jsx            # Pricing cards & footer
├── ScrollToTop.jsx       # Floating scroll-to-top button
├── header/
│   └── Nav.jsx          # Navigation bar
└── ui/
    ├── Button.jsx       # Reusable button component
    └── PricingCard.jsx  # Pricing card component
```

## ✨ Features

✅ **Fully Responsive Design**
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Tested on all device sizes

✅ **Smooth Animations**
- Scroll-triggered fade-in/slide-up animations using Framer Motion
- `whileInView` for performance (animations only when in viewport)
- Hero heading entrance animation
- Button hover/active states with scale transitions
- Smooth scroll behavior across the entire page

✅ **Interactive Components**
- Expandable FAQ accordion with smooth transitions
- Hover effects on feature images and cards
- Pricing card lift effect on hover
- Social icon interactions in footer

✅ **Performance Optimized**
- Image lazy loading via Next.js `<Image>` component
- Optimized animations with `margin: "-100px"` viewport detection
- Efficient CSS with Tailwind's utility classes
- Reduced motion support for accessibility

✅ **Scroll-to-Top Button**
- Appears after scrolling 400px
- Smooth fade-in/out animation
- Arrow icon SVG for modern look
- Click to smoothly scroll to top

## 🎨 Customization

### Colors
Update color values in components:
- Primary: `#4DA8CC`, `#1E3E85`
- Accent: `#52B4DA`, `#C2EEFF`
- Text: `#11142D`, `#767784`

### Animations
Modify animation speeds in Framer Motion components:
```jsx
transition={{ duration: 0.6, ease: "easeOut" }}
```

### Typography
Adjust font sizes and weights in Tailwind classes:
```jsx
className="text-[28px] sm:text-[36px] md:text-[40px]"
```

## 📊 Lighthouse Performance

Target scores:
- Performance: ≥ 90
- Accessibility: ≥ 90
- Best Practices: ≥ 90
- SEO: ≥ 90

Run Lighthouse audit:
```bash
npm run build
npm run start
# Open Chrome DevTools → Lighthouse → Generate report
```


## 🔧 Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📝 Component Details

### Hero Section
- Full-screen background image
- Centered content with fade-in animation
- Responsive text scaling
- Navigation bar with auth buttons

### Feature Sections (Feature1, Feature2, Showcase)
- Image + text layout with alternating sides
- Scroll-triggered slide-up animations
- Hover effects on images
- Responsive stacking on mobile

### Trial Section
- Background image with overlay card
- Frosted glass effect on mobile (better readability)
- Call-to-action button with icon
- Responsive positioning

### Questions Section (FAQ)
- Interactive accordion using React hooks
- Smooth height transitions
- Rotating icon indicator
- Real content instead of placeholder text

### Footer
- Pricing cards with hover animations
- Social media links with interactions
- Logo and branding
- Background image

### ScrollToTop Button
- Appears after 400px scroll
- Uses Framer Motion for animations
- Accessible with ARIA labels
- Smooth scroll behavior

## 🐛 Known Issues & Limitations

1. **Background Images via Tailwind**
   - Hero and Trial sections use CSS `background-image` (not lazy-loaded via Next.js)
   - Could be optimized by replacing with `<Image>` component positioned absolutely

2. **Accordion Animation**
   - Uses `max-h` for smooth open/close (set to 200px, may need adjustment for longer content)

3. **Browser Support**
   - Requires modern browsers with Tailwind CSS and ES6+ support
   - CSS Grid/Flexbox features used throughout

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md, lg)
- **Desktop**: > 1024px (xl, 2xl)

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Reduced motion media query in globals.css
- Color contrast meets WCAG AA standards
- Image alt text on all images


## 🤝 Contributing

Suggestions for improvements:
- Lazy load background images using `next/image`
- Add form validation to CTA buttons
- Implement dark mode toggle
- Add more micro-interactions
- Expand FAQ with search functionality

## 📞 Support

For issues or questions, please check the GitHub issues or reach out to the development team.

## 📄 License

This project is proprietary and for RemoteRecruit use only.

---

**Last Updated**: June 2024 </br>
**Status**: ✅ Production Ready
