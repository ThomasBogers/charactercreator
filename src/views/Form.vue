<template>
    <div class="general">
        <div id="form">
            <form v-on:submit.prevent="createNewCharacter" action="">
            <h1>Mon héros</h1>
            <p>Definissez quelques caracteristiques de votre Heros : </p>
            <p>Quel est votre Nom :</p>
                    <input type="text" id="formNameJoueur" v-model="playerName">
                    <label for="text"></label>
                <p>Choississez le Nom de votre Heros :</p>
                    <input type="text" id="formName" v-model="characterName">
                    <label for="text"></label>
                <p>Choissisez la Race de votre Heros :</p>
                    <select name="race" id="formRace" v-model="characterRace">
                        <option></option>
                        <option>Elfe</option>
                        <option>Halfelin</option>
                        <option>Humain</option>
                        <option>Nain</option>
                        <option>Demi-Elfe</option>
                        <option>Demi-Orque</option>
                        <option>Drakéide</option>
                        <option>Gnome</option>
                        <option>Tieffelin</option>
                        <option>Aarkocra</option>
                        <option>Génasi</option>
                        <option>Gnome des Profondeurs</option>
                        <option>Goliath</option>
                    </select>
                <p>Choissisez la Classe de votre Heros :</p>
                    <select name="race" id="formClasse" v-model="characterClass">
                    <option></option>
                    <option>Barbare</option>
                    <option>Barde</option>
                    <option>Clerc</option>
                    <option>Druide</option>
                    <option>Ensorceleur</option>
                    <option>Guerrier</option>
                    <option>Magicien</option>
                    <option>Moine</option>
                    <option>Paladin</option>
                    <option>Rôdeur</option>
                    <option>Roublard</option>
                    <option>Sorcier</option>
                    </select>
                <p>Donnez un Historique à votre Heros :</p>
                    <select name="race" id="formBackground" v-model="characterBackground">
                        <option></option>
                        <option>Acolyte</option>
                        <option>Artisan de Guilde</option>
                        <option>Artiste</option>
                        <option>Charlatan</option>
                        <option>Criminel</option>
                        <option>Enfants des Rues</option>
                        <option>Ermite</option>
                        <option>Héros du Peuple</option>
                        <option>Marin</option>
                        <option>Noble</option>
                        <option>Sage</option>
                        <option>Sauvageon</option>
                        <option>Soldat</option>
                        <option>Chasseur de Primes</option>
                        <option>Tourmenté</option>
                        <option>Voyageur</option>
                        <option>Captif</option>
                        <option>Idiot du Village</option>
                    </select>
                <p>Choissisez l'alignement de votre Héros :</p>
                    <select name="race" id="formAlign" v-model="characterAlignment">
                        <option></option>
                        <option>Loyal</option>
                        <option>neutre</option>
                        <option>Chaotique</option>
                    </select>
                <p>Répartissez {{ currentSkillsPoint }} vos Points restants  </p>
                    <p>Force :</p>
                        <input type="number" id="strength" v-if="currentSkillsPoint == 0" min="8" v-bind:max="characterStrength"  v-on:change='skillPoint' v-model="characterStrength">
                        <input type="number" id="strength" v-else min="8" max="18"  v-on:change='skillPoint' v-model="characterStrength">
                        <label for="pointStrength"></label>
                    <p>Dextérité :</p>
                        <input type="number" id="dexterity" v-if="currentSkillsPoint == 0" min="8" v-bind:max="characterDexterity" v-on:change='skillPoint'  v-model="characterDexterity">
                        <input type="number" id="dexterity" v-else min="8" max="18" v-on:change='skillPoint'        v-model="characterDexterity">
                        <label for="pointDexterity"></label>
                    <p>Constitution :</p>
                        <input type="number" id="constitution" v-if="currentSkillsPoint == 0" min="8" v-bind:max="characterConstitution" v-on:change='skillPoint' v-model="characterConstitution">
                        <input type="number" id="constitution" v-else min="8" max="18" v-on:change='skillPoint' v-model="characterConstitution">
                        <label for="pointConstitution"></label>
                    <p>Intelligence :</p>
                        <input type="number" id="intelligence" v-if="currentSkillsPoint == 0" min="8" v-bind:max="characterIntelligence" v-on:change='skillPoint' v-model="characterIntelligence">
                        <input type="number" id="intelligence" v-else min="8" max="18" v-on:change='skillPoint' v-model="characterIntelligence">
                        <label for="pointintelligence"></label>
                    <p>Sagesse :</p>
                        <input type="number" id="wisdom" min="8" v-if="currentSkillsPoint == 0" v-bind:max="characterWisdom" v-on:change='skillPoint' v-model="characterWisdom">
                        <input type="number" id="wisdom" min="8" v-else max="18" v-on:change='skillPoint' v-model="characterWisdom">
                        <label for="pointWisdom"></label>
                    <p>Charisme :</p>
                        <input type="number" id="charisma" v-if="currentSkillsPoint == 0" v-bind:max="characterCharisma" v-on:change='skillPoint' v-model="characterCharisma">
                        <input type="number" id="charisma" v-else min="8" value="8" max="18" v-on:change='skillPoint' v-model="characterCharisma">
                        <label for="pointCharisma"></label>
                    <button type='submit' class="formSend">Envoyer votre Heros au Combat</button>  
            </form>
        </div>
    </div>       
