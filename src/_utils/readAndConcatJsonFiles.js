const fs = require('fs');

function readAndConcatJsonFiles(jsonFiles) {
    return jsonFiles.map(fileName => {
        const fileContents = fs.readFileSync(fileName);
        return JSON.parse(fileContents);
    })
    .reduce((prev, curr) => {
        return prev.concat(curr);
    }, []);
}

module.exports = readAndConcatJsonFiles;
