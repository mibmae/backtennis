const client = require('./client');

module.exports = {

    async findUserByEmail(email) {
        
        // TODO MySQL
        // const data = await client.query(`
        //     SELECT * FROM xxx
        //     WHERE email = ?
        // `, [ email ]);
        // return data[0][0];

        // TODO PostgresQL
        // const data = await client.query(`
        //     SELECT * FROM user
        //     WHERE email = $1
        // `, [ email ]);
        // return data.rows[0];

        // ** Simulation avec de la fake data
        const data = client.filter(item => item.id == id);
        return data;

    },
    
    async createUser(name, email, password) {
        await client.query(`
            INSERT INTO user SET ?
        `, { name, email, password });
        const data = await client.query(`
            SELECT * FROM user WHERE id = (LAST_INSERT_ID())
        `);
        return data[0][0];   
    },

};