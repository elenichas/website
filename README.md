# Eleni Chasioti — Portfolio

A Vue-based portfolio presenting product-design, design-systems, and computational-design case studies.

## Highlights

- Responsive portfolio and case-study layouts
- Structured project narratives and design documentation
- Multilingual content infrastructure
- Accessible navigation and reusable visual components
- Separate product and design-system documentation in [`PRODUCT.md`](PRODUCT.md) and [`DESIGN.md`](DESIGN.md)

## Technology

- Vue 3 and Vue Router
- Vuetify
- Vite
- Lucide icons
- `@vueuse/head` for document metadata

## Run locally

Requires Node.js 20.19 or later.

```bash
git clone https://github.com/elenichas/website.git
cd website
npm install
npm run serve
```

Open the local URL printed by Vite, normally `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```

The production build is written to `dist/`.

## Project structure

```text
src/
├── components/   # Reusable UI and portfolio components
├── views/        # Page-level views and case studies
├── images/       # Project imagery
├── i18n.js       # Localized interface content
├── router.js     # Application routes
└── App.vue       # Root application component
```

## Documentation

- [`PRODUCT.md`](PRODUCT.md) describes the portfolio’s goals and content model.
- [`DESIGN.md`](DESIGN.md) documents the visual system and interaction direction.
- [`SANDBOX_BEHAVIOR_MAP.md`](SANDBOX_BEHAVIOR_MAP.md) records the experimental sandbox behaviour.

## License

Released under [CC0 1.0](LICENSE).