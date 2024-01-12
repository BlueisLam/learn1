<template>
  <div class="jobs">
    <h1>This is Job</h1>
    <div v-for="item in jobs" :key="item.id">
      <router-link :to="{ name: 'JobsDetail', params: { id: item.id } }"
        ><h2>
          {{ item.title }}
        </h2>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Jobs",
  data() {
    return {
      jobs: [
        { title: "Làm màu", id: 1, description: "lorem" },
        { title: "Vẽ chuyện", id: 2, description: "lorem" },
        { title: "Sơn tường", id: 3, description: "lorem" },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "./Jobs.scss";
</style>
