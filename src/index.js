const fs = require('fs');
const path = require('path');

// Config generator configuration file
const config = require('./config');

// Assets
const currencies = require('./currencies');
const museum = require('./museum');
const weapons = require('./weapons');

const VERSIONS_SUPPORTED = config.versionsSupported.join(' ');

function constructEdiZonConfig() {
    // Base of the EdiZon configuration file
    const base = {
        beta: config.isBeta,
        [VERSIONS_SUPPORTED]: {
            saveFilePaths: ['user'],
            files: 'RKB\\d_Slot\\.SAVE',
            filetype: 'json',
            items: []
        }
    };

    // Merge all cheats in the order we want them
    // to appear in the EdiZon menu
    const items = [
        currencies(),
        museum(),
        weapons()
    ].reduce((prev, curr) => prev.concat(curr));

    // Inject the assembled cheats
    base[VERSIONS_SUPPORTED].items = items;

    return base;
}

function storeEdiZonConfig(edizonConfig) {
    const outputFile = path.resolve(__dirname, '../', `${config.gameID}.json`);
    return fs.writeFileSync(outputFile, JSON.stringify(edizonConfig));
}

module.exports = {
    constructEdiZonConfig,
    storeEdiZonConfig
};

