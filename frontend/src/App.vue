<template>
  <div id="app">

    
    <router-link to="/"></router-link>
    <router-link to="/post"></router-link>

    <router-view></router-view>

    
  </div>
</template>

<script>
// import Inscription from './views/Inscription.vue'

export default {
  name: 'App',
  methods:{
    
  },
  // data(){
  //   return{
  //     posts : []
  //   }
  // }
}







</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
