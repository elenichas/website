<template>
  <div class="home-container">
    <!-- Navbar Component -->
    <app-navbar></app-navbar>

    <!-- Hero Component -->
    <app-hero></app-hero>

    <!-- Features Component -->
    <app-features></app-features>

    <!-- Contact Component -->
    <app-contact></app-contact>

    <!-- github account graph Component -->
    <GithubAccount> </GithubAccount>

    <!-- Call to Action Component -->
    <app-cta></app-cta>

    <!-- Footer Component -->
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppNavbar from "../components/navbar";
import AppHero from "../components/hero";
import AppFeatures from "../components/features";
import AppCta from "../components/content";
import AppContact from "../components/contact";
import AppFooter from "../components/footer";
import GithubAccount from "../components/githubAccount.vue";

export default {
  name: "Home",
  components: {
    AppNavbar,
    AppHero,
    AppFeatures,
    AppCta,
    AppContact,
    AppFooter,
    GithubAccount,
  },
  metaInfo: {
    title: "Work by Eleni Chasioti",
    meta: [
      {
        property: "og:title",
        content: "Work by Eleni Chasioti",
      },
    ],
  },
};
</script>

<style scoped>
.home-container {
  width: 100%;
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
</style>
