<template>
    <div>
        <div class="container ">
            <div class="columns">
                <div class="column" v-for="post in posts" :key="post.id">
                    <blog-card v-bind:post="post"></blog-card>
                </div>    
            </div>
        </div>
    </div>
</template>

<script>
import BlogCard from '@/components/Blog/BlogCard'
export default {
    components: {
        'blog-card': BlogCard,
    },
    props: {
        posts: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="scss">
    
</style>