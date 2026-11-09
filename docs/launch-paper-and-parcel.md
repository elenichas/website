# Paper & Parcel portfolio launch

Prepared on 9 November 2026, on `codex/paper-and-parcel-project`.

## Scope and review boundary

Add one independent learning project to the existing portfolio, including the supplied recording. Keep the current visual system, bilingual support and main-branch deployment pipeline. Prepare and push a review branch; do not merge or deploy to production during this task.

The destination baseline is `elenichas/website` main at `46c1d68`. The source is `elenichas/paper-and-parcel` at `c179c82`. No source-project application code, runtime logs, model downloads or Python environments are copied into the website; only the reviewed presentation assets are reused.

## Evidence and content decisions

| Portfolio statement | Source reviewed |
| --- | --- |
| Independent follow-on project after completing IBM’s Coursera AI agents course | Owner’s brief and project README |
| Fictional stationery business, October 2026 records, local runtime | Source README and CSV fixtures |
| Python/FastAPI backend and HTML/CSS/JavaScript frontend | `shop/server.py`, `web/` and requirements |
| LangChain tool selection and explicit Learning Lab graph | `shop/agent.py`, `shop/learning.py` |
| Sequence/parallel report, SQL agent and bounded pandas tools | `docs/learning-lab.md`, `shop/learning.py`, `shop/analysis.py`, `shop/database.py` |
| Pydantic validation and observable execution events | `shop/learning_schemas.py`, `shop/observability.py`, `web/inspector.js` |
| Qwen3 4B Instruct through Ollama on an M2 Mac with 16 GB memory | Source model configuration and owner’s project context |
| 42 source-project automated tests | Source README and previously verified test run |
| No deployed chatbot, payments, record writes or invented user-research outcomes | Actual implementation and source documentation |

The narrative focuses on learning agent mechanics to inform interface and workflow design. It credits AI-assisted development and distinguishes a working local prototype from a shipped business product. Technical detail supports the three interface views rather than replacing the project story.

## Template and integration

Reviewed the active homepage, router, `Map3DStudio.vue`, shared editorial styles, project tiles, snapshot summaries, footer ordering and locale handling. The active homepage is `src/views/design.vue`, not the older `home.vue`.

Added:

- `/products/paper-and-parcel`, lazy-loaded, with the shared page-title format and metadata.
- A newest-first homepage tile, tagged `desktop` and `ai`, using the existing viewport/reduced-motion video behaviour.
- English and Greek case-study copy and “At a glance” summaries.
- A shared case-study layout with user-controlled video, project facts, three interface views, implementation flow, local-model stack and design reflections.
- Next-project navigation in the existing ordered registry.

No hosting configuration, build scripts, existing page layout or deployment pipeline was changed. The repository’s AGENTS file has older Vue CLI/Vuetify notes; the current package scripts use Vite and were used as-is.

## Media preparation

Reviewed representative frames of the supplied Cursorful recording. It contains a shop answer, actual tool inspection, a sales chart and Learning Lab workflows. All shown business records are fictional.

- Original: 78.483 seconds, 1632 × 1080, 60 fps, approximately 51 MB, no audio track. The original remains unchanged.
- Website demo: full duration and original dimensions, H.264/yuv420p, 30 fps, fast-start MP4, metadata removed, approximately 6.3 MB.
- Homepage preview: 12-second excerpt, 960 pixels wide, 24 fps, approximately 279 KB; muted and looped only through the existing gallery controller.
- Video poster and shop/inspector illustrations: frames from the supplied video.
- Learning Lab illustration: the source project’s real completed-report screenshot, `docs/tools-setup-request-preview.png`.
- Added native playback controls, inline playback, `preload="none"`, written context and chapter buttons at 0:00, 0:11 and 0:45. No spoken content requires captions.

Temporary encoding tools were installed outside the website; no media-tool dependency was added to its package manifest.

## Reusable skill

Created `.agents/skills/launch-to-website/` with a concise workflow, UI metadata and a reference mapping this portfolio’s actual integration points. The skill preserves the review/merge boundary and records the difference between a source app, a simulation and a deployed product. A discoverable copy is installed in the owner’s Codex skills directory.

## Verification

- `npm ci --no-audit --no-fund`: successful, using the existing lockfile.
- `npm run build`: successful. Existing Browserslist age notice does not affect the build; no unrelated dependency update was made.
- `node --test tests/*.test.mjs`: all 20 existing website tests passed.
- `quick_validate.py .agents/skills/launch-to-website`: valid, using an existing Python environment with PyYAML.
- `git diff --check`: passed.

Browser verification, preview links and final review outcome are recorded below when completed.

### Browser and media verification

- Preview: `http://127.0.0.1:5173/products/paper-and-parcel`.
- Homepage: new tile appears first; the AI filter includes it, and the tile opens the case study. The existing gallery controller plays only eligible visible previews.
- Desktop (1440 × 1000), intermediate width (755 pixels), and phone (390 × 844): no horizontal page overflow. Screenshot sections, workflow steps and chapter buttons reflow.
- Corrected the shared template’s minimum video height locally on this page with `min-height: 0` and `object-fit: contain`; phone preview preserves the complete recording frame.
- Full video stays paused until requested. A chapter click before initial playback starts at 45 seconds; keyboard activation also starts the selected chapter.
- English/Greek switching updates the new narrative, metadata, snapshot and chapter labels. Light/dark themes were visually checked; original app images retain their own palette.
- All three case-study illustrations loaded. Browser console reported no errors during the check.
- Reduced-motion handling is inherited from `GalleryPreview` and reviewed in source. The full recording has no autoplay attribute. No OS-wide motion setting was changed.
- New page and media HEAD requests returned 200 with expected content types. A video range request returned 206. Both MP4 files have their `moov` box before `mdat` for streaming.
- Final production build and all 20 existing website tests passed after the responsive media correction.
- Skill source validated and installed as `launch-to-website`; its installed files match the versioned copy.

Review captures: [phone](review/paper-and-parcel-phone.png), [desktop inspector section](review/paper-and-parcel-inspector.png).

## Handoff

The feature branch is pushed and available as draft PR [#24](https://github.com/elenichas/website/pull/24), targeting `main`. Production merge and automatic deployment remain for owner review. The local preview is left running for that review. The reusable skill can be invoked as `$launch-to-website` for the next project.


### Video presentation update

At the owner’s request, the full recording now autoplays silently and loops. Native controls, chapter buttons, picture-in-picture and pointer interaction with the video are disabled. The existing visibility observer pauses it offscreen, and reduced-motion preferences retain a static poster. The launch skill records the same presentation preference for future project videos. Earlier chapter/control verification above describes the initial version and is superseded by this update.
