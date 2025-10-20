# Yeti — Animated Login UI

Try the live demo: https://moezbenjemiaa.github.io/yeti/

A playful animated "Yeti" login interface built with React and GSAP. The mascot reacts to user input (eyes follow the caret in the email input, arms cover the eyes when focusing the password field, mouth changes with typed email), and this repo contains the Yeti login component and a small demo site.

---

## Yeti Icons

Here are a few inline "Yeti" icons used in this README (SVGs so they display on GitHub):

<!-- Yeti icon 1 -->
<svg width="84" height="84" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style="margin-right:10px">
  <circle cx="100" cy="100" r="96" fill="#a9ddf3" stroke="#3a5e77" stroke-width="4"/>
  <ellipse cx="80" cy="82" rx="12" ry="14" fill="#3a5e77"/>
  <ellipse cx="120" cy="82" rx="12" ry="14" fill="#3a5e77"/>
  <path d="M70 130 Q100 155 130 130" stroke="#3a5e77" stroke-width="6" fill="none" stroke-linecap="round"/>
</svg>

<!-- Yeti icon 2 -->
<svg width="64" height="64" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style="margin-right:10px">
  <circle cx="100" cy="100" r="90" fill="#fff" stroke="#3a5e77" stroke-width="6"/>
  <circle cx="75" cy="85" r="10" fill="#3a5e77"/>
  <circle cx="125" cy="85" r="10" fill="#3a5e77"/>
  <rect x="86" y="110" width="28" height="14" rx="6" fill="#cc4a6c"/>
</svg>

<!-- Yeti icon 3 -->
<svg width="72" height="72" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="100" r="88" fill="#DDF1FA" stroke="#3A5E77" stroke-width="5"/>
  <path d="M60 120 Q100 155 140 120" fill="#fff" stroke="#3a5e77" stroke-width="4" stroke-linecap="round"/>
  <circle cx="80" cy="85" r="8" fill="#3a5e77"/>
  <circle cx="120" cy="85" r="8" fill="#3a5e77"/>
</svg>

---

## Features

- Animated yeti character using SVG + GSAP
- Eye tracking following the email caret / cursor
- Arms cover eyes when interacting with password input
- Different mouth states as you type the email (small / medium / large)
- Demo available via GitHub Pages

---

## Quick start

Requirements: Node.js (14+), npm or yarn.

1. Clone the repo:
```bash
git clone https://github.com/MoezBenJemiaa/Yeti.git
cd Yeti
```

2. Install dependencies:
```bash
npm install
# or
yarn
```

3. Run dev server:
```bash
npm start
# or
yarn start
```

4. Open http://localhost:3000 in your browser or visit the live demo:
https://moezbenjemiaa.github.io/yeti/

---

## Notes & troubleshooting

- If you get the error:
  ```
  useRoutes() may be used only in the context of a <Router> component.
  ```
  make sure your top-level app is wrapped in a Router (`BrowserRouter`) in `index.js` (or wrap `<Routes>` in a router). Example for `index.js`:
  ```js
  import { BrowserRouter } from "react-router-dom";
  // ...
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  ```

- If you encounter a runtime error like `Cannot read properties of null (reading 'kill')`, ensure the GSAP tween exists before calling `.kill()` (the repo already uses a guard like `if (blinking) blinking.kill()`).

---

## Where to look

- `src/Login/YetiLogin.jsx` — main animated Yeti component
- `src/404/404.jsx` — demo 404 page used in routing
- `public/` — static assets used by the site

---

## Contributing

Pull requests welcome! A few suggestions:
- Remove unused imports (e.g., axios if not used) to keep the bundle small.
- Replace comparisons `==` with `===` to satisfy lint rules and avoid warnings.
- Add unit / integration tests for core behaviors if you plan to extend the animations.

---

## License

This project is provided as-is. Add a license file if you want to explicitly set licensing (e.g. MIT).

---

## Contact

Maintainer: MoezBenJemiaa  
Live demo: https://moezbenjemiaa.github.io/yeti/

