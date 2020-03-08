<template>
  <div id="app">
    <nav-bar title="Gentlemen Scientists"/>
    <router-view/>
  </div>
</template>


<script>
import Nav from './components/Nav.vue'
export default {
  components: {
    'nav-bar': Nav
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

#nav {
  padding: 10px;
  height: 5%;
  box-shadow: 0px 0px 6px 2px #a2a2a2;
  z-index: -1;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
html, body, #app {
  height: 100%;
}
.header {
  background-image: linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%);
}
</style>
