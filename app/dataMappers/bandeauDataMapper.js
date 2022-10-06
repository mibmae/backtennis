const client = require('./client');

module.exports = {
    async findAll() {
        const data = await client.query(`
        SELECT * FROM bandeau where enligne = 'true' ORDER by date DESC
    `);
    // console.log(data.rows)
    // const data = [...client];
    return data.rows;
    },
    async findAllAdmin() {
        const data = await client.query(`
        SELECT * FROM bandeau ORDER by id DESC
    `);
    // console.log(data.rows)
    // const data = [...client];
    return data.rows;
    },
    async findNext(id) {
        const nextId = await client.query(`
        Select * from bandeau where id > $1 LIMIT 1;
    `, [id]);
    console.log(nextId.rowCount)
    if (nextId.rowCount > 0) {
        return nextId.rows[0];
        }

    },
    async findPrev(id) {
        // const data = await (client.query(`SELECT id FROM bandeau`))
        // console.log('ALLDATA', data.rows);
        // console.log('ID CURRENT', id)
        const prevId = await client.query(`
        Select * from bandeau where id = (select max(id) from bandeau where id < $1) ;
    `, [id]);
    
    if (prevId.rowCount > 0) {
    return prevId.rows[0];
    }
    },
    async findById(id) {
        const data = await client.query(`
        SELECT * FROM bandeau where id = $1 ORDER by id DESC
    `, [id]);
    // console.log(data.rows)
    // const data = [...client];
    return data.rows;
    },
    async addBandeau(datas) {
        const { title, date, content, addressImg } = datas;
        // console.log(datas)
        const data = await client.query(`INSERT INTO bandeau (titre, date, contenu, image) VALUES ($1, $2, $3, $4)`, [title, date, content, addressImg])
        return data.rowCount;
    },
    async modifyBandeau(datas) {
        const { id, title, date, content, image } = datas;
        const data = await client.query(`UPDATE bandeau SET titre = $1, date = $2, contenu = $3, image = $5  WHERE id = $4`, [title, date, content, id, image])
        // console.log(data.rowCount)
        return data.rowCount;
    },
    async deleteBandeau(id) {
        const data = await client.query(`DELETE from bandeau WHERE id = $1`, [id])
        console.log(data.rowCount)
        return data.rowCount;
    },
    async toggleOnline(datas) {
        // console.log(datas)
        const { id, status } = datas;
        const data = await client.query(`UPDATE bandeau SET enligne = $2 WHERE id = $1`, [id, status])
        // console.log(data.rowCount)
        // return data.rowCount;
    },

}