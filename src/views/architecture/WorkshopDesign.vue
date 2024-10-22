<template>
  <app-navbar></app-navbar>
  <div class="container">
    <div>
      <img class="hero-image" :src="hero" alt="hero image" />
    </div>
    <div>
      <h1 class="title">Architectural Geometry and Habitat</h1>
      <h2 class="title">Digital Futures 2020</h2>
      <h4>Role: Computational Designer</h4>
      <h4>Team : Peter Bus, Jackson Bi, Sandro Sanin, Eleni Chasioti</h4>
    </div>
    <section>
      <h2>Research and Precedents</h2>
      <p>
        The workshop began with a study of existing architectural models like
        Alvenaria Social Housing, Habitat 67. These served as precedents showing
        modularity and geometric experimentation. A voxel-based system was used
        to design different housing units, allowing flexibility in size and
        configuration. Various ways of aggregating these voxels were explored to
        create efficient and livable structures with plenty of light and air.
      </p>
      <p>
        The team optimized circulation within the habitat using shortest path
        diagrams and density studies to ensure logical and efficient pathways.
        Different graph-based methods for grouping voxels were tested to create
        diverse and flexible configurations. The team developed geometric
        variations for elements like balconies, facades, and rooftops,
        culminating in exploded diagrams showing how the units could be
        assembled. Finally, robotic fabrication techniques were explored for
        constructing these complex geometries.
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
    <video controls style="width: 100%">
      <source src="/vids/habitatVideo.webm" type="video/webm" />
      Your browser does not support the video tag.
    </video>
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
      hero: require("@/images/habitat/hero.jpg"),
      images: [
        { url: require("@/images/habitat/voxelunits.png") },
        { url: require("@/images/habitat/unitypes.png") },
        { url: require("@/images/habitat/siteviewAggregations.png") },
        { url: require("@/images/habitat/pathAnddensity.png") },
        { url: require("@/images/habitat/elements.png") },
        { url: require("@/images/habitat/exploded.png") },
        { url: require("@/images/habitat/aggregations2.png") },
        { url: require("@/images/habitat/assembledunits.png") },
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
