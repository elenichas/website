<template>
  <app-navbar></app-navbar>

  <div class="main-container">
    <div class="left-section">
      <!-- <skill-set></skill-set> -->
      <div class="welcome-avatar">
        <img :src="avatarSrc" alt="Eleni Chasioti Avatar" class="avatar-img" />
      </div>

      <app-footer></app-footer>
    </div>

    <div class="right-section">
      <welcome-card></welcome-card>
      <GithubAccount> </GithubAccount>
    </div>
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
  data() {
    return {
      avatarSrc: require("@/images/eleniBig.png"), // Path to your avatar image
    };
  },
};
</script>

<style scoped>
.welcome-avatar {
  flex: 0.5;
  text-align: center;
  justify-items: center;
  padding-bottom: 5%;
}

.avatar-img {
  width: 60%;
  height: 60%;
  min-height: 120px;
  min-width: 120px;
  object-fit: cover;
}
.home-container {
  width: 100%;
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}

.main-container {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 20px;
}

.left-section {
  padding: 20px;
}

.right-section {
  padding: 20px;
}
</style>
