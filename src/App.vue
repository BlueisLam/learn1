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
        <router-link to="/"><HoverEffect>Home</HoverEffect></router-link>
        <router-link to="/about"><HoverEffect>About</HoverEffect></router-link>
        <router-link to="/jobs"><HoverEffect>Jobs</HoverEffect></router-link>
        <router-link to="/idols"><HoverEffect>Idols</HoverEffect></router-link>
      </div>
      <div class="navbar-right-section">
        <span class="material-symbols-outlined"> menu </span>
      </div>
    </div>
  </nav>
  <router-view />
</template>
<script>
import HoverEffect from '@/components/stateless/HoverEffect.vue';

export default {
  components: {
    HoverEffect,
  },
};
</script>
<style lang="scss">
@import "./App.scss";
</style>
