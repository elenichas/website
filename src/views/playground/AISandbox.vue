<template>
  <app-navbar />

  <main class="sandbox-page">
    <section class="sandbox-intro">
      <p class="eyebrow">AI UI Sandbox / 03</p>
      <h1>UI for<br /><em>uncertain systems.</em></h1>
      <p class="intro-copy">
        A simulated launch-review assistant. Change one product decision at a time
        and watch the interface adapt.
      </p>
    </section>

    <section class="sandbox-shell" aria-label="AI interface sandbox">
      <aside class="control-panel" :class="{ 'mobile-open': mobileControlsOpen }">
        <div class="panel-heading">
          <div>
            <p class="eyebrow">Configuration</p>
            <h2>Product decisions</h2>
          </div>
          <div class="panel-actions">
            <button class="text-button" type="button" @click="resetState">Reset</button>
            <button v-if="!tourActive" class="text-button" type="button" @click="restartTour">Restart tour</button>
            <button class="mobile-dock-close" type="button" @click="mobileControlsOpen = false">Hide</button>
          </div>
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

        <label v-for="control in primaryControls" :key="control.key" class="control">
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

        <button
          class="advanced-toggle"
          type="button"
          :aria-expanded="advancedControlsOpen"
          @click="advancedControlsOpen = !advancedControlsOpen"
        >
          <span>
            <strong>Advanced controls</strong>
            <small>{{ memoryLabel }} memory / {{ transparencyLabel }} transparency</small>
          </span>
          <ChevronDown :size="14" :class="{ rotated: advancedControlsOpen }" />
        </button>

        <div v-if="advancedControlsOpen" class="advanced-controls">
          <label v-for="control in advancedControls" :key="control.key" class="control">
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
        </div>

        <p class="design-note">
          <span>What changed</span>
          {{ currentNote }}
        </p>
      </aside>

      <section ref="previewWrap" class="preview-wrap">
        <div class="preview-topline">
          <p class="eyebrow">Simulated product / launch review</p>
          <span class="live-pill"><i></i> Local prototype</span>
        </div>

        <section v-if="tourActive" class="tour-card" aria-label="Guided demo">
          <div class="tour-meta">
            <p class="eyebrow">Guided demo</p>
            <span>0{{ tourStep + 1 }} / 04</span>
          </div>
          <div class="tour-content">
            <div>
              <h2>{{ currentTourStep.title }}</h2>
              <p>{{ currentTourStep.copy }}</p>
            </div>
            <div class="tour-actions">
              <button
                v-if="tourStep < 2"
                class="primary-button"
                type="button"
                @click="advanceTour"
              >
                {{ currentTourStep.action }}
              </button>
              <button v-if="tourStep === 3" class="primary-button" type="button" @click="restartTour">
                Restart demo
              </button>
              <button class="text-button" type="button" @click="tourActive = false">
                Explore freely
              </button>
            </div>
          </div>
        </section>

        <div class="app-frame">
          <header class="chat-header">
            <div>
              <p class="assistant-name">Launch Review Assistant</p>
              <p class="assistant-state">{{ initiativeSummary }}</p>
            </div>
            <div class="header-status">
              <span class="status-pill" :class="{ 'access-active': state.access > 0 }"><ShieldCheck :size="12" /> {{ accessLabel }}</span>
              <span v-if="state.memory === 0" class="status-pill"><ShieldCheck :size="12" /> Memory off</span>
              <span v-if="state.memory === 1" class="status-pill"><Clock3 :size="12" /> This chat only</span>
              <span v-if="state.memory === 2" class="status-pill memory-active"><Brain :size="12" /> Saved preferences</span>
            </div>
          </header>

          <div class="workspace" :class="{ instrumented: state.transparency === 2 || state.memory > 0 || state.access > 0 }">
            <section class="conversation">
              <div v-if="state.access === 0" class="product-alert">
                <ShieldCheck :size="15" />
                <span><strong>Chat only.</strong> The assistant can use your messages and attachments, but it cannot inspect project files.</span>
              </div>

              <div v-if="state.capability === 'text'" class="product-alert">
                <CircleAlert :size="15" />
                <span><strong>Text-only input.</strong> The assistant can review your brief, but it cannot inspect the cover image.</span>
              </div>

              <div v-if="state.uncertainty === 1" class="review-notice">
                <CircleAlert :size="14" />
                <span><strong>Review recommended.</strong> Two checklist items still need your confirmation.</span>
              </div>

              <div v-if="state.uncertainty === 2" class="review-notice cautious">
                <CircleAlert :size="14" />
                <span><strong>Confirmation needed.</strong> Check the project claim and final mobile crop before publishing.</span>
              </div>

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
                      <div class="progress-track"><i :style="{ transform: `scaleX(${taskProgress / 100})` }"></i></div>
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

              <article v-if="state.initiative === 1 && !actionAdded" class="action-card suggestion-card">
                <div class="action-icon"><ListPlus :size="16" /></div>
                <div>
                  <p class="card-kicker">Suggested next step</p>
                  <h3>Add a mobile QA task to the checklist?</h3>
                  <button class="primary-button" type="button" @click="addQaTask">Add task</button>
                </div>
              </article>

              <article v-if="state.initiative === 2 && !actionAdded" class="action-card suggestion-card">
                <div class="action-icon"><Sparkles :size="16" /></div>
                <div>
                  <p class="card-kicker">Proactive observation</p>
                  <h3>The mobile crop is still a launch risk.</h3>
                  <p>I prepared a QA task so you can add it without writing one from scratch.</p>
                  <button class="primary-button" type="button" @click="addQaTask">Add prepared task</button>
                </div>
              </article>

              <article
                v-if="state.access === 2 && !writesApplied"
                ref="writeProposal"
                class="action-card approval-card write-card"
                :class="{ 'tour-focus': tourActive && (tourStep === 1 || tourStep === 2) }"
              >
                <div class="action-icon"><ShieldAlert :size="16" /></div>
                <div>
                  <p class="card-kicker">Write approval required</p>
                  <h3>Update launch metadata?</h3>
                  <p>The assistant prepared a scoped edit. Nothing changes until you approve it.</p>
                  <div class="file-scope">
                    <span>src/content/craft.json</span>
                    <span>public/social-preview.json</span>
                  </div>
                  <div class="approval-actions">
                    <button class="primary-button" type="button" @click="applyWriteProposal">Approve changes</button>
                    <button type="button" @click="writePlanOpen = !writePlanOpen">{{ writePlanOpen ? "Hide diff" : "Review diff" }}</button>
                  </div>
                  <ul v-if="writePlanOpen" class="plan-list diff-list">
                    <li><strong>craft.json</strong> Add concise launch description</li>
                    <li><strong>social-preview.json</strong> Confirm cover-image path</li>
                  </ul>
                </div>
              </article>

              <article
                v-if="state.access === 2 && writesApplied"
                ref="appliedWrite"
                class="action-card applied-card"
                :class="{ 'tour-focus': tourActive && tourStep === 3 }"
              >
                <div class="action-icon"><Check :size="16" /></div>
                <div>
                  <p class="card-kicker">Write applied</p>
                  <h3>Launch metadata updated.</h3>
                  <button type="button" @click="undoWrite"><Undo2 :size="13" /> Undo write</button>
                </div>
              </article>

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

            <aside v-if="state.transparency === 2 || state.memory > 0 || state.access > 0" class="inspector">
              <section v-if="state.access > 0" class="inspector-section">
                <p class="inspector-title"><FileSearch :size="13" /> Workspace access</p>
                <p v-if="state.access === 1">Read-only access to the files used for this review.</p>
                <p v-else>Can read project files and prepare scoped edits. Writes still require your approval.</p>
                <div class="resource-list">
                  <span><strong>Read</strong> src/content/craft.json</span>
                  <span><strong>Read</strong> public/social-preview.json</span>
                </div>
                <small><LockKeyhole :size="11" /> {{ state.access === 1 ? "Cannot modify project files" : "No write is applied without approval" }}</small>
              </section>

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
                <p>{{ sessionContextCopy }}</p>
              </section>

              <section v-if="state.transparency === 2" class="inspector-section">
                <p class="inspector-title"><Activity :size="13" /> Current state</p>
                <dl>
                  <div><dt>Input</dt><dd>{{ selectedCapability.label }}</dd></div>
                  <div><dt>Memory</dt><dd>{{ memoryLabel }}</dd></div>
                  <div><dt>Initiative</dt><dd>{{ initiativeLabel }}</dd></div>
                  <div><dt>Access</dt><dd>{{ accessLabel }}</dd></div>
                  <div><dt>Evidence</dt><dd>{{ evidenceItems.length }} items</dd></div>
                </dl>
              </section>
            </aside>
          </div>
        </div>
      </section>

      <button
        v-if="!mobileControlsOpen"
        class="mobile-control-toggle"
        type="button"
        aria-label="Open product decision controls"
        @click="openMobileControls"
      >
        Tune interface
      </button>
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
          <h2>Access has boundaries</h2>
          <p>The assistant can stay inside chat, read scoped files, or prepare writes that still require explicit approval.</p>
        </article>
        <article>
          <span>04</span>
          <h2>Initiative stays scoped</h2>
          <p>A model can wait, suggest, or proactively surface work without receiving broader machine access.</p>
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
  ChevronDown,
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
  initiative: 1,
  access: 1,
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
    ChevronDown,
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
          key: "initiative",
          label: "Initiative level",
          options: ["Respond only", "Suggest next steps", "Proactive"],
          descriptions: ["Wait for the user to ask.", "Offer an optional next step.", "Surface a prepared task when the assistant notices a risk."],
        },
        {
          key: "access",
          label: "Access scope",
          options: ["Chat only", "Read workspace", "Propose writes"],
          descriptions: ["Use messages and attachments only.", "Inspect scoped project files without changing them.", "Prepare scoped edits that still require approval."],
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
      writePlanOpen: false,
      writesApplied: false,
      actionAdded: false,
      lastUndoAction: null,
      lastChangedKey: null,
      mobileControlsOpen: false,
      advancedControlsOpen: false,
      composerDraft: "",
      displayedPrompt: "Review this cover image and help me prepare the case study for launch.",
      savedPreferences: ["Concise editorial copy", "Product engineering roles"],
      toast: { visible: false, message: "", undoable: false },
      toastTimer: null,
      tourActive: true,
      tourStep: 0,
    };
  },
  computed: {
    selectedCapability() {
      return this.capabilities.find((capability) => capability.id === this.state.capability);
    },
    supportsImages() {
      return this.state.capability === "image";
    },
    initiativeSummary() {
      return ["Responds when asked", "Suggests optional next steps", "Proactively surfaces relevant work"][this.state.initiative];
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
      if (this.state.access > 0) {
        items.push({
          title: "Workspace files",
          detail: this.state.access === 1 ? "2 scoped files / read only" : "2 scoped files / write proposal available",
        });
      }
      return items;
    },
    memoryLabel() {
      return ["Off", "This chat", "Saved preferences"][this.state.memory];
    },
    initiativeLabel() {
      return ["Respond only", "Suggest next steps", "Proactive"][this.state.initiative];
    },
    primaryControls() {
      return this.controls.filter((control) => !["memory", "transparency"].includes(control.key));
    },
    advancedControls() {
      return this.controls.filter((control) => ["memory", "transparency"].includes(control.key));
    },
    accessLabel() {
      return ["Chat only", "Read workspace", "Propose writes"][this.state.access];
    },
    transparencyLabel() {
      return ["Quiet", "Evidence", "Instrumented"][this.state.transparency];
    },
    sessionContextCopy() {
      return this.supportsImages && this.attachmentAttached
        ? "Uses this prompt and the attached cover image. Cleared when this chat ends."
        : "Uses this prompt and written brief only. Cleared when this chat ends.";
    },
    currentNote() {
      if (this.lastChangedKey === "capability") {
        return this.supportsImages
          ? "Image input adds an attachment, visual-review result, and cover-image evidence."
          : "Image analysis disappears because the selected input mode cannot inspect a cover image.";
      }
      if (this.lastChangedKey === "uncertainty") {
        return [
          "Direct mode removes the review warning and keeps the response concise.",
          "Review mode flags the unresolved checklist items without blocking progress.",
          "Confirmation mode makes the response cautious and asks the user to verify claims before publishing.",
        ][this.state.uncertainty];
      }
      if (this.lastChangedKey === "initiative") {
        return [
          "Respond-only mode removes unsolicited next steps.",
          "Suggestion mode offers one optional QA task after the response.",
          "Proactive mode surfaces a prepared task when the assistant notices a launch risk.",
        ][this.state.initiative];
      }
      if (this.lastChangedKey === "access") {
        return [
          "Chat-only mode removes project-file access. The assistant can still use messages and attachments.",
          "Read access exposes the exact project files the assistant inspected without allowing changes.",
          "Write access adds a scoped file proposal. The user must review and approve before anything changes.",
        ][this.state.access];
      }
      if (this.lastChangedKey === "memory") {
        return [
          "Memory-off mode removes the context panel and excludes memory from the evidence list.",
          "Session memory exposes temporary context that is cleared when this chat ends.",
          "Saved preferences appear as removable items because persistent memory needs user control.",
        ][this.state.memory];
      }
      if (this.lastChangedKey === "transparency") {
        return [
          "Quiet mode hides supporting evidence while leaving necessary access and memory controls visible.",
          "Evidence mode adds a disclosure control for the sources behind the review.",
          "Instrumented mode opens evidence and exposes the current input, memory, initiative, and access state.",
        ][this.state.transparency];
      }
      return "The default assistant suggests an optional task, reads two scoped project files, and exposes evidence on demand.";
    },
    currentTourStep() {
      return [
        {
          title: "Review with boundaries",
          copy: "The assistant can inspect two scoped files, but it cannot change them. Its uncertainty is visible before you act.",
          action: "Next: prepare an edit",
        },
        {
          title: "Prepare a scoped edit",
          copy: "The assistant can draft changes, but nothing is written without your approval. Notice the exact file scope below.",
          action: "Next: review the diff",
        },
        {
          title: "Review before action",
          copy: "The proposed changes are visible before execution. Approve the edit in the card below when you are ready.",
        },
        {
          title: "Stay in control",
          copy: "The write is applied, confirmed, and still reversible. Persistent context remains removable when you enable saved preferences.",
        },
      ][this.tourStep];
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
      this.writePlanOpen = false;
      this.writesApplied = false;
      this.actionAdded = false;
      this.lastUndoAction = null;
      this.lastChangedKey = null;
      this.composerDraft = "";
      this.displayedPrompt = "Review this cover image and help me prepare the case study for launch.";
      this.savedPreferences = ["Concise editorial copy", "Product engineering roles"];
      this.toast = { visible: false, message: "", undoable: false };
      this.advancedControlsOpen = false;
      this.tourActive = true;
      this.tourStep = 0;
    },
    restartTour() {
      this.resetState();
      this.scrollToTourTarget("previewWrap");
    },
    advanceTour() {
      if (this.tourStep === 0) {
        this.state.initiative = 2;
        this.state.access = 2;
        this.state.transparency = 2;
        this.evidenceOpen = true;
        this.lastChangedKey = "access";
        this.tourStep = 1;
        this.scrollToTourTarget("writeProposal");
        return;
      }
      if (this.tourStep === 1) {
        this.writePlanOpen = true;
        this.tourStep = 2;
        this.scrollToTourTarget("writeProposal");
      }
    },
    scrollToTourTarget(refName) {
      this.$nextTick(() => {
        const target = this.$refs[refName];
        if (!target) return;
        target.scrollIntoView({ behavior: "smooth", block: "center" });
      });
    },
    openMobileControls() {
      this.mobileControlsOpen = true;
      this.$nextTick(() => {
        const preview = this.$refs.previewWrap;
        if (!preview) return;
        const bounds = preview.getBoundingClientRect();
        if (bounds.top > window.innerHeight * 0.4 || bounds.bottom < 160) {
          preview.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    },
    handleCapabilityChange() {
      this.attachmentAttached = this.supportsImages;
      this.evidenceOpen = false;
      this.lastChangedKey = "capability";
    },
    handleControlChange(key) {
      this.lastChangedKey = key;
      if (key === "transparency") this.evidenceOpen = this.state.transparency === 2;
      if (key === "initiative") {
        this.actionAdded = false;
      }
      if (key === "access") {
        this.writePlanOpen = false;
        this.writesApplied = false;
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
      this.showToast("QA task added to the checklist", true, "task");
    },
    undoAction() {
      if (this.lastUndoAction === "write") {
        this.undoWrite();
        return;
      }
      this.checklist = this.checklist.filter((item) => item.id !== "qa");
      this.actionAdded = false;
      this.lastUndoAction = null;
      this.toast = { visible: false, message: "", undoable: false };
    },
    applyWriteProposal() {
      this.writesApplied = true;
      this.writePlanOpen = false;
      if (this.tourActive && this.tourStep === 2) {
        this.tourStep = 3;
        this.scrollToTourTarget("appliedWrite");
      }
      this.showToast("Approved metadata edits applied", true, "write");
    },
    undoWrite() {
      this.writesApplied = false;
      this.lastUndoAction = null;
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
    showToast(message, undoable, undoAction = null) {
      clearTimeout(this.toastTimer);
      this.lastUndoAction = undoAction;
      this.toast = { visible: true, message, undoable };
      this.toastTimer = setTimeout(() => {
        this.lastUndoAction = null;
        this.toast = { visible: false, message: "", undoable: false };
      }, 5000);
    },
  },
};
</script>

<style scoped>
.sandbox-page { background: #f4f1e9; color: #111; min-height: 100vh; padding: clamp(2rem, 3vw, 3.4rem) clamp(1rem, 5vw, 5rem); }
.sandbox-intro, .sandbox-shell, .principles { margin: 0 auto; max-width: 1460px; }
.sandbox-intro { align-items: end; display: grid; gap: .45rem 2rem; grid-template-columns: minmax(0, 1fr) minmax(21rem, 29rem); }
.sandbox-intro > .eyebrow { grid-column: 1 / -1; }
.eyebrow, .card-kicker { color: #706b62; font-size: .64rem; font-weight: 700; letter-spacing: .14em; margin: 0; text-transform: uppercase; }
h1 { font-size: clamp(3.5rem, 5.25vw, 5.4rem); letter-spacing: -.09em; line-height: .82; margin: .45rem 0 0; text-transform: uppercase; }
h1 br { display: none; }
h1 em { font-family: var(--font-serif); font-weight: 400; margin-left: .12em; text-transform: none; }
.intro-copy { color: #5c5851; font-size: clamp(.9rem, 1.25vw, 1.02rem); line-height: 1.45; margin-bottom: .28rem; max-width: 29rem; }
.sandbox-shell { display: grid; gap: 1rem; grid-template-columns: minmax(270px, 305px) 1fr; margin-top: 1.1rem; }
.control-panel, .preview-wrap { background: #fff; border: 1px solid #dcd7cd; }
.control-panel { align-self: start; padding: 1.2rem; }
.panel-heading, .preview-topline, .chat-header, .control-title, .range-labels, .composer-toolbar, .response-actions, .approval-actions { align-items: center; display: flex; justify-content: space-between; gap: .7rem; }
h2, h3, p { margin-top: 0; }
.panel-heading h2 { font-size: 1.08rem; margin: .4rem 0 0; }
.panel-actions { align-items: center; display: flex; gap: .55rem; }
.mobile-dock-close, .mobile-control-toggle { display: none; }
button, select { background: transparent; border: 1px solid #d4cfc5; color: inherit; cursor: pointer; font: inherit; }
button:disabled { cursor: not-allowed; opacity: .35; }
.text-button { border: 0; color: #706b62; font-size: .7rem; text-decoration: underline; }
.control { border-top: 1px solid #ebe7df; display: block; padding: .78rem 0; }
.select-control { margin-top: 1rem; }
.control-title { font-size: .74rem; margin-bottom: .6rem; }
.control-title strong { font-size: .61rem; max-width: 9rem; text-align: right; text-transform: uppercase; }
select { background: #fff; font-size: .72rem; padding: .58rem; width: 100%; }
.control-hint { color: #918b81; display: block; font-size: .61rem; line-height: 1.4; margin-top: .5rem; }
input[type="range"] { accent-color: #111; width: 100%; }
.range-labels { color: #918b81; font-size: .57rem; margin-top: .3rem; }
.advanced-toggle { align-items: center; border-color: #e1dcd3; display: flex; justify-content: space-between; padding: .65rem .7rem; text-align: left; width: 100%; }
.advanced-toggle strong, .advanced-toggle small { display: block; }
.advanced-toggle strong { font-size: .66rem; letter-spacing: .08em; text-transform: uppercase; }
.advanced-toggle small { color: #918b81; font-size: .57rem; margin-top: .2rem; }
.advanced-toggle svg { flex: 0 0 auto; transition: transform .2s ease; }
.advanced-toggle svg.rotated { transform: rotate(180deg); }
.advanced-controls { border-bottom: 1px solid #ebe7df; }
.advanced-controls .control:last-child { padding-bottom: .72rem; }
.design-note { background: #f4f1e9; color: #5c5851; font-family: var(--font-serif); font-size: .92rem; line-height: 1.35; margin: .7rem 0 0; padding: .78rem; }
.design-note span { color: #111; display: block; font-family: var(--font-sans); font-size: .56rem; font-weight: 700; letter-spacing: .12em; margin-bottom: .45rem; text-transform: uppercase; }
.preview-wrap { background: #e8e3d9; padding: 1rem; }
.preview-topline { padding: .2rem .1rem .85rem; }
.live-pill { align-items: center; display: flex; font-size: .63rem; gap: .38rem; }
.live-pill i { background: #4d7b5d; border-radius: 50%; height: .42rem; width: .42rem; }
.tour-card { background: #fff; border: 1px solid #d6d1c7; display: grid; gap: .9rem; grid-template-columns: 7rem 1fr; margin-bottom: .55rem; padding: .62rem .75rem; position: sticky; top: 4.7rem; z-index: 20; }
.tour-meta, .tour-content, .tour-actions { align-items: center; display: flex; gap: .7rem; justify-content: space-between; }
.tour-meta { align-items: flex-start; border-right: 1px solid #ebe7df; display: flex; flex-direction: column; justify-content: space-between; padding-right: .75rem; }
.tour-meta span { color: #8d6b2f; font-size: .61rem; font-weight: 700; letter-spacing: .12em; }
.tour-content { padding-top: 0; }
.tour-content h2 { font-size: .9rem; margin-bottom: .2rem; }
.tour-content p { color: #706a61; font-size: .68rem; line-height: 1.45; margin-bottom: 0; max-width: 42rem; }
.tour-actions { flex: 0 0 auto; }
.tour-actions .text-button { white-space: nowrap; }
.app-frame { background: #fbfaf7; border: 1px solid #d6d1c7; height: clamp(350px, calc(100vh - 365px), 535px); overflow: hidden; }
.chat-header { border-bottom: 1px solid #e3ded5; padding: .68rem .82rem; }
.assistant-name { font-size: .82rem; font-weight: 700; margin-bottom: .12rem; }
.assistant-state { color: #817b71; font-size: .66rem; margin-bottom: 0; }
.status-pill { align-items: center; background: #fff; border: 1px solid #ded9cf; color: #706a61; display: flex; font-size: .61rem; gap: .3rem; padding: .32rem .46rem; }
.memory-active, .access-active { background: #edf1eb; border-color: #c6d4c5; color: #45604d; }
.header-status { display: flex; flex-wrap: wrap; gap: .35rem; justify-content: flex-end; }
.workspace { display: grid; grid-template-columns: minmax(0, 1fr); height: calc(100% - 55px); min-height: 0; }
.workspace.instrumented { grid-template-columns: minmax(0, 1fr) minmax(215px, 28%); }
.conversation { display: flex; flex-direction: column; min-height: 0; overflow-y: auto; padding: clamp(.72rem, 1.45vw, 1rem); }
.product-alert, .review-notice { align-items: center; background: #f5f2eb; border: 1px solid #ddd8ce; color: #625d55; display: flex; font-size: .66rem; gap: .45rem; margin-bottom: .45rem; padding: .48rem .58rem; }
.review-notice { background: #faf4e5; border-color: #e6d7ae; color: #745d31; }
.review-notice.cautious { background: #f9ece8; border-color: #dfc0b5; color: #7b4f44; }
.message-row { display: flex; gap: .58rem; margin-top: .7rem; }
.user-row { justify-content: flex-end; }
.avatar { align-items: center; display: flex; flex: 0 0 auto; font-size: .57rem; height: 1.8rem; justify-content: center; width: 1.8rem; }
.user-avatar { background: #e2ddd4; color: #5d574f; }
.assistant-avatar { background: #111; color: #fff; }
.user-bubble { background: #e9e4dc; font-size: .76rem; line-height: 1.45; max-width: 27rem; padding: .8rem .9rem; }
.user-bubble p { margin-bottom: 0; }
.attachment-preview, .analysis-card { align-items: center; background: #fbfaf7; border: 1px solid #d8d2c7; display: flex; gap: .48rem; margin-bottom: .48rem; padding: .42rem; }
.attachment-preview strong, .attachment-preview span, .analysis-card strong, .analysis-card span { display: block; font-size: .65rem; }
.attachment-preview span, .analysis-card span { color: #898276; font-size: .59rem; margin-top: .12rem; }
.attachment-preview button { border: 0; display: flex; margin-left: auto; padding: .2rem; }
.image-placeholder, .analysis-card__icon { align-items: center; background: #ebe6de; color: #746e64; display: flex; height: 2rem; justify-content: center; width: 2rem; }
.assistant-message { color: #403d38; font-size: .79rem; line-height: 1.55; max-width: 42rem; width: 100%; }
.response-meta { color: #8d6b2f; display: flex; font-size: .59rem; font-weight: 700; gap: .5rem; letter-spacing: .08em; margin-bottom: .5rem; text-transform: uppercase; }
.inline-editor { border: 1px solid #d6d1c7; box-sizing: border-box; color: #403d38; font: inherit; line-height: 1.55; padding: .55rem; resize: vertical; width: 100%; }
.analysis-card { background: #f7f8f5; border-color: #d7ded4; margin-top: .58rem; }
.analysis-card > svg { color: #4d7b5d; margin-left: auto; }
.task-widget { background: #fff; border: 1px solid #ddd8ce; margin-top: .58rem; padding: .58rem; }
.widget-heading div:first-child { display: flex; font-size: .65rem; justify-content: space-between; }
.progress-track { background: #e8e4dc; height: 3px; margin: .52rem 0 .3rem; overflow: hidden; }
.progress-track i { background: #4d7b5d; display: block; height: 100%; transform-origin: left center; transition: transform .3s ease; }
.task-widget ul { list-style: none; margin: 0; padding: 0; }
.task-widget li { align-items: center; border-top: 1px solid #eeeae3; display: flex; font-size: .65rem; gap: .48rem; padding: .35rem 0; }
.task-widget li button { align-items: center; display: flex; height: .8rem; justify-content: center; padding: 0; width: .8rem; }
.task-widget li button:has(svg) { background: #4d7b5d; border-color: #4d7b5d; color: #fff; }
.evidence { border-top: 1px solid #e4dfd6; margin-top: .52rem; padding-top: .46rem; }
.evidence-toggle { align-items: center; border: 0; color: #746d63; display: flex; font-size: .64rem; gap: .38rem; padding: 0; }
.evidence-list { display: grid; gap: .35rem; margin-top: .55rem; }
.evidence-list article { background: #f5f2eb; border: 1px solid #e1dcd2; padding: .45rem; }
.evidence-list strong, .evidence-list span { display: block; font-size: .61rem; }
.evidence-list span { color: #817b71; margin-top: .12rem; }
.response-actions { justify-content: flex-start; margin-top: .34rem; }
.response-actions span { flex: 1; }
.response-actions button { align-items: center; border: 0; color: #817b71; display: flex; font-size: .6rem; gap: .28rem; padding: .3rem; }
.response-actions button:hover, .response-actions button.active { background: #eeeae2; color: #111; }
.action-card { background: #fff; border: 1px solid #d6d1c7; display: flex; gap: .6rem; margin: .55rem 0 0 2.38rem; padding: .58rem; }
.approval-card { border-color: #d9c99c; }
.action-icon { color: #8d6b2f; }
.action-card h3 { font-size: .74rem; margin: .32rem 0; }
.action-card p:not(.card-kicker) { color: #756f66; font-size: .65rem; line-height: 1.45; margin-bottom: .6rem; }
.primary-button, .approval-actions button { font-size: .63rem; padding: .38rem .52rem; }
.primary-button { background: #111; color: #fff; }
.approval-actions { justify-content: flex-start; margin-top: .65rem; }
.plan-list { color: #756f66; font-size: .64rem; line-height: 1.5; margin: .6rem 0 0; padding-left: 1rem; }
.file-scope, .resource-list { display: grid; gap: .28rem; margin-top: .5rem; }
.file-scope span, .resource-list span { background: #f3efe7; border: 1px solid #e2ddd3; color: #6d665d; font-family: monospace; font-size: .58rem; padding: .3rem .38rem; }
.resource-list strong { color: #45604d; font-family: var(--font-sans); font-size: .53rem; letter-spacing: .08em; margin-right: .3rem; text-transform: uppercase; }
.applied-card { border-color: #c6d4c5; }
.tour-focus { box-shadow: 0 0 0 3px rgb(141 107 47 / 16%); }
.applied-card .action-icon { color: #4d7b5d; }
.applied-card button { align-items: center; display: flex; font-size: .63rem; gap: .28rem; padding: .35rem .45rem; }
.composer { background: #fff; border: 1px solid #d6d1c7; bottom: 0; margin-top: .58rem; padding: .5rem; position: sticky; z-index: 3; }
.composer textarea { border: 0; box-sizing: border-box; color: #403d38; font: inherit; font-size: .74rem; outline: 0; resize: none; width: 100%; }
.composer-toolbar button { align-items: center; border: 0; color: #746f66; display: flex; font-size: .62rem; gap: .28rem; padding: .34rem; }
.composer-toolbar span { color: #847e74; font-size: .6rem; margin-left: auto; }
.composer-toolbar .send-button { background: #111; color: #fff; height: 1.8rem; justify-content: center; width: 1.8rem; }
.composer-caption { color: #9a948a; font-size: .57rem; margin: .36rem 0 0; text-align: center; }
.inspector { background: #f7f5f0; border-left: 1px solid #e3ded5; overflow-y: auto; padding: .7rem; }
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
.principles { border-top: 1px solid #d6d1c7; margin-top: 4.5rem; padding-top: 1.2rem; }
.principle-grid { display: grid; gap: 1rem; grid-template-columns: repeat(4, 1fr); margin-top: 2rem; }
.principle-grid article { border-top: 3px solid #111; padding-top: 1rem; }
.principle-grid span { color: #8d6b2f; font-size: .74rem; font-weight: 700; }
.principle-grid h2 { font-size: clamp(1.5rem, 3vw, 2.6rem); letter-spacing: -.07em; line-height: .95; margin: 2rem 0 .8rem; text-transform: uppercase; }
.principle-grid p { color: #645f57; font-size: .8rem; line-height: 1.55; max-width: 20rem; }
.lift-enter-active, .lift-leave-active, .toast-enter-active, .toast-leave-active { transition: opacity .3s ease, transform .3s ease; }
.lift-enter-from, .lift-leave-to { opacity: 0; transform: translateY(8px); }
.toast-enter-from, .toast-leave-to { opacity: 0; transform: translate(-50%, 8px); }
@media (max-width: 1060px) { .sandbox-shell { grid-template-columns: 1fr; } .preview-wrap { order: -1; } .principle-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 720px) {
  .sandbox-page { padding: 3.2rem .8rem 3rem; }
  .sandbox-intro { display: block; }
  h1 { font-size: clamp(3.25rem, 14vw, 3.8rem); line-height: .82; margin: .85rem 0 1.05rem; }
  h1 br { display: block; }
  h1 em { margin-left: 0; }
  .intro-copy { font-size: .96rem; line-height: 1.5; }
  .sandbox-shell { gap: .75rem; margin-top: 2.2rem; }
  .control-panel {
    bottom: .55rem;
    box-shadow: 0 10px 30px rgb(27 24 19 / 18%);
    display: none;
    gap: .25rem .72rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    left: .55rem;
    max-height: min(52vh, 27rem);
    overflow-y: auto;
    padding: .76rem;
    position: fixed;
    right: .55rem;
    z-index: 140;
  }
  .control-panel.mobile-open { display: grid; }
  .panel-heading, .advanced-toggle, .advanced-controls, .design-note { grid-column: 1 / -1; }
  .advanced-controls { display: grid; gap: .25rem .72rem; grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .mobile-dock-close { background: #111; border-color: #111; color: #fff; display: inline-flex; font-size: .62rem; padding: .3rem .42rem; }
  .mobile-control-toggle { background: #111; border-color: #111; bottom: .7rem; color: #fff; display: block; font-size: .67rem; letter-spacing: .08em; padding: .68rem .82rem; position: fixed; right: .7rem; text-transform: uppercase; z-index: 135; }
  .preview-wrap { order: initial; padding: .5rem; scroll-margin-top: 4rem; }
  .tour-card { display: block; padding: .68rem .72rem; top: 3.8rem; }
  .tour-meta { align-items: center; border-bottom: 1px solid #ebe7df; border-right: 0; flex-direction: row; padding: 0 0 .5rem; }
  .tour-content { align-items: flex-start; display: block; }
  .tour-content p { font-size: .65rem; }
  .tour-actions { justify-content: flex-start; margin-top: .58rem; }
  .panel-heading h2 { font-size: 1rem; }
  .select-control { margin-top: 0; }
  .control { min-width: 0; padding: .52rem 0; }
  .control-title { align-items: flex-start; display: block; font-size: .66rem; margin-bottom: .32rem; }
  .control-title strong { display: block; font-size: .52rem; margin-top: .14rem; max-width: none; overflow: hidden; text-align: left; text-overflow: ellipsis; white-space: nowrap; }
  select { font-size: .66rem; padding: .42rem; }
  .range-labels, .control-hint { display: none; }
  .design-note { font-size: .82rem; margin-top: .28rem; padding: .62rem; }
  .design-note span { font-size: .51rem; margin-bottom: .3rem; }
  .preview-topline { flex-wrap: wrap; padding: .18rem .08rem .55rem; }
  .app-frame, .workspace { height: auto; min-height: 0; overflow: visible; }
  .chat-header { align-items: flex-start; flex-direction: column; gap: .5rem; padding: .72rem; }
  .header-status { justify-content: flex-start; }
  .workspace.instrumented { grid-template-columns: 1fr; }
  .conversation { padding: .78rem; }
  .product-alert, .review-notice { font-size: .65rem; line-height: 1.4; padding: .55rem .6rem; }
  .message-row { gap: .42rem; margin-top: .85rem; }
  .avatar { height: 1.55rem; width: 1.55rem; }
  .user-bubble { font-size: .71rem; max-width: calc(100% - 1.8rem); padding: .68rem .72rem; }
  .attachment-preview, .analysis-card { gap: .42rem; padding: .42rem; }
  .assistant-message { font-size: .75rem; line-height: 1.5; }
  .analysis-card { margin-top: .72rem; }
  .task-widget { margin-top: .72rem; padding: .62rem; }
  .task-widget li { line-height: 1.35; padding: .46rem 0; }
  .response-actions { flex-wrap: wrap; }
  .action-card { gap: .52rem; margin: .72rem 0 0; padding: .68rem; }
  .action-card h3 { line-height: 1.35; }
  .file-scope span, .resource-list span { overflow-wrap: anywhere; }
  .composer { margin-top: .85rem; padding: .52rem; }
  .inspector { border-left: 0; border-top: 1px solid #e3ded5; padding: .55rem; }
  .inspector-section { margin-bottom: .48rem; padding: .62rem; }
  .undo-toast { bottom: .75rem; box-sizing: border-box; max-width: calc(100vw - 1.5rem); width: max-content; }
  .principles { margin-top: 4rem; }
  .principle-grid { gap: .75rem; grid-template-columns: 1fr; margin-top: 1.35rem; }
  .principle-grid h2 { font-size: 1.75rem; margin: 1.1rem 0 .55rem; }
}
@media (prefers-reduced-motion: reduce) { *, *::before, *::after { transition-duration: .01ms !important; } }
</style>
