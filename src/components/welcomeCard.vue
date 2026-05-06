<template>
  <div class="welcome-card">
    <div class="welcome-text">
            <h1 class="name">Eleni Chasioti</h1>
      <h2 class="job-title-container">
        <span class="job-title">{{ animatedTitle }}</span>
      </h2>
      <p class="description">
        I design and engineer digital products that solve real problems for real people. 
        From concept to code, I bridge the gap between user needs and technical solutions.
      </p>

      <div class="cta-buttons">
        <a :href="cvLink" download class="btn-primary">
          Download Resume
          <span class="mdi mdi-download"></span>
        </a>
        <a href="mailto:eleni.chasioti@gmail.com" class="btn-secondary">
          Get in Touch
        </a>
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
      avatarSrc: require("@/images/eleniBig.png"), // Path to your avatar image
            titles: [
        "Product Engineer",
        "Product Designer", 
        "Front-end Developer",
      ], // Titles to rotate through
      currentTitleIndex: 0, // Index to track the current title
      animatedTitle: "Product Engineer", // Variable for displaying the current animated text
      isErasing: false, // Flag to track whether text is being erased
      typeSpeed: 150, // Typing speed in ms
      eraseSpeed: 100, // Erasing speed in ms
      delayBetweenTitles: 2000, // Delay before erasing and switching to the next title
    };
  },
  mounted() {
    this.startTypingAnimation();
  },
  methods: {
    startTypingAnimation() {
      let fullTitle = this.titles[this.currentTitleIndex]; // Get the current title
      let charIndex = 0;
      let isTyping = true; // Start with typing

      const type = () => {
        if (isTyping) {
          if (charIndex < fullTitle.length) {
            // Add characters one by one
            this.animatedTitle = fullTitle.substring(0, charIndex + 1);
            charIndex++;
            setTimeout(type, this.typeSpeed);
          } else {
            // Finished typing, pause before erasing
            setTimeout(() => {
              isTyping = false; // Switch to erasing
              setTimeout(type, this.eraseSpeed);
            }, this.delayBetweenTitles);
          }
                        } else {
          if (charIndex > 0) {
            // Erase characters one by one, but never make it completely empty
            const newText = fullTitle.substring(0, charIndex - 1);
            this.animatedTitle = newText || '\u00A0'; // Use non-breaking space if empty
            charIndex--;
            setTimeout(type, this.eraseSpeed);
          } else {
            // Finished erasing, switch to the next title
            this.currentTitleIndex =
              (this.currentTitleIndex + 1) % this.titles.length;
            fullTitle = this.titles[this.currentTitleIndex];
            isTyping = true; // Start typing again
            charIndex = 0; // Reset character index
            // Add a small delay before starting the next title
            setTimeout(type, 300);
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
  gap: 2rem;
}

.welcome-text {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.name {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 600;
  color: #000;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.job-title-container {
  margin: 0;
  min-height: 3rem;
  display: flex;
  align-items: center;
}

.job-title {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 400;
  color: #333;
  border-right: 2px solid #000;
  padding-right: 0.5rem;
  animation: blinkCursor 1s infinite;
  display: inline-block;
  min-height: 1.2em;
  min-width: 0.5em;
}

@keyframes blinkCursor {
  0%, 50% {
    border-right-color: #000;
  }
  51%, 100% {
    border-right-color: transparent;
  }
}

.description {
  font-size: 1.125rem;
  color: #333;
  line-height: 1.6;
  max-width: 600px;
}

.cta-buttons {
  display: flex;
  gap: 0.75rem;
  align-items: center;
  flex-wrap: wrap;
}

.btn-primary,
.btn-secondary {
  padding: 0.6rem 1.25rem;
  border-radius: 2rem;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.875rem;
  backdrop-filter: blur(12px);
}

.btn-primary {
  background: rgba(26, 26, 26, 0.85);
  color: white;
  border: 1px solid rgba(26, 26, 26, 0.9);
}

.btn-primary:hover {
  background: rgba(26, 26, 26, 0.95);
  transform: translateY(-2px);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.6);
  color: #1a1a1a;
  border: 1px solid rgba(0, 0, 0, 0.15);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.9);
  border-color: rgba(0, 0, 0, 0.3);
  transform: translateY(-2px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .welcome-card {
    text-align: center;
  }

  .welcome-text {
    gap: 1rem;
  }
  
  .cta-buttons {
    justify-content: center;
  }

  .description {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .welcome-card {
    gap: 1rem;
  }

  .welcome-text {
    gap: 0.625rem;
  }

  .job-title-container {
    min-height: 2rem;
  }

  .description {
    font-size: 0.875rem;
    line-height: 1.5;
    margin: 0;
  }

  .cta-buttons {
    flex-direction: row;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 0.25rem;
  }
  
  .btn-primary,
  .btn-secondary {
    padding: 0.5rem 1rem;
    font-size: 0.8125rem;
  }
}
</style>
