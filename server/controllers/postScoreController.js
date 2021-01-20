module.exports = {
    getAllCourses: (req,res) => {
      const db = req.app.get('db')

      db.get_all_courses().then((postScore) =>{
      res.status(200).send(postScore)
        })
    }
}