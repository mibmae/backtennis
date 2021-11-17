const client = require('./client');

module.exports = {
    async findAll() {

        // TODO MySQL
        // const data = await client.query(`
        //     SELECT * FROM xxx
        // `);
        // return data[0]

        // TODO PostgresQL
        // const data = await client.query(`
        //     SELECT * FROM xxx
        // `);
        // return data.rows;

        // ** Simulation avec de la fake data
        const data = [...client];
        return data;
    },
    async findById(id) {

        // TODO MySQL
        // const data = await client.query(`
        //     SELECT * FROM xxx WHERE id = ?
        // `, [ id ]);
        // return data[0][0];

        // TODO PostgresQL
        // const data = await client.query(`
        //     SELECT * FROM xxx WHERE id = $1
        // `, [ id ]);
        // return data.rows[0];
        
        // ** Simulation avec de la fake data
        const data = client.filter(item => item.id == id);
        return data;
    },
}