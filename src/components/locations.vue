<template>
  <div class="locations-card">
    <div class="contact-container thq-section-padding">
      <div class="contact-max-width thq-section-max-width">
        <div class="contact-content thq-flex-row">
          <div class="contact-details">
            <slot name="heading1">
              <h1 class="contact-heading">Locations</h1>
            </slot>
            <slot name="content1">
              <p class="contact-description">
                I spend my time between London and Greece!
              </p>
            </slot>
          </div>
        </div>

        <div class="contact-locations thq-flex-row">
          <div class="contact-location">
            <img
              alt="image of London riverside"
              :src="imageSrc"
              class="contact-image thq-img-ratio-16-9"
            />
            <slot name="location1">
              <h3 class="contact-location-name">London</h3>
            </slot>
            <slot name="location1Description">
              <p class="contact-description">
                Always enjoy a walk by the river and a museum visit.
              </p>
            </slot>
          </div>

          <div class="contact-location">
            <img
              alt="Image of seaside in Greece"
              :src="imageSrc2"
              class="contact-image thq-img-ratio-16-9"
            />
            <slot name="location2">
              <h3 class="contact-location-name">Greece</h3>
            </slot>
            <slot name="location2Description">
              <p class="contact-description">
                During summer, I find some time to spend by the sea.
              </p>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const imageSrc = require("@/images/travel/london.jpg");
const imageSrc2 = require("@/images/travel/greece.jpg");

export default {
  name: "Contact",
  data() {
    return {
      imageSrc,
      imageSrc2,
    };
  },
};
</script>

<style scoped>
.locations-card {
  width: 85%;
  margin: auto;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  margin: 2% 0;
}

.contact-container {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
}

.contact-max-width {
  align-self: center;
}

.contact-content {
  width: 100%;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: flex-start;
}

.contact-details {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.contact-locations {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: flex-start;
}

.contact-location {
  gap: var(--dl-space-space-oneandhalfunits);
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact-image {
  object-fit: cover;
  height: 600px;
}

.contact-heading,
.contact-location-name {
  text-align: center;
}

.contact-description {
  text-align: center;
}

@media (max-width: 991px) {
  .contact-locations {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 767px) {
  .contact-image {
    width: 100%;
  }
}
</style>
