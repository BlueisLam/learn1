<!-- HoverEffect.vue -->
<template>
  <div class="hover-effect" @mouseover="showSVG" @mouseleave="hideSVG">
    <slot></slot>
    <svg
      v-if="isHovered"
      class="qodef-svg--menu-brush qodef-menu-item-brush"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      width="93.59"
      height="3.054"
      viewBox="0 0 93.59 3.054"
    >
      <path
        pathLength="1"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        d="M.047 2.055S22.593 1 45.967 1s47.58 1.055 47.58 1.055"
      ></path>
    </svg>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHovered: false,
    };
  },
  methods: {
    showSVG() {
      this.isHovered = true;
    },
    hideSVG() {
      this.isHovered = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.hover-effect {
  justify-content: center;
  text-align: center;
  cursor: pointer;
  position: relative;
  display: inline-block;
  // width: 150%;
  height: 30px;
  overflow: hidden;
  svg {
    display: block;
    opacity: 0;
    transition: opacity 0.5s ease, transform 0.9s ease;
    transform: translateX(-100%);
    width: 100%;
  }
  .qodef-menu-item-brush {
    position: absolute;
    left: 0;
    bottom: 5px;
    width: 100%;
    justify-content: center;
  }
}
.hover-effect:hover svg {
  opacity: 1;
  transform: translateX(0);
  color: #000;
}
</style>
