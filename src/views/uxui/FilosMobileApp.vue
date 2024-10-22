<template>
  <app-navbar></app-navbar>
  <div class="ux-case-study">
    <div>
      <img class="hero-image" :src="hero" alt="hero image" />
    </div>
    <div>
      <h1 class="title">Filos Mobile APP Case Study</h1>
      <h4>Role: UX Designer</h4>
      <h4>Duration: 2023, 1 month</h4>
      <h4>Google UX Design Course</h4>
    </div>

    <section>
      <h2>1. Problem Statement & Research</h2>
      <p>
        <strong>Problem Statement</strong> <br />
        Many people with disabilities face barriers to social interaction and
        participating in activities with others. Meanwhile, non-disabled people
        or students working in the field of disabilities often lack
        opportunities to connect meaningfully with people with disabilities and
        understand their daily experiences. The app I designed addresses this
        gap by providing a platform where people with and without disabilities
        can connect, propose or join activities, and help each other.
      </p>
    </section>

    <section>
      <h2>2. User Personas</h2>
      <!-- Vuetify carousel for switching between personas -->
      <v-carousel hide-delimiters>
        <v-carousel-item v-for="persona in personas" :key="persona.name">
          <div class="persona">
            <h2>{{ persona.name }}</h2>
            <v-list density="compact">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title
                    ><strong>Age:</strong> {{ persona.age }}</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title
                    ><strong>Occupation:</strong>
                    {{ persona.occupation }}</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title
                    ><strong>Location:</strong>
                    {{ persona.location }}</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>

              <v-list-item v-if="persona.disability">
                <v-list-item-content>
                  <v-list-item-title
                    ><strong>Disability:</strong>
                    {{ persona.disability }}</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title
                    ><strong>Tech Proficiency:</strong>
                    {{ persona.tech }}</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
            </v-list>

            <p>
              <strong>Background</strong> <br />
              {{ persona.background }}
            </p>
            <p>
              <strong>Goals</strong><br />
              {{ persona.goals }}
            </p>
            <p>
              <strong>Frustrations</strong><br />
              {{ persona.frustrations }}
            </p>
          </div>
        </v-carousel-item>
      </v-carousel>
    </section>

    <section>
      <h2>3. Ideation & Brainstorming</h2>
      <p>
        During the ideation phase, I explored various ways to structure the app.
        I started with a brainstorming session where I identified key functions
        such as creating or joining an activity, scheduling, and chatting. I
        sketched out ideas, considering different approaches for interaction
        design, including whether to use an activity feed, a map-based
        interface, or a calendar-first approach. I used a prioritization matrix
        to decide which features would be most valuable for the minimum viable
        product (MVP). High-priority features included: Creating and joining
        activities Viewing activities in a calendar A proximity-based system to
        find people nearby Simple chat functionality.
      </p>
    </section>

    <section>
      <h2>4. Wireframing & Prototyping</h2>
      <div>
        <img
          class="image-full-width"
          :src="wireframes"
          alt="wireframes image"
        />
      </div>

      <div class="figma-embed">
        <iframe
          style="border: 1px solid rgba(0, 0, 0, 0.1)"
          width="100%"
          height="450"
          src="https://embed.figma.com/design/YQu3rgFADyaMk5HhHQM4Y8/Filos_App?node-id=22-403&embed-host=share"
          allowfullscreen
        ></iframe>
      </div>
    </section>

    <section>
      <h2>5. Visual Design & Branding</h2>
      <div class="visual-design-container">
        <p class="visual-design-text">
          The Filos mobile app prototype is a project I designed to foster
          connections between people with disabilities and their communities. I
          focused on creating a visual identity that emphasizes inclusivity and
          support, with the app name Filos representing friendship and
          assistance. I chose a calming purple gradient as the primary color
          scheme to evoke trust and approachability. The logo and typography are
          clean and modern, reinforcing the app’s focus on accessibility and
          ease of use. I designed the interface to be user-friendly, with large,
          intuitive buttons and icons that meet accessibility standards. The
          layout is consistent across screens, ensuring a seamless flow from
          sign-up to scheduling and accepting activities.
        </p>
      </div>
      <div class="style-guide">
        <div class="typography-section">
          <h2>Typography</h2>
          <div class="typography">
            <p class="large-text">Aa</p>
            <p class="font-name">Inter</p>
            <p class="alphabet">abcdefghijklmnopqrstuvwxyz</p>
          </div>
        </div>
        <div class="colors-section">
          <h2>Colors</h2>
          <div class="color-swatches">
            <div class="color-swatch" :style="{ backgroundColor: '#a469cc' }">
              <span>#a469cc</span>
            </div>
            <div class="color-swatch" :style="{ backgroundColor: '#511f88' }">
              <span>#511f88</span>
            </div>
            <div class="color-swatch" :style="{ backgroundColor: '#d9d9d9' }">
              <span>#d9d9d9</span>
            </div>
            <div class="color-swatch" :style="{ backgroundColor: '#000000' }">
              <span>#000000</span>
            </div>
          </div>
        </div>
      </div>

      <button class="custom-button">
        <a
          href="https://www.figma.com/proto/dSiLtVj2GKzRZYcfYoe8iW/KapihanApp?node-id=49-5572&t=qR7dRV7dwGhpgw8c-1"
          class="button-text"
          >Interactive Prototype</a
        >
        <div class="button-icon">
          <span class="mdi mdi-arrow-bottom-right"></span>
        </div>
      </button>
    </section>

    <section>
      <h2>6. Reflection & Next Steps</h2>
      <p>
        Reflecting on the design of the Filos app, I realized how crucial it is
        to deeply understand the needs of the user base, particularly those with
        varying abilities. Ensuring accessibility at every touchpoint — from
        visual design to functionality — was a key learning experience. In the
        future, I would focus on further user testing with diverse groups to
        refine the user experience and ensure the app is fully inclusive. My
        next steps would include enhancing the app's accessibility features,
        such as voice commands and screen readers, and exploring real-time
        feedback systems to continuously improve usability based on direct user
        input.
      </p>
    </section>
  </div>
