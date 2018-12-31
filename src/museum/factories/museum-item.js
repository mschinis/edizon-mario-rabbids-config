function MuseumItem(type, menuName, itemName, index) {
    return {
        name: `${menuName} - ${itemName}`,
        category: 'Museum',
        intArgs: [ 0 ],
        strArgs: [
            'myElements',
            '\\11',
            'myData',
            `Reward${type}`,
            `\\${index}`,
            'myStatus'
        ],
        widget: {
            type: 'list',
            listItemNames: [
                'Locked',
                'Unlocked at world 1',
                'Unlocked at world 2',
                'Unlocked at world 3',
                'Unlocked at world 4'
            ],
            listItemValues: [
                0.000000,
                1.000000,
                2.000000,
                3.000000,
                4.000000
            ]
        }
    };
}

module.exports = MuseumItem;
