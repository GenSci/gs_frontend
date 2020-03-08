<template>
    <div>
        <div class="card is-centered">
            <header class="card-header">
                <div class="card-image" v-if="post_image">
                    <figure class="image is-4by3">
                        {{post_image}}
                    </figure>
                </div>
                <div class="card-header-title header">
                    <p>{{post_title}}</p>
                </div>
            </header>
            <div class="card-content">
                <p class="sub-heading">Published on {{meta.first_published_at}}</p>
                <div v-html="post_summary"></div>
            </div>
            <footer class="card-footer">
                <a href="" class="card-footer-item">Read More</a>
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
}
</script>