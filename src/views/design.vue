<template>
  <app-navbar></app-navbar>
  <div class="gallery-container">
    <div class="gallery-item" v-for="(image, index) in images" :key="index">
      <div class="image-wrapper">
        <img :src="image.src" :alt="image.alt" />
      </div>
      <p class="image-title">{{ image.title }}</p>
    </div>
  </div>
</template>

<script>
import AppNavbar from "../components/navbar";

export default {
  name: "Design",
  components: {
    AppNavbar,
  },
  data() {
    return {
      images: [
        {
          src: require("@/images/gallery/hapi.png"),
          alt: "Hapi Project",
          title: "Hapi Project",
        },
        {
          src: require("@/images/gallery/thesis.png"),
          alt: "Thesis Project",
          title: "Thesis Project",
        },
        {
          src: require("@/images/gallery/workshop.png"),
          alt: "Workshop Design",
          title: "Workshop Design",
        },
        {
          src: require("@/images/gallery/hapi.png"),
          alt: "Hapi Design",
          title: "Filos Mobile App",
        },
        {
          src: require("@/images/gallery/hapi.png"),
          alt: "Another Hapi Design",
          title: "Local Bakery App",
        },
        {
          src: require("@/images/gallery/hapi.png"),
          alt: "Yet Another Hapi Design",
          title: "Animal Shelter Website",
        },
      ],
    };
  },
};
</script>

<style scoped>
.gallery-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
  margin: 0 auto;
  width: 90%;
  /* max-width: 1200px; */
}

/* Individual Gallery Item */
.gallery-item {
  position: relative;
  overflow: hidden;
  text-align: center;
}

/* Image Wrapper */
.image-wrapper {
  overflow: hidden;
  border-radius: 10px;
  height: 0;
  padding-bottom: 150%; /* Adjust the ratio if needed (150% gives a vertical aspect ratio) */
  position: relative;
  transition: transform 0.3s ease-in-out;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* This ensures that the image covers the entire wrapper */
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
}

/* Hover Effect: Zoom Image */
.image-wrapper:hover img {
  transform: scale(1.2);
}

/* Image Title */
.image-title {
  font-size: 1.1rem;
  margin-top: 10px;
  font-weight: 500;
}
</style>
