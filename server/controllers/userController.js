const bcrypt = require('bcryptjs');

module.exports = {
    editUserInfo: async (req, res) => {
        const db = req.app.get('db');
        const editType = req.param.editType;
        const { id } = req.session.user

        switch (editType) {
            case 'email':
                const { email } = req.body;
                const resultEmail = await db.auth.find_user_by_email(email);
                if (resultEmail[0]) {
                    res.status(400).send({
                        error: "Email already registered."
                    })
                };
                try {
                    await db.user.edit_email(id, email);
                    return res.status(200).send(req.session.user);
                } catch (error) {
                    return res.sendStatus(500);
                };
            case 'username':
                const { username } = req.body;
                const resultUsername = await db.auth.find_user_by_username(username);
                if (resultUsername[0]) {
                    res.status(400).send({
                        error: "Username already registered."
                    })
                };
                try {
                    await db.user.edit_username(id, email);
                    return res.status(200).send(req.session.user);
                } catch (error_) {
                    return res.sendStatus(500)
                };
            case 'password':
                const { password } = req.body;
                try {
                    const salt = bcrypt.genSalt(10);
                    const hash = bcrypt.hash(password, salt);
                    await db.user.edit_password(id, hash);
                    return res.status(200).send(req.session.user);
                } catch (error) {
                    return res.sendStatus(500);
                }
        }
    },
    deleteUser: async (req, res) => {
        const db = req.app.get('db');
        const id = req.session.user.id;

        try {
            await db.user.delete_user(id);
            req.session.destroy();
            return res.sendStatus(200);
        } catch (error) {
            return res.sendStatus(500);
        }
    }
};