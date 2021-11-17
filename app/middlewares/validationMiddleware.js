module.exports = {
    validateBody(schema) {
        const middleware = (request, _, next) => {
            const validation = schema.validate(request.body,
                { abortEarly: false });
            if (validation.error) {
                next(validation.error);
            } else {
                request.body = validation.value;
                next();
            }
        };
        return middleware;
    },
}