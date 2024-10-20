<template>
  <div class="home-container">
    <app-navbar></app-navbar>

    <welcome-card></welcome-card>

    <skill-set></skill-set>

    <GithubAccount> </GithubAccount>

    <app-footer></app-footer>
  </div>
</template>

<script>
import AppNavbar from "../components/navbar";
import AppHero from "../components/hero";
import SuperProf from "../components/superprof";
import AppFooter from "../components/footer";
import GithubAccount from "../components/githubAccount.vue";
import WelcomeCard from "../components/welcomeCard.vue";
import Contact from "../components/contact.vue";
import CubeScene from "../components/cubeScene.vue";
import SkillSet from "../components/skillSet.vue";

export default {
  name: "Home",
  components: {
    AppNavbar,
    AppHero,
    SuperProf,
    AppFooter,
    WelcomeCard,
    Contact,
    CubeScene,
    SkillSet,
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
