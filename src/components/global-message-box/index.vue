<template>
  <div>{{ message }} and {{ mtype }} and {{ show }}</div>
</template>

<script>
export default {
  name: "messagebox",
  data() {
    return {
      show: false,
      message: "default message",
      mtype: "default",
    };
  },
};
</script>

<style lang="scss" scoped>
</style>