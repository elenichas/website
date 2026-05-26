# AGENTS.md

## Project Overview

This is a private Vue 3 portfolio website built with Vue CLI. It uses Vue Router for page navigation, Vuetify 3 and Material Design Icons for UI components/icons, `@vueuse/head` for page metadata, and global CSS for shared styling.

## Stack

- Runtime: Node.js with npm
- Framework: Vue 3
- Build tooling: Vue CLI (`@vue/cli-service`)
- Routing: Vue Router 4 with history mode
- UI: Vuetify 3, `@mdi/font`, `lucide-vue-next`
- Styles: global CSS in `src/style.css` plus shared case-study styles in `src/styles/case-study-common.css`
- Static assets: `public/`
- Source images and video assets: `src/images/`

## Setup

Install dependencies before running project scripts:

```bash
npm install
```

This repository includes `package-lock.json`, so use npm unless the project is intentionally migrated to another package manager.

## Available Scripts

Run these from the repository root:

```bash
npm run serve
```

Starts the Vue CLI development server with hot reload. The default local URL is usually `http://localhost:8080/`.

```bash
npm run build
```

Builds the production bundle into `dist/`.

There are currently no configured npm scripts for tests, linting, formatting, or previewing the production build.

## Project Structure

- `src/main.js`: app bootstrap, Vue app creation, router, Vuetify, and head setup.
- `src/router.js`: route definitions, lazy-loaded views, redirects, and scroll behavior.
- `src/App.vue`: root application component.
- `src/components/`: reusable Vue components.
- `src/views/`: top-level pages and portfolio case-study pages.
- `src/plugins/vuetify.js`: Vuetify plugin setup, though `src/main.js` currently creates Vuetify inline.
- `src/style.css`: global application styles.
- `src/styles/case-study-common.css`: shared case-study styles.
- `public/`: static files copied as-is, including `index.html`, fonts, CV, and video assets.
- `vue.config.js`: Vue CLI dev server, CSS URL handling, asset inlining, copy plugin fix, and performance hints.

## Development Notes

- Keep route additions in `src/router.js` and prefer lazy-loaded route components, matching the existing pattern.
- Use `src/views/` for full pages and `src/components/` for shared pieces.
- Put files that must be served directly by path in `public/`; otherwise prefer source-controlled assets under `src/`.
- Large media assets are common in this project. Be mindful of bundle size and use `public/` for assets that should not be processed by webpack.
- The Vue CLI config disables CSS URL processing with `css.loaderOptions.css.url = false`, so verify asset paths in CSS carefully.
- The development server allows all hosts via `devServer.allowedHosts = "all"`.

## Current Environment Check

Volta is available in this environment. The project has been initialized with Node.js `v20.20.2` and npm `10.9.8`, and dependencies were installed with `npm install`.
