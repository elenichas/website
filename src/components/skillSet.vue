<template>
  <div class="skillset-container">
    <div
      data-w-id="5cef7106-c6d1-63a8-a9b3-8676c72f168d"
      class="section-marquee"
      style="
        will-change: transform;
        transform: translate3d(-25.0439vw, 0px, 0px) scale3d(1, 1, 1)
          rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
        transform-style: preserve-3d;
      "
    >
      <h3 class="marquee-heading-medium">Skills —</h3>
      <h3 class="marquee-heading-medium">Skills —</h3>
      <h3 class="marquee-heading-medium">Skills —</h3>
      <h3 class="marquee-heading-medium">Skills —</h3>
      <h3 class="marquee-heading-medium">Skills —</h3>
      <h3 class="marquee-heading-medium">Skills —</h3>
      <h3 class="marquee-heading-medium">Skills —</h3>
      <h3 class="marquee-heading-medium">Skills —</h3>
      <h3 class="marquee-heading-medium">Skills —</h3>
      <h3 class="marquee-heading-medium">Skills —</h3>
      <h3 class="marquee-heading-medium">Skills —</h3>
      <h3 class="marquee-heading-medium">Skills —</h3>
      <h3 class="marquee-heading-medium">Skills —</h3>
      <h3 class="marquee-heading-medium">Skills —</h3>
      <h3 class="marquee-heading-medium">Skills —</h3>
      <h3 class="marquee-heading-medium">Skills —</h3>
      <h3 class="marquee-heading-medium">Skills —</h3>
      <h3 class="marquee-heading-medium">Skills —</h3>
      <h3 class="marquee-heading-medium">Skills —</h3>
      <h3 class="marquee-heading-medium">Skills —</h3>
      <h3 class="marquee-heading-medium">Skills —</h3>
      <h3 class="marquee-heading-medium">Skills —</h3>
      <h3 class="marquee-heading-medium">Skills —</h3>
      <h3 class="marquee-heading-medium">Skills —</h3>
      <h3 class="marquee-heading-medium">Skills —</h3>
      <h3 class="marquee-heading-medium">Skills —</h3>
      <h3 class="marquee-heading-medium">Skills —</h3>
      <h3 class="marquee-heading-medium">Skills —</h3>
    </div>
    <div class="skills-grid">
      <div v-for="(skill, index) in skills" :key="index" class="skill-icon">
        <img :src="skill.src" :alt="skill.name" />
      </div>
    </div>
  </div>
</template>

<script>
// Import the images at the top
import HTML5 from "@/images/skills/HTML5.svg";
import CSS3 from "@/images/skills/CSS3.svg";
import JavaScript from "@/images/skills/javascript.svg";
import NodeJS from "@/images/skills/node.svg";
import MongoDB from "@/images/skills/mongo.svg";
import NPM from "@/images/skills/npm.svg";
import VueJS from "@/images/skills/vue.png";
import VSCode from "@/images/skills/vscode.svg";
import Git from "@/images/skills/git.svg";
import GitHub from "@/images/skills/github.svg";
import CSharp from "@/images/skills/csharp.svg";
import Unity from "@/images/skills/unity.svg";
import Photoshop from "@/images/skills/photoshop.svg";
import Illustrator from "@/images/skills/illustrator.svg";
import AdobeXD from "@/images/skills/adobexd.png";
import Figma from "@/images/skills/figma.png";
import Rhino3D from "@/images/skills/rhino.png";
import Grasshopper from "@/images/skills/grasshopper.png";
import Three from "@/images/skills/three.png";
import D3 from "@/images/skills/d3.svg";

export default {
  name: "Skillset",
  data() {
    return {
      // Define the skills with their names and imported image sources
      skills: [
        { name: "HTML5", src: HTML5 },
        { name: "CSS3", src: CSS3 },
        { name: "JavaScript", src: JavaScript },
        { name: "NodeJS", src: NodeJS },
        { name: "Vue.js", src: VueJS },
        { name: "C#", src: CSharp },
        { name: "D3", src: D3 },
        { name: "Three", src: Three },
        { name: "MongoDB", src: MongoDB },
        { name: "NPM", src: NPM },
        { name: "VSCode", src: VSCode },
        { name: "Git", src: Git },
        { name: "GitHub", src: GitHub },
        { name: "Unity", src: Unity },
        { name: "Photoshop", src: Photoshop },
        { name: "Illustrator", src: Illustrator },
        { name: "AdobeXD", src: AdobeXD },
        { name: "Figma", src: Figma },
        { name: "Rhino3D", src: Rhino3D },
        { name: "Grasshopper", src: Grasshopper },
      ],
    };
  },
};
</script>

<style scoped>
.section-marquee {
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  display: flex;
}

.marquee-heading-medium {
  white-space: nowrap;
  font-weight: 300;
  font-size: 2rem;
}

.skillset-container {
  text-align: center;
  margin-top: 40px;
  padding: 0 100px; /* Add padding to the sides for smaller screens */
}

h2 {
  font-size: 2rem;
  color: #000000;
  margin-bottom: 20px;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  justify-items: center;
  max-width: 800px;
  justify-self: center;
  padding-top: 2%;
}

.skill-icon {
  background-color: #fff;
  padding: 5px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.skill-icon img {
  width: 60px;
  height: 60px;
}

.skill-icon:hover {
  animation: shake 0.5s ease-in-out;
  transform: translateY(-5px);
}

/* Shake animation */
@keyframes shake {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .skills-grid {
    grid-template-columns: repeat(4, 1fr); /* 4 columns for tablet screens */
  }
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: repeat(3, 1fr); /* 3 columns for small tablets */
  }
}

@media (max-width: 480px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 columns for mobile phones */
  }
}

@media (max-width: 320px) {
  .skills-grid {
    grid-template-columns: 1fr; /* 1 column for very small screens */
  }
}
</style>
