<template>
    <app-navbar></app-navbar>
  <div class="case-study">
    <!-- Cinematic Header -->
    <header class="case-header">
      <h1 class="case-title anim-reveal" style="--delay: 0s;">Filos</h1>
    </header>

    <!-- Hero Image -->
    <div class="case-hero anim-reveal" style="--delay: 0.15s;">
      <img class="hero-image" :src="hero" alt="Filos inclusive activity app mobile interface" />
    </div>

    <!-- Project Info - split layout -->
    <div class="case-info anim-reveal" style="--delay: 0.3s;">
      <div class="info-meta">
        <div class="meta-block">
          <span class="meta-label">Type</span>
          <span class="meta-value">Course Project</span>
        </div>
        <div class="meta-block">
          <span class="meta-label">Role</span>
          <span class="meta-value">UX/UI Designer</span>
        </div>
        <div class="meta-block">
          <span class="meta-label">Duration</span>
          <span class="meta-value">1 Month (2023)</span>
        </div>
      </div>
      <div class="info-description">
        <p class="info-text">
          A course project exploring how people with disabilities and volunteer activity companions could build trusted connections around shared interests, with control over access needs, communication, boundaries, and safety.
        </p>
      </div>
    </div>

        <!-- Problem Space -->
    <section class="content-section">
      <p class="section-label">Challenge</p>
      <h2 class="section-heading">Breaking down barriers to connection</h2>
      <p class="body-text">
        People with disabilities can face physical, sensory, and social barriers to participation. At the same time, people who want to volunteer may not know what respectful support looks like. The opportunity was not simply to create a matching app, but to design a service where both people can understand expectations and where the participant remains in control.
      </p>
    </section>

    <!-- Solution -->
    <section class="split-section split-section-left">
      <div class="split-content">
        <p class="section-label">Solution</p>
        <h2 class="section-heading">A platform for shared experiences</h2>
        <p class="body-text">
          Filos proposes a mobile experience where people choose an activity, decide what information to share, review a potential companion, and agree on a plan together. Access preferences and safety controls are part of the journey from the beginning. The name means "friendship" in Greek.
        </p>
      </div>
      <div class="split-media media-container-purple">
        <img loading="lazy" :src="wireframes" alt="Filos wireframes" class="split-image" />
      </div>
    </section>

        <!-- User Personas -->
    <section class="content-section">
      <p class="section-label">Users</p>
      <h2 class="section-heading">Designing for diverse needs</h2>
      <p class="body-text">
        Understanding the people who would use Filos was essential. As part of the course project, I consulted my sister, a special needs teacher, and had a couple of early feedback sessions with her students. The concept considered a range of access needs, including wheelchair access, blindness, and autism.
      </p>
      <aside class="research-note" aria-label="Research boundary">
        <div>
          <span class="research-note-label">Research boundary</span>
          <strong>Early input informed the concept, but it does not represent full validation.</strong>
        </div>
        <p>
          A responsible next phase would use participatory research with people who have different access needs, alongside safeguarding specialists and volunteer organisations. The screens below are design hypotheses for that next phase.
        </p>
      </aside>
    </section>

    <!-- Use Scenarios -->
    <section class="content-section-wide scenario-section">
      <div class="section-intro">
        <p class="section-label">Use Scenarios</p>
        <h2 class="section-heading">Two perspectives behind the concept</h2>
        <p class="body-text">
          Instead of fictional character portraits, the project can be read through two practical situations: someone with special-education experience helping shape safe support, and someone with access needs looking for a respectful way to join everyday activities.
        </p>
      </div>
      <div class="scenario-grid">
        <article class="scenario-card scenario-card-teacher">
          <div class="scenario-visual" aria-hidden="true">
            <div class="scenario-device">
              <span class="scenario-dot dot-one"></span>
              <span class="scenario-dot dot-two"></span>
              <span class="scenario-dot dot-three"></span>
              <div class="scenario-line line-one"></div>
              <div class="scenario-line line-two"></div>
              <div class="scenario-line line-three"></div>
              <div class="scenario-chip chip-one">Needs</div>
              <div class="scenario-chip chip-two">Plan</div>
            </div>
          </div>
          <div class="scenario-copy">
            <p class="scenario-role">Special-education perspective</p>
            <h3>The advisor who checks whether support is realistic</h3>
            <p>
              A special-education professional or student could use Filos to review profiles, clarify access needs, and help volunteers understand what makes an activity safe, respectful, and manageable before a meeting is arranged.
            </p>
          </div>
        </article>

        <article class="scenario-card scenario-card-user">
          <div class="scenario-visual" aria-hidden="true">
            <div class="scenario-device">
              <span class="scenario-node node-main"></span>
              <span class="scenario-node node-top"></span>
              <span class="scenario-node node-right"></span>
              <span class="scenario-node node-bottom"></span>
              <div class="scenario-route route-one"></div>
              <div class="scenario-route route-two"></div>
              <div class="scenario-route route-three"></div>
              <div class="scenario-chip chip-three">Cafe</div>
              <div class="scenario-chip chip-four">Quiet</div>
            </div>
          </div>
          <div class="scenario-copy">
            <p class="scenario-role">Participant perspective</p>
            <h3>The person choosing connection on their own terms</h3>
            <p>
              A person with a disability could use the app to express preferences, find activities that fit their needs, and decide what information to share before connecting with a volunteer around a simple shared plan.
            </p>
          </div>
        </article>
      </div>
    </section>

    <!-- Design Priorities -->
    <section class="content-section-wide design-priorities-section">
      <div class="section-intro">
        <p class="section-label">Design Priorities</p>
        <h2 class="section-heading">Making support feel respectful and easy to arrange</h2>
      </div>
      <div class="priority-grid">
        <article class="priority-card">
          <h3>Access needs first</h3>
          <p>Profiles make practical needs visible early, so activities can be planned around mobility, sensory comfort, communication preferences, or other support requirements.</p>
        </article>
        <article class="priority-card">
          <h3>Trust before matching</h3>
          <p>The experience focuses on clear expectations, simple choices, and gentle onboarding instead of pushing people quickly into conversations.</p>
        </article>
        <article class="priority-card">
          <h3>Shared activities</h3>
          <p>Connection is framed around everyday experiences, helping volunteers and participants start from mutual interests rather than abstract offers of help.</p>
        </article>
      </div>
    </section>

    <!-- Trust and safeguarding strategy -->
    <section class="content-section-wide trust-section">
      <div class="trust-intro">
        <p class="section-label">Trust, choice and safety</p>
        <h2 class="section-heading">The service must protect autonomy, not replace it</h2>
        <p class="body-text">
          Matching is only one moment in the experience. Filos also needs to help people understand who they are meeting, agree on practical support, control personal information, and leave or report an uncomfortable situation.
        </p>
      </div>

      <div class="trust-matrix" role="list" aria-label="User concerns and product responses">
        <div class="trust-row trust-row-heading" aria-hidden="true">
          <span>User concern</span>
          <span>Product response</span>
        </div>
        <div class="trust-row" role="listitem">
          <span class="trust-question">Who am I meeting?</span>
          <span>Identity status, relevant experience, references, and transparent profile history before a conversation begins.</span>
        </div>
        <div class="trust-row" role="listitem">
          <span class="trust-question">Will they understand what I need?</span>
          <span>Participant-controlled access preferences and an explicit agreement about what support is wanted.</span>
        </div>
        <div class="trust-row" role="listitem">
          <span class="trust-question">How much do I have to share?</span>
          <span>Progressive disclosure, granular privacy controls, and plain-language explanations for every request.</span>
        </div>
        <div class="trust-row" role="listitem">
          <span class="trust-question">What if something feels wrong?</span>
          <span>Visible check-in, trusted-contact, block, report, and support actions that remain available throughout the activity.</span>
        </div>
      </div>
    </section>

    <!-- Safeguarded journey screens -->
    <section class="content-section-wide safety-flow-section">
      <div class="section-intro safety-flow-intro">
        <p class="section-label">Proposed service flow</p>
        <h2 class="section-heading">From a shared interest to a plan both people understand</h2>
        <p class="body-text">
          Four additional screens show how trust can be built progressively. The participant chooses what matters, checks the match, confirms the shared plan, and keeps control during the activity.
        </p>
      </div>

      <ol class="journey-line" aria-label="Filos safeguarded journey">
        <li><span>1</span>Choose activity</li>
        <li><span>2</span>Set preferences</li>
        <li><span>3</span>Review match</li>
        <li><span>4</span>Agree plan</li>
        <li><span>5</span>Optional check-in</li>
        <li><span>6</span>Private feedback</li>
      </ol>

      <div class="phone-gallery">
        <article class="phone-frame" aria-label="Set access preferences screen">
          <div class="phone-status"><span>9:41</span><span class="phone-sensors">● ●</span></div>
          <div class="phone-toolbar">
            <button class="icon-button" type="button" aria-label="Go back"><ArrowLeft :size="16" /></button>
            <span>Plan activity</span>
            <span class="step-count">1 of 3</span>
          </div>
          <div class="phone-body">
            <div class="activity-summary">
              <div class="activity-mark"><MapPin :size="18" /></div>
              <div><strong>Saturday pottery class</strong><span>Camden Arts Centre · 11:00</span></div>
            </div>
            <div class="phone-section-title">
              <span>What would make this work for you?</span>
              <SlidersHorizontal :size="17" />
            </div>
            <button class="preference-row is-selected" type="button"><span>Step-free access</span><CircleCheck :size="18" /></button>
            <button class="preference-row is-selected" type="button"><span>A quieter arrival</span><CircleCheck :size="18" /></button>
            <button class="preference-row" type="button"><span>Help with transport</span><span class="empty-check"></span></button>
            <button class="preference-row is-selected" type="button"><span>Text before calling</span><CircleCheck :size="18" /></button>
            <div class="privacy-note"><LockKeyhole :size="15" /><span>You choose which preferences a match can see.</span></div>
          </div>
          <button class="phone-primary" type="button">Find a companion</button>
          <div class="phone-home-indicator"></div>
        </article>

        <article class="phone-frame" aria-label="Review a potential activity companion screen">
          <div class="phone-status"><span>9:41</span><span class="phone-sensors">● ●</span></div>
          <div class="phone-toolbar">
            <button class="icon-button" type="button" aria-label="Go back"><ArrowLeft :size="16" /></button>
            <span>Your match</span>
            <button class="icon-button" type="button" aria-label="More options"><MoreHorizontal :size="17" /></button>
          </div>
          <div class="phone-body">
            <div class="match-profile">
              <div class="profile-avatar" aria-hidden="true">M</div>
              <div><h3>Maya, 31</h3><p>Pottery, museums, quiet cafés</p></div>
              <div class="match-rating"><Star :size="14" fill="currentColor" />4.9</div>
            </div>
            <div class="verification-panel">
              <div><UserRoundCheck :size="18" /><span><strong>Identity checked</strong><small>Verified by Filos</small></span></div>
              <div><ShieldCheck :size="18" /><span><strong>Safeguarding training</strong><small>Completed May 2025</small></span></div>
            </div>
            <div class="phone-section-title"><span>Why this match</span></div>
            <ul class="match-reasons">
              <li><CheckCircle2 :size="15" />Available at the same time</li>
              <li><CheckCircle2 :size="15" />Understands step-free planning</li>
              <li><CheckCircle2 :size="15" />Happy to communicate by text</li>
            </ul>
            <button class="text-action" type="button">View profile and references <ChevronRight :size="15" /></button>
          </div>
          <button class="phone-primary" type="button">Review the plan</button>
          <div class="phone-home-indicator"></div>
        </article>

        <article class="phone-frame" aria-label="Agree activity plan screen">
          <div class="phone-status"><span>9:41</span><span class="phone-sensors">● ●</span></div>
          <div class="phone-toolbar">
            <button class="icon-button" type="button" aria-label="Go back"><ArrowLeft :size="16" /></button>
            <span>Shared plan</span>
            <span class="step-count">Draft</span>
          </div>
          <div class="phone-body">
            <div class="plan-date">
              <div class="calendar-tile"><span>JUN</span><strong>14</strong></div>
              <div><strong>Saturday · 11:00</strong><span>Meet at the accessible side entrance</span></div>
            </div>
            <div class="phone-section-title"><span>What we agreed</span><CalendarCheck2 :size="17" /></div>
            <div class="agreement-list">
              <div><CheckCircle2 :size="17" /><span><strong>Maya will arrive ten minutes early</strong><small>No physical assistance unless requested</small></span></div>
              <div><CheckCircle2 :size="17" /><span><strong>Updates will be sent by text</strong><small>Calls only if the plan changes urgently</small></span></div>
            </div>
            <label class="trusted-toggle">
              <span><strong>Share with trusted contact</strong><small>Send the plan and check-in time to Alex</small></span>
              <input type="checkbox" checked />
              <span class="toggle-track" aria-hidden="true"></span>
            </label>
            <p class="plan-footnote">Both people confirm the same plan. Changes require a new confirmation.</p>
          </div>
          <button class="phone-primary" type="button">Confirm shared plan</button>
          <div class="phone-home-indicator"></div>
        </article>

        <article class="phone-frame phone-frame-checkin" aria-label="Activity safety check-in screen">
          <div class="phone-status"><span>12:15</span><span class="phone-sensors">● ●</span></div>
          <div class="phone-toolbar phone-toolbar-light">
            <span class="pulse-badge"><span></span>Activity in progress</span>
            <button class="icon-button" type="button" aria-label="More options"><MoreHorizontal :size="17" /></button>
          </div>
          <div class="phone-body checkin-body">
            <div class="checkin-symbol"><ShieldCheck :size="30" /></div>
            <span class="checkin-time">Scheduled check-in · 12:15</span>
            <h3>Is everything going as expected?</h3>
            <p>Your response is private. Maya will not see which option you choose.</p>
            <button class="checkin-choice checkin-choice-primary" type="button"><CircleCheck :size="18" />Yes, continue the activity</button>
            <button class="checkin-choice" type="button"><MessageCircle :size="18" />Message my trusted contact</button>
            <button class="checkin-choice checkin-choice-alert" type="button"><PhoneCall :size="18" />I need support</button>
            <button class="quiet-action" type="button">End activity and go home</button>
          </div>
          <div class="phone-home-indicator"></div>
        </article>
      </div>
      <p class="prototype-caption">
        Proposed screens for the next design iteration. Verification, reporting, and escalation policies would need specialist review before implementation.
      </p>
    </section>

    <!-- Prototype Screens -->
    <section class="content-section-wide visual-showcase">
      <div class="section-intro">
        <p class="section-label">Screens</p>
        <h2 class="section-heading">Key prototype flows</h2>
        <p class="body-text">
          The prototype explores onboarding, profile setup, activity discovery, and connection moments as a lightweight service journey rather than a single matching screen.
        </p>
      </div>
      <figure class="wide-image-frame">
        <img loading="lazy" :src="prototypes" alt="Filos high fidelity prototype screens" class="wide-image" />
      </figure>
    </section>

        <!-- Figma Prototype -->
    <section class="content-section">
      <p class="section-label">Prototype</p>
      <h2 class="section-heading">Interactive prototype</h2>
      
      <div class="figma-embed-container">
        <iframe
          class="figma-iframe"
          src="https://embed.figma.com/design/YQu3rgFADyaMk5HhHQM4Y8/Filos_App?node-id=22-403&embed-host=share"
          allowfullscreen
        ></iframe>
      </div>
    </section>

        <!-- Visual Design -->
    <section class="content-section">
      <p class="section-label">Visual Identity</p>
      <h2 class="section-heading">Designing for accessibility and trust</h2>
      <p class="body-text">
        I created a visual identity emphasizing inclusivity and trust. The interface uses large controls, clear navigation, high-contrast elements, and simple flows so the concept could be discussed through an accessibility lens from the beginning.
      </p>
    </section>

    <!-- Responsive Design -->
    <section class="content-section-wide visual-showcase">
      <div class="section-intro">
        <p class="section-label">Responsive System</p>
        <h2 class="section-heading">A calmer interface across screen sizes</h2>
        <p class="body-text">
          The responsive layouts keep the same emphasis on legibility, clear hierarchy, and accessible actions, so the concept can be understood across different devices and presentation formats.
        </p>
      </div>
      <figure class="wide-image-frame">
        <img loading="lazy" :src="responsive" alt="Filos responsive interface layouts" class="wide-image" />
      </figure>
    </section>

            <!-- Reflection -->
    <section class="content-section">
      <p class="section-label">Learning</p>
      <h2 class="section-heading">Practicing inclusive design</h2>
      <p class="body-text">
        Through this course project, I learned to treat accessibility as a starting point rather than a final checklist. Revisiting the concept also made an important gap visible: an accessible interface is not enough when a service introduces strangers and handles sensitive personal information.
      </p>
      <p class="body-text">
        The next phase would test the preference, matching, shared-plan, and check-in flows with participants who have different access needs. Success would be measured through perceived control, comprehension of what is shared, confidence before an activity, and whether access preferences were respected.
      </p>
    </section>

    <case-study-footer currentRoute="/products/filos-mobile-app" />
  </div>
