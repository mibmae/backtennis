const client = require('./client');

module.exports = {
    async findAll() {
        return [...client];
    },
    async findById(id) {
        const data = client.filter(item => item.id == id);
        if (data.length === 0) {
            // Simulation d'une erreur 500 ('Internal server error')
            throw new Error ('Invalid id');
        } else {
            return data;
        }
    },
}