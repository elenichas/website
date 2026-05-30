<template>
  <app-navbar />

  <main class="sandbox-page">
    <section class="sandbox-intro">
      <p class="eyebrow">AI UI Sandbox / 02</p>
      <h1>Interfaces for<br /><em>uncertain systems.</em></h1>
      <p class="intro-copy">
        Adjust the product constraints and watch a familiar AI workspace adapt:
        inputs, memory, evidence, alerts, and approval flows all respond live.
      </p>
    </section>

    <section class="sandbox-shell" aria-label="AI interface sandbox">
      <aside class="control-panel">
        <div class="panel-heading">
          <div>
            <p class="eyebrow">System design</p>
            <h2>Product controls</h2>
          </div>
          <button class="reset-button" type="button" @click="resetState">Reset</button>
        </div>

        <div class="control-list">
          <label class="control select-control">
            <span class="control-title">
              <span>Model capability</span>
              <strong>{{ selectedModel.label }}</strong>
            </span>
            <select v-model="state.model" aria-label="Model capability">
              <option v-for="model in models" :key="model.id" :value="model.id">
                {{ model.label }} / {{ model.capability }}
              </option>
            </select>
            <span class="control-hint">{{ selectedModel.description }}</span>
          </label>

          <label v-for="control in controls" :key="control.key" class="control">
            <span class="control-title">
              <span>{{ control.label }}</span>
              <strong>{{ control.options[state[control.key]] }}</strong>
            </span>
            <input
              v-model.number="state[control.key]"
              type="range"
              min="0"
              max="2"
              step="1"
              :aria-label="control.label"
            />
            <span class="range-labels">
              <span>{{ control.options[0] }}</span>
              <span>{{ control.options[2] }}</span>
            </span>
          </label>
        </div>

        <p class="design-note">
          <span>Curated note</span>
          {{ currentNote }}
        </p>
      </aside>

      <section class="preview-wrap">
        <div class="preview-topline">
          <p class="eyebrow">Live product / studio assistant</p>
          <span class="live-pill"><i></i> Local simulation</span>
        </div>

        <div class="app-frame">
          <aside class="app-sidebar">
            <div class="app-symbol">S</div>
            <button type="button" aria-label="New conversation"><SquarePen :size="15" /></button>
            <button type="button" aria-label="Search conversations"><Search :size="15" /></button>
            <button type="button" aria-label="Saved items"><Bookmark :size="15" /></button>
            <span></span>
            <button type="button" aria-label="Settings"><Settings2 :size="15" /></button>
          </aside>

          <section class="chat-workspace">
            <header class="chat-header">
              <div>
                <p class="assistant-name">Studio Assistant</p>
                <p class="assistant-state">{{ assistantState }}</p>
              </div>
              <div class="header-actions">
                <span v-if="state.memory === 0" class="status-pill quiet"><ShieldCheck :size="12" /> No memory</span>
                <span v-if="state.memory === 1" class="status-pill"><Clock3 :size="12" /> Session context</span>
                <button v-if="state.memory === 2" class="status-pill memory-active" type="button">
                  <Brain :size="12" /> Memory on <ChevronDown :size="12" />
                </button>
                <button type="button" aria-label="More options"><Ellipsis :size="16" /></button>
              </div>
            </header>

            <div class="chat-layout" :class="{ instrumented: state.transparency === 2 }">
              <div class="conversation">
                <transition name="lift">
                  <div v-if="state.model === 'text'" class="product-alert">
                    <CircleAlert :size="15" />
                    <span><strong>Text-only model.</strong> Image upload and visual analysis are unavailable.</span>
                  </div>
                </transition>

                <div class="message-row user-row">
                  <div class="user-bubble">
                    <div v-if="supportsImages" class="attachment-preview">
                      <div class="image-placeholder"><ImageIcon :size="17" /></div>
                      <div>
                        <strong>case-study-cover.png</strong>
                        <span>Image / 1.8 MB</span>
                      </div>
                      <button type="button" aria-label="Remove image"><X :size="13" /></button>
                    </div>
                    <p>{{ userPrompt }}</p>
                  </div>
                  <div class="avatar user-avatar">EC</div>
                </div>

                <div class="message-row assistant-row">
                  <div class="avatar assistant-avatar"><Sparkles :size="14" /></div>
                  <div class="assistant-message">
                    <p v-if="state.transparency > 0" class="response-label">
                      {{ responseLabel }}
                    </p>
                    <p>{{ assistantCopy }}</p>

                    <div v-if="supportsImages" class="analysis-card">
                      <div class="analysis-card__icon"><ScanSearch :size="15" /></div>
                      <div>
                        <strong>Visual review complete</strong>
                        <span>Hero hierarchy, contrast, and mobile crop checked</span>
                      </div>
                      <Check :size="15" />
                    </div>

                    <div class="task-widget">
                      <div class="widget-heading">
                        <div>
                          <span>Launch readiness</span>
                          <strong>{{ taskProgress }}%</strong>
                        </div>
                        <div class="progress-track"><i :style="{ width: `${taskProgress}%` }"></i></div>
                      </div>
                      <ul>
                        <li v-for="item in checklist" :key="item.label">
                          <span :class="{ complete: item.complete }">
                            <Check v-if="item.complete" :size="11" />
                          </span>
                          {{ item.label }}
                        </li>
                      </ul>
                    </div>

                    <transition name="lift">
                      <details v-if="state.transparency > 0" class="sources">
                        <summary><FileSearch :size="13" /> Why this recommendation?</summary>
                        <p>{{ evidenceCopy }}</p>
                      </details>
                    </transition>
                  </div>
                </div>

                <transition name="lift">
                  <article v-if="state.autonomy === 2" class="approval-card">
                    <div class="approval-icon"><ShieldAlert :size="16" /></div>
                    <div>
                      <p class="card-kicker">Approval required</p>
                      <h3>Run mobile QA and prepare a publishing checklist?</h3>
                      <p>The assistant can inspect your project state, but it will wait before creating tasks.</p>
                      <div class="approval-actions">
                        <button type="button" class="approve">Approve action</button>
                        <button type="button">Review plan</button>
                      </div>
                    </div>
                  </article>
                </transition>

                <div class="composer">
                  <textarea rows="2" aria-label="Message Studio Assistant" placeholder="Ask Studio Assistant anything..."></textarea>
                  <div class="composer-toolbar">
                    <div>
                      <button
                        type="button"
                        :disabled="!supportsImages"
                        :title="supportsImages ? 'Attach image' : 'Select a vision model to attach images'"
                        aria-label="Attach image"
                      >
                        <Paperclip :size="15" />
                      </button>
                      <button type="button" aria-label="Search the web"><Globe2 :size="15" /></button>
                      <button type="button" aria-label="Tools"><SlidersHorizontal :size="15" /></button>
                    </div>
                    <div>
                      <span class="composer-model">{{ selectedModel.label }}</span>
                      <button class="send-button" type="button" aria-label="Send message"><ArrowUp :size="15" /></button>
                    </div>
                  </div>
                </div>
                <p class="composer-caption">Simulated interface. No prompt is sent.</p>
              </div>

              <transition name="panel">
                <aside v-if="showInspector" class="inspector">
                  <section v-if="state.memory === 2" class="inspector-section memory-section">
                    <div class="inspector-heading">
                      <span><Brain :size="13" /> Persistent memory</span>
                      <button type="button">Manage</button>
                    </div>
                    <p>Visible, editable context used across conversations.</p>
                    <div class="memory-chips">
                      <span>Editorial copy</span>
                      <span>Product roles</span>
                      <span>Concise answers</span>
                    </div>
                    <small><LockKeyhole :size="11" /> Stored until you remove it</small>
                  </section>

                  <section v-if="state.autonomy > 0" class="inspector-section">
                    <div class="inspector-heading">
                      <span><ListChecks :size="13" /> Activity</span>
                    </div>
                    <ol class="activity-list">
                      <li><i></i><span>Reviewed launch brief<small>Just now</small></span></li>
                      <li v-if="supportsImages"><i></i><span>Analyzed cover image<small>Visual tool</small></span></li>
                      <li v-if="state.autonomy === 2"><i class="waiting"></i><span>Waiting for approval<small>Action paused</small></span></li>
                    </ol>
                  </section>

                  <section v-if="state.transparency === 2" class="inspector-section">
                    <div class="inspector-heading">
                      <span><Gauge :size="13" /> System status</span>
                    </div>
                    <dl>
                      <div><dt>Model</dt><dd>{{ selectedModel.label }}</dd></div>
                      <div><dt>Input</dt><dd>{{ selectedModel.capability }}</dd></div>
                      <div><dt>Memory</dt><dd>{{ memoryLabel }}</dd></div>
                      <div><dt>Actions</dt><dd>{{ actionLabel }}</dd></div>
                    </dl>
                  </section>
                </aside>
              </transition>
            </div>
          </section>
        </div>
      </section>
    </section>

    <section class="principles">
      <p class="eyebrow">What this explores</p>
      <div class="principle-grid">
        <article v-for="principle in principles" :key="principle.number">
          <span>{{ principle.number }}</span>
          <h2>{{ principle.title }}</h2>
          <p>{{ principle.copy }}</p>
        </article>
      </div>
    </section>
  </main>

  <app-footer />
