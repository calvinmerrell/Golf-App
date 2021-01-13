module.exports = {
    getAllMembers: (req,res) => {
      const db = req.app.get('db')

      db.get_all_members().then((members) =>{
      res.status(200).send(members)
        })
    }
}