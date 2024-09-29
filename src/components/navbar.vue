<template>
  <header class="navbar8-container1">
    <header data-thq="thq-navbar" class="navbar8-navbar-interactive">
      <!-- <img :alt="logoAlt" :src="logoSrc" class="navbar8-image1" /> -->
      <div data-thq="thq-navbar-nav" class="navbar8-desktop-menu">
        <nav class="navbar8-links1">
          <a :href="link1Url">
            <slot name="link1">
              <!--Default content for link1-->
              <div><span>Home</span></div>
            </slot>
          </a>
          <a :href="link2Url">
            <slot name="link2">
              <!--Default content for link2-->
              <div><span>Design</span></div>
            </slot>
          </a>
          <a :href="link3Url" target="_blank" rel="noreferrer noopener">
            <slot name="link3">
              <!--Default content for link3-->
              <div><span>Development</span></div>
            </slot>
          </a>
          <div
            @click="link5DropdownVisible = !link5DropdownVisible"
            class="navbar8-link4-dropdown-trigger"
          >
            <span>
              <slot name="link4">
                <!--Default content for link4-->
                <div><span>About me</span></div>
              </slot>
            </span>
            <!-- <div class="navbar8-icon-container1">
              <div v-if="link5DropdownVisible" class="navbar8-container2">
                <svg viewBox="0 0 1024 1024" class="navbar8-icon10">
                  <path d="M298 426h428l-214 214z"></path>
                </svg>
              </div>
              <div v-if="!link5DropdownVisible" class="navbar8-container3">
                <svg viewBox="0 0 1024 1024" class="navbar8-icon12">
                  <path d="M426 726v-428l214 214z"></path>
                </svg>
              </div>
            </div> -->
          </div>
        </nav>
        <!-- <div class="navbar8-buttons1">
          <button
            class="navbar8-action11 thq-button-animated thq-button-filled"
          >
            <span class="thq-body-small">
              <slot name="action1">
          
                <div><span>View Design Projects</span></div>
              </slot>
            </span>
          </button>
          <button
            class="navbar8-action21 thq-button-outline thq-button-animated"
          >
            <span class="thq-body-small">
              <slot name="action2">
            
                <div><span>View UX/UI Design Projects</span></div>
              </slot>
            </span>
          </button>
        </div> -->
      </div>
      <div data-thq="thq-burger-menu" class="navbar8-burger-menu">
        <svg viewBox="0 0 1024 1024" class="navbar8-icon14">
          <path
            d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
          ></path>
        </svg>
      </div>
      <div data-thq="thq-mobile-menu" class="navbar8-mobile-menu">
        <div class="navbar8-nav">
          <div class="navbar8-top">
            <img :alt="logoAlt" :src="logoSrc" class="navbar8-logo" />
            <div data-thq="thq-close-menu" class="navbar8-close-menu">
              <svg viewBox="0 0 1024 1024" class="navbar8-icon16">
                <path
                  d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                ></path>
              </svg>
            </div>
          </div>
          <nav class="navbar8-links2">
            <a :href="link1Url">
              <slot name="link1">
                <!--Default content for link1-->
                <div class="navbar8-fragment14">
                  <span class="navbar8-text18 thq-link thq-body-small">
                    Home
                  </span>
                </div>
              </slot>
            </a>
            <a :href="link2Url">
              <slot name="link2">
                <!--Default content for link2-->
                <div class="navbar8-fragment12">
                  <span class="navbar8-text16 thq-link thq-body-small">
                    Design
                  </span>
                </div>
              </slot>
            </a>
            <a :href="link3Url">
              <slot name="link3">
                <!--Default content for link3-->
                <div class="navbar8-fragment20">
                  <span class="navbar8-text24 thq-link thq-body-small">
                    Development
                  </span>
                </div>
              </slot>
            </a>
            <div class="navbar8-link4-accordion">
              <div
                @click="link5AccordionOpen = !link5AccordionOpen"
                class="navbar8-trigger"
              >
                <span>
                  <slot name="link4">
                    <!--Default content for link4-->
                    <div class="navbar8-fragment17">
                      <span class="navbar8-text21 thq-link thq-body-small">
                        About me
                      </span>
                    </div>
                  </slot>
                </span>
                <!-- <div class="navbar8-icon-container2">
                  <div v-if="link5AccordionOpen" class="navbar8-container4">
                    <svg viewBox="0 0 1024 1024" class="navbar8-icon18">
                      <path d="M298 426h428l-214 214z"></path>
                    </svg>
                  </div>
                  <div v-if="!link5AccordionOpen" class="navbar8-container5">
                    <svg viewBox="0 0 1024 1024" class="navbar8-icon20">
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                  </div>
                </div> -->
              </div>
              <!-- <div v-if="link5AccordionOpen" class="navbar8-container6">
                <a :href="linkUrlPage1">
                  <div class="navbar8-menu-item1">
                    <img
                      :alt="page1ImageAlt"
                      :src="page1ImageSrc"
                      class="navbar8-page1-image1"
                    />
                    <div class="navbar8-content1">
                      <span>
                        <slot name="page1">
                   
                          <div><span>Home</span></div>
                        </slot>
                      </span>
                      <span>
                        <slot name="page1Description">
                       
                          <div>
                            <span>
                              Welcome to my personal website showcasing my work
                              and projects.
                            </span>
                          </div>
                        </slot>
                      </span>
                    </div>
                  </div>
                </a>
                <a :href="linkUrlPage2">
                  <div class="navbar8-menu-item2">
                    <img
                      :alt="page2ImageAlt"
                      :src="page2ImageSrc"
                      class="navbar8-page2-image1"
                    />
                    <div class="navbar8-content2">
                      <span>
                        <slot name="page2">
                      
                          <div><span>Design Projects</span></div>
                        </slot>
                      </span>
                      <span>
                        <slot name="page2Description">
                       
                          <div>
                            <span>
                              Explore my design projects and see my creative
                              process.
                            </span>
                          </div>
                        </slot>
                      </span>
                    </div>
                  </div>
                </a>
                <a :href="linkUrlPage3">
                  <div class="navbar8-menu-item3">
                    <img
                      :alt="page3ImageAlt"
                      :src="page3ImageSrc"
                      class="navbar8-page3-image1"
                    />
                    <div class="navbar8-content3">
                      <span>
                        <slot name="page3">
                        
                          <div><span>UX/UI Design Projects</span></div>
                        </slot>
                      </span>
                      <span>
                        <slot name="page3Description">
                      
                          <div>
                            <span>
                              Discover my UX/UI design projects and how I
                              approach user experience.
                            </span>
                          </div>
                        </slot>
                      </span>
                    </div>
                  </div>
                </a>
                <a :href="linkUrlPage4">
                  <div class="navbar8-menu-item4">
                    <img
                      :alt="page4ImageAlt"
                      :src="page4ImageSrc"
                      class="navbar8-page4-image1"
                    />
                    <div class="navbar8-content4">
                      <span>
                        <slot name="page4">
                       
                          <div><span>Coding Projects</span></div>
                        </slot>
                      </span>
                      <span>
                        <slot name="page4Description">
                        
                          <div>
                            <span>
                              Check out my coding projects and see my technical
                              skills in action.
                            </span>
                          </div>
                        </slot>
                      </span>
                    </div>
                  </div>
                </a>
              </div> -->
            </div>
          </nav>
          <!-- <div class="navbar8-buttons2">
            <button class="thq-button-filled">
              <span>
                <slot name="action1">

                  <div class="navbar8-fragment11">
                    <span class="navbar8-text15">View Design Projects</span>
                  </div>
                </slot>
              </span>
            </button>
            <button class="thq-button-outline">
              <span>
                <slot name="action2">
             
                  <div class="navbar8-fragment23">
                    <span class="navbar8-text27"
                      >View UX/UI Design Projects</span
                    >
                  </div>
                </slot>
              </span>
            </button>
          </div> -->
        </div>
        <div class="navbar8-icon-group">
          <svg viewBox="0 0 950.8571428571428 1024" class="thq-icon-x-small">
            <path
              d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
            ></path></svg
          ><svg viewBox="0 0 877.7142857142857 1024" class="thq-icon-x-small">
            <path
              d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
            ></path></svg
          ><svg viewBox="0 0 602.2582857142856 1024" class="thq-icon-small">
            <path
              d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
            ></path>
          </svg>
        </div>
      </div>
      <div
        v-if="link5DropdownVisible"
        class="navbar8-container7 thq-box-shadow"
      >
        <div class="navbar8-link5-menu-list">
          <a :href="linkUrlPage1">
            <div class="navbar8-menu-item5">
              <img
                :alt="page1ImageAlt"
                :src="page1ImageSrc"
                class="navbar8-page1-image2 thq-img-ratio-1-1"
              />
              <div class="navbar8-content5">
                <span>
                  <slot name="page1">
                    <!--Default content for page1-->
                    <div class="navbar8-fragment13">
                      <span class="navbar8-text17 thq-body-large">Home</span>
                    </div>
                  </slot>
                </span>
                <span>
                  <slot name="page1Description">
                    <!--Default content for page1Description-->
                    <div class="navbar8-fragment18">
                      <span class="navbar8-text22 thq-body-small">
                        Welcome to my personal website showcasing my work and
                        projects.
                      </span>
                    </div>
                  </slot>
                </span>
              </div>
            </div>
          </a>
          <a :href="linkUrlPage2">
            <div class="navbar8-menu-item6">
              <img
                :alt="page2ImageAlt"
                :src="page2ImageSrc"
                class="navbar8-page2-image2 thq-img-ratio-1-1"
              />
              <div class="navbar8-content6">
                <span>
                  <slot name="page2">
                    <!--Default content for page2-->
                    <div class="navbar8-fragment16">
                      <span class="navbar8-text20 thq-body-large">
                        Design Projects
                      </span>
                    </div>
                  </slot>
                </span>
                <span>
                  <slot name="page2Description">
                    <!--Default content for page2Description-->
                    <div class="navbar8-fragment19">
                      <span class="navbar8-text23 thq-body-small">
                        Explore my design projects and see my creative process.
                      </span>
                    </div>
                  </slot>
                </span>
              </div>
            </div>
          </a>
          <a :href="linkUrlPage3">
            <div class="navbar8-menu-item7">
              <img
                :alt="page3ImageAlt"
                :src="page3ImageSrc"
                class="navbar8-page3-image2 thq-img-ratio-1-1"
              />
              <div class="navbar8-content7">
                <span>
                  <slot name="page3">
                    <!--Default content for page3-->
                    <div class="navbar8-fragment21">
                      <span class="navbar8-text25 thq-body-large">
                        UX/UI Design Projects
                      </span>
                    </div>
                  </slot>
                </span>
                <span>
                  <slot name="page3Description">
                    <!--Default content for page3Description-->
                    <div class="navbar8-fragment22">
                      <span class="navbar8-text26 thq-body-small">
                        Discover my UX/UI design projects and how I approach
                        user experience.
                      </span>
                    </div>
                  </slot>
                </span>
              </div>
            </div>
          </a>
          <a :href="linkUrlPage4">
            <div class="navbar8-menu-item8">
              <img
                :alt="page4ImageAlt"
                :src="page4ImageSrc"
                class="navbar8-page4-image2 thq-img-ratio-1-1"
              />
              <div class="navbar8-content8">
                <span>
                  <slot name="page4">
                    <!--Default content for page4-->
                    <div class="navbar8-fragment15">
                      <span class="navbar8-text19 thq-body-large">
                        Coding Projects
                      </span>
                    </div>
                  </slot>
                </span>
                <span>
                  <slot name="page4Description">
                    <!--Default content for page4Description-->
                    <div class="navbar8-fragment10">
                      <span class="navbar8-text14 thq-body-small">
                        Check out my coding projects and see my technical skills
                        in action.
                      </span>
                    </div>
                  </slot>
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </header>
    <div
      @click="link5DropdownVisible = false"
      v-if="link5DropdownVisible"
      class="navbar8-container8"
    ></div>
  </header>
