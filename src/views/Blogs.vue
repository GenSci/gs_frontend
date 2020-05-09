<template>
    <div class="content">
        <div class="columns">
            <div class="column is-one-quarter">
                <blog-sidebar></blog-sidebar>
            </div>
            <div class="column">
                <h1 class="is-size-2">The Blogs of Gentlemen Scientists</h1>
                <router-view></router-view>
            </div>
                
                
        </div>
        
    </div>
</template>

<script>

import BlogSidebar from '../components/Blog/BlogList_sidebar'
export default {
    name: 'BlogListPage',
    components: {
        'blog-sidebar': BlogSidebar,
    },
    data() {
        return {
            posts: []
        }
    },
    mounted() {
        const additional_fields='post_title,post_image,post_summary'
        const url = `${this.$backEnd}/api/pages/?type=blog.BlogDetailPage&fields=${additional_fields}`
        this.$http.get(url)
        .then(response => response.data)
        .then(data => {
            this.$store.state.posts = data.items  // <- HAKCY - USE VUEX TO MANAGE STATE 
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