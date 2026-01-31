## Design System: Eri Portfolio 90s

### Pattern
- **Name:** Feature-Rich Showcase
- **CTA Placement:** Above fold
- **Sections:** Hero > Features > CTA

### Style
- **Name:** Retro-Futurism
- **Keywords:** Vintage sci-fi, 80s aesthetic, neon glow, geometric patterns, CRT scanlines, pixel art, cyberpunk, synthwave
- **Best For:** Gaming, entertainment, music platforms, tech brands, artistic projects, nostalgic, cyberpunk
- **Performance:** ⚠ Moderate | **Accessibility:** ⚠ High contrast/strain

### Colors
| Role | Hex |
|------|-----|
| Primary | #EC4899 |
| Secondary | #F472B6 |
| CTA | #06B6D4 |
| Background | #FDF2F8 |
| Text | #831843 |

*Notes: Bold pink + cyan accent*

### Typography
- **Heading:** Abril Fatface
- **Body:** Merriweather
- **Mood:** retro, vintage, nostalgic, dramatic, decorative, bold
- **Best For:** Vintage brands, breweries, restaurants, creative portfolios, posters
- **Google Fonts:** https://fonts.google.com/share?selection.family=Abril+Fatface|Merriweather:wght@300;400;700
- **CSS Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Merriweather:wght@300;400;700&display=swap');
```

### Key Effects
CRT scanlines (::before overlay), neon glow (text-shadow+box-shadow), glitch effects (skew/offset keyframes)

### Avoid (Anti-patterns)
- Minimalist design
- Static assets

### Pre-Delivery Checklist
- [ ] No emojis as icons (use SVG: Heroicons/Lucide)
- [ ] cursor-pointer on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Light mode: text contrast 4.5:1 minimum
- [ ] Focus states visible for keyboard nav
- [ ] prefers-reduced-motion respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px

