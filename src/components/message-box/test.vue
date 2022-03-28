<template>
  <div>
    <button @click="addMessageBox">click me</button>
  </div>
</template>

<script>
export default {
  methods: {
    addMessageBox() {
      this.$showMessage({
        message: "I am test Message",
        mtype: "success",
        duration: 2000,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>