</template>

<script>
export default {
  name: "Navbar8",
  props: {
    linkUrlPage4: {
      type: String,
      default: "https://www.teleporthq.io",
    },
    link2Url: {
      type: String,
      default: "https://www.teleporthq.io",
    },
    page1ImageSrc: {
      type: String,
      default:
        "https://images.unsplash.com/photo-1627660080110-20045fd3875d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTkxMjg3MXw&ixlib=rb-4.0.3&q=80&w=1080",
    },
    page2ImageAlt: {
      type: String,
      default: "Image for Design Projects Page",
    },
    linkUrlPage2: {
      type: String,
      default: "https://www.teleporthq.io",
    },
    logoAlt: {
      type: String,
      default: "Logo for Personal Website",
    },
    logoSrc: {
      type: String,
      default:
        "https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original",
    },
    page3ImageAlt: {
      type: String,
      default: "Image for UX/UI Design Projects Page",
    },
    linkUrlPage1: {
      type: String,
      default: "https://www.teleporthq.io",
    },
    page4ImageSrc: {
      type: String,
      default:
        "https://images.unsplash.com/photo-1642888621621-ff7d83f3fdcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTkxMjg3MXw&ixlib=rb-4.0.3&q=80&w=1080",
    },
    linkUrlPage3: {
      type: String,
      default: "https://www.teleporthq.io",
    },
    page4ImageAlt: {
      type: String,
      default: "Image for Coding Projects Page",
    },
    page2ImageSrc: {
      type: String,
      default:
        "https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTkxMjg3MXw&ixlib=rb-4.0.3&q=80&w=1080",
    },
    page3ImageSrc: {
      type: String,
      default:
        "https://images.unsplash.com/photo-1642091335543-96bb9725f24b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTkxMjg3MXw&ixlib=rb-4.0.3&q=80&w=1080",
    },
    link1Url: {
      type: String,
      default: "https://www.teleporthq.io",
    },
    page1ImageAlt: {
      type: String,
      default: "Image for Home Page",
    },
    link3Url: {
      type: String,
      default: "https://www.teleporthq.io",
    },
  },
  data() {
    return {
      link5AccordionOpen: false,
      link5DropdownVisible: false,
    };
  },
};
</script>

