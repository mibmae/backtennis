const articleDataMapper = require('../dataMappers/articleDataMapper');

module.exports = {
    async findAll(_, response, next) {
        try {
            const data = await articleDataMapper.findAll();
            response.status(200).json({data});
        } catch (error) {
            next(error);
        }
    },
    async findAllAdmin(_, response, next) {
        try {
            const data = await articleDataMapper.findAllAdmin();
            response.status(200).json({data});
        } catch (error) {
            next(error);
        }
    },
    async findById(request, response, next) {
        const { id } = request.params;
        try {
            const data = await articleDataMapper.findById(id);
            if (data.length === 0) {
                response.status(400).json({
                    message: 'Bad request',
                    detail: 'Invalid id'
                })
            }
            response.status(200).json({data});
        } catch (error) {
            next(error);
        }
        
    },
    
    async findBySlug(request, response, next) {
        const { slug } = request.params;
        // console.log(slug);
        try {
            const data = await articleDataMapper.findBySlug(slug);
            if (data.length === 0) {
                response.status(400).json({
                    message: 'Bad request',
                    detail: 'Invalid id'
                })
            }
           return response.status(200).json({data});
        } catch (error) {
            next(error);
        }
        
    },
    async addArticle(request, response, next) {
        const { title, content, date } = request.body;
        try {
            const data = await articleDataMapper.addArticle(title, content, date)
            if (data.length === 0) {
                response.status(400).json({
                    message: 'Bad request',
                    detail: 'Invalid id'
                })
            }
            response.status(200).json({data});
        } catch (error) {
            next(error);
        }
    },
    async delArticle(request, response, next) {
        try {
            const data = await articleDataMapper.delArticle(request.params.id)
            if (data.length === 0) {
                response.status(400).json({
                    message: 'Bad request',
                    detail: 'Invalid id'
                })
            }
            response.status(200).json({data});
        } catch (error) {
            next(error);
        }
    },
    async modifyArticle(request, response, next) {
        const { title, content, date } = request.body;
        try {
            const data = await articleDataMapper.modifyArticle(request.params.id, title, content, date)
            if (data.length === 0) {
                response.status(400).json({
                    message: 'Bad request',
                    detail: 'Invalid id'
                })
            }
            // console.log(data)
            response.status(200).json({data});
        } catch (error) {
            next(error);
        }
    },
    async modifyStatut(request, response, next) {
        try {
            const data = await articleDataMapper.modifyStatut(request.params.id, request.params.statut)
            if (data.length === 0) {
                response.status(400).json({
                    message: 'Bad request',
                    detail: 'Invalid id'
                })
            }
            // console.log(data)
            response.status(200).json({data});
        } catch (error) {
            next(error);
        }
    },
    async modifyAllStatut(request, response, next) {
        try {
            const data = await articleDataMapper.modifyAllStatus(request.params.statut)
            if (data.length === 0) {
                response.status(400).json({
                    message: 'Bad request',
                    detail: 'Invalid id'
                })
            }
            // console.log(data)
            response.status(200).json({data});
        } catch (error) {
            next(error);
        }
    },
};

