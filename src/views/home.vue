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
/* Modern Home Page Layout */
.page-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-lg);
  flex: 1;
}

.hero-section {
  padding: var(--space-4xl) 0;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: var(--space-4xl);
  align-items: center;
  min-height: 60vh;
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
  border-radius: var(--radius-xl);
  object-fit: cover;
  border: 1px solid var(--border-light);
  box-shadow: var(--shadow-lg);
  transition: all var(--transition-normal);
}

.avatar:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.content-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: var(--space-lg);
}

.skills-section {
  padding: var(--space-4xl) 0 var(--space-2xl) 0;
  border-top: 1px solid var(--border-light);
  margin-top: var(--space-2xl);
}

/* Responsive Design */
@media (max-width: 768px) {
  .container {
    padding: 0 var(--space-md);
  }
  
  .hero-section {
    padding: var(--space-2xl) 0;
  }
  
  .hero-content {
    grid-template-columns: 1fr;
    gap: var(--space-2xl);
    text-align: center;
    min-height: auto;
  }
  
  .content-column {
    padding-left: 0;
  }
  
  .avatar {
    width: 200px;
    height: 200px;
  }
  
  .skills-section {
    padding: var(--space-2xl) 0;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 var(--space-md);
  }
  
  .hero-section {
    padding: var(--space-xl) 0;
  }
  
  .hero-content {
    gap: var(--space-xl);
  }
  
  .avatar {
    width: 160px;
    height: 160px;
  }
}
</style>
