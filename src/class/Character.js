export default class Character
{

    /**
     * @param name {string} - name of the character
     * @param playerName {string} - name of the player
     * @param alignment {string} - moral alignment of the character
     * @param characterClass {object} class CharacterClass
     * @param race {Object} class characterRace
     * @param background {Object} class characterBackground
     * @param characterStats {Object} class CharacterStats
     * @param proficiencyBonus {number} given by the function proficiencyBonus 
     * @param playerLevel {number} - level of the character 
     */
    
    constructor(name, playerName, alignment,characterClass, race, background, characterStats, playerLevel=1)
    {
        this._name = name;
        this._playerName = playerName;
        this._alignment = alignment;
        this._race = race;
        this._background = background;
        this._stats = characterStats;
        //this._skills = characterSkills;
        this._class = characterClass;
        //this._proficiencyBonus = this.proficiencyBonus();
        this._characterMaxHealth = characterClass._maxHealth;
        this._characterModifiers =
        {
            strengthModifier       :   this.getModifiers(this._stats.strength),
            constitutionModifier   :   this.getModifiers(this._stats.constitution),
            dexterityModifier      :   this.getModifiers(this._stats.dexterity),
            intelligenceModifier   :   this.getModifiers(this._stats.intelligence),
            wisdomModifier         :   this.getModifiers(this._stats.wisdom),
            charismaModifier       :   this.getModifiers(this._stats.charisma)
        };
        this._playerLevel = playerLevel;
            
        
    }

    set name(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    get alignment() {
        return this._alignment;
    }

    get race() {
        return this._race;
    }

    get background() {
        return this._background;
    }

    get strength() {
        return this._stats._strength;
    }

    get dexterity() {
        return this._stats._dexterity;
    }

    get constitution() {
        return this._stats._constitution;
    }

    get charisma(){
        return this._stats._charisma;
    }

    get wisdom() {
        return this._stats._wisdom;
    }

    get intelligence() {
        return this._stats._intelligence;
    }

    
/**
 * @returns proficiency bonus based on character level
 */
    /*proficiencyBonus() 
    {
        let level = this._playerLevel;
        
        switch(level)
        {
            case 1: 
            case 2:
            case 3:
            case 4: 
                return 2;
            case 5: 
            case 6:
            case 7:
            case 8:
                return 3;
            case 9:
            case 10:
            case 11:
            case 12:
                return 4;
            case 13:
            case 14:
            case 15:
            case 16:
                return 5;
            case 17:
            case 18:
            case 19:
            case 20:
                return 6;
        }   
    }*/
    
    getModifiers(stat) {
        switch (stat){
            case 8:
            case 9:
                return -1
            case 10:
            case 11: 
                return 0
            case 12:
            case 13:
                return 1
            case 14:
            case 15:
                return 2
            case 16:
            case 17:
                return 3
            case 18:
            case 19: 
                return 4
            case 20: 
                return 5
            
        }
    }
    
}