</template>

<script>
import AppNavbar from "@/components/navbar";

export default {
  name: "FilosMobileApp",
  components: {
    AppNavbar,
  },
  data() {
    return {
      hero: require("@/images/filosHero.png"),
      wireframes: require("@/images/filosWireframes.png"),
      personas: [
        {
          name: "Alex Martinez",
          age: 29,
          occupation: "Software Developer",
          location: "London, UK",
          disability: "Mobility impairment (uses a wheelchair)",
          tech: "High",
          background:
            "Alex has been living with a mobility impairment since a car accident five years ago. He is very independent and enjoys his work as a remote software developer. However, he sometimes feels isolated as it's difficult for him to participate in social activities due to limited mobility and accessibility in public spaces.",
          goals:
            "Alex wants to find accessible activities, meet new people, and feel more connected to his community. He prefers simple apps that are intuitive, with features like calendars to track events and a way to chat before committing to activities.",
          frustrations:
            "Alex often finds it hard to identify accessible activities or people who understand his needs. Many apps lack the accessibility features necessary for ease of use by people with mobility challenges.",
        },
        {
          name: "Emma Thompson",
          age: 22,
          occupation: "University Student (Occupational Therapy)",
          location: "Manchester, UK",
          tech: "Medium",
          background:
            "Emma is a final-year occupational therapy student. She is passionate about making a difference in people’s lives, especially those with disabilities. Emma is looking for ways to gain real-world experience working with people with disabilities outside her coursework.",
          goals:
            "Emma wants to volunteer in activities where she can apply her skills  while learning more about different disabilities. She is eager to connect with people in her local community, make a positive impact, and learn more about accessibility in real life.",
          frustrations:
            "Emma finds it difficult to find volunteer opportunities where she can meet people with disabilities. She is also unsure how to approach people in a meaningful, respectful way without it feeling transactional",
        },
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

.visual-design-container {
  padding: 20px;
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
