<template>
  <section class="next-project">
    <div class="next-project-inner">
      <span class="next-label">{{ $t("common.nextProject") }}</span>
      <router-link :to="route" class="next-link">
        <span class="next-fill" aria-hidden="true"></span>
        <div class="next-info">
          <h3 class="next-title">{{ title }}</h3>
          <p class="next-type">{{ type }}</p>
        </div>
        <span class="next-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </span>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "NextProject",
  props: {
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    route: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.next-project {
  max-width: 760px;
  margin: var(--space-16) auto 0;
  padding: 0 var(--space-8) var(--space-12);
}

.next-project-inner { padding-top: var(--space-12); }

.next-label {
  display: block;
  margin: 0 0 14px 28px;
  font-size: var(--type-sm, 14px);
  color: var(--color-text-muted);
}

/* Pill link. On hover a circle grows from the arrow to fill the pill; it is
   blended with "difference", so the text flips black/white like the nav pill. */
.next-link {
  position: relative;
  isolation: isolate;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  min-height: 76px;
  padding: 8px 8px 8px 28px;
  border: 1px solid var(--color-border-strong);
  border-radius: 999px;
  background: var(--color-bg);
  color: var(--color-text);
  text-decoration: none;
}

.next-link:focus-visible { outline: 2px solid var(--color-text); outline-offset: 4px; }

.next-fill {
  position: absolute;
  top: 8px;
  right: 8px;
  bottom: 8px;
  z-index: 1;
  width: 60px;
  border-radius: 999px;
  background: #fff;
  mix-blend-mode: difference;
  pointer-events: none;
  transition: width 560ms cubic-bezier(.65, 0, .35, 1), top 560ms cubic-bezier(.65, 0, .35, 1), bottom 560ms cubic-bezier(.65, 0, .35, 1), right 560ms cubic-bezier(.65, 0, .35, 1);
}

.next-link:is(:hover, :focus-visible) .next-fill {
  top: -1px;
  right: -1px;
  bottom: -1px;
  width: calc(100% + 2px);
}

.next-info { display: flex; flex-direction: column; gap: 4px; min-width: 0; }

.next-title {
  margin: 0;
  font-family: var(--font-display);
  font-size: 1.375rem;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: inherit;
}

.next-type { margin: 0; font-size: 0.8125rem; color: var(--color-text-muted); }

.next-arrow {
  display: grid;
  flex: none;
  place-items: center;
  width: 60px;
  height: 60px;
  color: var(--color-text);
  transition: transform 560ms cubic-bezier(.65, 0, .35, 1);
}

.next-link:is(:hover, :focus-visible) .next-arrow { transform: translateX(-6px); }

@media (prefers-reduced-motion: reduce) {
  .next-fill, .next-arrow { transition: none; }
}

@media (max-width: 768px) {
  .next-project { padding: 0 var(--space-5) var(--space-8); margin-top: var(--space-12); }
  .next-project-inner { padding-top: var(--space-8); }
  .next-title { font-size: 1.125rem; }
}

@media (max-width: 480px) {
  .next-project { padding: 0 var(--space-4) var(--space-6); margin-top: var(--space-8); }
  .next-project-inner { padding-top: var(--space-6); }
  .next-link { min-height: 64px; padding-left: 22px; }
  .next-label { margin-left: 22px; }
  .next-fill { width: 48px; }
  .next-arrow { width: 48px; height: 48px; }
  .next-title { font-size: 1rem; }
  .next-arrow svg { width: 20px; height: 20px; }
}
</style>
