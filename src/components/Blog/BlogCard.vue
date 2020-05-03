<template>
    <div>
        <div class="card is-centered">
            <header class="card-header">
                <div class="card-image" v-if="post.post_image">
                    <figure class="image is-4by3">
                        <img :src="post_image">
                    </figure>
                </div>
                <div class="card-header-title header">
                    <p>{{post.title}}</p>
                </div>
            </header>
            <div class="card-content">
                <p class="sub-heading">Published on {{post.meta.first_published_at}}</p>
                <div v-html="post.post_summary"></div>
            </div>
            <footer class="card-footer">
                <!-- TODO: Nest this router link so that it doesn't overwrite the enire page.-->
                <router-link :to="{name: 'BlogPost', params: {id: post.id}}" class="card-footer-item">Read More</router-link>
            </footer>
        </div>
    </div>
</template>

<style lang="scss">
    
</style>

<script>
export default {
    name: 'BlogCard',
    props: {
        post: Object,
    },
    computed: {
        post_image() {
            if (this.post.post_image) {
                return `${this.$backEnd}${this.post.post_image.meta.download_url}`
            } else{
                return ''
            }
        }
    }
}
</script>