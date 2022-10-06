/**
 * Variables d'environnement
 ** JWT_SECRET='le #F0F c'est la cie !' // clé du token
 ** JWT_TIME_LIMIT='1h' // Durée de validité du token, ici 1 heure ('1d': 1 jour)
 */

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

    // verify(token) {
    //     console.log(jsonwebtoken.verify(token, secret))
    //     return jsonwebtoken.verify(token, secret);
    // },
    verify(token) {
        return jsonwebtoken.verify(token, secret, (err, decoded) => {
            if(err) {
            if(err.name) {
                // console.log(err.name)
                return(err.name)
            }
        } else { 
            // console.log(Date.now())
            // console.log(decoded.exp * 1000);
            // console.log(Date.now() > decoded.exp * 1000);
            return(decoded)
         }
            }
        );
    },
};



module.exports = secureByToken;