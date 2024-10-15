<template>
  <div class="design">
    <BackToHome />
    <!-- THESIS -->
    <h1>Gameplay with encoded architectural tilesets</h1>
    <h4>
      Automating repetitive design tasks is a key focus in both architecture and
      game design. It is often necessary to generate extensive designs or
      multiple variations of a proposal. My work explores the intersection
      between algorithmic processes in the architecture and gaming industries,
      introducing the 3D Wave Function Collapse Algorithm for early-stage
      building massing and space planning. The aim is to offer a practical
      computational tool that streamlines design workflows, making it easier to
      explore creative possibilities efficiently. By incorporating the 3D
      implementation of this algorithm, I seek to provide a user-friendly,
      digital solution that empowers designers with the flexibility to produce
      diverse architectural outputs.
    </h4>
    <div class="design-image">
      <img :src="imageSrc" alt="thesis hero image" class="image" />
    </div>

    <div class="graph-container">
      <div class="box" v-for="step in steps" :key="step">{{ step }} →</div>
    </div>

    <div class="design-image">
      <img :src="imageSrc2" alt="thesis buildings image" class="image" />
    </div>
  </div>

  <!-- wORKSHOP -->
  <h1>Digital Futures: Habitat Workshop</h1>
  <h4>
    This initiative by Digital Futures provided an online platform for a
    week-long series of talks and workshops, exploring the transformative impact
    of digital technologies in architecture. The event showcased the innovative
    potential of digital design, highlighting new possibilities. One key
    workshop, Habitat, focused on Architectural Geometry (AG) and the synthesis
    of shapes to ensure structural and fabrication efficiency. It was closely
    aligned with advancements in robotic and digital fabrication (RDF)
    technologies and design methodologies. During the workshop, participants
    explored aggregation techniques on sloped fields and designed building
    elements suitable for hot wire cutting technology. The process culminated in
    the assembly of the prefabricated units. Finally, the produced units were
    uploaded to a game-based configurator, enabling non-expert users to assemble
    customized houses from the prefabricated components
  </h4>
  <div class="design-image">
    <img :src="imageSrc3" alt="workshop image" class="image" />
  </div>
</template>

<script>
import BackToHome from "../components/backToHome.vue";

export default {
  name: "Design",
  components: {
    BackToHome,
  },
  data() {
    return {
      // Use require to load the image from the assets folder
      imageSrc: require("@/images/thesis/hero.jpg"),
      imageSrc2: require("@/images/thesis/buildings.jpg"),
      imageSrc3: require("@/images/thesis/workshop1.png"),
      steps: ["Segmentation", "Encoding", "Wave Function Collapse", "Decoding"], // The steps for each box
      arrows: [1, 2, 3], // Represent arrows between the boxes
    };
  },
};
</script>

<style scoped>
.design {
  text-align: center;
  margin-top: 50px;
}

.image {
  max-width: 100%; /* Ensure the image scales */
  height: auto;
  text-align: center;
  border-radius: 16px;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.graph-container {
  display: flex;
  align-items: center;
}

.box {
  background-color: #a0c4ff;
  color: black;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  margin: 0 10px;
  transition: transform 0.3s ease-in-out;
  font-size: 1rem;
  flex-shrink: 0;
}

.box:hover {
  transform: scale(1.1); /* Scale the box on hover */
}

.arrow {
  font-size: 2rem;
  color: #a0c4ff;
  margin: 0 10px;
}
</style>