</template>

<script>
import { resolveAsset } from "@/assetUrl";
import AppNavbar from "@/components/navbar.vue";
import CaseStudyFooter from "@/components/CaseStudyFooter.vue";
import {
  ArrowLeft,
  CalendarCheck2,
  CheckCircle2,
  ChevronRight,
  CircleCheck,
  LockKeyhole,
  MapPin,
  MessageCircle,
  MoreHorizontal,
  PhoneCall,
  ShieldCheck,
  SlidersHorizontal,
  Star,
  UserRoundCheck,
} from "lucide-vue-next";

export default {
  name: "FilosMobileApp",
  components: {
    AppNavbar,
    CaseStudyFooter,
    ArrowLeft,
    CalendarCheck2,
    CheckCircle2,
    ChevronRight,
    CircleCheck,
    LockKeyhole,
    MapPin,
    MessageCircle,
    MoreHorizontal,
    PhoneCall,
    ShieldCheck,
    SlidersHorizontal,
    Star,
    UserRoundCheck,
  },
    data() {
    return {
      hero: resolveAsset("@/images/filosHeroProfessional.png"),
      wireframes: resolveAsset("@/images/filosWireframes.webp"),
      prototypes: resolveAsset("@/images/filosPrototypes.webp"),
      responsive: resolveAsset("@/images/filosResponsive.webp"),
      figmaSrc: "https://www.figma.com/proto/YQu3rgFADyaMk5HhHQM4Y8/Filos_App?node-id=0-1&t=XXX",
    };
  },
};
</script>

