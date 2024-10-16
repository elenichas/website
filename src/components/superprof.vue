<template>
  <div class="superprof-card">
    <!-- Contact Section -->
    <div class="contact-content flex justify-between items-center">
      <div class="contact-details">
        <slot name="heading1">
          <h1 class="contact-heading">Teaching</h1>
        </slot>
      </div>
    </div>

    <!-- Top Header Section with Filters -->
    <div class="header-filters flex flex-wrap space-x-4 mb-4">
      <span class="filter-tag">Graphic design</span>
      <span class="filter-tag">Web Design</span>
      <span class="filter-tag">UX design</span>
      <span class="filter-tag">UI design</span>
    </div>

    <!-- Main Content -->
    <div
      class="main-content flex flex-col md:flex-row justify-between items-start"
    >
      <div class="md:w-1/2">
        <h1 class="title">
          Unlock Your Creative Potential with Online UX/UI Design Lessons!
        </h1>
        <p class="subtitle">
          Ready to dive into the exciting world of UX/UI design using Figma and
          Adobe XD? Join me today!
        </p>
      </div>

      <div class="tutor-info md:w-1/3 mt-6 md:mt-0">
        <h2 class="tutor-name">Eleni</h2>
        <p class="rating"><span>⭐ 5</span> (8 reviews)</p>
        <p class="hourly-rate mt-2">Hourly rate: £50</p>
        <p class="response-time mt-1">Response Time: 2h</p>
        <p class="student-count mt-1">Number of students: 14</p>

        <!-- Contact Button -->
        <a
          href="https://www.superprof.co.uk/unlock-your-creative-potential-with-online-design-lessons-ready-dive-into-the-exciting-world-design-using-figma-and.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button class="contact-btn mt-4">Contact</button>
        </a>
        <p class="free-lesson mt-2">1st lesson free</p>

        <!-- Footer Section -->
        <div class="footer mt-8">
          <p class="superprof-description">
            Eleni is one of our best Graphic design tutors. They have a
            high-quality profile, verified qualifications, a quick response
            time, and great reviews from students!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SuperprofCard",
};
</script>

<style scoped>
.superprof-card {
  background-color: white;
  width: 90%;
  margin: auto;
  padding: 20px;
}
.contact-heading {
  padding: 12px;
}
.header-filters {
  font-size: 0.9rem;
}

.filter-tag {
  background-color: #f87171;
  color: white;
  padding: 5px 10px;
  border-radius: 50px;
  margin: 4px;
}

.title {
  font-size: 1.6rem;
  font-weight: bold;
}

.subtitle {
  margin-top: 1rem;
  font-size: 1.1rem;
}

.tutor-info {
  text-align: left;
}

.tutor-name {
  font-size: 1.4rem;
  font-weight: bold;
}

.rating,
.hourly-rate,
.response-time,
.student-count {
  font-size: 1rem;
}

.contact-btn {
  background-color: #f87171;
  color: white;
  padding: 10px 20px;
  border-radius: 50px;
}

.free-lesson {
  color: #f87171;
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

.footer {
  background-color: #f3f4f6;
  padding: 10px 15px;
  border-radius: 8px;
  margin-top: 20px;
  font-size: 0.9rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .title {
    font-size: 1.4rem;
  }
  .subtitle {
    font-size: 1rem;
  }
  .tutor-name {
    font-size: 1.2rem;
  }
  .tutor-info {
    margin-top: 20px;
  }
}

@media (min-width: 769px) {
  .superprof-card {
    max-width: 1200px;
  }
}
</style>
