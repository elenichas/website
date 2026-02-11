<template>
  <header class="modern-navbar">
    <div class="navbar-container">
      <!-- Logo/Brand -->
      <div class="brand">
        <router-link to="/" class="brand-link">
          <span class="brand-initial">E</span>
          <span class="brand-name">Eleni Chasioti</span>
        </router-link>
      </div>

      <!-- Desktop Navigation -->
      <nav class="desktop-nav">
        <router-link to="/" class="nav-link" exact-active-class="active">
          Home
        </router-link>
        <router-link to="/products" class="nav-link" active-class="active">
          Products
        </router-link>
        <router-link to="/craft" class="nav-link" active-class="active">
          Craft
        </router-link>
        <router-link to="/about" class="nav-link" active-class="active">
          About
        </router-link>
      </nav>
      
      <!-- Mobile Menu Button -->
      <button class="mobile-menu-btn" @click="toggleMobileMenu" aria-label="Toggle menu">
        <span class="hamburger-line" :class="{ open: isMobileMenuOpen }"></span>
        <span class="hamburger-line" :class="{ open: isMobileMenuOpen }"></span>
        <span class="hamburger-line" :class="{ open: isMobileMenuOpen }"></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div class="mobile-menu" :class="{ open: isMobileMenuOpen }">
      <nav class="mobile-nav">
        <router-link to="/" class="mobile-nav-link" @click="closeMobileMenu">
          Home
        </router-link>
        <router-link to="/products" class="mobile-nav-link" @click="closeMobileMenu">
          Products
        </router-link>
        <router-link to="/craft" class="mobile-nav-link" @click="closeMobileMenu">
          Craft
        </router-link>
        <router-link to="/about" class="mobile-nav-link" @click="closeMobileMenu">
          About
        </router-link>
        <a href="mailto:eleni.chasioti@gmail.com" class="btn-primary mobile-cta" @click="closeMobileMenu">
          Let's Talk
        </a>
      </nav>
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
/* Minimal Editorial Navbar */
.modern-navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid #e0e0e0;
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
}

/* Brand */
.brand {
  display: flex;
  align-items: center;
}

.brand-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: #000;
}

.brand-initial {
  width: 40px;
  height: 40px;
  background: #000;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.25rem;
}

.brand-name {
  font-weight: 600;
  font-size: 1.125rem;
  color: #000;
}

/* Desktop Navigation */
.desktop-nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  font-weight: 500;
  font-size: 0.9375rem;
  color: #666;
  text-decoration: none;
  padding: 0.5rem 0;
  position: relative;
  transition: color 0.3s ease;
}

.nav-link:hover,
.nav-link.active {
  color: #000;
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 2px;
  background: #000;
  border-radius: 2px;
}

/* Mobile Menu Button */
.mobile-menu-btn {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.hamburger-line {
  width: 24px;
  height: 2px;
  background: #000;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.hamburger-line.open:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.hamburger-line.open:nth-child(2) {
  opacity: 0;
}

.hamburger-line.open:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* Mobile Menu */
.mobile-menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid #e0e0e0;
  transform: translateY(-100%);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.mobile-menu.open {
  transform: translateY(0);
  opacity: 1;
  visibility: visible;
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1.5rem;
}

.mobile-nav-link {
  font-weight: 500;
  font-size: 1.125rem;
  color: #000;
  text-decoration: none;
  padding: 0.5rem 0;
}

.mobile-cta {
  margin-top: 1rem;
  align-self: flex-start;
}

/* Responsive Design */
@media (max-width: 768px) {
  .navbar-container {
    padding: 0 1.5rem;
  }
  
  .desktop-nav,
  .nav-cta {
    display: none;
  }
  
  .mobile-menu-btn {
    display: flex;
  }
  
  .brand-name {
    display: none;
  }
}

@media (max-width: 480px) {
  .navbar-container {
    height: 70px;
    padding: 0 1.5rem;
  }
}
</style>
