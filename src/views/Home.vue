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
import User from '@/services/apis/user';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
  methods: {
    showNotify() {
      this.$notify({
        title: 'Hi',
        message: 'This is a notify',
        type: 'warning',
      });
    },
  },
};
</script>
