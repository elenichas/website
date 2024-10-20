<template>
  <app-navbar></app-navbar>
  <div class="ux-case-study">
    <div>
      <img class="hero-image" :src="hero" alt="hero image" />
    </div>
    <div>
      <h1 class="title">Master Thesis - Cricket Plug in</h1>
      <h2 class="title">
        Gameplay with Encoded Architectural Tilesets: A Computational Framework
        for Building Massing Design using the Wave Function Collapse Algorithm
      </h2>
      <h4>Role: Developer</h4>
      <h4>Duration: 2020, 4 months</h4>
      <h4>Msc Architectural Computation, UCL</h4>
      <a
        href="https://ucl.academia.edu/EleniChasioti"
        target="_blank"
        class="link"
        >Read paper on Academia</a
      >
    </div>
    <section>
      <h2>1. Overview</h2>
      <p>
        This project explores the intersection between architectural computation
        and procedural content generation, drawing inspiration from game design
        techniques to revolutionize early-stage architectural massing. The
        thesis presents a framework for automating the generation of complex
        building designs using architectural tilesets and the Wave Function
        Collapse (WFC) algorithm, a powerful tool originally used in game
        development. Through a user-friendly computational model, my work offers
        a practical solution for automating repetitive design tasks while
        empowering architects to experiment with a variety of design outcomes.
        The system enables architects to generate massing designs quickly and
        efficiently by encoding key architectural elements into tilesets, which
        can be rearranged to create endless design variations, all while
        maintaining crucial architectural constraints.
      </p>
    </section>
    <div style="display: flex;">
      <div style="width: 50%;">
 
    <section>
      <h2>2. Contributions</h2>
      <p>
        Procedural Content Generation: Leveraging the WFC algorithm to automate
        the creation of building designs, significantly reducing design time and
        cost.
        <br />
        Custom Architectural Tilesets: I developed a system for encoding 3D
        architectural elements, allowing for highly flexible design outcomes
        suited to a range of project needs.
        <br />
        Real-Time Design Feedback: The computational framework allows designers
        to see real-time variations of their designs, fostering a more dynamic,
        exploratory design process.
      </p>
    </section>
    <section>
      <h2>3. The WFC Algorithm</h2>
      <p>
        The core of this work lies in the Wave Function Collapse (WFC)
        algorithm, originally a pixel-based image generation tool adapted for
        three-dimensional architectural design in this thesis. The WFC uses a
        constraint-solving approach, ensuring that all tiles are placed
        according to specific design rules and relationships. The adaptation
        from game design into architecture enables massing designs to be
        generated automatically while maintaining architectural integrity.
      </p>
    </section>
    </div>
    <div style="width: 50%;">
      <img class="hero-image" :src="wfcdiagram" alt="hero image" />
      <img class="hero-image" :src="wfc" alt="hero image" />
    </div>
    </div>
 
  

    <section>
      <h2>4. Technical Implementation</h2>
      <p>
        The system was implemented using Rhinoceros 3D and its parametric design
        tool Grasshopper, combined with custom components written to execute the
        WFC algorithm in three dimensions. Key aspects of the technical setup
        include: <br />

        Tileset Encoding: Architectural elements were encoded into a digital
        tileset. Each tile was assigned a unique identifier based on its
        geometry, allowing the algorithm to distinguish between them during the
        design process. <br />

        Voxel-Based Segmentation: A voxel grid was applied to the input model to
        break it into individual tiles. Each voxel represents a 3D space that
        contains part of the architectural geometry. <br />

        Non-Backtracking Algorithm: For time efficiency, a non-backtracking
        version of the WFC was used. This allows the algorithm to quickly
        restart in the case of a contradiction, improving computational speed
        without sacrificing accuracy. <br />

        User-Defined Parameters: The system allows architects to input specific
        constraints (such as maximizing density, maintaining a facade’s
        directionality, or controlling gradient changes) to guide the design
        output towards their specific project goals. <br />

        Flexible Output: Once the system generates a design, it can output
        models of different sizes and proportions while adhering to the original
        architectural constraints. This flexibility makes the framework highly
        adaptable to various architectural projects.
      </p>
      <div>
        <img class="hero-image" :src="grasshopper" alt="hero image" />
      </div>
    </section>
    <section>
      <h2>5. Key Features</h2>
      <p>
        Tileset Segmentation: Architectural elements are divided into tiles for
        easier manipulation and combination into new forms.
        <br />
        <div>
        <img class="hero-image" :src="segmentation" alt="hero image" />
      </div>
        Automated Decision-Making: The WFC algorithm ensures all generated
        designs adhere to predefined constraints.
        <br />
        <img class="hero-image" :src="models1" alt="hero image" />
        Dynamic Design Options: Designers can manipulate the system’s input to
        explore different configurations based on goals like maximizing building
        density, optimizing spatial flow, or adhering to specific architectural
        constraints,
        <img class="hero-image" :src="models2" alt="hero image" />
      </p>
    </section>

    <section>
      <h2>6. Reflection & Next Steps</h2>
      <p>
        The development of this framework has demonstrated the potential of
        procedural generation to simplify repetitive tasks and offer real-time,
        dynamic design feedback, empowering architects to explore more creative
        possibilities while maintaining control over complex constraints.
        Although the framework has shown great promise, there is still room for
        improvement. Enhancing the decision-making process through machine
        learning could make the system even more adaptive, learning from prior
        designs to optimize for specific goals like sustainability or aesthetic
        preferences. Additionally, extending the framework to accommodate
        irregular grids and more organic architectural forms could expand its
        applicability to more experimental projects. Looking ahead, I aim to
        refine the user interface to ensure accessibility for architects with
        varying technical expertise, making this tool a valuable asset in the
        future of architectural design.
      </p>
    </section>
  </div>
