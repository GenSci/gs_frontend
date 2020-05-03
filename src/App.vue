<template>
  <div id="app">
    <nav-bar v-bind:links="nav_links" title="Gentlemen Scientists"/>
    <router-view/>
  </div>
</template>


<script>
import links from '@/router/links.js'
import GenSciNav from '@/components/GenSciNav.vue'
export default {
  components: {
    'nav-bar': GenSciNav
  },
  data() {
    return {
      nav_links: links.top_level
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Montserrat', 'Lato', 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html, body, #app {
  height: 100%;
}
.header {
  background-image: $header-background;
}
</style>