<style scoped>
.navbar8-container1 {
  top: 0;
  width: 100%;
  display: flex;
  z-index: 1000;
  position: sticky;
  justify-content: center;
  background-color: var(--dl-color-theme-neutral-light);
}
.navbar8-navbar-interactive {
  width: 100%;
  display: flex;
  z-index: 100;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  padding-top: var(--dl-space-space-oneandhalfunits);
  padding-left: var(--dl-space-space-threeunits);
  padding-right: var(--dl-space-space-threeunits);
  padding-bottom: var(--dl-space-space-oneandhalfunits);
  justify-content: space-between;
}
.navbar8-image1 {
  height: 3rem;
}
.navbar8-desktop-menu {
  flex: 1;
  display: flex;
  justify-content: space-between;
}
.navbar8-links1 {
  gap: var(--dl-space-space-twounits);
  flex: 1;
  display: flex;
  align-items: center;
  margin-left: var(--dl-space-space-twounits);
  flex-direction: row;
  justify-content: center;
}
.navbar8-link4-dropdown-trigger {
  gap: 4px;
  cursor: pointer;
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
}
.navbar8-icon-container1 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
}
.navbar8-container2 {
  display: flex;
  align-items: center;
  animation-name: rotateInDownLeft;
  flex-direction: row;
  animation-delay: 0s;
  justify-content: flex-end;
  animation-duration: 500ms;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}
