<template>
  <section class="case-snapshot" :aria-label="copy.label">
    <p class="snapshot-eyebrow">{{ copy.label }}</p>
    <dl class="snapshot-grid">
      <div v-for="item in items" :key="item.key" class="snapshot-item">
        <dt>{{ item.title }}</dt>
        <dd>{{ item.text }}</dd>
      </div>
    </dl>
  </section>
</template>

<script>
import SNAPSHOTS from "@/caseSnapshots";

const LABELS = {
  en: { label: "At a glance", problem: "Problem", role: "My role", did: "What I did", outcome: "Outcome" },
  el: { label: "Με μια ματιά", problem: "Πρόβλημα", role: "Ο ρόλος μου", did: "Τι έκανα", outcome: "Αποτέλεσμα" },
};

export default {
  name: "CaseSnapshot",
  props: {
    /** Key into src/caseSnapshots.js */
    page: { type: String, required: true },
  },
  computed: {
    content() { return SNAPSHOTS[this.page]; },
    locale() { return this.$i18n?.locale === "el" && this.content.el ? "el" : "en"; },
    copy() { return LABELS[this.$i18n?.locale === "el" ? "el" : "en"]; },
    items() {
      const text = this.content[this.locale];
      return ["problem", "role", "did", "outcome"].map((key) => ({ key, title: this.copy[key], text: text[key] }));
    },
  },
};
</script>

<style scoped>
.case-snapshot { box-sizing: border-box; max-width: 1152px; margin: 0 auto 96px; padding: 0 32px; }
.snapshot-eyebrow { margin: 0 0 20px; font-size: 12px; letter-spacing: .08em; text-transform: uppercase; color: var(--color-text-secondary); }
.snapshot-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 24px 32px; margin: 0; }
.snapshot-item { padding-top: 16px; border-top: 1px solid var(--color-border); }
.snapshot-item dt { font-size: 14px; font-weight: 600; color: var(--color-text); }
.snapshot-item dd { margin: 8px 0 0; font-size: 15px; line-height: 1.6; color: var(--color-text-secondary); }
.case-snapshot.snapshot-in-playground { margin-top: 96px; }
@media (max-width: 960px) { .snapshot-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 600px) { .snapshot-grid { grid-template-columns: 1fr; gap: 20px; } .case-snapshot { padding: 0 20px; margin-bottom: 64px; } }
</style>
