# Yeti — Animated Login UI

Live demo: https://moezbenjemiaa.github.io/Yeti/

A playful animated "Yeti" login built with React and GSAP. The mascot reacts to user input:
- Eyes follow the caret in the email input
- Arms cover the eyes while focusing the password field
- Mouth changes state while typing

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

Open http://localhost:3000 or visit the live demo: https://moezbenjemiaa.github.io/Yeti/

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
Live demo: https://moezbenjemiaa.github.io/Yeti/
