<template>
  <div id="app">
    <!-- <MessageTest /> -->
    <!-- <LoadingTest /> -->
    <NumberFormat />
  </div>
</template>

<script>
import MessageTest from "./components/message-box/test.vue";
import LoadingTest from "./components/loading-mask/test.vue";
import NumberFormat from "./components/number-format/test.vue";
export default {
  name: "App",
  components: {
    MessageTest,
    LoadingTest,
    NumberFormat,
  },
  methods: {},
};
</script>

<style>
</style>
