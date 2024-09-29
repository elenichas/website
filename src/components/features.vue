<template>
  <div class="thq-section-padding">
    <div class="features25-container2 thq-section-max-width">
      <div class="features25-tabs-menu">
        <div @click="activeTab = 0" class="features25-tab-horizontal1">
          <div class="features25-divider-container1">
            <div v-if="activeTab === 0" class="features25-container3"></div>
          </div>
          <div class="features25-content1">
            <h2>
              <slot name="feature1Title">
                <!--Default content for feature1Title-->
                <div class="features25-fragment4">
                  <h2 class="features25-text4 thq-heading-2">Design Projects</h2>
                </div>
              </slot>
            </h2>
            <span>
              <slot name="feature1Description">
                <!--Default content for feature1Description-->
                <div class="features25-fragment2">
                  <span class="features25-text2 thq-body-small">
                    Showcasing a collection of my design projects including
                    branding, illustrations, and digital designs.
                  </span>
                </div>
              </slot>
            </span>
          </div>
        </div>
        <div @click="activeTab = 1" class="features25-tab-horizontal2">
          <div class="features25-divider-container2">
            <div v-if="activeTab === 1" class="features25-container4"></div>
          </div>
          <div class="features25-content2">
            <h2>
              <slot name="feature2Title">
                <!--Default content for feature2Title-->
                <div class="features25-fragment3">
                  <h2 class="features25-text3 thq-heading-2">
                    UX/UI Design Projects
                  </h2>
                </div>
              </slot>
            </h2>
            <span>
              <slot name="feature2Description">
                <!--Default content for feature2Description-->
                <div class="features25-fragment5">
                  <span class="features25-text5 thq-body-small">
                    Highlighting my UX/UI design projects that focus on user
                    experience and interface design for various platforms.
                  </span>
                </div>
              </slot>
            </span>
          </div>
        </div>
        <div @click="activeTab = 2" class="features25-tab-horizontal3">
          <div class="features25-divider-container3">
            <div v-if="activeTab === 2" class="features25-container5"></div>
          </div>
          <div class="features25-content3">
            <h2>
              <slot name="feature3Title">
                <!--Default content for feature3Title-->
                <div class="features25-fragment6">
                  <h2 class="features25-text6 thq-heading-2">Coding Projects</h2>
                </div>
              </slot>
            </h2>
            <span>
              <slot name="feature3Description">
                <!--Default content for feature3Description-->
                <div class="features25-fragment1">
                  <span class="features25-text1 thq-body-small">
                    Displaying a range of coding projects I have worked on,
                    including websites, applications, and other software
                    development.
                  </span>
                </div>
              </slot>
            </span>
          </div>
        </div>
      </div>
      <div class="features25-image-container">
        <img
          :alt="feature1ImgAlt"
          :src="feature1ImgSrc"
          v-if="activeTab === 0"
          class="features25-image1 thq-img-ratio-16-9"
        />
        <img
          :alt="feature2ImgAlt"
          :src="feature2ImgSrc"
          v-if="activeTab === 1"
          class="features25-image2 thq-img-ratio-16-9"
        />
        <img
          :alt="feature3ImgAlt"
          :src="feature3ImgSrc"
          v-if="activeTab === 2"
          class="features25-image3 thq-img-ratio-16-9"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Features25',
  props: {
    feature1ImgAlt: {
      type: String,
      default: 'Design Projects Image Alt Text',
    },
    feature3ImgAlt: {
      type: String,
      default: 'Coding Projects Image Alt Text',
    },
    feature1ImgSrc: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1521649415036-659258dc424f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTkxMjg3MXw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    feature3ImgSrc: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTkxMjg3Mnw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    feature2ImgAlt: {
      type: String,
      default: 'UX/UI Design Projects Image Alt Text',
    },
    feature2ImgSrc: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1522152246188-e857196992da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTkxMjg3Mnw&ixlib=rb-4.0.3&q=80&w=1080',
    },
  },
  data() {
    return {
      activeTab: 0,
    }
  },
}
</script>

<style scoped>
.features25-container2 {
  width: 100%;
  display: grid;
  grid-gap: var(--dl-space-space-fiveunits);
  position: relative;
  grid-template-columns: 1fr 1fr;
}
.features25-tabs-menu {
  gap: var(--dl-space-space-twounits);
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.features25-tab-horizontal1 {
  gap: var(--dl-space-space-twounits);
  cursor: pointer;
  display: flex;
  overflow: hidden;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
.features25-divider-container1 {
  display: flex;
  align-self: stretch;
  align-items: flex-start;
}
.features25-container3 {
  width: 2px;
  align-self: stretch;
  background-color: var(--dl-color-theme-neutral-dark);
}
.features25-content1 {
  gap: 16px;
  flex: 1;
  display: flex;
  overflow: hidden;
  flex-grow: 1;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
}
.features25-tab-horizontal2 {
  gap: var(--dl-space-space-twounits);
  cursor: pointer;
  display: flex;
  overflow: hidden;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
.features25-divider-container2 {
  display: flex;
  align-self: stretch;
  align-items: flex-start;
}
.features25-container4 {
  width: 2px;
  align-self: stretch;
  background-color: var(--dl-color-theme-neutral-dark);
}
.features25-content2 {
  gap: 16px;
  flex: 1;
  display: flex;
  overflow: hidden;
  flex-grow: 1;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
}
.features25-tab-horizontal3 {
  gap: var(--dl-space-space-twounits);
  cursor: pointer;
  display: flex;
  overflow: hidden;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
.features25-divider-container3 {
  display: flex;
  align-self: stretch;
  align-items: flex-start;
}
.features25-container5 {
  width: 2px;
  align-self: stretch;
  background-color: var(--dl-color-theme-neutral-dark);
}
.features25-content3 {
  gap: 16px;
  flex: 1;
  display: flex;
  overflow: hidden;
  flex-grow: 1;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
}
.features25-image-container {
  height: 100%;
  display: flex;
  position: relative;
}
.features25-image1 {
  animation-name: fadeIn;
  animation-delay: 0s;
  animation-duration: 300ms;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}
.features25-image2 {
  animation-name: fadeIn;
  animation-delay: 0s;
  animation-duration: 300ms;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}
.features25-image3 {
  animation-name: fadeIn;
  animation-delay: 0s;
  animation-duration: 300ms;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}
.features25-fragment1 {
  display: contents;
}
.features25-text1 {
  display: inline-block;
}
.features25-fragment2 {
  display: contents;
}
.features25-text2 {
  display: inline-block;
}
.features25-fragment3 {
  display: contents;
}
.features25-text3 {
  display: inline-block;
}
.features25-fragment4 {
  display: contents;
}
.features25-text4 {
  display: inline-block;
}
.features25-fragment5 {
  display: contents;
}
.features25-text5 {
  display: inline-block;
}
.features25-fragment6 {
  display: contents;
}
.features25-text6 {
  display: inline-block;
}
@media(max-width: 991px) {
  .features25-container2 {
    grid-gap: var(--dl-space-space-twounits);
    grid-template-columns: 1fr;
  }
  .features25-tabs-menu {
    order: 2;
  }
}
</style>
