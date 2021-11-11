/**
 * Middleware qui gère les erreurs 404 et 500
 */

module.exports = {
    async error404(request, response) {
        response.status(404).json({
            error: {
                message: "Ressource not found",
                url: request.url,
                method: request.method
            }
        })
    },
    async error500(error, _, response, __) {
        response.status(500).json({
            error: {
                message: "Internal Server error",
                messageDetail: error.message,
                infos: error
            }
        })
    },
};