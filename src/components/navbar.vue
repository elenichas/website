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
          Engineering
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
          Engineering
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
/* ===== GLASS NAVBAR ===== */
.modern-navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--glass-bg-strong);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border-bottom: 1px solid var(--color-border);
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-8);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}

/* Brand */
.brand-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: var(--color-text);
}

.brand-initial {
  width: 36px;
  height: 36px;
  background: var(--color-text);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-sm);
  font-weight: var(--weight-semibold);
  font-size: 1.125rem;
  font-family: var(--font-serif);
  font-style: italic;
}

.brand-name {
  font-weight: var(--weight-medium);
  font-size: 0.9375rem;
  color: var(--color-text);
  letter-spacing: -0.01em;
}

/* Desktop Navigation */
.desktop-nav {
  display: flex;
  align-items: center;
  gap: 2.5rem;
}

.nav-link {
  font-weight: var(--weight-medium);
  font-size: 0.8125rem;
  color: var(--color-text-muted);
  text-decoration: none;
  padding: 0.375rem 0;
  position: relative;
  transition: color var(--duration-normal) var(--ease-out);
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

.nav-link:hover,
.nav-link.active {
  color: var(--color-text);
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 1.5px;
  background: var(--color-text);
  border-radius: 2px;
}

/* Mobile Menu Button */
.mobile-menu-btn {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.hamburger-line {
  width: 22px;
  height: 1.5px;
  background: var(--color-text);
  border-radius: 2px;
  transition: all var(--duration-normal) var(--ease-out);
}

.hamburger-line.open:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger-line.open:nth-child(2) {
  opacity: 0;
}

.hamburger-line.open:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* Mobile Menu */
.mobile-menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--glass-bg-strong);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border-bottom: 1px solid var(--color-border);
  transform: translateY(-100%);
  opacity: 0;
  visibility: hidden;
  transition: all var(--duration-normal) var(--ease-out);
}

.mobile-menu.open {
  transform: translateY(0);
  opacity: 1;
  visibility: visible;
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  padding: var(--space-8);
  gap: var(--space-6);
}

.mobile-nav-link {
  font-weight: var(--weight-medium);
  font-size: 1rem;
  color: var(--color-text);
  text-decoration: none;
  padding: 0.375rem 0;
  letter-spacing: -0.01em;
}

.mobile-cta {
  margin-top: var(--space-4);
  align-self: flex-start;
}

/* Responsive */
@media (max-width: 768px) {
  .navbar-container {
    padding: 0 var(--space-5);
    height: 64px;
  }

  .desktop-nav {
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
    height: 60px;
    padding: 0 var(--space-4);
  }
}
</style>
