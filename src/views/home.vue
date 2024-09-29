<template>
  <div class="home-container">
    <!-- Navbar Component -->
    <app-navbar>
      <template v-slot:page4Description>
        <div class="project-description">
          <span class="thq-body-small">
            Check out my coding projects and see my technical skills in action.
          </span>
        </div>
      </template>

      <template v-slot:action1>
        <div class="project-action">
          <span>View Design Projects</span>
        </div>
      </template>

      <template v-slot:link2>
        <div class="project-link">
          <span class="thq-link thq-body-small">Design</span>
        </div>
      </template>

      <template v-slot:page1>
        <div class="page-title">
          <span class="thq-body-large">Home</span>
        </div>
      </template>

      <template v-slot:link1>
        <div class="project-link">
          <span class="thq-link thq-body-small">#home</span>
        </div>
      </template>

      <template v-slot:page4>
        <div class="page-title">
          <span class="thq-body-large">Coding Projects</span>
        </div>
      </template>

      <template v-slot:page2>
        <div class="page-title">
          <span class="thq-body-large">Design Projects</span>
        </div>
      </template>

      <template v-slot:link4>
        <div class="project-link">
          <span class="thq-link thq-body-small">Coding</span>
        </div>
      </template>

      <template v-slot:page1Description>
        <div class="project-description">
          <span class="thq-body-small">
            Welcome to my personal website showcasing my work and projects.
            Explore my design projects and see my creative process.
          </span>
        </div>
      </template>

      <template v-slot:link3>
        <div class="project-link">
          <span class="thq-link thq-body-small">UX/UI</span>
        </div>
      </template>

      <template v-slot:page3>
        <div class="page-title">
          <span class="thq-body-large">UX/UI Design Projects</span>
        </div>
      </template>

      <template v-slot:page3Description>
        <div class="project-description">
          <span class="thq-body-small">
            Discover my UX/UI design projects and how I approach user
            experience.
          </span>
        </div>
      </template>

      <template v-slot:action2>
        <div class="project-action">
          <span>View UX/UI Design Projects</span>
        </div>
      </template>
    </app-navbar>

    <!-- Hero Section -->
    <app-hero> </app-hero>

    <!-- Features Section -->
    <app-features>
      <template v-slot:feature1Title>
        <div class="feature-title">
          <span class="thq-heading-2">Architecture</span>
        </div>
      </template>
      <template v-slot:feature1Description>
        <div class="feature-description">
          <span class="thq-body-small">
            Architectural and Computational design samples
          </span>
        </div>
      </template>

      <template v-slot:feature2Title>
        <div class="feature-title">
          <span class="thq-heading-2">UX/UI</span>
        </div>
      </template>
      <template v-slot:feature2Description>
        <div class="feature-description">
          <span class="thq-body-small"> UX/UI design projects approach. </span>
        </div>
      </template>

      <template v-slot:feature3Title>
        <div class="feature-title">
          <span class="thq-heading-2">Development</span>
        </div>
      </template>
      <template v-slot:feature3Description>
        <div class="feature-description">
          <span class="thq-body-small">
            Front-end and full stack projects
          </span>
        </div>
      </template>
    </app-features>

    <!-- Call to Action Section -->
    <app-cta>
      <template v-slot:heading1>
        <div class="cta-heading">
          <span class="thq-heading-2">Ready to take the next step?</span>
        </div>
      </template>

      <template v-slot:content1>
        <div class="cta-content">
          <span class="thq-body-large"
            >Let&apos;s work together to bring your ideas to life.</span
          >
        </div>
      </template>

      <template v-slot:action1>
        <div class="cta-action">
          <span>Contact Me</span>
        </div>
      </template>
    </app-cta>

    <app-footer> </app-footer>
  </div>
</template>

<script>
import AppNavbar from "../components/navbar";
import AppHero from "../components/hero";
import AppFeatures from "../components/features";
import AppCta from "../components/content";
import AppFeatures2 from "../components/features2";
import AppPricing from "../components/pricing";
import AppSteps from "../components/steps";
import AppTestimonial from "../components/testimonial";
import AppContact from "../components/contact";
import AppFooter from "../components/footer";

