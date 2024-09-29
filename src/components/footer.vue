<template>
  <footer class="footer">
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
  background-color: #2b2b2b;
  padding: 20px 0;
  text-align: center;
  color: white;
}

.footer-container {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.social-icon {
  color: white;
  font-size: 24px;
  transition: color 0.3s ease;
  text-decoration: none;
}

.social-icon:hover {
  color: #1da1f2; /* Hover color, adjust as needed */
}
</style>
