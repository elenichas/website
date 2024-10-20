<template>
  <app-navbar></app-navbar>
  <div class="workshop-presentation">
    <h1>Alter-Habitat Design Workshop</h1>
    <p>
      The presentation from the "Alter-Habitat" design workshop highlights the
      use of architectural geometry to explore innovative housing solutions.
      Below is an explanation of the key design steps and the logic behind them:
    </p>

    <h2>Design Steps in the Workshop:</h2>
    <ul>
      <li>
        <strong>Research and Precedents:</strong> The workshop began with a
        study of existing architectural models like Alvenaria Social Housing,
        Habitat 67, and Tel Aviv Tower. These served as precedents showing
        modularity and geometric experimentation.
      </li>
      <li>
        <strong>Modular Unit Development:</strong> A voxel-based system was used
        to design different housing units, allowing flexibility in size and
        configuration.
      </li>
      <li>
        <strong>Aggregation Studies:</strong> Various ways of aggregating these
        voxels were explored to create efficient and livable structures with
        plenty of light and air.
      </li>
      <li>
        <strong>Shortest Path and Density Studies:</strong> The team optimized
        circulation within the habitat using shortest path diagrams and density
        studies to ensure logical and efficient pathways.
      </li>
      <li>
        <strong>Graph-based Aggregations:</strong> Different graph-based methods
        for grouping voxels were tested to create diverse and flexible
        configurations.
      </li>
      <li>
        <strong>Architectural Geometry Development:</strong> The team developed
        geometric variations for elements like balconies, facades, and rooftops,
        culminating in exploded diagrams showing how the units could be
        assembled.
      </li>
      <li>
        <strong>Robotic Fabrication:</strong> Finally, robotic fabrication
        techniques were explored for constructing these complex geometries.
      </li>
    </ul>

    <h2>Logic Behind the Workshop:</h2>
    <p>
      The design logic was based on maximizing livability through modular design
      while promoting diversity in spatial configurations. The design also
      considered urban dynamics and used advanced fabrication techniques to
      bring the geometric structures to life.
    </p>

    <h2>Results:</h2>
    <ul>
      <li>
        <strong>Innovative Aggregations:</strong> Modular voxels enabled
        flexible and scalable housing solutions.
      </li>
      <li>
        <strong>Efficiency and Livability:</strong> Shortest path and density
        studies ensured functional and livable environments.
      </li>
      <li>
        <strong>Customization and Adaptation:</strong> The modular approach
        allowed for diverse configurations adaptable to various contexts and
        needs.
      </li>
    </ul>

    <!-- Vuetify Image Carousel -->
    <v-carousel cycle hide-delimiters autoplay interval="4000" height="500">
      <v-carousel-item
        v-for="(image, index) in images"
        :key="index"
        :src="image.url"
        :alt="'Workshop Image ' + (index + 1)"
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import AppNavbar from "@/components/navbar";

export default {
  name: "WorkshopDesign",
  components: {
    AppNavbar,
  },
  data() {
    return {
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
.workshop-presentation {
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
}

.v-carousel {
  margin-top: 20px;
}

.v-carousel-item img {
  object-fit: cover;
}
</style>
