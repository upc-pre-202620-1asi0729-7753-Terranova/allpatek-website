# ALLPATEK

Landing page for ALLPATEK, a platform that connects buyers with farmers through managed plots, milestone-protected payments, and real-time traceability.

This project is a static website (HTML, CSS, and JavaScript). It was not generated with Angular CLI.

## Development server

To preview the site locally, run:

```
npx serve .
```

Once the server is running, open your browser and navigate to `http://localhost:3000/`.

You can also open `index.html` directly in the browser.

## Pages

- `index.html` — marketing landing (hero, services, milestones, testimonials, plans, team carousel, contact form, footer)
- `plataforma.html` — access to the published web platform

The navbar **Get Started** button opens the production web app at `https://terranova-allpatek.netlify.app/`.

## Features

- Responsive layout for desktop and mobile
- Mobile navigation menu
- Scroll-aware active section in the navbar
- Team carousel with autoplay, swipe, and keyboard controls
- Contact form validation (name, email, and phone) sent to an n8n webhook
- English (`en_US`) and Spanish (`es_419`) translations, with EN/ES switcher
- Selected language is stored in `localStorage`
- Footer social links (Facebook, Instagram, LinkedIn, YouTube) that open in a new tab
- Terms and Conditions and Privacy Policy downloadable as PDF, in the active language

## Project structure

```
assets/          images and icons
assets/social/   footer social media icons
assets/legal/    Terms and Conditions and Privacy Policy PDFs (EN and ES)
index.html       landing page
plataforma.html  coming-soon page
script.js        navbar, form validation, carousel, and i18n
styles.css       global styles and section layouts
```

## Building

No build step is required. The site runs from the source files.

## Additional resources

- English and Spanish copy lives in `script.js` (`MESSAGES`)
- Translation keys in the HTML use the `{key}` format (example: `{hero.title}`)
