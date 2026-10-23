<template>
  <div class="portfolio-theme">
    <app-navbar />
    <main class="booking-page">
      <header class="booking-intro">
        <h1>{{ $t("booking.title") }}</h1>
        <p>{{ $t("booking.intro") }}</p>
      </header>
      <section class="booking-calendar" :aria-label="$t('booking.calendarTitle')">
        <iframe
          :src="bookingUrl"
          :title="$t('booking.calendarTitle')"
          class="booking-frame"
          referrerpolicy="strict-origin-when-cross-origin"
        ></iframe>
      </section>
      <div class="booking-alternatives">
        <a :href="bookingUrl" target="_blank" rel="noopener noreferrer">
          {{ $t("booking.direct") }} <span aria-hidden="true">↗</span>
        </a>
        <p>{{ $t("booking.email") }} <a href="mailto:eleni.chasioti@gmail.com">eleni.chasioti@gmail.com</a></p>
      </div>
    </main>
    <app-footer />
  </div>
</template>

<script setup>
import { useHead } from "@vueuse/head";
import AppNavbar from "../components/navbar.vue";
import AppFooter from "../components/footer.vue";
import { t } from "../i18n";

const bookingUrl = "https://calendly.com/eleni-chasioti-arch/30min";
useHead(() => ({
  title: `${t("common.bookCall")} | Eleni Chasioti`,
  meta: [{ name: "description", content: t("booking.description") }],
}));
</script>

<style scoped>
.booking-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: clamp(2rem, 5vw, 4rem) 24px 0;
}
.booking-intro { max-width: 680px; margin-bottom: 24px; }
.booking-intro h1 {
  margin: 0 0 16px;
  font-size: clamp(2.25rem, 5vw, 4rem);
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1.1;
  text-wrap: balance;
}
.booking-intro p { font-size: 1.0625rem; line-height: 1.7; color: var(--color-text-secondary); }
.booking-calendar { background: #fff; }
.booking-frame { display: block; width: 100%; height: 850px; border: 0; }
.booking-alternatives { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 16px 32px; padding-top: 24px; border-top: 1px solid var(--color-border); font-size: 0.875rem; }
.booking-alternatives p { margin: 0; color: var(--color-text-secondary); }
.booking-alternatives a { color: var(--color-text); text-underline-offset: 4px; }
.booking-alternatives a:focus-visible { outline: 2px solid currentColor; outline-offset: 5px; }
@media (max-width: 600px) {
  .booking-page { padding-inline: 12px; }
  .booking-intro, .booking-alternatives { padding-inline: 8px; }
  .booking-frame { height: 1100px; }
}
</style>
