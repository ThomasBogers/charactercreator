<template>
    <div>
       
        <button v-on:click="changePage('page-form')">Créer</button>
        <button v-on:click="changePage('carousel')">Accueil</button>
       <!-- <button v-on:click="changePage()">supprimer   </button> -->

    </div>    
</template>

<script>
import { bus } from '../main' 

export default {
    name: 'appnav',
    data(){
        return{

        }
    },
    methods:{
        changePage: function(pagetodisplay){
            bus.$emit('changePage', pagetodisplay)
            }
    }
}
</script>

<style scoped>

</style>
