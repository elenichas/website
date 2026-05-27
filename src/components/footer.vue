<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-content">
                <!-- CTA Section -->
        <div class="footer-cta">
          <h3 class="cta-title">{{ $t("footer.title") }}</h3>
          <p class="cta-text">{{ $t("footer.text") }}</p>
          <a href="mailto:eleni.chasioti@gmail.com" class="btn-primary footer-btn">
            {{ $t("common.getInTouch") }}
            <span class="mdi mdi-arrow-right"></span>
          </a>
        </div>
        
        <!-- Footer Info -->
        <div class="footer-info">
          <div class="footer-links">
            <a href="https://www.linkedin.com/in/eleni-chasioti-948486194/" target="_blank" class="social-link">
              <span class="mdi mdi-linkedin"></span>
              LinkedIn
            </a>
            <a href="https://github.com/elenichas" target="_blank" class="social-link">
              <span class="mdi mdi-github"></span>
              GitHub
            </a>
          </div>
          
                    <div class="footer-meta">
            <p class="copyright">&copy; {{ currentYear }} Eleni Chasioti. {{ $t("common.allRightsReserved") }}</p>
            <p class="made-with">{{ $t("footer.madeWith") }}</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style scoped>
/* ===== FOOTER ===== */
.footer {
  border-top: 1px solid var(--color-border);
  margin-top: var(--space-24);
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--space-16) var(--space-8) var(--space-10);
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-16);
  align-items: start;
}

/* CTA Section */
.footer-cta {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.cta-title {
  font-family: var(--font-serif);
  font-size: 2.25rem;
  font-weight: var(--weight-normal);
  font-style: italic;
  color: var(--color-text);
  margin: 0;
  letter-spacing: -0.01em;
  line-height: 1.2;
}

.cta-text {
  font-size: 1rem;
  color: var(--color-text-secondary);
  margin: 0;
  line-height: 1.6;
}

.footer-btn {
  align-self: flex-start;
  margin-top: var(--space-2);
}

/* Footer Info */
.footer-info {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
  align-items: flex-end;
}

.footer-links {
  display: flex;
  gap: var(--space-3);
  align-items: center;
}

.social-link {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--color-text-secondary);
  text-decoration: none;
  font-weight: var(--weight-medium);
  font-size: 0.8125rem;
  transition: all var(--duration-normal) var(--ease-out);
  padding: 0.4rem 0.75rem;
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border-strong);
}

.social-link:hover {
  color: var(--color-text);
  border-color: var(--color-text);
  transform: translateY(-1px);
}

.social-link .mdi {
  font-size: 1.125rem;
}

.footer-meta {
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.copyright {
  font-size: 0.8125rem;
  color: var(--color-text-secondary);
  margin: 0;
  font-weight: var(--weight-medium);
}

.made-with {
  font-size: 0.75rem;
  color: var(--color-text-muted);
  margin: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .footer {
    margin-top: var(--space-16);
  }

  .footer-container {
    padding: var(--space-10) var(--space-5) var(--space-8);
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: var(--space-10);
    text-align: center;
  }

  .footer-cta {
    align-items: center;
  }

  .cta-title {
    font-size: 1.75rem;
  }

  .footer-btn {
    align-self: center;
  }

  .footer-info {
    align-items: center;
    gap: var(--space-4);
  }

  .footer-links {
    justify-content: center;
  }

  .footer-meta {
    text-align: center;
  }
}

@media (max-width: 480px) {
  .footer {
    margin-top: var(--space-12);
  }

  .footer-container {
    padding: var(--space-8) var(--space-4) var(--space-6);
  }

  .cta-title {
    font-size: 1.5rem;
  }

  .cta-text {
    font-size: 0.875rem;
  }

  .social-link {
    font-size: 0.75rem;
    padding: 0.3rem 0.7rem;
  }

  .copyright {
    font-size: 0.75rem;
  }

  .made-with {
    font-size: 0.6875rem;
  }
}
</style>
