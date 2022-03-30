<template>
  <div>
    <button @click="$emit('say')">say</button>
    <button @click="$emit('talk')">talk</button>
  </div>
</template>

<script>
// 假设的UI组件，例如Element的Dialog，它的open等事件就是这样emit出去的
// 我们的目的是二次封装，让index.vue处理
export default {};
</script>

<style lang="scss" scoped>
</style>