<style scoped>
/* ===== CASE STUDY - Editorial Reveal ===== */

/* Reveal Animation */
@keyframes revealUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scenarioPulse {
  0%,
  100% {
    opacity: 0.5;
    transform: scaleX(0.74);
  }
  50% {
    opacity: 1;
    transform: scaleX(1);
  }
}

@keyframes scenarioFloat {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

@keyframes scenarioRoute {
  0%,
  100% {
    opacity: 0.35;
    transform: scaleX(0.55);
  }
  50% {
    opacity: 0.9;
    transform: scaleX(1);
  }
}

.anim-reveal {
  opacity: 0;
  animation: revealUp 0.8s var(--ease-out) forwards;
  animation-delay: var(--delay, 0s);
}

/* Base */
.case-study {
  background: var(--color-bg);
  color: var(--color-text);
  padding-bottom: var(--space-12);
}

/* ===== CINEMATIC HEADER ===== */
.case-header {
  padding: var(--space-16) var(--space-8) 0;
  text-align: center;
  position: relative;
  z-index: 2;
}

.case-title {
  font-family: var(--font-serif);
  font-size: clamp(3.5rem, 10vw, 6rem);
  font-weight: var(--weight-normal);
  font-style: italic;
  line-height: 0.95;
  letter-spacing: -0.03em;
  color: var(--color-text);
  margin: 0;
  white-space: nowrap;
  margin-bottom: -0.15em;
}

/* ===== HERO ===== */
.case-hero {
  position: relative;
  z-index: 1;
  max-width: 1100px;
  margin: 0 auto var(--space-12);
  padding: 0 var(--space-8);
}

.hero-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: var(--radius-sm);
}

