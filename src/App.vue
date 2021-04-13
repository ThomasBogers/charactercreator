<template>
  <div id="app">
    <Accueil />
  </div>
</template>

<script>

import Accueil from './views/Accueil.vue'

export default {

  name: 'App',

  components: {

    'Accueil': Accueil
  }

}
</script>

<style>


html
{
  font-size:62.5%;
}

body {
    font-size: 1.6rem;
    line-height:2rem;

    font-family: 'Josefin Sans', sans-serif;
     width: auto;
    height: auto;
    background-size: cover;
    font-family: Avenir, Helvetica, Arial, sans-serif;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    text-align: center;
    color: #a28f53;

    margin-top: 10rem;
    margin-bottom:10rem;

}

.container
{
    border: rgb(255, 239, 239) 1px solid;
    border-radius: 20px;
    background-color: #a28f53;
    filter: drop-shadow(10px 10px 10px black);
}

.cont-btn {
    width: 100%;
    height: auto;
    border: rgb(255, 239, 239) 1px solid;
    border-radius: 20px;
    box-shadow: 0 10px 10px rgba(0,0,0,0.3);
    display: flex;
    padding: 1.5rem;
    justify-content: space-between;
    margin-top:1rem;
}

button {
      color:rgb(243, 217, 217);
      font-size: 15px;

      padding: 1rem;
      margin: 50px 0 0 0;
      width:30%;

      background-color:#a28f53;
      cursor: pointer;

      border: 3px double grey;
      border-radius: 10px;
}
#app {
    font-family : 'Josefin Sans', sans-serif;
    color:rgb(243, 217, 217);
    font-size: 1.6rem;
    line-height:2rem;
    
    font-family: 'Josefin Sans', sans-serif;
    
    min-width: 50vh;
    height: auto;
    
    background-size: cover;
    
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

h1 {
    color:#a28f53;
    text-decoration: underline;
    font-weight: bolder;
    font-size:6rem;

    text-align: center;

    margin-top: 4rem;
    margin-bottom: 2.6rem;
}
</style>
