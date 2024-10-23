<template>
  <app-navbar></app-navbar>

  <div class="main-container">
    <!-- Left section (view switch button) -->
    <div class="left-section">
      <div class="view-toggle">
        <button
          @click="toggleView('grid')"
          :class="{ active: view === 'grid' }"
        >
          Grid
        </button>
        <button
          @click="toggleView('list')"
          :class="{ active: view === 'list' }"
        >
          List
        </button>
      </div>
    </div>

    <!-- Right section (titles and image galleries) -->
    <div class="right-section">
      <h2 :class="['gallery-title', view]">UX/UI Design</h2>
      <div :class="['gallery-container', view]">
        <div
          class="gallery-item"
          v-for="(image, index) in uxuiImages"
          :key="index"
          @mouseover="hoverImage = image.src"
          @mouseleave="hoverImage = ''"
          @mousemove="updateMousePosition($event)"
        >
          <router-link :to="image.route">
            <div v-if="view === 'grid'" class="image-wrapper">
              <img :src="image.src" :alt="image.alt" />
            </div>
            <p :class="['image-title', view]">{{ image.title }}</p>
          </router-link>
        </div>
      </div>

      <h2 :class="['gallery-title', view]">Computational Design</h2>
      <div :class="['gallery-container', view]">
        <div
          class="gallery-item"
          v-for="(image, index) in architectureImages"
          :key="index"
          @mouseover="hoverImage = image.src"
          @mouseleave="hoverImage = ''"
          @mousemove="updateMousePosition($event)"
        >
          <router-link :to="image.route">
            <div v-if="view === 'grid'" class="image-wrapper">
              <img :src="image.src" :alt="image.alt" />
            </div>
            <p :class="['image-title', view]">{{ image.title }}</p>
          </router-link>
        </div>
      </div>

      <!-- Hover Image Overlay for List View, positioned based on mouse -->
      <div
        v-if="view === 'list' && hoverImage"
        class="hover-image-overlay"
        :style="{ top: mouseY + 'px', left: mouseX + 'px' }"
      >
        <img :src="hoverImage" alt="Preview Image" />
      </div>
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
      view: "list", // Default view is grid
      hoverImage: "",
      mouseX: 0, // Mouse X position
      mouseY: 0, // Mouse Y position
      architectureImages: [
        {
          src: require("@/images/gallery/hapi.png"),
          alt: "Hapi Project",
          title: "Arch Thesis (Hapi)",
          route: "/design/hapi-project",
        },
        {
          src: require("@/images/gallery/thesis.png"),
          alt: "Thesis Project",
          title: "Master Thesis (Cricket)",
          route: "/design/thesis-project",
        },
        {
          src: require("@/images/gallery/workshop.png"),
          alt: "Workshop Design",
          title: "Digital Futures Workshop",
          route: "/design/workshop-design",
        },
      ],
      uxuiImages: [
        {
          src: require("@/images/gallery/moduleApp.png"),
          alt: "Modular  App",
          title: "Modular Design App",
          route: "/uxui/modular-app",
        },
        {
          src: require("@/images/gallery/filos.png"),
          alt: "Filos Mobile App",
          title: "Filos Mobile App",
          route: "/uxui/filos-mobile-app",
        },
        {
          src: require("@/images/gallery/kapihan.png"),
          alt: "Coffee shop App",
          title: "Coffee shop App",
          route: "/uxui/local-bakery-app",
        },
      ],
    };
  },
  methods: {
    toggleView(viewType) {
      this.view = viewType;
    },
    updateMousePosition(event) {
      this.mouseX = event.clientX + 100; // Offset the position by 20px for better visibility
      this.mouseY = event.clientY;
    },
  },
};
</script>

<style scoped>
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

.image-wrapper:hover .image-title {
  opacity: 1;
}

/* Grid mode styling */
.gallery-title.grid {
  font-size: 8vw;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: left;
  padding-left: 32px;
}

.image-title.grid {
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 18px;
  font-weight: bold;
  color: #ababab;
  text-transform: uppercase;
  padding: 5px 10px;
  transition: opacity 0.3s ease;
}

/* List mode styling */
.gallery-title.list {
  font-size: 8vw;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: left;
}

.image-title.list {
  font-size: 20px;
  font-size: 6vw;
  font-weight: bold;
  text-align: left;
  cursor: pointer;
  color: #ababab;
  text-transform: uppercase;
  margin: 0;
  cursor: crosshair;
  letter-spacing: 0.2rem;
  padding: 0.4rem;
}

.image-title.list:hover {
  font-size: 20px;
  font-size: 6vw;
  font-weight: bold;
  text-align: left;
  cursor: pointer;
  color: #000000;
  text-transform: uppercase;
  margin: 0;
  cursor: crosshair;
}

/* View toggle buttons */
.view-toggle {
  display: flex;
  gap: 10px;
}

.view-toggle button {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.view-toggle button.active {
  font-weight: bold;
  border-bottom: 2px solid black;
}

.gallery-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.gallery-container.list {
  display: block;
}

.gallery-item {
  width: 100%;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  display: block;
}

.hover-image-overlay {
  position: fixed;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  pointer-events: none;
  z-index: 1000;
  transform: translate(-50%, -50%);
}

.hover-image-overlay img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

@media (max-width: 768px) {
  .gallery-container {
    grid-template-columns: 1fr;
  }
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
