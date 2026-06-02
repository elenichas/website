<template>
  <div class="welcome-card">
    <div class="welcome-text">
            <h1 class="name">Eleni Chasioti</h1>
      <h2 class="job-title-container">
        <span class="job-title">{{ animatedTitle }}</span>
      </h2>
            <p class="description">{{ $t("home.description") }}</p>

      <div class="cta-buttons">
        <a :href="cvLink" download class="btn-primary">
          {{ $t("common.downloadResume") }}
          <span class="mdi mdi-download"></span>
        </a>
        <a href="mailto:eleni.chasioti@gmail.com" class="btn-secondary">
          {{ $t("common.getInTouch") }}
          <span class="mdi mdi-arrow-right"></span>
        </a>
        <router-link to="/playground" class="btn-ghost">
          {{ $t("common.explorePlayground") }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// Use a direct path for the CV as it's located in the public folder
const cvLink = "/cv/EleniChasiotiCV2026.pdf"; // This points to the public folder

export default {
  name: "WelcomeCard",
  data() {
    return {
            cvLink,
      currentTitleIndex: 0, // Index to track the current title
      animatedTitle: this.$t("home.roleTitles")[0], // Variable for displaying the current animated text
      isErasing: false, // Flag to track whether text is being erased
      typeSpeed: 150, // Typing speed in ms
      eraseSpeed: 100, // Erasing speed in ms
      delayBetweenTitles: 2000, // Delay before erasing and switching to the next title
      typingTimer: null,
    };
  },
  mounted() {
    this.startTypingAnimation();
  },
  beforeUnmount() {
    clearTimeout(this.typingTimer);
  },
  watch: {
    "$i18n.locale"() {
      clearTimeout(this.typingTimer);
      this.currentTitleIndex = 0;
      this.animatedTitle = this.$t("home.roleTitles")[0];
      this.startTypingAnimation();
    },
  },
  methods: {
    startTypingAnimation() {
      const titles = this.$t("home.roleTitles");
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        this.animatedTitle = titles[0];
        return;
      }
      let fullTitle = titles[this.currentTitleIndex]; // Get the current title
      let charIndex = 0;
      let isTyping = true; // Start with typing

      const type = () => {
        const latestTitles = this.$t("home.roleTitles");
        fullTitle = latestTitles[this.currentTitleIndex];
        if (isTyping) {
          if (charIndex < fullTitle.length) {
            // Add characters one by one
            this.animatedTitle = fullTitle.substring(0, charIndex + 1);
            charIndex++;
            this.typingTimer = setTimeout(type, this.typeSpeed);
          } else {
            // Finished typing, pause before erasing
            this.typingTimer = setTimeout(() => {
              isTyping = false; // Switch to erasing
              this.typingTimer = setTimeout(type, this.eraseSpeed);
            }, this.delayBetweenTitles);
          }
                        } else {
          if (charIndex > 0) {
            // Erase characters one by one, but never make it completely empty
            const newText = fullTitle.substring(0, charIndex - 1);
            this.animatedTitle = newText || '\u00A0'; // Use non-breaking space if empty
            charIndex--;
            this.typingTimer = setTimeout(type, this.eraseSpeed);
          } else {
            // Finished erasing, switch to the next title
            this.currentTitleIndex =
              (this.currentTitleIndex + 1) % titles.length;
            fullTitle = latestTitles[this.currentTitleIndex];
            isTyping = true; // Start typing again
            charIndex = 0; // Reset character index
            // Add a small delay before starting the next title
            this.typingTimer = setTimeout(type, 300);
          }
        }
      };

      type();
    },
  },
};
</script>






















































































<style scoped>
.welcome-card {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.welcome-text {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.name {
  font-family: var(--font-serif);
  font-size: clamp(2.75rem, 6vw, 4.5rem);
  font-weight: var(--weight-normal);
  font-style: italic;
  color: var(--color-text);
  line-height: 1.05;
  letter-spacing: -0.02em;
}

.job-title-container {
  margin: 0;
  min-height: 2.5rem;
  display: flex;
  align-items: center;
}

.job-title {
  font-family: var(--font-sans);
  font-size: clamp(1.125rem, 3vw, 1.5rem);
  font-weight: var(--weight-normal);
  color: var(--color-text-secondary);
  border-right: 1.5px solid var(--color-text);
  padding-right: 0.375rem;
  animation: blinkCursor 1s infinite;
  display: inline-block;
  min-height: 1.2em;
  min-width: 0.5em;
  letter-spacing: -0.01em;
}

@keyframes blinkCursor {
  0%, 50% {
    border-right-color: var(--color-text);
  }
  51%, 100% {
    border-right-color: transparent;
  }
}

.description {
  font-size: 1rem;
  color: var(--color-text-secondary);
  line-height: 1.7;
  max-width: 540px;
}

.cta-buttons {
  display: flex;
  gap: 0.75rem;
  align-items: center;
  flex-wrap: wrap;
  margin-top: var(--space-2);
}

/* Buttons use global .btn-primary / .btn-secondary from style.css */

/* Responsive */
@media (max-width: 768px) {
  .welcome-card {
    text-align: center;
  }

  .welcome-text {
    gap: 0.75rem;
    align-items: center;
  }

  .job-title-container {
    min-height: 2rem;
    justify-content: center;
  }

  .description {
    font-size: 0.9375rem;
    max-width: 100%;
  }

  .cta-buttons {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .welcome-card {
    gap: 0.75rem;
  }

  .welcome-text {
    gap: 0.625rem;
  }

  .job-title-container {
    min-height: 1.5rem;
  }

  .description {
    font-size: 0.8125rem;
    line-height: 1.6;
  }

  .cta-buttons {
    gap: 0.5rem;
    margin-top: var(--space-1);
  }
}
</style>
