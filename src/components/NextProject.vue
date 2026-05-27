<template>
  <section class="next-project">
    <div class="next-project-inner">
      <span class="next-label">{{ $t("common.nextProject") }}</span>
      <router-link :to="route" class="next-link">
        <div class="next-info">
          <h3 class="next-title">{{ title }}</h3>
          <p class="next-type">{{ type }}</p>
        </div>
        <span class="next-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </span>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "NextProject",
  props: {
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    route: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.next-project {
  max-width: 760px;
  margin: var(--space-16) auto 0;
  padding: 0 var(--space-8) var(--space-12);
}

.next-project-inner {
  padding-top: var(--space-12);
 
}

.next-label {
  font-size: 0.6875rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-text-muted);
  font-weight: var(--weight-semibold);
  display: block;
  margin-bottom: var(--space-4);
}

.next-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: inherit;
  padding: var(--space-5) var(--space-6);
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border-strong);
  transition: all var(--duration-normal) var(--ease-out);
}

.next-link:hover {
  border-color: var(--color-text);
  transform: translateX(4px);
}

.next-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.next-title {
  font-size: 1.25rem;
  font-weight: var(--weight-semibold);
  color: var(--color-text);
  margin: 0;
  line-height: 1.3;
  letter-spacing: -0.01em;
}

.next-type {
  font-size: 0.75rem;
  color: var(--color-text-muted);
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-weight: var(--weight-medium);
}

.next-arrow {
  color: var(--color-text-muted);
  transition: transform var(--duration-normal) var(--ease-out), color var(--duration-normal) var(--ease-out);
}

.next-link:hover .next-arrow {
  color: var(--color-text);
  transform: translateX(4px);
}

@media (max-width: 768px) {
  .next-project {
    padding: 0 var(--space-5) var(--space-8);
    margin-top: var(--space-12);
  }

  .next-project-inner {
    padding-top: var(--space-8);
  }

  .next-link {
    padding: var(--space-4) var(--space-5);
  }

  .next-title {
    font-size: 1.125rem;
  }
}

@media (max-width: 480px) {
  .next-project {
    padding: 0 var(--space-4) var(--space-6);
    margin-top: var(--space-8);
  }

  .next-project-inner {
    padding-top: var(--space-6);
  }

  .next-link {
    padding: var(--space-4);
    border-radius: var(--radius-sm);
  }

  .next-title {
    font-size: 1rem;
  }

  .next-type {
    font-size: 0.625rem;
  }

  .next-arrow svg {
    width: 20px;
    height: 20px;
  }
}
</style>
