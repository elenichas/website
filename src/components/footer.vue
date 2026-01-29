<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-content">
                <!-- CTA Section -->
        <div class="footer-cta">
          <h3 class="cta-title">Let's connect</h3>
          <p class="cta-text">I'd love to discuss ideas, share insights, or explore future opportunities.</p>
          <a href="mailto:eleni.chasioti@gmail.com" class="btn-primary footer-btn">
            Get in Touch
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
            <p class="copyright">© 2024 Eleni Chasioti. All rights reserved.</p>
            <p class="made-with">Made with ❤️ and lots of espresso</p>
            <p class="last-updated">Last updated January 2026</p>
          </div>
        </div>
      </div>
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
  background: var(--secondary-bg);
  border-top: 1px solid var(--border-light);
  margin-top: var(--space-4xl);
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--space-4xl) var(--space-lg) var(--space-2xl);
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4xl);
  align-items: start;
}

/* CTA Section */
.footer-cta {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.cta-title {
  font-size: 2rem;
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
  margin: 0;
  letter-spacing: -0.01em;
}

.cta-text {
  font-size: 1.125rem;
  color: var(--text-secondary);
  margin: 0;
  line-height: 1.6;
}

.footer-btn {
  align-self: flex-start;
  margin-top: var(--space-sm);
}

/* Footer Info */
.footer-info {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
  align-items: flex-end;
}

.footer-links {
  display: flex;
  gap: var(--space-lg);
  align-items: center;
}

.social-link {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: var(--font-weight-medium);
  transition: color var(--transition-fast);
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-md);
  border: 1px solid transparent;
}

.social-link:hover {
  color: var(--text-primary);
  background: var(--primary-bg);
  border-color: var(--border-light);
}

.social-link .mdi {
  font-size: 1.25rem;
}

.footer-meta {
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.copyright {
  font-size: 0.9375rem;
  color: var(--text-primary);
  margin: 0;
  font-weight: var(--font-weight-medium);
}

.made-with,
.last-updated {
  font-size: 0.875rem;
  color: var(--text-muted);
  margin: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .footer-container {
    padding: var(--space-2xl) var(--space-md);
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    gap: var(--space-2xl);
    text-align: center;
  }
  
  .footer-info {
    align-items: center;
  }
  
  .footer-links {
    justify-content: center;
  }
  
  .footer-meta {
    text-align: center;
  }
}

@media (max-width: 480px) {
  .footer-container {
    padding: var(--space-xl) var(--space-md);
  }
  
  .footer-links {
    flex-direction: column;
    gap: var(--space-md);
  }
  
  .cta-title {
    font-size: 1.5rem;
  }
}
</style>
