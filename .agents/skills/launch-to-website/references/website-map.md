# Eleni’s portfolio integration map

Verified against `elenichas/website` main at `46c1d68` on 9 November 2026. Recheck the destination checkout before using these paths.

## Current architecture

- `package.json`: Vue 3, Vue Router, Vite. `npm run serve`, `npm run build`, `npm run preview`. Some older README/AGENTS descriptions still mention Vue CLI/Vuetify; actual package scripts are authoritative for execution.
- `src/router.js`: lazy project routes under `/products/<slug>` and a `PAGE_TITLES` map. `/` resolves to `src/views/design.vue` through its `Craft` alias. `src/views/home.vue` is an older page and is not the active homepage.
- `src/views/design.vue`: homepage `projects` list, newest first; filter tags include `mobile`, `desktop`, `ai`, `architecture`.
- `src/components/ProjectTile.vue`: renders an existing motion composition, a `preview` video with `poster`, or a project sequence.
- `src/components/GalleryPreview.vue`: pauses videos offscreen, in hidden documents, and under reduced motion. Reuse rather than adding a competing observer.
- `src/views/uxui/Map3DStudio.vue`: useful template for a project with media, implementation detail, links and English/Greek copy. Use the current neighbouring page if conventions have changed.
- `src/style.css` also overrides case-study media with a minimum hero height and `object-fit: cover`; for a screen recording, explicitly use a scoped `min-height: 0` and `object-fit: contain` to preserve the complete frame at phone widths.
- `src/styles/editorial-case-study.css`: case header, hero, metadata, content and shared reading styles. `src/App.vue` applies section reveals and observes `video[data-autoplay]`; use that marker for presentation videos, keeping autoplay muted, looping and free of player controls.
- `src/components/CaseSnapshot.vue` and `src/caseSnapshots.js`: bilingual “At a glance” summary, keyed by project.
- `src/components/CaseStudyFooter.vue`: independent ordered list for next-project navigation.
- `src/i18n.js`: reactive `i18nState.locale`; newer pages use computed English/Greek content. `src/caseStudyTranslations.js` handles older DOM-translated pages. Avoid mixing translated DOM mutation with conflicting reactive text.
- `public/media/`: directly served videos, preferably short optimized previews and a separate full demo. `public/images/<slug>/`: posters and project screenshots. These URLs are public; keep process evidence and local paths elsewhere.

## Deployment and review boundary

The owner has a main-branch automatic website build/deployment pipeline. There is no `.github/workflows` directory at this baseline. Do not create a replacement pipeline or change hosting configuration. Use a feature branch and review before merging when that is the user’s instruction.

## Paper & Parcel precedent

The first use is documented in `docs/launch-paper-and-parcel.md`. It adds a real local AI demo, makes its fictional records and local-only runtime explicit, and preserves the supplied 78-second recording as a silent looping presentation rather than implying a publicly hosted chatbot.
