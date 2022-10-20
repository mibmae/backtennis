const searchDataMapper = require('../dataMappers/searchDataMapper');

module.exports = {
    async search(request, response, next) {
        try {
            const data = await searchDataMapper.find(request.params.term);
            response.status(200).json({
               data
                })
        } catch (error) {
            next(error);
        }
    },
    async searchBandeau(request, response, next) {
        try {
            const data = await searchDataMapper.findBandeau(request.params.term);
            response.status(200).json({
               data
                })
        } catch (error) {
            next(error);
        }
    },
}