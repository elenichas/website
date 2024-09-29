<template>
  <div class="thq-section-padding">
    <div class="features24-container2 thq-section-max-width">
      <div class="features24-image-container">
        <img
          :alt="feature1ImgAlt"
          :src="feature1ImgSrc"
          v-if="activeTab === 0"
          class="features24-image1 thq-img-ratio-16-9"
        />
        <img
          :alt="feature2ImgAlt"
          :src="feature2ImgSrc"
          v-if="activeTab === 1"
          class="features24-image2 thq-img-ratio-16-9"
        />
        <img
          :alt="feature3ImgAlt"
          :src="feature3ImgSrc"
          v-if="activeTab === 2"
          class="features24-image3 thq-img-ratio-16-9"
        />
      </div>
      <div class="features24-tabs-menu">
        <div @click="activeTab = 0" class="features24-tab-horizontal1">
          <div class="features24-divider-container1">
            <div v-if="activeTab === 0" class="features24-container3"></div>
          </div>
          <div class="features24-content1">
            <h2>
              <slot name="feature1Title">
                <!--Default content for feature1Title-->
                <div class="features24-fragment4">
                  <h2 class="features24-text4 thq-heading-2">Design Projects</h2>
                </div>
              </slot>
            </h2>
            <span>
              <slot name="feature1Description">
                <!--Default content for feature1Description-->
                <div class="features24-fragment5">
                  <span class="features24-text5 thq-body-small">
                    Check out my design projects to see my aesthetic sense and
                    attention to detail.
                  </span>
                </div>
              </slot>
            </span>
          </div>
        </div>
        <div @click="activeTab = 1" class="features24-tab-horizontal2">
          <div class="features24-divider-container2">
            <div v-if="activeTab === 1" class="features24-container4"></div>
          </div>
          <div class="features24-content2">
            <h2>
              <slot name="feature2Title">
                <!--Default content for feature2Title-->
                <div class="features24-fragment6">
                  <h2 class="features24-text6 thq-heading-2">
                    UX/UI Design Projects
                  </h2>
                </div>
              </slot>
            </h2>
            <span>
              <slot name="feature2Description">
                <!--Default content for feature2Description-->
                <div class="features24-fragment3">
                  <span class="features24-text3 thq-body-small">
                    Explore my UX/UI design projects to see my creative
                    problem-solving approach.
                  </span>
                </div>
              </slot>
            </span>
          </div>
        </div>
        <div @click="activeTab = 2" class="features24-tab-horizontal3">
          <div class="features24-divider-container3">
            <div v-if="activeTab === 2" class="features24-container5"></div>
          </div>
          <div class="features24-content3">
            <h2>
              <slot name="feature3Title">
                <!--Default content for feature3Title-->
                <div class="features24-fragment2">
                  <h2 class="features24-text2 thq-heading-2">Coding Projects</h2>
                </div>
              </slot>
            </h2>
            <span>
              <slot name="feature3Description">
                <!--Default content for feature3Description-->
                <div class="features24-fragment1">
                  <span class="features24-text1 thq-body-small">
                    View my coding projects to see my technical skills in action.
                  </span>
                </div>
              </slot>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Features24',
  props: {
    feature1ImgAlt: {
      type: String,
      default: 'Design Projects',
    },
    feature3ImgSrc: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1466786784937-3e682c802b14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTkxMjg3MXw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    feature1ImgSrc: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1501556424050-d4816356b73e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTkxMjg3MXw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    feature3ImgAlt: {
      type: String,
      default: 'Coding Projects',
    },
    feature2ImgSrc: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1531736275454-adc48d079ce9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTkxMjg3Mnw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    feature2ImgAlt: {
      type: String,
      default: 'UX/UI Design Projects',
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
.features24-container2 {
  width: 100%;
  display: grid;
  grid-gap: var(--dl-space-space-fiveunits);
  position: relative;
  grid-template-columns: 1fr 1fr;
}
.features24-image-container {
  height: 100%;
  display: flex;
  position: relative;
}
.features24-image1 {
  animation-name: fadeIn;
  animation-delay: 0s;
  animation-duration: 300ms;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}
.features24-image2 {
  animation-name: fadeIn;
  animation-delay: 0s;
  animation-duration: 300ms;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}
.features24-image3 {
  animation-name: fadeIn;
  animation-delay: 0s;
  animation-duration: 300ms;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}
.features24-tabs-menu {
  gap: var(--dl-space-space-twounits);
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.features24-tab-horizontal1 {
  gap: var(--dl-space-space-twounits);
  cursor: pointer;
  display: flex;
  overflow: hidden;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
.features24-divider-container1 {
  display: flex;
  align-self: stretch;
  align-items: flex-start;
}
.features24-container3 {
  width: 2px;
  align-self: stretch;
  background-color: var(--dl-color-theme-neutral-dark);
}
.features24-content1 {
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
.features24-tab-horizontal2 {
  gap: var(--dl-space-space-twounits);
  cursor: pointer;
  display: flex;
  overflow: hidden;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
.features24-divider-container2 {
  display: flex;
  align-self: stretch;
  align-items: flex-start;
}
.features24-container4 {
  width: 2px;
  align-self: stretch;
  background-color: var(--dl-color-theme-neutral-dark);
}
.features24-content2 {
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
.features24-tab-horizontal3 {
  gap: var(--dl-space-space-twounits);
  cursor: pointer;
  display: flex;
  overflow: hidden;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
.features24-divider-container3 {
  display: flex;
  align-self: stretch;
  align-items: flex-start;
}
.features24-container5 {
  width: 2px;
  align-self: stretch;
  background-color: var(--dl-color-theme-neutral-dark);
}
.features24-content3 {
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
.features24-fragment1 {
  display: contents;
}
.features24-text1 {
  display: inline-block;
}
.features24-fragment2 {
  display: contents;
}
.features24-text2 {
  display: inline-block;
}
.features24-fragment3 {
  display: contents;
}
.features24-text3 {
  display: inline-block;
}
.features24-fragment4 {
  display: contents;
}
.features24-text4 {
  display: inline-block;
}
.features24-fragment5 {
  display: contents;
}
.features24-text5 {
  display: inline-block;
}
.features24-fragment6 {
  display: contents;
}
.features24-text6 {
  display: inline-block;
}
@media(max-width: 991px) {
  .features24-container2 {
    grid-gap: var(--dl-space-space-twounits);
    grid-template-columns: 1fr;
  }
}
</style>
