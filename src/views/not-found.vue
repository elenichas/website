<template>
  <main class="not-found-page">
    <app-navbar />

    <section class="not-found-shell" aria-labelledby="not-found-title">
      <p class="section-label">Missing route</p>
      <h1 id="not-found-title">404</h1>
      <p class="not-found-message">{{ $t("notFound.message") }}</p>
      <router-link to="/" class="btn-primary">
        {{ $t("nav.home") }}
        <span class="mdi mdi-arrow-right"></span>
      </router-link>
    </section>

    <app-footer />
  </main>
</template>

<script>
import AppNavbar from "@/components/navbar.vue";
import AppFooter from "@/components/footer.vue";

export default {
  name: "NotFound",
  components: {
    AppNavbar,
    AppFooter,
  },
};
</script>

<style scoped>
.not-found-page {
  min-height: 100vh;
  background: var(--color-bg);
  color: var(--color-text);
}

.not-found-shell {
  width: min(100%, 58rem);
  min-height: calc(100vh - 72px);
  margin: 0 auto;
  padding: clamp(5rem, 12vw, 9rem) var(--space-8);
  display: grid;
  align-content: center;
  justify-items: start;
  gap: var(--space-5);
}

.not-found-shell h1 {
  margin: 0;
  font-family: var(--font-sans);
  font-size: clamp(5.5rem, 18vw, 13rem);
  font-weight: 900;
  line-height: 0.9;
  letter-spacing: 0;
}

.not-found-message {
  max-width: 38rem;
  color: var(--color-text-secondary);
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  line-height: 1.45;
}

@media (max-width: 768px) {
  .not-found-shell {
    min-height: auto;
    padding: var(--space-20) var(--space-5) var(--space-12);
  }
}

@media (max-width: 480px) {
  .not-found-shell {
    padding-left: var(--space-4);
    padding-right: var(--space-4);
  }
}
</style>
