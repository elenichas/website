<template>
  <section class="next-project">
    <div class="next-project-inner">
      <span class="next-label">Next Project</span>
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
  margin: 4rem auto 0;
  padding: 0 2rem 3rem;
  border-top: 1px solid #eee;
}

.next-project-inner {
  padding-top: 3rem;
}

.next-label {
  font-size: 0.8125rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #999;
  font-weight: 500;
  display: block;
  margin-bottom: 1rem;
}

.next-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: inherit;
  padding: 1.5rem 2rem;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  transition: all 0.3s ease;
}

.next-link:hover {
  border-color: #000;
  transform: translateX(4px);
}

.next-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.next-title {
  font-size: 1.375rem;
  font-weight: 600;
  color: #000;
  margin: 0;
  line-height: 1.3;
}

.next-type {
  font-size: 0.875rem;
  color: #666;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.next-arrow {
  color: #666;
  transition: transform 0.3s ease, color 0.3s ease;
}

.next-link:hover .next-arrow {
  color: #000;
  transform: translateX(4px);
}

@media (max-width: 768px) {
  .next-project {
    padding: 0 1.5rem 2rem;
    margin-top: 3rem;
  }

  .next-project-inner {
    padding-top: 2rem;
  }

  .next-link {
    padding: 1.25rem 1.5rem;
  }

  .next-title {
    font-size: 1.125rem;
  }
}

@media (max-width: 480px) {
  .next-project {
    padding: 0 1.25rem 1.5rem;
    margin-top: 2rem;
  }

  .next-project-inner {
    padding-top: 1.5rem;
  }

  .next-link {
    padding: 1rem 1.25rem;
  }

  .next-title {
    font-size: 1rem;
  }

  .next-type {
    font-size: 0.75rem;
  }

  .next-arrow svg {
    width: 20px;
    height: 20px;
  }
}
</style>
