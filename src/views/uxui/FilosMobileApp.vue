<template>
  <app-navbar></app-navbar>
  <div class="ux-case-study">
    <div>
      <img style="width: 100%" :src="hero" alt="hero image" />
    </div>
    <div>
      <h1 class="title">Filos Mobile APP Case Study</h1>
      <h4>Role UX Designer</h4>
      <h4>Duration 2023,1 month</h4>
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
      <div class="personas-container">
        <div class="persona1">
          <h2>Alex Martinez</h2>
          <ul>
            <li><strong>Age:</strong> 29</li>
            <li><strong>Occupation:</strong> Software Developer</li>
            <li><strong>Location:</strong> London, UK</li>
            <li>
              <strong>Disability:</strong> Mobility impairment (uses a
              wheelchair)
            </li>
            <li><strong>Tech Proficiency:</strong> High</li>
          </ul>
          <p>
            <strong>Background</strong> <br />
            Alex has been living with a mobility impairment since a car accident
            five years ago. He is very independent and enjoys his work as a
            remote software developer. However, he sometimes feels isolated as
            it's difficult for him to participate in social activities due to
            limited mobility and accessibility in public spaces.
          </p>
          <p>
            <strong>Goals</strong><br />
            Alex wants to find accessible activities, meet new people, and feel
            more connected to his community. He prefers simple apps that are
            intuitive, with features like calendars to track events and a way to
            chat before committing to activities.
          </p>
          <p>
            <strong>Frustrations</strong><br />
            Alex often finds it hard to identify accessible activities or people
            who understand his needs. Many apps lack the accessibility features
            necessary for ease of use by people with mobility challenges.
          </p>
        </div>

        <div class="persona2">
          <h2>Emma Thompson</h2>
          <ul>
            <li><strong>Age:</strong> 22</li>
            <li>
              <strong>Occupation:</strong> University Student (Occupational
              Therapy)
            </li>
            <li><strong>Location:</strong> Manchester, UK</li>
            <li><strong>Tech Proficiency:</strong> Medium</li>
          </ul>
          <p>
            <strong>Background</strong> <br />
            Emma is a final-year occupational therapy student. She is passionate
            about making a difference in people’s lives, especially those with
            disabilities. Emma is looking for ways to gain real-world experience
            working with people with disabilities outside her coursework.
          </p>
          <p>
            <strong>Goals</strong> <br />
            Emma wants to volunteer in activities where she can apply her skills
            while learning more about different disabilities. She is eager to
            connect with people in her local community, make a positive impact,
            and learn more about accessibility in real life.
          </p>
          <p>
            <strong>Frustrations</strong><br />
            Emma finds it difficult to find volunteer opportunities where she
            can meet people with disabilities. She is also unsure how to
            approach people in a meaningful, respectful way without it feeling
            transactional.
          </p>
        </div>
      </div>
    </section>

    <section>
      <h2>3. Ideation & Brainstorming</h2>
      <p>
        <strong>Idea Generation</strong><br />
        During the ideation phase, I explored various ways to structure the app.
        I started with a brainstorming session where I identified key functions
        such as creating or joining an activity, scheduling, and chatting. I
        sketched out ideas, considering different approaches for interaction
        design, including whether to use an activity feed, a map-based
        interface, or a calendar-first approach.
      </p>
      <p>
        <strong>Feature Prioritization</strong><br />
        I used a prioritization matrix to decide which features would be most
        valuable for the minimum viable product (MVP). High-priority features
        included: Creating and joining activities Viewing activities in a
        calendar A proximity-based system to find people nearby Simple chat
        functionality.
      </p>
    </section>

    <section>
      <h2>4. Wireframing & Prototyping</h2>
      <div></div>
    </section>

    <section>
      <h2>5. User Testing & Feedback</h2>
      <p>
        <strong>Usability Testing:</strong> I conducted usability testing with
        five participants, including three users with different types of
        disabilities...
      </p>
      <p>
        <strong>Iterations Based on Feedback:</strong> Based on the feedback, I
        made several changes to the app...
      </p>
    </section>

    <section>
      <h2>6. Visual Design & Branding</h2>
      <p>
        <strong>Accessible Design:</strong> The visual design of the app
        followed the principles of accessibility...
      </p>
      <p>
        <strong>Emotional Design:</strong> The app’s design aimed to evoke a
        sense of community and inclusion...
      </p>
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
    </section>

    <section>
      <h2>7. Final Prototype & User Flow</h2>
      <p>
        <strong>Interactive Flow:</strong> In the final prototype, users can
        sign up and immediately view a list of available activities near them...
      </p>
      <p>
        <strong>Example User Flow:</strong> A user signs up and sets their
        preferences for the types of activities they’re interested in...
      </p>
      <p>
        <strong>Impact:</strong> This app provides a unique opportunity for
        users to create connections...
      </p>
    </section>

    <section>
      <h2>8. Reflection & Next Steps</h2>
      <p>
        <strong>Reflection:</strong> Throughout the design process, I learned
        the importance of creating inclusive, accessible solutions...
      </p>
      <p>
        <strong>Next Steps:</strong> Moving forward, I would like to develop
        additional features...
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
  props: {},
  data() {
    return {
      hero: require("@/images/filosHero.png"),
      //   wireframes: require("@/images/kapihanWireframes.png"),
      //   prototypes: require("@/images/kapihanPrototypes.png"),
      //   figmaSrc:
      //     "https://www.figma.com/proto/dSiLtVj2GKzRZYcfYoe8iW/KapihanApp?node-id=49-5572&t=qR7dRV7dwGhpgw8c-1",
    };
  },
};
</script>

<style scoped>
.style-guide {
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  color: rgb(0, 0, 0); /* Text color */
  padding: 20px;
}

.typography-section {
  flex: 1;
}

.typography {
  margin-top: 20px;
}

.large-text {
  font-size: 100px; /* Adjust for scale */
  font-family: "Inter";
  color: #000000; /* Color from design */
}

.font-name {
  font-size: 18px;
  margin-top: 10px;
}

.alphabet {
  font-size: 24px;
  color: rgba(47, 47, 47, 0.7); /* Light opacity for alphabet text */
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

.color-swatch span {
  top: 120%;
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

.btn i {
  margin-right: 10px;
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
  /* text-align: center; */
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

.persona1 {
  flex: 1;
  background-color: #2d3030;
  color: #eeece7;
  padding: 40px;
}
.persona2 {
  flex: 1;
  background-color: #eeece7;
  color: #2d3030;
  padding: 40px;
}

.persona h3 {
  font-size: 1.5rem;
  color: #34495e;
  margin-bottom: 10px;
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
}
</style>
