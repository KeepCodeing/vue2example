<template>
  <div>原值: {{ number }} formated: {{ number | format }}</div>
</template>

<script>
export default {
  name: "formattest",
  data() {
    return {
      number: 100000,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>