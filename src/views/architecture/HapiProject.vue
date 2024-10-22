<template>
  <app-navbar></app-navbar>
  <div class="container">
    <div>
      <img class="hero-image" :src="hero" alt="hero image" />
    </div>
    <div>
      <h1 class="title">Hapi</h1>
      <h1 class="title">Housing & Automated Production Infrastructure</h1>
      <h4>Architectural Thesis, 2019</h4>
      <h4>Team : Georgia Strinopoulou, Eleni Chasioti</h4>
    </div>

    <section>
      <h2>Research and Precedents</h2>
      <p>
        The Hapi project delves into the digital possibilities of how people may
        coexist in future mega cities. It tackles the growing housing shortage
        in urban centers and emphasizes the need for sustainable, affordable,
        and adaptable living spaces. The project's goal is to provide solutions
        to these challenges by proposing a large-scale, modular structure
        composed of 3D-printed elements, which are assembled on-site and then
        elevated to their designated floors. Each home is designed using a
        unique algorithmic process, tailored to accommodate various family
        sizes. The project offers flexible solutions for cohabitation, with
        options for the connection or expansion of housing units. Additionally,
        the homes are equipped with smart sensors and robotic systems to monitor
        internal conditions, optimizing energy use and promoting efficiency.
      </p>
    </section>

    <div>
      <img :src="tall" alt="Background" class="tall" />
    </div>
    <section>
      <v-carousel cycle hide-delimiters show-arrows="hover">
        <v-carousel-item
          v-for="(image, index) in images"
          :key="index"
          :src="image.url"
          :alt="'Workshop Image ' + (index + 1)"
        ></v-carousel-item>
      </v-carousel>
    </section>
    <section>
      <h2>Design Process & Results</h2>
      <p>
        <v-list two-line>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title
                ><strong>Innovative Aggregations:</strong></v-list-item-title
              >
              <v-list-item-subtitle
                >Modular voxels enabled flexible and scalable housing
                solutions.</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title
                ><strong>Efficiency and Livability:</strong></v-list-item-title
              >
              <v-list-item-subtitle
                >Shortest path and density studies ensured functional and
                livable environments.</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title
                ><strong
                  >Customization and Adaptation:</strong
                ></v-list-item-title
              >
              <v-list-item-subtitle
                >The modular approach allowed for diverse configurations
                adaptable to various contexts and needs.</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title
                ><strong
                  >Advanced Fabrication Technigues:</strong
                ></v-list-item-title
              >
              <v-list-item-subtitle
                >The modular components were analyzed into rulings to then be
                fabricated with hotwire cutting.
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </p>
    </section>
    <section>
      <v-carousel
        cycle
        hide-delimiters
        autoplay
        interval="4000"
        show-arrows="hover"
      >
        <v-carousel-item
          v-for="(image, index) in renders"
          :key="index"
          :src="image.url"
          :alt="'Workshop Image ' + (index + 1)"
        ></v-carousel-item>
      </v-carousel>
    </section>
  </div>
</template>

<script>
import AppNavbar from "@/components/navbar";
const videoSrc = "/vids/habitatVideo.webm";

export default {
  name: "WorkshopDesign",
  components: {
    AppNavbar,
  },
  data() {
    return {
      tall: require("@/images/hapi/iso.png"),
      hero: require("@/images/hapi/hapihero.jpg"),
      images: [
        { url: require("@/images/hapi/carousel0.png") },
        { url: require("@/images/hapi/carousel1.png") },
        { url: require("@/images/hapi/carousel2.png") },
      ],
      renders: [
        { url: require("@/images/hapi/render1.jpg") },
        { url: require("@/images/hapi/render2.jpg") },
        { url: require("@/images/hapi/render3.jpg") },
        { url: require("@/images/hapi/render4.jpg") },
      ],
    };
  },
};
</script>

<style scoped>
.title {
  font-size: 2.5rem;
  color: #333;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

h4 {
  margin: 0.5rem 0;
}

section {
  margin-bottom: 40px;
}

h2 {
  font-size: 1.75rem;
  padding-bottom: 5px;
  margin-bottom: 15px;
}

p {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 15px;
}

.background-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.tall {
  width: 100%;
  height: 100%;
  padding-bottom: 2%;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  /* Ensures the image is behind other content */
}

.container {
  margin: 0 auto;
  padding: 0 4%;
}

.hero-image {
  width: 100%;
}

.workshop-presentation {
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
}

.v-carousel-item img {
  object-fit: cover;
}
</style>