.navbar8-icon10 {
  width: 24px;
  height: 24px;
}
.navbar8-container3 {
  display: flex;
  align-items: center;
  animation-name: rotateInDownRight;
  flex-direction: row;
  animation-delay: 0s;
  justify-content: flex-end;
  animation-duration: 500ms;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}
.navbar8-icon12 {
  width: 24px;
  height: 24px;
}
.navbar8-buttons1 {
  gap: var(--dl-space-space-twounits);
  display: flex;
  align-items: center;
  flex-direction: row;
}
.navbar8-action11 {
  display: flex;
  flex-direction: row;
}
.navbar8-action21 {
  display: flex;
  flex-direction: row;
}
.navbar8-burger-menu {
  display: none;
}
.navbar8-icon14 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.navbar8-mobile-menu {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  display: none;
  padding: var(--dl-space-space-twounits);
  z-index: 100;
  position: absolute;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--dl-color-theme-neutral-light);
}
.navbar8-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.navbar8-top {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}
.navbar8-logo {
  height: 3rem;
}
.navbar8-close-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}
.navbar8-icon16 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.navbar8-links2 {
  gap: var(--dl-space-space-unit);
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-self: flex-start;
  flex-direction: column;
}
.navbar8-link4-accordion {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.navbar8-trigger {
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
}
.navbar8-icon-container2 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
}
.navbar8-container4 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
}
.navbar8-icon18 {
  width: 24px;
  height: 24px;
}
.navbar8-container5 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
}
.navbar8-icon20 {
  width: 24px;
  height: 24px;
}
.navbar8-container6 {
  width: 100%;
  display: grid;
  grid-gap: var(--dl-space-space-halfunit);
  grid-template-columns: 1fr;
}
.navbar8-menu-item1 {
  gap: var(--dl-space-space-unit);
  width: 100%;
  cursor: pointer;
  display: flex;
  padding: var(--dl-space-space-oneandhalfunits);
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
}
.navbar8-page1-image1 {
  width: 50px;
  height: 50px;
}
.navbar8-content1 {
  width: 340px;
  display: flex;
  flex-grow: 1;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
}
.navbar8-menu-item2 {
  gap: var(--dl-space-space-unit);
  width: 100%;
  cursor: pointer;
  display: flex;
  padding: var(--dl-space-space-oneandhalfunits);
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
}
.navbar8-page2-image1 {
  width: 50px;
  height: 50px;
}
.navbar8-content2 {
  width: 340px;
  display: flex;
  flex-grow: 1;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
}
.navbar8-menu-item3 {
  gap: var(--dl-space-space-unit);
  width: 100%;
  cursor: pointer;
  display: flex;
  padding: var(--dl-space-space-oneandhalfunits);
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
}
.navbar8-page3-image1 {
  width: 50px;
  height: 50px;
}
.navbar8-content3 {
  width: 340px;
  display: flex;
  flex-grow: 1;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
}
.navbar8-menu-item4 {
  gap: var(--dl-space-space-unit);
  width: 100%;
  cursor: pointer;
  display: flex;
  padding: var(--dl-space-space-oneandhalfunits);
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
}
.navbar8-page4-image1 {
  width: 50px;
  height: 50px;
}
.navbar8-content4 {
  width: 340px;
  display: flex;
  flex-grow: 1;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
}
.navbar8-buttons2 {
  gap: var(--dl-space-space-twounits);
  display: flex;
  margin-top: var(--dl-space-space-twounits);
  align-items: center;
  flex-direction: row;
}
.navbar8-icon-group {
  gap: var(--dl-space-space-twounits);
  display: flex;
}
.navbar8-container7 {
  top: 100%;
  left: 0px;
  width: 100%;
  display: flex;
  position: absolute;
  align-items: center;
  animation-name: fadeInDownBig;
  animation-delay: 0s;
  justify-content: center;
  background-color: var(--dl-color-theme-neutral-light);
  animation-duration: 300ms;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}
