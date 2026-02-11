<template>
  <app-navbar></app-navbar>

  <main class="page-layout">
    <div class="container">
      <section class="hero-section">
        <div class="hero-content">
          <div class="avatar-column">
            <div class="avatar-wrapper">
              <img :src="avatarSrc" alt="Eleni Chasioti" class="avatar" />
            </div>
          </div>
          
          <div class="content-column">
            <welcome-card></welcome-card>
          </div>
        </div>
      </section>
      
      <section class="skills-section">
        <skill-set></skill-set>
      </section>
    </div>
    
    <app-footer></app-footer>
  </main>
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
/* Minimal Editorial Home Page */
.page-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #fff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  flex: 1;
}

.hero-section {
  padding: 6rem 0;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 5rem;
  align-items: center;
}

.avatar-column {
  display: flex;
  justify-content: center;
  align-items: center;
}

.avatar-wrapper {
  position: relative;
}

.avatar {
  width: 280px;
  height: 280px;
  border-radius: 8px;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.avatar:hover {
  transform: scale(1.02);
}

.content-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.skills-section {
  padding: 5rem 0;
  margin-top: 3rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .container {
    padding: 0 1.5rem;
  }
  
  .hero-section {
    padding: 4rem 0;
  }
  
  .hero-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .avatar {
    width: 200px;
    height: 200px;
  }
  
  .skills-section {
    padding: 3rem 0;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 1.5rem;
  }
  
  .hero-section {
    padding: 3rem 0;
  }
  
  .hero-content {
    gap: 2rem;
  }
  
  .avatar {
    width: 160px;
    height: 160px;
  }
}
</style>
