<template>
  <div id="app">
    <button @click="showMessage">click me</button>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {
    showMessage() {
      this.$showMessage({ message: "www" });
    },
  },
};
</script>

<style>
</style>
