


module.exports = {
    getAllRounds: (req,res) => {
      const db =req.app.get('db')

      db.get_all_rounds().then((playerHistory)=>{
          res.status(200).send(playerHistory) 
      })        
    },
    
    getRoundByID: (req,res)=>{
      const db =req.app.get('db')
    },
    
    editRound: (req,res)=> {
      const db =req.app.get('db')
    },

    deleteRound: (req,res)=> {
      const db =req.app.get('db')
    }
}