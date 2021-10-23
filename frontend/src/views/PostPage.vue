<template>
  <div class="post-page-container">

    <h1>Posts</h1>
    <ul>
      <li v-for="(post, index) in posts" :key="index">{{ post }}</li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'PostPage',
 
  data(){
    return{
      posts : []
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

li{list-style-type : none;}

</style>
