<template>
  <div id="app">

    <navbar/>

    <div class="container">
      <router-view/>
    </div>




  </div>
</template>

<script>

import navbar from './components/Navbar'
export default {
  name: 'App',
  components: {
    navbar
  }
}
</script>

<style>
  @import "~materialize-css/dist/css/materialize.min.css";
    body{
        margin: 0px;
        padding: 0px;
    }
  .container{
    max-width: 1400px;
    margin: 0 auto;
  }
</style>
