<template>
  <nav class="navbar">
    <div class="navbar-section">
      <!-- <router-link to="/"> -->
      <div class="navbar-left-section">
        <span class="material-symbols-rounded symbols-logo"> favorite </span>
        <h1>Toiinee</h1>
      </div>
    <!-- </router-link> -->
      <div class="navbar-content">
        <HoverEffect><router-link to="/profile">Home</router-link></HoverEffect>
        <HoverEffect><router-link to="/about">About</router-link></HoverEffect>
        <HoverEffect><router-link to="/jobs">Jobs</router-link></HoverEffect>
        <HoverEffect><router-link to="/idols">Idols</router-link></HoverEffect>
      </div>
      <div class="navbar-right-section">
        <span class="material-symbols-outlined"> menu </span>
      </div>
    </div>
  </nav>
  <YouAreHere />
  <router-view />
  <Footer></Footer>
</template>
<script>
import HoverEffect from '@/components/stateless/HoverEffect.vue';
import Footer from "@/components/Footer/Footer.vue";
import YouAreHere from '@/components/stateless/YouAreHere.vue';
export default {
  components: {
    HoverEffect,
    Footer,
    YouAreHere
  },
};
</script>
<style lang="scss">
@import "./App.scss";
</style>
