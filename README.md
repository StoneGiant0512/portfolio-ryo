# Portfolio

A dark-themed portfolio built with **React** (Vite). Sections: **Home**, **About Me**, **Projects**, **Contact**.

## Run locally

```bash
npm install
npm run dev
```

Then open the URL shown (e.g. `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Customize

- **Name & tagline**: Edit `src/components/Hero.jsx`.
- **About**: Edit `src/components/About.jsx` and the experience card.
- **Projects**: Edit the `PROJECTS` array in `src/components/Projects.jsx` and add images if you like.
- **Contact**: Update links in `src/components/Contact.jsx`.
- **Footer**: Edit `src/components/Footer.jsx`.

## Structure

- `src/App.jsx` — Main app and active-section state
- `src/components/` — Header, Hero, About, Projects, Contact, Footer
- `src/App.css` — Dark theme and layout (Instrument Serif + DM Sans)