.navbar8-link5-menu-list {
  width: 100%;
  display: grid;
  padding: var(--dl-space-space-oneandhalfunits);
  grid-gap: var(--dl-space-space-halfunit);
  max-width: var(--dl-size-size-maxwidth);
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.navbar8-menu-item5 {
  gap: var(--dl-space-space-unit);
  width: 100%;
  cursor: pointer;
  display: flex;
  padding: var(--dl-space-space-oneandhalfunits);
  align-self: stretch;
  align-items: center;
  text-decoration: none;
}
.navbar8-page1-image2 {
  width: 30px;
  height: 30px;
}
.navbar8-content5 {
  display: flex;
  flex-grow: 1;
  align-items: flex-start;
  flex-direction: column;
}
.navbar8-menu-item6 {
  gap: var(--dl-space-space-unit);
  width: 100%;
  cursor: pointer;
  display: flex;
  padding: var(--dl-space-space-oneandhalfunits);
  align-self: stretch;
  align-items: center;
  text-decoration: none;
}
.navbar8-page2-image2 {
  width: 30px;
  height: 30px;
}
.navbar8-content6 {
  display: flex;
  flex-grow: 1;
  align-items: flex-start;
  flex-direction: column;
}
.navbar8-menu-item7 {
  gap: var(--dl-space-space-unit);
  width: 100%;
  cursor: pointer;
  display: flex;
  padding: var(--dl-space-space-oneandhalfunits);
  align-self: stretch;
  align-items: center;
  text-decoration: none;
}
.navbar8-page3-image2 {
  width: 30px;
  height: 30px;
}
.navbar8-content7 {
  display: flex;
  flex-grow: 1;
  align-items: flex-start;
  flex-direction: column;
}
.navbar8-menu-item8 {
  gap: var(--dl-space-space-unit);
  width: 100%;
  cursor: pointer;
  display: flex;
  padding: var(--dl-space-space-oneandhalfunits);
  align-self: stretch;
  align-items: center;
  text-decoration: none;
}
.navbar8-page4-image2 {
  width: 30px;
  height: 30px;
}
.navbar8-content8 {
  display: flex;
  flex-grow: 1;
  align-items: flex-start;
  flex-direction: column;
}
.navbar8-container8 {
  top: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  align-items: flex-start;
  flex-direction: column;
}
.navbar8-fragment10 {
  display: contents;
}
.navbar8-text14 {
  display: inline-block;
}
.navbar8-fragment11 {
  display: contents;
}
.navbar8-text15 {
  display: inline-block;
}
.navbar8-fragment12 {
  display: contents;
}
.navbar8-text16 {
  display: inline-block;
}
.navbar8-fragment13 {
  display: contents;
}
.navbar8-text17 {
  display: inline-block;
  font-style: normal;
  font-weight: 600;
}
.navbar8-fragment14 {
  display: contents;
}
.navbar8-text18 {
  display: inline-block;
  text-decoration: none;
}
.navbar8-fragment15 {
  display: contents;
}
.navbar8-text19 {
  display: inline-block;
  font-style: normal;
  font-weight: 600;
}
.navbar8-fragment16 {
  display: contents;
}
.navbar8-text20 {
  display: inline-block;
  font-style: normal;
  font-weight: 600;
}
.navbar8-fragment17 {
  display: contents;
}
.navbar8-text21 {
  display: inline-block;
}
.navbar8-fragment18 {
  display: contents;
}
.navbar8-text22 {
  display: inline-block;
}
.navbar8-fragment19 {
  display: contents;
}
.navbar8-text23 {
  display: inline-block;
}
.navbar8-fragment20 {
  display: contents;
}
.navbar8-text24 {
  display: inline-block;
  text-decoration: none;
}
.navbar8-fragment21 {
  display: contents;
}
.navbar8-text25 {
  display: inline-block;
  font-style: normal;
  font-weight: 600;
}
.navbar8-fragment22 {
  display: contents;
}
.navbar8-text26 {
  display: inline-block;
}
.navbar8-fragment23 {
  display: contents;
}
.navbar8-text27 {
  display: inline-block;
}
@media (max-width: 767px) {
  .navbar8-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .navbar8-desktop-menu {
    display: none;
  }
  .navbar8-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .navbar8-mobile-menu {
    padding-top: var(--dl-space-space-oneandhalfunits);
    padding-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .navbar8-container6 {
    grid-gap: 0;
  }
  .navbar8-link5-menu-list {
    display: none;
  }
}
@media (max-width: 479px) {
  .navbar8-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }
  .navbar8-mobile-menu {
    padding: var(--dl-space-space-unit);
  }
}
</style>
