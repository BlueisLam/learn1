<template>
  <div class="home">
    <!-- <h1 class="title">This is home</h1> -->
    <PhotoMe />
    <Carousel />
    <PersonalInfo />
  </div>
</template>

<script>
import PersonalInfo from "../../components/PersonalInfo/PersonalInfo.vue";
import Carousel from "../../components/Carousel/Carousel.vue";
import PhotoMe from "../../components/PhotoMe/PhotoMe.vue";

export default {
  name: "HomeView",
  components: {
    PersonalInfo,
    Carousel,
    PhotoMe
  },
};
</script>
<style lang="scss">
@import "./HomeView.scss";
</style>
