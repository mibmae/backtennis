const client = require('./client');

module.exports = {
    async findAll() {
        // const data = await client.query(`
        //     SELECT * FROM articles where statut = 'true' ORDER by id DESC
        // `);
        const data = await client.query(`
            SELECT * FROM articles where enligne = 'true' ORDER by id DESC
        `);
        return data.rows;
    },

    async findNext(id) {
        const nextId = await client.query(`
        Select * from articles where id > $1 AND enligne = 'true' LIMIT 1;
    `, [id]);
    if (nextId.rowCount > 0) {
        return nextId.rows[0];
        }

    },
    async findPrev(id) {
        // const data = await (client.query(`SELECT id FROM bandeau`))
        // console.log('ALLDATA', data.rows);
        // console.log('ID CURRENT', id)
        const prevId = await client.query(`
        Select * from articles where id = (select max(id) from articles where id < $1) AND enligne = 'true';
    `, [id]);
    
    if (prevId.rowCount > 0) {
    return prevId.rows[0];
    }
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
        const data = await client.query(`
            SELECT * FROM articles where id = $1
        `, [ id ]);
        return data.rows;
    },
    async addVue(id) {

        const data = await client.query(`
            SELECT vue from articles WHERE id = $1
        `, [ id ]);

        const newVue = ++data.rows[0].vue;
        const dataUpdate = await client.query(`
            UPDATE articles SET vue = $2 WHERE id = $1
        `, [ id, newVue ]);

        const dataUpdated = await client.query(`
            SELECT vue from articles WHERE id = $1
        `, [ id ]);

        return dataUpdated.rows[0];
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
    async addArticle(title, content, date, addressImg) {
        
        const data = await client.query(`INSERT INTO articles(titre, date, enligne, image, contenu, vue) VALUES ($1, $2, 'true', $3, $4, 0) RETURNING *`, [title, date, addressImg, content]);
        return data;
    },
    async delArticle(id) {
        const data = await client.query(`DELETE FROM articles WHERE id = $1`, [id]);
        return data.rowCount;
    },

    async modifyArticle(datas) {
        const { id, title, image, content } = datas;
                const data = await client.query(`UPDATE articles SET titre = $1, contenu = $2, image = $3 WHERE id = $4`, [title, content, image, id]);
        return data;
    },

    async modifyStatut(id, statut) {
        const data = await client.query(`UPDATE articles SET statut = $2 WHERE id = $1`, [id, statut]);
        return data;
    },
    async modifyAllStatus(statut) {
        const data = await client.query(`UPDATE articles SET statut = $1`, [statut]);
        return data;
    },

    async toggleOnline(datas) {
        const { id, status } = datas;
        const data = await client.query(`UPDATE articles SET enligne = $2 WHERE id = $1`, [id, status])
        return data.rowCount;
    },
}


