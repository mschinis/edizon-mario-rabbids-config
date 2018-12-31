function PrimaryWeapon(characterName, weapon, index, overrides = {}) {
    const base = {
        name: `${index+1}. Secondary Weapon - ${weapon.index}`,
        category: characterName,
        intArgs: [
            0
        ],
        strArgs: [
            'myElements',
            '\\11',
            'myData',
            `${characterName}SecondaryWeaponsUnlocks`,
            `\\${weapon.index}`
        ],
        widget: {
            type: 'list',
            listItemNames: [
                'Locked',
                'Unlocked (Not seen)',
                'Unlocked',
                'Purchased'
            ],
            listItemValues: [
                0.000000,
                1.000000,
                2.000000,
                4.000000
            ]
        }
    };

    return Object.assign({}, base, overrides);
}

module.exports = PrimaryWeapon;
