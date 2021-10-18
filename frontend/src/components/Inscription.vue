<template>
<div class="container">

    <h1 v-if="mode == 'login'">Connexion</h1>
    <h1 v-else>Inscription</h1>

    
    <div class = "container mt-5" v-if="mode == 'login'">

      <form class="form" @submit.prevent="goToProfile">



        <div class="form-group mt-3">
          <label for="email">Email address</label>
          <input v-model="formData.email" type="email" class="form-control" id="email" placeholder="Enter email">
          
        </div>

        <div class="form-group mt-3">
          <label for="password">Password</label>
          <input v-model="formData.password" type="password" class="form-control" id="password" placeholder="Password">
        </div>
    
        <button type="submit" class="btn btn-primary mt-3 mb-3" >Connexion</button>
        

      </form>

<span v-if="mode == 'login'" @click="switchCreateProfile">Tu n'as pas de compte ?</span>
<span v-else @click="switchToLogin">Tu as déjà un compte ?</span>

    </div>


    
    
    <div class = "container mt-5" v-else>

      <form class="form" @submit.prevent="createProfile">

        <div class="form-group">
          <label for="firstName">First name</label>
          <input v-model="formData.firstName" type="text" class="form-control" id="firstName" placeholder="Enter first name">
        </div>

        <div class="form-group mt-3">
          <label for="lastName">Last name</label>
          <input v-model="formData.lastName" type="text" class="form-control" id="lastName" placeholder="Enter last name">       
        </div>


        <div class="form-group mt-3">
          <label for="email">Email address</label>
          <input v-model="formData.email" type="email" class="form-control" id="email" placeholder="Enter email">
          
        </div>

        <div class="form-group mt-3">
          <label for="password">Password</label>
          <input v-model="formData.password" type="password" class="form-control" id="password" placeholder="Password">
        </div>
    
        
        <button type="submit" class="btn btn-primary mt-3 mb-3">Incription</button>

      </form>

<span v-if="mode == 'login'" @click="switchCreateProfile">Tu n'as pas de compte ?</span>
<span v-else @click="switchToLogin">Tu as déjà un compte ?</span>

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
        firstName:null,
        lastName:null,
        email: null,
        password: null
      },
      mode : 'login'
    }
  },

  methods:{
    createProfile(){
      console.log("Vous êtes inscrit !")
      console.log(this.formData)
      axios.post('http://localhost:3000/api/signup', this.formData)
        .then(res => console.log(res))
        .catch(err => console.log(err)) 
    },

    goToProfile(){
      console.log("Vous êtes connecté ! ")
      axios.post('http://localhost:3000/api/login', this.formData)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    },

    switchCreateProfile(){
      this.mode = 'create';
    },

    switchToLogin(){
      this.mode = 'login';
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



