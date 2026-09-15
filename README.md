# ALLPATEK

Landing page for ALLPATEK, a B2B platform that connects buyers with farmers through managed plots, milestone-protected payments, and real-time traceability.

This project is a static website (HTML, CSS, and JavaScript). It was not generated with Angular CLI.

## Development server

To preview the site locally, run:

```
npx serve .
```

Once the server is running, open your browser and navigate to `http://localhost:3000/`.

You can also open `index.html` directly in the browser.

## Pages

- `index.html` — marketing landing (hero, services, milestones, testimonials, plans, team, contact form, footer)
- `plataforma.html` — coming-soon page for the web platform

The navbar **Get Started** button goes to `plataforma.html`.

## Features

- Responsive layout for desktop and mobile
- Mobile navigation menu
- Contact form validation
- English (`en_US`) and Spanish (`es_419`) translations, with EN/ES switcher
- Selected language is stored in `localStorage`

## Project structure

```
assets/          images and icons
index.html       landing page
plataforma.html  coming-soon page
script.js        navbar, form validation, and i18n
styles.css       global styles and section layouts
```

## Building

No build step is required. The site runs from the source files.

## Additional resources

- English and Spanish copy lives in `script.js` (`MESSAGES`)
- Translation keys in the HTML use the `{key}` format (example: `{hero.title}`)
