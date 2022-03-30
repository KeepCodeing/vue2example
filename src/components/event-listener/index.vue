<template>
  <div>
    <children @say="say" @talk="talk" />
  </div>
</template>

<script>
// 利用$listeners完成父组件监听事件传递给子组件
// 子组件中的$listeners可以获取到父组件上绑定的所有事件，由此就可
// 将父组件绑定事件传递给子组件触发

import Children from "./child.vue";
export default {
  components: {
    Children,
  },
  methods: {
    say() {
      console.log("hello");
    },
    talk() {
      console.log(" world");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>