<template>
  <div>
    <!-- @update:song="song = $event" :song="song" -->
    <customed-vmodel v-model="name" :song.sync="song" />
    {{ song }}
    {{ name }}
  </div>
</template>

<script>
import CustomedVmodel from "./index.vue";
export default {
  name: "vmodeltest",
  components: {
    CustomedVmodel,
  },
  data() {
    return {
      name: "hwz",
      song: "",
    };
  },
};
</script>

<style lang="scss" scoped>
</style>