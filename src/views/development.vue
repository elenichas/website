<template>
  <div class="development">
    <BackToHome />
    <!-- Add this line to include the back button -->
    <h1>Development Page</h1>
    <p>Learn more about our development processes and technologies used.</p>
  </div>
</template>

<script>
import BackToHome from "../components/backToHome.vue";

export default {
  name: "Development",
  components: {
    BackToHome, // Register the component
  },
};
</script>

<style scoped>
.development {
  text-align: center;
  margin-top: 50px;
}
</style>
