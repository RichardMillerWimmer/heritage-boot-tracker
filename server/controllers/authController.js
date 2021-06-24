const bcrypt = require('bcryptjs');

module.exports = {
    // login: (res, req) => {
    //     const db = req.app.get('db');
    //     const {email, password} = req.body;
    //     if(email && password) {

    //     }
    },
    getUser: async (res, req) => {
        res.status(200).send(req.session.user);
    },
    logout: async (res, req) => {
        req.session.destroy();
        return res.sendStatus(200);
    }
}