# Yeti

A clean, lightweight static landing page / website template — ready to preview and deploy with GitHub Pages.

Live demo: https://moezbenjemiaa.github.io/Yeti/

---

## Overview

Yeti is a minimal, responsive HTML/CSS (and optional JavaScript) template suitable for personal landing pages, project pages, or small product sites. It focuses on simplicity, fast load times, and easy customization.

## Features

- Responsive, mobile-first layout
- Semantic, accessible HTML structure
- Minimal CSS that’s easy to theme
- Optional lightweight JavaScript for small interactions
- Ready to deploy on GitHub Pages

## Quick start

1. Clone the repository:

   git clone https://github.com/MoezBenJemiaa/Yeti.git
   cd Yeti

2. Preview locally:

   # Open index.html directly in your browser, or run a local server
   python3 -m http.server 8000
   # then visit http://localhost:8000

   Or using Node:
   npx serve .

## Deploy to GitHub Pages

Option A — via repository settings:
- Push to the main branch (or master).
- Go to Settings → Pages and select the branch/root.
- Your site will be available at: https://moezbenjemiaa.github.io/Yeti/

Option B — gh-pages branch (npm):
- Install gh-pages and configure package.json scripts, then run npm run deploy.

## Customize

- Edit index.html to change content and structure.
- Update CSS files in css/ or assets/css/ to change styling.
- Replace images in images/ or assets/img/ with your own assets.
- Add JS in js/ or assets/js/ for extra behavior.

## Suggested structure

/
├─ index.html
├─ css/
│  └─ styles.css
├─ js/
│  └─ main.js
├─ images/
│  └─ hero.jpg
└─ README.md

Adjust this to match the repository’s actual layout.

## Contributing

Contributions, issues and feature requests are welcome — please open an issue or submit a pull request. When contributing, include a brief description of changes and screenshots if relevant.

## License

Add a LICENSE file to indicate how others may use this project. MIT is a common permissive choice; let me know if you want me to add one.

## Contact

Maintained by @MoezBenJemiaa

---

This README was added by GitHub Copilot on request.