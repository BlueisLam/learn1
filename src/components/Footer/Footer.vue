<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h2>Hit me up for</h2>
        <p>Future Project.</p>
      </div>

      <div class="footer-section">
        <h2>LINKS</h2>
        <ul>
          <li><a href="#">WORKS</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">NEWS</a></li>
          <li><a href="#">CONTACT</a></li>
          <li><a href="#">SERVICES</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h2>CONTACT</h2>
        <p>Ave Fairground 11, New York, United States</p>
        <p>Email: hello@alex.com</p>
        <div class="hover-effect">Hover me
          <svg class="qodef-svg--menu-brush qodef-menu-item-brush" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" width="93.59" height="3.054" viewBox="0 0 93.59 3.054">
            <path pathLength="1" fill="none" stroke="currentColor" stroke-width="2" d="M.047 2.055S22.593 1 45.967 1s47.58 1.055 47.58 1.055"></path>
          </svg>
        </div>
        <HoverEffect>
          Hover me ne
        </HoverEffect>
      </div>
    </div>
  </footer>
</template>

<script>
import HoverEffect from '@/components/stateless/HoverEffect.vue';

export default {
  components: {
    HoverEffect,
  },
};
</script>

<style lang="scss" scoped>
@import "./Footer.scss";
</style>
