<template>
  <header class="modern-navbar">
    <div class="navbar-container">
      <!-- Logo/Brand -->
      <div class="brand">
        <router-link to="/" class="brand-link">
          <span class="brand-initial" aria-label="EC monogram">
            <span class="monogram-letter monogram-letter-e">E</span>
            <span class="monogram-letter monogram-letter-c">C</span>
          </span>
          <span class="brand-name">Eleni Chasioti</span>
        </router-link>
      </div>

      <!-- Desktop Navigation -->
      <nav class="desktop-nav">
        <router-link to="/" class="nav-link" exact-active-class="active">
          {{ $t("nav.home") }}
        </router-link>
        <router-link to="/craft" class="nav-link" active-class="active">
          {{ $t("nav.craft") }}
        </router-link>
        <router-link to="/playground" class="nav-link" active-class="active">
          {{ $t("nav.playground") }}
        </router-link>
        <router-link to="/about" class="nav-link" active-class="active">
          {{ $t("nav.about") }}
        </router-link>
      </nav>

      <div class="language-switcher" :aria-label="$t('nav.languageLabel')">
        <button
          v-for="(locale, key) in $locales"
          :key="key"
          class="language-option"
          :class="{ active: $i18n.locale === key }"
          :aria-label="key === 'en' ? $t('nav.switchToEnglish') : $t('nav.switchToGreek')"
          :aria-pressed="$i18n.locale === key"
          @click="changeLanguage(key)"
        >
          {{ locale.shortLabel }}
        </button>
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
          {{ $t("nav.home") }}
        </router-link>
        <router-link to="/craft" class="mobile-nav-link" @click="closeMobileMenu">
          {{ $t("nav.craft") }}
        </router-link>
        <router-link to="/playground" class="mobile-nav-link" @click="closeMobileMenu">
          {{ $t("nav.playground") }}
        </router-link>
        <router-link to="/about" class="mobile-nav-link" @click="closeMobileMenu">
          {{ $t("nav.about") }}
        </router-link>
        <div class="language-switcher language-switcher-mobile" :aria-label="$t('nav.languageLabel')">
          <button
            v-for="(locale, key) in $locales"
            :key="key"
            class="language-option"
            :class="{ active: $i18n.locale === key }"
            :aria-label="key === 'en' ? $t('nav.switchToEnglish') : $t('nav.switchToGreek')"
            :aria-pressed="$i18n.locale === key"
            @click="changeLanguage(key)"
          >
            {{ locale.shortLabel }}
          </button>
        </div>
        <a href="mailto:eleni.chasioti@gmail.com" class="btn-primary mobile-cta" @click="closeMobileMenu">
          {{ $t("nav.letsTalk") }}
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
    changeLanguage(locale) {
      this.$setLocale(locale);
      this.closeMobileMenu();
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
  position: relative;
  width: 38px;
  height: 38px;
  color: var(--color-text);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0;
  font-family: var(--font-serif);
  font-style: italic;
  background: transparent;
  transition:
    color var(--duration-normal) var(--ease-out),
    transform var(--duration-normal) var(--ease-out);
}

.brand-link:hover .brand-initial {
  transform: translateY(-1px);
  color: rgba(17, 17, 17, 0.72);
}

.monogram-letter {
  position: relative;
  font-size: 1.5rem;
  font-weight: var(--weight-normal);
  line-height: 0.9;
  letter-spacing: 0;
}

.monogram-letter-e {
  transform: translateX(2px) rotate(-5deg);
  z-index: 2;
}

.monogram-letter-c {
  margin-left: -0.2rem;
  transform: translateY(0.05rem) rotate(5deg);
  z-index: 1;
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

.language-switcher {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem;
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-sm);
}

.language-option {
  min-width: 2.1rem;
  height: 1.8rem;
  border: 0;
  border-radius: calc(var(--radius-sm) - 2px);
  background: transparent;
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: 0.72rem;
  font-weight: var(--weight-semibold);
  letter-spacing: 0;
  transition:
    background var(--duration-normal) var(--ease-out),
    color var(--duration-normal) var(--ease-out);
}

.language-option:hover,
.language-option.active {
  background: var(--color-text);
  color: #ffffff;
}

.language-switcher-mobile {
  align-self: flex-start;
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
  background: rgba(255, 255, 255, 0.86);
  backdrop-filter: blur(28px) saturate(165%);
  -webkit-backdrop-filter: blur(28px) saturate(165%);
  border-bottom: 1px solid rgba(17, 17, 17, 0.1);
  box-shadow: 0 1.5rem 4rem rgba(17, 17, 17, 0.08);
  transform: translateY(-100%);
  opacity: 0;
  visibility: hidden;
  transition: all var(--duration-normal) var(--ease-out);
  overflow: hidden;
}

.mobile-menu::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.78));
}

.mobile-menu.open {
  transform: translateY(0);
  opacity: 1;
  visibility: visible;
}

.mobile-nav {
  position: relative;
  z-index: 1;
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

  .navbar-container > .language-switcher {
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

  .brand-initial {
    width: 34px;
    height: 34px;
  }

  .monogram-letter {
    font-size: 1.34rem;
  }
}
</style>
