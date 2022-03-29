<template>
  <div class="mask" :style="{ display: show ? 'block' : 'none' }"></div>
</template>

<script>
export default {
  name: "loadingmask",
  data() {
    return {
      show: true,
    };
  },
};
</script>

<style scoped>
.mask {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 100;
  background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
}
</style>