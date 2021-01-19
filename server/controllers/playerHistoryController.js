

module.exports = {
    
    getRoundsByUserId: (req,res) => {
      const db = req.app.get('db')
      const user_id = req.params.user_id

      db.get_rounds_by_user_id(user_id).then((playerhistory) =>
        res.status(200).send(playerhistory))
    },

    addRound: (req,res)=> {
      const db = req.app.get('db')
      const {user_id, course_id, date, teebox, front9score, back9score,full18score} = req.body

      db.post_score([user_id, course_id, date, teebox, front9score, back9score,full18score]).then(playerhistory => {res.status(200).send(playerhistory)
      })
      .catch((err) => {
        res.status(400).send(err)
      })
    },
    
    editRound: (req,res)=> {
      console.log(req.params)
      console.log(req.body)
      const db =req.app.get('db')
      const {user_id,round_id} = req.params
      const {full18score} = req.body

      db.edit_round_score([+user_id, +round_id, +full18score]).then((playerhistory) => {
        res.status(200).send(playerhistory)
      })
      .catch(err => {
        res.status(400).send(err)
      })
    },

    deleteRound: (req,res)=> {
      const db =req.app.get('db')
      const {user_id,round_id} = req.params

      db.delete_round([+user_id, +round_id]).then(()=> {
        res.sendstatus(200)
      })
      .catch(err => {
        res.status(400).send(err)
      })
    }
}
