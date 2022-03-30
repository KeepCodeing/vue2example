<template>
  <div>
    <child-2 v-on="$listeners" />
  </div>
</template>

<script>
import child2 from "./child2.vue";
export default {
  components: { child2 },
};
</script>

<style lang="scss" scoped>
</style>