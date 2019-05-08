<template>
  <div class="home-layout-page">
    <div class="home-layout-page__header">
      <div class="container d-flex flex-row justify-content-between align-items-center page-header">
        <img class="page-header__logo" src="../../assets/logo.png" alt="Logo">

        <Dropdown>
          <template v-slot:button>
            <div class="dropdown__button dropdown-button">
              <img
                class="dropdown-button__photo border-primary"
                :src="userInfo.photo"
                alt="User photo">
              <span class="dropdown-button__title m-l-10">{{userInfo.name}}</span>
            </div>
          </template>
          <template v-slot:dropdown-body>
            <h1>Hello World!</h1>
          </template>
        </Dropdown>

      </div>
    </div>
    <div class="home-layout-page__navbar">
      <div class="container d-flex flex-row justify-content-between align-items-center page-navbar">
        <Navigation/>
        <form class="form-inline active-purple-4">
          <input
            class="form-control form-control-sm m-r-15"
            type="text"
            placeholder="Search"
            aria-label="Search">
          <font-awesome-icon icon="search"/>
        </form>
      </div>
    </div>
    <div class="home-layout-page__body p-t-50 p-b-50">
      <div class="container">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Dropdown from '@/components/Dropdown.vue';
import Navigation from './components/Navigation.vue';

export default {
  name: 'Layout',
  components: {
    Dropdown,
    Navigation,
  },
  computed: {
    userInfo() {
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

.page-header {
  height: 100%;

  &__logo {
    height: 60px;
  }
}

.page-navbar {
  height: 100%;
}

.dropdown {
  display: flex;
  flex-direction: row;
  align-items: center;

  &__button {
    cursor: pointer;
  }
}

.dropdown-button {
  &__photo {
    border-radius: 5px;
    border: 1px solid;
    width: 35px;
    height: 35px;
  }
}
</style>