</template>

<script>
import AppNavbar from "@/components/navbar";

export default {
  name: "ThesisProject",
  components: {
    AppNavbar,
  },
  data() {
    return {
      hero: require("@/images/thesis/hero.jpg"),
      grasshopper: require("@/images/cricket/apendix3.jpg"),
      segmentation:require("@/images/cricket/segmentation.jpg"),
     models1:require("@/images/cricket/modelspercentages.jpg"),
     models2:require("@/images/cricket/modelsrendered.jpg"),
     wfc:require("@/images/cricket/wfctiles.jpg"),
     wfcdiagram:require("@/images/cricket/diagram.jpg"),
    };
  },
};
</script>

<style scoped>
.hero-image {
  width: 100%;
}

.image-full-width {
  width: 100%;
}

.visual-design-container {
  display: flex;
  justify-content: space-between;
  gap: 20px; /* Adds space between the two children */
  padding-bottom: 20px;
}

/* Media query to stack the children on smaller screens */
@media (max-width: 1000px) {
  .visual-design-container {
    flex-direction: column; /* Stack the children vertically */
    gap: 20px; /* Adds space between the two children */
  }
}

.visual-design-text {
  width: 100%;
  margin-bottom: 20px;
}

.style-guide {
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  color: #000;
  padding: 20px;
  width: 100%;
}

.typography-section {
  flex: 1;
}

.typography {
  margin-top: 20px;
}

.large-text {
  font-size: 100px;
  font-family: "Inter";
  color: #000;
}

.font-name {
  font-size: 18px;
  margin-top: 10px;
}

.alphabet {
  font-size: 24px;
  color: rgba(47, 47, 47, 0.7);
}

.colors-section {
  flex: 1;
}

.color-swatches {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 20px;
}

.color-swatch {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: white;
  text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);
}

.btn {
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 25px;
  font-size: 1em;
  cursor: pointer;
  margin-top: 15px;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #555;
}

.ux-case-study {
  margin: 0 auto;
  padding: 0 4%;
}

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

ul {
  padding: 8px;
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

.personas-container {
  display: flex;
  margin-bottom: 40px;
}

.persona {
  flex: 1;
  padding: 40px;
}

.persona1 {
  background-color: #2d3030;
  color: #eeece7;
}

.persona2 {
  background-color: #eeece7;
  color: #2d3030;
}

@media (max-width: 768px) {
  .ux-case-study {
    padding: 15px;
  }

  .title {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 0.95rem;
  }

  .personas-container {
    flex-direction: column;
  }

  .visual-design-text {
    width: 100%;
  }

  .style-guide {
    flex-direction: column;
  }
}
</style>
