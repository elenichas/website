---
target: the portfolio homepage
total_score: 23
p0_count: 0
p1_count: 3
timestamp: 2026-06-02T12-14-43Z
slug: src-views-home-vue
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | Hero content is hidden during initial animation; card affordance is subtle. |
| 2 | Match System / Real World | 2 | Mixed Greek-English copy and jargon slow comprehension. |
| 3 | User Control and Freedom | 3 | Navigation is straightforward; mobile menu state is not announced. |
| 4 | Consistency and Standards | 2 | Locale, button styling, radii, and visual density drift. |
| 5 | Error Prevention | 3 | Few risky actions; locale inconsistency remains preventable. |
| 6 | Recognition Rather Than Recall | 2 | Project panels are clickable, but their CTA is hidden. |
| 7 | Flexibility and Efficiency | 2 | Resume is accessible, but contact is buried in the footer. |
| 8 | Aesthetic and Minimalist Design | 2 | Strong work competes with marquees, giant labels, and dead space. |
| 9 | Error Recovery | 2 | No fallback for homepage animation failures. |
| 10 | Help and Documentation | 3 | About and project detail exist; hierarchy needs stronger cues. |
| **Total** | | **23/40** | **Acceptable foundation, significant refinement needed** |

## Anti-Patterns Verdict

**LLM assessment:** Not AI slop, but visibly flirting with it. The project previews and restrained palette feel authored. Repeated uppercase scaffolding, oversized background typography, numbered panels, stacked shadows, and two marquee treatments push the homepage toward a familiar generated-portfolio lane. The work is strongest when it behaves like a case-study index and weakest when it performs "designer portfolio."

**Deterministic scan:** `node .agents/skills/impeccable/scripts/detect.mjs --json src/views/home.vue` returned `[]` with exit code `0`. No homepage rules triggered and there were no false positives.

**Visual overlays:** No reliable overlay was created. Browser mutation preflight failed because the supported evaluation surface is read-only. Live navigation, DOM inspection, and the clean CLI scan were used as fallback evidence.

## Overall Impression

The homepage has credible material and a clear point of view. Its biggest opportunity is subtraction: let the projects and recruiter actions lead, then keep one expressive device instead of asking every section to perform.

## What's Working

1. Project imagery is credible evidence rather than decoration. The Vintage Coach preview is especially strong.
2. The mobile layout is clearer than desktop, with readable vertical project stories and good image prominence.
3. The restrained monochrome shell lets individual projects carry color, matching the intended Project Color Rule.

## Priority Issues

### [P1] Content is hidden during initial motion

**Why it matters:** The first live frame is blank beneath the navbar. Hero content begins at `opacity: 0`, and the homepage lacks a reduced-motion override. Visitors can briefly encounter an empty page, and motion-sensitive visitors have no alternative.

**Fix:** Ship visible content by default. Animate enhancement properties only when motion is allowed. Disable typing, ticker, and reveal motion under `prefers-reduced-motion`.

**Suggested command:** `$impeccable harden src/views/home.vue`

### [P1] Greek mode reads as partially translated

**Why it matters:** Navigation and body copy can appear in Greek while interface labels, CTAs, capabilities, and technical labels remain English. It looks unfinished rather than intentionally bilingual.

**Fix:** Choose a clear translation policy: fully localize interface copy, or keep the portfolio shell English and translate only long-form content.

**Suggested command:** `$impeccable clarify homepage localization`

### [P1] Recruiter intent is not prioritized

**Why it matters:** The brief names contact and resume download as success actions. The hero gives equal weight to resume and Playground, contact is footer-only, and project panels hide their CTA.

**Fix:** Keep resume primary, promote Get in touch as the secondary hero action, demote Playground to a text link, and expose a persistent View case study cue on cards.

**Suggested command:** `$impeccable layout homepage CTA hierarchy`

### [P2] Visual scaffolding competes with the work

**Why it matters:** The homepage layers an uppercase kicker, ruled marquee, giant WORK label, giant FEATURED PROJECTS label, numbered panels, heavy card shadows, and a second ticker. The projects lose focus and the page develops scroll drag.

**Fix:** Remove one marquee, soften the background word, reduce sticky-card shadow depth, and tighten the large runway before the footer.

**Suggested command:** `$impeccable distill src/views/home.vue`

### [P2] Mobile navigation lacks accessible state

**Why it matters:** The menu button has no `aria-expanded` or `aria-controls`, and visible focus treatment is inconsistent. Keyboard and assistive-technology users receive less state information.

**Fix:** Add state attributes, keyboard-visible focus styling, and confirm comfortable touch targets.

**Suggested command:** `$impeccable audit src/components/navbar.vue`

## Persona Red Flags

**Recruiter scanning in 30 seconds:** Sees a blank hero frame on entry, must choose between resume and Playground before seeing work, and cannot find contact until the footer.

**Hiring manager evaluating depth:** Gets credible imagery, but capability lists dominate where outcomes and role clarity would be more persuasive. May not realize the entire project panel is clickable.

**Reduced-motion or keyboard visitor:** Encounters typing, reveals, and ticker animation without a homepage motion fallback. Gets no announced open state from the mobile menu.

## Minor Observations

- Project image alt text repeats project names rather than describing each preview.
- Mobile cards use `18px` radii while the design system prefers compact `10px` to `16px`.
- Desktop project cards pair a border with a large `45px` shadow, creating unnecessary visual weight.
- The technical-stack ticker feels generic compared with the specificity of the project work.

## Questions to Consider

1. What if the first viewport showed one decisive project preview beside the identity?
2. Is Playground genuinely the second-most important recruiter action?
3. Which single expressive device should own the homepage: sticky posters, marquee typography, or typewriter text?
