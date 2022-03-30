<template>
  <div>
    <input @input="$emit('customed', $event.target.value)" :value="name" />
    <input @input="$emit('update:song', $event.target.value)" :value="song" />
  </div>
</template>

<script>
// 自定义组件v-model
export default {
  name: "customedvmodel",
  props: {
    name: {
      type: String,
      default: "",
      required: true,
    },
    song: {
      type: String,
      default: "",
      required: true,
    },
  },
  model: {
    prop: "name",
    event: "customed",
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>