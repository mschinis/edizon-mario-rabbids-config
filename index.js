const { constructEdiZonConfig, storeEdiZonConfig } = require('./src');

try {
    const ediZonConfig = constructEdiZonConfig();
    storeEdiZonConfig(ediZonConfig);
    console.log('Config created successfully!');
} catch (err) {
    console.error(err);
}
