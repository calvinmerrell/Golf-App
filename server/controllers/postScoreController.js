module.exports = {
  getAllCourses: (req, res) => {
    const db = req.app.get('db')

    db.get_all_courses().then((course) => {
      res.status(200).send(course)
    })
  },

  addRound: (req, res) => {
    const db = req.app.get('db')
    const { user_id, course_id, date, teebox, front9score, back9score, full18score } = req.body

    db.post_score([user_id, course_id, date, teebox, front9score, back9score, full18score]).then(addedround => {
      res.status(200).send(addedround)
    })
      .catch((err) => {
        res.status(400).send(err)
      })
  }
}