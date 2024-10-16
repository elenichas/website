<template>
  <div class="home-container">
    <app-navbar></app-navbar>

    <welcome-card></welcome-card>
    <!-- <GithubAccount> </GithubAccount> -->
    <!-- <cube-scene></cube-scene> -->
    <!-- <super-prof></super-prof> -->
    <!-- <location></location> -->

    <skill-set></skill-set>

    <contact></contact>

    <app-footer></app-footer>
  </div>
</template>

<script>
import AppNavbar from "../components/navbar";
import AppHero from "../components/hero";
import SuperProf from "../components/superprof";
import Location from "../components/locations";
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
    Location,
    AppFooter,
    WelcomeCard,
    Contact,
    CubeScene,
    SkillSet,
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
