# Free Folio HTML Template — FOLIOFRAME

A premium creative portfolio template built with vanilla HTML, CSS, and JavaScript. Designed for designers, developers, and creative agencies who want to showcase their work with elegance and impact.

**Design. Build. Inspire.**

---

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | [index.html](index.html) | Hero section, portfolio grid, about, services, testimonials, contact CTA |
| About | [about.html](about.html) | Story, bio, skills grid, process steps |
| Projects | [projects.html](projects.html) | Full portfolio with filter tabs (All, Web, Brand, UI/UX) |
| Contact | [contact.html](contact.html) | Contact info cards, form, social links, map placeholder |

---

## Features

- **Responsive Design** — Fluid layout with breakpoints at 980px (2-col) and 720px (1-col + mobile nav)
- **Dark Navy + Gold Theme** — Navy (#0A0E17) background with gold (#D4A853) accents throughout
- **Typography System** — Space Mono (display/headings) + DM Sans (body) from Google Fonts
- **Portfolio Grid** — 2x3 grid with hover overlays showing project title and category
- **Filter Tabs** — Client-side portfolio filtering on the Projects page
- **Scroll Reveal** — IntersectionObserver-powered fade-in animations with staggered timing
- **Contact Form** — Client-side validation with success/error states (no alerts)
- **Mobile Navigation** — Animated burger menu with full-screen overlay
- **Accessibility** — ARIA attributes, keyboard-navigable, reduced-motion support
- **CSS Custom Properties** — Complete design token system for easy theming
- **No Dependencies** — Pure vanilla HTML, CSS, and JavaScript. Zero frameworks.

---

## Quick Start

1. Open `index.html` in your browser, or serve with any static server:

```bash
# Python
python3 -m http.server 8080

# Node.js
npx serve .

# PHP
php -S localhost:8080
```

2. Navigate between pages using the header navigation.
3. Customize colors by editing CSS custom properties in `assets/css/style.css`.

---

## File Structure

```
free-folio-html-template/
  assets/
    css/
      style.css          # Full design system (600+ lines)
    img/
      about.jpg
      blog-1.jpg
      blog-2.jpg
      blog-3.jpg
      portfolio-1.jpg
      portfolio-2.jpg
      portfolio-3.jpg
      portfolio-4.jpg
      portfolio-5.jpg
      portfolio-6.jpg
      profile.jpg
      testimonial-1.jpg
      testimonial-2.jpg
      testimonial-3.jpg
    js/
      main.js            # Navigation, reveals, form handling, filters
  index.html             # Home page
  about.html             # About page
  projects.html          # Full portfolio page
  contact.html           # Contact page
  README.md              # This file
```

---

## Customization

### Colors

Edit the CSS custom properties in `:root` within `assets/css/style.css`:

```css
--c-navy:     #0A0E17;   /* Primary background */
--c-gold:     #D4A853;   /* Accent color */
--c-charcoal: #151A23;   /* Card/section backgrounds */
--c-white:    #F8FAFC;   /* Primary text */
```

### Typography

Swap the Google Fonts import and update `--ff-display` / `--ff-body`:

```css
@import url('https://fonts.googleapis.com/css2?family=YOUR+FONT&display=swap');
--ff-display: 'Your Font', monospace;
--ff-body:    'Your Font', sans-serif;
```

### Images

Replace the images in `assets/img/` with your own. Recommended sizes:

- **portfolio-\*.jpg** — 800x600px or larger (4:3 aspect ratio)
- **profile.jpg** — 600x800px (3:4 portrait)
- **testimonial-\*.jpg** — 200x200px (square, will be cropped to circle)
- **about.jpg** — 1600x900px (hero background)

---

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

---

## Let's Build Something Together

Have a project in mind? We'd love to hear about it.

**[Start a Project with FOLIOFRAME](https://tally.so/r/q4q1L9)**

---

*Built with care. No frameworks. No bloat. Just clean code.*
