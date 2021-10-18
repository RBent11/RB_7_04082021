<template>
  <div class="hello container">

    <h1>{{ msg }}</h1>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      msg : "Bonjour à tous"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

li{list-style-type : none;}

</style>
