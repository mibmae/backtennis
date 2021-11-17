const jsonwebtoken = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const secureByToken = {

    generate(user, limit) {

        if (!limit) limit = process.env.JWT_TIME_LIMIT;

        const token = jsonwebtoken.sign(
            {
                id: user.id
            },
            secret,
            {
                expiresIn: limit
            }
        );
        return token;
    },

    verify(token) {
        return jsonwebtoken.verify(token, secret);
    },

};

module.exports = secureByToken;