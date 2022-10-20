const client = require('./clientident');

module.exports = {

    async findUserByEmail(email, password) {      
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
        // const hashedPassword = await argon2.hash(password);
        if(await argon2.verify(result1.rows[0].password, password)) { console.log('ok') }
        const data = client.filter(item => item.email === email && item.password === hashedPassword);
        // const data = client.filter(item => item.email === email && item.password === hashedPassword);
        return data[0];

    },

    async getUserById(request, response, next) {
        const data = client.filter(item => item.id === request);
        // console.log(data[0].email)
        return data[0].email;
    },
    
    async createUser(name, email, password) {
        
        // TODO MySQL
        // await client.query(`
        //     INSERT INTO xxx SET ?
        // `, { name, email, password });
        // const data = await client.query(`
        //     SELECT * FROM user WHERE id = (LAST_INSERT_ID())
        // `);
        // return data[0][0];
        
        // TODO PostgresQL
        // await client.query(`
        //     INSERT INTO xxx (name, email, message)
        //     VALUES ($1, $2, $3)
        //     RETURNING *
        // `, [name, email, message]);        
        // return data.rows[0];

        // ** Simulation avec de la fake data ATTENTION : non-perssitant
        const data = [
            {
            id: 3,
            name: name,
            email: email,
            password: password
            }
        ];
        return data[0];
    },

};