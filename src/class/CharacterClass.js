class CharacterClass {
    constructor(className, maxHealth, healthDice, startingGold, proficientWeapons, proficientArmors, spells, spellSlots, capacities, specialty, armorClass)
    {
        /**
         * @param className {string}
         * @param maxHealth {Number}
         * @param healthDice {number}
         * @param startingGold {Number}
         * @param proficientWeapons {Array}
         * @param proficientArmors {Array}
         * @param spells {Object array}
         * @param spellSlots {Number}
         * @param capacities {Object array}
         * @param specialty {Class}
         * @param armorClass {number}
         */

        this._className = className;
        this._maxHealth = healthDice + character.constitutionModifier;
        this._startingGold = startingGold;
        this._proficientWeapons = proficientWeapons;
        this._proficientArmors = proficientArmors;
        this._spells = spells;
        this._spellSlots = spellSlots;
        this._capacities = capacities;
        this._specialty = specialty;
        this._armorClass = armorClass;
    }


}