<template>
  <div class="login-page d-flex justify-content-center align-items-center">
    <div class="login-page__card card border-primary p-l-50 p-r-50 p-t-80 p-b-30 card-l-1">
      <div class="card-body">
        <h1 class="card-body__title m-b-80">Login</h1>
        <a class="card-body__button" :href="authURL">Authorize</a>
      </div>
    </div>
  </div>
</template>

<script>
import Config from '@/services/config';

export default {
  name: 'Login',
  data() {
    return {
      authURL: 'http://hiring.bsup.tk/oauth/authorize'
        + `?client_id=${Config.CLIENT_ID}`
        + '&redirect_uri=http://localhost:8080/authorize'
        + '&response_type=token&scope=',
    };
  },
};
</script>

<style lang="scss">
.login-page {
  width: 100%;

  background-image: url('../../assets/login-background.jpg');
  background-size: cover;

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(93,84,240,0.5);
    background: linear-gradient(left, rgba(0,168,255,0.5), rgba(185,0,255,0.5));
    pointer-events: none;
  }

  &__card {
    width: 390px;
    text-align: center;
  }
}

.card-body {
  &__title {
    color: darken($primary, 30%);
    font-weight: bolder;
    font-size: 3rem;
  }

  &__button {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 20px;
    min-width: 160px;
    height: 50px;
    background-color: #bd59d4;
    border-radius: 25px;
    font-size: 14px;
    color: #fff;
    line-height: 1.2;
    text-transform: uppercase;
    transition: all 0.4s;
    box-shadow: 0 10px 30px 0px rgba(189, 89, 212, 0.5);

    &:hover {
      background-color: #4b2354;
      box-shadow: 0 10px 30px 0px rgba(189, 89, 212, 0.8);
      text-decoration: none;
    }
  }
}
</style>
