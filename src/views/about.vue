<template>
  <app-navbar></app-navbar>
  <!-- <div class="about">
    <div class="about-container">
      <p>
        I am a constantly evolving web developer passionate about designing
        captivating web solutions with great attention to detail! I love working
        on the intersection of design and development, creating intuitive user
        experiences!
      </p>
     Use the download attribute to enable PDF download 
      <a :href="cvLink" download class="download-btn"> download CV </a> 
    </div>
  </div>
  <skill-set></skill-set> -->
  <GithubAccount> </GithubAccount>
</template>

<script>
import AppNavbar from "../components/navbar";
import SkillSet from "../components/skillSet.vue";
import GithubAccount from "../components/githubAccount.vue";

// Use require if the image is inside the src/assets directory
const imageSrc = require("@/images/avatar.png"); // Use require if it's in the assets folder

// Use a direct path for the CV as it's located in the public folder
const cvLink = "/cv/Eleni_Chasioti_CV.pdf"; // This points to the public folder

export default {
  name: "About",
  components: {
    AppNavbar,
    SkillSet,
    GithubAccount,
  },
  data() {
    return {
      imageSrc,
      cvLink,
    };
  },
};
</script>

<style scoped>
.about-container {
  text-align: center;
  align-items: center;
  padding: 4% 20%;
}

.about-image {
  flex: 0.5;
  text-align: center;
}

.about-avatar {
  width: 250px;
  border-radius: 50%;
}

.about-content {
  flex: 1;
  padding-left: 40px;
}

h2 {
  font-size: 2.5rem;
  color: #000000;
  margin-bottom: 20px;
}

p {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 20px;
}

.download-btn {
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 25px;
  font-size: 1em;
  cursor: pointer;
  margin-top: 15px;
  transition: background-color 0.3s ease;
}

.download-btn i {
  margin-right: 10px;
}

.download-btn:hover {
  background-color: #555;
}
</style>
