const authDataMapper = require('../dataMappers/authDataMapper');
const argon2 = require('argon2');
const tokenHandler = require('../services/tokenHandler');
const client = require('../dataMappers/client');

module.exports = {

    // async signup(request, response, next) {
    //     const { name, email, password } = request.body;
    //     try {
    //         const userFound = await authDataMapper.findUserByEmail(email);
    //         if (userFound) {
    //             response.status(400).json({
    //                 message: "Registration failed",
    //                 detail: "Email already in use"
    //             });
    //         } else {
    //             const hashPassword = await argon2.hash(password);
    //             const user = await authDataMapper.createUser(name, email, hashPassword);
    //             user.token = tokenHandler.generate(user);
    //             response.status(201).json({
    //                 message: "Registration succed",
    //                 created_user: user
    //             });
    //         }
    //     } catch (error) {
    //         next(error);
    //     }        
    // },
    async testdb(request, response, next) {
        const data = await client.query(`
            SELECT * FROM articles
        `);
        // const data = [...client];
        response.status(200).json({
            message: "Bienvenue Maître",
            test: data.rows,
        })
        // return ('ok');
    },


    async signinByTokenAdmin(request, response, next) {
        const { token } = request.body;
        // console.log(token)
        // if (token !== undefined) {
        const tokenChecking = tokenHandler.verify(token);
        console.log(tokenChecking)
        if (tokenChecking === "TokenExpiredError" || tokenChecking === "JsonWebTokenError") {
        response.status(200).json({
            msg: tokenChecking,
        })
     } else {
        try {
           const user = await authDataMapper.getUserById(tokenChecking.id)
        //    console.log(user)
           if(user) {
            response.status(200).json({
                user
            })
           }
        } catch(error) {
            next(error)
        }
        
     }
    // }
 
    },

    async signin(request, response, next) {
        console.log('coucou')
        const { email, password } = request.body;

        try {
            const user = await authDataMapper.findUserByEmail(email, password);
            if(user) {
               const token = tokenHandler.generate(user);
                response.status(200).json({
                    message: "Bienvenue Maître",
                    user,
                    token: token,
                }
                );
            } else {
                response.status(404).json({
                    message: "Il y a un problème !"
                });
            }
            // if (!user) {
            //     response.status(401).json({
            //         message: "Authentication failed",
            //         detail: "Invalid email"
            //     });
            // }
            // if (await argon2.verify(user.password, password)) {
            //     user.token = tokenHandler.generate(user);
            //     response.status(200).json({
            //         message: "Authentication succed",    
            //         connected_user: user
            //     });
            // } else {
            //     response.status(401).json({
            //         message: "Authentication failed",
            //         detail: "Invalid password"
            //     });
            // }
        } catch (error) {
            next(error);
        }
    },
};