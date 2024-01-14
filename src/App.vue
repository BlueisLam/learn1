<template>
  <nav class="navbar">
    <div class="navbar-section">
      <div class="navbar-left-section">
        <span class="material-symbols-rounded symbols-logo"> favorite </span>
        <h1>Toiinee</h1>
        <!-- <img
          class="logo"
          src="./assets/Images/Logo_luna-removebg-preview.png"
          width="80px"
        /> -->
      </div>
      <div class="navbar-content">
        <HoverEffect><router-link to="/">Home</router-link></HoverEffect>
        <HoverEffect><router-link to="/about">About</router-link></HoverEffect>
        <HoverEffect><router-link to="/jobs">Jobs</router-link></HoverEffect>
        <HoverEffect><router-link to="/idols">Idols</router-link></HoverEffect>
        <HoverEffect><router-link to="/idols">My Shop</router-link></HoverEffect>
      </div>
      <div class="navbar-right-section">
        <span class="material-symbols-outlined"> menu </span>
      </div>
    </div>
  </nav>
  <router-view />
  <Footer></Footer>
</template>
<script>
import HoverEffect from '@/components/stateless/HoverEffect.vue';
import Footer from "@/components/Footer/Footer.vue";
import ActiveLinkMixin from '@/mixins/ActiveLinkMixin';
export default {
  components: {
    HoverEffect,
    Footer
  },
  mixins: [ActiveLinkMixin],
};
</script>
<style lang="scss">
@import "./App.scss";
</style>
