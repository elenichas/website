<template>
  <div class="welcome-card">
    <div class="welcome-text">
      <p>Hi 👋, my name is</p>
      <h1 class="name">Eleni Chasioti</h1>
      <h2>
        <span class="job-title">{{ animatedTitle }}</span>
      </h2>
      <p class="description">
        Constantly focused on learning and expanding my expertise, crafting
        ever-improving, high-performing solutions.
      </p>
      <!-- Use router-link to navigate to the "About" page -->
      <router-link to="/about" class="about-me-btn"> ABOUT ME </router-link>
    </div>
    <div class="welcome-avatar">
      <img :src="avatarSrc" alt="Eleni Chasioti Avatar" class="avatar-img" />
    </div>
  </div>
</template>

<script>
export default {
  name: "WelcomeCard",
  data() {
    return {
      avatarSrc: require("@/images/avatar.png"), // Path to your avatar image
      titles: [
        "I'm an Architect",
        "I am a Frontend Developer",
        "I am a Product Designer",
      ], // Titles to rotate through
      currentTitleIndex: 0, // Index to track the current title
      animatedTitle: "", // Variable for displaying the current animated text
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
.welcome-card {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 20px;
  background-color: #f9f9f9;
  max-width: 800px;
  margin: 0 auto;
}

.welcome-text {
  flex: 1;
  padding-right: 20px;
  text-align: right; /* Add this line to align the text to the right */
  width: 300px;
}

.welcome-text p {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.name {
  font-size: 2.5rem;
  font-weight: bold;
  color: #6c63ff; /* Customize your color */
  margin-bottom: 10px;
}

h2 {
  font-size: 1.5rem;
  color: #333;
}

.job-title {
  color: #000;
  font-weight: bold;
  border-right: 2px solid black; /* Cursor effect */
  display: inline-block;
  padding-right: 5px;
  animation: blinkCursor 0.7s steps(1) infinite;
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
  margin-top: 10px;
  font-size: 1rem;
  color: #555;
}

.about-me-btn {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  border-radius: 10px;
  color: white;
  background-color: #000;
  text-decoration: none;
  cursor: pointer;
  font-size: 1rem;
}

.welcome-avatar {
  flex: 0.5;
  text-align: center;
}

.avatar-img {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
