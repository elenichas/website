<template>
  <!-- Navbar Component -->
  <app-navbar></app-navbar>

  <div class="design">
    <!-- THESIS -->
    <div class="section">
      <h1>Hapi: Housing & Automated Production Infrastructure</h1>
      <div class="text-image-container">
        <div class="text-content">
          <h4>
            The Hapi project delves into the digital possibilities of how people
            may coexist in future mega cities. It tackles the growing housing
            shortage in urban centers and emphasizes the need for sustainable,
            affordable, and adaptable living spaces. The project's goal is to
            provide solutions to these challenges by proposing a large-scale,
            modular structure composed of 3D-printed elements, which are
            assembled on-site and then elevated to their designated floors. Each
            home is designed using a unique algorithmic process, tailored to
            accommodate various family sizes. The project offers flexible
            solutions for cohabitation, with options for the connection or
            expansion of housing units. Additionally, the homes are equipped
            with smart sensors and robotic systems to monitor internal
            conditions, optimizing energy use and promoting efficiency.
          </h4>
        </div>
        <div class="design-image">
          <img :src="imageSrc2" alt="thesis hero image" class="image" />
        </div>
      </div>

      <!-- Full-width Image -->
      <div class="full-width-image">
        <img :src="imageSrc" alt="thesis buildings image" class="image" />
      </div>
    </div>

    <!-- wORKSHOP -->
    <div class="section">
      <h1>Digital Futures: Habitat Workshop</h1>
      <div class="text-image-container">
        <div class="text-content">
          <h4>
            This initiative by Digital Futures provided an online platform for a
            week-long series of talks and workshops, exploring the
            transformative impact of digital technologies in architecture. The
            event showcased the innovative potential of digital design,
            highlighting new possibilities. One key workshop, Habitat, focused
            on Architectural Geometry (AG) and the synthesis of shapes to ensure
            structural and fabrication efficiency. It was closely aligned with
            advancements in robotic and digital fabrication (RDF) technologies
            and design methodologies. During the workshop, participants explored
            aggregation techniques on sloped fields and designed building
            elements suitable for hot wire cutting technology. The process
            culminated in the assembly of the prefabricated units. Finally, the
            produced units were uploaded to a game-based configurator, enabling
            non-expert users to assemble customized houses from the
            prefabricated components.
          </h4>
        </div>
        <div class="design-image">
          <img :src="imageSrc4" alt="workshop image" class="image" />
        </div>
      </div>

      <!-- Full-width Image -->
      <div class="full-width-image">
        <img :src="imageSrc3" alt="workshop image" class="image" />
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
      imageSrc: require("@/images/thesis/exploded.png"),
      imageSrc2: require("@/images/thesis/thesisPlan.png"),
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
