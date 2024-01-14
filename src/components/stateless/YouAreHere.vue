<!-- YouAreHere.vue -->

<template>
  <div class="you-are-here">
    <span class="label">You are here:</span>
    <router-link to="/">Home</router-link> /
    <span v-for="(route, index) in routeSegments" :key="index">
      <router-link
        :to="getRoutePath(route)"
        class="route-link"
        @mouseover="hoverEnter(index)"
        @mouseleave="hoverLeave(index)"
        >{{ route }}</router-link
      >
      <span v-if="index < routeSegments.length - 1" class="separator"> / </span>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hoverIndex: -1,
    };
  },
  computed: {
    routeSegments() {
      return this.$route.path.split("/").filter((segment) => segment !== "");
    },
  },
  methods: {
    getRoutePath(route) {
      return "/" + route;
    },
    hoverEnter(index) {
      this.hoverIndex = index;
    },
    hoverLeave() {
      this.hoverIndex = -1;
    },
  },
};
</script>

<style lang="scss" scoped>
.you-are-here {
  margin: 10px 50px;
  font-size: 16px;
  color: #555;
  font-family: var(--font-family-PTsan);
  a {
    text-decoration: none;
    color: #555;
    margin-right: 10px;
    margin-left: 10px;
  }
}

.label {
  margin-right: 10px;
}

.route-link {
  //   color: #007bff;
  text-decoration: none;
  //   font-weight: bold;
  transition: color 0.3s;
  margin-right: 10px;
  transition: color 0.3s;
}

.route-link:hover {
  //   color: #0056b3;
//   color: #0056b3;
  animation: shake 0.6s;
}

.separator {
  margin-left: 10px;
  margin: 0 5px;
  color: #666;
}
@keyframes shake {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-5px);
  }
}
</style>
