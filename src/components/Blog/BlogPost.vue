<template>
    <div class="container">
        <div class="box">
            <div class="header">
                <h2 class="is-size-2">{{post.title}}</h2>
            </div>
            
            <hr>
            <div class="summary" v-html="post.post_summary"></div>
            <hr>
            <div v-for="obj in post.content" :key="obj.id" >
                <p v-html="obj.value"></p>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
   data() {
       return {
           post: {}
       }
   },
   props: {
       id: {
           type: Number,
           required: true,
       }
   },
   methods: {
       getPost(id) {
           const url = `${this.$backEnd}/api/pages/${id}/`;
            this.$http.get(url)
            .then(response => response.data)
            .then(data => {
                this.post = data
            })
       }
   },
   mounted() {
       this.getPost(this.id)
        // const url = `${this.$backEnd}/api/pages/${this.id}/`;
        // this.$http.get(url)
        // .then(response => response.data)
        // .then(data => {
        //     this.post = data
        // })
    
   },
   watch: {
       $route(to) {
           this.getPost(to.params.id)
       }
   }
}
</script>

<style lang="scss">
    
</style>