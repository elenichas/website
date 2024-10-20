<template>
  <app-navbar></app-navbar>
</template>

<script>
import AppNavbar from "@/components/navbar";

export default {
  name: "HapiProject",
  components: {
    AppNavbar,
  },
  data() {
    return {
      hero: require("@/images/thesis/hero.jpg"),
      wireframes: require("@/images/filosWireframes.png"),
      prototypes: require("@/images/filosPrototypes.png"),
      responsive: require("@/images/filosResponsive.png"),
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
