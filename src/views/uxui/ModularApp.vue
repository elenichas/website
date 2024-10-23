<template>
  <app-navbar></app-navbar>
  <div class="ux-case-study">
    <div>
      <img class="hero-image" :src="hero" alt="hero image" />
    </div>
    <div>
      <h1 class="title">Modular Design App</h1>
      <h4>Role: UX Designer</h4>
      <h4>sketch for a 3D building application</h4>
    </div>

    <section>
      <h2>1. Scope</h2>
      <p>
        The wireframes were designed as a sketch for a 3D building application,
        created during a brainstorming exercise to explore potential features
        and workflows for a modular building tool. The purpose was to visualize
        how users could interact with a simple unit-based creation system,
        combining elements,customizing them, inspecting performance analytics,
        and having visual feedback. This early-stage concept focuses on
        providing designers with an intuitive interface that emphasizes
        flexibility and simplicity in creating modular projects.
      </p>
    </section>

    <section>
      <h2>2. User Flow</h2>
      <p>
        <strong>Login Page & Load Project</strong> <br />
        The user starts by logging into the application with their email and
        password.Once logged in, the user is prompted to load an existing
        project or create a new one <br />

        <strong>Add Module </strong> <br />
        In the add module section, users can select and add modules from a list
        of available items that is organised by type <br />

        <strong> Node Design </strong> <br />
        The application features a node-based design interface. Users can create
        connections between different modules, visually organizing and linking
        modules through a simple drag-and-drop interface. This helps users to
        see relationships between different parts of their project. <br />

        <strong> Inspect Data </strong> <br />
        After creating a module, users can inspect detailed data for each
        building block. They can view and edit categories, settings, and
        parameters through sliders. This allows them to further customize the
        building elements with ease, providing flexibility to adjust key
        metrics.<br />

        <strong>Module Gallery </strong> <br />
        The module gallery showcases available modules that can be added in the
        project. Filters and sorting options make it easy to find specific
        modules based on user preferences or project requirements.<br />

        <strong>Graph Mode - Performance </strong> <br />
        The performance graph mode displays analytical data about the modules,
        allowing users to evaluate the performance of the structures based on
        specific criteria such as cost, energy usage, or any other relevant
        factors.<br />

        <strong> Navigation & Save Project </strong> <br />
        The final screens show how users can navigate between different modules,
        adjusting and refining their designs. They also have the option to save
        their project, ensuring progress is stored and can be revisited later.
        Saving is enhanced by a clear, visual dialog that provides feedback on
        the action.
      </p>
    </section>

    <section>
      <h2>3. High Fidelity Wireframes</h2>

      <div class="figma-embed">
        <iframe
          style="border: 1px solid rgba(0, 0, 0, 0.1)"
          width="100%"
          height="450"
          src="https://embed.figma.com/design/ZcTk8BtMkSmaQiSlrK97IJ/Modular-Building-App?node-id=0-1&embed-host=share"
          allowfullscreen
        ></iframe>
      </div>
    </section>

    <section>
      <h2>4. Visual Design</h2>
      <div class="visual-design-container">
        <p class="visual-design-text">
          For the app design, I used the Google Material UI kit, which provided
          several key benefits during the brainstorming phase:
          <v-list density="compact" :items="items"> </v-list>
        </p>
      </div>
      <div class="style-guide">
        <div class="typography-section">
          <h2>Typography</h2>
          <div class="typography">
            <p class="large-text">Aa</p>
            <p class="font-name">Roboto</p>
            <p class="alphabet">abcdefghijklmnopqrstuvwxyz</p>
          </div>
        </div>
        <div class="colors-section">
          <h2>Colors</h2>
          <div class="color-swatches">
            <div class="color-swatch" :style="{ backgroundColor: '#F4F3FA' }">
              <span style="color: black">#F4F3FA</span>
            </div>
            <div class="color-swatch" :style="{ backgroundColor: '#485E92' }">
              <span style="color: black">#485E92</span>
            </div>
            <div class="color-swatch" :style="{ backgroundColor: '#FBD4F7' }">
              <span style="color: black">#FBD4F7</span>
            </div>
            <div class="color-swatch" :style="{ backgroundColor: '#D9DFF6' }">
              <span style="color: black">#D9DFF6</span>
            </div>
          </div>
        </div>
      </div>

      <!-- <button class="custom-button">
        <a
          href="https://www.figma.com/proto/dSiLtVj2GKzRZYcfYoe8iW/KapihanApp?node-id=49-5572&t=qR7dRV7dwGhpgw8c-1"
          class="button-text"
          >Interactive Prototype</a
        >
        <div class="button-icon">
          <span class="mdi mdi-arrow-bottom-right"></span>
        </div>
      </button> -->
    </section>

    <section>
      <h2>5. Reflection & Next Steps</h2>
      <p>
        The next step involves building a functional prototype, replacing all
        remaining placeholder text with real content, and refining the UI to
        ensure consistency and clarity. Following that, I will conduct usability
        testing to gather feedback from potential users. This will provide
        valuable insights into the overall user experience, allowing for
        iterative improvements.
      </p>
    </section>
  </div>
</template>

<script>
import AppNavbar from "@/components/navbar";

export default {
  name: "ModularApp",
  components: {
    AppNavbar,
  },
  props: {},
  data() {
    return {
      hero: require("@/images/moduleAppHero.png"),
      items: [
        "Consistency and Familiarity",
        "Efficient Prototyping",
        "Responsive and Adaptive Design",
        "Accessibility",
        "Modern, Clean Aesthetic",
      ],
    };
  },
};
</script>

<style scoped>
.v-window {
  height: fit-content !important;
}

.hero-image {
  width: 100%;
}

.persona {
  margin: 8%;
  background: white;
}

.v-carousel-item {
  display: flex;
  justify-content: center;
  align-items: center;
}

.visual-design-text {
  margin-bottom: 20px;
}

/* Media query to handle small screens */
@media (max-width: 768px) {
  .persona {
    padding: 20px;
  }
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
  margin-bottom: 2%;
}

.typography-section {
  flex: 1;
}

.typography {
  margin-top: 20px;
}

.large-text {
  font-size: 100px;
  font-family: "Roboto";
  color: #000;
}

.font-name {
  font-size: 18px;
  font-family: "Roboto";
  margin-top: 10px;
}

.alphabet {
  font-size: 24px;
  font-family: "Roboto";
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
