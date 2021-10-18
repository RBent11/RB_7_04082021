<template>
<div class="container">

    <h1>Login</h1>
        <div class = "container mt-5">

      <form class="form" @submit.prevent="login">

        <div class="form-group mt-3">
          <label for="email">Email address</label>
          <input v-model="formData.email" type="email" class="form-control" id="email" placeholder="Enter email">
          
        </div>

        <div class="form-group mt-3">
          <label for="password">Password</label>
          <input v-model="formData.password" type="password" class="form-control" id="password" placeholder="Password">
        </div>
    
        <button type="submit" class="btn btn-primary mt-3"
        >Submit</button>

      </form>

    </div>
  
</div>
  
</template>

<script>
// const axios = require('axios');
import axios from 'axios';

export default {
  name: 'Inscription',
  data(){
    return{
      formData : {
        email: null,
        password: null
      }
    }
  },

  methods:{
    login(){
      console.log("Vous êtes connecté ! ")
      axios.post('http://localhost:3000/api/login', this.formData)
        .then(res => console.log(res))

        .catch(err => console.log(err))

      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container{
  width: 370px;
 

}

</style>



