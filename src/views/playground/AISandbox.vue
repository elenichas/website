<template>
  <app-navbar />

  <main class="sandbox-page">
    <section class="sandbox-intro">
      <p class="eyebrow">AI UI Sandbox / 03</p>
      <h1>Interfaces for<br /><em>uncertain systems.</em></h1>
      <p class="intro-copy">
        A simulated launch-review assistant. Change one product decision at a time
        and watch the interface adapt.
      </p>
    </section>

    <section class="sandbox-shell" aria-label="AI interface sandbox">
      <aside class="control-panel">
        <div class="panel-heading">
          <div>
            <p class="eyebrow">Configuration</p>
            <h2>Product decisions</h2>
          </div>
          <button class="text-button" type="button" @click="resetState">Reset</button>
        </div>

        <label class="control select-control">
          <span class="control-title">
            <span>Input capability</span>
            <strong>{{ selectedCapability.label }}</strong>
          </span>
          <select v-model="state.capability" aria-label="Input capability" @change="handleCapabilityChange">
            <option v-for="capability in capabilities" :key="capability.id" :value="capability.id">
              {{ capability.label }}
            </option>
          </select>
          <span class="control-hint">{{ selectedCapability.description }}</span>
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
            @input="handleControlChange(control.key)"
          />
          <span class="range-labels">
            <span>{{ control.options[0] }}</span>
            <span>{{ control.options[2] }}</span>
          </span>
          <span class="control-hint">{{ control.descriptions[state[control.key]] }}</span>
        </label>

        <p class="design-note">
          <span>What changed</span>
          {{ currentNote }}
        </p>
      </aside>

      <section class="preview-wrap">
        <div class="preview-topline">
          <p class="eyebrow">Simulated product / launch review</p>
          <span class="live-pill"><i></i> Local prototype</span>
        </div>

        <div class="app-frame">
          <header class="chat-header">
            <div>
              <p class="assistant-name">Launch Review Assistant</p>
              <p class="assistant-state">{{ permissionSummary }}</p>
            </div>
            <div class="header-status">
              <span v-if="state.memory === 0" class="status-pill"><ShieldCheck :size="12" /> Memory off</span>
              <span v-if="state.memory === 1" class="status-pill"><Clock3 :size="12" /> This chat only</span>
              <span v-if="state.memory === 2" class="status-pill memory-active"><Brain :size="12" /> Saved preferences</span>
            </div>
          </header>

          <div class="workspace" :class="{ instrumented: state.transparency === 2 || state.memory > 0 }">
            <section class="conversation">
              <transition name="lift">
                <div v-if="state.capability === 'text'" class="product-alert">
                  <CircleAlert :size="15" />
                  <span><strong>Text-only input.</strong> The assistant can review your brief, but it cannot inspect the cover image.</span>
                </div>
              </transition>

              <transition name="lift">
                <div v-if="state.uncertainty === 1" class="review-notice">
                  <CircleAlert :size="14" />
                  <span><strong>Review recommended.</strong> Two checklist items still need your confirmation.</span>
                </div>
              </transition>

              <transition name="lift">
                <div v-if="state.uncertainty === 2" class="review-notice cautious">
                  <CircleAlert :size="14" />
                  <span><strong>Confirmation needed.</strong> Check the project claim and final mobile crop before publishing.</span>
                </div>
              </transition>

              <div class="message-row user-row">
                <div class="user-bubble">
                  <div v-if="supportsImages && attachmentAttached" class="attachment-preview">
                    <div class="image-placeholder"><ImageIcon :size="17" /></div>
                    <div>
                      <strong>case-study-cover.png</strong>
                      <span>Image / 1.8 MB</span>
                    </div>
                    <button type="button" aria-label="Remove image" @click="attachmentAttached = false"><X :size="13" /></button>
                  </div>
                  <p>{{ displayedPrompt }}</p>
                </div>
                <div class="avatar user-avatar">EC</div>
              </div>

              <div class="message-row assistant-row">
                <div class="avatar assistant-avatar"><Sparkles :size="14" /></div>
                <div class="assistant-message">
                  <div class="response-meta">
                    <span>Response v{{ responseVersion }}</span>
                    <span>{{ postureLabel }}</span>
                  </div>

                  <textarea
                    v-if="editingResponse"
                    v-model="editedCopy"
                    class="inline-editor"
                    rows="3"
                    aria-label="Edit assistant response"
                  ></textarea>
                  <p v-else>{{ assistantCopy }}</p>

                  <div v-if="supportsImages && attachmentAttached" class="analysis-card">
                    <div class="analysis-card__icon"><ImageIcon :size="15" /></div>
                    <div>
                      <strong>Cover image reviewed</strong>
                      <span>Clear focal point. Confirm the crop below 768px.</span>
                    </div>
                    <Check :size="15" />
                  </div>

                  <div class="task-widget">
                    <div class="widget-heading">
                      <div>
                        <span>Launch checklist</span>
                        <strong>{{ completedCount }}/{{ checklist.length }} complete</strong>
                      </div>
                      <div class="progress-track"><i :style="{ width: `${taskProgress}%` }"></i></div>
                    </div>
                    <ul>
                      <li v-for="item in checklist" :key="item.label">
                        <button
                          type="button"
                          :aria-label="`${item.complete ? 'Mark incomplete' : 'Mark complete'}: ${item.label}`"
                          @click="toggleChecklistItem(item.id)"
                        >
                          <Check v-if="item.complete" :size="11" />
                        </button>
                        {{ item.label }}
                      </li>
                    </ul>
                  </div>

                  <section v-if="state.transparency > 0" class="evidence">
                    <button
                      class="evidence-toggle"
                      type="button"
                      :aria-expanded="evidenceOpen"
                      @click="evidenceOpen = !evidenceOpen"
                    >
                      <FileSearch :size="13" />
                      {{ evidenceOpen ? "Hide evidence" : `Show evidence (${evidenceItems.length})` }}
                    </button>
                    <div v-if="evidenceOpen" class="evidence-list">
                      <article v-for="item in evidenceItems" :key="item.title">
                        <strong>{{ item.title }}</strong>
                        <span>{{ item.detail }}</span>
                      </article>
                    </div>
                  </section>

                  <div class="response-actions">
                    <button type="button" aria-label="Regenerate response" @click="regenerateResponse">
                      <RefreshCw :size="13" /> Regenerate
                    </button>
                    <button type="button" aria-label="Edit response" @click="toggleEdit">
                      <Pencil :size="13" /> {{ editingResponse ? "Save edit" : "Edit" }}
                    </button>
                    <span></span>
                    <button type="button" aria-label="Helpful response" :class="{ active: feedback === 'up' }" @click="feedback = 'up'"><ThumbsUp :size="13" /></button>
                    <button type="button" aria-label="Unhelpful response" :class="{ active: feedback === 'down' }" @click="feedback = 'down'"><ThumbsDown :size="13" /></button>
                  </div>
                </div>
              </div>

              <transition name="lift">
                <article v-if="state.permission === 1 && !actionAdded" class="action-card suggestion-card">
                  <div class="action-icon"><ListPlus :size="16" /></div>
                  <div>
                    <p class="card-kicker">Suggested next step</p>
                    <h3>Add a mobile QA task to the checklist?</h3>
                    <button class="primary-button" type="button" @click="addQaTask">Add task</button>
                  </div>
                </article>
              </transition>

              <transition name="lift">
                <article v-if="state.permission === 2 && !actionAdded" class="action-card approval-card">
                  <div class="action-icon"><ShieldAlert :size="16" /></div>
                  <div>
                    <p class="card-kicker">Approval required</p>
                    <h3>Create two QA tasks from this review?</h3>
                    <p>The assistant will add tasks to your launch checklist. Nothing is published automatically.</p>
                    <div class="approval-actions">
                      <button class="primary-button" type="button" @click="addQaTask">Approve task creation</button>
                      <button type="button" @click="planOpen = !planOpen">{{ planOpen ? "Hide plan" : "Review plan" }}</button>
                    </div>
                    <ul v-if="planOpen" class="plan-list">
                      <li>Check the mobile cover crop</li>
                      <li>Verify the project claim against the brief</li>
                    </ul>
                  </div>
                </article>
              </transition>

              <div class="composer">
                <textarea
                  v-model="composerDraft"
                  rows="2"
                  aria-label="Message Launch Review Assistant"
                  placeholder="Ask a follow-up about the launch review..."
                ></textarea>
                <div class="composer-toolbar">
                  <button
                    type="button"
                    :disabled="!supportsImages || attachmentAttached"
                    :title="supportsImages ? 'Attach cover image' : 'Select image input to attach a cover image'"
                    aria-label="Attach image"
                    @click="attachmentAttached = true"
                  >
                    <Paperclip :size="15" /> Attach
                  </button>
                  <span>{{ selectedCapability.label }}</span>
                  <button class="send-button" type="button" aria-label="Send message" :disabled="!composerDraft.trim()" @click="sendPrompt">
                    <ArrowUp :size="15" />
                  </button>
                </div>
              </div>
              <p class="composer-caption">Local simulation. Prompts are not sent to a model.</p>
            </section>

            <aside v-if="state.transparency === 2 || state.memory > 0" class="inspector">
              <section v-if="state.memory === 2" class="inspector-section">
                <p class="inspector-title"><Brain :size="13" /> Saved preferences</p>
                <p>Used in future launch reviews. Remove anything that should not persist.</p>
                <div class="memory-list">
                  <span v-for="item in savedPreferences" :key="item">
                    {{ item }}
                    <button type="button" :aria-label="`Remove saved preference: ${item}`" @click="removePreference(item)"><X :size="11" /></button>
                  </span>
                </div>
                <small><LockKeyhole :size="11" /> Stored until you remove it</small>
              </section>

              <section v-if="state.memory === 1" class="inspector-section">
                <p class="inspector-title"><Clock3 :size="13" /> Session context</p>
                <p>Uses this prompt and the attached cover image. Cleared when this chat ends.</p>
              </section>

              <section v-if="state.transparency === 2" class="inspector-section">
                <p class="inspector-title"><Activity :size="13" /> Current state</p>
                <dl>
                  <div><dt>Input</dt><dd>{{ selectedCapability.label }}</dd></div>
                  <div><dt>Memory</dt><dd>{{ memoryLabel }}</dd></div>
                  <div><dt>Permission</dt><dd>{{ permissionLabel }}</dd></div>
                  <div><dt>Evidence</dt><dd>{{ evidenceItems.length }} items</dd></div>
                </dl>
              </section>
            </aside>
          </div>
        </div>
      </section>
    </section>

    <transition name="toast">
      <div v-if="toast.visible" class="undo-toast" role="status">
        <Check :size="15" />
        <span>{{ toast.message }}</span>
        <button v-if="toast.undoable" type="button" @click="undoAction"><Undo2 :size="13" /> Undo</button>
      </div>
    </transition>

    <section class="principles">
      <p class="eyebrow">What the prototype demonstrates</p>
      <div class="principle-grid">
        <article>
          <span>01</span>
          <h2>Capability is visible</h2>
          <p>Text-only input removes image analysis. Image input adds an attachment and a visual-review result.</p>
        </article>
        <article>
          <span>02</span>
          <h2>Memory has controls</h2>
          <p>Session context is temporary. Persistent preferences become visible and removable.</p>
        </article>
        <article>
          <span>03</span>
          <h2>Actions need permission</h2>
          <p>The assistant can answer, suggest a task, or wait for approval before changing the checklist.</p>
        </article>
      </div>
    </section>
  </main>

  <app-footer />
