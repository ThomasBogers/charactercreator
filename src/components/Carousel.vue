<template>

    <div class="container">

        <div v-if="slidesNumber == 0"> 

            <p>Veuillez créer un personnage ! </p>

        </div>
        
        <div v-else class="slider">

            <div  v-bind:key="index" v-for="(character, index) in characters">

                <div v-if=" index == count  " class="characterDisplayDiv active">

                    <p>Player : {{ character._playerName }} </p>
                    <p>Personnage : {{ character._name }} </p>
                    <p>Race : {{ character._race }} </p>
                    <p>Classe : {{ character._class }} </p>
                    <p>Historique : {{ character._background }}  </p>
                    <p>Alignement : {{ character._alignment }} </p>
                    <p>Force :  {{ character._stats[0] }} </p>
                    <p>Dextérité :  {{ character._stats[1] }} </p>
                    <p>Constitution : {{ character._stats[2] }} </p>
                    <p>Intelligence : {{ character._stats[3] }} </p>
                    <p>Sagesse :  {{ character._stats[4] }} </p>
                    <p>Charisme : {{ character._stats[5] }} </p>

                </div>

            </div>
            
        </div>  

            <div class="cont-btn">
                <div class="btn-nav left" v-on:click="previousSlide"> ← </div>
                <div class="btn-nav right" v-on:click="nextSlide"> → </div>
            </div>
    </div> 

</template>



<script>

    export default {
        name:'Carousel',
        data () {
            return {

                characters: [],
                slidesNumber: 0,
                count:0,
            }

        },
        methods: {


            nextSlide () {


                if(this.count < this.slidesNumber -1)
                {
                    this.count ++;
                } 
                else
                {
                    this.count = 0;
                }

            
            },

            previousSlide () 
            {

                if (this.count > 0) 
                {
                    this.count--;
                }
                else 
                {
                    this.count = this.slidesNumber -1;
                }

            },

            keyPress(e) 
            {
                if (e.keyCode === 37) 
                {
                    this.nextSlide;
                }
                else if (e.keyCode === 39)
                {
                    this.previousSlide;
                }
            }
        },
        mounted()
        {
            if(localStorage.getItem('characters'))
            {
                this.characters = JSON.parse(localStorage.getItem('characters'));
                this.slidesNumber = this.characters.length;
            }
            console.log(this.characters);
            console.log(this.count);
            console.log(this.slidesNumber);
        }
    }
</script>

<style scoped>
*, ::before, ::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    background: #f1f1f1;
}

p{
    padding:0.5rem;
    margin:1rem;
}

.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 50px;

}

.slider .characterDisplayDiv {
    max-width: 100%;
    display:  none;
    
}

.characterDisplayDiv.active {
    display:flex;
    flex-direction: column;
    animation: fade 0.8s;
    border: rgb(255, 239, 239) 1px solid;
    border-radius: 20px;
    max-width: 40% ;
    margin: auto;


}

@keyframes fade {
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
}


.btn-nav {
    font-size: 50px;
    margin: 0 15px;
    cursor: pointer;
    color:white;
}
</style>