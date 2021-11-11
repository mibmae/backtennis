const client = require('./client');

module.exports = {
    async findAll() {

        // ** Simulation :
        // const data = await client.query(`
        //     SELECT * FROM xxx
        // `);

        const data = [...client];
        return data;
    },
    async findById(id) {

        // ** Simulation
        // const data = await client.query(`
        //     SELECT * FROM xxx WHERE id = ?
        // `, [ id ]);

        const data = client.filter(item => item.id == id);
        return data;
    },
}