</template>

<script>
import {
  Activity,
  ArrowUp,
  Brain,
  Check,
  CircleAlert,
  Clock3,
  FileSearch,
  Image as ImageIcon,
  ListPlus,
  LockKeyhole,
  Paperclip,
  Pencil,
  RefreshCw,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  ThumbsDown,
  ThumbsUp,
  Undo2,
  X,
} from "lucide-vue-next";
import AppNavbar from "../../components/navbar.vue";
import AppFooter from "../../components/footer.vue";

const initialState = {
  capability: "image",
  uncertainty: 1,
  permission: 1,
  memory: 1,
  transparency: 1,
};

const initialChecklist = [
  { id: "outcome", label: "State the project outcome clearly", complete: true },
  { id: "crop", label: "Confirm the mobile cover crop", complete: false },
  { id: "metadata", label: "Validate metadata and social preview", complete: false },
];

export default {
  name: "AISandbox",
  components: {
    Activity,
    AppNavbar,
    AppFooter,
    ArrowUp,
    Brain,
    Check,
    CircleAlert,
    Clock3,
    FileSearch,
    ImageIcon,
    ListPlus,
    LockKeyhole,
    Paperclip,
    Pencil,
    RefreshCw,
    ShieldAlert,
    ShieldCheck,
    Sparkles,
    ThumbsDown,
    ThumbsUp,
    Undo2,
    X,
  },
  data() {
    return {
      state: { ...initialState },
      capabilities: [
        { id: "text", label: "Text only", description: "Review the written brief without visual claims." },
        { id: "image", label: "Text + image", description: "Add the cover image and surface visual-review results." },
      ],
      controls: [
        {
          key: "uncertainty",
          label: "Uncertainty handling",
          options: ["Direct", "Review recommended", "Confirmation needed"],
          descriptions: ["Keep the answer concise.", "Flag unresolved checklist items.", "Ask for confirmation before publishing."],
        },
        {
          key: "permission",
          label: "Permission level",
          options: ["Answer only", "Suggest tasks", "Act with approval"],
          descriptions: ["No workflow changes.", "Offer an optional checklist task.", "Require approval before adding tasks."],
        },
        {
          key: "memory",
          label: "Memory",
          options: ["Off", "This chat", "Saved preferences"],
          descriptions: ["Do not retain context.", "Use temporary session context.", "Show editable preferences used in future reviews."],
        },
        {
          key: "transparency",
          label: "Transparency",
          options: ["Quiet", "Evidence", "Instrumented"],
          descriptions: ["Keep supporting data hidden.", "Allow evidence inspection.", "Show evidence and current system state."],
        },
      ],
      checklist: initialChecklist.map((item) => ({ ...item })),
      attachmentAttached: true,
      editingResponse: false,
      editedCopy: "",
      feedback: null,
      responseVersion: 1,
      evidenceOpen: false,
      planOpen: false,
      actionAdded: false,
      composerDraft: "",
      displayedPrompt: "Review this cover image and help me prepare the case study for launch.",
      savedPreferences: ["Concise editorial copy", "Product engineering roles"],
      toast: { visible: false, message: "", undoable: false },
      toastTimer: null,
    };
  },
  computed: {
    selectedCapability() {
      return this.capabilities.find((capability) => capability.id === this.state.capability);
    },
    supportsImages() {
      return this.state.capability === "image";
    },
    permissionSummary() {
      return ["Answers only", "Suggests optional tasks", "Waits for approval before adding tasks"][this.state.permission];
    },
    postureLabel() {
      return ["Direct", "Review recommended", "Confirmation needed"][this.state.uncertainty];
    },
    assistantCopy() {
      if (this.editedCopy) return this.editedCopy;
      if (this.state.uncertainty === 2) {
        return "I can prepare the launch checklist, but confirm the project claim and final mobile crop before publishing.";
      }
      if (this.supportsImages && this.attachmentAttached) {
        return "The cover has a clear focal point. I added the remaining launch checks below.";
      }
      return "I reviewed the written brief and added the remaining launch checks below. Attach the cover image if you want visual feedback.";
    },
    completedCount() {
      return this.checklist.filter((item) => item.complete).length;
    },
    taskProgress() {
      return Math.round((this.completedCount / this.checklist.length) * 100);
    },
    evidenceItems() {
      const items = [{ title: "Launch brief", detail: "Current prompt and checklist state" }];
      if (this.supportsImages && this.attachmentAttached) {
        items.push({ title: "Cover image", detail: "case-study-cover.png / visual review" });
      }
      if (this.state.memory > 0) {
        items.push({
          title: this.state.memory === 2 ? "Saved preferences" : "Session context",
          detail: this.state.memory === 2 ? "Preferences retained for future reviews" : "Temporary context from this chat",
        });
      }
      return items;
    },
    memoryLabel() {
      return ["Off", "This chat", "Saved preferences"][this.state.memory];
    },
    permissionLabel() {
      return ["Answer only", "Suggest tasks", "Approval required"][this.state.permission];
    },
    currentNote() {
      if (this.state.transparency === 2) return "The inspector exposes the exact inputs, memory mode, permission level, and evidence count.";
      if (this.state.memory === 2) return "Saved preferences appear as removable items because persistent memory needs user control.";
      if (this.state.permission === 2) return "The assistant pauses before changing the checklist and describes the proposed action.";
      if (this.state.uncertainty === 2) return "The response becomes more cautious and the interface asks for confirmation.";
      if (!this.supportsImages) return "Image analysis disappears because the selected input mode cannot inspect a cover image.";
      return "The assistant suggests one optional task and shows the evidence behind its review.";
    },
  },
  beforeUnmount() {
    clearTimeout(this.toastTimer);
  },
  methods: {
    resetState() {
      this.state = { ...initialState };
      this.checklist = initialChecklist.map((item) => ({ ...item }));
      this.attachmentAttached = true;
      this.editingResponse = false;
      this.editedCopy = "";
      this.feedback = null;
      this.responseVersion = 1;
      this.evidenceOpen = false;
      this.planOpen = false;
      this.actionAdded = false;
      this.composerDraft = "";
      this.displayedPrompt = "Review this cover image and help me prepare the case study for launch.";
      this.savedPreferences = ["Concise editorial copy", "Product engineering roles"];
      this.toast = { visible: false, message: "", undoable: false };
    },
    handleCapabilityChange() {
      this.attachmentAttached = this.supportsImages;
      this.evidenceOpen = false;
    },
    handleControlChange(key) {
      if (key === "transparency") this.evidenceOpen = this.state.transparency === 2;
      if (key === "permission") {
        this.actionAdded = false;
        this.planOpen = false;
      }
    },
    toggleChecklistItem(id) {
      const item = this.checklist.find((entry) => entry.id === id);
      if (item) item.complete = !item.complete;
    },
    regenerateResponse() {
      this.responseVersion += 1;
      this.editingResponse = false;
      this.editedCopy = "";
      this.feedback = null;
      this.showToast(`Generated response v${this.responseVersion}`, false);
    },
    toggleEdit() {
      if (!this.editingResponse) this.editedCopy = this.assistantCopy;
      this.editingResponse = !this.editingResponse;
    },
    addQaTask() {
      if (!this.checklist.some((item) => item.id === "qa")) {
        this.checklist.push({ id: "qa", label: "Run a mobile QA pass", complete: false });
      }
      this.actionAdded = true;
      this.showToast("QA task added to the checklist", true);
    },
    undoAction() {
      this.checklist = this.checklist.filter((item) => item.id !== "qa");
      this.actionAdded = false;
      this.toast = { visible: false, message: "", undoable: false };
    },
    sendPrompt() {
      const prompt = this.composerDraft.trim();
      if (!prompt) return;
      this.displayedPrompt = prompt;
      this.composerDraft = "";
      this.responseVersion += 1;
      this.editedCopy = "";
      this.feedback = null;
      this.showToast("Follow-up applied to the local simulation", false);
    },
    removePreference(item) {
      this.savedPreferences = this.savedPreferences.filter((preference) => preference !== item);
    },
    showToast(message, undoable) {
      clearTimeout(this.toastTimer);
      this.toast = { visible: true, message, undoable };
      this.toastTimer = setTimeout(() => {
        this.toast = { visible: false, message: "", undoable: false };
      }, 5000);
    },
  },
};
</script>

