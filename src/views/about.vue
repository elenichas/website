<template>
  <app-navbar></app-navbar>
  <div class="about">
    <!-- Navbar Component -->

    <div class="about-container">
      <div class="about-image">
        <img :src="imageSrc" alt="Eleni Working at Desk" class="about-avatar" />
      </div>
      <div class="about-content">
        <h2>About me.</h2>
        <p>
          I am a constantly evolving web developer passionate about designing
          captivating web solutions with great attention to detail! I love
          working on the intersection of design and development, creating
          intuitive user experiences!
        </p>
        <!-- Use the download attribute to enable PDF download -->
        <a :href="cvLink" download class="download-btn">
          <i class="fas fa-download"></i> DOWNLOAD CV
        </a>
      </div>
    </div>
    <skill-set></skill-set>
  </div>
</template>

<script>
import AppNavbar from "../components/navbar";
import BackToHome from "../components/backToHome.vue";
import SkillSet from "../components/skillSet.vue";

// Use require if the image is inside the src/assets directory
const imageSrc = require("@/images/avatar.png"); // Use require if it's in the assets folder

// Use a direct path for the CV as it's located in the public folder
const cvLink = "/cv/Eleni_Chasioti_CV.pdf"; // This points to the public folder

export default {
  name: "About",
  components: {
    AppNavbar,
    SkillSet,
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
  background-color: #f9f9f9;
  border-radius: 20px;
  max-width: 900px;
  margin: 0 auto;
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
  color: #6c63ff;
  margin-bottom: 20px;
}

p {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 20px;
}

.download-btn {
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  border-radius: 12px;
  background-color: #6c63ff;
  color: white;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.download-btn i {
  margin-right: 10px;
}

.download-btn:hover {
  background-color: #5a54db;
}
</style>
