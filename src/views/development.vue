<template>
  <!-- Navbar Component -->
  <app-navbar></app-navbar>

  <!-- Architecture Gallery -->
  <h2 class="gallery-title">Development</h2>
  <div class="gallery-container">
    <div class="gallery-item" v-for="(image, index) in images0" :key="index">
      <div class="image-wrapper">
        <img :src="image.src" :alt="image.alt" />
      </div>
      <h3>{{ image.name }}</h3>
      <p>Stack: {{ image.stack }}</p>
      <a :href="image.gitlabLink" target="_blank" class="gallery-link"
        >View on GitLab</a
      >
    </div>
  </div>
  <div class="gallery-container">
    <div class="gallery-item" v-for="(image, index) in images1" :key="index">
      <div class="image-wrapper">
        <img :src="image.src" :alt="image.alt" />
      </div>
      <h3>{{ image.name }}</h3>
      <p>Stack: {{ image.stack }}</p>
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
      images0: [
        {
          name: "Master Thesis (Cricket Plug in)",
          stack: "C#,Rhino, Grasshopper",
          date: "2024-10-01",
          gitlabLink:
            "https://github.com/elenichas/Cricket-Plugin-Master-thesis",
          src: require("@/images/development/cricket2.png"),
        },
        {
          name: "View Analysis (GH Plug in)",
          stack: "C#,Rhino, Grasshopper",
          date: "2024-09-15",
          gitlabLink: "https://github.com/elenichas/view-analysis-plugin",
          src: require("@/images/development/viewAnalysis.png"),
        },
        {
          name: "Portfolio Website",
          stack: "Vue.js, JavaScript,CSS,HTML,d3",
          date: "2024-08-20",
          gitlabLink: "https://github.com/elenichas/website",
          src: require("@/images/development/portfolio.png"),
        },
      ],
      images1: [
        {
          name: "Book Reviews App",
          stack: "Express.Js, Node.js,JavaScript",
          date: "2024-07-10",
          gitlabLink: "https://github.com/elenichas/expressBookReviews",
          src: require("@/images/development/expressApp.png"),
        },
        {
          name: "Expenses App",
          stack: "React,TypeScript,HTML,CSS,React Bootstrap,react-chartjs-2",
          date: "2024-06-30",
          gitlabLink: "https://github.com/elenichas/expenses-app",
          src: require("@/images/development/reactApp.jpg"),
        },
        {
          name: "Book Search App",
          stack: "Flask,Python,HTML,HTTP",
          date: "2024-05-12",
          gitlabLink: "https://github.com/elenichas/book-search-python-flask",
          src: require("@/images/development/bookSearchApp.png"),
        },
      ],
    };
  },
};
</script>

<style scoped></style>
