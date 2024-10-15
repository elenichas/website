<template>
  <header class="navbar8-container1">
    <div class="navbar8-navbar-interactive">
      <!-- Logo and title container aligned to the left -->
      <div class="navbar8-logo-container">
        <router-link to="/home">
          <img
            alt="Eleni Chasioti Logo"
            :src="logoSrc"
            class="navbar8-image1"
          />
        </router-link>
        <div class="navbar8-name">Eleni <br />Chasioti</div>
      </div>

      <!-- Desktop Menu -->
      <nav class="navbar8-links1" v-if="!isMobileMenuOpen">
        <router-link to="/home" class="navbar-link">
          <i class="fas fa-home"></i>
          <span>Home</span>
        </router-link>
        <router-link to="/design" class="navbar-link">
          <i class="fas fa-palette"></i>
          <span>Design</span>
        </router-link>
        <router-link to="/development" class="navbar-link">
          <i class="fas fa-code"></i>
          <span>Development</span>
        </router-link>
        <router-link to="/about" class="navbar-link">
          <i class="fas fa-user"></i>
          <span>About Me</span>
        </router-link>
      </nav>

      <!-- Hamburger menu for mobile -->
      <div class="navbar8-burger-menu" @click="toggleMobileMenu">
        <i class="fas fa-bars"></i>
      </div>
    </div>

    <!-- Mobile Menu Dropdown -->
    <div v-if="isMobileMenuOpen" class="navbar8-mobile-menu">
      <router-link to="/" class="mobile-link" @click="closeMobileMenu">
        <i class="fas fa-home"></i> Home
      </router-link>
      <router-link to="/design" class="mobile-link" @click="closeMobileMenu">
        <i class="fas fa-palette"></i> Design
      </router-link>
      <router-link
        to="/development"
        class="mobile-link"
        @click="closeMobileMenu"
      >
        <i class="fas fa-code"></i> Development
      </router-link>
      <router-link to="/about" class="mobile-link" @click="closeMobileMenu">
        <i class="fas fa-user"></i> About Me
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isMobileMenuOpen: false,
      logoSrc: require("@/images/logo.png"), // Adjust the path to your logo image
    };
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false;
    },
  },
};
</script>

<style scoped>
.navbar8-container1 {
  z-index: 10;
  top: 0;
  width: 100%;
  display: flex;
  position: sticky;
  justify-content: center;
  background-color: #fff;
}

.navbar8-navbar-interactive {
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: space-between;
}

/* Logo and name container aligned to the left */
.navbar8-logo-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px; /* Space between logo and name */
}

.navbar8-image1 {
  height: 3rem;
}

.navbar8-name {
  font-size: 1.2rem;
  line-height: 1.5;
  color: black;
}

.navbar8-links1 {
  display: flex;
  gap: 20px;
  align-items: center;
}

.navbar-link {
  display: flex;
  align-items: center;
  gap: 5px;
  text-decoration: none;
  color: black;
}

.navbar8-burger-menu {
  display: none;
}

.hamburger-container {
  background-color: #fff;
  height: 32px;
  width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
}

/* Mobile Menu Styles */
.navbar8-mobile-menu {
  display: none;
  flex-direction: column;
  position: absolute;
  top: 70px;
  left: 0;
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.mobile-link {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 0;
  text-decoration: none;
  color: black;
}

.mobile-link i {
  margin-right: 10px;
}

@media (max-width: 767px) {
  .navbar8-links1 {
    display: none;
  }

  .navbar8-burger-menu {
    display: flex;
    cursor: pointer;
  }

  .navbar8-mobile-menu {
    display: flex;
  }
}
</style>
