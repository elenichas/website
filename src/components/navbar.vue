<template>
  <header class="navbar8-container1">
    <div class="navbar8-navbar-interactive">
      <!-- Logo and title container aligned to the left -->
      <div class="navbar8-logo-container">
        <router-link to="/"> </router-link>
        <span class="initial">E.</span>
      </div>

      <!-- Desktop Menu (only shown on large screens) -->
      <nav class="navbar8-links1">
        <router-link to="/" class="navbar-link">
          <div>
            <span class="mdi mdi-circle-medium"></span>
            <span>HOME</span>
          </div>
        </router-link>
        <router-link to="/design" class="navbar-link">
          <div>
            <span>DESIGN</span>
          </div>
        </router-link>
        <router-link to="/development" class="navbar-link">
          <div>
            <span>DEVELOPMENT</span>
          </div>
        </router-link>
      </nav>

      <!-- Hamburger menu for mobile (shown on small screens) -->
      <div class="navbar8-burger-menu" @click="toggleMobileMenu">
        <span class="mdi mdi-menu"></span>
      </div>
    </div>

    <!-- Mobile Menu Dropdown (only shown when hamburger is clicked) -->
    <div v-if="isMobileMenuOpen" class="navbar8-mobile-menu">
      <router-link to="/" class="mobile-link" @click="closeMobileMenu">
        Home
      </router-link>
      <router-link to="/design" class="mobile-link" @click="closeMobileMenu">
        Design
      </router-link>
      <router-link
        to="/development"
        class="mobile-link"
        @click="closeMobileMenu"
      >
        Development
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
/* Initial Styles */
.initial {
  font-size: 4rem;
  font-weight: bold;
}

/* Style for links in the navigation bar */
nav div {
  font-size: 1.5rem;
  font-weight: normal;
  text-decoration: none;
  transition: font-weight 0.3s, text-decoration 0.3s;
  color: rgb(36, 36, 36);
}

nav div:hover {
  font-weight: bold;
  text-decoration: underline;
  color: rgb(0, 0, 0);
}

.navbar8-container1 {
  z-index: 10;
  top: 0;
  width: 100%;
  display: flex;
  position: sticky;
  justify-content: center;
}

.navbar8-navbar-interactive {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: space-between;
}

/* Logo container aligned to the left */
.navbar8-logo-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
}

/* Desktop navigation links */
.navbar8-links1 {
  display: flex;
  gap: 20px;
  align-items: center;
}

/* Hide the burger menu on large screens */
.navbar8-burger-menu {
  display: none;
  font-size: 2rem;
}

/* Mobile Menu Styles */
.navbar8-mobile-menu {
  display: none;
  flex-direction: column;
  position: absolute;
  top: 90px;
  left: 0;
  width: 100%;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  justify-content: flex-end;

  z-index: 100;
}

.mobile-link {
  padding: 15px 0;
  text-decoration: none;
  color: black;
}

/* Responsive styling for smaller screens */
@media (max-width: 767px) {
  /* Hide desktop navigation links */
  .navbar8-links1 {
    display: none;
  }

  /* Show the hamburger menu */
  .navbar8-burger-menu {
    display: flex;
    cursor: pointer;
  }

  /* Show mobile menu when open */
  .navbar8-mobile-menu {
    display: flex;
  }
}
</style>
