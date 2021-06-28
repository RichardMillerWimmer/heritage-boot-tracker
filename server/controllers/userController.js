const bcrypt = require('bcryptjs');

module.exports = {
    editUserInfo: async (req, res) => {
        const db = req.app.get('db');
        const editType = req.param.editType;

        switch(editType) {
            case 'email': 
                const { email } = req.body;
            
            
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