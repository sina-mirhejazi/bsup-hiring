<template>
<ul class="nav nav-pills">
  <template v-for="(item, index) of navigationItems">
    <li class="nav-item" :key="index">
      <router-link class="nav-link" active-class="active" :to="item.path">
        {{item.meta.title}}
      </router-link>
    </li>
  </template>
</ul>
</template>

<script>
export default {
  name: 'Navigation',
  computed: {
    navigationItems() {
      return this.getRouteObjectByPath(
        this.$router.options.routes,
        '/',
      )
        .children
        .filter(item => item.meta.title);
    },
  },
  methods: {
    /**
     * getRouteObject
     * Get routes object by given path
     *
     * @param routes
     * @param path
     * @returns {routeObject|undefined}
     */
    getRouteObjectByPath(routes, path) {
      for (const route of routes) {
        if (route.path === path) {
          return route;
        }

        if (route.children && route.children.length > 1) {
          const found = this.getRouteObjectByPath(route.children, path);
          if (found) {
            return found;
          }
        }
      }
    },
  },
};
</script>

<style scoped>

</style>
