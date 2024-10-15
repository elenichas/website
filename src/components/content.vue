<template>
  <div class="superprof-card">
    <!-- Top Header Section with Filters -->
    <div class="header-filters flex space-x-4 mb-4">
      <span class="filter-tag">Graphic design</span>
      <span class="filter-tag">Web Design</span>
      <span class="filter-tag">UX design</span>
      <span class="filter-tag">UI design</span>
    </div>

    <!-- Main Content -->
    <div
      class="main-content flex flex-col md:flex-row justify-between items-start"
      style="display: flex"
    >
      <!-- Left Section with Title and Description -->
      <div class="left-content">
        <h1 class="title">
          Unlock Your Creative Potential with Online UX/UI Design Lessons!
        </h1>
        <p class="subtitle">
          Ready to dive into the exciting world of UX/UI design using Figma and
          Adobe XD? Join me today!
        </p>

        <!-- Lesson Location -->
        <div class="lesson-location mt-4">
          <h2>Lesson location</h2>
          <button class="location-btn">Online</button>
        </div>
      </div>

      <!-- Right Section with Tutor Info -->
      <div class="right-content flex flex-col items-center mt-8 md:mt-0">
        <img
          class="tutor-image rounded-full w-32 h-32 object-cover"
          :src="src"
          alt="Tutor"
        />

        <h2 class="tutor-name mt-4">Eleni</h2>
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
      </div>
    </div>

    <!-- Footer with SuperProf Description -->
    <div class="footer mt-8">
      <p class="superprof-description">
        Eleni is one of our best Graphic design tutors. They have a high-quality
        profile, verified qualifications, a quick response time, and great
        reviews from students!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SuperprofCard",
  data() {
    return {
      src: require("@/images/eleni.jpg"), // Path to your avatar image
    };
  },
};
</script>

<style scoped>
img {
  width: 20%;
  border-radius: 8px;
}
.superprof-card {
  width: 85%;
  margin: auto;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}

.header-filters {
  font-size: 0.9rem;
}

.filter-tag {
  background-color: #f3f4f6;
  padding: 5px 10px;
  border-radius: 50px;
}

.title {
  font-size: 1.8rem;
  font-weight: bold;
}

.subtitle {
  margin-top: 1rem;
  font-size: 1.1rem;
}

.lesson-location {
  font-size: 1.1rem;
}

.location-btn {
  background-color: #f3f4f6;
  padding: 8px 16px;
  border-radius: 50px;
  font-weight: bold;
  margin-top: 0.5rem;
}

.right-content {
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.tutor-name {
  font-size: 1.2rem;
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
</style>
