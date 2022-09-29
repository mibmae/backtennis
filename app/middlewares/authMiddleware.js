const tokenHandler = require('../services/tokenHandler');

module.exports = {

    async verifyToken(request, response, next) {
        const token = request.headers["x-access-token"];
        if (!token) {
            response.status(403).json({
                message: "Access denied",
                detail: "Token is required"
            });
        } else {
            try {
                tokenHandler.verify(token);
            } catch (error) {
                response.status(401).json({
                    message: "Access denied",
                    detail: "Invalid token"
                });
                return;
            }
        }
        next();
    },
    verifyAdmin(request, response, next) {
        const token = request.headers["x-access-token"];
        if (!token) {
            response.status(403).json({
                message: "Access denied",
                detail: "Token is required"
            });
        } else {
            try {
                tokenHandler.verify(token);
            } catch (error) {
                response.status(401).json({
                    message: "Access denied",
                    detail: "Invalid token"
                });
                return;
            }
        }
        next();
    },


};