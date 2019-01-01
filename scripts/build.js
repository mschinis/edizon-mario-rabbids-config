const { constructEdiZonConfig, storeEdiZonConfig } = require('../src');
const { greenLog, redLog } = require('../src/_utils/logger');

function run() {
    try {
        const ediZonConfig = constructEdiZonConfig();
        storeEdiZonConfig(ediZonConfig);
        greenLog('Config created successfully!');
    } catch (err) {
        redLog(err.message);
    }
}

module.exports = run;
