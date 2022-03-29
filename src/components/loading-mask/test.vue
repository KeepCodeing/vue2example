<template>
  <div>
    <div v-loading="show" class="container"></div>
    <button @click="switchShow">switch show</button>
  </div>
</template>

<script>
export default {
  name: "masktest",
  data() {
    return {
      show: true,
    };
  },
  methods: {
    switchShow() {
      this.show = !this.show;
    },
  },
};
</script>

<style scoped>
.container {
  height: 100px;
  width: 100px;
  background: red;
  position: relative;
}
</style>