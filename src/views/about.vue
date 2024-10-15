<template>
  <div class="about">
    <BackToHome />
    <!-- Add this line to include the back button -->
    <h1>About Us</h1>
    <p>Find out more about our team and our mission.</p>
  </div>
</template>

<script>
import BackToHome from "../components/backToHome.vue";

export default {
  name: "About",
  components: {
    BackToHome, // Register the component
  },
};
</script>

<style scoped>
.about {
  text-align: center;
  margin-top: 50px;
}
</style>
