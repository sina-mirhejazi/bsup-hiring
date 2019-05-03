<template>
  <div class="authorize-page d-flex justify-content-center align-items-center">
    <div class="login-page__card card border-primary p-l-50 p-r-50 p-t-80 p-b-30 card-l-1">
      <div class="card-body">
        <template v-if="!error">
          <h2 class="card-body__title m-b-80">Please wait</h2>
          <img src="@/assets/loading.gif" width="100" alt="loading">
        </template>
        <template v-if="error">
          <div class="card-body__title text-danger m-b-50">
            <font-awesome-icon icon="exclamation-circle"/>
          </div>
          <div class="card-body__message">There is an error while we try to authorize you</div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { SET_USER_TOKEN } from '@/store/mutationTypes';

export default {
  name: 'Authorize',
  data() {
    return {
      error: false,
    };
  },
  computed: {
    token() {
      const TOKEN_REGEX = /access_token=([a-zA-Z0-9._-]+)/;
      const result = TOKEN_REGEX.exec(this.$route.hash);

      if (result) {
        return result[1];
      }

      return null;
    },
  },
  methods: {
    ...mapMutations('auth', {
      setUserToken: SET_USER_TOKEN,
    }),
  },
  mounted() {
    if (this.token) {
      this.setUserToken({ token: this.token });

      this.$router.push({ name: 'home' });
    } else {
      this.error = true;
    }
  },
};
</script>

<style lang="scss">
.authorize-page {
  width: 100%;

  background-image: url('../../assets/authorize-background.jpg');
  background-size: cover;
  background-position: center;

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(93,84,240,0.5);
    background: linear-gradient(to right, rgba(0,168,255,0.5), rgba(185,0,255,0.5));
    pointer-events: none;
  }

  &__card {
    width: 390px;
    text-align: center;
  }
}

.card-body {
  text-align: center;

  &__title {
    color: darken($primary, 30%);
    font-weight: bolder;
    font-size: 2.5rem;
  }
}
</style>
