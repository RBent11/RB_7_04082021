<template>
  <div class="post-page-container">

    <h1>Posts</h1>
    <ul>
      <li v-for="(post, index) in posts" :key="index">{{ post }}</li>
    </ul>

  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'PostPage',
 
  data(){
    return{
      posts : []
    }
  },
  created(){
    axios.get('http://localhost:3000/api/post/all')
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

li{list-style-type : none;}

</style>
