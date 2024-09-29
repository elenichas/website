<template>
  <footer class="footer">
    <div>
      <div class="text-footer-copyright">
        © 2024 Eleni Chasioti All Rights Reserved.
      </div>
      <div class="text-under-copyright">
        Made with love and iced lattes( no sugar) 1,2024
      </div>
      <div class="text-under-copyright-small">
        Last updated by Eleni on October 1,2024
      </div>
    </div>

    <div class="footer-container">
      <a
        href="https://www.facebook.com/eleni.xasiwth?locale=en_GB"
        target="_blank"
        class="social-icon"
      >
        <i class="fab fa-facebook-f"></i>
        <!-- Font Awesome Icon -->
      </a>
      <a
        href="https://www.instagram.com/your-profile"
        target="_blank"
        class="social-icon"
      >
        <i class="fab fa-instagram"></i>
        <!-- Font Awesome Icon -->
      </a>
      <a
        href="https://twitter.com/your-profile"
        target="_blank"
        class="social-icon"
      >
        <i class="fab fa-twitter"></i>
        <!-- Font Awesome Icon -->
      </a>
      <a
        href="https://www.linkedin.com/in/eleni-chasioti-948486194/"
        target="_blank"
        class="social-icon"
      >
        <i class="fab fa-linkedin-in"></i>
        <!-- Font Awesome Icon -->
      </a>
      <a
        href="https://github.com/elenichas"
        target="_blank"
        class="social-icon"
      >
        <i class="fab fa-github"></i>
        <!-- Font Awesome Icon for GitHub -->
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
.footer {
  width: 100%;
  padding: 20px 0;
  text-align: center;
  color: var(--dl-color-theme-neutral-light);
  justify-content: center;
  background-color: var(--dl-color-theme-neutral-dark);
}

.footer-container {
  display: flex;
  justify-content: center;
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
  color: white;
  font-size: 24px;
  transition: color 0.3s ease;
  text-decoration: none;
}

.social-icon:hover {
  color: #1da1f2;
  /* Hover color, adjust as needed */
}
</style>
