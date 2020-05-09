<template>
    <b-menu>
        <b-menu-list label="Recent Blog Posts">
            <b-menu-item v-for="post in posts" :key="post.id" expanded="">
                <router-link :to="{name: 'BlogPost', params: {id: post.id}}">{{post.title}}</router-link>
            </b-menu-item>
        </b-menu-list>

    </b-menu>
   
</template>

<style lang="scss">
    
</style>

<script>
export default {
    name: 'BlogSidebar',
    data () {
        return {
            posts: []
        }
    },
    mounted() {
        this.posts = this.$store.state.posts
    }
}
</script>