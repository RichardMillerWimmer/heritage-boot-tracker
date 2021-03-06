module.exports = {
    getBoots: async (req, res) => {
        const db = req.app.get('db');
        const { id } = req.session.user;

        const boots = await db.boots.get_user_boots(id);
        res.status(200).send(boots);
    },
    addBoot: async (req, res) => {
        const db = req.app.get('db');
        const { id } = req.session.user;
        const { name, img, note, wears, ccs } = req.body;

        const newBoot = await db.boot.add_boot(name, img, note, wears, ccs);
        
        await db.boot.join_user_boot(newBoot.boot_id, id)

        res.status(200).send(newBoot);
    },
    addWear: async (req, res) => {
        const db = req.app.get('db');
        const { id } = req.session.user;
        const { boot_id } = req.params;

        await db.boot.add_wear(boot_id);

        const boots = await db.boots.get_user_boots(id);
        
        res.status(200).send(boots);
    },
    addCc: async (req, res) => {
        const db = req.app.get('db');
        // const { id } = req.session.user;
        const { boot_id } = req.params;

        await db.boot.add_cc(boot_id);
        
        const boots = await db.boots.get_user_boots(id);
        
        res.status(200).send(boots);
    },

    // edtiBoot Section

    deleteBoot: async (req, res) => {
        const db = req.app.get('db');
        const { boot_id } = req.params;
        // const { id } = req.body; 
        await db.boot.delete_boot(boot_id);

        //need to add delete for join table

        // need to add get_user_boots to return to front array with boot removed
        
        res.sendStatus(200);
    }
}