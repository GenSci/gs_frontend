<template>
    <nav>
        <div class="navbar-brand">
            <router-link to='/' class="navbar-item" v-text="title"></router-link>
            <router-link v-for="link in links" :key='link.name' :to="{ name: link.name }" class="navbar-item">{{link.name}}</router-link>
            <a role="button" aria-expanded="false" data-target="sideNav" class="navbar-burger burger">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'GenSciNav',
    props: {
        'title': String,
        'links': Array
        }
}
</script>

<style lang="scss">
    nav {
        box-shadow: 4px 4px #eeeeee;
        z-index: -1;
        margin-bottom: 1em;
    }
    a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #07b088 !important;
    }
  }
</style>