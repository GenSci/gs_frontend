<template>
    <div class="sidebar">
        <aside class="medu">
            <p class="menu-label">Blog Posts</p>
            <a href="" v-for="post in posts" :key="post.id">
                <p v-html="post.title"></p>
            </a>
        </aside>
    </div>
</template>

<style lang="scss">
    
</style>

<script>
export default {
    name: 'BlogSidebar',
    props: {
        posts: Array
    }
}
</script>