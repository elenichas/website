<template>
  <div class="contact-container thq-section-padding">
    <div class="contact-max-width thq-section-max-width">
      <div class="contact-content thq-flex-row">
        <div class="contact-details">
          <h2>
            <slot name="heading1">
              <h2 class="contact-heading">Locations</h2>
            </slot>
          </h2>
          <p>
            <slot name="content1">
              <p class="contact-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in ero.
              </p>
            </slot>
          </p>
        </div>
      </div>

      <div class="contact-locations thq-flex-row">
        <div class="contact-location">
          <img
            :alt="location1ImageAlt"
            :src="location1ImageSrc"
            class="contact-image thq-img-ratio-16-9"
          />
          <h3>
            <slot name="location1">
              <h3 class="contact-location-name">London</h3>
            </slot>
          </h3>
          <p>
            <slot name="location1Description">
              <p class="contact-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in ero.
              </p>
            </slot>
          </p>
          <div class="contact-button-container">
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              class="thq-button-flat thq-body-small"
            >
              Travel with me
            </a>
          </div>
        </div>

        <div class="contact-location">
          <img
            :alt="location2ImageAlt"
            :src="location2ImageSrc"
            class="contact-image thq-img-ratio-16-9"
          />
          <h3>
            <slot name="location2">
              <h3 class="contact-location-name">Greece</h3>
            </slot>
          </h3>
          <p>
            <slot name="location2Description">
              <p class="contact-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in ero.
              </p>
            </slot>
          </p>
          <div class="contact-button-container">
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              class="thq-button-flat thq-body-small"
            >
              Travel with me
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  props: {
    location2ImageSrc: {
      type: String,
      default:
        "https://images.unsplash.com/3/doctype-hi-res.jpg?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTkxMjg3MXw&ixlib=rb-4.0.3&q=80&w=1080",
    },
    location1ImageSrc: {
      type: String,
      default:
        "https://images.unsplash.com/photo-1547119957-637f8679db1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTkxMjg3MXw&ixlib=rb-4.0.3&q=80&w=1080",
    },
    location2ImageAlt: {
      type: String,
      default: "Greece",
    },
    location1ImageAlt: {
      type: String,
      default: "London",
    },
  },
};
</script>

<style scoped>
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
}

.contact-button-container {
  display: flex;
  justify-content: center;
  width: 100%;
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
