<template>
  <div class="home">
    <!-- <h1 class="title">This is home</h1> -->
    <Carousel />
    <PersonalInfo />
    <Footer></Footer>
  </div>
</template>

<script>
import PersonalInfo from "../../components/PersonalInfo/PersonalInfo.vue";
import Carousel from "../../components/Carousel/Carousel.vue";
import Footer from "../../components/Footer/Footer.vue";
export default {
  name: "HomeView",
  components: {
    PersonalInfo,
    Carousel,
    Footer,
  },
};
</script>
<style lang="scss">
@import "./HomeView.scss";
</style>
