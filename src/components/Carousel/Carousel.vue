<template>
  <swiper
    :pagination="{
      dynamicBullets: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <SwiperSlide v-for="photo in images" :key="photo">
      <div class="image">
        <!-- <img src="/assets/Images/carousel/Jimin3.png" alt = "" /> -->
        <img :src="photo" alt="" />
      </div>
    </SwiperSlide>
  </swiper>
</template>
<script>
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export default {
  name: "Slider",
  components: { Swiper, SwiperSlide, EffectFade },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      EffectFade,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
  data() {
    return {
      images: [
        "https://i.pinimg.com/originals/f9/dc/d3/f9dcd3864f1e8f0fc74fe949ac901121.jpg",
        "https://i.pinimg.com/originals/c0/81/d4/c081d4e479c804df822bf12a5226a45a.jpg",
        "https://i.pinimg.com/originals/21/7b/ed/217bed5933d79b9dd9beb3384e341ea4.jpg",
        "https://i.pinimg.com/originals/ce/00/e2/ce00e2dccb7caac71b09538cff568f93.jpg",
      ],
      photos: ["Jimin3.jpg", "jk.jpg", "jk2.jpg", "jm_.jpg"],
      timer: null,
      currentIndex: 0,
    };
  },
};
</script>

<style>
@import "./Carousel.scss";
</style>
