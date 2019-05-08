<template>
  <div class="dropdown" :class="{show: show}">
    <span @click="toggleShow">
      <slot name="button"></slot>
    </span>
    <div class="dropdown-menu card card-l-1 p-3" :class="{show: show}">
      <slot name="dropdown-body"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',
  data() {
    return {
      show: false,
    };
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    },
  },
};
</script>

<style scoped lang="scss">

</style>
