# Portfolio Frontend

A professional React portfolio with Home, About, Projects, Download, and Contact. Built with Vite, TypeScript, Tailwind CSS, Framer Motion, and React Router. Includes dark/light theme toggle with persisted preference and subtle animations.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Profile picture

Place your profile photo at `public/profile.jpg`. It appears on the Home page next to your intro (left on desktop, above on mobile). Use a square or portrait image; it’s displayed at 192×192px with rounded corners. If the file is missing, a placeholder message is shown.

## Project images

Each project can have an `image` URL in [src/data/projects.ts](src/data/projects.ts). For local images, put files in `public/projects/` and set `image` to e.g. `'/projects/faith-leap.jpg'`. Cards show a placeholder (with the project title) if the image is missing or fails to load. Recommended size: 600×340px or similar 16∶9 aspect ratio.

## Replace resume

Place your resume PDF at `public/resume.pdf`. The Download page links to `/resume.pdf` and offers "Download resume (PDF)" and "Open in new tab". Update the `download` attribute in [src/pages/DownloadPage.tsx](src/pages/DownloadPage.tsx) if you want a different filename (e.g. `YourName_Resume.pdf`).

## About page content

- **Bio**: Edit [src/data/about.ts](src/data/about.ts) – `aboutBio` (array of paragraphs) and `skillsByCategory` (object: category name → array of skill strings).
- **Experience**: Edit [src/data/experience.ts](src/data/experience.ts) – array of `{ id, title, organization, period, description? }`.
- **Education**: Edit [src/data/education.ts](src/data/education.ts) – array of `{ id, degree, institution, period, notes? }`.
- **Certificates**: Edit [src/data/certificates.ts](src/data/certificates.ts) – array of `{ id, name, issuer, date, url? }`.

## Contact info and form

- **Contact info**: Edit [src/data/contact.ts](src/data/contact.ts) – `email`, optional `phone`, optional `socials` array of `{ label, url }`. Shown on the Contact page.
- **Contact form**: The form is always shown. If `VITE_CONTACT_FORM_ACTION` is not set, submit opens the user’s email client (mailto). To POST to a service instead, set `VITE_CONTACT_FORM_ACTION` in `.env` to your form endpoint (e.g. [Formspree](https://formspree.io) or Netlify Forms URL).

## Edit projects

Edit [src/data/projects.ts](src/data/projects.ts). Each project has `id`, `title`, `description`, `status` (`'completed'` \| `'working'` \| `'on-hold'` \| `'retired'`), `workedOn` (date range, e.g. `'Mar/3/23 - Apr/5/25'` or `'Mar/3/26 - Current'`), optional `tags`, optional `link`, and optional `image`. Add or remove entries to update the Projects page.

## Theme

The app uses a dark/light theme toggle in the header. The choice is stored in `localStorage` under `portfolio-theme` and applied on load to avoid flash. Tailwind uses `darkMode: 'class'`; the `dark` class is toggled on `<html>`.

## Structure

- **src/pages/** – HomePage, AboutPage, ProjectsPage, DownloadPage, ContactPage
- **src/components/layout/** – Header, ThemeToggle, Footer
- **src/context/** – ThemeContext (theme state + persistence)
- **src/data/** – about, experience, education, certificates, contact, projects
- **src/routes.tsx** – React Router + AnimatePresence page transitions
