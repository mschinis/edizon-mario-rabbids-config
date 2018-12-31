const path = require('path');
const MuseumItem = require('./factories/museum-item');

// Museum items
const artwork = require('./items/artwork');
const soundtracks = require('./items/soundtracks');
const models = require('./items/3d_models');
const tarots = require('./items/tarots');

const itemGroups = [
    artwork,
    soundtracks,
    models,
    tarots
];

function exec() {
    // Map the museum item groups to the MuseumItem factory
    return itemGroups.map(itemGroup => {
        return itemGroup.items.map((item, index) => {
            return MuseumItem(itemGroup.type, itemGroup.menuName, item, index);
        });
    })
    // Flatten the groups of items
    .reduce((prev, curr) => {
        return prev.concat(curr);
    }, []);
}

module.exports = exec;
