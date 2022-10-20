const client = require('./client');

module.exports = {
    async find(text) {
        const data = await client.query(`
            SELECT * FROM articles where titre ILIKE $1 AND enligne = 'true' ORDER by id DESC
        `, ['%' + text + '%']);
        return data.rows
    },
    async findBandeau(text) {
        const data = await client.query(`
            SELECT * FROM bandeau where titre ILIKE $1 AND enligne = 'true' ORDER by id DESC
        `, ['%' + text + '%']);
        return data.rows
    },
}


