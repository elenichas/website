<template>
  <!-- Navbar Component -->
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
      <!-- Development Section -->
      <h2 :class="['gallery-title', view]">Development</h2>
      <div :class="['gallery-container', view]">
        <div
          class="gallery-item"
          v-for="(image, index) in images"
          :key="index"
          @mouseover="hoverImage = image.src"
          @mouseleave="hoverImage = ''"
          @mousemove="updateMousePosition($event)"
        >
          <div v-if="view === 'grid'" class="image-wrapper">
            <img :src="image.src" :alt="image.alt" />
            <p :class="['image-title', view]">
              {{ image.name }} <br />
              <a :href="image.gitlabLink" target="_blank" class="gallery-link"
                >View on GitLab</a
              >
            </p>

            <!-- <p :class="['image-title', view]">Stack: {{ image.stack }}</p> -->
          </div>
          <!-- For list view, display only name -->
          <p v-if="view === 'list'" class="image-title list">
            <!-- {{ image.name }} -->
            <a :href="image.gitlabLink" target="_blank" class="gallery-link">
              {{ image.name }}</a
            >
          </p>
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
  name: "ImageGallery",
  components: {
    AppNavbar,
  },
  data() {
    return {
      view: "list", // Default view is grid
      hoverImage: "",
      mouseX: 0, // Mouse X position
      mouseY: 0, // Mouse Y position
      images: [
        {
          name: "Master Thesis",
          stack: "C#, Rhino, Grasshopper",
          gitlabLink:
            "https://github.com/elenichas/Cricket-Plugin-Master-thesis",
          src: require("@/images/development/cricket2.png"),
        },
        {
          name: "View Analysis",
          stack: "C#, Rhino, Grasshopper",
          gitlabLink: "https://github.com/elenichas/view-analysis-plugin",
          src: require("@/images/development/viewAnalysis.png"),
        },
        {
          name: "Portfolio Website",
          stack: "Vue.js, JavaScript, CSS, HTML, d3",
          gitlabLink: "https://github.com/elenichas/website",
          src: require("@/images/development/portfolio.png"),
        },
        {
          name: "Book Reviews App",
          stack: "Express.js, Node.js, JavaScript",
          gitlabLink: "https://github.com/elenichas/expressBookReviews",
          src: require("@/images/development/expressApp.png"),
        },
        {
          name: "Expenses App",
          stack:
            "React, TypeScript, HTML, CSS, React Bootstrap, react-chartjs-2",
          gitlabLink: "https://github.com/elenichas/expenses-app",
          src: require("@/images/development/reactApp.jpg"),
        },
        {
          name: "Book Search App",
          stack: "Flask, Python, HTML, HTTP",
          gitlabLink: "https://github.com/elenichas/book-search-python-flask",
          src: require("@/images/development/bookSearchApp.png"),
        },
      ],
    };
  },
  methods: {
    toggleView(viewType) {
      this.view = viewType;
    },
    updateMousePosition(event) {
      this.mouseX = event.clientX + 20; // Offset the position slightly for better visibility
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

/* Styling for the grid view (with images) */
.gallery-container.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

/* List view styling */
.gallery-container.list {
  display: block;
}

.gallery-item {
  width: 100%;
}

/* Grid mode styling */
.gallery-title.grid {
  font-size: 8vw;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: left;
  padding-left: 32px;
}

/* Hide images in list view */
.image-wrapper.grid img {
  width: 100%;
  height: auto;
  display: block;
}

/* For grid view, show title on hover */
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
  text-align: left;
}

.image-wrapper.grid:hover .image-title.grid {
  opacity: 1;
}

.gallery-title.list {
  font-size: 8vw;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: left;
  padding-left: 32px;
}

/* For list view, show only text items */
.image-title.list {
  font-size: 20px;
  font-size: 7vw;
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

/* Hover effect for text in list view */
.image-title.list:hover {
  color: #000000;
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

/* Hover image overlay for list view */
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

/* Adjust for small screens */
@media (max-width: 768px) {
  .gallery-container.grid {
    grid-template-columns: 1fr;
  }
}
</style>
