<template>
  <div class="home-layout-page">
    <div class="home-layout-page__header">
      <div class="container">

        <div class="dropdown show">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button" id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
            Dropdown button
          </button>
          <div class="dropdown-menu show" aria-labelledby="dropdownMenuButton">
            <!--<a class="dropdown-item" href="#">Action</a>-->
            <!--<a class="dropdown-item" href="#">Another action</a>-->
            <!--<a class="dropdown-item" href="#">Something else here</a>-->
            <img :src="userInfo.photo" alt="">
          </div>
        </div>

      </div>
    </div>
    <nav class="home-layout-page__navbar"></nav>
    <div class="home-layout-page__body">
      <div>{{userInfo}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  computed: {
    userInfo() {
      console.log(this.$store.state.auth.userInfo);
      return this.$store.state.auth.userInfo;
    },
  },
};
</script>

<style lang="scss">
.home-layout-page {
  width: 100%;

  &__header {
    height: 100px;
  }

  &__navbar {
    height: 100px;
    background-color: $white;
  }
}
</style>
