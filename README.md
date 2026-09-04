# Shreyank Parmar — Portfolio

Personal portfolio site. Static HTML/CSS/JS, no build step required.

## Structure

```
shreyank-portfolio/
├── index.html              → homepage (About, Work, Design, Skills, Contact)
├── pages/
│   └── isl-connect.html    → ISL Connect case study
├── styles/
│   └── main.css            → shared stylesheet
├── scripts/
│   └── main.js             → scroll-progress trace effect
├── assets/
│   ├── images/              → design pieces, AI-exploration screens
│   └── screenshots/         → ISL Connect product screens
└── README.md
```

## Running locally

No build tools needed — just open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```

## Deploying

**GitHub Pages**
1. Push this folder to a GitHub repo
2. Repo Settings → Pages → set source to the `main` branch, root folder
3. Site goes live at `https://<username>.github.io/<repo-name>/`

**Vercel / Netlify**
Drag-and-drop the folder, or connect the GitHub repo — no config needed, it's static.

## Updating content

- Project entries live directly in `index.html` under `#work` and `#design`
- To add a new case study page, copy `pages/isl-connect.html` as a template
- Replace the commented-out photo slot in `index.html`'s hero section once a photo is ready

## To do

- [ ] Add hero photo
- [ ] Live links for Smart Campus Service Management and KrishiMitra
- [ ] Expand ISL Connect gesture model beyond alphabet + numbers
