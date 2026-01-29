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

      <!-- CTA Button -->
      <div class="nav-cta">
        <a href="mailto:eleni.chasioti@gmail.com" class="btn-primary">
          Let's Talk
        </a>
      </div>

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
/* Modern Navbar Styles */
.modern-navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border-light);
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-lg);
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
  gap: var(--space-sm);
  text-decoration: none;
  color: var(--text-primary);
}

.brand-initial {
  width: 40px;
  height: 40px;
  background: var(--text-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-lg);
  font-weight: var(--font-weight-bold);
  font-size: 1.25rem;
}

.brand-name {
  font-weight: var(--font-weight-semibold);
  font-size: 1.125rem;
  color: var(--text-primary);
}

/* Desktop Navigation */
.desktop-nav {
  display: flex;
  align-items: center;
  gap: var(--space-xl);
}

.nav-link {
  font-weight: var(--font-weight-medium);
  font-size: 0.9375rem;
  color: var(--text-secondary);
  text-decoration: none;
  padding: var(--space-sm) 0;
  position: relative;
  transition: color var(--transition-fast);
}

.nav-link:hover,
.nav-link.active {
  color: var(--text-primary);
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--text-primary);
  border-radius: var(--radius-full);
}

/* CTA Button */
.nav-cta {
  display: flex;
  align-items: center;
}

/* Mobile Menu Button */
.mobile-menu-btn {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--space-sm);
}

.hamburger-line {
  width: 24px;
  height: 2px;
  background: var(--text-primary);
  border-radius: var(--radius-full);
  transition: all var(--transition-normal);
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
  border-bottom: 1px solid var(--border-light);
  transform: translateY(-100%);
  opacity: 0;
  visibility: hidden;
  transition: all var(--transition-normal);
}

.mobile-menu.open {
  transform: translateY(0);
  opacity: 1;
  visibility: visible;
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  padding: var(--space-xl) var(--space-lg);
  gap: var(--space-lg);
}

.mobile-nav-link {
  font-weight: var(--font-weight-medium);
  font-size: 1.125rem;
  color: var(--text-primary);
  text-decoration: none;
  padding: var(--space-sm) 0;
}

.mobile-cta {
  margin-top: var(--space-md);
  align-self: flex-start;
}

/* Responsive Design */
@media (max-width: 768px) {
  .navbar-container {
    padding: 0 var(--space-md);
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
    padding: 0 var(--space-md);
  }
}
</style>
