<template>
  <div class="container">

    <div class="card mb-5"  style="width : 300px" v-for="(post, index) in posts" :key="index">

      <h5 class="card-title">{{ post.title }}</h5>
      <p class="card-text">{{ post.content }}</p>
      
        
       
    </div>
<!--
    <h1>Posts</h1>
    <ul class="list-group">
      <li class="list-group-item mb-3" v-for="(post, index) in posts" :key="index">{{ post.title }} {{ post.content }}</li>
    </ul>
-->




  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'PostPage',
 
  data(){
    return{
      posts : [],
     
    }
  },
  created(){
    axios.get('http://localhost:3000/api/post/')
      .then(res => {
        console.log(res)
        this.posts = res.data.rows
        for (let index = 0; index < this.posts.length; index++) {
          //const element = this.posts[index];
          
        }
        })
      .catch(err => console.log(err))
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

li{list-style-type : none;}

</style>
