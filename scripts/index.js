const { logRed } = require('../src/_utils/logger');

const script = process.argv[2];

switch(script) {
    case 'build':
        return require('./build')();
    case 'deploy':
        return require('./deploy')();
    case undefined:
        return logRed('Invalid usage of the cli. Please check package.json for allowed usages.');
    default:
        return logRed('Invalid parameter:', script);
}
