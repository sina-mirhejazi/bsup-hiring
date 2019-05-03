<template>
    <transition name="slide" v-on:after-leave="closed">
        <div v-if="show" :class="['alert', typeClass]" role="alert">
            <font-awesome-icon v-if="withIcon" :icon="iconName" class="alert__icon mr-3"/>
            <div class="alert__body alert-body">
              <div v-if="title" class="alert-body__title font-weight-bold">{{title}}</div>
              <p class="alert-body__message">{{message}}</p>
            </div>
          <button
            v-if="!this.duration"
            @click="close"
            type="button"
            class="close alert__button ml-3"
            aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
    </transition>
</template>

<script>
export default {
  name: 'Alert',
  data() {
    return {
      show: false,
      title: null,
      message: null,
      type: null,
      withIcon: true,
      duration: 0,
    };
  },
  computed: {
    typeClass() {
      return `alert-${this.type}`;
    },
    iconName() {
      const iconMap = {
        primary: 'flag',
        secondary: 'flag',
        success: 'check-circle',
        danger: 'exclamation-circle',
        warning: 'exclamation-circle',
        info: 'info-circle',
      };

      return iconMap[this.type];
    },
  },
  methods: {
    close() {
      this.show = false;
    },
    closed() {
      document.body.appendChild(this.$el);
    },
  },
  mounted() {
    this.show = true;

    if (this.duration) {
      setTimeout(() => {
        this.close();
      }, this.duration);
    }
  },
};
</script>

<style scoped lang="scss">
.alert {
    position: absolute;
    left: 50%;
    top: 20px;
    transform: translateX(-50%);
    display: flex;
    flex-direction: row;
    align-items: center;

    &__icon {
      font-size: 1.5rem;
    }

    &__button {
      background-color: transparent;
      border: none;
      color: inherit;

      &:focus {
        outline: none;
      }
    }
}

.alert-body {
  &__title {
    font-size: 0.9rem;
  }

  &__message {
    margin: 0;
    font-size: 0.8rem;
  }
}

.slide-enter-active, .slide-leave-active {
  transition: all .5s;
  transform: translateY(0) translateX(-50%);
}
.slide-enter, .slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(-20px) translateX(-50%);
}
</style>
