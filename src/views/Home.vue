<template>
  <div class="home">
    <div class="bg-image" v-bind:style="styleObject"></div>
    <section class="hero is-medium is-bold ">
      <div class="hero-body">
        <h1 class="title" v-text="title"></h1>
        <hr>
        <h2 class="subtitle" v-text="subtitle"></h2>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      title: '',
      subtitle: '',
      styleObject: {
      },
    }
  },
  mounted() {
    this.$http.get(`${this.$backEnd}/api/pages/3/`)
    .then(response => response.data)
    .then(data => {
      this.styleObject = {
        backgroundImage: `url(${this.$backEnd}${data.background_image.meta.download_url})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        };
      this.title = data.title;
      this.subtitle = data.subtitle;
    });
  },
}
</script>

<style lang="css">
  .home{
    height: 95%;
  }
  .bg-image {
    height: 120%;
    filter: blur(2px);
    -webkit-filter: blur(2px);
  } 
  .hero {
    position: absolute;
    top: 33%;
    width: 100%;
    background: rgba(255, 255, 255, 0.65);
  }
</style>