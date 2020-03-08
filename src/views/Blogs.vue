<template>
    <div class="content">
        <h1 class="is-size-2">The Blogs of Gentlemen Scientists</h1>
        <div class="container ">
            <div class="columns">
                <div class="column" v-for="post in posts" :key="post.id">
                    <blog-card v-bind="post"></blog-card>
                </div>    
            </div>
            
        </div>
    </div>
</template>

<script>
import BlogCard from '../components/BlogCard.vue'
export default {
    name: 'BlogListPage',
    components: {
        'blog-card': BlogCard,
    },
    data() {
        return {
            posts: []
        }
    },
    mounted() {
        const additional_fields='post_title,post_image,post_summary'
        const url = `${this.$backEnd}pages/?type=blog.BlogDetailPage&fields=${additional_fields}`
        this.$http.get(url)
        .then(response => response.data)
        .then(data => {
            this.posts = data.items
        })
    }
}
</script>

<style lang="scss">
    
    .card {
        margin: 4em 4em 4em 4em;
    }
    .sub-heading {
        margin-top: -15px;
        padding-top: 0px;
        font-size: smaller;
        text-align: left;
    }
    
</style>