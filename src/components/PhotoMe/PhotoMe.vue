<template>
  <div class="container">
    <div class="photo-me">
      <img src="https://i.pinimg.com/736x/f0/2d/57/f02d57d101aae3bd99042516cd553558.jpg" alt="" />
    </div>
    <div>
      <div class="text-me">
        <h1>Hello! I'm Selina</h1>
        <h3>
          Eager Junior Developer with 6+ months of diverse industry experience.
          Proven adaptability, collaborative mindset, and a commitment to
          delivering high-quality code while actively pursuing skill enhancement
          opportunities.
        </h3>
      </div>
    </div>
    <IconSocial />
  </div>
</template>

<script>
import IconSocial from "../../components/stateless/IconSocial.vue";
export default {
  components: {
    IconSocial
  },
};
</script>
<style lang="scss" scoped>
@import "./PhotoMe.scss";
</style>
