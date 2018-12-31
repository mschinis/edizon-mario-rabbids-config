// Weapon factories
const PrimaryWeapon = require('./factories/primary');
const SecondaryWeapon = require('./factories/secondary');

// Characters to create the weapons for
const Mario = require('./characters/mario');
const Luigi = require('./characters/luigi');
const RabbidsPeach = require('./characters/rabbids_peach');
const RabbidsLuigi = require('./characters/rabbids_luigi');

// Order to be shown in the EdiZon app
const characters = [
    Mario,
    RabbidsPeach,
    RabbidsLuigi,
    Luigi
];

function assembleCharacterWeapons(character) {
    const characterName = character.characterName;
    const primaryWeapons = character.primary.map((weapon, index) => {
        return PrimaryWeapon(characterName, weapon, index);
    });
    const secondaryWeapons = character.secondary.map((weapon, index) => {
        return SecondaryWeapon(characterName, weapon, index);
    });

    return [...primaryWeapons, ...secondaryWeapons];
}

function exec() {
    return characters.map(assembleCharacterWeapons).reduce((prev, curr) => {
        return prev.concat(curr);
    }, []);
}

module.exports = exec;
