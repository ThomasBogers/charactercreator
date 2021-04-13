<template>
  <div id="accueil">
    <component v-bind:is="page" v-on:changePage="changeThePage($event)"></component>
    <app-nav></app-nav>
  </div>
</template>

<script>

import Carousel from '../components/Carousel.vue';
import Boutons from '../components/Boutons.vue';
import Form from '../views/Form';
import { bus } from '../main';


export default {
  name: 'Accueil',

  components: {
    'carousel': Carousel,
    'app-nav': Boutons,
    'page-form': Form,
  },
  data(){
    return{
      page:"carousel" 
    }
  },
  created(){
    bus.$on('changePage',(data)=>{
      this.page=data;
    })
  }
}
</script>

<style scoped>
    
</style>