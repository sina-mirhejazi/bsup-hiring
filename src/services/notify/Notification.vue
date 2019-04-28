<template>
    <transition name="slide" v-on:after-leave="closed">
        <div v-if="show" :class="['notification', `notification--${type}`]">
            <h1>{{title}}</h1>
            <p>{{message}}</p>
            <button @click="close">Close</button>
        </div>
    </transition>
</template>

<script>
export default {
  data() {
    return {
    show: false,
      title: null,
      message: null,
      type: null,
    };
  },
  methods:{
      close() {
          this.show = false;
      },
      closed() {
          document.body.appendChild(this.$el);
      }
  },
  mounted() {
      this.show = true;
  },
};
</script>

<style scoped lang="scss">
.notification {
    position: absolute;
    left: 50%;
    top: 20px;
    
    &--warning {
        background-color: #333;
    }
}

.slide-enter-active, .slide-leave-active {
  transition: opacity .5s;
}
.slide-enter, .slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