export default {
  name: "Home",
  props: {},
  components: {
    AppNavbar,
    AppHero,
    AppFeatures,
    AppCta,
    AppFeatures2,
    AppPricing,
    AppSteps,
    AppTestimonial,
    AppContact,
    AppFooter,
  },
  data() {
    return {
      rawd7uz: " ",
      rawdnpm: " ",
    };
  },
  metaInfo: {
    title: "Work by Eleni Chasioti",
    meta: [
      {
        property: "og:title",
        content: "Work by Eleni Chasioti",
      },
    ],
  },
};
</script>

<style scoped>
.home-container {
  width: 100%;
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.home-fragment100 {
  display: contents;
}
.home-text100 {
  display: inline-block;
}
.home-fragment101 {
  display: contents;
}
.home-text101 {
  display: inline-block;
}
.home-fragment102 {
  display: contents;
}
.home-text102 {
  display: inline-block;
}
.home-fragment103 {
  display: contents;
}
.home-text103 {
  display: inline-block;
  font-style: normal;
  font-weight: 600;
}
.home-fragment104 {
  display: contents;
}
.home-text104 {
  display: inline-block;
  text-decoration: none;
}
.home-fragment105 {
  display: contents;
}
.home-text105 {
  display: inline-block;
  font-style: normal;
  font-weight: 600;
}
.home-fragment106 {
  display: contents;
}
.home-text106 {
  display: inline-block;
  font-style: normal;
  font-weight: 600;
}
.home-fragment107 {
  display: contents;
}
.home-text107 {
  display: inline-block;
}
.home-fragment108 {
  display: contents;
}
.home-text108 {
  display: inline-block;
}
.home-fragment109 {
  display: contents;
}
.home-text109 {
  display: inline-block;
}
.home-fragment110 {
  display: contents;
}
.home-text110 {
  display: inline-block;
  text-decoration: none;
}
.home-fragment111 {
  display: contents;
}
.home-text111 {
  display: inline-block;
  font-style: normal;
  font-weight: 600;
}
.home-fragment112 {
  display: contents;
}
.home-text112 {
  display: inline-block;
}
.home-fragment113 {
  display: contents;
}
.home-text113 {
  display: inline-block;
}
.home-fragment114 {
  display: contents;
}
.home-text114 {
  display: inline-block;
}
.home-fragment115 {
  display: contents;
}
.home-text115 {
  display: inline-block;
}
.home-fragment116 {
  display: contents;
}
.home-text116 {
  display: inline-block;
  text-align: center;
}
.home-fragment117 {
  display: contents;
}
.home-text117 {
  display: inline-block;
  text-align: center;
}
.home-fragment118 {
  display: contents;
}
.home-text118 {
  display: inline-block;
}
.home-fragment119 {
  display: contents;
}
.home-text119 {
  display: inline-block;
}
.home-fragment120 {
  display: contents;
}
.home-text120 {
  display: inline-block;
}
.home-fragment121 {
  display: contents;
}
.home-text121 {
  display: inline-block;
}
.home-fragment122 {
  display: contents;
}
.home-text122 {
  display: inline-block;
}
.home-fragment123 {
  display: contents;
}
.home-text123 {
  display: inline-block;
}
.home-fragment124 {
  display: contents;
}
.home-text124 {
  display: inline-block;
}
.home-fragment125 {
  display: contents;
}
.home-text125 {
  display: inline-block;
}
.home-fragment126 {
  display: contents;
}
.home-text126 {
  display: inline-block;
}
.home-fragment127 {
  display: contents;
}
.home-text127 {
  display: inline-block;
}
.home-fragment128 {
  display: contents;
}
.home-text128 {
  display: inline-block;
}
.home-fragment129 {
  display: contents;
}
.home-text129 {
  display: inline-block;
}
.home-fragment130 {
  display: contents;
}
.home-text130 {
  display: inline-block;
}
.home-fragment131 {
  display: contents;
}
.home-text131 {
  display: inline-block;
}
.home-fragment132 {
  display: contents;
}
.home-text132 {
  display: inline-block;
}
.home-fragment133 {
  display: contents;
}
.home-text133 {
  display: inline-block;
  font-size: 48px;
}
.home-fragment134 {
  display: contents;
}
.home-text134 {
  display: inline-block;
}
.home-fragment135 {
  display: contents;
}
.home-text135 {
  display: inline-block;
  font-style: normal;
  font-weight: 600;
}
.home-fragment136 {
  display: contents;
}
.home-text136 {
  display: inline-block;
}
.home-fragment137 {
  display: contents;
}
.home-text137 {
  display: inline-block;
  font-style: normal;
  font-weight: 600;
}
.home-fragment138 {
  display: contents;
}
.home-text138 {
  display: inline-block;
}
.home-fragment139 {
  display: contents;
}
.home-text139 {
  display: inline-block;
}
.home-fragment140 {
  display: contents;
}
.home-text140 {
  display: inline-block;
}
.home-fragment141 {
  display: contents;
}
.home-text141 {
  display: inline-block;
}
.home-fragment142 {
  display: contents;
}
.home-text142 {
  display: inline-block;
}
.home-fragment143 {
  display: contents;
}
.home-text143 {
  display: inline-block;
}
.home-fragment144 {
  display: contents;
}
.home-text144 {
  display: inline-block;
}
.home-fragment145 {
  display: contents;
}
.home-text145 {
  display: inline-block;
}
.home-fragment146 {
  display: contents;
}
.home-text146 {
  display: inline-block;
}
.home-fragment147 {
  display: contents;
}
.home-text147 {
  display: inline-block;
}
.home-fragment148 {
  display: contents;
}
.home-text148 {
  display: inline-block;
}
.home-fragment149 {
  display: contents;
}
.home-text149 {
  display: inline-block;
}
.home-fragment150 {
  display: contents;
}
.home-text150 {
  display: inline-block;
}
.home-fragment151 {
  display: contents;
}
.home-text151 {
  display: inline-block;
  font-size: 48px;
}
.home-fragment152 {
  display: contents;
}
.home-text152 {
  display: inline-block;
  font-style: normal;
  font-weight: 600;
}
.home-fragment153 {
  display: contents;
}
.home-text153 {
  display: inline-block;
}
.home-fragment154 {
  display: contents;
}
.home-text154 {
  display: inline-block;
}
.home-fragment155 {
  display: contents;
}
.home-text155 {
  display: inline-block;
}
.home-fragment156 {
  display: contents;
}
.home-text156 {
  display: inline-block;
  text-align: center;
}
.home-fragment157 {
  display: contents;
}
.home-text157 {
  display: inline-block;
}
.home-fragment158 {
  display: contents;
}
.home-text158 {
  display: inline-block;
  text-align: center;
}
.home-fragment159 {
  display: contents;
}
.home-text159 {
  display: inline-block;
}
.home-fragment160 {
  display: contents;
}
.home-text160 {
  display: inline-block;
  font-style: normal;
  font-weight: 600;
}
.home-fragment161 {
  display: contents;
}
.home-text161 {
  display: inline-block;
  font-style: normal;
  font-weight: 600;
}
.home-fragment162 {
  display: contents;
}
.home-text162 {
  display: inline-block;
}
.home-fragment163 {
  display: contents;
}
.home-text163 {
  display: inline-block;
}
.home-fragment164 {
  display: contents;
}
.home-text164 {
  display: inline-block;
}
.home-fragment165 {
  display: contents;
}
.home-text165 {
  display: inline-block;
}
.home-fragment166 {
  display: contents;
}
.home-text166 {
  display: inline-block;
  font-size: 48px;
}
.home-fragment167 {
  display: contents;
}
.home-text167 {
  display: inline-block;
}
.home-fragment168 {
  display: contents;
}
.home-text168 {
  display: inline-block;
}
.home-fragment169 {
  display: contents;
}
.home-text169 {
  display: inline-block;
}
.home-fragment170 {
  display: contents;
}
.home-text170 {
  display: inline-block;
}
.home-fragment171 {
  display: contents;
}
.home-text171 {
  display: inline-block;
  font-size: 48px;
}
.home-fragment172 {
  display: contents;
}
.home-text172 {
  display: inline-block;
}
.home-fragment173 {
  display: contents;
}
.home-text173 {
  display: inline-block;
}
.home-fragment174 {
  display: contents;
}
.home-text174 {
  display: inline-block;
  font-size: 48px;
}
.home-fragment175 {
  display: contents;
}
.home-text175 {
  display: inline-block;
}
.home-fragment176 {
  display: contents;
}
.home-text176 {
  display: inline-block;
}
.home-fragment177 {
  display: contents;
}
.home-text177 {
  display: inline-block;
}
.home-fragment178 {
  display: contents;
}
.home-text178 {
  display: inline-block;
}
.home-fragment179 {
  display: contents;
}
.home-text179 {
  display: inline-block;
}
.home-fragment180 {
  display: contents;
}
.home-text180 {
  display: inline-block;
  text-align: center;
}
.home-fragment181 {
  display: contents;
}
.home-text183 {
  display: inline-block;
}
.home-fragment182 {
  display: contents;
}
.home-text184 {
  display: inline-block;
  font-size: 48px;
}
.home-fragment183 {
  display: contents;
}
.home-text185 {
  display: inline-block;
  font-style: normal;
  font-weight: 600;
}
.home-fragment184 {
  display: contents;
}
.home-text186 {
  display: inline-block;
  text-align: center;
}
.home-fragment185 {
  display: contents;
}
.home-text187 {
  display: inline-block;
  text-align: center;
}
.home-fragment186 {
  display: contents;
}
.home-text188 {
  display: inline-block;
}
.home-fragment187 {
  display: contents;
}
.home-text189 {
  display: inline-block;
  text-align: center;
}
.home-fragment188 {
  display: contents;
}
.home-text190 {
  display: inline-block;
}
.home-fragment189 {
  display: contents;
}
.home-text191 {
  display: inline-block;
}
.home-fragment190 {
  display: contents;
}
.home-text192 {
  display: inline-block;
  text-align: center;
}
.home-fragment191 {
  display: contents;
}
.home-text193 {
  display: inline-block;
}
.home-fragment192 {
  display: contents;
}
.home-text194 {
  display: inline-block;
}
.home-fragment193 {
  display: contents;
}
.home-text195 {
  display: inline-block;
}
.home-fragment194 {
  display: contents;
}
.home-text196 {
  display: inline-block;
}
.home-fragment195 {
  display: contents;
}
.home-text197 {
  display: inline-block;
}
.home-fragment196 {
  display: contents;
}
.home-text198 {
  display: inline-block;
  text-align: left;
}
.home-fragment197 {
  display: contents;
}
.home-text199 {
  display: inline-block;
}
.home-fragment198 {
  display: contents;
}
.home-text200 {
  display: inline-block;
}
.home-fragment199 {
  display: contents;
}
.home-text201 {
  display: inline-block;
}
.home-fragment200 {
  display: contents;
}
.home-text202 {
  display: inline-block;
  text-align: center;
}
.home-fragment201 {
  display: contents;
}
.home-text203 {
  display: inline-block;
}
.home-fragment202 {
  display: contents;
}
.home-text204 {
  display: inline-block;
  text-align: left;
}
.home-fragment203 {
  display: contents;
}
.home-text205 {
  display: inline-block;
}
.home-fragment204 {
  display: contents;
}
.home-text206 {
  display: inline-block;
  text-align: left;
}
.home-fragment205 {
  display: contents;
}
.home-text207 {
  display: inline-block;
  text-align: left;
}
.home-fragment206 {
  display: contents;
}
.home-text208 {
  display: inline-block;
}
.home-fragment207 {
  display: contents;
}
.home-text209 {
  display: inline-block;
}
.home-fragment208 {
  display: contents;
}
.home-text210 {
  display: inline-block;
}
.home-fragment209 {
  display: contents;
}
.home-text211 {
  display: inline-block;
}
.home-fragment210 {
  display: contents;
}
.home-text212 {
  display: inline-block;
  text-align: center;
}
.home-fragment211 {
  display: contents;
}
.home-text213 {
  display: inline-block;
  text-align: center;
}
.home-fragment212 {
  display: contents;
}
.home-text214 {
  display: inline-block;
}
.home-fragment213 {
  display: contents;
}
.home-text215 {
  display: inline-block;
}
.home-fragment214 {
  display: contents;
}
.home-text216 {
  display: inline-block;
}
.home-fragment215 {
  display: contents;
}
.home-text217 {
  display: inline-block;
}
.home-fragment216 {
  display: contents;
}
.home-text218 {
  display: inline-block;
}
.home-fragment217 {
  display: contents;
}
.home-text219 {
  display: inline-block;
}
.home-fragment218 {
  display: contents;
}
.home-text220 {
  display: inline-block;
}
.home-fragment219 {
  display: contents;
}
.home-text221 {
  fill: var(--dl-color-theme-neutral-dark);
  color: var(--dl-color-theme-neutral-dark);
  display: inline-block;
}
</style>