</template>

<script>
import {
  ArrowUp,
  Bookmark,
  Brain,
  Check,
  ChevronDown,
  CircleAlert,
  Clock3,
  Ellipsis,
  FileSearch,
  Gauge,
  Globe2,
  Image as ImageIcon,
  ListChecks,
  LockKeyhole,
  Paperclip,
  ScanSearch,
  Search,
  Settings2,
  ShieldAlert,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  SquarePen,
  X,
} from "lucide-vue-next";
import AppNavbar from "../../components/navbar.vue";
import AppFooter from "../../components/footer.vue";

const defaultState = {
  model: "vision",
  uncertainty: 1,
  autonomy: 1,
  memory: 1,
  transparency: 1,
};

export default {
  name: "AISandbox",
  components: {
    AppNavbar,
    AppFooter,
    ArrowUp,
    Bookmark,
    Brain,
    Check,
    ChevronDown,
    CircleAlert,
    Clock3,
    Ellipsis,
    FileSearch,
    Gauge,
    Globe2,
    ImageIcon,
    ListChecks,
    LockKeyhole,
    Paperclip,
    ScanSearch,
    Search,
    Settings2,
    ShieldAlert,
    ShieldCheck,
    SlidersHorizontal,
    Sparkles,
    SquarePen,
    X,
  },
  data() {
    return {
      state: { ...defaultState },
      models: [
        { id: "text", label: "Studio Text", capability: "Text only", description: "Fast copy support without visual inputs." },
        { id: "vision", label: "Studio Vision", capability: "Text + image", description: "Adds image upload and visual review patterns." },
        { id: "agent", label: "Studio Agent", capability: "Multimodal + tools", description: "Adds visual inputs, tools, and action workflows." },
      ],
      controls: [
        { key: "uncertainty", label: "Response posture", options: ["Direct", "Calibrated", "Cautious"] },
        { key: "autonomy", label: "Autonomy", options: ["Answer", "Suggest", "Act with approval"] },
        { key: "memory", label: "Memory", options: ["Off", "Session", "Persistent"] },
        { key: "transparency", label: "Transparency", options: ["Quiet", "Explainable", "Instrumented"] },
      ],
      principles: [
        { number: "01", title: "Capability shapes input", copy: "A model choice is an interface choice. Inputs and affordances should reflect what the system can actually perceive." },
        { number: "02", title: "Memory needs surfaces", copy: "Persistent context becomes a product feature when people can see, edit, and remove what is remembered." },
        { number: "03", title: "Agents need oversight", copy: "As software gains initiative, the interface shifts from a composer toward approvals, activity, and reversibility." },
      ],
    };
  },
  computed: {
    selectedModel() {
      return this.models.find((model) => model.id === this.state.model);
    },
    supportsImages() {
      return this.state.model !== "text";
    },
    assistantState() {
      return ["Ready to answer", "Suggestions enabled", "Tools enabled / approval gated"][this.state.autonomy];
    },
    userPrompt() {
      return this.supportsImages
        ? "Can you review this case-study cover and help me prepare a launch checklist?"
        : "Help me prepare a launch checklist for a new portfolio case study.";
    },
    assistantCopy() {
      if (this.state.uncertainty === 2) {
        return "I can suggest a launch sequence, but I would validate the project goal and final responsive states before publishing.";
      }
      if (this.supportsImages) {
        return "The cover has a clear focal point. I reviewed the visual hierarchy and prepared a focused launch checklist.";
      }
      return "Here is a focused launch checklist based on the project description.";
    },
    checklist() {
      return [
        { label: "Clarify the project outcome", complete: true },
        { label: this.supportsImages ? "Check hero crop on mobile" : "Review responsive layouts", complete: this.supportsImages },
        { label: "Validate metadata and social preview", complete: false },
        ...(this.state.uncertainty > 0 ? [{ label: "Verify claims and supporting evidence", complete: false }] : []),
      ];
    },
    taskProgress() {
      return this.supportsImages ? 62 : 38;
    },
    responseLabel() {
      return this.state.uncertainty === 2 ? "Recommendation / open questions" : "Recommendation";
    },
    evidenceCopy() {
      return this.supportsImages
        ? "Based on the uploaded cover, the launch brief, and the current session context."
        : "Based on your prompt and the current conversation context. Visual checks are excluded.";
    },
    showInspector() {
      return this.state.memory === 2 || this.state.autonomy > 0 || this.state.transparency === 2;
    },
    memoryLabel() {
      return ["Off", "Session only", "Persistent"][this.state.memory];
    },
    actionLabel() {
      return ["Disabled", "Suggest only", "Approval gated"][this.state.autonomy];
    },
    currentNote() {
      if (this.state.model === "text") return "Model capability should shape the composer. Disabled controls are part of the explanation.";
      if (this.state.memory === 2) return "Persistent memory should appear as editable product UI, not invisible personalization.";
      if (this.state.autonomy === 2) return "Agentic systems need approvals and visible activity before they need more personality.";
      return "A useful AI interface reveals complexity only when the product state creates a reason for it.";
    },
  },
  methods: {
    resetState() {
      this.state = { ...defaultState };
    },
  },
};
</script>

