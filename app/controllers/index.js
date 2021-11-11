
const dataMapper = require('../dataMappers');

module.exports = {
    async findAll(_, response, next) {
        try {
            const data = await dataMapper.findAll();
            response.status(200).json({data});
        } catch (error) {
            next(error);
        }
    },
};
