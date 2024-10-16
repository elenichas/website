<template>
  <!-- Navbar Component -->
  <app-navbar></app-navbar>

  <div class="design">
    <!-- THESIS -->
    <div class="section">
      <h1>Gameplay with encoded architectural tilesets</h1>
      <div class="text-image-container">
        <div class="text-content">
          <h4>
            Automating repetitive design tasks is a key focus in both
            architecture and game design. It is often necessary to generate
            extensive designs or multiple variations of a proposal. My work
            explores the intersection between algorithmic processes in the
            architecture and gaming industries, introducing the 3D Wave Function
            Collapse Algorithm for early-stage building massing and space
            planning. The aim is to offer a practical computational tool that
            streamlines design workflows, making it easier to explore creative
            possibilities efficiently. By incorporating the 3D implementation of
            this algorithm, I seek to provide a user-friendly, digital solution
            that empowers designers with the flexibility to produce diverse
            architectural outputs.
          </h4>
        </div>
        <div class="design-image">
          <img :src="imageSrc" alt="thesis hero image" class="image" />
        </div>
      </div>

      <!-- Full-width Image -->
      <div class="full-width-image">
        <img :src="imageSrc2" alt="thesis buildings image" class="image" />
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
      imageSrc: require("@/images/thesis/hero.jpg"),
      imageSrc2: require("@/images/thesis/buildings.jpg"),
      imageSrc3: require("@/images/thesis/workshop1.png"),
      imageSrc4: require("@/images/thesis/units.png"),
    };
  },
};
</script>

<style scoped>
.design {
  margin-top: 50px;
  padding: 0 40px;
}

.text-image-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
}

.text-content {
  flex: 1;
  padding-right: 20px;
}

.design-image {
  flex: 1;
}

.image {
  max-width: 100%;
  height: auto;
  border-radius: 16px;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.full-width-image {
  width: 100%;
  margin: 50px 0;
}

.full-width-image img {
  width: 100%;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Media Queries */
@media (max-width: 991px) {
  .text-image-container {
    flex-direction: column;
  }

  .text-content {
    padding-right: 0;
    margin-bottom: 20px;
  }
}
</style>
