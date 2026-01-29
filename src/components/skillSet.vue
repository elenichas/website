<template>
  <div class="skillset-container">
    <div class="skills-header">
      <h2 class="skills-title">Technical Stack</h2>
      <p class="skills-subtitle">Design and engineering tools I use to build digital products</p>
    </div>
    
    <!-- Design Tools -->
    <div class="skills-category">
      <h3 class="category-title">Design & Prototyping</h3>
      <div class="skills-grid">
        <div v-for="(skill, index) in designSkills" :key="index" class="skill-item">
          <div class="skill-icon">
            <img :src="skill.src" :alt="skill.name" />
          </div>
          <span class="skill-name">{{ skill.name }}</span>
        </div>
      </div>
    </div>
    
    <!-- Development Tools -->
    <div class="skills-category">
      <h3 class="category-title">Development & Engineering</h3>
      <div class="skills-grid">
        <div v-for="(skill, index) in developmentSkills" :key="index" class="skill-item">
          <div class="skill-icon">
            <img :src="skill.src" :alt="skill.name" />
          </div>
          <span class="skill-name">{{ skill.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Import the images at the top - Product focused tools only
import HTML5 from "@/images/skills/HTML5.svg";
import CSS3 from "@/images/skills/CSS3.svg";
import JavaScript from "@/images/skills/javascript.svg";
import NodeJS from "@/images/skills/node.svg";
import MongoDB from "@/images/skills/mongo.svg";
import VueJS from "@/images/skills/vue.png";
import ReactJS from "@/images/skills/react.png";
import VSCode from "@/images/skills/vscode.svg";
import Git from "@/images/skills/git.svg";
import GitHub from "@/images/skills/github.svg";
import CSharp from "@/images/skills/csharp.svg";
import Figma from "@/images/skills/figma.png";
import AdobeXD from "@/images/skills/adobexd.png";
import Photoshop from "@/images/skills/photoshop.png";
import Three from "@/images/skills/three.png";
import D3 from "@/images/skills/d3.svg";

export default {
  name: "Skillset",
  data() {
    return {
            // Design & Prototyping Tools
      designSkills: [
        { name: "Figma", src: Figma },
        { name: "Adobe XD", src: AdobeXD },
        { name: "Photoshop", src: Photoshop },
      ],
            // Development & Engineering Tools  
      developmentSkills: [
        // { name: "JavaScript", src: JavaScript },
        { name: "Vue.js", src: VueJS },
        { name: "React", src: ReactJS },
          { name: "C#", src: CSharp },
        { name: "HTML5", src: HTML5 },
        { name: "CSS3", src: CSS3 },
        // { name: "Node.js", src: NodeJS },
      
        // { name: "MongoDB", src: MongoDB },
        { name: "Three.js", src: Three },
        // { name: "D3.js", src: D3 },
        // { name: "Git", src: Git },
        // { name: "GitHub", src: GitHub },
        // { name: "VS Code", src: VSCode },
      ],
    };
  },
};
</script>

<style scoped>
.skillset-container {
  width: 100%;
}

.skills-header {
  text-align: center;
  margin-bottom: var(--space-4xl);
}

.skills-title {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
  margin-bottom: var(--space-sm);
  letter-spacing: -0.01em;
}

.skills-subtitle {
  font-size: 1.125rem;
  color: var(--text-secondary);
  margin: 0;
  font-weight: var(--font-weight-normal);
}

.skills-category {
  margin-bottom: var(--space-4xl);
}

.skills-category:last-child {
  margin-bottom: 0;
}

.category-title {
  font-size: 1.25rem;
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
  text-align: center;
  margin-bottom: var(--space-xl);
  position: relative;
}

.category-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 2px;
  background: var(--accent-color);
  border-radius: var(--radius-full);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: var(--space-xl);
  justify-items: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 var(--space-md);
}

.skill-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-sm);
  text-align: center;
}

.skill-icon {
  width: 70px;
  height: 70px;
  background: var(--primary-bg);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-sm);
  transition: all var(--transition-normal);
  box-shadow: var(--shadow-sm);
}

.skill-icon:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  border-color: var(--text-primary);
}

.skill-icon img {
  width: 40px;
  height: 40px;
  object-fit: contain;
  filter: grayscale(20%);
  transition: filter var(--transition-fast);
}

.skill-icon:hover img {
  filter: grayscale(0%);
}

.skill-name {
  font-size: 0.875rem;
  font-weight: var(--font-weight-medium);
  color: var(--text-secondary);
  transition: color var(--transition-fast);
}

.skill-item:hover .skill-name {
  color: var(--text-primary);
}

/* Responsive Design */
@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    gap: var(--space-lg);
    max-width: 100%;
  }
  
  .skill-icon {
    width: 60px;
    height: 60px;
  }
  
  .skill-icon img {
    width: 32px;
    height: 32px;
  }
  
  .skill-name {
    font-size: 0.8125rem;
  }
}

@media (max-width: 480px) {
  .skills-grid {
    grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
    gap: var(--space-md);
  }
  
  .skill-icon {
    width: 50px;
    height: 50px;
  }
  
  .skill-icon img {
    width: 28px;
    height: 28px;
  }
  
  .skill-name {
    font-size: 0.75rem;
  }
  
  .category-title {
    font-size: 1.125rem;
  }
}
</style>
