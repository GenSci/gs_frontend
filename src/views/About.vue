<template>
  <div class="container about">
    <h1 class="notification is-info">{{title}}</h1>
    <div 
      v-bind:key="section.id" 
      v-for="section in sections" 
      v-html="section.value.text"
      :class="section.value.classes">
    </div>
  </div>
</template>

<script>
// import text_div from '../components/TextDiv.vue';
// import AboutSection from '../components/AboutSection.vue';


export default {
  name: 'about',
  // components: {AboutSection},
  data () {
    return {
      sections: [],
      title: '', 
    }
  },
  mounted() {
    this.$http.get('http://localhost:8000/api/pages/10')
          .then(response =>  (
            this.title = response.data.title,
            this.sections = response.data.content
            ))
  }
  
}
</script>

<style lang="scss">
  .about {
    margin-top: 0.5em;
  }
  .quote {
    background-color: #ededed;
    border-left: 4px solid #888;
    margin-left: 2em;
  }
  .quote-explanation {
    color:#454545;
    font-style: italic;
    padding-bottom: 2em
  }
  .purpose {
    background-color: is-primary;
  }
  .focus {
    margin-top: 4em;
  }
</style>