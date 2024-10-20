<template>
  <app-navbar></app-navbar>
  <div class="ux-case-study">
    <div>
      <img style="width: 100%" :src="hero" alt="hero image" />
    </div>
    <div>
      <h1 class="title">Coffee Shop Case Study</h1>
      <h4>Role UX Designer</h4>
      <h4>Duration 2023,1 month</h4>
      <h4>Google UX Design Course</h4>
    </div>

    <section>
      <h2>1. Problem Statement</h2>

      <p>
        The local Filipino coffee shop in my neighborhood is very popular with
        working people, but they experience long queues in the morning, which
        leads to delays. I designed this app to allow customers to preorder or
        get their coffee and pastries delivered, helping reduce wait times and
        expand the business. I observed the morning rush at the coffee shop and
        interviewed several customers and staff to understand the impact of long
        queues. I also analyzed existing apps in the food service industry that
        offer preordering and delivery to identify best practices and areas for
        improvement. The shop already has a strong brand identity, which I
        incorporated into the app design for consistency.
      </p>
    </section>

    <section>
      <h2>2. User Personas</h2>
      <div class="personas-container">
        <div class="persona1">
          <h2>James Anderson</h2>
          <ul>
            <li><strong>Age:</strong> 34</li>
            <li><strong>Occupation:</strong> Marketing Manager</li>
            <li><strong>Location:</strong> Nearby office complex</li>
            <li><strong>Tech Proficiency:</strong> High</li>
          </ul>
          <p>
            <strong>Background</strong> <br />
            James works in a fast-paced office nearby and grabs coffee and a
            pastry from the shop every morning. Due to his busy schedule,
            waiting in long lines is a hassle, and he often ends up late for
            work meetings.
          </p>
          <p>
            <strong>Goals</strong> <br />
            James wants to quickly place an order in advance and pick it up on
            his way to work without waiting in line. He also enjoys trying
            different pastries and would love the ability to easily view daily
            specials through the app.
          </p>
          <p>
            <strong>Frustrations</strong><br />
            The long queues in the morning make it difficult for James to get
            his coffee quickly, and he often misses out on popular items that
            sell out before he reaches the counter.
          </p>
        </div>

        <div class="persona2">
          <h2>Maria Lopez</h2>
          <ul>
            <li><strong>Age:</strong> 27</li>
            <li><strong>Occupation:</strong> Freelance Graphic Designer</li>
            <li><strong>Location:</strong> Lives locally</li>
            <li><strong>Tech Proficiency:</strong> Medium</li>
          </ul>
          <p>
            <strong>Background</strong><br />
            Maria works from home and loves supporting local businesses. She
            frequently orders coffee and pastries for delivery to enjoy during
            her workday. Maria is also a fan of the coffee shop’s merchandise,
            which she often buys for herself or as gifts.
          </p>
          <p>
            <strong>Goals</strong> <br />Maria wants an easy way to order
            delivery or preorder for pickup when she’s out running errands. She
            also wants to browse and purchase merchandise through the app,
            taking advantage of exclusive online offers.
          </p>
          <p>
            <strong>Frustrations</strong><br />
            Delivery times can be unpredictable, and Maria wishes she could
            track her orders through the app. She also finds it inconvenient to
            go to the shop to buy merchandise in person.
          </p>
        </div>
      </div>
    </section>

    <section>
      <h2>3. Ideation & Brainstorming</h2>
      <p>
        I brainstormed several solutions to streamline the coffee shop’s morning
        rush. My main ideas were allowing users to preorder their coffee and
        pastries for quick pickup and providing a delivery option. I also wanted
        to integrate the shop’s merchandise, allowing customers to purchase
        directly through the app. The MVP includes preorder functionality,
        delivery tracking, and a shop for purchasing merchandise. Other
        potential features, like loyalty rewards or mobile payments, were
        deprioritized for future iterations to focus on the core user needs.
      </p>
    </section>

    <section>
      <h2>4. Wireframing & Prototyping</h2>
      <div>
        <img style="width: 100%" :src="wireframes" alt="hero image" />
      </div>
      <!-- <p>
        <strong>Low-Fidelity Wireframes</strong><br />
        I started by sketching the core user flow: selecting items for preorder
        or delivery, making the payment, and receiving an order confirmation. I
        designed simple, intuitive navigation to ensure users could quickly
        access these features.
      </p> -->
      <p>
        <strong>High-Fidelity Prototypes</strong><br />
        I developed high-fidelity prototypes using the coffee shop’s existing
        brand identity. The color scheme and typography were carried over from
        the shop’s branding, and I designed visually appealing product displays
        for their pastries and merchandise. The app also featured a clean order
        summary page and a tracking system for deliveries.
      </p>
      <div>
        <img style="width: 100%" :src="prototypes" alt="hero image" />
      </div>
    </section>

    <section>
      <h2>6. Visual Design & Branding</h2>
      <div style="display: flex">
        <p style="padding: 24px">
          The app’s visual design reflects the shop’s existing brand identity,
          which includes warm, earthy tones and playful typography. I ensured
          that the app maintained consistency with the physical store’s
          ambiance, using the same logo, colors, and typography to create a
          cohesive experience for customers.The goal was to make the app feel
          personal and welcoming, much like the coffee shop itself. I used
          imagery of the shop’s best-selling pastries and coffee to entice users
          and evoke the cozy, friendly atmosphere that customers love.
        </p>
        <div class="style-guide">
          <div class="typography-section">
            <h2>Typography</h2>
            <div class="typography">
              <p class="large-text">Aa</p>
              <p class="font-name">Sansation</p>
              <p class="font-name">Inter</p>
              <p class="alphabet">abcdefghijklmnopqrstuvwxyz</p>
            </div>
          </div>
          <div class="colors-section">
            <h2>Colors</h2>
            <div class="color-swatches">
              <div class="color-swatch" :style="{ backgroundColor: '#00320b' }">
                <span>#00320b</span>
              </div>
              <div class="color-swatch" :style="{ backgroundColor: '#d9d9d9' }">
                <span>#d9d9d9</span>
              </div>
              <div class="color-swatch" :style="{ backgroundColor: '#d7a246' }">
                <span>#d7a246</span>
              </div>
              <div class="color-swatch" :style="{ backgroundColor: '#000000' }">
                <span>#000000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <h2>7. Final Prototype & User Flow</h2>

      <p>
        <strong>Interactive Flow</strong> <br />
        The final prototype allows users to quickly browse the menu, select
        items for preorder or delivery, and track their order status. Customers
        can also explore the shop’s merchandise, place orders, and receive
        notifications when their items are ready for pickup or out for delivery.
      </p>
      <p>
        <strong>Example User Flow</strong> <br />
        A customer opens the app, selects their favorite coffee and a pastry for
        pickup, chooses a time for pickup, and pays online. They receive a
        notification when their order is ready, allowing them to skip the line
        and collect their order quickly. They can also browse the merchandise
        section and add an item to their cart for delivery alongside their
        coffee order.
      </p>
      <a
        href="https://www.figma.com/proto/dSiLtVj2GKzRZYcfYoe8iW/KapihanApp?node-id=49-5572&t=qR7dRV7dwGhpgw8c-1"
        target="_blank"
        class="btn"
      >
        View the Interactive Prototype
      </a>
    </section>

    <section>
      <h2>8. Reflection & Next Steps</h2>
      <p>
        This project helped me understand how digital solutions can streamline
        small business operations and enhance the customer experience. Designing
        the app around the coffee shop’s existing brand identity allowed me to
        create a consistent, familiar user experience that reflects the shop’s
        values. In the future, I would like to implement a loyalty program to
        encourage repeat customers and integrate mobile payments to speed up the
        checkout process. Additionally, adding real-time delivery tracking and
        order customization options would further enhance the user experience.
      </p>
    </section>
  </div>
</template>

<script>
import AppNavbar from "@/components/navbar";

export default {
  name: "LocalBakeryApp",
  components: {
    AppNavbar,
  },
  props: {},
  data() {
    return {
      hero: require("@/images/kapihanHero.png"),
      wireframes: require("@/images/kapihanWireframes.png"),
      prototypes: require("@/images/kapihanPrototypes.png"),
      figmaSrc:
        "https://www.figma.com/proto/dSiLtVj2GKzRZYcfYoe8iW/KapihanApp?node-id=49-5572&t=qR7dRV7dwGhpgw8c-1",
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
  color: #00320b; /* Color from design */
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
