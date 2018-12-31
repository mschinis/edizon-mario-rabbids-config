function greenLog() {
    console.log('\x1b[32m%s\x1b[0m', ...arguments);
}

function redLog() {
    console.log('\x1b[31m%s\x1b[0m', ...arguments);
}

module.exports = { greenLog, redLog };