/* ===== PROJECT INFO - split ===== */
.case-info {
  max-width: 1100px;
  margin: 0 auto var(--space-16);
  padding: 0 var(--space-8);
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: var(--space-12);
  align-items: start;
}

.info-meta {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.meta-block {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.meta-label {
  font-size: 0.625rem;
  font-weight: var(--weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-text-muted);
}

.meta-value {
  font-size: 0.9375rem;
  font-weight: var(--weight-medium);
  color: var(--color-text);
  line-height: 1.4;
}

.info-description {
  padding-top: 0.25rem;
}

.info-text {
  font-family: var(--font-serif);
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  font-weight: var(--weight-normal);
  font-style: italic;
  line-height: 1.35;
  color: var(--color-text);
  letter-spacing: -0.01em;
  margin: 0;
}

/* ===== CONTENT SECTIONS ===== */
.content-section {
  max-width: 760px;
  margin: 0 auto var(--space-12);
  padding: 0 var(--space-8);
}

.content-section-wide {
  max-width: 1180px;
  margin: 0 auto var(--space-12);
  padding: 0 var(--space-8);
}

.section-intro {
  max-width: 760px;
  margin-bottom: var(--space-6);
}

.section-label {
  font-size: 0.625rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-text-muted);
  margin: 0 0 0.5rem;
  font-weight: var(--weight-semibold);
}

.section-heading {
  font-family: var(--font-serif);
  font-size: 1.75rem;
  font-weight: var(--weight-normal);
  font-style: italic;
  letter-spacing: -0.01em;
  line-height: 1.3;
  margin: 0 0 var(--space-4);
  color: var(--color-text);
}

.body-text {
  font-size: 1rem;
  line-height: 1.75;
  color: var(--color-text-secondary);
  margin: 0 0 var(--space-4);
}

.scenario-section {
  margin-top: var(--space-4);
}

.scenario-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-5);
}

.scenario-card {
  min-height: 560px;
  padding: var(--space-5);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.58);
  display: grid;
  grid-template-rows: minmax(260px, 1fr) auto;
  gap: var(--space-5);
  overflow: hidden;
}

.scenario-visual {
  min-height: 280px;
  border-radius: var(--radius-sm);
  background:
    linear-gradient(135deg, rgba(240, 232, 255, 0.86), rgba(255, 255, 255, 0.7)),
    radial-gradient(circle at 25% 20%, rgba(117, 83, 173, 0.18), transparent 34%);
  display: grid;
  place-items: center;
}

.scenario-card-user .scenario-visual {
  background:
    linear-gradient(135deg, rgba(239, 247, 244, 0.94), rgba(255, 255, 255, 0.72)),
    radial-gradient(circle at 80% 24%, rgba(52, 124, 105, 0.16), transparent 36%);
}

