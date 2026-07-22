# Portfolio (Vite version)

Your original 3-file portfolio (main.html, style.css, script.js), now set up
as a proper Vite project.

## Getting Started

```bash
npm install
npm run dev      # dev server with hot reload
npm run build     # production build -> dist/
```

## Structure

```
portfolio/
├── index.html              # was main.html — same content, updated links
├── public/
│   └── assets/              # 👉 PUT YOUR IMAGES HERE (bluespiral.png, etc.)
├── src/
│   ├── css/
│   │   └── style.css        # was style.css — unchanged content
│   └── js/
│       └── script.js        # was script.js — unchanged content
├── package.json
└── README.md
```

## ⚠️ Important: Images

Your HTML references images like `assets/bluespiral.png`, `assets/flower1.png`,
`assets/project1.png`, etc. — these weren't part of the 3 files you uploaded,
so they're NOT in this project yet.

**What to do:** copy your actual image files into `public/assets/` using the
exact same filenames referenced in `index.html`. Anything inside `public/`
is served as-is at the site root, so `assets/bluespiral.png` in your HTML
will correctly resolve to `public/assets/bluespiral.png`. No code changes
needed — just drop the files in.

## What changed vs. your original 3 files?

- **Nothing in the actual content/logic** — same HTML structure, same CSS
  rules, same JS behavior.
- Only the **file locations** changed, plus the `<link>`/`<script>` tags
  in `index.html` now point to `/src/css/style.css` and `/src/js/script.js`.
- `script.js` now loads as `type="module"` (required by Vite) — this doesn't
  change how your code behaves since you don't use `export`/`import` yet.

## Next steps to explore (optional, when you're ready)

- [ ] Split `style.css` into `base.css` / `layout.css` / `components.css`
- [ ] Break `script.js` into feature modules (nav, loader, contact form, etc.)
      using `import`/`export`
- [ ] Move Google Fonts `<link>` to a preload strategy for faster loading
- [ ] Deploy to Netlify or Vercel — connect your GitHub repo and it
      auto-builds on every push
