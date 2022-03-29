<template>
  <div id="app">
    <!-- <MessageTest /> -->
    <LoadingTest />
  </div>
</template>

<script>
import MessageTest from "./components/message-box/test.vue";
import LoadingTest from "./components/loading-mask/test.vue";
export default {
  name: "App",
  components: {
    MessageTest,
    LoadingTest,
  },
  methods: {},
};
</script>

<style>
</style>
