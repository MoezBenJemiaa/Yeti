# Yeti
<img width="665" height="815" alt="image" src="https://github.com/user-attachments/assets/605999e8-aab5-4b37-97e3-7ddd7c59ba40" />

<img width="1776" height="782" alt="image" src="https://github.com/user-attachments/assets/08dfab09-3f22-450d-a1a8-d652d7571c0d" />

A React-based single-page application (SPA) landing page template — ready to preview and deploy with GitHub Pages.

Live demo: https://moezbenjemiaa.github.io/Yeti/

---

## Overview

Yeti is a small React SPA template intended for personal landing pages or small project sites. It uses React (functional components + hooks) for a component-driven UI, and is set up to run locally with npm/yarn and to be built for static hosting (for example GitHub Pages).

## Features

- Built with React (functional components + hooks)
- Component-driven structure for easy customization
- Development server with hot reloading
- Ready to build for static hosting (GitHub Pages / any static host)

## Tech

- React
- JavaScript (ES6+)
- Node.js & npm (or Yarn)
- GitHub Pages (optional for deployment)

## Quick start

1. Clone the repository:

   git clone https://github.com/MoezBenJemiaa/Yeti.git
   cd Yeti

2. Install dependencies:

   npm install
   # or
   yarn install

3. Run the development server:

   npm start
   # then open http://localhost:3000 (or the port shown)

4. Build for production:

   npm run build

## Deploy to GitHub Pages

If you want to host on GitHub Pages (https://moezbenjemiaa.github.io/Yeti):

- Add/update the `"homepage"` field in package.json to:
  "https://moezbenjemiaa.github.io/Yeti"

- Install gh-pages and add deploy scripts:

  npm install --save-dev gh-pages

  Example package.json scripts:
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }

- Run:

  npm run deploy

Alternatively, build and push the build output to a branch configured in the Pages settings, or use GitHub Actions to automate deployment.

## Project structure

Use (or adapt) the structure below to match your repository. If your repo uses a different layout, tell me and I'll adjust:

/
├─ package.json
├─ public/
│  ├─ index.html
│  └─ favicon.ico
├─ src/
│  ├─ index.js        # app entry (or index.tsx)
│  ├─ App.js
│  ├─ components/     # reusable React components (Header, Footer, Hero, etc.)
│  ├─ pages/          # optional page-level components
│  ├─ assets/         # images, fonts
│  └─ styles/         # CSS or SCSS files
└─ README.md

## Customize

- Edit files in src/ (App.js and components/) to change content and behavior.
- Replace static assets in public/ or src/assets/.
- Use environment variables (REACT_APP_*) for build-time configuration if needed.

## Contributing

Contributions, issues and feature requests are welcome — open an issue or submit a pull request. When contributing, include a short description of your changes and screenshots if relevant.

## License

Add a LICENSE file to indicate how others may use this project. MIT is a common permissive choice; tell me if you want me to add one.

## Contact

Maintained by @MoezBenJemiaa

---
This README was updated to reflect that the project is a React app and to show a more accurate structure and run/deploy instructions.