<style scoped>
.sandbox-page { background: #f4f1e9; color: #111; min-height: 100vh; padding: clamp(4rem, 9vw, 8rem) clamp(1rem, 5vw, 5rem); }
.sandbox-intro, .sandbox-shell, .principles { margin: 0 auto; max-width: 1500px; }
.eyebrow, .card-kicker { color: #706b62; font-size: .64rem; font-weight: 700; letter-spacing: .14em; margin: 0; text-transform: uppercase; }
h1 { font-size: clamp(4rem, 10vw, 10rem); letter-spacing: -.09em; line-height: .82; margin: 1.25rem 0 2rem; text-transform: uppercase; }
h1 em { font-family: var(--font-serif); font-weight: 400; text-transform: none; }
.intro-copy { color: #5c5851; font-size: clamp(1rem, 1.7vw, 1.3rem); line-height: 1.55; max-width: 48rem; }
.sandbox-shell { display: grid; gap: 1rem; grid-template-columns: minmax(270px, 320px) 1fr; margin-top: 5rem; }
.control-panel, .preview-wrap { background: #fff; border: 1px solid #dcd7cd; }
.control-panel { align-self: start; padding: 1.2rem; }
.panel-heading, .preview-topline, .chat-header, .control-title, .range-labels, .composer-toolbar, .header-actions, .inspector-heading { align-items: center; display: flex; justify-content: space-between; gap: .75rem; }
h2, h3, p { margin-top: 0; }
.panel-heading h2 { font-size: 1.1rem; margin: .4rem 0 0; }
button, select { background: transparent; border: 1px solid #d4cfc5; color: inherit; cursor: pointer; font: inherit; }
button:disabled { cursor: not-allowed; opacity: .32; }
.reset-button { border: 0; color: #706b62; font-size: .72rem; text-decoration: underline; }
.control { border-top: 1px solid #ebe7df; display: block; padding: 1.05rem 0; }
.control-list { margin-top: 1.4rem; }
.control-title { font-size: .75rem; margin-bottom: .65rem; }
.control-title strong { font-size: .64rem; text-align: right; text-transform: uppercase; }
select { background: #fff; font-size: .74rem; padding: .6rem; width: 100%; }
.control-hint { color: #918b81; display: block; font-size: .64rem; line-height: 1.4; margin-top: .55rem; }
input[type="range"] { accent-color: #111; width: 100%; }
.range-labels { color: #918b81; font-size: .59rem; margin-top: .35rem; }
.design-note { background: #f4f1e9; color: #5c5851; font-family: var(--font-serif); font-size: 1rem; line-height: 1.35; margin: 1rem 0 0; padding: 1rem; }
.design-note span { color: #111; display: block; font-family: var(--font-sans); font-size: .58rem; font-weight: 700; letter-spacing: .12em; margin-bottom: .5rem; text-transform: uppercase; }
.preview-wrap { background: #e8e3d9; padding: 1rem; }
.preview-topline { padding: .25rem .15rem 1rem; }
.live-pill { align-items: center; display: flex; font-size: .65rem; gap: .4rem; }
.live-pill i { background: #4d7b5d; border-radius: 50%; height: .42rem; width: .42rem; }
.app-frame { background: #fbfaf7; border: 1px solid #d6d1c7; display: grid; grid-template-columns: 3rem 1fr; min-height: 720px; }
.app-sidebar { align-items: center; background: #f0ece4; border-right: 1px solid #ddd8ce; display: flex; flex-direction: column; gap: .45rem; padding: .7rem .45rem; }
.app-sidebar span { flex: 1; }
.app-sidebar button { align-items: center; border: 0; color: #777168; display: flex; height: 2rem; justify-content: center; width: 2rem; }
.app-sidebar button:hover { background: #e2ddd4; color: #111; }
.app-symbol { align-items: center; background: #111; color: #fff; display: flex; font-family: var(--font-serif); font-size: 1.1rem; height: 2rem; justify-content: center; margin-bottom: .7rem; width: 2rem; }
.chat-workspace { min-width: 0; }
.chat-header { border-bottom: 1px solid #e3ded5; padding: .8rem 1rem; }
.assistant-name { font-size: .82rem; font-weight: 700; margin-bottom: .12rem; }
.assistant-state { color: #817b71; font-size: .67rem; margin-bottom: 0; }
.header-actions button[aria-label="More options"] { border: 0; display: flex; padding: .2rem; }
.status-pill { align-items: center; background: #fff; border: 1px solid #ded9cf; color: #706a61; display: flex; font-size: .62rem; gap: .3rem; padding: .32rem .48rem; }
.memory-active { background: #edf1eb; border-color: #c6d4c5; color: #45604d; }
.quiet { background: #f5f3ee; }
.chat-layout { display: grid; grid-template-columns: minmax(0, 1fr); min-height: 660px; }
.chat-layout.instrumented { grid-template-columns: minmax(0, 1fr) minmax(210px, 28%); }
.conversation { display: flex; flex-direction: column; padding: clamp(1rem, 2.6vw, 2rem); }
.product-alert { align-items: center; background: #faf4e5; border: 1px solid #e6d7ae; color: #745d31; display: flex; font-size: .7rem; gap: .55rem; margin-bottom: 1rem; padding: .65rem .75rem; }
.message-row { display: flex; gap: .65rem; margin-top: 1.25rem; }
.user-row { justify-content: flex-end; }
.avatar { align-items: center; display: flex; flex: 0 0 auto; font-size: .58rem; height: 1.8rem; justify-content: center; width: 1.8rem; }
.user-avatar { background: #e2ddd4; color: #5d574f; }
.assistant-avatar { background: #111; color: #fff; }
.user-bubble { background: #e9e4dc; font-size: .78rem; line-height: 1.45; max-width: 27rem; padding: .8rem .9rem; }
.user-bubble p { margin-bottom: 0; }
.attachment-preview, .analysis-card { align-items: center; background: #fbfaf7; border: 1px solid #d8d2c7; display: flex; gap: .55rem; margin-bottom: .7rem; padding: .5rem; }
.attachment-preview strong, .attachment-preview span, .analysis-card strong, .analysis-card span { display: block; font-size: .66rem; }
.attachment-preview span, .analysis-card span { color: #898276; font-size: .59rem; margin-top: .12rem; }
.attachment-preview button { border: 0; display: flex; margin-left: auto; padding: .2rem; }
.image-placeholder, .analysis-card__icon { align-items: center; background: #ebe6de; color: #746e64; display: flex; height: 2rem; justify-content: center; width: 2rem; }
.assistant-message { color: #403d38; font-size: .8rem; line-height: 1.55; max-width: 42rem; width: 100%; }
.response-label { color: #8d6b2f; font-size: .61rem; font-weight: 700; letter-spacing: .09em; margin-bottom: .55rem; text-transform: uppercase; }
.analysis-card { background: #f7f8f5; border-color: #d7ded4; margin-top: 1rem; }
.analysis-card > svg { color: #4d7b5d; margin-left: auto; }
.task-widget { background: #fff; border: 1px solid #ddd8ce; margin-top: 1rem; padding: .8rem; }
.widget-heading div:first-child { display: flex; font-size: .67rem; justify-content: space-between; }
.progress-track { background: #e8e4dc; height: 3px; margin: .55rem 0 .35rem; overflow: hidden; }
.progress-track i { background: #4d7b5d; display: block; height: 100%; transition: width .3s ease; }
.task-widget ul { list-style: none; margin: 0; padding: 0; }
.task-widget li { align-items: center; border-top: 1px solid #eeeae3; display: flex; font-size: .68rem; gap: .55rem; padding: .52rem 0; }
.task-widget li span { align-items: center; border: 1px solid #c9c3b9; display: flex; height: .76rem; justify-content: center; width: .76rem; }
.task-widget li span.complete { background: #4d7b5d; border-color: #4d7b5d; color: #fff; }
.sources { border-top: 1px solid #e4dfd6; margin-top: 1rem; padding-top: .75rem; }
.sources summary { align-items: center; color: #746d63; cursor: pointer; display: flex; font-size: .66rem; gap: .4rem; }
.sources p { color: #817b71; font-size: .66rem; margin: .6rem 0 0; }
.approval-card { background: #fff; border: 1px solid #d9c99c; display: flex; gap: .75rem; margin: 1rem 0 0 2.45rem; padding: .85rem; }
.approval-icon { color: #8d6b2f; }
.approval-card h3 { font-size: .76rem; margin: .35rem 0; }
.approval-card p:not(.card-kicker) { color: #756f66; font-size: .67rem; line-height: 1.45; margin-bottom: 0; }
.approval-actions { display: flex; gap: .45rem; margin-top: .7rem; }
.approval-actions button, .inspector-heading button { font-size: .64rem; padding: .38rem .55rem; }
.approve { background: #111; color: #fff; }
.composer { background: #fff; border: 1px solid #d6d1c7; margin-top: auto; padding: .65rem; }
.composer textarea { border: 0; box-sizing: border-box; color: #403d38; font: inherit; font-size: .75rem; outline: 0; resize: none; width: 100%; }
.composer-toolbar button { align-items: center; border: 0; color: #746f66; display: inline-flex; justify-content: center; padding: .35rem; }
.composer-toolbar div { align-items: center; display: flex; gap: .1rem; }
.composer-model { color: #847e74; font-size: .61rem; margin-right: .45rem; }
.composer-toolbar .send-button { background: #111; color: #fff; height: 1.8rem; width: 1.8rem; }
.composer-caption { color: #9a948a; font-size: .58rem; margin: .38rem 0 0; text-align: center; }
.inspector { background: #f7f5f0; border-left: 1px solid #e3ded5; padding: .7rem; }
.inspector-section { background: #fff; border: 1px solid #e0dbd2; margin-bottom: .6rem; padding: .7rem; }
.inspector-heading span { align-items: center; display: flex; font-size: .64rem; font-weight: 700; gap: .35rem; letter-spacing: .07em; text-transform: uppercase; }
.inspector-heading button { border: 0; color: #706a61; padding: 0; text-decoration: underline; }
.inspector-section p { color: #817b71; font-size: .64rem; line-height: 1.45; margin: .6rem 0; }
.memory-chips { display: flex; flex-wrap: wrap; gap: .3rem; }
.memory-chips span { background: #f1eee7; border: 1px solid #e2ddd3; font-size: .6rem; padding: .3rem .38rem; }
.inspector-section small { align-items: center; color: #817b71; display: flex; font-size: .57rem; gap: .3rem; margin-top: .65rem; }
.activity-list { list-style: none; margin: .55rem 0 0; padding: 0; }
.activity-list li { align-items: flex-start; display: flex; font-size: .64rem; gap: .4rem; margin-top: .5rem; }
.activity-list i { background: #4d7b5d; border-radius: 50%; height: .38rem; margin-top: .2rem; width: .38rem; }
.activity-list i.waiting { background: #c08a36; }
.activity-list small { display: block; margin-top: .08rem; }
.inspector dl { font-size: .62rem; margin-bottom: 0; }
.inspector dl div { border-top: 1px solid #ece8e1; display: flex; justify-content: space-between; padding: .42rem 0; }
.inspector dd { color: #756f66; margin: 0; text-align: right; }
.principles { border-top: 1px solid #d6d1c7; margin-top: 7rem; padding-top: 1.2rem; }
.principle-grid { display: grid; gap: 1rem; grid-template-columns: repeat(3, 1fr); margin-top: 2rem; }
.principle-grid article { border-top: 3px solid #111; padding-top: 1rem; }
.principle-grid span { color: #8d6b2f; font-size: .75rem; font-weight: 700; }
.principle-grid h2 { font-size: clamp(1.5rem, 3vw, 2.7rem); letter-spacing: -.07em; line-height: .95; margin: 2rem 0 .8rem; text-transform: uppercase; }
.principle-grid p { color: #645f57; font-size: .83rem; line-height: 1.55; max-width: 20rem; }
.lift-enter-active, .lift-leave-active, .panel-enter-active, .panel-leave-active { transition: opacity .3s ease, transform .3s ease; }
.lift-enter-from, .lift-leave-to { opacity: 0; transform: translateY(8px); }
.panel-enter-from, .panel-leave-to { opacity: 0; transform: translateX(8px); }
@media (max-width: 1120px) { .sandbox-shell { grid-template-columns: 1fr; } .preview-wrap { order: -1; } .control-panel { display: grid; gap: 1rem; grid-template-columns: minmax(180px, .55fr) 1fr minmax(180px, .55fr); } .control-list { margin-top: 0; } .design-note { margin: 0; } }
@media (max-width: 760px) { .control-panel { display: block; } .control-list { margin-top: 1.4rem; } .design-note { margin-top: 1rem; } .app-frame { grid-template-columns: 1fr; } .app-sidebar { display: none; } .chat-layout.instrumented { grid-template-columns: 1fr; } .inspector { border-left: 0; border-top: 1px solid #e3ded5; } .header-actions .status-pill { font-size: 0; gap: 0; } .header-actions .status-pill svg { display: block; } .principle-grid { grid-template-columns: 1fr; } }
@media (prefers-reduced-motion: reduce) { *, *::before, *::after { transition-duration: .01ms !important; } }
</style>
