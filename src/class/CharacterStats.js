class CharacterStats {
    constructor(statName, statValue)
    {
        this._name = statName;
        this._value = statValue;
    }

    get stat(){
        return this._value;
    }
}