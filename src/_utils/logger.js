function greenLog() {
    console.log('\x1b[32m', ...arguments);
}

function redLog() {
    console.log('\x1b[31m', ...arguments);
}

module.exports = { greenLog, redLog };
