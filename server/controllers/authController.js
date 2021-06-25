const bcrypt = require('bcryptjs');

module.exports = {
    login: async (req, res) => {
        const db = req.app.get('db');
        const { email, password } = req.body;
        
        const existingUser = await db.auth.find_user_by_email(email);
        const user = existingUser[0];
        if(!existingUser[0]) {
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
        const { email, username, password} = req.body;
        
        const resultEmail = await db.auth.find_user_by_email(email);
        if(resultEmail[0]) {
            res.status(400).send({
                error: "Email already registered."
            })
        };
        const resultUsername = await db.auth.find_user_by_username(username);
        if(resultUsername[0]) {
            res.status(400).send({
                error: "Username already registered."
            })
        };

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const newUser = await db.auth.create_user(email, username, hash);

        req.session.user = newUser[0];

        res.status(200).send(req.session.user);
    },
    getUser: async (req, res) => {
        res.status(200).send(req.session.user);
    },
    logout: async (req, res) => {
        req.session.destroy();
        return res.sendStatus(200);
    }
}