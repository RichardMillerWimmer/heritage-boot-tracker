module.exports = {
    addBoot: async (req, res) => {
        const db = req.app.get('db');
        const { id } = req.session.user;
        const { name, img, note, wears, ccs } = req.body;

        const newBoot = await db.boot.add_boot(name, img, note, wears, ccs);
        
        await db.boot.join_user_boot(newBoot.boot_id, id)

        res.status(200).send(newBoot);
    }
}