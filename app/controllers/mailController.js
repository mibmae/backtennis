const mailHandler = require('../services/mailHandler');

module.exports = {
    async sendMail(request, response, next) {
        // console.log(request.body)
        try {
            // const data = await bandeauDataMapper.findAll();
            mailHandler.sendMailContact(request.body);
            response.status(200).json({
               message: 'Mail envoyé',
                })
        } catch (error) {
            next(error);
        }
    },
}