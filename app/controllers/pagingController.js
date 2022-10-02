const bandeauDataMapper = require('../dataMappers/bandeauDataMapper');

module.exports = {

    async findAll(_, response, next) {
        try {
            // const data = await bandeauDataMapper.findAll();
            response.status(200).json({
                routes:
                    {
                    id: 1,
                    path: '/admin',
                    components: {
                        top: '<Header />',
                        middle: '<Main />'
                    }
                    // code: '<Route path="/admin" exact element={<><Header /><Admin /><Footer /></>}',
                  }
                })
        } catch (error) {
            next(error);
        }
    },
    
}