<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="showNotify">Click Me!</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  methods: {
    showNotify() {
      this.$notify({
        title: 'Hi',
        message: 'This is a notify',
        type: 'primary',
      });
    },
  },
};
</script>
