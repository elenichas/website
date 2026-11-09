---
name: launch-to-website
description: Turn a completed project into a new entry on Eleni’s portfolio website. Review the source project, write evidence-based case-study content, prepare supplied media, integrate the existing website template, preview locally, and deliver a separate review branch. Use when adding a project to the portfolio, rather than building the project itself or rewriting the entire website.
---

# Launch to website

Create a credible portfolio entry from the actual project and its supplied assets. Match the website’s current structure and visual language, and keep source-project files separate from the portfolio implementation.

## Establish the two repositories

- The default destination is `https://github.com/elenichas/website`; confirm its current remote/default branch and inspect local changes before choosing a checkout. Prefer an existing suitable checkout; otherwise clone separately. Read applicable `AGENTS.md`, `PRODUCT.md`, `DESIGN.md`, and package scripts.
- Work on `codex/<project-slug>-project` or another requested feature branch. Never overwrite unrelated work or push directly to `main` for this workflow.
- Read the source project’s README, implementation, documentation, tests and supplied media. Do not assume a project is a deployed product because its repository is public.
- Ask only for facts that materially affect the story and cannot be established from the artifacts: ownership, role, permission to show private work, intended positioning, missing outcomes or required media. Continue independent preparation while waiting.

## Build the content from evidence

Establish the project name, purpose, audience or learning goal, Eleni’s contribution, project type, date, technology, implemented features, boundaries and verified outcomes. Separate implemented behaviour, a simulation, a hypothesis and a measured result. Do not invent user research or product impact.

Write for a visitor deciding whether to inspect the work. Lead with the project and why it matters; explain technical details where they support a design decision. Credit base projects, collaborators and AI-assisted development accurately when relevant. Keep a source-to-claim record in the launch notes.

For this portfolio, read [references/website-map.md](references/website-map.md) before editing. Treat it as a navigation aid, not a promise that repository structure will never change. Inspect the current route and components before applying it.

## Integrate with the existing site

- Follow a current comparable project page, retaining the site shell, typography, theme support, metadata, summary and next-project navigation.
- Add the route and title mapping, actual homepage collection entry/filter tags, summary data and footer navigation. Check for multiple registries and obsolete pages rather than updating whichever file happens to be named `home`.
- Follow the site’s language convention. If English and Greek are available on comparable pages, provide both for the new content and verify switching in place.
- Avoid fake live-app links to `localhost`. Link to a real deployment only if it exists; otherwise offer the code and a recording.

## Prepare the media

- Review the actual video, not just its filename. Check duration, resolution, audio, representative frames and any private information or third-party content before publication.
- Preserve the original supplied recording. Use available media tools to create a web copy, remove unnecessary metadata, and use a broadly supported codec with streaming-friendly MP4 layout when appropriate. Measure the result rather than assuming it is smaller.
- Reuse real project screenshots or video frames for images/posters. Avoid invented interface screenshots. Add meaningful alt text, native playback controls, `playsinline`, a poster and an appropriate preload policy. Provide useful written context for silent footage and captions/transcripts if needed for spoken content.
- Use a short, lightweight gallery preview rather than downloading the entire demo on the homepage. Reuse existing offscreen pause and reduced-motion behaviour. Chapter links should match the supplied edit and seek correctly before playback has started.
- Check individual file sizes against the destination’s Git and hosting constraints. Don’t add a new media service, Git LFS or deployment configuration solely to avoid reviewing an oversized file; discuss a real limit if optimization cannot satisfy it.

## Verify and hand off

1. Install dependencies using the repository’s current lockfile and package manager. Do not migrate its build system based on stale documentation.
2. Run the production build and relevant existing checks. Preview the actual website locally using an available browser tool; inspect the homepage tile/filter, direct route, complete case study and media playback.
3. Check desktop and phone widths, dark/light themes where supported, language switching, reduced motion, keyboard access, image/video requests and broken links. Verify chapters before initial playback as well as during playback.
4. Save representative screenshots outside the public asset tree unless they are intended content. Document sources, content/media decisions, commands, results and remaining limits in a concise launch note.
5. Review the final diff for accidental unrelated changes, personal paths, secrets, runtime files and original oversized media. Commit and push the feature branch when requested or implied by preparing a remote review. Open a draft PR when it makes the branch concrete and reviewable.
6. Report the local preview URL, branch/PR, verification and outstanding decisions. If the user has reserved merging for review, leave `main` untouched and auto-merge off. A new user instruction to merge can authorize that final step; this skill does not independently grant deployment authority.

Keep the preview running when requested for user review; otherwise follow the session’s preview lifecycle instructions. Install this skill in the user’s discoverable skill directory when the task includes creating a reusable skill, and retain a versioned source copy if useful for maintaining the portfolio workflow.
