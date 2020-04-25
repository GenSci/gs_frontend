<template>
    <div>
        <div class="card is-centered">
            <header class="card-header">
                <div class="card-image" v-if="$attrs.post_image">
                    <figure class="image is-4by3">
                        {{post_image}}
                    </figure>
                </div>
                <div class="card-header-title header">
                    <p>{{$attrs.post_title}}</p>
                </div>
            </header>
            <div class="card-content">
                <p class="sub-heading">Published on {{$attrs.meta.first_published_at}}</p>
                <div v-html="$attrs.post_summary"></div>
            </div>
            <footer class="card-footer">
                <a :href="$attrs.meta.detail_url" class="card-footer-item">Read More</a>
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