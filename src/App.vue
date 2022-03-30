<template>
  <div id="app">
    <!-- <MessageTest /> -->
    <!-- <LoadingTest /> -->
    <!-- <NumberFormat /> -->
    <!-- <VmodelTest /> -->
    <ListenersTest />
  </div>
</template>

<script>
import MessageTest from "./components/message-box/test.vue";
import LoadingTest from "./components/loading-mask/test.vue";
import NumberFormat from "./components/number-format/test.vue";
import VmodelTest from "./components/custom-vmodel/test.vue";
import ListenersTest from "./components/event-listener";
export default {
  name: "App",
  components: {
    MessageTest,
    LoadingTest,
    NumberFormat,
    VmodelTest,
    ListenersTest,
  },
  methods: {},
};
</script>

<style>
</style>
