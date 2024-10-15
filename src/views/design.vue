<template>
  <div class="design">
    <BackToHome />
    <!-- Add this line to include the back button -->
    <h1>Design Page</h1>
    <p>Explore our design projects and case studies here.</p>
  </div>
</template>

<script>
import BackToHome from "../components/backToHome.vue";
export default {
  name: "Design",
  components: {
    BackToHome, // Register the component
  },
};
</script>

<style scoped>
.design {
  text-align: center;
  margin-top: 50px;
}
</style>
