const bandeauDataMapper = require('../dataMappers/bandeauDataMapper');

module.exports = {

    async findAll(_, response, next) {
        try {
            const data = await bandeauDataMapper.findAll();
            response.status(200).json({data});
        } catch (error) {
            next(error);
        }
    },
    async findNext(request, response, next) {
        try {
            const data = await bandeauDataMapper.findNext(request.params.id);
            response.status(200).json({data});
        } catch (error) {
            next(error);
        }
    },
    async findPrev(request, response, next) {
        try {
            const data = await bandeauDataMapper.findPrev(request.params.id);
            response.status(200).json({data});
        } catch (error) {
            next(error);
        }
    },
    async findAllAdmin(_, response, next) {
        try {
            const data = await bandeauDataMapper.findAllAdmin();
            response.status(200).json({data});
        } catch (error) {
            next(error);
        }
    },
    async findById(request, response, next) {
        try {
            const data = await bandeauDataMapper.findById(request.params.id);
            response.status(200).json({data});
        } catch (error) {
            next(error);
        }
    },
    async modifyBandeau(request, response, next) {
        try {
            const data = await bandeauDataMapper.modifyBandeau(request.body);
            response.status(200).json({data});
        } catch (error) {
            next(error);
        }
    },
    async addBandeau(request, response, next) {
        try {
            const data = await bandeauDataMapper.addBandeau(request.body);
            response.status(200).json({data});
        } catch (error) {
            next(error);
        }
    },
    async deleteBandeau(request, response, next) {
        try {
            const data = await bandeauDataMapper.deleteBandeau(request.params.id);
            response.status(200).json({data});
        } catch (error) {
            next(error);
        }
    },
    async toggleOnline(request, response, next) {
        try {
            const data = await bandeauDataMapper.toggleOnline(request.params);
            response.status(200).json({data});
        } catch (error) {
            next(error);
        }
    }
}