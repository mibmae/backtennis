const client = require('./client');

module.exports = {
    async findAll() {
        return [...client];
    },
}