</template>
<script>
import Character from '../class/Character.js'
export default {
  name: 'Form',
  
  data(){
      return {  
          playerName: null,
          characterName: null,
          characterRace : null,
          characterClass: null,
          characterBackground: null,
          characterAlignment: null,
          characterStrength:8,
          characterDexterity:8,
          characterConstitution:8,
          characterIntelligence:8,
          characterWisdom:8,
          characterCharisma:8,
          skillsPointTotal: 72,
          currentSkillsPoint:24,
       }
  },
  methods: {
      skillPoint () {
          this.currentSkillsPoint = this.skillsPointTotal - this.characterStrength - this.characterDexterity - this.characterConstitution - this.characterIntelligence - this.characterWisdom - this.characterCharisma 
            
          
      },
      createNewCharacter() {
      let characterToAdd = new Character(
        this.characterName,
        this.playerName,
        this.characterAlignment,
        this.characterClass,
        this.characterRace,
        this.characterBackground,
        [this.characterStrength,
        this.characterDexterity,
        this.characterConstitution,
        this.characterIntelligence,
        this.characterWisdom,
        this.characterCharisma]
);    
        console.log(characterToAdd);
          let characters = localStorage.getItem('characters')
          characters = JSON.parse(characters)
          if(characters == null)
        {
              characters = [];
        }
        characters.push(characterToAdd);
        characters = JSON.stringify(characters);
        //console.log(characters);
        localStorage.setItem('characters', characters);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    /***********
CSS GENERAL createCharacter.html 
***********/

html {
    
    font-size: 62.5%;
}

.general {
    
    font-size: 2rem;
    line-height:2rem;
    
    font-family: 'Josefin Sans', sans-serif;
    
    width: auto;
    height: auto;
    
    box-sizing:border-box;

}
img {
    
    max-width: 100%;
    width:auto;
    height:auto;
    
}
/***************************
Mise en forme du Formulaire 
****************************/
/* balise de controle sur les affectations de point de skill pour les disposer sur 2 lignes
*/

form {
    color:rgb(243, 217, 217);
    background-color: #a28f53;
    filter: drop-shadow(10px 10px 10px black);
    
    border: rgb(255, 239, 239) 1px solid;
    border-radius: 20px;
    
    display:flex;
    flex-direction: column;
    padding:3rem 3rem;
    
    margin:auto;
    width:600px;
}

form input ,select {
    
    background-color: rgb(116, 105, 105);
    font-size: 2rem;

    width:250px;
}

input, select {
    text-align:center;
    margin: auto;
    margin-bottom: .1rem;
}
.formSend {
      color: #fffdfd;
      font-size: 15px;

      padding: 1rem;
      margin: 50px auto 0 auto;
      width: 300px;

      cursor: pointer;

      border: 3px double #fffdfd;
      border-radius: 10px;
      }
/***************************
CSS Titre
****************************/


p {
    text-decoration: underline;
}
</style>