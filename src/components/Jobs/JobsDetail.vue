<template>
  <div>
    <h1>This is job detail page</h1>
    <p>the job {{ id }}</p>
  </div>
</template>
<script>
export default {
  props: ["id"],
};
</script>
<style lang="scss">
@import "./JobsDetail.scss";
</style>
