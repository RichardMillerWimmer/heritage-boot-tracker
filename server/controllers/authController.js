const bcrypt = require('bcryptjs');

module.exports = {
    login: async (req, res) => {
        const db = req.app.get('db');
        const { email, password } = req.body;
        const existingUser = await db.auth.find_user_by_email(email);
        const user = existingUser[0];

        if(!user) {
            return res.status(400).send({
                error: "User not found."
            })
        };

        const isAuthenticated = bcrypt.compareSync(password, user.hash);

        if(!isAuthenticated) {
            return res.status(400).send({
                error: "User not found."
            })
        };

        req.session.user = { id: user.user_id, email: user.email, username: user.username };

        return res.status(200).send(req.session.user);

    },
    register: async (req, res) => {
        const db = req.app.get('db');
    },
    getUser: async (req, res) => {
        res.status(200).send(req.session.user);
    },
    logout: async (req, res) => {
        req.session.destroy();
        return res.sendStatus(200);
    }
}