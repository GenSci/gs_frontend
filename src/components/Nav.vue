<template>
    <nav>
        <div class="navbar-brand">
            <router-link to='/' class="navbar-item" v-text="title"></router-link>
            <router-link to="/about" class="navbar-item" >About</router-link>
            <router-link to="/blogs" class="navbar-item">Blog</router-link>
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
    name: 'Nav',
    props: ['title']
}
</script>

<style lang="scss">
    nav {
        box-shadow: 4px 4px #eeeeee;
        z-index: -1;
        margin-bottom: 1em;
    }
</style>