.scenario-device {
  position: relative;
  width: min(78%, 320px);
  aspect-ratio: 0.78;
  border: 1px solid rgba(70, 50, 100, 0.16);
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.76);
  box-shadow: 0 24px 60px rgba(38, 31, 52, 0.12);
  animation: scenarioFloat 6s ease-in-out infinite;
}

.scenario-line,
.scenario-route {
  position: absolute;
  left: 18%;
  height: 10px;
  border-radius: 999px;
  background: rgba(86, 57, 135, 0.22);
  transform-origin: left center;
  animation: scenarioPulse 3.8s ease-in-out infinite;
}

.line-one {
  top: 22%;
  width: 58%;
}

.line-two {
  top: 34%;
  width: 44%;
  animation-delay: 0.45s;
}

.line-three {
  top: 46%;
  width: 66%;
  animation-delay: 0.9s;
}

.scenario-dot,
.scenario-node {
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #6f44b2;
  box-shadow: 0 0 0 10px rgba(111, 68, 178, 0.09);
}

.dot-one {
  top: 20%;
  left: 10%;
}

.dot-two {
  top: 32%;
  left: 10%;
}

.dot-three {
  top: 44%;
  left: 10%;
}

.scenario-chip {
  position: absolute;
  min-width: 72px;
  padding: 0.5rem 0.75rem;
  border-radius: 999px;
  background: #fff;
  box-shadow: 0 10px 26px rgba(38, 31, 52, 0.1);
  color: var(--color-text);
  font-size: 0.75rem;
  font-weight: var(--weight-semibold);
  text-align: center;
}

.chip-one {
  right: 12%;
  bottom: 28%;
}

.chip-two {
  left: 14%;
  bottom: 14%;
}

.node-main {
  top: 45%;
  left: 45%;
  width: 24px;
  height: 24px;
  background: #347c69;
  box-shadow: 0 0 0 12px rgba(52, 124, 105, 0.1);
}

.node-top {
  top: 22%;
  left: 28%;
  background: #8f63c8;
}

.node-right {
  top: 34%;
  right: 18%;
  background: #8f63c8;
}

.node-bottom {
  left: 22%;
  bottom: 20%;
  background: #8f63c8;
}

.scenario-route {
  left: 31%;
  top: 31%;
  width: 34%;
  height: 4px;
  background: rgba(52, 124, 105, 0.35);
  transform: rotate(22deg) scaleX(0.65);
  animation: scenarioRoute 4.2s ease-in-out infinite;
}

.route-two {
  left: 48%;
  top: 46%;
  width: 30%;
  transform: rotate(-22deg) scaleX(0.65);
  animation-delay: 0.5s;
}

.route-three {
  left: 29%;
  top: 57%;
  width: 30%;
  transform: rotate(-46deg) scaleX(0.65);
  animation-delay: 1s;
}

.chip-three {
  right: 10%;
  bottom: 18%;
}

.chip-four {
  left: 12%;
  top: 14%;
}

.scenario-copy {
  max-width: 500px;
}

.scenario-role {
  margin: 0 0 var(--space-2);
  color: var(--color-text-muted);
  font-size: 0.6875rem;
  font-weight: var(--weight-semibold);
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.scenario-copy h3 {
  margin: 0 0 var(--space-3);
  color: var(--color-text);
  font-size: 1.35rem;
  line-height: 1.25;
}

.scenario-copy p:not(.scenario-role) {
  margin: 0;
  color: var(--color-text-secondary);
  font-size: 0.9375rem;
  line-height: 1.65;
}

.design-priorities-section {
  margin-top: var(--space-4);
}

.priority-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-4);
}

.priority-card {
  min-height: 260px;
  padding: var(--space-5);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.52);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.priority-card h3 {
  font-size: 1.25rem;
  line-height: 1.25;
  margin: 0 0 var(--space-3);
  color: var(--color-text);
}

.priority-card p {
  font-size: 0.9375rem;
  line-height: 1.65;
  color: var(--color-text-secondary);
  margin: 0;
}

/* ===== RESEARCH BOUNDARY ===== */
.research-note {
  margin-top: var(--space-6);
  padding: var(--space-5) 0;
  border-top: 1px solid rgba(111, 68, 178, 0.28);
  border-bottom: 1px solid rgba(111, 68, 178, 0.28);
  display: grid;
  grid-template-columns: minmax(190px, 0.7fr) 1.3fr;
  gap: var(--space-6);
  align-items: start;
}

