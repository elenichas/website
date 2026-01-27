<template>
  <app-navbar></app-navbar>

  <div class="main-container">
    <div class="left-section">
      <div class="welcome-avatar">
        <img :src="avatarSrc" alt="Eleni Chasioti Avatar" class="avatar-img" />
      </div>
    </div>

    <div class="right-section">
      <welcome-card></welcome-card>

      <skill-set></skill-set>

      <!-- <GithubAccount> </GithubAccount> -->

      <app-footer></app-footer>
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
  min-height: 100vh; /* Ensures full screen height */
  padding: 12px;
}

.left-section {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.right-section {
  padding: 20px 20px 20px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Distributes content to keep footer at the bottom */
  flex-grow: 1; /* Ensures the section grows to fill space */
}

/* Responsive Design */
@media (max-width: 768px) {
  .main-container {
    display: grid;
    grid-template-columns: 1fr; /* Change to 1 column */
    gap: 20px;
  }
}

@media (max-width: 480px) {
  .main-container {
    display: grid;
    grid-template-columns: 1fr; /* Change to 1 column */
    gap: 10px;
  }
}

@media (max-width: 320px) {
  .main-container {
    display: grid;
    grid-template-columns: 1fr; /* Change to 1 column */
    gap: 10px;
  }
}
</style>
