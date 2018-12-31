const path = require('path');
const readAndConcatJsonFiles = require('../_utils/readAndConcatJsonFiles');

const jsonFiles = [
    'artwork.json',
    'soundtracks.json',
    '3d_models.json',
    'tarots.json'
];

function exec() {
    const filePaths = jsonFiles.map(fileName => path.resolve(__dirname, fileName));
    return readAndConcatJsonFiles(filePaths)
}

module.exports = exec;
