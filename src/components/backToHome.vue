<!-- BackToHome.vue -->
<template>
  <div class="back-to-home">
    <router-link to="/home" class="back-link">
      <i class="fas fa-arrow-left"></i>
      <img :src="logoSrc" alt="Logo" class="back-logo" />
      <span>Eleni Chasioti</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "BackToHome",
  data() {
    return {
      logoSrc: require("@/images/logo.png"), // Adjust the path to your logo image
    };
  },
};
</script>

<style scoped>
.back-to-home {
  position: fixed;
  top: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.back-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
  gap: 10px;
}

.back-logo {
  height: 2rem;
}

.back-link i {
  font-size: 1.5rem;
  margin-right: 5px;
}

.back-link span {
  font-size: 1rem;
  font-weight: bold;
}
</style>