.research-note > div {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.research-note-label {
  color: #6f44b2;
  font-size: 0.6875rem;
  font-weight: var(--weight-semibold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.research-note strong {
  color: var(--color-text);
  font-size: 1rem;
  line-height: 1.45;
}

.research-note p {
  margin: 0;
  color: var(--color-text-secondary);
  font-size: 0.9375rem;
  line-height: 1.65;
}

/* ===== TRUST STRATEGY ===== */
.trust-section {
  display: grid;
  grid-template-columns: minmax(250px, 0.72fr) minmax(420px, 1.28fr);
  gap: clamp(2rem, 6vw, 5rem);
  align-items: start;
}

.trust-intro {
  position: sticky;
  top: 7rem;
}

.trust-matrix {
  border-top: 1px solid var(--color-text);
}

.trust-row {
  display: grid;
  grid-template-columns: minmax(150px, 0.65fr) 1.35fr;
  gap: var(--space-5);
  padding: var(--space-5) 0;
  border-bottom: 1px solid var(--color-border-strong);
  color: var(--color-text-secondary);
  font-size: 0.9375rem;
  line-height: 1.58;
}

.trust-row-heading {
  padding: var(--space-3) 0;
  color: var(--color-text-muted);
  font-size: 0.6875rem;
  font-weight: var(--weight-semibold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.trust-question {
  color: var(--color-text);
  font-weight: var(--weight-semibold);
}

/* ===== SAFEGUARDED SERVICE FLOW ===== */
.safety-flow-section {
  --filos-purple: #6f44b2;
  --filos-purple-dark: #4b267f;
  --filos-purple-soft: #f1ebf8;
  --filos-green: #28705e;
  --filos-green-soft: #e7f3ef;
  --filos-alert: #a83c48;
  margin-top: var(--space-16);
}

.safety-flow-intro {
  max-width: 690px;
}

.journey-line {
  list-style: none;
  padding: var(--space-5) 0;
  margin: 0 0 var(--space-8);
  border-top: 1px solid var(--color-border-strong);
  border-bottom: 1px solid var(--color-border-strong);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
}

.journey-line li {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--color-text-secondary);
  font-size: 0.75rem;
  line-height: 1.3;
  white-space: nowrap;
}

.journey-line li:not(:last-child)::after {
  content: "";
  width: clamp(0.5rem, 2vw, 2.5rem);
  height: 1px;
  margin-left: var(--space-2);
  background: var(--color-border-strong);
}

.journey-line li span {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  background: var(--filos-purple-soft);
  color: var(--filos-purple-dark);
  font-size: 0.6875rem;
  font-weight: var(--weight-bold);
}

.phone-gallery {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: clamp(0.75rem, 1.8vw, 1.4rem);
  padding: clamp(1rem, 3vw, 2.5rem);
  background: #ece8f2;
  border-radius: var(--radius-sm);
  align-items: start;
  overflow: hidden;
}

.phone-frame {
  position: relative;
  min-width: 0;
  min-height: 590px;
  padding: 0.65rem 0.7rem 1rem;
  border: 1px solid rgba(50, 35, 70, 0.15);
  border-radius: 22px;
  background: #fff;
  color: #201b25;
  box-shadow: 0 4px 8px rgba(42, 31, 54, 0.09);
  display: flex;
  flex-direction: column;
  font-family: var(--font-sans);
  overflow: hidden;
}

.phone-frame button,
.phone-frame input {
  font: inherit;
}

.phone-frame button {
  cursor: default;
}

.phone-status,
.phone-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.phone-status {
  min-height: 1.4rem;
  padding: 0 0.25rem;
  color: #201b25;
  font-size: 0.58rem;
  font-weight: var(--weight-semibold);
}

.phone-sensors {
  color: #201b25;
  font-size: 0.42rem;
  letter-spacing: 0.12em;
}

.phone-toolbar {
  min-height: 2.4rem;
  border-bottom: 1px solid #eeeaf0;
  color: #201b25;
  font-size: 0.72rem;
  font-weight: var(--weight-semibold);
}

.phone-toolbar-light {
  border-bottom: 0;
}

.icon-button {
  width: 1.8rem;
  height: 1.8rem;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: transparent;
  color: inherit;
  display: grid;
  place-items: center;
}

.step-count {
  min-width: 2.8rem;
  color: #655d6a;
  font-size: 0.6rem;
  font-weight: var(--weight-medium);
  text-align: right;
}

.phone-body {
  padding: 0.9rem 0.15rem 0;
  flex: 1;
}

.activity-summary,
.plan-date,
.match-profile {
  display: flex;
  align-items: center;
  gap: 0.65rem;
}

.activity-mark {
  width: 2.15rem;
  height: 2.15rem;
  border-radius: 10px;
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  background: var(--filos-purple-soft);
  color: var(--filos-purple);
}

.activity-summary strong,
.plan-date strong {
  display: block;
  margin-bottom: 0.15rem;
  font-size: 0.73rem;
  line-height: 1.3;
}

.activity-summary span,
.plan-date span {
  display: block;
  color: #655d6a;
  font-size: 0.58rem;
  line-height: 1.35;
}

.phone-section-title {
  margin: 1.1rem 0 0.55rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-2);
  color: #201b25;
  font-size: 0.72rem;
  font-weight: var(--weight-bold);
  line-height: 1.3;
}

.phone-section-title svg {
  color: var(--filos-purple);
}

.preference-row {
  width: 100%;
  min-height: 2.25rem;
  padding: 0.45rem 0.55rem;
  border: 0;
  border-bottom: 1px solid #eeeaf0;
  background: transparent;
  color: #514a56;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.65rem;
  text-align: left;
}

.preference-row.is-selected {
  color: #201b25;
  font-weight: var(--weight-medium);
}

.preference-row svg {
  color: var(--filos-green);
}

.empty-check {
  width: 1rem;
  height: 1rem;
  border: 1px solid #aea6b3;
  border-radius: 50%;
}

.privacy-note {
  margin-top: 0.7rem;
  padding: 0.55rem;
  border-radius: 8px;
  background: #f5f3f7;
  color: #514a56;
  display: flex;
  align-items: flex-start;
  gap: 0.45rem;
  font-size: 0.56rem;
  line-height: 1.4;
}

.privacy-note svg {
  flex: 0 0 auto;
  color: var(--filos-purple);
}

.phone-primary {
  width: 100%;
  min-height: 2.3rem;
  margin-top: 0.8rem;
  border: 0;
  border-radius: 8px;
  background: var(--filos-purple-dark);
  color: #fff;
  font-size: 0.67rem;
  font-weight: var(--weight-semibold);
}

.phone-home-indicator {
  width: 38%;
  height: 3px;
  margin: 0.65rem auto 0;
  border-radius: 999px;
  background: #201b25;
  opacity: 0.75;
}

.profile-avatar {
  width: 2.7rem;
  height: 2.7rem;
  flex: 0 0 auto;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: #d8c2ef;
  color: var(--filos-purple-dark);
  font-family: var(--font-serif);
  font-size: 1.25rem;
  font-style: italic;
}

.match-profile > div:nth-child(2) {
  min-width: 0;
  flex: 1;
}

.match-profile h3,
.match-profile p {
  margin: 0;
}

.match-profile h3 {
  color: #201b25;
  font-size: 0.84rem;
}

.match-profile p {
  margin-top: 0.15rem;
  color: #655d6a;
  font-size: 0.56rem;
  line-height: 1.35;
}

.match-rating {
  color: var(--filos-purple-dark);
  display: flex;
  align-items: center;
  gap: 0.18rem;
  font-size: 0.6rem;
  font-weight: var(--weight-semibold);
}

.verification-panel {
  margin-top: 0.9rem;
  padding: 0.2rem 0.6rem;
  border-radius: 9px;
  background: var(--filos-green-soft);
}

.verification-panel > div,
.agreement-list > div {
  padding: 0.55rem 0;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
}

.verification-panel > div + div,
.agreement-list > div + div {
  border-top: 1px solid rgba(40, 112, 94, 0.16);
}

.verification-panel svg,
.agreement-list svg {
  flex: 0 0 auto;
  color: var(--filos-green);
}

.verification-panel span,
.agreement-list span {
  display: flex;
  flex-direction: column;
  gap: 0.12rem;
}

.verification-panel strong,
.agreement-list strong {
  color: #243b35;
  font-size: 0.62rem;
  line-height: 1.3;
}

.verification-panel small,
.agreement-list small {
  color: #527068;
  font-size: 0.52rem;
  line-height: 1.35;
}

.match-reasons {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.48rem;
}

.match-reasons li {
  display: flex;
  align-items: flex-start;
  gap: 0.42rem;
  color: #514a56;
  font-size: 0.6rem;
  line-height: 1.4;
}

.match-reasons svg {
  flex: 0 0 auto;
  color: var(--filos-green);
}

.text-action {
  width: 100%;
  margin-top: 0.8rem;
  padding: 0.65rem 0;
  border: 0;
  border-top: 1px solid #eeeaf0;
  border-bottom: 1px solid #eeeaf0;
  background: transparent;
  color: var(--filos-purple-dark);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.61rem;
  font-weight: var(--weight-semibold);
  text-align: left;
}

.calendar-tile {
  width: 2.45rem;
  height: 2.7rem;
  border-radius: 8px;
  overflow: hidden;
  flex: 0 0 auto;
  background: var(--filos-purple-soft);
  text-align: center;
}

.calendar-tile span {
  padding: 0.18rem 0;
  background: var(--filos-purple-dark);
  color: #fff;
  font-size: 0.45rem;
  font-weight: var(--weight-bold);
  letter-spacing: 0.06em;
}

.calendar-tile strong {
  margin: 0.24rem 0 0;
  color: var(--filos-purple-dark);
  font-size: 1rem;
}

.agreement-list {
  padding: 0 0.55rem;
  border-radius: 9px;
  background: #f6f8f7;
}

.trusted-toggle {
  position: relative;
  margin-top: 0.85rem;
  padding: 0.65rem 2.5rem 0.65rem 0;
  border-top: 1px solid #eeeaf0;
  border-bottom: 1px solid #eeeaf0;
  display: block;
}

.trusted-toggle > span:first-child {
  display: flex;
  flex-direction: column;
  gap: 0.14rem;
}

.trusted-toggle strong {
  color: #201b25;
  font-size: 0.62rem;
}

.trusted-toggle small {
  color: #655d6a;
  font-size: 0.51rem;
  line-height: 1.35;
}

.trusted-toggle input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.toggle-track {
  position: absolute;
  top: 50%;
  right: 0;
  width: 1.9rem;
  height: 1.05rem;
  border-radius: 999px;
  background: var(--filos-purple);
  transform: translateY(-50%);
}

.toggle-track::after {
  content: "";
  position: absolute;
  top: 2px;
  right: 2px;
  width: calc(1.05rem - 4px);
  height: calc(1.05rem - 4px);
  border-radius: 50%;
  background: #fff;
}

.plan-footnote {
  margin: 0.75rem 0 0;
  color: #655d6a;
  font-size: 0.52rem;
  line-height: 1.45;
}

.phone-frame-checkin {
  background: #4b267f;
  color: #fff;
}

.phone-frame-checkin .phone-status,
.phone-frame-checkin .phone-sensors,
.phone-frame-checkin .phone-toolbar {
  color: #fff;
}

.phone-frame-checkin .phone-home-indicator {
  background: #fff;
}

.pulse-badge {
  display: flex;
  align-items: center;
  gap: 0.36rem;
  font-size: 0.6rem;
}

.pulse-badge > span {
  width: 0.45rem;
  height: 0.45rem;
  border-radius: 50%;
  background: #9fe0c8;
  box-shadow: 0 0 0 4px rgba(159, 224, 200, 0.15);
}

.checkin-body {
  padding: 1.4rem 0.35rem 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.checkin-symbol {
  width: 3.3rem;
  height: 3.3rem;
  margin: 0 auto 0.8rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.12);
  color: #c7f1e2;
  display: grid;
  place-items: center;
}

.checkin-time {
  color: #d8c9e7;
  font-size: 0.54rem;
  text-align: center;
}

.checkin-body h3 {
  margin: 0.35rem 0 0.4rem;
  color: #fff;
  font-size: 1.08rem;
  line-height: 1.25;
  text-align: center;
}

.checkin-body > p {
  max-width: 14rem;
  margin: 0 auto 1rem;
  color: #e1d8eb;
  font-size: 0.57rem;
  line-height: 1.5;
  text-align: center;
}

.checkin-choice {
  min-height: 2.5rem;
  margin-bottom: 0.48rem;
  padding: 0.55rem 0.65rem;
  border: 1px solid rgba(255, 255, 255, 0.24);
  border-radius: 8px;
  background: transparent;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 0.52rem;
  font-size: 0.62rem;
  font-weight: var(--weight-medium);
  text-align: left;
}

.checkin-choice-primary {
  border-color: #c7f1e2;
  background: #c7f1e2;
  color: #183d33;
}

.checkin-choice-alert {
  border-color: rgba(255, 202, 207, 0.45);
  color: #ffd8dc;
}

.quiet-action {
  margin-top: 0.25rem;
  padding: 0.45rem;
  border: 0;
  background: transparent;
  color: #e1d8eb;
  font-size: 0.56rem;
  text-decoration: underline;
  text-underline-offset: 0.2rem;
}

.prototype-caption {
  max-width: 720px;
  margin: var(--space-4) 0 0;
  color: var(--color-text-muted);
  font-size: 0.75rem;
  line-height: 1.55;
}

.wide-image-frame {
  margin: 0;
  padding: var(--space-5);
  border-radius: var(--radius-sm);
  background: rgba(240, 232, 255, 0.45);
}

.wide-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow-sm);
}

/* Figma Embed */
.figma-embed-container {
  width: 100%;
  height: 600px;
  margin: var(--space-6) 0;
  border-radius: var(--radius-sm);
  overflow: hidden;
}

.figma-iframe {
  width: 100%;
  height: 100%;
  border: none;
}

/* ===== SPLIT SECTIONS ===== */
.split-section {
  display: flex;
  align-items: center;
  gap: var(--space-10);
  max-width: 1200px;
  margin: var(--space-12) auto;
  padding: 0 var(--space-8);
}

.split-section-left .split-content {
  order: 1;
}

.split-section-left .split-media {
  order: 2;
}

.split-section-right .split-content {
  order: 2;
}

.split-section-right .split-media {
  order: 1;
}

.split-content {
  flex: 1;
  max-width: 500px;
}

.split-media {
  flex: 1;
  max-width: 600px;
}

/* Media Containers */
.media-container-purple {
  background: rgba(240, 232, 255, 0.45);
  padding: var(--space-6);
  border-radius: var(--radius-sm);
}

.split-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow-sm);
}