<style scoped>
.sandbox-page { background: #f4f1e9; color: #111; min-height: 100vh; padding: clamp(4rem, 9vw, 8rem) clamp(1rem, 5vw, 5rem); }
.sandbox-intro, .sandbox-shell, .principles { margin: 0 auto; max-width: 1460px; }
.eyebrow, .card-kicker { color: #706b62; font-size: .64rem; font-weight: 700; letter-spacing: .14em; margin: 0; text-transform: uppercase; }
h1 { font-size: clamp(4rem, 10vw, 10rem); letter-spacing: -.09em; line-height: .82; margin: 1.25rem 0 2rem; text-transform: uppercase; }
h1 em { font-family: var(--font-serif); font-weight: 400; text-transform: none; }
.intro-copy { color: #5c5851; font-size: clamp(1rem, 1.7vw, 1.25rem); line-height: 1.55; max-width: 44rem; }
.sandbox-shell { display: grid; gap: 1rem; grid-template-columns: minmax(280px, 330px) 1fr; margin-top: 5rem; }
.control-panel, .preview-wrap { background: #fff; border: 1px solid #dcd7cd; }
.control-panel { align-self: start; padding: 1.2rem; }
.panel-heading, .preview-topline, .chat-header, .control-title, .range-labels, .composer-toolbar, .response-actions, .approval-actions { align-items: center; display: flex; justify-content: space-between; gap: .7rem; }
h2, h3, p { margin-top: 0; }
.panel-heading h2 { font-size: 1.08rem; margin: .4rem 0 0; }
button, select { background: transparent; border: 1px solid #d4cfc5; color: inherit; cursor: pointer; font: inherit; }
button:disabled { cursor: not-allowed; opacity: .35; }
.text-button { border: 0; color: #706b62; font-size: .7rem; text-decoration: underline; }
.control { border-top: 1px solid #ebe7df; display: block; padding: 1rem 0; }
.select-control { margin-top: 1.35rem; }
.control-title { font-size: .74rem; margin-bottom: .6rem; }
.control-title strong { font-size: .61rem; max-width: 9rem; text-align: right; text-transform: uppercase; }
select { background: #fff; font-size: .72rem; padding: .58rem; width: 100%; }
.control-hint { color: #918b81; display: block; font-size: .61rem; line-height: 1.4; margin-top: .5rem; }
input[type="range"] { accent-color: #111; width: 100%; }
.range-labels { color: #918b81; font-size: .57rem; margin-top: .3rem; }
.design-note { background: #f4f1e9; color: #5c5851; font-family: var(--font-serif); font-size: .98rem; line-height: 1.35; margin: .9rem 0 0; padding: .9rem; }
.design-note span { color: #111; display: block; font-family: var(--font-sans); font-size: .56rem; font-weight: 700; letter-spacing: .12em; margin-bottom: .45rem; text-transform: uppercase; }
.preview-wrap { background: #e8e3d9; padding: 1rem; }
.preview-topline { padding: .2rem .1rem .85rem; }
.live-pill { align-items: center; display: flex; font-size: .63rem; gap: .38rem; }
.live-pill i { background: #4d7b5d; border-radius: 50%; height: .42rem; width: .42rem; }
.app-frame { background: #fbfaf7; border: 1px solid #d6d1c7; min-height: 710px; }
.chat-header { border-bottom: 1px solid #e3ded5; padding: .85rem 1rem; }
.assistant-name { font-size: .82rem; font-weight: 700; margin-bottom: .12rem; }
.assistant-state { color: #817b71; font-size: .66rem; margin-bottom: 0; }
.status-pill { align-items: center; background: #fff; border: 1px solid #ded9cf; color: #706a61; display: flex; font-size: .61rem; gap: .3rem; padding: .32rem .46rem; }
.memory-active { background: #edf1eb; border-color: #c6d4c5; color: #45604d; }
.workspace { display: grid; grid-template-columns: minmax(0, 1fr); min-height: 650px; }
.workspace.instrumented { grid-template-columns: minmax(0, 1fr) minmax(215px, 28%); }
.conversation { display: flex; flex-direction: column; padding: clamp(1rem, 2.7vw, 2rem); }
.product-alert, .review-notice { align-items: center; background: #f5f2eb; border: 1px solid #ddd8ce; color: #625d55; display: flex; font-size: .68rem; gap: .5rem; margin-bottom: .65rem; padding: .62rem .7rem; }
.review-notice { background: #faf4e5; border-color: #e6d7ae; color: #745d31; }
.review-notice.cautious { background: #f9ece8; border-color: #dfc0b5; color: #7b4f44; }
.message-row { display: flex; gap: .65rem; margin-top: 1.15rem; }
.user-row { justify-content: flex-end; }
.avatar { align-items: center; display: flex; flex: 0 0 auto; font-size: .57rem; height: 1.8rem; justify-content: center; width: 1.8rem; }
.user-avatar { background: #e2ddd4; color: #5d574f; }
.assistant-avatar { background: #111; color: #fff; }
.user-bubble { background: #e9e4dc; font-size: .76rem; line-height: 1.45; max-width: 27rem; padding: .8rem .9rem; }
.user-bubble p { margin-bottom: 0; }
.attachment-preview, .analysis-card { align-items: center; background: #fbfaf7; border: 1px solid #d8d2c7; display: flex; gap: .55rem; margin-bottom: .7rem; padding: .5rem; }
.attachment-preview strong, .attachment-preview span, .analysis-card strong, .analysis-card span { display: block; font-size: .65rem; }
.attachment-preview span, .analysis-card span { color: #898276; font-size: .59rem; margin-top: .12rem; }
.attachment-preview button { border: 0; display: flex; margin-left: auto; padding: .2rem; }
.image-placeholder, .analysis-card__icon { align-items: center; background: #ebe6de; color: #746e64; display: flex; height: 2rem; justify-content: center; width: 2rem; }
.assistant-message { color: #403d38; font-size: .79rem; line-height: 1.55; max-width: 42rem; width: 100%; }
.response-meta { color: #8d6b2f; display: flex; font-size: .59rem; font-weight: 700; gap: .5rem; letter-spacing: .08em; margin-bottom: .5rem; text-transform: uppercase; }
.inline-editor { border: 1px solid #d6d1c7; box-sizing: border-box; color: #403d38; font: inherit; line-height: 1.55; padding: .55rem; resize: vertical; width: 100%; }
.analysis-card { background: #f7f8f5; border-color: #d7ded4; margin-top: .9rem; }
.analysis-card > svg { color: #4d7b5d; margin-left: auto; }
.task-widget { background: #fff; border: 1px solid #ddd8ce; margin-top: .9rem; padding: .78rem; }
.widget-heading div:first-child { display: flex; font-size: .65rem; justify-content: space-between; }
.progress-track { background: #e8e4dc; height: 3px; margin: .52rem 0 .3rem; overflow: hidden; }
.progress-track i { background: #4d7b5d; display: block; height: 100%; transition: width .3s ease; }
.task-widget ul { list-style: none; margin: 0; padding: 0; }
.task-widget li { align-items: center; border-top: 1px solid #eeeae3; display: flex; font-size: .67rem; gap: .52rem; padding: .5rem 0; }
.task-widget li button { align-items: center; display: flex; height: .8rem; justify-content: center; padding: 0; width: .8rem; }
.task-widget li button:has(svg) { background: #4d7b5d; border-color: #4d7b5d; color: #fff; }
.evidence { border-top: 1px solid #e4dfd6; margin-top: .85rem; padding-top: .65rem; }
.evidence-toggle { align-items: center; border: 0; color: #746d63; display: flex; font-size: .64rem; gap: .38rem; padding: 0; }
.evidence-list { display: grid; gap: .35rem; margin-top: .55rem; }
.evidence-list article { background: #f5f2eb; border: 1px solid #e1dcd2; padding: .45rem; }
.evidence-list strong, .evidence-list span { display: block; font-size: .61rem; }
.evidence-list span { color: #817b71; margin-top: .12rem; }
.response-actions { justify-content: flex-start; margin-top: .58rem; }
.response-actions span { flex: 1; }
.response-actions button { align-items: center; border: 0; color: #817b71; display: flex; font-size: .6rem; gap: .28rem; padding: .3rem; }
.response-actions button:hover, .response-actions button.active { background: #eeeae2; color: #111; }
.action-card { background: #fff; border: 1px solid #d6d1c7; display: flex; gap: .7rem; margin: .9rem 0 0 2.45rem; padding: .8rem; }
.approval-card { border-color: #d9c99c; }
.action-icon { color: #8d6b2f; }
.action-card h3 { font-size: .74rem; margin: .32rem 0; }
.action-card p:not(.card-kicker) { color: #756f66; font-size: .65rem; line-height: 1.45; margin-bottom: .6rem; }
.primary-button, .approval-actions button { font-size: .63rem; padding: .38rem .52rem; }
.primary-button { background: #111; color: #fff; }
.approval-actions { justify-content: flex-start; margin-top: .65rem; }
.plan-list { color: #756f66; font-size: .64rem; line-height: 1.5; margin: .6rem 0 0; padding-left: 1rem; }
.composer { background: #fff; border: 1px solid #d6d1c7; margin-top: auto; padding: .62rem; }
.composer textarea { border: 0; box-sizing: border-box; color: #403d38; font: inherit; font-size: .74rem; outline: 0; resize: none; width: 100%; }
.composer-toolbar button { align-items: center; border: 0; color: #746f66; display: flex; font-size: .62rem; gap: .28rem; padding: .34rem; }
.composer-toolbar span { color: #847e74; font-size: .6rem; margin-left: auto; }
.composer-toolbar .send-button { background: #111; color: #fff; height: 1.8rem; justify-content: center; width: 1.8rem; }
.composer-caption { color: #9a948a; font-size: .57rem; margin: .36rem 0 0; text-align: center; }
.inspector { background: #f7f5f0; border-left: 1px solid #e3ded5; padding: .7rem; }
.inspector-section { background: #fff; border: 1px solid #e0dbd2; margin-bottom: .6rem; padding: .7rem; }
.inspector-title { align-items: center; display: flex; font-size: .63rem; font-weight: 700; gap: .35rem; letter-spacing: .07em; margin-bottom: .5rem; text-transform: uppercase; }
.inspector-section > p:not(.inspector-title) { color: #817b71; font-size: .62rem; line-height: 1.45; }
.memory-list { display: grid; gap: .32rem; }
.memory-list span { align-items: center; background: #f1eee7; border: 1px solid #e2ddd3; display: flex; font-size: .59rem; justify-content: space-between; padding: .32rem .38rem; }
.memory-list button { border: 0; display: flex; padding: .05rem; }
.inspector-section small { align-items: center; color: #817b71; display: flex; font-size: .56rem; gap: .28rem; margin-top: .62rem; }
.inspector dl { font-size: .61rem; margin-bottom: 0; }
.inspector dl div { border-top: 1px solid #ece8e1; display: flex; justify-content: space-between; padding: .4rem 0; }
.inspector dd { color: #756f66; margin: 0; text-align: right; }
.undo-toast { align-items: center; background: #111; bottom: 1.2rem; color: #fff; display: flex; font-size: .68rem; gap: .52rem; left: 50%; padding: .68rem .82rem; position: fixed; transform: translateX(-50%); z-index: 150; }
.undo-toast button { align-items: center; border-color: #5d5d5d; color: #fff; display: flex; font-size: .62rem; gap: .28rem; margin-left: .2rem; padding: .3rem .4rem; }
.principles { border-top: 1px solid #d6d1c7; margin-top: 6rem; padding-top: 1.2rem; }
.principle-grid { display: grid; gap: 1rem; grid-template-columns: repeat(3, 1fr); margin-top: 2rem; }
.principle-grid article { border-top: 3px solid #111; padding-top: 1rem; }
.principle-grid span { color: #8d6b2f; font-size: .74rem; font-weight: 700; }
.principle-grid h2 { font-size: clamp(1.5rem, 3vw, 2.6rem); letter-spacing: -.07em; line-height: .95; margin: 2rem 0 .8rem; text-transform: uppercase; }
.principle-grid p { color: #645f57; font-size: .8rem; line-height: 1.55; max-width: 20rem; }
.lift-enter-active, .lift-leave-active, .toast-enter-active, .toast-leave-active { transition: opacity .3s ease, transform .3s ease; }
.lift-enter-from, .lift-leave-to { opacity: 0; transform: translateY(8px); }
.toast-enter-from, .toast-leave-to { opacity: 0; transform: translate(-50%, 8px); }
@media (max-width: 1060px) { .sandbox-shell { grid-template-columns: 1fr; } .preview-wrap { order: -1; } }
@media (max-width: 720px) { .sandbox-page { padding-inline: .8rem; } .preview-wrap { padding: .55rem; } .workspace.instrumented { grid-template-columns: 1fr; } .inspector { border-left: 0; border-top: 1px solid #e3ded5; } .principle-grid { grid-template-columns: 1fr; } }
@media (prefers-reduced-motion: reduce) { *, *::before, *::after { transition-duration: .01ms !important; } }
</style>
