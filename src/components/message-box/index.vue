<template>
  <div>
    {{ message }} | {{ mtype }} | {{ duration }} |
    <button @click="closeMessageBox">close</button>
  </div>
</template>

<script>
export default {
  name: "messagebox",
  data() {
    return {
      message: "default message",
      mtype: "default",
      duration: 1000,
    };
  },
  methods: {
    closeMessageBox() {
      this.close();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>