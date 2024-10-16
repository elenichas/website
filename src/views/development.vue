<template>
  <!-- Navbar Component -->
  <app-navbar></app-navbar>

  <!-- Architecture Gallery -->
  <h2 class="gallery-title">Development</h2>
  <div class="gallery-container">
    <div class="gallery-item" v-for="(image, index) in images" :key="index">
      <div class="image-wrapper">
        <img :src="image.src" :alt="image.alt" />
      </div>
      <h3>{{ image.name }}</h3>
      <p>Stack: {{ image.stack }}</p>
      <p>Date: {{ image.date }}</p>
      <a :href="image.gitlabLink" target="_blank" class="gallery-link"
        >View on GitLab</a
      >
    </div>
  </div>
</template>

<script>
import AppNavbar from "../components/navbar";

export default {
  name: "ImageGallery",
  components: {
    AppNavbar,
  },
  data() {
    return {
      images: [
        {
          name: "Master Thesis (Cricket Plug in)",
          stack: "C#",
          date: "2024-10-01",
          gitlabLink: "https://gitlab.com/your-gitlab-link-1",
          src: require("@/images/thesis/hero.jpg"),
        },
        {
          name: "View Analysis( GH Plug in)",
          stack: "C#",
          date: "2024-09-15",
          gitlabLink: "https://gitlab.com/your-gitlab-link-2",
          src: require("@/images/thesis/hero.jpg"),
        },
        {
          name: "Portfolio Website",
          stack: "Vue.js, JavaScript,CSS,HTML",
          date: "2024-08-20",
          gitlabLink: "https://gitlab.com/your-gitlab-link-3",
          src: require("@/images/thesis/hero.jpg"),
        },
        {
          name: "Book Record App",
          stack: "Express.Js, Node.js,JavaScript",
          date: "2024-07-10",
          gitlabLink: "https://gitlab.com/your-gitlab-link-4",
          src: require("@/images/thesis/hero.jpg"),
        },
        {
          name: "Budget App",
          stack: "React,JavaScript,HTML,CSS",
          date: "2024-06-30",
          gitlabLink: "https://gitlab.com/your-gitlab-link-5",
          src: require("@/images/thesis/hero.jpg"),
        },
        {
          name: "Open Library Search",
          stack: "Flask,Python,HTML,HTTP",
          date: "2024-05-12",
          gitlabLink: "https://github.com/elenichas/flask-python-API",
          src: require("@/images/thesis/hero.jpg"),
        },
      ],
    };
  },
};
</script>

<style scoped>
.gallery-title {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 20px;
}

.gallery-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
  margin: 0 auto;
  width: 90%;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  text-align: center;
}

.image-wrapper {
  overflow: hidden;
  /* border-radius: 10px; */
  height: 0;
  padding-bottom: 150%;
  position: relative;
  transition: transform 0.3s ease-in-out;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
}

.image-wrapper:hover img {
  transform: scale(1.2);
}

.image-title {
  font-size: 1.1rem;
  margin-top: 10px;
  font-weight: 500;
}
</style>
