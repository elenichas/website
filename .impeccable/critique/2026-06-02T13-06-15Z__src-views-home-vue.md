---
target: the portfolio homepage
total_score: 31
p0_count: 0
p1_count: 0
timestamp: 2026-06-02T13-06-15Z
slug: src-views-home-vue
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Content has a safe default state, but the permitted entrance fade can still create a brief blank-first impression. |
| 2 | Match System / Real World | 3 | Greek homepage UI is coherent now; technical positioning still needs project evidence sooner. |
| 3 | User Control and Freedom | 4 | Navigation is direct, contact is visible, and the mobile menu exposes its state accessibly. |
| 4 | Consistency and Standards | 3 | Hero pill buttons and 18px mobile card radii drift from the compact-radius design system. |
| 5 | Error Prevention | 4 | The locale policy is clearer and reduced-motion fallbacks prevent the previous failure mode. |
| 6 | Recognition Rather Than Recall | 4 | Each featured card now carries a persistent, explicit case-study cue. |
| 7 | Flexibility and Efficiency | 3 | Resume and contact are immediate; large sticky cards still slow project comparison. |
| 8 | Aesthetic and Minimalist Design | 2 | Two marquees, giant WORK typography, numbered cards, and sticky stacking still compete for ownership. |
| 9 | Error Recovery | 2 | The visible-default fallback is improved, but the enhanced entrance still starts hidden when motion is allowed. |
| 10 | Help and Documentation | 3 | Project routes and contact paths are clear; visual evidence could reach visitors sooner. |
| **Total** | | **31/40** | **Good foundation, focused refinement needed** |

## Anti-Patterns Verdict

**LLM assessment:** The homepage no longer feels unfinished. Recruiter actions, bilingual UI, card cues, and motion safeguards are materially stronger. It still brushes against the familiar generated "bold designer portfolio" lane because several expressive devices stack together: tiny uppercase labels, typewriter role text, ruled marquee, giant WORK label, numbered sticky cards, and a second technical-stack ticker. The project imagery is specific enough to pull it back toward authorship, but the next pass should subtract.

**Deterministic scan:** `node .agents/skills/impeccable/scripts/detect.mjs --json src/views/home.vue` returned `[]` with exit code `0`. No homepage rules triggered and there were no false positives.

**Visual overlays:** No reliable user-visible overlay was created. Mutable script injection failed because the in-app Playwright evaluation surface is read-only. Fresh-tab DOM inspection, desktop screenshot inspection, and a direct wheel-scroll verification were used as fallback evidence.

## Overall Impression

The homepage is now credible and recruiter-aware. The resume, contact path, and persistent case-study links make the first scan much more useful. Its biggest opportunity is restraint: preserve the tactile sticky posters as the signature interaction, then remove enough surrounding scaffolding that the projects become the unmistakable focus.

## What's Working

1. Recruiter actions are clear: resume is primary, contact is visible, and Playground has been correctly demoted.
2. Project cards now announce their affordance instead of relying on the visitor to infer clickability.
3. Specific project language, especially the Coach catalog metrics, gives the portfolio evidence and personality.

## Priority Issues

### [P2] Project evidence arrives later than it should

**Why it matters:** The first viewport communicates identity well, but recruiters still need to scroll before seeing the strongest proof of fit.

**Fix:** Reduce hero vertical height and the spacing beneath it so the selected-work transition or the edge of the first project enters the initial desktop viewport.

**Suggested command:** `$impeccable layout src/views/home.vue`

### [P2] Too many expressive devices compete for ownership

**Why it matters:** The ruled specialty strip, giant WORK label, numbered cards, sticky stacking, typewriter title, and technical ticker form a recognizable portfolio-template grammar when combined.

**Fix:** Keep sticky project posters as the main device. Remove the technical-stack ticker from the homepage, soften the WORK word, and keep only one compact specialty strip.

**Suggested command:** `$impeccable distill src/views/home.vue`

### [P2] Sticky project cards slow recruiter comparison

**Why it matters:** The long runway and large sticky panels create a staged presentation where a recruiter may want a faster index.

**Fix:** Tighten the sticky runway, reduce card depth, and simplify capability lists to the most persuasive three items. Preserve the interaction without making each card a long stop.

**Suggested command:** `$impeccable layout src/views/home.vue`

### [P2] Motion still leads with a blank-first impression

**Why it matters:** The default state is now safe and reduced motion is respected, but visitors with motion enabled can still see the hero begin from opacity zero.

**Fix:** Keep content visible and animate a subtler transform, clip, or selective element reveal. Avoid fading the entire hero content column from invisible.

**Suggested command:** `$impeccable animate src/views/home.vue`

## Persona Red Flags

**Recruiter scanning in 30 seconds:** Resume and contact are fixed, but project proof still arrives after a hero-heavy first viewport and each sticky card takes time to clear.

**Hiring manager evaluating depth:** The concrete project descriptions help, but five capability labels per featured project compete with the outcome and role story.

**Reduced-motion or keyboard visitor:** Reduced motion and mobile menu state are improved. The enhanced entrance for motion-enabled visitors still creates a brief blank-first moment.

## Minor Observations

- Project image alt text repeats each project name rather than describing the visual evidence.
- Mobile cards use an 18px radius at one breakpoint while the design system prefers 10px to 16px.
- Desktop cards still pair a border with a large 45px shadow, which makes the stack heavier than the lightly layered brief.
- The technical-stack ticker is generic compared with the specificity of the featured projects.
- The glass navbar is restrained but does not add much to the portfolio voice.

## Questions to Consider

1. If sticky posters are the signature interaction, which surrounding effect can disappear first?
2. What should enter the first viewport besides identity: the first project image, the selected-work heading, or a compact project index?
3. Which three capabilities best distinguish each featured project?