/* ===== RESPONSIVE ===== */
@media (max-width: 1024px) {
  .case-info {
    grid-template-columns: 200px 1fr;
    gap: var(--space-8);
  }

  .split-section {
    flex-direction: column;
    gap: var(--space-6);
  }

  .split-content,
  .split-media {
    max-width: 100%;
  }

  .trust-section {
    grid-template-columns: minmax(220px, 0.65fr) 1.35fr;
    gap: var(--space-8);
  }

  .phone-gallery {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .phone-frame {
    min-height: 610px;
  }
}

@media (max-width: 768px) {
  .case-study {
    width: 100%;
    overflow-x: clip;
  }

  .case-header {
    padding: var(--space-10) var(--space-5) 0;
  }

  .case-title {
    font-size: clamp(2.5rem, 14vw, 5rem);
    margin-bottom: -0.1em;
  }

  .case-hero {
    padding: 0 var(--space-5);
    margin-bottom: var(--space-8);
  }

  .case-info {
    grid-template-columns: 1fr;
    gap: var(--space-6);
    padding: 0 var(--space-5);
    margin-bottom: var(--space-12);
  }

  .info-meta {
    flex-direction: row;
    flex-wrap: wrap;
    gap: var(--space-6);
  }

  .info-text {
    font-size: 1.375rem;
  }

  .content-section {
    padding: 0 var(--space-5);
  }

  .content-section-wide {
    width: 100%;
    min-width: 0;
    padding: 0 var(--space-5);
  }

  .section-intro {
    margin-bottom: var(--space-4);
  }

  .section-heading {
    font-size: 1.5rem;
  }

  .scenario-grid {
    grid-template-columns: 1fr;
  }

  .scenario-card {
    min-height: 0;
    padding: var(--space-4);
    grid-template-rows: auto auto;
  }

  .scenario-visual {
    min-height: 220px;
  }

  .scenario-device {
    width: min(72%, 240px);
  }

  .scenario-copy h3 {
    font-size: 1.2rem;
  }

  .priority-grid {
    grid-template-columns: 1fr;
  }

  .priority-card {
    min-height: 0;
    padding: var(--space-4);
  }

  .priority-card h3 {
    margin-bottom: var(--space-2);
  }

  .research-note {
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }

  .trust-section {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }

  .trust-intro {
    position: static;
  }

  .journey-line {
    width: 100%;
    max-width: 100%;
    justify-content: flex-start;
    overflow-x: auto;
    scrollbar-width: none;
  }

  .journey-line::-webkit-scrollbar {
    display: none;
  }

  .journey-line li:not(:last-child)::after {
    width: 1rem;
  }

  .phone-gallery {
    width: 100%;
    max-width: 100%;
    display: flex;
    gap: var(--space-4);
    padding: var(--space-5);
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
  }

  .phone-gallery::-webkit-scrollbar {
    display: none;
  }

  .phone-frame {
    width: min(78vw, 290px);
    min-width: min(78vw, 290px);
    min-height: 610px;
    scroll-snap-align: center;
  }

  .wide-image-frame {
    padding: var(--space-3);
  }

  .split-section {
    padding: 0 var(--space-5);
  }

  .figma-embed-container {
    height: 400px;
  }
}

@media (max-width: 480px) {
  .case-title {
    font-size: clamp(2.5rem, 13vw, 4rem);
  }

  .info-meta {
    gap: var(--space-4);
  }

  .info-text {
    font-size: 1.125rem;
  }

  .scenario-visual {
    min-height: 190px;
  }

  .scenario-chip {
    min-width: 64px;
    padding: 0.4rem 0.6rem;
    font-size: 0.6875rem;
  }

  .trust-row,
  .trust-row-heading {
    grid-template-columns: 1fr;
    gap: var(--space-2);
  }

  .trust-row-heading span:last-child {
    display: none;
  }

  .phone-gallery {
    margin-right: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .scenario-device,
  .scenario-line,
  .scenario-route {
    animation: none;
  }
}
</style>
