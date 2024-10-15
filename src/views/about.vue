<template>
  <div class="about">
    <BackToHome />

    <skill-set></skill-set>
  </div>
</template>

<script>
import BackToHome from "../components/backToHome.vue";
import SkillSet from "../components/skillSet.vue";

export default {
  name: "About",
  components: {
    BackToHome,
    SkillSet,
  },
};
</script>

<style scoped>
.about {
  text-align: center;
  margin-top: 50px;
}
</style>
