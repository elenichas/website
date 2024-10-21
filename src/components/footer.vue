<template>
  <footer class="footer">
    <button class="custom-button">
      <a href="mailto:eleni.chasioti.19@alumni.ucl.ac.uk" class="button-text"
        >Let's talk</a
      >
      <div class="button-icon">
        <span class="mdi mdi-arrow-bottom-right"></span>
      </div>
    </button>
    <div>
      <div class="text-footer-copyright">
        © 2024 Eleni Chasioti All Rights Reserved.
      </div>
      <div class="text-under-copyright">
        Made with love and lots of esspreso.
      </div>
      <div class="text-under-copyright-small">
        Last updated by Eleni on October, 2024
      </div>
    </div>

    <div class="footer-container">
      <a
        href="https://www.linkedin.com/in/eleni-chasioti-948486194/"
        target="_blank"
        class="social-icon"
      >
        <i class="fab fa-linkedin-in"></i>
        <span class="mdi mdi-linkedin"></span>
      </a>
      <a
        href="https://github.com/elenichas"
        target="_blank"
        class="social-icon"
      >
        <i class="fab fa-github"></i>

        <span class="mdi mdi-github"></span>
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
.custom-button {
  margin-bottom: 24px;
}

.footer {
  width: 100%;
  margin-top: 32px;
  color: var(--dl-color-theme-neutral-dark);
}

.footer-container {
  display: flex;
  gap: 20px;
  padding-top: 1%;
}

.text-under-copyright {
  opacity: 0.5;
  letter-spacing: 0.2px;
  text-transform: none;
  font-family: Neue Montreal, sans-serif;
}

.text-under-copyright-small {
  opacity: 0.5;
  letter-spacing: 0.2px;
  text-transform: none;
  font-family: Neue Montreal, sans-serif;
  font-size: 12px;
}

.text-footer-copyright {
  letter-spacing: 0.2px;
  font-family: Neue Montreal, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
}

.social-icon {
  color: rgb(0, 0, 0);
  font-size: 24px;
  transition: color 0.3s ease;
  text-decoration: none;
}

.social-icon:hover {
  color: #a1a1a1;
  /* Hover color, adjust as needed */
}
</style>
