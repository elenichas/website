<template>
  <div class="cta-section thq-section-padding">
    <div class="thq-section-max-width">
      <div class="cta-container">
        <span>
          <slot name="heading1">
            <span class="cta-heading thq-heading-2">
              Ready to take the next step?
            </span>
          </slot>
        </span>
        <p>
          <slot name="content1">
            <p class="cta-description thq-body-large">
              Let's work together to bring your ideas to life.
            </p>
          </slot>
        </p>

        <div class="cta-actions">
          <button type="button" class="thq-button-filled cta-button">
            <span>
              <slot name="action1">
                <span class="cta-action-text">Contact Me</span>
              </slot>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CTA26",
};
</script>

<style scoped>
.cta-section {
  width: 100%;
  background-color: var(--dl-color-theme-neutral-light);
  color: var(--dl-color-theme-neutral-dark);
  border-radius: var(--dl-radius-radius-cardradius);
}

.cta-container {
  gap: var(--dl-space-space-threeunits);
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: var(--dl-space-space-sixunits) var(--dl-space-space-fourunits);
}

.cta-heading,
.cta-description {
  text-align: center;
}

.cta-actions {
  display: flex;
  justify-content: center;
}

.cta-button {
  flex: 1;
}

@media (max-width: 767px) {
  .cta-container {
    gap: var(--dl-space-space-oneandhalfunits);
  }
}

@media (max-width: 479px) {
  .cta-actions {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
