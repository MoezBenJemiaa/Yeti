# Yeti — Animated Login UI

Live demo: https://moezbenjemiaa.github.io/yeti/

A playful animated "Yeti" login built with React and GSAP. The mascot reacts to user input:
- Eyes follow the caret in the email input
- Arms cover the eyes while focusing the password field
- Mouth changes state while typing

---

## Yeti icons

Inline SVG icons so the README shows a small yeti flourish on GitHub:

<!-- small -->
<svg width="64" height="64" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style="margin-right:8px">
  <circle cx="100" cy="100" r="90" fill="#DDF1FA" stroke="#3A5E77" stroke-width="4"/>
  <circle cx="76" cy="86" r="8" fill="#3A5E77"/>
  <circle cx="124" cy="86" r="8" fill="#3A5E77"/>
  <path d="M70 130 Q100 154 130 130" stroke="#3a5e77" stroke-width="6" fill="none" stroke-linecap="round"/>
</svg>

<!-- medium -->
<svg width="84" height="84" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style="margin-right:8px">
  <circle cx="100" cy="100" r="96" fill="#a9ddf3" stroke="#3a5e77" stroke-width="4"/>
  <ellipse cx="80" cy="82" rx="12" ry="14" fill="#3a5e77"/>
  <ellipse cx="120" cy="82" rx="12" ry="14" fill="#3a5e77"/>
  <path d="M70 130 Q100 155 130 130" stroke="#3a5e77" stroke-width="6" fill="none" stroke-linecap="round"/>
</svg>

<!-- round -->
<svg width="72" height="72" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="100" r="88" fill="#fff" stroke="#3A5E77" stroke-width="5"/>
  <path d="M60 120 Q100 155 140 120" fill="#fff" stroke="#3a5e77" stroke-width="4" stroke-linecap="round"/>
  <circle cx="80" cy="85" r="8" fill="#3a5e77"/>
  <circle cx="120" cy="85" r="8" fill="#3a5e77"/>
</svg>

---

## Features

- SVG + GSAP animated mascot
- Caret-aware eye tracking in the email input
- Arms cover the eyes when focusing the password input
- Mouth morphs between small / medium / large states while typing
- Demo hosted on GitHub Pages

---

## Quick start

Requirements: Node.js (14+) and npm or yarn.

1. Clone the repo
```bash
git clone https://github.com/MoezBenJemiaa/Yeti.git
cd Yeti
```

2. Install dependencies
```bash
npm install
# or
yarn
```

3. Run locally
```bash
npm start
# or
yarn start
```

Open http://localhost:3000 or visit the live demo: https://moezbenjemiaa.github.io/yeti/

---

## Troubleshooting

- Error: "useRoutes() may be used only in the context of a <Router> component"
  - Wrap your top-level application in a Router (typically BrowserRouter) in `index.js`:
    ```js
    import { BrowserRouter } from "react-router-dom";
    // ...
    root.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    ```

- Error: "Cannot read properties of null (reading 'kill')"
  - Make sure code checks a tween exists before calling `.kill()`:
    ```js
    if (blinking) blinking.kill();
    ```

---

## Where to look

- `src/Login/YetiLogin.jsx` — main animated Yeti component
- `src/404/404.jsx` — demo 404 page used in routing
- `public/` — static assets and demo pages

---

## License

This project is provided as-is. Add a LICENSE file if you want to apply an explicit license (e.g. MIT).

---

Maintainer: MoezBenJemiaa  
Live demo: https://moezbenjemiaa.github.io/yeti/
