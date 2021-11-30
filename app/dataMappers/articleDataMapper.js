const client = require('./client');

module.exports = {
    async findAll() {

        // ** Simulation :
        // const data = await client.query(`
        //     SELECT * FROM xxx
        // `);
        const data = await client.query(`
            SELECT * FROM articles where statut = 'true' ORDER by id DESC
        `);
        // const data = [...client];
        return data.rows;
    },
    async findAllAdmin() {

        // ** Simulation :
        // const data = await client.query(`
        //     SELECT * FROM xxx
        // `);
        const data = await client.query(`
            SELECT * FROM articles ORDER by id DESC
        `);
        // const data = [...client];
        return data.rows;
    },
    async findById(id) {

        // ** Simulation
        const data = await client.query(`
            SELECT * FROM articles where id = $1
        `, [ id ]);

        // const data = client.filter(item => item.id == id);
        return data.rows;
    },
    async findBySlug(slug) {

        // ** Simulation
        // const data = await client.query(`
        //     SELECT * FROM xxx WHERE id = ?
        // `, [ id ]);
        // console.log('okslug');
        const data = await client.query(`
            SELECT * FROM articles WHERE slug = $1
        `, [ slug ]);

        // const data = client.filter(item => item.slug == slug);
        return data.rows;
    },
    async addArticle(title, content, date) {
        let str = title.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        str = str.replace(/'/g, '');
        str = str.toLowerCase();
        const slug = str.split(" ").join("");
        const data = await client.query(`INSERT INTO articles(title, text, date, slug, statut) VALUES ($1, $2, $3, $4, false) RETURNING *`, [title, content, date, slug]);
        return data;
    },
    async delArticle(id) {
        const data = await client.query(`DELETE FROM articles WHERE id = $1`, [id]);
        return data.rowCount;
    },

    async modifyArticle(id, title, content, date) {
        let str = title.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        str = str.replace(/'/g, '');
        str = str.toLowerCase();
        const slug = str.split(" ").join("");
        const data = await client.query(`UPDATE articles SET title = $1, text = $2, date = $3, slug = $4 WHERE id=$5`, [title, content, date, slug, id]);
        return data;
    },

    async modifyStatut(id, statut) {
        const data = await client.query(`UPDATE articles SET statut = $2 WHERE id = $1`, [id, statut]);
        return data;
    },
    async modifyAllStatus(statut) {
        const data = await client.query(`UPDATE articles SET statut = $1`, [statut]);
        return data;
    }
}


