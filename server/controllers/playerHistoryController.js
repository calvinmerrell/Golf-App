

module.exports = {
    
    getRoundByPlayerId: (req,res) => {
      const player_id = req.params.player_id
      const db =req.app.get('db')

      db.get_rounds_by_player_id(player_id).then((playerhistory) =>
      res.status(200).send(playerhistory))
    },
    
    editRound: (req,res)=> {
      const db =req.app.get('db')
    },

    deleteRound: (req,res)=> {
      const db =req.app.get('db')
    }
}
