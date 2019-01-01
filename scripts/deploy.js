const PromiseFTP = require('promise-ftp');
const { greenLog, redLog } = require('../src/_utils/logger');
const config = require('../src/config');

function readEdizonConfig() {
    try {
        return JSON.stringify(require(`../${config.gameID}.json`));
    } catch (e) {
        redLog('EdiZon config not found. Please make sure file has been geneated.');
        process.exit(1);
    }
}

function run() {
    const edizonConfig = readEdizonConfig();
    const edizonConfigRemotePath = `/EdiZon/editor/${config.gameID}.json`;

    const ftp = new PromiseFTP();
    return ftp.connect(config.ftp)
        .then(() => {
            return ftp.put(edizonConfig, edizonConfigRemotePath);
        })
        .then(() => {
            greenLog('EdiZon config uploaded successfully!');
            return ftp.end();
        })
        .catch((err) => {
            redLog(err.message);
            process.exit(1);
        });
}

module.exports = run;
