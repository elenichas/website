<template>
  <div class="welcome-card">
    <div class="welcome-text">
      <h1 class="name">I am Eleni Chasioti</h1>
      <h2>
        <span class="job-title">{{ animatedTitle }}</span>
      </h2>

      <button class="custom-button">
        <a :href="cvLink" download class="button-text">Download CV</a>
        <div class="button-icon">
          <span class="mdi mdi-arrow-bottom-right"></span>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
// Use a direct path for the CV as it's located in the public folder
const cvLink = "/cv/Eleni_Chasioti_CV.pdf"; // This points to the public folder

export default {
  name: "WelcomeCard",
  data() {
    return {
      cvLink,
      avatarSrc: require("@/images/eleniBig.png"), // Path to your avatar image
      titles: [
        "an Architect",
        "a Computational Designer",
        "a Software Developer",
      ], // Titles to rotate through
      currentTitleIndex: 0, // Index to track the current title
      animatedTitle: "...", // Variable for displaying the current animated text
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
            // Erase characters one by one
            this.animatedTitle = fullTitle.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(type, this.eraseSpeed);
          } else {
            // Finished erasing, switch to the next title
            this.currentTitleIndex =
              (this.currentTitleIndex + 1) % this.titles.length;
            fullTitle = this.titles[this.currentTitleIndex];
            isTyping = true; // Start typing again
            setTimeout(type, this.typeSpeed);
          }
        }
      };

      type();
    },
  },
};
</script>

<style scoped>
.custom-button {
  margin-top: 20px;
  display: flex;
  align-items: center;
  padding: 8px 6px 8px 24px;
  border: 2px solid black;
  border-radius: 50px;
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s, color 0.3;
  transform: translate3d(0, 0, 0);
  will-change: transform;
}

.button-text {
  font-size: 14px;
  margin-right: 15px;
  color: black;
}

.button-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background-color: rgb(0, 0, 0);
  color: white;
  border-radius: 50%;
}

.icon {
  width: 16px;
  height: 16px;
}

.custom-button:hover {
  background-color: black;
  color: white;
  transform: translate3d(2px, -2px, 4px);
  transform-style: preserve-3d;
}

.custom-button:hover .button-text {
  color: white;
}

.download-btn {
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 25px 0 0 25px;
  font-size: 1em;
  cursor: pointer;
  margin: 2px;
  transition: background-color 0.3s ease;
}

.contact-btn {
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 0 25px 25px 0;
  font-size: 1em;
  cursor: pointer;
  margin: 5px;
  transition: background-color 0.3s ease;
}

.download-btn i {
  margin-right: 10px;
}

.download-btn:hover {
  background-color: #555;
}

.welcome-card {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}

.welcome-text {
  flex: 1;
  padding-right: 20px;
}

.welcome-text p {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.name {
  font-size: 4vw;
  font-weight: bold;
  color: #000000;
  /* Customize your color */
  margin-bottom: 10px;
}

.job-title {
  color: #000;
  font-weight: bold;
  border-right: 2px solid black;
  /* Cursor effect */
  display: inline-block;
  padding-right: 5px;
  animation: blinkCursor 0.7s steps(1) infinite;
  font-size: 3vw;
  color: #333;
  height: fit-content;
}

/* Cursor blinking animation */
@keyframes blinkCursor {
  0% {
    border-right-color: black;
  }

  50% {
    border-right-color: transparent;
  }

  100% {
    border-right-color: black;
  }
}

.description {
  padding: 10px;
  font-size: 1rem;
  color: #555;
}

.about-me-btn {
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

.about-me-btn:hover {
  background-color: #555;
}

.welcome-avatar {
  flex: 0.5;
  text-align: center;
  justify-items: center;
  padding-bottom: 5%;
}

.avatar-img {
  width: 15%;
  height: 15%;
  object-fit: cover;
}
</style>
